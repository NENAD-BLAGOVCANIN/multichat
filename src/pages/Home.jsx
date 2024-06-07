import React from 'react'
import Header from '../components/Header'

function Home({toggleDarkMode, darkMode}) {
  return (
    <>

      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

    </>
  )
}

export default Home