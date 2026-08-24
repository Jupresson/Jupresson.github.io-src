import { sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const animalStackContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Animal Stack",
    hero: {
      title: "Animal Stack",
      subtitle: "Physics-based AR mobile prototype made in Unity",
      description:
        "Place a platform on a real surface, then balance physics-driven objects on it without letting the stack topple.",
      image: "/ProjectAnimalStackSmall.webp",
      imageAlt: "Screenshot of Animal Stack, an augmented-reality mobile prototype",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & scope</span><br><strong>Animal Stack is a solo AR mobile prototype, built in 1.5 weeks.</strong> I came back from summer break with Godot and GDScript as my most recent engine experience, and used this project to get back into <strong>Unity and C#</strong> while testing an AR concept under a tight deadline. The goal was not a finished game. It was proving the core technical risk first.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game concept & AR design</span><br>The idea takes the tension of physics stacking games into AR: place objects on a detected real-world surface, then check the balance from different angles before committing. The finished game is meant to stack soft 3D animals, but this prototype uses physics test objects while the interaction and stacking systems get built. I scoped it around a small table surface, so it can be played seated instead of forcing the player to walk around holding up a phone camera.',
        '<span class="text-highlight">Technical approach</span><br>I set up <strong>Unity AR Foundation with Android ARCore support</strong> and tackled the highest-risk feature first: detecting a flat indoor surface and placing a fixed starting platform on it. From there I wrote the core interaction in C#: a <strong>two-stage spawner</strong> that places the platform before it spawns stack objects, touch-based preview movement, two-finger rotation, and physics drops onto the current stack. I also prototyped a <strong>center-of-mass stability system</strong> that checks the tower against the platform\'s support area and can trigger a topple once the stack goes unstable.',
        '<span class="text-highlight">Outcome & lessons learned</span><br>The result is a running Android prototype: it detects a surface, places a starting platform, and drops physics objects onto it. The animal art, full game loop, scoring, loss state, onboarding, and polish stayed in the backlog when the sprint ended. The biggest lesson was to front-load the uncertainty. Proving AR surface detection early told me the core idea was technically viable before I spent time on content or UI.',
        '<span class="text-highlight">How I used AI</span><br>I used AI tools for planning, structuring the Trello backlog, reference-image prompts, and learning Unity\'s C# workflow, and reviewed the output before using it. I implemented and verified the AR setup, the interaction scripts, the physics experiments, and the device testing myself.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "Physics-based AR stacker / skill puzzle" },
        { label: "Project Timeline:", value: "Aug 11, 2026 - Aug 21, 2026" },
        { label: "Project Status:", value: "Working prototype" },
        { label: "Game engine:", value: "Unity 6000.5.8f1" },
        { label: "Programming language:", value: "C#" },
        { label: "AR technology:", value: "AR Foundation 6.5, ARCore, ARKit, XR Interaction Toolkit" },
        { label: "Target platform:", value: "Android" },
        { label: "Team size:", value: "Solo" },
        { label: "Role:", value: "Designer & Developer" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/sNwUpexxjwI",
    },
    links: {
      title: "Project links",
      socialTitle: "Explore the project",
      socialDescription:
        "Browse the Unity project, the custom AR interaction scripts, and the prototype history.",
      socialLinks: [
        sourceCodeLink("Source Code", "https://github.com/Jupresson/Animal_Stack"),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "Animal Stack",
    hero: {
      title: "Animal Stack",
      subtitle: "Unitylla tehty fysiikkapohjainen AR-mobiiliprototyyppi",
      description:
        "Aseta alusta oikealle pinnalle ja tasapainota fysiikkapohjaisia esineitä sen päälle ilman, että pino kaatuu.",
      image: "/ProjectAnimalStackSmall.webp",
      imageAlt: "Kuvakaappaus Animal Stack -lisätyn todellisuuden mobiiliprototyypistä",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & rajaus</span><br><strong>Animal Stack on yksin tehty AR-mobiiliprototyyppi, joka syntyi 1,5 viikossa.</strong> Palasin kesälomalta tuoreimpana moottorikokemuksena Godot ja GDScript, ja käytin projektia palatakseni <strong>Unityyn ja C#:aan</strong> samalla kun testasin AR-konseptia tiukassa aikataulussa. Tavoite ei ollut valmis peli, vaan suurimman teknisen riskin todistaminen ensin.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & AR-suunnittelu</span><br>Idea tuo fysiikkapohjaisten pinoamispelien jännityksen AR:ään: esineitä asetetaan tunnistetulle oikean maailman pinnalle, ja tasapainoa voi tarkistaa eri kulmista ennen pudotusta. Valmiissa pelissä pinotaan pehmeitä 3D-eläimiä, mutta prototyypissä on fysiikkapohjaiset testiesineet, kun vuorovaikutus- ja pinoamisjärjestelmät ovat vielä kesken. Rajasin pelin pienelle pöytäpinnalle, joten sitä voi pelata istuen ilman, että puhelinta pitää kävellä ympäriinsä katsoen.',
        '<span class="text-highlight">Tekninen toteutus</span><br>Otin käyttöön <strong>Unity AR Foundationin ja Androidin ARCore-tuen</strong> ja ratkaisin ensin suurimman riskin: tasaisen sisäpinnan tunnistuksen ja kiinteän alustan sijoittamisen sille. Sen jälkeen kirjoitin vuorovaikutuksen ytimen C#:lla: <strong>kaksivaiheisen spawnerin</strong>, joka sijoittaa alustan ennen pinoamisobjekteja, kosketusohjatun esikatseluliikkeen, kahden sormen kierron ja fysiikkapudotukset nykyiseen pinoon. Kokeilin myös <strong>massakeskipisteeseen perustuvaa vakausjärjestelmää</strong>, joka vertaa tornia alustan tukialueeseen ja voi kaataa pinon, kun se muuttuu epävakaaksi.',
        '<span class="text-highlight">Lopputulos & opit</span><br>Lopputulos on toimiva Android-prototyyppi: se tunnistaa pinnan, sijoittaa alustan ja pudottaa fysiikkaesineitä sen päälle. Eläingrafiikka, valmis game loop, pisteet, häviötila, aloitusohjeet ja viimeistely jäivät backlogiin sprintin päättyessä. Suurin oppi oli epävarmuuden ratkaiseminen ensin: AR-pinnan tunnistuksen todistaminen heti kertoi idean teknisen toimivuuden ennen kuin aikaa käytettiin sisältöön tai käyttöliittymään.',
        '<span class="text-highlight">Tekoälyn käyttö</span><br>Käytin tekoälytyökaluja suunnitteluun, Trello-backlogin rakenteeseen, referenssikuvien promptien tekoon ja Unityn C#-työtavan opetteluun, ja tarkistin tuotokset ennen käyttöä. AR-asennuksen, vuorovaikutusskriptit, fysiikkakokeilut ja laitetestauksen tein ja varmistin itse.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Fysiikkapohjainen AR-pinoamispeli / taitopeli" },
        { label: "Projektin aikajana:", value: "11.8.2026 - 21.8.2026" },
        { label: "Projektin tila:", value: "Toimiva prototyyppi" },
        { label: "Pelimoottori:", value: "Unity 6000.5.8f1" },
        { label: "Ohjelmointikieli:", value: "C#" },
        { label: "AR-teknologia:", value: "AR Foundation 6.5, ARCore, ARKit, XR Interaction Toolkit" },
        { label: "Kohdealusta:", value: "Android" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Rooli:", value: "Suunnittelija & kehittäjä" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/sNwUpexxjwI",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Tutustu projektiin",
      socialDescription:
        "Selaa Unity-projektia, omia AR-vuorovaikutusskriptejä ja prototyypin kehityshistoriaa.",
      socialLinks: [
        sourceCodeLink("Lähdekoodi", "https://github.com/Jupresson/Animal_Stack"),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default animalStackContent;
