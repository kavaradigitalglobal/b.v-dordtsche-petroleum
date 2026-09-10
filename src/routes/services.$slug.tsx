import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Users, Wrench } from "lucide-react";
import engineer from "@/assets/engineer.jpg";
import pipes from "@/assets/pipes.jpg";
import refineryTower from "@/assets/refinery-tower.jpg";
import tankers from "@/assets/tankers.jpg";
import { AnimatedProgress, AnimatedStat } from "@/components/site/AnimatedStat";
import { PageHero } from "@/components/site/PageHero";
import { OG_IMAGE, services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} | FOB Supply — Dordtsche Petroleum` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.name} | FOB Supply — Dordtsche Petroleum` },
        { property: "og:description", content: service.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

const specIcons = [Users, Wrench, CalendarDays, MapPin];

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <main>
      <PageHero title="Service Details" crumb={service.name} image={pipes} />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl rule-accent">{service.name}</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
            <dl className="mt-8 divide-y divide-border">
              {service.specs.map((spec, i) => {
                const Icon = specIcons[i % specIcons.length] ?? Users;
                return (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em]">
                      <Icon className="size-4 text-primary" aria-hidden />
                      {spec.label}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{spec.value}</dd>
                  </div>
                );
              })}
            </dl>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Request This Grade
            </Link>
          </div>
          <div className="grid grid-cols-2 items-end gap-4">
            <img
              src={engineer}
              alt="Engineer checking product quality"
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <img
              src={refineryTower}
              alt="Refinery processing unit"
              loading="lazy"
              width={900}
              height={1200}
              className="h-[26rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-3xl">Product Description</h2>
          <span className="mx-auto mt-5 block h-[3px] w-12 bg-primary" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {service.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {service.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-3xl font-bold text-primary">
                      <AnimatedStat value={m.value} suffix="%" />
                    </p>
                    <h3 className="mt-2 text-sm">{m.label}</h3>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-border">
                      <AnimatedProgress
                        value={m.value}
                        className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={tankers}
              alt="Tanker trucks loading refined product"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-2xl rule-accent">Other products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-lg bg-surface p-7 transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                <h3 className="text-lg">{s.name}</h3>
                <p className="mt-2 text-sm opacity-75">{s.short}</p>
                <span className="mt-4 link-more group-hover:text-current">
                  Read More <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

function ServiceNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-28 text-center">
      <h1 className="text-3xl">Product not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        That grade isn&apos;t in our current offer. See the full product list instead.
      </p>
      <Link to="/services" className="btn-base btn-primary mt-8">
        All Products
      </Link>
    </main>
  );
}
