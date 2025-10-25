import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12 authority-spotlight">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={14} />
            <span>Featured Article</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            {article?.title}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {article?.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-3">
              <Image 
                src={article?.author?.avatar} 
                alt={article?.author?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{article?.author?.name}</p>
                <p className="text-sm text-muted-foreground">{article?.author?.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>{article?.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{article?.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {article?.tags?.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-background/50 text-muted-foreground text-sm rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Button 
            variant="default" 
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="premium-button"
          >
            Read Full Article
          </Button>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-brand-lg">
            <Image 
              src={article?.image} 
              alt={article?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-brand-lg">
            <Icon name="Zap" size={32} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;