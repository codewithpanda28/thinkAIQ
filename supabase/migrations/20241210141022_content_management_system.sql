-- Location: supabase/migrations/20241210141022_content_management_system.sql
-- Schema Analysis: Existing tables: contacts, purchases, submissions, visits
-- Integration Type: Addition - Blog content management system
-- Dependencies: Extends existing schema for AI automation website

-- 1. Custom Types for Content Management
CREATE TYPE public.article_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE public.article_difficulty AS ENUM ('beginner', 'intermediate', 'advanced');

-- 2. Blog Categories Table
CREATE TABLE public.blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    icon_name TEXT,
    color TEXT DEFAULT '#3B82F6',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Authors Table
CREATE TABLE public.authors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    avatar_url TEXT,
    bio TEXT,
    role TEXT,
    company TEXT,
    expertise TEXT[],
    social_links JSONB DEFAULT '{}',
    articles_count INTEGER DEFAULT 0,
    experience_years TEXT,
    followers_count TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 4. Blog Articles Table
CREATE TABLE public.blog_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    featured_image_url TEXT,
    category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
    author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL,
    status public.article_status DEFAULT 'draft',
    difficulty public.article_difficulty,
    tags TEXT[],
    read_time_minutes INTEGER,
    views_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 5. Newsletter Subscriptions Table
CREATE TABLE public.newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    subscribed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    preferences JSONB DEFAULT '{"ai_insights": true, "success_stories": true}',
    unsubscribe_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex')
);

-- 6. Enhanced Analytics Table
CREATE TABLE public.page_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_path TEXT NOT NULL,
    page_title TEXT,
    visitor_id TEXT,
    session_id TEXT,
    referrer TEXT,
    user_agent TEXT,
    ip_address TEXT,
    country TEXT,
    visited_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 7. Essential Indexes for Performance
CREATE INDEX idx_blog_articles_status ON public.blog_articles(status);
CREATE INDEX idx_blog_articles_published_at ON public.blog_articles(published_at DESC);
CREATE INDEX idx_blog_articles_category_id ON public.blog_articles(category_id);
CREATE INDEX idx_blog_articles_author_id ON public.blog_articles(author_id);
CREATE INDEX idx_blog_articles_featured ON public.blog_articles(is_featured) WHERE is_featured = true;
CREATE INDEX idx_blog_articles_slug ON public.blog_articles(slug);
CREATE INDEX idx_blog_categories_slug ON public.blog_categories(slug);
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_page_analytics_page_path ON public.page_analytics(page_path);
CREATE INDEX idx_page_analytics_visited_at ON public.page_analytics(visited_at DESC);

-- 8. Enable RLS on all new tables
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_analytics ENABLE ROW LEVEL SECURITY;

-- 9. RLS Policies - Pattern 4: Public Read, Admin Write

-- Blog Categories - Public read access
CREATE POLICY "public_can_read_blog_categories"
ON public.blog_categories
FOR SELECT
TO public
USING (true);

-- Authors - Public read access
CREATE POLICY "public_can_read_authors"
ON public.authors
FOR SELECT
TO public
USING (true);

-- Blog Articles - Public read for published articles only
CREATE POLICY "public_can_read_published_articles"
ON public.blog_articles
FOR SELECT
TO public
USING (status = 'published');

-- Newsletter Subscriptions - Users can manage their own subscriptions
CREATE POLICY "users_manage_own_newsletter_subscription"
ON public.newsletter_subscriptions
FOR ALL
TO public
USING (true)
WITH CHECK (true);

-- Page Analytics - Allow public insert for tracking
CREATE POLICY "public_can_insert_page_analytics"
ON public.page_analytics
FOR INSERT
TO public
WITH CHECK (true);

