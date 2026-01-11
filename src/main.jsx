import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create root and render the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)

// Add some development helpers
if (import.meta.env.DEV) {
  // Add development console greeting
  console.log(
      '%c👋 Welcome to Eason Xie\'s Portfolio!',
      'color: #2563eb; font-size: 16px; font-weight: bold;'
  );

  console.log(
      '%c🚀 Built with React + Vite',
      'color: #10b981; font-size: 14px;'
  );

  console.log(
      '%c📧 Contact: 2153366728xie@gmail.com',
      'color: #6b7280; font-size: 12px;'
  );
}

// Add service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
  });
}

// Add error boundary for development
if (import.meta.env.DEV) {
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}

// Add performance monitoring
if (import.meta.env.PROD) {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }).catch(() => {
    // web-vitals not available, skip monitoring
  });
}