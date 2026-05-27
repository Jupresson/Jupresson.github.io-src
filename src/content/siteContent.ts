import { socialIcons } from "./icons";
import type {
  HomePageContent,
  Locale,
  PageEntry,
  ProjectDetailPageContent,
  ProjectListPageContent,
  SocialLink,
  UiContent,
} from "../i18n/site";

const profileSocialLinks: SocialLink[] = [
  {
    name: "Discord",
    url: "https://discord.com/users/jupresson",
    icon: socialIcons.discord,
  },
  {
    name: "itch.io",
    url: "https://jupresson.itch.io",
    icon: socialIcons.itchIo,
  },
  {
    name: "GitHub",
    url: "https://github.com/Jupresson",
    icon: socialIcons.github,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Jupresson",
    icon: socialIcons.youtube,
  },
];

const desktopLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.github,
});

const sourceCodeLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.github,
});

const browserLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.itchIo,
});

export const uiContent: Record<Locale, UiContent> = {
  en: {
    siteTitle: "Jupresson Portfolio",
    nav: {
      home: "Home",
      projects: "Projects",
      languageLabel: "Change language",
    },
    footer: {
      availability: "Open to game jams, collaborations, and work offers!",
    },
    buttons: {
      details: "Details",
      source: "Source",
      copiedEmail: "Copied :]",
      viewMoreProjects: "View more projects",
      downloadCV: "Download CV",
      badges: "Badges",
    },
  },
  fi: {
    siteTitle: "Jupresson Portfolio",
    nav: {
      home: "Etusivu",
      projects: "Projektit",
      languageLabel: "Vaihda kieli",
    },
    footer: {
      availability: "Avoinna peli jameihin, yhteisprojekteihin ja työtarjouksiin!",
    },
    buttons: {
      details: "Lisätiedot",
      source: "Lähde",
      copiedEmail: "Kopioitu :]",
      viewMoreProjects: "Katso lisää projekteja",
      downloadCV: "Lataa CV",
      badges: "Osaamismerkit",
    },
  },
};

