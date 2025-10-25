import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PartnershipCard = ({ partnership }) => {
  const handleVerifyPartnership = () => {
    if (partnership?.verificationUrl) {
      window.open(partnership?.verificationUrl, '_blank');
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={partnership?.logo}
              alt={`${partnership?.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{partnership?.name}</h3>
            <p className="text-sm text-muted-foreground">{partnership?.type}</p>
          </div>
        </div>
        {partnership?.verified && (
          <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
            <Icon name="Shield" size={14} />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{partnership?.description}</p>
      <div className="space-y-2 mb-4">
        {partnership?.benefits?.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon name="ArrowRight" size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">{benefit}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <span>Since: {partnership?.since}</span>
        <span className="flex items-center space-x-1">
          <Icon name="MapPin" size={12} />
          <span>{partnership?.region}</span>
        </span>
      </div>
      {partnership?.verificationUrl && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleVerifyPartnership}
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={14}
          className="w-full"
        >
          Verify Partnership
        </Button>
      )}
    </div>
  );
};

export default PartnershipCard;