import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AuthorSpotlight = ({ author }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-brand-lg">
              <Image 
                src={author?.avatar} 
                alt={author?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-brand-md">
              <Icon name="Verified" size={20} className="text-primary-foreground" />
            </div>
          </div>
        </div>
        
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">{author?.name}</h3>
            <p className="text-lg text-primary font-medium mb-2">{author?.role}</p>
            <p className="text-muted-foreground">{author?.company}</p>
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {author?.bio}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{author?.articlesCount}</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{author?.experience}</div>
              <div className="text-sm text-muted-foreground">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{author?.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
            {author?.expertise?.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-background/50 text-muted-foreground text-sm rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <Button 
              variant="default"
              iconName="User"
              iconPosition="left"
              className="premium-button"
            >
              View Profile
            </Button>
            <Button 
              variant="outline"
              iconName="Mail"
              iconPosition="left"
            >
              Contact Author
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSpotlight;