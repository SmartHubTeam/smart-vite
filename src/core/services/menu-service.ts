import type { MenuItem } from '~/core/interfaces/layout'

export const MenuService = {
  list(t: (key: string) => string): MenuItem[] {
    return [
      {
        label: t('menu.dashboard'),
        to: { name: 'admin' },
        enabled: () => true,
      },
      {
        label: t('menu.groups'),
        to: { name: 'admin-groups' },
        enabled: () => true,
      },
      {
        label: t('menu.users'),
        to: { name: 'admin-users' },
        enabled: () => true,
      },
    ]
  },
}
