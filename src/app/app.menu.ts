const ADMIN: string[] = ['admin'];
const ADMIN_MANAGER: string[] = ['admin', 'manager'];
const ADMIN_MANAGER_CASHIER: string[] = ['admin', 'manager', 'cashier'];

export const NAVIGATION_MENU: Readonly<any[]> = [
  {
    label: 'Home',
    items: [
      { label: 'Dashboard', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/dashboard'] },
      {
        label: 'Master', icon: 'pi pi-fw pi-database',
        items: [
          { label: 'Category', routerLink: ['/master/category'] },
          { label: 'Message', routerLink: ['/master/message'] },
        ],
      },
    ],
  },
  {
    label: 'Management',
    items: [
      {
        label: 'User Manage', icon: 'pi pi-users',
        items: [
          { label: 'Customer', routerLink: ['/usermanage/customer'] },
          { label: 'Credit Reminder', routerLink: ['/usermanage/customer-creditreminder'] },
          { label: 'Credit Overdue', routerLink: ['/usermanage/customer-creditoverdue'] },
          { label: 'Biker', routerLink: ['/usermanage/biker'] }
        ]
      },
      {
        label: 'Schedule Manage', icon: 'pi pi-clock',
        items: [
          { label: 'Schedule', routerLink: ['/schedulemanage/schedule'] }
        ]
      },
    ]
  }
];
