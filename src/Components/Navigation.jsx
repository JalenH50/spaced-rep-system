import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <main className='navigation-container'>
      <h1>Flashcards System</h1>
      <nav>
        <div className='link-styles'>
          <Link href={'/'} style={{textDecoration: 'none', color: 'black'}}>Dashboard</Link>
        </div>
        <div className='link-styles'>
          <Link href={'/cards'} style={{textDecoration: 'none', color: 'black'}}>Study</Link>
        </div>
        <div className='link-styles'>
          <Link href={'/add'} style={{textDecoration: 'none', color: 'black'}}>Add</Link>
        </div>
      </nav>
    </main>
  )
}
