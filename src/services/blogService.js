import { supabase } from '../lib/supabase';

/**
 * Blog Articles Service
 * Handles all blog-related database operations
 */

// Get all published articles with category and author info
export const getPublishedArticles = async (options = {}) => {
  try {
    const { category, limit = 20, offset = 0, searchQuery } = options;
    
    let query = supabase?.from('blog_articles')?.select(`
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        tags,
        read_time_minutes,
        views_count,
        difficulty,
        is_featured,
        published_at,
        created_at,
        blog_categories!inner (
          id,
          name,
          slug,
          color
        ),
        authors!inner (
          id,
          name,
          avatar_url,
          role
        )
      `)?.eq('status', 'published')?.order('published_at', { ascending: false });

    // Apply category filter
    if (category && category !== 'all') {
      query = query?.eq('blog_categories.slug', category);
    }

    // Apply search filter
    if (searchQuery) {
      query = query?.or(`title.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%,tags.cs.{${searchQuery}}`);
    }

    // Apply pagination
    if (limit) {
      query = query?.range(offset, offset + limit - 1);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Failed to fetch articles: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    throw new Error(`Blog service error: ${error.message}`);
  }
};

// Get featured article
export const getFeaturedArticle = async () => {
  try {
    const { data, error } = await supabase?.from('blog_articles')?.select(`
        id,
        title,
        slug,
        excerpt,
        featured_image_url,
        tags,
        read_time_minutes,
        published_at,
        blog_categories (
          name
        ),
        authors (
          name,
          role,
          avatar_url
        )
      `)?.eq('status', 'published')?.eq('is_featured', true)?.order('published_at', { ascending: false })?.limit(1)?.single();

    if (error) {
      throw new Error(`Failed to fetch featured article: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Featured article error: ${error.message}`);
  }
};

// Get related articles
export const getRelatedArticles = async (currentArticleId, limit = 3) => {
  try {
    const { data, error } = await supabase?.from('blog_articles')?.select(`
        id,
        title,
        featured_image_url,
        read_time_minutes,
        published_at,
        blog_categories (
          name
        ),
        authors (
          name
        )
      `)?.eq('status', 'published')?.neq('id', currentArticleId)?.order('published_at', { ascending: false })?.limit(limit);

    if (error) {
      throw new Error(`Failed to fetch related articles: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    throw new Error(`Related articles error: ${error.message}`);
  }
};

// Get article by slug
export const getArticleBySlug = async (slug) => {
  try {
    const { data, error } = await supabase?.from('blog_articles')?.select(`
        id,
        title,
        slug,
        content,
        excerpt,
        featured_image_url,
        tags,
        read_time_minutes,
        views_count,
        difficulty,
        published_at,
        created_at,
        blog_categories (
          id,
          name,
          slug,
          color
        ),
        authors (
          id,
          name,
          email,
          avatar_url,
          bio,
          role,
          company,
          expertise
        )
      `)?.eq('slug', slug)?.eq('status', 'published')?.single();

    if (error) {
      throw new Error(`Failed to fetch article: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Article fetch error: ${error.message}`);
  }
};

// Increment article view count
export const incrementViewCount = async (articleId) => {
  try {
    const { error } = await supabase?.from('blog_articles')?.update({ 
        views_count: supabase.sql`views_count + 1` 
      })?.eq('id', articleId);

    if (error) {
      console.error('Failed to increment view count:', error?.message);
    }
  } catch (error) {
    console.error('View count error:', error?.message);
  }
};

/**
 * Categories Service
 */

// Get all categories with article counts
export const getCategories = async () => {
  try {
    const { data, error } = await supabase?.from('blog_categories')?.select(`
        id,
        name,
        slug,
        description,
        icon_name,
        color,
        blog_articles!inner (
          id
        )
      `)?.order('name');

    if (error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }

    // Count articles for each category
    const categoriesWithCounts = data?.map(category => ({
      ...category,
      count: category?.blog_articles?.length || 0
    }));

    return categoriesWithCounts || [];
  } catch (error) {
    throw new Error(`Categories service error: ${error.message}`);
  }
};

/**
 * Authors Service
 */

// Get author by ID with article count
export const getAuthorById = async (authorId) => {
  try {
    const { data, error } = await supabase?.from('authors')?.select(`
        id,
        name,
        email,
        avatar_url,
        bio,
        role,
        company,
        expertise,
        articles_count,
        experience_years,
        followers_count,
        social_links
      `)?.eq('id', authorId)?.single();

    if (error) {
      throw new Error(`Failed to fetch author: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Author fetch error: ${error.message}`);
  }
};

// Get all authors
export const getAuthors = async () => {
  try {
    const { data, error } = await supabase?.from('authors')?.select(`
        id,
        name,
        avatar_url,
        bio,
        role,
        company,
        expertise,
        articles_count,
        experience_years,
        followers_count
      `)?.order('articles_count', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch authors: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    throw new Error(`Authors service error: ${error.message}`);
  }
};

/**
 * Newsletter Service
 */

// Subscribe to newsletter
export const subscribeToNewsletter = async (email, name, preferences = {}) => {
  try {
    const { data, error } = await supabase?.from('newsletter_subscriptions')?.insert([
        {
          email: email?.toLowerCase()?.trim(),
          name: name?.trim(),
          preferences: {
            ai_insights: true,
            success_stories: true,
            implementation: true,
            founder_perspectives: true,
            ...preferences
          },
          is_active: true
        }
      ])?.select()?.single();

    if (error) {
      if (error?.code === '23505') { // Unique constraint violation
        throw new Error('This email is already subscribed to our newsletter.');
      }
      throw new Error(`Newsletter subscription failed: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Newsletter service error: ${error.message}`);
  }
};

// Update newsletter preferences
export const updateNewsletterPreferences = async (email, preferences) => {
  try {
    const { data, error } = await supabase?.from('newsletter_subscriptions')?.update({ preferences })?.eq('email', email?.toLowerCase()?.trim())?.select()?.single();

    if (error) {
      throw new Error(`Failed to update preferences: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Newsletter preferences error: ${error.message}`);
  }
};

/**
 * Analytics Service
 */

// Track page view
export const trackPageView = async (pageData) => {
  try {
    const { page_path, page_title, referrer, user_agent } = pageData;
    
    const { error } = await supabase?.from('page_analytics')?.insert([
        {
          page_path,
          page_title,
          referrer: referrer || document?.referrer,
          user_agent: user_agent || navigator?.userAgent,
          visitor_id: `visitor_${Date.now()}_${Math.random()?.toString(36)?.substr(2, 9)}`,
          session_id: sessionStorage?.getItem('session_id') || `session_${Date.now()}`
        }
      ]);

    if (error) {
      console.error('Analytics tracking error:', error?.message);
    }
  } catch (error) {
    console.error('Page tracking error:', error?.message);
  }
};

// Get analytics summary (if needed for admin)
export const getAnalyticsSummary = async (days = 30) => {
  try {
    const { data, error } = await supabase?.from('page_analytics')?.select('page_path, visited_at')?.gte('visited_at', new Date(Date.now() - days * 24 * 60 * 60 * 1000)?.toISOString())?.order('visited_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch analytics: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    throw new Error(`Analytics service error: ${error.message}`);
  }
};