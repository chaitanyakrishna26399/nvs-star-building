export type Product = {
  slug: string
  name: string
  /** Short line shown on the home page cards. */
  detail: string
  /** Full description shown on the products page. */
  description: string
  image: string
  /** Show this product in the home page "Building Materials for Every Need" grid. */
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: "gypsum-boards",
    name: "Gypsum Boards",
    detail: "RG, MR & FR",
    description: "RG, MR and FR boards from Knauf, Mada, United, Gyproc and Boral. Size: 1220 × 2440mm. Thickness: 9mm, 12.5mm and 15mm.",
    image: "/products/gypsum-boards.png",
    featured: true,
  },
  {
    slug: "metal-profiles",
    name: "Metal Profiles",
    detail: "Channels, Angles, Studs, Tracks",
    description: "Furring channels, main channels, perimeter angles, studs and tracks. Brands include Knauf, Ultrasteel, Technics and Mada. Thickness: 0.35mm, 0.40mm, 0.5mm and 1mm.",
    image: "/products/metal-profiles.png",
    featured: true,
  },
  {
    slug: "marine-plywood",
    name: "Marine Plywood",
    detail: "Film faced, 12mm, 15mm, 18mm",
    description: "Film-faced marine plywood for construction applications. Available in 12mm, 15mm and 18mm thicknesses, with 2–3 and 5–8 reuse options.",
    image: "/products/wood-boards.png",
    featured: true,
  },
  {
    slug: "mdf-board",
    name: "MDF Board",
    detail: "3mm, 6mm, 9mm, 12mm, 16mm",
    description: "Medium-density fibre board in melamine, plain, MR and FR options. Available thicknesses: 3mm, 6mm, 9mm, 12mm, 15mm and 18mm.",
    image: "/products/wood-boards.png",
    featured: true,
  },
  {
    slug: "whitewood",
    name: "Whitewood",
    detail: "Sizes: 1x4x13ft, 2x2x13ft, etc.",
    description: "Quality whitewood timber supplied in practical sizes including 1×4×13ft, 2×2×13ft, 3×3×13ft and 4×4×13ft.",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    slug: "gypsum-accessories",
    name: "Gypsum Accessories",
    detail: "Screws, Joint Tape, Anchors",
    description: "Gypsum and channel screws, joint tape, joint compound, ceiling anchor bolts, wire anchors and other installation accessories.",
    image: "/products/construction-supplies.png",
    featured: true,
  },
  {
    slug: "ceiling-suspension",
    name: "Ceiling Suspension",
    detail: "Spring Tee, U Channel, Main Tee",
    description: "Spring tee, U channel, main channel, 60 and 120 cross tees, main tee and wall angle systems.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    slug: "gypsum-aluminium-tiles",
    name: "Gypsum & Aluminium Tiles",
    detail: "60×60cm, 60×120cm & custom sizes",
    description: "Ceiling tiles in 60×60cm and 60×120cm formats, plus customized sizes for gypsum and aluminium tile requirements.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "tile-glue-grout-silicon",
    name: "Tile Glue, Grout & Silicon",
    detail: "Waterproofing & construction chemicals",
    description: "Tile glue, grout, silicon, waterproofing and construction chemicals from brands including Mapei, Weber, Fosroc, Laticrete and Rak.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    slug: "access-panels",
    name: "Access Panels",
    detail: "Standard & customized sizes",
    description: "Standard and customized access panels in 20×20, 30×30, 40×40, 45×45, 50×50, 60×60 and 60×120cm sizes.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "power-hand-tools",
    name: "Power & Hand Tools",
    detail: "Stanley, Dewalt, Uken & more",
    description: "Professional tools from Stanley, DeWalt, Uken, Clarke and Bosch for construction, maintenance and site work.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    slug: "cement-sand-aggregate",
    name: "Cement, Sand & Aggregate",
    detail: "OPC, PPC, Black & White Sand",
    description: "UltraTech and RAK cement, including OPC and PPC, plus black sand, white sand and aggregate.",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    slug: "electrical",
    name: "Electrical",
    detail: "Conduits, cables, switches & lighting",
    description: "DD PVC conduit pipes, elbows, sockets, cables, switches, sockets, downlights, spotlights, tube lights and insulation tapes.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    detail: "PPR & UPVC pipes and fittings",
    description: "PPR and UPVC pipes and fittings for hot, cold and general water supply systems.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "paints",
    name: "Paints",
    detail: "Jotun, National Paints, Berger",
    description: "Jotun, National Paints and Asian Paints Berger for residential, commercial and industrial finishing.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "cement-boards",
    name: "Cement Boards",
    detail: "Calcium silicate, 6mm – 15mm",
    description: "Calcium silicate boards available in 6mm, 9mm, 12mm and 15mm sizes.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "hardware-consumables",
    name: "Hardware & Consumables",
    detail: "Tapes, nails, bolts, brushes & more",
    description: "Polythene rolls, protection sheets, corrugated rolls, masking tapes, steel nails, wire nails, nuts, bolts, brushes, rollers and spray paints.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
  },
]

export const featuredProducts = products.filter((product) => product.featured)
