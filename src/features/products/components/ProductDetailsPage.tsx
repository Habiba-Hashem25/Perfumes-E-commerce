"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Footer } from "@/components/shared/Footer";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductGiftWrapping } from "@/features/products/components/ProductGiftWrapping";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import { ProductQuantity } from "@/features/products/components/ProductQuantity";
import { ProductRelated } from "@/features/products/components/ProductRelated";
import { ProductScentAnatomy } from "@/features/products/components/ProductScentAnatomy";
import { useProduct } from "@/features/products/hooks/useProduct";
import { useProducts } from "@/features/products/hooks/useProducts";
import type { Product } from "@/features/products/types/product.types";
import { getSelectedVolume } from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  price: number;
  quantity: number;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

const RELATED_IDS = [
  "fleur-de-lune",
  "noir-cocoon",
  "sol-dor",
  "rose-absolute",
] as const;

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const relatedQuery = useProducts({ page: 1, pageSize: 6 });
  const product = productQuery.data;
  const defaultVolumeId =
    product?.volumes[product.volumes.length - 1]?.id ?? "";
  const [selectedVolumeId, setSelectedVolumeId] = useState("");
  const [giftWrapping, setGiftWrapping] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const resolvedVolumeId = selectedVolumeId || defaultVolumeId;
  const selectedVolume = product
    ? getSelectedVolume(product, resolvedVolumeId)
    : null;
  const price = selectedVolume?.price ?? product?.price ?? 0;

  const selectedOptions = useMemo(() => {
    const options: Record<string, string> = {};
    if (selectedVolume) {
      options.volume = selectedVolume.label;
    }
    if (giftWrapping) {
      options.giftWrapping = "yes";
    }
    return options;
  }, [giftWrapping, selectedVolume]);

  const relatedProducts =
    RELATED_IDS.map((id) =>
      relatedQuery.data?.items.find((item) => item.id === id),
  ).filter((item): item is Product => item !== undefined && item.id !== productId) ??
  [];

  if (productQuery.isLoading) {
    return (
      <p className="px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Loading product...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Product not found.
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col items-start overflow-x-hidden bg-[#faf8f5] text-[#1a1a1a]">
      <ProductBreadcrumbs productName={product.name} />

      {/* detail-body — Figma 1:1287: gap 64, px 80, pb 100 */}
      <section className="flex w-full flex-col items-start gap-10 px-4 pb-16 sm:px-6 md:gap-12 md:px-10 lg:flex-row lg:gap-16 lg:px-20 lg:pb-[100px]">
        <div className="w-full min-w-0 flex-1">
          <ProductImages product={product} />
        </div>

        {/* product-specifications — Figma 1:1294: w 560, gap 32 */}
        <div className="flex w-full shrink-0 flex-col items-start gap-8 lg:w-[560px]">
          <ProductDetails product={product} price={price} />
          <div className="h-px w-full bg-[#ebe6de]" />
          <ProductOptions
            product={product}
            selectedVolumeId={resolvedVolumeId}
            onChange={setSelectedVolumeId}
          />
          <ProductGiftWrapping
            enabled={giftWrapping}
            onChange={setGiftWrapping}
          />
          <div className="flex w-full items-center gap-4">
            <ProductQuantity value={quantity} onChange={setQuantity} />
            <div className="min-w-0 flex-1">
              {actions?.({
                product,
                selectedOptions,
                price,
                quantity,
              })}
            </div>
          </div>
          <div className="h-px w-full bg-[#ebe6de]" />
          <ProductScentAnatomy product={product} />
        </div>
      </section>

      <ProductRelated products={relatedProducts} />
      <Footer />
    </div>
  );
}
