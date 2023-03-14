import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.scss'
import { gql, useQuery } from '@apollo/client'
import { Country } from './assets/types'
import CountryItem from './components/CountryItem/CountryItem'
import Table from './components/Table/Table'
import CountryInfoScreen from './components/CountryInfoScreen/CountryInfoScreen'
import { Modal } from 'react-overlays'

const COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
    }
  }
`


function App() {

  const { loading, error, data } = useQuery(COUNTRIES)
  const [showModal, setShowModal] = useState(false)
  const [activeCountry, setActiveCountry] = useState('')

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error {JSON.stringify(error.cause)}</h1>
  }

  const renderBackdrop = () => {
    return (
      <div className={styles.modalBackdrop}>
        <button onClick={() => {
          setShowModal(false)
        }}>
          close
        </button>
        
      </div>
    )
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const countries:Country[] = data.countries

  return (
    <div className="App">

      {/* <CountryInfoScreen country='LV'/> */}

      {/* <button onClick={() => {
        setShowModal(true)
      }}>
        open modal
      </button> */}

      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            <th>
              Icon
            </th>
            <th>
              Code
            </th>
            <th>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, n) => {
            return (
              <tr className={`${styles.bodyRow} ${n % 2 ? styles.lightrow : styles.darkrow}`}
                  onClick={() => {
                    setActiveCountry(country.code)
                    setShowModal(true)
              }}>
                <td className={`${styles.tableCell} ${styles.flagCell}`}>
                  <img src={`src/assets/flags/${country.code.toLowerCase()}.svg`} className={styles.flag}/>
                </td>
                <td className={styles.tableCell}>
                  {country.code}
                </td>
                <td className={styles.tableCell}>
                  {country.name}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Modal
        className={styles.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <CountryInfoScreen country={activeCountry}/>
      </Modal>

      {/* {countries.map(country => {
        return (
          <div>
            <img src={`src/assets/flags/${country.code.toLowerCase()}.svg`} className={styles.flagBig}/>
            <div>
              <p>{country.code}</p>
              <p>{country.name}</p>
            </div>
          </div>
        )
      })} */}

      {/* <Table tHead={['icon', 'code', 'name']} 
             tBody={countries.map(country => {
              return [country.emoji!, country.code!, country.name!]
             })}/> */}
        {/* {countries.map(country => {
          return (
            <CountryItem country={country} key={country.code}/>
          )
        })} */}
    </div>
  )
}

export default App
