"use client";
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import LoginForm from '../../components/Login/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}