import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { cn } from "@/lib/utils";
import heroSolar from "@/assets/hero-solar.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";
import residentialSolar from "@/assets/residential-solar.jpg";
import installationTeam from "@/assets/installation-team.jpg";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";
import solarStreetLight from "@/assets/solar-street-light.jpg";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const galleryItems = [
  { id: 1, category: "Residential", image: residentialSolar },
  { id: 2, category: "Industrial", image: commercialSolar, title:"" , description: "" },
  { id: 3, category: "Residential", image: "./img/img1.jpeg", title: "", description: "" },
  { id: 4, category: "Commercial", image: "./img/img3.jpg", title: "", description: "" },
  { id: 5, category: "Commercial", image:  "./img/img4.jpg", title: "", description: "" },
  { id: 6, category: "Commercial", image:  "./img/img5.jpeg", title: "", description: "" },
  { id: 7, category: "Commercial", image:  "./img/img6.jpeg", title: "", description: "" }, 
    { id: 8, category: "Commercial", image:  "./img/img7.jpeg", title: "", description: "" }, 
      { id: 9, category: "Commercial", image:  "./img/img8.jpeg", title: "", description: "" }, 
        { id: 10, category: "Commercial", image:  "./img9.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 001.jpeg", title: "", description: "" }, 
      { id: 10, category: "Residential", image:  "./img 002.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 003.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 004.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 005.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 006.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 007.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 008.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 009.jpeg", title: "", description: "" }, 
    { id: 10, category: "Residential", image:  "./img 0010.jpeg", title: "", description: "" }, 
     { id: 10, category: "Commercial", image:  "./img 0011.jpeg", title: "", description: "" }, 
    { id: 10, category: "Commercial", image:  "./img 0012.jpeg", title: "", description: "" }, 



];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project Gallery
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of solar installations across India - from residential 
              rooftops to large commercial and industrial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all",
                  activeCategory === category
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-background">
                      {item.title}
                    </h4>
                    <p className="text-background/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-center">
              <h4 className="font-heading text-xl font-semibold text-background">
                {selectedImage.title}
              </h4>
              <p className="text-background/80">
                {selectedImage.description}
              </p>
            </div>
            <button
              className="absolute -top-12 right-0 text-background text-3xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <CTASection />
    </Layout>
  );
};

export default Gallery;
