import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Magazine Style */}
      <section className="bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[70vh]">
            {/* Left - Editorial Text */}
            <div className="flex flex-col justify-center px-8 md:px-16 py-16">
              <span className="text-sky-600 text-sm font-medium tracking-widest uppercase mb-4">
                Distribution Premium
              </span>
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                L&apos;Art de la<br />
                <span className="font-semibold">Tech Wholesale</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Depuis 2016, Shopitiv selectionne les meilleurs produits
                electroniques pour les revendeurs les plus exigeants d&apos;Europe.
              </p>
              <div className="flex gap-4">
                <Link href="/products" className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  Decouvrir
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-gray-300 text-gray-700 font-medium hover:border-gray-900 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            {/* Right - Feature Card */}
            <div className="bg-sky-600 flex items-center justify-center p-12">
              <div className="text-white text-center">
                <div className="text-8xl font-light mb-4">8+</div>
                <div className="text-xl font-light tracking-wide">Annees d&apos;Excellence</div>
                <div className="mt-8 grid grid-cols-2 gap-8 text-left">
                  <div>
                    <div className="text-3xl font-semibold">3,200+</div>
                    <div className="text-sky-200 text-sm">Produits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">580+</div>
                    <div className="text-sky-200 text-sm">Partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sky-600 text-sm tracking-widest uppercase">Collections</span>
              <h2 className="text-3xl font-light text-gray-900 mt-2">Nos Categories</h2>
            </div>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 border-b border-gray-300 pb-1">
              Voir tout
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Audio Premium", desc: "Enceintes et casques haut de gamme", items: "680+", bg: "bg-stone-100" },
              { name: "Energie Mobile", desc: "Batteries et chargeurs rapides", items: "450+", bg: "bg-sky-50" },
              { name: "Connectique", desc: "Cables et accessoires essentiels", items: "890+", bg: "bg-stone-100" },
            ].map((cat, i) => (
              <Link key={i} href="/products" className={`${cat.bg} p-8 group hover:shadow-lg transition-shadow`}>
                <span className="text-sky-600 text-xs tracking-widest uppercase">{cat.items} articles</span>
                <h3 className="text-2xl font-light text-gray-900 mt-2 mb-3 group-hover:text-sky-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              { name: "Wearables", desc: "Montres connectees et trackers fitness", items: "340+", bg: "bg-sky-50" },
              { name: "Accessoires Tech", desc: "Protection et personnalisation", items: "1,100+", bg: "bg-stone-100" },
            ].map((cat, i) => (
              <Link key={i} href="/products" className={`${cat.bg} p-8 group hover:shadow-lg transition-shadow`}>
                <span className="text-sky-600 text-xs tracking-widest uppercase">{cat.items} articles</span>
                <h3 className="text-2xl font-light text-gray-900 mt-2 mb-3 group-hover:text-sky-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Editorial Layout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm tracking-widest uppercase">Services</span>
            <h2 className="text-3xl font-light mt-2">L&apos;Experience Shopitiv</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-gray-700">
            {[
              { title: "Livraison Express", desc: "24-48h partout en Europe avec suivi complet" },
              { title: "Paiement Flexible", desc: "Payez a la livraison, sans engagement initial" },
              { title: "Prix Degressifs", desc: "Remises volume adaptees a votre activite" },
              { title: "Qualite Certifiee", desc: "Chaque produit verifie avant expedition" },
            ].map((s, i) => (
              <div key={i} className="bg-gray-900 p-8 text-center">
                <h3 className="font-medium mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <svg className="w-12 h-12 text-sky-300 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-8">
            &quot;Shopitiv comprend les besoins des revendeurs francais. Qualite, rapidite, et service impeccable.&quot;
          </blockquote>
          <cite className="text-gray-500 not-italic">
            — Pierre D., Gerant de boutique, Lyon
          </cite>
        </div>
      </section>

      {/* CTA - Magazine Style */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-sky-200 text-sm tracking-widest uppercase">Commencez</span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-4 mb-6">
            Pret a Collaborer?
          </h2>
          <p className="text-sky-100 mb-10 text-lg">
            Demandez votre devis personnalise. Pas de minimum de commande pour les nouveaux clients.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-gray-900 font-medium hover:bg-sky-50 transition-colors">
            Demander un Devis
          </Link>
          <p className="text-sky-200 text-sm mt-8">
            contact@shopitiv.fr | Lun-Ven 9h-18h
          </p>
        </div>
      </section>
    </div>
  );
}
