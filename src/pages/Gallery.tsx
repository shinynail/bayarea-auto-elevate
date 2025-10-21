import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Workshops", "Competitions", "Events", "Projects"];

  const galleryItems = [
    {
      title: "Electric Vehicle Workshop",
      category: "Workshops",
      description: "Students learning about EV battery systems and charging infrastructure",
      year: "2024",
    },
    {
      title: "Regional Competition Victory",
      category: "Competitions",
      description: "Palo Alto High team wins first place at Bay Area Engineering Challenge",
      year: "2024",
    },
    {
      title: "Annual BAAEC Summit",
      category: "Events",
      description: "Over 200 students gather for the annual automotive engineering summit",
      year: "2023",
    },
    {
      title: "Autonomous Vehicle Project",
      category: "Projects",
      description: "Lowell High students develop scale autonomous vehicle prototype",
      year: "2024",
    },
    {
      title: "Industry Partnership Day",
      category: "Events",
      description: "Students meet with Tesla, Lucid, and Rivian engineers",
      year: "2024",
    },
    {
      title: "3D Printing Lab Opening",
      category: "Workshops",
      description: "New fabrication facility opens at Mission San Jose High",
      year: "2023",
    },
    {
      title: "Solar Car Challenge",
      category: "Competitions",
      description: "Teams compete in renewable energy vehicle race",
      year: "2024",
    },
    {
      title: "Custom Engine Build",
      category: "Projects",
      description: "Berkeley High students restore and modify classic car engine",
      year: "2023",
    },
    {
      title: "Coding Bootcamp",
      category: "Workshops",
      description: "Students learn vehicle software and embedded systems programming",
      year: "2024",
    },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Capturing moments of innovation, learning, and achievement across our member clubs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-16 bg-background/95 backdrop-blur-md border-b border-border z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🔧</div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Workshops Held</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Competitions</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-4xl font-bold text-accent mb-2">75+</div>
                <div className="text-muted-foreground">Completed Projects</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted-foreground">Annual Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
