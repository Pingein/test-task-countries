import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { ApolloProvider } from '@apollo/client/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
