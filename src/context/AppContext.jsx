'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { companyInfo } from '../data';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  const openQuoteModal = (serviceName = '') => {
    setQuoteService(serviceName);
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setQuoteService('');
  };

  const handleOpenWhatsApp = (serviceName = '') => {
    const text = serviceName
      ? `السلام عليكم، أود الاستفسار وطلب عرض سعر لخدمة (${serviceName}).`
      : 'السلام عليكم، أود الاستفسار وطلب عرض سعر لمشروع إعلاني.';
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Scroll listener for floating WhatsApp button
  useEffect(() => {
    const handleScroll = () => {
      const threshold = typeof window !== 'undefined' && window.innerHeight ? window.innerHeight * 0.65 : 450;
      setShowFloatingWhatsApp(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        toastMessage,
        setToastMessage,
        showToast,
        isQuoteOpen,
        quoteService,
        openQuoteModal,
        closeQuoteModal,
        handleOpenWhatsApp,
        showFloatingWhatsApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
