import React from 'react';

export default function PrivacyPolicyPage() {

  return (
    <main className='bg-white'>
        <div className="container  my-[100px] px-9 py-8">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <div className="text-lg">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to our Privacy Policy page. We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Website URL] 
          or use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-4">Information We Collect</h2>
        <p>
          We may collect personal information from you such as your name, email address, mailing address, phone number, 
          or payment information when you interact with us or use our services.
        </p>

        <h3 className="text-xl font-semibold mt-3">Information You Provide</h3>
        <p>
          We collect information that you voluntarily provide to us when registering on the website, 
          contacting us, or otherwise interacting with our services.
        </p>

        <h3 className="text-xl font-semibold mt-3">Information We Automatically Collect</h3>
        <p>
          We may automatically collect certain information when you visit, use, or navigate our website. 
          This information may include your IP address, browser type, operating system, referring URLs, 
          page views, and other usage information.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-4">How We Use Your Information</h2>
        <p>
          We may use the information we collect for various purposes, including to provide and maintain our services, 
          improve our website, personalize your experience, communicate with you, and more.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-4">Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by us. 
          We have no control over and assume no responsibility for the content, privacy policies, or practices 
          of any third-party websites or services.
        </p>

        {/* Add more sections as needed */}
      </div>
    </div>
    </main>
  );
};

