"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroScrollDemo } from "@/components/ui/demo/conatiner_scroll";
import Footer from "@/components/ui/demo/footer";
import { GoogleGeminiEffectDemo } from "@/components/ui/demo/gemini_demo";
import Gemini_new_demo from "@/components/ui/demo/gemini_new_demo";
import { HeroParallaxDemo } from "@/components/ui/demo/hero_parelllax";
import { CardHoverEffectDemo } from "@/components/ui/demo/hover_effect_demo";
import { InfiniteMovingCardsDemo } from "@/components/ui/demo/infinite-scroll";
import { SparklesPreview } from "@/components/ui/demo/sparkles";
import { TypewriterEffectSmoothDemo } from "@/components/ui/demo/typewriter-effect-demo";
import { LampDemo } from "@/components/ui/lamp";

export default function LandingPage() {
  return (
    <div className="w-full bg-black">
      <HeroParallaxDemo />
      <SparklesPreview />
      <HeroScrollDemo />
      <TypewriterEffectSmoothDemo />
      <CardHoverEffectDemo />
      {/* <GoogleGeminiEffectDemo /> */}
      {/* <Gemini_new_demo /> */}
      {/* <LampDemo /> */}
      <Footer />
    </div>
  );
}
