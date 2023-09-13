import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import './lit-element';
import { renderReactComponent } from './react-component';

@customElement('my-app')
export class App extends LitElement {

  render() {
    return html`
      <div>
        <div>
          <h1>Hello Lit</h1>
          <my-element></my-element>
        </div>
        
        <hr />
        
        <div>
          <h1>Hello React</h1>
          ${renderReactComponent()}
        </div>
        
        <hr />

        <div>
          <slot></slot>
        </div>
      </div>
    `
  }

  static styles = css`
  :host {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': App
  }
}