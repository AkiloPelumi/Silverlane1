"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Car,
  Heart,
  Shield,
  Stethoscope,
  Building2,
  PawPrint,
  Play,
  ArrowRight,
} from "lucide-react";
import { useQuoteMenu } from "@/components/QuoteMenuProvider";
import { useState, useEffect, useRef } from "react";

// Video configuration
const videos = [
  { src: "/auto.mp4", name: "auto" },
  { src: "/cargo.mp4", name: "cargo" },
  { src: "/health.mp4", name: "health" },
  { src: "/Home.mp4", name: "home" },
  { src: "/life.mp4", name: "life" },
  { src: "/marine.mp4", name: "marine" },
];

const VIDEO_DURATION = 6000; // 6 seconds per video

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Products data
const products = [
  { icon: Car, name: "Auto Insurance", desc: "Comprehensive coverage for your vehicle" },
  { icon: Heart, name: "Homeowners Insurance", desc: "Protect your biggest investment" },
  { icon: Shield, name: "Life Insurance", desc: "Secure your family's future" },
  { icon: Stethoscope, name: "Health Insurance", desc: "Medical coverage you can trust" },
  { icon: Building2, name: "Business Insurance", desc: "Safeguard your enterprise" },
  { icon: PawPrint, name: "Pet Insurance", desc: "Care for your furry friends" },
];

// Team data
const teamMembers = [
  { name: "Sarah Mitchell", role: "Senior Broker", quote: "Every client deserves personalized attention.", image: "https://placehold.co/200x200/e2e8f0/475569?text=SM" },
  { name: "James Chen", role: "Claims Specialist", quote: "We make claims simple and stress-free.", image: "https://placehold.co/200x200/e2e8f0/475569?text=JC" },
  { name: "Emily Rodriguez", role: "Financial Advisor", quote: "Planning today for a safer tomorrow.", image: "https://placehold.co/200x200/e2e8f0/475569?text=ER" },
  { name: "Michael Thompson", role: "Business Insurance Expert", quote: "Your business growth is our priority.", image: "https://placehold.co/200x200/e2e8f0/475569?text=MT" },
  { name: "Amanda Foster", role: "Customer Success Lead", quote: "Your peace of mind is my mission.", image: "https://placehold.co/200x200/e2e8f0/475569?text=AF" },
  { name: "David Park", role: "Life Insurance Specialist", quote: "Protecting legacies, one family at a time.", image: "https://placehold.co/200x200/e2e8f0/475569?text=DP" },
];

// Testimonials data
const testimonials = [
  { quote: "Silverlane made finding the right coverage effortless. Their team guided me through every step!", author: "Jennifer Walsh", location: "Austin, TX", image: "https://placehold.co/100x100/10b981/ffffff?text=JW", isGreen: true },
  { quote: "Fast, professional, and truly caring. When I filed a claim, they handled everything within days.", author: "Robert Martinez", location: "Denver, CO", image: "https://placehold.co/100x100/1e293b/ffffff?text=RM", isGreen: false },
  { quote: "The best insurance experience I've ever had. Transparent pricing and exceptional support.", author: "Lisa Thompson", location: "Seattle, WA", image: "https://placehold.co/100x100/10b981/ffffff?text=LT", isGreen: true },
];

// Partners
const partners = [
  { name: "MTN", color: "#000000" },
  { name: "Dangote", color: "#E31837" },
  { name: "GTBank", color: "#1E88E5" },
  { name: "Zenith Bank", color: "#FFD700" },
  { name: "First Bank", color: "#1565C0" },
  { name: "Airtel", color: "#E53935" },
];

export default function Home() {
  const { openQuoteMenu } = useQuoteMenu();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, VIDEO_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Videos with Overlay */}
        <div className="absolute inset-0 z-0">
          {videos.map((video, index) => (
            <video
              key={video.name}
              ref={index === currentVideoIndex ? videoRef : null}
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="stagger-children"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Protecting What <span className="text-emerald-400">Matters Most</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto"
            >
              Comprehensive coverage tailored for your peace of mind
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={openQuoteMenu}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 text-lg cursor-pointer"
              >
                Get a Free Quote
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/20 text-lg">
                <Play size={20} className="fill-white" />
                Watch How It Works
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED PARTNERS (Logo Ticker) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 text-sm font-medium mb-10"
          >
            Trusted by the leading companies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {partners.map((partner, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-bold"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column - Sticky */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 lg:sticky lg:top-32 self-start"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Comprehensive coverage for every stage of life.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                At Silverlane, we believe insurance should be simple. Our expert brokers
                analyze your unique situation to find the perfect coverage at the best
                possible price.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                View all products
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Right Column - Scrollable Grid */}
            <div className="lg:w-2/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {products.map((product, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group bg-slate-800 hover:bg-slate-700 p-8 rounded-3xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-slate-700 group-hover:bg-emerald-500 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                      <product.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-slate-400">{product.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Your Dedicated Advisors
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our experienced team is committed to finding you the best coverage
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-5 object-cover"
                />
                <h3 className="text-lg font-bold text-slate-900 text-center">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-sm text-center mb-3">{member.role}</p>
                <p className="text-slate-500 text-center italic">"{member.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. VIDEO / CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-white mb-8"
            >
              Ready to secure your future?
            </motion.h2>

            {/* Play Button with Pulsing Ring */}
            <motion.div
              variants={fadeInUp}
              className="relative inline-flex mb-10"
            >
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-pulse-ring" />
              {/* Play button */}
              <button className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg">
                <Play className="w-10 h-10 text-slate-900 ml-1" />
              </button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our clients are our best advocates.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`p-8 rounded-3xl ${
                  testimonial.isGreen
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-white"
                }`}
              >
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className={`text-sm ${testimonial.isGreen ? "text-emerald-100" : "text-slate-400"}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. NEWSLETTER / LEAD GEN */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-16 shadow-soft text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stay protected. Subscribe to our insights.
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Get expert tips on insurance, safety, and financial planning delivered to your inbox.
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}