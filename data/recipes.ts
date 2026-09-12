export type Ingredient = { name: string; metric: string; imperial: string };
export type Recipe = {
  slug: string; title: string; subtitle: string; description: string; category: string; time: string; yield: string;
  image?: string; imageSource?: string; origin: string; technique: string; ingredients: Ingredient[]; instructions: string[]; notes: string[];
  /** Short documented background for the printed postcard front. Sourced, not improvised. */
  history?: string;
};

// Images are mirrored locally from Wikimedia Commons (see `imageSource` for attribution).
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
    image: commons("Pork adobo.jpg"), imageSource: commonsPage("Pork adobo.jpg"),
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
    image: commons("Sinigang na Baboy.jpg"), imageSource: commonsPage("Sinigang na Baboy.jpg"),
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
    image: commons("Kare-kare.jpg"), imageSource: commonsPage("Kare-kare.jpg"),
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
    image: commons("Bagnet in Boracay.jpg"), imageSource: commonsPage("Bagnet in Boracay.jpg"),
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
    description: "Small marinated meat skewers grilled over charcoal and served with a sweet-hot, peanut-enriched sauce. Satti is strongly associated with Zamboanga and the Tausug culinary tradition.",
    category: "MINDANAO / GRILL", time: "60M", yield: "4 PAX", origin: "ZAMBOANGA", technique: "CHARCOAL GRILL",
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
    notes: ["Satti is a signature food of Zamboanga with strong Tausug influence and is commonly eaten for breakfast as well as later in the day."]
  },
  {
    slug: "pyanggang-manok", title: "Pyanggang Manok", subtitle: "Maguindanaon Charred Coconut Chicken",
    description: "Chicken cooked with a deeply charred coconut paste, turmeric, lemongrass, and aromatics. The dark exterior and smoky coconut flavor are the defining elements.",
    category: "MINDANAO / CHICKEN", time: "90M", yield: "5 PAX", origin: "MAGUINDANAO", technique: "CHARRED COCONUT",
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
    notes: ["Pyanggang is a southern Filipino preparation in which coconut is intentionally charred to create a dark, smoky paste."]
  },
  {
    slug: "beef-kulma", title: "Beef Kulma", subtitle: "Mindanao Beef & Coconut Stew",
    description: "A southern Filipino beef stew influenced by the region's spice traditions, combining tender beef, coconut milk, aromatics, and warm spices into a rich sauce.",
    category: "MINDANAO / STEW", time: "2H 30M", yield: "6 PAX", origin: "MINDANAO", technique: "SPICED BRAISE",
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
    notes: ["Mindanao's southern cuisines reflect centuries of maritime and Muslim trading connections; spice and coconut combinations vary by community."]
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
    notes: ["Catbalogan Tamalos is documented by the Provincial Government of Samar as an heirloom dish associated with family and barangay kitchens.","The dish is substantially different from the corn-husk tamales familiar in Mexico: its Philippine identity is expressed through rice dough, banana leaves, pork, peanut sauce, and local aromatics."]
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
    notes: ["The defining technique is the covered, one-pot cooking method: the ingredients are combined rather than separately browned or built into a complex sauce.","Eastern Samar sources describe this preparation with coconut vinegar, soy sauce, ginger, garlic, bay leaves, pepper, and water."]
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
    notes: ["The Eastern Visayas food-mapping project documents kinarabu or kerabu in Palo, Leyte as a salad using pako, dilis, onion, tomato, vinegar, and grated charred coconut.","Use properly identified edible fiddlehead fern from a reliable source; not all fern species are safe to eat."]
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
    notes: ["Eastern Visayas food mapping identifies inutok of Carigara as a preparation made from small freshwater shrimp, young coconut, and local spices, wrapped in banana leaves and steamed.","Because shrimp cooks quickly, avoid extended steaming, which can make the filling dry and rubbery."]
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
  }
];

export function getRecipe(slug: string) { return recipes.find((recipe) => recipe.slug === slug); }
