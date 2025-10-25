import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const CertificationCard = ({ certification }) => {
  const handleVerify = () => {
    if (certification?.verificationUrl) {
      window.open(certification?.verificationUrl, '_blank');
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={certification?.icon} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{certification?.name}</h3>
            <p className="text-sm text-muted-foreground">{certification?.issuer}</p>
          </div>
        </div>
        {certification?.verified && (
          <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
            <Icon name="CheckCircle" size={14} />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{certification?.description}</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <span>Issued: {certification?.issueDate}</span>
        {certification?.expiryDate && (
          <span>Expires: {certification?.expiryDate}</span>
        )}
      </div>
      {certification?.verificationUrl && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleVerify}
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={14}
          className="w-full"
        >
          Verify Certificate
        </Button>
      )}
    </div>
  );
};

export default CertificationCard;