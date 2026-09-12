/**
 * Enforces the archive's sourcing rule:
 *
 *   every recipe marked "verified" must carry at least two distinct sources.
 *
 * Runs before `next build`, so an entry can never reach the site claiming to be
 * sourced without the sources actually being there. Entries not yet through the
 * verification pass are reported but do not fail the build.
 */

const MIN_SOURCES = 2;

const { recipes } = await import("../data/recipes.ts");

const errors = [];
const unverified = [];
const unchecked = [];

for (const r of recipes) {
  if (r.verification === "verified") {
    const sources = r.sources ?? [];
    const distinct = new Set(sources.map((s) => s.trim()));
    if (distinct.size < MIN_SOURCES) {
      errors.push(
        `${r.slug}: marked verified but has ${distinct.size} source(s); ${MIN_SOURCES} required`
      );
    }
    for (const s of sources) {
      try {
        new URL(s);
      } catch {
        errors.push(`${r.slug}: source is not a valid URL: ${s}`);
      }
    }
    if (!r.history) errors.push(`${r.slug}: marked verified but has no history text`);
  } else if (r.verification === "unverified") {
    if (!r.verificationNote) {
      errors.push(`${r.slug}: flagged unverified but gives no reason`);
    }
    unverified.push(r.slug);
  } else {
    unchecked.push(r.slug);
  }
}

const verified = recipes.filter((r) => r.verification === "verified").length;

console.log(
  `Sourcing: ${verified} verified / ${unverified.length} flagged unverified / ` +
    `${unchecked.length} not yet checked  (of ${recipes.length} recipes)`
);

if (unchecked.length) {
  console.log(`  not yet checked: ${unchecked.join(", ")}`);
}

if (errors.length) {
  console.error(`\nSourcing check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log("Sourcing check passed.");
