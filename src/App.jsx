
    import React from 'react';
    import { ThemeProvider } from '@/contexts/ThemeProvider';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';
    import Hero from '@/components/sections/Hero';
    import About from '@/components/sections/About';
    import Portfolio from '@/components/sections/Portfolio';
    import Services from '@/components/sections/Services';
    import Blog from '@/components/sections/Blog';
    import Contact from '@/components/sections/Contact';
    import { Toaster } from '@/components/ui/toaster';
    import { Button } from '@/components/ui/button';
    import { ArrowUp } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useScrollTo } from '@/hooks/useScrollTo';

    const ScrollToTopButton = () => {
      const [isVisible, setIsVisible] = React.useState(false);
      const scrollTo = useScrollTo();

      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <Button
                size="icon"
                onClick={() => scrollTo('hero')}
                className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-deep-gold dark:hover:bg-deep-gold/90 dark:text-black"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-6 w-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };


    function App() {
      return (
        <ThemeProvider defaultTheme="dark" storageKey="frankie-sanchez-theme">
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <Portfolio />
              <Services />
              <Blog />
              <Contact />
            </main>
            <Footer />
            <Toaster />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      );
    }

    export default App;
  