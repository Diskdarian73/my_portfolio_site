
    import { Code, Palette, Camera, Brain, Bot, Server, ShoppingCart, PenTool, Users, BarChart3, Mic2, Film, Gamepad2, Zap, Cloud, Shield, Settings, LayoutDashboard, MessageSquare, GitFork, Search, Globe, Briefcase, Award, Lightbulb, TrendingUp, Target, Edit3, Link, Share2, Heart, Star, FolderOpen, FileText, Download, CalendarDays, Clock, MapPin, Phone, Mail, Linkedin, Github, Twitter, Instagram, Facebook, Youtube, Twitch, Instagram as Tiktok } from 'lucide-react';

    export const NAV_LINKS = [
      { href: "hero", label: "Home" },
      { href: "about", label: "About" },
      { href: "portfolio", label: "Portfolio" },
      { href: "services", label: "Services" },
      { href: "blog", label: "Blog" },
      { href: "contact", label: "Contact" },
    ];

    export const ROLES = [
      "Digital Artist",
      "Photographer",
      "AI Prompt Engineer",
      "Full-Stack Developer",
      "Social Media Manager",
    ];

    export const PORTFOLIO_ITEMS = [
      {
        id: 1,
        title: "Cosmic Dreams",
        category: "Digital Art",
        imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/27eaab7f-6714-4ef3-a6ce-157d1b266753/b398f3f623f5ca974e047919d67c1663.jpg",
        description: "A vibrant digital painting exploring the depths of space and imagination, created with Procreate and Photoshop.",
        tools: "Procreate, Photoshop",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 2,
        title: "Urban Reflections",
        category: "Photography",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        description: "A series of photographs capturing the interplay of light and architecture in modern cityscapes.",
        tools: "Canon EOS R5, Adobe Lightroom",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 3,
        title: "AI Storyteller",
        category: "AI Prompt Engineering",
        imageUrl: "https://res.cloudinary.com/ddpfw2na3/image/upload/t_ENHANCED/v1747234390/Image_7_qszzvl.jpg",
        description: "Developed a series of advanced prompts for generating narrative scripts and character backstories using GPT-4.",
        tools: "GPT-4, Midjourney",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 4,
        title: "E-commerce Platform",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL, featuring a custom CMS.",
        tools: "React, Node.js, PostgreSQL, Stripe",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 5,
        title: "Abstract Dimensions",
        category: "AI-Generated Art",
        imageUrl: "https://res.cloudinary.com/ddpfw2na3/image/upload/t_BGR/v1747233700/Image_120_btvw0o.png",
        description: "Exploring geometric forms and color theory through AI algorithms, generating unique abstract pieces.",
        tools: "Midjourney, Custom Python Scripts",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 6,
        title: "Portfolio Website",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        description: "This very portfolio site, designed and developed to showcase creative works. Built with React and TailwindCSS.",
        tools: "React, TailwindCSS, Framer Motion",
        liveLink: "#",
        repoLink: "#",
      },
       {
        id: 7,
        title: "Nature's Palette",
        category: "Photography",
        imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        description: "A collection of landscape photographs emphasizing the vibrant colors and textures found in nature.",
        tools: "Sony A7III, Capture One",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 8,
        title: "Generative Patterns",
        category: "AI Prompt Engineering",
        imageUrl: "https://res.cloudinary.com/ddpfw2na3/image/upload/t_ENHANCED/v1747950623/Image_r6o2mq.jpg",
        description: "Creating intricate and seamless patterns using AI, suitable for textiles, wallpapers, and digital backgrounds.",
        tools: "Stable Diffusion, ControlNet",
        liveLink: "#",
        repoLink: "#",
      },
      {
        id: 9,
        title: "Fashion Figure Inc. Management",
        category: "Social Media Management & Marketing",
        imageUrl: "https://res.cloudinary.com/ddpfw2na3/image/upload/v1747955178/Image_1_hyclib.jpg",
        description: "Managed and grew social media presence for Fashion Figure Inc., focusing on YouTube content strategy and audience engagement.",
        tools: "YouTube Studio, Hootsuite, Canva",
        liveLink: "https://youtube.com/@fashionfigureinc?si=Q8sVSMXpU_s7LQXI",
        repoLink: "#",
      },
      {
        id: 10,
        title: "KILLERTAPENETWORK Promotion",
        category: "Social Media Management & Marketing",
        imageUrl: "https://res.cloudinary.com/ddpfw2na3/image/upload/v1747235794/Image_136_lt6pb2.jpg",
        description: "Led marketing campaigns and content distribution for KILLERTAPENETWORK on SoundCloud, increasing track plays and follower count.",
        tools: "SoundCloud Insights, Buffer, Adobe Audition",
        liveLink: "https://soundcloud.com/killertapenetwork",
        repoLink: "#",
      }
    ];

    export const SERVICES = [
      {
        icon: Code,
        title: "Web Development",
        description: "Crafting responsive, high-performance websites and web applications with modern technologies.",
      },
      {
        icon: Palette,
        title: "Digital Art & Illustration",
        description: "Creating unique digital paintings, illustrations, and concept art for various media.",
      },
      {
        icon: Camera,
        title: "Photography",
        description: "Professional photography services, including portrait, event, and commercial shoots.",
      },
      {
        icon: Bot,
        title: "AI Art & Prompt Engineering",
        description: "Leveraging AI tools to generate stunning visuals and developing custom prompts for creative projects.",
      },
      {
        icon: PenTool,
        title: "Digital Branding",
        description: "Developing cohesive brand identities, including logos, style guides, and marketing materials.",
      },
      {
        icon: Server,
        title: "Full-Stack Solutions",
        description: "End-to-end development, from database design to UI/UX implementation and deployment.",
      },
      {
        icon: Users,
        title: "Social Media Management",
        description: "Strategic social media planning, content creation, and community engagement to boost online presence.",
      },
      {
        icon: BarChart3,
        title: "Marketing Strategy",
        description: "Developing and implementing data-driven marketing campaigns to achieve business objectives.",
      }
    ];

    export const BLOG_POSTS = [
      {
        id: 1,
        title: "The Art of AI Prompting: A Beginner's Guide",
        category: "AI Prompt Engineering",
        date: "2025-04-15",
        excerpt: "Unlock the potential of AI image generation with this comprehensive guide to writing effective prompts.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        tags: ["AI", "Prompting", "Tutorial", "Midjourney"],
        slug: "ai-prompting-guide",
      },
      {
        id: 2,
        title: "Mastering Long Exposure Photography",
        category: "Photography",
        date: "2025-03-22",
        excerpt: "Tips and tricks for capturing breathtaking long exposure shots, from cityscapes to starry nights.",
        imageUrl: "https://images.unsplash.com/photo-1517394834078-a3830667f30a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        tags: ["Photography", "Techniques", "Long Exposure", "Landscape"],
        slug: "long-exposure-photography",
      },
      {
        id: 3,
        title: "Building a Scalable Web App with React and Supabase",
        category: "Web Development",
        date: "2025-02-10",
        excerpt: "A case study on developing a modern web application using the PERN stack with Supabase for backend services.",
        imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        tags: ["Web Development", "React", "Supabase", "Case Study"],
        slug: "scalable-web-app-react-supabase",
      },
    ];

    export const SOCIAL_LINKS = [
      { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/kingpiragua" },
      { name: "Twitter / X", icon: Twitter, url: "https://x.com/diskdarian73" },
      { name: "TikTok", icon: Tiktok, url: "https://www.tiktok.com/@diskdarian" },
      { name: "GitHub", icon: Github, url: "#" }, 
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ];

    export const CONTACT_INFO = {
      email: "frank@diskdarian.com",
      phone: "773-879-4872",
      resumeUrl: "/FrankieSanchez_CV.pdf", 
    };
    
    export const CV_DOWNLOAD_LINK = "/FrankieSanchez_CV.pdf";

    export const SITE_METADATA = {
      title: "Frankie Sanchez | Creative Professional",
      description: "Portfolio of Frankie Sanchez - Digital Artist, Photographer, AI Prompt Engineer, Full-Stack Developer, and Social Media Manager.",
      author: "Frankie Sanchez",
    };

    export const ICON_MAP = {
      Code, Palette, Camera, Brain, Bot, Server, ShoppingCart, PenTool, Users, BarChart3, Mic2, Film, Gamepad2, Zap, Cloud, Shield, Settings, LayoutDashboard, MessageSquare, GitFork, Search, Globe, Briefcase, Award, Lightbulb, TrendingUp, Target, Edit3, Link, Share2, Heart, Star, FolderOpen, FileText, Download, CalendarDays, Clock, MapPin, Phone, Mail, Linkedin, Github, Twitter, Instagram, Facebook, Youtube, Twitch, Tiktok
    };
  