import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const phoneNumber = '+918252472186';
  const email = 'akashkumar.webdev@gmail.com';
  const whatsappNumber = '+918252472186';

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 shadow-brand-lg">
          <div className="text-center max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Ready to Transform?
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Let's Build Your
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Digital Future</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the businesses that trust our expertise for intelligent digital solutions. 
              Our experienced team works closely with you to deliver measurable results and innovative solutions tailored to your needs.
            </p>

           {/* Action Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* Schedule Free Consultation */}
              <a
                href="mailto:akashkumar.webdev@gmail.com?subject=Consultation Request"
                className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white rounded-xl text-lg font-medium hover:bg-primary/90 transition"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Schedule Free Consultation
              </a>

              {/* Chat with Our Experts */}
              <a
                href="https://wa.me/918252472186?text=Hi, I want to discuss my project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border border-primary text-primary rounded-xl text-lg font-medium hover:bg-primary/10 transition"
              >
                <Icon name="MessageCircle" size={20} className="mr-2 " />
                Chat with Our Experts
              </a>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Speak directly with our support team
                </p>
                <div className="text-primary font-medium">{phoneNumber}</div>
                <div className="text-xs text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}?subject=Project Inquiry`}
                className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Detailed project discussion
                </p>
                <div className="text-secondary font-medium">{email}</div>
                <div className="text-xs text-muted-foreground mt-1">Response within 2 hours</div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi, I have a query.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/30 border border-border rounded-xl p-6 text-center hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Quick queries and support
                </p>
                <div className="text-success font-medium">{whatsappNumber}</div>
                <div className="text-xs text-muted-foreground mt-1">Available 24/7</div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>MSME Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>2-Hour Response Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-warning" />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-secondary" />
                  <span>300+ Projects Delivered</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <a
              href={`tel:${parseInt(phoneNumber.replace('+91', '')) + 1}`} 
              className="mt-8 bg-error/5 border border-error/20 rounded-lg p-4 flex items-center justify-center space-x-2 text-error"
            >
              <Icon name="AlertCircle" size={16} />
              <span className="text-sm font-medium">
                Need urgent support? Call our emergency line
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
