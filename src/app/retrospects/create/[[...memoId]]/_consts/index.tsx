import Image from 'next/image'
import CharactersImage from '@/assets/images/characters.png'
import BlueCharacterImage from '@/assets/images/character-blue.png'
import { RetrospectInfoForm } from '../_types/retrospect'

export const RETROSPECT_TYPE_OPTIONS = [
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

export const INITIAL_RETROSPECT_INFO: RetrospectInfoForm = {
  retrospectType: null,
  templateId: null,
  groupId: '',
}

export const editorTheme = {
  code: 'editor-code',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    p: 'editor-paragraph',
  },
  image: 'editor-image',
  link: 'editor-link',
  list: {
    listitem: 'editor-listitem',
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
  },
  ltr: 'ltr',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  rtl: 'rtl',
  text: {
    bold: 'editor-text-bold',
    code: 'editor-text-code',
    italic: 'editor-text-italic',
    strikethrough: 'editor-text-strikethrough',
    underline: 'editor-text-underline',
  },
}
