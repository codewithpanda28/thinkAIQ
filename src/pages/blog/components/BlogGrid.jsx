import React from 'react';
import BlogCard from './BlogCard';
import Icon from '../../../components/AppIcon';


const BlogGrid = ({ posts, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-card rounded-lg border border-border p-5 animate-pulse">
            <div className="h-48 bg-surface rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-surface rounded w-3/4"></div>
              <div className="h-4 bg-surface rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-surface rounded"></div>
                <div className="h-3 bg-surface rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!posts || posts?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="FileText" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">No Articles Found</h3>
        <p className="text-text-secondary">
          Try adjusting your search or filter criteria to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <BlogCard key={post?.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;