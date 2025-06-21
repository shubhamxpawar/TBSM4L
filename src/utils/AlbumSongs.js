const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export function setCachedAlbum(albumName, songs) {
  const payload = {
    data: songs,
    timestamp: Date.now()
  }
  localStorage.setItem(`album-${albumName}`, JSON.stringify(payload))
}

export function getCachedAlbum(albumName) {
  const raw = localStorage.getItem(`album-${albumName}`)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    if (Date.now() - parsed.timestamp < CACHE_DURATION) {
      return parsed.data
    } else {
      // expired
      localStorage.removeItem(`album-${albumName}`)
      return null
    }
  } catch {
    return null
  }
}
