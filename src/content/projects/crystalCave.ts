import { browserLink, desktopLink, sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const crystalCaveContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Crystal Cave",
    hero: {
      title: "Crystal Cave",
      subtitle: "2D platformer game made in Godot 4.3",
      description:
        "A precision platformer where every jump, wall climb, and dash counts. Too many wrong moves mean starting over, so mastering the movement is the game.",
      image: "/ProjectCrystalCaveImageSmall.webp",
      imageAlt: "Screenshot of Crystal Cave",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>Crystal Cave is the first game I made at OSAO school.</strong> The main goal was to <strong>learn and understand basic programming and explore different game engines.</strong>',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The main concept was to create a <strong>simple 2D platformer using Godot.</strong> I added <strong>simple enemies that turn when they hit a wall and deal damage to the player.</strong> The player can <strong>walk, run, dash, jump, wall jump, and double jump.</strong> The double jump is an interesting aspect because it <strong>resets after a wall jump</strong>, which allows the player to <strong>chain wall jumps to climb and reach crystal pickups</strong> that heal the player.',
        '<span class="text-highlight">My Role & Challenges</span><br>One of the main challenges was <strong>creating the art</strong>, mainly due to lack of experience and having too many choices. I solved this by <strong>limiting my options early, choosing a fixed tile size and a set color palette.</strong> The player script also grew too large and unmanageable, so I <strong>created a script-based state machine</strong>, which made handling animations and adding new movement states much cleaner.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>I learned that <strong>tutorials are especially important for complex movement mechanics.</strong> We also <strong>playtested the game at school</strong>, which was a valuable experience for <strong>understanding what players actually find fun and intuitive.</strong>',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "2D Platformer" },
        { label: "Project Timeline:", value: "X X, 2025 - Apr 15, 2025" },
        { label: "Project Status:", value: "Demo" },
        { label: "Game engine:", value: "Godot 4.3" },
        { label: "Programming language:", value: "Godot 4.3 GDScript" },
        { label: "Team size:", value: "Solo" },
        { label: "Role:", value: "Designer, Developer & Artist" },
        { label: "Art tool:", value: "Pyxel Edit" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/7n2CEHahJbw?si=mQDSxguszLxG5Ds0",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version, or play it in your browser",
      socialLinks: [
        browserLink("Play on browser", "https://jupresson.itch.io/crystalcave"),
        desktopLink(
          "Play on desktop",
          "https://github.com/Jupresson/Crystal-Cave/releases/tag/PlayableDemoDesktop",
        ),
        sourceCodeLink("Source Code", "https://github.com/Jupresson/Crystal-Cave"),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Crystal Cave",
    hero: {
      title: "Crystal Cave",
      subtitle: "Godot 4.3:lla tehty 2D tasohyppelypeli",
      description:
        "Tarkkuusplatformeri, jossa jokainen hyppy, seinäkiipeily ja dash merkitsee. Liian moni virhe tarkoittaa aloitusta alusta, joten liikkeen hallinta on koko pelin ydin.",
      image: "/ProjectCrystalCaveImageSmall.webp",
      imageAlt: "Kuvakaappaus Crystal Cave -pelistä",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>Crystal Cave on ensimmäinen peli, jonka tein OSAOssa.</strong> Päätavoitteena oli <strong>oppia ja ymmärtää ohjelmoinnin perusteita sekä tutkia eri pelimoottoreita.</strong>',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Pääidea oli tehdä <strong>yksinkertainen 2D tasohyppelypeli Godotilla.</strong> Lisäsin peliin <strong>yksinkertaisia vihollisia, jotka kääntyvät seinään osuessaan ja tekevät vahinkoa pelaajalle.</strong> Pelaaja voi <strong>kävellä, juosta, dashata, hypätä, seinähypätä ja tehdä tuplahypyn.</strong> Tuplahypyn kiinnostava puoli on, että se <strong>nollautuu seinähypyn jälkeen</strong>, mikä antaa mahdollisuuden <strong>ketjuttaa seinähyppyjä kristallien luo kiipeämiseksi</strong> ja parantumisen hakemiseksi.',
        '<span class="text-highlight">Roolini & haasteet</span><br>Yksi suurimmista haasteista oli <strong>grafiikan tekeminen</strong>, pääasiassa kokemuksen puutteen ja liian monien vaihtoehtojen takia. Ratkaisin tämän <strong>rajaamalla vaihtoehdot aikaisin, valitsemalla kiinteän tilesizen ja väripaletin.</strong> Pelaajan skripti kasvoi myös liian suureksi ja hankalaksi ylläpitää, joten <strong>rakensin skriptipohjaisen state machinen</strong>, joka helpotti animaatioiden hallintaa ja uusien liikkumistilojen lisäämistä huomattavasti.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Opin, että <strong>tutorialit ovat erityisen tärkeitä monimutkaisissa liikkumismekaniikoissa.</strong> Me myös <strong>pelitestasimme peliä koulussa</strong>, mikä oli arvokasta kokemusta sen ymmärtämiseen, <strong>mikä tuntuu pelaajista oikeasti hauskalta ja intuitiiviselta.</strong>',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "2D tasohyppely" },
        { label: "Projektin aikajana:", value: "X X, 2025 - 15.4.2025" },
        { label: "Projektin tila:", value: "Demo" },
        { label: "Pelimoottori:", value: "Godot 4.3" },
        { label: "Ohjelmointikieli:", value: "Godot 4.3 GDScript" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Rooli:", value: "Suunnittelija, kehittäjä ja artisti" },
        { label: "Grafiikkatyökalu:", value: "Pyxel Edit" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/7n2CEHahJbw?si=mQDSxguszLxG5Ds0",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa selaimessa",
      socialLinks: [
        browserLink("Pelaa selaimessa", "https://jupresson.itch.io/crystalcave"),
        desktopLink(
          "Pelaa työpöydällä",
          "https://github.com/Jupresson/Crystal-Cave/releases/tag/PlayableDemoDesktop",
        ),
        sourceCodeLink("Lähdekoodi", "https://github.com/Jupresson/Crystal-Cave"),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default crystalCaveContent;
