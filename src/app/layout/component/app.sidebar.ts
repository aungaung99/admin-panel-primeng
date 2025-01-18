import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppMenu],
  styles: [
    /* Add custom scrollbar styles here */
    `::-webkit-scrollbar {
        width: 6px;
      }

      ::-webkit-scrollbar-track {
        background: var(--scroll-bg-color);
        height: 16px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--scroll-bar-color);
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }`
  ],
  template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
})
export class AppSidebar {
  constructor(public el: ElementRef) { }
}
