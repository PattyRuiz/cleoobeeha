import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5215530702640?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20Cleoo%20Beeha"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-gold shadow-gold transition-transform hover:scale-110"
      aria-label="Chat por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
