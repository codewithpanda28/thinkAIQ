import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ')?.length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (featured) {
    return (
      <article className="group relative bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-medium border border-border">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-medium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              post?.category === 'Technical Tutorials' ? 'bg-blue-100 text-blue-800' :
              post?.category === 'Industry Insights' ? 'bg-green-100 text-green-800' :
              post?.category === 'Case Studies'? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {post?.category}
            </span>
          </div>
          {post?.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Icon name="Star" size={12} />
                <span>Featured</span>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{formatDate(post?.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{getReadingTime(post?.content)} min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{post?.views?.toLocaleString()}</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-fast line-clamp-2">
            {post?.title}
          </h2>
          
          <p className="text-text-secondary mb-4 line-clamp-3">
            {post?.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={post?.author?.avatar}
                alt={post?.author?.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-text-primary">{post?.author?.name}</p>
                <p className="text-xs text-text-secondary">{post?.author?.role}</p>
              </div>
            </div>
            
            <Link
              to={`/blog/${post?.slug}`}
              className="inline-flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-fast text-sm font-medium"
            >
              <span>Read More</span>
              <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-medium border border-border">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-medium"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            post?.category === 'Technical Tutorials' ? 'bg-blue-100 text-blue-800' :
            post?.category === 'Industry Insights' ? 'bg-green-100 text-green-800' :
            post?.category === 'Case Studies'? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {post?.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center space-x-3 text-xs text-text-secondary mb-3">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{formatDate(post?.publishedAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{getReadingTime(post?.content)} min</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-fast line-clamp-2">
          {post?.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {post?.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={post?.author?.avatar}
              alt={post?.author?.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-xs text-text-secondary">{post?.author?.name}</span>
          </div>
          
          <Link
            to={`/blog/${post?.slug}`}
            className="inline-flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-fast text-xs font-medium"
          >
            <span>Read</span>
            <Icon name="ArrowRight" size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;