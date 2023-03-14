import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Country, Language } from '../../assets/types'
import styles from './CountryInfoScreen.module.scss'


const COUNTRY = gql`
query Countries($code: ID!)
  {
    country(code: $code) {
        code
        name
        native
        capital
        emoji
        currency
        continent {
            code
            name
        }
        languages {
            code
            name
            native
        }
    }
  }
`


interface CountryInfoScreenParams {
    country: Country | String
}

const CountryInfoScreen = ({country}:CountryInfoScreenParams) => {

    const { loading, error, data } = useQuery(COUNTRY, {
        variables:{
            code: country
        }
    })

    if (loading) {
      return <h1>Loading...</h1>
    }
  
    if (error) {
      return <h1>Error {JSON.stringify(error.message)}</h1>
    }

    const {
        code,
        name,
        native,
        capital,
        emoji,
        currency,
        continent,
        languages,
    }:Country = data.country
    
    return (
        <div className={styles.infoScreen}>
            <div className={styles.leftSide}>
                <img className={styles.flag} src={`src/assets/flags/${code.toLowerCase()}.svg`}/>
                <div className={styles.nameContainer}>
                    <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.name}>{code}</h2>
                </div>

                <h3 className={styles.name}>{native}</h3>
                <h4 className={styles.name}>{capital}</h4>

            </div>
            <div className={styles.rightSide}>
                <span>Currency: {currency}</span> <br />
                <span>Continent: {continent.name} ({continent.code})</span> <br />
                <span>Languages:</span>
                <ul>
                    {languages.map(language => {
                        return <li>{language.code}, {language.name} ({language.native})</li>
                    })}
                </ul>
            </div>
        </div>
    )
}


export default CountryInfoScreen