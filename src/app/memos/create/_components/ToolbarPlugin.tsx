import { useCallback, useEffect, useRef, useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from 'lexical'
import { $setBlocksType } from '@lexical/selection'
import { mergeRegister } from '@lexical/utils'
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list'
import { $createHeadingNode } from '@lexical/rich-text'

import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'
import { EDITOR_TEXT_TYPES } from '../_consts'

const LowPriority = 1

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext()
  const toolbarRef = useRef(null)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))
      setIsStrikethrough(selection.hasFormat('strikethrough'))
    }
  }, [])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar()
          return false
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload)
          return false
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload)
          return false
        },
        LowPriority,
      ),
    )
  }, [editor, updateToolbar])

  const handleTextTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value

    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        switch (value) {
          case 'h1':
          case 'h2':
          case 'h3':
            $setBlocksType(selection, () => $createHeadingNode(value))
            break
          case 'p':
            $setBlocksType(selection, () => $createParagraphNode())
            break
          default:
            break
        }
      }
    })
  }

  return (
    <div
      className={cn(
        'toolbar',
        'bg-gray-50',
        'rounded-t-md',
        'border',
        'border-t-gray-100',
        'border-b-0',
        'flex px-2 py-1',
      )}
      ref={toolbarRef}
    >
      <button
        disabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        className='toolbar-item'
        aria-label='Undo'
      >
        <Icon name='arrow-clockwise' className='fill-[#667085]' size={20} />
      </button>
      <button
        disabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        className='toolbar-item'
        aria-label='Redo'
      >
        <Icon
          name='arrow-counter-clockwise'
          className='fill-[#667085]'
          size={20}
        />
      </button>
      <Divider />
      <select
        onChange={handleTextTypeChange}
        className='bg-[inherit] mx-2 outline-none cursor-pointer'
        defaultValue='p'
      >
        {EDITOR_TEXT_TYPES.map(({ value, label }) => (
          <option key={`text-${value}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        className={'toolbar-item ' + (isBold ? 'active' : '')}
        aria-label='Format Bold'
      >
        <Icon name='bold' />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        className={'toolbar-item ' + (isItalic ? 'active' : '')}
        aria-label='Format Italics'
      >
        <Icon name='italic' />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
        className={'toolbar-item ' + (isUnderline ? 'active' : '')}
        aria-label='Format Underline'
      >
        <Icon name='underline' size={28} style={{ marginTop: '2px' }} />
      </button>
      <button
        onClick={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
        }
        className={'toolbar-item ' + (isStrikethrough ? 'active' : '')}
        aria-label='Format Strikethrough'
      >
        <Icon name='line-through' />
      </button>
      <Divider />
      <button
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')}
        className='toolbar-item'
        aria-label='Left Align'
      >
        <Icon name='align-start' />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')}
        className='toolbar-item'
        aria-label='Center Align'
      >
        <Icon name='align-middle' />
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')}
        className='toolbar-item'
        aria-label='Right Align'
      >
        <Icon name='align-end' />
      </button>
      <Divider />
      <button
        onClick={() =>
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
        }
        className='toolbar-item'
        aria-label='Ordered List'
      >
        <Icon name='ordered-list' size={28} />
      </button>
      <button
        onClick={() =>
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
        }
        className='toolbar-item'
        aria-label='Unordered List'
      >
        <Icon name='unordered-list' size={28} />
      </button>
    </div>
  )
}

export default ToolbarPlugin

const Divider = () => <div className='m-1 bg-gray-100 w-px' />
