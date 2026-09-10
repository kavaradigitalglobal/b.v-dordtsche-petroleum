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
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary" }}
                      className="font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="ml-1 p-1 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ChevronDown
                        className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-64 border border-border bg-background shadow-lg">
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

        {open && (
          <nav className="border-t border-border lg:hidden">
            {nav.map((item) =>
              item.hasDropdown ? (
                <div key={item.to} className="border-b border-border">
                  <div className="flex items-center justify-between px-5 py-3">
                    <Link
                      to={item.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary" }}
                      className="font-display text-sm font-semibold uppercase tracking-[0.14em]"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services submenu"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-1 text-muted-foreground"
                    >
                      <ChevronDown
                        className={`size-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="bg-muted pb-2">
                      <Link
                        to="/services"
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block px-5 py-2 text-sm font-semibold text-foreground hover:text-primary"
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block px-5 py-2 text-sm text-muted-foreground hover:text-primary"
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
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em]"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 px-5 py-3 text-sm text-muted-foreground"
            >
              <Mail className="size-4" aria-hidden /> {company.email}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
