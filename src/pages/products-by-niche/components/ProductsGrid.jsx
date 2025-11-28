import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">No products found</h3>
          <p className="text-text-secondary">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;



