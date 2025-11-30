import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    employees: '',
    monthlyRevenue: '',
    currentProcessTime: '',
    automationLevel: ''
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryOptions = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'education', label: 'Education' },
    { value: 'logistics', label: 'Logistics & Supply Chain' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'technology', label: 'Technology' },
    { value: 'other', label: 'Other' }
  ];

  const employeeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' }
  ];

  const automationOptions = [
    { value: 'basic', label: 'Basic (Simple workflows)' },
    { value: 'intermediate', label: 'Intermediate (Multiple processes)' },
    { value: 'advanced', label: 'Advanced (Complex automation)' },
    { value: 'enterprise', label: 'Enterprise (Full transformation)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const revenue = parseFloat(formData.monthlyRevenue) || 0;
      const processTime = parseFloat(formData.currentProcessTime) || 0;

      const automationMultipliers = { basic: 0.3, intermediate: 0.5, advanced: 0.7, enterprise: 0.9 };
      const industryMultipliers = {
        manufacturing: 1.2, retail: 1.0, healthcare: 1.1, finance: 1.3, education: 0.9,
        logistics: 1.2, 'real-estate': 1.0, consulting: 0.8, technology: 1.1, other: 1.0
      };

      const baseEfficiency = automationMultipliers[formData.automationLevel] || 0.5;
      const industryFactor = industryMultipliers[formData.industry] || 1.0;

      const monthlySavings = revenue * 0.2 * baseEfficiency * industryFactor;
      const implementationCost = baseEfficiency * 120000; 
      const monthlyMaintenance = implementationCost * 0.08;
      const paybackPeriod = implementationCost / monthlySavings;
      const yearlyROI = ((monthlySavings * 12 - monthlyMaintenance * 12) / implementationCost) * 100;
      const threeYearSavings = (monthlySavings * 36) - (monthlyMaintenance * 36) - implementationCost;

      setResults({
        monthlySavings: Math.round(monthlySavings),
        implementationCost: Math.round(implementationCost),
        monthlyMaintenance: Math.round(monthlyMaintenance),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        yearlyROI: Math.round(yearlyROI),
        threeYearSavings: Math.round(threeYearSavings),
        efficiencyGain: Math.round(baseEfficiency * 100)
      });

      setIsCalculating(false);
    }, 2000);
  };

  const formatCurrency = (amount) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);

  const isFormValid = formData.industry && formData.employees && formData.monthlyRevenue && formData.currentProcessTime && formData.automationLevel;

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background dark:from-muted/20 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>Business Impact Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the potential savings, efficiency improvements, and business value your organization can gain by implementing AI-powered automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Business Information</h3>
            <div className="space-y-6">
              <Select 
                label="Industry" 
                placeholder="Select industry" 
                options={industryOptions} 
                value={formData.industry} 
                onChange={(v)=>handleInputChange('industry',v)} 
                required 
              />
              <Select 
                label="Company Size" 
                placeholder="Number of employees" 
                options={employeeOptions} 
                value={formData.employees} 
                onChange={(v)=>handleInputChange('employees',v)} 
                required 
              />
              <Input 
                label="Monthly Revenue" 
                type="number" 
                placeholder="₹" 
                value={formData.monthlyRevenue} 
                onChange={(e)=>handleInputChange('monthlyRevenue',e.target.value)} 
                required 
              />
              <Input 
                label="Current Process Time (hours/week)" 
                type="number" 
                placeholder="Hours" 
                value={formData.currentProcessTime} 
                onChange={(e)=>handleInputChange('currentProcessTime',e.target.value)} 
                required 
              />
              <Select 
                label="Automation Level" 
                placeholder="Select complexity" 
                options={automationOptions} 
                value={formData.automationLevel} 
                onChange={(v)=>handleInputChange('automationLevel',v)} 
                required 
              />

              <Button 
                variant="default" 
                size="lg" 
                fullWidth 
                loading={isCalculating} 
                disabled={!isFormValid} 
                onClick={calculateROI}
                className="premium-button"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Impact'}
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg"
          >
            {!results ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted dark:bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="BarChart3" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Your Impact Results</h3>
                <p className="text-muted-foreground">Fill the form to see your projected savings and efficiency gains</p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Impact Projection</h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-primary/10 dark:bg-accent/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary dark:text-accent mb-1">{formatCurrency(results.monthlySavings)}</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">{results.yearlyROI}%</div>
                    <div className="text-sm text-muted-foreground">Yearly ROI</div>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning mb-1">{results.paybackPeriod} months</div>
                    <div className="text-sm text-muted-foreground">Payback Period</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">{results.efficiencyGain}%</div>
                    <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8 p-4 bg-muted/30 dark:bg-muted rounded-lg">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Implementation Cost:</span>
                    <span className="font-semibold text-foreground">{formatCurrency(results.implementationCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Monthly Maintenance:</span>
                    <span className="font-semibold text-foreground">{formatCurrency(results.monthlyMaintenance)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">3-Year Net Savings:</span>
                    <span className="font-semibold text-success">{formatCurrency(results.threeYearSavings)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:akashkumar.webdev@gmail.com?subject=ROI Calculator Results"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full" iconName="Download" iconPosition="left">
                      Download Report
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/918252472186?text=Hi, I calculated my ROI and would like to discuss implementation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="default" size="sm" className="w-full premium-button" iconName="Calendar" iconPosition="left">
                      Book Consultation
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
