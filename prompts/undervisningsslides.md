# Genbrugelig prompt til undervisningsslides

Arbejdsversion med dine aftalte undervisningsprincipper og valgte greb fra Starlight-materialet. Kopiér teksten mellem “PROMPT START” og “PROMPT SLUT”, og udfyld felterne. Prompten kan også bruges ved at bede en assistent med adgang til projektet om at læse denne fil.

## PROMPT START

Du skal hjælpe mig med at udvikle undervisningsslides til multimediedesigneruddannelsen. Brug mit eksisterende materiale som reference for sprog, visuel opbygning, faglig sammenhæng og teknisk format. Følg den pædagogiske struktur nedenfor, også når ældre slides har en anden rækkefølge.

### Oplysninger om denne undervisning

- Emne: [udfyld]
- Tema: [udfyld]
- Samlet undervisningstid inklusive aktiviteter og opsamling: [15–45 minutter; angiv ønsket varighed, hvis den er kendt]
- Forkundskaber: [udled automatisk fra tema og draft-status efter reglerne nedenfor; angiv kun eventuelle undtagelser eller tilføjelser]
- Efter undervisningen skal de kunne: [udfyld, eller foreslå 2–3 konkrete læringsmål]
- Aktuelt projekt eller case: [udfyld, eller foreslå en lille relevant case]
- Materiale, der skal bruges som reference: [filstier, links eller vedhæftninger]
- Regler for nettet og AI i de efterfølgende anvendelsesopgaver: [udfyld, hvis relevant; den indledende samtale er altid uden opslag og AI]
- Output: [som udgangspunkt MDX til mit eksisterende Starlight-site; ellers angiv format]

Tema 1–6 er 1. semester. De efterfølgende temaer i mit materiale er 2. semester. Brug dette til at tilpasse støtte og kompleksitet, og udled de konkrete forkundskaber fra materialet efter reglerne nedenfor.

Hvis afgørende oplysninger mangler, så stil højst tre korte, samlede spørgsmål. Fortsæt med de dele, der kan laves. Ved mindre uklarheder skal du vælge en rimelig løsning og nævne antagelsen. Hvis referencematerialet ikke er tilgængeligt, skal du sige det frem for at påstå, at du følger det.

### Udled forkundskaber fra tema og draft-status

Når jeg angiver tema N, er følgende udgangspunktet for det, de studerende allerede har fået undervisning i:

1. **Alle sider i tidligere temaer** (temaer med et lavere nummer end N) regnes som tilgængelige og gennemgåede, også hvis siderne er markeret som drafts.
2. **Sider i det aktuelle tema N** regnes kun som gennemgåede, hvis de ikke er drafts: `draft: false` eller standardværdien false, når feltet er udeladt.
3. **Drafts i det aktuelle tema og alle sider i senere temaer** må ikke forudsættes gennemgået. De kan bruges som inspiration, men nødvendige begreber herfra skal introduceres i forløbet eller udgå af opgaven.

**Eksempel: Tema 3.** Alt materiale i tema 1 og 2 er tilgængeligt og undervist i, uanset draft-status. I tema 3 tæller kun sider, der ikke er drafts. Tema 3-drafts og materiale fra tema 4 og frem indgår ikke i forkundskaberne.

Læs temaet fra sidernes metadata, i dette projekt `sidebar.badge.text`, fx `Tema 3`, og brug den faktiske draft-status i indholdssamlingen. Brug hele materialet, inklusive drafts, frem for kun den offentlige menu eller søgning. Ved lokal adgang læses filerne i `src/content/docs/`; ved adgang via sitet bruges kladdevisningen og sidernes temamarkeringer. En URL under `/draft/` fortæller ikke i sig selv, at indholdet er en draft, da visningen også indeholder udgivne sider. Sider uden et kendt tema kan kun regnes med, hvis jeg udtrykkeligt har angivet dem som forkundskaber.

Udvælg og læs de fagligt relevante sider i dette grundlag. Beskriv kort i undervisernoterne, hvilke konkrete færdigheder det giver anledning til at bygge videre på, med henvisninger til siderne. Skeln mellem tidligere gennemgået stof og det, dagens forløb skal træne eller forklare. Undgå at genundervise hele tidligere forløb; brug en kort påmindelse eller et link, når det er nok. At et stof er gennemgået, betyder ikke, at alle studerende mestrer det uden støtte.

Ved en ny udgave af et eksisterende forløb gælder samme regel om forkundskaber. Bevar samtidig forløbets faglige mål, så nyudgaven kan sammenlignes med den gamle; lav ikke automatisk en avanceret fortsættelse, blot fordi den gamle udgave er udgivet.

Mine udtrykkelige undtagelser eller tilføjelser har forrang. Bed mig ikke udfylde forkundskaberne manuelt, når tema og materiale er tilgængelige. Hvis tema, draft-status eller nødvendige sider ikke kan læses, så angiv præcist usikkerheden frem for at opfinde indhold eller påstå, at det er gennemgået. Fortsæt med det dokumenterede grundlag.

### Mine valgte greb fra det eksisterende materiale

Kombinér disse præferencer i nye forløb, når de passer til emnet:

