import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Users, Trophy, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-engineering.jpg";

const Index = () => {
  const features = [
    {
      icon: Wrench,
      title: "Hands-On Learning",
      description: "Students work on real automotive projects, gaining practical engineering experience.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Industry professionals guide students through complex engineering challenges.",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Clubs compete in regional and national engineering competitions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Fostering creative thinking and cutting-edge automotive solutions.",
    },
  ];

  const stats = [
    { number: "25+", label: "High School Clubs" },
    { number: "500+", label: "Active Students" },
    { number: "15", label: "Industry Partners" },
    { number: "$250K", label: "Annual Funding" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Building Tomorrow's Automotive Engineers
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              The Bay Area Automotive Engineering Council empowers high school students through hands-on learning, mentorship, and real-world engineering challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button variant="hero" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for high school automotive engineering programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're a student, educator, or industry partner, there's a place for you in BAAEC.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="bg-accent-foreground text-accent hover:scale-105">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
