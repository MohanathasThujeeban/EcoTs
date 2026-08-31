import { useEffect } from 'react';

export default function PageScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('scroll-effects-ready');
    const sections = [...document.querySelectorAll('[data-reveal]')];
    if (reducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-in-view'));
      return () => document.documentElement.classList.remove('scroll-effects-ready');
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('scroll-effects-ready');
    };
  }, []);
  return null;
}