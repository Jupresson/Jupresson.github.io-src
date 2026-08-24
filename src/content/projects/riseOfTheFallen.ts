import { desktopLink, sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const riseOfTheFallenContent: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "Rise Of The Fallen Death Of Mankind",
    hero: {
      title: "Rise Of The Fallen Death Of Mankind",
      titleClass: "tight-break",
      subtitle: "First-person stage-based game made in Unreal Engine",
      description:
        "Play as a demon unleashed from hell, tearing through human forces across multiple stages. Fight, dash, and push forward until the world burns.",
      image: "/ProjectRiseOfTheFallenDeathOfMankindImageSmall.webp",
      imageAlt: "Screenshot of Rise Of The Fallen Death Of Mankind",
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
        'Hoidin myös <strong>vihollisanimaatiot valmiilla animaatioilla</strong> ja rakensin vihollisten behavior treen. Omasta mielestäni <strong>Unrealin behavior tree -järjestelmä on hankalampi käyttää kuin skriptipohjainen state machine</strong>; datan, kuten booleanien, jakaminen käyttäytyy eri tavalla riippuen siitä, työskennelläänkö animaatioeditorissa, käyttöliittymässä vai koodissa, mikä teki tehtävien välillä vaihtamisesta sekavaa. Unreal on erittäin tehokas pelimoottori, mutta käyttöliittymän epäjohdonmukaisuus ja oletusasetukset, kuten pakotettu sumeus, tekivät puhtaan aloituksen hankalammaksi.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Lopussa tiimimme sai valmiiksi <strong>yhden behavior tree -vihollisen animaatioineen ja hyökkäyksineen sekä pelaajan liikkumisen dashin, juoksun, hypyn ja slide-liikkeen kanssa</strong>, kokonaisen animation blueprintin sekä kolme lyhyttä kenttää vihollisineen, aseineen ja pääkäyttöliittymineen. Koska tiimin jäsenten taitotaso ja motivaatio vaihtelivat, moni tehtävä päätyi minulle. Se oli haastavaa, mutta opetti paljon. Jälkikäteen ajatellen <strong>projektin rakentaminen vaiheittaisina versioina koko kehityksen ajan ja pelin skaalaaminen pienemmäksi heti alussa</strong> olisi johtanut paljon sujuvampaan projektiin.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Ensimmäisen persoonan kenttäpohjainen räiskintä" },
        { label: "Projektin aikajana:", value: "19.8.2025 - 19.12.2025" },
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

export default riseOfTheFallenContent;
