"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Headphones,
  Menu,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  Users,
  X,
} from "lucide-react"

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202026%2C%2011_41_55%20AM-5C3CPqvcEqLXwrBN7MUogs2QK84vpX.png"
const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202026%2C%2011_57_05%20AM-CkgwJuGUJejhTUm7NeI0EyDLA6sYHd.png"
const warehouseImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202026%2C%2011_19_17%20AM-MZoar9o9Kvoe2mMkj7Yo3tf8Ut1Hvs.png"

const products = [
  { name: "Gypsum Boards", detail: "RG, MR & FR", image: "/products/gypsum-boards.png" },
  { name: "Metal Profiles", detail: "Channels, Angles, Studs, Tracks", image: heroImage },
  { name: "Marine Plywood", detail: "Film faced, 12mm, 15mm, 18mm", image: warehouseImage },
  { name: "MDF Board", detail: "3mm, 6mm, 9mm, 12mm, 16mm", image: heroImage },
  { name: "Whitewood", detail: "Sizes: 1x4x13ft, 2x2x13ft, etc.", image: warehouseImage },
  { name: "Gypsum Accessories", detail: "Screws, Joint Tape, Anchors", image: warehouseImage },
  { name: "Ceiling Suspension", detail: "Spring Tee, U Channel, Main Tee", image: heroImage },
  { name: "Tile Glue & Silicon", detail: "Waterproofing & construction chemicals", image: warehouseImage },
  { name: "Power & Hand Tools", detail: "Stanley, Dewalt, Uken & more", image: heroImage },
  { name: "Cement, Sand & Aggregate", detail: "OPC, PPC, Black & White Sand", image: warehouseImage },
]

const benefits = [
  { icon: BadgeCheck, title: "Quality Products", text: "Sourced from trusted brands" },
  { icon: Users, title: "Serving UAE Market", text: "Residential, Commercial & Industrial" },
  { icon: Truck, title: "On-Time Delivery", text: "Reliable supply across UAE" },
  { icon: Headphones, title: "Dedicated Support", text: "Get expert assistance anytime" },
]

const translations = {
  en: { home: "Home", products: "Products", about: "About Us", contact: "Contact", quote: "Get a Quote", eyebrow: "Building a stronger tomorrow", title: "Your Trusted Partner in", titleAccent: "Building Materials", description: "High quality building materials for residential, commercial and industrial projects across UAE. Reliable supply. Competitive prices. Delivered on time.", explore: "Explore Products", language: "Language" },
  ar: { home: "الرئيسية", products: "المنتجات", about: "من نحن", contact: "اتصل بنا", quote: "اطلب عرض سعر", eyebrow: "نبني غداً أقوى", title: "شريكك الموثوق في", titleAccent: "مواد البناء", description: "مواد بناء عالية الجودة لكل مشروع. توريد موثوق وأسعار تنافسية وتسليم في جميع أنحاء الإمارات.", explore: "استكشف المنتجات", language: "اللغة" },
}