| Reference i projektet | Det skal videreføres |
| --- | --- |
| `src/content/docs/astro/figma/varianter-visuelt-forslag.mdx` | Den primære visuelle reference: varme, lyse slideflader, store mørke overskrifter, god luft, korte instruktioner og store illustrationer. Se afsnittet om foretrukket visuelt udtryk. |
| `src/content/docs/guides/layoutdiagrammer.mdx` og den tilhørende løsningsside | Eksempler, som de studerende kan afprøve direkte, samt løsningsforslag, der først vises efter et aktivt valg. |
| `src/content/docs/git/intro-til-github.mdx` | Faktiske skærmbilleder og konkrete billeder med pile, der peger præcist på det relevante. |
| `src/content/docs/ux/struktur-og-planlaegning-af-design.mdx` | Overskuelige tabeller, som sammenligner begreber, viser forskelle eller forbinder et problem med et eksempel. |

Tilføj summe-slides efter reglerne nedenfor. De er en fast del af den nye skabelon, selv om de mangler i referenceforløbene.

### Valgfri AI-vejledning efter den første summeøvelse

Medtag kun AI-vejledning, hvis AI kan hjælpe de studerende med at forstå eller undersøge noget konkret i netop dette emne. Vurdér relevansen ud fra læringsmål og aktivitet: fx at undersøge en misforståelse, få spørgsmål til sin begrundelse eller få gradvise hints til et fagligt problem. En generel opfordring til at “spørge AI” er ikke nok. Udelad vejledningen helt, hvis den ikke tilfører en tydelig faglig hjælp, eller hvis direkte afprøvning af den konkrete arbejdsgang er mere relevant. Notér kort begrundelsen for valg eller fravalg i undervisernoterne.

Hvis vejledningen er relevant, skal den stå på et kort slide **efter den første summeøvelse og den korte fælles opsamling**, før den faglige forklaring. De studerende skal først have tænkt selv og delt deres bud. Brug en titel som “Brug AI til at forstå [emne]”. Giv kort vejledning og en prompt, de kan kopiere, når de senere studerer eller arbejder med emnet. Slidet er en introduktion til en arbejdsform, ikke en aktivitet, hvor de skal åbne AI med det samme. Summeøvelsen er altid kun samtale uden AI og opslag.

Tilpas vejledningen til emnet, læringsmålene og de oplyste forkundskaber. Forklar med én kort sætning, hvad AI kan hjælpe dem med at undersøge eller forstå: fx at forudsige, hvad en CSS-regel gør, begrunde en gruppering af indhold eller undersøge, hvor deres forståelse af en Git-arbejdsgang er usikker. Vælg én relevant anvendelse frem for at gentage en generel liste over AI-muligheder på alle forløb.

Når AI-slidet medtages, skal det indeholde:

- **En konkret anvendelse:** Hvad kan du bruge AI til at forstå i lige præcis dette emne?
- **En kort, kopierbar studieprompt:** Angiv emne og niveau, lad den studerende dele sit eget bud, og bed AI stille ét spørgsmål ad gangen og vente på svaret. Bed om små hints og feedback på forståelsen uden færdig kode, færdigt produkt eller løsning på opgaven.
- **Én kort opfølgende prompt:** Hjælp den studerende videre, fx ved at bede om et mindre hint, få undersøgt sin begrundelse eller blive stillet et nyt kontrolspørgsmål.

Brug dette mønster som udgangspunkt, og omskriv det konkret til det aktuelle forløb:

```text
Jeg studerer multimediedesign og øver mig i [konkret emne]. Jeg kender [relevante forkundskaber]. Hjælp mig med at forstå [konkret princip] uden at løse min opgave eller give færdig kode/et færdigt produkt. Bed først om mit eget bud og min begrundelse. Stil derefter ét spørgsmål ad gangen, og vent på mit svar. Hvis jeg går i stå, så giv ét lille hint. Lad mig selv forklare og afprøve næste skridt.
```

Udfyld de emnefaglige felter i den færdige slide; aflever ikke en generisk prompt med tomme pladsholdere. Vælg ord, der passer til opgaven: kode ved programmering, fx begrundelser, skitser eller observationer ved design og UX. Den studerende skal selv levere sit bud i dialogen.

En opfølgning kan fx være: “Her er min forklaring: … Stil ét spørgsmål, der undersøger, om jeg har forstået [det konkrete princip]. Vent med at forklare, til jeg har svaret.” Tilpas også denne til emnet. Hvis AI giver for meget af løsningen, kan opfølgningen i stedet bede om at gå tilbage til ét spørgsmål eller ét lille hint.

Hold slidet læsbart: én hovedprompt, én kort opfølgning og få linjers vejledning. Afsæt højst cirka ét minut til introduktionen og medregn det i tidsplanen. Vejledningen skal vise en arbejdsform og må ikke udlevere opgavens løsning eller foregribe den faglige forklaring. Den senere brug af AI skal følge de angivne regler for anvendelsesopgaverne; hvis AI ikke er tilladt dér, kan vejledningen være til efterfølgende selvstudium, når det er relevant. AI-svar skal undersøges gennem de studerendes egne forklaringer, afprøvning og sammenhold med undervisningsmaterialet. Når AI-vejledningen udelades, går forløbet direkte fra opsamlingen til den faglige forklaring; indsæt ikke et tomt erstatningsslide.

### Pædagogisk princip: Sum først – forklaring bagefter

De studerende skal først tale sammen om det centrale problem, før jeg forklarer teori, begreber eller løsning. Jeg underviser store hold, og samtalen skal give alle mulighed for at deltage og rette opmærksomheden mod emnet. De arbejder i grupper på 3–5 personer med dem, de sidder ved. Det foregår i undervisningen og kræver ikke hjemmearbejde før timen.

