import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 flex">
              <img
                src="src/assets/swapify-with-logo.png"
                alt="Swapify Logo"
                className="object-cover h-20 w-36 hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              Swapify is a platform that facilitates buying and selling of goods or services among users.
            </p>
            <ul className="mt-8 flex gap-6">
              {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    aria-label={platform}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* SVG paths for each platform can be added here */}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {['Home', 'Collections', 'Categories'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                {['About', 'Meet the Team'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {['Contact', 'FAQs', 'Help'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                {['Accessibility', 'Returns Policy', 'Refund Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <hr/>
        </div>

        <p className="text-xs text-gray-500 text-center">&copy; 2025. Swapify. All rights reserved.</p>
      </div>
    </footer>
  );
};