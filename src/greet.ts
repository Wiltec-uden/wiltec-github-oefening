/**
 * Bouwt een groet voor de opgegeven naam.
 *
 * @param name - De naam om te groeten. Valt terug op "wereld" wanneer leeg.
 * @returns De volledige groet, bijvoorbeeld "Hallo, Wereld!".
 */
export function greet(name = "wereld"): string {
  const target = name.trim() || "wereld";
  return `Hallo, ${target}!`;
}
