"use client";
import React, { useState } from 'react';
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

      // Realistic savings & cost estimation
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
    <section className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Calculate Your Automation ROI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Understand the potential savings and efficiency improvements your business can gain by implementing AI-powered automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h3>
            <div className="space-y-6">
              <Select label="Industry" placeholder="Select industry" options={industryOptions} value={formData.industry} onChange={(v)=>handleInputChange('industry',v)} required />
              <Select label="Company Size" placeholder="Number of employees" options={employeeOptions} value={formData.employees} onChange={(v)=>handleInputChange('employees',v)} required />
              <Input label="Monthly Revenue" type="number" placeholder="₹" value={formData.monthlyRevenue} onChange={(e)=>handleInputChange('monthlyRevenue',e.target.value)} required />
              <Input label="Current Process Time (hours/week)" type="number" placeholder="Hours" value={formData.currentProcessTime} onChange={(e)=>handleInputChange('currentProcessTime',e.target.value)} required />
              <Select label="Automation Level" placeholder="Select complexity" options={automationOptions} value={formData.automationLevel} onChange={(v)=>handleInputChange('automationLevel',v)} required />

              <Button variant="default" size="lg" fullWidth loading={isCalculating} disabled={!isFormValid} onClick={calculateROI}>
                {isCalculating ? 'Calculating...' : 'Calculate ROI'}
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            {!results ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="BarChart3" size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your ROI Results</h3>
                <p className="text-gray-500">Fill the form to see your projected ROI and savings</p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Projection</h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-800">{formatCurrency(results.monthlySavings)}</div>
                    <div className="text-sm text-gray-700">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">{results.yearlyROI}%</div>
                    <div className="text-sm text-gray-700">Yearly ROI</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-700">{results.paybackPeriod} months</div>
                    <div className="text-sm text-gray-700">Payback Period</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">{results.efficiencyGain}%</div>
                    <div className="text-sm text-gray-700">Efficiency Gain</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-500">Implementation Cost:</span>
                    <span className="font-semibold text-gray-900">{formatCurrency(results.implementationCost)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-500">Monthly Maintenance:</span>
                    <span className="font-semibold text-gray-900">{formatCurrency(results.monthlyMaintenance)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500">3-Year Net Savings:</span>
                    <span className="font-semibold text-green-700">{formatCurrency(results.threeYearSavings)}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">Download Report</Button>
                  <Button variant="default" size="sm" className="flex-1">Book Consultation</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
