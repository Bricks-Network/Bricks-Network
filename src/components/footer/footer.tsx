import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.aboutUs}>
            <h4>About Me</h4>
            <p>Passionate about aerospace and a coding enthusiast.</p>
          </div>

          <div class={styles.contact}>
            <h4>Contact Me</h4>
            <p>Email: <a href="mailto:info@g9aerospace.in">info@g9aerospace.in</a></p>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Links</h4>
            <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
            <br></br>
            <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
            <br></br>
            <a href="/cookies-policy" class={styles.link}>Cookies Policy</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>I collaborate with industry leaders to provide the best solutions.</p>
            <p>Partnership: <a href="mailto:partnership@g9aerospace.in">partnership@g9aerospace.in</a></p>

            {/* Social Media Icons */}
            <h4>Stay Connected</h4>
            <div class={styles.socialIcons}>

              {/* GitHub Sponsorship Button */}
              <iframe
                src="https://github.com/sponsors/g9militantsYT/button"
                title="Sponsor g9militantsYT"
                height="32"
                width="114"
                style={{ border: '0', borderRadius: '6px' }}>
              </iframe>

              <a href="https://www.instagram.com/g9aerospace/" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299946012692/instagram.png?ex=65ec698e&is=65d9f48e&hm=732a5d849b3efbe06f6bc1057354638619c686e298a9c94b22fac1fb48689d3d&=&format=webp&quality=lossless&width=688&height=688" alt="Instagram" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947300835463259/youtube.png?ex=65ec698e&is=65d9f48e&hm=521e3f470c0b9cab040c02487017670cc79032cd0abdbf6606a59ccc563cdde0&=&format=webp&quality=lossless&width=797&height=561" alt="Youtube" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://github.com/g9militantsYT" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299409133598/github.jpg?ex=65ec698e&is=65d9f48e&hm=c1f63faacbf8c0aa288af0aef46c6add8e4ac9e8a16ef45f4915ad11ef240cec&=&format=webp&width=525&height=525" alt="GitHub" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://discord.gg/gfzDMS7tQD" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299040174140/discord.png?ex=65ec698e&is=65d9f48e&hm=5adb4638198ff8eedeb5b791642e5e263ab0a2a22378bf74aba39632ac383601&=&format=webp&quality=lossless&width=320&height=320" alt="Discord" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://steamcommunity.com/id/g9aerospace/" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947300453785620/steam.png?ex=65ec698e&is=65d9f48e&hm=3bf05c0ec04d0fa45b4a372370a650b5d989458d05a466b49e9dccedfb322039&=&format=webp&quality=lossless&width=561&height=561" alt="Steam" style={{ maxHeight: '30px' }} />
              </a>

              <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="g9aerospace" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

            </div>
          </div>
        </div>

        <div class={styles.copyrightBox}>
          <div class={styles.copyright}>
            <p>&copy; 2024 G9 Aerospace. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
