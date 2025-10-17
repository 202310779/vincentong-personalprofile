'use client';

import { useCallback, useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('dark'); // default matches original

  // Initialize from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const initial = saved || 'dark';
    setTheme(initial);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  // When theme changes, update document attribute and storage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  // Match original button labels:
  // if theme === 'light' => "🌙 Dark Mode"
  // else (dark) => "☀️ Light Mode"
  const toggleLabel = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

  return { theme, toggleTheme, toggleLabel };
}