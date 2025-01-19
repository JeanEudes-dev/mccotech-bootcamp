import { ReactNode } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './globals.css';

export const metadata = {
  title: '2 Weeks Practical Bootcamp',
  description: 'Learn world-leading technology and earn a certificate!',
};

// Define the menu items with React Icons for a slim menu design
// const menuItems = [
//   { label: <Link href="/landing">Home</Link>, key: 'home', icon: <FaHome className="text-lg" /> },
//   { label: <Link href="/registration">Register</Link>, key: 'register', icon: <FaUserAlt className="text-lg" /> },
//   { label: <Link href="#about">About</Link>, key: 'about', icon: <FaInfoCircle className="text-lg" /> },
//   { label: <Link href="#contact">Contact</Link>, key: 'contact', icon: <FaPhoneAlt className="text-lg" /> },
// ];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="text-2xl font-extrabold text-teal-400">MCCOTECH</div>
        {/* Main Content */}
        <main
          className="min-h-screen py-12 px-6"
          style={{
            borderRadius: '12px'
          }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-8 bg-transparent text-gray-300">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
            </Link>
          </div>
          <p>© 2025 MCCOTECH. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
