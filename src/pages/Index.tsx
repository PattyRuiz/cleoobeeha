import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TransformationSection from "@/components/TransformationSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <TransformationSection />
      <CommunitySection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
