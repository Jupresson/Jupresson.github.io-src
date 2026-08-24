import { sourceCodeLink } from "./linkHelpers";
import type { Locale, ProjectDetailPageContent } from "../../i18n/site";

const godotProject2026Content: Record<Locale, ProjectDetailPageContent> = {
  en: {
    kind: "project-detail",
    metaTitle: "2026 Godot Project",
    hero: {
      title: "2026 Godot<br>Project",
      subtitle: "First-person Backrooms platformer made in Godot",
      description:
        "A first-person Backrooms platformer in early development, with TrenchBroom-built levels and base movement in place.",
      image: "/Project2026GodotSmall.webp",
      imageAlt: "Screenshot of 2026 Godot Project",
    },
    story: {
      title: "Project Development Story",
      introHtml:
        '<span class="text-highlight">Overview & Teamwork</span><br><strong>2026 Godot Project is a first-person platformer set in the Backrooms, built solo in Godot 4.</strong> I am building the whole thing myself: the level tools, the movement, and the game state handling underneath it.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept & Design</span><br>The player walks, runs, jumps, and slides through liminal Backrooms rooms and corridors. There is no climbing. Right now I am focused on getting that base movement to feel right before I build more levels or systems on top of it.',
        '<span class="text-highlight">My Role & Challenges</span><br>I build levels in TrenchBroom, using custom objects for spawn points and death areas, then import them into Godot 4. I handle game states cleanly, and map textures load and display correctly across levels.',
        '<span class="text-highlight">A Note on the Screenshot</span><br>The screenshot above is from the current build. I originally optimized the camera effects with FSR upscaling, then replaced that with a shader-based approach that stretches the view slightly. It looks almost as good and runs far better.',
        '<span class="text-highlight">Project Outcome & Lessons Learned</span><br>Development is on hold at the prototype stage: I joined a new team project building an AI camera quality-detection system and shifted my focus there. Features like the enemy AI, chase and darkness effects, checkpoints, and a sound manager are planned for when I pick this back up, not built yet.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "First-Person Backrooms Platformer" },
        { label: "Project Timeline:", value: "Mar 31, 2026 - May 19, 2026" },
        { label: "Project Status:", value: "Prototype" },
        { label: "Game engine:", value: "Godot 4" },
        { label: "Programming language:", value: "GDScript" },
        { label: "Team size:", value: "Solo" },
        { label: "Role:", value: "Designer, Developer & Artist" },
      ],
    },
    video: {
      title: "Project Gameplay Video",
      embedUrl: "https://www.youtube.com/embed/IX1x3NEwzbQ",
    },
    links: {
      title: "Project links",
      socialTitle: "Find the project on",
      socialDescription: "Check out my code and see how the project is built",
      socialLinks: [
        sourceCodeLink(
          "Source Code",
          "https://github.com/Jupresson/2026GodotProject.git",
        ),
      ],
    },
    backLinkText: "View more projects",
  },
  fi: {
    kind: "project-detail",
    metaTitle: "2026 Godot Project",
    hero: {
      title: "2026 Godot<br>Project",
      subtitle: "Godotilla tehty ensimmäisen persoonan backrooms-platformeri",
      description:
        "Ensimmäisen persoonan backrooms-platformeri, joka on vielä alkuvaiheessa. TrenchBroomilla rakennetut tasot ja perusliikkuminen ovat jo pystyssä.",
      image: "/Project2026GodotSmall.webp",
      imageAlt: "Kuvakaappaus 2026 Godot Projectista",
    },
    story: {
      title: "Projektin kehitystarina",
      introHtml:
        '<span class="text-highlight">Yleiskuva & tiimityö</span><br><strong>2026 Godot Project on ensimmäisen persoonan platformeri, joka sijoittuu backroomsiin ja jonka rakennan yksin Godot 4:llä.</strong> Teen koko projektin itse: tason rakennustyökalut, liikkumisen ja sen alla toimivan pelitilanhallinnan.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti & suunnittelu</span><br>Pelaaja kävelee, juoksee, hyppää ja liukuu liminaalisten backrooms-huoneiden ja käytävien läpi. Kiipeämistä ei ole. Juuri nyt keskityn saamaan perusliikkumisen tuntumaan oikealta, ennen kuin rakennan lisää tasoja tai järjestelmiä sen päälle.',
        '<span class="text-highlight">Roolini & haasteet</span><br>Rakennan tasot TrenchBroomilla käyttäen custom-objekteja spawn-pisteille ja kuolinalueille, ja tuon ne sitten Godot 4:ään. Pelitilat toimivat siististi, ja karttojen tekstuurit latautuvat ja näkyvät oikein kaikilla tasoilla.',
        '<span class="text-highlight">Huomio kuvakaappauksesta</span><br>Yllä oleva kuvakaappaus on nykyisestä versiosta. Optimoin kamera-efektit aluksi FSR-skaalauksella, minkä korvasin sittemmin shader-pohjaisella ratkaisulla, joka venyttää näkymää hieman. Se näyttää lähes yhtä hyvältä ja toimii paljon paremmin.',
        '<span class="text-highlight">Projektin lopputulos & opit</span><br>Kehitys on tauolla prototyyppivaiheessa: liityin uuteen tiimiprojektiin, jossa rakennetaan tekoälypohjaista kamerapohjaista laadunvalvontajärjestelmää, ja siirsin fokukseni sinne. Ominaisuudet kuten vihollisen tekoäly, jahtaus- ja pimeysefektit, checkpointit ja äänimanageri ovat suunnitteilla siihen vaiheeseen kun palaan projektin pariin, mutta niitä ei ole vielä rakennettu.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Ensimmäisen persoonan backrooms-platformeri" },
        { label: "Projektin aikajana:", value: "31.3.2026 - 19.5.2026" },
        { label: "Projektin tila:", value: "Prototyyppi" },
        { label: "Pelimoottori:", value: "Godot 4" },
        { label: "Ohjelmointikieli:", value: "GDScript" },
        { label: "Tiimin koko:", value: "Solo" },
        { label: "Rooli:", value: "Suunnittelija, kehittäjä ja artisti" },
      ],
    },
    video: {
      title: "Projektin gameplay-video",
      embedUrl: "https://www.youtube.com/embed/IX1x3NEwzbQ",
    },
    links: {
      title: "Projektin linkit",
      socialTitle: "Löydä projekti täältä",
      socialDescription: "Tutustu koodiin ja katso miten projekti on rakennettu",
      socialLinks: [
        sourceCodeLink(
          "Lähdekoodi",
          "https://github.com/Jupresson/2026GodotProject.git",
        ),
      ],
    },
    backLinkText: "Katso lisää projekteja",
  },
};

export default godotProject2026Content;
