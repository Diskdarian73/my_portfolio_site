import React from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';

const Blog = () => {
  return (
    <SectionWrapper id="blog" className="bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary dark:text-deep-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Prompt Engineering Blog
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Insights, guides, and case studies on the art and science of AI prompting. Stay tuned for updates!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Rss className="h-24 w-24 text-primary/30 dark:text-deep-gold/30 mx-auto mb-6" aria-hidden="true" />
          <p className="text-xl font-semibold text-foreground mb-6">Content Coming Soon!</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 dark:border-deep-gold dark:text-deep-gold dark:hover:bg-deep-gold/10 transition-colors"
          >
            Subscribe for Updates (Coming Soon)
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Blog;
  