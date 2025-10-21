import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@baaec.org",
      link: "mailto:info@baaec.org",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "San Francisco Bay Area, CA",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about starting a club, partnering with us, or getting involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <info.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="border-border animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    How do I start a club at my school?
                  </h3>
                  <p className="text-muted-foreground">
                    Contact us through the form above, and we'll guide you through the process. We provide startup funding, curriculum resources, and ongoing support for new clubs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    What kind of support do clubs receive?
                  </h3>
                  <p className="text-muted-foreground">
                    BAAEC provides financial grants, access to tools and equipment, mentorship from industry professionals, and opportunities to participate in competitions and workshops.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Can companies partner with BAAEC?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! We welcome partnerships with automotive companies, tech firms, and other organizations. Partners can provide mentorship, funding, equipment, or internship opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
