{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'hf-windows-v1';\
const urlsToCache = [\
  '/',\
  '/index.html',\
  '/manifest.json',\
  '/icon-192.png',\
  '/icon-512.png',\
  'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js'\
];\
\
self.addEventListener('install', event => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME)\
      .then(cache => cache.addAll(urlsToCache))\
  );\
\});\
\
self.addEventListener('fetch', event => \{\
  event.respondWith(\
    caches.match(event.request)\
      .then(response => \{\
        // Cache hit - return response\
        if (response) \{\
          return response;\
        \}\
        return fetch(event.request);\
      \}\
    )\
  );\
\});\
\
self.addEventListener('activate', event => \{\
  const cacheWhitelist = [CACHE_NAME];\
  event.waitUntil(\
    caches.keys().then(cacheNames => \{\
      return Promise.all(\
        cacheNames.map(cacheName => \{\
          if (cacheWhitelist.indexOf(cacheName) === -1) \{\
            return caches.delete(cacheName);\
          \}\
        \})\
      );\
    \})\
  );\
\});}