Efter den korte introduktion til forløbets retning skal den første faglige aktivitet være en konkret situation, et vist eksempel, en skitse, et resultat eller et lille problem, som de kan tale om med deres eksisterende viden. Eventuel AI-vejledning kommer først efter denne samtale og opsamlingen. De skal bare snakke sammen: ingen søgning på nettet, AI, research, kodearbejde eller skriftlig aflevering. De må gerne være usikre og komme med foreløbige eller forkerte bud. Spørgsmålet må ikke kræve beherskelse af det nye stof for overhovedet at komme i gang.

Giv nødvendig praktisk information, og vis et eventuelt eksempel på selve sliden, men vent med den faglige forklaring. Spørg fx: “Hvad lægger I mærke til?”, “Hvad tror I vil ske?”, “Hvilken løsning ville I vælge, og hvorfor?” eller “Hvad har I brug for at finde ud af?” Undgå blot at bede dem slå definitionen af dagens begreb op.

Sæt normalt 2–4 minutter af og højst 5 minutter til samtalen, medmindre jeg udtrykkeligt beder om længere tid. Brug ét konkret hovedspørgsmål og højst ét kort opfølgende “hvorfor?”. Skriv fx: “Tal med dem, I sidder ved, i grupper på 3–5. I har 3 minutter. Lad alle komme med et bud.” Ingen faste roller eller flytning rundt i lokalet er nødvendig.

Angiv et enkelt mundtligt resultat: De skal kunne dele ét bud, en observation eller en begrundelse. De behøver ikke blive enige. Stil spørgsmålet på sliden, så samtalen kan gennemføres uden at åbne andre sider eller værktøjer. Ved samtale om kode skal et eventuelt eksempel være kort nok til at kunne læses på sliden.

Den indledende samtale skal ikke bedømmes med de tre kvalitetsniveauer nedenfor eller vurderes efter, om de allerede kender teorien. Her er målet deltagelse, egne bud og opmærksomhed på emnet. Gem vurderingen af faglig mestring til opgaverne efter forklaringen.

### Obligatoriske summe-slides

Hvert forløb skal have mindst ét særskilt summe-slide før den første faglige forklaring. Indsæt også et summe-slide før en ny væsentlig problemstilling i et længere forløb, når det hjælper de studerende med at forstå behovet for næste del. Tilpas antallet til den samlede tid.

Et summe-slide skal gøre det tydeligt, hvilket problem dagens undervisning hjælper med at løse. Brug gerne en situation fra praksis: en kunde, der vil ændre noget; en bruger, der går i stå; et layout, der bryder sammen; eller et samarbejde, hvor filer bliver blandet sammen. En opdigtet, realistisk situation skal beskrives som et tænkt eksempel. Hvis et konkret virkeligt eksempel bruges som dokumentation, skal kilden kunne angives.

Brug denne enkle form:

```markdown
## Sum: [problem formuleret i almindeligt sprog]

**3 minutter · grupper på 3–5 · tal med dem, I sidder ved**

[En kort, konkret situation. Vis gerne et relevant billede eller to eksempler.]

**[Ét åbent spørgsmål om problemet, som kan diskuteres uden dagens teori.]**

Lad alle komme med et bud. Vær klar til at dele én overvejelse.
```

Varigheden i skabelonen er et eksempel; brug normalt 2–4 minutter og højst 5. Hold slideoverskrift, billede, labels og eventuel kode fri for afsløringer af løsningen. Brug en neutral titel, fx “Hvad hører sammen på mobil?” frem for en titel, der allerede navngiver den ønskede løsning.

Underviseren samler kort op og kobler forklaringen direkte til samme situation. Efter forklaringen genbesøges problemet, så de studerende kan se, hvad den nye viden gør dem i stand til at forstå eller ændre.

### Fast opbygning af et undervisningsforløb

Brug følgende rækkefølge. Hold introduktionen kort; hvert trin kan fylde ét eller flere slides efter behov. Det valgfrie AI-trin må højst fylde ét kort slide og skal udelades, når det ikke er relevant. Gentag en kort samtale før en ny central problemstilling, når det giver mening; lav ikke en ny gruppeaktivitet for hvert lille begreb.

1. **Retning og relevans.** Præsenter emnet, en konkret anvendelse og 2–3 læringsmål. Afslør ikke løsningen på det indledende samtalespørgsmål.
2. **Summe-slide.** En kort samtale i grupper på 3–5, normalt 2–4 minutter og højst 5. Vis en konkret situation og ét spørgsmål om det problem, undervisningen skal hjælpe med at løse. Bed alle i gruppen dele deres bud.
3. **Del enkelte bud.** Brug som udgangspunkt 1–2 minutter på at høre fx to forskellige bud fra holdet. Der skal ikke være fremlæggelse fra alle grupper. Spørg kort til begrundelsen og brug svarene som indgang til forklaringen. Angiv samtaletid og fælles opsamling hver for sig.
4. **AI som studiemakker — kun hvis relevant.** Efter den første samtale og opsamling vises en konkret anvendelse, en emnespecifik studieprompt og én kort opfølgning efter reglerne ovenfor. Fokus er spørgsmål, hints og feedback, der hjælper de studerende med selv at forstå og løse. Hvis AI ikke tilfører en konkret faglig hjælp, udelades dette trin helt. Der bruges ikke AI under summeøvelsen eller denne korte vejledning.
5. **Faglig forklaring og eksempel.** Forklar stoffet kort og præcist. Vend tilbage til det samme problem og vis, hvad begreberne eller metoden hjælper med at forstå. Tilføj undervisernoter med mulige misforståelser og forslag til opfølgende spørgsmål; påstå ikke, at grupperne faktisk har sagt noget bestemt.
6. **Anvend selv.** En egentlig opgave, hvor de bruger det gennemgåede princip i en ændret situation efter variationsreglerne nedenfor. Angiv mål, tid, arbejdsform, materiale, leverance og konkrete krav. Brug kun den startkode eller støtte, de har brug for. Ved længere forløb kan en støttet øvelse efterfølges af en mere åben opgave.
7. **Vurder og forbedr.** De studerende vurderer deres løsning efter de opgavespecifikke kriterier og forbedrer mindst én ting. Til kodeopgaver skal der stå, hvordan de afprøver resultatet, og hvad de skal kunne observere.
8. **Vend tilbage og afslut.** Lad dem kort genbesøge deres første bud: “Hvad ville I ændre nu, og hvorfor?” Afslut gerne med et kort individuelt spørgsmål eller en anvendelse, der passer til tiden, så gruppens fælles produkt ikke er den eneste indikation af forståelse.

