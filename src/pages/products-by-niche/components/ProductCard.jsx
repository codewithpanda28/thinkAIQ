import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product }) => {
  const [showAllCore, setShowAllCore] = useState(false);
  const [showAllAdvanced, setShowAllAdvanced] = useState(false);

  const coreToShow = showAllCore ? product.coreAutomations : product.coreAutomations.slice(0, 4);
  const advancedToShow = showAllAdvanced ? product.advancedAutomations : product.advancedAutomations.slice(0, 4);

  const handleContact = () => {
    window.open('https://wa.me/918252472186?text=Hi%2C%20I%27m%20interested%20in%20' + encodeURIComponent(product.title) + '.%20Please%20share%20more%20details.', '_blank');
  };

  const handleGetDetails = () => {
    // Get the docsLink and trim any whitespace
    const docsLink = product.docsLink ? product.docsLink.trim() : '';
    
    // Check if docsLink exists and is a valid URL
    if (docsLink && docsLink.length > 0 && (docsLink.startsWith('http://') || docsLink.startsWith('https://'))) {
      // Open Google Docs link in new tab
      window.open(docsLink, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback to WhatsApp contact if no valid docs link is available
      console.warn(`No valid docs link available for: ${product.title}. Opening WhatsApp instead.`);
      handleContact();
    }
  };

  return (
    <article className="group relative bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-border">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
            <Icon name="Star" size={12} />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Product Image/Icon Header */}
      <div className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 inline-block mb-4">
            <Icon name={product.icon} size={48} color="white" strokeWidth={2} />
          </div>
          <h3 className="text-white font-bold text-lg sm:text-xl px-4">
            {product.title.split(' ').slice(0, 3).join(' ').toUpperCase()}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <div className="flex items-start space-x-2 mb-3">
          <Icon name="Zap" size={18} className="text-primary dark:text-accent flex-shrink-0 mt-1" />
          <h2 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Industry Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.industries.map((industry) => (
            <span
              key={industry}
              className="px-2.5 py-1 bg-muted text-text-secondary text-xs rounded-full border border-border"
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Core Automations */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center space-x-1">
            <Icon name="CheckCircle2" size={16} className="text-green-500" />
            <span>Core Automations</span>
          </h4>
          <ul className="space-y-1.5">
            {coreToShow.map((automation, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>{automation}</span>
              </li>
            ))}
          </ul>
          {product.coreAutomations.length > 4 && (
            <button
              onClick={() => setShowAllCore(!showAllCore)}
              className="mt-2 text-xs text-primary dark:text-accent hover:underline flex items-center space-x-1"
            >
              <span>{showAllCore ? 'Show Less' : `+${product.coreAutomations.length - 4} More`}</span>
              <Icon name={showAllCore ? "ChevronUp" : "ChevronDown"} size={12} />
            </button>
          )}
        </div>

        {/* Advanced Automations */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center space-x-1">
            <Icon name="Sparkles" size={16} className="text-purple-500" />
            <span>Advanced Automations</span>
          </h4>
          <ul className="space-y-1.5">
            {advancedToShow.map((automation, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-text-secondary">
                <Icon name="Check" size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                <span>{automation}</span>
              </li>
            ))}
          </ul>
          {product.advancedAutomations.length > 4 && (
            <button
              onClick={() => setShowAllAdvanced(!showAllAdvanced)}
              className="mt-2 text-xs text-primary dark:text-accent hover:underline flex items-center space-x-1"
            >
              <span>{showAllAdvanced ? 'Show Less' : `+${product.advancedAutomations.length - 4} More`}</span>
              <Icon name={showAllAdvanced ? "ChevronUp" : "ChevronDown"} size={12} />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-6">
          <Button
            variant="default"
            size="sm"
            iconName="FileText"
            iconPosition="left"
            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            onClick={handleGetDetails}
          >
            Get Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1"
            onClick={handleContact}
          >
            Contact
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

