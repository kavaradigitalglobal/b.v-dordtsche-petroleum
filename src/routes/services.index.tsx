import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets } from "lucide-react";
import pipes from "@/assets/pipes.jpg";
import refineryWide from "@/assets/refinery-wide.jpg";
import { AnimatedStat } from "@/components/site/AnimatedStat";
import { PageHero } from "@/components/site/PageHero";
import { company, services, stats } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Refined Products & Services — Dordtsche Petroleum" },
      {
        name: "description",
        content:
          "D2 gas oil, ULSD 10/15 PPM, biodiesel B100, residual fuel oil, AVGAS, JET A-1 kerosene and marine diesel oil supplied on FOB terms.",
      },
      { property: "og:title", content: "Refined Products & Services — Dordtsche Petroleum" },
      {
        property: "og:description",
        content: "Seven refined grades available on contract and immediate trial shipment.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const tone = (i: number) => {
  if (i % 5 === 0) return "bg-navy text-navy-foreground hover:bg-primary";
  if (i % 5 === 2) return "bg-primary text-primary-foreground hover:bg-navy hover:text-navy-foreground";
  return "bg-surface hover:bg-navy hover:text-navy-foreground";
};

function Services() {
  return (
    <main>
      <PageHero title="Services" crumb="Services" image={pipes} />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="kicker">Our services</p>
            <h2 className="mt-3 text-3xl rule-accent">Refined products we offer</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Availability is confirmed on both contract and immediate trial shipment delivery under
              FOB terms. Each grade below carries its own specification sheet and inspection record.
            </p>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Request A Quote
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className={`group rounded-lg p-7 transition-colors ${tone(i)}`}
              >
                <Droplets className="size-8 text-primary group-hover:text-current" aria-hidden />
                <h3 className="mt-5 text-lg">{s.name}</h3>
                <p className="mt-2 text-sm opacity-75">{s.short}</p>
                <span className="mt-4 link-more group-hover:text-current">
                  Learn More <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:border-r lg:border-border lg:last:border-0">
              <p className="font-display text-4xl font-bold">
                <AnimatedStat value={s.value} suffix="+" className="[&>span]:contents" />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <img
          src={refineryWide}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={900}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="relative">

          <div className="mx-auto max-w-3xl px-5 py-20 text-center text-navy-foreground">
            <p className="kicker">Why choose us</p>
            <h2 className="mt-3 text-3xl">Supply that clears inspection</h2>
            <p className="mt-5 text-sm opacity-80">
              {company.name} guarantees that supplied product meets the stated specification and
              passes the stringent requirement of SGS or an equivalent inspector before it leaves the
              load port.
            </p>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Contact The Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