const homePageContent: Record<Locale, HomePageContent> = {
  en: {
    kind: "home",
    metaTitle: "Home",
    hero: {
      name: "Lasse Jaara",
      taglineTemplate: "{age}yo game developer from Ii, Finland 🇫🇮",
      introHtml:
        'I am <span class="text-highlight">currently studying</span> at OSAO Kaukovainio Technical School, <span class="text-highlight">focusing on game programming</span> and information technology.',
      image: "/FacePicture.webp",
      imageAlt: "Face Picture of Lasse Jaara",
    },
    moreAbout: {
      title: "More about me",
      introHtml:
        "Hi, I'm <strong>Lasse Jaara</strong>, a game developer who likes <strong>creating fun and player-focused games</strong>. I usually go online under the name <strong>Jupresson</strong>. I first discovered my passion as a child",
      summaryLabel: "Show more",
      paragraphs: [
        "making custom maps with my brother on the PS3 in games like Legacy Minecraft and LittleBigPlanet Karting. This interest grew into PC gaming, where I began developing and modifying mods, plugins, and servers for Minecraft Java Edition.",
        "Over time, I shifted my focus to building full games, experimenting with Unity and Unreal Engine. My skills advanced significantly after enrolling in OSAO Kaukovainio Technical School for Game Programming and IT, where I gained deeper knowledge of programming and game development and completed several projects.",
        "Nowadays, I have prototyped games using Unity, Godot, GDScript, Python, C#, and more. I am passionate about mastering my development skills.",
      ],
      showLessLabel: "Show less",
    },
    featuredProjects: {
      title: "Featured projects",
      items: [
        {
          title: "Bean with the Guns",
          description:
            "Solo survival experience with waves of escalating enemies and strategic upgrade choices.",
          image: "/ProjectBeanWithTheGunsImage.webp",
          technologies: ["Godot", "GDScript"],
          path: "/ProjectBeanWithTheGunsPage",
          sourceUrl: "https://github.com/Jupresson/beans-with-the-guns.git",
        },
        {
          title: "Rise Of The Fallen Death Of Mankind",
          description:
            "Play as a demon unleashed from hell, tearing through human forces across multiple stages fight, dash, and push forward until the world burns.",
          image: "/ProjectRiseOfTheFallenDeathOfMankindImage.webp",
          technologies: ["Blueprints", "Blender", "Unreal Engine"],
          path: "/ProjectRiseOfTheFallenDeathOfMankindPage",
          sourceUrl: "https://github.com/Jupresson/Stupid-inc-unreal-project",
        },
      ],
    },
    skills: {
      title: "Skill list",
      rows: [
        {
          label: "Programming languages:",
          value: "Python, C#, GDScript, CSS, HTML, SQL",
        },
        {
          label: "Game engines:",
          value: "Godot, Unity, Unreal Engine, Pygame",
        },
        {
          label: "Software:",
          value: "GitHub, Git, Visual Studio Code, Blender",
        },
      ],
    },
    contact: {
      title: "Contact Me",
      email: "Jupresson.Business@gmail.com",
      emailTitle: "Official Email",
      emailDescription:
        "For bug reports on the site, business inquiries, job opportunities, and professional collaborations.",
      socialTitle: "Find Me also on",
      socialDescription:
        "Check out my projects, code, and connect with me for game jams, collaborations, and casual conversations.",
      socialLinks: profileSocialLinks,
    },
  },
  fi: {
    kind: "home",
    metaTitle: "Etusivu",
    hero: {
      name: "Lasse Jaara",
      taglineTemplate: "{age}-vuotias pelinkehittäjä Iistä, Suomesta 🇫🇮",
      introHtml:
        'Opiskelen parhaillaan <span class="text-highlight">OSAO Kaukovainiossa</span>, jossa <span class="text-highlight">keskityn peliohjelmointia</span> ja tietotekniikkaan.',
      image: "/FacePicture.webp",
      imageAlt: "Kasvokuva Lasse Jaarasta",
    },
    moreAbout: {
      title: "Lisää minusta",
      introHtml:
        "Hei, olen <strong>Lasse Jaara</strong>, pelinkehittäjä, joka pitää <strong>mielenkiintoisten ja mukaansatempaavien pelien tekemisestä</strong>. Käytän verkossa usein nimeä <strong>Jupresson</strong>. Kiinnostukseni alkoi jo lapsena",
      summaryLabel: "Näytä lisää",
      paragraphs: [
        "tekemällä veljeni kanssa omia peli kenttiä PS3:lla peleihin, kuten Legacy Minecraftiin ja LittleBigPlanet Kartingiin. Kiinnostus kasvoi PC-pelaamiseen, jossa aloin kehittää ja muokata modeja, plugineja ja palvelimia Minecraft Java Editionille.",
        "Ajan myötä siirsin kiinostukseni koko pelejen tekemiseeen ja kokeilin Unitya sekä Unreal Enginea. Taitoni kehittyivät paljon OSAO Kaukovainion peliohjelmoinnin ja IT-opintojen aikana, jolloin sain syvempää osaamista ohjelmoinnista, pelinkehityksestä ja toteutin useita projekteja.",
        "Nykyään olen tehnyt peliprototyyppejä esimerkiksi Unitylla, Godotilla, GDScriptillä, Pythonilla ja C#:lla. Pyrin jatkuvaan kehittymiseen tietokoneiden parissa.",
      ],
      showLessLabel: "Näytä vähemmän",
    },
    featuredProjects: {
      title: "Nostetut projektit",
      items: [
        {
          title: "Bean with the Guns",
          description:
            "Yksin tehty selviytymiskokemus, jossa vihollisaallot kasvavat ja päivitysvalinnoilla on iso merkitys.",
          image: "/ProjectBeanWithTheGunsImage.webp",
          technologies: ["Godot", "GDScript"],
          path: "/ProjectBeanWithTheGunsPage",
          sourceUrl: "https://github.com/Jupresson/beans-with-the-guns.git",
        },
        {
          title: "Rise Of The Fallen<br>Death Of Mankind",
          description:
            "Pelaa helvetistä vapautuneena demonina ja raivaa tiesi ihmiskunnan joukkojen läpi useissa kentissä, kunnes maailma palaa.",
          image: "/ProjectRiseOfTheFallenDeathOfMankindImage.webp",
          technologies: ["Blueprints", "Blender", "Unreal Engine"],
          path: "/ProjectRiseOfTheFallenDeathOfMankindPage",
          sourceUrl: "https://github.com/Jupresson/Stupid-inc-unreal-project",
        },
      ],
    },
    skills: {
      title: "Osaamis lista",
      rows: [
        {
          label: "Ohjelmointikielet:",
          value: "Python, C#, GDScript, CSS, HTML, SQL",
        },
        {
          label: "Pelimoottorit:",
          value: "Godot, Unity, Unreal Engine, Pygame",
        },
        {
          label: "Ohjelmistot:",
          value: "GitHub, Git, Visual Studio Code, Blender",
        },
      ],
    },
    contact: {
      title: "Ota yhteyttä",
      email: "Jupresson.Business@gmail.com",
      emailTitle: "Virallinen sähköposti",
      emailDescription:
        "Sivuston bugiraportit, yhteistyöpyynnöt, työmahdollisuudet ja ammatilliset yhteydenotot.",
      socialTitle: "Löydät minut myös",
      socialDescription:
        "Tutustu projekteihini ja koodiini, ja ota yhteyttä peli jameihin, yhteistyöhön tai rennompaan keskusteluun liittyen.",
      socialLinks: profileSocialLinks,
    },
  },
};

