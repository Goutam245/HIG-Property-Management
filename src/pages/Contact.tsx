import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Proposal Request Submitted", description: "We'll contact you within 1 business day." });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-semibold uppercase tracking-wider mb-6">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Request a Management Proposal</h1>
            <p className="text-lg text-primary-foreground/90">Tell us about your property and we'll prepare a customized management proposal.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card-elevated p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">Property Management Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><Label htmlFor="orgName">Organization Name *</Label><Input id="orgName" required placeholder="Housing Authority / Company" /></div>
                    <div><Label htmlFor="contactName">Contact Name *</Label><Input id="contactName" required placeholder="Full Name" /></div>
                    <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" required placeholder="email@example.com" /></div>
                    <div><Label htmlFor="phone">Phone *</Label><Input id="phone" type="tel" required placeholder="(555) 123-4567" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><Label htmlFor="propertyType">Property Type</Label>
                      <Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent><SelectItem value="family">Family</SelectItem><SelectItem value="senior">Senior</SelectItem><SelectItem value="special-needs">Special Needs</SelectItem></SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="units">Number of Units</Label><Input id="units" type="number" placeholder="e.g., 100" /></div>
                    <div><Label htmlFor="location">Property Location</Label><Input id="location" placeholder="City, State" /></div>
                    <div><Label htmlFor="program">Program Type</Label>
                      <Select><SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger>
                        <SelectContent><SelectItem value="lihtc">LIHTC</SelectItem><SelectItem value="section8">Section 8</SelectItem><SelectItem value="public">Public Housing</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div><Label htmlFor="message">Additional Information</Label><Textarea id="message" rows={4} placeholder="Tell us about your property and management needs..." /></div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Submitting..." : <><Send className="w-4 h-4" /> Submit Inquiry</>}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elevated p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-accent mt-1" /><div><p className="font-medium">Corporate Office</p><p className="text-sm text-muted-foreground">1234 Professional Drive, Suite 500<br/>Atlanta, GA 30309</p></div></div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /><div><p className="font-medium">(800) 555-0123</p><p className="text-xs text-muted-foreground">Main Office</p></div></div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /><a href="mailto:info@higpm.com" className="text-primary hover:underline">info@higpm.com</a></div>
                  <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-accent" /><div><p className="font-medium">Mon-Fri: 8am - 6pm</p></div></div>
                </div>
              </div>
              <div className="card-elevated p-6 bg-accent text-accent-foreground">
                <h3 className="font-display text-lg font-semibold mb-2">24/7 Emergency Line</h3>
                <a href="tel:+1-800-555-9999" className="text-2xl font-bold">(800) 555-9999</a>
                <p className="text-sm mt-2 opacity-90">For current residents and properties only</p>
              </div>
              <div className="card-elevated p-6">
                <h3 className="font-display text-lg font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm">
                  {["Response within 1 business day", "Property walk-through scheduling", "Customized management proposal", "Transition timeline discussion"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
