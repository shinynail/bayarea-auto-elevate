import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To inspire and empower high school students to pursue careers in automotive engineering through hands-on learning, mentorship, and access to cutting-edge technology.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A future where every student in the Bay Area has the opportunity to explore automotive engineering and contribute to the next generation of transportation innovation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in education, safety, and professional development, preparing students for successful careers in engineering.",
    },
    {
      icon: Users2,
      title: "Community",
      description: "Building strong connections between students, educators, industry professionals, and community partners to create a supportive learning ecosystem.",
    },
  ];

  const achievements = [
    { year: "2018", event: "BAAEC Founded" },
    { year: "2019", event: "First 10 Clubs Established" },
    { year: "2020", event: "Virtual Learning Platform Launched" },
    { year: "2021", event: "500+ Students Reached" },
    { year: "2023", event: "25+ Active Clubs" },
    { year: "2024", event: "$250K in Funding Secured" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">About BAAEC</h1>
            <p className="text-xl text-muted-foreground">
              The Bay Area Automotive Engineering Council is a nonprofit organization dedicated to fostering the next generation of automotive engineers and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <img 
              src={aboutImage} 
              alt="BAAEC team working together" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that shape every decision and action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in BAAEC's growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">{achievement.year}</div>
                  <div className="text-muted-foreground">{achievement.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-8">Making an Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Since our founding, BAAEC has grown from a small initiative to a comprehensive network of automotive engineering clubs across the Bay Area. We've helped hundreds of students discover their passion for engineering, provided thousands of hours of hands-on learning, and created pathways to prestigious universities and careers in the automotive industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through partnerships with leading automotive companies, technology firms, and educational institutions, we continue to expand opportunities for students to engage with cutting-edge technology and real-world engineering challenges.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
