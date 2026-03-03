import productSerum from "@/assets/product-serum.png";
import productLipbalm from "@/assets/product-lipbalm.png";
import productMask from "@/assets/product-mask.png";
import productMoisturizer from "@/assets/product-moisturizer.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5215530702640";

const products = [
  {
    id: 1,
    name: "Sérum Facial de Miel",
    description: "Sérum regenerador con miel pura y vitamina E. Hidratación profunda y luminosidad natural.",
    price: "$580 MXN",
    image: productSerum,
    featured: true,
  },
  {
    id: 2,
    name: "Bálsamo Labial de Cera de Abeja",
    description: "Nutrición intensa para tus labios con cera de abeja orgánica y manteca de karité.",
    price: "$180 MXN",
    image: productLipbalm,
  },
  {
    id: 3,
    name: "Mascarilla de Propóleo",
    description: "Mascarilla purificante y regeneradora con propóleo y miel de manuka.",
    price: "$450 MXN",
    image: productMask,
  },
  {
    id: 4,
    name: "Crema de Jalea Real",
    description: "Hidratante premium con jalea real para una piel firme y radiante.",
    price: "$650 MXN",
    image: productMoisturizer,
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const whatsappMessage = encodeURIComponent(
    `¡Hola! Me interesa el producto: ${product.name} (${product.price})`
  );

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-gold ${product.featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`overflow-hidden ${product.featured ? 'aspect-[4/3]' : 'aspect-square'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        {product.featured && (
          <span className="mb-3 inline-block rounded-full gradient-gold px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
            Destacado
          </span>
        )}
        <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
          {product.name}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">
            {product.price}
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:gradient-gold hover:text-primary-foreground hover:border-transparent"
          >
            <MessageCircle size={14} />
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Catálogo
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Nuestros <span className="text-gold-gradient italic font-semibold">Productos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Cosméticos artesanales con ingredientes apícolas de la más alta calidad. 
            Cada producto es una experiencia de belleza consciente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
