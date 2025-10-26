import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
        <p className="text-white/90">
          Thank you for subscribing. You'll receive our weekly insights and exclusive resources.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-white/90">
          Get weekly insights, exclusive tutorials, and industry trends delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white/20"
        />
        
        <Button
          type="submit"
          variant="secondary"
          fullWidth
          loading={isLoading}
          iconName="ArrowRight"
          iconPosition="right"
          className="bg-white text-primary hover:bg-white/90"
        >
          Subscribe Now
        </Button>
      </form>
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} />
            <span>5,000+ subscribers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={16} />
            <span>No spam, ever</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;