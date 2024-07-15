import React from 'react'

function Privacy() {
    return (
        <div>

            <h3 className='bold h5 mb-4 pt-2'>
                Privacy & Protection
            </h3>

            <p>MultiChat ("we," "us," or "our") respects the privacy of our users ("you" or "your") and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our MultiChat application (the "App").</p>
            <br />
            <p className='bold'>Information We Collect:</p>

            <ul>
                <li>
                    Device Information: We may collect non-personally identifiable information about your device, such as device type, operating system, and IP address. This information is used to improve the functionality of the App and for analytics purposes.
                </li>
                <li>
                    Usage Data: We may collect data about your usage of the App, such as the features you access and the frequency of your use. This information is used to improve the App and provide a better user experience.
                </li>
            </ul>

            <br />

            <p className='bold'>We DO NOT collect:</p>

            <ul>
                <li>
                    Messaging Content: MultiChat acts as a container for your existing messaging services. We do not store, access, or transmit the content of your messages. All message content remains private and resides on the servers of the respective messaging services you use.                </li>
                <li>
                    Login Credentials: MultiChat does not collect or store your login credentials for any of the messaging services you integrate.                </li>
            </ul>

            <br />

            <p className='bold'>How We Use Your Information:</p>
            We use the information we collect to:

            <ul>
                <li>Operate and improve the App</li>
                <li>Provide technical support</li>
                <li>Analyze how the App is used</li>
                <li>Send you important information about the App, such as updates and security notices</li>
            </ul>

            <br />

            <p className='bold'>
                Information Sharing and Disclosure:
            </p>
            <p>We will not share or sell your personal information to any third party without your consent. However, we may disclose your information in the following circumstances:</p>
            <ul>
                <li>To comply with legal obligations, such as a court order or subpoena</li>
                <li>To protect the rights and safety of ourselves, our users, or others</li>
            </ul>

            <br />
            <p className='bold'>Data Security:</p>
            <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your information.</p>

            <p className='bold'>Your Choices:</p>
            <p>You can manage your privacy settings within the App. You may also choose to delete your account at any time.</p>

            <p className='bold'>Changes to this Privacy Policy:</p>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App.</p>

            <p className='bold'>Contact Us:</p>
            <p>If you have any questions about this Privacy Policy, please contact us at team@multi-chat.io.</p>

        </div>
    )
}

export default Privacy