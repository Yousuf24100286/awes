'use client';

import ArabicLandingPage from "@/components/ArabicLandingPage";
import EnglishLandingPage from "@/components/EnglishLandingPage";
import { useSearchParams } from "next/navigation";

export default function LandingPage() {
  const searchParams = useSearchParams();
  const language = searchParams.get('locale') || 'en';
  return language === 'ar' ? <ArabicLandingPage /> : <EnglishLandingPage />
}
