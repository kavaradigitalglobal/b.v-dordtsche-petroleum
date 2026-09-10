import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import engineer from "@/assets/engineer.jpg";
import pipes from "@/assets/pipes.jpg";
import refineryTower from "@/assets/refinery-tower.jpg";
import refineryWide from "@/assets/refinery-wide.jpg";
import { AnimatedStat } from "@/components/site/AnimatedStat";
import { PageHero } from "@/components/site/PageHero";
import { OG_IMAGE, company, stats } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dordtsche Petroleum Maatschappij, The Hague" },
      {
        name: "description",
        content:
          "A Dutch petroleum supply house in The Hague (KvK 27002689) trading seven refined grades on contract terms and immediate trial shipments, FOB worldwide.",
      },
      { property: "og:title", content: "About Us | Dordtsche Petroleum Maatschappij, The Hague" },
      {
        property: "og:description",
        content:
          "Who we are: a Dutch petroleum supply house trading seven refined grades on contract and trial shipment, inspected by SGS or equivalent.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const faqs = [
  {
    q: "What delivery terms do you supply on?",
    a: "All listed commodities are offered under FOB terms, on either a contract basis or an immediate trial shipment.",
  },
  {
    q: "How is quality verified?",
    a: "Every parcel is guaranteed to meet specification and to pass the stringent requirement of SGS or an equivalent independent inspector at the load port.",
  },
  {
    q: "What do you need before negotiations open?",
    a: "A financial statement from the buyer's bank clarifying the buyer's financial capability is required before we consider negotiations.",
  },
  {
    q: "Who can negotiate with you?",
    a: "Only direct negotiations from end buyers, appointed representatives and mandates will be considered.",
  },
];

function About() {
  return (
    <main>
      <PageHero title="About" crumb="About" image={pipes} />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="kicker">About company</p>
            <h2 className="mt-3 text-3xl rule-accent">
              Petroleum supply managed from The Hague
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {company.name} is registered in the Netherlands under KvK {company.kvk} and operates
              from Carel Van Bylandtlaan 30. Our desk issues soft corporate offers, arranges
              independent inspection and coordinates lifting windows with the buyer&apos;s nominated
              terminal or vessel.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We keep the chain short. Buyers deal with the people who hold the allocation, which
              means specification questions, documentation and scheduling are answered by one team.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface p-6">
                <h3 className="text-base">Our History</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A Dutch petroleum name with roots in the earliest days of the trade.
                </p>
              </div>
              <div className="rounded-lg bg-navy p-6 text-navy-foreground">
                <h3 className="text-base">Our Standard</h3>
                <p className="mt-2 text-sm opacity-75">
                  SGS or equivalent inspection on every cargo, without exception.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Talk To Us
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={refineryTower}
              alt="Distillation tower at a refinery"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full object-cover sm:col-span-2"
            />
            <img
              src={engineer}
              alt="Engineer inspecting refinery equipment"
              loading="lazy"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center rounded-lg bg-primary p-7 text-primary-foreground">
              <p className="font-display text-4xl font-bold">
                <AnimatedStat value={98} suffix="%" />
              </p>
              <p className="mt-2 text-sm">
                of shipments cleared inspection on the first sampling round.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border-l-[10px] border-primary pl-6">
            <img
              src={refineryWide}
              alt="Refinery complex with storage tanks"
              loading="lazy"
              width={1920}
              height={900}
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="mt-3 text-3xl rule-accent">General questions</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-sm font-semibold uppercase tracking-[0.08em]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 text-navy-foreground lg:grid-cols-2">
          <div>
            <p className="kicker">Why choose us</p>
            <h2 className="mt-3 text-3xl">Handled properly, cargo after cargo</h2>
            <p className="mt-5 text-sm opacity-75">
              From nomination through to the bill of lading, each step is documented so that the
              buyer&apos;s bank, inspector and receiving terminal are working from the same record.
            </p>
            <Link to="/services" className="btn-base btn-primary mt-8">
              View Products
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg bg-navy-deep p-7">
              <p className="font-display text-3xl font-bold text-primary">
                <AnimatedStat value={100} suffix="%" />
              </p>
              <h3 className="mt-2 text-base">Inspected Cargoes</h3>
              <p className="mt-2 text-sm opacity-70">SGS or equivalent at load port.</p>
            </div>
            <div className="rounded-lg bg-navy-deep p-7">
              <p className="font-display text-3xl font-bold text-primary">
                <AnimatedStat value={94} suffix="%" />
              </p>
              <h3 className="mt-2 text-base">Contract Fulfilment</h3>
              <p className="mt-2 text-sm opacity-70">Volumes delivered inside the window.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