Et forløb varer normalt 15–45 minutter inklusive samtaler, forklaring, opgaver og opsamling. Et enkelt emne må gerne klares på 15 minutter; tilpas omfanget til emnet og forkundskaberne. Ved korte forløb kan anvendelse, selvtjek og afslutning samles i en lille aktivitet.

Lav en realistisk tidsplan, der også rummer instruktion, overgange, opsamling og forbedring. Hvis kernestoffet kræver mere end 45 minutter, så del det i flere navngivne forløb/slidesæt på højst 45 minutter hver. Giv hver del et tydeligt fokus, en kort aktivering og en afslutning, og vis forbindelsen til næste del. Placér supplerende indhold som videre arbejde, når det ikke er nødvendigt for læringsmålene.

### Opgaver skal kræve tilpasning af det gennemgåede princip

Bevar det faglige princip fra gennemgangen, og ændr mindst ét relevant krav, så de studerende selv skal tilpasse løsningen. Det kan være antal, forhold, betingelse, struktur eller brugerbehov. En ændring af navne, farver eller tekst alene er ikke tilstrækkelig, hvis fremgangsmåden og alle faglige valg kan kopieres uændret.

| Gennemgået eksempel | En passende ny opgave | Det genbrugte princip |
| --- | --- | --- |
| Et grid med to lige brede kolonner | Placér seks kort i tre lige brede kolonner, og forklar, hvad der skal tilpasses | At definere kolonner på en grid-container |
| Et grid med kolonneforholdet 1:2, hvor relative bredder er forklaret | Lav et layout med forholdet 2:1 ud fra en vist skitse | At styre kolonnernes relative bredde |
| En menu organiseret efter indholdstyper | Organisér et nyt sæt indhold til en bruger med et andet konkret mål, og begrund grupperingen | At organisere og navngive indhold ud fra brugerens behov |

Tilpas variationen til niveauet: For begyndere er én velvalgt ændring nok. En større variation må kombinere kendte principper, når forkundskaber og tid tillader det. Opgaven skal kunne løses med det gennemgåede stof og de oplyste forkundskaber. Indfør fx ikke krav om responsive breakpoints, indlejrede grids eller ny syntaks, hvis undervisningen kun har vist grundlæggende kolonner.

Beskriv det ønskede resultat, og lad den centrale tilpasning være de studerendes arbejde. Startkode må gerne indeholde nødvendig struktur, men skal lade netop det faglige valg stå åbent. Et hint skal hjælpe dem videre uden straks at udlevere den ændrede løsning. Opdatér både kvalitetskriterier og det skjulte løsningsforslag, så de passer til opgavens nye krav.

Notér kort i undervisernoterne for hver anvendelsesopgave: **Hvilket princip genbruges? Hvad er ændret fra gennemgangen? Hvad skal den studerende selv beslutte eller tilpasse?** Kontrollér dette mod alle fuldt gennemgåede eksempler i forløbet. En ren gentagelse af demonstrationen kan bruges som en kort fælles afprøvning, men skal efterfølges af en opgave med den beskrevne variation.

Summe-slidet og forklaringen må gerne bruge samme problem for at skabe sammenhæng. Den efterfølgende anvendelsesopgave skal give dem en ændret situation at bruge forståelsen på.

### Undgå unødige gentagelser

Giv hvert slide en tydelig funktion: fx rejse et problem, forklare et begreb, vise et eksempel, sammenligne, afprøve eller samle op. Slå slides sammen eller fjern dem, hvis de gentager samme pointe, forklaring eller eksempel uden at tilføre en ny faglig funktion. Undgå at fortælle det samme udførligt både som brødtekst, punktopstilling og tabel.

Korte læringsmål og en afsluttende opsamling er stadig relevante. Når et tidligere problem genbesøges, skal de studerende bruge den nye viden til at vurdere, begrunde eller forbedre deres første bud. Hvis et begreb allerede er gennemgået ifølge de oplyste forkundskaber, så brug en kort påmindelse eller henvisning efter behov.

### Kriterier for egentlige opgaver

Til hver egentlig anvendelsesopgave skal du skrive konkrete kendetegn for **et virkeligt godt svar**, **godt nok** og **for lidt endnu**. Brug gerne en lille tabel og vælg 2–4 kriterier, som direkte svarer til opgavens mål og krav.

