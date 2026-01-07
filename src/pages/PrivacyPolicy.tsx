import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="antialiased text-slate-800 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <NavLink to="/" className="text-indigo-600 hover:underline text-sm mb-8 inline-block">
          ← Back to Home
        </NavLink>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-slate-600">
              The Founder Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-3">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact details you provide when booking a consultation or signing up for our services.</li>
              <li><strong>Payment Information:</strong> Payment details processed securely through our payment providers.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Protection Rights</h2>
            <p className="text-slate-600">
              Under GDPR and UK data protection laws, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. To exercise these rights, please contact us at privacy@thefounderacademy.co.uk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              Email: enquiry@thefound.academy
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
