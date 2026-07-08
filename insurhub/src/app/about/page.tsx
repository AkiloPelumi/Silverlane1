"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Heart } from "lucide-react";

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

const teamMembers = [
  { name: "Sarah Mitchell", role: "Senior Broker", quote: "Every client deserves personalized attention.", image: "https://placehold.co/200x200/e2e8f0/475569?text=SM" },
  { name: "James Chen", role: "Claims Specialist", quote: "We make claims simple and stress-free.", image: "https://placehold.co/200x200/e2e8f0/475569?text=JC" },
  { name: "Emily Rodriguez", role: "Financial Advisor", quote: "Planning today for a safer tomorrow.", image: "https://placehold.co/200x200/e2e8f0/475569?text=ER" },
  { name: "Michael Thompson", role: "Business Insurance Expert", quote: "Your business growth is our priority.", image: "https://placehold.co/200x200/e2e8f0/475569?text=MT" },
  { name: "Amanda Foster", role: "Customer Success Lead", quote: "Your peace of mind is my mission.", image: "https://placehold.co/200x200/e2e8f0/475569?text=AF" },
  { name: "David Park", role: "Life Insurance Specialist", quote: "Protecting legacies, one family at a time.", image: "https://placehold.co/200x200/e2e8f0/475569?text=DP" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Happy Clients" },
  { value: "98%", label: "Claims Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Our team"
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
            About Silverlane Insurance Broker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto"
          >
            We're on a mission to make insurance simple, transparent, and accessible for everyone.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Silverlane Insurance Broker was born from a simple belief: insurance should protect you, not confuse you. We saw an industry full of complex jargon, hidden fees, and one-size-fits-all policies.
                </p>
                <p>
                  Today, we've helped over 50,000 families and businesses find the right coverage at prices they can afford. Our team of dedicated brokers works for you, not the insurance companies.
                </p>
                <p>
                  We continue to innovate and improve, bringing modern technology together with traditional personalized service to deliver the best insurance experience possible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-emerald-50 p-8 rounded-3xl text-center">
                <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 text-lg">Trusted</h3>
                <p className="text-slate-500 text-sm mt-2">Carrier-independent advice</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 text-lg">Personal</h3>
                <p className="text-slate-500 text-sm mt-2">Tailored solutions</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <Award className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 text-lg">Award-Winning</h3>
                <p className="text-slate-500 text-sm mt-2">Industry recognition</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-3xl text-center">
                <Heart className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 text-lg">Care</h3>
                <p className="text-slate-500 text-sm mt-2">Client-first approach</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
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
    </div>
  );
}