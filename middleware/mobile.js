export default function (context) {
  // check if the user is visiting the site from a mobile device
  const userAgent = process.server
    ? context?.req?.headers['user-agent']
    : navigator.userAgent
  context.isMobile = /mobile/i.test(userAgent)
}
