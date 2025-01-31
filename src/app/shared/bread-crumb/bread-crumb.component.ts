import { Component } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NAVIGATION_MENU } from 'src/app/app.menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [BreadcrumbModule],
  template: `<p-breadcrumb [home]="home" [model]="menuItems"></p-breadcrumb>`,
  styles: [`
    ::ng-deep .p-breadcrumb {
      background: transparent !important;
    }
  `]
})
export class BreadCrumbComponent {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = { icon: 'pi pi-home', routerLink: ['/dashboard'] };
  menuItems!: MenuItem[];
  displayName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItems = [];
    this.router.events.subscribe(eventData => {

      if (eventData instanceof Scroll) {

        this.menuItems = [];

        this.getMenuItem(eventData.routerEvent.url);

        // First Pop
        if (this.menuItems.length == 0) {
          let u: any[] = eventData.routerEvent.url.split('/');
          u.shift();
          u.pop();
          this.getMenuItem('/' + u.join('/'));
        }

        // Second Pop
        if (this.menuItems.length == 0) {
          let u: any[] = eventData.routerEvent.url.split('/');
          u.shift();
          u.pop();
          u.pop();
          this.getMenuItem('/' + u.join('/'));
        }

        if (this.menuItems[this.menuItems.length - 1] !== undefined) {
          let _displayName = this.menuItems[this.menuItems.length - 1].label ?? '';
          this.displayName = '';
          _displayName.split(' ').forEach((v, i) => { this.displayName += this.titleCaseWord(v) + ' ' });
        }

        return;
      }
    });
  }

  getMenuItem(url: string) {
    this.menuItems = [];

    NAVIGATION_MENU.forEach((v, i) => {
      v.items.forEach((v1: any, i1: any) => {
        if (v1.items !== undefined) {
          v1.items.forEach((v2: any, i2: any) => {
            if (v2.routerLink !== undefined) {
              if (this.getRouterLinkFullPath(v2.routerLink) == url) {
                this.menuItems.push({ label: v.label, routerLink: null });
                this.menuItems.push({ label: v1.label, routerLink: null });
                this.menuItems.push({ label: v2.label, routerLink: url });

                return;
              }
            }
          });
        }
        else {
          if (v1.routerLink !== undefined) {
            if (this.getRouterLinkFullPath(v1.routerLink) == url) {
              this.menuItems.push({ label: v.label, routerLink: null });
              this.menuItems.push({ label: v1.label, routerLink: url });
              return;
            }
            else if (url.startsWith(this.getRouterLinkFullPath(v1.routerLink) ?? "") && this.menuItems.length == 0) {
              this.menuItems.push({ label: v.label, routerLink: null });
              this.menuItems.push({ label: v1.label, routerLink: url });
            }
          }
        }
      });
    });
  }

  getRouterLinkFullPath(routerLinks: string[] | undefined) {
    if (routerLinks == undefined) return;

    if (routerLinks.length > 1) {
      return routerLinks.join('/');
    }
    else return routerLinks[0];
  }

  titleCaseWord(word: string) {
    if (!word)
      return word;
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
}
