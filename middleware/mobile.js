export default function (context) {
  const userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  context.isMobile = /mobile/i.test(userAgent)
}
