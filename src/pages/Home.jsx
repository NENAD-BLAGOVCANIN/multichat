import React from 'react'
import TabsNavigation from '../components/TabsNavigation'

function Home({ toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {
  return (
    <>

      <TabsNavigation toggleDarkMode={toggleDarkMode} darkMode={darkMode}
        spellCheck={spellCheck} setSpellCheck={setSpellCheck}
      />

    </>
  )
}

export default Home