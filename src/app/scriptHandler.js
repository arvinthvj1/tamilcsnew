"use client"
import Script from 'next/script';
import React from 'react'

const ScriptHandler = () => {
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
