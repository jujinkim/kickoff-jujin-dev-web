// Integer hundredths keep the illustrative prices exact.
export function priceCents(model, quantity) {
  if (!Number.isInteger(quantity) || quantity < 0 || quantity > 10000)
    throw new RangeError("Quantity must be an integer from 0 to 10000");
  switch (model) {
    case "usage-based":
      return quantity * 2;
    case "per-seat-pricing":
      return quantity * 800;
    case "volume-pricing":
      return quantity * (quantity <= 100 ? 20 : 10);
    case "graduated-pricing":
      return Math.min(quantity, 100) * 20 + Math.max(quantity - 100, 0) * 10;
    case "base-plus-overage":
      return 2000 + Math.max(quantity - 100, 0) * 10;
    default:
      throw new Error(`Unknown pricing model: ${model}`);
  }
}
export const amount = (cents) => (cents / 100).toFixed(2);
