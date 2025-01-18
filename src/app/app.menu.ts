const ADMIN: string[] = ['admin'];
const ADMIN_MANAGER: string[] = ['admin', 'manager'];
const ADMIN_MANAGER_CASHIER: string[] = ['admin', 'manager', 'cashier'];

export const NAVIGATION_MENU: Readonly<any[]> = [
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard', icon: 'pi pi-fw pi-building-columns', routerLink: ['/dashboard'], data: { role: ADMIN_MANAGER_CASHIER }, readonly: true
      }
    ]
  }
];
