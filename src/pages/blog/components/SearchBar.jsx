import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onFilterToggle, isFilterOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [dateRange, setDateRange] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery, { sortBy, dateRange, difficulty });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e?.target?.value);
    if (e?.target?.value === '') {
      onSearch('', { sortBy, dateRange, difficulty });
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search articles, topics, or authors..."
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            type="submit"
            variant="default"
            iconName="Search"
            iconPosition="left"
            className="whitespace-nowrap"
          >
            Search
          </Button>

          <Button
            type="button"
            variant="outline"
            iconName={isFilterOpen ? "X" : "Filter"}
            iconPosition="left"
            onClick={onFilterToggle}
            className="whitespace-nowrap"
          >
            {isFilterOpen ? 'Close' : 'Filters'}
          </Button>
        </div>
      </form>

      {/* Filters Section */}
      {isFilterOpen && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="week">Past Week</option>
                <option value="month">Past Month</option>
                <option value="quarter">Past Quarter</option>
                <option value="year">Past Year</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
