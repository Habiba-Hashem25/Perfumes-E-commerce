"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/features/products/types/product.types";

type ProductImagesProps = {
  product: Product;
};

/** US-04: product image gallery — Figma 1:1288 */
export function ProductImages({ product }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return (
      <div className="flex h-[600px] items-center justify-center rounded-lg bg-[#ebe6de] text-[#605a54]">
        No product images yet
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg sm:h-[500px] lg:h-[600px]">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 656px, 100vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="flex w-full items-start gap-4">
          {images.map((image, index) => {
  if (index === activeIndex) {
    return null;
  }
  const isActive = index === activeIndex;
            return (
              <button
                key={`${image}-${index}`}
                type="button"
                aria-label={`View image ${index + 1}`}
                aria-pressed={isActive}
                className={`relative h-[80px] min-w-0 flex-1 overflow-hidden rounded sm:h-[100px] lg:h-[120px] ${
                  isActive
                    ? "border-2 border-solid border-[#c5a880]"
                    : "border-0"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="rounded object-cover"
                  sizes="210px"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
