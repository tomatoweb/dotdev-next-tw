/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
        allowedOrigins: ['mathiasappelmans.be'],
      },
    reactCompiler: true,
    ppr: 'incremental'
  },
};

export default nextConfig;
