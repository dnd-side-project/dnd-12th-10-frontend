import Image from 'next/image'
import CharactersImage from '@/assets/images/characters.png'
import BlueCharacterImage from '@/assets/images/character-blue.png'

export const TEMPLATE_OPTIONS = [
  {
    key: 'template-1',
    templateName: '자유 구성',
    templateDetail: '자유구성입니다~~',
  },
  {
    key: 'template-2',
    templateName: 'KPT 템플릿',
    templateDetail: 'KPT 템플릿입니다~~',
  },
  {
    key: 'template-3',
    templateName: '4L 템플릿',
    templateDetail: '4L 템플릿',
  },
]

export const MY_GROUPS = [
  { key: 'group-1', label: '성장하는 디자이너' },
  { key: 'group-2', label: '성장하는 개발자' },
]

export const MEMO_TYPE_OPTIONS = [
  {
    value: 'GROUP',
    label: '모임 회고',
    image: <Image src={CharactersImage} alt='' width={153} height={77} />,
  },
  {
    value: 'PERSONAL',
    label: '개인 회고',
    image: <Image src={BlueCharacterImage} alt='' width={100} height={77} />,
  },
]

export const EDITOR_TEXT_TYPES = [
  {
    value: 'h2',
    label: 'Heading 1',
  },
  {
    value: 'h3',
    label: 'Heading 2',
  },
  {
    value: 'h4',
    label: 'Heading 3',
  },
  {
    value: 'p',
    label: 'Normal',
  },
]
