import React from 'react';

const PrivacyPolicy = () => {

    const containerStyle = {
        backgroundImage: 'url(/heroImg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };


    return (
        <section className="w-full 640px:px-10 px-5 1024px:px-12 pt-[8rem] pb-[4rem] mx-auto p-6 min-h-screen" style={containerStyle}>
            <div className='max-w-[800px] text-border'>
                <h1 className="text-3xl font-bold mb-4">Privacy Policy for Zenui Library</h1>
                <p className="mb-4 !text-[#9caebc]">Effective Date: January 1, 2024</p>

                <p className="mb-4 !text-[#9caebc]">
                    Welcome to Zenui Library. Your privacy is important to us. This Privacy Policy outlines how we
                    collect, use, and protect your personal information when you use our services, including our
                    website, UI components library, and pre-built templates.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">1. Information We Collect</h2>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>Personal Information:</strong> When you register or interact with our services, we may
                    collect personal information such as your name, email address, and payment information.
                </p>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>Usage Data:</strong> We collect data on how you use our services, including the pages you
                    visit, the features you use, and the actions you take.
                </p>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>Device Information:</strong> We collect information about the device you use to access our
                    services, including IP address, browser type, and operating system.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">2. How We Use Your Information</h2>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>To Provide and Improve Services:</strong> We use your information to deliver, maintain, and
                    improve our services, including customizing your experience and responding to your inquiries.
                </p>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>To Communicate with You:</strong> We may use your information to send you updates,
                    newsletters, and other communications related to our services.
                </p>
                <p className="mb-4 !text-[#9caebc]">
                    <strong>For Security and Compliance:</strong> We use your information to ensure the security of our
                    services and comply with legal obligations.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">3. Sharing Your Information</h2>
                <p className="mb-4 !text-[#9caebc]">
                    We do not sell or rent your personal information to third parties. We may share your information
                    with:
                </p>
                <ul className="list-disc list-inside mb-4 !text-[#9caebc]">
                    <li><strong>Service Providers:</strong> Third parties who provide services on our behalf, such as
                        payment processing and data analysis.
                    </li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and the
                        rights of our users.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2 mt-10">4. Data Security</h2>
                <p className="mb-4 !text-[#9caebc]">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">5. Your Rights</h2>
                <p className="mb-4 !text-[#9caebc]">
                    You have the right to access, correct, or delete your personal information. You can also object to
                    the processing of your personal information and withdraw your consent at any time. To exercise these
                    rights, please contact us at the email address provided below.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">6. Third-Party Links</h2>
                <p className="mb-4 !text-[#9caebc]">
                    Our services may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these sites. We encourage you to read the privacy policies of any linked
                    websites you visit.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">7. Changes to This Privacy Policy</h2>
                <p className="mb-4 !text-[#9caebc]">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes
                    by posting the new Privacy Policy on our website. Your continued use of our services after any
                    changes constitutes your acceptance of the new Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mb-2 mt-10">8. Contact Us</h2>
                <p className="mb-4 !text-[#9caebc]">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please
                    contact us at:
                </p>
                <p className="mb-4 !text-[#9caebc]">
                    Email: <span className='!text-primary'>zenuilibrary@zenui.com</span>
                </p>

                <p>By using Zenui Library, you agree to the terms outlined in this Privacy Policy. Thank you for
                    trusting Zenui with your personal information.</p>

            </div>
        </section>
    );
}

export default PrivacyPolicy;
