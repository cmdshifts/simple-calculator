import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react'
import { type IconType } from 'react-icons'
import { ButtonType, DisplayType } from './types'

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean
  close: () => void
}

export interface CalculatorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType
  buttonType: ButtonType
}

export interface DisplayProps extends HTMLAttributes<HTMLDivElement> {
  displayType?: DisplayType
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