- **Et virkeligt godt svar:** Opfylder minimumskravene og viser relevant faglig begrundelse, afprøvning eller velvalgt forbedring. Mere tekst eller flere funktioner er ikke i sig selv bedre.
- **Godt nok:** Beskriv præcist, hvad der som minimum skal være korrekt, fungere eller være begrundet. Dette skal være et reelt tilstrækkeligt resultat.
- **For lidt endnu:** Beskriv konkrete mangler eller misforståelser, og giv et overskueligt næste skridt. Vurder arbejdet, ikke personen.

Dette er feedback til undervisningen, ikke en officiel karakter- eller eksamensrubrik. Opfind ikke lokale bedømmelseskrav.

Kriterierne skal være synlige, når de får anvendelsesopgaven. Skriv dem som kvalitetskrav frem for en skjult facitliste. Et fuldt løsningsforslag skal være skjult som udgangspunkt og åbnes aktivt efter reglerne nedenfor. Der kan være flere fagligt gode svar, især i design og UX; tydeliggør, hvad der er et faktuelt krav, og hvad der er et valg, der skal begrundes.

Tilføj et kort, valgfrit hint til dem, der går i stå, og en relevant udfordring til dem, der bliver hurtigt færdige. Ekstraopgaven må ikke være nødvendig for at nå “godt nok”.

### Afprøvbare eksempler og løsninger, der kan åbnes

Brug fungerende eksempler, som de studerende kan afprøve direkte i materialet, når emnet egner sig til det. Det kan være skift mellem mobil og desktop, ændring af én indstilling, valg af et filter eller afprøvning af en knap. Giv en kort instruktion om, hvad de skal ændre, og hvad de skal lægge mærke til. Den indledende summeaktivitet er fortsat en mundtlig samtale; den praktiske afprøvning placeres i demonstration eller anvendelse.

Til egentlige opgaver skal hint og fuldt løsningsforslag kunne åbnes hver for sig. Vis opgave, materiale og kvalitetskriterier fra starten. Placér løsningsforklaringen og eventuel færdig kode i en lukket “Vis løsningsforslag”-boks eller på en særskilt side med et tydeligt link, som i layoutdiagrammer. Løsningen må ikke åbne automatisk eller stå fuldt udfoldet på opgavesliden. Kald den “Et løsningsforslag”, når flere løsninger er fagligt mulige.

Løsningsforslaget skal forklare, hvorfor løsningen virker, og hvordan den kan afprøves. Bed de studerende sammenligne deres egen løsning med kriterierne og forslaget. Skjul ikke selve kvalitetskriterierne sammen med facit.

I Starlight kan en foldbar løsning bruge `<details>` med en tydelig `<summary>` og uden `open`-attribut. Genbrug eksisterende interaktive komponenter, når de passer. Ved implementering skal du kontrollere, at eksemplet kan betjenes, og at løsningen er lukket ved første visning, også i præsentationsvisningen.

### Sprog, niveau og udformning

Skriv på dansk i en direkte og venlig tone. Brug “I” i gruppeaktiviteter og “du” i individuelle opgaver. Forklar nye fagord, og bevar relevante engelske navne fra programmer og kode.

På 1. semester skal opgaver som udgangspunkt have tydelige rammer, små overskuelige eksempler og få nye begreber ad gangen. På 2. semester kan de i højere grad kombinere kendte metoder, begrunde valg og overføre arbejdet til eget projekt. Tilpas begge dele til de faktisk oplyste forkundskaber.

Hold hvert slide fokuseret på én hovedidé eller aktivitet. Del tætte forklaringer og store tabeller over flere slides. Læg længere uddybninger i undervisernoter eller supplerende materiale.

### Foretrukket visuelt udtryk: Varianter – visuelt forslag

Brug [Varianter – visuelt forslag](/draft/astro/figma/varianter-visuelt-forslag/) som **primær visuel reference for nye slides**, også når emnet er et andet end Figma. Udtrykket gælder hele slidet: komposition, typografi, farver, luft og forholdet mellem tekst og illustration.

Læs referencefilen `src/content/docs/astro/figma/varianter-visuelt-forslag.mdx`, komponenten `src/components/VariantVisual.astro` og stilarket `src/styles/variants-visual.css`, når du har adgang til projektet. Viderefør disse konkrete greb:

- **Rolige slideflader:** En varm, lys baggrund (`#f7f5ef`), diskrete rammer, afrundede hjørner og god indvendig luft. Hvert slide skal opleves som en samlet, overskuelig flade.
- **Tydelig typografi:** Store, markante overskrifter i mørkegrøn (`#18352e`), gerne med et velvalgt linjeskift. Brug en enkel sans serif som referencefilens Helvetica Neue/Arial. Skriv korte overskrifter og få støttende linjer; lad figuren forklare en væsentlig del af pointen.
- **En lille, fast farvepalette:** Brug grøn (`#185a46`) til centrale elementer og rustorange (`#b53e25`) til fx trin og præcise markeringer. Lilla kan markere komponentfamilier eller tilsvarende faglige grupper, hvor det giver mening. Farver skal have en tydelig funktion og tilstrækkelig kontrast.
- **Tekst og illustration i balance:** Brug ofte to kolonner på større skærme: en kort forklaring eller få trin til venstre og en stor illustration, et skærmbillede eller en interaktiv demonstration til højre. Giv det visuelle mindst lige så meget plads som teksten. Stabl indholdet på små skærme.
- **Variation inden for samme stil:** Brug sideordnede eksempler til sammenligninger, en stor figur til en central sammenhæng og et tydeligt aktivitetskort med tid til opgaver. Vælg layout efter slidets funktion.
- **Diskret orientering:** En lille emne- eller trinmarkering øverst og eventuelt en kort hovedpointe nederst, adskilt med en fin linje. Hvis der bruges slidenumre, skal de følge det faktiske forløb og vises ét sted.
- **Plads til undervisningen:** Hold lange forklaringer og undervisernoter uden for præsentationsfladen. Hint og løsninger kan åbnes aktivt; selve opgaven og kvalitetskriterierne skal være synlige og læsbare.

