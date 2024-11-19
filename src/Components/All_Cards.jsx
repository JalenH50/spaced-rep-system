'use client'
import { useEffect, useState } from "react"
import styles from '../styles/CardTemplate.module.css'

export default function All_Cards({cards}){
    const [flippedCards, setFlippedCards] = useState({});

    const flipCard = (card) => {
        setFlippedCards((prevFlippedCards) => ({
            ...prevFlippedCards,
            [card.id]: !prevFlippedCards[card.id]
        }));
    };

    const cardLayout = () => {
        return cards.map((card, index) => {
            const isFlipped = flippedCards[card.id];

            return(
                <div onClick={() => flipCard(card)} key={index} className={styles.cardTemplate}>
                    {isFlipped ? (
                        <h3 dangerouslySetInnerHTML={{ __html: card.answer}} />
                    ) : (
                        <h3 dangerouslySetInnerHTML={{ __html: card.question}} />
                    )}
                </div>
            );
        });
    };

    return (
        <main>
            {cardLayout()}
        </main>
    );
}