import { sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

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

export default portfolioWebsiteContent;