Tilpas det visuelle udtryk til den aftalte pædagogiske rækkefølge: summeøvelse før forklaring, AI-vejledning kun når relevant og efter første summeøvelse og opsamling, varierede opgaver og synlige kriterier. Referenceforslagets syv slides er ikke et krav til antallet, og dets rækkefølge erstatter ikke promptens undervisningsstruktur. Reglerne om billedrettigheder gælder også ved genbrug af materiale fra referencen.

Kontrollér udtrykket i både almindelig sidevisning og slideshow. Del et overfyldt slide op frem for at gøre tekst, tabeller eller billedkreditering for små. Bevar også læsbarhed på mobil og i print/PDF.

### Illustrationer og visuel variation

Jeg ønsker flere illustrationer og større visuel variation i materialet. Planlæg de visuelle forklaringer samtidig med indholdet, og lad dem bære en tydelig del af formidlingen. Foreslå for hvert centralt begreb et relevant visuelt eksempel, hvor det giver faglig mening, og indarbejd de valgte eksempler i slidesene.

- Brug diagrammer til sammenhænge, hierarkier og processer; fx sitemap, brugerflow, datastrømme eller kasser inden i kasser.
- Brug sammenligninger, fx to menuer, to wireframes eller et før/efter-eksempel, når de studerende skal opdage forskelle og begrunde valg.
- Brug relevante fotos, illustrationer eller små cases til at gøre situationen konkret og skabe en genkendelig visuel sammenhæng gennem forløbet.
- Brug udsnit af faktiske skærmbilleder med konkrete pile og eventuelt nummererede markeringer til arbejdsgange i programmer. Lad hver pil pege præcist på det element, instruktionen handler om. Et skematisk eksempel skal være tydeligt mærket som en illustration.
- Brug korte tabeller til sammenligninger, begrebsafklaring og forbindelser mellem brugerbehov, valg og konkrete eksempler. Vælg få kolonner og korte celler, så tabellen kan læses i undervisningslokalet.
- Brug små interaktive demonstrationer, når de hjælper med at se en ændring, fx mobil/desktop eller en valgt indstillings betydning. Det centrale budskab skal også kunne forstås i en statisk visning.
- Lad gerne den indledende gruppesamtale tage udgangspunkt i en illustration. Vis fx to løsninger, og bed grupperne diskutere dem. Vent med labels, markeringer og billedtekster, der afslører svaret, til forklaringen.

Brug store, letlæselige figurer, korte labels, tilstrækkelig kontrast og en ensartet visuel stil. Kombinér farver med tekst eller former, så farven ikke alene bærer betydningen. Sørg for relevante tekstalternativer. Tilpas mængden af brødtekst, så illustrationen får plads og kan aflæses på en projektor i et stort lokale.

Ved levering af færdige slides skal illustrationerne være indarbejdet eller henvise til konkrete, tilgængelige assets. Hvis en illustration endnu ikke kan laves, så markér præcist, hvad der mangler; en generel note som “indsæt billede her” er ikke en færdig illustration. Ved en disposition er konkrete billedforslag tilstrækkelige.

Brug gerne en gennemgående case fra multimediedesign, fx et emnesite, en prototype, en produktliste, en brugerundersøgelse eller en medieproduktion. Markér fiktive cases og data som eksempler. Opfind ikke researchresultater, kilder eller citater. Kontrollér aktuelle softwarefunktioner i officielle kilder, når de indgår i undervisningen.

### Billedrettigheder, kilder og licenser

Brug kun billeder, illustrationer, ikoner og skærmbilleder, som jeg har dokumenteret ret til at bruge på mit offentligt tilgængelige undervisningssite. Kontrollér rettighederne til den konkrete brug, herunder offentliggørelse, eventuel bearbejdning med beskæring eller pile samt deling i slides og PDF. Antag ikke, at undervisningsformål, gratis download, en billedsøgnings licensfilter eller en kildehenvisning i sig selv giver brugsret.

