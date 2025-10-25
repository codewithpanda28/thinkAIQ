import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityComplianceCard = ({ compliance }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'expired':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return 'CheckCircle';
      case 'pending':
        return 'Clock';
      case 'expired':
        return 'AlertCircle';
      default:
        return 'Info';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={compliance?.icon} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{compliance?.title}</h3>
            <p className="text-sm text-muted-foreground">{compliance?.category}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${getStatusColor(compliance?.status)}`}>
          <Icon name={getStatusIcon(compliance?.status)} size={14} />
          <span className="text-xs font-medium capitalize">{compliance?.status}</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{compliance?.description}</p>
      <div className="space-y-2 mb-4">
        {compliance?.features?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <span>Last Updated: {compliance?.lastUpdated}</span>
        {compliance?.nextAudit && (
          <span>Next Audit: {compliance?.nextAudit}</span>
        )}
      </div>
      {compliance?.documentUrl && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(compliance?.documentUrl, '_blank')}
          iconName="Download"
          iconPosition="left"
          iconSize={14}
          className="w-full"
        >
          View Documentation
        </Button>
      )}
    </div>
  );
};

export default SecurityComplianceCard;