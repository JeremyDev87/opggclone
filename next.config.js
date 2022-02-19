module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/summoner/:id",
        destination: `https://codingtest.op.gg/api/summoner/:id`
      },
      {
        source: "/api/mostInfo/:id",
        destination: `https://codingtest.op.gg/api/summoner/:id/mostInfo`
      },
    ]
  }
}
