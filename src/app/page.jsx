import { PrismaClient} from "@prisma/client";
import styles from './styles/CardTemplate.module.css';
const prisma = new PrismaClient();
import All_Cards from './Components/All_Cards';

export default async function Home(){
  const cards = await prisma.card.findMany();

  return(
    <main className="main-container">
      <h1>Dashboard</h1>
      <div className="description">
        <p> Learn the stats needed to evolve weapons in vampire survivors</p>
      </div>
      <h1>Review All Cards</h1>
      <div className="all-cards">
        <All_Cards cards = {cards}/>
      </div>
    </main>
  );
}