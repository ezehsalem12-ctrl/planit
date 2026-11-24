export interface Event {
  _id: string;
  title: string;
  slug?: string;
  description: string;
  category: string;
  banner: string | null;
  image?: {
    url: string;
    public_id: string;
  };
  venue: string;
  address: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  capacity: number;
  ticketPrice: number;
  isFree: boolean;
  registrationsCount: number;
  status: "draft" | "published" | "cancelled" | "completed";
  organizer: {
    _id: string;
    name: string;
    avatar: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

export interface EventPagination {
  currentPage: number;
  totalPages: number;
  totalEvents: number;
  limit: number;
}

export interface EventsResponse {
  events: Event[];
  pagination: EventPagination;
}
