import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  SectionHeading,
  StatCard,
  ServiceCard,
  TestimonialCard,
} from "@/components/shared/SectionComponents";
import {
  Building2,
  Shield,
  DollarSign,
  Wrench,
  Users,
  Home,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  ClipboardCheck,
} from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";
import teamInspection from "@/assets/team-inspection.jpg";
import seniorHousing from "@/assets/senior-housing.jpg";
import familyHousing from "@/assets/family-housing.jpg";

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Residential Management",
    description:
      "Complete day-to-day operations management including rent collection, lease administration, and community oversight.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Affordable Housing Compliance",
    description:
      "Expert navigation of HUD, LIHTC, Section 8, and other regulatory requirements with audit-ready documentation.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Financial Management",
    description:
      "Comprehensive budgeting, financial reporting, accounts payable/receivable, and owner distributions.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Operations",
    description:
      "Preventive maintenance programs, 24/7 emergency response, capital improvement planning, and vendor management.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Tenant Relations",
    description:
      "Resident services, community programs, conflict resolution, and satisfaction monitoring.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Leasing & Marketing",
    description:
      "Strategic marketing, waitlist management, applicant screening, and move-in/move-out coordination.",
  },
];

const stats = [
  { value: "45+", label: "Properties Managed" },
  { value: "8,500+", label: "Units Under Management" },
  { value: "97%", label: "Occupancy Rate" },
  { value: "98%", label: "Client Retention" },
];

const industries = [
  {
    title: "Government Housing",
    description: "Public housing authorities and municipal programs",
    image: teamInspection,
  },
  {
    title: "Private Affordable Housing",
    description: "LIHTC, Section 8 project-based, and mixed-income communities",
    image: seniorHousing,
  },
  {
    title: "Mixed-Income Communities",
    description: "Blended affordable and market-rate developments",
    image: familyHousing,
  },
];

const certifications = [
  "HUD Certified",
  "LIHTC Specialist",
  "Section 8 Expert",
  "CPM Certified",
  "ARM Accredited",
  "Fair Housing Trained",
];

const testimonials = [
  {
    quote:
      "HIG transformed our troubled property into a community asset. Their compliance expertise and hands-on approach exceeded our expectations.",
    author: "Maria Johnson",
    role: "Executive Director",
    organization: "Metro Housing Authority",
  },
  {
    quote:
      "The transition to HIG management was seamless. Our occupancy improved from 89% to 97% within the first year.",
    author: "Robert Chen",
    role: "Board President",
    organization: "Cornerstone Affordable Housing",
  },
  {
    quote:
      "Their financial reporting is exceptional. We always know exactly where our properties stand financially.",
    author: "Linda Martinez",
    role: "Asset Manager",
    organization: "Community Development Partners",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={heroProperty}
            alt="Professional property management community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="relative section-container py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wider mb-6">
                Trusted Property Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Excellence in Affordable Housing Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Professional property management services for housing authorities,
              non-profit developers, and private owners. Compliance expertise,
              operational excellence, and compassionate resident care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request Management Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/portfolio">View Our Portfolio</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10 pt-10 border-t border-primary-foreground/20"
            >
              {certifications.slice(0, 4).map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-primary-foreground/80 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {cert}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-10">
        <div className="section-container">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Property Management Solutions"
            description="From day-to-day operations to complex compliance requirements, we provide full-service management tailored to affordable housing communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeading
            label="Who We Serve"
            title="Industries & Client Types"
            description="We partner with organizations committed to providing quality affordable housing in their communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Expertise */}
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
                Compliance Excellence
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Regulatory Expertise You Can Trust
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                Navigate complex housing regulations with confidence. Our team
                maintains current certifications and deep expertise in all major
                affordable housing programs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "HUD Programs",
                  "LIHTC Compliance",
                  "Section 8 Project-Based",
                  "Public Housing",
                  "HOME/CDBG",
                  "State Tax Credit",
                ].map((program) => (
                  <div key={program} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <ClipboardCheck className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={teamInspection}
                  alt="Professional team conducting property inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <Award className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-foreground">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Audit Pass Rate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Testimonials"
            title="Trusted by Leading Organizations"
            description="Hear from the housing authorities, developers, and property owners who partner with HIG."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                organization={testimonial.organization}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">
                Read More Testimonials
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Ready to Partner with HIG?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Let us show you how professional management can transform your
                  property's performance. Request a proposal or schedule a
                  property walk-through today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Request Proposal
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+1-800-555-0123">
                      <Phone className="w-4 h-4" />
                      Call (800) 555-0123
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src={seniorHousing}
                  alt="Well-maintained property"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
