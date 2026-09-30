import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"

const products = [
  ["Gypsum Boards", "RG, MR and FR boards from Knauf, Mada, United, Gyproc and Boral. Size: 1220 × 2440mm. Thickness: 9mm, 12.5mm and 15mm.", "/products/gypsum-boards.png"],
  ["Metal Profiles", "Furring channels, main channels, perimeter angles, studs and tracks. Brands include Knauf, Ultrasteel, Technics and Mada. Thickness: 0.35mm, 0.40mm, 0.5mm and 1mm.", "/products/metal-profiles.png"],
  ["Marine Plywood", "Film-faced marine plywood for construction applications. Available in 12mm, 15mm and 18mm thicknesses, with 2–3 and 5–8 reuse options.", "/products/wood-boards.png"],
  ["MDF Board", "Medium-density fibre board in melamine, plain, MR and FR options. Available thicknesses: 3mm, 6mm, 9mm, 12mm, 15mm and 18mm.", "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85"],
  ["Whitewood", "Quality whitewood timber supplied in practical sizes including 1×4×13ft, 2×2×13ft, 3×3×13ft and 4×4×13ft.", "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=85"],
  ["Gypsum Accessories", "Gypsum and channel screws, joint tape, joint compound, ceiling anchor bolts, wire anchors and other installation accessories.", "/products/construction-supplies.png"],
  ["Ceiling Suspension", "Spring tee, U channel, main channel, 60 and 120 cross tees, main tee and wall angle systems.", "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85"],
  ["Gypsum & Aluminium Tiles", "Ceiling tiles in 60×60cm and 60×120cm formats, plus customized sizes for gypsum and aluminium tile requirements.", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85"],
  ["Tile Glue, Grout & Silicon", "Tile glue, grout, silicon, waterproofing and construction chemicals from brands including Mapei, Weber, Fosroc, Laticrete and Rak.", "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=85"],
  ["Access Panels", "Standard and customized access panels in 20×20, 30×30, 40×40, 45×45, 50×50, 60×60 and 60×120cm sizes.", "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85"],
  ["Power & Hand Tools", "Professional tools from Stanley, DeWalt, Uken, Clarke and Bosch for construction, maintenance and site work.", "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=900&q=85"],
  ["Cement, Sand & Aggregate", "UltraTech and RAK cement, including OPC and PPC, plus black sand, white sand and aggregate.", "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=900&q=85"],
  ["Electrical", "DD PVC conduit pipes, elbows, sockets, cables, switches, sockets, downlights, spotlights, tube lights and insulation tapes.", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85"],
  ["Plumbing", "PPR and UPVC pipes and fittings for hot, cold and general water supply systems.", "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85"],
  ["Paints", "Jotun, National Paints and Asian Paints Berger for residential, commercial and industrial finishing.", "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85"],
  ["Cement Boards", "Calcium silicate boards available in 6mm, 9mm, 12mm and 15mm sizes.", "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=85"],
  ["Hardware & Consumables", "Polythene rolls, protection sheets, corrugated rolls, masking tapes, steel nails, wire nails, nuts, bolts, brushes, rollers and spray paints.", "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85"],
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f5f9fd] text-[#10285d]">
      <header className="border-b border-[#e2ebf5] bg-white px-6 py-5 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
          <Link href="/" className="text-lg font-extrabold tracking-tight">NVS <span className="text-[#ff7411]">STAR</span> <span className="hidden text-sm font-semibold text-[#526789] sm:inline">Building Materials</span></Link>
          <div className="flex items-center gap-5 text-sm font-semibold"><Link href="/" className="hover:text-[#ff7411]">Home</Link><span className="text-[#ff7411]">Products</span><a href="tel:+971558863912" className="hidden items-center gap-2 md:flex"><Phone size={16} /> +971 558 863 912</a></div>
        </div>
      </header>
      <section className="bg-[#062552] px-6 py-20 text-white lg:px-20"><div className="mx-auto max-w-[1280px]"><Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"><ArrowLeft size={16} /> Back to home</Link><p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ff9a36]">Our products</p><h1 className="mt-4 text-5xl font-extrabold md:text-7xl">Building materials for every need.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Explore quality products from trusted brands for residential, commercial and industrial projects across the UAE.</p></div></section>
      <section className="mx-auto grid max-w-[1280px] gap-5 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-20">{products.map(([name, detail, image]) => <article key={name} className="overflow-hidden rounded-2xl border border-[#dce8f5] bg-white shadow-sm"><img src={image} alt={`${name} building material`} className="h-48 w-full object-cover" loading="lazy" /><div className="p-7"><div className="mb-6 h-1 w-12 rounded-full bg-[#ff7411]" /><h2 className="text-2xl font-bold">{name}</h2><p className="mt-3 leading-7 text-[#607397]">{detail}</p></div></article>)}</section>
    </main>
  )
}
