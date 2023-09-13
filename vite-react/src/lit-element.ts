import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {

  @property({ type: Number })
  count = 0

  render() {
    return html`
        <div>
          <h2>Counter: ${this.count}</h2>
          <button @click=${this._onClick}>Increment</button>
        </div>
    `
  }

  private _onClick() {
    this.count++    
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': {
        count?: number
      }
    }
  }
}