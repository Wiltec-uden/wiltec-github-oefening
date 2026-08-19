import { Command } from "commander";
import { greet } from "./greet.js";

/**
 * Bouwt het CLI-programma op.
 *
 * @param write - Functie die een regel output wegschrijft. Standaard console.log.
 *                Injecteerbaar zodat de commando's testbaar zijn.
 * @returns Een geconfigureerd commander-programma.
 */
export function buildProgram(write: (line: string) => void = console.log): Command {
  const program = new Command();

  program
    .name("app")
    .description("Een simpele TypeScript-CLI")
    .version("0.1.0");

  program
    .command("greet")
    .description("Groet een naam")
    .argument("[name]", "de naam om te groeten")
    .action((name?: string) => {
      write(greet(name));
    });

  return program;
}

// Voer de CLI alleen uit wanneer dit bestand direct wordt gestart.
if (import.meta.url === `file://${process.argv[1]}`) {
  buildProgram().parse(process.argv);
}
