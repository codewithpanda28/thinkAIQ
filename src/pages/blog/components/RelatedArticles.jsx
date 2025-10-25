import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedArticles = ({ articles }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BookOpen" size={24} className="text-primary" />
        <h3 className="text-xl font-bold text-foreground">Related Articles</h3>
      </div>
      <div className="space-y-6">
        {articles?.map((article) => (
          <div key={article?.id} className="flex space-x-4 group cursor-pointer">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <Image 
                  src={article?.image} 
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  article?.category === 'AI Insights' ? 'bg-primary/10 text-primary' :
                  article?.category === 'Success Stories'? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'
                }`}>
                  {article?.category}
                </span>
                <span className="text-xs text-muted-foreground">{article?.readTime}</span>
              </div>
              
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-2">
                {article?.title}
              </h4>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{article?.author?.name}</span>
                <span>•</span>
                <span>{article?.publishDate}</span>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <Button 
                variant="ghost" 
                size="sm"
                iconName="ArrowRight"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center">
        <Button 
          variant="outline"
          iconName="Grid"
          iconPosition="left"
        >
          View All Articles
        </Button>
      </div>
    </div>
  );
};

export default RelatedArticles;