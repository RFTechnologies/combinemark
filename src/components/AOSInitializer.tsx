'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return null;
} 