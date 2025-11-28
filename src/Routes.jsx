import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import AboutEcosystemCompanyStory from './pages/about-ecosystem-company-story';
// import PortfolioShowcase from './pages/portfolio-showcase-success-stories';
// import ClientDashboard from './pages/client-dashboard-project-command-center';

import ContactSchedulingMultiChannelEngagement from './pages/contact-scheduling-multi-channel-engagement';
import Homepage from './pages/homepage-ai-automation-hub';
import ServicesUniversePage from './pages/services-universe-interactive-solutions';
import ArticlesPage from './pages/articles';
import ArticleDetail from './pages/articles/[id]';
// import ServiceDetailPage from './pages/services/[slug]';
import BlogPage from "pages/blog";
import TrustCenter from "pages/trust-center";
import Blog from "pages/blog";
import BlogDetail from "pages/blog-detail";
import ProjectDetails from "pages/project-details/[id]";
import SaaSProjectDetails from "pages/saas-project/[id]";
import PrivacyPolicy from "pages/privacy-policy";
import TermsOfService from "pages/terms-of-service";
import ProductsByNiche from "pages/products-by-niche";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-ecosystem-company-story" element={<AboutEcosystemCompanyStory />} />
        <Route path="/trust-center" element={<TrustCenter/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact-scheduling-multi-channel-engagement" element={<ContactSchedulingMultiChannelEngagement />} />
        <Route path="/homepage-ai-automation-hub" element={<Homepage />} />
        <Route path="/services-universe-interactive-solutions" element={<ServicesUniversePage />} />
        {/* <Route path="/services/:slug" element={<ServiceDetailPage />} /> */}
        <Route path="/articles" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/saas-project/:id" element={<SaaSProjectDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/products-by-niche" element={<ProductsByNiche />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
