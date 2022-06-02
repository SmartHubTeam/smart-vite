export interface MenuItem {
  label: string
  to: any
  enabled: (item: any) => boolean
  items?: MenuItem[]
}
