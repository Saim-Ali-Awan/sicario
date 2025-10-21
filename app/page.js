'use client';
import Link from 'next/link';
import { IconArrowRight, IconCheck, IconVideo } from '@tabler/icons-react';
import Navbar from '@/components/Navbar';

export default function HeroSection() {
  return (
    <main>
      <Navbar/>
    <div className="flex flex-col items-center w-full px-4 bg-background mt-35">
      <div className="w-full max-w-[862px] flex flex-col items-center mb-20">
        {/* Badge and Intro Text */}
        <div className="flex items-center p-2 pr-3 bg-primary/10 rounded-[--radius] gap-3 mb-5 border border-muted/10">
          <div className="text-xs font-sans leading-4 tracking-[0.04em] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-[--radius]">
            New
          </div>
          <p className="text-base leading-5 text-foreground font-normal font-sans text-center max-w-[640px]">
            AI-Powered stores are here!
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[64px] mb-6 text-center font-semibold font-serif text-foreground">
          The All-in-One solution for your E-Commerce business
        </h1>

        {/* Caption */}
        <p
          id="hero-caption"
          className="text-center max-w-[640px] text-base md:text-xl text-muted-foreground font-normal md:leading-[30px] font-sans"
          >
          Whether you’re looking for a powerful funnel builder or a high-converting eCom store, Sicario.com is the solution
          that will never let you down.
        </p>

        {/* CTA Button */}
        <Link
          href="/pricing"
          className="mt-8 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-[--radius] text-base font-semibold hover:bg-primary/90 transition-colors duration-300"
          aria-label="Start a 30-day trial with Sicario.com"
          >
          Start now - 30 days trial
          <IconArrowRight className="ml-2 h-5 w-5" />
        </Link>

        {/* Features List */}
        <div className="mt-8 flex flex-wrap items-center justify-center w-full max-w-[800px] gap-5">
          {[
            'Blazing fast landing pages',
            'Perfect for dropshipping and COD',
            'Saves time and money',
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <IconCheck className="p-1.5 rounded-full text-primary text-xl bg-primary/10" />
              <p className="font-semibold text-muted-foreground leading-6 font-sans">{feature}</p>
            </div>
          ))}
        </div>

        {/* Video CTA */}
        <Link
          href="/demo"
          className="flex items-center justify-center text-[15px] text-primary font-semibold p-1 mt-16 mb-10 gap-2.5 hover:text-primary/90 transition-colors duration-300"
          aria-label="Watch Sicario.com in action"
          >
          <IconVideo className="h-6 w-6" />
          <span>See it in action</span>
          <span className="text-muted-foreground font-normal">— 3min</span>
        </Link>
      </div>
    </div>
          </main>
  );
}