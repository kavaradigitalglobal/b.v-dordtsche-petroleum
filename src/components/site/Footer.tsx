import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { company, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-surface pt-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="rounded-lg bg-navy px-6 py-12 text-navy-foreground sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="B.V Dordtsche Petroleum Maatschappij logo"
                  width={220}
                  height={124}
                  loading="lazy"
                  className="h-14 w-auto rounded-md bg-white/95 p-2"
                />
              </div>
              <h4 className="mt-8 text-sm tracking-widest">Office</h4>
              <p className="mt-2 max-w-xs text-sm opacity-70">{company.address}</p>
              <h4 className="mt-6 text-sm tracking-widest">Support</h4>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-block text-sm opacity-70 hover:text-primary"
              >
                {company.email}
              </a>
            </div>

            <div>
              <h4 className="text-sm tracking-widest rule-accent">Our Products</h4>
              <ul className="mt-6 space-y-2.5 text-sm opacity-70">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="hover:text-primary"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-widest rule-accent">Quick Links</h4>
              <ul className="mt-6 space-y-2.5 text-sm opacity-70">
                <li>
                  <Link to="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>KvK {company.kvk}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-widest rule-accent">Request An Offer</h4>
              <p className="mt-6 text-sm opacity-70">
                A financial statement from the buyer&apos;s bank is required before negotiations are
                opened. Direct end buyers, representatives and mandates only.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-sm font-bold uppercase">Write To Us</span>
                  <a href={`mailto:${company.email}`} className="text-xs opacity-70">
                    {company.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="py-6 text-center text-xs text-muted-foreground">
        Copyright © {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  );
}
