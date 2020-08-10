export class ComponentA {
  render() {
    setTimeout(() => {
      window.postMessage({ action: 'rendered' }, window.location.origin)
    }, 500)
  }
}