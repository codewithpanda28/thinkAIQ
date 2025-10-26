import React from 'react';
import BlogCard from './BlogCard';

const FeaturedSection = ({ featuredPosts }) => {
  if (!featuredPosts || featuredPosts?.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1 h-8 bg-accent rounded-full"></div>
        <h2 className="text-2xl font-bold text-text-primary">Featured Articles</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredPosts?.slice(0, 2)?.map((post) => (
          <BlogCard key={post?.id} post={post} featured={true} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;