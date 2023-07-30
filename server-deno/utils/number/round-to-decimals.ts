/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to be rounded.
 * @param {number} [decimalPlaces=2] - The number of decimal places to round to.
 * @returns {number} - The rounded number.
 * @throws {Error} - Throws an error if arguments are not valid.
 */
export default function roundToDecimals(value: number, decimalPlaces = 2) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("The provided value is not a valid number.");
  }

  if (
    typeof decimalPlaces !== "number" ||
    isNaN(decimalPlaces) ||
    decimalPlaces < 0 ||
    decimalPlaces !== Math.floor(decimalPlaces)
  ) {
    throw new Error(
      "The provided decimalPlaces value should be a non-negative integer.",
    );
  }

  return parseFloat(value.toFixed(decimalPlaces));
}
