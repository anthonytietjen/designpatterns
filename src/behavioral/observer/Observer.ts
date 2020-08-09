export class ComponentA {
  rendered = 0;

  constructor(
    private renderCount: number,
    private onAllComponentsRendered: () => void
  ) {
    window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) {
        return
      }
      if (event.data.action === 'rendered') {
        this.rendered++;
        if (this.rendered == this.renderCount) {
          this.onAllComponentsRendered()
        }
      }
    })
  }
}