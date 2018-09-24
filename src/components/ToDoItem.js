import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {style} from './ToDoItem-styles.js';

export class ToDoItem extends LitElement {
  /**
  * Declare the properties that will be
  * available in the binding system
  */
  static get properties() {
    return {
      item: {type: String},
      deleteItem: {type: Function},
    };
  }

  render() {
    return html`
    ${style}
    <div class="ToDoItem">
      <p class="ToDoItem-Text">${this.item}</p>
      <button class="ToDoItem-Delete"
        @click=${this.deleteItem}>-
      </button>
    </div>
    `;
  }
}

customElements.define('to-do-item', ToDoItem);
