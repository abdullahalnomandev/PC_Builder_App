/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.techlandbd.com",
      "https://cdn-icons-png.flaticon.com",
      "https://encrypted-tbn0.gstatic.com/",
      "https://www.redhat.com/",
      "https://www.startech.com.bd",
      "www.startech.com.bd"
    ]
  }
};

module.exports = nextConfig;