export default function Page() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const t = translations[language]

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-white text-[#10285d]">
      <header className="sticky top-0 z-50 border-b border-[#e8eef7] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center gap-8 px-5 lg:px-10">
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="NVS Star home">
            <Image src={logo} alt="NVS Star Building Materials Trading LLC" width={178} height={86} className="h-[58px] w-[112px] object-contain object-center sm:h-[65px] sm:w-[136px]" unoptimized />
            <span className="hidden leading-tight sm:block"><strong className="block text-[15px] font-extrabold tracking-tight text-[#10285d]">NVS STAR</strong><span className="text-[11px] font-medium text-[#607397]">Building Materials</span></span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-8 text-[14px] font-semibold lg:flex">
            <a className="nav-link active" href="#home">{t.home}</a>
            <a className="nav-link" href="/products">{t.products} <ChevronDown size={14} /></a>
            <a className="nav-link" href="#about">{t.about}</a>
            <a className="nav-link" href="#contact">{t.contact}</a>
          </nav>
          <div className="hidden items-center gap-4 xl:flex">
            <label className="flex items-center gap-2 rounded-lg border border-[#d9e5f4] bg-[#f5f9fe] px-3 py-2 text-xs font-semibold text-[#526789]" aria-label={t.language}>
              <span>{language === "en" ? "EN" : "ع"}</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "ar")} className="bg-transparent outline-none" aria-label={t.language}>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </label>
            <div className="flex h-10 w-[220px] items-center gap-2 rounded-lg border border-[#d9e5f4] bg-[#f5f9fe] px-3 text-xs text-[#526789]"><Search size={17} /><span>Search products...</span></div>
            <div className="flex items-center gap-2 whitespace-nowrap text-sm font-bold"><Phone size={18} fill="currentColor" /> +971 558 863 912</div>
          </div>
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "ar")} className="rounded-md border border-[#d9e5f4] bg-[#f5f9fe] px-2 py-2 text-xs font-semibold text-[#10285d]" aria-label={t.language}>
              <option value="en">EN</option>
              <option value="ar">عربي</option>
            </select>
            <button className="rounded-md p-2" aria-label="Open menu"><Menu /></button>
          </div>
        </div>
      </header>

      <section id="home" className="hero relative overflow-hidden">
        <Image src={heroImage} alt="Dubai skyline and building materials at a construction site" fill priority className="object-cover object-center" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062552]/95 via-[#092d5c]/80 to-[#092d5c]/10" />
        <div className="relative mx-auto flex min-h-[430px] max-w-[1440px] flex-col justify-center px-6 py-14 lg:px-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.48em] text-white/80">{t.eyebrow}</p>
          <h1 className="max-w-[650px] text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl">{t.title} <span className="text-[#ff8a1d]">{t.titleAccent}</span></h1>
          <p className="mt-6 max-w-[600px] text-lg leading-8 text-white/90 md:text-xl">{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="/products" className="orange-button px-7 py-4">{t.explore} <ArrowRight size={18} /></a></div>
          <div className="mt-14 grid max-w-[650px] grid-cols-2 gap-y-6 border-t border-white/25 pt-6 text-white sm:grid-cols-4">
            {[{icon: ShieldCheck, label:"Wide Range", sub:"of Products"},{icon: BadgeCheck, label:"Trusted Brands", sub:"& Quality"},{icon: PackageCheck, label:"Competitive", sub:"Pricing"},{icon: Truck, label:"Fast & Reliable", sub:"Supply"}].map((item) => <div key={item.label} className="flex items-center gap-3 border-r border-white/20 last:border-0 sm:justify-center"><item.icon size={29} /><span className="text-center text-xs font-semibold leading-5">{item.label}<br />{item.sub}</span></div>)}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="section-kicker">Our products <span /></p><h2 className="section-title">Building Materials for Every Need</h2><p className="mt-2 text-base text-[#607397]">Explore our wide range of high quality building materials for residential, commercial and industrial projects.</p></div><a href="/products" className="outline-blue-button">View All Products <ArrowRight size={16} /></a></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{products.map((product) => <article key={product.name} className="product-card"><div className="relative h-28 overflow-hidden bg-[#eaf1f8]"><Image src={product.image} alt={product.name} fill className="object-cover" unoptimized /></div><div className="p-4"><h3 className="font-bold text-[#10285d]">{product.name}</h3><p className="mt-1 min-h-10 text-xs leading-5 text-[#607397]">{product.detail}</p><a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#005bd4]">View Products <ArrowRight size={14} /></a></div></article>)}</div>
      </section>

      <section id="about" className="bg-[#f5f9fd] px-6 py-20 lg:px-20"><div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_1.1fr]"><div><p className="section-kicker">About NVS <span /></p><h2 className="section-title">Materials that move <span>projects forward.</span></h2><p className="mt-6 text-base leading-8 text-[#607397]">NVS Star Building Materials Trading LLC is a trusted supplier of quality building materials based in Al Quoz Industrial Area 2, Dubai, U.A.E. We serve residential, commercial and industrial projects with reliable supply, competitive pricing and exceptional customer service.</p><div className="mt-8 grid grid-cols-2 gap-6"><div><strong className="text-3xl text-[#ff7411]">15+</strong><p className="mt-1 text-sm font-semibold">Product Categories</p></div><div><strong className="text-3xl text-[#ff7411]">100+</strong><p className="mt-1 text-sm font-semibold">Trusted Brands</p></div><div><strong className="text-3xl text-[#ff7411]">500+</strong><p className="mt-1 text-sm font-semibold">Projects Supplied</p></div><div><strong className="text-3xl text-[#ff7411]">UAE</strong><p className="mt-1 text-sm font-semibold">Wide Distribution</p></div></div></div><div className="relative min-h-[380px] overflow-hidden rounded-2xl"><Image src={warehouseImage} alt="NVS Star warehouse and building material stock" fill className="object-cover" unoptimized /><div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-lg"><div className="flex items-center gap-3"><Building2 className="text-[#ff7411]" /><div><p className="font-bold">Our Facility</p><p className="text-xs text-[#607397]">Al Quoz Industrial Area 2, Dubai</p></div></div></div></div></div></section>

      <section className="border-y border-[#e3edf8] bg-[#edf5fc] px-6 py-8 lg:px-20"><div className="mx-auto grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <div key={benefit.title} className="flex items-center gap-4 border-r border-[#cadbef] last:border-0"><div className="rounded-full bg-white p-3 text-[#0956bd] shadow-sm"><benefit.icon size={25} /></div><div><p className="font-bold">{benefit.title}</p><p className="text-xs text-[#607397]">{benefit.text}</p></div></div>)}</div></section>

      <section id="contact" className="bg-[#062552] px-6 py-20 text-white lg:px-20"><div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff9a36]">Let&apos;s build together</p><h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Ready to start your project?</h2><p className="mt-4 max-w-xl text-white/75">Talk to our team for product enquiries, quotations and dependable building material supply across the UAE.</p></div><a href="tel:+971558863912" className="orange-button shrink-0 px-7 py-4">Contact Our Team <ArrowRight size={18} /></a></div></section>
      <footer className="bg-[#031a3b] px-6 py-8 text-sm text-white/65 lg:px-20"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-3 md:flex-row"><p>© 2026 NVS Star Building Materials Trading LLC.</p><p>Al Quoz Industrial Area 2, Dubai, U.A.E. · +971 558 863 912</p></div></footer>
    </main>
  )
}

function CloseIcon() { return <X /> }
