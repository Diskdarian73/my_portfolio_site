    import React from 'react';
    import SectionWrapper from '@/components/layout/SectionWrapper';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { SERVICES } from '@/constants';
    import { motion } from 'framer-motion';

    const ServiceCard = ({ service, index }) => {
      const Icon = service.icon;
      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full text-center group hover:border-primary dark:hover:border-deep-gold transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader className="items-center">
              <motion.div 
                className="p-4 bg-primary/10 dark:bg-deep-gold/10 rounded-full mb-4 group-hover:bg-primary dark:group-hover:bg-deep-gold transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <Icon className="h-10 w-10 text-primary dark:text-deep-gold group-hover:text-white dark:group-hover:text-black transition-colors duration-300" aria-hidden="true" />
              </motion.div>
              <CardTitle className="text-xl font-bold group-hover:text-primary dark:group-hover:text-deep-gold transition-colors duration-300">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    const Services = () => {
      return (
        <SectionWrapper id="services" className="bg-background text-foreground">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary dark:text-deep-gold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Services
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Offering a range of creative and technical services to bring your projects to life.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      );
    };

    export default Services;
  