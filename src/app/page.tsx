"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CompanyInfo from "@/components/CompanyInfo";
import PrivacyModal from "@/components/PrivacyModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    // Check if initial hash is #privacidad
    if (typeof window !== "undefined" && window.location.hash === "#privacidad") {
      setPrivacyOpen(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === "#privacidad") {
        setPrivacyOpen(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openPrivacy = () => {
    setPrivacyOpen(true);
    window.history.pushState(null, "", "#privacidad");
  };

  const closePrivacy = () => {
    setPrivacyOpen(false);
    if (window.location.hash === "#privacidad") {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <Header onOpenPrivacy={openPrivacy} />
      <main>
        <Hero />
        <Services />
        <CompanyInfo />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      <PrivacyModal isOpen={privacyOpen} onClose={closePrivacy} />
    </>
  );
}
