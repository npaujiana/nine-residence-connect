
import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by the world's most innovative teams</p>
        <div className="flex justify-between items-center flex-wrap gap-8">
          <div className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
            </svg>
          </div>
          <div className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
            </svg>
          </div>
          <div className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7C4.79 3 3 4.79 3 7V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V7C21 4.79 19.21 3 17 3Z" />
            </svg>
          </div>
          <div className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
          <div className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
