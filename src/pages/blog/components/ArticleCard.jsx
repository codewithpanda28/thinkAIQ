import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article, variant = 'default' }) => {
  const isLarge = variant === 'large';
  
  return (
    <article className={`bg-card border border-border rounded-lg overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-all duration-300 group ${
      isLarge ? 'lg:col-span-2' : ''
    }`}>
      <div className={`${isLarge ? 'lg:flex' : ''}`}>
        <div className={`relative overflow-hidden ${
          isLarge ? 'lg:w-1/2' : 'aspect-[16/10]'
        }`}>
          <Image 
            src={article?.image} 
            alt={article?.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              isLarge ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : ''
            }`}
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
              article?.category === 'AI Insights' ? 'bg-primary/90 text-primary-foreground' :
              article?.category === 'Success Stories' ? 'bg-accent/90 text-accent-foreground' :
              article?.category === 'Implementation' ? 'bg-secondary/90 text-secondary-foreground' :
              'bg-background/90 text-foreground'
            }`}>
              <Icon name={
                article?.category === 'AI Insights' ? 'Brain' :
                article?.category === 'Success Stories' ? 'Trophy' :
                article?.category === 'Implementation'? 'Settings' : 'FileText'
              } size={12} />
              <span>{article?.category}</span>
            </span>
          </div>
          {article?.difficulty && (
            <div className="absolute top-4 right-4">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                article?.difficulty === 'Beginner' ? 'bg-success/90 text-success-foreground' :
                article?.difficulty === 'Intermediate' ? 'bg-warning/90 text-warning-foreground' :
                'bg-error/90 text-error-foreground'
              }`}>
                {article?.difficulty}
              </span>
            </div>
          )}
        </div>
        
        <div className={`p-6 ${isLarge ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-between' : ''}`}>
          <div>
            <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 ${
              isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
            }`}>
              {article?.title}
            </h3>
            
            <p className={`text-muted-foreground mb-4 leading-relaxed ${
              isLarge ? 'text-base' : 'text-sm'
            }`}>
              {article?.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article?.tags?.slice(0, isLarge ? 4 : 3)?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image 
                src={article?.author?.avatar} 
                alt={article?.author?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{article?.author?.name}</p>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span>{article?.publishDate}</span>
                  <span>•</span>
                  <span>{article?.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon name="Eye" size={14} />
                <span>{article?.views}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="text-primary hover:text-primary-foreground hover:bg-primary"
              >
                Read
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;