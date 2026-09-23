"use client";

import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import { cn } from "@/lib/utils/cn";

type ProductOptionsProps = {
  product: Product;
  selectedVolumeId: string;
  onChange: (volumeId: string) => void;
};

/** US-04: volume selector — Figma 1:1308 */
export function ProductOptions({
  product,
  selectedVolumeId,
  onChange,
}: ProductOptionsProps) {
  if (product.volumes.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-start gap-3 whitespace-nowrap">
      <p className="text-[12px] font-bold uppercase text-[#1a1a1a]">
        Select Volume
      </p>
      <div className="flex w-full items-start gap-3">
        {product.volumes.map((volume) => {
          const selected = volume.id === selectedVolumeId;
          return (
            <button
              key={volume.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "box-border flex min-w-0 flex-1 flex-col items-center gap-1 rounded p-3",
                selected
                  ? "border-2 border-solid border-[#1a1a1a] bg-white"
                  : "border border-solid border-[#ebe6de] bg-transparent",
              )}
              onClick={() => onChange(volume.id)}
            >
              <span
                className={cn(
                  "text-[14px] text-[#1a1a1a]",
                  selected ? "font-bold" : "font-medium",
                )}
              >
                {volume.label}
              </span>
              <span className="text-[11px] font-normal text-[#605a54]">
                {formatWholePrice(volume.price)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