-- 10. Functions for automatic maintenance
CREATE OR REPLACE FUNCTION public.update_article_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Update author article count
    UPDATE public.authors 
    SET articles_count = (
        SELECT COUNT(*) 
        FROM public.blog_articles 
        WHERE author_id = COALESCE(NEW.author_id, OLD.author_id)
        AND status = 'published'
    )
    WHERE id = COALESCE(NEW.author_id, OLD.author_id);
    
    RETURN COALESCE(NEW, OLD);
END;
$$;

-- 11. Triggers for automatic updates
CREATE TRIGGER trigger_update_article_count
    AFTER INSERT OR UPDATE OR DELETE ON public.blog_articles
    FOR EACH ROW EXECUTE FUNCTION public.update_article_count();

CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Triggers for updated_at timestamps
CREATE TRIGGER trigger_blog_categories_updated_at
    BEFORE UPDATE ON public.blog_categories
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER trigger_authors_updated_at
    BEFORE UPDATE ON public.authors
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER trigger_blog_articles_updated_at
    BEFORE UPDATE ON public.blog_articles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 12. Mock Data for Content Management System
DO $$
DECLARE
    ai_insights_cat_id UUID := gen_random_uuid();
    success_stories_cat_id UUID := gen_random_uuid();
    implementation_cat_id UUID := gen_random_uuid();
    founder_perspectives_cat_id UUID := gen_random_uuid();
    
    akash_author_id UUID := gen_random_uuid();
    aditya_author_id UUID := gen_random_uuid();
    priya_author_id UUID := gen_random_uuid();
    rajesh_author_id UUID := gen_random_uuid();
    
    featured_article_id UUID := gen_random_uuid();
    article1_id UUID := gen_random_uuid();
    article2_id UUID := gen_random_uuid();
