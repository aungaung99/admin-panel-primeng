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
      }

      ::-webkit-scrollbar-thumb {
        background: var(--scroll-bar-color);
        height: 16px;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--p-surface-500);
      }`
  ],
  template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
})
export class AppSidebar {
  constructor(public el: ElementRef) { }
}
