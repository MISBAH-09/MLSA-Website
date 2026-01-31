// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import President from '../images/team/HamzaPresident.png'; 
import VicePresident from '../images/team/VicePresident.jpeg';
import TechDirector from '../images/team/TechDirector.jpeg';
import HeadofDirectors from '../images/team/HeadofDirectors.jpeg';
import Strategist from '../images/team/Strategist.jpeg';
import EventDirector from '../images/team/EventDirector.jpeg';
import MarketingDirector from '../images/team/MarketingDirector.jpg'



const team = [
  {
    id: 1,
    name: "Hamza Afzal",
    role: "President",
    image: President,
    linkedin: "https://www.linkedin.com/in/muhammad-hamza-afzal/",
  },
  {
    id: 2,
    name: "Muhammad Qasim Ali",
    role: "Vice President",
    image: VicePresident,
    linkedin: "https://www.linkedin.com/in/muhammad-qasim-ali-tareen-6042b4288/",
  },
   {
    id: 3,
    name: "Elaaf Massod",
    role: "Head of Directors",
    image: HeadofDirectors ,
    linkedin: "https://www.linkedin.com/in/eelaf-masood-2817a7333/",
  },
   {
    id: 4,
    name: "Mateen Waqar ",
    role: "Strategist",
    image: Strategist,
    linkedin: "#",
  },
  {
    id: 5,
    name: "Yar Muhammad Uwaim",
    role: "Tech Director",
    image: TechDirector,
    linkedin: "https://www.linkedin.com/in/yarmuhammadawaim/",

  },
   {
    id: 6,
    name: "Adeel Azhar",
    role: "Event Director",
    image: EventDirector,
    linkedin: "https://www.linkedin.com/in/muhammad-adeel-azhar-140712328/",
  },
   {
    id: 7,
    name: "Sundas Abid",
    role: "Marketing Director",
    image: MarketingDirector,
    linkedin: "https://www.linkedin.com/in/sundasabid/",
  },
];

export default function TeamSection() {
  return (
    <section className=" bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>Meet the Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-900 mb-4">
            The Minds Behind <span className="gradient-text">MLSA COMSATS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our passionate team of student leaders driving innovation and growth in the tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border group-hover:border-primary/20 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-20">
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        target="blank"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          {/* Tailwind Button */}
          {/* <Link
            to="/team"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View Full Team
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}
