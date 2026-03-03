import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Transformación", href: "#transformacion" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-2xl font-bold tracking-wider text-gold-gradient">
          Cleoo Beeha
        </a>
        
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5215530702640"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full gradient-gold px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 md:block"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5215530702640"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full gradient-gold px-6 py-2.5 text-center font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
