/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // basePath: "/about",  // root (if is '/', don't and can't set in here)
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/about",
      },
    ];
  },
  
  // Will only be available on the server side
  serverRuntimeConfig: {
    websiteName: process.env.WEBSITE_NAME,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    helloMsg: "Welcome to " + process.env.WEBSITE_NAME,
  },
};
