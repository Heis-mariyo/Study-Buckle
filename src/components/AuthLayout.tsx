import React from 'react';
import { Zap } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0a1f33] relative overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2fcf9c] rounded-full opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full opacity-5 blur-[100px]"></div>

      {/* Navbar Minimal */}
      <nav className="absolute top-0 left-0 w-full px-6 pt-8 pb-6 md:p-6 flex justify-between items-center z-20">
        <a href="/" className="flex items-center gap-2">
          {/* Logo Container */}
          <div className="relative w-15 h-15 flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="StudyBuckle Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">StudyBuckle</span>
        </a>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;