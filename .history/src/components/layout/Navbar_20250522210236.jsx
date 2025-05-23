    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { NAV_LINKS } from '@/constants';
    import { useScrollTo } from '@/hooks/useScrollTo';
    import { ThemeToggle } from '@/components/shared/ThemeToggle';
    import { Button } from '@/components/ui/button';
    import { Menu, X } from 'lucide-react';

    const Navbar = () => {
      const scrollTo = useScrollTo();
      const [isScrolled, setIsScrolled] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleLinkClick = (id) => {
        scrollTo(id);
        setMobileMenuOpen(false);
      };

      return (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || mobileMenuOpen ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
                className="text-2xl font-heading font-bold text-primary hover:text-secondary transition-colors"
              >
                Frankie Sanchez
              </a>
              
              <div className="hidden md:flex items-center space-x-2">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => handleLinkClick(link.id)}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Button>
                ))}
                <ThemeToggle />
              </div>

              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="ml-2 text-foreground hover:text-primary"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/90 backdrop-blur-lg pb-4"
            >
              <div className="flex flex-col items-center space-y-2 px-4">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => handleLinkClick(link.id)}
                    className="w-full text-center font-medium text-foreground hover:text-primary transition-colors py-3"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>
      );
    };

    export default Navbar;
  