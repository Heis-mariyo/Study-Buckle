"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
        <p className="text-gray-400 text-sm">Start generating custom exam questions and study cards.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            placeholder="Student Name"
            className="w-full bg-[#0a1f33]/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2fcf9c] focus:ring-1 focus:ring-[#2fcf9c] transition-all"
            suppressHydrationWarning
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            placeholder="student@university.edu"
            className="w-full bg-[#0a1f33]/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2fcf9c] focus:ring-1 focus:ring-[#2fcf9c] transition-all"
            suppressHydrationWarning
          />
        </div>

        {/* Password */}
        <div className="space-y-1 relative">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••"
              className="w-full bg-[#0a1f33]/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2fcf9c] focus:ring-1 focus:ring-[#2fcf9c] transition-all pr-10"
              suppressHydrationWarning
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              suppressHydrationWarning
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button 
          className="w-full bg-[#2fcf9c] hover:bg-white text-[#0a1f33] font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(47,207,156,0.3)] mt-6 flex items-center justify-center gap-2"
          suppressHydrationWarning
        >
          Create Account <ArrowRight size={18} />
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center border-t border-white/10 pt-6">
        <p className="text-gray-400 text-sm mb-4">
          Already have an account?{' '}
          <a href="/login" className="text-[#2fcf9c] font-bold hover:underline">
            Log in
          </a>
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          By signing up, you agree to our <a href="#" className="underline hover:text-gray-400">Terms</a> and <a href="#" className="underline hover:text-gray-400">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;