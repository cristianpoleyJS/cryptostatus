const REQUEST_OPTIONS = {
  method: 'GET',
  redirect: 'follow'
}

const API_URL = 'https://api.coincap.io/v2'
// const API_WEB_SOCKET = 'wss://ws.coincap.io/prices'

export const getAssets = async ({ limit = 20, offset = 0, ids = '' }) => {
  let path = `${API_URL}/assets?limit=${limit}&offset=${offset}`
  if (ids) {
    path += `&ids=${ids}`
  }
  const response = await fetch(path, REQUEST_OPTIONS)
  return response.json()
}

export const getAssetById = async (id) => {
  const response = await fetch(`${API_URL}/assets/${id}`, REQUEST_OPTIONS)
  return _controlErrors(response, id)
}

export const getAssetHistoryById = async ({ id, interval = 'd1', start = 1528470720000, end = new Date().getTime() }) => {
  const response = await fetch(`${API_URL}/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`, REQUEST_OPTIONS)
  return _controlErrors(response, id)
}

export const getRates = async ({ id }) => {
  const response = await fetch(`${API_URL}/rates/${id}`)
  return response.json()
}

const _controlErrors = (response, id) => {
  if (response.status === 404) {
    throw new Error(`${id} not found`)
  } else if (response.status !== 200) {
    throw new Error('Internal error from API')
  }
  return response.json()
}

// export const openWatchPrices = (assets) => {
//   const pricesWs = new WebSocket(`${API_WEB_SOCKET}?assets=${assets}`)
//   return pricesWs
// }
