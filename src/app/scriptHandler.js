"use client"
import Script from 'next/script';
import React from 'react'

const ScriptHandler = () => {
//   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9831135411942124"
//      crossorigin="anonymous"></script>
// <!-- React Detail Page Ads -->
// <ins class="adsbygoogle"
//      style="display:block"
//      data-ad-client="ca-pub-9831135411942124"
//      data-ad-slot="7597783218"
//      data-ad-format="auto"
//      data-full-width-responsive="true"></ins>
// <script>
//      (adsbygoogle = window.adsbygoogle || []).push({});
// </script>
  return (
    <div>
      <Script
        id="Absence-banner"
                async
                strategy="afterInteractive"
                onError={(e) => {
                    console.error('Script failed to load', e);
                }}
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9831135411942124`}
                crossOrigin="anonymous"
            />
    </div>
  )
}

export default ScriptHandler
