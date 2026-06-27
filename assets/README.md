# Artwork slots for Bhagavad Gita Jnana Mandir

The site ships with painterly CSS gradients standing in for the devotional
artwork, so it looks complete out of the box. To bring in real, rights-cleared
imagery, drop optimized files here with these exact names. No code changes are
needed beyond adding the `has-image` class noted below.

## 1. The Kurukshetra painting (loading screen + hero)
A single high-resolution devotional painting of Krishna as **Parthasarathi** on
the Kurukshetra battlefield, painterly, warm golden-hour light.

- `https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/partha-sarathi-krishna-speaks-the-bhagavad-gita-to-arjuna-dominique-amendola.jpg` — used by the loading-screen doors
- `assets/hero-parthasarathi.webp` — used by the homepage hero

Export at roughly 2400px on the long edge, WebP or AVIF, quality high (the scene
is detailed and should not be over-compressed). Keep a JPEG fallback if you wish.

To switch the CSS gradient placeholder for the real file, add the class
`has-image` to the relevant element in `index.html`:

- Loading doors: `<div class="door-art loader-art-zoom has-image">` (both panels)
- Hero: `<div class="hero-art has-image">`

The directional vignette and Ken Burns zoom are applied in CSS and will sit over
your painting automatically.

## 2. Deity alankaram (About section)
- `assets/deity-alankaram.webp` — portrait orientation (4:5), the adorned deity.
- Add `has-image` to `<div class="about-art">`.

## 3. Gallery
The gallery currently pulls placeholder photography from picsum.photos by seed.
Replace each `<img src="https://picsum.photos/...">` in the Gallery section of
`index.html` with your own rights-cleared temple photographs.

## A note on sourcing
Use only images you have the rights to use, or commission / generate original
artwork. Do not lift photographs from other temples' websites.
