import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const categoryIcons = {
    'All': 'Grid3X3',
    'Technical Tutorials': 'Code2',
    'Industry Insights': 'TrendingUp',
    'Case Studies': 'FileText',
    'Business Tips': 'Briefcase'
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.name}
          onClick={() => onCategoryChange(category?.name)}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-medium ${
            activeCategory === category?.name
              ? 'bg-primary text-white shadow-premium'
              : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
          }`}
        >
          <Icon 
            name={categoryIcons?.[category?.name] || 'Tag'} 
            size={16} 
            color={activeCategory === category?.name ? 'white' : 'currentColor'}
          />
          <span>{category?.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category?.name
              ? 'bg-white/20 text-white' :'bg-text-secondary/10 text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;