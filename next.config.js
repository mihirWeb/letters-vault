// \letters-vault\next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    PASSWORD: process.env.PASSWORD, // Use environment variable for password
  },
};