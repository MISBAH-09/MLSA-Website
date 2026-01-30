// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Calendar, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Active Members",
    description: "Student ambassadors driving innovation"
  },
  {
    icon: Calendar,
    value: 30,
    suffix: "+",
    label: "Events Organized",
    description: "Workshops, hackathons & seminars"
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "Certifications",
    description: "Students certified in Microsoft tech"
  },
  {
    icon: Globe,
    value: 1000,
    suffix: "+",
    label: "Students Reached",
    description: "Community impact across campus"
  }
];

function AnimatedNumber({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-bold gradient-text">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a thriving community of tech enthusiasts at COMSATS Lahore
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-blue-900 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-primary">
                <stat.icon size={24} className="text-primary-foreground" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="font-semibold text-foreground mt-2 mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
