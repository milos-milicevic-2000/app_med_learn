MED.register({
  id: 'lokomotorni',
  title: 'Mišićno-koštani sistem i bol',
  icon: '🦴',
  color: '#8E8C99',
  topics: [
    {
      id: 'lumbalni-bol',
      title: 'Lumbalni bol i lumboishijalgija',
      summary: 'Isključi crvene zastavice (cauda equina!), ne snimaj rutinski, savetuj kretanje i kratko NSAIL u najnižoj efikasnoj dozi.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina lumbalnog bola je nespecifična i popravlja se za nekoliko nedelja; išijas obično prolazi za nekoliko nedelja do nekoliko meseci. Uloga izabranog lekara je da isključi ozbiljan uzrok, ohrabri pacijenta da ostane aktivan i izbegne nepotrebno snimanje i lekove bez dokazane koristi. **Sindrom caudae equinae** je hirurška hitnost.' },
        { type: 'flags', title: 'Crvene zastavice', items: [
          '**Cauda equina**: utrnulost oko genitalija ili anusa, otežan početak mokrenja, retencija ili inkontinencija urina, nekontrolisana stolica',
          'Slabost ili utrnulost u obe noge, teška ili u pogoršanju',
          'Malignitet u anamnezi, neobjašnjiv gubitak telesne mase, bol koji ne popušta u miru i noću',
          'Temperatura, imunosupresija, intravenska upotreba droga (infekcija kičme)',
          'Značajna trauma, osteoporoza ili dugotrajna terapija kortikosteroidima (prelom)',
          'Pulsirajuća masa u trbuhu ili kolaps kod starijeg pacijenta (aneurizma aorte)',
          'Mlađa osoba sa jutarnjom ukočenošću koja popušta pri kretanju (zapaljenski bol)'
        ] },
        { type: 'list', title: 'Pregled', items: [
          'Hod na prstima i petama, Lazarevićev (Lasegov) znak, mišićna snaga, refleksi i senzibilitet po dermatomima.',
          'L4: slabiji patelarni refleks, slabost ekstenzije kolena.',
          'L5: slabost dorzifleksije stopala i palca, utrnulost dorzuma stopala.',
          'S1: slabiji Ahilov refleks, slabost plantarne fleksije, utrnulost spoljne ivice stopala.',
          'Uvek pitaj za mokrenje, stolicu i senzibilitet perineuma.',
          'Procena rizika hroniciteta: upitnik STarT Back pri prvom kontaktu.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Isključi crvene zastavice; ako postoje — hitno upućivanje, bez čekanja na snimanje u ambulanti.',
          'Bez crvenih zastavica: **ne snimati rutinski**; snimanje se radi u specijalističkoj ustanovi i samo ako će nalaz promeniti lečenje.',
          'Objasni prirodu tegoba i savetuj nastavak uobičajenih aktivnosti i rada koliko je moguće.',
          'Analgezija: oralni NSAIL u najnižoj efikasnoj dozi i najkraće moguće, uz procenu gastrointestinalnog, kardiovaskularnog i bubrežnog rizika i gastroprotekciju.',
          'Ako je NSAIL kontraindikovan, ne podnosi se ili ne deluje: slab opioid (sa paracetamolom ili bez njega), samo za akutni bol i kratko.',
          'Vežbe (grupni program) kod epizode ili pogoršanja; manuelna terapija samo kao deo paketa koji uključuje vežbe.',
          'Išijas koji ne popušta na konzervativno lečenje: upućivanje radi procene za epiduralnu injekciju ili dekompresiju.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Najkraće moguće; uz inhibitor protonske pumpe kod povišenog gastrointestinalnog rizika' },
          { name: 'diklofenak', dose: '75–150 mg dnevno p.o., podeljeno u 2–3 doze', note: 'Kontraindikovan kod ishemijske bolesti srca, cerebrovaskularne bolesti, periferne arterijske bolesti i srčane insuficijencije NYHA II–IV' },
          { name: 'tramadol', dose: '50 mg p.o. 3–4× dnevno, kratkotrajno', note: 'Samo ako NSAIL nije moguć ili nije delovao; ne za hronični lumbalni bol' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na sindrom caudae equinae — odmah, SHMP ili hitan prijem (hitna magnetna rezonanca i neurohirurg).',
          'Teška ili progresivna slabost u nogama — hitno.',
          'Sumnja na malignitet, infekciju ili prelom — hitna obrada.',
          'Akutni, jak išijas koji ne popušta — fizijatar ili neurohirurg radi dalje procene.',
          'Sumnja na zapaljenski bol u leđima — reumatolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Sam paracetamol se ne preporučuje za lumbalni bol.',
          'Za išijas se ne daju gabapentinoidi, drugi antiepileptici, oralni kortikosteroidi ni benzodiazepini: nema koristi, a ima štete.',
          'Opioidi se ne daju za hronični lumbalni bol ni hronični išijas.',
          'Antidepresivi (SSRI, SNRI, triciklični) se ne preporučuju za lečenje lumbalnog bola.',
          'Kod NSAIL za išijas korist je ograničena, a rizik realan — koristi ih kratko.'
        ] }
      ],
      sources: [
        { name: 'NICE NG59 – Low back pain and sciatica in over 16s', url: 'https://www.nice.org.uk/guidance/ng59/chapter/Recommendations' },
        { name: 'NHS – Sciatica', url: 'https://www.nhs.uk/conditions/sciatica/' },
        { name: 'EMA – Diclofenac-containing medicines (kardiovaskularni rizik)', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/diclofenac-containing-medicines' }
      ],
      questions: [
        {
          q: 'Muškarac, 42 god., ima bol u krstima sa širenjem niz zadnju stranu leve noge pet dana, posle podizanja tereta. Snaga i refleksi su uredni, mokri normalno, nema utrnulosti perineuma. Šta je ispravno?',
          options: ['Hitna magnetna rezonanca', 'Rendgen lumbalne kičme i strogo mirovanje', 'Savet da ostane aktivan, NSAIL kratko i kontrola; bez snimanja', 'Pregabalin i diazepam uveče'],
          answer: 2,
          explain: 'Bez crvenih zastavica snimanje se ne radi rutinski, a pacijenta treba ohrabriti da ostane aktivan. Gabapentinoidi i benzodiazepini se za išijas ne preporučuju.'
        },
        {
          q: 'Žena, 51 god., sa lumboishijalgijom javlja se jer od jutros otežano počinje mokrenje i oseća utrnulost oko anusa i genitalija. Šta uraditi?',
          options: ['Odmah uputiti u bolnicu zbog sumnje na sindrom caudae equinae', 'Pojačati analgeziju i kontrolisati za tri dana', 'Zakazati ambulantnu magnetnu rezonancu', 'Uput fizijatru i urinokultura'],
          answer: 0,
          explain: 'Poremećaj mokrenja i utrnulost perineuma uz bol u leđima znače sindrom caudae equinae dok se ne dokaže suprotno. Potrebno je hitno bolničko zbrinjavanje, jer odlaganje ostavlja trajne posledice.'
        },
        {
          q: 'Pacijent sa akutnim nespecifičnim lumbalnim bolom pita da li da uzima samo paracetamol. Šta odgovoriti?',
          options: ['Da, paracetamol je prvi izbor', 'Da, u kombinaciji sa diazepamom', 'Ne, bolje je odmah uvesti jak opioid', 'Sam paracetamol se ne preporučuje; ako nema kontraindikacija, kratko NSAIL u najnižoj efikasnoj dozi'],
          answer: 3,
          explain: 'Smernice ne preporučuju paracetamol kao monoterapiju za lumbalni bol. NSAIL se daju kratko, uz procenu rizika; slabi opioidi dolaze u obzir samo ako NSAIL nije moguć.'
        },
        {
          q: 'Muškarac, 68 god., lečen od karcinoma prostate, ima bol u lumbalnoj kičmi šest nedelja koji je najjači noću i ne popušta u miru. Šta je ispravno?',
          options: ['Fizikalna terapija i NSAIL', 'Hitna obrada zbog sumnje na metastaze', 'Vežbe i kontrola za tri meseca', 'Miorelaksans i mirovanje'],
          answer: 1,
          explain: 'Malignitet u anamnezi i noćni bol koji ne popušta u miru su crvene zastavice. Potrebna je hitna dijagnostika, a ne simptomatsko lečenje.'
        }
      ]
    },
    {
      id: 'vrat-rame',
      title: 'Bol u vratu i ramenu',
      summary: 'Većina je mehanička i prolazi uz kretanje i vežbe; isključi povredu kičme, neurološki ispad i preneseni bol iz grudnog koša.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Bol u vratu najčešće traje nekoliko nedelja i prolazi uz održavanje pokretljivosti. Bol u ramenu se popravlja sporije — oporavak može trajati šest meseci i duže, a smrznuto rame mesecima, pa i godinama. Zadatak je isključiti povredu vratne kičme, kompresiju nervnih struktura i preneseni bol (srce, pluća, žučna kesa).' },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Povreda vrata sa faktorima visokog rizika: 65 godina ili više, opasan mehanizam povrede (pad sa visine veće od 1 metra ili 5 stepenika, aksijalno opterećenje glave, saobraćajna nezgoda pri velikoj brzini), parestezije u udovima',
          'Nespretnost šaka, poremećaj hoda, slabost u nogama, poremećaj mokrenja (mijelopatija)',
          'Progresivna slabost ili utrnulost ruke',
          'Bol u vratu sa trncima ili hladnom rukom',
          'Bol u ramenu ili ruci uz bol u grudima, otežano disanje ili preznojavanje (akutni koronarni sindrom)',
          'Temperatura, ukočen vrat i glavobolja; malignitet u anamnezi, noćni bol, gubitak telesne mase',
          'Rame posle povrede: deformitet, nemogućnost pokreta, iznenadan jak bol'
        ] },
        { type: 'list', title: 'Pregled i najčešći uzroci', items: [
          '**Mehanički bol u vratu**: bol i ukočenost, bolna paravertebralna muskulatura, uredan neurološki nalaz.',
          '**Cervikalna radikulopatija**: bol koji se širi niz ruku uz trnce; C6 palac i bicepsov refleks, C7 srednji prst i tricepsov refleks.',
          '**Bol iz rotatorne manžetne (subakromijalni bol)**: bol pri podizanju ruke, bolan luk pri abdukciji, noćni bol pri ležanju na ramenu.',
          '**Smrznuto rame**: bol i ukočenost, ograničeni i aktivni i pasivni pokreti, naročito spoljna rotacija; češće kod dijabetičara.',
          '**Ruptura rotatorne manžetne**: slabost posle povrede ili pada, naročito kod starijih od 40 godina.',
          'Preneseni bol: srce, pleura i vrh pluća, dijafragma, žučna kesa.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Kod povrede vrata proceni rizik po Kanadskom pravilu za vratnu kičmu; pri visokom riziku imobilizacija i transport radi snimanja.',
          'Isključi crvene zastavice i preneseni bol; kod sumnje na srčani uzrok EKG.',
          'Bez crvenih zastavica: objasni prirodu tegoba, savetuj da ostane aktivan i da ne štedi vrat ili rame duže nego što je neophodno.',
          'Analgezija: paracetamol ili kratko NSAIL; toplota ili hladne obloge.',
          'Vežbe za rame sprovoditi 6–8 nedelja da se bol ne vrati; fizikalna terapija ako tegobe traju.',
          'Smrznuto rame: analgezija, vežbe i fizikalna terapija; dolazi u obzir kortikosteroidna injekcija.',
          'Kontrola: bol u vratu koji ne prolazi posle nekoliko nedelja ili bol u ramenu bez poboljšanja posle 2 nedelje — ponovna procena.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'paracetamol', dose: '500–1000 mg p.o., razmak najmanje 4 h, najviše 4 g dnevno', note: 'Prvi izbor za blaži bol' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Kratkotrajno; proveri gastrointestinalni, kardiovaskularni i bubrežni rizik' },
          { name: 'diklofenak gel', dose: 'lokalno 2–4× dnevno, zavisno od jačine preparata', note: 'Manje sistemskih neželjenih dejstava od oralnih NSAIL' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Povreda vrata sa visokim rizikom ili neurološkim ispadom — hitno, uz imobilizaciju.',
          'Znaci mijelopatije ili progresivan neurološki deficit — hitno neurohirurgu ili neurologu.',
          'Sumnja na akutni koronarni sindrom — SHMP.',
          'Sumnja na rupturu rotatorne manžetne posle povrede, luksaciju ili prelom — ortoped.',
          'Bol u ramenu ili vratu bez odgovora na konzervativno lečenje — fizijatar.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Bol u levom ramenu ili ruci bez bolne osetljivosti i bez veze sa pokretom je srčani dok se ne dokaže suprotno.',
          'Ograničen pasivni pokret razlikuje smrznuto rame od bola iz rotatorne manžetne.',
          'Meki okovratnik i dugo mirovanje usporavaju oporavak kod mehaničkog bola u vratu.',
          'Kod pacijenta koji nije u opasnosti snimanje retko menja lečenje.'
        ] }
      ],
      sources: [
        { name: 'NICE NG41 – Spinal injury: assessment and initial management', url: 'https://www.nice.org.uk/guidance/ng41/chapter/Recommendations' },
        { name: 'NHS – Shoulder pain', url: 'https://www.nhs.uk/conditions/shoulder-pain/' },
        { name: 'NHS – Neck pain', url: 'https://www.nhs.uk/conditions/neck-pain-and-stiff-neck/' }
      ],
      questions: [
        {
          q: 'Žena, 54 god., sa dijabetesom, tri meseca ima bol u desnom ramenu i sve teže se češlja. I aktivna i pasivna spoljna rotacija su izrazito ograničene. Bez povrede. Šta je najverovatnije?',
          options: ['Ruptura rotatorne manžetne', 'Smrznuto rame', 'Cervikalna radikulopatija C6', 'Preneseni bol iz žučne kese'],
          answer: 1,
          explain: 'Ograničenje i aktivnih i pasivnih pokreta, naročito spoljne rotacije, tipično je za smrznuto rame, koje je češće kod dijabetičara. Leči se analgezijom, vežbama i fizikalnom terapijom, a oporavak traje mesecima.'
        },
        {
          q: 'Muškarac, 59 god., pušač, žali se na bol u levom ramenu koji se javlja pri hodu uzbrdo i prestaje u miru. Pokreti ramena su puni i bezbolni. Šta je sledeći korak?',
          options: ['NSAIL i vežbe za rame', 'Rendgen ramena', 'EKG i obrada zbog sumnje na anginu pektoris', 'Kortikosteroidna injekcija u rame'],
          answer: 2,
          explain: 'Bol vezan za napor, uz bezbolne pokrete ramena, upućuje na preneseni bol srčanog porekla. Lečenje ramena bi odložilo dijagnozu koronarne bolesti.'
        },
        {
          q: 'Žena, 70 god., pala je niz stepenice i žali se na bol u vratu i trnjenje u obe šake. Pri svesti je, hemodinamski stabilna. Šta je ispravno?',
          options: ['Analgetik i meki okovratnik, kontrola sutra', 'Zatražiti da okrene glavu levo i desno radi procene pokretljivosti', 'Rendgen vratne kičme u domu zdravlja narednog dana', 'Imobilizacija vratne kičme i transport radi snimanja'],
          answer: 3,
          explain: 'Uzrast od 65 godina ili više, pad niz stepenice i parestezije u udovima su faktori visokog rizika po Kanadskom pravilu. Vrat se imobiliše i pacijentkinja transportuje radi snimanja, bez ispitivanja pokretljivosti.'
        },
        {
          q: 'Muškarac, 35 god., kancelarijski radnik, ima bol i ukočenost vrata četiri dana, bez širenja u ruke i bez neurološkog ispada. Šta savetovati?',
          options: ['Nastaviti sa uobičajenim aktivnostima uz analgetik po potrebi', 'Meki okovratnik tri nedelje', 'Magnetnu rezonancu vratne kičme', 'Strogo mirovanje u postelji'],
          answer: 0,
          explain: 'Mehanički bol u vratu najčešće prolazi za nekoliko nedelja uz održavanje pokretljivosti. Imobilizacija i mirovanje usporavaju oporavak, a snimanje bez crvenih zastavica nije potrebno.'
        }
      ]
    },
    {
      id: 'osteoartritis',
      title: 'Osteoartritis kolena i kuka',
      summary: 'Dijagnoza je klinička, bez snimanja; osnova lečenja su vežbe i smanjenje telesne mase, a lekovi su samo dopuna.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Osteoartritis se dijagnostikuje **klinički, bez snimanja**: osoba od 45 godina ili starija, bol u zglobu vezan za aktivnost i jutarnja ukočenost koje nema ili ne traje duže od 30 minuta. Osnova lečenja su terapijske vežbe i regulacija telesne mase; lekovi služe da olakšaju vežbanje i svakodnevne aktivnosti.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Bol pri opterećenju koji popušta u miru; kratkotrajna jutarnja ukočenost (do 30 minuta).',
          'Koleno: krepitacije, koštana zadebljanja, ograničena fleksija, manji izliv.',
          'Kuk: bol u preponi, ograničena i bolna unutrašnja rotacija, šepanje.',
          'Snimanje se ne radi rutinski; indikovano je kod atipične slike ili sumnje na drugu dijagnozu.'
        ] },
        { type: 'flags', title: 'Crvene zastavice — nije običan osteoartritis', items: [
          'Vruć, crven, otečen zglob, naročito uz temperaturu (septični artritis, giht)',
          'Jutarnja ukočenost duža od 30 minuta i otoci više zglobova (zapaljenski artritis)',
          'Naglo pogoršanje, bol u miru i noću',
          'Skorašnja povreda, nemogućnost oslonca',
          'Stariji pacijent posle pada sa bolom u preponi i nemogućnošću oslonca (prelom kuka)',
          'Gubitak telesne mase, malignitet u anamnezi'
        ] },
        { type: 'steps', title: 'Lečenje', items: [
          'Objasni dijagnozu: postavlja se klinički, a osnova lečenja su vežbe i regulacija telesne mase.',
          '**Terapijske vežbe** za sve (jačanje lokalne muskulature, opšta aerobna kondicija); upozori da bol na početku može biti jači, ali da redovno vežbanje donosi korist.',
          'Gojazni i osobe sa prekomernom telesnom masom: svaki gubitak koristi, a gubitak od 10% je bolji od 5%.',
          'Pomagala: štap za hodanje kod osteoartritisa donjih ekstremiteta.',
          'Lekovi: lokalni NSAIL za koleno; ako ne pomaže, oralni NSAIL u najnižoj efikasnoj dozi, najkraće, uz inhibitor protonske pumpe.',
          'Intraartikularni kortikosteroid ako drugi lekovi ne pomažu ili radi podrške vežbanju; olakšanje je kratkotrajno (2–10 nedelja).',
          'Kada tegobe bitno narušavaju kvalitet života uprkos lečenju: uput ortopedu radi zamene zgloba.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'diklofenak gel (lokalni NSAIL)', dose: 'lokalno 2–4× dnevno, zavisno od jačine preparata', note: 'Prvi izbor za osteoartritis kolena' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Kada lokalna terapija nije dovoljna; uvek uz inhibitor protonske pumpe' },
          { name: 'omeprazol', dose: '20 mg p.o. 1× dnevno dok traje terapija NSAIL', note: 'Gastroprotekcija' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na septični artritis — hitno, isti dan.',
          'Sumnja na prelom kuka — hitno, SHMP.',
          'Sumnja na zapaljenski artritis — reumatolog.',
          'Tegobe koje bitno utiču na kvalitet života uprkos konzervativnom lečenju — ortoped radi artroplastike.',
          'Potreba za programom vežbi pod nadzorom — fizijatar.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Paracetamol i slabi opioidi se ne daju rutinski: samo povremeno i kratko, kada su drugi lekovi kontraindikovani ili ne deluju.',
          'Glukozamin, jaki opioidi i intraartikularni hijaluronat se ne preporučuju.',
          'Uzrast, pol, pušenje, komorbiditeti i gojaznost nisu razlog da se pacijent ne uputi na zamenu zgloba.',
          'Rendgenski nalaz slabo korelira sa tegobama — leči pacijenta, ne snimak.'
        ] }
      ],
      sources: [
        { name: 'NICE NG226 – Osteoarthritis in over 16s', url: 'https://www.nice.org.uk/guidance/ng226/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 63 god., BMI 32, godinu dana ima bol u oba kolena pri hodu i silasku niz stepenice. Jutarnja ukočenost traje 10 minuta, kolena nisu topla ni otečena. Šta je potrebno za dijagnozu?',
          options: ['Klinička slika je dovoljna; snimanje nije potrebno', 'Rendgen oba kolena u stojećem stavu', 'Magnetna rezonanca kolena', 'Reumatoidni faktor i anti-CCP'],
          answer: 0,
          explain: 'Kod osobe od 45 godina ili starije sa bolom vezanim za aktivnost i ukočenošću do 30 minuta dijagnoza osteoartritisa je klinička. Snimanje se radi samo kod atipične slike.'
        },
        {
          q: 'Kod iste pacijentkinje, šta je osnova lečenja?',
          options: ['Paracetamol redovno četiri puta dnevno', 'Glukozamin i hijaluronat intraartikularno', 'Mirovanje i izbegavanje stepenica', 'Terapijske vežbe i smanjenje telesne mase, uz lokalni NSAIL'],
          answer: 3,
          explain: 'Vežbe i regulacija telesne mase su osnovno lečenje za sve pacijente. Lokalni NSAIL je prvi lek za koleno; glukozamin i hijaluronat se ne preporučuju, a paracetamol se ne daje rutinski.'
        },
        {
          q: 'Muškarac, 70 god., sa osteoartritisom kolena uzima ibuprofen već mesec dana jer mu gel nije pomogao. Uzima i acetilsalicilnu kiselinu 100 mg. Šta nedostaje u terapiji?',
          options: ['Drugi NSAIL radi boljeg efekta', 'Inhibitor protonske pumpe', 'Antacid po potrebi', 'Tramadol umesto ibuprofena, trajno'],
          answer: 1,
          explain: 'Uz oralni NSAIL kod osteoartritisa treba dati gastroprotekciju inhibitorom protonske pumpe, a terapiju redovno preispitivati. Kombinovanje dva NSAIL povećava rizik bez koristi.'
        },
        {
          q: 'Žena, 81 god., sa poznatim osteoartritisom kuka pala je u kupatilu. Ima jak bol u preponi i ne može da se osloni na nogu. Šta je ispravno?',
          options: ['Pojačati analgeziju i zakazati kontrolu', 'Kortikosteroidna injekcija u kuk', 'Hitan transport zbog sumnje na prelom kuka', 'Fizikalna terapija'],
          answer: 2,
          explain: 'Bol u preponi i nemogućnost oslonca posle pada kod starije osobe znače prelom kuka dok se ne dokaže suprotno. Pripisivanje tegoba poznatom osteoartritisu je opasna greška.'
        }
      ]
    },
    {
      id: 'artritis',
      title: 'Zapaljenski artritisi: reumatoidni artritis, giht, septični artritis',
      summary: 'Perzistentni sinovitis malih zglobova uputi reumatologu hitno i bez čekanja nalaza; vruć otečen zglob je septični artritis dok se ne isključi.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Rano započeto lečenje reumatoidnog artritisa sprečava trajna oštećenja zglobova: cilj je uvođenje leka koji modifikuje bolest što pre, idealno u roku od 3 meseca od početka trajnih simptoma. Izabrani lekar zato treba da prepozna sinovitis i uputi pacijenta **ne čekajući laboratorijske nalaze**. Akutno vruć, crven i otečen zglob zahteva da se pre svega isključi septični artritis.' },
        { type: 'list', title: 'Kada posumnjati na zapaljenski artritis', items: [
          'Otok zgloba koji nije posledica povrede i traje (perzistentni sinovitis).',
          'Jutarnja ukočenost duža od 30 minuta, koja popušta pri razgibavanju.',
          'Zahvaćeni mali zglobovi šaka i stopala, često simetrično; bol na poprečni pritisak preko metakarpofalangealnih ili metatarzofalangealnih zglobova.',
          'Umor, opšta slabost; povišeni markeri zapaljenja mogu, ali ne moraju biti prisutni.',
          'Psorijaza, zapaljenska bolest creva ili uveitis upućuju na spondiloartritise.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Vruć, crven, otečen i veoma bolan zglob, naročito uz temperaturu — septični artritis',
          'Zglob sa protezom, imunosupresija, dijabetes ili skorašnja intervencija na zglobu',
          'Stariji od 50 godina sa novom glavoboljom, bolom u vilici pri žvakanju ili poremećajem vida uz bol i ukočenost ramena (gigantocelularni arteritis)',
          'Artritis uz osip, temperaturu ili zahvaćenost drugih organa'
        ] },
        { type: 'steps', title: 'Postupak kod sumnje na reumatoidni artritis', items: [
          'Pregledaj zglobove: otok, toplota, bolna osetljivost, obim pokreta.',
          'Uputi reumatologu svakog sa perzistentnim sinovitisom nejasnog uzroka.',
          '**Hitno** uputi ako su zahvaćeni mali zglobovi šaka ili stopala, ako je zahvaćeno više od jednog zgloba ili ako je od početka tegoba do javljanja prošlo 3 meseca ili više — i uz uredne markere zapaljenja, negativan reumatoidni faktor i anti-CCP.',
          'Analize koje možeš zatražiti: reumatoidni faktor, anti-CCP ako je faktor negativan, rendgen šaka i stopala — ali one ne smeju odložiti upućivanje.',
          'Do pregleda: NSAIL u najnižoj efikasnoj dozi uz gastroprotekciju.',
          'Pacijent na metotreksatu: proveravaj krvnu sliku i funkciju jetre i bubrega prema preporuci reumatologa.'
        ] },
        { type: 'list', title: 'Giht', items: [
          'Posumnjaj kod naglo nastalog bola, crvenila i otoka zgloba (najčešće osnova palca stopala) ili kod tofusa.',
          'Potvrda: urat u serumu 360 µmol/l ili više; ako je tokom napada niži, a sumnja velika, ponovi merenje najmanje 2 nedelje posle smirivanja napada.',
          'Napad: NSAIL, kolhicin ili kratka kura oralnog kortikosteroida, prema komorbiditetima; uz NSAIL razmotri inhibitor protonske pumpe.',
          'Terapija za snižavanje urata (alopurinol ili febuksostat): započeti najmanje 2–4 nedelje posle smirivanja napada; ciljni urat ispod 360 µmol/l.',
          'Niži cilj (ispod 300 µmol/l) kod tofusa, hroničnog gihtičnog artritisa ili čestih napada uprkos uratu ispod 360 µmol/l.',
          'Kod značajne kardiovaskularne bolesti prvi izbor je alopurinol. Tokom titracije ponuditi kolhicin radi sprečavanja napada.'
        ] },
        { type: 'drugs', title: 'Lekovi koje izabrani lekar prati', items: [
          { name: 'metotreksat', dose: 'p.o. ili s.c. **jednom nedeljno**; početna doza obično 7,5 mg nedeljno, uz postepeno povećanje', note: 'Uvodi i titrira reumatolog. Uvek isti dan u nedelji; svakodnevno uzimanje je opasna greška' },
          { name: 'folna kiselina', dose: '5 mg p.o. jednom nedeljno, drugog dana u odnosu na metotreksat', note: 'Smanjuje neželjena dejstva metotreksata' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Simptomatski do pregleda reumatologa; uz inhibitor protonske pumpe' },
          { name: 'alopurinol', dose: 'p.o. 1× dnevno, početi niskom dozom i titrirati do ciljnog urata', note: 'Doza prema sažetku karakteristika leka i bubrežnoj funkciji' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na septični artritis — odmah u bolnicu (punkcija zgloba pre antibiotika).',
          'Sumnja na gigantocelularni arteritis — hitno, isti dan.',
          'Perzistentni sinovitis — reumatolog; hitno kod zahvaćenosti malih zglobova, više zglobova ili trajanja od 3 meseca i duže.',
          'Giht koji ne reaguje na terapiju ili je dijagnoza nesigurna — reumatolog.',
          'Pacijent na metotreksatu sa temperaturom, kašljem, ranicama u ustima ili modricama — hitna krvna slika i kontakt sa reumatologom.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Negativan reumatoidni faktor i uredna sedimentacija ne isključuju reumatoidni artritis.',
          'Uz metotreksat ne propisuj trimetoprim ni trimetoprim-sulfametoksazol; proveri i NSAIL koje pacijent uzima.',
          'Normalan urat tokom napada ne isključuje giht.',
          'Akutni monoartritis sa temperaturom je septični artritis dok punkcija ne pokaže drugačije — i kod pacijenta sa poznatim gihtom.'
        ] }
      ],
      sources: [
        { name: 'NICE NG100 – Rheumatoid arthritis in adults', url: 'https://www.nice.org.uk/guidance/ng100/chapter/Recommendations' },
        { name: 'NICE NG219 – Gout: diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng219/chapter/Recommendations' },
        { name: 'NHS – Methotrexate', url: 'https://www.nhs.uk/medicines/methotrexate/how-and-when-to-take-methotrexate/' }
      ],
      questions: [
        {
          q: 'Žena, 39 god., dva meseca ima otok i bol u zglobovima obe šake i jutarnju ukočenost koja traje više od sat vremena. Sedimentacija i CRP su uredni, reumatoidni faktor negativan. Šta je ispravno?',
          options: ['Uredni nalazi isključuju reumatoidni artritis; dati NSAIL', 'Ponoviti analize za tri meseca', 'Hitno uputiti reumatologu', 'Započeti prednizon i kontrolisati za mesec dana'],
          answer: 2,
          explain: 'Perzistentni sinovitis malih zglobova šaka upućuje se hitno, i uz uredne markere zapaljenja i negativan reumatoidni faktor. Rano uvođenje leka koji modifikuje bolest sprečava oštećenje zglobova.'
        },
        {
          q: 'Muškarac, 67 god., sa dijabetesom, ima od juče otečeno, crveno, vruće i izrazito bolno desno koleno i temperaturu 38,6 °C. Šta uraditi?',
          options: ['Odmah uputiti u bolnicu zbog sumnje na septični artritis', 'NSAIL i kontrola za tri dana', 'Kolhicin, jer je verovatno giht', 'Oralni antibiotik i mirovanje'],
          answer: 0,
          explain: 'Vruć, otečen zglob uz temperaturu je septični artritis dok se ne dokaže suprotno i zahteva hitno upućivanje. Antibiotik pre punkcije otežava dijagnozu, a odlaganje uništava zglob.'
        },
        {
          q: 'Pacijent je imao prvi napad gihta koji se smirio. Urat je 480 µmol/l. Kada započeti alopurinol i koji je cilj?',
          options: ['Odmah tokom napada, do urata ispod 500 µmol/l', 'Tek posle trećeg napada, bez ciljne vrednosti', 'Samo ako se pojave tofusi', 'Najmanje 2–4 nedelje posle smirivanja napada, do urata ispod 360 µmol/l'],
          answer: 3,
          explain: 'Terapija za snižavanje urata započinje se najmanje 2–4 nedelje posle smirivanja napada i titrira do urata ispod 360 µmol/l. Tokom titracije nudi se kolhicin radi sprečavanja napada.'
        },
        {
          q: 'Pacijentkinji na metotreksatu farmaceut je izdao lek uz uputstvo da uzima jednu tabletu dnevno. Šta je ispravno?',
          options: ['To je uobičajeno doziranje', 'Metotreksat se u reumatoidnom artritisu uzima jednom nedeljno; odmah ispraviti i proveriti krvnu sliku', 'Dozu treba podeliti u dve dnevne doze', 'Dodati folnu kiselinu svakog dana i nastaviti'],
          answer: 1,
          explain: 'Metotreksat se za zapaljenske bolesti uzima jednom nedeljno, uvek istog dana. Svakodnevno uzimanje može dovesti do teške supresije koštane srži.'
        }
      ]
    },
    {
      id: 'povrede',
      title: 'Uganuća, istegnuća i sitne povrede',
      summary: 'Otavska pravila odlučuju o snimanju skočnog zgloba, stopala i kolena; uganuće se leči zaštitom, pa ranim postepenim opterećenjem.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina uganuća i istegnuća se popravi za oko 2 nedelje, a naporne aktivnosti poput trčanja treba izbegavati do 8 nedelja. Zadatak u ambulanti je isključiti prelom i povrede koje se lako previde, a zatim pacijenta usmeriti ka aktivnom oporavku. **Otavska pravila** smanjuju broj nepotrebnih snimanja uz visoku osetljivost za prelome.' },
        { type: 'list', title: 'Otavska pravila za skočni zglob i stopalo', items: [
          '**Rendgen skočnog zgloba** ako postoji bol u predelu maleolusa i bar jedno od sledećeg:',
          'bolna osetljivost kosti duž zadnje ivice distalnih 6 cm ili na vrhu lateralnog ili medijalnog maleolusa;',
          'nemogućnost oslonca neposredno posle povrede i nemogućnost da se načine četiri koraka pri pregledu.',
          '**Rendgen stopala** ako postoji bol u srednjem delu stopala i bar jedno od sledećeg:',
          'bolna osetljivost baze pete metatarzalne kosti ili navikularne kosti;',
          'nemogućnost oslonca neposredno posle povrede i nemogućnost da se načine četiri koraka pri pregledu.'
        ] },
        { type: 'list', title: 'Otavsko pravilo za koleno', items: [
          'Rendgen kolena posle povrede ako postoji bar jedno od sledećeg:',
          'uzrast 55 godina ili više;',
          'izolovana bolna osetljivost patele;',
          'bolna osetljivost glave fibule;',
          'nemogućnost fleksije kolena do 90 stepeni;',
          'nemogućnost oslonca neposredno posle povrede i nemogućnost da se načine četiri koraka pri pregledu.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Deformitet, nestabilnost zgloba ili otvorena rana nad zglobom',
          'Hladan, bled ili utrnuo ekstremitet distalno od povrede (neurovaskularna ugroženost)',
          'Bol nesrazmeran nalazu i bol pri pasivnom istezanju mišića (kompartment sindrom)',
          'Bolna osetljivost u anatomskoj burmutici posle pada na ispruženu šaku (prelom skafoidne kosti)',
          'Osećaj udarca u list i nemogućnost stajanja na prstima (ruptura Ahilove tetive)',
          'Brz, veliki otok kolena posle uvrtanja uz osećaj pucanja (povreda prednje ukrštene veze, hemartroza)'
        ] },
        { type: 'steps', title: 'Postupak kod uganuća', items: [
          'Proveri neurovaskularni status distalno od povrede i primeni Otavska pravila.',
          'Prva 2–3 dana (**PRICE**): zaštita, odmor, led do 20 minuta na svaka 2–3 sata (preko tkanine), kompresivni zavoj, elevacija.',
          'Noviji pristup **PEACE i LOVE**: zaštita, elevacija, izbegavanje antiinflamatornih lekova u prvoj fazi, kompresija, edukacija; zatim opterećenje, optimizam, aerobna aktivnost (vaskularizacija) i vežbe.',
          'Analgezija: prvo paracetamol; lokalni NSAIL gel na mesto povrede; oralni ibuprofen po potrebi.',
          'Posle prvih dana postepeno vraćanje pokreta i opterećenja; dugo mirovanje usporava oporavak.',
          'Rana ili oguljotina: toaleta rane i provera vakcinalnog statusa protiv tetanusa.',
          'Kontrola ako nema poboljšanja, ako se zglob i dalje ne može opteretiti ili se javi nestabilnost.'
        ] },
        { type: 'drugs', title: 'Analgezija', items: [
          { name: 'paracetamol', dose: '500–1000 mg p.o., razmak najmanje 4 h, najviše 4 g dnevno', note: 'Prvi izbor' },
          { name: 'ibuprofen gel', dose: 'lokalno 3–4× dnevno, prema uputstvu za preparat', note: 'Za smanjenje otoka i bola' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Po potrebi, kratkotrajno' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Pozitivna Otavska pravila — rendgen; potvrđen prelom ili luksacija — ortoped.',
          'Neurovaskularna ugroženost ili sumnja na kompartment sindrom — hitno u bolnicu.',
          'Sumnja na prelom skafoidne kosti i uz uredan prvi snimak — imobilizacija i ortoped.',
          'Sumnja na rupturu Ahilove tetive ili povredu ligamenata kolena sa nestabilnošću — ortoped.',
          'Otvorena povreda zgloba, duboka ili kontaminirana rana — hirurg.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Otavska pravila važe samo ako se pacijent može pouzdano pregledati (bez intoksikacije, poremećaja svesti i gubitka senzibiliteta).',
          'Pacijent koji je hodao posle povrede i dalje može imati prelom — uvek palpiraj koštane tačke.',
          'Kriterijum oslonca je najmanje specifičan: sam po sebi često dovodi do nepotrebnog snimanja.',
          'Uredan prvi snimak ne isključuje prelom skafoidne kosti.'
        ] }
      ],
      sources: [
        { name: 'Accuracy of Ottawa ankle rules for midfoot and ankle injuries (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8477123/' },
        { name: 'Diagnostic accuracy of Ottawa Knee Rule – sistematski pregled (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10197917/' },
        { name: 'NHS – Sprains and strains', url: 'https://www.nhs.uk/conditions/sprains-and-strains/' }
      ],
      questions: [
        {
          q: 'Devojka, 24 god., uganula je skočni zglob pri trčanju. Otok je ispred lateralnog maleolusa, nema bolne osetljivosti kosti na zadnjoj ivici ni na vrhu maleolusa, niti na bazi pete metatarzalne i navikularnoj kosti. Hoda uz bol. Da li je potreban rendgen?',
          options: ['Da, uvek posle uganuća', 'Da, jer ima otok', 'Ne, ali je potrebna magnetna rezonanca', 'Ne; Otavska pravila su negativna'],
          answer: 3,
          explain: 'Bez bolne osetljivosti kosti na propisanim tačkama i uz očuvan oslonac rendgen nije potreban. Otok mekih tkiva nije kriterijum za snimanje.'
        },
        {
          q: 'Muškarac, 58 god., udario je koleno pri padu. Može da hoda, savija koleno preko 90 stepeni, nema bolne osetljivosti patele ni glave fibule. Da li je potreban rendgen kolena?',
          options: ['Ne, jer hoda', 'Da, zbog uzrasta od 55 godina ili više', 'Ne, jer je fleksija očuvana', 'Da, ali samo ako otok traje nedelju dana'],
          answer: 1,
          explain: 'Po Otavskom pravilu za koleno dovoljan je jedan kriterijum, a uzrast od 55 godina ili više je jedan od njih.'
        },
        {
          q: 'Mladić, 22 god., pao je na ispruženu šaku. Ima bol u ručnom zglobu i bolnu osetljivost u anatomskoj burmutici. Rendgen je uredan. Šta je ispravno?',
          options: ['Imobilizacija i upućivanje ortopedu radi ponovne procene', 'Elastični zavoj i povratak sportu', 'Nikakva terapija, jer je snimak uredan', 'Fizikalna terapija odmah'],
          answer: 0,
          explain: 'Prelom skafoidne kosti se na prvom snimku često ne vidi. Klinička sumnja je dovoljna za imobilizaciju i ponovnu procenu, jer nelečen prelom može dovesti do nesrastanja.'
        },
        {
          q: 'Pacijentkinja sa uganućem skočnog zgloba i negativnim Otavskim pravilima pita šta da radi kod kuće. Šta savetovati?',
          options: ['Potpuno mirovanje i imobilizaciju tri nedelje', 'Tople obloge i masažu od prvog dana', 'Prvih dana zaštita, led, kompresija i elevacija, zatim postepeno opterećenje i vežbe', 'Trčanje čim otok splasne'],
          answer: 2,
          explain: 'Posle kratke zaštite u prvim danima oporavak ubrzavaju rano, postepeno opterećenje i vežbe. Većina uganuća se popravi za oko 2 nedelje, a naporne aktivnosti se izbegavaju do 8 nedelja.'
        }
      ]
    },
    {
      id: 'analgezija',
      title: 'Racionalna analgezija',
      summary: 'Najniža efikasna doza, najkraće moguće; proceni gastrointestinalni, kardiovaskularni i bubrežni rizik pre svakog NSAIL.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Izbor analgetika zavisi od vrste bola (nociceptivni, neuropatski, hronični primarni), jačine i komorbiditeta. Princip lestvice — neopioidni analgetik, zatim slab, pa jak opioid — važi za akutni i kancerski bol. Za hronični primarni bol analgetici ne pomažu, a opioidi, NSAIL, paracetamol, gabapentinoidi i benzodiazepini se **ne započinju**.' },
        { type: 'drugs', title: 'Neopioidni analgetici', items: [
          { name: 'paracetamol', dose: '500–1000 mg p.o., razmak najmanje 4 h, najviše 4 g dnevno', note: 'Nižu dnevnu dozu razmotriti kod male telesne mase, bolesti jetre i alkoholizma' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Najniža efikasna doza, najkraće moguće' },
          { name: 'diklofenak', dose: '75–150 mg dnevno p.o., podeljeno u 2–3 doze', note: 'KI: srčana insuficijencija NYHA II–IV, ishemijska bolest srca, periferna arterijska bolest, cerebrovaskularna bolest' },
          { name: 'metamizol', dose: '500–1000 mg p.o., najviše 4× dnevno (do 4 g dnevno)', note: 'Rizik agranulocitoze, nezavisan od doze: kod temperature, drhtavice, gušobolje ili ranica na sluznicama odmah prekinuti i uraditi krvnu sliku' }
        ] },
        { type: 'list', title: 'NSAIL — procena rizika', items: [
          '**Gastrointestinalni**: uz NSAIL dati inhibitor protonske pumpe; kod ranijeg ulkusa, ako je NSAIL neophodan, razmotriti selektivni COX-2 inhibitor, takođe uz inhibitor protonske pumpe.',
          '**Kardiovaskularni**: rizik arterijske tromboze raste sa dozom i trajanjem; diklofenak je kontraindikovan kod utvrđene kardiovaskularne bolesti, a rizik je nešto viši i kod selektivnih COX-2 inhibitora.',
          '**Bubrežni**: hronična primena može ubrzati progresiju hronične bolesti bubrega, a akutna izaziva reverzibilan pad eGFR — oprez i praćenje.',
          'Ne kombinuj dva NSAIL; proveri da pacijent ne uzima isti lek pod drugim imenom ili bez recepta.',
          'Lokalni NSAIL su prvi izbor za koleno i površne zglobove.',
          'Trudnoća: ibuprofen izbegavati osim po savetu lekara; paracetamol je lek izbora.'
        ] },
        { type: 'drugs', title: 'Opioidi', items: [
          { name: 'tramadol', dose: '50 mg p.o. 3–4× dnevno; oblici sa produženim oslobađanjem 1–2× dnevno', note: 'Kratkotrajno za akutni bol; mučnina, vrtoglavica, opstipacija' },
          { name: 'morfin (kancerski bol, uznapredovala bolest)', dose: 'početna ukupna dnevna doza 20–30 mg p.o. (npr. 10–15 mg sa produženim oslobađanjem 2× dnevno) + 5 mg sa trenutnim oslobađanjem za proboj bola', note: 'Kod pacijenata bez bubrežnih i jetrenih komorbiditeta; titrirati prema efektu' }
        ] },
        { type: 'drugs', title: 'Neuropatski bol', items: [
          { name: 'amitriptilin', dose: '10 mg p.o. uveče, postepeno povećavati; najviše 75 mg dnevno', note: 'Sedacija, suva usta; oprez kod starijih' },
          { name: 'gabapentin', dose: 'postepena titracija do 900–3600 mg dnevno p.o., podeljeno u 3 doze', note: 'Prilagoditi dozu bubrežnoj funkciji; rizik zavisnosti i zloupotrebe' },
          { name: 'pregabalin', dose: '150–600 mg dnevno p.o., podeljeno u 2–3 doze', note: 'Prilagoditi dozu bubrežnoj funkciji; rizik zavisnosti i zloupotrebe' },
          { name: 'duloksetin', dose: 'p.o. 1× dnevno, doza prema sažetku karakteristika leka', note: 'Jedan od četiri leka prvog izbora' },
          { name: 'karbamazepin (neuralgija trigeminusa)', dose: 'p.o., početi niskom dozom i titrirati prema sažetku karakteristika leka', note: 'Lek prvog izbora za neuralgiju trigeminusa; ne u trudnoći bez saveta specijaliste' }
        ] },
        { type: 'steps', title: 'Kako propisati', items: [
          'Odredi vrstu bola: nociceptivni, neuropatski (žarenje, trnci, alodinija) ili hronični primarni.',
          'Akutni nociceptivni bol: paracetamol ili NSAIL; slab opioid samo kratko ako to nije dovoljno.',
          'Neuropatski bol: amitriptilin, duloksetin, gabapentin ili pregabalin; ako prvi ne deluje ili se ne podnosi, preći na drugi od ova četiri.',
          'Tramadol kod neuropatskog bola samo kao kratkotrajna terapija u pogoršanju; kapsaicin krem za lokalizovan bol.',
          'Jak opioid: uvek istovremeno propisati **redovan laksativ**; upozoriti da je mučnina na početku česta i prolazna.',
          'Hronični primarni bol: program vežbi, psihološke terapije; može se razmotriti antidepresiv.',
          'Svaku terapiju redovno preispitaj: efekat, neželjena dejstva i potrebu za nastavkom.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Jak bol koji ne reaguje na terapiju ili značajno ograničava svakodnevni život — ambulanta za terapiju bola.',
          'Neuralgija trigeminusa bez odgovora na karbamazepin — neurolog.',
          'Kancerski bol koji zahteva složenu titraciju opioida — palijativno zbrinjavanje.',
          'Sumnja na zavisnost od opioida ili gabapentinoida.',
          'Novi neurološki deficit uz bol — hitna obrada uzroka.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Opstipacija od opioida ne prolazi sama: laksativ ide uz jak opioid od prvog dana.',
          'Kod diklofenaka je rizik infarkta i moždanog udara najveći pri dozi od 150 mg dnevno i dugotrajnoj primeni.',
          'Pre svakog NSAIL pitaj za ulkus, bolest srca, bubrežnu funkciju i antikoagulanse.',
          'Analgetik bez plana preispitivanja lako postaje trajna terapija.'
        ] }
      ],
      sources: [
        { name: 'NICE CG173 – Neuropathic pain in adults', url: 'https://www.nice.org.uk/guidance/cg173/chapter/Recommendations' },
        { name: 'NICE CG140 – Palliative care for adults: strong opioids for pain relief', url: 'https://www.nice.org.uk/guidance/cg140/chapter/Recommendations' },
        { name: 'EMA – Diclofenac-containing medicines', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/diclofenac-containing-medicines' }
      ],
      questions: [
        {
          q: 'Muškarac, 66 god., preležao je infarkt miokarda pre dve godine. Zbog bola u kolenu traži diklofenak koji mu je ranije pomagao. Šta je ispravno?',
          options: ['Propisati diklofenak 150 mg dnevno uz inhibitor protonske pumpe', 'Ne propisati diklofenak; kontraindikovan je kod ishemijske bolesti srca', 'Propisati diklofenak u pola doze', 'Propisati diklofenak, ali samo u obliku supozitorija'],
          answer: 1,
          explain: 'Diklofenak je kontraindikovan kod utvrđene ishemijske bolesti srca, cerebrovaskularne i periferne arterijske bolesti i srčane insuficijencije. Bolji izbor su lokalni NSAIL i nefarmakološke mere.'
        },
        {
          q: 'Žena, 58 god., sa dijabetesom ima žareći bol i trnce u oba stopala, jače noću. Koji je odgovarajući početni lek?',
          options: ['Ibuprofen 400 mg 3× dnevno', 'Tramadol kao trajna terapija', 'Amitriptilin, duloksetin, gabapentin ili pregabalin', 'Diazepam uveče'],
          answer: 2,
          explain: 'Za neuropatski bol početni izbor je jedan od četiri leka: amitriptilin, duloksetin, gabapentin ili pregabalin. NSAIL ne deluju na neuropatski bol, a tramadol je rezervisan za kratkotrajna pogoršanja.'
        },
        {
          q: 'Pacijentu sa uznapredovalim karcinomom i jakim bolom uvodiš oralni morfin. Šta obavezno propisati istovremeno?',
          options: ['Redovan laksativ', 'Benzodiazepin', 'Drugi opioid za noć', 'Antibiotik'],
          answer: 0,
          explain: 'Laksativ se propisuje svim pacijentima koji počinju jak opioid, redovno i u efikasnoj dozi. Mučnina je na početku česta, ali obično prolazna.'
        },
        {
          q: 'Žena, 44 god., ima raširen bol u celom telu duže od godinu dana, uredne nalaze i dijagnozu hroničnog primarnog bola. Traži jači lek jer joj paracetamol i ibuprofen ne pomažu. Šta je ispravno?',
          options: ['Uvesti tramadol', 'Uvesti pregabalin', 'Dodati diazepam uveče', 'Ne započinjati opioide ni gabapentinoide; ponuditi program vežbi i razmotriti antidepresiv'],
          answer: 3,
          explain: 'Kod hroničnog primarnog bola ne započinju se opioidi, gabapentinoidi, benzodiazepini, NSAIL ni paracetamol. Korist imaju vežbe i psihološke terapije, a može se razmotriti antidepresiv.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'lokomotorni-slucaj-1',
      title: 'Muškarac, 44 god., bol u leđima sa širenjem u nogu',
      intro: 'Ambulanta doma zdravlja. Muškarac, 44 god., vozač, tri dana ima jak bol u krstima koji se širi niz zadnju stranu desne noge do stopala, nastao posle podizanja tereta. Afebrilan, TA 130/80 mmHg. Hoda pognuto, Lazarevićev znak pozitivan desno.',
      steps: [
        {
          q: 'Šta je najvažnije ispitati u anamnezi i pregledu pre odluke o lečenju?',
          options: ['Porodičnu anamnezu bolesti kičme', 'Mokrenje, stolicu, senzibilitet perineuma i snagu u obe noge', 'Vrednost sedimentacije', 'Držanje pri sedenju'],
          answer: 1,
          explain: 'Poremećaj mokrenja i stolice, utrnulost perineuma i obostrana slabost znaci su sindroma caudae equinae, koji se mora aktivno tražiti kod svakog pacijenta sa išijasom.'
        },
        {
          q: 'Mokri normalno, senzibilitet perineuma je uredan, snaga očuvana, Ahilov refleks desno nešto slabiji. Šta dalje?',
          options: ['Hitna magnetna rezonanca', 'Rendgen lumbalne kičme', 'Savet da ostane aktivan, NSAIL kratko uz procenu rizika, bez snimanja, kontrola', 'Strogo mirovanje dve nedelje i pregabalin'],
          answer: 2,
          explain: 'Bez crvenih zastavica snimanje se ne radi rutinski. Savetuje se nastavak aktivnosti i kratkotrajan NSAIL; gabapentinoidi se za išijas ne preporučuju.'
        },
        {
          q: 'Pet dana kasnije zove: bol je sada u obe noge, od jutros ne može da započne mokrenje i ne oseća kada se briše posle stolice. Šta je ispravno?',
          options: ['Zakazati kontrolu za sutra', 'Savetovati jači analgetik i dosta tečnosti', 'Uputiti na urinokulturu', 'Odmah organizovati transport u bolnicu (SHMP) zbog sumnje na sindrom caudae equinae'],
          answer: 3,
          explain: 'Obostrani simptomi, retencija urina i gubitak senzibiliteta perineuma znače sindrom caudae equinae. Potrebno je hitno bolničko zbrinjavanje; svako odlaganje povećava rizik trajne inkontinencije i slabosti.'
        },
        {
          q: 'Koju grešku treba izbeći dok se čeka transport?',
          options: ['Pripisati retenciju bolu ili lekovima i čekati da prođe', 'Zabeležiti vreme početka poremećaja mokrenja', 'Proveriti senzibilitet perineuma i snagu u nogama', 'Najaviti pacijenta prijemnoj službi'],
          answer: 0,
          explain: 'Najčešća greška je da se poremećaj mokrenja pripiše bolu ili lekovima. Vreme od početka simptoma do zbrinjavanja utiče na ishod, pa ga treba zabeležiti i preneti bolnici.'
        }
      ]
    },
    {
      id: 'lokomotorni-slucaj-2',
      title: 'Žena, 38 god., bolovi i ukočenost šaka',
      intro: 'Ambulanta doma zdravlja. Žena, 38 god., frizerka, deset nedelja ima bol i otok u zglobovima obe šake. Ujutru su joj šake ukočene više od sat vremena, a umorna je tokom celog dana. Afebrilna. Pri pregledu otečeni i bolni metakarpofalangealni zglobovi obostrano, bolan poprečni stisak šake.',
      steps: [
        {
          q: 'Kako tumačiš nalaz?',
          options: ['Sinovitis malih zglobova: sumnja na reumatoidni artritis', 'Osteoartritis šaka zbog zanimanja', 'Sindrom karpalnog tunela', 'Preopterećenje tetiva'],
          answer: 0,
          explain: 'Simetričan otok metakarpofalangealnih zglobova uz jutarnju ukočenost dužu od 30 minuta ukazuje na zapaljenski artritis. Osteoartritis daje kratku ukočenost i javlja se kod starijih.'
        },
        {
          q: 'Sedimentacija je 18 mm/h, CRP uredan, reumatoidni faktor negativan. Šta je sledeći korak?',
          options: ['Nalazi isključuju reumatoidni artritis; fizikalna terapija', 'Ponoviti laboratoriju za tri meseca', 'Započeti prednizon i pratiti', 'Hitno uputiti reumatologu, bez čekanja dodatnih nalaza'],
          answer: 3,
          explain: 'Kod zahvaćenosti malih zglobova šaka upućuje se hitno, i uz uredne markere zapaljenja i negativan reumatoidni faktor. Analize se mogu uraditi, ali ne smeju odložiti upućivanje.'
        },
        {
          q: 'Šta joj propisati dok čeka pregled?',
          options: ['Jak opioid', 'NSAIL u najnižoj efikasnoj dozi uz gastroprotekciju', 'Metotreksat u dozi koju sam odrediš', 'Antibiotik'],
          answer: 1,
          explain: 'Do pregleda reumatologa daje se simptomatska terapija NSAIL uz zaštitu želuca. Lekove koji modifikuju bolest uvodi reumatolog.'
        },
        {
          q: 'Reumatolog je potvrdio reumatoidni artritis i uveo metotreksat jednom nedeljno. Pola godine kasnije dolazi sa cistitisom. Koji antibiotik treba izbeći?',
          options: ['Fosfomicin', 'Nitrofurantoin', 'Trimetoprim-sulfametoksazol', 'Cefalosporin'],
          answer: 2,
          explain: 'Trimetoprim i trimetoprim-sulfametoksazol stupaju u interakciju sa metotreksatom i povećavaju rizik od supresije koštane srži. Za cistitis se bira drugi lek prve linije.'
        }
      ]
    }
  ]
});
