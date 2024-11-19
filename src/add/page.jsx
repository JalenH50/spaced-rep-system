import React from 'react'
import Add_Cards from '../Components/Add_Cards'
const prisma = new PrismaClient();
import { PrismaClient } from "@prisma/client";

export default async function AllCards() {
  const cards = await prisma.card.findMany();

  return (
    <main className='main-container'>
      <h1>Add Your Own Cards</h1>
      <Add_Cards
        cards = {cards}
      />
    </main>
  )
}
