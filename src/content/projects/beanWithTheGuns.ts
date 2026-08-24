import { desktopLink, sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const beanWithTheGunsContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Bean with the Guns",
    hero: {
      title: "Bean with<br>the Guns",
      subtitle: "3D Roguelike bullet hell game made in Godot",
      description:
        "Solo survival experience with waves of escalating enemies and strategic upgrade choices.",
      image: "/ProjectBeanWithTheGunsImageSmall.webp",
      imageAlt: "Screenshot of Bean with the Guns",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>Bean with the Guns is a 3D roguelike bullet hell game I made as an OSAO school project and a fully solo effort.</strong> The game was built for the <strong>Bit1 competition</strong>, entering through the <strong>PreBit1 online qualifier</strong>, where the top games advance to the Bit1 Finale. Bit1 is a <strong>student game development competition</strong> where teams pitch their game and present a core loop video, with judges evaluating based on <strong>commercial potential, technical execution, and uniqueness.</strong>',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The concept was inspired by titles like <strong>MegaBonk and Deep Rock Galactic: Survivor</strong>, 3D roguelike games where you fight endless waves of enemies. The goal was to create a <strong>3D bullet hell experience in Godot</strong> with escalating enemy waves, satisfying combat, and <strong>extraction events at specific intervals.</strong>',
        '<span class="text-highlight">My Role & Challenges</span><br>One of the main challenges was <strong>optimizing the enemy waves</strong> due to the short development window. I tackled performance by implementing <strong>object pooling, a spatial grid, dedicated manager systems, multimesh rendering, and Godot\'s Physics Server directly to bypass node overhead</strong> and keep the game running smoothly.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>The game made it into the <strong>PreBit1 online qualifier</strong>, but unfortunately did not advance to the Bit1 Finale. Competing as a <strong>solo developer against full teams</strong> presented unique challenges. The lack of team members and the tight deadline meant I had to prioritize heavily and cut features to stay focused.',
        'Despite not reaching the finals, this project was incredibly valuable. I learned <strong>many optimization techniques</strong> and significantly improved my ability to <strong>manage game state effectively.</strong> I created <strong>reusable global script managers</strong> that I can apply to future projects, implemented a <strong>flexible manager system to control all enemies and entities</strong>, and built <strong>component-based systems like health components</strong> that can be easily attached to any entity. I also developed <strong>a dynamic weapon and upgrade system</strong> that provided players with many choices.',
        'It would be interesting to see if game engines developed a feature like an <strong>AI-powered architecture reviewer</strong> that could scan my project files, suggest architectural improvements, highlight when my approach does not match common game development patterns, and recommend proven methodologies for systems design. Tools like this would help developers learn best practices faster and avoid architectural mistakes early on.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "3D Roguelike, bullet hell game" },
        { label: "Project Timeline:", value: "Feb 9, 2026 - Mar 1, 2026" },
        // removed Project Duration
        { label: "Project Status:", value: "Prototype" },
        { label: "Game engine:", value: "Godot 4.6.1" },
        { label: "Programming language:", value: "Godot 4.6.1 GDScript" },
        { label: "Team size:", value: "Solo" },
        { label: "Role:", value: "Designer, Developer & Artist" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/CCMsMy0qzm4?si=449iIepM13iT0uDP",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version or play it on your PC",
      socialLinks: [
        desktopLink(
          "Play on desktop",
          "https://github.com/Jupresson/beans-with-the-guns/releases/tag/Prototype",
        ),
        sourceCodeLink(
          "Source Code",
          "https://github.com/Jupresson/beans-with-the-guns.git",
        ),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Bean with the Guns",
    hero: {
      title: "Bean with<br>the Guns",
      subtitle: "Godotilla tehty 3D roguelike bullet hell -peli",
      description:
        "Yksin tehty selviytymiskokemus, jossa vihollisaallot kasvavat ja päivitysvalinnoilla on iso merkitys.",
      image: "/ProjectBeanWithTheGunsImageSmall.webp",
      imageAlt: "Kuvakaappaus Bean with the Guns -pelistä",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>Bean with the Guns on 3D roguelike bullet hell -peli, jonka tein OSAOn kouluprojektina täysin yksin.</strong> Peli rakennettiin <strong>Bit1-kilpailua</strong> varten ja osallistui <strong>PreBit1-verkkokarsintaan</strong>, josta parhaat pelit etenivät Bit1-finaaliin. Bit1 on <strong>opiskelijoiden pelinkehityskilpailu</strong>, jossa tiimit pitchaavat pelinsä ja esittelevät core loop -videon, ja tuomarit arvioivat niitä <strong>kaupallisen potentiaalin, teknisen toteutuksen ja omaperäisyyden</strong> perusteella.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Idea sai vaikutteita peleistä kuten <strong>MegaBonk ja Deep Rock Galactic: Survivor</strong>, eli 3D roguelike -peleistä, joissa taistellaan loputtomia vihollisaaltoja vastaan. Tavoitteena oli tehdä <strong>Godotilla 3D bullet hell -kokemus</strong>, jossa vihollisaallot kasvavat, taistelu tuntuu hyvältä ja mukana on <strong>poistumistapahtumia tietyin väliajoin.</strong>',
        '<span class="text-highlight">Roolini & haasteet</span><br>Yksi suurimmista haasteista oli <strong>vihollisaaltojen optimointi</strong> lyhyen kehitysajan takia. Ratkaisin suorituskykyä käyttämällä <strong>object poolingia, spatiaalista ruudukkoa, omia manager-järjestelmiä, multimesh-renderöintiä ja Godotin Physics Serveriä suoraan node-ylipään ohittamiseksi</strong>, jotta peli pysyi sulavana.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Peli pääsi <strong>PreBit1-verkkokarsintaan</strong>, mutta ei valitettavasti edennyt Bit1-finaaliin. Kilpailu <strong>soolokehittäjänä kokonaisia tiimejä vastaan</strong> toi omat haasteensa. Tiimin puuttuminen ja tiukka aikataulu pakottivat priorisoimaan rajusti ja leikkaamaan ominaisuuksia.',
        'Vaikka finaalipaikka jäi saavuttamatta, projekti oli erittäin arvokas. Opin <strong>paljon optimointitekniikoita</strong> ja paransin merkittävästi kykyäni <strong>hallita pelin tilaa tehokkaasti.</strong> Rakensin <strong>uudelleenkäytettäviä globaaleja skriptimanagereita</strong>, toteutin <strong>joustavan manager-järjestelmän vihollisten ja entiteettien hallintaan</strong> sekä rakensin <strong>komponenttipohjaisia järjestelmiä, kuten health-komponentteja</strong>, joita voi liittää helposti mihin tahansa entiteettiin. Kehitin myös <strong>dynaamisen ase- ja päivitysjärjestelmän</strong>, joka toi pelaajalle paljon valintoja.',
        'Olisi kiinnostavaa nähdä, jos pelimoottoreihin kehitettäisiin ominaisuus kuten <strong>tekoälypohjainen arkkitehtuurin arvioija</strong>, joka voisi käydä projektitiedostoja läpi, ehdottaa arkkitehtuuriparannuksia, huomauttaa kun ratkaisu ei vastaa yleisiä pelinkehitysmalleja ja suositella toimivia menetelmiä järjestelmäsuunnitteluun. Tällaiset työkalut auttaisivat kehittäjiä oppimaan parhaat käytännöt nopeammin ja välttämään arkkitehtuurivirheitä aikaisessa vaiheessa.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "3D roguelike bullet hell -peli" },
        { label: "Projektin aikajana:", value: "9.2.2026 - 1.3.2026" },
        // removed Projektin kesto
        { label: "Projektin tila:", value: "Prototyyppi" },
        { label: "Pelimoottori:", value: "Godot 4.6.1" },
        { label: "Ohjelmointikieli:", value: "Godot 4.6.1 GDScript" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Rooli:", value: "Suunnittelija, kehittäjä ja artisti" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/CCMsMy0qzm4?si=449iIepM13iT0uDP",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa sitä omalla tietokoneellasi",
      socialLinks: [
        desktopLink(
          "Pelaa työpöydällä",
          "https://github.com/Jupresson/beans-with-the-guns/releases/tag/Prototype",
        ),
        sourceCodeLink(
          "Lähdekoodi",
          "https://github.com/Jupresson/beans-with-the-guns.git",
        ),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default beanWithTheGunsContent;
