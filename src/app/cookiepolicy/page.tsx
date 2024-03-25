import Head from 'next/head';

export default function CookiePolicy() {
    return (
        <div>
            <Head>
                <title>Cookie Policy</title>
                <meta name="description" content="Cookie policy for our website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto mt-[150px] p-36 border">
                <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
                <p>
                    This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. 
                    It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-2">What are Cookies?</h2>
                <p>
                    Cookies are small text files that are stored on your computer or mobile device. 
                    They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-2">How We Use Cookies</h2>
                <p>
                    We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely 
                    disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
                <ul className="list-disc ml-8">
                    <li><strong>Essential Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Without these cookies, certain services, such as shopping baskets or e-billing, cannot be provided.</li>
                    <li><strong>Analytics Cookies:</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).</li>
                    <li><strong>Advertising Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-2">Managing Cookies</h2>
                <p>
                    You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and some functionalities of the website may no longer be available.
                </p>
                <ul className="list-disc ml-8">
                    <li><strong>Browser Controls:</strong> Most web browsers allow some control of most cookies through the browser settings. You can find instructions on how to manage cookies for popular browsers via the following links:
                        <ul className="list-disc ml-8">
                            <li><a href="https://support.google.com/chrome/answer/95647?hl=en">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
                            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">Microsoft Internet Explorer</a></li>
                            <li><a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari (macOS)</a></li>
                            <li><a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/ios">Safari (iOS)</a></li>
                        </ul>
                    </li>
                    <li><strong>Third-Party Tools:</strong> You can opt-out of targeted advertising from certain providers by visiting the Digital Advertising Alliance or Network Advertising Initiative.</li>
                    <li><strong>Privacy Plug-Ins:</strong> There are various privacy plug-ins available for different web browsers that can help you manage your cookies and privacy preferences.</li>
                </ul>

                <p>
                    For more information about cookies and how to manage them, please visit <a href="https://www.allaboutcookies.org/">All About Cookies</a>.
                </p>
            </main>
        </div>
    );
}
