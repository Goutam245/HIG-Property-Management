import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionComponents";
import {
  Target,
  Heart,
  Shield,
  Sparkles,
  Users,
  DollarSign,
  Leaf,
  Scale,
  CheckCircle2,
  ArrowRight,
  Eye,
} from "lucide-react";

const coreValues = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Accountability & Transparency",
    description:
      "We operate with complete transparency in all dealings. Owners receive clear, accurate reporting and immediate notification of issues. We own our results and stand behind our commitments.",
    color: "primary",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Proactive Maintenance",
    description:
      "Prevention is better than repair. Our comprehensive preventive maintenance programs protect property value and ensure resident safety while minimizing costly emergency repairs.",
    color: "accent",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Compassionate Resident Service",
    description:
      "Behind every lease is a family. We treat all residents with dignity and respect, providing responsive service and creating communities where people are proud to live.",
    color: "primary",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Financial Stewardship",
    description:
      "We manage owner funds with the utmost care. Every expenditure is evaluated for value and necessity. Detailed financial reporting ensures complete visibility into property performance.",
    color: "accent",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Regulatory Excellence",
    description:
      "Compliance isn't just about passing audits—it's about protecting residents, owners, and programs. We maintain the highest standards of regulatory adherence across all programs.",
    color: "primary",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Sustainability & Stewardship",
    description:
      "We implement environmentally responsible practices that reduce operating costs, preserve property value, and create healthier communities for residents.",
    color: "accent",
  },
];

const qualityProcesses = [
  {
    title: "Regular Property Inspections",
    description:
      "Monthly interior and exterior inspections ensure properties are maintained to the highest standards.",
  },
  {
    title: "Resident Satisfaction Surveys",
    description:
      "Quarterly surveys measure service quality and identify opportunities for improvement.",
  },
  {
    title: "Compliance Auditing",
    description:
      "Internal compliance reviews ensure audit readiness and identify issues before they become findings.",
  },
  {
    title: "Financial Controls",
    description:
      "Robust internal controls and regular reconciliations protect owner assets and ensure accuracy.",
  },
  {
    title: "Vendor Performance Monitoring",
    description:
      "Regular evaluation of vendors ensures quality work at competitive prices.",
  },
  {
    title: "Staff Performance Reviews",
    description:
      "Regular evaluations ensure our team delivers consistent, high-quality service.",
  },
];

export default function Mission() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold uppercase tracking-wider mb-6">
              Our Foundation
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mission & Core Values
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              The principles that guide every decision, every interaction, and
              every property we manage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary text-primary-foreground mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display">
                "To provide exceptional property management services that create
                value for owners, comfort for residents, and strength for
                communities—all while maintaining the highest standards of
                compliance and operational excellence."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  label: "Operational Excellence",
                  description: "Best-in-class management practices",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  label: "Resident Satisfaction",
                  description: "Communities people are proud to call home",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  label: "Owner Value",
                  description: "Maximized returns and protected assets",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  label: "Compliance Integrity",
                  description: "Audit-ready at all times",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-muted"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent text-accent-foreground mb-6">
              <Eye className="w-10 h-10" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display mb-8">
              "To be the most trusted name in affordable housing management—
              recognized for our unwavering commitment to compliance, our
              innovative approach to operations, and our genuine care for the
              communities we serve."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every affordable housing community
              benefits from professional management that preserves affordability,
              maintains quality, and fosters thriving neighborhoods for
              generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            description="These values aren't just words on a wall—they're the principles that drive our daily decisions and define our culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                    value.color === "primary"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Quality Assurance
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              How We Ensure Excellence
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Our systematic approach to quality management ensures consistent
              performance across all properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{process.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Housing & Sustainability */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fair Housing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary text-primary-foreground mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Fair Housing Commitment
              </h3>
              <p className="text-muted-foreground mb-6">
                HIG is committed to providing equal housing opportunities to all
                individuals regardless of race, color, religion, sex, national
                origin, disability, familial status, or any other protected
                class.
              </p>
              <ul className="space-y-3">
                {[
                  "Annual fair housing training for all staff",
                  "Accessible housing accommodations",
                  "Non-discriminatory marketing practices",
                  "Reasonable accommodation procedures",
                  "Affirmative marketing programs",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Sustainability Initiatives
              </h3>
              <p className="text-muted-foreground mb-6">
                We implement environmentally responsible practices that benefit
                both the planet and property performance, reducing operating
                costs while creating healthier communities.
              </p>
              <ul className="space-y-3">
                {[
                  "Energy-efficient lighting and appliances",
                  "Water conservation programs",
                  "Recycling and waste reduction",
                  "Green landscaping practices",
                  "Indoor air quality improvements",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Experience Values-Driven Management
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Partner with a management company that shares your commitment to
            quality, compliance, and community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Request Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
