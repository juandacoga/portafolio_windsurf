// Next.js configuration for API proxy
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/posts/:path*',
        destination: 'http://localhost:3001/api/posts/:path*',
      },
    ];
  },
};
