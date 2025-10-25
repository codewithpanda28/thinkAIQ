import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hero-reveal">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Founded by Passionate Developers
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Meet <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Akash Kumar</span> &{' '}
              <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Aditya</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 text-balance">
              We’re two passionate developers who believe in building impactful digital experiences.
              From frontend innovation to automation systems — we create solutions that make a difference.
              Every project we take is built with dedication, creativity, and real purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="premium-button"
                onClick={() => window.location.href = '/team'}
              >
                Meet Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Award"
                iconPosition="left"
                onClick={() => window.location.href = '/achievements'}
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Months of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1629904853716-f91e66f6b532?w=700&h=500&fit=crop"
                alt="Akash and Aditya working on frontend project"
                className="w-full h-96 object-cover rounded-2xl shadow-brand-lg"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-brand-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Client Success Rate</div>
                    <div className="text-2xl font-bold text-success">98%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
