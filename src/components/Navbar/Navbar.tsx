import React from 'react'
import  {Text } from '../Text/Text'
import styles from './Navbar.module.css'

export const Navbar : React.FC<any> = (props) => {
  return (
   <nav>

        <div className={styles.content}>
            <Text variant={'h2'} style={{margin : 0}}>CT Shop</Text>
            <div className={styles.links}>
                <a href='/#' className={styles.link}>Home</a>
                <a href='/#' className={styles.link}>Home</a>
                <a href='/#' className={styles.link}>Home</a>

                <div className={styles['profile-icon']}>
                    <Text variant={'span'} style={{color: 'black' ,marginLeft :'10px'}}>RR</Text>
                </div>
            </div>
        </div>

   </nav>
  )
}
