
    import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';

    const SectionWrapper = ({ children, id, className = "" }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      };

      return (
        <motion.section
          id={id}
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`section-padding ${className}`}
        >
          {children}
        </motion.section>
      );
    };

    export default SectionWrapper;
  