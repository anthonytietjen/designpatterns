export class ComponentC {
  render() {
    setTimeout(() => {
      window.postMessage({ action: 'rendered' }, window.location.origin)
    }, 1000)
  }
}