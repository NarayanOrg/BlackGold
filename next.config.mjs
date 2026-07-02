/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // This allows all HTTPS domains
        },
        {
          protocol: 'http',
          hostname: '**', // This allows all HTTP domains
        },
      ],
      unoptimized: true
  }
};

export default nextConfig;
