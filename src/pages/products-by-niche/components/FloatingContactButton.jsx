import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      action: 'https://wa.me/918252472186?text=Hi%2C%20I%27m%20interested%20in%20your%20WhatsApp%20automation%20solutions.%20Please%20share%20more%20details.',
      color: 'bg-green-500 hover:bg-green-600',
      text: 'Chat Now'
    },
    {
      name: 'Call',
      icon: 'Phone',
      action: 'tel:+918252472186',
      color: 'bg-blue-500 hover:bg-blue-600',
      text: '+91 82524 72186'
    },
    {
      name: 'Email',
      icon: 'Mail',
      action: 'mailto:akashkumar.webdev@gmail.com?subject=WhatsApp%20Automation%20Inquiry',
      color: 'bg-purple-500 hover:bg-purple-600',
      text: 'Email Us'
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded Options */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsExpanded(false)}
          />
          <div className="absolute bottom-16 right-0 mb-2 sm:mb-4 space-y-2 sm:space-y-3">
            {contactOptions.map((option, index) => (
              <a
                key={option.name}
                href={option.action}
                target={option.action.startsWith('http') ? '_blank' : '_self'}
                rel={option.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`
                  ${option.color} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg flex items-center space-x-2 sm:space-x-3
                  transform hover:scale-105 transition-all duration-200 min-w-[160px] sm:min-w-[180px]
                  opacity-0 animate-fadeInUp
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon name={option.icon} size={18} className="sm:w-5 sm:h-5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs sm:text-sm">{option.name}</span>
                  <span className="text-[10px] sm:text-xs opacity-90">{option.text}</span>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          ${isExpanded ? 'bg-primary' : 'bg-gradient-to-r from-primary to-secondary'}
          text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl
          transform hover:scale-110 active:scale-95 transition-all duration-300
          flex items-center justify-center
          relative
        `}
        aria-label="Contact Options"
      >
        {isExpanded ? (
          <Icon name="X" size={20} className="sm:w-6 sm:h-6" />
        ) : (
          <Icon name="MessageCircle" size={20} className="sm:w-6 sm:h-6" />
        )}
        
        {/* Pulse Animation */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;

