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
  Check,
  ArrowRight,
} from "lucide-react";
import { useQuoteMenu } from "@/components/QuoteMenuProvider";

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

const products = [
  {
    icon: Car,
    name: "Auto Insurance",
    description: "Comprehensive coverage for your vehicle",
    features: ["Liability Coverage", "Collision Coverage", "Comprehensive Coverage", "Roadside Assistance", "Rental Car Coverage"],
  },
  {
    icon: Heart,
    name: "Homeowners Insurance",
    description: "Protect your biggest investment",
    features: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Loss of Use", "Medical Payments"],
  },
  {
    icon: Shield,
    name: "Life Insurance",
    description: "Secure your family's future",
    features: ["Term Life", "Whole Life", "Universal Life", "Estate Planning", "Beneficiary Services"],
  },
  {
    icon: Stethoscope,
    name: "Health Insurance",
    description: "Medical coverage you can trust",
    features: ["Individual Plans", "Family Plans", "Dental & Vision", "Prescription Drugs", "Telehealth Services"],
  },
  {
    icon: Building2,
    name: "Business Insurance",
    description: "Safeguard your enterprise",
    features: ["General Liability", "Property Insurance", "Workers Compensation", "Professional Liability", "Cyber Insurance"],
  },
  {
    icon: PawPrint,
    name: "Pet Insurance",
    description: "Care for your furry friends",
    features: ["Accident Coverage", "Illness Coverage", "Hereditary Conditions", "Emergency Care", "Wellness Visits"],
  },
];

export default function ProductsPage() {
  const { openQuoteMenu } = useQuoteMenu();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
            alt="Insurance products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Insurance Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Find the perfect coverage for your unique needs
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-slate-800 hover:bg-slate-700 rounded-3xl p-8 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-slate-700 group-hover:bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openQuoteMenu}
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Our expert brokers will help you understand your options and find the perfect coverage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
            >
              Speak to an Agent
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}