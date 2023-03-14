import React, { useState } from 'react'
import { Country } from '../../assets/types'
import Img from '../Img/Img'
import styles from './CountryItem.module.scss'


interface CountryItemParams {
    country: Country
    key?: string | number
}

const CountryItem = ({ country }:CountryItemParams) => {
    const {
        code,
        name,
        native,
        capital,
        emoji,
        currency,
        continent,
        languages,
    } = country

    return (
        <div className={styles.countryItem}>
            <img src={`src/assets/flags/${country.code.toLowerCase()}.svg`} className={styles.flag}/>
            <span>{code} {name}</span>
        </div>
    )
}


export default CountryItem