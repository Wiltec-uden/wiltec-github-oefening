import { describe, expect, it } from "vitest";
import { buildProgram } from "./cli.js";

describe("buildProgram", () => {
  it("registreert het greet-commando", () => {
    const program = buildProgram();
    const names = program.commands.map((c) => c.name());
    expect(names).toContain("greet");
  });

  it("schrijft de groet naar de opgegeven output", () => {
    const output: string[] = [];
    const program = buildProgram((line) => output.push(line));
    program.parse(["greet", "Rick"], { from: "user" });
    expect(output).toEqual(["Hallo, Rick!"]);
  });

  it("gebruikt de standaardgroet zonder argument", () => {
    const output: string[] = [];
    const program = buildProgram((line) => output.push(line));
    program.parse(["greet"], { from: "user" });
    expect(output).toEqual(["Hallo, wereld!"]);
  });
});
