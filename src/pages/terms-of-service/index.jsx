import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../homepage-ai-automation-hub/components/Footer';
import Icon from '../../components/AppIcon';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | thinkAIQ</title>
        <meta name="description" content="Terms of Service for thinkAIQ - Read our terms and conditions for using our services." />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background">
        <Header />
        
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="FileText" size={16} />
                  <span>Legal Information</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-4">
                  Terms of Service
                </h1>
                <p className="text-lg text-muted-foreground dark:text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      By accessing and using thinkAIQ's website and services, you accept and agree to be bound by the terms 
                      and provision of this agreement. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">2. Use License</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                      Permission is granted to temporarily access the materials on thinkAIQ's website for personal, 
                      non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to decompile or reverse engineer any software</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">3. Services</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      thinkAIQ provides AI automation, custom software development, consulting, and related services. 
                      We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">4. User Accounts</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      When you create an account with us, you must provide information that is accurate, complete, and current. 
                      You are responsible for safeguarding the password and for all activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">5. Payment Terms</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                      Payment terms will be specified in individual service agreements. By using our paid services, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>Pay all fees as specified in your service agreement</li>
                      <li>Provide accurate billing information</li>
                      <li>Authorize us to charge your payment method</li>
                      <li>Understand that fees are non-refundable unless otherwise specified</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">6. Intellectual Property</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      All content, features, and functionality of our services are owned by thinkAIQ and are protected by 
                      international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">7. Prohibited Uses</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">You may not use our services:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>In any way that violates any applicable law or regulation</li>
                      <li>To transmit any malicious code or viruses</li>
                      <li>To impersonate or attempt to impersonate another person or entity</li>
                      <li>To engage in any automated use of the system</li>
                      <li>To interfere with or disrupt the services</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">8. Disclaimer</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The materials on thinkAIQ's website are provided on an 'as is' basis. thinkAIQ makes no warranties, 
                      expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                      implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                      of intellectual property or other violation of rights.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">9. Limitation of Liability</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      In no event shall thinkAIQ or its suppliers be liable for any damages (including, without limitation, 
                      damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                      to use the materials on thinkAIQ's website.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">10. Indemnification</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      You agree to indemnify and hold harmless thinkAIQ, its officers, directors, employees, and agents from 
                      any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation 
                      of these terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">11. Termination</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      We may terminate or suspend your account and access to our services immediately, without prior notice or 
                      liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">12. Governing Law</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      These terms shall be governed by and construed in accordance with the laws of India, without regard to 
                      its conflict of law provisions.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">13. Changes to Terms</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                      is material, we will provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">14. Contact Information</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="mt-4 space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <p>Email: akashkumar.webdev@gmail.com</p>
                      <p>Phone: +91 8252472186</p>
                      <p>Address: thinkAIQ, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer removed - only show on home page */}
      </div>
    </>
  );
};

export default TermsOfService;

