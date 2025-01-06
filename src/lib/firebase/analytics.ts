import { Analytics, logEvent, setUserProperties } from 'firebase/analytics';
import { initializeAnalytics } from './config';

let analyticsInstance: Analytics | null = null;

export const initAnalytics = async () => {
  if (!analyticsInstance) {
    analyticsInstance = await initializeAnalytics();
  }
  return analyticsInstance;
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, eventParams);
  }
};

export const setUserProfile = (properties: Record<string, any>) => {
  if (analyticsInstance) {
    setUserProperties(analyticsInstance, properties);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page_name: pageName });
};

export const trackUserAction = (action: string, category: string, label?: string) => {
  trackEvent('user_action', {
    action,
    category,
    label
  });
};

export const trackError = (error: Error, context?: string) => {
  trackEvent('error', {
    error_name: error.name,
    error_message: error.message,
    error_stack: error.stack,
    context
  });
};