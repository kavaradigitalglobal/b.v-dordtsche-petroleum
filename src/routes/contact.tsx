import { createFileRoute } from "@tanstack/react-router";
import { Building2, Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import pipes from "@/assets/pipes.jpg";
import { PageHero } from "@/components/site/PageHero";
import { company, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dordtsche Petroleum Maatschappij" },
      {
        name: "description",
        content:
          "Contact our trading desk in The Hague at Carel Van Bylandtlaan 30 to request a soft corporate offer for refined petroleum products.",
      },
      { property: "og:title", content: "Contact — Dordtsche Petroleum Maatschappij" },
      {
        property: "og:description",
        content: "Send your product, volume and destination port to receive a soft corporate offer.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero title="Contact" crumb="Contact" image={pipes} />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <p className="kicker">Get in touch</p>
          <h2 className="mt-3 text-3xl">Don&apos;t hesitate to contact us</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Enquiries are answered in writing. Please state the product, grade, volume, destination
            port and the delivery basis you require.
          </p>
        </div>

        <div className="mt-12 grid gap-0 md:grid-cols-3">
          <div className="rounded-lg bg-surface p-8">
            <MapPin className="size-7 text-primary" aria-hidden />
            <h3 className="mt-5 text-lg">Our Office</h3>
            <p className="mt-2 text-sm text-muted-foreground">{company.address}</p>
          </div>
          <div className="rounded-lg bg-navy p-8 text-navy-foreground">
            <Building2 className="size-7 text-primary" aria-hidden />
            <h3 className="mt-5 text-lg">Registration</h3>
            <p className="mt-2 text-sm opacity-75">KvK {company.kvk}</p>
            <p className="mt-1 text-sm opacity-75">{company.name}</p>
          </div>
          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <Mail className="size-7" aria-hidden />
            <h3 className="mt-5 text-lg">Our Email</h3>
            <a href={`mailto:${company.email}`} className="mt-2 block text-sm underline">
              {company.email}
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-surface p-8">
            <h3 className="text-lg rule-accent">Trading Desk</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {company.address}
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {company.hours}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {company.email}
              </li>
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="text-sm">Before You Write</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                A financial statement from your bank clarifying financial capability is required to
                consider negotiations. Only direct end buyers, representatives and mandates are
                considered.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border p-8">
            <p className="kicker">Let&apos;s talk</p>
            <h3 className="mt-3 text-2xl">Leave a message</h3>
            {sent ? (
              <div className="mt-8 rounded-lg bg-surface p-6">
                <h4 className="text-base">Thank you</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your details are ready to send. Please email {company.email} with the same
                  information so our desk can log your enquiry.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Full name" />
                  <Field label="Company" name="company" placeholder="Company name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Destination Port" name="port" placeholder="Port of delivery" />
                </div>
                <label className="block">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                    Product
                  </span>
                  <select
                    name="product"
                    required
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Volume, delivery basis and timing"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="btn-base btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.14em]">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
