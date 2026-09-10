import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ClipboardList, Droplets, Factory, Ship } from "lucide-react";
import heroRig from "@/assets/hero-rig.jpg";
import refineryTower from "@/assets/refinery-tower.jpg";
import refineryWide from "@/assets/refinery-wide.jpg";
import tankers from "@/assets/tankers.jpg";
import { AnimatedProgress, AnimatedStat } from "@/components/site/AnimatedStat";
import { company, services, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dordtsche Petroleum Maatschappij — Refined Product Supply" },
      {
        name: "description",
        content:
          "B.V Dordtsche Petroleum Maatschappij supplies D2 gas oil, ULSD, biodiesel, RFO, AVGAS, jet fuel and MDO on FOB terms, inspected by SGS or equivalent.",
      },
      { property: "og:title", content: "Dordtsche Petroleum Maatschappij — Refined Product Supply" },
      {
        property: "og:description",
        content:
          "Contract volumes and immediate trial shipments of refined petroleum products, supplied from The Hague on FOB terms.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const expertise = [
  { label: "Specification compliance", value: 98 },
  { label: "Independent inspection", value: 100 },
  { label: "Contract fulfilment", value: 94 },
  { label: "Trial shipment turnaround", value: 87 },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Send Your Enquiry",
    text: "Tell us the product, grade, volume and destination port you need supplied.",
  },
  {
    icon: CheckCircle2,
    title: "Provide Bank Comfort",
    text: "A financial statement from your bank confirms capability so negotiations can open.",
  },
  {
    icon: Factory,
    title: "Receive The Offer",
    text: "We issue a soft corporate offer with specification, price and FOB delivery terms.",
  },
  {
    icon: Ship,
    title: "Lift The Cargo",
    text: "Quality and quantity are certified by SGS or equivalent at the load port.",
  },
];

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroRig}
          alt="Offshore oil platform at dusk"
          className="h-[34rem] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-3xl px-5 text-center text-navy-foreground">
            <p className="kicker">We build the best</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              Reliable supply of refined petroleum products
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm opacity-80">
              {company.name} confirms availability of refined product on both contract and immediate
              trial shipment, delivered under FOB terms and guaranteed to pass SGS or equivalent
              inspection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/services" className="btn-base btn-primary">
                Our Products
              </Link>
              <Link to="/contact" className="btn-base btn-outline-light">
                Request An Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two overlapping cards */}
      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-5">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-lg bg-background p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] sm:p-10">
            <h2 className="text-xl rule-accent">How can we help you?</h2>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Contract term supply",
                "Immediate trial shipments",
                "FOB delivery terms",
                "SGS or equivalent inspection",
                "Direct end buyers & mandates",
                "Full batch documentation",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </p>
              ))}
            </div>
            <Link to="/services" className="mt-8 link-more">
              Explore Products <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="rounded-lg bg-navy p-8 text-navy-foreground sm:p-10">
            <h2 className="text-xl">Request for a quote</h2>
            <p className="mt-4 text-sm opacity-75">
              Send the product, volume and destination port. Our desk responds with a soft corporate
              offer.
            </p>
            <Link to="/contact" className="btn-base btn-primary mt-6 w-full">
              Contact The Desk
            </Link>
            <p className="mt-4 text-xs opacity-60">{company.email}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="kicker">About company</p>
            <h2 className="mt-3 text-3xl rule-accent">
              A Dutch petroleum house built on delivered cargoes
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Operating from Carel Van Bylandtlaan in The Hague, we hold allocation across seven
              refined grades and issue soft corporate offers directly to end buyers, their appointed
              representatives and mandates.
            </p>
            <div className="mt-8 flex items-start gap-6">
              <div>
                <p className="font-display text-4xl font-bold text-primary">
                  <AnimatedStat value={7} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Refined grades
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base">Our Standard</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Every parcel passes the stringent requirement of SGS or an equivalent independent
                  inspector before release.
                </p>
              </div>
            </div>
            <Link to="/about" className="btn-base btn-primary mt-8">
              Read More
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-surface p-7">
              <Droplets className="size-8 text-primary" aria-hidden />
              <h3 className="mt-5 text-lg">Product Expertise</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Middle distillates, residuals and aviation grades handled by one desk.
              </p>
              <Link to="/services" className="mt-4 link-more">
                Learn More <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="row-span-2 overflow-hidden rounded-lg">
              <img
                src={refineryTower}
                alt="Refinery distillation tower"
                loading="lazy"
                width={900}
                height={1200}
                className="size-full object-cover"
              />
            </div>
            <div className="rounded-lg bg-navy p-7 text-navy-foreground">
              <Factory className="size-8 text-primary" aria-hidden />
              <h3 className="mt-5 text-lg">Inspection Discipline</h3>
              <p className="mt-2 text-sm opacity-75">
                Quality and quantity certified at load port on every lifting.
              </p>
              <Link to="/about" className="mt-4 link-more">
                Learn More <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global industries band */}
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
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-5 py-16 text-navy-foreground">

            <div className="text-center">
              <p className="kicker">Why choose us</p>
              <h2 className="mt-3 text-3xl">Experience trading with global markets</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm opacity-75">
                Only direct negotiations from end buyers, representatives and mandates are
                considered, which keeps every cargo traceable from refinery to receiving terminal.
              </p>
            </div>
            <div className="mt-10 grid gap-0 lg:grid-cols-[1fr_1.6fr]">
              <div className="rounded-lg bg-navy p-8">
                <h3 className="text-lg">Always ready to serve</h3>
                <p className="mt-3 text-sm opacity-75">
                  Our desk operates on Central European hours and answers enquiries in writing.
                </p>
                <Link to="/contact" className="btn-base btn-primary mt-6">
                  Contact Us
                </Link>
                <ul className="mt-6 space-y-2 text-sm opacity-75">
                  <li>{company.address}</li>
                  <li>{company.hours}</li>
                  <li>{company.email}</li>
                </ul>
              </div>
              <div className="rounded-lg bg-background p-8 text-foreground">
                <h3 className="text-lg">This is our expertise</h3>
                <div className="mt-6 space-y-5">
                  {expertise.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-end justify-between">
                        <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                          {item.label}
                        </span>
                        <AnimatedStat
                          value={item.value}
                          suffix="%"
                          className="font-display text-xs font-bold"
                        />
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-muted">
                        <AnimatedProgress
                          value={item.value}
                          className="h-full bg-primary transition-[width] duration-1000 ease-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="kicker">Our products</p>
            <h2 className="mt-3 text-3xl rule-accent">Refined products we offer</h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Seven grades, available on contract and immediate trial shipment under FOB terms.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 5).map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className={`group rounded-lg p-7 transition-colors ${
                  i === 0 || i === 3
                    ? "bg-navy text-navy-foreground hover:bg-primary"
                    : i === 2
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface hover:bg-navy hover:text-navy-foreground"
                }`}
              >
                <Droplets className="size-8 text-primary group-hover:text-current" aria-hidden />
                <h3 className="mt-5 text-lg">{s.name}</h3>
                <p className="mt-2 text-sm opacity-75">{s.short}</p>
                <span className="mt-4 link-more group-hover:text-current">
                  Learn More <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
            <Link
              to="/services"
              className="flex flex-col justify-end rounded-lg bg-navy-deep p-7 text-navy-foreground"
            >
              <h3 className="text-lg">Explore all products</h3>
              <span className="btn-base btn-primary mt-5">All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:border-r lg:border-border lg:last:border-0">
              <p className="font-display text-4xl font-bold">
                <AnimatedStat value={s.value} suffix="+" suffixClassName="text-primary" />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div className="relative border-l-[10px] border-primary pl-6">
            <img
              src={tankers}
              alt="Fuel tankers loading at a depot"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
            <div className="rounded-lg bg-primary p-7 text-primary-foreground">
              <p className="font-display text-lg font-bold uppercase leading-snug">
                Let&apos;s talk about the cargo you need moved
              </p>
              <Link to="/contact" className="mt-4 link-more text-primary-foreground">
                Get In Touch <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div>
            <p className="kicker">How we work</p>
            <h2 className="mt-3 text-3xl rule-accent">A secure procedure for every buyer</h2>
            <div className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${
                      i % 2 === 0 ? "bg-navy text-navy-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft corporate offer */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="kicker">General soft corporate offer</p>
        <h2 className="mt-3 text-3xl">Terms of our standing offer</h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          The management of {company.name} hereby issues its official soft corporate offer and
          confirms availability of the listed commodities on both contract and immediate trial
          shipment under FOB delivery terms. Supply is guaranteed to meet specification and to pass
          the stringent requirement of SGS or equivalent. A financial statement from the
          buyer&apos;s bank clarifying financial capability is required before negotiations are
          considered. Only direct negotiations from end buyers, representatives and mandates will be
          considered.
        </p>
        <Link to="/contact" className="btn-base btn-primary mt-8">
          Request The Offer
        </Link>
      </section>
    </main>
  );
}
