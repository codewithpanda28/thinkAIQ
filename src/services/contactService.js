import { supabase } from '../lib/supabase';

/**
 * Contact Form Service
 * Handles contact form submissions and inquiries
 */

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message,
      urgency,
      preferredContact,
      newsletter
    } = formData;

    // Insert into contacts table
    const { data, error } = await supabase?.from('contacts')?.insert([
        {
          name: name?.trim(),
          email: email?.toLowerCase()?.trim(),
          phone: phone?.trim(),
          company: company?.trim(),
          subject: projectType || 'General Inquiry',
          message: message?.trim(),
          priority: urgency || 'medium',
          service_type: projectType,
          preferred_contact: preferredContact,
          newsletter: newsletter || false,
          status: 'unread'
        }
      ])?.select()?.single();

    if (error) {
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }

    // If user wants newsletter, subscribe them
    if (newsletter && email) {
      try {
        await supabase?.from('newsletter_subscriptions')?.insert([
            {
              email: email?.toLowerCase()?.trim(),
              name: name?.trim(),
              preferences: {
                ai_insights: true,
                success_stories: true,
                implementation: true,
                founder_perspectives: true
              },
              is_active: true
            }
          ]);
      } catch (newsletterError) {
        // Don't fail the whole form if newsletter signup fails
        console.error('Newsletter signup failed:', newsletterError);
      }
    }

    return data;
  } catch (error) {
    throw new Error(`Contact service error: ${error.message}`);
  }
};

// Submit generic form (for other forms like ROI calculator, assessments)
export const submitFormSubmission = async (submissionData) => {
  try {
    const { type, email, name, phone, payload } = submissionData;

    const { data, error } = await supabase?.from('submissions')?.insert([
        {
          type,
          email: email?.toLowerCase()?.trim(),
          name: name?.trim(),
          phone: phone?.trim(),
          payload,
          status: 'new'
        }
      ])?.select()?.single();

    if (error) {
      throw new Error(`Failed to submit form: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Form submission error: ${error.message}`);
  }
};

// Submit ROI calculator results
export const submitROICalculation = async (calculationData) => {
  try {
    const payload = {
      type: 'roi_calculation',
      ...calculationData,
      calculated_at: new Date()?.toISOString()
    };

    return await submitFormSubmission({
      type: 'roi_calculation',
      email: calculationData?.email,
      name: calculationData?.name,
      phone: calculationData?.phone,
      payload
    });
  } catch (error) {
    throw new Error(`ROI calculation submission error: ${error.message}`);
  }
};

// Submit service assessment
export const submitServiceAssessment = async (assessmentData) => {
  try {
    const payload = {
      type: 'service_assessment',
      ...assessmentData,
      assessed_at: new Date()?.toISOString()
    };

    return await submitFormSubmission({
      type: 'service_assessment',
      email: assessmentData?.email,
      name: assessmentData?.name,
      phone: assessmentData?.phone,
      payload
    });
  } catch (error) {
    throw new Error(`Service assessment submission error: ${error.message}`);
  }
};

// Track project purchase interest
export const trackPurchaseInterest = async (purchaseData) => {
  try {
    const {
      projectId,
      projectTitle,
      userEmail,
      userName,
      message
    } = purchaseData;

    const { data, error } = await supabase?.from('purchases')?.insert([
        {
          project_id: projectId,
          project_title: projectTitle,
          user_email: userEmail?.toLowerCase()?.trim(),
          user_name: userName?.trim(),
          message: message?.trim(),
          status: 'new'
        }
      ])?.select()?.single();

    if (error) {
      throw new Error(`Failed to track purchase interest: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Purchase tracking error: ${error.message}`);
  }
};

// Get contact form options (for dropdowns)
export const getContactFormOptions = () => {
  return {
    projectTypes: [
      { value: 'automation', label: 'Business Process Automation' },
      { value: 'ai-integration', label: 'AI Integration & Implementation' },
      { value: 'custom-software', label: 'Custom Software Development' },
      { value: 'data-analytics', label: 'Data Analytics & Insights' },
      { value: 'workflow-optimization', label: 'Workflow Optimization' },
      { value: 'consultation', label: 'Strategy Consultation' },
      { value: 'other', label: 'Other (Please specify in message)' }
    ],
    budgetRanges: [
      { value: '10k-25k', label: '₹10,000 - ₹25,000' },
      { value: '25k-50k', label: '₹25,000 - ₹50,000' },
      { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
      { value: '100k-250k', label: '₹1,00,000 - ₹2,50,000' },
      { value: '250k-500k', label: '₹2,50,000 - ₹5,00,000' },
      { value: '500k+', label: '₹5,00,000+' },
      { value: 'discuss', label: 'Let\'s discuss' }
    ],
    timelines: [
      { value: 'asap', label: 'ASAP (Within 1 week)' },
      { value: '1-2weeks', label: '1-2 weeks' },
      { value: '1month', label: '1 month' },
      { value: '2-3months', label: '2-3 months' },
      { value: '3-6months', label: '3-6 months' },
      { value: '6months+', label: '6+ months' },
      { value: 'flexible', label: 'Flexible timeline' }
    ],
    urgencyLevels: [
      { value: 'low', label: 'Low - General inquiry' },
      { value: 'medium', label: 'Medium - Planning phase' },
      { value: 'high', label: 'High - Ready to start' },
      { value: 'urgent', label: 'Urgent - Need immediate help' }
    ],
    contactPreferences: [
      { value: 'email', label: 'Email' },
      { value: 'phone', label: 'Phone Call' },
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'video-call', label: 'Video Call' }
    ]
  };
};

// Update contact status (for admin use)
export const updateContactStatus = async (contactId, status) => {
  try {
    const { data, error } = await supabase?.from('contacts')?.update({ status })?.eq('id', contactId)?.select()?.single();

    if (error) {
      throw new Error(`Failed to update contact status: ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Contact update error: ${error.message}`);
  }
};

// Get all contacts (for admin use)
export const getAllContacts = async (options = {}) => {
  try {
    const { status, limit = 50, offset = 0 } = options;

    let query = supabase?.from('contacts')?.select('*')?.order('created_at', { ascending: false });

    if (status) {
      query = query?.eq('status', status);
    }

    query = query?.range(offset, offset + limit - 1);

    const { data, error } = await query;

    if (error) {
      throw new Error(`Failed to fetch contacts: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    throw new Error(`Contacts fetch error: ${error.message}`);
  }
};