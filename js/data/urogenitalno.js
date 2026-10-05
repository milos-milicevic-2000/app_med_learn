MED.register({
  id: 'urogenitalno',
  title: 'Bubrezi, mokraćni putevi i reproduktivno zdravlje',
  icon: '💧',
  color: '#3E63DD',
  topics: [
    {
      id: 'cistitis',
      title: 'Nekomplikovani cistitis kod žena i asimptomatska bakteriurija',
      summary: 'Tipičan cistitis leči se kratko i empirijski, bez urinokulture; asimptomatska bakteriurija se leči samo u trudnoći i pre uroloških zahvata.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Cistitis kod žene je simptomatska infekcija ograničena na bešiku, **bez sistemskih znakova** (temperatura, drhtavica, bol u slabini, malaksalost). Kod tipičnih simptoma dijagnoza je klinička, a terapija kratka i empirijska. Bakterije u urinu bez simptoma se u većini slučajeva ne leče.' },
        { type: 'list', title: 'Klinička slika i dijagnoza', items: [
          'Dizurija, učestalo mokrenje, urgencija, suprapubični bol; bez vaginalnog sekreta i bez temperature.',
          'Kod tipičnih simptoma analiza urina samo malo povećava tačnost dijagnoze; test-traka pomaže kada je slika nejasna.',
          'Vaginalni sekret ili svrab upućuju na vaginitis ili polno prenosivu infekciju.',
          'Temperatura, drhtavica ili bol u slabini znače sistemsku infekciju (pijelonefritis), a ne cistitis.',
          'Rekurentni cistitis: najmanje **3 epizode godišnje ili 2 u poslednjih 6 meseci**; prvu dijagnozu potvrdi urinokulturom.'
        ] },
        { type: 'list', title: 'Kada je potrebna urinokultura', items: [
          'Sumnja na sistemsku infekciju urinarnog trakta.',
          'Simptomi koji ne prolaze ili se vrate u roku od 4 nedelje po završetku terapije.',
          'Atipični simptomi.',
          'Visok rizik od rezistentnih uzročnika.',
          'Trudnice.',
          'Muškarci sa simptomima infekcije urinarnog trakta.'
        ] },
        { type: 'drugs', title: 'Empirijska terapija (žene)', items: [
          { name: 'fosfomicin-trometamol', dose: '3 g p.o. jednokratno', note: 'Prva linija' },
          { name: 'nitrofurantoin', dose: '100 mg p.o. 2× dnevno 5 dana (monohidrat/makrokristali ili oblik sa produženim oslobađanjem); makrokristali 50–100 mg 4× dnevno 5 dana', note: 'Prva linija. KI: eGFR <30 ml/min, deficit G6PD, kraj trudnoće' },
          { name: 'pivmecilinam', dose: '400 mg p.o. 3× dnevno 3–5 dana', note: 'Prva linija gde je dostupan' },
          { name: 'cefalosporin (npr. cefadroksil)', dose: '500 mg p.o. 2× dnevno 3 dana', note: 'Alternativa' },
          { name: 'trimetoprim-sulfametoksazol', dose: '160/800 mg p.o. 2× dnevno 3 dana', note: 'Samo gde je rezistencija E. coli ispod 20%; ne u poslednjem trimestru trudnoće' },
          { name: 'trimetoprim', dose: '200 mg p.o. 2× dnevno 5 dana', note: 'Samo gde je rezistencija E. coli ispod 20%; ne u prvom trimestru trudnoće' }
        ] },
        { type: 'list', title: 'Asimptomatska bakteriurija', items: [
          '**Ne tražiti i ne lečiti** kod: žena bez faktora rizika, žena u postmenopauzi, dobro regulisanog dijabetesa, starijih u ustanovama, disfunkcije ili rekonstrukcije donjeg urinarnog trakta, transplantiranog bubrega, pre ugradnje endoproteze, rekurentnih infekcija.',
          '**Tražiti i lečiti**: trudnice (standardna kratka terapija ili fosfomicin-trometamol jednokratno) i pre uroloških zahvata sa povredom sluznice.',
          'Bakteriurija bez simptoma ne oštećuje bubrege; lečenje ne smanjuje broj simptomatskih infekcija.'
        ] },
        { type: 'steps', title: 'Rekurentni cistitis — prevencija', items: [
          'Savetovanje o faktorima rizika: nedovoljan unos tečnosti, odlaganje mokrenja i mokrenja posle odnosa, brisanje od pozadi ka napred, vaginalno ispiranje.',
          'U postmenopauzi: lokalni (vaginalni) estrogen.',
          'Nemedikamentne opcije: metenamin-hipurat; preparati brusnice imaju slabe dokaze, ali povoljan odnos koristi i rizika.',
          'Ako mere ne uspeju: kontinuirana antibiotska profilaksa u maloj dozi (npr. nitrofurantoin 50–100 mg 1× dnevno) ili postkoitalna profilaksa.',
          'Kod žena mlađih od 40 godina bez faktora rizika nije potrebna opsežna obrada (cistoskopija, ultrazvuk).'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Znaci pijelonefritisa uz povraćanje, sepsu ili trudnoću — bolnica.',
          'Infekcija urinarnog trakta kod muškarca koja se ponavlja ili uz sumnju na prostatitis — urolog.',
          'Rekurentni cistitis uz faktore rizika (kamenci, retencija, hematurija koja traje) — urolog.',
          'Makrohematurija bez infekcije ili hematurija koja traje posle izlečenja — obrada radi isključenja maligniteta.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Nitrofurantoin, fosfomicin i pivmecilinam su lekovi za cistitis, ne za pijelonefritis.',
          'Kod blagih simptoma moguće je, uz dogovor sa pacijentkinjom, simptomatsko lečenje (npr. ibuprofen) umesto antibiotika.',
          'Cistitis u trudnoći: kratka terapija; dolaze u obzir penicilini, cefalosporini, fosfomicin i nitrofurantoin (ne pred termin).',
          'Pozitivna test-traka ili urinokultura bez simptoma kod starije osobe nije razlog za antibiotik.',
          'Kod mlađih muškaraca bez zahvatanja prostate: trimetoprim-sulfametoksazol 160/800 mg 2× dnevno 7 dana.'
        ] }
      ],
      sources: [
        { name: 'EAU – Guidelines on Urological Infections', url: 'https://uroweb.org/guidelines/urological-infections/chapter/the-guideline' }
      ],
      questions: [
        {
          q: 'Žena, 26 god., dva dana ima peckanje pri mokrenju i učestalo mokrenje. Nema temperaturu, bol u slabinama ni vaginalni sekret, nije trudna. Šta je ispravno?',
          options: ['Urinokultura, pa terapija prema antibiogramu', 'Ciprofloksacin 500 mg 2× dnevno 7 dana', 'Fosfomicin-trometamol 3 g jednokratno, bez urinokulture', 'Ultrazvuk bubrega pre terapije'],
          answer: 2,
          explain: 'Tipičan nekomplikovani cistitis leči se empirijski lekom prve linije, bez urinokulture i snimanja. Fluorohinoloni nisu među lekovima prve linije za cistitis.'
        },
        {
          q: 'Žena, 79 god., štićenica doma, bez tegoba. Na rutinskoj urinokulturi izolovana je E. coli. Afebrilna je, bez dizurije i bez promene stanja svesti. Kako postupiti?',
          options: ['Bez antibiotika', 'Nitrofurantoin 5 dana', 'Fosfomicin jednokratno', 'Kontrolne urinokulture jednom mesečno'],
          answer: 0,
          explain: 'Asimptomatsku bakteriuriju kod starijih u ustanovama ne treba ni tražiti ni lečiti. Lečenje ne donosi korist, a podstiče rezistenciju i neželjena dejstva.'
        },
        {
          q: 'Pacijentkinja, 34 god., lečena je fosfomicinom zbog cistitisa. Tri nedelje kasnije ima iste simptome. Šta sada?',
          options: ['Ponoviti fosfomicin bez analiza', 'Uputiti na cistoskopiju', 'Propisati dugotrajnu profilaksu', 'Uzeti urinokulturu i lečiti drugim lekom prve linije'],
          answer: 3,
          explain: 'Povratak simptoma u roku od 4 nedelje od terapije je indikacija za urinokulturu. Opsežna obrada nije potrebna kod mlađih žena bez faktora rizika.'
        },
        {
          q: 'Trudnica u 14. nedelji nema tegobe, a urinokultura na prvom pregledu pokazuje značajnu bakteriuriju. Šta je ispravno?',
          options: ['Ne lečiti jer nema simptoma', 'Lečiti kratkom terapijom ili fosfomicinom jednokratno', 'Ciprofloksacin 7 dana', 'Trimetoprim-sulfametoksazol do porođaja'],
          answer: 1,
          explain: 'Trudnoća je jedna od dve situacije u kojima se asimptomatska bakteriurija traži i leči, jer nelečena povećava rizik od pijelonefritisa.'
        }
      ]
    },
    {
      id: 'pijelonefritis',
      title: 'Pijelonefritis i infekcije urinarnog trakta kod muškaraca, trudnica i starijih',
      summary: 'Sistemska infekcija: uvek urinokultura pre antibiotika; proceni ko može kući, a ko mora u bolnicu.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Na pijelonefritis ukazuju temperatura iznad 38 °C, drhtavica, bol u slabini, mučnina i povraćanje, sa simptomima cistitisa ili bez njih. Ključno je što pre razlikovati nekomplikovan oblik od **opstruktivnog pijelonefritisa**, koji brzo vodi u urosepsu. Blagi i umereni oblici kod pacijenata koji mogu da uzimaju lekove na usta leče se ambulantno.' },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Znaci sepse: hipotenzija, tahikardija, tahipneja, poremećaj svesti',
          'Sumnja na opstrukciju (poznati kamenci, kolika, anurija, solitarni bubreg)',
          'Uporno povraćanje — nemogućnost oralne terapije',
          'Trudnoća',
          'Bez poboljšanja posle 48–72 h terapije',
          'Kod muškarca: temperatura uz bol u karlici ili perineumu i otečenu, bolnu prostatu (akutni prostatitis)'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Vitalni parametri, lumbalna sukusija, pregled trbuha; kod muškaraca obazriv digitorektalni pregled bez masaže prostate.',
          'Urin (test-traka ili sediment) i **urinokultura pre prve doze antibiotika**; krvna slika, CRP, kreatinin.',
          'Ultrazvuk urotrakta kod pacijenata sa kamencima u anamnezi, poremećajem bubrežne funkcije ili sumnjom na opstrukciju.',
          'Ambulantno lečenje: blaga do umerena slika, pacijent pouzdano uzima oralnu terapiju, nema crvenih zastavica.',
          'Kontrola (lično ili telefonom) za 48–72 h; korekcija terapije prema antibiogramu.',
          'Bez poboljšanja za 48–72 h ili pri pogoršanju: dopunsko snimanje (CT) i bolnica.',
          'Kateter: pre početka antibiotika kateter ukloniti ili zameniti i uzeti urinokulturu iz novog katetera.'
        ] },
        { type: 'drugs', title: 'Empirijska terapija (ambulantno)', items: [
          { name: 'ciprofloksacin', dose: '500–750 mg p.o. 2× dnevno 7 dana', note: 'Samo gde je rezistencija na fluorohinolone ispod 10% i ako ih pacijent nije uzimao u poslednjih 6 meseci; ne u trudnoći' },
          { name: 'cefpodoksim', dose: '200 mg p.o. 2× dnevno 10 dana', note: 'Oralni cefalosporini postižu niže koncentracije: na početku dati jednu dozu parenteralnog leka dugog dejstva (npr. ceftriakson)' },
          { name: 'trimetoprim-sulfametoksazol', dose: '160/800 mg p.o. 2× dnevno 14 dana', note: 'Samo kada je osetljivost poznata; ako se daje empirijski, uz početnu parenteralnu dozu (npr. ceftriakson)' },
          { name: 'ceftriakson', dose: '2 g i.v. 1× dnevno', note: 'Parenteralna terapija kod pacijenata koji zahtevaju bolničko lečenje' }
        ] },
        { type: 'list', title: 'Posebne grupe', items: [
          '**Muškarci**: infekcija često zahvata prostatu; uvek urinokultura. Kod mlađih bez zahvatanja prostate trimetoprim-sulfametoksazol 7 dana, inače prema antibiogramu.',
          '**Akutni bakterijski prostatitis**: prostata otečena i bolna; masaža je zabranjena (bakterijemija, sepsa). Krvna slika i hemokultura; lečenje prema urologu.',
          '**Trudnice**: ambulantno parenteralno lečenje samo kod blage slike i uz mogućnost bliskog praćenja; u težim slučajevima hospitalizacija.',
          '**Stariji**: slika može biti nespecifična (malaksalost, konfuzija); bakteriurija bez simptoma se ne leči.',
          '**Infekcija uz kateter**: 7 dana terapije ako simptomi brzo prolaze, 14 dana kod sporog odgovora.'
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Sepsa ili hemodinamska nestabilnost — SHMP.',
          'Sumnja na opstrukciju — hitno urologu (opstruktivni pijelonefritis zahteva drenažu).',
          'Trudnice sa težom slikom, pacijenti koji povraćaju ili ne mogu da uzimaju oralnu terapiju.',
          'Bez poboljšanja posle 48–72 h.',
          'Akutni prostatitis sa teškom slikom ili retencijom urina.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Nitrofurantoin, oralni fosfomicin i pivmecilinam ne koriste se za lečenje pijelonefritisa.',
          'Jedini lekovi preporučeni za oralnu empirijsku terapiju pijelonefritisa su fluorohinoloni i cefalosporini.',
          'Temperatura koja traje duže od 72 h pod terapijom znači komplikaciju dok se ne dokaže suprotno.',
          'Kateter koji je bio plasiran dve nedelje ili duže, a i dalje je potreban, zameni pre uzimanja kulture.'
        ] }
      ],
      sources: [
        { name: 'EAU – Guidelines on Urological Infections', url: 'https://uroweb.org/guidelines/urological-infections/chapter/the-guideline' }
      ],
      questions: [
        {
          q: 'Žena, 31 god., ima temperaturu 38,7 °C, drhtavicu i bol u desnoj slabini od juče. Ne povraća, hemodinamski je stabilna, nije trudna. Šta uraditi pre prve doze antibiotika?',
          options: ['Ništa, terapija je empirijska', 'Uzeti urin za urinokulturu', 'Uraditi CT urotrakta', 'Sačekati nalaz urinokulture pa tek onda lečiti'],
          answer: 1,
          explain: 'Kod sistemske infekcije urinarnog trakta urinokultura se uzima pre antibiotika, ali se terapija ne odlaže do nalaza. CT je rezervisan za izostanak poboljšanja ili sumnju na komplikacije.'
        },
        {
          q: 'Ista pacijentkinja pita može li da dobije nitrofurantoin koji joj je ranije pomogao kod cistitisa. Šta odgovoriti?',
          options: ['Može, u dvostrukoj dozi', 'Može, ali 10 dana', 'Može, uz fosfomicin', 'Ne; nitrofurantoin nije lek za pijelonefritis'],
          answer: 3,
          explain: 'Nitrofurantoin, oralni fosfomicin i pivmecilinam ne preporučuju se za lečenje pijelonefritisa. Za oralnu empirijsku terapiju dolaze u obzir fluorohinoloni i cefalosporini.'
        },
        {
          q: 'Muškarac, 58 god., ima temperaturu 39 °C, drhtavicu, bol u perineumu i otežano mokrenje. Šta pri pregledu treba izbeći?',
          options: ['Masažu prostate', 'Uzimanje urinokulture', 'Palpaciju trbuha i bešike', 'Merenje vitalnih parametara'],
          answer: 0,
          explain: 'Slika odgovara akutnom bakterijskom prostatitisu. Masaža prostate može izazvati bakterijemiju i sepsu.'
        },
        {
          q: 'Pacijent sa pijelonefritisom i poznatim kamencem u ureteru treći dan ima temperaturu 39 °C uprkos antibiotiku, a diureza je oskudna. Šta je ispravno?',
          options: ['Promeniti antibiotik i kontrolisati za tri dana', 'Dodati drugi antibiotik', 'Hitno uputiti urologu zbog sumnje na opstruktivni pijelonefritis', 'Povećati unos tečnosti i dati antipiretik'],
          answer: 2,
          explain: 'Infekcija u opstruiranom bubregu je urološka hitnost koja često zahteva hitnu dekompresiju. Izostanak poboljšanja posle 48–72 h traži snimanje.'
        }
      ]
    },
    {
      id: 'renalna-kolika',
      title: 'Renalna kolika i nefrolitijaza',
      summary: 'NSAIL je prvi izbor za bol; temperatura, solitarni bubreg ili anurija uz opstrukciju su urološka hitnost.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kamen u ureteru daje bol u slabini, povraćanje, ponekad i temperaturu. **NSAIL** su efikasniji od opioida i prvi su izbor. Glavni zadatak u ambulanti je kupirati bol i prepoznati pacijenta sa infekcijom ili anurijom u opstruiranom bubregu, kome treba hitna dekompresija.' },
        { type: 'flags', title: 'Crvene zastavice — hitno urologu', items: [
          'Temperatura ili drugi znaci infekcije uz opstrukciju',
          'Anurija',
          'Solitarni bubreg',
          'Bol koji ne prestaje na analgeziju',
          'Nesigurna dijagnoza (kod starijih misli na bolesti aorte i druge uzroke akutnog bola u slabini)',
          'Trudnoća'
        ] },
        { type: 'list', title: 'Dijagnostika', items: [
          'Anamneza i pregled; urin i osnovna laboratorija (kreatinin, krvna slika, CRP).',
          'Snimanje: ultrazvuk kao početna metoda, a za potvrdu dijagnoze kod akutnog bola u slabini **nativni CT** (po mogućstvu niskodozni).',
          'NICE: hitno snimanje u roku od 24 h od javljanja; kod trudnica i dece ultrazvuk.',
          'Hitno snimanje je obavezno kod temperature, solitarnog bubrega ili nesigurne dijagnoze.',
          'Analiza kamenca kod svih koji prvi put imaju kamen — uputi pacijenta da procedi urin i sačuva kamen.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni vitalne parametre i temperaturu; isključi crvene zastavice.',
          'Daj NSAIL bilo kojim putem primene, vodeći računa o kardiovaskularnom riziku i bubrežnoj funkciji.',
          'Ako je NSAIL kontraindikovan ili nedovoljan: paracetamol i.v.; opioid je sledeći izbor.',
          'Spazmolitici se ne preporučuju: ne pojačavaju efekat NSAIL.',
          'Bol kupiran i nema crvenih zastavica: kući uz NSAIL, uput za snimanje u roku od 24 h i jasna uputstva kada da se vrati.',
          'Kamen distalnog uretera veći od 5 mm (a manji od 10 mm): razmotri alfa-blokator kao medikamentnu ekspulzivnu terapiju.',
          'Kontrola: ako kamen ne izađe ili se jave infekcija, uporan bol ili pad bubrežne funkcije — urolog.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'diklofenak', dose: '75 mg i.m. jednokratno u napadu; zatim 100–150 mg dnevno p.o. ili rektalno tokom 3–10 dana', note: 'Prvi izbor; nastavak smanjuje zapaljenje i rizik ponovnog bola. KI: utvrđena kardiovaskularna bolest, teška bubrežna insuficijencija' },
          { name: 'paracetamol', dose: 'i.v., doza prema sažetku karakteristika leka', note: 'Kada je NSAIL kontraindikovan ili nedovoljan' },
          { name: 'tramadol', dose: 'p.o. ili parenteralno, doza prema sažetku karakteristika leka', note: 'Opioid kao drugi izbor; petidin izbegavati zbog čestog povraćanja' },
          { name: 'tamsulosin', dose: '0,4 mg p.o. 1× dnevno', note: 'Medikamentna ekspulzivna terapija za distalne ureteralne kamence >5 mm; primena van odobrene indikacije, samo kod informisanog pacijenta' }
        ] },
        { type: 'list', title: 'Prevencija recidiva', items: [
          'Unos vode 2,5–3 litra dnevno.',
          'Dodavanje svežeg limunovog soka u vodu.',
          'So najviše 6 g dnevno.',
          '**Ne ograničavati kalcijum**: normalan unos od 700 do 1200 mg dnevno.',
          'Pacijenti sa visokim rizikom od recidiva: metabolička obrada kod urologa ili nefrologa.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Infekcija ili anurija uz opstrukciju — hitna dekompresija (urološka hitnost).',
          'Bol refraktoran na analgeziju — hitno urologu.',
          'Solitarni bubreg, trudnoća, poremećaj bubrežne funkcije.',
          'Kamen koji ne izlazi spontano ili je veći — urolog radi aktivnog uklanjanja.',
          'Ponavljani kamenci — metabolička obrada.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'NSAIL su efikasniji od opioida kod renalne kolike i ređe zahtevaju dodatnu analgeziju.',
          'Medikamentnu ekspulzivnu terapiju prekinuti ako se jave infekcija, refraktoran bol ili pogoršanje bubrežne funkcije.',
          'Kamenci manji od 5 mm mogu se pratiti bez intervencije uz informisanog pacijenta.',
          'Ograničavanje kalcijuma u ishrani je greška.'
        ] }
      ],
      sources: [
        { name: 'EAU – Guidelines on Urolithiasis', url: 'https://uroweb.org/guidelines/urolithiasis/chapter/guidelines' },
        { name: 'NICE NG118 – Renal and ureteric stones', url: 'https://www.nice.org.uk/guidance/ng118/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Muškarac, 38 god., ima nagli, jak bol u levoj slabini koji se širi ka preponi, uznemiren je i povraća. Afebrilan je, TA 140/85 mmHg, ranije zdrav. Koji lek je prvi izbor?',
          options: ['Tramadol', 'Hioscin-butilbromid', 'Paracetamol p.o.', 'NSAIL, npr. diklofenak i.m.'],
          answer: 3,
          explain: 'NSAIL su lekovi prvog izbora kod renalne kolike i efikasniji su od opioida. Spazmolitici se ne preporučuju jer ne doprinose analgeziji.'
        },
        {
          q: 'Žena, 45 god., sa renalnom kolikom ima temperaturu 38,8 °C i drhtavicu. Ultrazvuk pokazuje hidronefrozu. Šta je ispravno?',
          options: ['Hitno uputiti urologu radi dekompresije', 'Diklofenak i oralni antibiotik, kontrola za 48 h', 'Tamsulosin i obilna hidracija', 'Analgezija i zakazati CT naredne nedelje'],
          answer: 0,
          explain: 'Opstruiran bubreg sa znacima infekcije je urološka hitnost i zahteva hitnu dekompresiju. Ambulantno lečenje nosi rizik od urosepse.'
        },
        {
          q: 'Pacijentu je CT pokazao kamen od 6 mm u distalnom ureteru. Bol je kupiran, afebrilan je, bubrežna funkcija uredna. Šta se može ponuditi?',
          options: ['Hitnu operaciju', 'Alfa-blokator (tamsulosin 0,4 mg dnevno) uz NSAIL i praćenje', 'Antibiotik profilaktički', 'Restrikciju tečnosti dok kamen ne izađe'],
          answer: 1,
          explain: 'Kod distalnih ureteralnih kamenaca većih od 5 mm alfa-blokatori povećavaju stopu izbacivanja. Primena je van odobrene indikacije i prekida se kod infekcije, refraktornog bola ili pada bubrežne funkcije.'
        },
        {
          q: 'Pacijentkinja posle druge epizode kalcijumskog kamenca pita šta da promeni u ishrani. Šta je tačno?',
          options: ['Izbaciti mleko i mlečne proizvode', 'Smanjiti unos tečnosti uveče', 'Piti 2,5–3 litra vode dnevno, so do 6 g, normalan unos kalcijuma', 'Uzimati dodatke vitamina C'],
          answer: 2,
          explain: 'Preporučuje se visok unos vode i ograničenje soli. Unos kalcijuma se ne ograničava, već održava u normalnim granicama (700–1200 mg dnevno).'
        }
      ]
    },
    {
      id: 'bph',
      title: 'Benigna hiperplazija prostate, akutna retencija urina i PSA',
      summary: 'IPSS određuje težinu tegoba; alfa-blokator za simptome, inhibitor 5-alfa-reduktaze za veliku prostatu; retencija se odmah kateterizuje.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Simptomi donjeg urinarnog trakta kod muškaraca najčešće potiču od benigne hiperplazije prostate. Težina se procenjuje **IPSS** skorom: 0–7 blagi, 8–19 umereni, 20–35 teški. Lečenje zavisi od toga koliko tegobe smetaju pacijentu i od rizika progresije, a o PSA testiranju odlučuje informisan pacijent.' },
        { type: 'list', title: 'Procena u ambulanti', items: [
          'Anamneza sa pregledom svih lekova (uključujući biljne i lekove bez recepta) koji mogu pogoršati mokrenje.',
          'IPSS upitnik i dnevnik mokrenja.',
          'Pregled trbuha (palpabilna bešika), spoljnih genitalija i digitorektalni pregled.',
          'Analiza urina; kreatinin kod sumnje na oštećenje bubrega.',
          'PSA: ponuditi informacije, savet i vreme za odluku.',
          'Ultrazvuk sa merenjem rezidualnog urina i veličine prostate (važno pre uvođenja inhibitora 5-alfa-reduktaze).'
        ] },
        { type: 'steps', title: 'Lečenje simptoma', items: [
          'Blage tegobe koje ne smetaju: praćenje, saveti o unosu tečnosti i načinu života.',
          'Umerene do teške tegobe: **alfa-blokator**; kontrola za 4–6 nedelja, zatim na 6–12 meseci.',
          'Povećana prostata (>40 ml po EAU; >30 g ili PSA >1,4 ng/ml po NICE) i rizik progresije: **inhibitor 5-alfa-reduktaze**, sam ili u kombinaciji sa alfa-blokatorom.',
          'Dominantni simptomi nakupljanja (urgencija, učestalost): antimuskarinik, ali ne ako je rezidualni urin veći od 150 ml.',
          'Alternativa: tadalafil 5 mg 1× dnevno.',
          'Bez odgovora ili komplikacije: urolog radi hirurškog lečenja.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'tamsulosin', dose: '0,4 mg p.o. 1× dnevno, posle doručka', note: 'Brz efekat; ne sprečava retenciju ni potrebu za operacijom. Upozoriti oftalmologa pre operacije katarakte (sindrom mlitave dužice)' },
          { name: 'finasterid', dose: '5 mg p.o. 1× dnevno', note: 'Efekat tek posle najmanje 6 meseci; dugoročno smanjuje rizik retencije i operacije. Neželjena dejstva: smanjen libido, erektilna disfunkcija' },
          { name: 'tadalafil', dose: '5 mg p.o. 1× dnevno', note: 'KI: nitrati, skorašnji infarkt miokarda' }
        ] },
        { type: 'steps', title: 'Akutna retencija urina', items: [
          'Prepoznaj: nemogućnost mokrenja, bol, palpabilna bešika.',
          '**Odmah kateterizuj**; zabeleži zapreminu dobijenog urina.',
          'Potraži uzrok: lekovi (antiholinergici, dekongestivi, opioidi), opstipacija, infekcija.',
          'Uvedi alfa-blokator pre pokušaja uklanjanja katetera.',
          'Ako kateter ne prolazi, ne forsiraj — hitno urologu.',
          'Hronična retencija (rezidualni urin veći od 1 litra ili palpabilna bešika bez bola): kreatinin i snimanje gornjeg urotrakta.'
        ] },
        { type: 'list', title: 'PSA — šta izabrani lekar mora znati', items: [
          'Rano otkrivanje nuditi dobro informisanim muškarcima sa očekivanim životnim vekom od najmanje 15 godina.',
          'Početak: od 50 godina; od 45 uz porodičnu anamnezu karcinoma prostate ili afričko poreklo; od 40 kod nosilaca mutacije BRCA2.',
          'Kod asimptomatskih sa PSA 3–10 ng/ml: prvo **ponoviti PSA** pre dalje dijagnostike.',
          'Ponovljeni PSA raditi u istoj laboratoriji, bez prethodne ejakulacije, manipulacija i infekcije urinarnog trakta.',
          'Febrilna infekcija urinarnog trakta može dati veoma visok PSA koji se sporo normalizuje.',
          'Inhibitori 5-alfa-reduktaze smanjuju PSA za oko 50% posle 6–12 meseci — uzmi to u obzir pri tumačenju.'
        ] },
        { type: 'refer', title: 'Kada uputiti urologu', items: [
          'Akutna retencija koja se ne može rešiti kateterom — hitno.',
          'Retencija, rekurentne ili perzistentne infekcije, oštećenje bubrega zbog opstrukcije.',
          'Sumnja na karcinom: tvrda ili čvorasta prostata, PSA iznad praga za uzrast potvrđen u ponovljenom uzorku.',
          'Makrohematurija.',
          'Tegobe koje ne popuštaju na medikamentnu terapiju.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Alfa-blokator deluje brzo, ali ne menja prirodni tok bolesti; inhibitor 5-alfa-reduktaze deluje sporo, ali smanjuje rizik retencije.',
          'Pre nego što BPH proglasiš uzrokom tegoba, pregledaj listu lekova.',
          'PSA se ne meri tokom infekcije urinarnog trakta.',
          'Jedan povišen PSA nije dijagnoza: ponovi ga pod standardnim uslovima.'
        ] }
      ],
      sources: [
        { name: 'EAU – Management of Non-neurogenic Male LUTS', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management' },
        { name: 'NICE CG97 – Lower urinary tract symptoms in men', url: 'https://www.nice.org.uk/guidance/cg97/chapter/Recommendations' },
        { name: 'EAU – Prostate Cancer: diagnostic evaluation', url: 'https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation' }
      ],
      questions: [
        {
          q: 'Muškarac, 66 god., ima slab mlaz, noćno mokrenje tri puta i osećaj nepotpunog pražnjenja. IPSS je 17, urin uredan, prostata uvećana i glatka, rezidualni urin 60 ml. Šta je prvi lek?',
          options: ['Alfa-blokator, npr. tamsulosin 0,4 mg 1× dnevno', 'Antimuskarinik', 'Finasterid kao monoterapija radi brzog olakšanja', 'Antibiotik četiri nedelje'],
          answer: 0,
          explain: 'Kod umerenih do teških tegoba alfa-blokator je prvi izbor jer deluje brzo. Inhibitor 5-alfa-reduktaze deluje tek posle najmanje 6 meseci i namenjen je uvećanoj prostati sa rizikom progresije.'
        },
        {
          q: 'Muškarac, 73 god., dolazi jer od jutros ne može da mokri, ima jak bol u donjem trbuhu i palpabilnu bešiku. Šta je prvi postupak?',
          options: ['Tamsulosin i kontrola sutra', 'Furosemid i.v.', 'Kateterizacija mokraćne bešike odmah', 'Uput za ultrazvuk i PSA'],
          answer: 2,
          explain: 'Akutna retencija se odmah rešava kateterizacijom. Alfa-blokator se uvodi pre pokušaja uklanjanja katetera, a diuretik bi pogoršao stanje.'
        },
        {
          q: 'Asimptomatski muškarac, 58 god., ima PSA 4,8 ng/ml. Pre tri nedelje lečen je zbog febrilne infekcije urinarnog trakta. Šta uraditi?',
          options: ['Odmah uputiti na biopsiju prostate', 'Uvesti finasterid', 'Ne raditi ništa, nalaz je uredan za uzrast', 'Ponoviti PSA kasnije, pod standardnim uslovima, pa odlučiti'],
          answer: 3,
          explain: 'Infekcija urinarnog trakta može značajno i dugotrajno povisiti PSA. Kod PSA 3–10 ng/ml preporučuje se ponavljanje testa pre dalje dijagnostike.'
        },
        {
          q: 'Pacijent sa BPH ima izraženu urgenciju i učestalo mokrenje. Rezidualni urin je 220 ml. Koji lek treba izbeći?',
          options: ['Tamsulosin', 'Antimuskarinik', 'Finasterid', 'Tadalafil'],
          answer: 1,
          explain: 'Antimuskarinici se ne daju muškarcima sa rezidualnim urinom većim od 150 ml zbog rizika od retencije.'
        }
      ]
    },
    {
      id: 'hbb',
      title: 'Hronična bolest bubrega',
      summary: 'eGFR i albuminurija zajedno određuju rizik; RAS blokada, SGLT2 inhibitor, statin i izbegavanje nefrotoksina usporavaju progresiju.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Hronična bolest bubrega (HBB) se klasifikuje prema **eGFR** (kategorije G1–G5) i **albuminuriji** (A1–A3); obe mere zajedno određuju rizik od progresije i kardiovaskularnih događaja. Jedan patološki nalaz ne znači hroničnu bolest — nalaz se mora potvrditi. Većinu bolesnika vodi izabrani lekar, a zadatak je usporiti progresiju i na vreme uputiti nefrologu.' },
        { type: 'list', title: 'Stadijumi', items: [
          'eGFR (ml/min/1,73 m²): **G1** ≥90, **G2** 60–89, **G3a** 45–59, **G3b** 30–44, **G4** 15–29, **G5** <15.',
          'Odnos albumin/kreatinin u urinu (ACR): **A1** <3 mg/mmol, **A2** 3–30 mg/mmol, **A3** >30 mg/mmol.',
          'ACR 3 mg/mmol ili više, potvrđen u ponovljenom uzorku, klinički je značajna proteinurija.',
          'Promena eGFR veća od 20% na sledećem merenju prevazilazi očekivanu varijabilnost i zahteva procenu.',
          'eGFR i albuminuriju proveravati najmanje jednom godišnje, češće kod višeg rizika progresije.'
        ] },
        { type: 'steps', title: 'Usporavanje progresije', items: [
          'Krvni pritisak: ciljni sistolni TA <120 mmHg ako se podnosi i uz standardizovano merenje (KDIGO); blaži cilj kod krhkih i sklonih padovima.',
          '**ACE inhibitor ili sartan** kod albuminurije: A3 bez dijabetesa i A2–A3 uz dijabetes (jaka preporuka); u najvišoj odobrenoj dozi koja se podnosi.',
          'Kreatinin i kalijum proveri 2–4 nedelje po uvođenju ili povećanju doze; terapija se nastavlja ako kreatinin ne poraste više od 30% u prve 4 nedelje.',
          '**SGLT2 inhibitor**: dijabetes tipa 2 i eGFR ≥20; ili eGFR ≥20 uz ACR ≥20 mg/mmol; ili srčana insuficijencija bez obzira na albuminuriju.',
          'Statin: svi stariji od 50 godina sa HBB koji nisu na dijalizi.',
          'Ishrana: so ispod 5 g dnevno (natrijum <2 g), proteini oko 0,8 g/kg dnevno, bez visokoproteinskih dijeta.',
          'Izbegavati nefrotoksine, pre svega NSAIL; ne kombinovati ACE inhibitor, sartan i direktni inhibitor renina.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'ACE inhibitor ili sartan', dose: 'p.o. 1× dnevno, titrirati do najviše odobrene doze koja se podnosi', note: 'Nastaviti i kada eGFR padne ispod 30; smanjiti dozu ili prekinuti kod simptomatske hipotenzije ili hiperkalijemije koja se ne može kontrolisati' },
          { name: 'SGLT2 inhibitor (dapagliflozin, empagliflozin)', dose: 'p.o. 1× dnevno, doza prema sažetku karakteristika leka', note: 'Početni blagi pad eGFR je očekivan i nije razlog za prekid; nastaviti i ako eGFR kasnije padne ispod 20' },
          { name: 'statin', dose: 'p.o. 1× dnevno, doza prema sažetku karakteristika leka', note: 'Kod eGFR <60 statin ili kombinacija statina i ezetimiba' }
        ] },
        { type: 'list', title: 'Lekovi i bezbednost', items: [
          'Pri svakom propisivanju proveri eGFR: mnogi lekovi zahtevaju prilagođavanje doze ili su kontraindikovani (metformin, antikoagulansi, antibiotici, gabapentinoidi).',
          'NSAIL: hronična primena može ubrzati progresiju, a akutna izaziva reverzibilan pad eGFR.',
          'Tokom akutne bolesti sa dehidracijom razmotri privremenu obustavu metformina, ACE inhibitora, sartana i SGLT2 inhibitora, uz obavezno vraćanje terapije posle oporavka.',
          'SGLT2 inhibitor privremeno obustaviti tokom dužeg gladovanja, operacije ili teške akutne bolesti (rizik ketoze).',
          'Hiperkalijemija na RAS blokadi: prvo proveri druge lekove (NSAIL, trimetoprim) i ishranu, pa tek onda smanjuj dozu.'
        ] },
        { type: 'refer', title: 'Kada uputiti nefrologu', items: [
          'eGFR <30 ml/min/1,73 m².',
          'Petogodišnji rizik od bubrežne insuficijencije veći od 3–5% (validirana jednačina rizika, KFRE).',
          'ACR ≥30 mg/mmol uz hematuriju; ACR >70 mg/mmol.',
          'Trajan pad eGFR od 25% ili više uz promenu kategorije u roku od 12 meseci, ili pad od 15 ml/min/1,73 m² ili više godišnje.',
          'Hipertenzija koja nije kontrolisana uprkos najmanje 4 antihipertenziva.',
          'Trajni poremećaji kalijuma, nejasan uzrok bolesti, sumnja na naslednu bolest, rekurentna opsežna nefrolitijaza.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Bez ACR nema procene rizika: eGFR sam nije dovoljan.',
          'Porast kreatinina do 30% posle uvođenja ACE inhibitora nije razlog za prekid.',
          'Trajna hematurija bez proteinurije zahteva obradu radi isključenja maligniteta urotrakta u odgovarajućem uzrastu.',
          'Kod napada gihta u HBB prednost imaju kolhicin u maloj dozi ili kortikosteroid u odnosu na NSAIL.'
        ] }
      ],
      sources: [
        { name: 'KDIGO 2024 – CKD Evaluation and Management', url: 'https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf' },
        { name: 'NICE NG203 – Chronic kidney disease', url: 'https://www.nice.org.uk/guidance/ng203/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 64 god., sa dijabetesom tipa 2 i hipertenzijom, ima eGFR 52 ml/min/1,73 m² i ACR 45 mg/mmol na dva merenja u razmaku od tri meseca. U kojoj je kategoriji?',
          options: ['G2 A2', 'G3a A3', 'G3b A2', 'G4 A3'],
          answer: 1,
          explain: 'eGFR 45–59 je kategorija G3a, a ACR iznad 30 mg/mmol kategorija A3. Kombinacija znači visok rizik progresije i indikaciju za RAS blokadu i SGLT2 inhibitor.'
        },
        {
          q: 'Istoj pacijentkinji uveden je ramipril. Posle tri nedelje kreatinin je porastao za 18%, kalijum je 4,9 mmol/l. Šta uraditi?',
          options: ['Ukinuti ramipril', 'Prepoloviti dozu i dodati NSAIL po potrebi', 'Zameniti ramipril kombinacijom ramiprila i sartana', 'Nastaviti ramipril i pratiti kreatinin i kalijum'],
          answer: 3,
          explain: 'Terapija se nastavlja ako kreatinin ne poraste više od 30% u prve 4 nedelje. Kombinacija ACE inhibitora i sartana se ne preporučuje, a NSAIL treba izbegavati.'
        },
        {
          q: 'Muškarac, 71 god., ima eGFR 27 ml/min/1,73 m² (pre godinu dana 38) i ACR 80 mg/mmol. Šta je ispravno?',
          options: ['Kontrola eGFR za godinu dana', 'Ukinuti sartan zbog niskog eGFR', 'Uputiti nefrologu', 'Uvesti NSAIL zbog bolova u kolenima'],
          answer: 2,
          explain: 'eGFR ispod 30, pad veći od 25% uz promenu kategorije i ACR iznad 70 mg/mmol su razlozi za upućivanje. RAS blokada se nastavlja i pri eGFR ispod 30, a NSAIL se izbegavaju.'
        },
        {
          q: 'Pacijent sa HBB G3b na ramiprilu, metforminu i dapagliflozinu ima tri dana povraćanje i proliv i slabo pije. Šta savetovati?',
          options: ['Privremeno obustaviti ove lekove dok traje bolest i vratiti ih po oporavku', 'Nastaviti sve lekove bez izmena', 'Trajno ukinuti dapagliflozin', 'Udvostručiti dozu ramiprila zbog niskog pritiska'],
          answer: 0,
          explain: 'Tokom akutne bolesti sa dehidracijom razumno je privremeno obustaviti metformin, ACE inhibitor i SGLT2 inhibitor. Važno je vratiti ih po oporavku, jer trajni prekid nosi veći rizik.'
        }
      ]
    },
    {
      id: 'vaginitis-ppi',
      title: 'Vaginitisi i polno prenosive infekcije',
      summary: 'pH, izgled sekreta i mikroskopija razlikuju vaginozu, kandidijazu i trihomonijazu; kod PPI leči i partnere i testiraj na druge infekcije.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Tri najčešća uzroka vaginalnog sekreta su bakterijska vaginoza, vulvovaginalna kandidijaza i trihomonijaza. Trihomonijaza, hlamidija, gonoreja, sifilis i herpes su polno prenosive infekcije (PPI): tada se leče i partneri, savetuje apstinencija i nudi testiranje na druge PPI, uključujući HIV i sifilis.' },
        { type: 'list', title: 'Kako ih razlikovati', items: [
          '**Bakterijska vaginoza**: najmanje 3 od 4 Amselova kriterijuma — homogen, redak sekret; pH >4,5; miris na ribu (pre ili posle dodavanja KOH); ćelije prekrivene bakterijama na mikroskopiji.',
          '**Kandidijaza**: svrab, pečenje, sirast sekret; vaginalni pH normalan (<4,5).',
          '**Trihomonijaza**: obilan sekret, iritacija; dijagnoza testom, partneri se leče.',
          '**Cervicitis** (hlamidija, gonoreja): često bez simptoma; sekret, kontaktno krvarenje.',
          '**Zapaljenje organa male karlice**: bol u donjem trbuhu uz bolnu osetljivost pri pomeranju grlića, materice ili adneksa.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Bol u donjem trbuhu kod žene u reproduktivnom dobu — uvek test na trudnoću (vanmaterična trudnoća)',
          'Temperatura, povraćanje ili teška slika zapaljenja organa male karlice',
          'Trudnoća uz bilo koju PPI',
          'Genitalni ulkus (sifilis, herpes)',
          'Krvarenje u postmenopauzi',
          'Bez poboljšanja 72 h od početka terapije zapaljenja organa male karlice'
        ] },
        { type: 'drugs', title: 'Terapija vaginitisa', items: [
          { name: 'metronidazol (bakterijska vaginoza)', dose: '500 mg p.o. 2× dnevno 7 dana', note: 'Alternativa: metronidazol gel 0,75% 5 g intravaginalno 1× dnevno 5 dana ili klindamicin krem 2% 5 g intravaginalno uveče 7 dana' },
          { name: 'flukonazol (kandidijaza)', dose: '150 mg p.o. jednokratno', note: 'Ne u trudnoći' },
          { name: 'klotrimazol (kandidijaza)', dose: 'krem 1% 5 g intravaginalno 1× dnevno 7–14 dana ili krem 2% 5 g 1× dnevno 3 dana', note: 'U trudnoći samo lokalni azoli, 7 dana' },
          { name: 'metronidazol (trihomonijaza)', dose: 'žene: 500 mg p.o. 2× dnevno 7 dana; muškarci: 2 g p.o. jednokratno', note: 'Lečiti i partnere; apstinencija dok oboje ne završe terapiju' }
        ] },
        { type: 'drugs', title: 'Terapija polno prenosivih infekcija', items: [
          { name: 'doksiciklin (hlamidija)', dose: '100 mg p.o. 2× dnevno 7 dana', note: 'Alternativa: azitromicin 1 g p.o. jednokratno. Doksiciklin se u trudnoći ne daje' },
          { name: 'ceftriakson (gonoreja)', dose: '500 mg i.m. jednokratno (1 g kod telesne mase ≥150 kg)', note: 'CDC; evropske urološke smernice navode 1–2 g. Ako hlamidija nije isključena, dodati doksiciklin 7 dana' },
          { name: 'benzatin-benzilpenicilin (rani sifilis)', dose: '2,4 miliona i.j. i.m. jednokratno', note: 'Lečenje i praćenje vodi dermatovenerolog ili infektolog' },
          { name: 'aciklovir (prva epizoda genitalnog herpesa)', dose: '400 mg p.o. 3× dnevno 7–10 dana', note: 'Alternativa: valaciklovir 1 g p.o. 2× dnevno 7–10 dana' },
          { name: 'zapaljenje organa male karlice (ambulantno)', dose: 'ceftriakson 500 mg i.m. jednokratno + doksiciklin 100 mg p.o. 2× dnevno 14 dana + metronidazol 500 mg p.o. 2× dnevno 14 dana', note: 'Kontrola za 72 h; bez poboljšanja — bolnica' }
        ] },
        { type: 'steps', title: 'Principi kod svake PPI', items: [
          'Uzmi seksualnu anamnezu bez osuđivanja i ponudi testiranje na druge PPI (HIV, sifilis, hlamidija, gonoreja).',
          'Leči i seksualne partnere.',
          'Savetuj apstinenciju 7 dana od početka terapije i dok partneri ne budu lečeni.',
          'Ponovno testiranje 3 meseca posle hlamidije, gonoreje ili trihomonijaze zbog česte reinfekcije.',
          'Prijava zarazne bolesti prema propisima.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Zapaljenje organa male karlice sa teškom slikom, trudnoćom ili bez odgovora za 72 h — ginekolog, bolnica.',
          'Sumnja na vanmateričnu trudnoću — hitno.',
          'Rekurentna kandidijaza (3 ili više epizoda godišnje) — ginekolog.',
          'Genitalni ulkus, sumnja na sifilis — dermatovenerolog.',
          'Trudnice sa PPI.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Normalan vaginalni pH uz svrab govori za kandidijazu; pH iznad 4,5 za bakterijsku vaginozu ili trihomonijazu.',
          'Kandidijaza i bakterijska vaginoza nisu PPI — rutinsko lečenje partnera nije potrebno.',
          'Klindamicin krem je na uljanoj bazi i može oslabiti kondome od lateksa.',
          'Prag za lečenje zapaljenja organa male karlice treba da bude nizak: posledice nelečene infekcije su neplodnost i hronični bol.'
        ] }
      ],
      sources: [
        { name: 'CDC 2021 – Sexually Transmitted Infections Treatment Guidelines', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8344968/' },
        { name: 'EAU – Guidelines on Urological Infections (uretritis)', url: 'https://uroweb.org/guidelines/urological-infections/chapter/the-guideline' }
      ],
      questions: [
        {
          q: 'Žena, 29 god., ima redak sivkast sekret neprijatnog mirisa, bez svraba. Vaginalni pH je 5,0, miris se pojačava dodavanjem KOH. Koja je terapija?',
          options: ['Flukonazol 150 mg jednokratno', 'Klotrimazol krem 7 dana', 'Metronidazol 500 mg 2× dnevno 7 dana', 'Doksiciklin 100 mg 2× dnevno 7 dana'],
          answer: 2,
          explain: 'Homogen sekret, pH iznad 4,5 i pozitivan aminski test ispunjavaju tri Amselova kriterijuma za bakterijsku vaginozu, koja se leči metronidazolom. Kandidijaza ima normalan pH i svrab.'
        },
        {
          q: 'Trudnica u 10. nedelji ima svrab i sirast sekret, pH je normalan. Šta propisati?',
          options: ['Flukonazol 150 mg jednokratno', 'Lokalni azol (npr. klotrimazol) 7 dana', 'Metronidazol 2 g jednokratno', 'Bez terapije do porođaja'],
          answer: 1,
          explain: 'U trudnoći se za kandidijazu preporučuju samo lokalni azoli tokom 7 dana. Flukonazol se izbegava zbog mogućeg rizika po plod.'
        },
        {
          q: 'Muškarac, 24 god., ima gnojni sekret iz uretre tri dana posle nezaštićenog odnosa. Test potvrđuje gonoreju, hlamidija nije isključena. Šta je terapija?',
          options: ['Azitromicin 1 g jednokratno', 'Ciprofloksacin 500 mg jednokratno', 'Doksiciklin 100 mg 2× dnevno 7 dana', 'Ceftriakson i.m. jednokratno uz doksiciklin 100 mg 2× dnevno 7 dana'],
          answer: 3,
          explain: 'Gonoreja se leči ceftriaksonom, a kada hlamidija nije isključena dodaje se doksiciklin 7 dana. Partnere treba lečiti, a pacijenta ponovo testirati za 3 meseca.'
        },
        {
          q: 'Žena, 23 god., ima bol u donjem trbuhu pet dana i pojačan sekret. Afebrilna je, test na trudnoću negativan, pri pregledu bolna osetljivost pri pomeranju grlića. Šta je ispravno?',
          options: ['Započeti empirijsku terapiju zapaljenja organa male karlice i kontrolisati za 72 h', 'Sačekati rezultate briseva pre terapije', 'Analgetik i kontrola za dve nedelje', 'Samo metronidazol 7 dana'],
          answer: 0,
          explain: 'Bol u donjem trbuhu uz bolnu osetljivost grlića kod seksualno aktivne žene dovoljan je za empirijsku terapiju. Odlaganje povećava rizik od neplodnosti; bez poboljšanja za 72 h potrebna je bolnica.'
        }
      ]
    },
    {
      id: 'kontracepcija-trudnoca',
      title: 'Kontracepcija, hitna kontracepcija i lekovi u trudnoći i dojenju',
      summary: 'Pre kombinovane pilule izmeri pritisak i proveri kontraindikacije; hitna kontracepcija do 5 dana; u trudnoći proveri svaki lek.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Izabrani lekar mora da prepozna kome kombinovana hormonska kontracepcija nije bezbedna, da zna da ponudi hitnu kontracepciju bez odlaganja i da kod svake žene u reproduktivnom dobu pre propisivanja leka pomisli na trudnoću. Za početak kombinovane pilule potrebni su anamneza i **merenje krvnog pritiska**; ginekološki pregled nije uslov.' },
        { type: 'flags', title: 'Kada kombinovana hormonska kontracepcija nije bezbedna', items: [
          'Migrena sa aurom',
          'Pušenje 15 ili više cigareta dnevno kod žene od 35 godina ili starije',
          'Hipertenzija sa vrednostima 160/100 mmHg ili višim',
          'Poznate trombogene mutacije; venska tromboembolija u anamnezi',
          'Prvih 21 dan posle porođaja',
          'Ishemijska bolest srca ili moždani udar u anamnezi'
        ] },
        { type: 'list', title: 'Praktična pravila', items: [
          'Za pouzdano sprečavanje ovulacije potrebno je 7 dana neprekidnog uzimanja hormonski aktivnih tableta.',
          'Najrizičnije je propuštanje tableta neposredno pre ili posle pauze (produžen interval bez hormona).',
          'Posle propuštanja više tableta: nastaviti pakovanje, koristiti kondom 7 dana i razmotriti hitnu kontracepciju ako je bilo odnosa.',
          'Lekovi koji smanjuju efikasnost: rifampicin i rifabutin, pojedini antiepileptici, kantarion.',
          'Kombinovana pilula smanjuje koncentraciju lamotrigina.',
          'Antibiotici širokog spektra ne smanjuju efikasnost kontracepcije.'
        ] },
        { type: 'drugs', title: 'Hitna kontracepcija', items: [
          { name: 'ulipristal-acetat', dose: '30 mg p.o. jednokratno, što pre, najkasnije 5 dana od odnosa', note: 'Efikasniji od levonorgestrela 3–5 dana posle odnosa; hormonsku kontracepciju započeti najranije 5 dana kasnije' },
          { name: 'levonorgestrel', dose: '1,5 mg p.o. jednokratno, što pre, najkasnije 5 dana od odnosa', note: 'U prva 3 dana efikasnost slična ulipristalu; kod gojaznih žena može biti manje efikasan od ulipristala' },
          { name: 'bakarni intrauterini uložak', dose: 'postavlja ginekolog u roku od 5 dana od odnosa', note: 'Najefikasnija hitna kontracepcija; ostaje kao trajna metoda' }
        ] },
        { type: 'list', title: 'Lekovi u trudnoći', items: [
          '**ACE inhibitori i sartani**: obustaviti čim se trudnoća potvrdi (poželjno u roku od 2 radna dana) i ponuditi zamenu.',
          'Hipertenzija u trudnoći: labetalol, zatim nifedipin, pa metildopa; ciljni TA 135/85 mmHg.',
          'Visok rizik od preeklampsije: acetilsalicilna kiselina 75–150 mg dnevno od 12. nedelje do porođaja.',
          '**Valproat**: ne sme se davati ženama i devojčicama koje mogu da zatrudne, osim uz program prevencije trudnoće.',
          'Bol i temperatura: paracetamol je lek izbora; ibuprofen izbegavati osim po savetu lekara.',
          'Antibiotici: penicilini, cefalosporini i fosfomicin dolaze u obzir; trimetoprim ne u prvom trimestru, sulfonamidi ne u poslednjem, nitrofurantoin ne pred termin; doksiciklin se ne daje.',
          'Folna kiselina pre začeća i u ranoj trudnoći, u dozi prema važećim preporukama.'
        ] },
        { type: 'list', title: 'Dojenje', items: [
          'Paracetamol je analgetik izbora; ibuprofen se po potrebi može koristiti.',
          'Kodein se tokom dojenja obično ne koristi zbog rizika od neželjenih dejstava kod deteta.',
          'Metamizol se ne koristi tokom dojenja ni u poslednja 3 meseca trudnoće (EMA).',
          'Za svaki drugi lek proveri sažetak karakteristika leka pre propisivanja.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Želja za dugodelujućom reverzibilnom kontracepcijom (uložak, implant) ili hitnim bakarnim uloškom — ginekolog.',
          'Žena na valproatu, metotreksatu ili drugom teratogenom leku koja planira trudnoću — specijalista pre začeća.',
          'Hronična bolest i planiranje trudnoće (hipertenzija, dijabetes, epilepsija) — prekoncepcijsko savetovanje.',
          'Hipertenzija u trudnoći — ginekolog, bez odlaganja.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod žene u reproduktivnom dobu pre svakog novog leka pitaj za mogućnost trudnoće i za kontracepciju.',
          'Hitnu kontracepciju daj što pre, bez odlaganja zbog pregleda ili analiza.',
          'Gojaznost sama po sebi nije kontraindikacija za hormonsku kontracepciju.',
          'Posle ulipristala se sa hormonskom kontracepcijom čeka 5 dana, uz kondom.'
        ] }
      ],
      sources: [
        { name: 'CDC – U.S. Selected Practice Recommendations for Contraceptive Use 2024', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11340200/' },
        { name: 'CDC – U.S. Medical Eligibility Criteria for Contraceptive Use 2024', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11315372/' },
        { name: 'NICE NG133 – Hypertension in pregnancy', url: 'https://www.nice.org.uk/guidance/ng133/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 37 god., puši 20 cigareta dnevno i traži kombinovanu kontraceptivnu pilulu. TA 128/80 mmHg. Šta je ispravno?',
          options: ['Propisati kombinovanu pilulu uz savet da smanji pušenje', 'Propisati pilulu sa nižom dozom estrogena', 'Propisati pilulu tek posle ginekološkog pregleda', 'Ne propisati kombinovanu pilulu; ponuditi metodu bez estrogena'],
          answer: 3,
          explain: 'Žena od 35 godina ili starija koja puši 15 ili više cigareta dnevno ne treba da koristi kombinovanu hormonsku kontracepciju zbog kardiovaskularnog rizika. Metode bez estrogena su bezbedna alternativa.'
        },
        {
          q: 'Devojka, 22 god., imala je nezaštićen odnos pre četiri dana. Koja je najefikasnija hitna kontracepcija u ovom trenutku?',
          options: ['Bakarni intrauterini uložak', 'Levonorgestrel 1,5 mg', 'Dve tablete kombinovane pilule', 'Hitna kontracepcija više nije moguća'],
          answer: 0,
          explain: 'Bakarni uložak postavljen u roku od 5 dana je najefikasnija hitna kontracepcija. Od tableta je 3–5 dana posle odnosa ulipristal efikasniji od levonorgestrela.'
        },
        {
          q: 'Žena, 31 god., leči hipertenziju ramiprilom i javlja da je test na trudnoću pozitivan. Šta uraditi?',
          options: ['Nastaviti ramipril do prvog pregleda kod ginekologa', 'Zameniti ramipril sartanom', 'Obustaviti ramipril i uvesti lek bezbedan u trudnoći, npr. labetalol', 'Obustaviti svu terapiju do porođaja'],
          answer: 2,
          explain: 'ACE inhibitori i sartani se obustavljaju čim se trudnoća potvrdi. Za hipertenziju u trudnoći biraju se labetalol, nifedipin ili metildopa, uz ciljni pritisak 135/85 mmHg.'
        },
        {
          q: 'Pacijentkinja na kombinovanoj piluli dobija amoksicilin zbog infekcije sinusa i pita da li je i dalje zaštićena. Šta odgovoriti?',
          options: ['Ne, mora da koristi kondom do kraja pakovanja', 'Da, antibiotici širokog spektra ne smanjuju efikasnost pilule', 'Ne, treba da udvostruči dozu pilule', 'Da, ali samo ako uzima i probiotik'],
          answer: 1,
          explain: 'Antibiotici širokog spektra ne utiču na efikasnost hormonske kontracepcije. Izuzetak su rifampicin i rifabutin, koji indukuju enzime jetre.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'urogenitalno-slucaj-1',
      title: 'Žena, 28 god., peckanje pri mokrenju',
      intro: 'Ambulanta doma zdravlja. Žena, 28 god., dva dana ima peckanje pri mokrenju, učestalo mokrenje i pritisak iznad stidne kosti. Nema vaginalni sekret. Temperatura 36,7 °C, TA 115/70 mmHg, lumbalna sukusija negativna. Poslednja menstruacija pre šest nedelja, ciklusi su joj neredovni.',
      steps: [
        {
          q: 'Šta treba uraditi pre izbora terapije?',
          options: ['Ultrazvuk bubrega', 'Test na trudnoću', 'CT urotrakta', 'Vaginalni bris'],
          answer: 1,
          explain: 'Izostanak menstruacije kod žene u reproduktivnom dobu zahteva test na trudnoću, jer trudnoća menja izbor leka, indikaciju za urinokulturu i dalji postupak.'
        },
        {
          q: 'Test na trudnoću je pozitivan. Kako to menja postupak kod cistitisa?',
          options: ['Ne menja; terapija je ista, bez urinokulture', 'Antibiotik se ne daje u prvom trimestru', 'Daje se ciprofloksacin 3 dana', 'Uzima se urinokultura i bira antibiotik bezbedan u trudnoći, npr. fosfomicin ili cefalosporin'],
          answer: 3,
          explain: 'Trudnoća je indikacija za urinokulturu. Dolaze u obzir penicilini, cefalosporini, fosfomicin i nitrofurantoin (ne pred termin); trimetoprim se izbegava u prvom trimestru, a fluorohinoloni se ne daju.'
        },
        {
          q: 'Pacijentkinja nije podigla lek. Posle tri dana dolazi sa temperaturom 38,9 °C, drhtavicom, bolom u desnoj slabini i povraćanjem. TA 100/60 mmHg, puls 112/min. Šta je ispravno?',
          options: ['Hitno uputiti u bolnicu', 'Fosfomicin jednokratno i kontrola sutra', 'Nitrofurantoin 5 dana', 'Oralni cefalosporin i kontrola za tri dana'],
          answer: 0,
          explain: 'Pijelonefritis u trudnoći sa povraćanjem i tahikardijom zahteva hospitalizaciju i parenteralnu terapiju. Fosfomicin i nitrofurantoin nisu lekovi za pijelonefritis.'
        },
        {
          q: 'Posle izlečenja pita da li u nastavku trudnoće treba lečiti bakterije u urinu ako nema tegobe. Šta odgovoriti?',
          options: ['Ne, bez simptoma se nikada ne leči', 'Samo ako ima temperaturu', 'Da, u trudnoći se asimptomatska bakteriurija traži i leči', 'Da, ali tek posle porođaja'],
          answer: 2,
          explain: 'Trudnoća je izuzetak od pravila da se asimptomatska bakteriurija ne leči: nelečena povećava rizik od pijelonefritisa.'
        }
      ]
    },
    {
      id: 'urogenitalno-slucaj-2',
      title: 'Muškarac, 71 god., ne može da mokri',
      intro: 'Ambulanta doma zdravlja. Muškarac, 71 god., od sinoć ne može da mokri, ima jak bol u donjem trbuhu. Poslednjih godinu dana ima slab mlaz i ustaje noću tri puta. Pre dva dana počeo je da uzima kombinovani preparat protiv prehlade sa dekongestivom. TA 165/95 mmHg, puls 96/min, afebrilan. Iznad simfize se palpira bolna, napeta rezistencija do pupka.',
      steps: [
        {
          q: 'Šta je prvi postupak?',
          options: ['Kateterizacija mokraćne bešike', 'Furosemid i.v. da podstakne mokrenje', 'Uput za ultrazvuk naredni dan', 'Analgetik i topla kupka'],
          answer: 0,
          explain: 'Akutna retencija urina se rešava odmah kateterizacijom. Diuretik bi dodatno rastegao bešiku, a odlaganje produžava bol i ugrožava bubrege.'
        },
        {
          q: 'Dobijeno je 900 ml bistrog urina, bol je prestao. Šta je najverovatnije izazvalo retenciju kod ovog pacijenta?',
          options: ['Kamen u bubregu', 'Dehidracija', 'Dekongestiv iz preparata protiv prehlade, na terenu uvećane prostate', 'Povišen krvni pritisak'],
          answer: 2,
          explain: 'Dekongestivi, antiholinergici i opioidi su česti okidači retencije kod muškaraca sa uvećanom prostatom. Pregled svih lekova, uključujući one bez recepta, obavezan je deo procene.'
        },
        {
          q: 'Kateter ostaje. Šta još uvesti pre pokušaja uklanjanja katetera?',
          options: ['Antibiotik širokog spektra', 'Finasterid kao jedini lek', 'Antimuskarinik', 'Alfa-blokator'],
          answer: 3,
          explain: 'Alfa-blokator se preporučuje pre uklanjanja katetera kod akutne retencije. Antimuskarinik bi povećao rizik ponovne retencije, a antibiotik bez znakova infekcije nije potreban.'
        },
        {
          q: 'Porodica traži da se odmah uradi PSA. Šta je ispravno?',
          options: ['Uraditi PSA odmah, dok je kateter plasiran', 'Odložiti PSA: manipulacije i infekcije lažno povisuju nalaz, pa se meri kasnije pod standardnim uslovima', 'PSA nije potreban nijednom muškarcu starijem od 70 godina', 'Uraditi PSA svakog dana do uklanjanja katetera'],
          answer: 1,
          explain: 'PSA treba meriti pod standardnim uslovima, bez prethodnih manipulacija i infekcije urinarnog trakta. O testiranju odlučuje informisan pacijent, uz procenu očekivanog životnog veka.'
        }
      ]
    }
  ]
});
