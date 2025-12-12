'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { loginFounder } from '../lib/founder-api';
import { FounderLoginResponse } from '../types/founder';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data: FounderLoginResponse = await loginFounder(email, password);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(/backeground.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 10 }}>
        <button
          onClick={() => router.push('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 14,
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          <ArrowLeft style={{ width: 16, height: 16, marginRight: 4 }} /> Back
        </button>
      </div>
      <div
<<<<<<< HEAD
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          boxShadow: '0 2px 16px rgba(0, 0, 0, 0.1)',
          maxWidth: '420px',
          width: '100%',
          border: '1px solid #E5E7EB',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
=======
        className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg max-w-sm sm:max-w-md w-full mx-4 border border-gray-200 flex flex-col gap-4"
        style={{
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
<<<<<<< HEAD
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              height: 48, 
              marginBottom: 10, 
              display: 'block', 
              margin: '0 auto 10px auto',
=======
        <div className="text-center mb-2">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-12 sm:h-16 mb-3 mx-auto"
            style={{
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(-30px)',
              transition: 'opacity 1.2s ease-out 0.3s, transform 1.2s ease-out 0.3s',
            }} 
          />
<<<<<<< HEAD
          <h2 style={{ margin: 0, fontWeight: 700 }}>Welcome back</h2>
          <div style={{ color: '#666', fontSize: 15 }}>warm Introduction Assistant</div>
=======
          <h2 className="text-xl sm:text-2xl font-bold m-0">Welcome back</h2>
          <div className="text-gray-600 text-sm sm:text-base">warm Introduction Assistant</div>
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
        </div>

        <form onSubmit={handleLogin}>
          <div>
<<<<<<< HEAD
            <label style={{ fontWeight: 500 }}>Email</label>
=======
            <label className="font-medium text-sm sm:text-base">Email</label>
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #C8C8C8',
                fontSize: '15px',
                outline: 'none',
                marginTop: 3,
                marginBottom: 12,
              }}
              placeholder="Enter email"
              required
            />
            <label style={{ fontWeight: 500 }}>Password</label>
            <div style={{ position: 'relative', marginBottom: 10 }}>
=======
              className="w-full p-3 rounded-lg border border-gray-300 text-sm sm:text-base outline-none mt-1 mb-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
            <label className="font-medium text-sm sm:text-base">Password</label>
            <div className="relative mb-3">
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #C8C8C8',
                  fontSize: '15px',
                  outline: 'none',
                  marginTop: 3,
                }}
=======
                className="w-full p-3 rounded-lg border border-gray-300 text-sm sm:text-base outline-none mt-1 pr-12 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
                placeholder="Enter password"
                required
              />
              <span
<<<<<<< HEAD
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: 18,
                  color: '#888',
                }}
=======
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-500 hover:text-gray-700"
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
<<<<<<< HEAD
            <div style={{ textAlign: 'left', marginBottom: 10 }}>
              <a href="/forgot-password" style={{ color: '#254FBD', fontSize: '14px', textDecoration: 'underline' }}>
=======
            <div className="text-left mb-3">
              <a href="/forgot-password" className="text-blue-600 text-sm underline hover:text-blue-800">
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
                Forget password?
              </a>
            </div>
          </div>

          {error && (
<<<<<<< HEAD
            <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px', textAlign: 'center' }}>
=======
            <div className="text-red-500 text-sm mb-3 text-center">
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
<<<<<<< HEAD
            style={{
              backgroundColor: loading ? '#ccc' : '#0347D2',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              padding: '12px 0',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: 10,
              width: '100%',
            }}
=======
            className={`w-full py-3 rounded-lg text-white text-sm sm:text-base font-semibold mb-3 transition-colors ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

<<<<<<< HEAD
        <div style={{ textAlign: 'center', fontSize: 14, color: '#666', marginTop: 8 }}>
          Don't have an account?{' '}
          <a href="/signup" style={{ color: '#254FBD', textDecoration: 'underline' }}>
=======
        <div className="text-center text-sm text-gray-600 mt-2">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 underline hover:text-blue-800">
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
          Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