BEGIN
    -- Insert blog categories
    INSERT INTO public.blog_categories (id, name, slug, description, icon_name, color) VALUES
        (ai_insights_cat_id, 'AI Insights', 'ai-insights', 'Expert perspectives on artificial intelligence trends and innovations', 'Brain', '#8B5CF6'),
        (success_stories_cat_id, 'Success Stories', 'success-stories', 'Real client transformations and business outcomes', 'Trophy', '#059669'),
        (implementation_cat_id, 'Implementation', 'implementation', 'Step-by-step guides and technical tutorials', 'Settings', '#DC2626'),
        (founder_perspectives_cat_id, 'Founder Perspectives', 'founder-perspectives', 'Leadership insights from our founding team', 'Users', '#EA580C');

    -- Insert authors
    INSERT INTO public.authors (id, name, email, avatar_url, bio, role, company, expertise, articles_count, experience_years, followers_count) VALUES
        (akash_author_id, 'Akash Kumar', 'akash@authera.ai', 'https://randomuser.me/api/portraits/men/32.jpg', 
         'With over 8 years of experience in AI and automation, Akash leads Authera''s strategic vision for intelligent business transformation. He specializes in designing custom AI solutions that bridge the gap between complex technology and practical business outcomes.', 
         'Co-Founder & AI Strategist', 'Authera AI Solutions', 
         ARRAY['AI Strategy', 'Business Automation', 'Custom Development', 'Digital Transformation', 'Process Optimization'], 
         23, '8+', '12.5k'),
        (aditya_author_id, 'Aditya Sharma', 'aditya@authera.ai', 'https://randomuser.me/api/portraits/men/45.jpg',
         'Senior automation consultant with expertise in e-commerce and retail transformations.',
         'Senior Consultant', 'Authera AI Solutions',
         ARRAY['E-commerce', 'Retail Automation', 'Cost Optimization'],
         8, '6+', '3.2k'),
        (priya_author_id, 'Priya Patel', 'priya@authera.ai', 'https://randomuser.me/api/portraits/women/28.jpg',
         'Technical lead specializing in workflow design and implementation.',
         'Technical Lead', 'Authera AI Solutions',
         ARRAY['Workflow Design', 'Implementation', 'Technical Writing'],
         12, '5+', '2.8k'),
        (rajesh_author_id, 'Rajesh Gupta', 'rajesh@authera.ai', 'https://randomuser.me/api/portraits/men/52.jpg',
         'Business analyst focused on ROI measurement and performance optimization.',
         'Business Analyst', 'Authera AI Solutions',
         ARRAY['ROI Analysis', 'Business Intelligence', 'Performance Metrics'],
         15, '10+', '4.1k');

    -- Insert blog articles
    INSERT INTO public.blog_articles (id, title, slug, excerpt, content, featured_image_url, category_id, author_id, status, difficulty, tags, read_time_minutes, views_count, is_featured, published_at) VALUES
        (featured_article_id, 'The Future of AI Automation: 10 Trends Reshaping Business Operations in 2025', 'future-ai-automation-trends-2025',
         'Discover the revolutionary AI automation trends that are transforming how businesses operate, scale, and compete in the digital economy. From intelligent process orchestration to predictive workflow optimization, explore the technologies that will define the next era of business efficiency.',
         'The landscape of business automation is evolving at an unprecedented pace. As we move deeper into 2025, artificial intelligence is not just augmenting human capabilities—it''s fundamentally reshaping how organizations think about efficiency, scalability, and competitive advantage...',
         'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
         ai_insights_cat_id, akash_author_id, 'published', 'intermediate',
         ARRAY['AI Automation', 'Business Strategy', 'Future Trends', 'Digital Transformation'],
         12, 2840, true, CURRENT_TIMESTAMP - INTERVAL '2 days'),
         
        (article1_id, 'How Mumbai-Based Startup Reduced Operational Costs by 60% with Custom AI Solutions', 'mumbai-startup-cost-reduction-ai',
         'A detailed case study of how intelligent automation transformed a growing e-commerce business, streamlining inventory management and customer service operations.',
         'When TechFlow Solutions approached us in early 2024, they were facing the classic startup dilemma: rapid growth was straining their operational capacity, but hiring at scale would erode their competitive margins...',
         'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=300&fit=crop',
         success_stories_cat_id, aditya_author_id, 'published', 'intermediate',
         ARRAY['Case Study', 'Cost Reduction', 'E-commerce', 'ROI'],
         8, 1920, false, CURRENT_TIMESTAMP - INTERVAL '5 days'),
         
        (article2_id, 'Building Your First AI Automation Workflow: A Step-by-Step Implementation Guide', 'first-ai-automation-workflow-guide',
         'Learn how to identify automation opportunities, design efficient workflows, and implement AI-powered solutions that deliver measurable business results.',
         'Embarking on your first AI automation project can feel overwhelming. With countless tools, frameworks, and methodologies available, knowing where to start is often the biggest challenge...',
         'https://images.pixabay.com/photo/2023/01/26/22/14/ai-generated-7747171_1280.jpg?w=400&h=300&fit=crop',
         implementation_cat_id, priya_author_id, 'published', 'beginner',
         ARRAY['Tutorial', 'Workflow Design', 'Getting Started', 'Best Practices'],
         15, 3150, false, CURRENT_TIMESTAMP - INTERVAL '1 week');

    -- Insert newsletter subscriptions (sample)
    INSERT INTO public.newsletter_subscriptions (email, name, preferences) VALUES
        ('subscriber@example.com', 'Sample Subscriber', '{"ai_insights": true, "success_stories": true, "implementation": false}');

    -- Insert some analytics data
    INSERT INTO public.page_analytics (page_path, page_title, visitor_id, session_id) VALUES
        ('/', 'Home - AI Automation Solutions', 'visitor_1', 'session_1'),
        ('/blog', 'Blog - Expert AI Insights', 'visitor_1', 'session_1'),
        ('/about', 'About - Our Story', 'visitor_2', 'session_2'),
        ('/services', 'Services - Custom AI Solutions', 'visitor_3', 'session_3');

END $$;