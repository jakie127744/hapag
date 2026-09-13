export type Ingredient = { name: string; metric: string; imperial: string };
export type Recipe = {
  slug: string; title: string; subtitle: string; description: string; category: string; time: string; yield: string;
  image?: string; imageSource?: string; origin: string; technique: string; ingredients: Ingredient[]; instructions: string[]; notes: string[];
  /** Short documented background for the printed postcard front. Sourced, not improvised. */
  history?: string;
  /** URLs consulted when verifying this entry. */
  sources?: string[];
  /**
   * "verified"   - dish, region and method corroborated by the listed sources.
   * "unverified" - no source found; treat the entry as provisional.
   * Absent means this entry has not been through the verification pass yet.
   */
  verification?: "verified" | "unverified";
  /** Why an entry is flagged, or what a verification pass corrected. */
  verificationNote?: string;
};

// Images are mirrored locally from Wikimedia Commons (see `imageSource` for attribution).
/** Photographs already mirrored and resized into public/images/recipes. */
const local = (file: string) => `/images/recipes/${file}`;

const commons = (file: string) =>
  `/images/recipes/${file
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)}.jpg`;
const commonsPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%2F/g, "/")}`;

export const recipes: Recipe[] = [
  {
    slug: "adobong-manok-at-baboy", title: "Adobong Manok at Baboy", subtitle: "Chicken & Pork Adobo",
    description: "A classic Filipino adobo built around the deliberate reduction of vinegar, soy sauce, garlic, and rendered pork fat. The meat is braised until tender, then returned to the reduced sauce for a glossy, concentrated finish.",
    category: "MAIN / BRAISE", time: "90M", yield: "4–6 PAX", origin: "LUZON / PHILIPPINES", technique: "VINEGAR REDUCTION",
    image: local("adobong-manok-at-baboy.jpg"),
    ingredients: [
      {name:"Chicken thighs, bone-in",metric:"900 g",imperial:"2 lb"},{name:"Pork shoulder",metric:"450 g",imperial:"1 lb"},
      {name:"Datu Puti Soy Sauce",metric:"60 ml",imperial:"1/4 cup"},{name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},{name:"Garlic, crushed",metric:"12 cloves",imperial:"12 cloves"},
      {name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},{name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Brown sugar",metric:"10 g",imperial:"2 tsp"},{name:"Neutral oil",metric:"15 ml",imperial:"1 tbsp"},{name:"Kosher salt",metric:"3 g",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Pat the chicken and pork completely dry. Cut the pork into 4 cm (1 1/2 inch) pieces. Season lightly with salt; the soy sauce will provide most of the salinity.",
      "Heat a heavy 5–6 L (5–6 qt) pot over medium-high heat. Add the oil, then brown the pork in a single layer until deeply golden on at least two sides. Remove and reserve.",
      "Brown the chicken skin-side down until rendered and deeply colored, about 5–7 minutes. Turn and brown briefly. Remove and reserve. Leave the rendered fat in the pot.",
      "Lower the heat to medium. Add the crushed garlic and cook for 45–60 seconds, just until aromatic. Add the vinegar and bring it to a vigorous simmer. Do not stir for the first 2 minutes; allow the sharp raw-vinegar aroma to cook off.",
      "Add the soy sauce, water, bay leaves, peppercorns, and sugar. Return the pork to the pot. Bring to a boil, then reduce to a steady simmer and cook uncovered for 35 minutes.",
      "Return the chicken, skin-side up. Simmer for another 20–25 minutes, or until the chicken is tender and the pork yields easily to a fork. Skim excess surface fat only if necessary.",
      "Transfer the meat to a plate. Increase the heat and reduce the braising liquid for 8–12 minutes until it becomes darker, slightly syrupy, and visibly coats the back of a spoon. This reduction is the key finishing step.",
      "Return the meat to the reduced sauce and turn gently to coat. Rest for 5 minutes before serving with steamed white rice. Spoon the concentrated sauce over the meat immediately before eating."
    ],
    notes: ["Do not substitute the vinegar with an acid-neutral sauce; traditional adobo depends on vinegar's acidity and aroma.","The sauce should taste intensely savory, acidic, and aromatic rather than sweet."]
  },
  {
    slug: "sinigang-na-baboy", title: "Sinigang na Baboy", subtitle: "Pork Tamarind Soup",
    description: "A deeply savory Filipino sour soup with tender pork, tomatoes, radish, long beans, water spinach, and tamarind. The sourness is layered gradually so the broth stays bright rather than harsh.",
    category: "SOUP / SOUR", time: "75M", yield: "6 PAX", origin: "PHILIPPINES", technique: "TAMARIND BROTH",
    image: local("sinigang-na-baboy.jpg"),
    ingredients: [
      {name:"Pork belly or shoulder",metric:"900 g",imperial:"2 lb"},{name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Tomatoes, quartered",metric:"300 g",imperial:"10.5 oz"},{name:"Yellow onion, quartered",metric:"180 g",imperial:"6.3 oz"},
      {name:"Daikon radish, sliced",metric:"200 g",imperial:"7 oz"},{name:"Tamarind pulp",metric:"120 g",imperial:"4.2 oz"},
      {name:"String beans, cut",metric:"150 g",imperial:"5.3 oz"},{name:"Water spinach (kangkong)",metric:"120 g",imperial:"4.2 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},{name:"Green chilies",metric:"3 pcs",imperial:"3 pcs"},{name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Place the pork, water, onion, and tomatoes in a large pot. Bring slowly to a boil and skim the foam that rises to the surface.",
      "Lower to a gentle simmer and cook partially covered for 45–55 minutes, until the pork is tender but still holds its shape.",
      "Add the daikon and simmer for 8–10 minutes. The radish should be tender enough to pierce with a chopstick without collapsing.",
      "Meanwhile, combine the tamarind pulp with 250 ml (1 cup) of hot broth in a bowl. Mash thoroughly, strain through a fine sieve, and reserve the sour liquid.",
      "Stir the tamarind liquid and fish sauce into the pot. Add the green chilies. Simmer for 3–5 minutes, then taste and adjust with additional tamarind or salt as needed.",
      "Add the string beans and cook for 2–3 minutes. Add the kangkong leaves and tender stems last; cook for about 60 seconds until just wilted.",
      "Serve immediately in warmed bowls, distributing pork and vegetables evenly. The finished broth should be savory first, distinctly sour, and aromatic with tomato and tamarind."
    ],
    notes: ["Tamarind concentration varies, so acidity should always be adjusted at the end rather than measured blindly.","Kangkong should remain bright and lightly cooked; prolonged boiling dulls its texture."]
  },
  {
    slug: "kare-kare", title: "Kare-Kare", subtitle: "Oxtail Peanut Stew with Bagoong",
    description: "A luxurious Filipino stew of oxtail and vegetables in a thick, savory peanut sauce. Annatto provides its characteristic color while toasted rice thickens the sauce with a distinctly Filipino texture.",
    category: "STEW / PEANUT", time: "3H 15M", yield: "6 PAX", origin: "TAGALOG CUISINE", technique: "PEANUT + ANNATTO",
    image: local("kare-kare.jpg"),
    ingredients: [
      {name:"Oxtail, cross-cut",metric:"1.5 kg",imperial:"3.3 lb"},{name:"Water",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Peanut butter, unsweetened",metric:"240 g",imperial:"1 cup"},{name:"Peanuts, roasted and ground",metric:"120 g",imperial:"1 cup"},
      {name:"Glutinous rice, toasted and ground",metric:"60 g",imperial:"1/3 cup"},{name:"Annatto seeds",metric:"15 g",imperial:"1 tbsp"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},{name:"Yellow onion, diced",metric:"200 g",imperial:"7 oz"},
      {name:"Eggplant, sliced",metric:"300 g",imperial:"10.5 oz"},{name:"String beans",metric:"200 g",imperial:"7 oz"},
      {name:"Bok choy",metric:"300 g",imperial:"10.5 oz"},{name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},{name:"Bagoong alamang",metric:"120 g",imperial:"4.2 oz"}
    ],
    instructions: [
      "Place the oxtail in a large pot and cover with the water. Bring to a boil, skim thoroughly, then lower to a gentle simmer. Cook for 2–2 1/2 hours until the meat is tender and the broth is rich.",
      "Toast the glutinous rice in a dry skillet over medium heat until pale golden and nutty. Cool, then grind to a fine powder. This is the traditional thickening element.",
      "Warm the annatto seeds with 60 ml (1/4 cup) neutral oil over low heat for 2–3 minutes. Strain the oil and discard the seeds.",
      "In a heavy pot, heat 30 ml (2 tbsp) of the annatto oil. Sauté the onion for 3–4 minutes, then add garlic and cook for 30 seconds.",
      "Add 750 ml (3 cups) of the reserved oxtail broth. Whisk in the peanut butter, ground peanuts, and ground toasted rice until smooth.",
      "Add the oxtail and fish sauce. Simmer gently for 20–25 minutes, stirring frequently. Add additional broth a little at a time until the sauce is thick enough to coat the meat but remains spoonable.",
      "Blanch the eggplant, string beans, and bok choy separately until just tender. Drain well so they do not dilute the peanut sauce.",
      "Adjust the stew with fish sauce to taste. Serve the oxtail and sauce with the vegetables alongside, with bagoong alamang served separately so diners can control its saltiness and fermented depth."
    ],
    notes: ["Use unsweetened peanut butter; sweetness is not the defining flavor of kare-kare.","Bagoong is traditionally served as a salty, fermented counterpoint to the rich peanut sauce rather than mixed into the entire pot."]
  },
  {
    slug: "tinolang-manok", title: "Tinolang Manok", subtitle: "Ginger Chicken Soup with Green Papaya",
    description: "A clean, aromatic Filipino chicken soup built from ginger, garlic, onion, fish sauce, green papaya, and malunggay. The broth is intentionally clear and savory rather than heavily spiced.",
    category: "SOUP / CHICKEN", time: "60M", yield: "4–6 PAX", origin: "PHILIPPINES", technique: "GINGER BROTH",
    image: commons("Chicken tinola with green papaya and lemongrass.jpg"), imageSource: commonsPage("Chicken tinola with green papaya and lemongrass.jpg"),
    ingredients: [
      {name:"Chicken, cut into serving pieces",metric:"1.2 kg",imperial:"2.6 lb"},{name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Fresh ginger, julienned",metric:"60 g",imperial:"2.1 oz"},{name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Yellow onion, sliced",metric:"180 g",imperial:"6.3 oz"},{name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Green papaya, peeled and wedged",metric:"450 g",imperial:"1 lb"},{name:"Malunggay leaves",metric:"80 g",imperial:"2.8 oz"},
      {name:"Neutral oil",metric:"15 ml",imperial:"1 tbsp"},{name:"Black pepper",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Heat the oil in a 5 L (5 qt) pot over medium heat. Sauté the ginger, onion, and garlic until fragrant and the onion begins to soften, about 3–4 minutes.",
      "Add the chicken and fish sauce. Turn the pieces through the aromatics for 3–4 minutes until lightly opaque and coated.",
      "Pour in the water and bring just to a boil. Skim foam carefully, then lower to a gentle simmer.",
      "Cover partially and simmer for 30–35 minutes, until the chicken is tender and the broth tastes distinctly of ginger and chicken.",
      "Add the green papaya and black pepper. Simmer 8–10 minutes until the papaya is tender but not falling apart.",
      "Add the malunggay leaves and cook for 60–90 seconds. Taste for fish sauce and serve immediately with steamed rice."
    ],
    notes: ["Malunggay is added at the end so the leaves retain their aroma and texture.","Green papaya should be tender enough to absorb broth while retaining a clean, slightly firm bite."]
  },
  {
    slug: "pancit-bihon", title: "Pancit Bihon", subtitle: "Rice Noodles with Pork, Chicken & Vegetables",
    description: "Thin rice noodles stir-fried with pork, chicken, cabbage, carrots, green beans, garlic, and soy sauce. The technique depends on controlled hydration so the noodles absorb flavor without becoming soft or wet.",
    category: "NOODLES / STIR-FRY", time: "45M", yield: "6 PAX", origin: "PHILIPPINES", technique: "CONTROLLED HYDRATION",
    image: commons("Pancit Bihon.jpg"), imageSource: commonsPage("Pancit Bihon.jpg"),
    ingredients: [
      {name:"Pancit bihon rice noodles",metric:"450 g",imperial:"1 lb"},{name:"Chicken thigh, sliced",metric:"250 g",imperial:"8.8 oz"},
      {name:"Pork shoulder, thinly sliced",metric:"250 g",imperial:"8.8 oz"},{name:"Chicken stock",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Datu Puti Soy Sauce",metric:"60 ml",imperial:"1/4 cup"},{name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, sliced",metric:"150 g",imperial:"5.3 oz"},{name:"Carrot, julienned",metric:"150 g",imperial:"5.3 oz"},
      {name:"Cabbage, shredded",metric:"250 g",imperial:"8.8 oz"},{name:"Green beans, sliced",metric:"150 g",imperial:"5.3 oz"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},{name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},{name:"Calamansi",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Soak the bihon in room-temperature water just until pliable, usually 5–8 minutes depending on the brand. Drain immediately; do not fully cook the noodles in the soaking bowl.",
      "Heat a wide wok or sauté pan over high heat. Add half the oil, then brown the pork and chicken in batches. Remove and reserve.",
      "Add the remaining oil. Stir-fry onion and garlic for 30–60 seconds, then add carrot, beans, and cabbage. Keep the vegetables crisp.",
      "Return the meat to the wok. Add the stock and soy sauce and bring to a strong simmer.",
      "Add the drained noodles and toss continuously. Let the noodles absorb the seasoned stock rather than leaving liquid pooled in the wok.",
      "Cook until the noodles are tender and the wok is nearly dry. Finish with black pepper and serve with calamansi wedges."
    ],
    notes: ["The most common technical failure is over-soaking the noodles. They should finish cooking in the seasoned stock.","Keep the wok hot so the vegetables stir-fry instead of steaming."]
  },
  {
    slug: "lumpiang-shanghai", title: "Lumpiang Shanghai", subtitle: "Crisp Pork Spring Rolls",
    description: "Tightly rolled Filipino fried spring rolls filled with seasoned ground pork, carrot, onion, and garlic. The filling is deliberately compact so every bite has a crisp wrapper-to-meat ratio.",
    category: "MERIENDA / FRIED", time: "60M", yield: "30 PCS", origin: "PHILIPPINES", technique: "TIGHT ROLL + FRY",
    image: commons("Lumpiang Shanghai as street food.jpg"), imageSource: commonsPage("Lumpiang Shanghai as street food.jpg"),
    ingredients: [
      {name:"Ground pork",metric:"500 g",imperial:"1.1 lb"},{name:"Lumpia wrappers",metric:"30 sheets",imperial:"30 sheets"},
      {name:"Carrot, finely minced",metric:"100 g",imperial:"3.5 oz"},{name:"Yellow onion, finely minced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},{name:"Egg",metric:"1 large",imperial:"1 large"},
      {name:"Soy sauce",metric:"30 ml",imperial:"2 tbsp"},{name:"Ground black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral frying oil",metric:"1.5 L",imperial:"6 1/3 cups"},{name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},{name:"Garlic for sawsawan",metric:"2 cloves",imperial:"2 cloves"}
    ],
    instructions: [
      "Combine pork, carrot, onion, garlic, egg, soy sauce, and pepper. Mix only until evenly distributed; do not knead aggressively.",
      "Place one wrapper with a corner facing you. Put about 20 g (2 tbsp) filling in a narrow log near the lower third.",
      "Fold the bottom corner over the filling, fold in both side corners, then roll firmly toward the top corner. Moisten the final edge with water and seal.",
      "Repeat until the filling is gone. Keep finished rolls covered with a slightly damp towel so the wrappers do not dry.",
      "Heat oil to 175°C (350°F). Fry in batches without crowding until deeply golden and the filling is cooked through, about 4–6 minutes.",
      "Drain on a rack rather than directly on paper towels. Mix vinegar with crushed garlic for a simple sawsawan and serve hot."
    ],
    notes: ["A tight roll prevents the filling from becoming loose during frying.","Maintain approximately 175°C (350°F); cooler oil makes the wrapper greasy while hotter oil darkens it too quickly."]
  },
  {
    slug: "lechon-kawali", title: "Lechon Kawali", subtitle: "Crisp Pork Belly with Liver Sauce",
    description: "Pork belly is simmered until tender, thoroughly dried, then fried until the skin blisters and shatters. The contrast between crisp skin and yielding fat is the central technique.",
    category: "PORK / FRIED", time: "2H 15M", yield: "4–6 PAX", origin: "PHILIPPINES", technique: "BOIL + DOUBLE FRY",
    image: commons("Lechon Kawali.jpg"), imageSource: commonsPage("Lechon Kawali.jpg"),
    ingredients: [
      {name:"Pork belly slab",metric:"1.5 kg",imperial:"3.3 lb"},{name:"Water",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Garlic",metric:"8 cloves",imperial:"8 cloves"},{name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},{name:"Salt",metric:"30 g",imperial:"1 oz"},
      {name:"Neutral frying oil",metric:"2 L",imperial:"8 1/2 cups"},{name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Soy sauce",metric:"60 ml",imperial:"1/4 cup"},{name:"Onion, minced",metric:"60 g",imperial:"2.1 oz"}
    ],
    instructions: [
      "Place pork belly in a large pot with water, garlic, bay leaves, peppercorns, and salt. Bring to a boil, then reduce to a steady simmer for 60–75 minutes until tender.",
      "Remove the pork and cool until safe to handle. Pat the skin completely dry. Refrigerate uncovered for at least 2 hours, preferably overnight, to dry the surface.",
      "Heat oil to 160°C (320°F). Fry the pork carefully until the skin begins to firm and blister, about 6–8 minutes. Remove and rest for 10 minutes.",
      "Raise the oil to 190°C (375°F). Return the pork and fry until the skin is deeply crisp and audibly crackles when tapped, about 2–4 minutes.",
      "Drain on a rack and rest for 5 minutes before cutting into thick pieces.",
      "Combine vinegar, soy sauce, onion, and a little of the minced garlic for a sharp sawsawan. Serve immediately while the skin is crisp."
    ],
    notes: ["Surface moisture is the enemy of crisp pork skin. Drying is as important as frying.","Use a rack for draining so steam does not soften the crackling."]
  },
  {
    slug: "bicol-express", title: "Bicol Express", subtitle: "Pork Belly in Coconut Milk & Chilies",
    description: "A rich Bicolano pork dish simmered with coconut milk, shrimp paste, garlic, onion, ginger, and long green chilies. The sauce is reduced until it clings to the pork rather than remaining soupy.",
    category: "PORK / GATA", time: "75M", yield: "4–6 PAX", origin: "BICOL REGION", technique: "COCONUT REDUCTION",
    image: commons("Bicol Express.jpg"), imageSource: commonsPage("Bicol Express.jpg"),
    ingredients: [
      {name:"Pork belly, 3 cm cubes",metric:"900 g",imperial:"2 lb"},{name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Bagoong alamang",metric:"60 g",imperial:"1/4 cup"},{name:"Long green chilies, sliced",metric:"120 g",imperial:"4.2 oz"},
      {name:"Bird's eye chilies",metric:"6 pcs",imperial:"6 pcs"},{name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, sliced",metric:"180 g",imperial:"6.3 oz"},{name:"Ginger, minced",metric:"30 g",imperial:"1 oz"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},{name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Place pork, water, onion, garlic, and ginger in a heavy pot. Bring to a simmer and cook until the pork releases some fat and begins to tenderize, about 25 minutes.",
      "Add the bagoong and cook for 2 minutes, stirring so the fermented shrimp paste becomes aromatic rather than raw-tasting.",
      "Pour in the coconut milk and add the bird's eye chilies. Bring to a gentle simmer; avoid a violent boil that can make the coconut milk separate abruptly.",
      "Cook uncovered for 25–30 minutes, stirring occasionally, until the pork is tender and the sauce has reduced noticeably.",
      "Add the long green chilies and black pepper. Simmer another 5–8 minutes until the chilies soften and the sauce coats the pork.",
      "Taste carefully before adding salt; the bagoong supplies substantial salinity. Serve with steamed rice."
    ],
    notes: ["Bicol Express is defined by the combination of pork, coconut milk, chilies, and bagoong rather than sweetness.","Control heat with the ratio of long green chilies to bird's eye chilies rather than adding sugar to the sauce."]
  },
  {
    slug: "pinakbet", title: "Pinakbet", subtitle: "Ilocano Mixed Vegetables with Bagoong",
    description: "An Ilocano vegetable dish combining bitter melon, eggplant, squash, okra, long beans, tomatoes, and shrimp paste. The vegetables are layered so firmer produce cooks first while delicate vegetables retain structure.",
    category: "VEGETABLE / ILOCANO", time: "40M", yield: "4–6 PAX", origin: "ILOCOS", technique: "LAYERED SIMMER",
    image: commons("Pinakbet.jpg"), imageSource: commonsPage("Pinakbet.jpg"),
    ingredients: [
      {name:"Bitter melon, sliced",metric:"200 g",imperial:"7 oz"},{name:"Eggplant, wedged",metric:"250 g",imperial:"8.8 oz"},
      {name:"Kabocha squash, cubed",metric:"300 g",imperial:"10.5 oz"},{name:"Okra",metric:"150 g",imperial:"5.3 oz"},
      {name:"String beans",metric:"150 g",imperial:"5.3 oz"},{name:"Tomatoes, quartered",metric:"250 g",imperial:"8.8 oz"},
      {name:"Bagoong isda",metric:"60 ml",imperial:"1/4 cup"},{name:"Pork belly, thinly sliced",metric:"200 g",imperial:"7 oz"},
      {name:"Water",metric:"300 ml",imperial:"1 1/4 cups"},{name:"Garlic, crushed",metric:"4 cloves",imperial:"4 cloves"},{name:"Onion, sliced",metric:"120 g",imperial:"4.2 oz"}
    ],
    instructions: [
      "Render the pork belly in a wide pot over medium heat until lightly browned and some fat has collected.",
      "Add garlic and onion and cook for 2–3 minutes. Add tomatoes and cook until they begin to collapse.",
      "Stir in bagoong isda and cook briefly until aromatic. Add the water and bring to a simmer.",
      "Add squash first, then cover and simmer for 5 minutes. Add bitter melon, eggplant, and string beans.",
      "Arrange okra on top and simmer gently without aggressive stirring. Cook another 8–10 minutes until the vegetables are tender but recognizable.",
      "Taste the broth and adjust only if necessary. Serve immediately with steamed rice."
    ],
    notes: ["Do not over-stir pinakbet; excessive movement breaks down the vegetables and muddies the broth.","Bagoong isda provides the defining fermented saltiness of the Ilocano style."]
  },
  {
    slug: "chicken-inasal", title: "Chicken Inasal", subtitle: "Visayan Grilled Chicken with Annatto",
    description: "A smoky Bacolod-style grilled chicken marinated with calamansi, vinegar, lemongrass, ginger, garlic, and annatto, then basted while grilling. The finished chicken should carry charred edges without losing its aromatic acidity.",
    category: "CHICKEN / GRILLED", time: "2H", yield: "4 PAX", origin: "BACOLOD / VISAYAS", technique: "ANNATTO BASTING",
    image: commons("Chicken inasal.jpg"), imageSource: commonsPage("Chicken inasal.jpg"),
    ingredients: [
      {name:"Chicken leg quarters",metric:"1.2 kg",imperial:"2.6 lb"},{name:"Calamansi juice",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Cane vinegar",metric:"60 ml",imperial:"1/4 cup"},{name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Ginger, minced",metric:"30 g",imperial:"1 oz"},{name:"Lemongrass, bruised",metric:"2 stalks",imperial:"2 stalks"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},{name:"Brown sugar",metric:"20 g",imperial:"1 1/2 tbsp"},
      {name:"Annatto oil",metric:"120 ml",imperial:"1/2 cup"},{name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Combine calamansi, vinegar, garlic, ginger, lemongrass, fish sauce, sugar, and pepper. Add chicken and marinate refrigerated for 2–8 hours.",
      "Remove the chicken and let excess marinade drip off. Prepare a charcoal or gas grill for medium heat with a cooler indirect zone.",
      "Grill the chicken skin-side down over moderate heat, turning regularly to build color without burning the sugars.",
      "Move to the cooler zone if the skin darkens too quickly. Continue grilling until the thickest portion reaches 74°C (165°F).",
      "Brush generously with annatto oil during the final 8–10 minutes, turning frequently so the oil colors the skin and develops charred edges.",
      "Rest for 5 minutes. Serve with steamed rice and a dipping mixture of calamansi, vinegar, soy sauce, and chili if desired."
    ],
    notes: ["Annatto oil supplies color and aroma rather than dominant heat.","Keep the chicken moving when basting to prevent the oil and sugars from scorching over direct flame."]
  },
  {
    slug: "sisig", title: "Sisig", subtitle: "Sizzling Pork with Calamansi & Chili",
    description: "Crisped pork jowl and ear chopped finely with onion, chili, and calamansi. This laboratory version focuses on textural contrast: crisp pork, aromatic onion, sharp citrus, and controlled heat.",
    category: "PORK / SIZZLING", time: "2H 30M", yield: "4 PAX", origin: "PAMPANGA", technique: "BRAISE + CRISP",
    image: commons("Philippine Sisig.jpg"), imageSource: commonsPage("Philippine Sisig.jpg"),
    ingredients: [
      {name:"Pork jowl and/or belly",metric:"700 g",imperial:"1.5 lb"},{name:"Pork ears",metric:"350 g",imperial:"12.3 oz"},
      {name:"Water",metric:"1.5 L",imperial:"6 1/3 cups"},{name:"Bay leaves",metric:"2 leaves",imperial:"2 leaves"},
      {name:"Black peppercorns",metric:"1 tsp",imperial:"1 tsp"},{name:"Yellow onion, minced",metric:"180 g",imperial:"6.3 oz"},
      {name:"Bird's eye chilies, minced",metric:"3 pcs",imperial:"3 pcs"},{name:"Calamansi juice",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Soy sauce",metric:"30 ml",imperial:"2 tbsp"},{name:"Chicken liver, optional",metric:"120 g",imperial:"4.2 oz"}
    ],
    instructions: [
      "Simmer pork and ears with water, bay leaves, and peppercorns for 75–90 minutes until tender. Drain thoroughly and cool.",
      "Pat the cooked pork very dry. Grill or broil until the exterior is deeply browned and lightly charred.",
      "Chop the crisped pork and ears into small, irregular pieces. If using chicken liver, grill or pan-sear it separately and mince finely.",
      "Heat a cast-iron skillet or sizzling plate. Add the pork and cook until some pieces become crisp and fat renders.",
      "Fold in onion, chilies, liver if using, soy sauce, and calamansi. Cook only long enough to soften the onion slightly while preserving freshness.",
      "Serve immediately on the hot plate with extra calamansi."
    ],
    notes: ["Sisig is a texture-driven dish; avoid turning the pork into a uniform paste.","Calamansi should be added late so its acidity remains bright."]
  },
  {
    slug: "leche-flan", title: "Leche Flan", subtitle: "Filipino Caramel Custard",
    description: "A dense Filipino custard made with egg yolks and condensed milk, steamed or baked gently over caramel. The goal is a smooth, rich custard without bubbles or curdling.",
    category: "DESSERT / CUSTARD", time: "60M + CHILL", yield: "8 PAX", origin: "PHILIPPINES", technique: "LOW HEAT CUSTARD",
    image: commons("Leche flan from the Philippines.jpg"), imageSource: commonsPage("Leche flan from the Philippines.jpg"),
    ingredients: [
      {name:"Egg yolks",metric:"10 large",imperial:"10 large"},{name:"Sweetened condensed milk",metric:"390 g",imperial:"14 oz can"},
      {name:"Evaporated milk",metric:"360 ml",imperial:"1 1/2 cups"},{name:"Granulated sugar",metric:"150 g",imperial:"3/4 cup"},
      {name:"Vanilla extract",metric:"5 ml",imperial:"1 tsp"},{name:"Water",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Place sugar and water in a llanera or small flan mold over medium-low heat. Cook without stirring until the sugar melts and becomes deep amber.",
      "Immediately tilt the mold to coat the base evenly. Set aside to cool until the caramel is firm.",
      "Whisk egg yolks gently just until combined. Stir in condensed milk, evaporated milk, and vanilla without incorporating excessive air.",
      "Strain the custard through a fine sieve into the caramel-lined mold. Cover tightly with foil.",
      "Steam over gently simmering water for 25–35 minutes, or bake in a water bath at 160°C (320°F) until the center is just set and still trembles.",
      "Cool completely, then refrigerate at least 4 hours. Run a thin knife around the edge and invert onto a chilled serving plate."
    ],
    notes: ["Low heat and minimal aeration are the keys to a smooth Filipino-style flan.","Do not wait for the custard to become firm in the oven; carryover heat will finish the center as it cools."]
  },
  {
    slug: "halo-halo", title: "Halo-Halo", subtitle: "Layered Shaved-Ice Dessert",
    description: "A Filipino shaved-ice dessert assembled from sweetened fruits, beans, coconut, jellies, evaporated milk, and leche flan. The defining technique is deliberate layering before the mixture is stirred tableside.",
    category: "DESSERT / COLD", time: "25M", yield: "4 PAX", origin: "PHILIPPINES", technique: "LAYER + CRUSH",
    image: commons("Halo-Halo.jpg"), imageSource: commonsPage("Halo-Halo.jpg"),
    ingredients: [
      {name:"Sweetened red beans",metric:"120 g",imperial:"4.2 oz"},{name:"Sweetened white beans",metric:"120 g",imperial:"4.2 oz"},
      {name:"Nata de coco",metric:"120 g",imperial:"4.2 oz"},{name:"Sweetened jackfruit",metric:"120 g",imperial:"4.2 oz"},
      {name:"Sweetened macapuno",metric:"120 g",imperial:"4.2 oz"},{name:"Ube halaya",metric:"160 g",imperial:"5.6 oz"},
      {name:"Evaporated milk",metric:"240 ml",imperial:"1 cup"},{name:"Fine shaved ice",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Leche flan",metric:"4 slices",imperial:"4 slices"},{name:"Ube ice cream",metric:"400 g",imperial:"3 cups"},{name:"Toasted pinipig",metric:"60 g",imperial:"1/2 cup"}
    ],
    instructions: [
      "Drain each sweetened component separately. Excess syrup makes the finished dessert watery and obscures the individual textures.",
      "Divide the beans, nata de coco, jackfruit, macapuno, and ube halaya among four tall serving glasses or bowls, layering them visibly.",
      "Pack each serving generously with fine shaved ice. Press lightly so the ice forms a stable mound without becoming compacted.",
      "Pour evaporated milk around and over the ice, allowing it to travel through the layers.",
      "Top with a slice of leche flan, a scoop of ube ice cream, and toasted pinipig.",
      "Serve immediately with a long spoon. Mix the components thoroughly at the table just before eating."
    ],
    notes: ["Halo-halo means mixed together; the contrasting textures are part of the intended experience.","Fine ice melts quickly, so assembly should happen immediately before service."]
  },

  {
    slug: "bagnet", title: "Bagnet", subtitle: "Ilocano Crispy Pork Belly",
    description: "Ilocos-style pork belly cooked until tender, dried thoroughly, and fried until the skin becomes rigid and blistered. It is traditionally paired with a sharp sukang Iloko-style dipping sauce.",
    category: "ILOCOS / FRIED", time: "3H 30M", yield: "6 PAX", origin: "ILOCOS REGION", technique: "DOUBLE-FRY",
    image: local("bagnet.jpg"),
    ingredients: [
      {name:"Pork belly, skin on",metric:"1.5 kg",imperial:"3.3 lb"},{name:"Water",metric:"2 L",imperial:"8 1/2 cups"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},{name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},{name:"Salt",metric:"25 g",imperial:"1 1/2 tbsp"},
      {name:"Neutral frying oil",metric:"2 L",imperial:"8 cups"},{name:"Ilocos cane vinegar",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Place the pork belly skin-side up in a pot and cover with water. Add garlic, bay leaves, peppercorns, and half the salt.",
      "Simmer gently for 60–75 minutes until the meat is tender but the skin remains intact. Drain and season the skin with the remaining salt.",
      "Air-dry the pork uncovered in the refrigerator for at least 4 hours, preferably overnight. Pat the skin completely dry before frying.",
      "Heat oil to 160°C (320°F). Fry the pork carefully for 12–15 minutes until the exterior firms and the skin begins to blister. Remove and rest for 10 minutes.",
      "Increase the oil to 190°C (375°F) and fry again until the skin is deeply blistered and audibly crisp. Drain well and rest briefly before chopping.",
      "Serve with sukang Iloko or cane vinegar seasoned with crushed garlic, onion, and chili."
    ],
    notes: ["Dry skin is the primary determinant of crispness; do not skip the uncovered drying stage.","Ilocano cooking commonly balances rich pork with assertive vinegar and fermented seasonings."]
  },
  {
    slug: "ilocos-empanada", title: "Ilocos Empanada", subtitle: "Batac-Style Orange Rice Pastry",
    description: "A Northern Luzon specialty with a crisp rice-flour shell filled with green papaya, longganisa, and egg. The vivid wrapper is traditionally colored with annatto.",
    category: "ILOCOS / SNACK", time: "60M", yield: "6 EMPANADAS", origin: "ILOCOS NORTE", technique: "RICE-FLOUR FRYING",
    image: commons("Empanada Ilocos.jpg"), imageSource: commonsPage("Empanada Ilocos.jpg"),
    ingredients: [
      {name:"Rice flour",metric:"300 g",imperial:"2 1/2 cups"},{name:"Water",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Annatto seeds",metric:"10 g",imperial:"2 tsp"},{name:"Green papaya, julienned",metric:"350 g",imperial:"12 oz"},
      {name:"Ilocos longganisa, casing removed",metric:"300 g",imperial:"10.5 oz"},{name:"Eggs",metric:"6 large",imperial:"6 large"},
      {name:"Mung beans, cooked",metric:"120 g",imperial:"1/2 cup"},{name:"Neutral oil",metric:"1.5 L",imperial:"6 cups"}
    ],
    instructions: [
      "Simmer annatto seeds in the water for 5 minutes. Strain, return the colored liquid to the pot, and bring to a boil.",
      "Gradually add rice flour while stirring. Cook until a soft dough forms. Cool until safe to handle, then knead until smooth.",
      "Cook the longganisa until browned. Add the green papaya and mung beans and cook until the papaya is tender but not wet.",
      "Divide the dough into six balls. Flatten each between sheets of plastic until thin and round.",
      "Place filling on one half, add a raw egg, fold over, and seal firmly. Crimp the edge with a fork or traditional folded seam.",
      "Deep-fry at 175°C (350°F) until crisp and orange-golden. Drain vertically or on a rack and serve immediately."
    ],
    notes: ["The rice-flour shell behaves differently from wheat pastry and should be handled while warm.","Green papaya, egg, and longganisa are the characteristic filling combination associated with Ilocos empanada."]
  },
  {
    slug: "dinakdakan", title: "Dinakdakan", subtitle: "Ilocano Grilled Pork & Offal",
    description: "A boldly seasoned Ilocano preparation of boiled and grilled pork, traditionally including pig ears and other parts, finished with vinegar, aromatics, and a creamy element.",
    category: "ILOCOS / GRILLED", time: "2H", yield: "6 PAX", origin: "ILOCOS REGION", technique: "BOIL + GRILL",
    image: commons("Dinakdakan.jpg"), imageSource: commonsPage("Dinakdakan.jpg"),
    ingredients: [
      {name:"Pork jowl or cheek",metric:"500 g",imperial:"1.1 lb"},{name:"Pork ears",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork liver",metric:"250 g",imperial:"9 oz"},{name:"Water",metric:"2 L",imperial:"8 1/2 cups"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},{name:"Red onion, minced",metric:"150 g",imperial:"5.3 oz"},
      {name:"Ilocos cane vinegar",metric:"90 ml",imperial:"6 tbsp"},{name:"Calamansi juice",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Mayonnaise",metric:"90 g",imperial:"1/3 cup"},{name:"Green chilies",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Simmer the jowl and ears in water until tender, about 75–90 minutes. Drain and cool until firm enough to slice.",
      "Grill the pork over charcoal or under a broiler until the exterior is charred in spots. Grill the liver briefly until cooked through but not dry.",
      "Slice the pork and liver into small pieces and place in a mixing bowl with onion, garlic, and chilies.",
      "Add vinegar and calamansi. Toss and rest for 5 minutes so the acidity penetrates the warm pork.",
      "Fold in the mayonnaise sparingly to bind the mixture. Taste for salt and acidity.",
      "Serve warm or at room temperature with steamed rice."
    ],
    notes: ["Dinakdakan varies considerably by household; the defining profile is grilled pork, acidity, aromatics, and a rich binding element."]
  },
  {
    slug: "pinapaitan", title: "Pinapaitan", subtitle: "Ilocano Bitter Beef Soup",
    description: "A concentrated Ilocano soup built from beef offal, bile, aromatics, and souring agents. Its characteristic bitterness is deliberate and balanced against salt, vinegar, and savory beef stock.",
    category: "ILOCOS / SOUP", time: "2H 30M", yield: "6 PAX", origin: "ILOCOS REGION", technique: "BITTER BROTH",
    image: commons("Papaitan (Philippines).jpg"), imageSource: commonsPage("Papaitan (Philippines).jpg"),
    ingredients: [
      {name:"Beef tripe",metric:"500 g",imperial:"1.1 lb"},{name:"Beef liver",metric:"300 g",imperial:"10.5 oz"},
      {name:"Beef heart",metric:"300 g",imperial:"10.5 oz"},{name:"Beef stock",metric:"1.8 L",imperial:"7 1/2 cups"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},{name:"Ginger, minced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Ilocos vinegar",metric:"60 ml",imperial:"1/4 cup"},{name:"Bile",metric:"15–30 ml",imperial:"1–2 tbsp"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},{name:"Green chilies",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Clean the tripe thoroughly and simmer until tender. Drain, rinse, and cut into bite-sized pieces.",
      "Brown the heart and liver briefly in a hot pot. Remove the liver after about 2 minutes so it does not overcook.",
      "Sauté garlic and ginger in the same pot. Return the tripe and heart, then add the beef stock and simmer for 25 minutes.",
      "Add vinegar and fish sauce. Simmer uncovered for 5 minutes to integrate the acidity.",
      "Add bile a teaspoon at a time, tasting after each addition. The broth should be distinctly bitter but still balanced and savory.",
      "Return the liver for the final 2–3 minutes, add chilies, and serve immediately."
    ],
    notes: ["Bile is powerful and should be added gradually; the intended bitterness is part of the dish rather than a flaw.","Use a trusted butcher for properly cleaned offal."]
  },
  {
    slug: "poqui-poqui", title: "Poqui-Poqui", subtitle: "Ilocano Charred Eggplant & Egg",
    description: "A simple Ilocano vegetable dish in which fire-charred eggplant is combined with tomato, onion, and beaten egg. Its flavor depends on pronounced smokiness and restrained seasoning.",
    category: "ILOCOS / VEGETABLE", time: "35M", yield: "4 PAX", origin: "ILOCOS REGION", technique: "CHAR + FOLD",
    image: commons("Poqui poqui.jpg"), imageSource: commonsPage("Poqui poqui.jpg"),
    ingredients: [
      {name:"Asian eggplant",metric:"600 g",imperial:"1.3 lb"},{name:"Tomatoes, diced",metric:"250 g",imperial:"9 oz"},
      {name:"Red onion, sliced",metric:"120 g",imperial:"4.2 oz"},{name:"Eggs",metric:"4 large",imperial:"4 large"},
      {name:"Garlic, minced",metric:"4 cloves",imperial:"4 cloves"},{name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Fish sauce",metric:"15 ml",imperial:"1 tbsp"},{name:"Black pepper",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Char the whole eggplants directly over a gas flame, grill, or under a broiler until the skins blacken and the flesh collapses.",
      "Cool slightly, peel away the burned skin, and chop or mash the smoky flesh while leaving some texture.",
      "Heat oil in a skillet. Sauté onion and garlic until translucent, then add tomatoes and cook until just softened.",
      "Add the eggplant and fish sauce. Cook for 3–4 minutes so the flavors combine and excess moisture evaporates.",
      "Pour in beaten eggs and fold gently until just set. Do not scramble aggressively; retain soft curds.",
      "Season with black pepper and serve hot with rice."
    ],
    notes: ["Direct charring gives poqui-poqui its defining smoky character."]
  },
  {
    slug: "laing", title: "Laing", subtitle: "Bicolano Dried Taro Leaves in Coconut Milk",
    description: "Dried taro leaves slowly simmered in coconut milk with pork, shrimp paste, aromatics, and chili. The leaves soften as the coconut sauce reduces into a dense, savory coating.",
    category: "BICOL / GATA", time: "75M", yield: "5 PAX", origin: "BICOL REGION", technique: "SLOW GATA REDUCTION",
    image: commons("Laing, Bicolano dish.jpg"), imageSource: commonsPage("Laing, Bicolano dish.jpg"),
    ingredients: [
      {name:"Dried taro leaves",metric:"100 g",imperial:"3.5 oz"},{name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Pork belly, small dice",metric:"300 g",imperial:"10.5 oz"},{name:"Bagoong alamang",metric:"45 g",imperial:"3 tbsp"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},{name:"Ginger, julienned",metric:"40 g",imperial:"1.4 oz"},
      {name:"Onion, sliced",metric:"120 g",imperial:"4.2 oz"},{name:"Siling labuyo",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Arrange the dried taro leaves loosely in a wide pot. Do not stir them initially; keep the leaves intact while they begin absorbing the coconut milk.",
      "Add coconut milk, pork, garlic, ginger, onion, bagoong, and chilies. Bring to a gentle simmer.",
      "Cook uncovered over low heat for 35–45 minutes until the leaves are fully tender and the pork is cooked.",
      "As the coconut milk reduces, fold the leaves gently from the edges toward the center. Avoid aggressive stirring while the leaves are still firm.",
      "Continue cooking until the sauce is thick, glossy, and clings to the leaves. Taste and adjust bagoong or chili.",
      "Rest for 5 minutes before serving with steamed rice."
    ],
    notes: ["Dried taro leaves must be thoroughly cooked; properly cooked leaves lose their irritating raw sensation.","Bicolano versions vary in meat and seafood additions, but gata and chili are central to the profile."]
  },
  {
    slug: "kinunot-na-pagi", title: "Kinunot na Pagi", subtitle: "Bicolano Shredded Stingray in Coconut Milk",
    description: "Shredded stingray simmered in coconut milk with malunggay and chilies. The name refers to the shredding technique that gives the dish its characteristic texture.",
    category: "BICOL / SEAFOOD", time: "50M", yield: "4 PAX", origin: "BICOL REGION", technique: "SHRED + GATA",
    image: commons("Kinunot na pagi.jpg"), imageSource: commonsPage("Kinunot na pagi.jpg"),
    ingredients: [
      {name:"Stingray, cleaned",metric:"700 g",imperial:"1.5 lb"},{name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Malunggay leaves",metric:"100 g",imperial:"3.5 oz"},{name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Ginger, sliced",metric:"30 g",imperial:"1 oz"},{name:"Onion, sliced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Siling labuyo",metric:"5 pcs",imperial:"5 pcs"},{name:"Bagoong alamang",metric:"30 g",imperial:"2 tbsp"}
    ],
    instructions: [
      "Steam or simmer the stingray until just cooked through. Cool enough to handle, then remove cartilage and shred the flesh into medium strands.",
      "Sauté garlic, ginger, and onion in a wide pot until aromatic. Add bagoong and cook for 1 minute.",
      "Add coconut milk and chilies. Bring to a gentle simmer rather than a hard boil.",
      "Fold in the shredded stingray and simmer for 12–15 minutes until the coconut sauce thickens and coats the fish.",
      "Add malunggay leaves and cook for 2–3 minutes until tender.",
      "Taste for salt and chili intensity. Serve with hot rice."
    ],
    notes: ["Kinunot can also be prepared with other fish or seafood, but stingray is a classic Bicolano expression."]
  },
  {
    slug: "sinantolan", title: "Sinantolan", subtitle: "Bicolano Santol Cooked in Gata",
    description: "Shredded santol cooked down with coconut milk, aromatics, fermented shrimp paste, and chili. It is a tangy, savory Bicolano preparation that can be served as a vegetable dish or accompaniment to rice.",
    category: "BICOL / VEGETABLE", time: "45M", yield: "5 PAX", origin: "BICOL REGION", technique: "FRUIT + GATA",
    image: local("sinantolan-sinantol-ni-etelya-ginataang-santol-photo.jpg"), imageSource: commonsPage("Sinantolan-sinantol-ni-etelya-ginataang-santol-photo.jpg"),
    ingredients: [
      {name:"Unripe santol flesh, shredded",metric:"500 g",imperial:"1.1 lb"},{name:"Coconut milk",metric:"500 ml",imperial:"2 cups"},
      {name:"Pork belly, minced",metric:"200 g",imperial:"7 oz"},{name:"Bagoong alamang",metric:"45 g",imperial:"3 tbsp"},
      {name:"Garlic",metric:"5 cloves",imperial:"5 cloves"},{name:"Onion",metric:"120 g",imperial:"4.2 oz"},
      {name:"Siling labuyo",metric:"5 pcs",imperial:"5 pcs"},{name:"Water",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Squeeze excess liquid from the shredded santol. If it is intensely bitter, blanch briefly and squeeze again.",
      "Brown the minced pork in a pot until some fat renders. Add onion and garlic and cook until aromatic.",
      "Add the santol, bagoong, and water. Cook for 8–10 minutes until the fruit softens.",
      "Pour in coconut milk and add chilies. Simmer uncovered for 20 minutes, stirring periodically.",
      "Continue until the coconut milk reduces to a thick coating and the santol becomes tender.",
      "Taste for the desired balance of sourness, salt, richness, and heat. Serve with rice."
    ],
    notes: ["Santol varies greatly in acidity and bitterness, so seasoning must be adjusted after reduction."]
  },
  {
    slug: "pancit-bato", title: "Pancit Bato", subtitle: "Bicol Stone-Style Noodles",
    description: "Bicol's distinctive dried wheat noodles stir-fried with pork, shrimp, vegetables, and aromatics. The noodles are rehydrated briefly before finishing in the wok so they remain springy.",
    category: "BICOL / NOODLES", time: "35M", yield: "4–5 PAX", origin: "BICOL REGION", technique: "WOK TOSS",
    ingredients: [
      {name:"Pancit Bato noodles",metric:"400 g",imperial:"14 oz"},{name:"Pork belly, thinly sliced",metric:"200 g",imperial:"7 oz"},
      {name:"Shrimp, peeled",metric:"200 g",imperial:"7 oz"},{name:"Cabbage, shredded",metric:"200 g",imperial:"7 oz"},
      {name:"Carrot, julienned",metric:"100 g",imperial:"3.5 oz"},{name:"Garlic",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Onion",metric:"100 g",imperial:"3.5 oz"},{name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Chicken stock",metric:"350 ml",imperial:"1 1/2 cups"},{name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Soak the dried noodles in warm water for 5–8 minutes, just until pliable. Drain thoroughly.",
      "Heat a wok over high heat. Brown the pork, then add onion and garlic and cook until aromatic.",
      "Add shrimp and cook until barely opaque. Remove the shrimp so they do not overcook.",
      "Add cabbage and carrot. Toss for 1–2 minutes, keeping the vegetables crisp.",
      "Add noodles, stock, and fish sauce. Toss continuously until the noodles absorb most of the liquid and become springy.",
      "Return the shrimp, season with pepper, and serve immediately with calamansi."
    ],
    notes: ["Pancit Bato is associated with Bicol and takes its name from Bato, Camarines Sur."]
  },
  {
    slug: "la-paz-batchoy", title: "La Paz Batchoy", subtitle: "Ilonggo Pork Noodle Soup",
    description: "Iloilo's famous noodle soup built on pork stock, miki noodles, sliced pork, liver, and offal, finished with raw egg, crushed chicharon, and fried garlic.",
    category: "ILOILO / SOUP", time: "3H", yield: "4 PAX", origin: "ILOILO CITY", technique: "PORK STOCK",
    image: commons("LaPazBatchoy.jpg"), imageSource: commonsPage("LaPazBatchoy.jpg"),
    ingredients: [
      {name:"Fresh miki noodles",metric:"600 g",imperial:"1.3 lb"},{name:"Pork bones",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Pork shoulder",metric:"300 g",imperial:"10.5 oz"},{name:"Pork liver",metric:"200 g",imperial:"7 oz"},
      {name:"Pork intestines, cleaned",metric:"250 g",imperial:"9 oz"},{name:"Garlic",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},{name:"Chicharon, crushed",metric:"100 g",imperial:"3.5 oz"},
      {name:"Eggs",metric:"4",imperial:"4"},{name:"Green onions",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Blanch pork bones and intestines, rinse, then return them to a clean pot with fresh water. Simmer gently for 2 hours, skimming as needed.",
      "Cook the pork shoulder in the broth until tender. Remove, cool, and slice thinly.",
      "Cook the liver separately or poach briefly in the broth, then slice thinly. Keep the intestines tender and cut into rings.",
      "Season the broth with fish sauce and a small amount of fried garlic oil. Taste for a concentrated pork-forward flavor.",
      "Blanch miki noodles briefly and divide among bowls. Top with pork, liver, intestines, and hot broth.",
      "Crack an egg into each bowl and allow the hot broth to set it. Finish with crushed chicharon and fried garlic."
    ],
    notes: ["La Paz batchoy is an Iloilo specialty; toppings and exact offal combinations vary by shop and family."]
  },
  {
    slug: "kbl", title: "KBL", subtitle: "Kadyos, Baboy & Langka",
    description: "An Ilonggo sour stew combining kadyos pigeon peas, pork, unripe jackfruit, and leafy greens in a broth traditionally soured with batwan.",
    category: "ILOILO / SOUR", time: "2H", yield: "6 PAX", origin: "WESTERN VISAYAS", technique: "BATWAN BROTH",
    image: commons("Kadyos, baboy, kag langka - Chicken House Bacolod.jpg"), imageSource: commonsPage("Kadyos, baboy, kag langka - Chicken House Bacolod.jpg"),
    ingredients: [
      {name:"Kadyos pigeon peas",metric:"250 g",imperial:"9 oz"},{name:"Pork belly",metric:"700 g",imperial:"1.5 lb"},
      {name:"Unripe jackfruit",metric:"400 g",imperial:"14 oz"},{name:"Batwan fruit",metric:"150 g",imperial:"5.3 oz"},
      {name:"Water",metric:"2 L",imperial:"8 1/2 cups"},{name:"Tomatoes",metric:"200 g",imperial:"7 oz"},
      {name:"Onion",metric:"150 g",imperial:"5.3 oz"},{name:"Sweet potato leaves",metric:"120 g",imperial:"4.2 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Soak dried kadyos overnight if necessary. Drain and rinse before cooking.",
      "Simmer pork in water with onion and tomatoes for 45–60 minutes until nearly tender.",
      "Add kadyos and unripe jackfruit. Continue simmering until both are tender.",
      "Simmer batwan in a separate small pot with water until soft. Mash and strain to extract the sour pulp.",
      "Add the batwan liquid to the pork broth and season with fish sauce. Simmer for 5 minutes.",
      "Add sweet potato leaves during the final 1–2 minutes. Serve the soup hot with rice."
    ],
    notes: ["Batwan is a signature souring fruit in parts of Western Visayas and gives KBL its distinctive regional identity."]
  },
  {
    slug: "humba", title: "Humba", subtitle: "Visayan Braised Pork Belly",
    description: "A Visayan pork braise combining vinegar, soy sauce, fermented black beans, brown sugar, garlic, and banana blossoms. Slow reduction creates the characteristic glossy sauce.",
    category: "VISAYAS / BRAISE", time: "2H", yield: "5 PAX", origin: "VISAYAS", technique: "SWEET-SOUR BRAISE",
    image: commons("Humba (Philippines).jpg"), imageSource: commonsPage("Humba (Philippines).jpg"),
    ingredients: [
      {name:"Pork belly",metric:"1 kg",imperial:"2.2 lb"},{name:"Soy sauce",metric:"90 ml",imperial:"6 tbsp"},
      {name:"Cane vinegar",metric:"90 ml",imperial:"6 tbsp"},{name:"Brown sugar",metric:"50 g",imperial:"1/4 cup"},
      {name:"Fermented black beans",metric:"50 g",imperial:"3 tbsp"},{name:"Garlic",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Bay leaves",metric:"3",imperial:"3"},{name:"Dried banana blossoms",metric:"80 g",imperial:"2.8 oz"},
      {name:"Water",metric:"500 ml",imperial:"2 cups"},{name:"Black peppercorns",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Brown the pork belly in a heavy pot until several sides are deeply caramelized. Remove excess rendered fat if necessary.",
      "Add garlic and cook briefly. Pour in vinegar and simmer for 2 minutes before stirring in the soy sauce.",
      "Add water, sugar, black beans, bay leaves, and peppercorns. Bring to a simmer.",
      "Cover and cook over low heat for 60–75 minutes until the pork is tender.",
      "Add rehydrated banana blossoms and continue cooking uncovered until the sauce reduces to a glossy glaze.",
      "Taste for the characteristic sweet-salty-sour balance and serve with steamed rice."
    ],
    notes: ["Humba is strongly associated with Visayan cooking and is related in technique to braised pork preparations elsewhere in the Philippines."]
  },
  {
    slug: "binakol-na-manok", title: "Binakol na Manok", subtitle: "Visayan Chicken Soup with Young Coconut",
    description: "A Visayan chicken soup distinguished by young coconut water and coconut meat, with ginger and lemongrass providing a clean aromatic backbone.",
    category: "VISAYAS / SOUP", time: "75M", yield: "5 PAX", origin: "WESTERN VISAYAS", technique: "COCONUT BROTH",
    ingredients: [
      {name:"Chicken, cut into pieces",metric:"1.2 kg",imperial:"2.6 lb"},{name:"Young coconut water",metric:"750 ml",imperial:"3 cups"},
      {name:"Young coconut meat",metric:"250 g",imperial:"9 oz"},{name:"Water",metric:"750 ml",imperial:"3 cups"},
      {name:"Ginger, sliced",metric:"50 g",imperial:"1.8 oz"},{name:"Lemongrass, bruised",metric:"2 stalks",imperial:"2 stalks"},
      {name:"Green papaya",metric:"300 g",imperial:"10.5 oz"},{name:"Malunggay leaves",metric:"100 g",imperial:"3.5 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Sauté ginger and lemongrass briefly in a heavy pot. Add chicken and cook until the surface loses its raw color.",
      "Add coconut water and plain water. Bring to a boil, skim, then lower to a gentle simmer.",
      "Cook for 35–40 minutes until the chicken is tender and the broth tastes deeply savory.",
      "Add green papaya and young coconut meat. Simmer for 8–10 minutes.",
      "Season with fish sauce and add malunggay during the final 2 minutes.",
      "Serve hot, making sure each bowl receives chicken, papaya, and coconut meat."
    ],
    notes: ["Young coconut water is central to binakol's flavor and distinguishes it from more familiar ginger chicken soups."]
  },
  {
    slug: "binangkal", title: "Binangkal", subtitle: "Visayan Sesame Dough Balls",
    description: "Small fried dough balls coated in sesame seeds, a familiar snack across parts of the Visayas and Mindanao. The exterior is crisp while the center remains chewy and tender.",
    category: "VISAYAS / SNACK", time: "40M", yield: "24 PCS", origin: "VISAYAS & MINDANAO", technique: "DEEP-FRY",
    image: commons("Binangkal.jpg"), imageSource: commonsPage("Binangkal.jpg"),
    ingredients: [
      {name:"All-purpose flour",metric:"300 g",imperial:"2 1/2 cups"},{name:"Sugar",metric:"80 g",imperial:"1/3 cup"},
      {name:"Baking powder",metric:"8 g",imperial:"2 tsp"},{name:"Egg",metric:"1 large",imperial:"1 large"},
      {name:"Milk",metric:"180 ml",imperial:"3/4 cup"},{name:"Butter, melted",metric:"45 g",imperial:"3 tbsp"},
      {name:"Sesame seeds",metric:"120 g",imperial:"3/4 cup"},{name:"Neutral oil",metric:"1.5 L",imperial:"6 cups"}
    ],
    instructions: [
      "Whisk flour, sugar, and baking powder. Add egg, milk, and melted butter and mix into a soft dough.",
      "Rest the dough for 10 minutes, then portion into 24 small balls.",
      "Roll each ball thoroughly in sesame seeds, pressing lightly so the seeds adhere.",
      "Heat oil to 165°C (330°F). Fry in batches, turning gently, until puffed and golden brown.",
      "Drain on a rack rather than directly on paper so the bottoms remain crisp.",
      "Serve warm or at room temperature with coffee or hot chocolate."
    ],
    notes: ["Binangkal is especially associated with Visayas and Mindanao bakeries and snack stalls."]
  },
  {
    slug: "piyaparan-na-manok", title: "Piyaparan na Manok", subtitle: "Maranao Chicken with Palapa & Coconut",
    description: "A Maranao chicken preparation built around palapa, turmeric, coconut milk, and aromatics. The dish is intensely fragrant, savory, and moderately hot.",
    category: "MINDANAO / GATA", time: "75M", yield: "5 PAX", origin: "MARANAO / LANAO", technique: "PALAPA BRAISE",
    image: commons("Piaparan a Manok.jpg"), imageSource: commonsPage("Piaparan a Manok.jpg"),
    ingredients: [
      {name:"Chicken, jointed",metric:"1.2 kg",imperial:"2.6 lb"},{name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Palapa",metric:"150 g",imperial:"5.3 oz"},{name:"Turmeric, grated",metric:"25 g",imperial:"0.9 oz"},
      {name:"Ginger",metric:"30 g",imperial:"1 oz"},{name:"Lemongrass",metric:"2 stalks",imperial:"2 stalks"},
      {name:"Chili peppers",metric:"5 pcs",imperial:"5 pcs"},{name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Water",metric:"250 ml",imperial:"1 cup"}
    ],
    instructions: [
      "Combine chicken with turmeric, ginger, lemongrass, and half the palapa. Rest for 20 minutes.",
      "Brown the chicken in a wide pot until lightly colored. Add the remaining palapa and cook for 2 minutes.",
      "Pour in coconut milk and water. Bring to a gentle simmer.",
      "Cook uncovered for 35–45 minutes until the chicken is tender and the coconut sauce has reduced.",
      "Add chilies and fish sauce during the final 5 minutes. Adjust salt carefully.",
      "Serve with steamed rice, spooning the concentrated coconut sauce over the chicken."
    ],
    notes: ["Piyaparan is a Maranao dish; palapa is a central southern Filipino condiment made with aromatics and chili."]
  },
  {
    slug: "tiyula-itum", title: "Tiyula Itum", subtitle: "Tausug Black Beef Soup",
    description: "A Tausug beef soup distinguished by a broth darkened with charred coconut, alongside ginger, turmeric, lemongrass, and aromatics. It is savory, smoky, and aromatic rather than sweet.",
    category: "TAUSUG / SOUP", time: "2H 30M", yield: "6 PAX", origin: "SULU / TAUSUG", technique: "CHARRED COCONUT BROTH",
    image: commons("Tiyula Itum by Patrick Aye Beef Black Soup 8-37 screenshot.jpg"), imageSource: commonsPage("Tiyula Itum by Patrick Aye Beef Black Soup 8-37 screenshot.jpg"),
    ingredients: [
      {name:"Beef shank or chuck",metric:"1 kg",imperial:"2.2 lb"},{name:"Water",metric:"2 L",imperial:"8 1/2 cups"},
      {name:"Grated coconut",metric:"150 g",imperial:"5.3 oz"},{name:"Ginger",metric:"60 g",imperial:"2.1 oz"},
      {name:"Turmeric",metric:"25 g",imperial:"0.9 oz"},{name:"Lemongrass",metric:"2 stalks",imperial:"2 stalks"},
      {name:"Garlic",metric:"6 cloves",imperial:"6 cloves"},{name:"Onion",metric:"150 g",imperial:"5.3 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},{name:"Chili",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Toast the grated coconut in a dry skillet until deeply browned, then continue until some pieces become almost black. Cool and grind with a little water into a dark paste.",
      "Place beef, water, onion, ginger, lemongrass, garlic, and turmeric in a pot. Bring to a boil and skim.",
      "Simmer gently for 90 minutes or until the beef is tender.",
      "Whisk the charred coconut paste into the broth and simmer another 15 minutes. The soup should become visibly dark and aromatic.",
      "Season with fish sauce and chili. Remove lemongrass before serving.",
      "Serve hot with rice."
    ],
    notes: ["The black color comes from deliberately charred coconut, not from soy sauce.","Tiyula itum is a Tausug specialty associated with the Sulu cultural region."]
  },
  {
    slug: "satti", title: "Satti", subtitle: "Zamboanga Grilled Skewers with Spiced Sauce",
    description: "Small marinated skewers grilled over charcoal and flooded with a sweet-hot red sauce built on turmeric, chilli and warm spices — not the peanut sauce of satay. Eaten at breakfast with ta’mu, rice steamed in woven pouches.",
    category: "MINDANAO / GRILL", time: "60M", yield: "4 PAX", origin: "ZAMBOANGA / TAUSUG", technique: "CHARCOAL GRILL",
    ingredients: [
      {name:"Chicken thigh",metric:"500 g",imperial:"1.1 lb"},{name:"Beef sirloin",metric:"300 g",imperial:"10.5 oz"},
      {name:"Garlic",metric:"6 cloves",imperial:"6 cloves"},{name:"Turmeric",metric:"10 g",imperial:"2 tsp"},
      {name:"Coconut milk",metric:"60 ml",imperial:"1/4 cup"},{name:"Cane vinegar",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Peanuts, ground",metric:"120 g",imperial:"1 cup"},{name:"Brown sugar",metric:"60 g",imperial:"1/4 cup"},
      {name:"Chili paste",metric:"30 g",imperial:"2 tbsp"},{name:"Coconut milk for sauce",metric:"300 ml",imperial:"1 1/4 cups"}
    ],
    instructions: [
      "Cut the meats into small, thin pieces. Marinate with garlic, turmeric, coconut milk, and vinegar for at least 30 minutes.",
      "Thread the meat tightly onto short bamboo skewers that have been soaked in water.",
      "For the sauce, simmer coconut milk, peanuts, sugar, chili paste, and a pinch of salt until thick and glossy.",
      "Heat a charcoal grill until hot. Grill the skewers quickly, turning frequently, until lightly charred and cooked through.",
      "Brush with a little sauce during the final minute if desired, taking care not to burn the sugar.",
      "Serve the skewers with the warm spiced sauce and rice or puso."
    ],
    notes: ["Satti is a signature food of Zamboanga with strong Tausug influence and is commonly eaten for breakfast as well as later in the day."],
    verification: "verified",
    verificationNote: "Corrected: this entry previously described the sauce as peanut-enriched. Sources consistently distinguish satti's thickened turmeric-and-chilli red sauce from the peanut sauce of Malay and Indonesian satay.",
    history: "Satti is the Tausug breakfast of Zamboanga and the Sulu archipelago — skewers of marinated beef, chicken or liver grilled over charcoal, served with ta’mu and a sweet, fiery red sauce. It shares an ancestor with the satay of maritime Southeast Asia, carried by centuries of trade, but its sauce sets it apart.",
    sources: [
      "https://www.angsarap.net/2024/01/19/satti/",
      "https://www.philstar.com/lifestyle/food-and-leisure/2024/08/24/2374108/recipe-sampling-tausugs-breakfast-staple-satti"
    ]
  },
  {
    slug: "pyanggang-manok", title: "Pyanggang Manok", subtitle: "Tausug Blackened Coconut Chicken",
    description: "Chicken braised in spiced coconut milk with turmeric, lemongrass, and aromatics, blackened with a paste of burnt coconut, then finished over fire. The near-black colour and smoky-sweet coconut flavour are the defining elements.",
    category: "MINDANAO / CHICKEN", time: "90M", yield: "5 PAX", origin: "SULU / TAUSUG", technique: "CHARRED COCONUT",
    ingredients: [
      {name:"Chicken leg quarters",metric:"1.2 kg",imperial:"2.6 lb"},{name:"Grated coconut",metric:"200 g",imperial:"7 oz"},
      {name:"Turmeric",metric:"25 g",imperial:"0.9 oz"},{name:"Ginger",metric:"40 g",imperial:"1.4 oz"},
      {name:"Lemongrass",metric:"2 stalks",imperial:"2 stalks"},{name:"Garlic",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Onion",metric:"150 g",imperial:"5.3 oz"},{name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Chili",metric:"5 pcs",imperial:"5 pcs"},{name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Toast the grated coconut in a dry pan until very dark and aromatic. Cool slightly and grind into a coarse paste with ginger, garlic, turmeric, and onion.",
      "Rub the chicken with half of the coconut paste and rest for 20 minutes.",
      "Brown the chicken in a wide pot or grill pan. Add the remaining paste and cook until fragrant.",
      "Pour in coconut milk and add chilies. Simmer covered for 25–30 minutes until the chicken is cooked.",
      "Uncover and reduce until the sauce clings to the chicken. Continue until the coconut paste darkens and becomes almost dry.",
      "Serve with rice, keeping the charred coconut coating attached to the chicken."
    ],
    notes: ["Pyanggang is a southern Filipino preparation in which coconut is intentionally charred to create a dark, smoky paste."],
    verification: "verified",
    verificationNote: "Corrected: this entry previously gave the origin as Maguindanao. Piyanggang manok is Tausug, from Sulu and the wider Zamboanga peninsula, Basilan and Tawi-Tawi.",
    history: "Piyanggang manok is a Tausug celebration dish from Sulu, also cooked across Basilan, Tawi-Tawi and the Zamboanga peninsula. Its blackness comes from pamapa itum, coconut toasted until dark and ground to a paste. In Tausug, piyanggang describes marinating and then grilling: the chicken is braised in spiced coconut milk before it meets the fire.",
    sources: [
      "https://en.wikipedia.org/wiki/Piyanggang_manok",
      "https://www.pepper.ph/recipes/chicken-pyanggang-tausug-coconut-chicken",
      "https://theodehlicious.com/piyanggang-manok/"
    ]
  },
  {
    slug: "beef-kulma", title: "Beef Kulma", subtitle: "Mindanao Beef & Coconut Stew",
    description: "A southern Filipino beef stew influenced by the region's spice traditions, combining tender beef, coconut milk, aromatics, and warm spices into a rich sauce.",
    category: "MINDANAO / STEW", time: "2H 30M", yield: "6 PAX", origin: "ZAMBOANGA / TAUSUG", technique: "SPICED BRAISE",
    image: local("beef-kulma.jpg"),
    ingredients: [
      {name:"Beef chuck",metric:"1 kg",imperial:"2.2 lb"},{name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Tomatoes, diced",metric:"250 g",imperial:"9 oz"},{name:"Potatoes, cubed",metric:"400 g",imperial:"14 oz"},
      {name:"Garlic",metric:"6 cloves",imperial:"6 cloves"},{name:"Onion",metric:"180 g",imperial:"6.3 oz"},
      {name:"Ginger",metric:"30 g",imperial:"1 oz"},{name:"Turmeric",metric:"10 g",imperial:"2 tsp"},
      {name:"Ground cumin",metric:"1 tsp",imperial:"1 tsp"},{name:"Chili",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Water",metric:"500 ml",imperial:"2 cups"}
    ],
    instructions: [
      "Brown the beef in batches in a heavy pot. Remove and reserve.",
      "Sauté onion, garlic, ginger, turmeric, and cumin until aromatic. Add tomatoes and cook until they begin to break down.",
      "Return the beef and add water. Simmer covered for 75–90 minutes until tender.",
      "Add coconut milk, potatoes, and chili. Simmer uncovered for 20–25 minutes until the potatoes are tender.",
      "Reduce the sauce until it lightly coats the beef. Taste and adjust salt and chili.",
      "Serve hot with steamed rice."
    ],
    notes: ["Mindanao's southern cuisines reflect centuries of maritime and Muslim trading connections; spice and coconut combinations vary by community."],
    verification: "verified",
    history: "Kulma — also written kurma — is the Tausug reading of the korma that travelled the Indian Ocean and the Malay world: beef simmered in coconut milk with ground peanuts, tomato and warm spices, sitting somewhere between a curry and kare-kare. It is cooked for Ramadan and other occasions, and is often eaten with palapa, the Maranao condiment of scallion and chilli.",
    sources: [
      "https://www.angsarap.net/2018/02/28/tausug-beef-kulma/",
      "https://www.pepper.ph/recipes/cheat-tausug-beef-kulma"
    ]
  },
  {
    slug: "kinilaw-na-tanigue", title: "Kinilaw na Tanigue", subtitle: "Visayan Vinegar-Cured Fish",
    description: "Fresh tanigue cured in vinegar and brightened with ginger, onion, chili, and calamansi. The fish is acid-cured rather than cooked by heat, so freshness and food safety are critical.",
    category: "VISAYAS / SEAFOOD", time: "30M", yield: "4 PAX", origin: "VISAYAS", technique: "VINEGAR CURE",
    image: commons("Kinilaw of Northern Mindanao.jpg"), imageSource: commonsPage("Kinilaw of Northern Mindanao.jpg"),
    ingredients: [
      {name:"Fresh tanigue (Spanish mackerel), sashimi-grade",metric:"500 g",imperial:"1.1 lb"},{name:"Cane vinegar",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Calamansi juice",metric:"60 ml",imperial:"1/4 cup"},{name:"Ginger, julienned",metric:"40 g",imperial:"1.4 oz"},
      {name:"Red onion, thinly sliced",metric:"100 g",imperial:"3.5 oz"},{name:"Green chili",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Cucumber, diced",metric:"100 g",imperial:"3.5 oz"},{name:"Salt",metric:"5 g",imperial:"1 tsp"}
    ],
    instructions: [
      "Keep the fish refrigerated until preparation. Remove skin and bones and cut the flesh into 1.5 cm (1/2 inch) cubes.",
      "Toss the fish with salt and half of the vinegar. Rest for 5–10 minutes, then drain excess liquid.",
      "Add remaining vinegar, calamansi, ginger, onion, chili, and cucumber.",
      "Toss gently and rest for another 5–10 minutes. Do not leave the fish submerged for a long period or its texture will become chalky.",
      "Taste for acidity and salt. Serve immediately while the fish remains firm and fresh."
    ],
    notes: ["Use fish specifically appropriate for raw consumption and maintain strict cold-chain handling. Acid does not reliably eliminate all foodborne hazards.","Kinilaw is a broad Filipino preparation method with many regional variations."]
  },
  {
    slug: "sinuglaw", title: "Sinuglaw", subtitle: "Grilled Pork & Kinilaw",
    description: "A Visayas-Mindanao combination of smoky grilled pork and bright vinegar-cured fish. The contrast of rendered pork fat, fresh seafood, vinegar, citrus, and chili is the central idea.",
    category: "VISAYAS-MINDANAO / SEAFOOD", time: "60M", yield: "4 PAX", origin: "VISAYAS & MINDANAO", technique: "GRILL + CURE",
    ingredients: [
      {name:"Pork belly",metric:"400 g",imperial:"14 oz"},{name:"Fresh tuna, sashimi-grade",metric:"300 g",imperial:"10.5 oz"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},{name:"Calamansi juice",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Red onion",metric:"100 g",imperial:"3.5 oz"},{name:"Ginger",metric:"25 g",imperial:"0.9 oz"},
      {name:"Chili",metric:"4 pcs",imperial:"4 pcs"},{name:"Cucumber",metric:"100 g",imperial:"3.5 oz"},
      {name:"Salt",metric:"5 g",imperial:"1 tsp"}
    ],
    instructions: [
      "Cut pork belly into thick strips and grill over charcoal until cooked through, well browned, and smoky. Cool slightly and cut into bite-sized pieces.",
      "Cut the chilled tuna into 1.5 cm (1/2 inch) cubes. Toss with vinegar and salt and rest briefly.",
      "Drain excess vinegar from the tuna, then add calamansi, onion, ginger, chili, and cucumber.",
      "Fold the grilled pork into the kinilaw mixture immediately before serving so the pork remains smoky and the fish remains fresh.",
      "Taste for salt, acid, and heat. Serve chilled or cool with rice or as pulutan."
    ],
    notes: ["Sinuglaw combines sinugba (grilling) and kinilaw (vinegar curing) and is strongly associated with Visayas and Mindanao food culture.","Follow the same raw-fish safety requirements as kinilaw."]
  },
  {
    slug: "utan-bisaya", title: "Utan Bisaya", subtitle: "Visayan Mixed Vegetable Soup",
    description: "A light Cebuano-style vegetable soup in which squash, okra, eggplant, beans, and leafy greens are cooked in a simple savory broth. The vegetables remain distinct rather than becoming a puree.",
    category: "VISAYAS / VEGETABLE", time: "35M", yield: "5 PAX", origin: "CEBU / VISAYAS", technique: "STAGED SIMMER",
    image: local("utan-bisaya.jpg"), imageSource: commonsPage("Utan_Bisaya.jpg"),
    ingredients: [
      {name:"Kalabasa",metric:"300 g",imperial:"10.5 oz"},{name:"Eggplant",metric:"200 g",imperial:"7 oz"},
      {name:"Okra",metric:"150 g",imperial:"5.3 oz"},{name:"String beans",metric:"150 g",imperial:"5.3 oz"},
      {name:"Tomatoes",metric:"200 g",imperial:"7 oz"},{name:"Malunggay leaves",metric:"100 g",imperial:"3.5 oz"},
      {name:"Water",metric:"1.2 L",imperial:"5 cups"},{name:"Garlic",metric:"4 cloves",imperial:"4 cloves"},
      {name:"Onion",metric:"120 g",imperial:"4.2 oz"},{name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Bring water to a simmer with onion, garlic, tomatoes, and fish sauce.",
      "Add kalabasa and cook for 6–8 minutes until nearly tender.",
      "Add string beans and eggplant. Simmer for another 4 minutes.",
      "Add okra and cook for 3 minutes. Avoid vigorous stirring so the vegetables retain their shapes.",
      "Add malunggay leaves and cook for 1–2 minutes until wilted.",
      "Taste the broth and serve immediately with rice."
    ],
    notes: ["Utan is a family of vegetable preparations across the Visayas; the exact vegetable mix changes with season and locality."]
  },
  {
    slug: "lechon-cebu-style", title: "Lechon Cebu-Style", subtitle: "Herb-Stuffed Roasted Whole Pig",
    description: "Cebu's celebrated whole-roasted pig, traditionally stuffed with aromatics such as lemongrass, garlic, and native herbs, then slowly roasted until the skin is crisp and the meat tender.",
    category: "CEBU / ROAST", time: "8H", yield: "20+ PAX", origin: "CEBU", technique: "WHOLE-PIG ROAST",
    image: commons("Lechon sa Cebu.jpg"), imageSource: commonsPage("Lechon sa Cebu.jpg"),
    ingredients: [
      {name:"Whole suckling pig, cleaned",metric:"15 kg",imperial:"33 lb"},{name:"Lemongrass",metric:"20 stalks",imperial:"20 stalks"},
      {name:"Garlic, crushed",metric:"300 g",imperial:"10.5 oz"},{name:"Onion",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Green onions",metric:"300 g",imperial:"10.5 oz"},{name:"Salt",metric:"120 g",imperial:"7 tbsp"},
      {name:"Black pepper",metric:"30 g",imperial:"3 tbsp"},{name:"Banana leaves",metric:"as needed",imperial:"as needed"}
    ],
    instructions: [
      "Clean and dry the pig thoroughly. Rub the cavity and exterior with salt and black pepper.",
      "Pack the cavity tightly with bruised lemongrass, garlic, onion, and green onions. Sew or truss the opening closed.",
      "Secure the pig to a roasting spit. Keep the body balanced so it rotates evenly.",
      "Roast slowly over charcoal, rotating continuously. Baste periodically with rendered fat or pan juices while protecting the skin from scorching.",
      "Continue roasting until the thickest meat is fully cooked and the skin becomes crisp and blistered. Exact time depends on pig size and fire temperature.",
      "Rest for at least 20 minutes before carving. Serve with rice, liver sauce, vinegar, or a traditional Cebu-style dipping sauce."
    ],
    notes: ["Whole-pig roasting requires specialized equipment and careful temperature control. Verify the meat reaches a safe internal temperature before service."]
  },
  {
    slug: "bringhe", title: "Bringhe", subtitle: "Kapampangan Glutinous Rice & Chicken",
    description: "A Kapampangan rice dish often described as a Filipino interpretation of paella, using glutinous rice, chicken, coconut milk, turmeric, and vegetables. It is traditionally prepared for gatherings and fiestas.",
    category: "PAMPANGA / RICE", time: "75M", yield: "8 PAX", origin: "PAMPANGA", technique: "ONE-PAN RICE",
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},{name:"Chicken thighs",metric:"700 g",imperial:"1.5 lb"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},{name:"Chicken stock",metric:"700 ml",imperial:"3 cups"},
      {name:"Turmeric",metric:"15 g",imperial:"1 tbsp"},{name:"Garlic",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Onion",metric:"180 g",imperial:"6.3 oz"},{name:"Bell pepper",metric:"150 g",imperial:"5.3 oz"},
      {name:"Carrot",metric:"150 g",imperial:"5.3 oz"},{name:"Green peas",metric:"120 g",imperial:"4.2 oz"}
    ],
    instructions: [
      "Rinse the glutinous rice until the water runs mostly clear. Drain well.",
      "Brown the chicken in a wide heavy pan. Remove and reserve.",
      "Sauté onion and garlic, then add turmeric and cook briefly until aromatic.",
      "Add rice, coconut milk, and stock. Return the chicken and bring to a gentle simmer.",
      "Cover and cook over low heat until the rice is tender and the liquid absorbed, about 25–30 minutes.",
      "Fold in bell pepper, carrot, and peas during the final 8 minutes. Rest covered for 10 minutes before serving."
    ],
    notes: ["Kapampangan bringhe is a fiesta-oriented rice preparation with many household variations in toppings and seasoning."]
  },
  {
    slug: "tocino-kapampangan", title: "Tocino Kapampangan", subtitle: "Pampanga-Style Sweet Cured Pork",
    description: "Thin pork slices cured with sugar, salt, garlic, and traditional coloring ingredients, then pan-cooked until caramelized. It is commonly served as part of a tosilog plate.",
    category: "PAMPANGA / CURED", time: "24H + 25M", yield: "4 PAX", origin: "PAMPANGA", technique: "DRY CURE + CARAMELIZE",
    image: local("tocino.jpg"), imageSource: commonsPage("Tocino.jpg"),
    ingredients: [
      {name:"Pork shoulder, thinly sliced",metric:"750 g",imperial:"1.65 lb"},{name:"Brown sugar",metric:"120 g",imperial:"1/2 cup"},
      {name:"Salt",metric:"18 g",imperial:"1 tbsp"},{name:"Garlic, minced",metric:"30 g",imperial:"2 tbsp"},
      {name:"Annatto powder",metric:"5 g",imperial:"1 tsp"},{name:"Pineapple juice",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Combine sugar, salt, garlic, annatto, and pineapple juice into a paste. Rub thoroughly over the pork.",
      "Cover and refrigerate for 12–24 hours. Turn once during curing.",
      "Place the pork in a skillet with the water and any remaining cure. Bring to a simmer.",
      "Cook until the water evaporates and the pork begins to fry in its rendered fat and sugar.",
      "Reduce the heat and turn frequently until the slices are glossy, caramelized, and fully cooked.",
      "Serve with garlic fried rice and egg for a traditional silog-style breakfast."
    ],
    notes: ["Tocino varies widely in sweetness and color; Kapampangan versions are often particularly aromatic and garlicky."]
  },
  {
    slug: "dinuguang-kapampangan", title: "Dinuguan", subtitle: "Pork Blood Stew",
    description: "A dark, savory Filipino stew of pork and pork offal enriched with fresh pork blood and sharpened with vinegar. This version follows the thicker, intensely savory style common in Luzon.",
    category: "LUZON / STEW", time: "90M", yield: "6 PAX", origin: "LUZON", technique: "VINEGAR + BLOOD",
    image: commons("Cooking of meat in preparation for Dinuguan dish.jpg"), imageSource: commonsPage("Cooking of meat in preparation for Dinuguan dish.jpg"),
    ingredients: [
      {name:"Pork shoulder",metric:"500 g",imperial:"1.1 lb"},{name:"Pork belly",metric:"300 g",imperial:"10.5 oz"},
      {name:"Pork liver",metric:"200 g",imperial:"7 oz"},{name:"Fresh pork blood",metric:"500 ml",imperial:"2 cups"},
      {name:"Cane vinegar",metric:"180 ml",imperial:"3/4 cup"},{name:"Garlic",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Onion",metric:"180 g",imperial:"6.3 oz"},{name:"Green chili",metric:"4 pcs",imperial:"4 pcs"},
      {name:"Water",metric:"500 ml",imperial:"2 cups"},{name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Brown the pork belly and shoulder in a heavy pot. Add onion and garlic and cook until aromatic.",
      "Add vinegar and simmer without stirring for 3 minutes so the raw vinegar aroma cooks off.",
      "Add water and simmer covered for 40–50 minutes until the pork is tender.",
      "Add liver and cook for 5–7 minutes. Stir the fresh blood thoroughly before adding it to the pot in a slow stream.",
      "Simmer gently while stirring until the blood thickens the stew and loses its raw appearance. Do not boil violently.",
      "Add chilies and adjust salt and vinegar. Serve hot with steamed rice or puto."
    ],
    notes: ["Use fresh, food-safe pork blood from a reputable source and keep it refrigerated until use.","Vinegar should remain noticeable but integrated into the savory stew rather than tasting raw."]
  }
,

  {
    slug: "tamalos-catbalogan", title: "Tamalos", subtitle: "Catbalogan-Style Waray Tamale",
    description: "A distinctive Samareño heirloom dish from Catbalogan built from rice dough, pork, a piquant pipi-an filling, and a thick peanut sauce. The assembled parcels are wrapped in banana leaves and steamed until the rice dough becomes tender and cohesive.",
    category: "SAMAR / STEAMED", time: "2H 30M", yield: "6 PAX", origin: "CATBALOGAN, SAMAR", technique: "BANANA-LEAF STEAM",
    ingredients: [
      {name:"Glutinous rice flour",metric:"300 g",imperial:"2 1/2 cups"},{name:"Water",metric:"360 ml",imperial:"1 1/2 cups"},
      {name:"Pork belly, cooked and sliced",metric:"500 g",imperial:"1.1 lb"},{name:"Raw peanuts, finely ground",metric:"150 g",imperial:"1 cup"},
      {name:"Glutinous rice, finely ground",metric:"60 g",imperial:"1/3 cup"},{name:"Garlic, minced",metric:"20 g",imperial:"4 cloves"},
      {name:"Onion, minced",metric:"100 g",imperial:"3.5 oz"},{name:"Red chilies, minced",metric:"20 g",imperial:"2 tbsp"},
      {name:"Vinegar",metric:"30 ml",imperial:"2 tbsp"},{name:"Annatto oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Banana leaves",metric:"12 pieces",imperial:"12 pieces"},{name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Cook the ground peanuts with 500 ml (2 cups) water over medium-low heat for about 30–40 minutes, stirring periodically, until the mixture becomes thick and creamy.",
      "In a separate pan, warm the annatto oil. Sauté garlic, onion, and chilies until aromatic. Add the peanut mixture, vinegar, and a pinch of salt. Cook until thick enough to spread without running.",
      "Combine glutinous rice flour with water gradually to form a soft, workable rice dough. Divide into portions large enough to wrap around the filling.",
      "Flatten one portion of dough on a lightly oiled banana leaf. Place a strip of cooked pork and a spoonful of the peanut-pipi-an filling in the center. Fold the dough around the filling and seal completely.",
      "Wrap each parcel securely in a second banana leaf. Arrange the tamalos in a steamer without crushing the parcels together.",
      "Steam over actively simmering water for 60–75 minutes. The rice dough should be firm, tender, and fully cooked through.",
      "Rest for 10 minutes before unwrapping. Serve warm, with additional thick peanut sauce if desired."
    ],
    notes: ["Catbalogan Tamalos is documented by the Provincial Government of Samar as an heirloom dish associated with family and barangay kitchens.","The dish is substantially different from the corn-husk tamales familiar in Mexico: its Philippine identity is expressed through rice dough, banana leaves, pork, peanut sauce, and local aromatics."],
    verification: "verified",
    history: "Tamalos descends from the Mexican tamal, carried across the Pacific on the Manila–Acapulco galleons (1565–1815) and remade in Catbalogan as a Waray dish. Rice dough is spread on banana leaves and filled with slow-braised pork and pipi-an — ground glutinous rice worked with chillies and pasotes leaves for its piquancy — then blanketed in a thick annatto-tinted peanut sauce and steamed for hours. It remains a dish for fiestas and a common gift.",
    sources: [
      "https://www.rappler.com/life-and-style/food-drinks/have-you-tried-tamalos-samar-saucy-delicacy/",
      "https://pia.gov.ph/features/samars-kitchen-hero-captivates-terra-madre-crowd-with-heritage-tamalos-demo/",
      "http://dude4food.blogspot.com/2017/04/flavors-of-catbalogan-tasty-encounter.html"
    ]
  },
  {
    slug: "kinakulob-na-manok", title: "Kinakulob na Manok", subtitle: "Eastern Samar Covered-Pot Chicken",
    description: "A Waray-style chicken preparation from Eastern Samar in which chicken, garlic, ginger, vinegar, soy sauce, bay leaf, and pepper cook together in a tightly covered pot. The restrained technique produces tender meat and a concentrated savory-vinegar braising liquid.",
    category: "EASTERN SAMAR / CHICKEN", time: "60M", yield: "4 PAX", origin: "EASTERN SAMAR", technique: "TIGHT-LID BRAISE",
    ingredients: [
      {name:"Native or free-range chicken, jointed",metric:"1 kg",imperial:"2.2 lb"},{name:"Garlic, crushed",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Fresh ginger, sliced",metric:"40 g",imperial:"1.4 oz"},{name:"Coconut vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},{name:"Water",metric:"240 ml",imperial:"1 cup"},
      {name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},{name:"Black peppercorns",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Arrange the chicken in a heavy pot with the garlic, ginger, vinegar, soy sauce, water, bay leaves, and peppercorns.",
      "Bring the mixture to a boil over medium heat. Once boiling, reduce to low and cover the pot tightly.",
      "Cook for 35–45 minutes, turning the chicken once or twice, until the meat is tender and the thickest pieces reach at least 74°C (165°F).",
      "Remove the lid and increase the heat slightly. Reduce the braising liquid until it lightly coats the chicken and the vinegar tastes integrated rather than raw.",
      "Rest for 5 minutes and serve with steamed rice."
    ],
    notes: ["The defining technique is the covered, one-pot cooking method: the ingredients are combined rather than separately browned or built into a complex sauce.","Eastern Samar sources describe this preparation with coconut vinegar, soy sauce, ginger, garlic, bay leaves, pepper, and water."],
    verification: "unverified",
    verificationNote: "No source found. Repeated searches for a Waray or Eastern Samar dish by this name returned nothing; the closest documented dish is the Tagalog kinulob/pinaupong manok, which is not the same claim. Treat the regional attribution as provisional until a source is found."
  },
  {
    slug: "kinarabu-palo", title: "Kinarabu", subtitle: "Pako Salad with Charred Coconut",
    description: "A rare Leyte preparation documented in Palo: tender fiddlehead fern is combined with dried anchovies, onion, tomato, vinegar, and grated charred coconut. It is a sharp, smoky, textural salad that reflects the region's use of local greens and coconut.",
    category: "LEYTE / VEGETABLE", time: "25M", yield: "4 PAX", origin: "PALO, LEYTE", technique: "CHARRED COCONUT",
    ingredients: [
      {name:"Pako (fiddlehead fern) tips",metric:"300 g",imperial:"10.5 oz"},{name:"Dilis, toasted",metric:"40 g",imperial:"1.4 oz"},
      {name:"Tomatoes, diced",metric:"150 g",imperial:"5.3 oz"},{name:"Red onion, thinly sliced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Fresh coconut meat",metric:"100 g",imperial:"3.5 oz"},{name:"Vinegar",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Salt",metric:"4 g",imperial:"3/4 tsp"},{name:"Black pepper",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Inspect the pako carefully and remove tough stems. Blanch the fern tips in boiling water for 60–90 seconds, then cool immediately in cold water and drain thoroughly.",
      "Place the fresh coconut meat in a dry skillet and toast over medium heat, stirring constantly, until deeply golden in spots and fragrant. Cool and grate or finely chop.",
      "Combine pako, toasted dilis, tomato, and onion in a bowl.",
      "Add vinegar, salt, and black pepper. Toss gently, then fold in the charred coconut.",
      "Rest for 5 minutes before serving so the vinegar can season the vegetables without making them limp."
    ],
    notes: ["The Eastern Visayas food-mapping project documents kinarabu or kerabu in Palo, Leyte as a salad using pako, dilis, onion, tomato, vinegar, and grated charred coconut.","Use properly identified edible fiddlehead fern from a reliable source; not all fern species are safe to eat."],
    verification: "verified",
    history: "Kinarabu is a rare salad documented in the town of Palo, Leyte: young pako fronds tossed with toasted dilis, onion, tomato, vinegar and grated charred coconut. The name is also written kerabu, linking it to the herb salads of the same name found across maritime Southeast Asia.",
    sources: [
      "https://pia.gov.ph/mapping-waray-culinary-heritage-flavors-of-the-past-bites-into-the-future/",
      "https://www.rappler.com/philippines/visayas/palo-leytes-historic-town-showcases-rich-gastronomy-culture/"
    ]
  },
  {
    slug: "inutok-na-hipon", title: "Inutok", subtitle: "Carigara Freshwater Shrimp in Young Coconut",
    description: "A rare Carigara, Leyte preparation in which small freshwater shrimp are minced and mixed with young coconut and local aromatics, then wrapped in banana leaves and steamed. The result is delicate, moist, and intensely coconut-scented.",
    category: "LEYTE / SEAFOOD", time: "45M", yield: "4 PAX", origin: "CARIGARA, LEYTE", technique: "BANANA-LEAF STEAM",
    ingredients: [
      {name:"Small freshwater shrimp, peeled",metric:"500 g",imperial:"1.1 lb"},{name:"Young coconut meat, finely chopped",metric:"180 g",imperial:"6.3 oz"},
      {name:"Garlic, minced",metric:"4 cloves",imperial:"4 cloves"},{name:"Ginger, minced",metric:"20 g",imperial:"0.7 oz"},
      {name:"Onion, minced",metric:"100 g",imperial:"3.5 oz"},{name:"Coconut vinegar",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Salt",metric:"5 g",imperial:"1 tsp"},{name:"Black pepper",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Banana leaves",metric:"8 pieces",imperial:"8 pieces"}
    ],
    instructions: [
      "Finely mince the peeled shrimp with a knife or pulse briefly in a food processor. Do not puree completely; a little texture should remain.",
      "Combine the shrimp with young coconut, garlic, ginger, onion, vinegar, salt, and pepper. Mix until evenly distributed.",
      "Soften the banana leaves over a flame or in hot water. Place approximately 100 g (3.5 oz) of the shrimp mixture in the center of each leaf.",
      "Fold into compact packets and secure with strips of banana leaf or kitchen twine.",
      "Steam for 20–25 minutes until the shrimp is opaque and the mixture is firm.",
      "Rest briefly before opening. Serve hot with rice and a small vinegar dipping sauce."
    ],
    notes: ["Eastern Visayas food mapping identifies inutok of Carigara as a preparation made from small freshwater shrimp, young coconut, and local spices, wrapped in banana leaves and steamed.","Because shrimp cooks quickly, avoid extended steaming, which can make the filling dry and rubbery."],
    verification: "verified",
    history: "Inutok is an heirloom dish of Carigara, Leyte. Small freshwater shrimp are minced with young coconut and local aromatics, pressed tightly into banana-leaf parcels and steamed until firm. Where most banana-leaf parcels in Eastern Visayas are sweet rice cakes, inutok is savoury — nutty from the coconut, deeply of shrimp.",
    sources: [
      "https://opinyon.net/national/inutok-of-carigara-a-heritage-dish-wrapped-in-flavor",
      "https://pia.gov.ph/mapping-waray-culinary-heritage-flavors-of-the-past-bites-into-the-future/"
    ]
  },
  {
    slug: "moron-leyte", title: "Moron", subtitle: "Leyte Chocolate Glutinous Rice Cake",
    description: "A Waray rice cake associated with Leyte and Eastern Visayas. Glutinous rice is cooked with coconut milk and sugar, layered or blended with cocoa or chocolate, wrapped in banana leaves, and steamed into a soft, dense kakanin.",
    category: "LEYTE / KAKANIN", time: "90M", yield: "8 PAX", origin: "LEYTE / EASTERN VISAYAS", technique: "BANANA-LEAF STEAM",
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},{name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Brown sugar",metric:"150 g",imperial:"3/4 cup"},{name:"Cocoa powder",metric:"30 g",imperial:"1/3 cup"},
      {name:"Dark chocolate, finely chopped",metric:"80 g",imperial:"2.8 oz"},{name:"Salt",metric:"3 g",imperial:"1/2 tsp"},
      {name:"Banana leaves",metric:"12 pieces",imperial:"12 pieces"}
    ],
    instructions: [
      "Rinse the glutinous rice until the water is mostly clear. Soak for 2 hours, then drain thoroughly.",
      "Combine the rice, coconut milk, sugar, and salt in a heavy pan. Cook over low heat, stirring frequently, until the rice is partially cooked and the mixture is thick but still moldable.",
      "Divide the mixture in half. Stir cocoa powder and chopped chocolate into one portion while it is still hot so the chocolate melts evenly.",
      "Soften banana leaves and wipe them dry. Place a narrow strip of the plain coconut-rice mixture beside a strip of chocolate rice, then roll tightly into a cylinder.",
      "Wrap each cylinder securely in banana leaves and tie with kitchen twine or thin banana-leaf strips.",
      "Steam for 35–45 minutes until the rice cake is fully tender and cohesive. Cool for 10 minutes before unwrapping and slicing."
    ],
    notes: ["Moron is a traditional Eastern Visayan rice cake similar in form to suman, distinguished by coconut milk and chocolate or cocoa.","Regional spelling varies between moron and muron; the food should not be confused with the unrelated English word."]
  },
  {
    slug: "adobong-baboy", title: "Adobong Baboy", subtitle: "Pork Adobo",
    description: "Pork belly simmered in soy sauce, vinegar, garlic, bay and peppercorns until tender, then reduced until the sauce turns glossy and clings. The pork renders enough fat to fry itself at the end.",
    category: "MAIN / BRAISE", time: "75M", yield: "4\u20136 PAX", origin: "PHILIPPINES", technique: "VINEGAR REDUCTION",
    image: local("adobong-baboy.jpg"),
    ingredients: [
      {name:"Pork belly, 2.5 cm cubes",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Soy sauce",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},
      {name:"Garlic, crushed",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Brown sugar",metric:"10 g",imperial:"2 tsp"},
      {name:"Neutral oil",metric:"15 ml",imperial:"1 tbsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Combine the pork, soy sauce, half the garlic and the peppercorns in a bowl. Marinate for at least 1 hour, or overnight in the refrigerator for a deeper cure.",
      "Drain the pork, reserving the marinade. Pat the pieces dry \u2014 wet pork will steam rather than brown.",
      "Heat the oil in a heavy pot over medium-high heat. Brown the pork in batches, in a single layer, until well coloured on two sides. Crowding the pot will stall the browning.",
      "Lower the heat to medium, add the remaining garlic and cook for 45 seconds until aromatic. Pour in the vinegar and bring it to a vigorous simmer. Do not stir for the first 2 minutes; let the raw acidity cook off.",
      "Add the reserved marinade, water, bay leaves and sugar. Bring to a boil, then reduce to a steady simmer, cover partially, and cook for 40\u201350 minutes until the pork yields easily to a fork.",
      "Uncover, raise the heat and reduce the liquid for 8\u201312 minutes until it darkens and coats the back of a spoon. The rendered fat will begin to fry the pork in the pan \u2014 this is the point of the dish.",
      "Taste and correct with salt. Rest for 5 minutes and serve with steamed rice, spooning the reduced sauce over the meat."
    ],
    notes: [
      "Adobo has no single canonical recipe; the soy-to-vinegar ratio, the sugar, and the presence of coconut milk all vary by household and region.",
      "The sauce should read savoury and sharply acidic first, with sweetness only in the background."
    ],
    verification: "verified",
    history: "Adobo takes its name from the Spanish adobar, to marinate, but preserving meat in vinegar and salt predates Spanish contact in the islands. What the Spanish supplied was the word. Soy sauce arrived later through Chinese trade, which is why older and more rural versions are pale rather than dark.",
    sources: [
      "https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/",
      "https://www.kawalingpinoy.com/pork-adobo/"
    ]
  },
  {
    slug: "adobong-manok", title: "Adobong Manok", subtitle: "Chicken Adobo",
    description: "Chicken braised in vinegar, soy sauce, garlic and peppercorns, then reduced until the sauce glazes the skin. Faster and lighter than the pork version, and more dependent on rendering the skin properly.",
    category: "MAIN / BRAISE", time: "55M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR REDUCTION",
    image: local("adobong-manok.jpg"),
    ingredients: [
      {name:"Chicken thighs, bone-in",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Soy sauce",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Cane vinegar",metric:"100 ml",imperial:"1/2 cup"},
      {name:"Water",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Bay leaves",metric:"2 leaves",imperial:"2 leaves"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Brown sugar",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Neutral oil",metric:"15 ml",imperial:"1 tbsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Marinate the chicken in the soy sauce, half the garlic and the peppercorns for 30 minutes to 2 hours.",
      "Drain, reserving the marinade, and pat the skin thoroughly dry.",
      "Heat the oil over medium-high heat. Lay the chicken skin-side down and render undisturbed for 5\u20137 minutes, until the skin is deeply golden. Turn, brown briefly, and remove.",
      "Add the remaining garlic to the rendered fat and cook for 45 seconds. Add the vinegar and simmer hard for 2 minutes without stirring.",
      "Add the reserved marinade, water, bay leaves and sugar. Return the chicken skin-side up. Simmer uncovered for 20\u201325 minutes, until cooked through.",
      "Lift out the chicken. Reduce the sauce for 5\u20138 minutes until syrupy, then return the chicken and turn once to glaze.",
      "Rest for 5 minutes and serve with rice. Spoon the sauce over at the table rather than before, so the skin stays taut."
    ],
    notes: [
      "Keeping the chicken skin-side up while it simmers protects the crust built in step 3.",
      "Thighs hold up to the acid far better than breast, which dries out before the sauce has reduced."
    ],
    verification: "verified",
    history: "Chicken adobo is the form best known outside the Philippines, though within the country pork, or a combination of the two, is at least as common. Regional practice varies widely: Cavite versions add liver, Batangas keeps it pale without soy, and Bicol and Laguna finish it with coconut milk.",
    sources: [
      "https://www.kawalingpinoy.com/chicken-adobo/",
      "https://panlasangpinoy.com/filipino-food-chicken-adobo-recipe/"
    ]
  },
  {
    slug: "bulalo", title: "Bulalo", subtitle: "Batangas Beef Shank & Marrow Soup",
    description: "Beef shank and marrow bones simmered for hours until the collagen melts into a clear, beefy broth, finished with corn and green vegetables. The marrow is the prize and is eaten straight from the bone.",
    category: "SOUP / BEEF", time: "3H", yield: "6 PAX", origin: "BATANGAS / CAVITE", technique: "MARROW SIMMER",
    image: local("bulalo.jpg"), imageSource: commonsPage("BULALO.jpg"),
    ingredients: [
      {name:"Beef shank, cross-cut with marrow bone",metric:"1.5 kg",imperial:"3.3 lb"},
      {name:"Water",metric:"3.0 L",imperial:"12 1/2 cups"},
      {name:"Yellow onion, quartered",metric:"200 g",imperial:"7 oz"},
      {name:"Garlic, crushed",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Sweet corn, cut into rounds",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cabbage, wedged",metric:"300 g",imperial:"10.5 oz"},
      {name:"Bok choy",metric:"200 g",imperial:"7 oz"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Cover the shank with cold water in a large pot and bring slowly to a boil. Boil for 5 minutes, then drain and rinse both the meat and the pot. This one step is what keeps the finished broth clear.",
      "Return the shank to the clean pot with the measured water, onion, garlic and peppercorns. Bring to a boil, then drop to the barest simmer.",
      "Simmer uncovered for 2 to 2 1/2 hours, skimming occasionally, until the meat pulls from the bone and the marrow is soft. Never let it reach a rolling boil, which emulsifies the fat and clouds the broth.",
      "Season with the fish sauce and taste for salt. The broth should read plainly beefy rather than aggressively seasoned.",
      "Add the corn and simmer for 8 minutes.",
      "Add the cabbage and cook for 3 minutes, then the bok choy for a final minute, until just wilted.",
      "Serve in deep bowls, giving each person a section of bone. Offer fish sauce, calamansi and crushed chilli at the table."
    ],
    notes: [
      "Blanching and rinsing in step 1 is not optional if you want the pale, clean broth Batangas bulalo is known for.",
      "Ask the butcher for cross-cut shank with the bone left whole, so the marrow does not leak out during the simmer."
    ],
    verification: "verified",
    history: "Bulalo comes from the cattle country of southern Luzon, above all Batangas and Cavite, where beef was plentiful. The name is the Tagalog word for the knee, meaning the shank and shinbone the dish is built on. It is shared-table food, cooked for gatherings and eaten slowly.",
    sources: [
      "https://en.wikipedia.org/wiki/Bulalo",
      "https://www.foxyfolksy.com/bulalo/"
    ]
  },
  {
    slug: "bistek-tagalog", title: "Bistek Tagalog", subtitle: "Filipino Beef Steak with Onions",
    description: "Thinly sliced beef marinated in soy sauce and calamansi, seared hard, and served under a heap of onion rings softened in the pan juices. Sour and salty, and built around the onions as much as the beef.",
    category: "MAIN / PAN-FRY", time: "40M", yield: "4 PAX", origin: "TAGALOG REGION", technique: "CITRUS-SOY MARINADE",
    image: local("bistek-tagalog-dscf3899.jpg"), imageSource: commonsPage("Bistek_Tagalog_DSCF3899.jpg"),
    ingredients: [
      {name:"Beef sirloin, sliced 5 mm thick",metric:"700 g",imperial:"1.5 lb"},
      {name:"Soy sauce",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Calamansi juice",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Black pepper",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Yellow onion, sliced",metric:"400 g",imperial:"14 oz"},
      {name:"Neutral oil",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Brown sugar",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Pound the beef slices lightly to an even thickness. Marinate with the soy sauce, calamansi juice, garlic and pepper for 1 hour; do not exceed 2 hours, or the citrus will begin to break the meat down.",
      "Separate the onion into rings. Heat 2 tablespoons of the oil in a wide pan over medium heat and cook the onions for 3\u20134 minutes, until softened but still holding their shape. Remove and reserve.",
      "Drain the beef, reserving the marinade, and pat dry.",
      "Raise the heat to high, add the remaining oil, and sear the beef in a single uncrowded layer for 1\u20132 minutes a side. Work in batches; a crowded pan stews the meat grey. Remove each batch as it colours.",
      "Pour the reserved marinade and the water into the hot pan, scraping up the fond. Add the sugar and simmer for 3\u20135 minutes until slightly thickened.",
      "Return the beef and any resting juices. Simmer for 2\u20133 minutes to finish cooking through.",
      "Pile the onions over the top, cover, and let stand off the heat for 2 minutes before serving with rice."
    ],
    notes: [
      "Calamansi is the defining acid here; lemon reads differently, and lime is the closer substitute if calamansi is unavailable.",
      "The onions should stay soft but distinct, not cooked down into caramelised sweetness."
    ],
    verification: "verified",
    history: "Bistek descends from the Spanish bistec encebollado, beef steak with onions, itself borrowed from the English beefsteak. The Filipino version swapped wine and Spanish vinegar for calamansi, leaned on soy sauce for salt, and multiplied the onions. In Western Visayas a close relative is called karne frita.",
    sources: [
      "https://en.wikipedia.org/wiki/Bistek",
      "https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/"
    ]
  },
  {
    slug: "crispy-pata", title: "Crispy Pata", subtitle: "Deep-Fried Pork Knuckle",
    description: "A whole pork leg simmered with aromatics until tender, dried thoroughly, then deep-fried until the skin blisters into glass. Served with a sharp vinegar dip that cuts the fat.",
    category: "PORK / FRIED", time: "2H 30M", yield: "4\u20136 PAX", origin: "MANILA", technique: "BOIL + DEEP FRY",
    image: local("crispy-pata-pork.jpg"), imageSource: commonsPage("Crispy_Pata_Pork.jpg"),
    ingredients: [
      {name:"Pork leg (pata), whole",metric:"1.5 kg",imperial:"3.3 lb"},
      {name:"Water",metric:"3.0 L",imperial:"12 1/2 cups"},
      {name:"Salt",metric:"30 g",imperial:"2 tbsp"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},
      {name:"Black peppercorns",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Neutral frying oil",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Red onion, minced",metric:"60 g",imperial:"2 oz"},
      {name:"Bird\u2019s eye chilies, minced",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Clean the pork leg thoroughly, scraping the skin and removing any remaining hair.",
      "Place it in a deep pot with the water, salt, garlic, bay leaves and peppercorns. Bring to a boil, lower to a simmer, and cook for 1 1/2 hours, until a skewer passes easily through the thickest part.",
      "Lift the leg out and drain. Pat it completely dry, then refrigerate uncovered for at least 3 hours, or overnight. Drying the skin is the whole difference between crackling and leather.",
      "Heat the oil in a deep pot to 175\u00b0C (350\u00b0F). Work near a lid: a wet pork leg will spit violently.",
      "Lower the leg in carefully and fry for 12\u201318 minutes, turning, until the skin is blistered, deep amber and audibly crisp.",
      "Drain upright on a rack for 5 minutes, so the skin does not steam soft against a plate.",
      "Combine the vinegar, onion and chilies for the dip. Chop the pata through the joint and serve at once, while the skin is still loud."
    ],
    notes: [
      "Overnight uncovered refrigeration is the single most important step; a same-day pata will never blister properly.",
      "Frying a leg carrying any surface moisture is genuinely dangerous. Dry it thoroughly and keep a lid within reach."
    ],
    verification: "verified",
    history: "Crispy pata is unusually well documented for a Filipino dish: it was devised in the 1950s by Rodolfo Ongpauco at his family\u2019s Barrio Fiesta restaurant in Caloocan, who deep-fried pork legs that were otherwise being discarded. It spread quickly and is now among the dishes most associated with Filipino cooking abroad. Pata is the Spanish word for an animal\u2019s leg.",
    sources: [
      "https://en.wikipedia.org/wiki/Crispy_pata",
      "https://panlasangpinoy.com/crispy-pata-pulutan-recipe/"
    ]
  },
  {
    slug: "sinigang-na-hipon", title: "Sinigang na Hipon", subtitle: "Shrimp in Sour Tamarind Broth",
    description: "Shrimp poached briefly in a tamarind broth loaded with vegetables. The fastest sinigang there is, and the one most easily ruined by overcooking the shrimp.",
    category: "SOUP / SOUR", time: "35M", yield: "4 PAX", origin: "PHILIPPINES", technique: "TAMARIND BROTH",
    image: local("the-best-sinigang-cuisine.jpg"), imageSource: commonsPage("The_Best_Sinigang_Cuisine.jpg"),
    ingredients: [
      {name:"Large shrimp, head-on",metric:"700 g",imperial:"1.5 lb"},
      {name:"Water",metric:"1.8 L",imperial:"7 1/2 cups"},
      {name:"Tomatoes, quartered",metric:"250 g",imperial:"9 oz"},
      {name:"Yellow onion, quartered",metric:"150 g",imperial:"5 oz"},
      {name:"Tamarind pulp",metric:"100 g",imperial:"3.5 oz"},
      {name:"Daikon radish, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Okra",metric:"120 g",imperial:"4 oz"},
      {name:"String beans, cut",metric:"120 g",imperial:"4 oz"},
      {name:"Water spinach (kangkong)",metric:"120 g",imperial:"4 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Long green chilies",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Bring the water, onion and tomatoes to a boil in a large pot. Simmer for 8 minutes, pressing the tomatoes against the side of the pot to release them.",
      "Mash the tamarind pulp with a cup of the hot broth, strain through a sieve, and stir the sour liquid back into the pot. Discard the fibres.",
      "Add the daikon and simmer for 8 minutes until it can be pierced but still holds shape.",
      "Season with the fish sauce and add the chilies. Taste now and correct the sourness before the shrimp go in \u2014 once they are in, you have no time.",
      "Add the okra and string beans and cook for 3 minutes.",
      "Add the shrimp and cook for 2 to 3 minutes only, until they turn opaque and curl. Kill the heat.",
      "Drop in the kangkong, cover, and let it wilt in the residual heat for 1 minute. Serve at once."
    ],
    notes: [
      "Head-on shrimp make a far better broth; the flavour is in the heads.",
      "Shrimp continue cooking in the hot broth at the table, so pull the pot from the heat while they look barely done."
    ],
    verification: "verified",
    history: "Sinigang is defined by sourness rather than by any one souring agent. Tamarind is the most common, but green mango, guava, kamias, calamansi and batwan all do the work regionally, and the choice is often simply what is in season nearby.",
    sources: [
      "https://panlasangpinoy.com/filipino-food-sour-shrimp-soup-sinigang-na-hipon-recipe/",
      "https://www.foxyfolksy.com/sinigang-na-hipon-shrimp-in-sour-soup/"
    ]
  },
  {
    slug: "sinigang-na-isda", title: "Sinigang na Isda", subtitle: "Milkfish in Sour Tamarind Broth",
    description: "Whole milkfish simmered in tamarind broth with okra, string beans and kangkong. Quicker than the pork version and far more delicate: the fish must go in late and be left alone.",
    category: "SOUP / SOUR", time: "35M", yield: "4 PAX", origin: "PHILIPPINES", technique: "TAMARIND BROTH",
    ingredients: [
      {name:"Milkfish (bangus), cut into steaks",metric:"800 g",imperial:"1.8 lb"},
      {name:"Water",metric:"1.8 L",imperial:"7 1/2 cups"},
      {name:"Tomatoes, quartered",metric:"250 g",imperial:"9 oz"},
      {name:"Yellow onion, quartered",metric:"150 g",imperial:"5 oz"},
      {name:"Tamarind pulp",metric:"100 g",imperial:"3.5 oz"},
      {name:"Daikon radish, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Okra",metric:"120 g",imperial:"4 oz"},
      {name:"String beans, cut",metric:"120 g",imperial:"4 oz"},
      {name:"Water spinach (kangkong)",metric:"120 g",imperial:"4 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Long green chilies",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Bring the water, onion and tomatoes to a boil. Simmer for 8 minutes.",
      "Mash the tamarind pulp with a cup of the hot broth, strain, and return the sour liquid to the pot.",
      "Add the daikon and simmer for 8 minutes, then the okra and string beans for 3 minutes more.",
      "Season with the fish sauce and add the chilies. Get the sourness right at this point.",
      "Lower the fish steaks into the barely simmering broth. Cook for 6 to 8 minutes without stirring; agitating the pot will break the fish apart.",
      "Turn off the heat, add the kangkong, cover, and let it wilt for 5 minutes in the residual heat so the leaves stay green.",
      "Lift the fish out carefully with a slotted spoon and ladle the broth around it."
    ],
    notes: [
      "Do not stir once the fish is in. Move the pot, not the contents.",
      "Bangus is the classic choice, but any firm whole fish works; oily fish gives a heavier broth."
    ],
    verification: "verified",
    history: "Sinigang na isda is the older, more everyday form of the dish in coastal communities, where fish was at hand and pork was not. The souring agent shifts with the region and the season.",
    sources: [
      "https://panlasangpinoy.com/sinigang-na-bangus-recipe/",
      "https://www.recipesbynora.com/sinigang-na-bangus-recipe/"
    ]
  },
  {
    slug: "sinigang-na-baka", title: "Sinigang na Baka", subtitle: "Beef Short Ribs in Sour Tamarind Broth",
    description: "Beef short ribs simmered until tender in a clear tamarind broth with radish, okra and kangkong. The longest-cooking sinigang, and the richest.",
    category: "SOUP / SOUR", time: "2H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "TAMARIND BROTH",
    ingredients: [
      {name:"Beef short ribs",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Water",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Tomatoes, quartered",metric:"250 g",imperial:"9 oz"},
      {name:"Yellow onion, quartered",metric:"180 g",imperial:"6 oz"},
      {name:"Tamarind pulp",metric:"120 g",imperial:"4.2 oz"},
      {name:"Daikon radish, sliced",metric:"200 g",imperial:"7 oz"},
      {name:"Okra",metric:"120 g",imperial:"4 oz"},
      {name:"String beans, cut",metric:"150 g",imperial:"5 oz"},
      {name:"Eggplant, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Water spinach (kangkong)",metric:"150 g",imperial:"5 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Long green chilies",metric:"2 pcs",imperial:"2 pcs"}
    ],
    instructions: [
      "Cover the ribs with cold water, bring to a boil, boil 5 minutes, then drain and rinse the meat and the pot. This keeps the broth clear.",
      "Return the ribs to the pot with the measured water, onion and tomatoes. Simmer gently, partly covered, for 1 1/2 to 2 hours until the meat is tender.",
      "Mash the tamarind pulp with a cup of hot broth, strain, and stir the sour liquid into the pot.",
      "Add the daikon and simmer for 8 minutes, then the eggplant for 4 minutes.",
      "Season with the fish sauce, add the chilies, and adjust the sourness. Beef takes more tamarind than pork or fish.",
      "Add the okra and string beans and cook 3 minutes.",
      "Turn off the heat, add the kangkong, cover and let it wilt for 1 minute. Serve very hot."
    ],
    notes: [
      "Short ribs give more body than lean cuts; the collagen is what makes the broth feel full.",
      "A pressure cooker cuts step 2 to about 30 minutes without hurting the result."
    ],
    verification: "verified",
    history: "Beef sinigang is a comparatively modern and urban variant. The technique is the same across every version: build a savoury base, sour it late, and add vegetables in order of how long they take.",
    sources: [
      "https://panlasangpinoy.com/beef-ribs-sinigang/",
      "https://www.angsarap.net/2010/11/13/sinigang-na-baka-beef-sinigang/"
    ]
  },
  {
    slug: "nilagang-baboy", title: "Nilagang Baboy", subtitle: "Boiled Pork and Vegetable Soup",
    description: "Pork simmered plainly with peppercorns and onion until tender, then finished with potato, cabbage and pechay. Deliberately unseasoned at the pot; the seasoning happens in the dipping sauce.",
    category: "SOUP / PORK", time: "1H 45M", yield: "6 PAX", origin: "PHILIPPINES", technique: "PLAIN SIMMER",
    ingredients: [
      {name:"Pork belly or ribs, cubed",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Water",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Yellow onion, quartered",metric:"180 g",imperial:"6 oz"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Potatoes, halved",metric:"400 g",imperial:"14 oz"},
      {name:"Saba banana, halved",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cabbage, wedged",metric:"300 g",imperial:"10.5 oz"},
      {name:"Bok choy",metric:"200 g",imperial:"7 oz"},
      {name:"String beans, cut",metric:"150 g",imperial:"5 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Cover the pork with cold water, bring to a boil and boil for 5 minutes. Drain, rinse the meat and wash out the pot.",
      "Return the pork with the measured water, onion and peppercorns. Simmer gently for 1 to 1 1/4 hours until tender, skimming as needed.",
      "Season with the fish sauce. Keep it restrained; nilaga is meant to taste of pork and not much else.",
      "Add the potatoes and saba and simmer for 12 minutes until a knife slides in easily.",
      "Add the string beans and cook 3 minutes, then the cabbage for 3 minutes.",
      "Add the bok choy last and cook for 1 minute, until just wilted.",
      "Serve with small dishes of fish sauce and crushed chilli for each person to season their own bowl."
    ],
    notes: [
      "The blanch-and-rinse in step 1 is what separates a clean nilaga from a cloudy one.",
      "Saba banana is traditional and adds a faint sweetness that balances the plain broth."
    ],
    verification: "verified",
    history: "Nilaga simply means boiled. It is the plainest register of Filipino home cooking, built on the idea that a good pot of meat and vegetables needs little more than salt, and that seasoning is the eater's job at the table.",
    sources: [
      "https://panlasangpinoy.com/nilagang-baboy/",
      "https://www.kawalingpinoy.com/nilagang-baboy/"
    ]
  },
  {
    slug: "nilagang-baka", title: "Nilagang Baka", subtitle: "Boiled Beef and Vegetable Soup",
    description: "Beef simmered until it gives, with corn, saba, cabbage and beans. The beef version of nilaga, longer and sweeter than the pork.",
    category: "SOUP / BEEF", time: "2H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "PLAIN SIMMER",
    ingredients: [
      {name:"Beef brisket or shank, cubed",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Water",metric:"3.0 L",imperial:"12 1/2 cups"},
      {name:"Yellow onion, quartered",metric:"180 g",imperial:"6 oz"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Sweet corn, cut into rounds",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Potatoes, halved",metric:"400 g",imperial:"14 oz"},
      {name:"Saba banana, halved",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cabbage, wedged",metric:"300 g",imperial:"10.5 oz"},
      {name:"String beans, cut",metric:"150 g",imperial:"5 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Blanch the beef in boiling water for 5 minutes, then drain and rinse both meat and pot.",
      "Simmer the beef with the measured water, onion and peppercorns for 1 3/4 to 2 1/4 hours, until a fork goes in without resistance.",
      "Season with fish sauce and taste for salt.",
      "Add the corn and simmer 10 minutes.",
      "Add the potatoes and saba and cook 12 minutes.",
      "Add the string beans for 3 minutes, then the cabbage for a final 3 minutes.",
      "Serve in deep bowls with fish sauce and calamansi on the side."
    ],
    notes: [
      "Brisket and shank both work; leaner cuts go dry long before they go tender.",
      "Skim the surface during the first half hour and the broth stays clean."
    ],
    verification: "verified",
    history: "Nilagang baka belongs to the same plain-boiled family as nilagang baboy and bulalo, all of them variations on simmering a tough cut long enough that the broth becomes the point of the dish.",
    sources: [
      "https://panlasangpinoy.com/nilagang-baka-recipe/",
      "https://en.wikipedia.org/wiki/Nilaga"
    ]
  },
  {
    slug: "monggo-guisado", title: "Monggo Guisado", subtitle: "Sauteed Mung Bean Stew",
    description: "Mung beans boiled soft then finished in a sautee of garlic, onion and tomato with pork and leafy greens. Cheap, filling everyday cooking, traditionally eaten on Fridays.",
    category: "STEW / LEGUME", time: "1H", yield: "6 PAX", origin: "PHILIPPINES", technique: "BOIL + SAUTEE",
    image: local("monggojf.jpg"), imageSource: commonsPage("Monggojf.JPG"),
    ingredients: [
      {name:"Dried mung beans",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"1.5 L",imperial:"6 1/3 cups"},
      {name:"Pork belly, small dice",metric:"250 g",imperial:"9 oz"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, diced",metric:"150 g",imperial:"5 oz"},
      {name:"Tomatoes, diced",metric:"200 g",imperial:"7 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Moringa leaves (malunggay)",metric:"80 g",imperial:"3 oz"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Rinse the mung beans and boil them in the water for 35 to 45 minutes, until the skins split and the beans collapse when pressed. Keep the cooking liquid.",
      "In a separate pan, render the pork in the oil over medium heat until browned and its fat has run.",
      "Add the garlic and cook 45 seconds, then the onion until translucent, then the tomatoes. Cook the tomatoes down for 4 to 5 minutes until they break into a paste.",
      "Tip the beans and their liquid into the pan. Simmer for 10 minutes so the flavours meet.",
      "Season with the fish sauce and pepper. Mash some of the beans against the side of the pot to thicken the stew.",
      "Stir in the moringa leaves and cook for 1 minute only, until they darken.",
      "Serve over rice, with fried fish alongside if you have it."
    ],
    notes: [
      "Mashing part of the beans is what gives the stew body; skip it and you get soup.",
      "Spinach stands in for moringa, though it is milder and wilts faster."
    ],
    verification: "verified",
    history: "Ginisang monggo is closely tied to Friday abstinence in a largely Catholic country, which is why it is so often cooked with fish rather than pork, or with no meat at all.",
    sources: [
      "https://panlasangpinoy.com/ginisang-monggo-with-kalabasa/",
      "https://cinnamonsnail.com/vegan-ginisang-munggo/"
    ]
  },
  {
    slug: "ginataang-kalabasa-at-sitaw", title: "Ginataang Kalabasa at Sitaw", subtitle: "Squash and Long Beans in Coconut Milk",
    description: "Squash and yardlong beans simmered in coconut milk with shrimp and shrimp paste, until the squash softens enough to thicken the sauce itself.",
    category: "VEGETABLE / GATA", time: "40M", yield: "4\u20136 PAX", origin: "PHILIPPINES", technique: "COCONUT REDUCTION",
    image: local("ginataang-kalabasa-at-hipon-shrimp-calabaza-green-beans-and-.jpg"), imageSource: commonsPage("Ginataang_kalabasa_at_hipon_(shrimp,_calabaza,_green_beans,_and_eggplant_in_coconut_milk)_-_Philippines.jpg"),
    ingredients: [
      {name:"Squash (kalabasa), cubed",metric:"700 g",imperial:"1.5 lb"},
      {name:"Yardlong beans (sitaw), cut",metric:"250 g",imperial:"9 oz"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Shrimp, peeled",metric:"250 g",imperial:"9 oz"},
      {name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Ginger, julienned",metric:"20 g",imperial:"0.7 oz"},
      {name:"Shrimp paste (bagoong alamang)",metric:"30 g",imperial:"2 tbsp"},
      {name:"Long green chilies",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"}
    ],
    instructions: [
      "Heat the oil in a wide pan. Cook the garlic, onion and ginger over medium heat for 3 minutes until soft and fragrant.",
      "Add the shrimp paste and fry for 1 minute; this takes the raw edge off it.",
      "Pour in the coconut milk and bring to a gentle simmer. Do not let it boil hard or it will split.",
      "Add the squash and simmer for 12 to 15 minutes, until a knife enters easily but the cubes still hold.",
      "Add the yardlong beans and chilies and cook for 5 minutes.",
      "Add the shrimp and the coconut cream and cook for 3 minutes more, until the shrimp are just opaque and the sauce has thickened.",
      "Taste and adjust with more bagoong rather than salt. Serve with rice."
    ],
    notes: [
      "Let some squash cubes break down; they thicken the sauce better than any starch.",
      "Bagoong varies enormously in saltiness, so season with it gradually and taste as you go."
    ],
    verification: "verified",
    history: "Ginataan names the whole family of Filipino dishes cooked in coconut milk, savoury and sweet alike. Squash with yardlong beans is among the most common vegetable versions, and shifts with whatever is in the garden.",
    sources: [
      "https://en.wikipedia.org/wiki/Ginataang_kalabasa",
      "https://theodehlicious.com/ginataang-kalabasa-with-malunggay/"
    ]
  },
  {
    slug: "gising-gising", title: "Gising-Gising", subtitle: "Spicy Winged Beans in Coconut Milk",
    description: "Chopped winged beans cooked down in coconut milk with pork, shrimp paste and a serious quantity of bird's eye chilli. The name means wake up, and it is meant literally.",
    category: "VEGETABLE / GATA", time: "35M", yield: "4 PAX", origin: "CENTRAL LUZON", technique: "COCONUT REDUCTION",
    image: local("sigarilyasjf1338.jpg"), imageSource: commonsPage("Sigarilyasjf1338.JPG"),
    ingredients: [
      {name:"Winged beans (sigarilyas), chopped",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork belly, minced",metric:"250 g",imperial:"9 oz"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Coconut cream",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, minced",metric:"120 g",imperial:"4 oz"},
      {name:"Shrimp paste (bagoong alamang)",metric:"30 g",imperial:"2 tbsp"},
      {name:"Bird\u2019s eye chilies, minced",metric:"8 pcs",imperial:"8 pcs"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Render the minced pork in the oil over medium-high heat until browned and crisp at the edges.",
      "Add the garlic and onion and cook for 3 minutes until soft.",
      "Add the shrimp paste and chilies and fry for 1 minute.",
      "Pour in the coconut milk and simmer gently for 8 minutes to reduce slightly.",
      "Add the chopped winged beans and cook for 6 to 8 minutes, until tender but still green and squeaky.",
      "Stir in the coconut cream and simmer 3 minutes more, until the sauce clings to the beans.",
      "Season with pepper, taste, and serve with plenty of rice."
    ],
    notes: [
      "Chop the winged beans finely and evenly; large pieces cook unevenly and stay fibrous.",
      "The heat is the point of the dish, but the coconut cream is what keeps it drinkable."
    ],
    verification: "verified",
    history: "Gising-gising, also called ginataang sigarilyas, is associated with Central Luzon, particularly Pampanga and Nueva Ecija. Where winged beans are scarce it is commonly made with chopped green beans instead.",
    sources: [
      "https://en.wikipedia.org/wiki/Gising-gising",
      "https://en.wikipedia.org/wiki/Ginataan"
    ]
  },
  {
    slug: "pancit-canton", title: "Pancit Canton", subtitle: "Stir-Fried Egg Noodles",
    description: "Wheat-and-egg noodles stir-fried dry with pork, shrimp and vegetables, the noodles finishing by absorbing seasoned stock straight from the pan. The everyday pancit.",
    category: "NOODLES / STIR-FRY", time: "35M", yield: "6 PAX", origin: "PHILIPPINES", technique: "WOK TOSS",
    image: local("pancit-canton-guisado-2.jpg"), imageSource: commonsPage("Pancit Canton Guisado 2.jpg"),
    ingredients: [
      {name:"Pancit canton noodles",metric:"400 g",imperial:"14 oz"},
      {name:"Pork shoulder, thinly sliced",metric:"250 g",imperial:"9 oz"},
      {name:"Shrimp, peeled",metric:"200 g",imperial:"7 oz"},
      {name:"Chicken stock",metric:"700 ml",imperial:"3 cups"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Carrot, julienned",metric:"120 g",imperial:"4 oz"},
      {name:"Cabbage, shredded",metric:"250 g",imperial:"9 oz"},
      {name:"Snow peas",metric:"100 g",imperial:"3.5 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Oyster sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Calamansi",metric:"4 pcs",imperial:"4 pcs"}
    ],
    instructions: [
      "Heat the oil in a wide wok over high heat. Brown the pork in a single layer, then push it aside.",
      "Add the garlic and onion and cook 1 minute. Add the shrimp and cook until just pink, then remove pork and shrimp both to a plate.",
      "Add the carrot and cook 2 minutes, then the cabbage and snow peas for 2 minutes. Remove to the same plate; vegetables left in will overcook while the noodles absorb.",
      "Pour the stock, soy sauce and oyster sauce into the wok and bring to a boil.",
      "Add the noodles and toss constantly for 4 to 6 minutes, until they have drunk nearly all the liquid and are tender but still springy.",
      "Return the meat, shrimp and vegetables and toss through for 1 minute.",
      "Serve with calamansi halves; the citrus is squeezed over at the table, not during cooking."
    ],
    notes: [
      "Do not pre-boil the noodles. They are meant to cook in the seasoned stock, which is where their flavour comes from.",
      "Cook the vegetables separately and return them at the end, or they will go grey and limp."
    ],
    verification: "verified",
    history: "Pancit came with Chinese traders, and the word derives from a Hokkien phrase meaning something conveniently cooked. Canton refers to the flour-and-egg noodle rather than to Canton itself. Serving it on birthdays for long life is a Chinese custom that stayed.",
    sources: [
      "https://panlasangpinoy.com/filipino-pancit/",
      "https://www.thechoppingblock.com/blog/pancit-a-classic-filipino-dish-with-endless-variations"
    ]
  },
  {
    slug: "pancit-palabok", title: "Pancit Palabok", subtitle: "Rice Noodles in Shrimp Sauce",
    description: "Thin rice noodles under a thick annatto-orange shrimp sauce, finished with smoked fish, crushed pork crackling, egg and shrimp. The sauce is ladled over, never tossed through.",
    category: "NOODLES / SAUCED", time: "50M", yield: "6 PAX", origin: "PHILIPPINES", technique: "SHRIMP SAUCE",
    image: local("palabok-of-davao.jpg"), imageSource: commonsPage("Palabok of davao.jpg"),
    ingredients: [
      {name:"Rice noodles (bihon)",metric:"400 g",imperial:"14 oz"},
      {name:"Shrimp, peeled, shells reserved",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"1.2 L",imperial:"5 cups"},
      {name:"Annatto seeds",metric:"15 g",imperial:"1 tbsp"},
      {name:"Cornstarch",metric:"60 g",imperial:"1/2 cup"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Pork belly, cooked and sliced",metric:"200 g",imperial:"7 oz"},
      {name:"Smoked fish (tinapa), flaked",metric:"150 g",imperial:"5 oz"},
      {name:"Pork crackling, crushed",metric:"100 g",imperial:"3.5 oz"},
      {name:"Eggs",metric:"4 large",imperial:"4 large"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Calamansi",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Simmer the shrimp shells in the water for 15 minutes, then strain. This shrimp stock is the whole basis of the sauce.",
      "Steep the annatto seeds in 60 ml of hot water for 10 minutes, then strain and keep the orange liquid.",
      "Soak the rice noodles in warm water for 10 minutes until pliable, then drain.",
      "Hard-boil the eggs, peel and slice. Fry the garlic in the oil until golden and reserve it with its oil.",
      "Bring the shrimp stock and annatto liquid to a simmer, season with fish sauce, then whisk in the cornstarch slaked in a little cold water. Cook 3 to 4 minutes until it thickens to a pourable gravy.",
      "Blanch the noodles in boiling water for 1 to 2 minutes, drain well, and spread them on a platter.",
      "Ladle the sauce over the noodles and top with shrimp, pork, tinapa, crackling, egg and fried garlic. Serve with calamansi."
    ],
    notes: [
      "Palabok is assembled, not tossed. Everything sits in layers and is mixed by the eater.",
      "The sauce thickens further as it cools, so keep it slightly looser than you want it."
    ],
    verification: "verified",
    history: "Palabok and pancit Malabon are close relatives and often confused. Palabok uses thin bihon with the sauce ladled on top; Malabon uses thick rice noodles with the sauce mixed all the way through and crab fat in the sauce.",
    sources: [
      "https://panlasangpinoy.com/asian-filipino-food-noodles-pansit-pancit-palabok-recipe/",
      "https://www.hungryhuy.com/pancit-palabok/"
    ]
  },
  {
    slug: "pancit-malabon", title: "Pancit Malabon", subtitle: "Thick Rice Noodles in Crab-Fat Sauce",
    description: "Thick rice noodles coated through with an orange shrimp and crab-fat sauce, piled with squid, shrimp, oysters and smoked fish. Richer and more maritime than palabok.",
    category: "NOODLES / SAUCED", time: "55M", yield: "6 PAX", origin: "MALABON", technique: "SHRIMP SAUCE",
    ingredients: [
      {name:"Thick rice noodles",metric:"500 g",imperial:"1.1 lb"},
      {name:"Shrimp, peeled, shells reserved",metric:"300 g",imperial:"10.5 oz"},
      {name:"Squid, cleaned and sliced",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"1.2 L",imperial:"5 cups"},
      {name:"Crab fat (aligue)",metric:"80 g",imperial:"3 oz"},
      {name:"Annatto seeds",metric:"15 g",imperial:"1 tbsp"},
      {name:"Cornstarch",metric:"50 g",imperial:"1/3 cup"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Smoked fish (tinapa), flaked",metric:"150 g",imperial:"5 oz"},
      {name:"Pork crackling, crushed",metric:"100 g",imperial:"3.5 oz"},
      {name:"Eggs",metric:"4 large",imperial:"4 large"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Calamansi",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Simmer the shrimp shells in the water for 15 minutes and strain to make a shrimp stock.",
      "Steep the annatto in a little hot water for 10 minutes and strain.",
      "Fry the garlic in the oil until golden; reserve garlic and oil separately. Hard-boil and slice the eggs.",
      "Poach the shrimp and squid briefly in the stock, 2 minutes for the shrimp and 1 minute for the squid, then lift them out. Squid turns to rubber the moment it overcooks.",
      "Bring the stock and annatto liquid to a simmer with the crab fat and fish sauce. Whisk in the slaked cornstarch and cook 4 minutes until thick.",
      "Soak the thick noodles in warm water for 15 minutes, then blanch for 2 to 3 minutes and drain thoroughly.",
      "Toss the noodles through the sauce until every strand is coated, then top with the seafood, tinapa, crackling, egg and fried garlic."
    ],
    notes: [
      "The defining difference from palabok: here the sauce is mixed through, not poured on top.",
      "Crab fat is what makes it Malabon. Without it the dish is palabok with fat noodles."
    ],
    verification: "verified",
    history: "Pancit Malabon is named for the fishing city of Malabon in Metro Manila, and its seafood-heavy character comes straight from that. It is a classic party and pasalubong dish, usually sold in wide bilao trays lined with banana leaf.",
    sources: [
      "https://en.wikipedia.org/wiki/Pancit_Malabon",
      "https://panlasangpinoy.com/pancit-malabon-recipe/"
    ]
  },
  {
    slug: "arroz-caldo", title: "Arroz Caldo", subtitle: "Chicken and Ginger Rice Porridge",
    description: "Rice cooked down with chicken and a great deal of ginger into a thick savoury porridge, finished with toasted garlic, scallion and calamansi. Sickbed food and rainy-day food.",
    category: "PORRIDGE / CHICKEN", time: "1H", yield: "6 PAX", origin: "PHILIPPINES", technique: "SLOW PORRIDGE",
    image: local("arroz-caldo.jpg"),
    ingredients: [
      {name:"Glutinous rice",metric:"200 g",imperial:"1 cup"},
      {name:"Jasmine rice",metric:"100 g",imperial:"1/2 cup"},
      {name:"Chicken thighs, bone-in",metric:"800 g",imperial:"1.8 lb"},
      {name:"Chicken stock",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Ginger, julienned",metric:"60 g",imperial:"2 oz"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, minced",metric:"120 g",imperial:"4 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Safflower (kasubha)",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Eggs",metric:"4 large",imperial:"4 large"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Calamansi",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Fry half the garlic in the oil over medium heat until evenly golden, then lift it out onto paper. Watch it closely; it turns bitter within seconds of going too far.",
      "In the same pot cook the remaining garlic, onion and ginger for 3 minutes.",
      "Add the chicken and brown lightly on all sides, then season with the fish sauce.",
      "Add both rices and stir for 1 minute to coat in the fat.",
      "Pour in the stock and the safflower. Simmer uncovered for 35 to 45 minutes, stirring often, until the rice has broken down and the porridge falls thickly from the spoon.",
      "Hard-boil the eggs, peel and halve them.",
      "Serve topped with egg, scallion and the reserved toasted garlic, with calamansi and extra fish sauce on the side."
    ],
    notes: [
      "Stir often near the end. Arroz caldo catches on the bottom of the pot easily once it thickens.",
      "It thickens a great deal as it cools, so keep it looser than seems right and hold back some stock."
    ],
    verification: "verified",
    history: "Arroz caldo is the Filipino reading of Chinese congee, brought by Chinese immigrants and given a Spanish name meaning rice broth. Ginger and safflower are the local additions; the savoury rice porridge itself is not.",
    sources: [
      "https://www.kawalingpinoy.com/arroz-caldo/",
      "https://en.wikipedia.org/wiki/Lugaw"
    ]
  },
  {
    slug: "goto", title: "Goto", subtitle: "Tripe and Rice Porridge",
    description: "The tripe version of arroz caldo: rice porridge built on long-simmered beef tripe, finished with toasted garlic, scallion, crackling and a hard squeeze of calamansi.",
    category: "PORRIDGE / BEEF", time: "2H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "SLOW PORRIDGE",
    ingredients: [
      {name:"Beef tripe",metric:"700 g",imperial:"1.5 lb"},
      {name:"Glutinous rice",metric:"250 g",imperial:"1 1/4 cups"},
      {name:"Beef stock",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Ginger, julienned",metric:"60 g",imperial:"2 oz"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, minced",metric:"120 g",imperial:"4 oz"},
      {name:"Fish sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Safflower (kasubha)",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Pork crackling, crushed",metric:"80 g",imperial:"3 oz"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Calamansi",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Scrub the tripe well, then simmer it in fresh water for 1 1/2 to 2 hours, until it is soft enough to cut with the side of a spoon. Drain and slice into strips.",
      "Fry half the garlic in the oil until golden and reserve for the top.",
      "Cook the remaining garlic, onion and ginger in the same pot for 3 minutes.",
      "Add the sliced tripe and the fish sauce and stir for 2 minutes.",
      "Add the rice, stir to coat, then pour in the stock with the safflower.",
      "Simmer uncovered for 35 to 45 minutes, stirring frequently, until thick and porridge-like.",
      "Serve topped with scallion, crackling and toasted garlic, with calamansi alongside."
    ],
    notes: [
      "Undercooked tripe is unpleasant and cannot be rescued later. Give step 1 the full time it needs.",
      "Goto is traditionally eaten with a tokwa't baboy side, and the vinegar cuts the richness well."
    ],
    verification: "verified",
    history: "Goto belongs to the same family as arroz caldo and lugaw, distinguished by its tripe. The name is thought to come from the Hokkien for beef innards, another trace of the Chinese origins of Filipino rice porridge.",
    sources: [
      "https://en.wikipedia.org/wiki/Goto_(food)",
      "https://en.wikipedia.org/wiki/Lugaw"
    ]
  },
  {
    slug: "champorado", title: "Champorado", subtitle: "Chocolate Rice Porridge",
    description: "Glutinous rice cooked with tablea chocolate into a thick sweet porridge, served hot with milk and, traditionally, salted dried fish alongside.",
    category: "DESSERT / PORRIDGE", time: "40M", yield: "4 PAX", origin: "PHILIPPINES", technique: "SLOW PORRIDGE",
    image: local("champorado.jpg"), imageSource: commonsPage("Champorado.jpg"),
    ingredients: [
      {name:"Glutinous rice",metric:"300 g",imperial:"1 1/2 cups"},
      {name:"Water",metric:"1.5 L",imperial:"6 1/3 cups"},
      {name:"Tablea (pure cacao tablets)",metric:"100 g",imperial:"3.5 oz"},
      {name:"Brown sugar",metric:"120 g",imperial:"4.2 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Evaporated milk",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Dried salted fish (tuyo)",metric:"100 g",imperial:"3.5 oz"}
    ],
    instructions: [
      "Rinse the glutinous rice until the water runs nearly clear.",
      "Bring the water to a boil, add the rice, and simmer over low heat for 20 minutes, stirring often so it does not catch.",
      "Dissolve the tablea in a ladle of the hot rice liquid, mashing it against the side of a bowl, then stir it back into the pot.",
      "Simmer for 10 to 15 minutes more, stirring, until the rice is fully swollen and the porridge coats a spoon thickly.",
      "Stir in the sugar and salt. The salt is not optional; it is what stops the chocolate tasting flat.",
      "Fry the dried fish separately until crisp.",
      "Serve hot in bowls with evaporated milk poured over, and the salted fish on the side."
    ],
    notes: [
      "Tablea is unsweetened pure cacao. Using sweetened cocoa powder instead will make the dish cloying.",
      "The pairing with salted fish sounds unlikely and is exactly right; treat it as salt against sweet."
    ],
    verification: "verified",
    history: "Champorado descends from the Mexican champurrado, a chocolate drink thickened with corn masa, which reached the islands on the galleon trade. The Filipino version swapped masa for glutinous rice, a substitution that owes more to Chinese rice-porridge habits than to Mexico.",
    sources: [
      "https://www.kawalingpinoy.com/champorado/",
      "https://en.wikipedia.org/wiki/Lugaw"
    ]
  },
  {
    slug: "sinangag", title: "Sinangag", subtitle: "Garlic Fried Rice",
    description: "Day-old rice fried hard with a great deal of garlic until the grains separate and crisp at the edges. The base of every silog breakfast in the country.",
    category: "RICE / FRIED", time: "15M", yield: "4 PAX", origin: "PHILIPPINES", technique: "HIGH-HEAT FRY",
    ingredients: [
      {name:"Day-old cooked rice",metric:"800 g",imperial:"4 cups"},
      {name:"Garlic, minced",metric:"12 cloves",imperial:"12 cloves"},
      {name:"Neutral oil",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Salt",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Scallions, sliced",metric:"30 g",imperial:"1 oz"}
    ],
    instructions: [
      "Break the cold rice apart with your hands until no clumps remain. This is the difference between fried rice and steamed rice in a pan.",
      "Heat the oil over medium heat. Add half the garlic and fry slowly until pale gold, then lift it out and drain it on paper for the garnish.",
      "Raise the heat to high and add the remaining garlic, cooking for 20 seconds only.",
      "Add the rice and spread it in a single layer. Leave it undisturbed for 1 minute to let the underside catch.",
      "Toss, spread again, and repeat for 4 to 5 minutes until the grains are separate and some have crisped.",
      "Season with salt and pepper, tossing to distribute evenly.",
      "Top with the reserved toasted garlic and scallion, and serve with a fried egg and any cured meat."
    ],
    notes: [
      "Freshly cooked rice will steam and clump. Day-old refrigerated rice is not a shortcut, it is the recipe.",
      "Toasting half the garlic separately gives you both the flavour in the oil and the crunch on top."
    ],
    verification: "verified",
    history: "Sinangag is one half of the silog breakfast, the other being a fried egg and a cured meat. The naming pattern was coined at a Marikina tapsihan in the 1980s and has since produced an open-ended family of dishes, from tapsilog to spamsilog.",
    sources: [
      "https://www.thekitchn.com/sinangag-recipe-23158381",
      "https://norecipes.com/filipino-garlic-rice-sinangag/"
    ]
  },
  {
    slug: "turon", title: "Turon", subtitle: "Banana and Jackfruit Spring Roll",
    description: "Saba banana and jackfruit rolled in a spring-roll wrapper, fried, and lacquered in caramelised brown sugar. Crisp outside, molten inside.",
    category: "MERIENDA / FRIED", time: "30M", yield: "8 PCS", origin: "PHILIPPINES", technique: "CARAMEL FRY",
    image: local("turon-na-saging.jpg"), imageSource: commonsPage("Turon_na_Saging.jpg"),
    ingredients: [
      {name:"Saba bananas, halved lengthwise",metric:"6 pcs",imperial:"6 pcs"},
      {name:"Jackfruit (langka), sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Spring roll wrappers",metric:"8 sheets",imperial:"8 sheets"},
      {name:"Brown sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"},
      {name:"Water",metric:"15 ml",imperial:"1 tbsp"}
    ],
    instructions: [
      "Peel the saba and halve them lengthwise. Very ripe bananas will collapse; use ones that are firm and just yellow.",
      "Roll each banana half in brown sugar until coated.",
      "Lay a wrapper flat, place a sugared banana half and a few strips of jackfruit near one edge, fold in the sides and roll tightly. Seal the edge with a smear of water.",
      "Heat the oil to 170\u00b0C (340\u00b0F) in a deep pan.",
      "Fry the rolls seam-side down for 2 to 3 minutes a side, until the wrapper is blistered and golden.",
      "Sprinkle the remaining brown sugar directly into the hot oil around the rolls. It will melt and catch on the wrappers as a brittle glaze.",
      "Lift out onto a rack, not paper, so the caramel sets hard rather than sticking. Eat within the hour."
    ],
    notes: [
      "Drain on a wire rack. On paper towel the caramel welds the turon to the sheet.",
      "The sugar in the oil will darken fast once it melts. Have the rolls ready to come out."
    ],
    verification: "verified",
    history: "Turon is among the most common merienda and street foods in the Philippines. The saba banana at its centre is a cooking cultivar that holds its shape under heat, which is why it, rather than a dessert banana, appears in nearly every Filipino banana dish.",
    sources: [
      "https://en.wikipedia.org/wiki/Turon_(food)",
      "https://panlasangpinoy.com/turon/"
    ]
  },
  {
    slug: "banana-cue", title: "Banana Cue", subtitle: "Caramelised Skewered Saba Banana",
    description: "Whole saba bananas deep-fried and coated in brown sugar that hardens into a glassy shell, then threaded onto bamboo skewers. Sold on every street corner in the afternoon.",
    category: "MERIENDA / FRIED", time: "20M", yield: "6 PCS", origin: "PHILIPPINES", technique: "CARAMEL FRY",
    image: local("1130banana-cue-street-vendors-02.jpg"), imageSource: commonsPage("1130Banana_cue_Street_vendors_02.jpg"),
    ingredients: [
      {name:"Saba bananas, peeled",metric:"6 pcs",imperial:"6 pcs"},
      {name:"Brown sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"},
      {name:"Bamboo skewers",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Peel the saba and leave them whole. They should be ripe enough to be sweet but still firm to the squeeze.",
      "Heat the oil in a deep pan to 170\u00b0C (340\u00b0F).",
      "Fry the bananas for 3 to 4 minutes, turning, until they are golden and have softened through.",
      "Scatter the brown sugar directly into the oil around the bananas.",
      "As the sugar melts, roll the bananas through it constantly so each one takes on an even coat. Work quickly; melted sugar goes from amber to burnt in seconds.",
      "Lift the bananas onto a greased tray or a wire rack and let the caramel set hard, about 3 minutes.",
      "Thread two per bamboo skewer and serve warm."
    ],
    notes: [
      "Do not crowd the pan. The oil temperature drops and the sugar seizes instead of melting cleanly.",
      "Caramel at this temperature causes serious burns. Roll the bananas with tongs, never with your hands."
    ],
    verification: "verified",
    history: "Banana cue is one of the best-selling street foods in the country, sold from afternoon carts alongside camote cue and maruya. The name pairs the banana with the barbecue skewer it is served on rather than with any grilling.",
    sources: [
      "https://en.wikipedia.org/wiki/Banana_cue",
      "https://www.foxyfolksy.com/banana-cue/"
    ]
  },
  {
    slug: "kamote-cue", title: "Kamote Cue", subtitle: "Caramelised Skewered Sweet Potato",
    description: "Thick slices of sweet potato fried and coated in caramelising brown sugar, then skewered. The root-vegetable twin of banana cue, and slightly less sweet.",
    category: "MERIENDA / FRIED", time: "25M", yield: "6 PCS", origin: "PHILIPPINES", technique: "CARAMEL FRY",
    ingredients: [
      {name:"Sweet potato (kamote), thick sliced",metric:"700 g",imperial:"1.5 lb"},
      {name:"Brown sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"},
      {name:"Bamboo skewers",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Peel the sweet potato and cut into rounds about 2 cm thick. Even thickness matters more here than with banana, since the interior has to cook through.",
      "Heat the oil to 165\u00b0C (330\u00b0F), a touch lower than for banana cue so the inside cooks before the outside colours.",
      "Fry the slices for 5 to 7 minutes, until a skewer passes through without resistance.",
      "Scatter the brown sugar into the oil around the slices.",
      "Once the sugar melts, turn the pieces through it until evenly lacquered.",
      "Lift onto a greased tray and let the coating set for 3 minutes.",
      "Skewer two or three pieces per stick and serve warm."
    ],
    notes: [
      "Undercooked kamote stays chalky at the centre and no amount of caramel hides it.",
      "Purple-fleshed varieties work and look striking, but are drier and need the lower oil temperature."
    ],
    verification: "verified",
    history: "Camote cue is made the same way as banana cue and sold from the same carts. Both belong to the afternoon merienda habit, the mid-afternoon snack that sits between lunch and a late Filipino dinner.",
    sources: [
      "https://en.wikipedia.org/wiki/Camote_cue",
      "https://www.busogsarap.com/2010/02/toffee-sweet-potato-kamote-que.html"
    ]
  },
  {
    slug: "maruya", title: "Maruya", subtitle: "Banana Fritters",
    description: "Sliced or fanned saba banana dipped in a light batter and fried crisp, then dusted with sugar. Homelier than turon and quicker to make.",
    category: "MERIENDA / FRIED", time: "25M", yield: "8 PCS", origin: "PHILIPPINES", technique: "BATTER FRY",
    image: local("maruya-banana-fritters-from-cagayan-de-oro.jpg"), imageSource: commonsPage("Maruya_(banana_fritters)_from_Cagayan_de_Oro.jpg"),
    ingredients: [
      {name:"Saba bananas",metric:"6 pcs",imperial:"6 pcs"},
      {name:"All-purpose flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"Rice flour",metric:"50 g",imperial:"1/3 cup"},
      {name:"Sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Evaporated milk",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"}
    ],
    instructions: [
      "Whisk the flours, sugar, baking powder and salt together.",
      "Beat in the milk and egg until the batter is smooth and just thick enough to coat a spoon. Rest it for 10 minutes.",
      "Peel the saba. Either slice them into rounds, or slice lengthwise almost through and press flat into a fan.",
      "Heat the oil to 170\u00b0C (340\u00b0F).",
      "Dip each piece in batter, letting the excess run off, and lower it into the oil.",
      "Fry for 2 to 3 minutes a side until deep golden and crisp.",
      "Drain on a rack and dust with sugar while still hot."
    ],
    notes: [
      "Rice flour in the batter is what keeps the crust crisp rather than bready.",
      "Fanning the banana gives more surface area and a better ratio of crust to fruit."
    ],
    verification: "verified",
    history: "Maruya is a staple of Filipino street-food and home merienda culture, made wherever saba bananas are cheap, which is nearly everywhere. Regional versions differ mainly in whether the banana is sliced, mashed or fanned.",
    sources: [
      "https://www.recipesbynora.com/filipino-banana-fritters-maruya/",
      "https://www.bitesized.ph/food-almanac-pinoy-street-food/"
    ]
  },
  {
    slug: "kwek-kwek", title: "Kwek-Kwek", subtitle: "Battered Quail Eggs",
    description: "Hard-boiled quail eggs in a bright orange annatto batter, deep-fried and eaten hot from the cart with a sharp vinegar dip.",
    category: "STREET FOOD / FRIED", time: "35M", yield: "20 PCS", origin: "METRO MANILA", technique: "BATTER FRY",
    ingredients: [
      {name:"Quail eggs",metric:"20 pcs",imperial:"20 pcs"},
      {name:"All-purpose flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"Cornstarch",metric:"50 g",imperial:"1/3 cup"},
      {name:"Annatto powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Baking powder",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Water",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Red onion, minced",metric:"60 g",imperial:"2 oz"},
      {name:"Bird\u2019s eye chilies, minced",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Boil the quail eggs for 4 minutes, cool them in iced water, and peel carefully. They tear easily.",
      "Toss the peeled eggs in a spoonful of the flour so the batter has something to grip.",
      "Whisk the remaining flour, cornstarch, annatto powder, baking powder and salt with the water into a batter about the thickness of pancake batter.",
      "Heat the oil to 175\u00b0C (350\u00b0F).",
      "Dip each egg in batter and lower it straight into the oil. Fry 5 or 6 at a time for 2 to 3 minutes, until the coating is set and crisp.",
      "Drain on a rack.",
      "Stir the vinegar, onion and chilies together and serve alongside, on skewers, while hot."
    ],
    notes: [
      "Dusting the eggs with flour first is the difference between a coated egg and batter that slides off in the oil.",
      "Annatto is there for the colour more than the flavour; without it the dish is not recognisably kwek-kwek."
    ],
    verification: "verified",
    history: "Kwek-kwek is one of the defining Manila street foods. A widely repeated origin story credits a Cubao balut vendor who, having dropped her stock, peeled what survived, rolled it in flour and fried it. The chicken-egg version is tokneneng.",
    sources: [
      "https://en.wikipedia.org/wiki/Tokneneng",
      "https://www.esquiremag.ph/culture/food-and-drink/filipino-street-food-a1729-20170526-lfrm"
    ]
  },
  {
    slug: "tokneneng", title: "Tokneneng", subtitle: "Battered Chicken Eggs",
    description: "The larger sibling of kwek-kwek: whole hard-boiled chicken eggs in the same orange annatto batter, fried and served with vinegar.",
    category: "STREET FOOD / FRIED", time: "35M", yield: "8 PCS", origin: "METRO MANILA", technique: "BATTER FRY",
    image: local("tokneneng-01.jpg"), imageSource: commonsPage("Tokneneng-01.jpg"),
    ingredients: [
      {name:"Chicken eggs",metric:"8 large",imperial:"8 large"},
      {name:"All-purpose flour",metric:"180 g",imperial:"1 1/2 cups"},
      {name:"Cornstarch",metric:"60 g",imperial:"1/2 cup"},
      {name:"Annatto powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Baking powder",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Water",metric:"220 ml",imperial:"1 cup"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Red onion, minced",metric:"60 g",imperial:"2 oz"},
      {name:"Bird\u2019s eye chilies, minced",metric:"3 pcs",imperial:"3 pcs"}
    ],
    instructions: [
      "Hard-boil the eggs for 9 minutes, cool in iced water and peel.",
      "Dust the peeled eggs lightly with flour.",
      "Whisk the remaining dry ingredients with the water into a batter slightly thicker than for kwek-kwek, since the eggs are heavier.",
      "Heat the oil to 175\u00b0C (350\u00b0F).",
      "Coat each egg well and lower it into the oil, frying 3 at a time for 3 to 4 minutes until the shell of batter is firm and crisp.",
      "Drain on a rack.",
      "Serve hot with the vinegar, onion and chilli dip."
    ],
    notes: [
      "A thicker batter is needed than for quail eggs, or it will slide off the larger, heavier egg.",
      "Halve them to serve; the yolk against the sour dip is the whole point."
    ],
    verification: "verified",
    history: "Tokneneng is prepared exactly as kwek-kwek but with chicken eggs. The name is said to derive from a 1978 Pinoy Komiks series, Batute, one of many street-food names that came out of popular culture rather than the kitchen.",
    sources: [
      "https://en.wikipedia.org/wiki/Tokneneng",
      "https://www.bitesized.ph/food-almanac-pinoy-street-food/"
    ]
  },
  {
    slug: "isaw", title: "Isaw", subtitle: "Grilled Chicken or Pork Intestine",
    description: "Cleaned intestines boiled until tender, threaded onto skewers and grilled over coals with a sweet-savoury basting. The best known of the Filipino grilled-innard skewers.",
    category: "STREET FOOD / GRILL", time: "1H 30M", yield: "12 PCS", origin: "METRO MANILA", technique: "CHARCOAL GRILL",
    image: local("isaw.jpg"), imageSource: commonsPage("Isaw.jpg"),
    ingredients: [
      {name:"Chicken or pork intestines",metric:"800 g",imperial:"1.8 lb"},
      {name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Salt",metric:"30 g",imperial:"2 tbsp"},
      {name:"Yellow onion, quartered",metric:"120 g",imperial:"4 oz"},
      {name:"Bay leaves",metric:"3 leaves",imperial:"3 leaves"},
      {name:"Banana ketchup",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Soy sauce",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Brown sugar",metric:"40 g",imperial:"1.4 oz"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Bamboo skewers",metric:"12 pcs",imperial:"12 pcs"}
    ],
    instructions: [
      "Turn the intestines inside out and wash them repeatedly under running water, rubbing with salt, until the water runs clear and there is no smell. This step cannot be rushed and determines whether the dish is edible.",
      "Simmer them in fresh water with the onion, bay and a little salt for 45 to 60 minutes, until tender.",
      "Drain, cool, and thread onto skewers in a concertina fold.",
      "Whisk the banana ketchup, soy sauce, sugar and garlic into a basting sauce.",
      "Grill over medium coals for 6 to 8 minutes, turning and basting repeatedly, until the edges char.",
      "Give them a final baste in the last minute so the glaze stays glossy.",
      "Serve hot with cane vinegar for dipping."
    ],
    notes: [
      "The cleaning in step 1 is the entire recipe. Anything less and the skewers will taste of what the intestine carried.",
      "Boil before grilling, always; grilling raw intestine leaves it tough and unsafe."
    ],
    verification: "verified",
    history: "Isaw belongs to a family of grilled offal skewers that also includes tenga, atay, balun-balunan and betamax. The trade is usually traced to the 1970s, when meat prices pushed vendors toward the cuts that butchers discarded.",
    sources: [
      "https://www.esquiremag.ph/culture/food-and-drink/filipino-street-food-a1729-20170526-lfrm",
      "https://www.laquatsa.com/filipino-street-food-guide/"
    ]
  },
  {
    slug: "betamax", title: "Betamax", subtitle: "Grilled Chicken Blood Cubes",
    description: "Chicken blood set firm, cut into squares and grilled on skewers. The name comes from the resemblance to a Betamax cassette.",
    category: "STREET FOOD / GRILL", time: "1H", yield: "12 PCS", origin: "METRO MANILA", technique: "CHARCOAL GRILL",
    ingredients: [
      {name:"Fresh chicken blood",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Salt",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Banana ketchup",metric:"100 ml",imperial:"scant 1/2 cup"},
      {name:"Soy sauce",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Brown sugar",metric:"30 g",imperial:"1 oz"},
      {name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Bird\u2019s eye chilies, minced",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Bamboo skewers",metric:"12 pcs",imperial:"12 pcs"}
    ],
    instructions: [
      "Stir the salt into the fresh blood and pour it into a shallow tray to a depth of about 2 cm.",
      "Steam the tray gently for 20 to 25 minutes, until the blood has set solid and no longer wobbles at the centre.",
      "Cool completely, then turn out and cut into squares roughly 3 cm across.",
      "Thread three or four squares onto each skewer.",
      "Whisk the ketchup, soy sauce, sugar and garlic into a basting sauce.",
      "Grill over medium coals for 4 to 6 minutes, turning and basting, until the outside firms and chars lightly.",
      "Serve with vinegar sharpened with chilli."
    ],
    notes: [
      "Set the blood gently. Boiled hard it turns spongy and weeps.",
      "The cubes are fragile until fully cold, so cut them only after they have set completely."
    ],
    verification: "verified",
    history: "Betamax is named for its shape, a squat rectangle that reminded vendors of the videocassette. It sits on the same carts as isaw and the other grilled innards, and the naming habit, describing the food by what it looks like, runs right through Filipino street food.",
    sources: [
      "https://www.esquiremag.ph/culture/food-and-drink/filipino-street-food-a1729-20170526-lfrm",
      "https://www.bitesized.ph/food-almanac-pinoy-street-food/"
    ]
  },
  {
    slug: "kikiam", title: "Kikiam", subtitle: "Fried Fish and Pork Rolls",
    description: "Seasoned minced fish and pork rolled into fingers, steamed and then deep-fried, sold by the stick with a sweet or vinegar dip.",
    category: "STREET FOOD / FRIED", time: "1H", yield: "16 PCS", origin: "METRO MANILA", technique: "STEAM + FRY",
    ingredients: [
      {name:"White fish fillet, minced",metric:"400 g",imperial:"14 oz"},
      {name:"Pork belly, minced",metric:"200 g",imperial:"7 oz"},
      {name:"Carrot, finely minced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Cornstarch",metric:"60 g",imperial:"1/2 cup"},
      {name:"Oyster sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Soy sauce",metric:"20 ml",imperial:"4 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Bean curd sheets",metric:"6 sheets",imperial:"6 sheets"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"}
    ],
    instructions: [
      "Mix the minced fish, pork, carrot, scallion and garlic with the cornstarch, oyster sauce, soy sauce and pepper until the mixture turns sticky and holds together.",
      "Soften the bean curd sheets briefly in warm water and pat dry.",
      "Spoon the filling along one edge and roll into tight fingers about 2 cm thick, sealing the edge with a little water.",
      "Steam the rolls for 20 minutes, then cool them completely. Skipping the cooling makes them fall apart in the oil.",
      "Heat the oil to 175\u00b0C (350\u00b0F).",
      "Fry the rolls for 3 to 4 minutes until golden and blistered.",
      "Cut into lengths, skewer, and serve with sweet chilli sauce or spiced vinegar."
    ],
    notes: [
      "Chilling the steamed rolls before frying firms them enough to survive the oil.",
      "The mixture should feel tacky. If it is loose, add cornstarch a spoon at a time."
    ],
    verification: "verified",
    history: "Kikiam takes its name from the Hokkien que-kiam, a rolled minced-meat dish brought by Chinese migrants. The street version diverged sharply from its ancestor, leaning on cheap processed fish rather than the original meat.",
    sources: [
      "https://www.esquiremag.ph/culture/food-and-drink/filipino-street-food-a1729-20170526-lfrm",
      "https://www.laquatsa.com/filipino-street-food-guide/"
    ]
  },
  {
    slug: "ukoy", title: "Ukoy", subtitle: "Shrimp and Vegetable Fritters",
    description: "Small whole shrimp bound with bean sprouts and julienned squash in a rice-flour batter, fried flat and crisp, and eaten with garlic vinegar.",
    category: "MERIENDA / FRIED", time: "35M", yield: "10 PCS", origin: "PHILIPPINES", technique: "BATTER FRY",
    image: local("ukoy-shrimp-fritters-from-vigan-philippines.jpg"), imageSource: commonsPage("Ukoy_(shrimp_fritters)_from_Vigan,_Philippines.jpg"),
    ingredients: [
      {name:"Small shrimp, whole",metric:"300 g",imperial:"10.5 oz"},
      {name:"Mung bean sprouts (togue)",metric:"200 g",imperial:"7 oz"},
      {name:"Squash (kalabasa), julienned",metric:"150 g",imperial:"5 oz"},
      {name:"Rice flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"All-purpose flour",metric:"80 g",imperial:"2/3 cup"},
      {name:"Cornstarch",metric:"40 g",imperial:"1/3 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},
      {name:"Salt",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Garlic, minced",metric:"4 cloves",imperial:"4 cloves"}
    ],
    instructions: [
      "Whisk the rice flour, flour, cornstarch, salt and pepper with the egg and water into a thin batter. It should be looser than pancake batter.",
      "Fold in the bean sprouts and julienned squash until coated.",
      "Heat the oil to 175\u00b0C (350\u00b0F) in a wide pan.",
      "Ladle a portion of the vegetable mixture onto a saucer, lay two or three whole shrimp on top, and slide the whole thing into the oil.",
      "Fry for 2 to 3 minutes a side, until deep golden and rigid.",
      "Drain on a rack so the underside stays crisp.",
      "Serve with vinegar sharpened with minced garlic."
    ],
    notes: [
      "Rice flour is what makes ukoy shatter rather than bend. An all-wheat batter goes soft within minutes.",
      "Small shrimp are used whole, shell and head on, and the shells crisp into the fritter."
    ],
    verification: "verified",
    history: "Ukoy is eaten across the country as merienda and as a side dish, with the vegetable component shifting to whatever is at hand: squash in some places, sweet potato or papaya in others, but nearly always bean sprouts.",
    sources: [
      "https://panlasangpinoy.com/ukoy-shrimp-fritters-recipe/",
      "https://www.foxyfolksy.com/ukoy-recipe-filipino-shrimp-fritters/"
    ]
  },
  {
    slug: "dynamite-lumpia", title: "Dynamite Lumpia", subtitle: "Cheese-Stuffed Chili Rolls",
    description: "Long green chilies seeded, stuffed with cheese and seasoned pork, wrapped in spring-roll pastry and fried. Named for the shape and for the heat.",
    category: "STREET FOOD / FRIED", time: "45M", yield: "10 PCS", origin: "PHILIPPINES", technique: "STUFF + FRY",
    ingredients: [
      {name:"Long green chilies (siling haba)",metric:"10 pcs",imperial:"10 pcs"},
      {name:"Pork belly, minced",metric:"250 g",imperial:"9 oz"},
      {name:"Cheddar cheese, cut into sticks",metric:"200 g",imperial:"7 oz"},
      {name:"Garlic, minced",metric:"4 cloves",imperial:"4 cloves"},
      {name:"Yellow onion, minced",metric:"80 g",imperial:"3 oz"},
      {name:"Carrot, finely minced",metric:"60 g",imperial:"2 oz"},
      {name:"Soy sauce",metric:"20 ml",imperial:"4 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Spring roll wrappers",metric:"10 sheets",imperial:"10 sheets"},
      {name:"Neutral frying oil",metric:"500 ml",imperial:"2 cups"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Slit each chilli lengthwise from stem to tip without cutting it in two. Scrape out the seeds and white pith with a small spoon, which removes most of the heat.",
      "Cook the minced pork with the garlic, onion and carrot over medium heat until browned and dry, about 8 minutes. Season with the soy sauce and pepper and cool completely.",
      "Fill each chilli with the pork mixture and a stick of cheddar, then press the slit closed.",
      "Lay a wrapper flat, place the chilli along one edge with the stem protruding, fold in one side and roll tightly. Seal with water.",
      "Heat the oil to 175\u00b0C (350\u00b0F).",
      "Fry seam-side down for 3 to 4 minutes, turning, until golden. Do not over-fry, or the cheese will burst the wrapper.",
      "Drain on a rack and serve hot with sweet chilli sauce or banana ketchup."
    ],
    notes: [
      "Leaving the stem sticking out of the wrapper is what gives the roll its fuse and makes it easy to hold.",
      "Seal the wrapper properly. Escaping cheese in hot oil makes a mess and a fire risk."
    ],
    verification: "verified",
    history: "Dinamita is named for its resemblance to a stick of dynamite, the chilli stem standing in for the fuse, and for the heat of the pepper itself. It is a modern addition to Filipino snack cooking, popular as pulutan with beer.",
    sources: [
      "https://en.wikipedia.org/wiki/Dinamita",
      "https://www.kawalingpinoy.com/dynamite-lumpia/"
    ]
  },
  {
    slug: "ube-halaya", title: "Ube Halaya", subtitle: "Purple Yam Jam",
    description: "Boiled purple yam mashed and cooked down slowly with coconut milk, condensed milk and butter until it is thick enough to hold the mark of a spoon.",
    category: "DESSERT / CONFECTION", time: "1H 30M", yield: "8 PAX", origin: "PHILIPPINES", technique: "SLOW REDUCTION",
    image: local("ube-halaya-filipino-dessert.jpg"), imageSource: commonsPage("Ube_halaya,_Filipino_dessert.jpg"),
    ingredients: [
      {name:"Purple yam (ube), peeled",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Evaporated milk",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Butter",metric:"100 g",imperial:"3.5 oz"},
      {name:"Sugar",metric:"100 g",imperial:"3.5 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Boil the peeled ube in water for 30 to 40 minutes, until a knife slides through easily. Drain thoroughly.",
      "Mash or grate the ube while warm until completely smooth. Any lumps left now will still be there at the end.",
      "Melt the butter in a heavy pan over low heat and add the mashed ube.",
      "Stir in the coconut milk, condensed milk, evaporated milk, sugar and salt.",
      "Cook over low heat, stirring almost constantly, for 35 to 45 minutes. This is the whole dish: the mixture must reduce slowly without catching.",
      "It is done when the mass pulls away cleanly from the sides of the pan and a spoon drawn through leaves a trail that holds.",
      "Spread into a buttered dish, smooth the top, and cool completely before serving. It firms further as it chills."
    ],
    notes: [
      "Low heat and constant stirring. Ube halaya scorches easily and a burnt note runs through the whole batch.",
      "It thickens noticeably on cooling, so stop while it is slightly looser than you want."
    ],
    verification: "verified",
    history: "Ube halaya is both a dessert in its own right and a component of others, most visibly as the purple layer in halo-halo. The purple yam it is made from is distinct from the orange sweet potato and from taro, though all three are conflated in translation.",
    sources: [
      "https://en.wikipedia.org/wiki/Ube_halaya",
      "https://www.yummy.ph/lessons/baking/how-to-use-ube-in-kakanin-recipes-a00249-20211106-lfrm"
    ]
  },
  {
    slug: "bibingka", title: "Bibingka", subtitle: "Coconut Rice Cake with Salted Egg",
    description: "A soft rice cake baked on banana leaf with coals above and below, topped with salted egg and cheese and brushed with butter. Christmas morning food.",
    category: "DESSERT / KAKANIN", time: "50M", yield: "8 PAX", origin: "PHILIPPINES", technique: "BANANA-LEAF BAKE",
    image: local("02545jfplaza-publika-de-baliuag-bulacanfvf-03.jpg"), imageSource: commonsPage("02545jfPlaza_Publika_de_Baliuag_Bulacanfvf_03.jpg"),
    ingredients: [
      {name:"Rice flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Baking powder",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Eggs",metric:"3 large",imperial:"3 large"},
      {name:"Butter, melted",metric:"80 g",imperial:"3 oz"},
      {name:"Salted duck eggs, sliced",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cheese, grated",metric:"100 g",imperial:"3.5 oz"},
      {name:"Banana leaves",metric:"4 sheets",imperial:"4 sheets"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Grated coconut",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Soften the banana leaves over a flame until pliable, wipe them clean, and line round moulds or a cake tin with them.",
      "Whisk the rice flour, sugar, baking powder and salt together.",
      "Beat the eggs with the coconut milk, then fold into the dry ingredients until smooth. Do not overwork it.",
      "Pour into the lined moulds to about two thirds full.",
      "Bake at 190\u00b0C (375\u00b0F) for 20 minutes, until set but still pale.",
      "Lay slices of salted egg and grated cheese on top and return to the oven for 8 to 10 minutes, until the top browns.",
      "Brush generously with melted butter and scatter with grated coconut. Serve warm, still in the leaf."
    ],
    notes: [
      "The banana leaf is not decoration; it perfumes the cake and is the reason bibingka does not taste like plain rice cake.",
      "Traditionally baked in a clay pan with coals above and below, which is what gives the browned top a home oven approximates with a hot final blast."
    ],
    verification: "verified",
    history: "Bibingka is bound up with Simbang Gabi, the series of dawn Masses in the nine days before Christmas, and is sold outside churches alongside puto bumbong. Its sweet-salty balance, sugar against salted duck egg and cheese, is characteristic of Filipino sweets.",
    sources: [
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm",
      "https://www.simpol.ph/filipino-rice-cakes-that-nourish-the-soul/"
    ]
  },
  {
    slug: "kutsinta", title: "Kutsinta", subtitle: "Steamed Brown Rice Cake",
    description: "A dense, deliberately chewy steamed cake of rice flour and lye water, tinted amber with annatto and eaten under a blanket of grated coconut.",
    category: "DESSERT / KAKANIN", time: "50M", yield: "16 PCS", origin: "PHILIPPINES", technique: "LYE STEAM",
    image: local("kutsinta.jpg"), imageSource: commonsPage("Kutsinta.jpg"),
    ingredients: [
      {name:"Rice flour",metric:"200 g",imperial:"1 2/3 cups"},
      {name:"All-purpose flour",metric:"60 g",imperial:"1/2 cup"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Lye water (lihiya)",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Annatto powder",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Grated coconut",metric:"150 g",imperial:"5 oz"}
    ],
    instructions: [
      "Dissolve the brown sugar in the water, stirring until no grains remain.",
      "Whisk in the rice flour and all-purpose flour until completely smooth, then strain the batter to catch any lumps.",
      "Stir in the annatto powder and then the lye water. The batter will darken slightly.",
      "Grease small moulds and fill each about three quarters full.",
      "Steam over rapidly boiling water for 30 to 35 minutes. Wrap the steamer lid in a cloth so condensation does not drip onto the cakes and pit their surface.",
      "They are done when a toothpick comes out clean and the texture is springy and translucent rather than cakey.",
      "Cool completely in the moulds before turning out. Serve with grated coconut."
    ],
    notes: [
      "Lye water is what produces the chew and the translucency. Without it you get a soft cake, not kutsinta.",
      "Use it sparingly and exactly as measured; too much gives a soapy, bitter taste."
    ],
    verification: "verified",
    history: "Kutsinta belongs to the broad family of kakanin, the rice-based delicacies eaten as merienda across the Philippines. Its jelly-like chew, which comes from lye, sets it apart from the softer steamed cakes like puto.",
    sources: [
      "https://en.wikipedia.org/wiki/Kutsinta",
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm"
    ]
  },
  {
    slug: "pichi-pichi", title: "Pichi-Pichi", subtitle: "Steamed Cassava Cake",
    description: "Grated cassava steamed with sugar and lye into a translucent, springy cake, then rolled in grated coconut or cheese. Pandan gives it its scent.",
    category: "DESSERT / KAKANIN", time: "50M", yield: "16 PCS", origin: "PHILIPPINES", technique: "LYE STEAM",
    ingredients: [
      {name:"Cassava, grated",metric:"500 g",imperial:"1.1 lb"},
      {name:"Sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"350 ml",imperial:"1 1/2 cups"},
      {name:"Lye water (lihiya)",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Pandan leaves",metric:"2 leaves",imperial:"2 leaves"},
      {name:"Grated coconut",metric:"200 g",imperial:"7 oz"}
    ],
    instructions: [
      "Steep the pandan leaves in the hot water for 15 minutes, then remove them and let the water cool.",
      "Squeeze the grated cassava lightly to remove excess liquid, but do not wring it dry.",
      "Mix the cassava with the sugar and pandan water until the sugar dissolves.",
      "Stir in the lye water.",
      "Pour into greased moulds and steam over boiling water for 30 to 35 minutes, with a cloth under the lid to catch condensation.",
      "The cakes are done when they turn translucent throughout and spring back when pressed.",
      "Cool completely, then turn out and roll in grated coconut."
    ],
    notes: [
      "Cassava must be cooked thoroughly. Undercooked pichi-pichi is both unpleasant and unsafe.",
      "Cool fully before unmoulding, or the cakes tear."
    ],
    verification: "verified",
    history: "Pichi-pichi is made from cassava rather than rice, but is grouped with kakanin all the same. Grated cheese has become a common alternative to the traditional coconut coating, another instance of the sweet-and-salty pairing Filipino desserts favour.",
    sources: [
      "https://en.wikipedia.org/wiki/Pichi-pichi",
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm"
    ]
  },
  {
    slug: "puto", title: "Puto", subtitle: "Steamed Rice Cakes",
    description: "Small steamed rice cakes, faintly sweet and cloud-light, usually crowned with cheese or salted egg. Eaten as merienda and served alongside dinuguan.",
    category: "DESSERT / KAKANIN", time: "40M", yield: "18 PCS", origin: "PHILIPPINES", technique: "STEAM",
    image: local("puto.jpg"), imageSource: commonsPage("Puto.jpg"),
    ingredients: [
      {name:"Rice flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Baking powder",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Coconut milk",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Water",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Eggs",metric:"2 large",imperial:"2 large"},
      {name:"Cheese, sliced thin",metric:"120 g",imperial:"4 oz"},
      {name:"Butter, melted",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Whisk the rice flour, sugar, baking powder and salt together.",
      "Beat the eggs with the coconut milk and water, then combine with the dry ingredients until smooth. Rest the batter 10 minutes.",
      "Grease small puto moulds and fill each about three quarters full.",
      "Bring the steamer to a hard boil and wrap the lid in a cloth; a single drip will pock the surface of a puto.",
      "Steam for 12 to 15 minutes, until a toothpick comes out clean and the tops have domed.",
      "Lay a slice of cheese on each and steam for 2 minutes more, just to soften it.",
      "Brush with melted butter and serve warm or at room temperature."
    ],
    notes: [
      "The cloth under the steamer lid is essential. Condensation ruins the smooth white surface that defines good puto.",
      "Overfilling the moulds makes them dense; three quarters full is the right mark."
    ],
    verification: "verified",
    history: "Puto is eaten as merienda but also, distinctively, as a savoury accompaniment: the classic pairing is with dinuguan, the pork blood stew, where the mild sweetness of the cake plays against the iron and vinegar of the stew.",
    sources: [
      "https://jeanelleats.com/puto-recipe/",
      "https://www.simpol.ph/filipino-rice-cakes-that-nourish-the-soul/"
    ]
  },
  {
    slug: "biko", title: "Biko", subtitle: "Sticky Rice Cake with Latik",
    description: "Glutinous rice cooked in coconut milk and brown sugar until dense and chewy, spread flat and finished with latik, the toasted curds left from reducing coconut cream.",
    category: "DESSERT / KAKANIN", time: "1H 15M", yield: "10 PAX", origin: "PHILIPPINES", technique: "COCONUT REDUCTION",
    image: local("sticky-rice-cake-biko.jpg"), imageSource: commonsPage("Sticky_Rice_Cake_Biko.jpg"),
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},
      {name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Coconut cream",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Brown sugar",metric:"350 g",imperial:"12 oz"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Water",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Banana leaves",metric:"3 sheets",imperial:"3 sheets"}
    ],
    instructions: [
      "Rinse the glutinous rice and cook it with the water and half the coconut milk until just tender and most of the liquid is gone, about 20 minutes.",
      "Meanwhile make the latik: simmer the coconut cream in a pan over medium heat, stirring, until the oil separates and the solids turn golden brown, 20 to 25 minutes. Strain out the curds and reserve both curds and oil.",
      "In a wide heavy pan, bring the remaining coconut milk, brown sugar and salt to a simmer and cook for 8 minutes until slightly syrupy.",
      "Add the cooked rice and stir constantly over medium-low heat for 15 to 20 minutes, until the mixture is dense, glossy and pulls away from the pan.",
      "Line a tray with softened banana leaves brushed with a little of the reserved coconut oil.",
      "Press the rice mixture into the tray in an even layer about 3 cm thick.",
      "Scatter the latik curds over the top, press them in lightly, and cool before cutting into squares."
    ],
    notes: [
      "Making latik properly takes patience; pull it off the heat the moment the curds are golden, since they go bitter quickly.",
      "Stir constantly in step 4. Biko catches on the bottom of the pan in seconds."
    ],
    verification: "verified",
    history: "Biko is among the most widespread kakanin in the country, cooked for fiestas and family occasions. Latik, the browned coconut curd on top, is a by-product of rendering coconut cream and is used across Filipino sweets rather than made for its own sake.",
    sources: [
      "https://en.wikipedia.org/wiki/Biko_(food)",
      "https://panlasangpinoy.com/filipino-asian-food-dessert-rice-cake-biko-recipe/"
    ]
  },
  {
    slug: "sapin-sapin", title: "Sapin-Sapin", subtitle: "Layered Glutinous Rice Cake",
    description: "Three coloured layers of sweetened coconut and glutinous rice steamed one on top of another, topped with latik. The name means layers.",
    category: "DESSERT / KAKANIN", time: "1H 30M", yield: "12 PAX", origin: "PHILIPPINES", technique: "LAYERED STEAM",
    image: local("sapin-sapin.jpg"), imageSource: commonsPage("Sapin-sapin.jpg"),
    ingredients: [
      {name:"Glutinous rice flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Purple yam (ube) paste",metric:"150 g",imperial:"5 oz"},
      {name:"Jackfruit (langka), pureed",metric:"120 g",imperial:"4 oz"},
      {name:"Coconut cream",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Banana leaves",metric:"2 sheets",imperial:"2 sheets"}
    ],
    instructions: [
      "Make latik first: reduce the coconut cream until the solids brown and the oil separates. Strain and reserve.",
      "Whisk the glutinous rice flour, coconut milk, condensed milk, sugar and salt into a smooth batter and divide it into three equal portions.",
      "Leave one plain white. Stir the ube paste into the second and the jackfruit puree into the third.",
      "Line a steamer tray with banana leaf brushed with coconut oil. Pour in the ube layer and steam for 15 minutes, until set to the touch.",
      "Pour the jackfruit layer gently over the set ube and steam 15 minutes more. Pour slowly against a spoon so the layers do not blend.",
      "Add the white layer last and steam a final 15 to 20 minutes, until a toothpick comes out clean.",
      "Cool completely, scatter with latik, and cut into diamonds with an oiled knife."
    ],
    notes: [
      "Each layer must be set before the next goes on, or the colours bleed into one another.",
      "An oiled knife and full cooling are what give clean edges."
    ],
    verification: "verified",
    history: "Sapin-sapin is built on the flavours that recur throughout Filipino sweets: coconut as the base, purple yam, and jackfruit. The layers are traditionally white, purple and yellow, each naming its own flavour.",
    sources: [
      "https://www.kawalingpinoy.com/sapin-sapin/",
      "https://www.foxyfolksy.com/sapin-sapin/"
    ]
  },
  {
    slug: "suman", title: "Suman", subtitle: "Glutinous Rice in Banana Leaf",
    description: "Glutinous rice cooked in sweetened coconut milk, wrapped in banana or palm leaves and steamed. Eaten with sugar, mango, or tsokolate.",
    category: "DESSERT / KAKANIN", time: "1H 30M", yield: "12 PCS", origin: "PHILIPPINES", technique: "BANANA-LEAF STEAM",
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},
      {name:"Coconut milk",metric:"700 ml",imperial:"3 cups"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Salt",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Banana leaves",metric:"12 sheets",imperial:"12 sheets"},
      {name:"Kitchen twine",metric:"1 pcs",imperial:"1 pcs"}
    ],
    instructions: [
      "Soak the glutinous rice in water for 2 hours, then drain well.",
      "Cook the rice with the coconut milk, sugar and salt over low heat, stirring often, for 15 to 20 minutes, until the liquid is absorbed and the rice is half cooked and sticky.",
      "Soften the banana leaves over a flame until they turn glossy and flexible, then wipe them clean.",
      "Spoon a portion of rice onto each leaf, fold the long sides over the filling and roll into a tight log, then fold the ends under.",
      "Tie the parcels in pairs with twine.",
      "Steam for 45 to 60 minutes, until the rice is fully translucent and cohesive.",
      "Cool slightly and serve warm in the leaf, with sugar or ripe mango."
    ],
    notes: [
      "Half-cook the rice before wrapping. Raw rice will not steam through evenly inside the leaf.",
      "Pass the leaves over a flame first or they will split as you fold them."
    ],
    verification: "verified",
    history: "Suman is one of the oldest forms of Filipino rice cookery, predating Spanish contact, and exists in dozens of regional variants distinguished by the leaf used, the shape of the parcel, and whether lye is added. Moron of Leyte is a chocolate version of the same idea.",
    sources: [
      "https://www.simpol.ph/filipino-rice-cakes-that-nourish-the-soul/",
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm"
    ]
  },
  {
    slug: "adobong-sitaw", title: "Adobong Sitaw", subtitle: "Yardlong Beans in Adobo Sauce",
    description: "Yardlong beans cooked in the adobo manner with soy, vinegar and garlic, often with a little pork for fat. A quick everyday vegetable dish.",
    category: "VEGETABLE / BRAISE", time: "25M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR REDUCTION",
    image: local("adobong-sitaw.jpg"),
    ingredients: [
      {name:"Yardlong beans (sitaw), cut",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork belly, small dice",metric:"150 g",imperial:"5 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Cane vinegar",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, sliced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Bay leaves",metric:"2 leaves",imperial:"2 leaves"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"}
    ],
    instructions: [
      "Cut the beans into lengths of about 5 cm.",
      "Render the pork in the oil over medium-high heat until browned and its fat has run.",
      "Add the garlic and onion and cook for 2 minutes until fragrant.",
      "Pour in the vinegar and let it simmer for 2 minutes without stirring, to cook off the raw edge.",
      "Add the soy sauce, water, bay leaves and pepper and bring to a simmer.",
      "Add the beans and cook for 6 to 8 minutes, until tender but still with some snap.",
      "Raise the heat briefly to reduce the sauce so it clings. Serve with rice."
    ],
    notes: [
      "Take the beans off while they still have bite. Overcooked sitaw goes khaki and limp.",
      "A handful of crushed pork crackling scattered over at the end is a common finish."
    ],
    verification: "verified",
    history: "Adobo describes a method rather than a single dish, and it is applied to vegetables as readily as to meat. Adobong sitaw and adobong kangkong are among the most common vegetable applications, often cooked together.",
    sources: [
      "https://panlasangpinoy.com/adobong-sitaw-string-bean-recipe/",
      "https://www.angsarap.net/2019/05/02/top-43-filipino-vegetable-recipes/amp/"
    ]
  },
  {
    slug: "adobong-kangkong", title: "Adobong Kangkong", subtitle: "Water Spinach in Adobo Sauce",
    description: "Water spinach wilted quickly in garlic, soy and vinegar. Two minutes of cooking and almost no expense.",
    category: "VEGETABLE / BRAISE", time: "15M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR REDUCTION",
    image: local("adobong-kangkong.jpg"),
    ingredients: [
      {name:"Water spinach (kangkong)",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork belly, small dice",metric:"120 g",imperial:"4 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Cane vinegar",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, sliced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Separate the kangkong stems from the leaves. The stems need roughly twice as long as the leaves.",
      "Render the pork in the oil until browned, then add the garlic and onion and cook 2 minutes.",
      "Add the vinegar and simmer 1 minute without stirring.",
      "Add the soy sauce, water and pepper and bring to a boil.",
      "Add the stems and cook for 2 minutes.",
      "Add the leaves, toss once, and cook for 1 minute only, until they collapse but stay green.",
      "Serve immediately; it turns dull and watery if it sits."
    ],
    notes: [
      "Cook the stems and leaves separately or you will have one component raw and the other dead.",
      "Serve straight from the pan. This is not a dish that waits."
    ],
    verification: "verified",
    history: "Kangkong grows readily in wet ground across the Philippines and is among the cheapest greens available, which is part of why adobong kangkong is so widespread. It is frequently cooked together with sitaw in one pan.",
    sources: [
      "https://www.kawalingpinoy.com/adobong-kangkong/",
      "https://panlasangpinoy.com/adobong-kangkong/"
    ]
  },
  {
    slug: "ginataang-langka", title: "Ginataang Langka", subtitle: "Unripe Jackfruit in Coconut Milk",
    description: "Green jackfruit simmered in coconut milk with shrimp paste and chilli until it turns silky and takes on the sauce. Meaty in texture without any meat.",
    category: "VEGETABLE / GATA", time: "45M", yield: "4\u20136 PAX", origin: "PHILIPPINES", technique: "COCONUT REDUCTION",
    image: local("ginataang-langka.jpg"), imageSource: commonsPage("Ginataang_Langka.jpg"),
    ingredients: [
      {name:"Unripe jackfruit (langka), cut",metric:"700 g",imperial:"1.5 lb"},
      {name:"Coconut milk",metric:"500 ml",imperial:"2 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Pork belly, small dice",metric:"200 g",imperial:"7 oz"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Ginger, julienned",metric:"20 g",imperial:"0.7 oz"},
      {name:"Shrimp paste (bagoong alamang)",metric:"30 g",imperial:"2 tbsp"},
      {name:"Bird\u2019s eye chilies",metric:"5 pcs",imperial:"5 pcs"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"}
    ],
    instructions: [
      "Cut the unripe jackfruit into chunks. Oil your hands and the knife first, since the flesh gives off a sticky latex.",
      "Render the pork in the oil until browned, then add the garlic, onion and ginger and cook 3 minutes.",
      "Add the shrimp paste and fry for 1 minute.",
      "Pour in the coconut milk and bring to a gentle simmer.",
      "Add the jackfruit and chilies, cover, and simmer for 25 to 30 minutes, until the jackfruit is soft enough to shred under a fork.",
      "Stir in the coconut cream and simmer uncovered for 8 minutes, until the sauce thickens and coats the jackfruit.",
      "Taste and correct with more bagoong. Serve with rice."
    ],
    notes: [
      "Only unripe jackfruit works. Ripe langka is a sweet fruit and behaves nothing like this.",
      "Oil on the blade and your hands makes the latex manageable; without it the stickiness is hard to remove."
    ],
    verification: "verified",
    history: "Ginataang langka belongs to the large family of Filipino coconut-milk stews. Its texture is why unripe jackfruit has travelled so widely as a meat substitute, though in Filipino cooking it is more often cooked with pork or seafood than instead of it.",
    sources: [
      "https://en.wikipedia.org/wiki/Ginataang_langka",
      "https://www.angsarap.net/2019/05/02/top-43-filipino-vegetable-recipes/amp/"
    ]
  },
  {
    slug: "dinengdeng", title: "Dinengdeng", subtitle: "Ilocano Vegetable Broth with Bagoong",
    description: "An Ilocano vegetable dish built on bagoong isda rather than oil: a thin fermented-fish broth carrying whatever vegetables are to hand, with grilled fish laid over the top.",
    category: "VEGETABLE / ILOCANO", time: "35M", yield: "4\u20136 PAX", origin: "ILOCOS REGION", technique: "BAGOONG BROTH",
    image: local("dinengdeng-inabraw-3.jpg"), imageSource: commonsPage("Dinengdeng_Inabraw_3.jpg"),
    ingredients: [
      {name:"Bagoong isda (fermented fish)",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Water",metric:"1.2 L",imperial:"5 cups"},
      {name:"Grilled fish (tilapia or bangus)",metric:"400 g",imperial:"14 oz"},
      {name:"Squash (kalabasa), cubed",metric:"250 g",imperial:"9 oz"},
      {name:"Yardlong beans, cut",metric:"150 g",imperial:"5 oz"},
      {name:"Okra",metric:"120 g",imperial:"4 oz"},
      {name:"Bitter melon (ampalaya), sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Moringa leaves (malunggay)",metric:"80 g",imperial:"3 oz"},
      {name:"Tomatoes, quartered",metric:"150 g",imperial:"5 oz"},
      {name:"Yellow onion, sliced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Ginger, sliced",metric:"20 g",imperial:"0.7 oz"}
    ],
    instructions: [
      "Bring the water to a boil with the bagoong, onion, tomato and ginger. Simmer for 10 minutes, then strain if you prefer a clear broth.",
      "Taste the broth now. Bagoong varies enormously in strength and this is the only seasoning the dish gets.",
      "Add the squash and simmer for 8 minutes until it begins to soften.",
      "Add the yardlong beans and okra and cook 4 minutes.",
      "Add the bitter melon and cook 3 minutes; any longer and its bitterness turns harsh.",
      "Lay the grilled fish on top and simmer for 2 minutes to warm through.",
      "Turn off the heat, scatter the moringa leaves over, cover, and let them wilt for 1 minute before serving."
    ],
    notes: [
      "Dinengdeng uses no oil and no sauteed base, which is what separates it from pinakbet.",
      "The vegetables are not fixed. The dish is whatever the garden gave, carried by the bagoong."
    ],
    verification: "verified",
    history: "Dinengdeng, also called inabraw, is an Ilocano staple and a close relative of pinakbet. The distinction is that pinakbet is sauteed and comparatively dry, while dinengdeng is a brothy dish where the bagoong is diluted rather than fried.",
    sources: [
      "https://en.wikipedia.org/wiki/Dinengdeng",
      "https://www.angsarap.net/2019/05/02/top-43-filipino-vegetable-recipes/amp/"
    ]
  },
  {
    slug: "tapa", title: "Tapa", subtitle: "Cured Beef for Tapsilog",
    description: "Thin beef cured in soy, calamansi and garlic, then fried hard. Served with garlic rice and a fried egg, it becomes tapsilog.",
    category: "BREAKFAST / CURED", time: "30M", yield: "4 PAX", origin: "PHILIPPINES", technique: "CURE + FRY",
    image: local("beef-tapa-with-steamed-rice-and-sliced-tomato-and-cucumber.jpg"), imageSource: commonsPage("Beef_tapa_with_steamed_rice_and_sliced_tomato_and_cucumber.jpg"),
    ingredients: [
      {name:"Beef sirloin, sliced 3 mm thick",metric:"700 g",imperial:"1.5 lb"},
      {name:"Soy sauce",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Calamansi juice",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Brown sugar",metric:"30 g",imperial:"1 oz"},
      {name:"Black pepper",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral oil",metric:"45 ml",imperial:"3 tbsp"}
    ],
    instructions: [
      "Slice the beef as thinly as you can across the grain. Freezing it for 30 minutes first makes this far easier.",
      "Combine the soy sauce, calamansi juice, garlic, sugar, pepper and salt.",
      "Marinate the beef in the mixture, covered, for at least 6 hours and preferably overnight.",
      "Drain the beef well and pat it dry. Wet meat will steam and never take colour.",
      "Heat the oil in a wide pan over high heat and fry the slices in a single layer for 1 to 2 minutes a side, until the edges caramelise and crisp.",
      "Work in batches, wiping the pan if the sugar starts to burn between rounds.",
      "Serve with sinangag and a fried egg, with spiced vinegar on the side."
    ],
    notes: [
      "Thin slicing and a dry surface are the two things that decide whether tapa crisps or stews.",
      "The sugar in the marinade burns readily; keep the pan moving and the batches small."
    ],
    verification: "verified",
    history: "Tapa refers to the cured meat itself, a preservation technique older than the breakfast it now anchors. The name tapsilog, joining tapa with sinangag and itlog, was coined in the 1980s at a Marikina eatery and spawned an entire naming convention.",
    sources: [
      "https://en.wikipedia.org/wiki/Silog",
      "https://blog.studiotributes.com/post/what-is-tapsilog-filipino-cured-beef-breakfast"
    ]
  },
  {
    slug: "paksiw-na-isda", title: "Paksiw na Isda", subtitle: "Fish Poached in Vinegar",
    description: "Fish poached in vinegar with ginger, garlic and long chilies until the broth turns sharp and clean. The pot is not stirred once the fish is in.",
    category: "SEAFOOD / PAKSIW", time: "30M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR POACH",
    ingredients: [
      {name:"Whole fish, cleaned and cut",metric:"800 g",imperial:"1.8 lb"},
      {name:"Cane vinegar",metric:"240 ml",imperial:"1 cup"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},
      {name:"Ginger, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Long green chilies",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Eggplant, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Bitter melon (ampalaya), sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Lay the ginger, garlic and onion across the bottom of a wide pot. They form a raft that keeps the fish off the metal.",
      "Arrange the fish pieces on top in a single layer.",
      "Tuck the eggplant and bitter melon around the fish and add the chilies and peppercorns.",
      "Pour the vinegar and water over, and add the fish sauce. The liquid should come roughly halfway up the fish.",
      "Bring to a boil uncovered and let it boil hard for 2 minutes without stirring, so the raw vinegar edge cooks off.",
      "Lower the heat, cover, and simmer for 12 to 15 minutes, until the fish flakes and the vegetables are tender. Do not stir at any point; shake the pot if you must move things.",
      "Taste the broth for salt and serve hot, with rice."
    ],
    notes: [
      "Never stir paksiw. The fish breaks up and the dish turns to porridge.",
      "Boiling the vinegar hard at the start is what stops the finished broth tasting raw and harsh."
    ],
    verification: "verified",
    history: "Paksiw names a Filipino method rather than a dish: to cook and simmer in vinegar. The technique traces to the use of vinegar as a preservative in a hot climate and on long sea voyages, and it is applied to fish, pork, offal and vegetables alike.",
    sources: [
      "https://en.wikipedia.org/wiki/Paksiw",
      "https://panlasangpinoy.com/paksiw-na-isda-recipe/"
    ]
  },
  {
    slug: "paksiw-na-bangus", title: "Paksiw na Bangus", subtitle: "Milkfish Poached in Vinegar",
    description: "The milkfish version of paksiw, cooked in one pot with eggplant and chilies until the vinegar broth reduces around the fish.",
    category: "SEAFOOD / PAKSIW", time: "30M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR POACH",
    ingredients: [
      {name:"Milkfish (bangus), cut into steaks",metric:"800 g",imperial:"1.8 lb"},
      {name:"Cane vinegar",metric:"240 ml",imperial:"1 cup"},
      {name:"Water",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Ginger, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Long green chilies",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Eggplant, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Black peppercorns",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Scale and clean the bangus well and cut it into thick steaks.",
      "Line a wide pot with the ginger, garlic and onion.",
      "Lay the fish steaks over the aromatics in one layer and tuck the eggplant and chilies around them.",
      "Add the vinegar, water, fish sauce and peppercorns.",
      "Bring to a boil uncovered and boil for 2 minutes without stirring.",
      "Cover and simmer over low heat for 12 to 15 minutes, until the flesh flakes at the bone and the liquid has reduced by about a third.",
      "Let it stand off the heat for 5 minutes before serving. Paksiw is often better the next day."
    ],
    notes: [
      "Bangus is bony. Cutting thick steaks rather than thin ones keeps the flesh together in the pot.",
      "This keeps for several days refrigerated, and the vinegar is the reason; that was the original point of the method."
    ],
    verification: "verified",
    history: "Bangus is the standard fish for paksiw, and milkfish farming in Pangasinan and Iloilo is why it is so widely available. The Ilocano version of paksiw uses sukang Iloko and bagoong isda in place of plain vinegar and fish sauce.",
    sources: [
      "https://panlasangpinoy.com/paksiw-na-bangus-recipe/",
      "https://www.kawalingpinoy.com/paksiw-na-bangus/"
    ]
  },
  {
    slug: "paksiw-na-lechon", title: "Paksiw na Lechon", subtitle: "Roast Pork in Liver Sauce and Vinegar",
    description: "Leftover roast pork simmered down in its own liver sauce with vinegar, bay and sugar until the sauce turns dark and thick. The second life of every lechon.",
    category: "PORK / PAKSIW", time: "1H", yield: "6 PAX", origin: "PHILIPPINES", technique: "VINEGAR BRAISE",
    image: local("lechon-paksiw-from-mindanao.jpg"), imageSource: commonsPage("Lechon paksiw from Mindanao.jpg"),
    ingredients: [
      {name:"Roast pork (lechon), chopped",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Lechon liver sauce",metric:"300 g",imperial:"10.5 oz"},
      {name:"Cane vinegar",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Water",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Garlic, crushed",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Yellow onion, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Bay leaves",metric:"4 leaves",imperial:"4 leaves"},
      {name:"Brown sugar",metric:"40 g",imperial:"1.4 oz"},
      {name:"Black peppercorns",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Neutral oil",metric:"20 ml",imperial:"4 tsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Chop the leftover lechon into large bite-sized pieces, skin and all.",
      "Heat the oil in a heavy pot and cook the garlic and onion for 3 minutes until soft.",
      "Add the pork and turn it through the aromatics for 2 minutes.",
      "Pour in the vinegar and bring to a hard boil for 2 minutes without stirring.",
      "Add the liver sauce, water, bay leaves, sugar and peppercorns. Stir to combine.",
      "Simmer partly covered over low heat for 35 to 45 minutes, until the pork is tender enough to give under a spoon and the sauce has darkened and thickened.",
      "Taste for salt and the balance of sour against sweet. Serve with rice."
    ],
    notes: [
      "This is a dish designed for leftovers; the crackling softens into the sauce and that is intended.",
      "The liver sauce is already sweet and salty, so hold back on sugar and salt until the end."
    ],
    verification: "verified",
    history: "Paksiw na lechon exists because a whole roast pig is far more than one meal. It belongs to the thrifty end of Filipino cooking, where the second day of a fiesta dish is planned for rather than improvised.",
    sources: [
      "https://en.wikipedia.org/wiki/Paksiw",
      "https://www.yummy.ph/recipe/paksiw-na-isda-recipe"
    ]
  },
  {
    slug: "paksiw-na-pata", title: "Paksiw na Pata", subtitle: "Pork Leg Braised in Vinegar",
    description: "Pork leg simmered slowly in vinegar and soy with banana blossoms and bay until the skin goes sticky and the meat falls from the bone.",
    category: "PORK / PAKSIW", time: "2H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "VINEGAR BRAISE",
    ingredients: [
      {name:"Pork leg (pata), cut into sections",metric:"1.5 kg",imperial:"3.3 lb"},
      {name:"Cane vinegar",metric:"240 ml",imperial:"1 cup"},
      {name:"Soy sauce",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Water",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Garlic, crushed",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Yellow onion, sliced",metric:"150 g",imperial:"5 oz"},
      {name:"Dried banana blossoms",metric:"40 g",imperial:"1.4 oz"},
      {name:"Bay leaves",metric:"4 leaves",imperial:"4 leaves"},
      {name:"Brown sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Black peppercorns",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Salt",metric:"to taste",imperial:"to taste"}
    ],
    instructions: [
      "Soak the dried banana blossoms in warm water for 20 minutes, then drain and cut into lengths.",
      "Blanch the pata in boiling water for 5 minutes, then drain and rinse. This removes the scum that would otherwise cloud the braise.",
      "Put the pork in a heavy pot with the water, garlic, onion, bay and peppercorns. Simmer for 1 hour.",
      "Add the vinegar and let it boil for 2 minutes without stirring.",
      "Add the soy sauce, sugar and banana blossoms. Simmer partly covered for a further 1 to 1 1/4 hours, until the meat pulls away from the bone.",
      "Uncover and reduce the sauce for 10 to 15 minutes, until it is glossy and coats the pork.",
      "Taste, correct the salt, and rest for 5 minutes before serving."
    ],
    notes: [
      "Banana blossoms are traditional and add a faint tannic edge that keeps the dish from being merely sweet.",
      "The collagen in the leg is what thickens the sauce. Do not rush the braise or you get neither tenderness nor body."
    ],
    verification: "verified",
    history: "Paksiw na pata sits at the richer end of the paksiw family, closer to a braise than a poach. The sugar and banana blossoms distinguish it from the sharper fish versions, and it is common fiesta and celebration food.",
    sources: [
      "https://en.wikipedia.org/wiki/Paksiw",
      "https://panlasangpinoy.com/paksiw-na-isda-recipe/"
    ]
  },
  {
    slug: "daing-na-bangus", title: "Daing na Bangus", subtitle: "Vinegar-Marinated Split Milkfish",
    description: "Milkfish split flat, marinated overnight in vinegar, garlic and pepper, then fried until the skin crisps. A breakfast staple.",
    category: "SEAFOOD / CURED", time: "25M", yield: "4 PAX", origin: "PHILIPPINES", technique: "VINEGAR CURE",
    image: local("daing-na-bangus.jpg"), imageSource: commonsPage("Daing_na_bangus.jpg"),
    ingredients: [
      {name:"Milkfish (bangus), butterflied",metric:"900 g",imperial:"2 lb"},
      {name:"Cane vinegar",metric:"240 ml",imperial:"1 cup"},
      {name:"Garlic, crushed",metric:"10 cloves",imperial:"10 cloves"},
      {name:"Black pepper",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Salt",metric:"20 g",imperial:"4 tsp"},
      {name:"Bay leaves",metric:"2 leaves",imperial:"2 leaves"},
      {name:"Neutral oil",metric:"60 ml",imperial:"1/4 cup"}
    ],
    instructions: [
      "Have the bangus butterflied and deboned, split along the back and opened flat.",
      "Combine the vinegar, garlic, pepper, salt and bay leaves in a shallow dish.",
      "Lay the fish flesh-side down in the marinade, cover, and refrigerate for at least 6 hours or overnight.",
      "Drain the fish and pat it thoroughly dry on both sides. Any surface moisture will spit violently in the oil and leave the skin soft.",
      "Heat the oil in a wide pan over medium-high heat.",
      "Fry skin-side down for 4 to 5 minutes until the skin is crisp and browned, then turn and cook 3 minutes more.",
      "Serve with garlic rice, a fried egg and spiced vinegar for dipping."
    ],
    notes: [
      "Drying the fish after marinating is what separates crisp skin from a soggy fillet.",
      "Do not marinate beyond about 12 hours; the vinegar begins to cook the flesh and the texture goes chalky."
    ],
    verification: "verified",
    history: "Daing describes splitting, salting or marinating and then drying fish, a preservation method that long predates refrigeration. The modern breakfast version shortens the process to an overnight vinegar marinade, keeping the flavour while dropping the sun-drying.",
    sources: [
      "https://www.kawalingpinoy.com/daing-na-bangus/",
      "https://www.angsarap.net/2021/11/04/15-delicious-and-healthy-bangus-milkfish-recipes/"
    ]
  },
  {
    slug: "relyenong-bangus", title: "Relyenong Bangus", subtitle: "Stuffed Milkfish",
    description: "Milkfish emptied through the neck, its flesh cooked with aromatics and returned to the intact skin, then fried whole. The showpiece way to serve a bony fish.",
    category: "SEAFOOD / STUFFED", time: "1H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "DEBONE + STUFF",
    ingredients: [
      {name:"Milkfish (bangus), whole",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Yellow onion, minced",metric:"150 g",imperial:"5 oz"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Carrot, finely minced",metric:"120 g",imperial:"4 oz"},
      {name:"Potatoes, small dice",metric:"200 g",imperial:"7 oz"},
      {name:"Green peas",metric:"100 g",imperial:"3.5 oz"},
      {name:"Raisins",metric:"60 g",imperial:"2 oz"},
      {name:"Eggs",metric:"3 large",imperial:"3 large"},
      {name:"Calamansi juice",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Soy sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Neutral oil",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Salt",metric:"to taste",imperial:"to taste"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Loosen the skin of the bangus by pounding the fish gently all over with the flat of a knife, then snap the backbone at the neck and tail and pull the flesh and bones out through the neck, keeping the skin whole.",
      "Poach the extracted flesh in a little water for 10 minutes, then flake it and pick out every bone. This is tedious and cannot be skipped.",
      "Marinate the empty skin in the calamansi juice and soy sauce for 20 minutes.",
      "Saute the garlic, onion, carrot and potato in a little oil until soft, about 8 minutes. Add the peas and raisins.",
      "Fold in the flaked fish and 2 beaten eggs, season well, and cook 2 minutes until it holds together. Cool slightly.",
      "Pack the stuffing back into the skin, not too tightly, and close the neck with a toothpick. Brush with the remaining beaten egg.",
      "Shallow-fry in the oil over medium heat for 8 to 10 minutes a side, turning once carefully, until golden. Slice crosswise to serve."
    ],
    notes: [
      "Work slowly when removing the flesh. A torn skin cannot be stuffed and the dish is lost.",
      "Do not overpack the skin, or it will split as the stuffing expands in the pan."
    ],
    verification: "verified",
    history: "Relyenong bangus takes its name from the Spanish relleno, stuffed, and belongs to the fiesta end of Filipino cooking where labour signals occasion. Its practical appeal is that it delivers bangus with none of the bones the fish is notorious for.",
    sources: [
      "https://www.angsarap.net/2021/11/04/15-delicious-and-healthy-bangus-milkfish-recipes/",
      "https://www.kawalingpinoy.com/daing-na-bangus/"
    ]
  },
  {
    slug: "pancit-habhab", title: "Pancit Habhab", subtitle: "Lucban Miki Noodles on Banana Leaf",
    description: "Quezon miki noodles stir-fried with pork and vegetables, served on a rectangle of banana leaf and eaten without cutlery, slurped straight from the leaf.",
    category: "NOODLES / STIR-FRY", time: "35M", yield: "6 PAX", origin: "LUCBAN, QUEZON", technique: "WOK TOSS",
    ingredients: [
      {name:"Miki noodles, fresh",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork belly, thinly sliced",metric:"250 g",imperial:"9 oz"},
      {name:"Pork liver, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Chicken stock",metric:"500 ml",imperial:"2 cups"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Carrot, julienned",metric:"120 g",imperial:"4 oz"},
      {name:"Cabbage, shredded",metric:"200 g",imperial:"7 oz"},
      {name:"Snow peas",metric:"80 g",imperial:"3 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Banana leaves",metric:"6 sheets",imperial:"6 sheets"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Cut the banana leaves into rectangles about 20 cm across, pass them over a flame to soften, and wipe clean.",
      "Brown the pork belly in the oil over high heat, then add the liver and cook 2 minutes only; liver goes grainy if pushed further. Remove both.",
      "Cook the garlic and onion for 1 minute, then the carrot for 2, the cabbage and snow peas for 2 more. Remove.",
      "Pour the stock and soy sauce into the pan and bring to a boil.",
      "Add the miki noodles and toss for 4 to 5 minutes, until they have absorbed nearly all the liquid.",
      "Return the meat and vegetables and toss through for 1 minute.",
      "Serve a portion on each banana leaf rectangle, with vinegar to sprinkle over. Eaten by holding the leaf to the mouth, no fork."
    ],
    notes: [
      "Fresh miki are thick and soft and do not need soaking. They will turn to paste if overcooked.",
      "The banana leaf is not a garnish; the dish is named for how it is eaten from one."
    ],
    verification: "verified",
    history: "Pancit habhab comes from Lucban in Quezon. The name describes the act of eating it, slurping the noodles directly from a banana leaf held up to the mouth, without utensils.",
    sources: [
      "https://panlasangpinoy.com/pancit-habhab-recipe/",
      "https://www.angsarap.net/2020/12/29/24-regional-varieties-of-pancit-in-the-philippines/"
    ]
  },
  {
    slug: "pancit-batil-patung", title: "Pancit Batil Patung", subtitle: "Tuguegarao Miki with Egg Soup",
    description: "Tuguegarao miki topped with minced meat, vegetables, crackling and a poached egg, served with a separate bowl of beaten-egg broth. The two halves of the name describe exactly that.",
    category: "NOODLES / REGIONAL", time: "50M", yield: "4 PAX", origin: "TUGUEGARAO, CAGAYAN", technique: "TOPPED NOODLES",
    ingredients: [
      {name:"Miki noodles, fresh",metric:"500 g",imperial:"1.1 lb"},
      {name:"Ground beef or carabao",metric:"300 g",imperial:"10.5 oz"},
      {name:"Pork liver, minced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Beef stock",metric:"900 ml",imperial:"3 3/4 cups"},
      {name:"Eggs",metric:"6 large",imperial:"6 large"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, minced",metric:"120 g",imperial:"4 oz"},
      {name:"Carrot, julienned",metric:"120 g",imperial:"4 oz"},
      {name:"Mung bean sprouts (togue)",metric:"150 g",imperial:"5 oz"},
      {name:"Cabbage, shredded",metric:"150 g",imperial:"5 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Pork crackling, crushed",metric:"80 g",imperial:"3 oz"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Saute the garlic and onion in the oil, add the ground meat and brown it well. Add the liver and cook 2 minutes. Season with half the soy sauce and set aside.",
      "In the same pan, cook the carrot, bean sprouts and cabbage quickly, 2 to 3 minutes, keeping them crisp. Set aside.",
      "Bring 250 ml of the beef stock to a bare simmer and poach 2 eggs in it. Lift them out and reserve.",
      "Add the miki noodles to that same stock with the remaining soy sauce and toss for 3 to 4 minutes until the liquid is absorbed. Plate the noodles.",
      "Pile the meat over the noodles, then the vegetables, then the crackling and a poached egg. That layering is the patung.",
      "For the batil, bring the remaining stock to a boil and beat 4 eggs into it in a thin stream so they set in ribbons.",
      "Serve the noodles with the egg broth in a separate bowl alongside, with scallions and vinegar."
    ],
    notes: [
      "The broth is served beside the noodles, never poured over them.",
      "Carabao beef is traditional in Tuguegarao; ordinary beef is the usual substitute elsewhere."
    ],
    verification: "verified",
    history: "Pancit batil patung is the signature dish of Tuguegarao in Cagayan. The name is literal: batil refers to the beaten egg in the accompanying broth, patung to the toppings placed on the noodles.",
    sources: [
      "https://panlasangpinoy.com/pancit-batil-patung-recipe/",
      "https://www.angsarap.net/2020/12/29/24-regional-varieties-of-pancit-in-the-philippines/"
    ]
  },
  {
    slug: "pancit-miki", title: "Pancit Miki", subtitle: "Fresh Thick Egg Noodles in Broth",
    description: "Soft fresh miki noodles cooked in a garlicky pork broth until the starch thickens the soup itself. Thicker and homelier than canton.",
    category: "NOODLES / SOUP", time: "35M", yield: "4 PAX", origin: "PHILIPPINES", technique: "BROTH NOODLES",
    image: local("miki-bihon-july-2025.jpg"), imageSource: commonsPage("Miki Bihon, July 2025.jpg"),
    ingredients: [
      {name:"Miki noodles, fresh",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pork shoulder, thinly sliced",metric:"250 g",imperial:"9 oz"},
      {name:"Pork stock",metric:"1.2 L",imperial:"5 cups"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Yellow onion, sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Carrot, julienned",metric:"100 g",imperial:"3.5 oz"},
      {name:"Cabbage, shredded",metric:"150 g",imperial:"5 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Fish sauce",metric:"20 ml",imperial:"4 tsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral oil",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Fry half the garlic in the oil until golden and lift it out for the garnish.",
      "Brown the pork in the same oil, then add the remaining garlic and the onion and cook 2 minutes.",
      "Pour in the stock, soy sauce and fish sauce and bring to a boil. Simmer 10 minutes.",
      "Add the carrot and cook 3 minutes.",
      "Add the miki noodles and simmer for 4 to 5 minutes. Their starch will visibly thicken the broth, which is what distinguishes this from a clear noodle soup.",
      "Add the cabbage and cook 2 minutes more.",
      "Season with pepper and serve topped with scallions and the toasted garlic."
    ],
    notes: [
      "Do not rinse fresh miki. The surface starch is what gives the broth its body.",
      "It thickens as it stands, so serve it straight away or hold back some stock."
    ],
    verification: "verified",
    history: "Miki are fresh thick egg noodles, made and sold locally rather than dried, and they anchor a whole set of regional pancit dishes, from Lucban's habhab to Tuguegarao's batil patung.",
    sources: [
      "https://www.angsarap.net/2020/12/29/24-regional-varieties-of-pancit-in-the-philippines/",
      "https://panlasangpinoy.com/filipino-pancit/"
    ]
  },
  {
    slug: "lumpiang-sariwa", title: "Lumpiang Sariwa", subtitle: "Fresh Spring Rolls with Peanut Sauce",
    description: "Soft crepe wrappers folded around stewed vegetables and served cold under a thick garlic-peanut sauce. Nothing about this lumpia is fried.",
    category: "MERIENDA / FRESH", time: "1H", yield: "8 PCS", origin: "PHILIPPINES", technique: "FRESH ROLL",
    ingredients: [
      {name:"All-purpose flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"Eggs",metric:"3 large",imperial:"3 large"},
      {name:"Water",metric:"350 ml",imperial:"1 1/2 cups"},
      {name:"Pork belly, small dice",metric:"200 g",imperial:"7 oz"},
      {name:"Sweet potato, julienned",metric:"150 g",imperial:"5 oz"},
      {name:"Green beans, julienned",metric:"150 g",imperial:"5 oz"},
      {name:"Cabbage, shredded",metric:"200 g",imperial:"7 oz"},
      {name:"Carrot, julienned",metric:"120 g",imperial:"4 oz"},
      {name:"Garlic, minced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Peanuts, roasted and ground",metric:"120 g",imperial:"4 oz"},
      {name:"Brown sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Cornstarch",metric:"30 g",imperial:"1/4 cup"},
      {name:"Lettuce leaves",metric:"8 leaves",imperial:"8 leaves"}
    ],
    instructions: [
      "For the wrappers, whisk the flour, eggs and water into a thin smooth batter and rest 20 minutes. Cook thin crepes in a dry non-stick pan, about 1 minute each, and stack them under a cloth.",
      "Render the pork, then cook the sweet potato for 4 minutes, the carrot and beans for 3, and the cabbage for 2. The filling should stay distinct, not stewed to mush. Drain off any liquid and cool.",
      "For the sauce, bring 400 ml water with the sugar and soy sauce to a boil, whisk in the cornstarch slaked in cold water, and cook 3 minutes until thick and glossy.",
      "Stir the ground peanuts into the sauce and take it off the heat.",
      "Lay a wrapper flat, place a lettuce leaf on it so the leaf shields the wrapper from the damp filling, then spoon on the cooled vegetables.",
      "Fold the bottom up and the sides in, leaving the top open so the filling shows.",
      "Pour the peanut sauce generously over each roll and scatter with minced raw garlic just before serving."
    ],
    notes: [
      "Cool the filling completely. Warm filling steams the wrapper and tears it.",
      "The lettuce leaf is a moisture barrier as much as an ingredient."
    ],
    verification: "verified",
    history: "Lumpiang sariwa is the unfried branch of the Filipino lumpia family, eaten as merienda and at celebrations. The soft crepe and sweet peanut sauce set it apart from the fried, savoury lumpiang Shanghai.",
    sources: [
      "https://panlasangpinoy.com/filipino-lumpia-recipe/",
      "https://en.wikipedia.org/wiki/Lumpiang_gulay"
    ]
  },
  {
    slug: "lumpiang-togue", title: "Lumpiang Togue", subtitle: "Fried Bean Sprout Spring Rolls",
    description: "Bean sprouts, tofu and vegetables rolled in pastry and fried crisp. The cheapest and most everyday of the fried lumpia.",
    category: "MERIENDA / FRIED", time: "45M", yield: "12 PCS", origin: "PHILIPPINES", technique: "STUFF + FRY",
    image: local("vegetable-lumpia.jpg"), imageSource: commonsPage("Vegetable_Lumpia.jpg"),
    ingredients: [
      {name:"Mung bean sprouts (togue)",metric:"400 g",imperial:"14 oz"},
      {name:"Firm tofu, small dice",metric:"250 g",imperial:"9 oz"},
      {name:"Carrot, julienned",metric:"120 g",imperial:"4 oz"},
      {name:"Green beans, julienned",metric:"100 g",imperial:"3.5 oz"},
      {name:"Pork belly, minced",metric:"150 g",imperial:"5 oz"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, minced",metric:"100 g",imperial:"3.5 oz"},
      {name:"Soy sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Black pepper",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Spring roll wrappers",metric:"12 sheets",imperial:"12 sheets"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Cane vinegar",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Fry the diced tofu until golden on all sides, then drain and reserve.",
      "Render the minced pork, then add the garlic and onion and cook 2 minutes.",
      "Add the carrot and green beans and cook 3 minutes, then the bean sprouts for 2 minutes only. Season with the soy sauce and pepper.",
      "Fold in the tofu, then tip the filling into a colander and let it drain and cool completely. Wet filling is the main cause of burst lumpia.",
      "Spoon the filling onto each wrapper, fold in the sides and roll tightly, sealing the edge with water.",
      "Heat the oil to 175\u00b0C (350\u00b0F) and fry the rolls for 3 to 4 minutes, until golden and blistered.",
      "Drain on a rack and serve with spiced vinegar."
    ],
    notes: [
      "Draining the filling is the single step that decides whether these stay crisp or go limp.",
      "Bean sprouts release a lot of water as they cook. Two minutes is enough."
    ],
    verification: "verified",
    history: "Lumpiang togue belongs to the vegetable branch of Filipino lumpia, alongside lumpiang gulay, and is everyday rather than celebration food. Lumpia itself descends from Hokkien popiah, brought by Chinese traders.",
    sources: [
      "https://en.wikipedia.org/wiki/Lumpiang_gulay",
      "https://panlasangpinoy.com/filipino-lumpia-recipe/"
    ]
  },
  {
    slug: "longganisa", title: "Longganisa", subtitle: "Filipino Pork Sausage",
    description: "Coarse pork sausage seasoned sweet or garlicky depending on where it is made, fried until the sugar caramelises. The other great silog breakfast.",
    category: "BREAKFAST / CURED", time: "40M", yield: "12 PCS", origin: "PHILIPPINES", technique: "CURE + FRY",
    ingredients: [
      {name:"Pork shoulder, coarsely minced",metric:"800 g",imperial:"1.8 lb"},
      {name:"Pork back fat, minced",metric:"200 g",imperial:"7 oz"},
      {name:"Garlic, minced",metric:"12 cloves",imperial:"12 cloves"},
      {name:"Brown sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Cane vinegar",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Salt",metric:"15 g",imperial:"1 tbsp"},
      {name:"Black pepper",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Paprika",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Hog casings",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"}
    ],
    instructions: [
      "Mix the minced pork and back fat with the garlic, sugar, vinegar, soy sauce, salt, pepper and paprika until the mixture turns tacky.",
      "Cover and cure in the refrigerator for at least 12 hours, or up to 2 days. The cure is what makes it longganisa rather than seasoned mince.",
      "Rinse the hog casings well and soak them in water.",
      "Stuff the casings loosely and twist into short links about 8 cm long. Loose packing prevents bursting as the sausages cook.",
      "To cook, place the links in a pan with the water over medium heat, cover, and simmer until the water has evaporated, about 10 minutes.",
      "Uncover and let the rendered fat fry the sausages, turning, for 4 to 6 minutes until browned and the sugars have caramelised.",
      "Serve with garlic rice, a fried egg and spiced vinegar."
    ],
    notes: [
      "Simmer first, then fry in the rendered fat. Frying from raw burns the sugar before the centre is cooked.",
      "Filipino longganisa divides broadly into the sweet Pampanga style (hamonado) and the sour-garlicky Ilocano and Vigan styles."
    ],
    verification: "verified",
    history: "Longganisa takes its name from the Spanish longaniza, and nearly every Filipino town has its own version, differing in sweetness, garlic, size and cure. Paired with sinangag and a fried egg it becomes longsilog, part of the silog breakfast family named in the 1980s.",
    sources: [
      "https://en.wikipedia.org/wiki/Silog",
      "https://urbanblisslife.com/longsilog-recipe/"
    ]
  },
  {
    slug: "maja-blanca", title: "Maja Blanca", subtitle: "Coconut and Corn Pudding",
    description: "A white coconut pudding set with cornstarch, studded with sweetcorn and finished with latik. Soft enough to wobble, firm enough to slice.",
    category: "DESSERT / PUDDING", time: "40M", yield: "10 PAX", origin: "PHILIPPINES", technique: "STARCH SET",
    image: local("majablanca.jpg"), imageSource: commonsPage("Majablanca.jpg"),
    ingredients: [
      {name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Coconut cream",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Cornstarch",metric:"120 g",imperial:"1 cup"},
      {name:"Sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Sweetcorn kernels",metric:"250 g",imperial:"9 oz"},
      {name:"Condensed milk",metric:"200 g",imperial:"7 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Make the latik first: simmer the coconut cream, stirring, for 20 to 25 minutes until the oil separates and the curds turn golden. Strain and keep both curds and oil.",
      "Whisk the cornstarch into 200 ml of the cold coconut milk until completely smooth. Lumps formed now will never dissolve later.",
      "Bring the remaining coconut milk, sugar, condensed milk and salt to a gentle simmer.",
      "Add the sweetcorn and cook 3 minutes.",
      "Pour in the slaked cornstarch in a steady stream, stirring constantly. Cook for 8 to 10 minutes over low heat until the mixture turns thick, glossy and pulls from the sides of the pan.",
      "Brush a tray with the reserved coconut oil and pour in the mixture, smoothing the top.",
      "Cool to room temperature, then chill for 2 hours. Scatter with latik and cut into squares."
    ],
    notes: [
      "Keep stirring through step 5. Maja blanca scorches on the base and the burnt note carries through everything.",
      "It sets firm only once fully cold; judging it warm will have you overcooking the starch."
    ],
    verification: "verified",
    history: "Maja blanca is a coconut and corn pudding thickened with cornstarch, one of the simplest and most widespread Filipino desserts. Latik, the toasted curd left from rendering coconut cream, is the traditional topping rather than an optional garnish.",
    sources: [
      "https://en.wikipedia.org/wiki/Maja_blanca",
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm"
    ]
  },
  {
    slug: "palitaw", title: "Palitaw", subtitle: "Boiled Rice Cakes in Coconut and Sesame",
    description: "Flat discs of glutinous rice dough dropped into boiling water. They are ready the moment they float, which is what gives them their name.",
    category: "DESSERT / KAKANIN", time: "35M", yield: "16 PCS", origin: "PHILIPPINES", technique: "BOIL",
    image: local("palitaw-sm.jpg"), imageSource: commonsPage("Palitaw_Sm.jpg"),
    ingredients: [
      {name:"Glutinous rice flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"Water",metric:"220 ml",imperial:"1 cup"},
      {name:"Grated coconut",metric:"200 g",imperial:"7 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Sesame seeds, toasted",metric:"60 g",imperial:"2 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Mix the glutinous rice flour with the water a little at a time until you have a smooth, pliable dough that does not stick to the hands.",
      "Pinch off walnut-sized pieces and flatten each into a thin oval about 5 mm thick.",
      "Bring a wide pot of water to a rolling boil.",
      "Drop the discs in a few at a time. They will sink, then rise; the moment they float to the surface they are cooked, which takes 2 to 3 minutes.",
      "Lift them out with a slotted spoon and drain briefly.",
      "While still damp, press each one into grated coconut so it adheres on both sides.",
      "Toss the sugar with the toasted sesame seeds and salt, and dip the coated cakes into it before serving."
    ],
    notes: [
      "Floating is the doneness test and it is reliable. Leaving them in longer makes them slack.",
      "Coat them while still wet; once dry, nothing sticks."
    ],
    verification: "verified",
    history: "Palitaw takes its name from the Tagalog litaw, to emerge, describing the moment the cake rises to the surface of the pot. Unlike puto or kutsinta it is boiled rather than steamed, which puts it in a small category of Filipino rice cakes.",
    sources: [
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm",
      "https://www.spot.ph/eatdrink/the-latest-eat-drink/71115/guide-philippine-rice-cakes-a00196-20170816-lfrm3"
    ]
  },
  {
    slug: "espasol", title: "Espasol", subtitle: "Toasted Rice Flour Logs",
    description: "Glutinous rice flour cooked in sweetened coconut milk, rolled in more toasted rice flour and cut into short cylinders. Powdery outside, chewy within.",
    category: "DESSERT / KAKANIN", time: "50M", yield: "16 PCS", origin: "LAGUNA", technique: "TOASTED FLOUR",
    image: local("espasol-rolls-in-banana-leaves.jpg"), imageSource: commonsPage("Espasol_rolls_in_banana_leaves.JPG"),
    ingredients: [
      {name:"Glutinous rice flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Grated coconut",metric:"150 g",imperial:"5 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Toast 150 g of the glutinous rice flour in a dry pan over low heat, stirring constantly, for 8 to 10 minutes until it smells nutty and turns pale beige. Set aside for coating.",
      "Simmer the coconut milk, coconut cream, sugar and salt with the grated coconut for 10 minutes, until slightly reduced.",
      "Lower the heat and add the remaining untoasted rice flour in stages, stirring hard to keep it smooth.",
      "Cook, stirring constantly, for 15 to 20 minutes. The mass will stiffen and begin to pull cleanly away from the pan.",
      "Tip it onto a board dusted generously with the toasted flour and let it cool until it can be handled.",
      "Roll into logs about 4 cm thick, coating well in the toasted flour.",
      "Cut into lengths and wrap individually in paper."
    ],
    notes: [
      "Toasting the coating flour is not optional; raw rice flour tastes chalky and green.",
      "Work while the dough is warm. Once fully cold it cracks rather than rolls."
    ],
    verification: "verified",
    history: "Espasol is closely associated with Laguna, where it is a standard pasalubong. It is unusual among kakanin in being coated in toasted rice flour rather than coconut or sugar, which gives it its characteristic dusty finish.",
    sources: [
      "https://www.yummy.ph/news-trends/kinds-of-kakanin-20160217-lfrm",
      "https://hicaps.com.ph/kakanin-list/"
    ]
  },
  {
    slug: "puto-bumbong", title: "Puto Bumbong", subtitle: "Purple Rice Cakes Steamed in Bamboo",
    description: "Purple heirloom rice steamed inside bamboo tubes, turned out onto banana leaf and served with butter, grated coconut and muscovado. Christmas food, sold outside churches before dawn.",
    category: "DESSERT / KAKANIN", time: "1H", yield: "12 PCS", origin: "PHILIPPINES", technique: "BAMBOO STEAM",
    ingredients: [
      {name:"Glutinous rice",metric:"300 g",imperial:"1 1/2 cups"},
      {name:"Pirurutong (purple rice)",metric:"150 g",imperial:"3/4 cup"},
      {name:"Water",metric:"500 ml",imperial:"2 cups"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Butter",metric:"100 g",imperial:"3.5 oz"},
      {name:"Grated coconut",metric:"200 g",imperial:"7 oz"},
      {name:"Muscovado sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Banana leaves",metric:"12 sheets",imperial:"12 sheets"}
    ],
    instructions: [
      "Soak the glutinous rice and pirurutong together in water overnight. The purple colour comes from the pirurutong and not from ube, despite the common assumption.",
      "Drain and grind the soaked rice coarsely, then leave it to dry slightly until crumbly rather than wet.",
      "Season the ground rice with the salt and work it loosely with your fingers so it stays airy.",
      "Fill bamboo tubes loosely, about three quarters full. Packing them tightly gives a dense, heavy cake.",
      "Stand the tubes in a steamer over rapidly boiling water for 8 to 12 minutes, until the rice is cooked through and steam rises from the open end.",
      "Push each cake out onto a rectangle of softened banana leaf.",
      "Brush with butter and serve with grated coconut and muscovado sugar alongside."
    ],
    notes: [
      "Fill the tubes loosely. Puto bumbong should be light and open, not compressed.",
      "Without bamboo tubes, small moulds in a steamer approximate the shape but lose the faint bamboo scent."
    ],
    verification: "verified",
    history: "Puto bumbong is named for the bumbong, the bamboo tube it is steamed in. It is eaten during Simbang Gabi, the nine dawn Masses before Christmas, and is sold with bibingka from stalls set up outside churches.",
    sources: [
      "https://en.wikipedia.org/wiki/Puto_bumbong",
      "https://panlasangpinoy.com/puto-bumbong-recipe/"
    ]
  },
  {
    slug: "kalamay", title: "Kalamay", subtitle: "Sticky Coconut and Muscovado Sweet",
    description: "Ground glutinous rice cooked down with coconut milk and brown sugar into a dense, glossy, intensely sticky paste. Best known from Jagna in Bohol.",
    category: "DESSERT / KAKANIN", time: "1H 30M", yield: "10 PAX", origin: "BOHOL", technique: "SLOW REDUCTION",
    image: local("boholano-delicacy-kalamay.jpg"), imageSource: commonsPage("Boholano_delicacy_Kalamay.png"),
    ingredients: [
      {name:"Glutinous rice flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Coconut milk",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Coconut cream",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Brown sugar",metric:"400 g",imperial:"14 oz"},
      {name:"Muscovado sugar",metric:"150 g",imperial:"5 oz"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Render the coconut cream over medium heat for 20 to 25 minutes until the oil separates and the curds brown. Strain; keep the latik curds and the oil.",
      "Whisk the glutinous rice flour into the coconut milk until completely smooth, then strain to remove lumps.",
      "Add both sugars and the salt and bring to a simmer over low heat.",
      "Stir constantly with a wooden spoon for 45 to 60 minutes. The mixture will thicken, darken and eventually pull away from the pan in one mass.",
      "It is ready when a spoon drawn through the centre leaves a clean channel that holds its shape.",
      "Brush a tray or coconut shells with the reserved coconut oil and press the kalamay in.",
      "Scatter with latik, cool completely, and cut with an oiled knife."
    ],
    notes: [
      "This is an hour of continuous stirring and there is no shortcut. Stop and it catches; slow down and it seizes.",
      "Traditionally set in half coconut shells, which is where kalamay sa bao takes its name."
    ],
    verification: "verified",
    history: "Kalamay is made across the Philippines in many forms and is particularly associated with Jagna in Bohol. Food historians have struggled to pin down its origin given the variety of preparations, though some consider it an adaptation of the Chinese nian gao.",
    sources: [
      "https://en.wikipedia.org/wiki/Kalamay",
      "http://www.pinaycookingcorner.com/2011/09/kalamay-with-pinipig.html"
    ]
  },
  {
    slug: "nilupak", title: "Nilupak", subtitle: "Pounded Cassava with Coconut and Butter",
    description: "Boiled cassava pounded smooth with coconut milk, butter and sugar, then pressed flat and cut. The name describes the pounding.",
    category: "DESSERT / KAKANIN", time: "1H", yield: "8 PAX", origin: "PHILIPPINES", technique: "POUND + PRESS",
    image: local("a-variety-of-nilupak.jpg"), imageSource: commonsPage("A_variety_of_Nilupak.jpg"),
    ingredients: [
      {name:"Cassava, peeled",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Coconut milk",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Condensed milk",metric:"300 g",imperial:"10.5 oz"},
      {name:"Butter",metric:"120 g",imperial:"4 oz"},
      {name:"Sugar",metric:"100 g",imperial:"3.5 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Grated coconut",metric:"100 g",imperial:"3.5 oz"},
      {name:"Cheese, grated",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Peel the cassava and remove the woody central cord running through each root.",
      "Boil for 25 to 30 minutes, until completely soft. Cassava must be thoroughly cooked; undercooked it is both unpleasant and unsafe.",
      "Drain well and pound while hot, traditionally in a wooden mortar, until no fibres or lumps remain.",
      "Work in the coconut milk, condensed milk, sugar and salt, then the butter a little at a time.",
      "Keep pounding or beating until the mass turns smooth, glossy and elastic.",
      "Press into a buttered tray or shape into a flat round, smoothing the top with a buttered spoon.",
      "Top with grated coconut and cheese, cool, and cut into wedges."
    ],
    notes: [
      "Remove the fibrous core before boiling; it never softens and ruins the texture.",
      "Pound while hot. Cold cassava will not come together smoothly however long you work it."
    ],
    verification: "verified",
    history: "Nilupak comes from the Tagalog lupak, to pound, and names a whole class of delicacies rather than a single recipe. Cassava and saba banana are the usual bases, and Binagol of Leyte is a variant made with giant taro.",
    sources: [
      "https://en.wikipedia.org/wiki/Nilupak",
      "https://www.angsarap.net/2025/09/05/special-nilupak/"
    ]
  },
  {
    slug: "binagol", title: "Binagol", subtitle: "Taro Pudding in a Coconut Shell",
    description: "Mashed giant taro cooked with coconut milk, condensed milk and egg yolk, packed into half a coconut shell, wrapped in banana leaf and steamed.",
    category: "DESSERT / KAKANIN", time: "1H 45M", yield: "6 PCS", origin: "LEYTE / EASTERN VISAYAS", technique: "SHELL STEAM",
    image: local("09979jfchurch-foods-tungkong-mangga-san-jose-del-monte-city-.jpg"), imageSource: commonsPage("09979jfChurch_Foods_Tungkong_Mangga_San_Jose_del_Monte_City_Bulacanfvf_03.JPG"),
    ingredients: [
      {name:"Giant taro (talyan) corm, grated",metric:"800 g",imperial:"1.8 lb"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Egg yolks",metric:"4 pcs",imperial:"4 pcs"},
      {name:"Butter",metric:"60 g",imperial:"2 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Coconut shells, halved",metric:"6 pcs",imperial:"6 pcs"},
      {name:"Banana leaves",metric:"6 sheets",imperial:"6 sheets"}
    ],
    instructions: [
      "Peel and grate the giant taro corm. Wear gloves; the raw corm irritates skin.",
      "Combine the grated taro with the coconut milk, condensed milk, sugar and salt in a heavy pan.",
      "Cook over low heat, stirring constantly, for 25 to 30 minutes until thick and pulling from the pan.",
      "Take it off the heat and beat in the butter and egg yolks quickly, so the yolks thicken rather than scramble.",
      "Pack the mixture into cleaned coconut shell halves, mounding slightly.",
      "Cover each shell with softened banana leaf and tie firmly with twine.",
      "Steam for 45 to 60 minutes. Cool before unwrapping; it firms as it cools."
    ],
    notes: [
      "Giant taro must be cooked through. Raw or undercooked taro is acrid and irritating.",
      "The coconut shell is the container the dish is named for and it also moderates the heat during steaming."
    ],
    verification: "verified",
    history: "Binagol is a Waray delicacy of Leyte, its name meaning placed in a coconut shell. It belongs to the nilupak family of pounded, starchy sweets, and is a standard pasalubong from the province.",
    sources: [
      "https://en.wikipedia.org/wiki/Binagol",
      "https://www.kawalingpinoyrecipe.com/native_delicacies/binagol.htm"
    ]
  },
  {
    slug: "tupig", title: "Tupig", subtitle: "Grilled Rice Cake in Banana Leaf",
    description: "Ground glutinous rice with coconut and muscovado, wrapped in banana leaf and grilled directly over coals until the leaf blackens and the inside sets chewy and smoky.",
    category: "DESSERT / KAKANIN", time: "1H", yield: "12 PCS", origin: "ILOCOS / PANGASINAN", technique: "CHARCOAL GRILL",
    ingredients: [
      {name:"Glutinous rice flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Muscovado sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Young coconut meat, stripped",metric:"200 g",imperial:"7 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Banana leaves",metric:"12 sheets",imperial:"12 sheets"}
    ],
    instructions: [
      "Soften the banana leaves over a flame until pliable and cut into rectangles about 20 cm long.",
      "Mix the glutinous rice flour, coconut milk, muscovado and salt into a thick, pourable batter.",
      "Fold in the stripped young coconut meat.",
      "Spoon a portion onto each leaf, spread it into a narrow strip, and roll into a flat packet. Fold the ends under rather than tying them.",
      "Grill over medium charcoal for 15 to 20 minutes, turning frequently. The leaf will char; that is expected and the smoke is part of the flavour.",
      "The tupig is done when it feels firm through the leaf and no longer squashes under the tongs.",
      "Cool slightly and serve in the wrapper."
    ],
    notes: [
      "Charcoal is the point. An oven version sets the batter but loses the smoke that defines tupig.",
      "Keep the packets flat and thin so they cook through before the leaf burns away entirely."
    ],
    verification: "verified",
    history: "Tupig, also called kangkanen or intemtem, comes from northwestern Luzon, particularly Ilocos, Pangasinan and Tarlac. It is sold by the roadside, grilled to order over coals, and is among the few kakanin cooked over direct fire rather than steamed.",
    sources: [
      "https://en.wikipedia.org/wiki/Tupig",
      "https://www.angsarap.net/2012/11/26/tupig/"
    ]
  },
  {
    slug: "polvoron", title: "Polvoron", subtitle: "Toasted Milk Shortbread",
    description: "Toasted flour, powdered milk, sugar and butter pressed into moulds and wrapped in coloured paper. It does not bake; it simply sets as the butter cools.",
    category: "CONFECTION / PRESSED", time: "35M", yield: "24 PCS", origin: "PHILIPPINES", technique: "TOASTED FLOUR",
    ingredients: [
      {name:"All-purpose flour",metric:"250 g",imperial:"2 cups"},
      {name:"Powdered milk",metric:"200 g",imperial:"7 oz"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Butter, melted",metric:"220 g",imperial:"7.8 oz"},
      {name:"Toasted pinipig",metric:"60 g",imperial:"2 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Toast the flour in a dry pan over low heat, stirring constantly, for 10 to 12 minutes until it turns light beige and smells nutty. This is the whole flavour of polvoron.",
      "Let the flour cool completely. Hot flour will melt the butter unevenly and the mixture will not hold.",
      "Combine the cooled flour with the powdered milk, sugar, salt and toasted pinipig.",
      "Pour in the melted butter and mix until the texture resembles damp sand that holds when squeezed.",
      "Pack firmly into polvoron moulds, pressing hard so the shape holds.",
      "Turn each one out carefully onto a tray and chill for 20 minutes to set.",
      "Wrap individually in cellophane or paper; they are fragile and crumble if handled loose."
    ],
    notes: [
      "Cool the toasted flour fully before adding butter, or the polvoron will be greasy rather than sandy.",
      "Press hard in the mould. Under-pressed polvoron falls apart the moment it is unmoulded."
    ],
    verification: "verified",
    history: "Polvoron is the Filipino descendant of the Spanish polvoron, both names built on the root for powder or dust. The Filipino version drops the baking of its Spanish ancestor and relies on toasted flour and powdered milk, set by chilling rather than by an oven.",
    sources: [
      "https://www.kawalingpinoy.com/polvoron/",
      "https://www.thelittleepicurean.com/filipino-polvoron/"
    ]
  },
  {
    slug: "pastillas-de-leche", title: "Pastillas de Leche", subtitle: "Milk Candy",
    description: "Milk cooked down with sugar until stiff, rolled into short logs and dusted in sugar. Traditionally made with carabao milk.",
    category: "CONFECTION / MILK", time: "1H", yield: "30 PCS", origin: "SAN MIGUEL, BULACAN", technique: "SLOW REDUCTION",
    image: local("pastillas-made-from-carabao-s-milk.jpg"), imageSource: commonsPage("Pastillas_made_from_carabao's_milk.jpg"),
    ingredients: [
      {name:"Carabao or full-cream milk",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Butter",metric:"30 g",imperial:"1 oz"},
      {name:"Powdered milk",metric:"80 g",imperial:"3 oz"},
      {name:"Caster sugar for coating",metric:"150 g",imperial:"5 oz"}
    ],
    instructions: [
      "Bring the milk to a simmer in a wide heavy pan and reduce it over low heat for 35 to 45 minutes, stirring often, until it has thickened to about a third of its volume.",
      "Add the sugar and stir until fully dissolved.",
      "Continue cooking, stirring constantly now, until the mass thickens enough to pull away from the sides of the pan, another 15 to 20 minutes.",
      "Stir in the butter, then the powdered milk, which gives the candy body and makes it workable.",
      "Cool until it can be handled comfortably.",
      "Roll into short cylinders about the thickness of a finger.",
      "Roll each in caster sugar and wrap in cellophane or papel de hapon."
    ],
    notes: [
      "A wide pan reduces faster and more evenly than a deep one.",
      "Carabao milk gives the traditional richness; cow's milk works but yields a paler, milder candy."
    ],
    verification: "verified",
    history: "Pastillas de leche originated in San Miguel, Bulacan, where carabao-rearing families made it at home from surplus milk. The elaborate cut-paper wrappers, papel de hapon, became a craft in their own right and are still associated with the town.",
    sources: [
      "https://en.wikipedia.org/wiki/Pastillas",
      "https://www.foxyfolksy.com/pastillas-de-leche/"
    ]
  },
  {
    slug: "yema", title: "Yema", subtitle: "Egg Yolk Custard Candy",
    description: "Egg yolks cooked down with condensed milk into a thick custard, rolled into balls and wrapped in cellophane. Sometimes coated in hard caramel.",
    category: "CONFECTION / CUSTARD", time: "45M", yield: "24 PCS", origin: "PHILIPPINES", technique: "CUSTARD REDUCTION",
    image: local("yema-philippines.jpg"), imageSource: commonsPage("Yema_(Philippines).jpg"),
    ingredients: [
      {name:"Egg yolks",metric:"10 pcs",imperial:"10 pcs"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"},
      {name:"Sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Lime zest",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Chopped cashews",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Beat the egg yolks with the condensed milk until completely smooth, then strain to remove any chalazae.",
      "Cook over the lowest possible heat, stirring without pause, for 20 to 25 minutes. If the heat rises the yolks will scramble and the batch is finished.",
      "Add the butter, sugar, lime zest and salt as it thickens.",
      "It is ready when the mixture pulls cleanly from the base of the pan and holds a ridge.",
      "Fold in the chopped cashews and cool completely.",
      "Roll into balls or the traditional pyramids with buttered hands.",
      "Wrap each in cellophane with twisted ends."
    ],
    notes: [
      "Low heat and constant stirring. Yema is a custard and behaves like one.",
      "Straining the yolk mixture before cooking is what keeps the finished candy smooth."
    ],
    verification: "verified",
    history: "Yema is made from egg yolks, and its existence is commonly traced to the Spanish colonial practice of using egg whites in mortar for church construction, leaving quantities of yolks to be used up. Whether or not the story is exact, the surplus-yolk logic runs through many Filipino and Spanish sweets.",
    sources: [
      "https://en.wikipedia.org/wiki/Yema_(candy)",
      "https://www.kawalingpinoy.com/yema/"
    ]
  },
  {
    slug: "bukayo", title: "Bukayo", subtitle: "Caramelised Young Coconut Sweet",
    description: "Strips of young coconut simmered in melted muscovado until the sugar turns to chewy caramel and coats every strand.",
    category: "CONFECTION / COCONUT", time: "45M", yield: "20 PCS", origin: "LINGAYEN, PANGASINAN", technique: "SUGAR CARAMEL",
    image: local("bukayo-sweetened-shredded-coconut-philippines.jpg"), imageSource: commonsPage("Bukayo_(sweetened_shredded_coconut)_-_Philippines.jpg"),
    ingredients: [
      {name:"Young coconut meat, stripped",metric:"500 g",imperial:"1.1 lb"},
      {name:"Muscovado sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Strip the young coconut meat into thin ribbons. It should be gelatinous rather than hard.",
      "Melt the muscovado with the water and pandan leaf in a heavy pan over medium heat, stirring until dissolved.",
      "Simmer the syrup for 8 minutes until it thickens and darkens.",
      "Add the coconut strips and the salt.",
      "Cook, stirring frequently, for 20 to 25 minutes, until the liquid has gone and the mixture is dark, sticky and pulls together in a mass.",
      "Remove the pandan leaf. Drop spoonfuls onto a greased tray or banana leaf squares.",
      "Cool completely until firm and chewy before wrapping."
    ],
    notes: [
      "Young coconut only. Mature coconut stays tough and will not take on the caramel the same way.",
      "Stop while the mass is still glossy; cooked too far it sets hard rather than chewy."
    ],
    verification: "verified",
    history: "Bukayo is traditionally made by simmering young coconut in sinuklob, sugarcane muscovado melted to a caramel. It is believed to have originated in Lingayen, Pangasinan, though it is now made and sold throughout the country.",
    sources: [
      "https://en.wikipedia.org/wiki/Bukayo",
      "https://www.foxyfolksy.com/bukayo/"
    ]
  },
  {
    slug: "otap", title: "Otap", subtitle: "Cebuano Puff Pastry Biscuit",
    description: "A flat oval of layered pastry rolled thin, dusted heavily in sugar and baked until it shatters. Cebu's best known pasalubong.",
    category: "PASTRY / BISCUIT", time: "2H", yield: "24 PCS", origin: "CEBU", technique: "LAMINATED PASTRY",
    image: local("otap.jpg"), imageSource: commonsPage("Otap.PNG"),
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Shortening",metric:"200 g",imperial:"7 oz"},
      {name:"Butter",metric:"100 g",imperial:"3.5 oz"},
      {name:"Water, iced",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Grated coconut, toasted",metric:"60 g",imperial:"2 oz"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Rub half the shortening into the flour and salt, then bring together with the iced water into a firm dough. Rest 30 minutes.",
      "Roll the dough into a rectangle, spread with the remaining shortening and butter, fold in three, and rest 20 minutes.",
      "Repeat the roll-and-fold three more times, resting between each. These layers are what make otap flaky rather than merely crisp.",
      "Roll the finished dough very thin, about 2 mm.",
      "Cut into ovals roughly 10 cm long.",
      "Press both sides firmly into the sugar mixed with toasted coconut.",
      "Bake at 180\u00b0C (355\u00b0F) for 15 to 18 minutes, until deeply golden and the sugar has caramelised. Cool completely; they crisp as they cool."
    ],
    notes: [
      "Rest the dough between folds or the layers tear and the pastry will not rise into leaves.",
      "Roll thinner than feels right. Thick otap is chewy, and otap should shatter."
    ],
    verification: "verified",
    history: "Otap is an oval puff-pastry biscuit from Cebu, traditionally made through a lengthy multi-stage baking process. It resembles the French palmier, but is thinner, more tightly layered and crisper, and is among the most recognisable Cebuano pasalubong.",
    sources: [
      "https://yoorekka.com/magazine/cebu-bohol/2018/05/22/5-must-try-cebu-native-delicacies/",
      "https://digilamon.com/destinations/philippines/cebu/cebu-delicacies-guide/"
    ]
  },
  {
    slug: "piaya", title: "Piaya", subtitle: "Muscovado-Filled Flatbread",
    description: "A thin unleavened flatbread stuffed with muscovado, pressed flat, sprinkled with sesame and cooked dry on a griddle until the filling melts and bubbles through.",
    category: "PASTRY / FLATBREAD", time: "1H 30M", yield: "12 PCS", origin: "NEGROS OCCIDENTAL", technique: "GRIDDLE BAKE",
    image: local("piaya.jpg"), imageSource: commonsPage("Piaya.jpg"),
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Water",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Neutral oil",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Muscovado sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Glutinous rice flour",metric:"40 g",imperial:"1/3 cup"},
      {name:"Sesame seeds",metric:"60 g",imperial:"2 oz"}
    ],
    instructions: [
      "Make a soft dough from the flour, water, half the oil and the salt. Knead until smooth and rest 30 minutes.",
      "For the filling, mix the muscovado with the glutinous rice flour and a spoonful of water into a thick paste. The rice flour stops the sugar running out as it melts.",
      "Divide the dough into balls and flatten each into a disc.",
      "Place a spoonful of filling in the centre, gather the edges over it and seal well, then press gently flat.",
      "Roll each out to about 12 cm across, working carefully so the filling does not break through.",
      "Brush one side with water and press into the sesame seeds.",
      "Cook on a dry griddle over medium heat for 3 to 4 minutes a side, until browned in patches and the filling bubbles inside."
    ],
    notes: [
      "Sealing the filling properly is the whole trick. A leak means burnt sugar welded to the pan.",
      "Cook dry, with no oil in the pan; piaya is griddled, not fried."
    ],
    verification: "verified",
    history: "Piaya is a muscovado-filled flatbread associated above all with Negros Occidental, the centre of the Philippine sugar industry, which is why muscovado rather than refined sugar is the traditional filling.",
    sources: [
      "https://en.wikipedia.org/wiki/Piaya_(food)",
      "https://yoorekka.com/magazine/cebu-bohol/2018/05/22/local-delicacies-in-cebu-city"
    ]
  },
  {
    slug: "rosquillos", title: "Rosquillos", subtitle: "Cebuano Ring Cookies",
    description: "Small scalloped ring cookies, crisp and faintly salty-sweet, created in Liloan, Cebu in 1907 and still made there.",
    category: "PASTRY / BISCUIT", time: "1H", yield: "36 PCS", origin: "LILOAN, CEBU", technique: "BAKED COOKIE",
    image: local("rosquillos.jpg"), imageSource: commonsPage("Rosquillos.jpg"),
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Butter",metric:"200 g",imperial:"7 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Egg yolks",metric:"4 pcs",imperial:"4 pcs"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Sugar for dusting",metric:"60 g",imperial:"2 oz"}
    ],
    instructions: [
      "Cream the butter and sugar until pale and light.",
      "Beat in the egg yolks one at a time.",
      "Fold in the flour, baking powder and salt until a firm dough forms. Do not overwork it or the cookies will be tough.",
      "Chill the dough for 30 minutes.",
      "Roll out to about 5 mm thick and cut into rings with a scalloped cutter, removing a small circle from the centre of each.",
      "Arrange on lined trays and dust the tops with sugar.",
      "Bake at 170\u00b0C (340\u00b0F) for 15 to 18 minutes, until pale gold at the edges. They firm up considerably as they cool."
    ],
    notes: [
      "Chilling the dough keeps the scalloped edge sharp instead of spreading in the oven.",
      "Take them out while still pale; they continue colouring on the hot tray."
    ],
    verification: "verified",
    history: "Rosquillos were created in 1907 by Margarita Titay Frasco in Liloan, Cebu. The name comes from the Spanish rosca, meaning ring, and was reputedly coined by President Sergio Osmena. The bakery she founded still trades on the cookie.",
    sources: [
      "https://en.wikipedia.org/wiki/Rosquillo",
      "https://cebuinsights.com/food/filipino-food/queen-of-cebuano-delicacies-titays/"
    ]
  },
  {
    slug: "masareal", title: "Masareal", subtitle: "Peanut and Sugar Bars",
    description: "Boiled peanuts ground fine with sugar, dried and cut into rectangular bars. Dense, sweet and faintly sandy, wrapped in plain white paper.",
    category: "CONFECTION / PEANUT", time: "50M", yield: "20 PCS", origin: "MANDAUE, CEBU", technique: "GRIND + PRESS",
    image: local("masareal-philippines.jpg"), imageSource: commonsPage("Masareal_(Philippines).jpg"),
    ingredients: [
      {name:"Peanuts, roasted and skinned",metric:"500 g",imperial:"1.1 lb"},
      {name:"Sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Grind the roasted peanuts to a coarse paste. Stop before it becomes peanut butter; masareal needs some grain.",
      "Dissolve the sugar in the water with the salt and bring to a boil.",
      "Cook the syrup to the soft-ball stage, about 115\u00b0C (240\u00b0F), roughly 8 minutes.",
      "Take off the heat and stir in the ground peanuts quickly and thoroughly, before the syrup sets.",
      "Tip onto a board or tray lined with paper and press into a slab about 1.5 cm thick.",
      "While still warm, score into rectangular bars.",
      "Cool completely, snap along the scores, and wrap each bar in white paper."
    ],
    notes: [
      "Score while warm and break when cold; cutting cold masareal shatters it.",
      "The syrup stage matters. Undercooked it stays tacky; overcooked it turns to brittle."
    ],
    verification: "verified",
    history: "Masareal, or masa real, originates in Mandaue, Cebu. The original recipe is credited to Juliana Didang Perez Suico in 1912, though the sweet only became widely popular from the 1960s. It is still traditionally sold wrapped in plain white paper.",
    sources: [
      "https://en.wikipedia.org/wiki/Masareal",
      "https://yoorekka.com/magazine/cebu-bohol/2018/05/22/local-delicacies-in-cebu-city"
    ]
  },
  {
    slug: "pandesal", title: "Pandesal", subtitle: "Salt Bread Rolls",
    description: "Soft enriched rolls proofed, cut, and rolled in breadcrumbs before baking. The Philippine breakfast bread, bought hot from the panaderia at dawn.",
    category: "BREAD / PANADERIA", time: "3H", yield: "16 PCS", origin: "PHILIPPINES", technique: "ENRICHED DOUGH",
    image: local("pinoy-pandesal.jpg"), imageSource: commonsPage("Pinoy_Pandesal.jpg"),
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"10 g",imperial:"2 tsp"},
      {name:"Milk, warm",metric:"250 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Butter, softened",metric:"60 g",imperial:"2 oz"},
      {name:"Fine breadcrumbs",metric:"120 g",imperial:"4 oz"}
    ],
    instructions: [
      "Whisk the flour, sugar, yeast and salt together, keeping the salt away from the yeast until mixed.",
      "Add the warm milk and egg and knead for 5 minutes, then work in the butter a little at a time.",
      "Knead for a further 8 to 10 minutes, until the dough is smooth and passes the windowpane test.",
      "Cover and prove for 1 to 1 1/2 hours, until doubled.",
      "Knock back, roll into a log, and cut into 16 pieces with a scraper. Cut sides up is traditional.",
      "Roll each piece in breadcrumbs and set on a lined tray, cut side up, spaced so they will touch as they rise. Prove again for 45 minutes.",
      "Bake at 190\u00b0C (375\u00b0F) for 14 to 16 minutes, until just golden. Pandesal should stay pale and soft, never crusty."
    ],
    notes: [
      "The breadcrumb coating is the defining feature; without it the roll is just a soft bun.",
      "Bake briefly and pull them while pale. Overbaked pandesal goes dry within the hour."
    ],
    verification: "verified",
    history: "Pandesal comes from the Spanish pan de sal, bread of salt, though the modern roll is slightly sweet rather than salty. It is the standard Filipino breakfast bread, eaten with coffee, cheese or dunked straight into hot chocolate.",
    sources: [
      "https://en.wikipedia.org/wiki/Pandesal",
      "https://www.yummy.ph/lessons/baking/pandesal-recipe-panaderia-recipes-a00261-20190606-lfrm"
    ]
  },
  {
    slug: "ensaymada", title: "Ensaymada", subtitle: "Buttered Brioche with Cheese and Sugar",
    description: "A soft coiled brioche brushed with butter and finished with sugar and grated cheese. The salt of the cheese against the sugar is the whole idea.",
    category: "BREAD / PANADERIA", time: "4H", yield: "12 PCS", origin: "PHILIPPINES", technique: "ENRICHED DOUGH",
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"100 g",imperial:"3.5 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Milk, warm",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Egg yolks",metric:"5 pcs",imperial:"5 pcs"},
      {name:"Butter, softened",metric:"180 g",imperial:"6.3 oz"},
      {name:"Butter for brushing",metric:"80 g",imperial:"3 oz"},
      {name:"Caster sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Queso de bola, grated",metric:"120 g",imperial:"4 oz"}
    ],
    instructions: [
      "Mix the flour, sugar, yeast and salt. Add the warm milk and egg yolks and knead 5 minutes.",
      "Work in the softened butter in stages, kneading 10 to 12 minutes until the dough is glossy and very soft. It will be slack; that is correct.",
      "Prove for 1 1/2 hours until doubled, then chill for 1 hour to firm the butter enough to handle.",
      "Divide into 12 pieces. Roll each into a long thin rope, then coil it into a spiral in a buttered brioche or muffin mould.",
      "Prove again for 1 hour, until visibly puffed.",
      "Bake at 175\u00b0C (345\u00b0F) for 15 to 18 minutes, until golden but still soft.",
      "Brush generously with melted butter while warm, then dust heavily with caster sugar and grated queso de bola."
    ],
    notes: [
      "The dough is meant to be soft and sticky. Adding flour to make it manageable gives a bready, dry ensaymada.",
      "Chilling before shaping is the difference between a clean coil and a greasy mess."
    ],
    verification: "verified",
    history: "Ensaymada descends from the Mallorcan ensaimada, whose name comes from saim, Catalan for pork lard. The Filipino version is built on butter instead, and grated queso de bola was added before the Second World War. Versions from Malolos and Barasoain in Bulacan later paired the cheese with salted duck egg.",
    sources: [
      "https://panlasangpinoy.com/filipino-pastry-bread-baking-ensemada-ensaimada-ensaymada-recipe/",
      "https://kitchenconfidante.com/filipino-ensaymada-recipe"
    ]
  },
  {
    slug: "monay", title: "Monay", subtitle: "Dense Milk Bread Roll",
    description: "A firm, faintly sweet roll with a deep crease down the middle, denser and chewier than pandesal. Keeps far better than the rest of the panaderia shelf.",
    category: "BREAD / PANADERIA", time: "3H", yield: "12 PCS", origin: "PHILIPPINES", technique: "ENRICHED DOUGH",
    image: local("pan-de-monja-monay-philippines.jpg"), imageSource: commonsPage("Pan_de_monja_(Monay)_Philippines.jpg"),
    ingredients: [
      {name:"All-purpose flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"10 g",imperial:"2 tsp"},
      {name:"Milk, warm",metric:"220 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Shortening",metric:"60 g",imperial:"2 oz"},
      {name:"Butter, melted",metric:"30 g",imperial:"1 oz"}
    ],
    instructions: [
      "Combine the flour, sugar, yeast and salt.",
      "Add the milk and egg and knead 5 minutes, then work in the shortening.",
      "Knead a further 8 minutes into a firm, smooth dough. Monay dough is stiffer than pandesal dough by design.",
      "Prove for 1 hour until doubled.",
      "Divide into 12 pieces and shape each into a tight round.",
      "Press a chopstick or the back of a knife firmly across the centre of each ball to make the deep crease. Prove 45 minutes.",
      "Bake at 180\u00b0C (355\u00b0F) for 18 to 22 minutes, until golden. Brush with melted butter on coming out of the oven."
    ],
    notes: [
      "Press the crease hard and deep, or it closes up as the roll rises.",
      "The stiffer dough is the point; a soft dough gives you pandesal in a monay shape."
    ],
    verification: "verified",
    history: "Monay was originally called pan de monja, nun's bread, a name that shifted over time into the blunter monay. It sits at the plain, keeping end of the Filipino panaderia range, alongside pandesal and pan de coco.",
    sources: [
      "https://en.wikipedia.org/wiki/Monay_(bread)",
      "https://www.pepper.ph/posts/panaderya-bread-history"
    ]
  },
  {
    slug: "pan-de-coco", title: "Pan de Coco", subtitle: "Coconut-Filled Sweet Rolls",
    description: "Soft rolls filled with grated coconut cooked down in brown sugar until dark and sticky. A panaderia staple and a lunchbox standby.",
    category: "BREAD / PANADERIA", time: "3H", yield: "12 PCS", origin: "PHILIPPINES", technique: "FILLED DOUGH",
    image: local("pan-de-coco2.jpg"), imageSource: commonsPage("Pan_de_coco2.jpg"),
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Milk, warm",metric:"240 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Butter, softened",metric:"70 g",imperial:"2.5 oz"},
      {name:"Grated coconut",metric:"250 g",imperial:"9 oz"},
      {name:"Brown sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Coconut milk",metric:"100 ml",imperial:"scant 1/2 cup"}
    ],
    instructions: [
      "Make the filling first: cook the grated coconut, brown sugar and coconut milk over medium heat for 12 to 15 minutes, until dark, thick and no longer wet. Cool completely.",
      "Mix the flour, sugar, yeast and salt, add the milk and egg, and knead 5 minutes.",
      "Work in the butter and knead 8 to 10 minutes until smooth. Prove 1 hour until doubled.",
      "Divide into 12 pieces and flatten each into a disc.",
      "Spoon cooled filling into the centre, gather the edges over it and seal firmly, then place seam-side down.",
      "Prove for 45 minutes.",
      "Bake at 180\u00b0C (355\u00b0F) for 16 to 18 minutes, until golden."
    ],
    notes: [
      "Cool the filling fully. Warm filling makes the dough slack and the rolls split in the oven.",
      "Cook the filling until it holds together in the pan, or it will leak out as the bread bakes."
    ],
    verification: "verified",
    history: "Pan de coco belongs to the everyday Filipino panaderia range, where sweet filled rolls sit beside the plainer pandesal and monay. Its filling, coconut cooked down with muscovado, is the same bukayo-style preparation used across Filipino sweets.",
    sources: [
      "https://www.spot.ph/eatdrink/44900/local-bread-10-best-panaderia-finds-in-manila",
      "https://www.yummy.ph/lessons/baking/pandesal-recipe-panaderia-recipes-a00261-20190606-lfrm"
    ]
  },
  {
    slug: "spanish-bread", title: "Spanish Bread", subtitle: "Butter and Sugar Rolled Bread",
    description: "A soft roll wrapped around a paste of butter, sugar and breadcrumbs, baked so the filling half melts into the crumb. Nothing about it is Spanish.",
    category: "BREAD / PANADERIA", time: "3H", yield: "16 PCS", origin: "PHILIPPINES", technique: "FILLED DOUGH",
    image: local("spanish-bread-se-orita-bread-philippines-06.jpg"), imageSource: commonsPage("Spanish bread (Señorita bread) - Philippines 06.jpg"),
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Milk, warm",metric:"240 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Butter, softened",metric:"60 g",imperial:"2 oz"},
      {name:"Butter for filling",metric:"120 g",imperial:"4 oz"},
      {name:"Brown sugar",metric:"150 g",imperial:"5 oz"},
      {name:"Fine breadcrumbs",metric:"100 g",imperial:"3.5 oz"},
      {name:"Milk powder",metric:"30 g",imperial:"1 oz"}
    ],
    instructions: [
      "Make the filling by creaming the butter with the brown sugar, breadcrumbs and milk powder into a thick spreadable paste. Chill it.",
      "Mix the flour, sugar, yeast and salt, add the milk and egg, and knead 5 minutes. Work in the softened butter and knead 8 minutes more.",
      "Prove 1 hour until doubled.",
      "Divide into 16 pieces and roll each into a triangle about 12 cm long.",
      "Spread a spoonful of filling over each triangle, then roll up from the wide end to the point, like a croissant.",
      "Roll the outside lightly in breadcrumbs and set point-side down. Prove 45 minutes.",
      "Bake at 180\u00b0C (355\u00b0F) for 15 to 17 minutes, until golden. Some filling will leak and caramelise; that is normal."
    ],
    notes: [
      "Chill the filling before rolling or it runs straight out during shaping.",
      "Roll from the wide end so the point seals underneath and holds the shape."
    ],
    verification: "verified",
    history: "Spanish bread has no Spanish original and the name's origin is unclear; it is a Filipino panaderia invention. Like pan de regla and kalihim, it belongs to a set of neighbourhood bakery breads whose names are far older than any written record of them.",
    sources: [
      "https://www.pepper.ph/posts/panaderya-bread-history",
      "https://www.spot.ph/eatdrink/44900/local-bread-10-best-panaderia-finds-in-manila"
    ]
  },
  {
    slug: "pan-de-regla", title: "Pan de Regla", subtitle: "Mung Bean Custard Bread",
    description: "A soft bread filled with a dark red-brown paste of sweetened mung bean. Also sold as kalihim, and the blunt nickname refers to the colour of the filling.",
    category: "BREAD / PANADERIA", time: "3H 30M", yield: "12 PCS", origin: "PHILIPPINES", technique: "FILLED DOUGH",
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Milk, warm",metric:"240 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Butter, softened",metric:"70 g",imperial:"2.5 oz"},
      {name:"Dried mung beans",metric:"200 g",imperial:"7 oz"},
      {name:"Brown sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Coconut milk",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Fine breadcrumbs",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Boil the mung beans until completely soft, about 40 minutes, then drain and mash smooth.",
      "Cook the mashed beans with the brown sugar and coconut milk over low heat for 15 minutes, stirring, until thick and dark. Cool completely.",
      "Mix the flour, sugar, yeast and salt, add the milk and egg, knead 5 minutes, then work in the butter and knead 8 minutes more.",
      "Prove 1 hour until doubled.",
      "Divide into 12 pieces, flatten each, and spoon the cooled filling into the centre. Seal well.",
      "Roll the filled rolls in breadcrumbs and prove 45 minutes.",
      "Bake at 180\u00b0C (355\u00b0F) for 16 to 18 minutes, until golden."
    ],
    notes: [
      "The filling must be cooked down until it holds its shape, or it bleeds through the crumb.",
      "Day-old bread filling and leftover bread are both traditional bulking agents in commercial versions."
    ],
    verification: "verified",
    history: "Pan de regla is also sold as kalihim, meaning secretary or keeper of secrets, a reference to the mystery of what is in the filling. The mung bean paste is the traditional version, and bakeries have long used it as a way to use up unsold bread.",
    sources: [
      "https://en.wikipedia.org/wiki/Monggo_bread",
      "https://www.pepper.ph/posts/panaderya-bread-history"
    ]
  },
  {
    slug: "kababayan", title: "Kababayan", subtitle: "Filipino Muffin Bread",
    description: "A small dense sweet bread baked in shallow moulds, with a domed top and a wide brim that gives it its salakot shape.",
    category: "BREAD / PANADERIA", time: "45M", yield: "12 PCS", origin: "PHILIPPINES", technique: "BAKED BATTER",
    ingredients: [
      {name:"All-purpose flour",metric:"250 g",imperial:"2 cups"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Eggs",metric:"4 large",imperial:"4 large"},
      {name:"Evaporated milk",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Neutral oil",metric:"100 ml",imperial:"scant 1/2 cup"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Beat the eggs with the sugar until thick, pale and roughly tripled in volume. This aeration is the only lift kababayan gets beyond the baking powder.",
      "Whisk the flour, baking powder and salt together.",
      "Fold the dry ingredients into the eggs in three additions, keeping as much air as possible.",
      "Stir the milk, oil and vanilla together and fold in gently until just combined.",
      "Grease shallow kababayan or mini brioche moulds well and fill each about three quarters.",
      "Bake at 175\u00b0C (345\u00b0F) for 18 to 22 minutes, until risen with a domed centre and a distinct brim.",
      "Cool in the moulds for 5 minutes before turning out."
    ],
    notes: [
      "Beat the eggs properly in step 1. Undermixed, kababayan comes out flat and heavy.",
      "The shallow wide mould is what produces the brim; a deep muffin tin gives you a muffin."
    ],
    verification: "verified",
    history: "Kababayan is named for the salakot, the wide-brimmed Filipino hat its shape resembles, and the word itself means fellow countryman. It is a fixture of the neighbourhood panaderia rather than a celebration bake.",
    sources: [
      "https://www.spot.ph/eatdrink/44900/local-bread-10-best-panaderia-finds-in-manila",
      "https://www.yummy.ph/lessons/baking/pandesal-recipe-panaderia-recipes-a00261-20190606-lfrm"
    ]
  },
  {
    slug: "napoleones", title: "Napoleones", subtitle: "Negros Custard Mille-Feuille",
    description: "Squares of flaky puff pastry layered with thick custard and finished with a white sugar glaze. Silay and Bacolod's signature pasalubong.",
    category: "PASTRY / LAYERED", time: "2H 30M", yield: "12 PCS", origin: "NEGROS OCCIDENTAL", technique: "LAMINATED PASTRY",
    image: local("napoleones.jpg"), imageSource: commonsPage("Napoleones.jpg"),
    ingredients: [
      {name:"Puff pastry",metric:"500 g",imperial:"1.1 lb"},
      {name:"Milk",metric:"500 ml",imperial:"2 cups"},
      {name:"Egg yolks",metric:"5 pcs",imperial:"5 pcs"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Cornstarch",metric:"50 g",imperial:"1/3 cup"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Icing sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Water",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Roll the puff pastry to about 3 mm and cut into squares roughly 7 cm across.",
      "Bake at 200\u00b0C (390\u00b0F) for 12 to 15 minutes until risen and deeply golden. Press them flat under a tray while still warm so they layer neatly.",
      "For the custard, whisk the egg yolks, sugar and cornstarch together until smooth.",
      "Heat the milk to a bare simmer and pour it slowly into the yolks, whisking constantly so they do not scramble.",
      "Return to the pan and cook over low heat, whisking, for 5 to 7 minutes until very thick. Beat in the butter and vanilla, then cool with cling film on the surface.",
      "Split each pastry square horizontally and pipe a thick layer of custard inside.",
      "Mix the icing sugar with the water into a stiff glaze, spread it over the tops, and let it set before serving."
    ],
    notes: [
      "Press the baked pastry flat while warm. Left to puff freely it will not hold custard evenly.",
      "Assemble close to serving; the pastry softens within a few hours of meeting the custard."
    ],
    verification: "verified",
    history: "Napoleones is a Negros Occidental pastry, invented by Conchita Conlu-Cuenca, from a family of sugar plantation owners. Its home in Silay and Bacolod is fitting: Negros is the centre of the Philippine sugar industry, and the pastry leans on that sugar heavily.",
    sources: [
      "https://www.angsarap.net/2021/09/24/napoleones/",
      "https://rezelkealoha.com/napoleones-with-maja-blanca-pastry-cream/"
    ]
  },
  {
    slug: "pinasugbo", title: "Pinasugbo", subtitle: "Caramelised Banana Chips with Sesame",
    description: "Thin lengthwise slices of saba banana fried crisp and turned through caramelised sugar with sesame seeds, then sold in paper cones.",
    category: "MERIENDA / FRIED", time: "40M", yield: "8 PAX", origin: "WESTERN VISAYAS", technique: "CARAMEL FRY",
    image: local("pinasugbo-mindanao-philippines-01.jpg"), imageSource: commonsPage("Pinasugbo_(Mindanao,_Philippines)_01.jpg"),
    ingredients: [
      {name:"Saba bananas, thinly sliced lengthwise",metric:"8 pcs",imperial:"8 pcs"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Sesame seeds",metric:"60 g",imperial:"2 oz"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"}
    ],
    instructions: [
      "Peel the saba and slice them lengthwise as thinly as you can, about 3 mm.",
      "Heat the oil to 170\u00b0C (340\u00b0F) and fry the slices in batches for 3 to 4 minutes, until golden and rigid. Drain on a rack.",
      "In a separate wide pan, melt the brown sugar with the water over medium heat.",
      "Cook the syrup for 5 to 7 minutes until it thickens and darkens to a deep amber.",
      "Add the sesame seeds and stir once.",
      "Turn the fried banana slices through the caramel quickly, coating each piece before the sugar seizes.",
      "Spread on a greased tray to set hard, then break apart and serve in paper cones."
    ],
    notes: [
      "Fry the bananas to genuine crispness first. Any softness left will go limp under the caramel.",
      "Work fast once the sesame goes in; the caramel sets within a minute or two."
    ],
    verification: "verified",
    history: "Pinasugbo comes from the Hiligaynon-speaking Western Visayas, and its roots are commonly traced to techniques introduced by Japanese immigrants, the imin, in the region in the early twentieth century. It is a standard pasalubong from Iloilo and Negros.",
    sources: [
      "https://en.wikipedia.org/wiki/Pinasugbo",
      "https://www.gmanetwork.com/news/newstv/pinassarap/632103/negros-specialties-ihahain-sa-pinas-sarap/story/"
    ]
  },
  {
    slug: "suman-sa-lihiya", title: "Suman sa Lihiya", subtitle: "Lye-Treated Rice Cake in Banana Leaf",
    description: "Glutinous rice treated with lye water, wrapped in banana leaf and boiled until it turns amber, dense and springy. Eaten with sugar or latik.",
    category: "DESSERT / KAKANIN", time: "2H 30M", yield: "12 PCS", origin: "PHILIPPINES", technique: "LYE BOIL",
    ingredients: [
      {name:"Glutinous rice",metric:"600 g",imperial:"3 cups"},
      {name:"Coconut milk",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Lye water (lihiya)",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Banana leaves",metric:"12 sheets",imperial:"12 sheets"},
      {name:"Brown sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Coconut cream",metric:"300 ml",imperial:"1 1/4 cups"}
    ],
    instructions: [
      "Soak the glutinous rice in water for at least 4 hours, then drain well.",
      "Toss the drained rice with the coconut milk, salt and lye water. The rice will take on a faint yellow tint.",
      "Soften the banana leaves over a flame and cut into rectangles.",
      "Spoon rice onto each leaf, fold the sides over and roll into a log, then fold the ends under. Leave room; the rice swells considerably.",
      "Tie the parcels in pairs and boil them fully submerged for 1 1/2 to 2 hours.",
      "Meanwhile reduce the coconut cream with the brown sugar into a latik syrup, about 20 minutes.",
      "Unwrap and serve warm with the syrup poured over."
    ],
    notes: [
      "Lye water gives suman sa lihiya its amber colour and springy chew. Use exactly the measured amount; more turns it bitter and soapy.",
      "Wrap loosely. Tightly packed parcels burst as the rice expands."
    ],
    verification: "verified",
    history: "Suman names a broad family of Filipino rice cakes steamed or boiled in leaves, with dozens of regional forms. The lihiya version is strongly associated with Quezon province, and the lye both colours the rice and gives it its distinctive texture.",
    sources: [
      "https://panlasangpinoy.com/suman-sa-lihiya/",
      "https://www.pinoyrecipe.net/suman-sa-lihiya-recipe/"
    ]
  },
  {
    slug: "karioka", title: "Karioka", subtitle: "Fried Glutinous Rice Balls in Caramel",
    description: "Balls of glutinous rice and grated coconut deep-fried, then skewered and coated in dark caramel. Known by a different name in nearly every region.",
    category: "MERIENDA / FRIED", time: "45M", yield: "20 PCS", origin: "PHILIPPINES", technique: "FRY + CARAMEL",
    image: local("cascaron-fried-mochi-balls-12486482804.jpg"), imageSource: commonsPage("Cascaron-_fried_mochi_balls_(12486482804).jpg"),
    ingredients: [
      {name:"Glutinous rice flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Grated coconut",metric:"200 g",imperial:"7 oz"},
      {name:"Coconut milk",metric:"180 ml",imperial:"3/4 cup"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Bamboo skewers",metric:"10 pcs",imperial:"10 pcs"}
    ],
    instructions: [
      "Mix the glutinous rice flour, grated coconut, salt and coconut milk into a stiff dough that holds together when squeezed.",
      "Roll into balls about 3 cm across.",
      "Heat the oil to 165\u00b0C (330\u00b0F). Frying too hot colours the outside before the centre cooks.",
      "Fry the balls in batches for 5 to 7 minutes, turning, until golden and firm. Drain on a rack.",
      "In a separate pan, melt the brown sugar with the water and cook for 5 minutes until thick and syrupy.",
      "Turn the fried balls through the caramel until well coated.",
      "Thread two or three onto each skewer and leave to set before serving."
    ],
    notes: [
      "Fry at a moderate temperature. These are dense and need time for the middle to cook through.",
      "The dough should be stiff enough to hold a ball cleanly; slack dough spreads and splits in the oil."
    ],
    verification: "verified",
    history: "The same sweet carries a different name almost everywhere: karioka or carioca in Tagalog areas, cascaron in Ilocos, bitsu-bitsu in the Visayas, tinudok elsewhere, tungi-tungi in Kapampangan. It contains no wheat, egg or dairy, only rice, coconut and sugar.",
    sources: [
      "https://en.wikipedia.org/wiki/Cascaron",
      "https://panlasangpinoy.com/karioka-carioca-recipe/"
    ]
  },
  {
    slug: "cassava-cake", title: "Cassava Cake", subtitle: "Grated Cassava Bake with Custard Top",
    description: "Grated cassava baked with coconut and condensed milk, finished with a custard layer browned under heat. Merienda, not dessert, in practice.",
    category: "DESSERT / CASSAVA", time: "1H 15M", yield: "12 PAX", origin: "PHILIPPINES", technique: "BAKED CUSTARD",
    image: local("cassava-cake-philippines-2.jpg"), imageSource: commonsPage("Cassava_cake_(Philippines)_2.jpg"),
    ingredients: [
      {name:"Cassava, grated",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Coconut milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Evaporated milk",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Eggs",metric:"3 large",imperial:"3 large"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Butter, melted",metric:"80 g",imperial:"3 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Coconut cream for topping",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Egg yolks for topping",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cheese, grated",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Squeeze the grated cassava lightly to remove excess liquid, but do not wring it dry.",
      "Mix it with the coconut milk, condensed milk, evaporated milk, eggs, sugar, melted butter and salt.",
      "Pour into a buttered baking dish and bake at 180\u00b0C (355\u00b0F) for 40 to 45 minutes, until set and firm to the touch.",
      "For the topping, whisk the coconut cream with the egg yolks and a spoonful of condensed milk.",
      "Spread the topping over the baked cake and scatter with grated cheese.",
      "Return to the oven for 12 to 15 minutes, or finish under a grill, until the top is browned and blistered.",
      "Cool completely before cutting; warm cassava cake will not hold a clean edge."
    ],
    notes: [
      "Cassava must be fully cooked through. Test the centre, not the edges.",
      "Cool it properly. Cut warm, it collapses."
    ],
    verification: "verified",
    history: "Cassava cake, sometimes called cassava bibingka, is one of the most common Filipino merienda bakes, built on a root crop that grows readily across the islands. The custard topping and grated cheese are standard rather than embellishment.",
    sources: [
      "https://en.wikipedia.org/wiki/Cassava_cake",
      "https://www.hungryhuy.com/cassava-cake/"
    ]
  },
  {
    slug: "buko-pandan", title: "Buko Pandan", subtitle: "Young Coconut and Pandan Dessert",
    description: "Strips of young coconut and pandan-scented jelly folded through sweetened cream. Cold, pale green, and on every party table.",
    category: "DESSERT / COLD", time: "1H", yield: "10 PAX", origin: "PHILIPPINES", technique: "GELATIN SET",
    image: local("pandan-cake.jpg"), imageSource: commonsPage("Pandan_Cake.jpg"),
    ingredients: [
      {name:"Young coconut meat, stripped",metric:"500 g",imperial:"1.1 lb"},
      {name:"Pandan leaves",metric:"6 leaves",imperial:"6 leaves"},
      {name:"Water",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Gelatin powder",metric:"20 g",imperial:"2 1/2 tbsp"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"All-purpose cream",metric:"500 ml",imperial:"2 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Tapioca pearls, cooked",metric:"200 g",imperial:"7 oz"}
    ],
    instructions: [
      "Simmer the pandan leaves in the water for 20 minutes, until the water is fragrant and pale green. Strain and discard the leaves.",
      "Dissolve the gelatin and half the sugar in the hot pandan water, stirring until completely clear.",
      "Pour into a shallow tray and chill until fully set, about 1 hour, then cut into small cubes.",
      "Whip the cream lightly with the condensed milk and remaining sugar until thickened but still pourable.",
      "Fold in the young coconut strips, the pandan jelly cubes and the cooked tapioca pearls.",
      "Chill for at least 2 hours before serving. The flavours need the time to come together.",
      "Serve very cold."
    ],
    notes: [
      "Use real pandan leaves rather than extract if you can; the colour is paler and the flavour rounder.",
      "Fold gently at the end or the jelly cubes break down and cloud the cream."
    ],
    verification: "verified",
    history: "Buko pandan pairs the two flavours that define Filipino dessert cooking: young coconut and pandan. It exists as a chilled salad, as a cake, and as a gelatin dessert, and is standard at fiestas and Christmas tables.",
    sources: [
      "https://en.wikipedia.org/wiki/Buko_pandan_cake",
      "http://pinoyamericanrecipes.blogspot.com/2011/06/304buko-pandan-cake.html"
    ]
  },
  {
    slug: "atchara", title: "Atchara", subtitle: "Pickled Green Papaya",
    description: "Grated unripe papaya salted, pressed, and packed into a sweet-sour brine with carrot, ginger and peppercorns. Served beside anything grilled or fried.",
    category: "CONDIMENT / PICKLE", time: "1H", yield: "6 JARS", origin: "PHILIPPINES", technique: "SWEET PICKLE",
    image: local("atchara.jpg"),
    ingredients: [
      {name:"Green papaya, grated",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Salt",metric:"30 g",imperial:"2 tbsp"},
      {name:"Cane vinegar",metric:"500 ml",imperial:"2 cups"},
      {name:"Sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Carrot, julienned",metric:"150 g",imperial:"5 oz"},
      {name:"Ginger, julienned",metric:"50 g",imperial:"1.8 oz"},
      {name:"Garlic, sliced",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Red bell pepper, julienned",metric:"100 g",imperial:"3.5 oz"},
      {name:"Raisins",metric:"60 g",imperial:"2 oz"},
      {name:"Black peppercorns",metric:"1 tbsp",imperial:"1 tbsp"}
    ],
    instructions: [
      "Peel and grate the green papaya. Toss it with the salt and leave for 1 hour.",
      "Squeeze the papaya hard in a cloth to drive out as much liquid as possible, then rinse and squeeze again. This step is what keeps the pickle crisp rather than soggy.",
      "Bring the vinegar, sugar and peppercorns to a boil, stirring until the sugar dissolves. Simmer 5 minutes, then cool slightly.",
      "Combine the pressed papaya with the carrot, ginger, garlic, bell pepper and raisins.",
      "Pack the vegetables into clean sterilised jars.",
      "Pour the warm brine over, making sure everything is submerged.",
      "Seal and refrigerate for at least 3 days before eating. It improves over several weeks."
    ],
    notes: [
      "Squeezing the salted papaya dry is the single step that decides the texture.",
      "Give it three days minimum. Fresh from the jar it tastes only of raw vinegar."
    ],
    verification: "verified",
    history: "Atchara takes its name and method from the achar pickles of India and maritime Southeast Asia, carried along the same trade routes as much of Filipino cooking. The Filipino version is distinctive for its green papaya base and its markedly sweet brine.",
    sources: [
      "https://en.wikipedia.org/wiki/Atchara",
      "https://www.pepper.ph/recipes/atchara-filipino-papaya-pickle"
    ]
  },
  {
    slug: "buko-pie", title: "Buko Pie", subtitle: "Young Coconut Pie",
    description: "Tender young coconut strips bound in a thickened milk custard under a double crust, baked until the pastry is pale gold. Laguna's pasalubong.",
    category: "DESSERT / PIE", time: "1H 30M", yield: "10 PAX", origin: "LAGUNA", technique: "BAKED PIE",
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Butter, cold and cubed",metric:"250 g",imperial:"9 oz"},
      {name:"Iced water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Young coconut meat, stripped",metric:"600 g",imperial:"1.3 lb"},
      {name:"Young coconut water",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Condensed milk",metric:"300 g",imperial:"10.5 oz"},
      {name:"Cornstarch",metric:"60 g",imperial:"1/2 cup"},
      {name:"Sugar",metric:"100 g",imperial:"3.5 oz"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"}
    ],
    instructions: [
      "Rub the cold butter into the flour and salt until the mixture looks like coarse crumbs with some butter still visible. Bring together with the iced water, wrap and chill 30 minutes.",
      "Strip the young coconut meat into ribbons. It should be soft and gelatinous, not the hard mature flesh.",
      "Slake the cornstarch in the coconut water until smooth, then cook with the condensed milk and sugar over medium heat, stirring, for 6 to 8 minutes until very thick.",
      "Fold in the coconut strips and cool completely. A warm filling will melt the pastry as you line the tin.",
      "Roll out two thirds of the pastry and line a 23 cm pie dish. Fill, then top with the remaining pastry, seal the edge and cut steam vents.",
      "Brush with beaten egg.",
      "Bake at 190\u00b0C (375\u00b0F) for 40 to 45 minutes, until the crust is set and pale gold. Cool fully before slicing or the filling runs."
    ],
    notes: [
      "Young coconut only. Mature coconut is fibrous and will not soften in the filling.",
      "Cool completely before cutting. Buko pie sets as it cools and a warm slice collapses."
    ],
    verification: "verified",
    history: "Buko pie is the defining pasalubong of Laguna, particularly Los Banos, where roadside bakeries sell it to travellers heading south from Manila. It is one of the few Filipino sweets built around a Western pastry crust rather than rice or coconut flour.",
    sources: [
      "https://en.wikipedia.org/wiki/Buko_pie",
      "https://www.kawalingpinoy.com/buko-pie/"
    ]
  },
  {
    slug: "ginataang-bilo-bilo", title: "Ginataang Bilo-Bilo", subtitle: "Rice Balls in Sweet Coconut Milk",
    description: "Chewy glutinous rice balls simmered with saba, sweet potato, sago and jackfruit in sweetened coconut milk. Afternoon merienda, eaten warm.",
    category: "DESSERT / GATA", time: "45M", yield: "6 PAX", origin: "PHILIPPINES", technique: "COCONUT SIMMER",
    ingredients: [
      {name:"Glutinous rice flour",metric:"250 g",imperial:"2 cups"},
      {name:"Water",metric:"160 ml",imperial:"2/3 cup"},
      {name:"Coconut milk",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Saba bananas, sliced",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Sweet potato, cubed",metric:"250 g",imperial:"9 oz"},
      {name:"Taro (gabi), cubed",metric:"200 g",imperial:"7 oz"},
      {name:"Tapioca pearls, cooked",metric:"150 g",imperial:"5 oz"},
      {name:"Jackfruit (langka), sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Mix the glutinous rice flour with the water into a firm dough and roll into balls about 2 cm across. These are the bilo-bilo.",
      "Bring the coconut milk to a gentle simmer with the salt. Do not let it boil hard or it will split.",
      "Add the sweet potato and taro and simmer for 10 minutes, until they begin to soften.",
      "Add the rice balls and cook for 8 to 10 minutes. They are done when they float and are chewy through.",
      "Add the saba and cook 3 minutes.",
      "Stir in the sugar, tapioca pearls, jackfruit and coconut cream and simmer 5 minutes more.",
      "Serve warm in bowls. It thickens considerably as it stands, so loosen with a little coconut milk if reheating."
    ],
    notes: [
      "Add the root vegetables first and the banana late, or the saba disintegrates into the pot.",
      "The starch from the rice balls thickens the whole pot; keep it looser than you want it."
    ],
    verification: "verified",
    history: "Ginataang bilo-bilo belongs to the large ginataan family of coconut-milk dishes, and is the sweet, mixed version eaten as merienda. What goes in varies by household and season, but the rice balls and coconut milk are constant.",
    sources: [
      "https://en.wikipedia.org/wiki/Bilo-bilo",
      "https://www.kawalingpinoy.com/ginataang-bilo-bilo/"
    ]
  },
  {
    slug: "panutsa", title: "Panutsa", subtitle: "Peanut Brittle",
    description: "Whole peanuts set in muscovado caramel and poured into flat rounds. Snaps clean and tastes of raw sugar rather than refined syrup.",
    category: "CONFECTION / BRITTLE", time: "30M", yield: "16 PCS", origin: "BATANGAS", technique: "SUGAR CARAMEL",
    ingredients: [
      {name:"Peanuts, roasted and skinned",metric:"400 g",imperial:"14 oz"},
      {name:"Muscovado sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"},
      {name:"Water",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"}
    ],
    instructions: [
      "Warm the roasted peanuts in a low oven so they do not chill the caramel when added.",
      "Melt the muscovado with the water and salt over medium heat, stirring only until dissolved.",
      "Cook without stirring for 8 to 10 minutes, to the hard-crack stage, about 150\u00b0C (300\u00b0F). Below this the brittle will be chewy rather than snappy.",
      "Take off the heat and stir in the butter.",
      "Add the warm peanuts and fold quickly to coat.",
      "Spoon flat rounds onto a greased tray or onto squares of banana leaf, spreading each thin.",
      "Cool completely until hard, then lift away and wrap."
    ],
    notes: [
      "Take the sugar to hard crack. Anything less sets tacky and pulls at the teeth.",
      "Molten sugar at this temperature burns badly. Use a spoon, never fingers, and work away from children."
    ],
    verification: "verified",
    history: "Panutsa, also called panutsang mani, is built on muscovado or sangkaka, the raw cake sugar of Philippine sugar country, which is what gives it a darker, more mineral taste than a syrup-based brittle. It is particularly associated with Batangas, and a pili-nut version is made in Bicol.",
    sources: [
      "https://en.wikipedia.org/wiki/Panutsang_mani",
      "https://www.yummy.ph/recipe/panutsa-peanut-brittle-recipe-a1517-20161122"
    ]
  },
  {
    slug: "biscocho", title: "Biscocho", subtitle: "Twice-Baked Buttered Sugar Toast",
    description: "Day-old bread sliced, buttered, dusted with sugar and baked again until dry and crisp all the way through. Iloilo's answer to leftover pandesal.",
    category: "PASTRY / BISCUIT", time: "45M", yield: "24 PCS", origin: "ILOILO", technique: "TWICE BAKED",
    ingredients: [
      {name:"Day-old pandesal or loaf bread",metric:"500 g",imperial:"1.1 lb"},
      {name:"Butter, softened",metric:"180 g",imperial:"6.3 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Slice the day-old bread about 1 cm thick. Stale bread is the point; fresh bread steams instead of drying.",
      "Cream the butter with the salt until spreadable.",
      "Spread butter generously on one side of each slice.",
      "Dust the buttered side heavily with sugar.",
      "Arrange on trays in a single layer and bake at 150\u00b0C (300\u00b0F) for 20 minutes.",
      "Turn the slices and bake a further 12 to 18 minutes, until dry through and pale gold. They crisp further as they cool.",
      "Cool completely and store airtight; properly dried biscocho keeps for weeks."
    ],
    notes: [
      "Low and slow. High heat browns the sugar before the bread dries, leaving a soft centre.",
      "A garlic version, made with butter and garlic instead of sugar, is eaten with soup."
    ],
    verification: "verified",
    history: "Biscocho in the Philippines means twice-baked bread, buttered and sugared, rather than the Spanish sponge the name descends from. It is strongly associated with Iloilo, where bakeries built a pasalubong trade on it, and began as a way of using unsold bread.",
    sources: [
      "https://en.wikipedia.org/wiki/Biscocho",
      "https://foodphilippines.com/story/biskwit-101/"
    ]
  },
  {
    slug: "barquillos", title: "Barquillos", subtitle: "Rolled Wafer Sticks",
    description: "A thin batter griddled on a hot plate and rolled around a rod while still soft, setting into a brittle hollow tube.",
    category: "PASTRY / BISCUIT", time: "1H", yield: "24 PCS", origin: "ILOILO", technique: "GRIDDLED WAFER",
    ingredients: [
      {name:"All-purpose flour",metric:"200 g",imperial:"1 2/3 cups"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Butter, melted",metric:"120 g",imperial:"4 oz"},
      {name:"Eggs",metric:"3 large",imperial:"3 large"},
      {name:"Milk",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Beat the eggs and sugar until pale, then whisk in the melted butter, milk, vanilla and salt.",
      "Fold in the flour until the batter is smooth and thin, about the consistency of double cream. Rest 15 minutes.",
      "Heat a barquillos iron or a flat griddle over medium heat and grease lightly.",
      "Spoon a thin round of batter and cook for 60 to 90 seconds a side, until pale gold and set.",
      "Lift the wafer off and immediately roll it tightly around a wooden rod or the handle of a spoon. You have only a few seconds before it hardens.",
      "Slide the rolled tube off and cool on a rack.",
      "Store airtight the moment they are cold; barquillos go soft in humid air within hours."
    ],
    notes: [
      "Roll while the wafer is still hot and pliable. Once it cools it shatters rather than bends.",
      "Work one wafer at a time. Two on the griddle at once and the second will set flat."
    ],
    verification: "verified",
    history: "Barquillos are made by cooking a thin flour, sugar, butter and egg batter on a hot plate and wrapping each wafer around a rod. They are a fixture of Iloilo pasalubong counters, often sold alongside biscocho and stuffed with a sweet filling as barquiron.",
    sources: [
      "https://foodphilippines.com/story/biskwit-101/",
      "https://featrmedia.com/nostalgic-filipino-cookies-minasa-lengua-de-gato-barquillos/"
    ]
  },
  {
    slug: "broas", title: "Broas", subtitle: "Filipino Ladyfingers",
    description: "Light finger-shaped sponge biscuits of nothing but egg, sugar and flour, dried in a slow oven until crisp.",
    category: "PASTRY / BISCUIT", time: "50M", yield: "30 PCS", origin: "PHILIPPINES", technique: "BAKED SPONGE",
    ingredients: [
      {name:"Eggs, separated",metric:"5 large",imperial:"5 large"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"All-purpose flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Icing sugar for dusting",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Beat the egg whites with the salt to soft peaks, then add half the sugar and beat to stiff, glossy peaks.",
      "In a separate bowl beat the yolks with the remaining sugar until thick and pale.",
      "Fold the yolks into the whites gently, keeping as much air as possible. The air is the only leavening broas get.",
      "Sift the flour over in two additions and fold through lightly.",
      "Pipe fingers about 8 cm long onto lined trays, spaced well apart.",
      "Dust with icing sugar and bake at 160\u00b0C (320\u00b0F) for 15 minutes, until just coloured.",
      "Drop the oven to 120\u00b0C (250\u00b0F) and dry for a further 15 to 20 minutes until crisp through. Cool on the tray."
    ],
    notes: [
      "Folding is where broas are won or lost; stir and the batter collapses into a flat biscuit.",
      "The second low-temperature stage dries rather than bakes, and is what makes them keep."
    ],
    verification: "verified",
    history: "Broas are the Filipino ladyfinger, traditionally just flour, eggs and sugar baked in a charcoal oven. They are eaten on their own, dunked in hot chocolate, and used as the base layer in Filipino refrigerator cakes.",
    sources: [
      "https://foodphilippines.com/story/biskwit-101/",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "lengua-de-gato", title: "Lengua de Gato", subtitle: "Cat's Tongue Butter Cookies",
    description: "Wafer-thin tongues of butter cookie, crisp enough to shatter. Baked flat and pale, never browned.",
    category: "PASTRY / BISCUIT", time: "40M", yield: "40 PCS", origin: "PHILIPPINES", technique: "PIPED COOKIE",
    ingredients: [
      {name:"Butter, softened",metric:"200 g",imperial:"7 oz"},
      {name:"Icing sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Egg whites",metric:"4 pcs",imperial:"4 pcs"},
      {name:"All-purpose flour",metric:"160 g",imperial:"1 1/3 cups"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Cream the butter and icing sugar until very light and almost white.",
      "Beat in the egg whites a little at a time, with the vanilla and salt. Add them slowly or the mixture splits.",
      "Fold in the flour until smooth. The batter should be soft enough to pipe easily.",
      "Pipe thin strips about 6 cm long onto lined trays, leaving wide gaps; they spread a great deal.",
      "Bake at 170\u00b0C (340\u00b0F) for 8 to 11 minutes, until the edges are golden but the centres still pale.",
      "Leave on the tray for 2 minutes to firm, then move to a rack.",
      "Cool completely and store airtight."
    ],
    notes: [
      "Pipe them thin. Thick lengua de gato bakes chewy in the middle rather than crisp.",
      "They colour from the edge inward, so pull them when the rims are gold and the centres still blond."
    ],
    verification: "verified",
    history: "Lengua de gato takes its name and shape from the Spanish and French cat's tongue biscuit. In the Philippines it is a standard tin-and-ribbon pasalubong, and is closely associated with Baguio, where several long-established bakeries sell it.",
    sources: [
      "https://www.kawalingpinoy.com/lengua-de-gato/",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "uraro", title: "Uraro", subtitle: "Arrowroot Cookies",
    description: "Dry, pale, flower-shaped cookies of arrowroot flour that dissolve on the tongue rather than crumble.",
    category: "PASTRY / BISCUIT", time: "50M", yield: "36 PCS", origin: "QUEZON", technique: "PRESSED COOKIE",
    ingredients: [
      {name:"Arrowroot flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"All-purpose flour",metric:"80 g",imperial:"2/3 cup"},
      {name:"Butter, softened",metric:"200 g",imperial:"7 oz"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Egg yolks",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Milk",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Toast the arrowroot flour in a dry pan over low heat for 6 to 8 minutes, stirring, until it smells faintly nutty. Cool completely.",
      "Cream the butter and sugar until light, then beat in the yolks and milk.",
      "Fold in the toasted arrowroot, the plain flour and the salt until a soft dough forms.",
      "Chill 20 minutes.",
      "Press the dough into flower-shaped moulds, or roll and cut, keeping the cookies about 8 mm thick.",
      "Bake at 160\u00b0C (320\u00b0F) for 18 to 22 minutes, until set but barely coloured. Uraro should stay pale.",
      "Cool completely on the tray; they are fragile while warm."
    ],
    notes: [
      "Toasting the arrowroot removes its raw, chalky edge and is worth the extra ten minutes.",
      "Do not brown them. Colour means the texture has gone from melting to hard."
    ],
    verification: "verified",
    history: "Uraro is made from arrowroot starch, laboriously extracted from the root, and is a speciality of southern Luzon, particularly Quezon province. Its melting, dry texture comes from the starch rather than from wheat, which is why it cannot be made with flour alone.",
    sources: [
      "https://foodphilippines.com/story/biskwit-101/",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "pacencia", title: "Pacencia", subtitle: "Egg White Drop Cookies",
    description: "Small airy buttons of whipped egg white and sugar, baked dry. Named for the patience the whisking takes.",
    category: "PASTRY / BISCUIT", time: "1H", yield: "50 PCS", origin: "PHILIPPINES", technique: "MERINGUE DROP",
    ingredients: [
      {name:"Egg whites",metric:"4 pcs",imperial:"4 pcs"},
      {name:"Sugar",metric:"200 g",imperial:"7 oz"},
      {name:"All-purpose flour",metric:"120 g",imperial:"1 cup"},
      {name:"Calamansi zest",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Beat the egg whites with the salt until foaming, then add the sugar a spoonful at a time, beating until the meringue is stiff and glossy. This is the slow part the cookie is named for.",
      "Fold in the calamansi zest and vanilla.",
      "Sift the flour over and fold through gently until just combined.",
      "Drop small rounds, about a teaspoon each, onto lined trays.",
      "Bake at 150\u00b0C (300\u00b0F) for 15 minutes.",
      "Lower to 120\u00b0C (250\u00b0F) and dry for 20 to 25 minutes more, until crisp through and still pale.",
      "Cool in the switched-off oven with the door ajar, then store airtight immediately."
    ],
    notes: [
      "Any grease on the bowl or beaters will stop the whites stiffening. Wipe both with calamansi first.",
      "They draw moisture from the air fast; get them into a sealed tin as soon as they are cold."
    ],
    verification: "verified",
    history: "Pacencia is a button-shaped drop cookie of whipped egg white, sometimes scented with calamansi, lemon or vanilla. It is named after patience, for the amount of whisking required before electric beaters were common.",
    sources: [
      "https://foodphilippines.com/story/biskwit-101/",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "roscas", title: "Roscas", subtitle: "Twisted Sugar Cookies",
    description: "Short, sandy cookies of flour, butter and egg, twisted into rings or coils and rolled in sugar before baking.",
    category: "PASTRY / BISCUIT", time: "50M", yield: "30 PCS", origin: "PHILIPPINES", technique: "BAKED COOKIE",
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Butter, softened",metric:"200 g",imperial:"7 oz"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Eggs",metric:"2 large",imperial:"2 large"},
      {name:"Baking powder",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Sugar for rolling",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Cream the butter and sugar until pale, then beat in the eggs one at a time with the vanilla.",
      "Fold in the flour, baking powder and salt to a firm dough. Do not overwork it.",
      "Chill for 30 minutes so the dough can be rolled without sticking.",
      "Take small pieces and roll each into a rope about 12 cm long, then twist and join the ends into a ring.",
      "Roll each ring in sugar.",
      "Arrange on lined trays and bake at 170\u00b0C (340\u00b0F) for 15 to 18 minutes, until lightly golden at the edges.",
      "Cool on the tray for 5 minutes before moving; they firm as they cool."
    ],
    notes: [
      "Chilling matters. A warm dough will not hold the twist and the rings bake out flat.",
      "Roscas are meant to be short and sandy rather than snapping crisp."
    ],
    verification: "verified",
    history: "Roscas take their name from the Spanish rosca, a ring or coil, the same root as Cebu's rosquillos. They belong to the large family of Spanish-descended Filipino biscuits that bakeries adapted to local butter, sugar and ovens.",
    sources: [
      "https://en.wikipedia.org/wiki/Roscas_(Filipino_cuisine)",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "pilipit", title: "Pilipit", subtitle: "Twisted Fried Doughnut",
    description: "A compact twisted dough fried until hard and lacquered in syrup. Denser and crunchier than its soft cousin shakoy.",
    category: "MERIENDA / FRIED", time: "1H", yield: "20 PCS", origin: "PHILIPPINES", technique: "TWIST + FRY",
    ingredients: [
      {name:"All-purpose flour",metric:"400 g",imperial:"3 1/3 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Eggs",metric:"2 large",imperial:"2 large"},
      {name:"Milk",metric:"160 ml",imperial:"2/3 cup"},
      {name:"Butter, melted",metric:"60 g",imperial:"2 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Neutral frying oil",metric:"700 ml",imperial:"3 cups"},
      {name:"Brown sugar",metric:"150 g",imperial:"5 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"}
    ],
    instructions: [
      "Mix the flour, sugar, baking powder and salt. Add the eggs, milk and melted butter and knead into a firm, smooth dough.",
      "Rest for 20 minutes.",
      "Take small pieces and roll each into a thin rope about 20 cm long.",
      "Fold each rope in half and twist the two strands around each other, pinching the ends.",
      "Heat the oil to 165\u00b0C (330\u00b0F) and fry the twists for 4 to 6 minutes, turning, until deep golden and hard.",
      "Boil the brown sugar with the water for 5 minutes into a thick syrup.",
      "Turn the drained twists through the syrup and set on a rack until the glaze hardens."
    ],
    notes: [
      "Fry at a moderate temperature so the inside cooks through; pilipit is meant to be hard rather than fluffy.",
      "Twist tightly. A loose twist unwinds in the oil."
    ],
    verification: "verified",
    history: "Pilipit means twisted in Tagalog, describing the shape. It is closely related to shakoy and bicho-bicho, the difference being texture: pilipit is compact and hard, while shakoy is a softer, yeasted dough.",
    sources: [
      "https://en.wikipedia.org/wiki/Pilipit",
      "https://honestcooking.com/sweet-filipino-pilipit/"
    ]
  },
  {
    slug: "shakoy", title: "Shakoy", subtitle: "Soft Twisted Sugar Doughnut",
    description: "A yeasted dough twisted and fried until puffed and golden, rolled hot in sugar. Soft where pilipit is hard.",
    category: "MERIENDA / FRIED", time: "2H 30M", yield: "16 PCS", origin: "VISAYAS", technique: "YEASTED FRY",
    ingredients: [
      {name:"Bread flour",metric:"500 g",imperial:"4 cups"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Instant yeast",metric:"7 g",imperial:"2 1/4 tsp"},
      {name:"Salt",metric:"8 g",imperial:"1 1/2 tsp"},
      {name:"Milk, warm",metric:"220 ml",imperial:"1 cup"},
      {name:"Eggs",metric:"1 large",imperial:"1 large"},
      {name:"Butter, softened",metric:"60 g",imperial:"2 oz"},
      {name:"Neutral frying oil",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Sugar for rolling",metric:"150 g",imperial:"5 oz"}
    ],
    instructions: [
      "Mix the flour, sugar, yeast and salt, add the milk and egg and knead 5 minutes, then work in the butter and knead 8 minutes more.",
      "Prove for 1 to 1 1/2 hours, until doubled.",
      "Divide into 16 pieces and roll each into a rope about 25 cm long.",
      "Fold in half and twist the strands together, pinching the ends to seal.",
      "Prove the shaped twists for 30 minutes, until visibly puffed.",
      "Heat the oil to 170\u00b0C (340\u00b0F) and fry for 2 to 3 minutes a side, until deep golden.",
      "Drain briefly and roll in sugar while still hot, so it clings."
    ],
    notes: [
      "Prove the twists after shaping as well as before, or they fry up dense.",
      "Sugar them hot. Once cool nothing sticks."
    ],
    verification: "verified",
    history: "Shakoy, also sold as bicho-bicho, is the soft yeasted member of the Filipino twisted-doughnut family. It is a staple of Visayan bakeries and market stalls, and the same dough fried without the twist becomes a plain bicho.",
    sources: [
      "https://www.foxyfolksy.com/bicho-bicho-shakoy/",
      "https://en.wikipedia.org/wiki/Pilipit"
    ]
  },
  {
    slug: "torta-cebuana", title: "Torta Cebuana", subtitle: "Cebuano Butter Sponge Cake",
    description: "A dense, buttery sponge from Cebu, traditionally leavened in part with tuba, the local coconut toddy, and baked in a round tin.",
    category: "PASTRY / CAKE", time: "1H", yield: "10 PAX", origin: "CEBU", technique: "BUTTER SPONGE",
    ingredients: [
      {name:"All-purpose flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"Sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Butter, softened",metric:"220 g",imperial:"7.8 oz"},
      {name:"Eggs",metric:"6 large",imperial:"6 large"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Evaporated milk",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Cheese, grated",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Separate the eggs. Beat the whites to stiff peaks with a third of the sugar.",
      "Cream the butter with the remaining sugar until pale and light, then beat in the yolks one at a time.",
      "Fold in the flour, baking powder and salt alternately with the evaporated milk.",
      "Fold a third of the meringue in to loosen the batter, then fold in the rest gently.",
      "Pour into a lined round tin and scatter the grated cheese over the top.",
      "Bake at 170\u00b0C (340\u00b0F) for 35 to 45 minutes, until a skewer comes out clean and the top is deep gold.",
      "Cool in the tin for 10 minutes before turning out."
    ],
    notes: [
      "The meringue is what keeps a cake this buttery from turning heavy; fold it in, never stir.",
      "Traditional versions use tuba, coconut toddy, as part of the leavening, which gives a faint sourness."
    ],
    verification: "verified",
    history: "In the Visayas, mamon is commonly called torta or torta mamon, and the Cebuano torta is its best known form. It is a fiesta and pasalubong cake, richer and denser than the airy chiffon mamon sold in Manila.",
    sources: [
      "https://www.kawalingpinoy.com/cebuana-torta-cake/",
      "https://www.pinoycookingrecipes.com/recipe/cebu-torta-cake"
    ]
  },
  {
    slug: "pianono", title: "Pianono", subtitle: "Rolled Sponge Cake",
    description: "A thin sheet of sponge spread with butter and sugar and rolled into a spiral, sliced into short lengths.",
    category: "PASTRY / CAKE", time: "50M", yield: "12 PCS", origin: "PHILIPPINES", technique: "ROLLED SPONGE",
    ingredients: [
      {name:"Eggs, separated",metric:"5 large",imperial:"5 large"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Cake flour",metric:"120 g",imperial:"1 cup"},
      {name:"Neutral oil",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Milk",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Baking powder",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Butter, softened",metric:"120 g",imperial:"4 oz"},
      {name:"Caster sugar for filling",metric:"100 g",imperial:"3.5 oz"}
    ],
    instructions: [
      "Whisk the yolks with the oil, milk and half the sugar, then fold in the flour, baking powder and salt.",
      "Beat the whites with the salt and remaining sugar to stiff, glossy peaks and fold into the yolk batter in three additions.",
      "Spread evenly into a lined shallow tray about 25 by 35 cm.",
      "Bake at 175\u00b0C (345\u00b0F) for 12 to 15 minutes, until springy and just golden. Do not overbake or it will crack when rolled.",
      "Turn out onto a sugared sheet of baking paper while still warm.",
      "Spread with softened butter and dust heavily with caster sugar.",
      "Roll up firmly from the long edge using the paper, wrap, and cool before slicing."
    ],
    notes: [
      "Roll while warm. A cooled sheet cracks along the spiral.",
      "Bake it thin and briefly; the sponge needs to stay flexible."
    ],
    verification: "verified",
    history: "Pianono is the rolled member of the Filipino mamon family, which also includes the loaf-shaped taisan and the finger-shaped broas. The name comes from the Spanish pionono, itself named after Pope Pius IX.",
    sources: [
      "https://en.wikipedia.org/wiki/Mam%C3%B3n",
      "https://www.pepper.ph/posts/17-types-of-cookies-philippines"
    ]
  },
  {
    slug: "kinalas", title: "Kinalas", subtitle: "Naga Noodle Soup with Scraped Meat",
    description: "Noodles under meat scraped from a slow-cooked pig or cow head, in broth thickened to a deep brown sauce. Naga City's own.",
    category: "NOODLES / SOUP", time: "3H 30M", yield: "6 PAX", origin: "NAGA, CAMARINES SUR", technique: "LONG SIMMER",
    ingredients: [
      {name:"Pork or beef head parts",metric:"1.5 kg",imperial:"3.3 lb"},
      {name:"Water",metric:"3.0 L",imperial:"12 1/2 cups"},
      {name:"Yellow onion, quartered",metric:"180 g",imperial:"6 oz"},
      {name:"Garlic, crushed",metric:"8 cloves",imperial:"8 cloves"},
      {name:"Black peppercorns",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Miki noodles, fresh",metric:"500 g",imperial:"1.1 lb"},
      {name:"Cornstarch",metric:"40 g",imperial:"1/3 cup"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Fish sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Eggs",metric:"6 large",imperial:"6 large"},
      {name:"Scallions, sliced",metric:"40 g",imperial:"1.4 oz"},
      {name:"Toasted garlic",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Simmer the head parts in the water with the onion, garlic and peppercorns for 2 1/2 to 3 hours, until the meat falls away.",
      "Lift the meat out and scrape it from the bones in shreds. This scraping is what the dish is named for.",
      "Strain the broth and return it to the pot. Season with the soy sauce and fish sauce.",
      "Slake the cornstarch in cold water and whisk it in, simmering 5 minutes until the broth thickens into a brown sauce that coats a spoon.",
      "Hard-boil the eggs, peel and halve them.",
      "Blanch the miki noodles briefly and divide between bowls.",
      "Ladle the thickened broth over, top with the scraped meat, egg, scallion and toasted garlic, and serve very hot."
    ],
    notes: [
      "The thickened brown sauce is the signature; a thin clear broth is a different dish.",
      "Traditional versions thicken the sauce with brain rather than cornstarch, which is where the colour and body come from."
    ],
    verification: "verified",
    history: "Kinalas is the street food of Naga City in Camarines Sur. Its name comes from the Bicolano kalas, to remove meat from the bones, describing how the topping is prepared. Vendors have sold it in the city since at least the 1970s.",
    sources: [
      "https://en.wikipedia.org/wiki/Kinalas",
      "https://www.angsarap.net/2017/04/21/kinalas/"
    ]
  },
  {
    slug: "biniribid", title: "Biniribid", subtitle: "Twisted Coconut Rice Doughnut",
    description: "A rope of coconut and rice-flour dough twisted and fried, chewy inside rather than cakey. Bicol's own twisted doughnut.",
    category: "MERIENDA / FRIED", time: "50M", yield: "18 PCS", origin: "BICOL REGION", technique: "TWIST + FRY",
    ingredients: [
      {name:"Glutinous rice flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"All-purpose flour",metric:"150 g",imperial:"1 1/4 cups"},
      {name:"Coconut milk",metric:"240 ml",imperial:"1 cup"},
      {name:"Sugar",metric:"120 g",imperial:"4 oz"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Neutral frying oil",metric:"700 ml",imperial:"3 cups"},
      {name:"Brown sugar",metric:"150 g",imperial:"5 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"}
    ],
    instructions: [
      "Mix both flours with the sugar, baking powder and salt.",
      "Work in the coconut milk until you have a firm, pliable dough. The coconut milk, not water, is what gives biniribid its chew.",
      "Rest the dough for 15 minutes.",
      "Roll pieces into ropes about 18 cm long, fold each in half and twist the strands together.",
      "Heat the oil to 165\u00b0C (330\u00b0F) and fry for 4 to 6 minutes, turning, until golden and cooked through.",
      "Boil the brown sugar with the water for 5 minutes into a syrup.",
      "Turn the drained twists through the syrup and set aside until the glaze sets."
    ],
    notes: [
      "Glutinous rice flour is what makes it chewy; an all-wheat dough gives an ordinary doughnut.",
      "Fry at a moderate heat so the dense centre cooks before the outside darkens."
    ],
    verification: "verified",
    history: "Biniribid means twisted in Bicolano, describing the rope-like shape. Its dough of coconut milk and rice flour sets it apart from the wheat-based pilipit and shakoy of other regions.",
    sources: [
      "https://lifestyle.inquirer.net/340192/a-foodie-tour-of-bicol-discovering-kinalas-biniribid-tinuktok-palusag/",
      "https://www.rappler.com/life-and-style/food-drinks/best-of-bicol-must-try-dishes-delicacies/"
    ]
  },
  {
    slug: "sinapot", title: "Sinapot", subtitle: "Bicol Banana Fritters",
    description: "Saba sliced, fanned and dipped in a thin batter, fried until the edges go lacy. Lighter than maruya.",
    category: "MERIENDA / FRIED", time: "25M", yield: "10 PCS", origin: "BICOL REGION", technique: "BATTER FRY",
    ingredients: [
      {name:"Saba bananas",metric:"6 pcs",imperial:"6 pcs"},
      {name:"All-purpose flour",metric:"180 g",imperial:"1 1/2 cups"},
      {name:"Rice flour",metric:"60 g",imperial:"1/2 cup"},
      {name:"Sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Baking powder",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Water",metric:"280 ml",imperial:"1 1/4 cups"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Sugar for dusting",metric:"60 g",imperial:"2 oz"}
    ],
    instructions: [
      "Peel the saba and slice each lengthwise almost through, then press flat into a fan.",
      "Whisk the flours, sugar, baking powder and salt with the water into a thin batter. Sinapot batter is looser than maruya batter, which is what gives the lacy edge.",
      "Heat the oil to 175\u00b0C (350\u00b0F).",
      "Dip each fanned banana in the batter, letting the excess run off.",
      "Slide into the oil and fry for 2 to 3 minutes a side until golden and crisp at the edges.",
      "Drain on a rack.",
      "Dust with sugar and eat hot."
    ],
    notes: [
      "Keep the batter thin. A thick coat turns sinapot into maruya.",
      "Fan the banana before battering so the slices fry through evenly."
    ],
    verification: "verified",
    history: "Sinapot is the Bicolano reading of the banana fritter, close to maruya but fried in a thinner, lighter batter. Saba, the cooking banana used throughout Filipino cookery, holds its shape under the heat.",
    sources: [
      "https://www.rappler.com/life-and-style/food-drinks/best-of-bicol-must-try-dishes-delicacies/",
      "https://www.angsarap.net/2023/12/31/19-fiery-bicolano-dishes-that-ignite-the-palate/"
    ]
  },
  {
    slug: "coconut-jam", title: "Matamis na Bao", subtitle: "Coconut Jam",
    description: "Coconut cream cooked slowly with muscovado until it darkens into a thick spreadable jam. Two ingredients and an hour of stirring.",
    category: "CONFECTION / SPREAD", time: "1H 15M", yield: "2 JARS", origin: "PHILIPPINES", technique: "SLOW REDUCTION",
    ingredients: [
      {name:"Coconut cream",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Muscovado sugar",metric:"400 g",imperial:"14 oz"},
      {name:"Brown sugar",metric:"150 g",imperial:"5 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Combine the coconut cream, both sugars, salt and pandan leaf in a heavy pan.",
      "Bring to a gentle simmer over medium heat, stirring until the sugar dissolves.",
      "Lower the heat and cook, stirring often at first and then constantly, for 50 to 70 minutes.",
      "The mixture will pass through pourable, then thick, then finally darken to a deep caramel brown and pull away from the pan as you stir.",
      "Remove the pandan leaf.",
      "Test by dropping a little onto a cold plate: it should hold its shape without running.",
      "Pour into sterilised jars while hot and seal. It thickens further as it cools."
    ],
    notes: [
      "Do not leave it. Coconut jam catches on the base the moment the stirring stops, and a scorched batch tastes burnt throughout.",
      "Stop while it still falls slowly from the spoon; cooked too far it sets hard in the jar."
    ],
    verification: "verified",
    history: "Matamis na bao is the Filipino coconut jam, made from coconut cream and sugar with no egg, unlike the Malay and Indonesian kaya it is often compared to. It is spread on bread, spooned into kakanin and eaten straight from the jar.",
    sources: [
      "https://en.wikipedia.org/wiki/Coconut_jam",
      "https://www.kawalingpinoy.com/minatamis-na-bao-coconut-jam/"
    ]
  },
  {
    slug: "latik", title: "Latik", subtitle: "Toasted Coconut Curds and Syrup",
    description: "Coconut cream reduced until the oil breaks out and the solids toast to golden curds. The topping half of Filipino sweets, and the syrup version beneath it.",
    category: "COMPONENT / COCONUT", time: "35M", yield: "1 CUP", origin: "PHILIPPINES", technique: "COCONUT REDUCTION",
    ingredients: [
      {name:"Coconut cream",metric:"500 ml",imperial:"2 cups"},
      {name:"Brown sugar",metric:"100 g",imperial:"3.5 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "For curd latik, pour the coconut cream into a wide pan and bring to a simmer over medium heat.",
      "Cook, stirring occasionally, for 15 to 20 minutes as the cream reduces and thickens.",
      "The oil will separate and small solids will form. Keep stirring now so they colour evenly.",
      "Cook 5 to 8 minutes more, until the curds turn golden brown and smell nutty. Take them off the moment they colour; a few seconds further and they turn bitter.",
      "Strain, keeping both the curds and the clear coconut oil, which is used for greasing moulds.",
      "For syrup latik, instead simmer the coconut cream with the brown sugar and salt for 12 to 15 minutes until it thickens into a pourable caramel.",
      "Cool and store; curds keep for a week, syrup for a fortnight refrigerated."
    ],
    notes: [
      "Curd latik goes from golden to burnt in seconds. Stay at the pan for the last five minutes.",
      "The strained oil is not waste. It is what traditional recipes brush banana leaves and moulds with."
    ],
    verification: "verified",
    history: "Latik names two different things in Filipino cooking: in Luzon it is the toasted coconut curd scattered over biko and sapin-sapin, while in the Visayas it means the syrupy coconut caramel poured over rice cakes. Both come from reducing coconut cream, just stopped at different points.",
    sources: [
      "https://en.wikipedia.org/wiki/Latik",
      "https://www.foxyfolksy.com/coconut-jam/"
    ]
  },
  {
    slug: "taho", title: "Taho", subtitle: "Silken Tofu with Syrup and Sago",
    description: "Warm silken tofu spooned into a cup with dark arnibal syrup and chewy sago pearls. Sold from buckets on the street at dawn.",
    category: "MERIENDA / SWEET", time: "40M", yield: "6 PAX", origin: "PHILIPPINES", technique: "ASSEMBLED",
    ingredients: [
      {name:"Silken tofu",metric:"900 g",imperial:"2 lb"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"240 ml",imperial:"1 cup"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Tapioca or sago pearls",metric:"150 g",imperial:"5 oz"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Boil the sago pearls in plenty of water for 20 to 25 minutes, until translucent through with no white centre. Drain and rinse.",
      "For the arnibal, simmer the brown sugar, water and pandan leaf for 10 to 12 minutes until syrupy. Stir in the vanilla and remove the leaf.",
      "Warm the silken tofu gently, either by steaming it for 8 minutes or heating it in its liquid. It must stay in soft sheets, not break into curds.",
      "Spoon the warm tofu into cups in broad, flat scoops rather than chunks.",
      "Add a generous spoonful of sago.",
      "Pour the arnibal over.",
      "Serve immediately, while the tofu is still warm and the syrup runs."
    ],
    notes: [
      "Scoop the tofu flat and wide with a shallow spoon; the texture is the whole point and stirring destroys it.",
      "Cook the sago until no opaque centre remains, or it stays hard in the middle."
    ],
    verification: "verified",
    history: "Taho is sold from covered buckets by vendors calling through the streets in the early morning, a trade that has changed very little in a century. Its base is soft tofu of Chinese origin, dressed with local muscovado syrup and sago.",
    sources: [
      "https://en.wikipedia.org/wiki/Taho",
      "https://theunlikelybaker.com/coconut-jam-filipino-minatamis-na-bao/"
    ]
  },
  {
    slug: "ginataang-mais", title: "Ginataang Mais", subtitle: "Sweet Corn and Rice in Coconut Milk",
    description: "Glutinous rice and sweetcorn simmered in sweetened coconut milk into a loose warm porridge. Rainy-afternoon food.",
    category: "DESSERT / GATA", time: "45M", yield: "6 PAX", origin: "PHILIPPINES", technique: "COCONUT SIMMER",
    ingredients: [
      {name:"Glutinous rice",metric:"200 g",imperial:"1 cup"},
      {name:"Water",metric:"700 ml",imperial:"3 cups"},
      {name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Sweetcorn kernels",metric:"400 g",imperial:"14 oz"},
      {name:"Sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Rinse the glutinous rice and simmer it in the water with the pandan leaf for 15 minutes, stirring often, until the grains swell and soften.",
      "Add the coconut milk and bring back to a gentle simmer. Do not let it boil hard.",
      "Add the sweetcorn and cook for 10 minutes.",
      "Stir in the sugar and salt and simmer 5 minutes more, until the porridge thickens enough to coat the spoon.",
      "Remove the pandan leaf.",
      "Stir in the coconut cream and take off the heat.",
      "Serve warm. It thickens as it stands, so loosen with coconut milk if it sits."
    ],
    notes: [
      "Half the corn blitzed and half left whole gives both body and bite.",
      "Add the coconut cream off the heat so it stays smooth rather than splitting."
    ],
    verification: "verified",
    history: "Ginataang mais is one of the simplest members of the ginataan family, corn and glutinous rice in sweetened coconut milk. It is eaten warm as merienda, and is close kin to champorado and ginataang bilo-bilo in both method and role.",
    sources: [
      "https://en.wikipedia.org/wiki/Ginataang_mais",
      "https://www.kawalingpinoy.com/ginataang-bilo-bilo/"
    ]
  },
  {
    slug: "puto-calasiao", title: "Puto Calasiao", subtitle: "Fermented Bite-Sized Rice Cakes",
    description: "Tiny soft puto from Pangasinan, made from semi-glutinous rice soaked, ground and left to ferment for days before steaming. Faintly sour under the sweetness.",
    category: "DESSERT / KAKANIN", time: "3D", yield: "40 PCS", origin: "CALASIAO, PANGASINAN", technique: "FERMENTED STEAM",
    ingredients: [
      {name:"Semi-glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},
      {name:"Water",metric:"700 ml",imperial:"3 cups"},
      {name:"Sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Banana leaves",metric:"4 sheets",imperial:"4 sheets"}
    ],
    instructions: [
      "Wash the rice and soak it in the water overnight.",
      "Grind the soaked rice with its water into a smooth slurry, the galapong.",
      "Stir in the sugar, cover loosely and leave at room temperature for 2 to 3 days. It will bubble and smell faintly sour as it ferments; this is what gives puto Calasiao its character and its lift, since no baking powder is used.",
      "Stir the fermented batter down and season with the salt.",
      "Line small moulds with banana leaf and fill each about three quarters.",
      "Steam over rapidly boiling water for 10 to 12 minutes, with a cloth under the lid so condensation does not pit the tops.",
      "Cool slightly and turn out. They are eaten warm, several at a time."
    ],
    notes: [
      "The ferment is the recipe. Rushing it gives a flat, plain steamed cake.",
      "Warmth speeds the fermentation, so a cooler kitchen needs the full three days."
    ],
    verification: "verified",
    history: "Puto Calasiao is named for the town of Calasiao in Pangasinan, where it is made from semi-glutinous rice fermented in earthen jars for at least three days before steaming. The bite-sized shape and the faint sourness distinguish it from the larger, chemically leavened puto sold elsewhere.",
    sources: [
      "https://en.wikipedia.org/wiki/Puto_Calasiao",
      "https://www.angsarap.net/2012/10/10/puto-calasiao/"
    ]
  },
  {
    slug: "puto-pao", title: "Puto Pao", subtitle: "Steamed Rice Cake with Pork Filling",
    description: "Puto batter steamed around a core of sweet-savoury pork asado, so it eats like a small siopao with a rice-cake shell.",
    category: "DESSERT / KAKANIN", time: "1H 30M", yield: "16 PCS", origin: "PHILIPPINES", technique: "FILLED STEAM",
    ingredients: [
      {name:"Rice flour",metric:"300 g",imperial:"2 1/2 cups"},
      {name:"Sugar",metric:"150 g",imperial:"5.3 oz"},
      {name:"Baking powder",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Coconut milk",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Eggs",metric:"2 large",imperial:"2 large"},
      {name:"Pork shoulder, small dice",metric:"300 g",imperial:"10.5 oz"},
      {name:"Soy sauce",metric:"45 ml",imperial:"3 tbsp"},
      {name:"Oyster sauce",metric:"30 ml",imperial:"2 tbsp"},
      {name:"Brown sugar",metric:"40 g",imperial:"1.4 oz"},
      {name:"Garlic, minced",metric:"5 cloves",imperial:"5 cloves"},
      {name:"Salted duck eggs, quartered",metric:"2 pcs",imperial:"2 pcs"},
      {name:"Cheese, cubed",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Cook the pork with the garlic, soy sauce, oyster sauce and brown sugar over medium heat for 20 minutes, until tender and the sauce is thick and clinging. Cool completely.",
      "Whisk the rice flour, sugar and baking powder together.",
      "Beat in the coconut milk, water and eggs until smooth. Rest the batter 10 minutes.",
      "Grease moulds and half-fill each with batter.",
      "Spoon a little cooled asado into the centre of each, then cover with more batter to three quarters full.",
      "Top with a piece of salted egg and a cube of cheese.",
      "Steam for 15 to 18 minutes with a cloth under the lid, until a skewer comes out clean."
    ],
    notes: [
      "Cool the filling fully; a warm filling makes the batter slump around it.",
      "Fill only to three quarters. Puto pao rises more than plain puto because of the weight it carries."
    ],
    verification: "verified",
    history: "Puto pao marries two Chinese-descended Filipino foods: the steamed rice cake and the asado-filled siopao. It belongs to the modern end of the kakanin range, sold in bakeries and puto stalls rather than made for fiestas.",
    sources: [
      "https://www.angsarap.net/2019/09/09/the-endless-varieties-of-kakanin/amp/",
      "https://www.esquiremag.ph/culture/food-and-drink/the-comprehensive-field-guide-to-kakanin-a1729-20170615-lfrm2"
    ]
  },
  {
    slug: "patupat", title: "Patupat", subtitle: "Ilocano Rice Cake in Woven Palm",
    description: "Glutinous rice packed into small woven palm-leaf pouches and boiled in sugarcane syrup until it takes on the colour and sweetness of the syrup.",
    category: "DESSERT / KAKANIN", time: "2H", yield: "16 PCS", origin: "ILOCOS REGION", technique: "SYRUP BOIL",
    ingredients: [
      {name:"Glutinous rice",metric:"600 g",imperial:"3 cups"},
      {name:"Sugarcane syrup (basi or muscovado)",metric:"400 g",imperial:"14 oz"},
      {name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Young palm or coconut leaves",metric:"16 sheets",imperial:"16 sheets"}
    ],
    instructions: [
      "Soak the glutinous rice for 4 hours, then drain well.",
      "Weave the young palm leaves into small pouches, or use folded banana leaf tied with twine if palm is unavailable.",
      "Fill each pouch about two thirds with rice. The rice swells considerably and a full pouch will burst.",
      "Boil the pouches in plain water for 45 minutes, until the rice is nearly cooked.",
      "Meanwhile dissolve the sugarcane syrup in fresh water with the salt and bring to a simmer.",
      "Transfer the pouches into the syrup and simmer for a further 30 to 45 minutes, until the rice is fully tender and stained brown by the syrup.",
      "Lift out and drain. Eat warm or cool, unwrapping the pouch at the table."
    ],
    notes: [
      "Underfill the pouches. Glutinous rice roughly doubles and will split a tight weave.",
      "Boiling in syrup rather than water is what colours and sweetens patupat through, instead of only on the surface."
    ],
    verification: "verified",
    history: "Patupat is the Ilocano and Pangasinense rice cake, distinguished by its triangular or diamond woven pouch and by being finished in sugarcane syrup. It belongs to the suman family, and is sold along the roadsides of the Ilocos region.",
    sources: [
      "https://www.angsarap.net/2019/09/09/the-endless-varieties-of-kakanin/amp/",
      "https://www.rappler.com/life-and-style/food-drinks/guide-pangasinan-sweet-treats/"
    ]
  },
  {
    slug: "sinukmani", title: "Sinukmani", subtitle: "Southern Tagalog Sticky Rice Cake",
    description: "The Southern Tagalog name and form of biko: glutinous rice cooked down in coconut milk and muscovado, topped with thick coconut caramel.",
    category: "DESSERT / KAKANIN", time: "1H 20M", yield: "10 PAX", origin: "QUEZON / LAGUNA", technique: "COCONUT REDUCTION",
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},
      {name:"Coconut milk",metric:"900 ml",imperial:"3 3/4 cups"},
      {name:"Coconut cream",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Muscovado sugar",metric:"350 g",imperial:"12 oz"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Water",metric:"250 ml",imperial:"1 cup"},
      {name:"Banana leaves",metric:"3 sheets",imperial:"3 sheets"}
    ],
    instructions: [
      "Soak the glutinous rice for 2 hours and drain.",
      "Cook the rice with the water and half the coconut milk over low heat for 20 minutes, until tender and dry.",
      "Meanwhile reduce the coconut cream over medium heat for 20 minutes, stirring, until the oil separates and the curds brown. Strain and keep both.",
      "Simmer the remaining coconut milk with the muscovado and salt for 10 minutes into a thick syrup.",
      "Stir the cooked rice into the syrup and cook, stirring constantly, for 15 to 20 minutes until dense and glossy and pulling from the pan.",
      "Press into a banana-leaf-lined tray brushed with the reserved coconut oil.",
      "Spread the thick caramel over the top, scatter the curds, and cool before cutting."
    ],
    notes: [
      "Muscovado rather than refined sugar is what gives sinukmani its darker, more mineral flavour.",
      "Stir without stopping in the final stage; this is where it catches and scorches."
    ],
    verification: "verified",
    history: "Sinukmani is what biko is called across much of Southern Tagalog, particularly Quezon and Laguna. The dish is the same idea, glutinous rice cooked down in sweetened coconut milk, and the difference is largely one of name and of how thick the latik topping is laid on.",
    sources: [
      "https://www.esquiremag.ph/culture/food-and-drink/the-comprehensive-field-guide-to-kakanin-a1729-20170615-lfrm2",
      "https://www.angsarap.net/2019/09/09/the-endless-varieties-of-kakanin/amp/"
    ]
  },
  {
    slug: "suman-sa-ibos", title: "Suman sa Ibos", subtitle: "Rice Cake in Woven Palm Leaf",
    description: "Glutinous rice cooked in coconut milk and packed into ibos, pouches woven from young coconut palm, then boiled. Eaten with sugar or ripe mango.",
    category: "DESSERT / KAKANIN", time: "2H", yield: "14 PCS", origin: "PHILIPPINES", technique: "PALM-LEAF BOIL",
    ingredients: [
      {name:"Glutinous rice",metric:"600 g",imperial:"3 cups"},
      {name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Salt",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Sugar",metric:"60 g",imperial:"2 oz"},
      {name:"Young coconut palm leaves",metric:"14 sheets",imperial:"14 sheets"},
      {name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"}
    ],
    instructions: [
      "Soak the glutinous rice for 3 hours and drain.",
      "Mix the drained rice with the coconut milk, salt and sugar and leave to stand 20 minutes so the grains absorb some of the milk.",
      "Weave the young palm fronds into tubular pouches, the ibos, leaving one end open.",
      "Fill each pouch about two thirds, then fold and tuck the open end closed.",
      "Stand the pouches upright in a deep pot and cover completely with water.",
      "Boil steadily for 1 1/2 hours, topping up with boiling water so they stay submerged.",
      "Lift out, drain and cool slightly. Serve warm with sugar, coconut jam or ripe mango."
    ],
    notes: [
      "Keep them submerged the whole time. Any pouch above the water cooks unevenly and stays hard.",
      "Two thirds full is the limit; the rice swells and a tight pouch bursts in the pot."
    ],
    verification: "verified",
    history: "Suman sa ibos takes its name from the ibos, a pouch woven from young coconut palm, and is among the oldest forms of Filipino rice cookery. The weave is regional, and the same rice wrapped in banana leaf instead becomes a different named suman.",
    sources: [
      "https://www.esquiremag.ph/culture/food-and-drink/the-comprehensive-field-guide-to-kakanin-a1729-20170615-lfrm2",
      "https://www.angsarap.net/2019/09/09/the-endless-varieties-of-kakanin/amp/"
    ]
  },
  {
    slug: "ampaw", title: "Ampaw", subtitle: "Puffed Rice Cake",
    description: "Dried cooked rice fried until it puffs, then bound with caramel and pressed into bars. Built entirely from leftover rice.",
    category: "MERIENDA / PUFFED", time: "1H", yield: "20 PCS", origin: "VISAYAS", technique: "PUFF + CARAMEL",
    image: local("ampaw.jpg"),
    ingredients: [
      {name:"Cooked white rice, day-old",metric:"600 g",imperial:"3 cups"},
      {name:"Neutral frying oil",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"80 ml",imperial:"1/3 cup"},
      {name:"Butter",metric:"30 g",imperial:"1 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Spread the day-old rice thinly on trays and dry it in the sun for a day, or in a very low oven for 2 to 3 hours, until the grains are hard and separate.",
      "Heat the oil to 190\u00b0C (375\u00b0F). It must be hot or the rice will absorb oil instead of puffing.",
      "Fry the dried rice in small handfuls. It puffs within seconds; lift it out immediately with a fine skimmer and drain.",
      "Boil the brown sugar, water and salt for 5 to 7 minutes until the syrup thickens and threads from the spoon.",
      "Stir in the butter, then fold in the puffed rice quickly and thoroughly.",
      "Tip into a greased tray and press flat with a greased spatula while still warm.",
      "Score into bars while warm, cool completely, then break apart."
    ],
    notes: [
      "The rice must be thoroughly dry before frying. Any moisture and it will not puff.",
      "Work fast once the syrup and rice meet; the mixture sets within a minute."
    ],
    verification: "verified",
    history: "Ampaw, also written ampao, is a puffed rice cake from the Visayas built on sun-dried leftover rice, fried and bound with syrup. It belongs to a thrifty tradition of turning surplus cooked rice into a sweet rather than discarding it.",
    sources: [
      "https://en.wikipedia.org/wiki/Ampaw",
      "https://www.aboutfilipinofood.com/filipino-snacks/"
    ]
  },
  {
    slug: "cornick", title: "Cornick", subtitle: "Fried Corn Nuts",
    description: "Glutinous corn kernels soaked, dried and deep-fried until they split and crunch. Salted while hot and eaten by the handful.",
    category: "MERIENDA / FRIED", time: "24H + 25M", yield: "8 PAX", origin: "PHILIPPINES", technique: "SOAK + DEEP FRY",
    ingredients: [
      {name:"Dried glutinous corn kernels",metric:"500 g",imperial:"1.1 lb"},
      {name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Salt",metric:"20 g",imperial:"4 tsp"},
      {name:"Neutral frying oil",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"}
    ],
    instructions: [
      "Soak the dried corn kernels in the water with half the salt for 12 to 24 hours, until swollen and softened through.",
      "Drain thoroughly and spread on cloth to dry for 2 to 3 hours. Wet kernels will spit violently in hot oil.",
      "Heat the oil to 180\u00b0C (355\u00b0F).",
      "Fry the kernels in batches for 6 to 9 minutes, until they stop bubbling, split open and turn golden.",
      "Lift out with a skimmer and drain on paper.",
      "Fry the minced garlic separately until pale gold and toss it through.",
      "Season with the remaining salt while still hot, then cool completely before storing airtight."
    ],
    notes: [
      "Soak and then dry. Skipping either step gives kernels that stay hard or that spit dangerously.",
      "They crisp as they cool, so judge doneness by colour and the bubbling slowing, not by bite."
    ],
    verification: "verified",
    history: "Cornick is made from lagkitan, a glutinous corn variety, soaked and deep-fried whole. It is sold in bags at bus terminals and markets across the country, and pairs with beer as pulutan as readily as with an afternoon.",
    sources: [
      "https://en.wikipedia.org/wiki/Cornick_(food)",
      "https://www.aboutfilipinofood.com/chichacorn/"
    ]
  },
  {
    slug: "chichacorn", title: "Chichacorn", subtitle: "Ilocos Half-Popped Corn",
    description: "The Ilocano version of cornick, fried so the kernels partly burst, giving a lighter, flakier crunch. Usually heavy with garlic.",
    category: "MERIENDA / FRIED", time: "24H + 30M", yield: "8 PAX", origin: "ILOCOS NORTE", technique: "SOAK + DEEP FRY",
    ingredients: [
      {name:"Dried glutinous corn kernels",metric:"500 g",imperial:"1.1 lb"},
      {name:"Water",metric:"2.0 L",imperial:"8 1/2 cups"},
      {name:"Salt",metric:"20 g",imperial:"4 tsp"},
      {name:"Baking soda",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral frying oil",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Garlic, minced",metric:"10 cloves",imperial:"10 cloves"}
    ],
    instructions: [
      "Soak the corn overnight in the water with the salt and baking soda. The soda softens the hull so the kernel can burst rather than merely harden.",
      "Boil the soaked corn for 20 minutes, then drain and rinse well.",
      "Spread on cloth and dry for 3 to 4 hours, until the surface is dry to the touch.",
      "Heat the oil to 185\u00b0C (365\u00b0F).",
      "Fry in batches for 5 to 8 minutes. The kernels will split and partly open out, which is the difference from plain cornick.",
      "Drain, then toss with garlic fried separately until golden.",
      "Salt while hot and cool completely before bagging."
    ],
    notes: [
      "The baking soda soak is what lets the kernels open. Without it you get cornick, not chichacorn.",
      "Dry them properly before frying; residual water stops the kernels bursting."
    ],
    verification: "verified",
    history: "Chichacorn is a portmanteau of chicharron and corn, coined in the Ilocos region for a cornick allowed to partly pop in the fryer. It is one of the standard pasalubong of Ilocos Norte, sold alongside bagnet and Ilocos empanada.",
    sources: [
      "https://www.aboutfilipinofood.com/chichacorn/",
      "https://en.wikipedia.org/wiki/Cornick_(food)"
    ]
  },
  {
    slug: "banana-chips", title: "Banana Chips", subtitle: "Crisp Fried Saba Slices",
    description: "Saba sliced thin and fried until it snaps, then lightly sweetened. Firm cooking bananas only; dessert bananas turn to mush.",
    category: "MERIENDA / FRIED", time: "40M", yield: "6 PAX", origin: "PHILIPPINES", technique: "DEEP FRY",
    image: local("banana-chips.jpg"),
    ingredients: [
      {name:"Saba or cardava bananas, firm",metric:"8 pcs",imperial:"8 pcs"},
      {name:"Neutral frying oil",metric:"800 ml",imperial:"3 1/3 cups"},
      {name:"Sugar",metric:"120 g",imperial:"4 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Calamansi juice",metric:"30 ml",imperial:"2 tbsp"}
    ],
    instructions: [
      "Choose bananas that are still firm and barely yellow. Ripe fruit has too much sugar and will burn before it crisps.",
      "Peel and slice very thin, about 2 mm, on a mandoline if you have one.",
      "Drop the slices into water sharpened with the calamansi juice as you go, which stops them browning.",
      "Drain and pat completely dry.",
      "Heat the oil to 165\u00b0C (330\u00b0F) and fry in small batches for 3 to 4 minutes, until pale gold and rigid.",
      "Boil the sugar and water into a light syrup, toss the drained chips through it briefly, and return them to the hot oil for 30 seconds to set the glaze.",
      "Drain on a rack, salt lightly and cool completely before storing airtight."
    ],
    notes: [
      "Thin and even slicing decides everything; thick slices stay leathery in the middle.",
      "Fry in small batches. A crowded pan drops the oil temperature and the chips absorb it."
    ],
    verification: "verified",
    history: "Philippine banana chips are made predominantly from saba and cardava, the starchy cooking cultivars, rather than from sweet dessert bananas. They are among the country's most widely exported snack foods.",
    sources: [
      "https://en.wikipedia.org/wiki/Banana_chips",
      "https://www.aboutfilipinofood.com/filipino-snacks/"
    ]
  },
  {
    slug: "pastillas-de-ube", title: "Pastillas de Ube", subtitle: "Purple Yam Milk Candy",
    description: "Ube halaya worked with condensed and powdered milk into a soft candy dough, rolled into logs and coated in sugar.",
    category: "CONFECTION / MILK", time: "40M", yield: "30 PCS", origin: "PHILIPPINES", technique: "NO-COOK CANDY",
    ingredients: [
      {name:"Ube halaya",metric:"300 g",imperial:"10.5 oz"},
      {name:"Condensed milk",metric:"200 g",imperial:"7 oz"},
      {name:"Powdered milk",metric:"250 g",imperial:"9 oz"},
      {name:"Butter, softened",metric:"40 g",imperial:"1.4 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Caster sugar for coating",metric:"150 g",imperial:"5 oz"}
    ],
    instructions: [
      "Beat the ube halaya with the condensed milk, butter and salt until completely smooth.",
      "Add the powdered milk a third at a time, working it in until the mixture stiffens into a soft dough that no longer sticks to the bowl.",
      "If it stays tacky, add more powdered milk a spoonful at a time rather than flour, which would dull the flavour.",
      "Chill for 20 minutes so it firms enough to handle.",
      "Pinch off pieces and roll each into a short log about the thickness of a finger.",
      "Roll every piece in caster sugar until evenly coated.",
      "Wrap individually in cellophane with twisted ends, or in cut papel de hapon."
    ],
    notes: [
      "Powdered milk is what sets pastillas, not heat; this version is never cooked.",
      "Chill before rolling or the dough smears rather than shaping cleanly."
    ],
    verification: "verified",
    history: "Pastillas de ube is one of many flavoured descendants of pastillas de leche, the carabao-milk candy of San Miguel, Bulacan. Langka, macapuno, peanut and cheese versions are made the same way, with the flavouring worked into the milk dough.",
    sources: [
      "https://www.kawalingpinoy.com/pastillas-de-ube/",
      "https://www.recipesbynora.com/ube-pastillas-recipe/"
    ]
  },
  {
    slug: "ube-langka-candy", title: "Ube Langka", subtitle: "Purple Yam and Jackfruit Candy",
    description: "Purple yam and ripe jackfruit cooked down together with milk into a soft chewy candy, somewhere between pastillas and yema.",
    category: "CONFECTION / MILK", time: "50M", yield: "28 PCS", origin: "PHILIPPINES", technique: "SLOW REDUCTION",
    ingredients: [
      {name:"Ube halaya",metric:"250 g",imperial:"9 oz"},
      {name:"Jackfruit (langka), finely chopped",metric:"200 g",imperial:"7 oz"},
      {name:"Condensed milk",metric:"300 g",imperial:"10.5 oz"},
      {name:"Powdered milk",metric:"150 g",imperial:"5 oz"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Caster sugar for coating",metric:"120 g",imperial:"4 oz"}
    ],
    instructions: [
      "Drain the jackfruit well and chop it very finely; large pieces stop the candy holding together.",
      "Cook the ube halaya, jackfruit, condensed milk, butter and salt over low heat, stirring constantly, for 20 to 25 minutes.",
      "The mixture is ready when it thickens and pulls cleanly from the base of the pan.",
      "Take off the heat and beat in the powdered milk until a stiff dough forms.",
      "Cool until it can be handled comfortably.",
      "Roll into short logs or balls.",
      "Coat in caster sugar and wrap individually."
    ],
    notes: [
      "Drain the jackfruit thoroughly. Its syrup will keep the candy loose no matter how long you cook it.",
      "Stir without stopping; milk and sugar at this ratio scorch quickly."
    ],
    verification: "verified",
    history: "Ube langka pairs the two flavours that dominate Filipino confectionery, purple yam and jackfruit. Its texture places it with pastillas de leche and yema, all of them built by reducing milk and sugar to a soft, sliceable candy.",
    sources: [
      "https://en.wikipedia.org/wiki/Ube_Langka_(candy)",
      "https://thequirinokitchen.com/pastillas-de-ube-purple-yam-milk-candy/"
    ]
  },
  {
    slug: "minatamis-na-saging", title: "Minatamis na Saging", subtitle: "Saba Bananas in Muscovado Syrup",
    description: "Saba simmered in dark muscovado syrup until glossy and tender. Eaten on its own, spooned over ice, or folded into halo-halo.",
    category: "DESSERT / SYRUP", time: "30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "SYRUP POACH",
    ingredients: [
      {name:"Saba bananas, thickly sliced",metric:"8 pcs",imperial:"8 pcs"},
      {name:"Muscovado sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"500 ml",imperial:"2 cups"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Peel the saba and cut into thick diagonal slices. Use fruit that is ripe but still firm.",
      "Dissolve the muscovado in the water with the pandan leaf and salt and bring to a boil.",
      "Simmer the syrup alone for 8 minutes, until it thickens slightly and darkens.",
      "Lower in the banana slices in a single layer.",
      "Simmer gently for 12 to 15 minutes, turning once, until the fruit is tender and translucent at the edges and has taken on the syrup's colour. Do not stir or they break apart.",
      "Stir in the vanilla and remove the pandan leaf.",
      "Cool in the syrup. It keeps refrigerated for several days and improves overnight."
    ],
    notes: [
      "Muscovado is what makes this taste of anything; refined sugar gives a flat, one-note syrup.",
      "Move the pan rather than the bananas. Stirring turns them to mush."
    ],
    verification: "verified",
    history: "Minatamis na saging is one of the simplest Filipino sweets and one of the most useful, serving as a dessert in its own right and as a standard component of halo-halo and ginataan. Saba, the cooking banana, holds together in syrup where a dessert banana collapses.",
    sources: [
      "https://en.wikipedia.org/wiki/Minatamis_na_saging",
      "https://panlasangpinoy.com/minatamis-na-saging-recipe/"
    ]
  },
  {
    slug: "burong-mangga", title: "Burong Mangga", subtitle: "Salted and Sweetened Green Mango",
    description: "Unripe mango salted until it firms and gives up its water, then held in a cooled sweet brine. Sour, salty and crunchy at once.",
    category: "CONDIMENT / PICKLE", time: "3D", yield: "4 JARS", origin: "PHILIPPINES", technique: "SALT CURE",
    ingredients: [
      {name:"Green mangoes, firm and unripe",metric:"1.5 kg",imperial:"3.3 lb"},
      {name:"Coarse salt",metric:"150 g",imperial:"5 oz"},
      {name:"Sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"700 ml",imperial:"3 cups"},
      {name:"Salt for brine",metric:"20 g",imperial:"4 tsp"}
    ],
    instructions: [
      "Peel the green mangoes and cut the flesh into thick strips or leave them in halves.",
      "Layer the mango with the coarse salt in a bowl, cover, and leave for 24 hours. The salt draws out water and firms the flesh.",
      "Drain off the liquid and rinse the mango briefly to remove the surface salt.",
      "Boil the water with the sugar and the brine salt until dissolved, then cool completely. Pouring hot syrup over the fruit would cook it soft.",
      "Pack the mango into sterilised jars.",
      "Pour the cooled syrup over so the fruit is fully submerged.",
      "Seal and refrigerate for at least 2 days before eating. It keeps for several weeks."
    ],
    notes: [
      "The syrup must be cold before it meets the fruit. Warm syrup ruins the crunch the salting created.",
      "Use genuinely unripe mango; anything turning yellow will go soft in the brine."
    ],
    verification: "verified",
    history: "Burong mangga is made by salting green mango and then holding it in a boiled and cooled sugar brine. It is eaten as a side with fried and grilled food, in the same role as atchara, and is a common way of using the heavy green-mango season.",
    sources: [
      "https://en.wikipedia.org/wiki/Burong_mangga",
      "https://www.philstar.com/lifestyle/food-and-leisure/2025/03/16/2425901/chefs-share-ways-enjoy-indian-mangoes-plus-burong-mangga-recipe"
    ]
  },
  {
    slug: "buko-salad", title: "Buko Salad", subtitle: "Young Coconut Fruit Salad",
    description: "Strips of young coconut folded through sweetened cream with fruit cocktail, jelly and palm nuts. Chilled hard and served at every fiesta.",
    category: "DESSERT / COLD", time: "40M", yield: "10 PAX", origin: "PHILIPPINES", technique: "CHILLED ASSEMBLY",
    ingredients: [
      {name:"Young coconut meat, stripped",metric:"600 g",imperial:"1.3 lb"},
      {name:"All-purpose cream",metric:"500 ml",imperial:"2 cups"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Fruit cocktail, drained",metric:"400 g",imperial:"14 oz"},
      {name:"Nata de coco, drained",metric:"200 g",imperial:"7 oz"},
      {name:"Kaong (palm nuts), drained",metric:"200 g",imperial:"7 oz"},
      {name:"Jackfruit (langka), sliced",metric:"120 g",imperial:"4 oz"},
      {name:"Cheese, cubed",metric:"100 g",imperial:"3.5 oz"}
    ],
    instructions: [
      "Drain every tinned component thoroughly, then leave them in a sieve for 15 minutes more. Residual syrup is the single most common reason buko salad turns watery.",
      "Strip the young coconut into ribbons and pat dry.",
      "Whisk the cream with the condensed milk until slightly thickened but still pourable.",
      "Fold in the coconut, fruit cocktail, nata de coco, kaong and jackfruit.",
      "Fold in the cheese cubes last, so they keep their shape.",
      "Cover and chill for at least 4 hours, and preferably overnight.",
      "Stir once before serving and taste; it may want a little more condensed milk once cold."
    ],
    notes: [
      "Drain, then drain again. Everything else follows from that.",
      "It is better on the second day, once the coconut has taken on the cream."
    ],
    verification: "verified",
    history: "Buko salad is among the most ubiquitous Filipino party desserts, built on young coconut with whatever tinned and preserved fruit is at hand. The cheese cubes, which surprise people unfamiliar with the dish, are standard, part of the same sweet-and-salty habit as bibingka and ensaymada.",
    sources: [
      "https://en.wikipedia.org/wiki/Buko_salad",
      "https://en.wikipedia.org/wiki/Buko_pandan_cake"
    ]
  },
  {
    slug: "yema-cake", title: "Yema Cake", subtitle: "Chiffon Cake with Custard Frosting",
    description: "A light chiffon sponge blanketed in thick yema custard and dusted with grated cheese. The candy turned into a cake.",
    category: "DESSERT / CAKE", time: "1H 30M", yield: "10 PAX", origin: "PHILIPPINES", technique: "CHIFFON + CUSTARD",
    ingredients: [
      {name:"Cake flour",metric:"200 g",imperial:"1 2/3 cups"},
      {name:"Sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Eggs, separated",metric:"6 large",imperial:"6 large"},
      {name:"Neutral oil",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Milk",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Cream of tartar",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Egg yolks for frosting",metric:"6 pcs",imperial:"6 pcs"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Butter",metric:"60 g",imperial:"2 oz"},
      {name:"Cheese, grated",metric:"100 g",imperial:"3.5 oz"}
    ],
    instructions: [
      "Whisk the yolks with the oil, milk and half the sugar, then fold in the flour, baking powder and salt.",
      "Beat the whites with the cream of tartar and remaining sugar to firm, glossy peaks.",
      "Fold the meringue into the batter in three additions and pour into an ungreased tube or lined round tin.",
      "Bake at 165\u00b0C (330\u00b0F) for 35 to 40 minutes, until springy. Cool upside down so the chiffon does not collapse.",
      "For the frosting, whisk the 6 yolks with the condensed milk, strain, and cook over the lowest heat, stirring constantly, for 15 to 20 minutes until thick enough to hold a ridge.",
      "Beat in the butter and cool to room temperature.",
      "Split the cake, fill and cover with the yema, then press grated cheese over the top and sides."
    ],
    notes: [
      "Cool the chiffon inverted. Right side up it sinks under its own weight.",
      "The yema frosting must be cooked on genuinely low heat, or the yolks scramble and the texture is lost."
    ],
    verification: "verified",
    history: "Yema cake takes the egg-yolk candy of the same name and turns it into a frosting for chiffon sponge. It is strongly associated with Laguna and Quezon bakeries, and the grated cheese over the sweet custard follows the same salty-sweet logic as ensaymada.",
    sources: [
      "https://en.wikipedia.org/wiki/Yema_(candy)",
      "https://en.wikipedia.org/wiki/Ube_cake"
    ]
  },
  {
    slug: "kiping", title: "Kiping", subtitle: "Coloured Rice Wafers",
    description: "Rice paste pressed onto a leaf, steamed and dried into a thin translucent wafer that takes the leaf's shape and veins. Hung as decoration, then grilled and eaten.",
    category: "MERIENDA / WAFER", time: "2D", yield: "30 PCS", origin: "LUCBAN, QUEZON", technique: "LEAF-PRESSED STEAM",
    ingredients: [
      {name:"Glutinous rice",metric:"500 g",imperial:"2 1/2 cups"},
      {name:"Water",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Rock salt",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Food colouring",metric:"4 tsp",imperial:"4 tsp"},
      {name:"Kabal or talisay leaves",metric:"30 sheets",imperial:"30 sheets"},
      {name:"Neutral oil",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Sugar for dipping",metric:"100 g",imperial:"3.5 oz"}
    ],
    instructions: [
      "Soak the glutinous rice for 2 hours, then grind it with the water into a smooth paste.",
      "Stir in the rock salt, then divide the paste and colour each portion separately.",
      "Wipe the leaves and oil them lightly so the wafer will peel away later.",
      "Spread a thin, even layer of paste over each leaf, using the leaf as the mould. Thin is essential; a thick layer will never dry properly.",
      "Steam the coated leaves for about 30 minutes, until the paste is set and translucent.",
      "Hang the leaves in the shade to dry, out of direct sun, for a day or more until the wafer stiffens.",
      "Peel the kiping from the leaf. Grill or fry it briefly before eating, with sugar or vinegar to dip."
    ],
    notes: [
      "Dry in shade, not sun. Direct sun makes the wafers curl and crack before they set.",
      "The leaf is the mould and the pattern; kabal leaves are traditional because they release cleanly."
    ],
    verification: "verified",
    history: "Kiping comes from kinipi, meaning pressed, describing how the water is squeezed from the rice dough. It is made in Lucban, Quezon for the Pahiyas Festival each 15 May, when houses are decorated with it in honour of San Isidro Labrador, and eaten afterwards.",
    sources: [
      "https://en.wikipedia.org/wiki/Kiping",
      "https://www.yummy.ph/news-trends/what-to-eat-lucban-quezon-pahiyas-a1757-20190515-lfrm2"
    ]
  },
  {
    slug: "alupi", title: "Alupi", subtitle: "Cassava Cake in Banana Leaf",
    description: "Grated cassava mixed with coconut and sugar, wrapped in banana leaf and steamed into a dense chewy bar. The Western Visayan cassava suman.",
    category: "DESSERT / KAKANIN", time: "1H 15M", yield: "14 PCS", origin: "WESTERN VISAYAS", technique: "BANANA-LEAF STEAM",
    image: local("alupi.jpg"),
    ingredients: [
      {name:"Cassava, grated",metric:"800 g",imperial:"1.8 lb"},
      {name:"Coconut milk",metric:"300 ml",imperial:"1 1/4 cups"},
      {name:"Young coconut meat, stripped",metric:"150 g",imperial:"5 oz"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Banana leaves",metric:"14 sheets",imperial:"14 sheets"}
    ],
    instructions: [
      "Peel the cassava and remove the woody cord that runs through the centre of each root.",
      "Grate finely and squeeze out a little of the liquid, but do not wring it dry.",
      "Mix with the coconut milk, young coconut strips, brown sugar and salt.",
      "Soften the banana leaves over a flame and cut into rectangles.",
      "Spoon the mixture onto each leaf, fold the sides in and roll into a flat parcel, tucking the ends under.",
      "Steam for 45 to 55 minutes, until the cassava is fully translucent and firm. Cassava must be cooked through.",
      "Cool slightly and serve in the wrapper, with sugar or latik."
    ],
    notes: [
      "Take out the fibrous core before grating; it never softens.",
      "Test a parcel before pulling the batch: undercooked cassava is both unpleasant and unsafe."
    ],
    verification: "verified",
    history: "Alupi, also spelled alupe, is what much of Western Visayas calls its cassava suman. It uses balinghoy, the local name for cassava, in place of the glutinous rice used elsewhere, and is steamed in banana leaf like its rice-based relatives.",
    sources: [
      "https://iloilofoodtrip.blogspot.com/2019/02/alupi-favorite-cassava-kakanin.html",
      "https://flavoursofiloilo.blogspot.com/2016/01/bingka-kutsinta-ibos-kag-alupi.html"
    ]
  },
  {
    slug: "binalay", title: "Binalay", subtitle: "Cagayan Valley Rice Cake with Latik",
    description: "Pounded glutinous rice shaped into flat cakes, wrapped in banana leaf and steamed, then eaten under a thick sweet coconut sauce. Lenten food in Cagayan and Isabela.",
    category: "DESSERT / KAKANIN", time: "2H", yield: "12 PCS", origin: "CAGAYAN VALLEY", technique: "BANANA-LEAF STEAM",
    ingredients: [
      {name:"Glutinous rice",metric:"600 g",imperial:"3 cups"},
      {name:"Water",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Salt",metric:"1 1/2 tsp",imperial:"1 1/2 tsp"},
      {name:"Coconut cream",metric:"500 ml",imperial:"2 cups"},
      {name:"Muscovado sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Banana leaves",metric:"12 sheets",imperial:"12 sheets"}
    ],
    instructions: [
      "Soak the glutinous rice overnight, then drain and grind it into a thick paste.",
      "Work the paste with the salt and just enough water to make a dough that holds together without cracking.",
      "Soften the banana leaves over a flame.",
      "Shape the dough into flat oval cakes and wrap each in leaf.",
      "Steam for 40 to 50 minutes, until the cakes are firm and cooked through.",
      "For the laro, simmer the coconut cream with the muscovado for 20 to 25 minutes, stirring, until thick and glossy.",
      "Unwrap the cakes and pour the sauce generously over before serving."
    ],
    notes: [
      "Grind the soaked rice rather than using packaged flour if you can; the texture is coarser and better.",
      "The sauce should be thick enough to sit on the cake rather than run off it."
    ],
    verification: "verified",
    history: "Binalay is associated with Lent in Cagayan and Isabela, where it is made during Holy Week and shared among neighbours. It is served with laro or latik, a sweet coconut sauce poured over the steamed cakes.",
    sources: [
      "https://pia.gov.ph/features/binalay-delicacy-sacred-taste-of-lent-in-cagayan-valley/",
      "https://en.wikipedia.org/wiki/Suman_(food)"
    ]
  },
  {
    slug: "peanut-kisses", title: "Peanut Kisses", subtitle: "Bohol Peanut Meringue Cookies",
    description: "Ground toasted peanuts folded into meringue and piped into small peaks, baked dry. Shaped deliberately like the Chocolate Hills.",
    category: "CONFECTION / COOKIE", time: "1H", yield: "40 PCS", origin: "BOHOL", technique: "MERINGUE DROP",
    ingredients: [
      {name:"Peanuts, toasted and ground",metric:"300 g",imperial:"10.5 oz"},
      {name:"Egg whites",metric:"4 pcs",imperial:"4 pcs"},
      {name:"Sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Cornstarch",metric:"30 g",imperial:"1/4 cup"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Toast the peanuts, rub off the skins and grind them, leaving some pieces coarse so there is something to chew.",
      "Toss the ground peanuts with the cornstarch. This draws off residual oil and moisture, which would otherwise collapse the meringue.",
      "Beat the egg whites with the salt until foaming, then add the sugar gradually and beat to stiff, glossy peaks.",
      "Fold in the vanilla, then the peanut mixture, in three additions and as gently as possible.",
      "Pipe or spoon small tall peaks onto lined trays, leaving space between them.",
      "Bake at 150\u00b0C (300\u00b0F) for 20 minutes, then lower to 120\u00b0C (250\u00b0F) and dry for a further 25 to 30 minutes.",
      "Cool in the switched-off oven with the door ajar, then store airtight at once."
    ],
    notes: [
      "Tossing the peanuts in cornstarch first is the trick that keeps the meringue standing.",
      "The peaks are the point. Piped flat, they are just peanut biscuits."
    ],
    verification: "verified",
    history: "Peanut kisses are Bohol's best known pasalubong, shaped into small peaks in imitation of the Chocolate Hills. They belong to a family of Boholano peanut sweets that also includes caycay and the province's peanut kisses variants flavoured with ube kinampay.",
    sources: [
      "https://theskinnypot.com/peanut-kisses-recipe/",
      "https://bohol-philippines.com/bohol-peanut-kisses/"
    ]
  },
  {
    slug: "caycay", title: "Caycay", subtitle: "Layered Peanut Cookie",
    description: "Thin layered pastry fried crisp, brushed with syrup and rolled in coarsely ground toasted peanuts.",
    category: "CONFECTION / COOKIE", time: "1H 15M", yield: "24 PCS", origin: "BOHOL / CEBU", technique: "LAMINATED FRY",
    ingredients: [
      {name:"All-purpose flour",metric:"350 g",imperial:"3 cups"},
      {name:"Shortening",metric:"150 g",imperial:"5 oz"},
      {name:"Water, iced",metric:"140 ml",imperial:"2/3 cup"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Neutral frying oil",metric:"700 ml",imperial:"3 cups"},
      {name:"Brown sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Water for syrup",metric:"100 ml",imperial:"scant 1/2 cup"},
      {name:"Peanuts, toasted and coarsely ground",metric:"250 g",imperial:"9 oz"}
    ],
    instructions: [
      "Rub half the shortening into the flour and salt, then bring together with the iced water into a firm dough. Rest 20 minutes.",
      "Roll into a rectangle, spread with the remaining shortening, fold in three and rest 15 minutes. Repeat twice more. These folds are what give caycay its layers.",
      "Roll thin, about 2 mm, and cut into rectangles.",
      "Heat the oil to 170\u00b0C (340\u00b0F) and fry the pieces for 2 to 3 minutes a side, until puffed, golden and crisp. Drain.",
      "Boil the brown sugar with the water for 5 to 6 minutes into a thick syrup.",
      "Dip or brush each fried piece with syrup.",
      "Roll immediately in the coarsely ground peanuts and set aside until the coating firms."
    ],
    notes: [
      "Coat while the syrup is still hot and tacky; once it cools the peanuts will not stick.",
      "Grind the peanuts coarse. Fine peanut powder turns pasty against the syrup."
    ],
    verification: "verified",
    history: "Caycay is a layered fried cookie from Bohol and Cebu, finished in syrup and toasted peanuts. It sits alongside peanut kisses and masareal in the Visayan tradition of peanut-based pasalubong.",
    sources: [
      "https://en.wikipedia.org/wiki/Caycay",
      "https://bohol-philippines.com/bohol-peanut-kisses/"
    ]
  },
  {
    slug: "macapuno-balls", title: "Macapuno Balls", subtitle: "Coconut Sport Candy",
    description: "Macapuno preserve cooked down with condensed milk until stiff, rolled into balls and coated in desiccated coconut.",
    category: "CONFECTION / COCONUT", time: "45M", yield: "30 PCS", origin: "PHILIPPINES", technique: "SLOW REDUCTION",
    ingredients: [
      {name:"Macapuno preserve, drained",metric:"400 g",imperial:"14 oz"},
      {name:"Condensed milk",metric:"390 g",imperial:"14 oz"},
      {name:"Cornstarch",metric:"40 g",imperial:"1/3 cup"},
      {name:"Butter",metric:"30 g",imperial:"1 oz"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Desiccated coconut",metric:"150 g",imperial:"5 oz"}
    ],
    instructions: [
      "Drain the macapuno thoroughly and press out the syrup. Excess syrup will keep the mixture from ever setting.",
      "Cook the macapuno with the condensed milk, butter and salt over low heat, stirring constantly, for 20 to 25 minutes.",
      "Slake the cornstarch in a little water and stir it in, cooking 5 minutes more until the mass pulls cleanly from the pan.",
      "Cool until it can be handled comfortably.",
      "Roll into balls about 2.5 cm across with lightly greased hands.",
      "Roll each ball in desiccated coconut until fully coated.",
      "Chill for an hour to firm, then wrap individually."
    ],
    notes: [
      "Draining the macapuno properly is the whole difference between a candy and a sticky paste.",
      "Grease your hands rather than flouring them; flour dulls the coconut flavour."
    ],
    verification: "verified",
    history: "Macapuno is a naturally occurring coconut mutation whose flesh is soft, translucent and jelly-like rather than firm. Sold as a sweet preserve in jars, it is used across Filipino desserts, and these condensed-milk balls are its simplest confection.",
    sources: [
      "https://www.foxyfolksy.com/macapuno-balls/",
      "https://theunlikelybaker.com/macapuno-balls/"
    ]
  },
  {
    slug: "ginataang-saging", title: "Ginataang Saging", subtitle: "Saba in Sweet Coconut Milk",
    description: "Ripe saba stewed gently in sweetened coconut milk with sago, until the fruit softens and the milk thickens around it.",
    category: "DESSERT / GATA", time: "35M", yield: "6 PAX", origin: "PHILIPPINES", technique: "COCONUT SIMMER",
    ingredients: [
      {name:"Saba bananas, thickly sliced",metric:"8 pcs",imperial:"8 pcs"},
      {name:"Coconut milk",metric:"700 ml",imperial:"3 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Brown sugar",metric:"180 g",imperial:"6.3 oz"},
      {name:"Tapioca or sago pearls, cooked",metric:"150 g",imperial:"5 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Peel the saba and cut into thick diagonal slices. They should be ripe but still firm enough to hold shape.",
      "Bring the coconut milk to a gentle simmer with the pandan leaf and salt. Do not boil it hard.",
      "Add the banana and simmer for 10 to 12 minutes, until tender but not collapsing. Move the pan rather than stirring.",
      "Stir in the brown sugar and simmer 5 minutes more.",
      "Add the cooked sago and warm through.",
      "Remove the pandan leaf and stir in the coconut cream off the heat.",
      "Serve warm. It thickens as it cools."
    ],
    notes: [
      "Stirring breaks the banana down into the milk; tilt and swirl the pan instead.",
      "Sweet potato or jackfruit are common additions, at which point it shades into ginataang halo-halo."
    ],
    verification: "verified",
    history: "Ginataang saba is the plainest member of the ginataan family, ripe cooking banana stewed in sweetened coconut milk. Adding rice balls turns it into ginataang bilo-bilo, and adding a wider mix of roots and fruit makes it ginataang halo-halo.",
    sources: [
      "https://en.wikipedia.org/wiki/Ginataang_saba",
      "https://pilipinasrecipes.com/ginataang-bilo-bilo-recipe/"
    ]
  },
  {
    slug: "binatog", title: "Binatog", subtitle: "Boiled White Corn with Coconut",
    description: "Hominy corn boiled until the kernels bloom open, served warm under grated coconut with sugar or salt. Sold from carts in the afternoon.",
    category: "MERIENDA / BOILED", time: "1H 30M", yield: "6 PAX", origin: "PHILIPPINES", technique: "BOILED CORN",
    ingredients: [
      {name:"Dried white corn (hominy)",metric:"400 g",imperial:"14 oz"},
      {name:"Water",metric:"2.5 L",imperial:"10 1/2 cups"},
      {name:"Baking soda",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Salt",metric:"1 tsp",imperial:"1 tsp"},
      {name:"Grated coconut",metric:"250 g",imperial:"9 oz"},
      {name:"Sugar",metric:"120 g",imperial:"4 oz"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"}
    ],
    instructions: [
      "Soak the dried white corn overnight in plenty of water.",
      "Drain, then boil in fresh water with the baking soda for 1 to 1 1/2 hours, until the kernels swell and burst open. The soda is what helps the hulls loosen.",
      "Rub the cooked kernels between your hands under running water to slip off the loosened hulls, and drain.",
      "Return the kernels to the pan with the salt and a little fresh water and warm through.",
      "Stir in the butter until it melts over the hot corn.",
      "Serve warm in bowls, heaped with freshly grated coconut.",
      "Offer sugar and salt separately; binatog is eaten sweet or savoury according to taste."
    ],
    notes: [
      "Only dried white corn will bloom like this. Sweetcorn simply softens and stays closed.",
      "Freshly grated coconut matters here; desiccated coconut is dry and misses the point."
    ],
    verification: "verified",
    history: "Binatog is boiled hominy corn topped with grated coconut, sold from pushcarts by vendors ringing a bell through neighbourhoods in the afternoon. It is eaten either sweet or salted, which is unusual among Filipino merienda.",
    sources: [
      "https://en.wikipedia.org/wiki/Binatog",
      "https://www.aboutfilipinofood.com/filipino-snacks/"
    ]
  },
  {
    slug: "nilupak-na-saging", title: "Nilupak na Saging", subtitle: "Pounded Saba with Coconut and Butter",
    description: "Boiled saba pounded smooth with butter, milk and sugar, pressed flat and topped with coconut and cheese. The banana version of nilupak.",
    category: "DESSERT / KAKANIN", time: "45M", yield: "8 PAX", origin: "PHILIPPINES", technique: "POUND + PRESS",
    ingredients: [
      {name:"Saba bananas",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Butter",metric:"120 g",imperial:"4 oz"},
      {name:"Condensed milk",metric:"300 g",imperial:"10.5 oz"},
      {name:"Coconut milk",metric:"150 ml",imperial:"2/3 cup"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Grated coconut",metric:"120 g",imperial:"4 oz"},
      {name:"Cheese, grated",metric:"80 g",imperial:"3 oz"}
    ],
    instructions: [
      "Boil the unpeeled saba for 20 to 25 minutes, until soft right through. Peel while still warm.",
      "Pound the warm bananas in a mortar, or mash hard with a heavy spoon, until completely smooth and elastic.",
      "Work in the butter a little at a time, then the condensed milk, coconut milk, sugar and salt.",
      "Keep working the mass until it turns glossy and pulls together.",
      "Press into a buttered dish or shape into a flat round on a banana leaf.",
      "Top with grated coconut and cheese.",
      "Cool to room temperature before cutting into wedges."
    ],
    notes: [
      "Pound while hot. Cold saba will not come together however long you work it.",
      "Use saba, the cooking banana; dessert bananas are too wet and turn to paste."
    ],
    verification: "verified",
    history: "Nilupak is a whole class of pounded starchy sweets rather than one recipe, taking its name from lupak, to pound. The saba version sits alongside cassava nilupak and the sweet-potato camote halaya, all finished with coconut milk, butter and sugar.",
    sources: [
      "https://en.wikipedia.org/wiki/Nilupak",
      "https://panlasangpinoy.com/nilupak-recipe/"
    ]
  },
  {
    slug: "nilupak-na-kamote", title: "Nilupak na Kamote", subtitle: "Pounded Sweet Potato with Coconut",
    description: "Boiled sweet potato pounded with coconut milk, butter and sugar into a dense sweet paste. Also called camote halaya.",
    category: "DESSERT / KAKANIN", time: "50M", yield: "8 PAX", origin: "PHILIPPINES", technique: "POUND + PRESS",
    ingredients: [
      {name:"Sweet potato (kamote)",metric:"1.2 kg",imperial:"2.6 lb"},
      {name:"Coconut milk",metric:"250 ml",imperial:"1 cup"},
      {name:"Condensed milk",metric:"250 g",imperial:"9 oz"},
      {name:"Butter",metric:"100 g",imperial:"3.5 oz"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Grated coconut",metric:"120 g",imperial:"4 oz"}
    ],
    instructions: [
      "Boil the sweet potato in its skin for 25 to 30 minutes, until a knife slides through easily.",
      "Peel while warm and pound or mash until completely smooth.",
      "Work in the butter, then the coconut milk, condensed milk, sugar and salt.",
      "Cook the mixture in a pan over low heat for 8 to 10 minutes, stirring, to drive off excess moisture and bring it together.",
      "Press into a buttered dish and smooth the top.",
      "Scatter with grated coconut.",
      "Cool completely before cutting; it firms as it cools."
    ],
    notes: [
      "Boil the kamote whole and in its skin so it does not take on water.",
      "Purple-fleshed varieties work and look striking, but are drier and need a little more coconut milk."
    ],
    verification: "verified",
    history: "Nilupak na kamote, also called camote halaya, is the sweet-potato member of the nilupak family. Sweet potato is among the cheapest and most widely grown root crops in the country, which is why so many Filipino sweets are built on it.",
    sources: [
      "https://en.wikipedia.org/wiki/Nilupak",
      "https://www.kawalingpinoy.com/nilupak/"
    ]
  },
  {
    slug: "tinumok", title: "Tinumok", subtitle: "Taro Leaves Stuffed with Shrimp in Coconut Milk",
    description: "Shrimp, flaked fish and young coconut wrapped in taro leaves and simmered in coconut milk until the parcels soften into the sauce. Bicol's stuffed laing.",
    category: "BICOL / GATA", time: "1H", yield: "6 PAX", origin: "BICOL REGION", technique: "COCONUT SIMMER",
    ingredients: [
      {name:"Taro (gabi) leaves, fresh",metric:"30 sheets",imperial:"30 sheets"},
      {name:"Shrimp, peeled and chopped",metric:"300 g",imperial:"10.5 oz"},
      {name:"Flaked cooked fish",metric:"150 g",imperial:"5 oz"},
      {name:"Young coconut meat, chopped",metric:"150 g",imperial:"5 oz"},
      {name:"Coconut milk",metric:"700 ml",imperial:"3 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Garlic, minced",metric:"6 cloves",imperial:"6 cloves"},
      {name:"Yellow onion, minced",metric:"120 g",imperial:"4 oz"},
      {name:"Ginger, minced",metric:"25 g",imperial:"0.9 oz"},
      {name:"Shrimp paste (bagoong alamang)",metric:"30 g",imperial:"2 tbsp"},
      {name:"Bird\u2019s eye chilies",metric:"6 pcs",imperial:"6 pcs"}
    ],
    instructions: [
      "Wilt the taro leaves briefly over steam or in the sun so they can be folded without tearing.",
      "Mix the chopped shrimp, flaked fish and young coconut with half the garlic, onion, ginger and the shrimp paste.",
      "Place a spoonful of filling on each leaf and fold into a tight parcel, tucking the edges under.",
      "Lay the parcels seam-side down in a wide pot, packed in a single layer.",
      "Pour the coconut milk over with the remaining aromatics and the chilies.",
      "Simmer uncovered over low heat for 35 to 45 minutes. Do not stir at any point; taro leaves stirred while cooking turn itchy and sharp on the throat.",
      "Add the coconut cream and simmer 8 minutes more, until the sauce is thick. Serve with rice."
    ],
    notes: [
      "Never stir a pot of taro leaves. The calcium oxalate needs unbroken cooking to break down, and stirring is what makes laing and tinumok scratch the throat.",
      "The leaves must be properly wilted first or they split as you fold them."
    ],
    verification: "verified",
    history: "Tinumok is the stuffed cousin of laing: where laing shreds the taro leaves into the coconut milk, tinumok keeps them whole and wraps a filling of shrimp, fish and young coconut inside. It is Bicolano, and like most Bicol cooking it is built on gata and chilli.",
    sources: [
      "https://www.panlasangpinoymeatrecipes.com/tinumok.htm",
      "https://www.rappler.com/life-and-style/food-drinks/best-of-bicol-must-try-dishes-delicacies/"
    ]
  },
  {
    slug: "sampalok-candy", title: "Sampalok Candy", subtitle: "Tamarind Balls",
    description: "Tamarind pulp cooked down with sugar and salt into a sticky paste, rolled into balls and coated in salted sugar. Sour, sweet and salty at once.",
    category: "CONFECTION / FRUIT", time: "40M", yield: "30 PCS", origin: "PHILIPPINES", technique: "FRUIT REDUCTION",
    ingredients: [
      {name:"Tamarind pulp, seedless",metric:"400 g",imperial:"14 oz"},
      {name:"Water",metric:"120 ml",imperial:"1/2 cup"},
      {name:"Sugar",metric:"350 g",imperial:"12 oz"},
      {name:"Salt",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Sugar for coating",metric:"150 g",imperial:"5 oz"},
      {name:"Salt for coating",metric:"2 tsp",imperial:"2 tsp"}
    ],
    instructions: [
      "Work the tamarind pulp with the water until smooth, picking out any remaining seeds and fibre.",
      "Cook the pulp with the sugar and salt over medium-low heat, stirring constantly.",
      "Continue for 15 to 20 minutes, until the mixture darkens and becomes very thick and sticky, pulling away from the pan as you stir.",
      "Cool until it can be handled. It will still be tacky; oil your hands lightly.",
      "Roll into balls about 2 cm across.",
      "Mix the coating sugar with the coating salt and roll each ball until fully covered.",
      "Leave uncovered for an hour to dry slightly, then wrap individually in cellophane."
    ],
    notes: [
      "The salt is not optional. Without it the candy is merely sweet and loses the sour-salty balance that defines it.",
      "Cook it further than looks necessary; underdone, the balls slump out of shape."
    ],
    verification: "verified",
    history: "Sampalok candy is made from tamarind, which grows throughout the Philippines and is better known as the souring agent in sinigang. In Bicol a related preserved-fruit sweet is called champoy, a term that has widened to cover tamarind balls as well.",
    sources: [
      "https://ulamdaily.com/recipe/sampalok-candy",
      "https://www.aboutfilipinofood.com/filipino-candy/"
    ]
  },
  {
    slug: "coconut-candy", title: "Bukayo Toffee", subtitle: "Coconut Milk Toffee",
    description: "Coconut milk and muscovado boiled hard until the mixture darkens and sets chewy, then cut into squares.",
    category: "CONFECTION / COCONUT", time: "50M", yield: "30 PCS", origin: "PHILIPPINES", technique: "SUGAR CARAMEL",
    ingredients: [
      {name:"Coconut milk",metric:"500 ml",imperial:"2 cups"},
      {name:"Muscovado sugar",metric:"400 g",imperial:"14 oz"},
      {name:"Butter",metric:"40 g",imperial:"1.4 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Vanilla",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Combine the coconut milk, muscovado and salt in a heavy pan and bring to a boil, stirring until dissolved.",
      "Boil steadily, stirring often, for 25 to 35 minutes. The mixture will reduce, darken and thicken considerably.",
      "Test by dropping a little into cold water: it should form a firm, pliable ball. That is the soft-crack stage the toffee needs.",
      "Stir in the butter and vanilla.",
      "Pour into a greased and lined tray to a depth of about 1.5 cm.",
      "Score into squares while still warm and pliable.",
      "Cool completely, then snap along the scores and wrap each piece."
    ],
    notes: [
      "Judge it by the cold-water test rather than by time; coconut milk varies in fat and water.",
      "Score warm, break cold. Cutting it cold shatters the slab."
    ],
    verification: "verified",
    history: "Coconut toffee is a chewy Philippine candy of muscovado and coconut milk boiled until it sets. It belongs to the same family as bukayo and kalamay, all of them built by reducing coconut and raw sugar until they hold a shape.",
    sources: [
      "https://en.wikipedia.org/wiki/Coconut_toffee",
      "https://www.aboutfilipinofood.com/filipino-candy/"
    ]
  },
  {
    slug: "camote-fritters", title: "Camote Fritters", subtitle: "Battered Sweet Potato Slices",
    description: "Sweet potato sliced thin, dipped in a light sweet batter and fried until the edges crisp. Merienda made from whatever root is cheapest.",
    category: "MERIENDA / FRIED", time: "30M", yield: "12 PCS", origin: "PHILIPPINES", technique: "BATTER FRY",
    ingredients: [
      {name:"Sweet potato (kamote)",metric:"700 g",imperial:"1.5 lb"},
      {name:"All-purpose flour",metric:"180 g",imperial:"1 1/2 cups"},
      {name:"Rice flour",metric:"60 g",imperial:"1/2 cup"},
      {name:"Sugar",metric:"80 g",imperial:"3 oz"},
      {name:"Baking powder",metric:"2 tsp",imperial:"2 tsp"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Water",metric:"280 ml",imperial:"1 1/4 cups"},
      {name:"Neutral frying oil",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Brown sugar for dusting",metric:"60 g",imperial:"2 oz"}
    ],
    instructions: [
      "Peel the sweet potato and slice into rounds about 5 mm thick.",
      "Whisk the flours, sugar, baking powder and salt with the water into a batter the thickness of pouring cream.",
      "Heat the oil to 170\u00b0C (340\u00b0F).",
      "Dip each slice in batter, letting the excess run off.",
      "Fry for 3 to 4 minutes a side, until golden and the sweet potato is tender when pierced.",
      "Drain on a rack rather than paper so the underside stays crisp.",
      "Dust with brown sugar while still hot."
    ],
    notes: [
      "Slice evenly. Thick pieces stay raw inside while the batter browns.",
      "Rice flour in the batter is what keeps the coating crisp rather than bready."
    ],
    verification: "verified",
    history: "Camote fritters belong to the same family of battered merienda as maruya and sinapot, built on whatever cheap starch is at hand. Sweet potato is among the most widely grown root crops in the Philippines and appears throughout its snack cooking.",
    sources: [
      "https://www.angsarap.net/2023/07/27/indulge-in-filipino-snack-culture-a-comprehensive-compilation-of-22-filipino-meryenda-recipes-for-every-taste/",
      "https://en.wikipedia.org/wiki/Camote_cue"
    ]
  },
  {
    slug: "pili-nut-brittle", title: "Pili Nut Brittle", subtitle: "Bicol Pili Nut Candy",
    description: "Coarsely ground pili nuts set in a light caramel and spread thin. Richer and softer than peanut brittle, because pili is an oilier nut.",
    category: "CONFECTION / BRITTLE", time: "35M", yield: "24 PCS", origin: "BICOL REGION", technique: "SUGAR CARAMEL",
    ingredients: [
      {name:"Pili nuts, shelled and skinned",metric:"400 g",imperial:"14 oz"},
      {name:"Sugar",metric:"250 g",imperial:"9 oz"},
      {name:"Glucose or corn syrup",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Butter",metric:"30 g",imperial:"1 oz"},
      {name:"Water",metric:"60 ml",imperial:"1/4 cup"},
      {name:"Baking soda",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"}
    ],
    instructions: [
      "Rub the skins from the pili nuts and grind them coarsely, keeping plenty of texture.",
      "Warm the ground nuts gently so they do not chill the caramel.",
      "Combine the sugar, water, syrup and salt in a heavy pan and cook over medium heat without stirring for 8 to 10 minutes, until the syrup turns light amber.",
      "Stir in the warmed pili nuts and mix thoroughly.",
      "Add the butter, then the baking soda, and stir hard. The soda will foam the mixture and lighten the texture.",
      "Pour immediately onto a greased tray and spread thin with a greased spatula before it sets.",
      "Score into pieces while still warm, then cool completely and break apart."
    ],
    notes: [
      "Pili is much oilier than peanut, so the brittle sets softer; do not overcook trying to harden it.",
      "The baking soda goes in last and off the heat. It aerates the caramel, and stirring it in slowly wastes the effect."
    ],
    verification: "verified",
    history: "Pili grows almost exclusively in the Bicol region, and its nut supports a whole local confectionery trade. Beyond brittle, pili appears in mazapan, yema, polvoron, tarts and even mooncakes, and pili nut candy is among the standard pasalubong of Albay and Sorsogon.",
    sources: [
      "https://www.marketmanila.com/archives/pili-nut-delicacies",
      "https://blauearth.wordpress.com/2014/11/30/piling-pili-from-bicol/"
    ]
  },
  {
    slug: "mazapan-de-pili", title: "Mazapan de Pili", subtitle: "Pili Nut Marzipan",
    description: "Ground pili nuts bound with sugar, egg yolk and milk, shaped and baked briefly like a macaroon. Dense, rich and faintly citrus from dayap.",
    category: "CONFECTION / NUT", time: "1H", yield: "28 PCS", origin: "BICOL REGION", technique: "BAKED PASTE",
    ingredients: [
      {name:"Pili nuts, shelled and ground",metric:"450 g",imperial:"1 lb"},
      {name:"Sugar",metric:"350 g",imperial:"12 oz"},
      {name:"Evaporated milk",metric:"400 ml",imperial:"1 2/3 cups"},
      {name:"Egg yolks",metric:"3 pcs",imperial:"3 pcs"},
      {name:"Butter",metric:"60 g",imperial:"2 oz"},
      {name:"Fine breadcrumbs",metric:"80 g",imperial:"3 oz"},
      {name:"Dayap or lime zest",metric:"1 tbsp",imperial:"1 tbsp"},
      {name:"Dayap or lime juice",metric:"1 tsp",imperial:"1 tsp"}
    ],
    instructions: [
      "Grind the skinned pili nuts as finely as you can; the paste should be smooth rather than chunky.",
      "Cook the ground pili with the sugar and evaporated milk over low heat, stirring constantly, for 25 to 30 minutes until very thick.",
      "Take off the heat and beat in the butter, then the egg yolks one at a time, working quickly so they thicken rather than scramble.",
      "Stir in the breadcrumbs, dayap zest and juice. The crumbs give the paste enough body to shape.",
      "Cool until firm enough to handle, then roll into short logs or press into small moulds.",
      "Arrange on a lined tray and bake at 160\u00b0C (320\u00b0F) for 10 to 12 minutes, just to set and lightly colour the surface.",
      "Cool completely and wrap individually in paper."
    ],
    notes: [
      "Dayap, the local lime, cuts the richness; without it the sweet is cloying.",
      "Low heat and constant stirring. Milk and sugar at this ratio catch quickly."
    ],
    verification: "verified",
    history: "Mazapan de pili is ground pili nut worked with sugar, butter and egg yolk and baked like a macaroon, and is among the most common sweets of Bicol. It is the Filipino reading of Spanish marzipan, with pili standing in for almond.",
    sources: [
      "https://www.kawalingpinoyrecipe.com/native_delicacies/masapan_de_pili.htm",
      "https://www.marketmanila.com/archives/pili-nut-delicacies"
    ]
  },
  {
    slug: "minatamis-na-langka", title: "Minatamis na Langka", subtitle: "Sweetened Jackfruit",
    description: "Ripe jackfruit strips simmered briefly in syrup until glossy and translucent. Three ingredients, and the base of half the desserts in the archive.",
    category: "DESSERT / PRESERVE", time: "30M", yield: "2 JARS", origin: "PHILIPPINES", technique: "SYRUP POACH",
    ingredients: [
      {name:"Ripe jackfruit (langka), sliced",metric:"500 g",imperial:"1.1 lb"},
      {name:"Sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"350 ml",imperial:"1 1/2 cups"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Remove the seeds and slice the jackfruit flesh into strips.",
      "Dissolve the sugar in the water with the salt and pandan leaf and bring to a boil, stirring until clear.",
      "Simmer the syrup alone for 5 minutes to thicken slightly.",
      "Add the jackfruit strips.",
      "Simmer gently for 7 to 10 minutes, until the syrup thickens and the fruit turns translucent and glossy. Longer and it goes stringy.",
      "Remove the pandan leaf and cool in the syrup.",
      "Transfer to sterilised jars. It keeps refrigerated for about a week, or longer if properly canned."
    ],
    notes: [
      "Stop while the strips still hold their shape; overcooked jackfruit shreds into the syrup.",
      "The syrup is as useful as the fruit and is worth keeping for halo-halo and ginataan."
    ],
    verification: "verified",
    history: "Minatamis simply means sweetened, and the technique is applied across Philippine fruit: saba, jackfruit, kamias, pineapple and mango all get the same treatment. Sweetened jackfruit is a standard component of halo-halo, ginataan and buko salad.",
    sources: [
      "https://www.kawalingpinoy.com/minatamis-na-langka/",
      "https://www.aboutfilipinofood.com/minatamis/"
    ]
  },
  {
    slug: "minatamis-na-kamias", title: "Minatamis na Kamias", subtitle: "Candied Bilimbi",
    description: "Sharp green kamias brined in salt to draw out its acid, then candied in heavy syrup until translucent.",
    category: "DESSERT / PRESERVE", time: "1D", yield: "2 JARS", origin: "PHILIPPINES", technique: "BRINE + CANDY",
    ingredients: [
      {name:"Kamias (bilimbi), sliced",metric:"1 kg",imperial:"2.2 lb"},
      {name:"Coarse salt",metric:"200 g",imperial:"7 oz"},
      {name:"Water",metric:"1.0 L",imperial:"4 1/4 cups"},
      {name:"Sugar",metric:"600 g",imperial:"1.3 lb"},
      {name:"Water for syrup",metric:"400 ml",imperial:"1 2/3 cups"}
    ],
    instructions: [
      "Wash the kamias and slice into discs about 5 mm thick.",
      "Dissolve the coarse salt in the water and soak the slices for at least an hour, and up to overnight. This draws off the fierce acidity that makes raw kamias almost inedible.",
      "Drain and rinse thoroughly, then press gently to remove excess water.",
      "Boil the sugar with the second measure of water until dissolved, then simmer 5 minutes.",
      "Add the drained kamias and simmer over low heat for 30 to 40 minutes, until the fruit turns translucent and the syrup is heavy.",
      "Cool completely in the syrup.",
      "Pack into sterilised jars, submerged in the syrup."
    ],
    notes: [
      "The salt soak is not optional. Unbrined kamias stays punishingly sour no matter how much sugar goes in.",
      "Keep the heat low; boiled hard, the slices fall apart."
    ],
    verification: "verified",
    history: "Kamias, or bilimbi, is so sour it is normally used as a souring agent in sinigang rather than eaten as fruit. Candying it in heavy syrup after a salt brine is one of the few ways it is turned into a sweet, and it belongs to the same minatamis tradition as sweetened banana and jackfruit.",
    sources: [
      "https://allaboutfood.occasionalramblings.org/2019/02/recipe-minatamis-na-kamias-candied.html",
      "https://www.aboutfilipinofood.com/minatamis/"
    ]
  },
  {
    slug: "minatamis-na-kamote", title: "Minatamis na Kamote", subtitle: "Sweet Potato in Syrup",
    description: "Sweet potato simmered in muscovado syrup until it takes on the colour and gloss of the syrup. Eaten warm or folded into ginataan.",
    category: "DESSERT / PRESERVE", time: "40M", yield: "6 PAX", origin: "PHILIPPINES", technique: "SYRUP POACH",
    ingredients: [
      {name:"Sweet potato (kamote), cubed",metric:"800 g",imperial:"1.8 lb"},
      {name:"Muscovado sugar",metric:"300 g",imperial:"10.5 oz"},
      {name:"Water",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"},
      {name:"Salt",metric:"1/4 tsp",imperial:"1/4 tsp"},
      {name:"Ginger, sliced",metric:"20 g",imperial:"0.7 oz"}
    ],
    instructions: [
      "Peel the sweet potato and cut into even cubes about 3 cm across.",
      "Dissolve the muscovado in the water with the pandan, ginger and salt and bring to a boil.",
      "Simmer the syrup for 8 minutes, until it darkens and thickens a little.",
      "Add the sweet potato in a single layer.",
      "Simmer gently for 20 to 25 minutes, until a knife enters easily but the cubes still hold their shape. Do not stir; move the pan instead.",
      "Remove the pandan and ginger.",
      "Cool in the syrup and serve warm or at room temperature."
    ],
    notes: [
      "Even-sized cubes cook evenly; ragged pieces give you some raw and some collapsed.",
      "A little ginger in the syrup keeps the sweetness from being flat."
    ],
    verification: "verified",
    history: "Minatamis na kamote is the sweet-potato member of the minatamis family, made the same way as sweetened banana and jackfruit. It is eaten on its own and used as a component in ginataan and halo-halo.",
    sources: [
      "https://www.aboutfilipinofood.com/minatamis/",
      "https://www.kawalingpinoy.com/minatamis-na-langka/"
    ]
  },
  {
    slug: "ginataang-munggo", title: "Ginataang Munggo", subtitle: "Sweet Mung Beans in Coconut Milk",
    description: "Mung beans boiled soft then sweetened and finished in coconut milk with glutinous rice. The dessert reading of a bean normally cooked savoury.",
    category: "DESSERT / GATA", time: "1H", yield: "6 PAX", origin: "PHILIPPINES", technique: "COCONUT SIMMER",
    ingredients: [
      {name:"Dried mung beans",metric:"250 g",imperial:"9 oz"},
      {name:"Water",metric:"1.2 L",imperial:"5 cups"},
      {name:"Glutinous rice",metric:"100 g",imperial:"1/2 cup"},
      {name:"Coconut milk",metric:"600 ml",imperial:"2 1/2 cups"},
      {name:"Coconut cream",metric:"200 ml",imperial:"3/4 cup"},
      {name:"Brown sugar",metric:"200 g",imperial:"7 oz"},
      {name:"Salt",metric:"1/2 tsp",imperial:"1/2 tsp"},
      {name:"Pandan leaves",metric:"1 leaves",imperial:"1 leaves"}
    ],
    instructions: [
      "Toast the dried mung beans in a dry pan for 4 to 5 minutes, until they smell nutty. This is what separates the dessert version from the savoury one.",
      "Boil the toasted beans in the water for 30 to 40 minutes, until soft and beginning to burst.",
      "Add the glutinous rice and the pandan leaf and simmer 15 minutes more, stirring often, until the rice is tender and the mixture thickens.",
      "Pour in the coconut milk and bring back to a gentle simmer.",
      "Stir in the brown sugar and salt and cook 8 minutes.",
      "Remove the pandan leaf and stir in the coconut cream off the heat.",
      "Serve warm. It thickens considerably as it stands."
    ],
    notes: [
      "Toasting the beans first gives the dish its characteristic aroma and is worth the five minutes.",
      "Stir often once the rice is in, or it catches on the base."
    ],
    verification: "verified",
    history: "Ginataang munggo is the sweet counterpart to ginisang munggo, the savoury sauteed mung bean stew. The same bean is toasted, sweetened and cooked in coconut milk, and the dish sits with champorado and ginataang mais among warm Filipino rice-and-bean desserts.",
    sources: [
      "https://en.wikipedia.org/wiki/Ginataan",
      "https://panlasangpinoy.com/ginisang-monggo-with-kalabasa/"
    ]
  },
];

export function getRecipe(slug: string) { return recipes.find((recipe) => recipe.slug === slug); }
