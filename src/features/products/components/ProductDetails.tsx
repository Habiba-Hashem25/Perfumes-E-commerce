/* eslint-disable @next/next/no-img-element */
import type { Product } from "@/features/products/types/product.types";
import {
  formatLabel,
  formatWholePrice,
} from "@/features/products/utils/product.utils";

type ProductDetailsProps = {
  product: Product;
  price: number;
};

/** US-04: product information — Figma 1:1295 */
export function ProductDetails({ product, price }: ProductDetailsProps) {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-[#f2ede4] px-2.5 py-1 text-[11px] font-semibold uppercase whitespace-nowrap text-[#1a1a1a]">
          Scent Family: {formatLabel(product.scentFamily)}
        </span>
        <span className="rounded-full bg-[#f4f0eb] px-2.5 py-1 text-[11px] font-semibold uppercase whitespace-nowrap text-[#605a54]">
          Occasion: {formatLabel(product.occasion)}
        </span>
      </div>

      <h1 className="w-full font-[family-name:var(--font-instrument-serif)] text-[36px] leading-none text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
        {product.name}
      </h1>

      <div className="flex w-full items-center justify-between">
        <p className="text-[24px] font-semibold whitespace-nowrap text-[#1a1a1a]">
          {formatWholePrice(price)}
        </p>
        {product.availableInAtelier ? (
          <div className="flex items-center gap-1.5">
            <img src="/icons/status-dot.svg" alt="" width={8} height={8} />
            <p className="text-[13px] font-semibold whitespace-nowrap text-[#10b981]">
              Available in Atelier
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
