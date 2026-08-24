import { desktopLink, sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const summerGameContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Summer Game",
    hero: {
      title: "Summer Game",
      subtitle: "2D top-down clicking game made in pygame",
      description:
        "Click down enemies, collect XP, and grow your cursor into a screen-clearing force. How long can you hold the line?",
      image: "/ProjectSummerGameImageSmall.webp",
      imageAlt: "Screenshot of Summer Game",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br>Summer Game was a <strong>short OSAO school project made in three weeks.</strong> The main goal was to <strong>learn more about game development and how game engines actually work.</strong> I wanted to make a simple game that I could finish quickly and that would be fun to play. <strong>This was a fully solo project. Every part of it was designed, built, and completed by me,</strong> except for a few Creative Commons 0 licensed sound effects.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The idea was to create a <strong>clicking game where you collect XP orbs from defeating enemies.</strong> When you collect enough XP, you get an <strong>upgrade presented as two cards.</strong> I scoped the project to have only one upgrade to stay within the timeline, so currently there is only one available: the <strong>cursor size upgrade</strong>, which allows you to hit many more enemies because your cursor becomes much bigger. I wanted to keep the visuals simple, so I used a <strong>basic pixel art style with only black and white colors.</strong>',
        '<span class="text-highlight">My Role & Challenges</span><br>I wanted to learn how to use <strong>pygame and Python for game development.</strong> It was the <strong>first game I made with Python and pygame</strong>, so I had to learn a lot. <strong>Pygame is a low-level engine</strong>; it has many basic functions but no interface, so you have to code things like <strong>the game window, refreshing the pixels, and the per-frame logic.</strong>',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>Overall, creating this game was fun and interesting. It was my <strong>first time using a low-level engine</strong>, and I enjoyed <strong>managing almost every pixel on the screen myself.</strong>',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "2D Top-Down Clicking Game" },
        { label: "Project Timeline:", value: "X X, 2025 - X X, 2025" },
        { label: "Project Status:", value: "Prototype" },
        { label: "Game engine:", value: "Pygame-CE 2.5.5" },
        { label: "Programming language:", value: "Python" },
        { label: "Team size:", value: "Solo" },
        { label: "Main Roles:", value: "Designer, Developer & Artist" },
        { label: "Art tool:", value: "Pyxel Edit" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/umdU2Ozi9dk?si=qFRhe9OErLQJK9WW",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version, or play it in your browser",
      socialLinks: [
        desktopLink(
          "Play on desktop",
          "https://github.com/Jupresson/SummerGame/releases/tag/prototype",
        ),
        sourceCodeLink("Source Code", "https://github.com/Jupresson/SummerGame"),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Summer Game",
    hero: {
      title: "Summer Game",
      subtitle: "Pygamella tehty 2D ylhäältä kuvattu klikkailupeli",
      description:
        "Klikkaa vihollisia kuoliaksi, kerää XP:tä ja kasvata kursoria koko ruudun tyhjentäväksi voimaksi. Kuinka kauan pystyt pitämään pintasi?",
      image: "/ProjectSummerGameImageSmall.webp",
      imageAlt: "Kuvakaappaus Summer Game -pelistä",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br>Summer Game oli <strong>lyhyt OSAOn kouluprojekti, joka tehtiin kolmessa viikossa.</strong> Päätavoitteena oli <strong>oppia lisää pelinkehityksestä ja siitä, miten pelimoottorit oikeasti toimivat.</strong> Halusin tehdä yksinkertaisen pelin, jonka pystyn viimeistelemään nopeasti ja joka olisi hauska pelata. <strong>Tämä oli täysin yksin tehty projekti. Suunnittelin, rakensin ja viimeistelin kaiken itse,</strong> lukuun ottamatta muutamia Creative Commons 0 -lisensoituja ääniefektejä.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Idea oli tehdä <strong>klikkailupeli, jossa kerätään XP-palloja vihollisten kukistamisesta.</strong> Kun XP:tä kertyy tarpeeksi, pelaaja saa <strong>päivityksen kahden kortin muodossa.</strong> Rajasin projektin sisältämään vain yhden päivityksen, jotta aikataulu pysyy hallinnassa, joten tällä hetkellä tarjolla on vain <strong>kursorin koon kasvattava upgrade</strong>, joka antaa mahdollisuuden osua paljon useampaan viholliseen. Halusin pitää visuaalit yksinkertaisina, joten käytin <strong>perinteistä pixel art -tyyliä mustavalkoisella värimaailmalla.</strong>',
        '<span class="text-highlight">Roolini & haasteet</span><br>Halusin oppia käyttämään <strong>pygamea ja Pythonia pelinkehityksessä.</strong> Tämä oli <strong>ensimmäinen pelini Pythonilla ja pygamella</strong>, joten opeteltavaa oli paljon. <strong>Pygame on matalan tason moottori</strong>; se tarjoaa paljon perustoimintoja, mutta ei käyttöliittymää, joten pitää itse koodata esimerkiksi <strong>peliruutu, pikselien päivitys ja framelogiikka.</strong>',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Kokonaisuutena tämän pelin tekeminen oli hauskaa ja kiinnostavaa. Se oli <strong>ensimmäinen kertani matalan tason moottorin kanssa</strong>, ja nautin siitä, että sain <strong>hallita lähes jokaista ruudulla näkyvää pikseliä itse.</strong>',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "2D ylhäältä kuvattu klikkailupeli" },
        { label: "Projektin aikajana:", value: "X X, 2025 - X X, 2025" },
        { label: "Projektin tila:", value: "Prototyyppi" },
        { label: "Pelimoottori:", value: "Pygame-CE 2.5.5" },
        { label: "Ohjelmointikieli:", value: "Python" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Pääroolit:", value: "Suunnittelija, kehittäjä ja artisti" },
        { label: "Grafiikkatyökalu:", value: "Pyxel Edit" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/umdU2Ozi9dk?si=qFRhe9OErLQJK9WW",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa selaimessa",
      socialLinks: [
        desktopLink(
          "Pelaa työpöydällä",
          "https://github.com/Jupresson/SummerGame/releases/tag/prototype",
        ),
        sourceCodeLink("Lähdekoodi", "https://github.com/Jupresson/SummerGame"),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default summerGameContent;
