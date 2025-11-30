import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Add keyframes animation style
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
    <>
      {/* Backdrop - Outside main container for proper z-index */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[45]"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[50]">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 mb-2 sm:mb-4 space-y-2 sm:space-y-3">
            {contactOptions.map((option, index) => (
              <a
                key={option.name}
                href={option.action}
                target={option.action.startsWith('http') ? '_blank' : '_self'}
                rel={option.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`
                  ${option.color} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-xl flex items-center space-x-2 sm:space-x-3
                  transform hover:scale-105 transition-all duration-200 min-w-[160px] sm:min-w-[180px]
                  opacity-100 relative z-[51]
                `}
                style={{ 
                  animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                }}
              >
                <Icon name={option.icon} size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs sm:text-sm leading-tight">{option.name}</span>
                  <span className="text-[10px] sm:text-xs opacity-90 leading-tight">{option.text}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            ${isExpanded ? 'bg-primary' : 'bg-gradient-to-r from-primary to-secondary'}
            text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl
            transform hover:scale-110 active:scale-95 transition-all duration-300
            flex items-center justify-center
            relative z-[51]
          `}
          aria-label="Contact Options"
        >
          {isExpanded ? (
            <Icon name="X" size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
          ) : (
            <Icon name="MessageCircle" size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
          )}
          
          {/* Pulse Animation */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30 pointer-events-none"></div>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingContactButton;

