import { socialIcons } from "./icons";
import beanWithTheGunsContent from "./projects/beanWithTheGuns";
import crystalCaveContent from "./projects/crystalCave";
import hellSlayerContent from "./projects/hellSlayer";
import portfolioWebsiteContent from "./projects/portfolioWebsite";
import riseOfTheFallenContent from "./projects/riseOfTheFallen";
import summerGameContent from "./projects/summerGame";
import type {
  HomePageContent,
  Locale,
  PageEntry,
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
        "Hi, I'm <strong>Lasse Jaara</strong>, a game developer who loves <strong>creating fun, player-focused games</strong>. Online, I usually go by <strong>Jupresson</strong>.",
      summaryLabel: "Show more",
      paragraphs: [
        "My interest started as a kid, making custom maps with my brother on the PS3 in games like Minecraft: Legacy Console Edition and LittleBigPlanet Karting.",
        "That curiosity carried over to PC gaming, where I began building and modifying mods, plugins, and servers for Minecraft Java Edition.",
        "Over time I moved into building full games, experimenting with Unity and Unreal Engine. My skills took a big step forward at OSAO Kaukovainio Technical School, studying Game Programming and IT, where I completed several hands-on projects.",
        "I have developed and prototyped games using Unity and Godot, working with technologies including GDScript, Python, and C#.",
        "My goal is to grow into a multiplayer and full-stack game developer. Right now I'm working on projects that build toward exactly that.",
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
            "Play as a demon unleashed from hell, tearing through human forces across multiple stages. Fight, dash, and push forward until the world burns.",
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
        "Hei, olen <strong>Lasse Jaara</strong>, pelinkehittäjä, joka rakastaa <strong>hauskojen ja pelaajalähtöisten pelien tekemistä</strong>. Verkossa käytän yleensä nimeä <strong>Jupresson</strong>.",
      summaryLabel: "Näytä lisää",
      paragraphs: [
        "Kiinnostukseni alkoi jo lapsena, kun tein veljeni kanssa omia peli kenttiä PS3:lla peleihin kuten Minecraft: Legacy Console Edition ja LittleBigPlanet Karting.",
        "Sama into siirtyi PC-pelaamiseen, jossa aloin rakentaa ja muokata modeja, plugineja ja palvelimia Minecraft Java Editionille.",
        "Ajan myötä siirryin kokonaisten pelien tekemiseen ja kokeilin Unitya sekä Unreal Enginea. Taitoni ottivat ison harppauksen OSAO Kaukovainion peliohjelmoinnin ja IT-opintojen aikana, joissa toteutin useita käytännön projekteja.",
        "Olen kehittänyt ja prototyypannut pelejä Unitylla ja Godotilla, käyttäen muun muassa GDScriptiä, Pythonia ja C#:ia.",
        "Tavoitteeni on kasvaa moninpeli- ja full stack -kehittäjäksi. Juuri nyt työstän projekteja, jotka vievät minua kohti sitä.",
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
          "A personal portfolio built to showcase my projects and skills. I designed, coded, and refined it from scratch across three versions to get it right.",
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
          "Play as a demon unleashed from hell, tearing through human forces across multiple stages. Fight, dash, and push forward until the world burns.",
        image: "/ProjectRiseOfTheFallenDeathOfMankindImage.webp",
        technologies: ["Blueprints", "Blender", "Unreal Engine"],
        path: "/ProjectRiseOfTheFallenDeathOfMankindPage",
        sourceUrl: "https://github.com/Jupresson/Stupid-inc-unreal-project",
      },
      {
        title: "Hell Slayer",
        description:
          "Fight through waves of enemies in a first-person dungeon crawler. Collect weapons, adapt your loadout, and see how long you can last.",
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
          "Henkilökohtainen portfolio, joka esittelee projektejani ja taitojani. Suunnittelin, koodasin ja hioin sen kolmessa versiossa saadakseni sen kohdalleen.",
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
          "Taistele vihollisaaltojen läpi ensimmäisen persoonan luolastoryömintäpelissä. Kerää aseita, muokkaa varustusta ja katso, kuinka pitkään selviät.",
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
