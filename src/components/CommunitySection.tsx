import { MessageCircle, Users, Zap } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Growth Mindset
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Nuestra{" "}
            <span className="text-gold-gradient italic font-semibold">Comunidad</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Un espacio vivo donde mujeres se nutren mutuamente, comparten experiencias 
            y se preparan para invertir en su desarrollo integral.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Conexión Auténtica",
              desc: "Interactúa con mujeres que comparten tu visión de crecimiento y belleza consciente.",
            },
            {
              icon: Zap,
              title: "Debates & Crecimiento",
              desc: "Participa en conversaciones que expanden tu mente y nutren tu espíritu emprendedor.",
            },
            {
              icon: MessageCircle,
              title: "Mentoría Grupal",
              desc: "Accede a sesiones de orientación y acompañamiento en tu camino de transformación.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card/50 p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-gold"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5215530702640?text=¡Hola!%20Quiero%20unirme%20a%20la%20comunidad%20Cleoo%20Beeha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full gradient-gold px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
          >
            Únete a la Comunidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
