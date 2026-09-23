import type { Product } from "@/features/products/types/product.types";

type ProductScentAnatomyProps = {
  product: Product;
};

/** Figma 1:1334 */
export function ProductScentAnatomy({ product }: ProductScentAnatomyProps) {
  const notes = [
    { label: "Top Notes", value: product.scentNotes.top },
    { label: "Heart Notes", value: product.scentNotes.heart },
    { label: "Base Notes", value: product.scentNotes.base },
  ];

  return (
    <div className="flex w-full flex-col items-start gap-5">
      <h2 className="font-[family-name:var(--font-instrument-serif)] text-[32px] leading-none whitespace-nowrap text-[#1a1a1a]">
        Scent Anatomy
      </h2>
      <p className="w-full text-[14px] leading-[1.6] font-normal text-[#605a54]">
        {product.scentAnatomy}
      </p>
      <dl className="flex w-full flex-col items-start gap-3 whitespace-nowrap">
        {notes.map((note) => (
          <div
            key={note.label}
            className="flex w-full items-start justify-between border-b border-solid border-[#ebe6de] py-2"
          >
            <dt className="text-[12px] font-bold uppercase text-[#1a1a1a]">
              {note.label}
            </dt>
            <dd className="text-[13px] font-normal text-[#605a54]">
              {note.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
