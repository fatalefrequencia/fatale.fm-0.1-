import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '@/lib/firebase/analytics';

export const useAnalytics = () => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initAnalytics();
    }
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
};