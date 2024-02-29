import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  const aquaLogoUrl = "https://media.discordapp.net/attachments/1134051261688328294/1212755257617023046/bricksnetwork.png?ex=65f2fd59&is=65e08859&hm=d55b00591a536e6804d6384d1bed92c4841e5ec8729fa58aa6b0b984c171ef0d&=&format=webp&quality=lossless&width=562&height=562";

  return (
    <header class={`${styles.header} ${styles.animatedBackground}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={aquaLogoUrl} alt="Aqua Logo" class={styles.animatedLogo} />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});
