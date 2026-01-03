import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionComponents";
import {
  Building2,
  Users,
  MapPin,
  Calendar,
  TrendingUp,
  Filter,
  ArrowRight,
  Home,
  Heart,
  Building,
} from "lucide-react";
import seniorHousing from "@/assets/senior-housing.jpg";
import familyHousing from "@/assets/family-housing.jpg";
import heroProperty from "@/assets/hero-property.jpg";

type PropertyType = "all" | "family" | "senior" | "special-needs";
type OwnershipType = "all" | "government" | "private" | "third-party";
type ProgramType = "all" | "lihtc" | "section-8" | "public-housing" | "market-rate";

interface Property {
  id: number;
  name: string;
  location: string;
  units: number;
  type: PropertyType;
  ownership: OwnershipType;
  program: ProgramType;
  managementStart: string;
  occupancy: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Riverside Senior Village",
    location: "Atlanta, GA",
    units: 120,
    type: "senior",
    ownership: "government",
    program: "section-8",
    managementStart: "2018",
    occupancy: 98,
    image: seniorHousing,
  },
  {
    id: 2,
    name: "Meadowbrook Family Apartments",
    location: "Birmingham, AL",
    units: 180,
    type: "family",
    ownership: "private",
    program: "lihtc",
    managementStart: "2019",
    occupancy: 97,
    image: familyHousing,
  },
  {
    id: 3,
    name: "Heritage Heights",
    location: "Nashville, TN",
    units: 96,
    type: "family",
    ownership: "third-party",
    program: "lihtc",
    managementStart: "2020",
    occupancy: 99,
    image: heroProperty,
  },
  {
    id: 4,
    name: "Sunrise Senior Living",
    location: "Charlotte, NC",
    units: 80,
    type: "senior",
    ownership: "government",
    program: "public-housing",
    managementStart: "2015",
    occupancy: 97,
    image: seniorHousing,
  },
  {
    id: 5,
    name: "Oakwood Terrace",
    location: "Jacksonville, FL",
    units: 200,
    type: "family",
    ownership: "private",
    program: "section-8",
    managementStart: "2017",
    occupancy: 96,
    image: familyHousing,
  },
  {
    id: 6,
    name: "Willowbrook Commons",
    location: "Memphis, TN",
    units: 144,
    type: "family",
    ownership: "third-party",
    program: "lihtc",
    managementStart: "2021",
    occupancy: 98,
    image: heroProperty,
  },
  {
    id: 7,
    name: "Golden Years Residence",
    location: "Savannah, GA",
    units: 72,
    type: "senior",
    ownership: "private",
    program: "lihtc",
    managementStart: "2016",
    occupancy: 99,
    image: seniorHousing,
  },
  {
    id: 8,
    name: "Community Gardens",
    location: "Charleston, SC",
    units: 160,
    type: "family",
    ownership: "government",
    program: "public-housing",
    managementStart: "2014",
    occupancy: 95,
    image: familyHousing,
  },
];

const clientTypes = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Housing Authorities",
    description: "Public housing agencies seeking professional third-party management",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Non-Profit Developers",
    description: "Mission-driven organizations focused on affordable housing",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Private Owners",
    description: "Individual and institutional investors in affordable housing",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Faith-Based Organizations",
    description: "Churches and religious organizations developing housing",
  },
];

const stats = [
  { value: "45+", label: "Properties" },
  { value: "8,500+", label: "Total Units" },
  { value: "97%", label: "Avg. Occupancy" },
  { value: "8", label: "States" },
];

export default function Portfolio() {
  const [propertyFilter, setPropertyFilter] = useState<PropertyType>("all");
  const [ownershipFilter, setOwnershipFilter] = useState<OwnershipType>("all");
  const [programFilter, setProgramFilter] = useState<ProgramType>("all");

  const filteredProperties = properties.filter((property) => {
    if (propertyFilter !== "all" && property.type !== propertyFilter) return false;
    if (ownershipFilter !== "all" && property.ownership !== ownershipFilter) return false;
    if (programFilter !== "all" && property.program !== programFilter) return false;
    return true;
  });

  const getTypeLabel = (type: PropertyType) => {
    const labels: Record<PropertyType, string> = {
      all: "All",
      family: "Family",
      senior: "Senior",
      "special-needs": "Special Needs",
    };
    return labels[type];
  };

  const getProgramLabel = (program: ProgramType) => {
    const labels: Record<ProgramType, string> = {
      all: "All",
      lihtc: "LIHTC",
      "section-8": "Section 8",
      "public-housing": "Public Housing",
      "market-rate": "Market Rate",
    };
    return labels[program];
  };

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
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Properties Under Management
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Explore our diverse portfolio of affordable housing communities
              across the Southeast, serving families, seniors, and special needs
              populations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-10">
        <div className="section-container">
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="section-container">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>

            {/* Property Type Filter */}
            <div className="flex flex-wrap gap-2">
              {(["all", "family", "senior"] as PropertyType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    propertyFilter === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {getTypeLabel(type)}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-border hidden sm:block" />

            {/* Program Filter */}
            <div className="flex flex-wrap gap-2">
              {(["all", "lihtc", "section-8", "public-housing"] as ProgramType[]).map(
                (program) => (
                  <button
                    key={program}
                    onClick={() => setProgramFilter(program)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      programFilter === program
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {getProgramLabel(program)}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated card-hover overflow-hidden group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {getTypeLabel(property.type as PropertyType)}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {getProgramLabel(property.program as ProgramType)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        <strong>{property.units}</strong> Units
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm">
                        <strong>{property.occupancy}%</strong> Occupied
                      </span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Managed since {property.managementStart}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeading
            label="Who We Serve"
            title="Client Types"
            description="We partner with diverse organizations united by a commitment to quality affordable housing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                  {client.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {client.title}
                </h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Add Your Property to Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover how HIG can transform your property's performance with
            professional, compliance-focused management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Request Management Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
