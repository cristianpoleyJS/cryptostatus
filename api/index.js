const REQUEST_OPTIONS = {
    method: 'GET',
    redirect: 'follow'
}

const API_URL = 'https://api.coincap.io/v2'
const API_WEB_SOCKET = 'wss://ws.coincap.io/prices'

export const getAssets = () => {
    return fetch(`${API_URL}/assets`, REQUEST_OPTIONS)
}

export const getAssetById = (id) => {
    return fetch(`${API_URL}/assets/${id}`, REQUEST_OPTIONS)
}

export const getAssetHistoryById = (id, interval = 'd1', start = 1528470720000, end = new Date().getTime()) => {
    return fetch(`${API_URL}/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`, REQUEST_OPTIONS)
} 

export const openWatchPrices = (assets) => {
    const pricesWs = new WebSocket(`${API_WEB_SOCKET}?assets=${assets}`)
    return pricesWs
}