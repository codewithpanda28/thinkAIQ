import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardCard = ({ award }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center">
          {award?.image ? (
            <Image
              src={award?.image}
              alt={`${award?.title} award`}
              className="w-full h-full object-contain rounded-lg"
            />
          ) : (
            <Icon name="Award" size={32} className="text-warning" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{award?.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{award?.organization}</p>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={12} />
            <span>{award?.date}</span>
            <span>•</span>
            <Icon name="MapPin" size={12} />
            <span>{award?.location}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{award?.description}</p>
      {award?.category && (
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {award?.category}
          </span>
          {award?.level && (
            <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
              {award?.level}
            </span>
          )}
        </div>
      )}
      {award?.criteria && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground mb-2">Award Criteria:</p>
          {award?.criteria?.map((criterion, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={12} className="text-success" />
              <span className="text-xs text-muted-foreground">{criterion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AwardCard;