
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:'mongodb+srv://xenodochy23:Senpou_23@cluster0.wjlb6pr.mongodb.net/?retryWrites=true&w=majority/'
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
