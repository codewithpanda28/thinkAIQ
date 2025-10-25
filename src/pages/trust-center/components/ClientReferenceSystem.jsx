import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ClientReferenceSystem = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const availableReferences = [
    {
      company: 'TechCorp Solutions',
      contact: 'Rajesh Kumar',
      position: 'CTO',
      projectType: 'AI Automation Suite',
      duration: '8 months',
      satisfaction: '9.8/10'
    },
    {
      company: 'Digital Dynamics',
      contact: 'Priya Sharma',
      position: 'Operations Manager',
      projectType: 'Process Automation',
      duration: '6 months',
      satisfaction: '9.5/10'
    },
    {
      company: 'InnovateTech',
      contact: 'Amit Patel',
      position: 'Founder',
      projectType: 'Custom Software Development',
      duration: '12 months',
      satisfaction: '9.9/10'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Reference Request Submitted
        </h3>
        <p className="text-muted-foreground mb-4">
          We've received your reference request. Our team will connect you with relevant client references within 24 hours.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>Expected response time: 2-4 hours</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-primary/5 border-b border-border p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Users" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Client Reference System</h3>
            <p className="text-muted-foreground">Connect with our satisfied clients for direct feedback</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Available References */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Available References</h4>
            <div className="space-y-4">
              {availableReferences?.map((ref, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-foreground">{ref?.company}</h5>
                      <p className="text-sm text-muted-foreground">{ref?.contact} - {ref?.position}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
                      <Icon name="Star" size={12} />
                      <span className="text-xs font-medium">{ref?.satisfaction}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <div>
                      <span className="font-medium">Project:</span> {ref?.projectType}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {ref?.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Request Form */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Request Client References</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Company Name"
                type="text"
                name="companyName"
                value={formData?.companyName}
                onChange={handleInputChange}
                placeholder="Your company name"
                required
              />

              <Input
                label="Contact Person"
                type="text"
                name="contactPerson"
                value={formData?.contactPerson}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="your.email@company.com"
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
              />

              <Input
                label="Project Type of Interest"
                type="text"
                name="projectType"
                value={formData?.projectType}
                onChange={handleInputChange}
                placeholder="e.g., AI Automation, Custom Software"
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <Button
                type="submit"
                variant="default"
                fullWidth
                iconName="Send"
                iconPosition="right"
                iconSize={16}
              >
                Request References
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Reference Policy</p>
                  <p>We connect qualified prospects with relevant client references. All references are voluntary and have consented to share their experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReferenceSystem;