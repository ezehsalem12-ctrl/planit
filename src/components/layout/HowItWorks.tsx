import { CalendarPlus, Ticket, QrCode } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarPlus,
    title: "Discover Events",
    description:
      "Explore upcoming events and find experiences that interest you.",
  },
  {
    number: "02",
    icon: Ticket,
    title: "Register for Events",
    description:
      "Choose an event, provide your details, and secure your place.",
  },
  {
    number: "03",
    icon: QrCode,
    title: "Get Your Ticket",
    description:
      "Receive your digital ticket with a QR code for easy event check-in.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Simple process
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            How PlanIt Works
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From discovering an event to walking through the door, PlanIt makes
            everything straightforward.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon size={30} />
                </div>

                <p className="mt-6 text-sm font-bold text-indigo-600">
                  STEP {step.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
