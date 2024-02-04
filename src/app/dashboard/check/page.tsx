"use client"

import Script from 'next/script';
import $ from 'jquery';

export default function Home() {

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossOrigin="anonymous"
      />
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">192.168.0.1</h2>
          <p className="mt-6 text-lg leading-8">
            Локацiя: Україна
          </p>
        </div>
      </div>
    </>
  );
}
