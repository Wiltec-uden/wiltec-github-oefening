import { describe, expect, it } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("groet een opgegeven naam", () => {
    expect(greet("Wereld")).toBe("Hallo, Wereld!");
  });

  it("valt terug op een standaardgroet zonder naam", () => {
    expect(greet()).toBe("Hallo, wereld!");
  });

  it("trimt witruimte rond de naam", () => {
    expect(greet("  Rick  ")).toBe("Hallo, Rick!");
  });
});
