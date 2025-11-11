import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturedSection from './components/FeaturedSection';
import BlogGrid from './components/BlogGrid';
import Pagination from './components/Pagination';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 9;

  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "React Performance Optimization: Advanced Techniques for 2024",
      slug: "react-performance-optimization-2024",
      excerpt: "Discover cutting-edge techniques to optimize React applications, including concurrent features, memory management, and bundle optimization strategies that can improve your app's performance by up to 60%.",
      content: `React performance optimization has evolved significantly with the introduction of React 18 and its concurrent features. In this comprehensive guide, we'll explore advanced techniques that go beyond basic optimization patterns.\n\nWe'll cover concurrent rendering, automatic batching, and the new useTransition hook that allows you to mark updates as non-urgent. These features enable React to interrupt rendering work and prioritize more important updates, leading to better user experience.\n\nMemory management is another crucial aspect we'll dive into, including proper cleanup of event listeners, avoiding memory leaks in useEffect, and optimizing component re-renders through strategic use of useMemo and useCallback.\n\nBundle optimization strategies include code splitting at the route and component level, lazy loading of heavy components, and implementing proper preloading strategies for critical resources.`,
      category: "Technical Tutorials",
      author: {
        name: "Rajesh Kumar",
        role: "Senior React Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      publishedAt: "2024-12-15T10:30:00Z",
      views: 15420,
      featured: true,
      tags: ["React", "Performance", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "MongoDB Scaling Strategies for High-Traffic Applications",
      slug: "mongodb-scaling-strategies",
      excerpt: "Learn how to scale MongoDB databases effectively for applications handling millions of requests. Covers sharding, replica sets, indexing strategies, and performance monitoring techniques.",
      content: `Scaling MongoDB for high-traffic applications requires a deep understanding of database architecture and performance optimization techniques. This guide covers everything from basic optimization to advanced scaling strategies.\n\nWe'll start with indexing strategies that can dramatically improve query performance. Proper indexing is often the difference between a query that takes milliseconds versus one that takes seconds.\n\nSharding is MongoDB's approach to horizontal scaling, allowing you to distribute data across multiple servers. We'll explore when to implement sharding, how to choose the right shard key, and common pitfalls to avoid.\n\nReplica sets provide high availability and read scaling. We'll discuss optimal replica set configurations, read preferences, and how to handle failover scenarios gracefully.`,
      category: "Technical Tutorials",
      author: {
        name: "Priya Sharma",
        role: "Database Architect",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2024-12-10T14:15:00Z",
      views: 12350,
      featured: true,
      tags: ["MongoDB", "Database", "Scaling", "Performance"]
    },
    {
      id: 3,
      title: "Digital Transformation Trends in Indian Startups: 2024 Analysis",
      slug: "indian-startup-digital-transformation-2024",
      excerpt: "An in-depth analysis of how Indian startups are embracing digital transformation, from fintech innovations to e-commerce evolution and the role of AI in business growth.",
      content: `The Indian startup ecosystem has witnessed unprecedented digital transformation in 2024, driven by technological advancement and changing consumer behavior. This comprehensive analysis examines key trends shaping the landscape.\n\nFintech continues to lead the transformation with innovations in digital payments, lending platforms, and cryptocurrency adoption. We'll explore how startups are leveraging blockchain technology and AI for financial services.\n\nE-commerce evolution has been remarkable, with startups implementing advanced personalization, AR/VR shopping experiences, and sustainable delivery solutions. The integration of social commerce and live streaming has created new revenue streams.\n\nAI adoption has accelerated across sectors, from customer service chatbots to predictive analytics and automated decision-making systems. We'll examine successful AI implementations and their impact on business growth.`,
      category: "Industry Insights",
      author: {
        name: "Amit Patel",
        role: "Business Analyst",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      publishedAt: "2024-12-08T09:00:00Z",
      views: 8920,
      featured: false,
      tags: ["Startups", "Digital Transformation", "India", "Business"]
    },
    {
      id: 4,
      title: "Building a Scalable E-commerce Platform: Complete Case Study",
      slug: "scalable-ecommerce-platform-case-study",
      excerpt: "A detailed case study of building a scalable e-commerce platform from scratch, handling 100K+ daily users with React, Node.js, and microservices architecture.",
      content: `This case study documents the complete journey of building a scalable e-commerce platform capable of handling over 100,000 daily active users. We'll cover architecture decisions, technology choices, and lessons learned.\n\nThe project started with a monolithic architecture but quickly evolved to microservices as the user base grew. We'll discuss the migration process, service boundaries, and inter-service communication patterns.\n\nFrontend architecture utilized React with Next.js for server-side rendering and optimal SEO performance. We implemented advanced state management with Redux Toolkit and optimized the user experience with progressive web app features.\n\nBackend services were built with Node.js and Express, utilizing MongoDB for product data and Redis for caching and session management. We'll explore the API design patterns and security implementations that ensured scalability and reliability.`,
      category: "Case Studies",
      author: {
        name: "Sneha Reddy",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      publishedAt: "2024-12-05T16:45:00Z",
      views: 11200,
      featured: false,
      tags: ["E-commerce", "Scalability", "React", "Node.js", "Case Study"]
    },
    {
      id: 5,
      title: "Effective Client Communication Strategies for Freelance Developers",
      slug: "client-communication-strategies-freelancers",
      excerpt: "Master the art of client communication with proven strategies that help freelance developers build trust, manage expectations, and deliver successful projects consistently.",
      content: `Effective client communication is the cornerstone of successful freelance development projects. This guide provides actionable strategies to improve your client relationships and project outcomes.\n\nSetting clear expectations from the beginning is crucial. We'll cover how to create comprehensive project proposals, define scope boundaries, and establish communication protocols that prevent misunderstandings.\n\nRegular progress updates keep clients engaged and informed. We'll explore different communication formats, from weekly status reports to interactive project dashboards that provide real-time visibility into development progress.\n\nHandling difficult conversations and scope changes requires tact and professionalism. We'll discuss strategies for managing client expectations, negotiating changes, and maintaining positive relationships even when challenges arise.`,
      category: "Business Tips",
      author: {
        name: "Vikram Singh",
        role: "Freelance Consultant",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      publishedAt: "2024-12-03T11:20:00Z",
      views: 6780,
      featured: false,
      tags: ["Freelancing", "Communication", "Business", "Client Management"]
    },
    {
      id: 6,
      title: "AI Integration in Modern Web Development: Practical Applications",
      slug: "ai-integration-web-development",
      excerpt: "Explore practical ways to integrate AI into web applications, from chatbots and recommendation systems to automated testing and code generation tools.",
      content: `Artificial Intelligence is revolutionizing web development, offering new possibilities for creating intelligent, responsive applications. This comprehensive guide explores practical AI integration strategies.\n\nChatbots and conversational interfaces have become essential for modern web applications. We'll cover implementation strategies using natural language processing, integration with popular AI services, and best practices for user experience design.\n\nRecommendation systems can significantly improve user engagement and conversion rates. We'll explore different algorithmic approaches, from collaborative filtering to machine learning-based recommendations, and their implementation in web applications.\n\nAutomated testing and code generation tools powered by AI are changing how developers work. We'll examine tools like GitHub Copilot, automated test generation, and AI-powered code review systems that can improve development efficiency and code quality.`,
      category: "Industry Insights",
      author: {
        name: "Ananya Gupta",
        role: "AI/ML Engineer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      publishedAt: "2024-11-28T13:30:00Z",
      views: 9450,
      featured: false,
      tags: ["AI", "Machine Learning", "Web Development", "Automation"]
    },
    {
      id: 7,
      title: "Progressive Web Apps: The Future of Mobile Web Experience",
      slug: "progressive-web-apps-mobile-future",
      excerpt: "Discover how Progressive Web Apps are bridging the gap between web and native mobile applications, with implementation strategies and real-world examples.",
      content: `Progressive Web Apps (PWAs) represent the future of mobile web experiences, combining the best of web and native applications. This guide covers everything you need to know about PWA development.\n\nService Workers are the backbone of PWAs, enabling offline functionality, background sync, and push notifications. We'll explore service worker implementation patterns, caching strategies, and performance optimization techniques.\n\nApp-like experiences on the web require careful attention to user interface design and interaction patterns. We'll discuss responsive design principles, touch-friendly interfaces, and navigation patterns that feel native on mobile devices.\n\nInstallation and engagement features make PWAs competitive with native apps. We'll cover web app manifests, installation prompts, and engagement strategies that encourage users to add your PWA to their home screen.`,
      category: "Technical Tutorials",
      author: {
        name: "Rohit Mehta",
        role: "Mobile Web Specialist",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      publishedAt: "2024-11-25T15:10:00Z",
      views: 7890,
      featured: false,
      tags: ["PWA", "Mobile", "Web Development", "Service Workers"]
    },
    {
      id: 8,
      title: "Building a SaaS Application: From MVP to Scale",
      slug: "saas-application-mvp-to-scale",
      excerpt: "A comprehensive guide to building and scaling SaaS applications, covering architecture decisions, user onboarding, billing systems, and growth strategies.",
      content: `Building a successful SaaS application requires careful planning and execution from MVP to scale. This comprehensive guide covers the entire journey with practical insights and proven strategies.\n\nMVP development focuses on core functionality that solves a specific problem for your target audience. We'll discuss feature prioritization, user feedback collection, and iterative development approaches that help validate your product-market fit.\n\nScaling challenges emerge as your user base grows. We'll explore database optimization, caching strategies, CDN implementation, and microservices architecture that enable your application to handle increased load efficiently.\n\nBilling and subscription management are critical components of SaaS success. We'll cover integration with payment processors, handling different pricing models, and implementing features like trial periods, upgrades, and cancellations.`,
      category: "Case Studies",
      author: {
        name: "Kavya Nair",
        role: "SaaS Product Manager",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      publishedAt: "2024-11-20T10:45:00Z",
      views: 10300,
      featured: false,
      tags: ["SaaS", "Scaling", "Business", "Product Development"]
    },
    {
      id: 9,
      title: "Cybersecurity Best Practices for Web Applications in 2024",
      slug: "web-application-cybersecurity-2024",
      excerpt: "Essential cybersecurity practices every web developer should implement to protect applications from modern threats, including OWASP Top 10 and emerging security challenges.",
      content: `Web application security has never been more critical as cyber threats continue to evolve. This comprehensive guide covers essential security practices that every developer should implement in 2024.\n\nThe OWASP Top 10 provides a foundation for understanding common security vulnerabilities. We'll explore each vulnerability in detail, from injection attacks to security misconfigurations, with practical examples and mitigation strategies.\n\nAuthentication and authorization are fundamental security components. We'll discuss modern authentication patterns, including OAuth 2.0, JWT tokens, multi-factor authentication, and session management best practices that protect user accounts.\n\nData protection and privacy compliance have become increasingly important with regulations like GDPR and CCPA. We'll cover encryption strategies, data minimization principles, and compliance requirements that protect both users and businesses.`,
      category: "Technical Tutorials",
      author: {
        name: "Arjun Krishnan",
        role: "Security Engineer",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      publishedAt: "2024-11-15T14:20:00Z",
      views: 8760,
      featured: false,
      tags: ["Security", "Cybersecurity", "Web Development", "OWASP"]
    },
    {
      id: 10,
      title: "Remote Work Productivity: Tools and Strategies for Developers",
      slug: "remote-work-productivity-developers",
      excerpt: "Maximize your productivity as a remote developer with proven tools, techniques, and strategies for maintaining work-life balance and delivering high-quality code.",
      content: `Remote work has become the new normal for many developers, bringing both opportunities and challenges. This guide provides practical strategies for maximizing productivity while maintaining work-life balance.\n\nTime management is crucial for remote work success. We'll explore techniques like the Pomodoro Technique, time blocking, and task prioritization methods that help developers stay focused and productive throughout the day.\n\nCommunication tools and practices are essential for remote collaboration. We'll discuss effective use of Slack, video conferencing, project management tools, and asynchronous communication strategies that keep teams aligned and productive.\n\nWorkspace setup and ergonomics significantly impact productivity and health. We'll cover home office setup recommendations, ergonomic considerations, and strategies for creating boundaries between work and personal life in a remote environment.`,
      category: "Business Tips",
      author: {
        name: "Meera Joshi",
        role: "Remote Work Consultant",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
      publishedAt: "2024-11-10T12:00:00Z",
      views: 5420,
      featured: false,
      tags: ["Remote Work", "Productivity", "Work-Life Balance", "Tools"]
    },
    {
      id: 11,
      title: "AI Automation for Small Businesses: A Complete Guide",
      slug: "ai-automation-small-businesses-guide",
      excerpt: "Discover how small businesses can leverage AI automation to compete with larger enterprises, reduce costs, and improve efficiency without breaking the bank.",
      content: `AI automation is no longer exclusive to large corporations. Small businesses can now leverage affordable AI solutions to automate repetitive tasks, improve customer service, and scale operations efficiently. This comprehensive guide explores practical AI automation strategies tailored for small businesses.\n\nWe'll start by identifying automation opportunities in common small business processes like customer support, invoicing, inventory management, and marketing. Each section includes cost-effective tools and implementation strategies that deliver immediate ROI.\n\nCustomer service automation can transform how small businesses interact with customers. We'll explore chatbot solutions, automated email responses, and social media management tools that help small businesses provide 24/7 support without hiring additional staff.\n\nFinancial automation is crucial for small business success. We'll cover automated invoicing, expense tracking, payroll processing, and financial reporting tools that save time and reduce errors.`,
      category: "Business Tips",
      author: {
        name: "Akash Kumar",
        role: "AI Automation Specialist",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      publishedAt: "2024-11-05T10:00:00Z",
      views: 11200,
      featured: false,
      tags: ["AI Automation", "Small Business", "Productivity", "Business Growth"]
    },
    {
      id: 12,
      title: "Building RESTful APIs with Node.js and Express: Best Practices",
      slug: "restful-apis-nodejs-express-best-practices",
      excerpt: "Learn best practices for building scalable, secure, and maintainable RESTful APIs using Node.js and Express, including authentication, error handling, and documentation.",
      content: `Building robust RESTful APIs requires careful attention to architecture, security, and maintainability. This guide covers best practices for creating production-ready APIs with Node.js and Express.\n\nAPI design principles form the foundation of great APIs. We'll explore RESTful conventions, resource naming, HTTP methods, status codes, and versioning strategies that make APIs intuitive and easy to use.\n\nSecurity is paramount in API development. We'll cover authentication methods including JWT tokens, OAuth 2.0, API keys, and rate limiting strategies that protect your APIs from abuse and unauthorized access.\n\nError handling and validation ensure robust APIs that provide clear feedback to clients. We'll discuss error response formats, input validation, and error logging strategies that improve debugging and user experience.`,
      category: "Technical Tutorials",
      author: {
        name: "Aditya Sharma",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2024-11-01T14:30:00Z",
      views: 9800,
      featured: false,
      tags: ["Node.js", "Express", "API Development", "Backend"]
    },
    {
      id: 13,
      title: "The Future of E-commerce: AI-Powered Personalization",
      slug: "future-ecommerce-ai-personalization",
      excerpt: "Explore how AI-powered personalization is revolutionizing e-commerce, from product recommendations to dynamic pricing and personalized shopping experiences.",
      content: `AI-powered personalization is transforming e-commerce by creating unique shopping experiences for each customer. This comprehensive guide explores the technologies and strategies behind modern e-commerce personalization.\n\nProduct recommendation engines are the most visible application of AI in e-commerce. We'll explore collaborative filtering, content-based filtering, and hybrid recommendation systems that increase conversion rates and average order values.\n\nDynamic pricing powered by AI allows e-commerce businesses to optimize prices in real-time based on demand, competition, and customer behavior. We'll discuss pricing strategies, implementation challenges, and ethical considerations.\n\nPersonalized content and marketing campaigns deliver relevant messages to each customer. We'll cover email personalization, website customization, and social media targeting strategies that improve engagement and sales.`,
      category: "Industry Insights",
      author: {
        name: "Sneha Reddy",
        role: "E-commerce Strategist",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      publishedAt: "2024-10-28T11:15:00Z",
      views: 12400,
      featured: true,
      tags: ["E-commerce", "AI", "Personalization", "Marketing"]
    },
    {
      id: 14,
      title: "Microservices Architecture: When to Use and How to Implement",
      slug: "microservices-architecture-implementation",
      excerpt: "Learn when microservices architecture is the right choice, how to design microservices, and strategies for implementing and managing distributed systems effectively.",
      content: `Microservices architecture offers benefits like scalability, flexibility, and technology diversity, but it also introduces complexity. This guide helps you decide when microservices are appropriate and how to implement them successfully.\n\nUnderstanding when to use microservices is crucial. We'll explore scenarios where microservices provide clear benefits, situations where monoliths are better, and strategies for transitioning between architectures.\n\nMicroservices design requires careful consideration of service boundaries, communication patterns, and data management. We'll discuss domain-driven design, API gateways, service mesh, and event-driven architectures.\n\nImplementation challenges include distributed transactions, service discovery, configuration management, and monitoring. We'll explore solutions and best practices for managing these complexities in production environments.`,
      category: "Technical Tutorials",
      author: {
        name: "Rajesh Kumar",
        role: "System Architect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2024-10-25T09:00:00Z",
      views: 10800,
      featured: false,
      tags: ["Microservices", "Architecture", "System Design", "Scalability"]
    },
    {
      id: 15,
      title: "Content Marketing for Tech Companies: Strategies That Work",
      slug: "content-marketing-tech-companies",
      excerpt: "Discover proven content marketing strategies specifically designed for tech companies, including technical blog posts, case studies, and thought leadership content.",
      content: `Content marketing is essential for tech companies to establish authority, generate leads, and build brand awareness. This guide covers content marketing strategies tailored for technology businesses.\n\nTechnical content establishes your company as a thought leader. We'll explore strategies for creating technical blog posts, tutorials, and documentation that attract developers and technical decision-makers.\n\nCase studies and success stories demonstrate real-world value. We'll discuss how to structure compelling case studies, gather client testimonials, and showcase measurable results that resonate with potential customers.\n\nContent distribution and promotion ensure your content reaches the right audience. We'll cover SEO strategies, social media promotion, email marketing, and community engagement tactics that amplify your content's reach.`,
      category: "Business Tips",
      author: {
        name: "Priya Sharma",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      publishedAt: "2024-10-22T13:45:00Z",
      views: 8900,
      featured: false,
      tags: ["Content Marketing", "Marketing", "Business Growth", "SEO"]
    },
    {
      id: 16,
      title: "Docker and Kubernetes: Container Orchestration Explained",
      slug: "docker-kubernetes-container-orchestration",
      excerpt: "Master containerization with Docker and container orchestration with Kubernetes. Learn how to containerize applications and deploy them at scale.",
      content: `Containerization has revolutionized application deployment and management. This comprehensive guide covers Docker for containerization and Kubernetes for orchestration.\n\nDocker fundamentals include creating Dockerfiles, building images, managing containers, and working with Docker Compose for multi-container applications. We'll cover best practices for optimizing Docker images and managing container lifecycles.\n\nKubernetes provides powerful orchestration capabilities for containerized applications. We'll explore Kubernetes architecture, pods, services, deployments, and configuration management that enable scalable, resilient applications.\n\nProduction deployment strategies cover CI/CD integration, monitoring, logging, and security best practices. We'll discuss strategies for managing secrets, implementing health checks, and handling rolling updates in production environments.`,
      category: "Technical Tutorials",
      author: {
        name: "Amit Patel",
        role: "DevOps Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2024-10-18T16:20:00Z",
      views: 11500,
      featured: false,
      tags: ["Docker", "Kubernetes", "DevOps", "Containers"]
    },
    {
      id: 17,
      title: "Freelance Developer Rates: How to Price Your Services",
      slug: "freelance-developer-rates-pricing",
      excerpt: "Learn how to determine fair pricing for freelance development services, including hourly rates, project-based pricing, and value-based pricing strategies.",
      content: `Pricing freelance development services correctly is crucial for sustainable business growth. This guide covers various pricing models and strategies for freelance developers.\n\nUnderstanding your market value requires research into industry rates, your experience level, and the complexity of projects. We'll explore resources for researching market rates and factors that influence pricing decisions.\n\nPricing models include hourly rates, fixed project pricing, retainer agreements, and value-based pricing. Each model has advantages and we'll discuss when to use each approach based on project characteristics and client relationships.\n\nNegotiation strategies help you secure fair compensation while maintaining positive client relationships. We'll cover techniques for discussing rates, handling objections, and structuring proposals that justify your pricing.`,
      category: "Business Tips",
      author: {
        name: "Vikram Singh",
        role: "Freelance Consultant",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
      publishedAt: "2024-10-15T10:30:00Z",
      views: 10200,
      featured: false,
      tags: ["Freelancing", "Business", "Pricing", "Career"]
    },
    {
      id: 18,
      title: "GraphQL vs REST: Choosing the Right API Architecture",
      slug: "graphql-vs-rest-api-architecture",
      excerpt: "Compare GraphQL and REST API architectures, understand their strengths and weaknesses, and learn when to choose each approach for your projects.",
      content: `Choosing between GraphQL and REST is a critical architectural decision. This guide compares both approaches to help you make informed decisions for your API design.\n\nREST APIs follow established conventions and are widely understood. We'll explore REST principles, HTTP methods, resource design, and caching strategies that make REST APIs effective for many use cases.\n\nGraphQL provides flexible querying and efficient data fetching. We'll discuss GraphQL schemas, queries, mutations, subscriptions, and resolver patterns that enable powerful API capabilities.\n\nDecision factors include data fetching patterns, client requirements, team expertise, and ecosystem support. We'll provide guidance on when each approach is most appropriate and strategies for combining both in hybrid architectures.`,
      category: "Technical Tutorials",
      author: {
        name: "Ananya Gupta",
        role: "API Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2024-10-12T14:00:00Z",
      views: 13200,
      featured: true,
      tags: ["GraphQL", "REST", "API Design", "Architecture"]
    },
    {
      id: 19,
      title: "Startup Funding Guide: From Bootstrap to Series A",
      slug: "startup-funding-guide-bootstrap-series-a",
      excerpt: "Navigate the startup funding landscape from bootstrapping to Series A, including funding sources, investor relations, and equity management strategies.",
      content: `Understanding startup funding is essential for entrepreneurs. This comprehensive guide covers funding stages from bootstrapping through Series A and beyond.\n\nBootstrapping allows founders to maintain control while building their business. We'll explore bootstrapping strategies, cost management, and when to consider external funding.\n\nEarly-stage funding includes angel investors, seed funding, and accelerators. We'll discuss how to find investors, pitch effectively, and negotiate terms that protect founder interests.\n\nSeries A funding requires demonstrating traction and growth potential. We'll cover preparation strategies, valuation considerations, and how to build relationships with venture capital firms that align with your startup's goals.`,
      category: "Business Tips",
      author: {
        name: "Kavya Nair",
        role: "Startup Advisor",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      publishedAt: "2024-10-08T11:30:00Z",
      views: 9600,
      featured: false,
      tags: ["Startups", "Funding", "Business", "Entrepreneurship"]
    },
    {
      id: 20,
      title: "TypeScript Best Practices for Large-Scale Applications",
      slug: "typescript-best-practices-large-scale",
      excerpt: "Learn TypeScript best practices for building maintainable large-scale applications, including type safety, project structure, and advanced patterns.",
      content: `TypeScript provides powerful type safety for JavaScript applications, but using it effectively in large-scale projects requires discipline and best practices. This guide covers essential TypeScript patterns and strategies.\n\nType system design is fundamental to TypeScript success. We'll explore interface vs type aliases, generics, utility types, and conditional types that create flexible yet type-safe code.\n\nProject organization strategies help maintain code quality as projects grow. We'll discuss module structure, barrel exports, path aliases, and configuration management that keep large codebases manageable.\n\nAdvanced patterns include discriminated unions, mapped types, and template literal types that enable sophisticated type-level programming. We'll explore practical applications of these patterns in real-world scenarios.`,
      category: "Technical Tutorials",
      author: {
        name: "Rohit Mehta",
        role: "TypeScript Expert",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      publishedAt: "2024-10-05T09:15:00Z",
      views: 11800,
      featured: false,
      tags: ["TypeScript", "JavaScript", "Web Development", "Best Practices"]
    }
  ];

  // Categories with counts
  const categories = [
    { name: 'All', count: blogPosts?.length },
    { name: 'Technical Tutorials', count: blogPosts?.filter(post => post?.category === 'Technical Tutorials')?.length },
    { name: 'Industry Insights', count: blogPosts?.filter(post => post?.category === 'Industry Insights')?.length },
    { name: 'Case Studies', count: blogPosts?.filter(post => post?.category === 'Case Studies')?.length },
    { name: 'Business Tips', count: blogPosts?.filter(post => post?.category === 'Business Tips')?.length }
  ];

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered?.filter(post => post?.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter(post =>
        post?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        post?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        post?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts?.slice(startIndex, startIndex + postsPerPage);
  const featuredPosts = blogPosts?.filter(post => post?.featured);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setLoading(true);
    setActiveCategory(category);
    setTimeout(() => setLoading(false), 300);
  };

  const handleSearch = (term) => {
    setLoading(true);
    setSearchTerm(term);
    setTimeout(() => setLoading(false), 300);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog - PortfolioPro | Technical Insights & Industry Trends</title>
        <meta name="description" content="Explore technical tutorials, industry insights, case studies, and business tips from experienced developers and industry experts. Stay updated with the latest trends in web development." />
        <meta name="keywords" content="web development blog, technical tutorials, React tutorials, MongoDB scaling, digital transformation, freelance tips, AI integration, progressive web apps" />
        <meta property="og:title" content="Blog - PortfolioPro | Technical Insights & Industry Trends" />
        <meta property="og:description" content="Explore technical tutorials, industry insights, case studies, and business tips from experienced developers and industry experts." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://portfoliopro.com/blog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '600ms' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="BookOpen" size={16} />
                <span>Knowledge Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Insights & <span className="text-gradient">Expertise</span>
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Discover technical tutorials, industry insights, and proven strategies from experienced developers. 
                Stay ahead with cutting-edge knowledge and practical solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <SearchBar onSearch={handleSearch} placeholder="Search articles, tutorials, insights..." />
                
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="FileText" size={16} />
                    <span>{blogPosts?.length} Articles</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} />
                    <span>5K+ Readers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={16} />
                    <span>Weekly Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Articles */}
          {!searchTerm && activeCategory === 'All' && (
            <FeaturedSection featuredPosts={featuredPosts} />
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-text-primary">
                {searchTerm ? `Search Results for "${searchTerm}"` : 
                 activeCategory === 'All' ? 'All Articles' : activeCategory}
              </h2>
              <span className="text-text-secondary">
                ({filteredPosts?.length} {filteredPosts?.length === 1 ? 'article' : 'articles'})
              </span>
            </div>

            {(searchTerm || activeCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="inline-flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-fast text-sm font-medium"
              >
                <Icon name="X" size={14} />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          {/* Blog Grid */}
          <BlogGrid posts={paginatedPosts} loading={loading} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>

        {/* Newsletter Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <NewsletterSignup />
        </section>

        {/* Footer removed - only show on home page */}
      </div>
    </>
  );
};

export default Blog;