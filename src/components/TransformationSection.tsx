import mindfulnessImage from "@/assets/mindfulness-space.png";
import { BookOpen, Brain, Droplets, Heart, Sparkles, Target } from "lucide-react";

const habits = [
  { icon: Brain, title: "Meditación", desc: "Grabaciones guiadas para tu práctica diaria" },
  { icon: Sparkles, title: "Visualización", desc: "Ejercicios para manifestar tu mejor versión" },
  { icon: BookOpen, title: "Journaling", desc: "Escritura reflexiva para autoconocimiento" },
  { icon: Droplets, title: "Hidratación Consciente", desc: "Rituales de bienestar integral" },
  { icon: Heart, title: "Gratitud", desc: "Prácticas para cultivar abundancia" },
  { icon: Target, title: "Metas con Acción", desc: "De la intención a la transformación real" },
];

const TransformationSection = () => {
  return (
    <section id="transformacion" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Gimnasio de Mindfulness
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Tu Espacio de{" "}
            <span className="text-gold-gradient italic font-semibold">Transformación</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Más que una tienda: un santuario para tu crecimiento personal. 
            Cultiva hábitos que te transformen desde adentro hacia afuera.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
            <img
              src={mindfulnessImage}
              alt="Espacio de mindfulness y meditación"
              className="relative w-full rounded-2xl object-cover shadow-card"
              loading="lazy"
            />
          </div>

          {/* Habits Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {habits.map((habit) => (
              <div
                key={habit.title}
                className="group rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-gold"
              >
                <habit.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {habit.title}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {habit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reading & Workbooks */}
        <div className="mt-20 rounded-2xl border border-border bg-card/50 p-8 text-center md:p-12">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
            Lectura & Workbooks
          </h3>
          <p className="mx-auto mt-3 max-w-2xl font-body text-base text-muted-foreground">
            Accede a materiales descargables: workbooks, bitácoras y recomendaciones de lectura 
            diseñados para aplicar lo aprendido. Porque crecer no es solo leer, es transformar.
          </p>
          <a
            href="https://wa.me/5215530702640?text=¡Hola!%20Me%20interesan%20los%20workbooks%20y%20materiales%20de%20transformación%20personal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full gradient-gold px-8 py-3 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
          >
            Solicitar Materiales
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
