# Drop your food photos here

Name the file after the dish, then run:

    npm run add-images

Any of these spellings work — the matcher is not fussy about case,
spaces, or hyphens:

    beef-kulma.jpg
    Beef kulma.jpg
    Beef Kulma.jpeg

Accepted: .jpg .jpeg .png .webp .avif

Each photo is turned upright, resized to 1600px wide, saved as
public/images/recipes/<slug>.jpg and wired into data/recipes.ts.
The file is removed from this folder once it has been added.

Adding a photo replaces whatever was there before and drops any
Wikimedia credit on that recipe, since the photo is then yours.

Run `npm run add-images:check` first to see what would happen
without changing anything.

---

## Recipes still without a photo (43 of 130)

Name a file after any of these:

    adobong-kangkong.jpg                  # Adobong Kangkong
    adobong-sitaw.jpg                     # Adobong Sitaw
    arroz-caldo.jpg                       # Arroz Caldo
    betamax.jpg                           # Betamax
    binakol-na-manok.jpg                  # Binakol na Manok
    bringhe.jpg                           # Bringhe
    dynamite-lumpia.jpg                   # Dynamite Lumpia
    ensaymada.jpg                         # Ensaymada
    goto.jpg                              # Goto
    inutok-na-hipon.jpg                   # Inutok
    kababayan.jpg                         # Kababayan
    kamote-cue.jpg                        # Kamote Cue
    kikiam.jpg                            # Kikiam
    kinakulob-na-manok.jpg                # Kinakulob na Manok
    kinarabu-palo.jpg                     # Kinarabu
    kwek-kwek.jpg                         # Kwek-Kwek
    longganisa.jpg                        # Longganisa
    lumpiang-sariwa.jpg                   # Lumpiang Sariwa
    moron-leyte.jpg                       # Moron
    nilagang-baboy.jpg                    # Nilagang Baboy
    nilagang-baka.jpg                     # Nilagang Baka
    paksiw-na-bangus.jpg                  # Paksiw na Bangus
    paksiw-na-isda.jpg                    # Paksiw na Isda
    paksiw-na-pata.jpg                    # Paksiw na Pata
    pan-de-regla.jpg                      # Pan de Regla
    pancit-batil-patung.jpg               # Pancit Batil Patung
    pancit-bato.jpg                       # Pancit Bato
    pancit-habhab.jpg                     # Pancit Habhab
    pancit-malabon.jpg                    # Pancit Malabon
    pichi-pichi.jpg                       # Pichi-Pichi
    polvoron.jpg                          # Polvoron
    puto-bumbong.jpg                      # Puto Bumbong
    pyanggang-manok.jpg                   # Pyanggang Manok
    relyenong-bangus.jpg                  # Relyenong Bangus
    satti.jpg                             # Satti
    sinangag.jpg                          # Sinangag
    sinigang-na-baka.jpg                  # Sinigang na Baka
    sinigang-na-isda.jpg                  # Sinigang na Isda
    sinuglaw.jpg                          # Sinuglaw
    suman.jpg                             # Suman
    suman-sa-lihiya.jpg                   # Suman sa Lihiya
    tamalos-catbalogan.jpg                # Tamalos
    tupig.jpg                             # Tupig

(87 recipes already have one.)
