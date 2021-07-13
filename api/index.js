const REQUEST_OPTIONS = {
    method: 'GET',
    redirect: 'follow'
}

const API_URL = 'https://api.coincap.io/v2'
const API_WEB_SOCKET = 'wss://ws.coincap.io/prices'

export const getAssets = async () => {
    return fetch(`${API_URL}/assets`, REQUEST_OPTIONS)
}

export const getAssetById = async (id) => {
    return fetch(`${API_URL}/assets/${id}`, REQUEST_OPTIONS)
}

export const getAssetHistoryById = async (id, interval = 'h6', start = 1528470720000) => {
    return fetch(`${API_URL}/assets/${id}/history?interval=${interval}&start=${start}`, REQUEST_OPTIONS)
}

export const openWatchPrices = (assets) => {
    const pricesWs = new WebSocket(`${API_WEB_SOCKET}?assets=${assets}`)
    return pricesWs
}