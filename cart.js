export function calculateTotal(items, discount = 0, logger = null) {
  if (discount < 0 || discount > 100) {
    throw new Error("Invalid discount");
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalPrice = total - (total * discount) / 100;

  if (logger) {
    logger(`Total price calculated: ${finalPrice}`);
  }

  return finalPrice;
}