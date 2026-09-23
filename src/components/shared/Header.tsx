/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useCart } from "@/features/cart";
import { cartPaths } from "@/features/cart";
import { productPaths } from "@/features/products";

export function Header() {
  const { quantity } = useCart();

  return (
    <header className="bg-[#faf8f5]">
      <div className="flex w-full items-start justify-center bg-[#1a1a1a] py-3">
        <p className="text-[11px] font-semibold uppercase whitespace-nowrap text-white">
          Complimentary signature gift wrapping on all orders above $150
        </p>
      </div>
      <div className="relative flex h-[90px] w-full items-center justify-between border-b border-solid border-[#ebe6de] px-4 sm:px-6 md:px-10 lg:px-20">
        <nav className="hidden items-center gap-10 text-[13px] uppercase lg:flex">
          <Link
            href={productPaths.list}
            className="font-semibold text-[#1a1a1a]"
          >
            Home
          </Link>
          <Link
            href={productPaths.list}
            className="font-medium text-[#605a54]"
          >
            Shop
          </Link>
          <Link
            href={productPaths.list}
            className="font-medium text-[#605a54]"
          >
            Categories
          </Link>
          <Link
            href={productPaths.list}
            className="font-medium text-[#605a54]"
          >
            The Atelier
          </Link>
        </nav>

        <Link
          href={productPaths.list}
          className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-instrument-serif)] text-[28px] tracking-[0.18em] text-[#1a1a1a] sm:text-[32px] lg:text-[38px]"
        >
          O D O R A T U S
        </Link>

        <div className="ml-auto flex items-center gap-4 sm:gap-8 lg:gap-8">
          <div className="hidden w-[200px] items-center gap-2 rounded-full border border-solid border-[#ebe6de] px-3 py-2 md:flex">
            <img src="/icons/search.svg" alt="" width={14} height={14} />
            <span className="text-[12px] font-normal text-[#605a54]">
              Search fragrances...
            </span>
          </div>
          <img
            src="/icons/user.svg"
            alt=""
            width={20}
            height={20}
            className="hidden sm:block"
          />
          <Link
            href={cartPaths.cart}
            className="flex items-center gap-1.5"
            aria-label={`Cart${quantity > 0 ? ` (${quantity})` : ""}`}
          >
            <img
              src="/icons/shopping-bag.svg"
              alt=""
              width={20}
              height={20}
            />
            {quantity > 0 ? (
              <span className="rounded-full bg-[#c5a880] px-1.5 py-0.5 text-[10px] font-bold text-white">
                {quantity}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
