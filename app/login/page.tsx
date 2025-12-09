'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('Login:', { userId, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.BG_GRAY_50 }}>
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div 
          className="w-full max-w-md rounded-2xl bg-white p-8"
          style={{ 
            boxShadow: COLORS.SHADOW_LG,
            border: `1px solid ${COLORS.BORDER_LIGHT}`,
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 
              className="text-3xl font-bold mb-2"
              style={{ color: COLORS.PRIMARY }}
            >
              로그인
            </h1>
            <p 
              className="text-sm"
              style={{ color: COLORS.TEXT_SECONDARY }}
            >
              Redvelvet에 오신 것을 환영합니다
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* User ID Input */}
            <div>
              <label 
                htmlFor="userId"
                className="block text-sm font-semibold mb-2"
                style={{ color: COLORS.TEXT_PRIMARY }}
              >
                아이디
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                style={{
                  borderColor: COLORS.BORDER_LIGHT,
                  backgroundColor: COLORS.BG_WHITE,
                  color: COLORS.TEXT_PRIMARY,
                  transition: DESIGN.TRANSITION_FAST,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = COLORS.PRIMARY;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${COLORS.PRIMARY_SUBTLE}`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = COLORS.BORDER_LIGHT;
                  e.currentTarget.style.boxShadow = 'none';
                }}
                placeholder="아이디를 입력하세요"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label 
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
                style={{ color: COLORS.TEXT_PRIMARY }}
              >
                비밀번호
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BG_WHITE,
                    color: COLORS.TEXT_PRIMARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = COLORS.PRIMARY;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${COLORS.PRIMARY_SUBTLE}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = COLORS.BORDER_LIGHT;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                  style={{ color: COLORS.TEXT_SECONDARY }}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Find Links */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border mr-2"
                  style={{
                    borderColor: COLORS.BORDER_MEDIUM,
                    accentColor: COLORS.PRIMARY,
                  }}
                />
                <span 
                  className="text-sm"
                  style={{ color: COLORS.TEXT_SECONDARY }}
                >
                  아이디 저장
                </span>
              </label>
              <div className="flex gap-3">
                <Link 
                  href="/find-id"
                  className="text-sm font-medium transition-colors"
                  style={{ 
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLORS.TEXT_SECONDARY;
                  }}
                >
                  아이디 찾기
                </Link>
                <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
                <Link 
                  href="/find-password"
                  className="text-sm font-medium transition-colors"
                  style={{ 
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLORS.TEXT_SECONDARY;
                  }}
                >
                  비밀번호 찾기
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.TEXT_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY_DARK;
                e.currentTarget.style.boxShadow = COLORS.SHADOW_MD;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              로그인
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px" style={{ backgroundColor: COLORS.BORDER_LIGHT }}></div>
            <span 
              className="px-4 text-xs"
              style={{ color: COLORS.TEXT_TERTIARY }}
            >
              또는
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: COLORS.BORDER_LIGHT }}></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p 
              className="text-sm mb-4"
              style={{ color: COLORS.TEXT_SECONDARY }}
            >
              아직 계정이 없으신가요?
            </p>
            <Link
              href="/signup"
              className="inline-block w-full py-3 rounded-lg font-semibold border transition-all"
              style={{
                borderColor: COLORS.BORDER_LIGHT,
                color: COLORS.TEXT_PRIMARY,
                backgroundColor: COLORS.BG_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.PRIMARY;
                e.currentTarget.style.color = COLORS.PRIMARY;
                e.currentTarget.style.boxShadow = COLORS.SHADOW_SM;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.BORDER_LIGHT;
                e.currentTarget.style.color = COLORS.TEXT_PRIMARY;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              회원가입
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

