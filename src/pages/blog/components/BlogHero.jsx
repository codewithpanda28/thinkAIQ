import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>AI Automation & Industry Insights</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hero-reveal">
            Authera Blog
            <span className="text-primary block">Knowledge Hub</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the latest in AI automation, n8n workflows, large language models (LLMs), 
            and business transformation through intelligent automation. Learn from expert perspectives, 
            practical tutorials, and real-world case studies from our AI projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              onClick={() => window.open('/blog', '_self')} // Opens in same tab
            >
              Explore Latest Articles
            </Button>

            <Button
              variant="outline"
              size="lg"
              iconName="Rss"
              iconPosition="left"
              onClick={() => window.open('/subscribe', '_self')} // Opens in same tab
            >
              Subscribe to Updates
            </Button>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Weekly Insights</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with AI automation trends, practical n8n workflow tips, and industry forecasts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Expert Perspectives</h3>
              <p className="text-sm text-muted-foreground">
                Founders and specialists share actionable insights on AI projects, business automation, and LLM implementations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Success Stories</h3>
              <p className="text-sm text-muted-foreground">
                Real-world examples of businesses achieving measurable results through AI automation and workflow optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
