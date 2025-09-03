import React from 'react'

type Props = {
    children : React.ReactNode,
    className ?: string
    style ?: React.CSSProperties

}

export const ContentContainer : React.FC<Props> = ({children,className}) => {
  return (
    <div className = {className} style={{maxWidth : 1200,padding : 10}}>
        {children}
    </div>
  )
}
