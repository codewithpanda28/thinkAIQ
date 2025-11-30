import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../home/components/Footer';
import Icon from '../../components/AppIcon';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | thinkAIQ</title>
        <meta name="description" content="Privacy Policy for thinkAIQ - Learn how we collect, use, and protect your personal information." />
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
                  <Icon name="Shield" size={16} />
                  <span>Privacy & Security</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-4">
                  Privacy Policy
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
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      thinkAIQ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                      how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">2. Information We Collect</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>Name, email address, phone number, and other contact information</li>
                      <li>Business information and project requirements</li>
                      <li>Payment and billing information</li>
                      <li>Communications and correspondence with us</li>
                      <li>Information automatically collected through cookies and tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Personalize and improve your experience</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information 
                      only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground mt-4">
                      <li>With service providers who assist us in operating our website and conducting our business</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your consent or at your direction</li>
                    </ul>
                  </div>

                  <div id="security">
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">5. Data Security</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information. 
                      However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3 mt-6">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Secure server infrastructure with regular security audits</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Regular backups and disaster recovery procedures</li>
                      <li>Employee training on data protection and privacy</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">6. Your Rights</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li>Access and receive a copy of your personal information</li>
                      <li>Rectify inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request restriction of processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>

                  <div id="cookies">
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3 mt-6">Types of Cookies We Use</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    </ul>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mt-4">
                      You can control and manage cookies through your browser settings. However, disabling cookies may affect 
                      the functionality of our website.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">8. Third-Party Services</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                      practices of these third parties. We encourage you to read their privacy policies.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mt-4">
                      <strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our website. Google may use 
                      cookies and similar technologies to serve ads based on your visits to our site and other sites on the Internet. 
                      You can opt out of personalized advertising by visiting Google's Ad Settings.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">9. Children's Privacy</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      Our services are not intended for children under 18 years of age. We do not knowingly collect personal 
                      information from children under 18.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                      Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">11. Contact Us</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;

