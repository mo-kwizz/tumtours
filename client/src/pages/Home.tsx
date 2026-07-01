import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, MapPin, Users, Clock, Waves, Mountain, Building2, Truck, Send, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

/**
 * Shane Tours and Safaris - Home Page
 * Design Philosophy: Coastal Expedition
 * - Organic Modernism with Travel Nostalgia
 * - Vibrant Zanzibar-inspired palette (Ocean Teal, Sandy Cream, Safari Earth)
 * - Flowing, non-linear composition with wave dividers
 * - Playfair Display for headlines, Lato for body
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      toast.success("Request submitted! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", interest: "", message: "" });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  // Gallery images - mix of generated and search results
  const galleryImages = [
    { id: 1, src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/beach-adventure-Q3XoxSBr3aanWRkiPX9vJe.webp", alt: "Zanzibar Beach", span: "md:col-span-2" },
    { id: 2, src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/safari-mainland-LoFZb2dWmGTb5znWscKCXq.webp", alt: "Safari Wildlife", span: "" },
    { id: 3, src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/culture-stonetown-47bovesNpPdkDrZZQswN57.webp", alt: "Stone Town", span: "" },
    { id: 4, src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/hero-zanzibar-TvzwjCCx828UFJvYr4U7Kq.webp", alt: "Zanzibar Sunset", span: "md:col-span-2" },
  ];

  const tourPackages = [
    {
      id: 1,
      title: "Mainland Safaris",
      description: "Explore the untamed beauty of Mikumi National Park with expert guides. Witness majestic wildlife in their natural habitat.",
      icon: Mountain,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/safari-mainland-LoFZb2dWmGTb5znWscKCXq.webp",
      features: ["Wildlife spotting", "Expert guides", "4x4 vehicles", "All meals included"]
    },
    {
      id: 2,
      title: "Ocean & Beach Adventures",
      description: "Discover pristine beaches and crystal waters. Safari Blue, Nakupenda Sandbank, and exclusive island experiences await.",
      icon: Waves,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/beach-adventure-Q3XoxSBr3aanWRkiPX9vJe.webp",
      features: ["Dhow cruises", "Snorkeling", "Island tours", "Water sports"]
    },
    {
      id: 3,
      title: "Culture & History",
      description: "Immerse yourself in Zanzibar's rich heritage. Stone Town's ancient streets, Prison Island, and aromatic spice farms.",
      icon: Building2,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/culture-stonetown-47bovesNpPdkDrZZQswN57.webp",
      features: ["Historic tours", "Local guides", "Cultural immersion", "Spice farm visits"]
    },
    {
      id: 4,
      title: "Seamless Logistics",
      description: "From airport to adventure, we handle every detail. Reliable transport and 24/7 support for your peace of mind.",
      icon: Truck,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/hero-zanzibar-TvzwjCCx828UFJvYr4U7Kq.webp",
      features: ["Airport transfers", "Daily transport", "24/7 support", "Professional drivers"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      text: "Tum Tours made our Zanzibar trip unforgettable. The guides were knowledgeable, punctual, and genuinely kind. Highly recommended!",
      rating: 5
    },
    {
      name: "James Okonkwo",
      location: "Lagos, Nigeria",
      text: "Best safari experience ever. The team's deep local knowledge transformed our journey into something truly special.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "From booking to the final day, everything was seamless. Their 24/7 availability gave us peace of mind throughout.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Singapore",
      text: "Professional, warm, and incredibly organized. They anticipated every need. This is travel done right.",
      rating: 5
    },
    {
      name: "Amara Okafor",
      location: "Accra, Ghana",
      text: "The personalized itinerary was perfect. They listened to what we wanted and delivered beyond expectations.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-off-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/brand-logo-gaGPkEFCB3ZcrNbtzytA6j.webp"
              alt="Shane Tours Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-ocean-teal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shane Tours
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-safari-earth hover:text-ocean-teal transition-colors">
              About
            </a>
            <a href="#services" className="text-safari-earth hover:text-ocean-teal transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-safari-earth hover:text-ocean-teal transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-safari-earth hover:text-ocean-teal transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-ocean-teal hover:bg-ocean-teal/90 text-off-white">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/hero-zanzibar-TvzwjCCx828UFJvYr4U7Kq.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#FEFDFB" }}>
            Discover the Soul of Zanzibar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Where every journey tells a story. Experience authentic adventures guided by locals who know every hidden gem.
          </p>
          <Button
            size="lg"
            className="bg-ocean-teal hover:bg-ocean-teal/90 text-off-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Book Your Adventure
          </Button>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-off-white to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-off-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose Shane Tours?</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Based in Jumbi, Zanzibar, Shane Tours has been crafting unforgettable experiences for travelers seeking authentic connections with our islands and mainland.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-ocean-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-safari-earth mb-1">24/7 Availability</h3>
                    <p className="text-foreground">Always ready to support your journey, day or night.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Users className="w-6 h-6 text-ocean-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-safari-earth mb-1">Expert Local Guides</h3>
                    <p className="text-foreground">Deep knowledge of Zanzibar and Tanzania's hidden treasures.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Compass className="w-6 h-6 text-ocean-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-safari-earth mb-1">Personalized Experiences</h3>
                    <p className="text-foreground">Every itinerary is tailored to your unique interests and pace.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-sandy-cream rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663555999402/oKDJXGWHxAB4YCSg8teFVd/beach-adventure-Q3XoxSBr3aanWRkiPX9vJe.webp"
                  alt="Zanzibar Beach"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sandy-cream rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-sandy-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Tour Packages</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              From mainland safaris to pristine beaches, cultural immersion to seamless logistics—we've got your adventure covered.
            </p>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {tourPackages.map((pkg, idx) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  className="group"
                  style={{
                    transform: idx % 2 === 1 ? "translateY(2rem)" : "translateY(0)"
                  }}
                >
                  <Card className="overflow-hidden bg-off-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <Icon className="absolute top-4 right-4 w-8 h-8 text-off-white drop-shadow-lg" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="mb-2">{pkg.title}</h3>
                      <p className="text-foreground mb-4 flex-grow">{pkg.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-safari-earth">
                            <span className="w-1.5 h-1.5 bg-ocean-teal rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full bg-ocean-teal hover:bg-ocean-teal/90 text-off-white">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Gallery</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Glimpses of the unforgettable moments awaiting you in Zanzibar and Tanzania.
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-off-white font-semibold p-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-sandy-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Hear from adventurers who've experienced the magic of Zanzibar and Tanzania with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="p-6 bg-off-white shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-ocean-teal text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div>
                  <p className="font-bold text-safari-earth">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="relative py-20 bg-safari-earth text-off-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "#FEFDFB" }}>Ready to Start Your Adventure?</h2>
            <p className="text-lg text-off-white/90">
              Fill out the form below and our team will craft your perfect itinerary.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} className="space-y-6 bg-safari-earth/80 backdrop-blur-sm p-8 rounded-xl border border-off-white/20">
            {submitSuccess && (
              <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-off-white">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! We'll be in touch soon.</span>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/30 text-off-white placeholder-off-white/60 focus:outline-none focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/30 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/30 text-off-white placeholder-off-white/60 focus:outline-none focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/30 transition-all"
              />
            </div>

            <input
              type="text"
              name="interest"
              placeholder="Tour Interest (e.g., Safari, Beach, Culture)"
              value={formData.interest}
              onChange={handleFormChange}
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/30 text-off-white placeholder-off-white/60 focus:outline-none focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/30 transition-all"
            />

            <textarea
              name="message"
              placeholder="Tell us about your ideal adventure..."
              rows={4}
              value={formData.message}
              onChange={handleFormChange}
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/30 text-off-white placeholder-off-white/60 focus:outline-none focus:border-ocean-teal focus:ring-2 focus:ring-ocean-teal/30 resize-none transition-all"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-ocean-teal hover:bg-ocean-teal/90 text-off-white text-lg py-6 rounded-lg font-bold disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Submitting..." : (
                <>
                  <Send className="w-5 h-5" />
                  Request Your Custom Itinerary
                </>
              )}
            </Button>

            <p className="text-center text-off-white/70 text-sm">
              We'll respond within 24 hours. Available 24/7 for urgent inquiries.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/10 text-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-safari-earth mb-4">About</h4>
              <p className="text-sm">Shane Tours and Safaris - Your gateway to authentic Zanzibar and Tanzania adventures.</p>
            </div>
            <div>
              <h4 className="font-bold text-safari-earth mb-4">Services</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#services" className="hover:text-ocean-teal transition-colors">Mainland Safaris</a></li>
                <li><a href="#services" className="hover:text-ocean-teal transition-colors">Beach Tours</a></li>
                <li><a href="#services" className="hover:text-ocean-teal transition-colors">Cultural Experiences</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-safari-earth mb-4">Contact</h4>
              <ul className="text-sm space-y-2">
                <li>📍 Jumbi, Zanzibar</li>
                <li>📞 +255 XXX XXX XXX</li>
                <li>✉️ info@shanetours.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-safari-earth mb-4">Follow Us</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-ocean-teal transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-ocean-teal transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-ocean-teal transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-8 text-center text-sm">
            <p>&copy; 2026 Shane Tours and Safaris. All rights reserved. | Crafted with care for adventurers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
