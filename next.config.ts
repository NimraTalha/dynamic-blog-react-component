/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Match all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-sniffing
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
