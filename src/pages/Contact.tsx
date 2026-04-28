import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+917358897955", ""],
    action: "tel:+917358897955",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["priyaagenciesvpm@gmail.com", ""],
    action: "mailto:priyaagenciesvpm@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["No 40 Shanmuga Perumaal Kovil street Keelpermbakkam Villupuram."],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9 AM - 7 PM", "Sunday: 10 AM - 5 PM"],
    action: null,
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_ar6is0n",
        "template_x3h088v",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          requirement: formData.requirement,
          message: formData.message,
        },
        "6t2M-i1GbmK_K2NQJ"
      );

      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", city: "", requirement: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about solar? Want a free quote for your project? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card p-6 rounded-2xl border border-border text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{info.title}</h4>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground text-sm">
                    {info.action && index === 0 ? (
                      <a href={info.action} className="hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                badge="Request a Quote"
                title="Send Us a Message"
                description="Fill out the form and we'll get back to you within 24 hours"
                centered={false}
              />

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      placeholder="+91 73588 97955"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input
                      name="email"
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                    <Input
                      name="city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Requirement Type</label>
                  <select
                    name="requirement"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    value={formData.requirement}
                    onChange={handleChange}
                  >
                    <option value="">Select requirement type</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="industrial">Industrial Solar</option>
                    <option value="water-heater">Solar Water Heater</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements, property size, current electricity bill, etc."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <SectionHeading
                badge="Visit Us"
                title="Our Location"
                description="Visit our office for a personalized consultation"
                centered={false}
              />

              <div className="bg-card rounded-2xl border border-border overflow-hidden h-96 lg:h-[calc(100%-160px)]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12848.614149822995!2d79.49558023301545!3d11.948417362489822!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c3443ed12d%3A0x86e2f3da4987b096!2sKeezperum%20Pakkam%2C%20Viluppuram%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1777381365793!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-secondary-foreground/80 mb-6">
            Call us directly for urgent inquiries
          </p>
          <Button asChild size="lg" className="bg-background text-secondary hover:bg-background/90">
            <a href="tel:+917358897955">
              <Phone className="w-5 h-5 mr-2" />
              Call: +917358897955
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
