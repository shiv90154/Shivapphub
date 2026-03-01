"use client";

import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Animation variants (reused from contact page)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-b from-green-50 to-white py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Web Development
          <span className="block text-green-600 mt-2">
            That Drives Growth
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          From stunning websites to powerful web applications – we build
          digital experiences that engage users and deliver results.
        </p>
      </motion.section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Process */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">Our Proven Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We follow a structured approach to deliver high‑quality web
              solutions on time and within budget.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">Technologies We Master</h2>
            <p className="text-gray-600 mt-4">
              Modern tools for modern web solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                variants={fadeUp}
                className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

 

      {/* Bottom CTA */}
      <section className="bg-green-50 py-20 text-center">
        <h2 className="text-3xl font-bold">Have a project in mind?</h2>
        <p className="mt-4 text-gray-600">
          Let's build something powerful together.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition inline-flex items-center gap-2"
          >
            Start Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

// Data arrays
const services = [
  {
    icon: <Code size={24} />,
    title: "Custom Web Development",
    description:
      "Tailored websites and web applications built with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: <Globe size={24} />,
    title: "E‑commerce Solutions",
    description:
      "Scalable online stores with secure payment integration, inventory management, and seamless UX.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive Design",
    description:
      "Flawless experiences across all devices – desktop, tablet, and mobile.",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "CMS Development",
    description:
      "User‑friendly content management systems (WordPress, Sanity, Strapi) so you can update content easily.",
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Optimization",
    description:
      "Lightning‑fast load times and SEO‑friendly code to boost your rankings.",
  },
  {
    icon: <Users size={24} />,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, security updates, and feature enhancements.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We learn about your business, goals, and target audience.",
  },
  {
    title: "Planning",
    description: "We create a roadmap, wireframes, and tech specifications.",
  },
  {
    title: "Development",
    description: "Our developers build your product with clean, efficient code.",
  },
  {
    title: "Launch & Grow",
    description: "We deploy, test, and provide ongoing support.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "WordPress",
  "Sanity",
  "Strapi",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
];
