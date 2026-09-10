import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  crumb,
  image,
}: {
  title: string;
  crumb: string;
  image: string;
}) {
  return (
    <section className="relative">
      <div className="h-56 w-full overflow-hidden sm:h-72">
        <img
          src={image}
          alt=""
          aria-hidden
          className="size-full object-cover"
          width={1920}
          height={700}
        />
      </div>
      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-5">
        <div className="mx-auto w-full max-w-md rounded-lg bg-navy px-8 py-10 text-center text-navy-foreground">
          <p className="flex items-center justify-center gap-2 text-xs">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3 text-primary" aria-hidden />
            <span className="opacity-70">{crumb}</span>
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl">{title}</h1>
          <span className="mx-auto mt-5 block h-[3px] w-12 bg-primary" />
        </div>
      </div>
    </section>
  );
}
