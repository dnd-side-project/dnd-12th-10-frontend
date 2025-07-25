import { RetrospectInfoForm } from '../_types/retrospect'
import { ButtonProps } from '@/components/Button'

export const RADIO_BUTTON_SIZE: { [k in ButtonProps['size']]: string } = {
  small: 'h-[92px] min-h-[92px]',
  medium: 'h-[106px] min-h-[106px]',
  large: 'h-[117px] min-h-[117px]',
}

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
  retrospectType: 'GROUP',
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
