import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading, TestimonialCard } from "@/components/shared/SectionComponents";
import { Award, ArrowRight, Quote, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "HIG transformed our troubled property into a community asset. Their compliance expertise and hands-on approach exceeded our expectations. Within 18 months, we went from multiple findings to a perfect audit score.",
    author: "Maria Johnson",
    role: "Executive Director",
    organization: "Metro Housing Authority",
    category: "Housing Authority",
  },
  {
    quote:
      "The transition to HIG management was seamless. Our occupancy improved from 89% to 97% within the first year. Their proactive approach to maintenance and resident services has been exceptional.",
    author: "Robert Chen",
    role: "Board President",
    organization: "Cornerstone Affordable Housing",
    category: "Non-Profit",
  },
  {
    quote:
      "Their financial reporting is exceptional. We always know exactly where our properties stand financially. The monthly reports are detailed, accurate, and delivered on time every month.",
    author: "Linda Martinez",
    role: "Asset Manager",
    organization: "Community Development Partners",
    category: "Private Owner",
  },
  {
    quote:
      "After struggling with compliance issues for years, we brought in HIG. They immediately identified the gaps and implemented systems to address them. We've had clean audits ever since.",
    author: "James Wilson",
    role: "Executive Director",
    organization: "Southeast Housing Alliance",
    category: "Non-Profit",
  },
  {
    quote:
      "What impressed us most was their genuine care for residents. They don't just manage buildings—they build communities. Resident satisfaction scores have never been higher.",
    author: "Patricia Thompson",
    role: "Board Member",
    organization: "Faith Community Housing",
    category: "Faith-Based",
  },
  {
    quote:
      "HIG took over a property that was in serious disrepair. Within two years, they had turned it around completely. The physical improvements and financial performance exceeded all projections.",
    author: "David Rodriguez",
    role: "CFO",
    organization: "Regional Housing Partners",
    category: "Private Owner",
  },
];

const awards = [
  {
    year: "2024",
    title: "Property Management Excellence Award",
    organization: "State Apartment Association",
  },
  {
    year: "2023",
    title: "Affordable Housing Provider of the Year",
    organization: "NAHMA Southeast Region",
  },
  {
    year: "2023",
    title: "Community of the Year - Senior Housing",
    organization: "IREM Georgia Chapter",
  },
  {
    year: "2022",
    title: "Compliance Excellence Recognition",
    organization: "HUD Region IV",
  },
  {
    year: "2022",
    title: "Best Turnaround Performance",
    organization: "Affordable Housing Investors Council",
  },
  {
    year: "2021",
    title: "Resident Satisfaction Award",
    organization: "National Apartment Association",
  },
];

const successStories = [
  {
    title: "Riverside Turnaround",
    challenge: "89% occupancy, multiple HUD findings, deferred maintenance",
    result: "98% occupancy, zero findings, $2M in improvements",
    timeframe: "18 months",
    metrics: [
      { label: "Occupancy", before: "89%", after: "98%" },
      { label: "Audit Findings", before: "12", after: "0" },
      { label: "NOI Increase", before: "", after: "+42%" },
    ],
  },
  {
    title: "Heritage Heights Lease-Up",
    challenge: "New construction, aggressive lease-up timeline",
    result: "Full occupancy achieved ahead of schedule",
    timeframe: "6 months",
    metrics: [
      { label: "Target Occupancy", before: "12 mo", after: "6 mo" },
      { label: "Applications", before: "0", after: "450+" },
      { label: "Qualified Residents", before: "0", after: "144" },
    ],
  },
];

export default function Testimonials() {
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
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Don't just take our word for it. Hear from the housing authorities,
              developers, and property owners who trust HIG with their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Client Feedback"
            title="Trusted by Leading Organizations"
            description="Our clients span government housing authorities, non-profit developers, private owners, and faith-based organizations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {testimonial.category}
                  </span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.organization}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeading
            label="Case Studies"
            title="Success Stories"
            description="Real results from real properties. See how HIG has transformed underperforming assets into thriving communities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {story.title}
                    </h3>
                    <span className="text-sm text-accent font-medium">
                      {story.timeframe}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Challenge:
                    </span>
                    <p className="text-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Result:
                    </span>
                    <p className="text-foreground">{story.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {story.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {metric.label}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        {metric.before && (
                          <>
                            <span className="text-muted-foreground line-through">
                              {metric.before}
                            </span>
                            <span className="text-muted-foreground">→</span>
                          </>
                        )}
                        <span className="text-accent font-bold">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Recognition"
            title="Awards & Achievements"
            description="Industry recognition for our commitment to excellence in affordable housing management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-accent">
                    {award.year}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {award.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resident Testimonials */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Resident Voices
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              From Our Residents
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              The true measure of our success is the satisfaction of the residents
              we serve every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The maintenance team is always quick to respond. I feel heard and respected here.",
                author: "Dorothy M.",
                property: "Riverside Senior Village",
              },
              {
                quote:
                  "This is the first apartment where I've felt like part of a community. The staff genuinely cares.",
                author: "Michael T.",
                property: "Meadowbrook Family Apartments",
              },
              {
                quote:
                  "After 5 years here, I can say the management has always been professional and fair.",
                author: "Sandra L.",
                property: "Heritage Heights",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/10 rounded-xl p-6"
              >
                <Quote className="w-8 h-8 text-primary-foreground/30 mb-4" />
                <blockquote className="text-primary-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-primary-foreground/70">
                    {testimonial.property}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let us show you how professional management can transform your
            property's performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Request Proposal
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
