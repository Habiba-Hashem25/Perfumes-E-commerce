"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/features/cart/hooks/useCart";
import type { AddToCartInput } from "@/features/cart/types/cart.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import type { ReactNode } from "react";

type AddToCartButtonProps = AddToCartInput & {
  quantity?: number;
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function AddToCartButton({
  quantity = 1,
  className,
  children,
  variant = "primary",
  ...props
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      variant={variant}
      className={
        className ??
        "h-12 w-full rounded border-0 bg-[#1a1a1a] px-4 text-[11px] font-semibold tracking-[0.14em] text-white uppercase hover:bg-[#2a2a2a] disabled:bg-[#c5a880]"
      }
      onClick={() => addItem({ ...props, quantity })}
    >
      {children ?? `Add to Cart / ${formatWholePrice(props.price * quantity)}`}
    </Button>
  );
}