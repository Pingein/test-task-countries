import React, { useState } from 'react'
import styles from './Img.module.scss'


interface ImgParams {
    src: string
    className?: string
    imgHeight?: string
    imgWidth?: string
    imgWidthPage?: string
}

const Img = ({src, className, imgHeight, imgWidth, imgWidthPage}:ImgParams) => {
    return (
        <div className={`${styles.imgContainer} ${className}`}
             style={{width:imgWidth, paddingBottom:`calc(${imgHeight} / ${imgWidth} * ${imgWidthPage}})`}}>
            <img src={src} className={styles.img} style={{height:imgHeight}}/>
        </div>
    )
}


export default Img