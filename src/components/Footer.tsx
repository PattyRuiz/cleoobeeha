import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold-gradient">
              Cleoo Beeha
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              Belleza consciente inspirada en la sabiduría ancestral de Cleopatra 
              y la pureza de los productos apícolas.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">
              Navegación
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {["Inicio", "Productos", "Transformación", "Comunidad"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace("ó", "o")}`}
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">
              Contacto
            </h4>
            <a
              href="https://wa.me/5215530702640"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 font-body text-sm text-primary transition-all hover:gradient-gold hover:text-primary-foreground hover:border-transparent"
            >
              <MessageCircle size={16} />
              WhatsApp: 55 3070 2640
            </a>
            <p className="mt-4 font-body text-xs text-muted-foreground">
              cleoobeeha.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cleoo Beeha. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
