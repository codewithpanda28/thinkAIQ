import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {testimonial?.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial?.position}</p>
              <p className="text-xs text-muted-foreground">{testimonial?.company}</p>
            </div>
            <div className="flex items-center space-x-1">
              {renderStars(testimonial?.rating)}
            </div>
          </div>
        </div>
      </div>
      {testimonial?.videoUrl && !isVideoPlaying && (
        <div className="relative mb-4 cursor-pointer" onClick={handleVideoPlay}>
          <Image
            src={testimonial?.videoThumbnail}
            alt="Video testimonial thumbnail"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
              <Icon name="Play" size={20} className="text-primary ml-1" />
            </div>
          </div>
        </div>
      )}
      {testimonial?.videoUrl && isVideoPlaying && (
        <div className="mb-4">
          <iframe
            src={testimonial?.videoUrl}
            className="w-full h-48 rounded-lg"
            title={`Video testimonial from ${testimonial?.name}`}
            allowFullScreen
          />
        </div>
      )}
      <div className="mb-4">
        <p className="text-muted-foreground leading-relaxed">
          {isExpanded ? testimonial?.content : `${testimonial?.content?.substring(0, 150)}...`}
        </p>
        {testimonial?.content?.length > 150 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpanded}
            className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </Button>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{testimonial?.date}</span>
        <div className="flex items-center space-x-4">
          <span>Project: {testimonial?.projectType}</span>
          {testimonial?.roi && (
            <span className="text-success font-medium">ROI: {testimonial?.roi}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;