import type {NextConfig} from 'next';
const nextConfig:NextConfig={
  poweredByHeader:false,
  async redirects(){return [
    {source:'/documentaries',destination:'/media',permanent:true},
    {source:'/documents',destination:'/resources',permanent:true},
  ];},
  async headers(){return [{source:'/:path*',headers:[
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
    {key:'X-Frame-Options',value:'DENY'},
    {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
    // Next/font + external legacy portrait; Turnstile challenge resources are explicitly permitted.
    {key:'Content-Security-Policy',value:[
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' https://cdn.prod.website-files.com data:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
      "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://va.vercel-scripts.com",
      "connect-src 'self' https://challenges.cloudflare.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "frame-src https://challenges.cloudflare.com",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ')},
  ]}];}
};
export default nextConfig;