Kontrollér hvert eksternt billede på den oprindelige billedside eller hos rettighedshaveren. Læs den konkrete licens eller tilladelse, og følg dens betingelser. Ved Creative Commons skal du blandt andet kontrollere eventuelle krav om kreditering, deling på samme vilkår og begrænsninger i bearbejdning eller kommerciel brug. Brug [Creative Commons' licensoversigt](https://creativecommons.org/cc-licenses/) og [vejledning til kreditering](https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution) som reference, når det er relevant.

Hvert billede skal have en synlig, læsbar kreditering ved billedet eller et tydeligt link til den konkrete post i en billedkildeliste på sitet. Krediteringen skal kunne findes fra det slide, der bruger billedet, og følge med i præsentations- og print/PDF-visningen. Gem den ikke kun i alt-tekst, kodekommentarer eller undervisernoter.

Angiv følgende for hvert billede, hvor oplysningerne findes, og markér manglende oplysninger uden at opfinde dem:

- Billedets titel eller en kort beskrivelse og ophaver/rettighedshaver.
- Et direkte link til billedets oprindelige kildeside, hvor rettighederne kan kontrolleres. En søgemaskine eller billedfilens lokale sti er ikke tilstrækkelig som kilde.
- Den præcise licens med versionsnummer og link til vilkårene, fx **CC BY 4.0**. Hvis grundlaget i stedet er en individuel tilladelse eller dokumenteret public domain-status, skal det fremgå; kald det ikke en CC-licens.
- Eventuelle ændringer, fx “beskåret” eller “pile og labels tilføjet”. Bevar også andre oplysninger, som licensen kræver.

Brug fx denne form, tilpasset de faktiske oplysninger:

```text
Billede: [titel/beskrivelse] · [ophaver] · Kilde: [link til kildesiden]
Licens: [navn og version med link] · Ændringer: [ingen eller konkret beskrivelse]
```

Bevar det enkelte billedes licens og brugsbetingelser, når det lægges på sitet; tilskriv det ikke automatisk sitets eventuelle generelle licens. For egne billeder angives ophav og de faktisk aftalte vilkår. Vælg ikke en ny licens til mit materiale på mine vegne. Markér AI-genererede illustrationer som sådanne med værktøj og dato, og kontrollér brugsbetingelserne frem for at påstå, at de automatisk er frit licenserede. Kontrollér også rettighederne til indhold, der indgår i skærmbilleder.

Gem kildelink, licens/tilladelse og datoen for kontrollen sammen med billedets lokale filsti i leverancens billedkildeliste. Dokumentation for en individuel tilladelse skal kunne findes, men private mails og personoplysninger skal ikke offentliggøres som kreditering.

Hvis rettighederne ikke kan verificeres, så undlad at indsætte billedet. Find et alternativ med dokumenterede rettigheder eller brug en selvstændigt udarbejdet illustration, og oplys kort, hvad der eventuelt stadig mangler. Opfind aldrig ophaver, kilde, tilladelse eller licens.

### Når output er til mit Starlight-projekt

Læs først de relevante referencefiler og genbrug projektets eksisterende komponenter og visuelle mønstre. De undersøgte sider bruger MDX, frontmatter med titel, beskrivelse og temaoplysninger, komponenten `Slide` og `<div class="page-break"></div>` mellem slides. Kontrollér importstier og metadata i forhold til den konkrete filplacering.

Brug det visuelle forslag som udgangspunkt inden for sitets eksisterende ramme. Genbrug eller tilpas dets relevante layout- og stilgreb til det nye indhold; komponenten indeholder Figma-specifik tekst og kan ikke nødvendigvis bruges uændret til andre emner. Afgræns eventuelle nødvendige stilarter til undervisningsslidesene. Nye slides skal ikke automatisk udløse et redesign af sitet eller ændringer i den fælles navigation og styling.

Lever undervisernoter separat fra de studerendes slides. Løsningsforslag, som de studerende skal kunne åbne selv, følger reglerne om skjult standardvisning ovenfor.

### Leverance og egenkontrol

Lever:

1. En kort oversigt med læringsmål, forkundskaber udledt af tema og draft-status med henvisninger til relevante sider, tidsplan og valgte illustrationer. Ved flere forløb: vis opdelingen og varigheden af hver del.
2. Selve slidesene i det aftalte format, inklusive summe-slides, relevante afprøvbare eksempler, anvendelsesopgaver, synlige vurderingskriterier og løsningsforslag, der er skjult som udgangspunkt. Medtag kun emnespecifik AI-studiehjælp, hvis den er relevant, og placér den efter den første summeøvelse og opsamling.
3. Separate undervisernoter med forbindelsen mellem gruppesvar og forklaring, forventelige misforståelser, vejledende løsningsforslag, en kort begrundelse for valg eller fravalg af AI-vejledning og en angivelse af, hvordan hver opgave varierer det gennemgåede eksempel.
4. En kort liste over anvendte kilder og eventuelle antagelser samt en billedkildeliste med filsti, ophav, kildelink, licens eller andet dokumenteret tilladelsesgrundlag, ændringer og kontroldato. Indarbejd de synlige billedkrediteringer i slidesene.

Kontrollér inden levering, at forkundskaberne følger reglen: alle tidligere temaer uanset draft-status, kun ikke-drafts i det aktuelle tema og intet fra senere temaer uden særskilt aftale. Kontrollér, at opgaverne kan løses med dette grundlag og dagens undervisning.

Kontrollér, at AI-vejledning kun medtages, når den har en konkret faglig relevans, og at den i så fald kommer efter den første summeøvelse og opsamling. Et eventuelt AI-slide skal have en emnespecifik, kopierbar prompt og én kort opfølgning, som fremkalder egne bud, spørgsmål, gradvise hints og feedback frem for færdige løsninger. Kontrollér, at emne og niveau er udfyldt konkret, og at AI først bruges senere, hvor det er tilladt. Hvis AI ikke er relevant, skal vejledningen være helt udeladt.

Kontrollér, at hvert forløb har et særskilt summe-slide før forklaringen, at samtalen varer højst 5 minutter og kan gennemføres mundtligt uden opslag eller nye faglige forkundskaber. Kontrollér, at problemet fra summe-sliden bliver taget op i forklaringen, at alle i grupperne inviteres til at tale, og at opsamlingen fungerer på et stort hold. Kontrollér, at anvendelsesopgaver og synlige kriterier undersøger læringsmålene, og at hint og løsninger kræver et aktivt valg for at blive vist. Kontrollér også, at hvert forløb holder sig inden for 45 minutter, at de valgte illustrationer hjælper med at forstå stoffet, og at tekst, pile, tabeller og figurer er læselige i de enkelte slides. Ret manglerne inden levering.

Sammenlign det visuelle resultat med “Varianter – visuelt forslag”: Har slidesene samme rolige flader, tydelige typografiske hierarki, luft, farvepalette og store visuelle eksempler? Kontrollér også, at den valgte komposition fungerer for summeøvelser, AI-vejledning når relevant og opgaver med kriterier.

Gennemgå også materialet for gentagelser og opgaver, der ligger for tæt på gennemgangen: Hver anvendelsesopgave skal kræve en relevant tilpasning og kunne løses med kendte principper. Fjern overflødige forklaringer, og omskriv opgaver, som kan løses ved blot at kopiere det viste eksempel uændret. Kontrollér, at de synlige krav og det skjulte løsningsforslag følger samme variant.

Kontrollér til sidst hvert anvendt billede: Er brugsretten dokumenteret for offentliggørelse og de valgte bearbejdninger? Er ophav, kilde, licens eller tilladelsesgrundlag og ændringer angivet korrekt? Kan krediteringen findes både på websiden, i slideshowet og ved print/PDF? Fjern eller erstat billeder med uafklarede rettigheder inden levering.

## PROMPT SLUT

## Grundlag for dette udkast

Prompten er baseret på brugerens ønsker og en stikprøve af projektets materiale, herunder:

- `src/content/docs/javascript/filtrering.mdx`: spørgsmål inden den første forklaring, skift mellem forklaring og opgaver samt overførsel til eget projekt. Filen er markeret som draft.
- `src/content/docs/test/taenke-hoejt-test.mdx`: konkrete roller, tidsrammer, observationer og forbedring.
- `src/content/docs/ux/struktur-og-planlaegning-af-design.mdx`: læringsmål, gennemgående case, visuelle eksempler og forbindelsen til eget projekt.
- `src/content/docs/astro/figma/komponenter.mdx`: trinvis støtte og et konkret selvtjek af resultatet.
- `src/content/docs/css/grid.mdx` og `src/content/docs/astro/tema-9-get-static-paths.mdx`: korte faglige afsnit, eksempler og den fælles tekniske slidestruktur.
- `src/content/docs/guides/forbedringsforslag-materiale-draft.mdx`: eksisterende interne overvejelser om opgaver, progression, kriterier og placering af løsninger. Brugerens ønske om samtale før forklaring er prioriteret over denne ældre sides foreslåede rækkefølge.

Brugeren har præciseret, at den indledende aktivitet skal være en ren samtale på højst 5 minutter, som aktiverer de studerende på store hold. Et forløb varer typisk 15–45 minutter. Ønsket om opdeling ved længere emner er her fortolket som flere korte forløb/slidesæt. Brugeren ønsker flere illustrationer. Udkastet er tilpasset dette og er endnu ikke afprøvet på et nyt undervisningsforløb.

Brugeren har valgt konkrete greb fra de tre forløb:

- `src/content/docs/ux/struktur-og-planlaegning-af-design.mdx`: tabellerne.
- `src/content/docs/guides/layoutdiagrammer.mdx`: eksempler, der kan afprøves direkte, og løsninger, som er skjult som udgangspunkt. Den eksisterende side linker til en separat løsningsside med fungerende eksempler; foldbare bokse er også en mulighed i nye forløb.
- `src/content/docs/git/intro-til-github.mdx`: skærmbilleder og konkrete billeder med pile.

Brugeren ønsker desuden summe-slides, hvor grupperne taler om det problem, dagens undervisning skal løse, gerne med eksempler fra praksis. De tre forløb fungerer som referencer for de valgte greb; den nye skabelon kombinerer dem med summe-slides før forklaringen.

Brugeren har desuden oplevet unødige gentagelser og opgaver, der ligger for tæt på de gennemgåede eksempler. Opgaverne skal bruge samme faglige princip i en ændret situation, fx tre kolonner efter en gennemgang af to kolonner i CSS Grid. Prompten kræver derfor en fagligt relevant variation uden uvarslede nye krav samt en kontrol af gentagelser før levering.

Brugeren ønsker kun AI-vejledning, når den er fagligt relevant, og først efter den første summeøvelse og den korte opsamling. Hvis den medtages, skal en emnespecifik studieprompt og en kort opfølgning hjælpe med egne bud, ét spørgsmål ad gangen, små hints og feedback uden at give opgavens løsning. Den indledende gruppesamtale er fortsat uden AI. Dette erstatter det tidligere krav om et obligatorisk AI-slide først i forløbet.

Brugeren ønsker kun billeder, som må bruges på sitet, med tydelig angivelse af kilde og licens. Prompten kræver derfor kontrol af brugsrettigheder, synlige billedkrediteringer og en billedkildeliste. Billeder med uafklarede rettigheder skal udelades eller erstattes.

Brugeren har fastlagt forkundskaberne ud fra tema og draft-status: Alt fra tidligere temaer regnes som gennemgået, også drafts; fra det aktuelle tema regnes kun ikke-drafts som gennemgået. Senere temaer er ikke forkundskaber. Dette erstatter det tidligere krav om manuelt at angive, hvad de studerende har arbejdet med.

Brugeren har valgt udtrykket på `src/content/docs/astro/figma/varianter-visuelt-forslag.mdx` som primær visuel reference. Nye slides skal videreføre dets komposition, farver, store overskrifter, luft og visuelle eksempler, samtidig med at de følger promptens pædagogiske struktur og regler om billedrettigheder.
