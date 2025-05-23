
    import React from 'react';
    import SectionWrapper from '@/components/layout/SectionWrapper';
    import { motion } from 'framer-motion';

    const About = () => {
      const artisticPortraitUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/27eaab7f-6714-4ef3-a6ce-157d1b266753/48ceac315b99a6530ebcda4e36133637.jpg";

      return (
        <SectionWrapper id="about" className="bg-background text-foreground">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary dark:text-deep-gold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue to-deep-gold rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img  
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover aspect-square" 
                  alt="Artistic portrait of Frankie Sanchez"
                 src={artisticPortraitUrl} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl mb-6 leading-relaxed font-sans">
                  Hello! I'm Frankie Sanchez, a multi-disciplinary creative professional passionate about the intersection of art, technology, and storytelling. My journey has led me through the captivating worlds of digital art, the narrative power of photography, the innovative frontier of AI prompt engineering, and the logical precision of full-stack development.
                </p>
                <p className="text-lg md:text-xl mb-6 leading-relaxed font-sans">
                  My mission is to transform complex ideas into compelling visual and digital experiences. Whether I'm crafting an immersive website, capturing a fleeting moment, designing with AI, or painting with pixels, I strive for excellence, innovation, and a touch of magic.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-sans">
                  I believe in clean code, minimalistic UI/UX, and aesthetics that not only look good but also serve a purpose. Let's build something amazing together.
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      );
    };

    export default About;
  