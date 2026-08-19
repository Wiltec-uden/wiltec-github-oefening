const DEFAULT_TARGET = "wereld";

/**
 * Bouwt een groet voor de opgegeven naam.
 *
 * @param name - De naam om te groeten. Valt terug op "wereld" wanneer leeg.
 * @returns De volledige groet, bijvoorbeeld "Hallo, Wereld!".
 */
export function greet(name?: string): string {
  const target = name?.trim() || DEFAULT_TARGET;
  return `Hallo, ${target}!`;
}
