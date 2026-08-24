import { sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const hellSlayerContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Hell Slayer",
    hero: {
      title: "Hell Slayer",
      subtitle: "First-person Roguelike game made in Unity",
      description:
        "Fight through waves of enemies in a first-person dungeon crawler, collect weapons, adapt your loadout, and see how long you can last.",
      image: "/ProjectHellSlayerImageSmall.webp",
      imageAlt: "Screenshot of Hell Slayer",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>Hell Slayer is a first-person roguelike game developed in Unity by a team of four as an OSAO school project.</strong> Our main goal was to <strong>explore different game engines and programming languages while working together as a team.</strong> We used <strong>Trello for task management</strong> and created a <strong>detailed game design document (GDD)</strong> to organize our ideas and workflow. Our deadline was to have a <strong>playable demo ready for Vectorama</strong>, one of Finland\'s biggest game events, where people could try it and give feedback.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The main concept was to create a <strong>dungeon crawler where the player must survive waves of increasingly difficult enemies.</strong> We implemented a <strong>weapon collection system</strong>, with each weapon offering unique attributes to make gameplay more engaging and strategic.',
        '<span class="text-highlight">My Role & Challenges</span><br>My main responsibilities included <strong>player modeling, animation, and coding and modeling the enemies.</strong> I experimented with <strong>Mixamo animations in Blender</strong>, which worked, but I faced challenges such as naming conventions, adding custom animations, and fixing bone transform issues. Eventually, I created <strong>new animations from scratch</strong>, using Mixamo as a reference.',
        'The player model only had arms, but in hindsight, <strong>adding legs could have improved the sense of distance and movement</strong>, especially since the player\'s point of view changed based on speed.',
        'I also created the <strong>enemy models and coded their behaviors</strong>, including the spike ball and the bird. One of my main challenges was managing enemy states in Unity. To solve this, I implemented a <strong>script-based state machine for all enemies.</strong> While this worked, I found the state-switching logic confusing at first. Looking back, <strong>state machines are a common concept in game programming</strong>, and better built-in tools for custom state management in engines like Unity would be a welcome addition.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>By the end, our team completed the <strong>player weapon system, player controller, two enemy types, and the enemy wave system.</strong> Some features did not make it into the final build due to time constraints and project management challenges. This experience taught me a lot about <strong>teamwork, documentation, and the importance of planning.</strong>',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "First-Person Dungeon Crawler" },
        { label: "Project Timeline:", value: "Feb 10 2025 - Jun 1 2025" },
        // removed Project Duration
        { label: "Project Status:", value: "Prototype" },
        { label: "Game engine:", value: "Unity 6" },
        { label: "Programming language:", value: "C#" },
        { label: "Team size:", value: "4" },
        { label: "Main Roles:", value: "3D Artist, Animator & Enemy Programmer" },
        { label: "Art tool:", value: "Blender 5.0.0" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/6x94trqcZJM?si=rrvwRk9Lw4N5cFyz",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version, or play it in your browser",
      socialLinks: [
        sourceCodeLink("Source Code", "https://github.com/Jupresson/Hellslayer"),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Hell Slayer",
    hero: {
      title: "Hell Slayer",
      subtitle: "Unitylla tehty ensimmäisen persoonan roguelike-peli",
      description:
        "Taistele vihollisaaltojen läpi ensimmäisen persoonan luolastoryömintäpelissä, kerää aseita ja muokkaa varustusta selviytyäksesi pidempään.",
      image: "/ProjectHellSlayerImageSmall.webp",
      imageAlt: "Kuvakaappaus Hell Slayer -pelistä",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>Hell Slayer on Unitylla tehty ensimmäisen persoonan roguelike-peli, jonka neljän hengen tiimi toteutti OSAOn kouluprojektina.</strong> Päätavoitteemme oli <strong>tutkia eri pelimoottoreita ja ohjelmointikieliä samalla, kun työskentelimme tiiminä.</strong> Käytimme <strong>Trelloa tehtävien hallintaan</strong> ja teimme <strong>yksityiskohtaisen pelisuunnitteludokumentin (GDD)</strong> ideoiden ja työnkulun järjestämiseen. Deadlinena oli saada <strong>pelattava demo valmiiksi Vectoramaan</strong>, yhteen Suomen suurimmista pelitapahtumista, jossa ihmiset voisivat kokeilla peliä ja antaa palautetta.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Pääidea oli tehdä <strong>luolastoryömintäpeli, jossa pelaajan täytyy selviytyä yhä vaikeammista vihollisaalloista.</strong> Toteutimme <strong>aseiden keräilyjärjestelmän</strong>, jossa jokaisella aseella on omat ominaisuutensa pelin strategisuuden ja kiinnostavuuden lisäämiseksi.',
        '<span class="text-highlight">Roolini & haasteet</span><br>Päävastuuni olivat <strong>pelaajan mallinnus, animaatio ja koodaus sekä vihollisten mallinnus.</strong> Kokeilin <strong>Mixamo-animaatioita Blenderissä</strong>, mikä toimi, mutta kohtasin haasteita esimerkiksi nimeämiskäytännöissä, omien animaatioiden lisäämisessä ja luumuunnosten korjaamisessa. Lopulta tein <strong>uusia animaatioita alusta asti</strong> käyttäen Mixamoa referenssinä.',
        'Pelaajamallissa oli vain kädet, mutta jälkikäteen ajatellen <strong>jalkojen lisääminen olisi voinut parantaa etäisyyden ja liikkeen tuntua</strong>, etenkin koska pelaajan näkökulma muuttui nopeuden mukaan.',
        'Mallinsin myös <strong>viholliset ja koodasin niiden käyttäytymisen</strong>, mukaan lukien piikkipallon ja linnun. Yksi suurimmista haasteista oli vihollisten tilojen hallinta Unityssä. Ratkaisin tämän toteuttamalla <strong>skriptipohjaisen state machinen kaikille vihollisille.</strong> Se toimi, mutta tilojen vaihtumisen logiikka tuntui aluksi sekavalta. Jälkikäteen ajatellen <strong>state machinet ovat yleinen käsite peliohjelmoinnissa</strong>, ja paremmat sisäänrakennetut työkalut oman tilanhallinnan tekemiseen esimerkiksi Unityssä olisivat tervetulleita.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Lopputuloksena tiimimme sai valmiiksi <strong>pelaajan asejärjestelmän, pelaajaohjauksen, kaksi vihollistyyppiä ja vihollisaaltojärjestelmän.</strong> Osa ominaisuuksista jäi lopullisesta buildista pois aikarajoitteiden ja projektinhallinnan haasteiden vuoksi. Kokemus opetti paljon <strong>tiimityöstä, dokumentaatiosta ja suunnittelun tärkeydestä.</strong>',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Ensimmäisen persoonan luolastoryömintä" },
        { label: "Projektin aikajana:", value: "10.2.2025 - 1.6.2025" },
        // removed Projektin kesto
        { label: "Projektin tila:", value: "Prototyyppi" },
        { label: "Pelimoottori:", value: "Unity 6" },
        { label: "Ohjelmointikieli:", value: "C#" },
        { label: "Tiimin koko:", value: "4" },
        { label: "Pääroolit:", value: "3D-artisti, animaattori ja vihollisohjelmoija" },
        { label: "Grafiikkatyökalu:", value: "Blender 5.0.0" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/6x94trqcZJM?si=rrvwRk9Lw4N5cFyz",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa selaimessa",
      socialLinks: [sourceCodeLink("Lähdekoodi", "https://github.com/Jupresson/Hellslayer")],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default hellSlayerContent;
