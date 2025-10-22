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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-mesh" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight">
                Building Tomorrow's
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Automotive Engineers
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              The Bay Area Automotive Engineering Council empowers high school students through hands-on learning, mentorship, and real-world engineering challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/about">
                <Button variant="hero" size="lg" className="group text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-base">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in group cursor-pointer" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-500 rounded-full" />
                </div>
                <div className="text-muted-foreground text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">What We Offer</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for high school automotive engineering programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 relative">
                    <feature.icon className="h-14 w-14 text-primary group-hover:text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-accent/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Ready to Join Our <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Community</span>?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, educator, or industry partner, there's a place for you in BAAEC.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base group">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
