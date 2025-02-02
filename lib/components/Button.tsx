import React from 'react'
import styles from './Button.module.css'

export function Button (props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props

  return (
    <button {...rest} className={styles.button}>
      {props.children}
    </button>
  )
}