const projectListPageContent: Record<Locale, ProjectListPageContent> = {
  en: {
    kind: "project-list",
    metaTitle: "Projects",
    hero: {
      title: "Projects",
      subtitle: "Games, websites and more",
    },
    intro: "Projects are ordered from latest to oldest.",
    items: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio built to showcase my projects and skills designed, coded, and refined from scratch across three versions to get it right.",
        image: "/ProjectPortfolioWebsiteImage.webp",
        technologies: ["HTML", "CSS", "JavaScript", "Astro"],
        path: "/ProjectPortfolioWebsitePage",
        sourceUrl: "https://github.com/Jupresson/Jupresson.github.io-src"
      },
      {
        title: "Bean with the Guns",
        description:
          "Solo survival experience with waves of escalating enemies and strategic upgrade choices.",
        image: "/ProjectBeanWithTheGunsImage.webp",
        technologies: ["Godot", "GDScript"],
        path: "/ProjectBeanWithTheGunsPage",
        sourceUrl: "https://github.com/Jupresson/beans-with-the-guns.git",
      },
      {
        title: "Rise Of The Fallen<br>Death Of Mankind",
        description:
          "Play as a demon unleashed from hell, tearing through human forces across multiple stages fight, dash, and push forward until the world burns.",
        image: "/ProjectRiseOfTheFallenDeathOfMankindImage.webp",
        technologies: ["Blueprints", "Blender", "Unreal Engine"],
        path: "/ProjectRiseOfTheFallenDeathOfMankindPage",
        sourceUrl: "https://github.com/Jupresson/Stupid-inc-unreal-project",
      },
      {
        title: "Hell Slayer",
        description:
          "Fight through waves of enemies in a first-person dungeon crawler collect weapons, adapt your loadout, and see how long you can last.",
        image: "/ProjectHellSlayerImage.webp",
        technologies: ["C#", "Unity", "Blender"],
        path: "/ProjectHellSlayerPage",
        sourceUrl: "https://github.com/Jupresson/Hellslayer",
      },
      {
        title: "Summer Game",
        description:
          "Click down enemies, collect XP, and grow your cursor into a screen-clearing force. How long can you hold the line?",
        image: "/ProjectSummerGameImage.webp",
        technologies: ["Pygame", "Python"],
        path: "/ProjectSummerGamePage",
        sourceUrl: "https://github.com/Jupresson/SummerGame",
      },
      {
        title: "Crystal Cave",
        description:
          "A precision platformer where every jump, wall climb, and dash counts. Too many wrong moves mean starting over, so mastering the movement is the game.",
        image: "/ProjectCrystalCaveImage.webp",
        technologies: ["Godot", "GDScript"],
        path: "/ProjectCrystalCavePage",
        sourceUrl: "https://github.com/Lasse-Jaara/Crystal-Cave",
      },
    ],
  },
  fi: {
    kind: "project-list",
    metaTitle: "Projektit",
    hero: {
      title: "Projektit",
      subtitle: "Pelejä, verkkosivuja ja muuta",
    },
    intro: "Projektit on järjestetty uusimmasta vanhimpaan.",
    items: [
      {
        title: "Portfolio Nettisivu",
        description:
          "Henkilökohtainen portfolio, joka on suunniteltu, koodattu ja hiottu kolmessa versiossa projektieni ja taitojeni esittelemiseen.",
        image: "/ProjectPortfolioWebsiteImage.webp",
        technologies: ["HTML", "CSS", "JavaScript", "Astro"],
        path: "/ProjectPortfolioWebsitePage",
        sourceUrl: "https://github.com/Jupresson/Jupresson.github.io-src"
      },
      {
        title: "Bean with the Guns",
        description:
          "Yksin tehty selviytymiskokemus, jossa vihollisaallot kasvavat ja päivitysvalinnoilla on iso merkitys.",
        image: "/ProjectBeanWithTheGunsImage.webp",
        technologies: ["Godot", "GDScript"],
        path: "/ProjectBeanWithTheGunsPage",
        sourceUrl: "https://github.com/Jupresson/beans-with-the-guns.git",
      },
      {
        title: "Rise Of The Fallen<br>Death Of Mankind",
        description:
          "Pelaa helvetistä vapautuneena demonina ja raivaa tiesi ihmisten joukkojen läpi useissa kentissä, syöksyen eteenpäin kohti maailman loppua.",
        image: "/ProjectRiseOfTheFallenDeathOfMankindImage.webp",
        technologies: ["Blueprints", "Blender", "Unreal Engine"],
        path: "/ProjectRiseOfTheFallenDeathOfMankindPage",
        sourceUrl: "https://github.com/Jupresson/Stupid-inc-unreal-project",
      },
      {
        title: "Hell Slayer",
        description:
          "Taistele vihollisaaltojen läpi ensimmäisen persoonan luolastoryömintäpelissä, kerää aseita ja muokkaa varustusta selviytyäksesi pidempään.",
        image: "/ProjectHellSlayerImage.webp",
        technologies: ["C#", "Unity", "Blender"],
        path: "/ProjectHellSlayerPage",
        sourceUrl: "https://github.com/Jupresson/Hellslayer",
      },
      {
        title: "Summer Game",
        description:
          "Klikkaa vihollisia kuoliaksi, kerää XP:tä ja kasvata kursoria koko ruudun tyhjentäväksi voimaksi. Kuinka kauan pystyt pitämään pintasi?",
        image: "/ProjectSummerGameImage.webp",
        technologies: ["Pygame", "Python"],
        path: "/ProjectSummerGamePage",
        sourceUrl: "https://github.com/Jupresson/SummerGame",
      },
      {
        title: "Crystal Cave",
        description:
          "Tarkkuusplatformeri, jossa jokainen hyppy, seinäkiipeily ja dash merkitsee. Liian moni virhe tarkoittaa aloitusta alusta, joten liikkeen hallinta on koko pelin ydin.",
        image: "/ProjectCrystalCaveImage.webp",
        technologies: ["Godot", "GDScript"],
        path: "/ProjectCrystalCavePage",
        sourceUrl: "https://github.com/Lasse-Jaara/Crystal-Cave",
      },
    ],
  },
};

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
      imageClass: "img-bean-small",
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
      imageClass: "img-bean-small",
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
      imageClass: "img-jump",
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
        // removed Project Duration
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
      imageClass: "img-jump",
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
        // removed Projektin kesto
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
      imageClass: "img-punch",
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
      imageClass: "img-punch",
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

const portfolioWebsiteContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Portfolio Website",
    hero: {
      title: "Portfolio Website",
      subtitle: "Static website made with Astro",
      description:
        "A personal portfolio built to showcase my projects and skills, designed, coded, and refined from scratch across three versions to get it right.",
      image: "/ProjectPortfolioWebsiteImageSmall.webp",
      imageAlt: "Screenshot of the portfolio website",
      imageClass: "img-click",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>This portfolio\'s main purpose is to collect and showcase my projects, serve as proof of my work, and present my experience clearly to anyone reading it.</strong> This was a fully solo project, every part of it was designed, built, and completed by me.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Concept & Design</span><br>The idea was to create a <strong>simple static website that presents my projects clearly.</strong> I built the first version from scratch using HTML and CSS in Visual Studio Code, but the codebase became too messy to scale. I then rebuilt it with a cleaner template, but the colors and layout were too heavy on the eyes. The current version is <strong>built with Astro</strong>, which lets me create reusable components like the shared header, and is <strong>fully responsive across many screen sizes.</strong>',
        '<span class="text-highlight">My Role & Challenges</span><br>One of my main goals was <strong>full mobile support</strong>, which required the layout to scale cleanly across all screen sizes. Managing three versions of the site over time also taught me a lot about <strong>writing maintainable and scalable code from the start</strong>, something I learned the hard way by rebuilding it twice.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>Overall, building the portfolio was a rewarding experience. <strong>Working with Astro made development much smoother</strong> thanks to its component system. I also got more comfortable <strong>using AI tools to speed up development</strong>, particularly for quickly looking up syntax and HTML tags rather than digging through documentation manually and for helping clean up and improve my written English.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Type:", value: "Static Website" },
        { label: "Project Timeline:", value: "X X, 2025 - X X, 2026" },
        // removed Project Duration
        { label: "Project Status:", value: "Release" },
        { label: "Programming language:", value: "HTML, CSS, JavaScript & Astro" },
        { label: "Team size:", value: "Solo" },
        { label: "Main Roles:", value: "Designer & Developer" },
      ],
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version, or play it in your browser",
      socialLinks: [
        sourceCodeLink(
          "Source Code",
          "https://github.com/Jupresson/Jupresson.github.io-src",
        ),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Portfolio Website",
    hero: {
      title: "Portfolio Website",
      subtitle: "Astrolla tehty staattinen verkkosivusto",
      description:
        "Henkilökohtainen portfolio, joka on suunniteltu, koodattu ja hiottu kolmessa versiossa projektieni ja taitojeni esittelemiseen.",
      image: "/ProjectPortfolioWebsiteImageSmall.webp",
      imageAlt: "Kuvakaappaus portfoliosivustosta",
      imageClass: "img-click",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>Tämän portfolion päätarkoitus on kerätä ja esitellä projektini, toimia todisteena tekemisestäni ja kertoa kokemuksestani selkeästi kaikille lukijoille.</strong> Tämä oli täysin yksin tehty projekti, jonka jokainen osa suunniteltiin, rakennettiin ja viimeisteltiin minun toimesta.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Konsepti & suunnittelu</span><br>Ajatuksena oli tehdä <strong>yksinkertainen staattinen verkkosivusto, joka esittelee projektini selkeästi.</strong> Rakensin ensimmäisen version alusta asti HTML:llä ja CSS:llä Visual Studio Codessa, mutta koodipohja muuttui liian sekavaksi skaalautumaan. Rakensin sen sitten uudelleen siistimmän mallin päälle, mutta värit ja layout rasittivat silmiä liikaa. Nykyinen versio on <strong>rakennettu Astrolla</strong>, mikä antaa mahdollisuuden tehdä uudelleenkäytettäviä komponentteja, kuten yhteisen headerin, ja se on <strong>täysin responsiivinen monilla eri näyttökoilla.</strong>',
        '<span class="text-highlight">Roolini & haasteet</span><br>Yksi päätavoitteistani oli <strong>täysi mobiilituki</strong>, mikä vaati layoutin skaalautumista siististi kaikille näytöille. Sivuston kolmen version hallinta ajan myötä opetti myös paljon <strong>ylläpidettävän ja skaalautuvan koodin kirjoittamisesta alusta asti</strong>, minkä opin kantapään kautta rakentamalla sivuston kahdesti uudelleen.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Kokonaisuutena portfolion rakentaminen oli palkitseva kokemus. <strong>Astrolla työskentely teki kehityksestä paljon sujuvampaa</strong> sen komponenttijärjestelmän ansiosta. Sain myös lisää varmuutta <strong>tekoälytyökalujen käyttämiseen kehityksen nopeuttamisessa</strong>, erityisesti syntaksin ja HTML-tagien nopeassa tarkistamisessa dokumentaation kaivelun sijaan sekä kirjoitetun englannin siistimisessä.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Tyyppi:", value: "Staattinen verkkosivusto" },
        { label: "Projektin aikajana:", value: "X X, 2025 - X X, 2026" },
        // removed Projektin kesto
        { label: "Projektin tila:", value: "Julkaistu" },
        { label: "Ohjelmointikieli:", value: "HTML, CSS, JavaScript & Astro" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Pääroolit:", value: "Suunnittelija ja kehittäjä" },
      ],
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa selaimessa",
      socialLinks: [
        sourceCodeLink(
          "Lähdekoodi",
          "https://github.com/Jupresson/Jupresson.github.io-src",
        ),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

const riseOfTheFallenContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Rise Of The Fallen Death Of Mankind",
    hero: {
      title: "Rise Of The Fallen Death Of Mankind",
      titleClass: "tight-break",
      subtitle: "First-person stage-based game made in Unreal Engine",
      description:
        "Play as a demon unleashed from hell, tearing through human forces across multiple stages fight, dash, and push forward until the world burns.",
      image: "/ProjectRiseOfTheFallenDeathOfMankindImageSmall.webp",
      imageAlt: "Screenshot of Rise Of The Fallen Death Of Mankind",
      imageClass: "img-punch",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>Rise Of The Fallen - Death Of Mankind is a first-person stage-based game developed in Unreal Engine by a team of three as an OSAO school project.</strong> Our main goal was to <strong>continue exploring different game engines and programming languages while working together as a team.</strong> We used <strong>Trello for task management</strong> and created a <strong>story outline and game loop document</strong> to organize our ideas and communicate as a team. We started with four members but lost one early on when he moved to other projects, leaving us a person short for most of development.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The main concept was a <strong>stage-based game where the player explores levels, defeats enemies, and progresses deeper into the world.</strong> The story follows a demon who survived a war against humans and their advanced technology, now rampaging through the human world after escaping hell. When planning the story, <strong>my main goal was to give the player a clear reason to keep moving forward.</strong>',
        '<span class="text-highlight">My Role & Challenges</span><br>My main responsibilities included <strong>animations, player and enemy coding, GitHub repository management, and project management</strong>, though as the project progressed, the workload gradually shifted and <strong>many tasks outside my original role ended up falling to me.</strong> We held daily check-ins to distribute tasks and tried to assign work in a way that avoided creating blockers for others, but keeping that balance was not always possible.',
        'I created animations in Blender using the standard Unreal human skeleton and studied animation tutorials to improve my technique. I used pose references from Pinterest and sites like Sketchfab, as well as my own hands as reference. One interesting insight was that <strong>first-person animations do not need to be realistic</strong>; an exaggerated arm swing looks right at gameplay speed, but would look completely wrong slowed down or in third person.',
        'I also handled <strong>enemy animations using premade animations</strong> and built the enemy behavior tree. In my opinion, <strong>Unreal\'s behavior tree system is harder to work with than a script-based state machine</strong>; sharing data like booleans behaves differently depending on whether you are in the animation editor, UI, or code, which made things confusing when switching between tasks. Unreal is a very powerful engine, but the interface inconsistency and default settings like forced blurriness made it harder to get started cleanly.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>By the end, our team completed <strong>one enemy with a behavior tree, animations and attacks, and a player with movement including dash, run, jump, and slide,</strong> along with the full animation blueprint and three short levels with enemies, weapons, and a main UI. Because team members had different skill levels and motivation, many tasks ended up with me. It was challenging, but I learned a lot. Looking back, <strong>building the project in incremental versions throughout development and scoping the game smaller from the start</strong> would have led to a much smoother project.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "First-Person Stage-Based Shooter" },
        { label: "Project Timeline:", value: "Aug 19, 2025 - Dec 19, 2025" },
        // removed Project Duration
        { label: "Project Status:", value: "Demo" },
        { label: "Game engine:", value: "Unreal Engine 5.6.1" },
        { label: "Programming language:", value: "Unreal Engine 5.6.1 Blueprints" },
        { label: "Team size:", value: "3" },
        {
          label: "Main Roles:",
          value:
            "3D Artist, Animator, Player Programmer, Enemy Programmer, Repository Manager & Project Manager",
        },
        { label: "Art tool:", value: "Blender 5.0.1" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/WsrtlXasXbg?si=RQwBA8zgeh_OUxKj",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription:
        "Check out my code, download the desktop version, or play it in your browser",
      socialLinks: [
        desktopLink(
          "Play on desktop",
          "https://github.com/Jupresson/Stupid-inc-unreal-project/releases/tag/PlayableDemo",
        ),
        sourceCodeLink(
          "Source Code",
          "https://github.com/Jupresson/Stupid-inc-unreal-project.git",
        ),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Rise Of The Fallen Death Of Mankind",
    hero: {
      title: "Rise Of The Fallen <br> Death Of Mankind",
      titleClass: "tight-break",
      subtitle: "Unreal Enginellä tehty ensimmäisen persoonan kenttäpohjainen peli",
      description:
        "Pelaa helvetistä vapautuneena demonina ja raivaa tiesi ihmiskunnan joukkojen läpi useissa kentissä syöksyen eteenpäin, kunnes maailma palaa.",
      image: "/ProjectRiseOfTheFallenDeathOfMankindImageSmall.webp",
      imageAlt: "Kuvakaappaus Rise Of The Fallen Death Of Mankind -pelistä",
      imageClass: "img-punch",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>Rise Of The Fallen - Death Of Mankind on Unreal Enginellä tehty ensimmäisen persoonan kenttäpohjainen peli, jonka kolmen hengen tiimi teki OSAOn kouluprojektina.</strong> Päätavoitteemme oli <strong>jatkaa eri pelimoottoreiden ja ohjelmointikielten tutkimista samalla, kun työskentelimme tiiminä.</strong> Käytimme <strong>Trelloa tehtävien hallintaan</strong> ja loimme <strong>tarinarungon sekä game loop -dokumentin</strong> ideoiden järjestämiseen ja tiimin sisäiseen viestintään. Aloitimme neljällä jäsenellä, mutta menetimme yhden varhain hänen siirtyessään muihin projekteihin, joten suurin osa kehityksestä tehtiin vajaalla miehityksellä.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Pääidea oli <strong>kenttäpohjainen peli, jossa pelaaja tutkii alueita, voittaa vihollisia ja etenee syvemmälle maailmaan.</strong> Tarina seuraa demonia, joka selviytyi sodasta ihmisiä ja heidän kehittynyttä teknologiaansa vastaan ja riehuu nyt ihmisten maailmassa paettuaan helvetistä. Tarinaa suunnitellessa <strong>päätavoitteeni oli antaa pelaajalle selkeä syy jatkaa eteenpäin.</strong>',
        '<span class="text-highlight">Roolini & haasteet</span><br>Päävastuuni olivat <strong>animaatiot, pelaajan ja vihollisten koodaus, GitHub-repositorion hallinta ja projektinhallinta</strong>, mutta projektin edetessä työnjako muuttui vähitellen ja <strong>moni alkuperäisen roolini ulkopuolinen tehtävä päätyi lopulta minulle.</strong> Pidimme päivittäisiä check-inejä tehtävien jakamiseen ja yritimme välttää tilanteita, joissa toisten työ blokkaantui, mutta tasapainon säilyttäminen ei aina onnistunut.',
        'Tein animaatioita Blenderissä käyttäen Unrealin tavallista ihmisluurankoa ja opiskelin animaatiotutoriaaleja tekniikkani parantamiseksi. Käytin pose referenceinä Pinterest-kuvia, Sketchfabia ja omia käsiäni. Yksi kiinnostava huomio oli, että <strong>ensimmäisen persoonan animaatioiden ei tarvitse olla realistisia</strong>; liioiteltu käsivarren liike näyttää oikealta pelinopeudessa, mutta näyttäisi täysin väärältä hidastettuna tai kolmannesta persoonasta.',
        'Hoida myös <strong>vihollisanimaatiot valmiilla animaatioilla</strong> ja rakensin vihollisten behavior treen. Omasta mielestäni <strong>Unrealin behavior tree -järjestelmä on hankalampi käyttää kuin skriptipohjainen state machine</strong>; datan, kuten booleanien, jakaminen käyttäytyy eri tavalla riippuen siitä, työskennelläänkö animaatioeditorissa, käyttöliittymässä vai koodissa, mikä teki tehtävien välillä vaihtamisesta sekavaa. Unreal on erittäin tehokas pelimoottori, mutta käyttöliittymän epäjohdonmukaisuus ja oletusasetukset, kuten pakotettu sumeus, tekivät puhtaan aloituksen hankalammaksi.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Lopussa tiimimme sai valmiiksi <strong>yhden behavior tree -vihollisen animaatioineen ja hyökkäyksineen sekä pelaajan liikkumisen dashin, juoksun, hypyn ja slide-liikkeen kanssa</strong>, kokonaisen animation blueprintin sekä kolme lyhyttä kenttää vihollisineen, aseineen ja pääkäyttöliittymineen. Koska tiimin jäsenten taitotaso ja motivaatio vaihtelivat, moni tehtävä päätyi minulle. Se oli haastavaa, mutta opetti paljon. Jälkikäteen ajatellen <strong>projektin rakentaminen vaiheittaisina versioina koko kehityksen ajan ja pelin skaalaaminen pienemmäksi heti alussa</strong> olisi johtanut paljon sujuvampaan projektiin.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Ensimmäisen persoonan kenttäpohjainen räiskintä" },
        { label: "Projektin aikajana:", value: "19.8.2025 - 19.12.2025" },
        // removed Projektin kesto
        { label: "Projektin tila:", value: "Demo" },
        { label: "Pelimoottori:", value: "Unreal Engine 5.6.1" },
        { label: "Ohjelmointikieli:", value: "Unreal Engine 5.6.1 Blueprints" },
        { label: "Tiimin koko:", value: "3" },
        {
          label: "Pääroolit:",
          value:
            "3D-artisti, animaattori, pelaajaohjelmoija, vihollisohjelmoija, repositorion hallinnoija ja projektipäällikkö",
        },
        { label: "Grafiikkatyökalu:", value: "Blender 5.0.1" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/WsrtlXasXbg?si=RQwBA8zgeh_OUxKj",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription:
        "Tutustu koodiin, lataa työpöytäversio tai pelaa selaimessa",
      socialLinks: [
        desktopLink(
          "Pelaa työpöydällä",
          "https://github.com/Jupresson/Stupid-inc-unreal-project/releases/tag/PlayableDemo",
        ),
        sourceCodeLink(
          "Lähdekoodi",
          "https://github.com/Jupresson/Stupid-inc-unreal-project.git",
        ),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

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
      imageClass: "img-click",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br>Summer Game was a <strong>short OSAO school project made in three weeks.</strong> The main goal was to <strong>learn more about game development and how game engines actually work.</strong> I wanted to make a simple game that I could finish quickly and that would be fun to play. <strong>This was a fully solo project. Every part of it was designed, built, and completed by me,</strong> except for some properly Creative Commons 0 licensed sound effects.',
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
        // removed Project Duration
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
      imageClass: "img-click",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br>Summer Game oli <strong>lyhyt OSAOn kouluprojekti, joka tehtiin kolmessa viikossa.</strong> Päätavoitteena oli <strong>oppia lisää pelinkehityksestä ja siitä, miten pelimoottorit oikeasti toimivat.</strong> Halusin tehdä yksinkertaisen pelin, jonka pystyn viimeistelemään nopeasti ja joka olisi hauska pelata. <strong>Tämä oli täysin yksin tehty projekti. Suunnittelin, rakensin ja viimeistelin kaiken itse,</strong> lukuun ottamatta muutamia asianmukaisesti Creative Commons 0 -lisensoituja ääniefektejä.',
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
        // removed Projektin kesto
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

export const pageEntries: PageEntry[] = [
  {
    slug: "/",
    content: homePageContent,
  },
  {
    slug: "/ProjectListPage",
    content: projectListPageContent,
  },
  {
    slug: "/ProjectBeanWithTheGunsPage",
    content: beanWithTheGunsContent,
  },
  {
    slug: "/ProjectCrystalCavePage",
    content: crystalCaveContent,
  },
  {
    slug: "/ProjectHellSlayerPage",
    content: hellSlayerContent,
  },
  {
    slug: "/ProjectPortfolioWebsitePage",
    content: portfolioWebsiteContent,
  },
  {
    slug: "/ProjectRiseOfTheFallenDeathOfMankindPage",
    content: riseOfTheFallenContent,
  },
  {
    slug: "/ProjectSummerGamePage",
    content: summerGameContent,
  },
];

export function getUiContent(locale: Locale): UiContent {
  return uiContent[locale];
}

export function getPageEntry(slug: string): PageEntry | undefined {
  return pageEntries.find((entry) => entry.slug === slug);
}