export class ObserverB {
  public startObserving () {
    window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) {
        return
      }
      if (event.data.action === 'rendered') {
        console.log("component rendered")
      }
    })
  }
}