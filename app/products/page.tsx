import Link from "next/link"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"
import { products } from "@/lib/products"
import { contact } from "@/lib/contact"

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f9fd] text-[#10285d]">
      <header className="border-b border-[#e2ebf5] bg-white px-4 py-4 sm:px-6 sm:py-5 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight">NVS <span className="text-[#ff7411]">STAR</span> <span className="hidden text-sm font-semibold text-[#526789] sm:inline">Building Materials</span></Link>
          <div className="flex items-center gap-4 text-sm font-semibold sm:gap-5"><Link href="/" className="hover:text-[#ff7411]">Home</Link><span className="text-[#ff7411]">Products</span><a href={contact.phoneHref} className="hidden items-center gap-2 md:flex"><Phone size={16} /> {contact.phoneDisplay}</a></div>
        </div>
      </header>
      <section className="bg-[#062552] px-4 py-12 text-white sm:px-6 sm:py-20 lg:px-20"><div className="mx-auto max-w-[1280px]"><Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white sm:mb-8"><ArrowLeft size={16} /> Back to home</Link><p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ff9a36]">Our products</p><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-7xl">Building materials for every need.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">Explore quality products from trusted brands for residential, commercial and industrial projects across the UAE.</p></div></section>
      <section className="mx-auto grid max-w-[1280px] gap-5 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-20">
        {products.map((product) => (
          <article key={product.slug} id={product.slug} className="flex scroll-mt-6 flex-col overflow-hidden rounded-2xl border border-[#dce8f5] bg-white shadow-sm">
            <img src={product.image} alt={`${product.name} building material`} className="h-48 w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="mb-5 h-1 w-12 rounded-full bg-[#ff7411]" />
              <h2 className="text-xl font-bold sm:text-2xl">{product.name}</h2>
              <p className="mt-3 flex-1 leading-7 text-[#607397]">{product.description}</p>
              <a href={`https://wa.me/971558863912?text=${encodeURIComponent(`Hello NVS Star, I would like to enquire about ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" className="orange-button mt-5 px-4 py-3 text-sm"><MessageCircle size={16} /> Enquire Now</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
