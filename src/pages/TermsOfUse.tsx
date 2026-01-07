import { NavLink } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="antialiased text-slate-800 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <NavLink to="/" className="text-indigo-600 hover:underline text-sm mb-8 inline-block">
          ← Back to Home
        </NavLink>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing and using The Founder Academy website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-slate-600">
              The Founder Academy provides sales training, coaching, mentorship, and related professional development services. Our services are designed to help sales professionals improve their skills and advance their careers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-3">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not share or distribute our proprietary training materials without permission</li>
              <li>Attend scheduled coaching sessions or provide reasonable notice of cancellation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-slate-600">
              Payment for services is due as specified at the time of booking. Subscription services are billed monthly or annually as selected. Refunds are provided in accordance with our refund policy, available upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-slate-600">
              All content, materials, and resources provided by The Founder Academy are protected by intellectual property rights. You may use these materials for personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600">
              While we strive to provide valuable guidance and training, results may vary. The Founder Academy is not liable for any specific career outcomes or financial results from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-slate-600">
              For questions about these Terms of Use, please contact us at:<br />
              Email: enquiry@thefound.academy
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
