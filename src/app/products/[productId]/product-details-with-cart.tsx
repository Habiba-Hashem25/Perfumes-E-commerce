"use client";

import { AddToCartButton } from "@/features/cart";
import { ProductDetailsPage } from "@/features/products";

type ProductDetailsWithCartProps = {
  productId: string;
};

export function ProductDetailsWithCart({
  productId,
}: ProductDetailsWithCartProps) {
  return (
    <ProductDetailsPage
      key={productId}
      productId={productId}
      actions={({ product, selectedOptions, price, quantity }) => (
        <AddToCartButton
          productId={product.id}
          name={product.name}
          price={price}
          image={product.images[0]}
          selectedOptions={selectedOptions}
          quantity={quantity}
        />
      )}
    />
  );
}
