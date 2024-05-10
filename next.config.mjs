// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-app",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

//module.exports = nextConfig;
export default nextConfig;