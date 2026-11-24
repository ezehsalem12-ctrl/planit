import { Link, NavLink } from "react-router-dom";
import { CalendarDays } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <CalendarDays size={28} className="text-indigo-600" />
          <span className="text-2xl font-bold text-slate-900">PlanIt</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Home
          </NavLink>

          <a
            href="#events"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Explore Events
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden text-sm font-semibold text-slate-700 hover:text-indigo-600 sm:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Create Event
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
