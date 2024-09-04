import React from 'react'
import style from './Footer.module.css'

const footer = () => {
  return (
    <div>
      <>
      <footer className={style.footer}>
        <h3>Ideias de quem gosta de ficar com o pé na estrada!</h3>
        <p>IdeiaApp &copy; 2024</p>
      </footer>
      </>       
    </div>
  )
}

export default footer