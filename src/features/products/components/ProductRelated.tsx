"use client";

import Image from "next/image";
import Link from "next/link";
import { productPaths } from "@/features/products/paths";
import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";

type ProductRelatedProps = {
  products: Product[];
};

export function ProductRelated({ products }: ProductRelatedProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="w-full border-t border-[#ebe6de] bg-[#f4f0eb] px-20 py-[100px]">
      {/* الهيدر: العنوان شمال - الوصف وView All مجمعين يمين */}
      

      <div className="mb-3 flex flex-col items-center gap-3 text-center">
  <h2 className="font-[family-name:var(--font-instrument-serif)] text-[48px] font-normal text-[#1a1a1a]">
    Olfactory Companions
  </h2>
  <p className="text-[11px] tracking-[0.12em] text-[#605a54] uppercase">
    Fragrances of Synonymous Sophistication
  </p>
</div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {products.map((product) => {
          const image = product.images[0];
          return (
            <div key={product.id} className="group flex flex-col gap-4 rounded-lg bg-white p-4">
              {/* الصورة - بتودي لتفاصيل المنتج */}
              <Link href={productPaths.detail(product.id)}>
                <div className="relative aspect-[270/320] overflow-hidden rounded-lg bg-[#ebe6de]">
                  {image ? (
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                  ) : null}
                </div>
              </Link>

              {/* الاسم والسعر - بتودي لتفاصيل المنتج برضه */}
              <Link
                href={productPaths.detail(product.id)}
                className="flex items-start justify-between gap-3"
              >
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-instrument-serif)] text-[20px] text-[#1a1a1a]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase text-[#c5a880]">
                    {product.notes}
                  </p>
                </div>
                <p className="shrink-0 text-[15px] font-semibold text-[#1a1a1a]">
                  {formatWholePrice(product.price)}
                </p>
              </Link>

              {/* الزرار الحقيقي - برا الـ Link، وبيضيف فعليًا في الكارت */}
              <AddToCartButton
  productId={product.id}
  name={product.name}
  price={product.price}
  image={image}
  selectedOptions={{}}
  variant="secondary"
  className="h-auto w-full rounded-none border border-[#1a1a1a] bg-transparent py-3 text-[11px] font-semibold tracking-[0.12em] text-[#1a1a1a] uppercase transition-colors hover:border-[#2a2a2a] hover:text-[#2a2a2a]"
>
  Add to Cart +
</AddToCartButton>
            </div>
          );
        })}
      </div>
    </section>
  );
}