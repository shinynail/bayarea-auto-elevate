import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Building2, Handshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Briefcase,
      title: "Industry Partners",
      description: "Leading automotive and technology companies supporting our programs",
      partners: [
        { name: "Tesla Motors", type: "Electric Vehicles", contribution: "Mentorship & Resources" },
        { name: "Rivian Automotive", type: "EV Innovation", contribution: "Workshop Funding" },
        { name: "Lucid Motors", type: "Luxury EV", contribution: "Student Internships" },
        { name: "Ford Motor Company", type: "Automotive OEM", contribution: "Equipment Grants" },
        { name: "GM Cruise", type: "Autonomous Tech", contribution: "Technical Training" },
      ],
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Universities partnering to provide resources and pathways",
      partners: [
        { name: "Stanford University", type: "Engineering", contribution: "Lab Access" },
        { name: "UC Berkeley", type: "Engineering", contribution: "Guest Lectures" },
        { name: "San Jose State", type: "Engineering", contribution: "Mentorship Program" },
        { name: "Santa Clara University", type: "Engineering", contribution: "Facility Use" },
      ],
    },
    {
      icon: Building2,
      title: "Technology Partners",
      description: "Tech companies providing software and hardware support",
      partners: [
        { name: "Autodesk", type: "CAD Software", contribution: "Free Licenses" },
        { name: "MATLAB", type: "Engineering Tools", contribution: "Educational Access" },
        { name: "Arduino", type: "Hardware", contribution: "Component Kits" },
        { name: "NVIDIA", type: "AI & Computing", contribution: "GPU Resources" },
      ],
    },
    {
      icon: Handshake,
      title: "Community Partners",
      description: "Local organizations and foundations supporting our mission",
      partners: [
        { name: "Silicon Valley Foundation", type: "Funding", contribution: "$50K Annual Grant" },
        { name: "Bay Area STEM Alliance", type: "Education", contribution: "Program Support" },
        { name: "Youth Engineering Network", type: "Advocacy", contribution: "Outreach Programs" },
      ],
    },
  ];

  const benefits = [
    {
      title: "Mentorship Opportunities",
      description: "Connect with the next generation of engineers and share your expertise",
    },
    {
      title: "Talent Pipeline",
      description: "Early access to motivated students interested in automotive careers",
    },
    {
      title: "Brand Visibility",
      description: "Recognition across our network of schools and community events",
    },
    {
      title: "Innovation Collaboration",
      description: "Work with fresh perspectives on emerging automotive challenges",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Partners</h1>
            <p className="text-xl text-muted-foreground">
              BAAEC's success is built on strong partnerships with industry leaders, educational institutions, and community organizations who share our vision for the future of automotive engineering education.
            </p>
          </div>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {partnerCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="h-10 w-10 text-accent" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, index) => (
                  <Card 
                    key={index}
                    className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{partner.name}</h3>
                      <Badge variant="secondary" className="mb-3">{partner.type}</Badge>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-accent">Contribution:</span> {partner.contribution}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our network of partners investing in the future of automotive engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for new partners who share our commitment to empowering young engineers. Let's discuss how we can work together.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
