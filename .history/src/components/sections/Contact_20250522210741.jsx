import React, { useState } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { SOCIAL_LINKS, CONTACT_INFO, CV_DOWNLOAD_LINK } from '@/constants';
import { motion } from 'framer-motion';
import { Send, Download, Mail as MailIcon, Phone as PhoneIcon } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      console.log('Form data submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out, Frankie will get back to you soon.",
        variant: "default", 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary dark:text-deep-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center group text-lg hover:text-primary dark:hover:text-deep-gold transition-colors">
                  <MailIcon className="h-5 w-5 mr-3 text-primary dark:text-deep-gold group-hover:scale-110 transition-transform" />
                  {CONTACT_INFO.email}
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center group text-lg hover:text-primary dark:hover:text-deep-gold transition-colors">
                  <PhoneIcon className="h-5 w-5 mr-3 text-primary dark:text-deep-gold group-hover:scale-110 transition-transform" />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Follow Me</h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted hover:bg-primary/20 dark:hover:bg-deep-gold/20 text-primary dark:text-deep-gold transition-all duration-300 hover:scale-110"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Frankie Sanchez on ${link.name}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Resume/CV</h3>
              {/* User should place FrankieSanchez_CV.pdf in the /public directory */}
              <Button 
                asChild 
                className="bg-gradient-to-r from-electric-blue to-deep-gold text-white hover:opacity-90 transition-opacity px-6 py-3"
              >
                <a href={CV_DOWNLOAD_LINK} download="FrankieSanchez_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl shadow-2xl bg-card border border-border glassmorphism-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  required 
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                <Input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding..." 
                  required 
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  required 
                  className="mt-1"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-deep-gold dark:hover:bg-deep-gold/90 dark:text-black transition-colors py-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-transparent border-t-current rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
  