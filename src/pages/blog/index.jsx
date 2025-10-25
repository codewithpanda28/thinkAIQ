import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BlogHero from './components/BlogHero';
import CategoryFilter from './components/CategoryFilter';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import SearchBar from './components/SearchBar';
import NewsletterSignup from './components/NewsletterSignup';
import RelatedArticles from './components/RelatedArticles';
import AuthorSpotlight from './components/AuthorSpotlight';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { 
  getPublishedArticles, 
  getFeaturedArticle, 
  getCategories, 
  getRelatedArticles,
  trackPageView 
} from '../../services/blogService';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [categories, setCategories] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Track page view
        trackPageView({
          page_path: '/blog',
          page_title: 'AI Automation Blog - Expert Insights & Industry Trends | Authera'
        });

        // Load data in parallel
        const [categoriesData, featuredData] = await Promise.all([
          getCategories(),
          getFeaturedArticle()
        ]);

        // Set categories with "All Articles" option
        const allCategories = [
          { 
            id: 'all', 
            name: 'All Articles', 
            slug: 'all', 
            icon_name: 'Grid', 
            count: 0 // Will be calculated
          },
          ...categoriesData
        ];

        // Calculate total count
        const totalCount = categoriesData?.reduce((sum, cat) => sum + (cat?.count || 0), 0) || 0;
        allCategories[0].count = totalCount;

        setCategories(allCategories);
        setFeaturedArticle(featuredData);

        // Load related articles for sidebar
        if (featuredData?.id) {
          const related = await getRelatedArticles(featuredData?.id, 3);
          setRelatedArticles(related);
        }

      } catch (err) {
        console.error('Failed to load blog data:', err);
        setError('Failed to load blog content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
  }, []);

  // Load articles when category or search changes
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setError(null);
        
        const articles = await getPublishedArticles({
          category: activeCategory === 'all' ? null : activeCategory,
          searchQuery: searchQuery?.trim() || null,
          limit: 20,
          offset: 0
        });

        setFilteredArticles(articles);
      } catch (err) {
        console.error('Failed to load articles:', err);
        setError('Failed to load articles. Please try again.');
        setFilteredArticles([]);
      }
    };

    loadArticles();
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Mock data for author spotlight (can be moved to database later)
  const spotlightAuthor = {
    name: "Akash Kumar",
    role: "Co-Founder & AI Strategist",
    company: "Authera AI Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: `With over 8 years of experience in AI and automation, Akash leads Authera's strategic vision for intelligent business transformation. He specializes in designing custom AI solutions that bridge the gap between complex technology and practical business outcomes.`,
    articlesCount: 23,
    experience: "8+",
    followers: "12.5k",
    expertise: ["AI Strategy", "Business Automation", "Custom Development", "Digital Transformation", "Process Optimization"]
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Automation Blog - Expert Insights & Industry Trends | Authera</title>
        <meta name="description" content="Discover cutting-edge AI automation insights, success stories, and implementation guides. Expert perspectives from Authera's founders on business transformation through intelligent automation." />
        <meta name="keywords" content="AI automation blog, business automation insights, AI implementation guides, automation success stories, digital transformation, intelligent automation trends" />
        <meta property="og:title" content="AI Automation Blog - Expert Insights & Industry Trends | Authera" />
        <meta property="og:description" content="Stay ahead with weekly AI automation trends, exclusive case studies, and practical implementation guides from industry experts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <BlogHero />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <SearchBar 
              onSearch={handleSearch}
              onFilterToggle={handleFilterToggle}
              isFilterOpen={isFilterOpen}
            />
            
            <CategoryFilter 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              categories={categories}
            />
            
            {featuredArticle && (
              <FeaturedArticle article={featuredArticle} />
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <Icon name="AlertTriangle" size={20} className="text-red-600 mr-2" />
                  <p className="text-red-800">{error}</p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {activeCategory === 'all' ?'Latest Articles' 
                      : `${categories?.find(cat => cat?.slug === activeCategory)?.name || 'Category'} Articles`
                    }
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredArticles?.length || 0} article{filteredArticles?.length !== 1 ? 's' : ''} found
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {filteredArticles?.map((article, index) => (
                    <ArticleCard 
                      key={article?.id} 
                      article={article} 
                      variant={index === 0 ? 'large' : 'default'}
                    />
                  ))}
                </div>
                
                {(!filteredArticles || filteredArticles?.length === 0) && !loading && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms or browse different categories.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="lg:col-span-1">
                {relatedArticles?.length > 0 && (
                  <RelatedArticles articles={relatedArticles} />
                )}
              </div>
            </div>
            
            <AuthorSpotlight author={spotlightAuthor} />
            
            <NewsletterSignup />
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogPage;