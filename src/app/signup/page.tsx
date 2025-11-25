"use client";
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import SignupForm from '../../components/SignUp/SignupForm';

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}