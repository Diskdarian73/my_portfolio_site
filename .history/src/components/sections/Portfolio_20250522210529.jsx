    import React, { useState } from 'react';
    import SectionWrapper from '@/components/layout/SectionWrapper';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
    import { PORTFOLIO_ITEMS } from '@/constants';
    import { motion } from 'framer-motion';
    import { Eye, Code, Github, ExternalLink } from 'lucide-react';

    const PortfolioCard = ({ item, onOpenLightbox }) => {
      return (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="group cursor-pointer"
          onClick={() => onOpenLightbox(item)}
        >
          <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary dark:hover:border-deep-gold">
            <CardHeader className="p-0 relative">
              <div className="aspect-video overflow-hidden">
                <img  
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={item.title}
                 src={item.imageUrl || `https://source.unsplash.com/random/400x300/?${item.category.toLowerCase()},${item.title.toLowerCase().split(' ').join(',')}`} />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-xl font-bold mb-1 group-hover:text-primary dark:group-hover:text-deep-gold transition-colors duration-300">{item.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{item.category}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center text-xs text-muted-foreground">
                <Code className="mr-1 h-3 w-3" />
                <span>{item.tools}</span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    const Portfolio = () => {
      const [selectedItem, setSelectedItem] = useState(null);
      const [isLightboxOpen, setIsLightboxOpen] = useState(false);

      const handleOpenLightbox = (item) => {
        setSelectedItem(item);
        setIsLightboxOpen(true);
      };

      const handleCloseLightbox = () => {
        setIsLightboxOpen(false);
        setTimeout(() => setSelectedItem(null), 300); 
      };
      
      const categories = ["All", ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];
      const [activeFilter, setActiveFilter] = useState("All");

      const filteredItems = activeFilter === "All" 
        ? PORTFOLIO_ITEMS 
        : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

      return (
        <SectionWrapper id="portfolio" className="bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary dark:text-deep-gold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A selection of my work across various disciplines. Click on any item to see more details.
            </motion.p>

            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`transition-all duration-300 ${activeFilter === category ? 'bg-primary text-primary-foreground dark:bg-deep-gold dark:text-black' : 'border-primary/50 text-primary dark:border-deep-gold/50 dark:text-deep-gold hover:bg-primary/10 dark:hover:bg-deep-gold/10'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} onOpenLightbox={handleOpenLightbox} />
              ))}
            </motion.div>
          </div>

          {selectedItem && (
            <Dialog open={isLightboxOpen} onOpenChange={handleCloseLightbox}>
              <DialogContent className="sm:max-w-[600px] glassmorphism-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading text-primary dark:text-deep-gold">{selectedItem.title}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">{selectedItem.category}</DialogDescription>
                </DialogHeader>
                <div className="my-4">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-border">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={selectedItem.title}
                     src={selectedItem.imageUrl || `https://source.unsplash.com/random/800x600/?${selectedItem.category.toLowerCase()},${selectedItem.title.toLowerCase().split(' ').join(',')}`} />
                  </div>
                  <p className="text-sm text-foreground mb-2">{selectedItem.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-semibold">Tools:</span> {selectedItem.tools}
                  </p>
                  <div className="flex space-x-3">
                    {selectedItem.liveLink && selectedItem.liveLink !== '#' && (
                      <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary dark:hover:bg-deep-gold/10 dark:hover:text-deep-gold">
                        <a href={selectedItem.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                        </a>
                      </Button>
                    )}
                    {selectedItem.repoLink && selectedItem.repoLink !== '#' && (
                      <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary dark:hover:bg-deep-gold/10 dark:hover:text-deep-gold">
                        <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </SectionWrapper>
      );
    };

    export default Portfolio;
  