import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Users } from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <CalendarDays size={16} />
            Events made simple
          </span>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Discover Events.
            <span className="block text-indigo-400">Create Experiences.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Find exciting events around you, secure your tickets, and bring
            people together. Planning your next event starts here.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Events
              <ArrowRight size={18} />
            </a>

            <Link
              to="/register"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Become an Organiser
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Users className="text-indigo-400" size={24} />
              <span className="text-sm text-slate-300">
                Connect with people
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-indigo-400" size={24} />
              <span className="text-sm text-slate-300">
                Manage events easily
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-indigo-600/20 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">
                Your next experience
              </span>
              <CalendarDays className="text-indigo-400" size={24} />
            </div>

            <div className="mt-8 rounded-2xl bg-linear-to-br from-indigo-600 to-violet-700 p-8">
              <span className="text-sm font-medium text-indigo-100">
                MAKE IT MEMORABLE
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Every Event Has a Story.
              </h2>

              <p className="mt-3 text-sm leading-6 text-indigo-100">
                Discover new experiences and create moments worth remembering.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">PlanIt</p>
                <p className="text-sm text-slate-400">
                  Your event starts here.
                </p>
              </div>

              <div className="rounded-full bg-indigo-500/10 p-3">
                <ArrowRight className="text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
