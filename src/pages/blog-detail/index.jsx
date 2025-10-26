import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Mock blog data (same as in blog index)
  const blogPosts = [
    {
      id: 1,
      title: "React Performance Optimization: Advanced Techniques for 2024",
      slug: "react-performance-optimization-2024",
      excerpt: "Discover cutting-edge techniques to optimize React applications, including concurrent features, memory management, and bundle optimization strategies that can improve your app's performance by up to 60%.",
      content: `React performance optimization has evolved significantly with the introduction of React 18 and its concurrent features. In this comprehensive guide, we'll explore advanced techniques that go beyond basic optimization patterns.

## Concurrent Features and Performance

We'll cover concurrent rendering, automatic batching, and the new useTransition hook that allows you to mark updates as non-urgent. These features enable React to interrupt rendering work and prioritize more important updates, leading to better user experience.

### Automatic Batching
React 18 introduces automatic batching for all updates, not just those in event handlers. This means multiple state updates in promises, timeouts, or native event handlers are automatically batched for better performance.

\`\`\`javascript
// Before React 18
setTimeout(() => {
  setCount(c => c + 1); // Triggers re-render
  setFlag(f => !f);     // Triggers re-render
}, 1000);

// React 18 - Only one re-render
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f); // Batched automatically
}, 1000);
\`\`\`

## Memory Management

Memory management is another crucial aspect we'll dive into, including proper cleanup of event listeners, avoiding memory leaks in useEffect, and optimizing component re-renders through strategic use of useMemo and useCallback.

### Preventing Memory Leaks
Always clean up subscriptions and event listeners in useEffect cleanup functions:

\`\`\`javascript
useEffect(() => {
  const handleScroll = () => {
    // Handle scroll
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
\`\`\`

## Bundle Optimization

Bundle optimization strategies include code splitting at the route and component level, lazy loading of heavy components, and implementing proper preloading strategies for critical resources.

### React.lazy and Suspense
Use React.lazy for component-level code splitting:

\`\`\`javascript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## Conclusion

These optimization techniques can significantly improve your React application's performance. Implement them gradually and measure the impact to ensure you're getting the expected benefits.`,
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
      content: `Scaling MongoDB for high-traffic applications requires a deep understanding of database architecture and performance optimization techniques. This guide covers everything from basic optimization to advanced scaling strategies.

## Indexing Strategies

We'll start with indexing strategies that can dramatically improve query performance. Proper indexing is often the difference between a query that takes milliseconds versus one that takes seconds.

### Compound Indexes
Create compound indexes for queries that filter on multiple fields:

\`\`\`javascript
// For queries like: db.users.find({status: "active", age: {$gte: 18}})
db.users.createIndex({status: 1, age: 1})
\`\`\`

## Sharding Implementation

Sharding is MongoDB's approach to horizontal scaling, allowing you to distribute data across multiple servers. We'll explore when to implement sharding, how to choose the right shard key, and common pitfalls to avoid.

### Choosing Shard Keys
A good shard key should:
- Have high cardinality
- Distribute writes evenly
- Support most common query patterns

## Replica Sets

Replica sets provide high availability and read scaling. We'll discuss optimal replica set configurations, read preferences, and how to handle failover scenarios gracefully.

### Read Preferences
Configure read preferences based on your application needs:

\`\`\`javascript
// Read from secondary for read-heavy operations
db.collection.find().readPref("secondary")
\`\`\`

## Performance Monitoring

Monitoring is crucial for maintaining performance at scale. Use tools like MongoDB Compass, profiling, and custom monitoring solutions.`,
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
      content: `The Indian startup ecosystem has witnessed unprecedented digital transformation in 2024, driven by technological advancement and changing consumer behavior. This comprehensive analysis examines key trends shaping the landscape.

## Fintech Revolution

Fintech continues to lead the transformation with innovations in digital payments, lending platforms, and cryptocurrency adoption. We'll explore how startups are leveraging blockchain technology and AI for financial services.

## E-commerce Evolution

E-commerce evolution has been remarkable, with startups implementing advanced personalization, AR/VR shopping experiences, and sustainable delivery solutions. The integration of social commerce and live streaming has created new revenue streams.

## AI Adoption Across Sectors

AI adoption has accelerated across sectors, from customer service chatbots to predictive analytics and automated decision-making systems. We'll examine successful AI implementations and their impact on business growth.

## Key Statistics

- 70% of Indian startups have implemented at least one AI solution
- Digital payment adoption grew by 45% in 2024
- E-commerce personalization improved conversion rates by 35%

## Future Outlook

The trajectory suggests continued growth in digital adoption, with emerging technologies like Web3 and IoT gaining traction among innovative startups.`,
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
    // Add more posts here...
  ];

  useEffect(() => {
    // Find the post by slug
    const foundPost = blogPosts?.find(p => p?.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      // Get related posts (same category, excluding current post)
      const related = blogPosts?.filter(p => p?.category === foundPost?.category && p?.id !== foundPost?.id)?.slice(0, 3);
      setRelatedPosts(related);
    }
    
    setLoading(false);
  }, [slug]);

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ')?.length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Convert markdown-style content to JSX
  const renderContent = (content) => {
    const paragraphs = content?.split('\n\n');
    
    return paragraphs?.map((paragraph, index) => {
      // Handle headers
      if (paragraph?.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-text-primary mt-8 mb-4">{paragraph?.replace('## ', '')}</h2>;
      }
      if (paragraph?.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-text-primary mt-6 mb-3">{paragraph?.replace('### ', '')}</h3>;
      }
      
      // Handle code blocks
      if (paragraph?.startsWith('```')) {
        const codeContent = paragraph?.replace(/```\w*\n?/, '')?.replace(/```$/, '');
        return (
          <div key={index} className="bg-surface border border-border rounded-lg p-4 my-4 overflow-x-auto">
            <pre><code className="text-sm text-text-secondary">{codeContent}</code></pre>
          </div>
        );
      }
      
      // Handle inline code
      if (paragraph?.includes('`')) {
        const parts = paragraph?.split('`');
        return (
          <p key={index} className="text-text-secondary leading-relaxed mb-4">
            {parts?.map((part, i) => 
              i % 2 === 1 ? 
                <code key={i} className="bg-surface px-2 py-1 rounded text-primary font-mono text-sm">{part}</code> : 
                part
            )}
          </p>
        );
      }
      
      // Handle bullet points
      if (paragraph?.startsWith('- ')) {
        const items = paragraph?.split('\n')?.filter(line => line?.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-text-secondary">
            {items?.map((item, i) => (
              <li key={i}>{item?.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      
      // Regular paragraphs
      return <p key={index} className="text-text-secondary leading-relaxed mb-4">{paragraph}</p>;
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading article...</p>
          </div>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center max-w-md">
            <Icon name="FileX" size={64} className="text-text-secondary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-text-primary mb-2">Article Not Found</h1>
            <p className="text-text-secondary mb-6">The article you're looking for doesn't exist or may have been moved.</p>
            <Button onClick={() => navigate('/blog')} iconName="ArrowLeft" iconPosition="left">
              Back to Blog
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post?.title} - PortfolioPro Blog</title>
        <meta name="description" content={post?.excerpt} />
        <meta name="keywords" content={post?.tags?.join(', ')} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.excerpt} />
        <meta property="og:image" content={post?.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://portfoliopro.com/blog/${post?.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Article Header */}
        <article className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-text-primary">{post?.category}</span>
            </nav>

            {/* Article Meta */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Icon name="BookOpen" size={14} />
                <span>{post?.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                {post?.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-8">
                <div className="flex items-center space-x-3">
                  <Image
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-text-primary">{post?.author?.name}</p>
                    <p className="text-xs">{post?.author?.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={16} />
                    <span>{formatDate(post?.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{getReadingTime(post?.content)} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={16} />
                    <span>{post?.views?.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <Image
                src={post?.image}
                alt={post?.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post?.content)}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Share this article</h3>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Icon name="Share" size={16} />
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  <Icon name="Share" size={16} />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Icon name="Share" size={16} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts?.length > 0 && (
          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-text-primary mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts?.map((relatedPost) => (
                  <Link key={relatedPost?.id} to={`/blog/${relatedPost?.slug}`} className="group">
                    <article className="bg-card border border-border rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-medium">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost?.image}
                          alt={relatedPost?.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-medium"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 text-xs text-text-secondary mb-3">
                          <Icon name="Calendar" size={12} />
                          <span>{formatDate(relatedPost?.publishedAt)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost?.title}
                        </h3>
                        <p className="text-text-secondary text-sm line-clamp-3">
                          {relatedPost?.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest articles and tutorials delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetail;