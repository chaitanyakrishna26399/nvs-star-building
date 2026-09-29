import Link from "next/link"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"

const products = [
  ["Gypsum Boards", "RG, MR & FR boards for walls, ceilings and partitions."],
  ["Metal Profiles", "Channels, angles, studs and tracks for construction."],
  ["Marine Plywood", "Film-faced plywood in 12mm, 15mm and 18mm sizes."],
  ["MDF Board", "Reliable boards for interiors, furniture and fit-out."],
  ["Whitewood", "Quality timber in a range of practical sizes."],
  ["Gypsum Accessories", "Screws, joint tape, anchors and installation essentials."],
  ["Ceiling Suspension", "Spring tees, U channels and main tee systems."],
  ["Tiles & Chemicals", "Tile glue, grout, silicone and construction chemicals."],
  ["Power & Hand Tools", "Trusted tools for professional jobs and site work."],
  ["Cement & Aggregate", "OPC, PPC, black sand and essential aggregates."],
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
      <section className="mx-auto grid max-w-[1280px] gap-5 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-20">{products.map(([name, detail]) => <article key={name} className="rounded-2xl border border-[#dce8f5] bg-white p-7 shadow-sm"><div className="mb-6 h-1 w-12 rounded-full bg-[#ff7411]" /><h2 className="text-2xl font-bold">{name}</h2><p className="mt-3 min-h-14 leading-7 text-[#607397]">{detail}</p><a href="tel:+971558863912" className="mt-6 inline-flex items-center gap-2 font-bold text-[#005bd4]">Enquire now <ArrowRight size={16} /></a></article>)}</section>
    </main>
  )
}
