import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300 dark:text-neutral-400 py-12 section-padding border-t border-neutral-700 dark:border-neutral-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Frankie Sanchez. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with passion and pixels.
        </p>
        {/* TODO: Add social media links here if desired */}
      </div>
    </footer>
  );
};

export default Footer;
  