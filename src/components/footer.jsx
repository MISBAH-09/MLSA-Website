import { Instagram, Linkedin, Mail, Github, MapPin, Heart, Facebook } from 'lucide-react';
import ContributorList from './ContributorList';
import logo from '../images/mlsa_logo.png'; 

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/mlsa.cui.lahore', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/mlsa-cui-lahore/', label: 'LinkedIn' },
    { 
      icon: <Facebook size={20} />, 
      href: 'https://www.facebook.com/profile.php?id=61573001279746&sfnsn=scwspwa&mibextid=RUbZ1f', 
      label: 'Facebook' 
    },
  ];

  return (
    <footer className="pt-20 pb-8 bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo} 
                alt="MLSA Logo"
                className="h-10 w-auto object-contain bg-white"
              />
              <span className="text-xl font-bold text-white">
                MLSA COMSATS
              </span>
            </div>

            <p className="text-white leading-relaxed mb-6">
              Empowering students to learn, build, and grow through technology
              and community.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target='_blank'
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-sky-accent hover:border-sky-accent hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>

            <div className="space-y-4 text-white/60 text-sm">
              
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-0.5 flex-shrink-0" />
                <div className='hover:text-white'>
                  <p>COMSATS University Islamabad</p>
                  <p>Lahore Campus, Pakistan</p>
                </div>
              </div>

              {/* Email  */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a
                  href="mailto:mlsa.cui.lahore@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  mlsa.cui.lahore@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Contributors */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Contributors
            </h4>

            <ContributorList />

            <a
              href="https://github.com/MISBAH-09/MLSA-Website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-white/60 hover:text-white transition"
            >
              <Github size={16} 
              className='text-white/70 hover:text-white transition-all duration-300'
              />
              View on GitHub
            </a>
          </div>

        </div>

       {/* Bottom */}
<div className="border-t border-white pt-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-white text-sm flex items-center gap-1">
      Made with <Heart size={14} /> by MLSA COMSATS Lahore
    </p>

    <p className="text-white/50 text-sm flex items-center gap-2">
      © {new Date().getFullYear()} • Powered by
      <span className="font-semibold text-white flex items-center gap-1">
        <svg
          className="w-4 h-4"
          viewBox="0 0 23 23"
          fill="currentColor"
        >
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
        Microsoft
      </span>
    </p>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;