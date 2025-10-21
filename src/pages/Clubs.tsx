import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Clubs = () => {
  const clubs = [
    {
      name: "Palo Alto High School",
      location: "Palo Alto, CA",
      members: 45,
      established: "2018",
      focus: ["Electric Vehicles", "Robotics", "3D Design"],
    },
    {
      name: "Mission San Jose High School",
      location: "Fremont, CA",
      members: 38,
      established: "2019",
      focus: ["Engine Design", "CAD Modeling", "Fabrication"],
    },
    {
      name: "Lowell High School",
      location: "San Francisco, CA",
      members: 52,
      established: "2019",
      focus: ["Autonomous Systems", "AI Integration", "Sensors"],
    },
    {
      name: "Cupertino High School",
      location: "Cupertino, CA",
      members: 41,
      established: "2020",
      focus: ["Aerodynamics", "Performance Tuning", "Racing"],
    },
    {
      name: "Berkeley High School",
      location: "Berkeley, CA",
      members: 35,
      established: "2020",
      focus: ["Sustainability", "Alternative Fuels", "Green Tech"],
    },
    {
      name: "Mountain View High School",
      location: "Mountain View, CA",
      members: 48,
      established: "2021",
      focus: ["Software Engineering", "Vehicle Networking", "IoT"],
    },
    {
      name: "Saratoga High School",
      location: "Saratoga, CA",
      members: 29,
      established: "2021",
      focus: ["Mechanical Design", "Manufacturing", "Quality Control"],
    },
    {
      name: "Lynbrook High School",
      location: "San Jose, CA",
      members: 44,
      established: "2022",
      focus: ["Battery Technology", "Power Systems", "Charging"],
    },
    {
      name: "Homestead High School",
      location: "Cupertino, CA",
      members: 37,
      established: "2022",
      focus: ["Materials Science", "Testing", "Safety Engineering"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Member Clubs</h1>
            <p className="text-xl text-muted-foreground">
              High school automotive engineering clubs across the Bay Area, united by a passion for innovation and learning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Active Clubs</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Student Members</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Bay Area Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{club.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm">{club.members} Members</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm">Est. {club.established}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm font-semibold text-foreground mb-2">Focus Areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {club.focus.map((area, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Want to Start a Club at Your School?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              BAAEC provides funding, resources, and guidance to help you establish an automotive engineering club at your high school.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clubs;
