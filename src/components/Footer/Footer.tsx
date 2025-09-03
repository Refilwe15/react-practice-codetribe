import React from 'react'
import styles from './Footer.module.css'
import { ContentContainer }  from '../ContentContainer'

export const Footer = () => {
  return (
    <footer>
      <ContentContainer className={styles['footer-cont']}>
        footer
      </ContentContainer>
    </footer>
  )
}


