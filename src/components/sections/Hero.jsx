
    import React, { useState, useEffect, useCallback } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ROLES } from '@/constants';
    import { ArrowDown } from 'lucide-react';
    import { useScrollTo } from '@/hooks/useScrollTo';

    const TYPE_SPEED = 100;
    const DELETE_SPEED = 70;
    const PAUSE_DURATION = 2000;

    const Hero = () => {
      const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
      const [displayedRole, setDisplayedRole] = useState('');
      const [isDeleting, setIsDeleting] = useState(false);
      const scrollTo = useScrollTo();

      const handleTypingAnimation = useCallback(() => {
        const role = ROLES[currentRoleIndex];
        let timeoutId;

        if (isDeleting) {
          if (displayedRole.length > 0) {
            timeoutId = setTimeout(() => {
              setDisplayedRole((prev) => prev.substring(0, prev.length - 1));
            }, DELETE_SPEED);
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
          }
        } else {
          if (displayedRole.length < role.length) {
            timeoutId = setTimeout(() => {
              setDisplayedRole((prev) => role.substring(0, prev.length + 1));
            }, TYPE_SPEED);
          } else {
            timeoutId = setTimeout(() => {
              setIsDeleting(true);
            }, PAUSE_DURATION);
          }
        }
        return () => clearTimeout(timeoutId);
      }, [currentRoleIndex, displayedRole, isDeleting]);

      useEffect(() => {
        const clearEffect = handleTypingAnimation();
        return clearEffect;
      }, [handleTypingAnimation]);

      const heroImageUrl = "https://res.cloudinary.com/ddpfw2na3/image/upload/v1746540321/DISK20257810_riz3na.jpg";

      return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
          </div>
          
          <motion.div 
            className="relative z-10 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 animate-text-focus-in">
              Frankie Sanchez
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans mb-2 text-neutral-200">
              Building ideas into visual code.
            </p>
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-deep-gold">
                {displayedRole}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="inline-block"
              >
                _
              </motion.span>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-deep-gold dark:hover:bg-deep-gold/90 dark:text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => scrollTo('about')}
            >
              Discover My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <ArrowDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </section>
      );
    };

    export default Hero;
  