import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionComponents";
import { X } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";
import seniorHousing from "@/assets/senior-housing.jpg";
import familyHousing from "@/assets/family-housing.jpg";
import teamInspection from "@/assets/team-inspection.jpg";
import propertyTownhomes from "@/assets/property-townhomes.jpg";
import propertyMixedUse from "@/assets/property-mixed-use.jpg";

const galleryCategories = ["All", "Properties", "Community", "Team", "Improvements"];

const galleryImages = [
  { src: heroProperty, category: "Properties", title: "Meadowbrook Community" },
  { src: seniorHousing, category: "Properties", title: "Sunrise Senior Living" },
  { src: familyHousing, category: "Community", title: "Family Play Area" },
  { src: teamInspection, category: "Team", title: "Property Inspection" },
  { src: propertyTownhomes, category: "Properties", title: "Heritage Townhomes" },
  { src: propertyMixedUse, category: "Properties", title: "Urban Mixed-Use" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-semibold uppercase tracking-wider mb-6">Gallery</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Properties & Communities</h1>
            <p className="text-lg text-primary-foreground/90">Explore our well-maintained properties and thriving communities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="group cursor-pointer card-hover" onClick={() => setSelectedImage(image.src)}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground hover:text-accent" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-[90vh] rounded-lg" />
        </div>
      )}
    </Layout>
  );
}
