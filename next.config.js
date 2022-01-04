/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // basePath: "/about",  // root (if is '/', don't and can't set in here)
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/about',
      },
    ]
  },
}
