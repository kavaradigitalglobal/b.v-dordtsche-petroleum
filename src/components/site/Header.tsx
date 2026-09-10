import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Linkedin, Mail, Menu, Phone, Twitter, X } from "lucide-react";
import { useState } from "react";
import { company, services } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home", hasDropdown: false },
  { to: "/about", label: "About", hasDropdown: false },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/contact", label: "Contact", hasDropdown: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header>
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-xs">
          <p className="opacity-80">
            Refined petroleum supply on <span className="text-primary">FOB terms worldwide</span>
          </p>
          <div className="flex items-center gap-4 opacity-80">
            <span className="hidden sm:inline">KvK {company.kvk}</span>
            <Facebook className="size-3.5" aria-hidden />
            <Twitter className="size-3.5" aria-hidden />
            <Linkedin className="size-3.5" aria-hidden />
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-primary">
              <span className="block size-4 rounded-full border-[3px] border-primary-foreground" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold uppercase tracking-wide">
                Dordtsche
              </span>
              <span className="block font-display text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                Petroleum Maatschappij
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.to}
                  className="relative"
                >
                  <button
                    type="button"
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-lg border border-border bg-background shadow-lg">
                      <Link
                        to="/services"
                        className="block border-b border-border px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-muted hover:text-primary"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <span className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
              <Phone className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold uppercase">Enquiries</span>
              <a
                href={`mailto:${company.email}`}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                {company.email}
              </a>
            </span>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center bg-navy text-navy-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy-deep/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          className={`absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col overflow-y-auto rounded-r-2xl bg-navy text-navy-foreground shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-xs uppercase tracking-[0.24em] text-primary">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center rounded-full bg-navy-deep text-navy-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-6 text-center">
            {nav.map((item, i) =>
              item.hasDropdown ? (
                <div
                  key={item.to}
                  className="w-full transition-all duration-500"
                  style={{
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <button
                    type="button"
                    aria-label="Toggle services submenu"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="mx-auto flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-3xl font-bold uppercase tracking-wide transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-6 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="mt-2 flex flex-col items-center gap-1 rounded-2xl bg-navy-deep/70 py-4">
                        <Link
                          to="/services"
                          onClick={closeAll}
                          className="rounded-full px-4 py-2 font-display text-base font-semibold uppercase tracking-[0.12em] text-primary"
                        >
                          All Services
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            onClick={closeAll}
                            className="rounded-full px-4 py-2 text-base opacity-80 transition-colors hover:text-primary hover:opacity-100"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeAll}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="rounded-full px-6 py-3 font-display text-3xl font-bold uppercase tracking-wide transition-colors hover:text-primary"
                  style={{
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                    transitionProperty: "opacity, transform, color",
                    transitionDuration: "500ms",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="border-t border-navy-foreground/15 px-6 py-6 text-center">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Mail className="size-4" aria-hidden /> {company.email}
            </a>
            <p className="mt-4 text-xs opacity-60">KvK {company.kvk}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
