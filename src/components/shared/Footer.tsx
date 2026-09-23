/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { productPaths } from "@/features/products";

const COLLECTION_LINKS = [
  "La Maison",
  "Private Reserve",
  "Scented Candles",
  "Discovery Sets",
];

const CARE_LINKS = [
  "Olfactory Consultation",
  "Shipping & Returns",
  "Atelier Appointments",
  "Care Guide",
];

const ABOUT_LINKS = [
  "Our Philosophy",
  "Sourcing Standards",
  "Sustainability Commitments",
  "Journal",
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="flex w-full flex-col items-start gap-5 sm:w-[180px]">
      <p className="text-[12px] font-bold uppercase whitespace-nowrap text-[#c5a880]">
        {title}
      </p>
      {links.map((label) => (
        <Link
          key={label}
          href={productPaths.list}
          className="w-full text-[13px] font-normal text-white opacity-70 hover:opacity-100"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-start gap-12 bg-[#1a1a1a] px-4 pt-16 pb-10 sm:px-6 md:gap-16 md:px-10 lg:px-20 lg:pt-20 lg:pb-10">
      <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row">
        <div className="flex w-full max-w-[400px] flex-col items-start gap-6">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[32px] tracking-[0.18em] whitespace-nowrap text-white sm:text-[40px]">
            O D O R A T U S
          </p>
          <p className="w-full text-[14px] leading-[1.6] font-normal text-[#f2ede4] opacity-80">
            An independent olfactory house cultivating slow-luxury liquid
            narratives. Every bottle is hand-poured in small batches using
            sustainably sourced botanicals.
          </p>
          <div className="flex items-start gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-start rounded-full bg-white/10 p-2"
            >
              <img src="/icons/instagram.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex items-start rounded-full bg-white/10 p-2"
            >
              <img src="/icons/circle-x.svg" alt="" width={16} height={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-start rounded-full bg-white/10 p-2"
            >
              <img src="/icons/facebook.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-start gap-10 sm:gap-20 lg:w-auto">
          <FooterColumn title="Collections" links={COLLECTION_LINKS} />
          <FooterColumn title="Customer Care" links={CARE_LINKS} />
          <FooterColumn title="About Us" links={ABOUT_LINKS} />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <div className="h-px w-full bg-white/[0.13]" />
        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[12px] font-normal whitespace-nowrap text-white opacity-50">
            © 2026 Odoratus. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-normal uppercase whitespace-nowrap text-white opacity-40">
              Secured checkout via
            </p>
            {["visa", "mastercard", "amex"].map((label) => (
              <span
                key={label}
                className="rounded border border-solid border-white/[0.13] px-2 py-1 text-[9px] font-semibold uppercase text-white opacity-60"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
