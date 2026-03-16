
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/countries/countries'



const countriesPromiss = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {
  return (
    <>
      <Suspense fallback={<p>Loding All Countries....</p>}>
        <Countries countriesPromiss={countriesPromiss}></Countries>
      </Suspense>
    </>
  )
}

export default App
