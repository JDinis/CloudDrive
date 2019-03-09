import React, { Component } from 'react';
import $ from 'jquery';
Window.$ = $;

export default class ContextMenu extends Component {
  render() {
    $(window).addEventListener("contextmenu", e => {
      e.preventDefault();
    });

    return (
      <div class="contextmenu">
        <ul class="contextmenu-options">
          <li class="contextmenu-option">Back</li>
          <li class="contextmenu-option">Reload</li>
          <li class="contextmenu-option">Save</li>
          <li class="contextmenu-option">Save As</li>
          <li class="contextmenu-option">Inspect</li>
        </ul>
      </div>
    );
  }
}