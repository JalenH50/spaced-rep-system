import React from 'react'
import Card_Template from '../Components/Card_Template'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function AllCards() {
  const cards = await prisma.card.findMany();

  return (
    <main className='main-container'>
      <h1>Vampire Survivors Evoultion Quiz</h1>
      <h2>Which stats evolve which weapons?</h2>
      <Card_Template 
        cards = {cards} 
      />
    </main>
  )
}
