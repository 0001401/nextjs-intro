/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //예를 들어 contact로 갈 거라면
        source: "/contact",
        //우리는 form이라는 destination으로 보낼거야
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        //여기서 redirection이 영구적인지 아닌지에 따라서, 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정 됩니다
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
