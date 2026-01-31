// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Award, Users, Briefcase, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Award,
    title: "Microsoft Certifications",
    description: "Free access to Microsoft Learn certifications and learning resources.",
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Connect with 100,000+ ambassadors worldwide and expand your network.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Exclusive internship and job opportunities at top tech companies.",
  },
  {
    icon: Rocket,
    title: "Leadership Skills",
    description: "Develop essential leadership and public speaking abilities.",
  },
];

const perks = [
  "Microsoft 365 Premium Access",
  "LinkedIn Premium Subscription",
  "Exclusive Swag & Merchandise",
  "Global Networking Events",
  "Career Mentorship Programs",
];

export default function WhyJoinSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-hero opacity-5 rounded-l-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Rocket size={18} />
              <span>Why Join Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-900 leading-tight mb-6">
              Unlock Your Potential with{" "}
              <span className="gradient-text">MLSA</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a Microsoft Learn Student Ambassador, you'll gain access to exclusive 
              resources, global networking opportunities, and the skills to become a 
              tech leader of tomorrow.
            </p>

            {/* Perks Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={18} className="text-mlsa-green flex-shrink-0" />
                  <span className="text-sm text-foreground">{perk}</span>
                </motion.div>
              ))}
            </div>

            {/* Plain Tailwind Button */}
            {/* <Link
              to="/join"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Apply Now
            </Link> */}
          </motion.div>

          {/* Right Content - Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border-4 border-blue-900 hover:border-primary/20 hover:shadow-lg hover:scale-150 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
