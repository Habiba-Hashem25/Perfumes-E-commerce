"use client";

type ProductQuantityProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

/** Figma 1:1327 */
export function ProductQuantity({
  value,
  onChange,
  min = 1,
  max = 99,
}: ProductQuantityProps) {
  return (
    <div className="flex shrink-0 items-center gap-5 rounded border border-solid border-[#ebe6de] px-4 py-3.5 whitespace-nowrap">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="text-[16px] font-normal text-[#605a54] disabled:opacity-40"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        -
      </button>
      <span className="text-[14px] font-semibold text-[#1a1a1a]">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="text-[16px] font-normal text-[#605a54] disabled:opacity-40"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </div>
  );
}
