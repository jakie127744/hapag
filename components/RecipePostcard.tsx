import type { Recipe } from "@/data/recipes";
import type { Unit } from "@/lib/store";
import { prettyTime, prettyYield, regionOf } from "@/lib/regions";

/**
 * Print-only rendering of a recipe as a two-sided postcard.
 *
 * Front: photograph, name, provenance and background.
 * Back:  ingredients and method.
 *
 * Hidden on screen; `@media print` in globals.css sizes it to a 5x7in card.
 */
export function RecipePostcard({ recipe, unit }: { recipe: Recipe; unit: Unit }) {
  const region = regionOf(recipe);
  const province = provinceOf(recipe.origin, region);

  return (
    <div className="postcard" aria-hidden="true">
      {/* ---------------- FRONT ---------------- */}
      <section className="pc-page pc-front">
        <div className="pc-photo">
          {recipe.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={recipe.image} alt={recipe.title} />
          ) : (
            <div className="pc-photo-empty">
              <span>{recipe.title.slice(0, 1)}</span>
              <em>Image pending</em>
            </div>
          )}
        </div>

        <div className="pc-front-body">
          <p className="pc-eyebrow">Hapag · Filipino Culinary Lab</p>
          <h1 className="pc-title">{recipe.title}</h1>
          <p className="pc-subtitle">{recipe.subtitle}</p>

          <p className="pc-provenance">
            {[region, province, recipe.origin]
              .filter((v): v is string => Boolean(v))
              .filter(dedupe)
              .join(" · ")}
          </p>

          <p className="pc-desc">{recipe.description}</p>

          {recipe.history && (
            <div className="pc-history">
              <p className="pc-label">Background</p>
              <p>{recipe.history}</p>
            </div>
          )}
        </div>

        <div className="pc-front-foot">
          <span>{recipe.category}</span>
          <span>{prettyTime(recipe.time)}</span>
          <span>{prettyYield(recipe.yield)}</span>
        </div>
      </section>

      {/* ---------------- BACK ---------------- */}
      <section className="pc-page pc-back">
        <header className="pc-back-head">
          <div>
            <p className="pc-eyebrow">{region}</p>
            <h2 className="pc-back-title">{recipe.title}</h2>
          </div>
          <ul className="pc-meta">
            <li>
              <b>Time</b> {prettyTime(recipe.time)}
            </li>
            <li>
              <b>Yield</b> {prettyYield(recipe.yield)}
            </li>
            <li>
              <b>Technique</b> {recipe.technique}
            </li>
          </ul>
        </header>

        <div className="pc-section">
          <p className="pc-label">Ingredients</p>
          <ul className="pc-ingredients">
            {recipe.ingredients.map((ing, i) => (
              <li key={ing.name + i}>
                <span className="pc-qty">{unit === "metric" ? ing.metric : ing.imperial}</span>
                <span>{ing.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pc-section">
          <p className="pc-label">Method</p>
          <ol className="pc-steps">
            {recipe.instructions.map((step, i) => (
              <li key={i}>
                <span className="pc-step-n">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {recipe.notes.length > 0 && (
          <div className="pc-section">
            <p className="pc-label">Notes</p>
            <ul className="pc-notes">
              {recipe.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        )}

        <footer className="pc-back-foot">
          <span>hapag · filipino culinary lab</span>
          {recipe.imageSource && <span>photo: wikimedia commons</span>}
        </footer>
      </section>
    </div>
  );
}

/** Pulls a province or city out of an origin string like "PALO, LEYTE". */
function provinceOf(origin: string, region: string): string | null {
  const cleaned = origin.replace(/\s*\/\s*/g, ", ");
  const parts = cleaned
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p && p.toUpperCase() !== "PHILIPPINES" && p.toUpperCase() !== region.toUpperCase());
  return parts.length ? parts.join(", ") : null;
}

function dedupe(value: string, i: number, all: string[]) {
  return all.findIndex((v) => v.toLowerCase() === value.toLowerCase()) === i;
}
