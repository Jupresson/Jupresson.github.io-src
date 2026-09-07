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
        '<span class="text-highlight">Overview &amp; Goals</span><br><strong>2026 Godot Project is a first-person Backrooms platformer I built solo in Godot 4.6.</strong> I wanted to own <strong>every layer myself</strong>: the tools I author levels with, the runtime systems underneath, and the game code between them. Across <strong>75 commits</strong> I took it from an empty project to a playable prototype with <strong>five service singletons</strong>, a custom level pipeline and a hand-written character controller.',
      summaryLabel: "Show more",
      paragraphs: [
        '<span class="text-highlight">Game Concept &amp; Design</span><br>You walk, run, jump, crouch and slide through liminal Backrooms rooms and corridors. Most of my design time went into <strong>how the movement feels</strong>. Speed and camera height <strong>ease between values</strong> instead of jumping. You get <strong>less control in the air than on the ground</strong>. A <strong>0.3-second coyote timer</strong> forgives a jump you press a frame or two late, and I clear it the moment you use it, so one ledge gives you one jump. Sliding <strong>locks your direction and takes your mouse look away</strong>, which makes committing to a slide a real decision. I fire footstep sounds on the <strong>zero-crossing of the head-bob curve</strong>, so the audio and the camera run off the same phase and your steps stay locked to your gait.',
        '<span class="text-highlight">Architecture &amp; Systems</span><br>I split the runtime into <strong>five services with one job each</strong>: game state, input, audio, scenes and UI. <strong>One script owns mouse capture</strong>, so pausing cuts gameplay input in a single place instead of leaving a flag check in every other script. Scene changes load on a <strong>background thread</strong> behind a loading screen, and a lock stops a second change starting mid-load. I blend the <strong>real load percentage with a minimum display time</strong>, so the bar fills smoothly instead of jumping from 0 to 100. Audio runs through a manager I wrote: it <strong>reuses a pool of players</strong>, picks a random clip for each footstep, and fades sounds out instead of cutting them.',
        '<span class="text-highlight">The Level Pipeline</span><br>I build levels in <strong>TrenchBroom</strong>, a brush editor from the Quake lineage, and import them into Godot 4 through a pipeline I set up myself. I defined <strong>six custom entity types</strong>: checkpoints, kill volumes, hint triggers, moving platforms and two light fixtures. Their properties carry straight out of the editor into <strong>typed GDScript classes</strong>, and the light fixtures come with a proxy model so I can see them while laying out a room. Brush faces resolve to <strong>world-triplanar PBR materials</strong>, which gets me tiling, normal-mapped surfaces on geometry from a 1990s map format without touching a single UV. Making that stable took real toolchain debugging: a <strong>stale engine cache</strong> kept spawning ghost folders, and imported models were saving to the wrong path without telling me.',
        '<span class="text-highlight">Project Outcome &amp; Lessons Learned</span><br>The prototype runs a full loop: <strong>menu, level, death, respawn</strong>. I also built a settings screen for resolution, fullscreen, vsync, multi-monitor and render scaling. The lesson I keep coming back to is that <strong>building the tools first paid for itself</strong>. Once the TrenchBroom pipeline worked, laying out a level was design work instead of programming. I also learned how much of good movement is <strong>plain engineering</strong>: smoothing, timing windows and interpolation curves that a feature list has no way to show. I plan to come back to this project. For now a team opportunity took priority: we are building <strong>AI quality-detection systems</strong>. The work is <strong>full-stack development</strong>, which is the direction I want to grow in. I also get to plan and coordinate the work with a team, which is building my <strong>project management</strong> skills.',
      ],
      showLessLabel: "Show less",
    },
    details: {
      title: "Project Details",
      rows: [
        { label: "Genre:", value: "First-Person Backrooms Platformer" },
        { label: "Project Timeline:", value: "Mar 31, 2026 - May 19, 2026" },
        { label: "Project Status:", value: "Prototype" },
        { label: "Game engine:", value: "Godot 4.6 (Jolt Physics)" },
        { label: "Programming language:", value: "GDScript" },
        { label: "Level tools:", value: "TrenchBroom + Func_Godot" },
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
        '<span class="text-highlight">Yleiskuva &amp; tavoitteet</span><br><strong>2026 Godot Project on ensimmäisen persoonan backrooms-platformeri, jonka tein yksin Godot 4.6:lla.</strong> Halusin hallita <strong>jokaisen kerroksen itse</strong>: työkalut joilla rakennan tasot, niiden alla pyörivät ajonaikaiset järjestelmät ja näiden välissä olevan pelikoodin. <strong>75 commitin</strong> aikana vein projektin tyhjästä pelattavaan prototyyppiin, jossa on <strong>viisi palvelusingletonia</strong>, oma tasoputki ja käsin kirjoitettu hahmo-ohjain.',
      summaryLabel: "Näytä lisää",
      paragraphs: [
        '<span class="text-highlight">Pelikonsepti &amp; suunnittelu</span><br>Kävelet, juokset, hyppäät, kyykistyt ja liu\'ut liminaalisten backrooms-huoneiden ja käytävien läpi. Suurin osa suunnitteluajastani meni siihen, <strong>miltä liikkuminen tuntuu</strong>. Nopeus ja kameran korkeus <strong>liukuvat arvosta toiseen</strong> sen sijaan että hyppäisivät. Ilmassa <strong>ohjaus on löysempää kuin maassa</strong>. <strong>0,3 sekunnin coyote-ajastin</strong> antaa anteeksi ruutua tai paria myöhässä painetun hypyn, ja nollaan sen heti kun sitä käytetään, joten yhdestä reunasta saa yhden hypyn. Liuku <strong>lukitsee suunnan ja vie hiiriohjauksen</strong>, joten liukuun lähteminen on aito päätös. Askeläänet laukaisen <strong>head bob -käyrän nollakohdasta</strong>, jolloin ääni ja kamera kulkevat samassa vaiheessa ja askeleesi pysyvät liikkeen tahdissa.',
        '<span class="text-highlight">Arkkitehtuuri &amp; järjestelmät</span><br>Jaoin ajonaikaisen puolen <strong>viiteen palveluun, joilla on kullakin yksi tehtävä</strong>: pelitila, syöte, ääni, kohtaukset ja käyttöliittymä. <strong>Yksi skripti omistaa hiiren kaappauksen</strong>, joten tauko katkaisee pelisyötteen yhdessä paikassa eikä jokaiseen muuhun skriptiin jää lipputarkistusta. Kohtaukset latautuvat <strong>taustasäikeessä</strong> latausruudun takana, ja lukko estää uuden vaihdon käynnistymisen kesken latauksen. Sekoitan <strong>todellisen latausprosentin ja vähimmäisnäyttöajan</strong>, jolloin palkki täyttyy tasaisesti eikä hyppää nollasta sataan. Äänet kulkevat itse kirjoittamani managerin kautta: se <strong>kierrättää soittimia poolista</strong>, arpoo jokaiselle askeleelle oman klipin ja häivyttää äänet sen sijaan että katkaisisi ne.',
        '<span class="text-highlight">Tasojen rakennusputki</span><br>Rakennan tasot <strong>TrenchBroomilla</strong>, Quake-sukuisella brush-editorilla, ja tuon ne Godot 4:ään itse pystyttämälläni putkella. Määrittelin <strong>kuusi omaa entiteettityyppiä</strong>: checkpointit, kuolinalueet, vihjelaukaisimet, liikkuvat alustat ja kaksi valaisinta. Niiden ominaisuudet siirtyvät editorista suoraan <strong>tyypitettyihin GDScript-luokkiin</strong>, ja valaisimien mukana tulee proxy-malli, jotta näen ne huonetta rakentaessani. Brush-pinnat ratkeavat <strong>world-triplanar PBR-materiaaleiksi</strong>, jolloin saan 1990-luvun karttaformaatin geometrialle oikein toistuvat normal map -pinnat koskematta yhteenkään UV:hen. Vakaaksi saaminen vaati oikeaa työkaluketjun debuggausta: <strong>vanhentunut moottorin välimuisti</strong> synnytti jatkuvasti haamukansioita, ja tuodut mallit tallentuivat väärään polkuun siitä mitään kertomatta.',
        '<span class="text-highlight">Projektin lopputulos &amp; opit</span><br>Prototyypissä pyörii koko kierto: <strong>valikko, taso, kuolema, respawn</strong>. Tein siihen myös asetusruudun resoluutiolle, koko näytön tilalle, vsyncille, moninäyttötuelle ja renderöintiskaalaukselle. Opetus, johon palaan yhä uudelleen, on että <strong>työkalujen rakentaminen ensin maksoi itsensä takaisin</strong>. Kun TrenchBroom-putki toimi, tason rakentamisesta tuli suunnittelutyötä ohjelmoinnin sijaan. Opin myös, kuinka suuri osa hyvästä liikkumisen tunnusta on <strong>tavallista insinöörityötä</strong>: pehmennystä, aikaikkunoita ja interpolointikäyriä, joita ominaisuuslista ei pysty näyttämään. Aion palata tämän projektin pariin. Toistaiseksi tiimiprojekti meni edelle: rakennamme <strong>tekoälypohjaisia laadunvalvontajärjestelmiä</strong>. Työ on <strong>full stack -kehitystä</strong>, jonka suuntaan haluan kehittyä. Pääsen myös suunnittelemaan ja koordinoimaan työtä tiimin kanssa, mikä kasvattaa <strong>projektinhallintataitojani</strong>.',
      ],
      showLessLabel: "Näytä vähemmän",
    },
    details: {
      title: "Projektin tiedot",
      rows: [
        { label: "Lajityyppi:", value: "Ensimmäisen persoonan backrooms-platformeri" },
        { label: "Projektin aikajana:", value: "31.3.2026 - 19.5.2026" },
        { label: "Projektin tila:", value: "Prototyyppi" },
        { label: "Pelimoottori:", value: "Godot 4.6 (Jolt Physics)" },
        { label: "Ohjelmointikieli:", value: "GDScript" },
        { label: "Tasotyökalut:", value: "TrenchBroom + Func_Godot" },
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
