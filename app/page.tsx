"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Clock,
  Headset,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PackageCheck,
  Phone,
  ShieldCheck,
  Tags,
  Truck,
  X,
} from "lucide-react"
import { featuredProducts } from "@/lib/products"
import { contact } from "@/lib/contact"

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202026%2C%2011_41_55%20AM-5C3CPqvcEqLXwrBN7MUogs2QK84vpX.png"
const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202026%2C%2011_57_05%20AM-CkgwJuGUJejhTUm7NeI0EyDLA6sYHd.png"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const heroHighlights = [
  { icon: ShieldCheck, label: "Wide Range", sub: "of Products" },
  { icon: BadgeCheck, label: "Trusted Brands", sub: "& Quality" },
  { icon: PackageCheck, label: "Competitive", sub: "Pricing" },
  { icon: Truck, label: "Fast & Reliable", sub: "Supply" },
]

const whyChooseUs = [
  { icon: BadgeCheck, title: "Quality Materials", text: "Sourced from trusted brands" },
  { icon: Tags, title: "Competitive Prices", text: "Best value for every project" },
  { icon: Truck, title: "Fast Delivery", text: "Reliable supply across UAE" },
  { icon: Boxes, title: "Bulk Supply Available", text: "Large orders for any site" },
  { icon: ShieldCheck, title: "Trusted Brands", text: "Knauf, Jotun, DeWalt & more" },
  { icon: Headset, title: "Professional Service", text: "Expert assistance anytime" },
]

