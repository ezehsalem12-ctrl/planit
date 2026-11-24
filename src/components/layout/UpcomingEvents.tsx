import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { getEvents } from "../../services/eventService";
import type { Event } from "../../types/event";

function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getEvents({ page, limit: 6 });

        setEvents(data.events);
        setTotalPages(data.pagination.totalPages);
      } catch {
        setError("Unable to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="events" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-semibold text-indigo-600">
              FIND YOUR NEXT EXPERIENCE
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore Events
            </h2>

            <p className="mt-3 text-gray-600">
              Discover events happening around you.
            </p>
          </div>

          <Link
            to="/events"
            className="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View all events <ArrowRight size={18} />
          </Link>
        </div>

        {loading && (
          <p className="py-12 text-center text-gray-500">Loading events...</p>
        )}

        {!loading && error && (
          <p className="py-12 text-center text-red-600">{error}</p>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No events available at the moment.
          </p>
        )}

        {!loading && !error && events.length > 0 && (
          <>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event._id}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 bg-indigo-100">
                    {event.image?.url || event.banner ? (
                      <img
                        src={event.image?.url || event.banner || ""}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-indigo-400">
                        <CalendarDays size={55} />
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-indigo-700 shadow">
                      {event.status}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-sm font-medium text-indigo-600">
                      {event.category}
                    </p>

                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>

                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={16} />
                      {formatDate(event.startDate)}
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="font-semibold text-gray-900">
                        {event.isFree
                          ? "Free"
                          : `₦${event.ticketPrice.toLocaleString()}`}
                      </span>

                      <Link
                        to={`/events/${event._id}`}
                        className="font-semibold text-indigo-600 hover:text-indigo-800"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage((current) => current - 1)}
                  disabled={page === 1}
                  className="rounded-lg border px-4 py-2 font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={() => setPage((current) => current + 1)}
                  disabled={page === totalPages}
                  className="rounded-lg border px-4 py-2 font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default UpcomingEvents;
