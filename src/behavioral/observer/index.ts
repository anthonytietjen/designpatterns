const windowLoadedListener = () => {
  alert('loaded')
}

window.addEventListener('load', windowLoadedListener)
window.removeEventListener('load', windowLoadedListener)