import heroImage from "@/assets/hero-products.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Decorative gold lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-primary" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-primary" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-primary" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Belleza Consciente & Transformación
          </p>
          <h1 className="mb-6 font-display text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl">
            Despierta tu{" "}
            <span className="text-gold-gradient font-semibold italic">
              reina interior
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-body text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            Cosméticos funcionales inspirados en la sabiduría de Cleopatra y la pureza de los productos apícolas. 
            Más que belleza: un camino de transformación personal.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#productos"
              className="rounded-full gradient-gold px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition-all hover:opacity-90"
            >
              Explorar Productos
            </a>
            <a
              href="#transformacion"
              className="rounded-full border border-primary/30 px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:border-primary/60"
            >
              Tu Transformación
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
            <img
              src={heroImage}
              alt="Productos cosméticos Cleoo Beeha con miel y oro"
              className="relative w-full max-w-lg rounded-2xl object-cover shadow-card mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