const stats = [
  { value: "15+", label: "Product Categories" },
  { value: "100+", label: "Trusted Brands" },
  { value: "500+", label: "Projects Supplied" },
  { value: "UAE", label: "Wide Distribution" },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#10285d]">
      <header className="sticky top-0 z-50 border-b border-[#e8eef7] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:h-[78px] sm:px-6 lg:px-10">
          <a href="#home" className="flex min-w-0 items-center gap-2" aria-label="NVS Star Building Materials Trading LLC">
            <Image src={logo} alt="NVS Star logo" width={92} height={86} className="h-[44px] w-[52px] shrink-0 object-contain sm:h-[62px] sm:w-[72px]" unoptimized />
            <span className="block min-w-0 leading-[1.1]">
              <span className="block truncate text-[9px] font-bold text-[#df3c18] sm:text-[11px]">شركة نجمة ان في اس لمواد البناء</span>
              <strong className="block text-[10px] font-extrabold tracking-tight text-[#063a91] sm:text-[13px] xl:text-[15px]">NVS STAR BUILDING MATERIALS TRADING LLC.</strong>
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 text-[14px] font-semibold md:flex lg:gap-8">
            {navLinks.map((link, index) => <a key={link.label} className={`nav-link${index === 0 ? " active" : ""}`} href={link.href}>{link.label}</a>)}
          </nav>
          <a href={contact.phoneHref} className="ml-6 hidden items-center gap-2 whitespace-nowrap text-sm font-bold lg:flex"><Phone size={18} fill="currentColor" /> {contact.phoneDisplay}</a>
          <button onClick={() => setMenuOpen((open) => !open)} className="ml-auto shrink-0 rounded-md p-2 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#e8eef7] bg-white px-4 pb-4 md:hidden">
            {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-[#eef3f9] py-3 font-semibold text-[#10285d] hover:text-[#ff7411]">{link.label}</a>)}
            <a href={contact.phoneHref} className="mt-3 flex items-center gap-2 font-bold"><Phone size={18} fill="currentColor" /> {contact.phoneDisplay}</a>
          </nav>
        )}
      </header>

      <section id="home" className="hero relative overflow-hidden">
        <Image src={heroImage} alt="Dubai skyline and building materials at a construction site" fill priority className="object-cover object-center" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062552]/95 via-[#092d5c]/80 to-[#092d5c]/30 sm:to-[#092d5c]/10" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col justify-center px-5 py-12 sm:px-6 sm:py-14 lg:px-20">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 sm:mb-4 sm:text-xs sm:tracking-[0.48em]">Building a stronger tomorrow</p>
          <h1 className="max-w-[650px] text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"><span className="block">Your Trusted Partner in</span><span className="block text-[#ff8a1d]">Building Materials</span></h1>
          <p className="mt-4 max-w-[600px] text-sm leading-6 text-white/90 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">High quality building materials for residential, commercial and industrial projects across UAE. Reliable supply. Competitive prices. Delivered on time.</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"><a href="/products" className="orange-button px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-base">Explore Products <ArrowRight size={16} /></a></div>
          <div className="mt-8 grid max-w-[650px] grid-cols-2 gap-y-4 border-t border-white/25 pt-5 text-white sm:mt-14 sm:grid-cols-4 sm:pt-6">
            {heroHighlights.map((item) => <div key={item.label} className="flex items-center gap-2 sm:justify-center sm:gap-3 sm:border-r sm:border-white/20 sm:last:border-0"><item.icon className="size-6 shrink-0 sm:size-7" /><span className="text-xs font-semibold leading-5">{item.label}<br />{item.sub}</span></div>)}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10"><div><p className="section-kicker">Our products <span /></p><h2 className="section-title">Building Materials for Every Need</h2><p className="mt-2 text-sm text-[#607397] sm:text-base">Explore our wide range of high quality building materials for residential, commercial and industrial projects.</p></div><a href="/products" className="outline-blue-button">View All Products <ArrowRight size={16} /></a></div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <article key={product.slug} className="product-card flex flex-col">
              <div className="relative h-28 overflow-hidden bg-[#eaf1f8] sm:h-32"><Image src={product.image} alt={product.name} fill className="object-cover" unoptimized /></div>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="text-sm font-bold text-[#10285d] sm:text-base">{product.name}</h3>
                <p className="mt-1 flex-1 text-xs leading-5 text-[#607397]">{product.detail}</p>
                <a href={`/products#${product.slug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#005bd4] sm:text-sm">View Products <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#f5f9fd] px-4 py-14 sm:px-6 sm:py-20 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <p className="section-kicker">About NVS <span /></p>
            <h2 className="section-title">Materials that move <span>projects forward.</span></h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#607397] sm:text-base sm:leading-8">
              <p>NVS Star Building Materials Trading LLC is a trusted supplier of high quality building materials for all types of construction and interior works.</p>
              <p>We provide a wide range of products including gypsum boards, ceiling systems, plywood, hardware, tools, paints, plumbing, electrical and construction accessories.</p>
              <p>We are committed to quality, reliability and customer satisfaction.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#dce7f3] bg-white p-5 shadow-sm sm:p-8">
                <strong className="text-3xl text-[#ff7411] sm:text-4xl">{stat.value}</strong>
                <p className="mt-2 text-sm font-semibold sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Why choose us" className="marquee border-y border-[#e3edf8] bg-[#edf5fc] py-6 sm:py-8">
        <div className="marquee-track">
          {[...whyChooseUs, ...whyChooseUs].map((item, index) => (
            <div key={`${item.title}-${index}`} aria-hidden={index >= whyChooseUs.length} className="flex shrink-0 items-center gap-4 border-r border-[#cadbef] px-6 sm:px-10">
              <div className="rounded-full bg-white p-3 text-[#0956bd] shadow-sm"><item.icon size={25} /></div>
              <div className="whitespace-nowrap"><p className="font-bold">{item.title}</p><p className="text-xs text-[#607397]">{item.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#062552] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff9a36]">Let&apos;s build together</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">Ready to start your project?</h2>
              <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-base">Talk to our team for product enquiries, quotations and dependable building material supply across the UAE.</p>
            </div>          </div>

          <div className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <li><a href={contact.phoneHref} className="flex items-center gap-4 hover:text-[#ff9a36]"><span className="contact-icon"><Phone size={18} /></span><span><span className="block text-xs text-white/60">Phone</span><span className="font-semibold">{contact.phoneDisplay}</span></span></a></li>
                <li><a href={`mailto:${contact.email}`} className="flex items-center gap-4 break-all hover:text-[#ff9a36]"><span className="contact-icon"><Mail size={18} /></span><span><span className="block text-xs text-white/60">Email</span><span className="font-semibold">{contact.email}</span></span></a></li>
                <li><a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#ff9a36]"><span className="contact-icon"><MapPin size={18} /></span><span><span className="block text-xs text-white/60">Location</span><span className="font-semibold">{contact.addressLine1}<br />{contact.addressLine2}</span></span></a></li>
                <li className="flex items-center gap-4"><span className="contact-icon"><Clock size={18} /></span><span><span className="block text-xs text-white/60">Working Hours</span><span className="font-semibold">{contact.workingDays} : {contact.workingHours}</span></span></li>
              </ul>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-[560px]">
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5b]"><MessageCircle size={18} /> Chat on WhatsApp</a>
                <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Navigation size={18} /> Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#031a3b] px-4 py-8 text-sm text-white/65 sm:px-6 lg:px-20"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-3 md:flex-row"><p>© 2026 NVS Star Building Materials Trading LLC.</p><p>Al Quoz Industrial Area 2, Dubai, U.A.E. · {contact.phoneDisplay}</p></div></footer>
    </main>
  )
}
