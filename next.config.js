/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{domains:['dummyimage.com',]},
  env: {
    BASE_URL: process.env.BASE_URL,
    MONOGODB_URI: process.env.MONOGODB_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  
  }
}
