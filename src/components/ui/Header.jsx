import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useTheme } from '../../contexts/ThemeContext';
import bglogo from './../../../public/assets/images/logo/logoicon.png'
import logoName from './../../../public/assets/images/logo/logoName.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [visitCount, setVisitCount] = useState(0);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { name: 'Home', path: '/homepage-ai-automation-hub', icon: 'Home' },
    { name: 'Services', path: '/services-universe-interactive-solutions', icon: 'Zap' },
    // { name: 'Portfolio', path: '/portfolio-showcase-success-stories', icon: 'Trophy' },
    { name: 'About', path: '/about-ecosystem-company-story', icon: 'Users' },
    { name: 'Contact', path: '/contact-scheduling-multi-channel-engagement', icon: 'MessageSquare' },
  ];

  const moreItems = [
     { name: 'Blog', path: '/blog', icon: 'FileText' },
    { name: 'Trust Center', path: '/trust-center', icon: 'Shield' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/api/visits')
      .then(r => r.json())
      .then(d => setVisitCount(d?.count ?? 0))
      .catch(() => {});
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleProtectedDashboard = () => {
    const alreadyAuthed = localStorage.getItem('dashboardAuth') === 'true';
    if (alreadyAuthed) {
      navigate('/client-dashboard-project-command-center');
      return;
    }
    const pwd = window.prompt('Enter dashboard password');
    const ok = pwd === 'authera123';
    if (ok) {
      localStorage.setItem('dashboardAuth', 'true');
      navigate('/client-dashboard-project-command-center');
    } else if (pwd !== null) {
      alert('Incorrect password');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 dark:bg-background/95 backdrop-blur-lg shadow-md border-b border-border' 
          : 'bg-background/80 dark:bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-ai-automation-hub" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="relative">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div> */}
             < img src={bglogo} alt="thinkAIQ Logo" className="w-12 h-12 object-contain rounded-lg " />
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div> */}
            </div>
            <div className="flex flex-col">
              {/* <span className="text-xl font-bold text-primary dark:text-accent tracking-tight">
                thinkAIQ
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                AI Automation Experts
              </span> */}
              < img src={logoName} alt="thinkAIQ Logo Name" className=" h-6 sm:h-7 object-contain" />
              {/* <span className="text-xs text-text-secondary font-medium "> AI Automation Experts</span> */}
            </div>
            {/* Mobile visits indicator - Hidden on very small screens */}
            <div className="ml-2 text-[9px] sm:text-[10px] text-text-secondary lg:hidden hidden sm:block">
              <span className="font-semibold text-primary dark:text-accent">{visitCount}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
         <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`nav-hint px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary opacity-100 border-l-4 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="nav-hint px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-xs text-text-secondary mr-2">
              Visits: <span className="font-semibold text-primary dark:text-accent">{visitCount}</span>
            </div>
            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={20} className="text-foreground" />
            </button> */}
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cta-morph"
              onClick={() => navigate('/contact-scheduling-multi-channel-engagement')}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-6 py-4 bg-background/95 dark:bg-background/95 backdrop-blur-lg border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                item?.name === 'Dashboard' ? (
                  <button
                    key={item?.path}
                    onClick={() => { handleProtectedDashboard(); closeMenu(); }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActivePath(item?.path)
                        ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </button>
                ) : (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActivePath(item?.path)
                        ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                )
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
              {/* <button
                onClick={() => { toggleTheme(); }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
              >
                <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
                <span className="text-sm font-medium">Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button> */}
              <Button
                variant="default"
                fullWidth
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                onClick={() => { closeMenu(); navigate('/contact-scheduling-multi-channel-engagement'); }}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;