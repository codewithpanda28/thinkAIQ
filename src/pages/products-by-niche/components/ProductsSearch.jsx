import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductsSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  industries, 
  selectedIndustry, 
  setSelectedIndustry,
  getIndustryCount,
  productCount 
}) => {
  const industryIcons = {
    'All': 'Star',
    'E-commerce': 'ShoppingCart',
    'Healthcare': 'Heart',
    'Real Estate': 'Home',
    'Education': 'GraduationCap',
    'Beauty': 'Sparkles',
    'Food & Beverage': 'Utensils',
    'Finance': 'Building2',
    'Services': 'Briefcase',
    'Retail': 'Store',
    'Automobile': 'Car',
    'Hospitality': 'Building',
    'Manufacturing': 'Warehouse',
    'Home Services': 'Wrench',
    'Legal': 'FileText',
    'Fitness': 'Activity',
    'Construction': 'Wrench',
    'HR': 'Users'
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Icon name="Search" size={20} className="text-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 sm:py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-foreground placeholder:text-text-secondary transition-all"
          />
        </div>
        <div className="text-right mt-2 text-sm text-text-secondary">
          <span className="font-semibold text-primary dark:text-accent">{productCount}</span> products found
        </div>
      </div>

      {/* Industry Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {industries.map((industry) => {
            const isActive = selectedIndustry === industry;
            const count = getIndustryCount(industry);
            const iconName = industryIcons[industry] || 'Circle';

            return (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`
                  flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform scale-105'
                    : 'bg-card border border-border text-text-secondary hover:bg-muted hover:border-primary/50'
                  }
                `}
              >
                <Icon 
                  name={iconName} 
                  size={16} 
                  className={isActive ? 'text-white' : 'text-text-secondary'} 
                />
                <span>{industry}</span>
                <span className={`
                  px-2 py-0.5 rounded-full text-xs
                  ${isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-muted text-text-secondary'
                  }
                `}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSearch;

