import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { subscribeToNewsletter } from '../../../services/blogService';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!email?.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/?.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    setError('');

    try {
      await subscribeToNewsletter(
        email,
        name,
        {
          ai_insights: true,
          success_stories: true,
          implementation: true,
          founder_perspectives: true
        }
      );

      setIsSubscribed(true);
      setEmail('');
      setName('');
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setError(err?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-brand-lg p-8 text-center border border-primary/10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              You're now subscribed to receive weekly AI automation insights, exclusive case studies, and implementation guides.
            </p>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                📧 Check your email for a welcome message<br />
                🚀 First newsletter arrives this week<br />
                ⚙️ Update preferences anytime
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsSubscribed(false)}
              className="mt-6"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-brand-lg p-8 border border-primary/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Get weekly insights on AI automation trends, exclusive case studies, and actionable implementation guides.
            </p>
            <p className="text-sm text-muted-foreground">
              Join <strong>5,000+</strong> business leaders already transforming their operations with AI.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4 mb-6">
              <Input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                className="text-center"
              />
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => {
                  setEmail(e?.target?.value);
                  setError('');
                }}
                required
                className="text-center"
                error={error}
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              loading={isSubscribing}
              className="w-full premium-button"
              iconName="Send"
              iconPosition="right"
            >
              {isSubscribing ? 'Subscribing...' : 'Get Weekly AI Insights'}
            </Button>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to receive marketing emails from Authera.<br />
                You can unsubscribe at any time. <span className="text-primary">Privacy Policy</span>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-muted">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              What You'll Receive:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="TrendingUp" size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Weekly Trend Analysis</h4>
                  <p className="text-sm text-muted-foreground">Latest AI automation developments that matter to your business</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="FileText" size={14} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Exclusive Case Studies</h4>
                  <p className="text-sm text-muted-foreground">Real client transformations with ROI data and implementation details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Lightbulb" size={14} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Actionable Guides</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step implementation strategies you can use immediately</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Users" size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Founder Insights</h4>
                  <p className="text-sm text-muted-foreground">Strategic perspectives from our leadership team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-1" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-1" />
                <span>5-min weekly read</span>
              </div>
              <div className="flex items-center">
                <Icon name="X" size={16} className="mr-1" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;