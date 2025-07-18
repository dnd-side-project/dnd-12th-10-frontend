import { DropdownItem } from '@heroui/dropdown'
import { ActionItemProps } from './types'

/** 개별 액션 항목 컴포넌트 */
const ActionItem = ({
  key,
  label,
  onPress,
  color,
  as = 'button',
  href,
  icon,
}: ActionItemProps) => (
  <DropdownItem
    key={key}
    color={color}
    as={as}
    href={href}
    onPress={onPress}
    className='text-center'
    startContent={icon}
  >
    {label}
  </DropdownItem>
)

export default ActionItem
