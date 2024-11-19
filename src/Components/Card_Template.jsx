'use client'

import React, { useState } from 'react'
import styles from '../styles/CardTemplate.module.scss'
import { PrismaClient } from "@prisma/client";
import {percentUnderstood} from '../../../App'
const prisma = new PrismaClient();

export default function Card_Template({cards}) {
  const [counter, setCounter] = useState(0)
  const [attack, setAttack] = useState(cards[counter].question)
  const [percentage, setPercentage] = useState(0)

  const flipCard = () => {
    if (attack === cards[counter].question) {
      setAttack(cards[counter].answer)
    } else if (attack === cards[counter].answer) {
      setAttack(cards[counter].question)
    }
  }

  console.log(cards)

  function displayIndividualFlashcard() {
    return <div onClick={flipCard} className={styles.cardTemplate}>
      <div id="card-id" dangerouslySetInnerHTML={{ __html: attack }}></div>
      <div className="percent-understood">
        <p id='mode' dangerouslySetInnerHTML={{ __html: percentage }}></p>
      </div>
    </div>
  }

  const changeCard = () => {
    setAttack(cards[counter+1].question)

    if (counter < (cards.length-2)) {
      setCounter(counter+1)
    }
  }

  return (
    <main>
      <div className='cards-display'>
        {displayIndividualFlashcard()}
        <button onClick={changeCard}>Next</button>
      </div>
      <div className='difficulty-description'>
        <p>How difficult is this card?</p>
      </div>
      <div className='level-buttons'>
        <button onClick={percentUnderstood(cards, 75, counter)} className='easy'>Easy</button>
        <button onClick={percentUnderstood(cards, 50, counter)} className='medium'>Medium</button>
        <button onClick={percentUnderstood(cards, 25, counter)} className='hard'>Hard</button>
      </div>
    </main>
  )
}

