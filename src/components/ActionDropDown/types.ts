import Link from 'next/link'
import { ReactNode } from 'react'

export interface ActionDropDownProps<ItemListKey extends string> {
  role: ItemListKey
  itemList: ItemList<ItemListKey>
}

export type ItemList<KeyType extends string> = {
  [Key in KeyType]: ActionItemProps[]
}

export interface ActionItemProps {
  key: string
  label: string
  onPress?: VoidFunction
  color?: 'danger'
  as?: 'button' | typeof Link
  href?: string
  icon?: ReactNode
}
