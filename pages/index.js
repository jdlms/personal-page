import Head from "next/head";
import styles from "../styles/Home.module.css";
import image from "../public/berlin-rbb24.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshs Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="color1">My Personal Page</h1>
      <br> </br>
      <h2>
        <span className="color2">Hi,</span>
        <span>I&apos;m Josh 👋</span>
      </h2>
      <h3>I&apos;m 36 years old.</h3>
      <br></br>
      <h3>Here&apos;s a photo of the city where I live. 🖼️</h3>
      <div>
        <Image src={image} alt="Grossstadt" />
      </div>

      <p>
        I&apos;ve lived in Berlin for 4 years. It&apos;s one of two German
        cities I&apos;ve lived in. In the winter it is very grey here, and often
        cold. When it&apos;s warmer it feels like a different city.
      </p>

      <section>
        <h2 className="color1">Hobbies</h2>
        <p>These are some things I enjoy.</p>
        <ul className="color2">
          <li>Cooking food</li>
          <li>Trying to practice yoga</li>
          <li>Reading newspapers and books</li>
          <li>Learning Javascript</li>
        </ul>
      </section>
    </div>
   
  );
}
