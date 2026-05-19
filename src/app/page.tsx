"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Flavors", id: "flavors" },
        { name: "Pricing", id: "pricing" },
        { name: "Gallery", id: "gallery" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Populari"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "sparkles-gradient" }}
      title="Elevate Your Event With Gourmet Popcorn Experiences"
      description="Luxury kettle corn buffets for weddings, parties, corporate events, and celebrations across Israel."
      buttons={[{ text: "Book Your Event", href: "#contact" }, { text: "View Flavors", href: "#flavors" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=iwshww"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9kwcz5", alt: "Happy wedding guest" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2q2o08", alt: "Corporate event attendee" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9tbp46", alt: "Bat Mitzvah celebrant" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f84qa1", alt: "Private party guest" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c36ue3", alt: "Satisfied customer" },
      ]}
      avatarText="Loved by 500+ happy clients"
      marqueeItems={[{ type: "text", text: "Certified Kosher" }, { type: "text", text: "Premium Ingredients" }, { type: "text", text: "Nationwide Delivery" }, { type: "text", text: "Handcrafted Daily" }, { type: "text", text: "Events Specialist" }]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="A Gourmet Popcorn Experience"
      metrics={[
        { icon: Sparkles, label: "Handcrafted Flavors", value: "15+" },
        { icon: Award, label: "Certified Pareve", value: "Mehadrin" },
        { icon: Star, label: "Events Catered", value: "500+" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="kosher" data-section="kosher">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Strict Supervision", description: "Full compliance with high-kashrut standards.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4ago94", imageAlt: "Kosher Logo" },
        { title: "Pareve Ingredients", description: "Certified dairy-free and suitable for meat or dairy meals.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=65s634", imageAlt: "Kosher Logo" },
        { title: "Professional Standards", description: "Consistent quality for any event requirement.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fk29ah", imageAlt: "Kosher Logo" },
      ]}
      title="Certified Kosher Pareve"
      description="We are proud to hold Rabbanut Mehadrin Karnei Shomron certification, ensuring our products meet the highest professional and trusted catering standards for all guests."
    />
  </div>

  <div id="flavors" data-section="flavors">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Classic Movie", price: "Gourmet", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=888wu6" },
        { id: "2", name: "Sweet & Salty", price: "Kettle", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=l18aso" },
        { id: "3", name: "Dark Chocolate", price: "Indulgent", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s332ns" },
        { id: "4", name: "Oreo Crunch", price: "Sweet", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zjto9l" },
        { id: "5", name: "Vanilla Confetti", price: "Fun", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3t1o6k" },
        { id: "6", name: "ZING! Taco", price: "Bold", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g22h16" },
        { id: "7", name: "Garlic Herb", price: "Savory", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r001et" },
        { id: "8", name: "PB Chocolate", price: "Rich", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=plu1ds" },
        { id: "9", name: "Cinnamon Churro", price: "Spiced", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n3eeq4" },
      ]}
      title="Our Gourmet Flavors"
      description="Discover a world of hand-tossed, kettle-cooked perfection."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Weddings", description: "Luxury late-night snacks.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9kwcz5", imageAlt: "Wedding" },
        { title: "Corporate Events", description: "Brand-focused buffets.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2q2o08", imageAlt: "Corporate" },
        { title: "Bar/Bat Mitzvahs", description: "Fun, high-energy setups.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9tbp46", imageAlt: "Mitvahs" },
        { title: "Private Parties", description: "Customized to your theme.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f84qa1", imageAlt: "Party" },
        { title: "School Events", description: "Kid-friendly snacks.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c36ue3", imageAlt: "School" },
      ]}
      title="Events & Experiences"
      description="From elegant weddings to corporate galas, we deliver popcorn experiences."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", price: "1800 NIS", name: "Basic Buffet", features: ["3 Flavors", "Up to 100 Guests", "Full Setup"], buttons: [{ text: "Book Now", href: "#contact" }] },
        { id: "pro", price: "3500 NIS", name: "Premium Buffet", features: ["5 Flavors", "Up to 250 Guests", "Custom Signage"], buttons: [{ text: "Book Now", href: "#contact" }] },
        { id: "enterprise", price: "Custom", name: "Full Service", features: ["Unlimited Flavors", "On-site Attendants", "Branded Packaging"], buttons: [{ text: "Contact Us", href: "#contact" }] },
      ]}
      title="Luxury Buffet Packages"
      description="Simple, transparent pricing for your next premium event."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Setup 1", handle: "Gourmet", testimonial: "Wedding event set up.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=17tyxd" },
        { id: "2", name: "Setup 2", handle: "Corporate", testimonial: "Corporate gala setup.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1o394z" },
        { id: "3", name: "Setup 3", handle: "Mitzvah", testimonial: "Bar mitzvah celebration.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nkj12g" },
        { id: "4", name: "Setup 4", handle: "Party", testimonial: "Private event display.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=00dzyl" },
        { id: "5", name: "Setup 5", handle: "Popcorn", testimonial: "Gourmet popcorn bar.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vt2gej" },
      ]}
      title="Event Gallery"
      description="Visual highlights from our gourmet buffet setups."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "r1", name: "Sarah Levi", handle: "Bride", testimonial: "The best popcorn buffet we've ever had at a wedding! Our guests couldn't stop talking about it.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hds5f2" },
        { id: "r2", name: "David Cohen", handle: "CFO", testimonial: "Exceptional service for our corporate gala. Professional and truly premium quality.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uc6kdf" },
        { id: "r3", name: "Rachel Ben-David", handle: "Mother", testimonial: "My daughter's Bat Mitzvah was a huge success, thanks to the popcorn bar! Everyone loved the Oreo flavor.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nbm03u" },
        { id: "r4", name: "Yossi Avraham", handle: "Guest", testimonial: "I love the white chocolate cinnamon flavor! Can't wait for the next event.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ey4m8c" },
        { id: "r5", name: "Michal Shmueli", handle: "Planner", testimonial: "Populari is always my go-to recommendation for gourmet catering.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kokf1v" },
      ]}
      title="Client Reviews"
      description="What our guests say about Populari Kettle Corn."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Experience"
      description="Send us your event details and we'll craft a gourmet popcorn buffet just for you."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number" },
        { name: "date", type: "date", placeholder: "Event Date" },
      ]}
      textarea={{ name: "notes", placeholder: "Event details and flavor preferences..." }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=blr4qv"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            { label: "Flavors", href: "#flavors" },
            { label: "Pricing", href: "#pricing" },
            { label: "Gallery", href: "#gallery" },
          ],
        },
        {
          items: [
            { label: "Contact", href: "#contact" },
            { label: "WhatsApp", href: "https://wa.me/972584610548" },
            { label: "Email", href: "mailto:popularikettlecorn@gmail.com" },
          ],
        },
      ]}
      logoText="POPULARI"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}