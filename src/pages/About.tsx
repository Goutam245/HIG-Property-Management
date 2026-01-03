import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionComponents";
import {
  Award,
  CheckCircle2,
  Users,
  Building2,
  Shield,
  ArrowRight,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const leadershipTeam = [
  {
    name: "Michael Thompson",
    role: "Chief Executive Officer",
    credentials: "CPM, ARM",
    experience: "25+ years",
    specialization: "Strategic Leadership & Compliance",
    bio: "Michael founded HIG with a vision to provide exceptional property management services focused on affordable housing communities. His expertise in HUD programs and LIHTC compliance has guided the company's growth.",
    image: "/assets/ceo-headshot.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    credentials: "CPM, NAHP-e",
    experience: "20+ years",
    specialization: "Operations & Portfolio Management",
    bio: "Sarah oversees day-to-day operations across our entire portfolio. Her systematic approach to property management ensures consistent quality and compliance across all communities.",
    image: "/assets/coo-headshot.jpg",
  },
  {
    name: "David Chen",
    role: "Chief Financial Officer",
    credentials: "CPA, MBA",
    experience: "18+ years",
    specialization: "Financial Management & Reporting",
    bio: "David brings deep expertise in affordable housing finance, including LIHTC syndication, HUD accounting, and financial reporting for complex funding structures.",
    image: "/assets/cfo-headshot.jpg",
  },
  {
    name: "Amanda Rodriguez",
    role: "VP of Compliance",
    credentials: "HCCP, SHCM",
    experience: "15+ years",
    specialization: "Regulatory Compliance & Training",
    bio: "Amanda leads our compliance team, ensuring audit readiness and regulatory excellence across all programs including LIHTC, Section 8, and Public Housing.",
    image: "/assets/vp-headshot.jpg",
  },
];

const memberships = [
  "Institute of Real Estate Management (IREM)",
  "National Apartment Association (NAA)",
  "National Affordable Housing Management Association (NAHMA)",
  "Affordable Housing Investors Council (AHIC)",
  "State Apartment Associations",
  "Local Housing Authorities Network",
];

const technologies = [
  { name: "Yardi Voyager", description: "Property Management & Accounting" },
  { name: "RentCafe", description: "Online Leasing & Resident Portal" },
  { name: "HappyCo", description: "Inspections & Maintenance" },
  { name: "Procorem", description: "Asset Management & Compliance" },
  { name: "WorkOrder.com", description: "Maintenance Request Tracking" },
  { name: "DocuSign", description: "Electronic Signatures & Leasing" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold uppercase tracking-wider mb-6">
              About HIG
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Legacy of Excellence in Property Management
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              For over 20 years, HIG Property Management Services has been the
              trusted partner for housing authorities, developers, and owners
              seeking professional management of affordable housing communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Our Story"
                title="Building Communities Since 2003"
                description="HIG was founded with a singular mission: to provide property owners with management services that prioritize both operational excellence and compassionate resident care."
                align="left"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What began as a small team managing a handful of affordable
                  housing properties has grown into a respected management
                  company overseeing thousands of units across multiple states.
                </p>
                <p>
                  Our growth has been driven by a commitment to compliance
                  excellence, transparent communication, and measurable results.
                  We understand that every property represents more than an
                  investment—it's a community where families build their lives.
                </p>
                <p>
                  Today, we partner with government agencies, non-profit
                  developers, and private owners who share our dedication to
                  providing quality affordable housing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "20+", label: "Years of Experience" },
                { value: "45+", label: "Properties Managed" },
                { value: "8,500+", label: "Units Under Management" },
                { value: "200+", label: "Team Members" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-elevated p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeading
            label="Our Approach"
            title="Management Philosophy"
            description="We believe great property management requires balancing owner objectives with resident needs through professional, proactive service."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Owner-Focused Results",
                description:
                  "We treat your property as if it were our own, maximizing value while maintaining compliance and physical condition.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Resident-Centered Service",
                description:
                  "Happy, stable residents create thriving communities. We prioritize responsive service and clear communication.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Compliance-Driven Operations",
                description:
                  "Every process is designed to maintain audit readiness and regulatory excellence across all programs.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary text-primary-foreground mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Leadership"
            title="Experienced Team, Proven Results"
            description="Our leadership team brings decades of combined experience in affordable housing management and compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated overflow-hidden"
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary-foreground">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
                      <Award className="w-3 h-3" />
                      {member.credentials}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted text-muted-foreground text-xs font-medium">
                      <Briefcase className="w-3 h-3" />
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                Team Development
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Investing in Our People
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                Our team members receive ongoing training and certification
                support to stay current with regulations and best practices in
                affordable housing management.
              </p>

              <div className="space-y-4">
                {[
                  "Annual compliance certification training",
                  "Fair housing education for all staff",
                  "Leadership development programs",
                  "Industry conference participation",
                  "Technology training and updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      Professional Certifications
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      Industry-recognized credentials
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "CPM - Certified Property Manager",
                    "ARM - Accredited Residential Manager",
                    "CAM - Certified Apartment Manager",
                    "HCCP - Housing Credit Certified Professional",
                    "SHCM - Specialist in Housing Credit Management",
                    "NAHP-e - National Affordable Housing Professional",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="text-sm text-primary-foreground/80"
                    >
                      • {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Memberships & Technology */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-6">
                Professional Memberships
              </h3>
              <div className="space-y-3">
                {memberships.map((membership) => (
                  <div
                    key={membership}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium">{membership}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technology Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-6">
                Technology Platforms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="card-elevated p-4"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover how HIG can provide professional management for your
            affordable housing portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
