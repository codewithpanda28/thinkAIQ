import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProductsHero from './components/ProductsHero';
import ProductsSearch from './components/ProductsSearch';
import ProductsGrid from './components/ProductsGrid';
import FloatingContactButton from './components/FloatingContactButton';
import { productsData } from './data/productsData';

const ProductsByNiche = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = productsData;

    // Filter by industry
    if (selectedIndustry !== 'All') {
      filtered = filtered.filter(product => 
        product.industries.includes(selectedIndustry)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.industries.some(ind => ind.toLowerCase().includes(query)) ||
        product.coreAutomations.some(auto => auto.toLowerCase().includes(query)) ||
        product.advancedAutomations.some(auto => auto.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedIndustry]);

  // Get unique industries for filter buttons
  const allIndustries = ['All', ...new Set(productsData.flatMap(p => p.industries))];
  
  // Count products per industry
  const getIndustryCount = (industry) => {
    if (industry === 'All') return productsData.length;
    return productsData.filter(p => p.industries.includes(industry)).length;
  };

  return (
    <>
      <Helmet>
        <title>Products by Niche - WhatsApp Automation Solutions | thinkAIQ</title>
        <meta name="description" content="Discover specialized WhatsApp automation solutions tailored for your industry. From E-commerce to Healthcare, Real Estate to Education - find the perfect automation for your business." />
        <meta name="keywords" content="WhatsApp automation, industry-specific automation, business automation, WhatsApp bot, customer engagement, lead generation" />
        <meta property="og:title" content="Products by Niche - WhatsApp Automation Solutions" />
        <meta property="og:description" content="Discover specialized AI tools and automation solutions tailored for your industry." />
        <link rel="canonical" href="https://thinkaiq.com/products-by-niche" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ProductsHero />
          <ProductsSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            industries={allIndustries}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            getIndustryCount={getIndustryCount}
            productCount={filteredProducts.length}
          />
          <ProductsGrid products={filteredProducts} />
        </main>

        <FloatingContactButton />
      </div>
    </>
  );
};

export default ProductsByNiche;

