import React from 'react'
import Header from '../components/Header'

function Home({ toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {
  return (
    <>

      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}
        spellCheck={spellCheck} setSpellCheck={setSpellCheck}
      />

    </>
  )
}

export default Home