import styles from "@/styles/Home.module.css";
import PhotoCarousel from "@/component/carousel";

export default function Home() {
  const images = [
  "/eu.jpeg",
  "/eu2.jpeg",
  "/eu3.jpeg",
  "/eu4.jpeg",
  "/eu5.jpeg",
];

  return (
    <>
      <div className={styles.messageStyle}>
        <PhotoCarousel images={images} />
        {/* Mensagem de aniversário abaixo do carrossel */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>
            Hoje o dia amanheceu mais brilhante, os pássaros cantam com mais
            alegria e o mundo parece celebrar contigo. É o teu aniversário, um
            dia tão especial quanto você. Desde que você entrou na minha vida,
            cada momento ganhou um novo significado, uma nova cor, uma nova
            alegria.
            Neste dia tão importante, quero que saiba o quanto você é amada,
            valorizada e essencial para mim. Desejo que todos os seus sonhos se
            transformem em realidade e que a felicidade seja sua companheira
            constante. Que possamos comemorar juntos não apenas hoje, mas todos
            os dias de nossas vidas. Feliz aniversário! Que a vida lhe sorria
            sempre, assim como seu sorriso ilumina a minha existência. Estou
            aqui para celebrar cada segundo ao seu lado e para apoiá-la em cada
            novo capítulo que a vida nos reservar. Amo você !
          </p>
        </div>
      </div>
    </>
  );
}
