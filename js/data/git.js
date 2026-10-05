MED.register({
  id: 'git',
  title: 'Bolesti organa za varenje',
  icon: '🍽️',
  color: '#F5A524',
  topics: [
    {
      id: 'dispepsija-gerb',
      title: 'Dispepsija, GERB i ulkusna bolest',
      summary: 'Bez alarmnih simptoma: testiraj i leči H. pylori, pa IPP. Sa alarmnim simptomima: endoskopija bez odlaganja.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Dispepsija je bol ili nelagodnost u epigastrijumu, rana sitost ili postprandijalna punoća; GERB se prepoznaje po gorušici i regurgitaciji. Kod mlađih bez alarmnih simptoma ne treba odmah endoskopija: neinvazivno testiranje na **H. pylori** i eradikacija, a ako je test negativan ili tegobe traju, **IPP u punoj dozi 4 nedelje** (kod GERB-a 4 ili 8 nedelja). Uvek prvo pomisli da bol u epigastrijumu može biti akutni koronarni sindrom.' },
        { type: 'flags', title: 'Alarmni simptomi — endoskopija bez odlaganja', items: [
          'Disfagija (u bilo kom uzrastu)',
          'Nenamerni gubitak telesne mase',
          'Hematemeza, melena ili sideropenijska anemija',
          'Uporno povraćanje',
          'Palpabilna masa u gornjem trbuhu',
          'Dispepsija koja počinje posle 50. godine (Maastricht VI; prag 45–55 zavisno od regiona). NICE: od 55 godina uz gubitak telesne mase',
          'Povišen rizik od karcinoma želuca (npr. porodična anamneza)'
        ] },
        { type: 'steps', title: 'Postupak u ambulanti', items: [
          'Isključi srčani uzrok (EKG kod bola u epigastrijumu sa faktorima rizika) i bilijarni bol.',
          'Proveri lekove koji izazivaju dispepsiju: NSAIL, kalcijumski antagonisti, nitrati, teofilin, bisfosfonati, kortikosteroidi.',
          'Proveri alarmne simptome; ako postoje — uput za gastroskopiju po hitnom prioritetu, ne dugotrajna empirijska terapija.',
          'Bez alarmnih simptoma kod mlađih: neinvazivni test na H. pylori (urea izdisajni test ili antigen u stolici) i eradikacija ako je pozitivan.',
          'H. pylori negativan ili tegobe i posle eradikacije: IPP u punoj dozi 4 nedelje; zatim pokušaj ukidanje ili najnižu dozu koja kontroliše tegobe.',
          'Tipičan GERB bez alarmnih simptoma: IPP u punoj dozi 4 ili 8 nedelja, uz smanjenje telesne mase, prestanak pušenja i izbegavanje kasnih obroka.',
          'Bez odgovora na terapiju ili brz povratak tegoba: proveri pridržavanje terapije i uputi na gastroskopiju.'
        ] },
        { type: 'list', title: 'Testiranje na H. pylori', items: [
          'Za dijagnozu i kontrolu eradikacije: **urea izdisajni test** ili **antigen u stolici**.',
          'Pre testa: bez IPP **14 dana**, bez antibiotika i bizmuta najmanje **4 nedelje** (inače lažno negativan nalaz).',
          'Serologija ne dokazuje aktivnu infekciju: pre terapije je potrebna potvrda izdisajnim testom ili antigenom u stolici, a za kontrolu eradikacije se ne koristi.',
          'Kontrola uspeha eradikacije: **4–6 nedelja** po završetku terapije; u tom periodu bez antibiotika i bizmuta.',
          'Testiraj i leči i pacijente sa ulkusnom bolešću, uključujući ulkus u anamnezi.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'omeprazol', dose: '20 mg p.o. 1× dnevno, 4 nedelje (GERB 4 ili 8 nedelja)', note: 'Ekvivalentne pune doze: pantoprazol 40 mg, lansoprazol 30 mg, esomeprazol 20 mg, sve 1× dnevno' },
          { name: 'eradikacija: kvadriterapija sa bizmutom', dose: 'IPP 2× dnevno + bizmut + tetraciklin + metronidazol, p.o., 14 dana', note: 'Prvi izbor gde je rezistencija na klaritromicin visoka (>15%) ili nepoznata. Pojedinačne doze prema sažetku karakteristika leka' },
          { name: 'eradikacija: konkomitantna kvadriterapija bez bizmuta', dose: 'IPP 2× dnevno + amoksicilin + klaritromicin + metronidazol, p.o., 14 dana', note: 'Alternativa kada kvadriterapija sa bizmutom nije dostupna' },
          { name: 'eradikacija: trojna terapija sa klaritromicinom', dose: 'IPP 2× dnevno + klaritromicin + amoksicilin, p.o., 14 dana', note: 'Samo gde je rezistencija na klaritromicin niska (<15%) ili je osetljivost dokazana; visoka doza IPP 2× dnevno povećava uspeh' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Alarmni simptomi — gastroskopija po hitnom prioritetu.',
          'Hematemeza, melena ili znaci hemodinamske nestabilnosti — odmah u bolnicu (SHMP).',
          'Tegobe koje traju uprkos eradikaciji i terapiji IPP.',
          'Neuspeh eradikacione terapije — gastroenterolog (izbor sledeće linije, po mogućstvu prema testu osetljivosti).',
          'Ulkus želuca uz H. pylori — kontrolna endoskopija 6–8 nedelja od početka lečenja.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Ulkus kod pacijenta na NSAIL: ukini NSAIL ako je moguće, IPP u punoj dozi 8 nedelja, a ako je H. pylori prisutan, potom eradikacija.',
          'Ako se NSAIL mora nastaviti kod pacijenta sa ranijim ulkusom: uvek uz IPP i redovno preispitivanje potrebe za lekom.',
          'Dugotrajni IPP samo uz jasnu indikaciju i u najnižoj efikasnoj dozi; povremeno pokušaj ukidanje.',
          'Posle eradikacije uvek potvrdi uspeh testom.',
          'Bol u epigastrijumu kod pacijenta sa kardiovaskularnim rizikom je akutni koronarni sindrom dok EKG ne pokaže drugačije.'
        ] }
      ],
      sources: [
        { name: 'Maastricht VI/Florence konsenzus 2022 (Gut) – H. pylori', url: 'https://repositorio.uam.es/bitstream/10486/714546/1/9084539.pdf' },
        { name: 'NICE CG184 – Dyspepsia and GORD', url: 'https://www.nice.org.uk/guidance/cg184/chapter/Recommendations' },
        { name: 'NICE NG12 – Suspected cancer: recognition and referral', url: 'https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer' }
      ],
      questions: [
        {
          q: 'Žena, 32 god., tri meseca ima bol u epigastrijumu i postprandijalnu punoću. Nema gubitka telesne mase, disfagije ni anemije, ne uzima NSAIL. Šta je sledeći korak?',
          options: ['Neinvazivni test na H. pylori i eradikacija ako je pozitivan', 'Uput za gastroskopiju po hitnom prioritetu', 'Serologija na H. pylori i terapija ako je IgG pozitivan', 'Rendgensko snimanje želuca sa barijumskim kontrastom'],
          answer: 0,
          explain: 'Kod mlađih bez alarmnih simptoma primenjuje se strategija testiraj i leči. Serologija ne dokazuje aktivnu infekciju, a endoskopija je rezervisana za alarmne simptome i stariji uzrast.'
        },
        {
          q: 'Pacijent, 63 god., poslednja dva meseca ima novonastalu dispepsiju, izgubio je 6 kg i otežano guta čvrstu hranu. Šta je ispravno?',
          options: ['IPP 8 nedelja, pa kontrola', 'Test na H. pylori i eradikacija', 'Uput za gastroskopiju po hitnom prioritetu', 'Antacid po potrebi i dijetetski režim'],
          answer: 2,
          explain: 'Disfagija, gubitak telesne mase i novonastala dispepsija u ovom uzrastu su alarmni simptomi. Empirijska terapija može prikriti i odložiti dijagnozu karcinoma.'
        },
        {
          q: 'Pacijent je završio eradikacionu terapiju pre 10 dana i još uzima pantoprazol. Traži kontrolni test. Kako postupiti?',
          options: ['Odmah uraditi antigen u stolici', 'Uraditi serologiju jer na nju IPP ne utiče', 'Kontrola nije potrebna ako nema tegoba', 'Test 4–6 nedelja po završetku terapije, uz pauzu IPP od 14 dana'],
          answer: 3,
          explain: 'Rano testiranje i IPP daju lažno negativne nalaze. Serologija ostaje pozitivna dugo posle izlečenja i ne služi za kontrolu eradikacije.'
        },
        {
          q: 'U sredini sa visokom rezistencijom H. pylori na klaritromicin, koja je preporučena empirijska terapija prvog reda?',
          options: ['Trojna terapija sa klaritromicinom 7 dana', 'Kvadriterapija sa bizmutom 14 dana', 'IPP i amoksicilin 7 dana', 'Trojna terapija sa klaritromicinom 14 dana uz probiotik'],
          answer: 1,
          explain: 'Maastricht VI: gde je rezistencija na klaritromicin iznad 15% ili nepoznata, prvi izbor je kvadriterapija sa bizmutom 14 dana; ako nije dostupna, konkomitantna kvadriterapija bez bizmuta.'
        }
      ]
    },
    {
      id: 'gastroenteritis',
      title: 'Akutni gastroenteritis i dehidracija',
      summary: 'Ključ je procena dehidracije i oralna rehidracija; antibiotik retko, bolnica kod šoka i neuspeha oralne rehidracije.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina akutnih proliva je virusna i prolazi sama za nekoliko dana. Zadatak lekara je da proceni dehidraciju, započne **oralnu rehidraciju**, prepozna ko treba u bolnicu i izbegne nepotrebne antibiotike. Kod krvavog proliva bez povišene temperature misli na E. coli koja stvara šiga-toksin (STEC) — antibiotik se tada izbegava.' },
        { type: 'list', title: 'Procena dehidracije', items: [
          '**Bez kliničke dehidracije**: dobro opšte stanje, vlažne sluznice, uredna diureza i vitalni parametri.',
          '**Klinička dehidracija**: izmenjeno reagovanje (razdražljivost, letargija), smanjena diureza, upale oči, suve sluznice, tahikardija, tahipneja, snižen turgor.',
          '**Šok**: poremećaj svesti, bleda ili marmorizovana koža, hladni ekstremiteti, produženo kapilarno punjenje, slab puls, hipotenzija.',
          'Povišen rizik od dehidracije: odojčad (naročito mlađa od 6 meseci), deca koja su prestala da sisaju, česte stolice i povraćanja, pothranjeni.',
          'Pitaj: broj stolica i povraćanja, krv u stolici, temperatura, putovanja, skorašnji antibiotici, oboleli u okolini, rad sa hranom.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Znaci šoka ili poremećaj svesti',
          'Krv ili sluz u stolici, visoka temperatura, jak bol ili defans trbuha',
          'Uporno povraćanje koje onemogućava oralnu rehidraciju',
          'Temperatura 38 °C ili viša kod odojčeta mlađeg od 3 meseca',
          'Oligurija, bledilo i petehije posle krvavog proliva kod deteta (hemolitičko-uremijski sindrom)',
          'Proliv posle skorašnje antibiotske terapije ili hospitalizacije (C. difficile)'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni dehidraciju i vitalne parametre; kod dece izmeri telesnu masu.',
          'Bez dehidracije: nastavi dojenje i uobičajenu ishranu, podstiči unos tečnosti; bez voćnih sokova i gaziranih pića.',
          'Klinička dehidracija kod deteta: **oralni rehidracioni rastvor 50 ml/kg tokom 4 h**, uz tečnost za održavanje, često i u malim količinama; dojenje se nastavlja.',
          'Kod dece sa povišenim rizikom od ponovne dehidracije: posle rehidracije 5 ml/kg ORS posle svake obilne vodenaste stolice.',
          'Odrasli: ORS ili tečnost prema žeđi; kod blage do umerene dehidracije ORS smanjene osmolarnosti je prva linija.',
          'Šok kod deteta: brza i.v. infuzija **0,9% NaCl 10 ml/kg**, ponoviti ako šok traje; odrasli: kristaloid **500 ml za manje od 15 min** uz reprocenu. Hitan transport.',
          'Daj jasna uputstva kada da se jave: krv u stolici, nemogućnost pijenja, izostanak mokrenja, pospanost, proliv duži od 7 dana.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'oralni rehidracioni rastvor', dose: 'p.o., kod kliničke dehidracije deteta 50 ml/kg tokom 4 h uz tečnost za održavanje', note: 'Sokovi i gazirana pića nisu zamena' },
          { name: 'loperamid', dose: '2 mg tablete p.o. prema uputstvu, najviše 16 mg (8 tableta) dnevno; bez kontrole ne duže od 48 h', note: 'Samo imunokompetentni odrasli sa vodenastim prolivom; ne kod dece, temperature ni zapaljenskog (krvavog) proliva' },
          { name: 'azitromicin ili ciprofloksacin', dose: 'p.o., izbor, doza i trajanje prema lokalnoj osetljivosti, uzročniku i sažetku karakteristika leka', note: 'Samo uz indikaciju; kod akutnog vodenastog proliva bez putovanja empirijski antibiotik se ne preporučuje' }
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Šok ili poremećaj svesti — SHMP uz i.v. nadoknadu.',
          'Neuspeh oralne rehidracije zbog upornog povraćanja ili pogoršanje uprkos ORS.',
          'Odojčad sa crvenim zastavicama i krhki stariji sa znacima dehidracije.',
          'Krv u stolici sa visokom temperaturom, znaci sepse ili sumnja na hirurško oboljenje.',
          'Sumnja na hemolitičko-uremijski sindrom.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antibiotik se deci sa gastroenteritisom ne daje rutinski; indikacije su sepsa, širenje infekcije van creva i posebne grupe (npr. salmoneloza kod mlađih od 6 meseci, imunokompromitovani).',
          'Koprokultura: krv ili sluz u stolici, sumnja na sepsu, imunokompromitovani; razmotri posle putovanja u inostranstvo i ako nema poboljšanja do 7. dana.',
          'Infekcija STEC (krvav proliv, najčešće bez temperature): antibiotik se izbegava zbog rizika od hemolitičko-uremijskog sindroma; prati krvnu sliku i bubrežnu funkciju.',
          'Kod dece starije od 4 godine sa povraćanjem antiemetik (ondansetron) može olakšati oralnu rehidraciju.',
          'Proliv posle antibiotika ili hospitalizacije: traži C. difficile.',
          'Stariji na diureticima, ACE inhibitorima, metforminu i NSAIL: razmotri privremenu obustavu dok traje dehidracija.'
        ] }
      ],
      sources: [
        { name: 'NICE CG84 – Diarrhoea and vomiting caused by gastroenteritis in under 5s', url: 'https://www.nice.org.uk/guidance/cg84/chapter/Recommendations' },
        { name: 'IDSA 2017 – Infectious Diarrhea Guidelines', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5850553/' },
        { name: 'NICE CG174 – Intravenous fluid therapy in adults', url: 'https://www.nice.org.uk/guidance/cg174/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Dete, 2 godine, 12 kg, drugi dan proliv i povraćanje. Razdražljivo je, suvih sluznica, tahikardično, mokri ređe; koža je topla, kapilarno punjenje uredno. Šta je prvi postupak?',
          options: ['Odmah i.v. infuzija 0,9% NaCl u bolusu', 'Oralni rehidracioni rastvor 50 ml/kg tokom 4 h, u malim čestim količinama', 'Loperamid i dijeta bez mleka', 'Azitromicin i čaj sa šećerom'],
          answer: 1,
          explain: 'Ovo je klinička dehidracija bez šoka: oralna rehidracija je prvi izbor (50 ml/kg za 4 h uz tečnost za održavanje). Loperamid se ne daje deci, a antibiotik nema indikaciju.'
        },
        {
          q: 'Dečak, 5 godina, ima krvav proliv i grčeve u trbuhu dva dana, bez temperature. Jeo je nedovoljno pečeno mleveno meso. Šta treba izbeći?',
          options: ['Oralnu rehidraciju', 'Koprokulturu', 'Antibiotik i loperamid', 'Kontrolu diureze i krvne slike'],
          answer: 2,
          explain: 'Slika odgovara infekciji E. coli koja stvara šiga-toksin. Antibiotici se izbegavaju zbog rizika od hemolitičko-uremijskog sindroma, a antiperistaltici se deci ne daju; potrebni su rehidracija, koprokultura i praćenje.'
        },
        {
          q: 'Žena, 78 god., na ramiprilu, furosemidu i metforminu, treći dan ima proliv. TA 85/50 mmHg, puls 112/min, pospana, hladnih ekstremiteta, ne mokri od jutros. Šta je ispravno?',
          options: ['Kristaloid i.v. 500 ml za manje od 15 min uz reprocenu i hitan transport u bolnicu', 'ORS kod kuće i kontrola za tri dana', 'Loperamid i nastavak redovne terapije', 'Ciprofloksacin i kontrola sutra'],
          answer: 0,
          explain: 'Hipotenzija, tahikardija, pospanost i oligurija znače hipovolemijski šok. Daje se bolus kristaloida uz reprocenu i organizuje hitan transport; lekovi koji pogoršavaju bubrežnu funkciju se privremeno obustavljaju.'
        },
        {
          q: 'Muškarac, 70 god., pre dve nedelje lečen klindamicinom, ima 6–8 vodenastih stolica dnevno, bol u trbuhu i temperaturu 38 °C. Šta je sledeći korak?',
          options: ['Loperamid do prestanka proliva', 'Probiotik i kontrola za sedam dana', 'Empirijski ciprofloksacin tri dana', 'Testiranje stolice na C. difficile, bez antiperistaltika'],
          answer: 3,
          explain: 'Proliv posle antibiotske terapije zahteva testiranje na C. difficile. Loperamid se izbegava kod proliva sa temperaturom i kada preti toksični megakolon.'
        }
      ]
    },
    {
      id: 'opstipacija',
      title: 'Opstipacija, hemoroidi i analna fisura',
      summary: 'Isključi alarmne znake i lekove kao uzrok; vlakna, tečnost i osmotski laksativ. Rektalno krvarenje ne pripisuj hemoroidima napamet.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Hronična opstipacija je najčešće funkcionalna ili izazvana lekovima. Lečenje ide stepenasto: način života i vlakna, zatim **osmotski laksativ** (makrogol), pa stimulativni laksativ kratkotrajno ili po potrebi. Hemoroidi i fisura se leče omekšavanjem stolice i lokalnim merama, ali svako rektalno krvarenje zahteva digitorektalni pregled i procenu rizika za kolorektalni karcinom.' },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Novonastala opstipacija ili promena ritma pražnjenja u starijem životnom dobu',
          'Rektalno krvarenje, pozitivan test na okultno krvarenje, sideropenijska anemija',
          'Nenamerni gubitak telesne mase',
          'Palpabilna masa u trbuhu ili rektumu',
          'Porodična anamneza kolorektalnog karcinoma ili zapaljenske bolesti creva',
          'Izostanak stolice i vetrova uz povraćanje i distenziju (ileus)',
          'Fisura koja nije u srednjoj liniji ili je višestruka (misli na Kronovu bolest, infekcije, karcinom)'
        ] },
        { type: 'list', title: 'Uzroci na koje treba misliti', items: [
          'Lekovi: opioidi, antiholinergici, triciklični antidepresivi, verapamil, preparati gvožđa i kalcijuma, antacidi sa aluminijumom.',
          'Metabolički: hipotireoza, hiperkalcemija, dijabetes, hipokalijemija.',
          'Neurološki: Parkinsonova bolest, multipla skleroza, lezije kičmene moždine.',
          'Opstruktivni: karcinom, striktura, rektokela.',
          'Kod starijih i nepokretnih: fekalna impakcija sa prelivnim prolivom — uvek digitorektalni pregled.'
        ] },
        { type: 'steps', title: 'Postupak kod hronične opstipacije', items: [
          'Anamneza (učestalost, konzistencija po Bristolskoj skali, naprezanje, lekovi), pregled trbuha i digitorektalni pregled.',
          'Bez alarmnih znakova dovoljna je osnovna laboratorija prema proceni (krvna slika, TSH, glikemija, kalcijum).',
          'Mere: postepeno povećanje unosa vlakana, dovoljno tečnosti, fizička aktivnost, redovan odlazak u toalet posle obroka.',
          'Dodatak vlakana (ispagula) ako ishrana nije dovoljna; uvek uz dosta tečnosti.',
          'Bez dovoljnog odgovora: makrogol (polietilen-glikol), doza se prilagođava do meke formirane stolice.',
          'Nedovoljan odgovor: bisakodil ili natrijum-pikosulfat kratkotrajno ili po potrebi; alternativa je sena.',
          'Fekalna impakcija: rešava se rektalno i laksativima, a potom se uvodi redovna profilaksa.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'makrogol (polietilen-glikol)', dose: '17 g p.o. 1× dnevno (obično jedna kesica), prilagoditi prema efektu', note: 'Osmotski laksativ sa najjačom preporukom; lekove uzimati sa razmakom od najmanje 1 h' },
          { name: 'bisakodil', dose: '5–10 mg p.o. uveče (početi sa 5 mg) ili supozitorija 10 mg rektalno ujutru', note: 'Kratkotrajno ili po potrebi; česti grčevi i proliv pri 10 mg' },
          { name: 'ispagula (psilijum)', dose: '1 kesica granula p.o. 2× dnevno, rastvorena u najmanje 150 ml vode', note: 'Uvoditi postepeno; može pojačati nadimanje' },
          { name: 'laktuloza', dose: 'p.o. 1–2× dnevno, doza prema sažetku karakteristika leka', note: 'Kada drugi laksativi ne pomognu ili se ne podnose; nadimanje je često' }
        ] },
        { type: 'list', title: 'Hemoroidi i analna fisura', items: [
          '**Hemoroidi**: svetlocrvena, bezbolna krv posle stolice, svrab, izraslina oko anusa.',
          'Lečenje: dosta tečnosti i vlakana, bez naprezanja i dugog sedenja na šolji, tople kupke; lokalne kreme za bol, svrab i otok kratkotrajno.',
          'Kod hemoroida koji krvare izbegavati ibuprofen; za bol paracetamol.',
          'Bez uspeha ili kod velikih hemoroida: ambulantne procedure (npr. ligatura gumicom) ili operacija.',
          '**Analna fisura**: oštar bol pri defekaciji i trag sveže krvi; tipično u zadnjoj srednjoj liniji.',
          'Lečenje fisure: laksativ kod opstipacije, tople kupke i lokalna mast koja pomaže zarastanje (gliceril-trinitrat), primena do 8 nedelja; bez uspeha — hirurg.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Alarmni znaci — kolonoskopija po hitnom prioritetu.',
          'Sumnja na ileus ili akutni abdomen — hitno hirurgu.',
          'Obilno ili neprekidno rektalno krvarenje — hitno.',
          'Hemoroidi bez odgovora na konzervativno lečenje ili veliki prolabirani hemoroidi — hirurg/proktolog.',
          'Fisura koja ne zarasta uprkos lokalnoj terapiji; atipična fisura.',
          'Opstipacija refraktorna na kombinaciju laksativa — gastroenterolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Hemoroidi ne objašnjavaju anemiju, tamnu krv pomešanu sa stolicom ni promenu ritma pražnjenja — traži drugi uzrok.',
          'Uz svaki jak opioid u trajnoj terapiji odmah propiši redovan laksativ.',
          'Proliv kod nepokretnog starijeg pacijenta može biti prelivanje pored impakcije — pre loperamida uradi digitorektalni pregled.',
          'Vlakna bez dovoljno tečnosti pogoršavaju tegobe.'
        ] }
      ],
      sources: [
        { name: 'AGA–ACG 2023 – Pharmacological Management of Chronic Idiopathic Constipation', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10542656/' },
        { name: 'NHS – Anal fissure', url: 'https://www.nhs.uk/conditions/anal-fissure/' },
        { name: 'NHS – Piles (haemorrhoids)', url: 'https://www.nhs.uk/conditions/piles-haemorrhoids/' }
      ],
      questions: [
        {
          q: 'Muškarac, 61 god., dva meseca ima opstipaciju koju ranije nije imao, povremeno tamniju krv pomešanu sa stolicom i hemoglobin 108 g/l. Pri pregledu se vide hemoroidi. Šta je ispravno?',
          options: ['Lokalna terapija hemoroida i kontrola za mesec dana', 'Makrogol i preparat gvožđa, kontrola krvne slike za tri meseca', 'Uput za kolonoskopiju po hitnom prioritetu', 'Savet o ishrani bogatoj vlaknima i kontrola po potrebi'],
          answer: 2,
          explain: 'Promena ritma pražnjenja, krv pomešana sa stolicom i anemija u ovom uzrastu zahtevaju obradu debelog creva bez odlaganja. Prisustvo hemoroida ne isključuje karcinom.'
        },
        {
          q: 'Žena, 45 god., ima hroničnu funkcionalnu opstipaciju. Vlakna, tečnost i kretanje sprovodi nekoliko nedelja bez dovoljnog efekta. Šta je sledeći izbor?',
          options: ['Bisakodil svakodnevno kao trajna monoterapija', 'Klizma svaki drugi dan', 'Loperamid radi regulacije ritma', 'Makrogol, uz prilagođavanje doze do meke formirane stolice'],
          answer: 3,
          explain: 'Posle higijensko-dijetetskih mera sledi osmotski laksativ; makrogol ima najjaču preporuku. Stimulativni laksativi su namenjeni kratkotrajnoj primeni ili primeni po potrebi.'
        },
        {
          q: 'Pacijentkinja, 29 god., ima oštar bol pri defekaciji uz trag sveže krvi. Vidi se pukotina u zadnjoj srednjoj liniji. Tegobe traju 10 dana, sklona je opstipaciji. Kako lečiti?',
          options: ['Omekšavanje stolice laksativom, tople kupke i lokalna mast koja pomaže zarastanje', 'Odmah uput hirurgu za operaciju', 'Oralni antibiotik sedam dana', 'Ibuprofen redovno i kontrola za dva meseca'],
          answer: 0,
          explain: 'Fisura u tipičnoj lokalizaciji leči se konzervativno: omekšavanje stolice i lokalna terapija do 8 nedelja. Hirurgija dolazi u obzir ako to ne uspe.'
        },
        {
          q: 'Nepokretna žena, 86 god., na tramadolu, ima curenje tečne stolice poslednja tri dana. Trbuh je distendiran, bez defansa. Šta je prvi postupak?',
          options: ['Loperamid 2 mg posle svake stolice', 'Digitorektalni pregled radi isključenja fekalne impakcije', 'Koprokultura i empirijski antibiotik', 'Dijeta sa pirinčem i čajem'],
          answer: 1,
          explain: 'Kod nepokretne starije osobe na opioidu tečna stolica je često prelivanje pored impakcije. Loperamid bi pogoršao stanje; impakcija se prvo rešava, a zatim se uvodi redovan laksativ.'
        }
      ]
    },
    {
      id: 'iritabilno-crevo',
      title: 'Sindrom iritabilnog creva',
      summary: 'Pozitivna dijagnoza po Rimskim IV kriterijumima uz ograničen skup analiza; alarmni znaci traže dalju obradu.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Sindrom iritabilnog creva (SIC) je funkcionalni poremećaj creva. Dijagnoza se postavlja **pozitivno**, na osnovu kriterijuma i malog broja analiza, a ne isključivanjem svega redom. Dobro objašnjenje dijagnoze i realna očekivanja deo su terapije.' },
        { type: 'list', title: 'Rimski IV kriterijumi', items: [
          'Rekurentni bol u trbuhu u proseku **najmanje 1 dan nedeljno u poslednja 3 meseca**, uz dva ili više od sledećeg:',
          'povezanost bola sa defekacijom;',
          'promena učestalosti stolice;',
          'promena oblika (izgleda) stolice.',
          'Kriterijumi ispunjeni poslednja 3 meseca, a početak simptoma najmanje **6 meseci** pre dijagnoze.',
          'Podtipovi prema obliku stolice: sa opstipacijom, sa dijarejom, mešoviti, neklasifikovani.'
        ] },
        { type: 'flags', title: 'Alarmni znaci — nije SIC dok se ne isključi drugo', items: [
          'Nenamerni gubitak telesne mase',
          'Rektalno krvarenje',
          'Anemija',
          'Promena ritma pražnjenja koja počinje u starijem životnom dobu',
          'Palpabilna masa u trbuhu ili rektumu, povišeni markeri zapaljenja',
          'Porodična anamneza karcinoma creva ili jajnika',
          'Noćni simptomi koji bude pacijenta, povišena temperatura'
        ] },
        { type: 'list', title: 'Šta isključiti i čime', items: [
          'Krvna slika, sedimentacija i CRP.',
          'Serologija na celijakiju (antitela na tkivnu transglutaminazu ili endomizijum).',
          'Fekalni kalprotektin, gde je dostupan, pomaže da se kod dijareje razlikuje zapaljenska bolest creva.',
          'Kod pacijenta koji ispunjava kriterijume i nema alarmne znake **nisu potrebni**: ultrazvuk, kolonoskopija ni irigografija.',
          'Kod žena sa novim nadimanjem i bolom u karlici misli na karcinom jajnika.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Postavi pozitivnu dijagnozu i objasni prirodu bolesti.',
          'Ishrana: redovni obroci; ako se savetuje više vlakana, neka budu rastvorljiva (ispagula, ovas), a nerastvorljiva (mekinje) izbegavati.',
          'Bez poboljšanja: dijeta sa malo FODMAP, isključivo uz stručno vođenje.',
          'Lek prema dominantnom simptomu: spazmolitik po potrebi za bol, loperamid za dijareju, laksativ (ne laktuloza) za opstipaciju.',
          'Doze laksativa i loperamida pacijent prilagođava do meke, formirane stolice (Bristol tip 4).',
          'Bez odgovora: triciklični antidepresiv u maloj dozi; kontrola posle 4 nedelje, zatim na 6–12 meseci.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'mebeverin', dose: 'tablete p.o. 3× dnevno, 20 minuta pre obroka (ili kapsule sa produženim oslobađanjem 2× dnevno)', note: 'Spazmolitik, po potrebi; jačina prema preparatu' },
          { name: 'hioscin-butilbromid', dose: '10 mg p.o. 3× dnevno, po potrebi do 20 mg 4× dnevno', note: 'Spazmolitik sa antiholinergičkim dejstvom' },
          { name: 'loperamid', dose: 'p.o., doza se prilagođava prema konzistenciji stolice', note: 'Prvi izbor za dijareju u SIC' },
          { name: 'makrogol', dose: '17 g p.o. 1× dnevno, prilagoditi prema efektu', note: 'Za oblik sa opstipacijom; laktulozu izbegavati' },
          { name: 'amitriptilin', dose: '5–10 mg p.o. uveče, po potrebi povećavati, obično ne preko 30 mg', note: 'Druga linija; primena van odobrenih indikacija' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Bilo koji alarmni znak — gastroenterolog, po potrebi hitna kolonoskopija.',
          'Pozitivna serologija na celijakiju ili povišen fekalni kalprotektin.',
          'Izostanak odgovora na lekove posle 12 meseci — psihološke terapije (kognitivno-bihejvioralna terapija, hipnoterapija).',
          'Izražena anksioznost ili depresija — psihijatar ili psiholog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Laktuloza pojačava nadimanje i ne preporučuje se u SIC.',
          'Serologiju na celijakiju radi dok pacijent još jede gluten.',
          'SSRI dolaze u obzir tek ako triciklični antidepresiv ne pomogne.',
          'Ponavljanje pretraga bez nove indikacije učvršćuje strah od bolesti i ne pomaže pacijentu.'
        ] }
      ],
      sources: [
        { name: 'Rome Foundation – Rome IV kriterijumi', url: 'https://theromefoundation.org/rome-iv/rome-iv-criteria/' },
        { name: 'NICE CG61 – Irritable bowel syndrome in adults', url: 'https://www.nice.org.uk/guidance/cg61/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 27 god., osam meseci ima bol u trbuhu koji popušta posle stolice i 3–4 kašaste stolice dnevno, bez krvi, noćnih tegoba i gubitka telesne mase. Koje analize su opravdane pre postavljanja dijagnoze?',
          options: ['Kolonoskopija sa biopsijama i CT abdomena', 'Ultrazvuk abdomena i irigografija', 'Hormoni štitaste žlezde i test na parazite, obavezno kod svih', 'Krvna slika, sedimentacija, CRP i serologija na celijakiju'],
          answer: 3,
          explain: 'Kod pacijenta koji ispunjava kriterijume dovoljan je mali skup analiza. Ultrazvuk, kolonoskopija i irigografija nisu potrebni bez alarmnih znakova.'
        },
        {
          q: 'Muškarac, 56 god., poslednja tri meseca ima proliv koji ga budi noću i izgubio je 5 kg. Smatra da ima nervozna creva jer je pod stresom. Šta je ispravno?',
          options: ['Uputiti na dalju obradu, uključujući kolonoskopiju', 'Mebeverin i kontrola za osam nedelja', 'Dijeta sa malo FODMAP i probiotik', 'Amitriptilin 10 mg uveče'],
          answer: 0,
          explain: 'Nenamerni gubitak telesne mase i noćni proliv nisu deo slike SIC i zahtevaju obradu. Simptomatska terapija bi odložila dijagnozu.'
        },
        {
          q: 'Pacijentkinja sa SIC i dominantnom opstipacijom uzima laktulozu i žali se na još jače nadimanje. Šta predložiti?',
          options: ['Povećati dozu laktuloze', 'Zameniti laktulozu drugim laksativom, npr. makrogolom', 'Dodati pšenične mekinje', 'Uvesti loperamid po potrebi'],
          answer: 1,
          explain: 'U SIC se laktuloza ne preporučuje. Nerastvorljiva vlakna poput mekinja takođe treba izbegavati; ako se vlakna povećavaju, biraju se rastvorljiva.'
        }
      ]
    },
    {
      id: 'jetra',
      title: 'Povišene transaminaze, masna jetra i virusni hepatitisi',
      summary: 'Odredi obrazac poremećaja, uzmi anamnezu o alkoholu i lekovima, testiraj na HBV i HCV i proceni fibrozu pomoću FIB-4.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Blago povišene transaminaze su čest slučajan nalaz. Najčešći uzroci su **masna bolest jetre udružena sa metaboličkom disfunkcijom (MASLD, ranije NAFLD)**, alkohol, lekovi i hronični virusni hepatitisi. Visina ALT ne govori o težini bolesti jetre — prognozu određuje **fibroza**, pa je nju potrebno proceniti.' },
        { type: 'list', title: 'Obrazac nalaza', items: [
          '**Hepatocelularni**: dominiraju ALT i AST — masna jetra, virusi, lekovi, alkohol, autoimuni hepatitis.',
          '**Holestatski**: dominiraju ALP i GGT — opstrukcija žučnih puteva, lekovi, holestatske bolesti jetre; prvi korak je ultrazvuk.',
          'AST viši od ALT uz povišen GGT i MCV upućuje na alkohol.',
          'Izrazito visoke transaminaze: akutni virusni hepatitis, lekovi i toksini (paracetamol), ishemija jetre, autoimuni hepatitis.',
          'Izolovano povišen AST: misli na mišićno poreklo (napor, miopatija) — odredi CK.',
          'Sintetsku funkciju pokazuju albumin i INR, a ne transaminaze.'
        ] },
        { type: 'steps', title: 'Pristup u ambulanti', items: [
          'Anamneza: alkohol (količina), svi lekovi, biljni preparati i suplementi, faktori rizika za virusne hepatitise, porodična anamneza.',
          'Pregled: obim struka i BMI, žutica, hepatosplenomegalija, znaci hronične bolesti jetre.',
          'Bez simptoma i uz blago povišenje: ponovi nalaz uz apstinenciju od alkohola i ukidanje sumnjivih preparata.',
          'Osnovna obrada: ALT, AST, ALP, GGT, bilirubin, albumin, INR, krvna slika sa trombocitima, **HBsAg, anti-HCV**, glikemija ili HbA1c, lipidi, ultrazvuk abdomena.',
          'Ako je to uredno, dalje prema slici: status gvožđa, autoantitela, serologija na celijakiju, kod mlađih ceruloplazmin.',
          'Izračunaj **FIB-4** (uzrast, AST, ALT, trombociti) kod svakog sa masnom jetrom ili metaboličkim faktorima rizika.',
          'Savetuj smanjenje telesne mase, fizičku aktivnost, ograničenje alkohola i lečenje dijabetesa i dislipidemije.'
        ] },
        { type: 'list', title: 'Procena fibroze (FIB-4)', items: [
          '**<1,3**: nizak rizik uznapredovale fibroze — praćenje u primarnoj zaštiti i ponavljanje FIB-4 na 1–3 godine.',
          '**1,3–2,67**: neodređeno — elastografija jetre ili drugi neinvazivni test.',
          '**≥2,67**: visok rizik — uputiti hepatologu.',
          'Najčešći uzrok smrti kod masne jetre je kardiovaskularna bolest: proceni i leči ukupni kardiovaskularni rizik.',
          'Gubitak 3–5% telesne mase smanjuje steatozu; za poboljšanje zapaljenja i fibroze obično je potrebno više od 10%.'
        ] },
        { type: 'list', title: 'Virusni hepatitisi — tumačenje', items: [
          '**HBsAg pozitivan**: infekcija virusom hepatitisa B — uputiti infektologu/hepatologu radi dalje obrade i odluke o lečenju.',
          'Infekcija HBV stečena u odraslom dobu retko prelazi u hroničnu (manje od 5%), a u ranom detinjstvu u oko 95% slučajeva.',
          '**Anti-HCV pozitivan**: dokaz kontakta sa virusom; hroničnu infekciju potvrđuje **HCV RNK**, jer oko 30% zaraženih spontano eliminiše virus.',
          'Hronični hepatitis C: direktno delujući antivirusni lekovi dovode do izlečenja u preko 95% slučajeva — svakog sa pozitivnom HCV RNK uputi na lečenje.',
          'Hronični hepatitis B leči se oralnim antivirusnim lekovima (tenofovir, entekavir) prema indikaciji specijaliste.',
          'Akutni virusni hepatitisi podležu obaveznom prijavljivanju; proveri vakcinalni status ukućana.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Žutica uz produžen INR, poremećaj svesti ili ascites — hitno u bolnicu.',
          'Izrazito visoke transaminaze ili sumnja na predoziranje paracetamolom — hitno.',
          'Pozitivan HBsAg ili HCV RNK — infektolog/hepatolog.',
          'FIB-4 ≥2,67 ili povišena krutost jetre na elastografiji.',
          'Holestatski obrazac sa proširenim žučnim putevima na ultrazvuku — hitna obrada.',
          'Trajno povišeni enzimi bez jasnog uzroka.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Uredne ili blago povišene transaminaze ne isključuju uznapredovalu fibrozu ni cirozu.',
          'Statini su bezbedni kod masne jetre i smanjuju kardiovaskularni rizik; ne ukidaj ih zbog blago povišenih transaminaza.',
          'Uvek pitaj za biljne čajeve, dodatke ishrani i anabolike — pacijenti ih ne smatraju lekovima.',
          'Pad broja trombocita kod hronične bolesti jetre upućuje na uznapredovalu bolest.'
        ] }
      ],
      sources: [
        { name: 'AASLD 2023 – Practice Guidance on NAFLD (MASLD)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10735173/' },
        { name: 'WHO – Hepatitis C', url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-c' },
        { name: 'WHO – Hepatitis B', url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b' }
      ],
      questions: [
        {
          q: 'Muškarac, 48 god., BMI 33, sa dijabetesom tipa 2, ima ALT 78 i AST 52 U/l na dva merenja. Ne pije alkohol, HBsAg i anti-HCV su negativni, ultrazvuk pokazuje steatozu. Šta je sledeći korak?',
          options: ['Uput za biopsiju jetre', 'Izračunati FIB-4 radi procene rizika od fibroze', 'Ukinuti statin koji uzima', 'Kontrola enzima za godinu dana bez drugih mera'],
          answer: 1,
          explain: 'Kod masne jetre prognozu određuje fibroza, pa je prvi korak neinvazivna procena pomoću FIB-4. Statin je bezbedan i smanjuje kardiovaskularni rizik, glavni uzrok smrti ovih pacijenata.'
        },
        {
          q: 'Kod pacijenta, 55 god., sa masnom jetrom izračunat je FIB-4 od 3,1. Enzimi jetre su samo blago povišeni. Kako postupiti?',
          options: ['Ponoviti FIB-4 za tri godine', 'Savetovati dijetu i ne pratiti dalje', 'Uputiti hepatologu', 'Uvesti biljni hepatoprotektiv i kontrolisati enzime'],
          answer: 2,
          explain: 'FIB-4 od 2,67 ili više znači visok rizik uznapredovale fibroze i zahteva specijalističku procenu. Blago povišeni enzimi ne isključuju cirozu.'
        },
        {
          q: 'Žena, 39 god., ima anti-HCV pozitivan nalaz pri dobrovoljnom davanju krvi. Enzimi jetre su uredni. Šta je sledeći korak?',
          options: ['Odrediti HCV RNK', 'Ponoviti anti-HCV za šest meseci', 'Objasniti da je preležala infekciju i da obrada nije potrebna', 'Odmah uputiti na biopsiju jetre'],
          answer: 0,
          explain: 'Anti-HCV pokazuje kontakt sa virusom, a hroničnu infekciju potvrđuje HCV RNK. Lečenje direktno delujućim antivirusnim lekovima dovodi do izlečenja u preko 95% slučajeva.'
        },
        {
          q: 'Mladić, 24 god., dolazi zbog žutice, mučnine i tamne mokraće. ALT je 1850 U/l, a INR 1,9. Pospan je i usporeno odgovara. Šta je ispravno?',
          options: ['Mirovanje kod kuće, dijeta i kontrola za sedam dana', 'Ambulantno uraditi serologiju i ultrazvuk sledeće nedelje', 'Propisati hepatoprotektiv i kontrolisati enzime', 'Hitno uputiti u bolnicu'],
          answer: 3,
          explain: 'Žutica uz produžen INR i poremećaj svesti ukazuje na akutnu insuficijenciju jetre i zahteva hitnu hospitalizaciju.'
        }
      ]
    },
    {
      id: 'zucna-kesa',
      title: 'Bilijarna kolika, holecistitis i akutni pankreatitis',
      summary: 'Kolika prolazi sama; bol koji traje više sati, temperatura ili žutica znače komplikaciju i bolnicu.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kamenci u žučnoj kesi su česti i u oko 80% nosilaca asimptomatski. Zadatak u ambulanti je razlikovati nekomplikovanu **bilijarnu koliku** (analgezija i elektivni hirurg) od **holecistitisa, holangitisa i pankreatitisa**, koji zahtevaju hitno upućivanje. Kod svakog bola u gornjem trbuhu uradi EKG.' },
        { type: 'list', title: 'Klinička slika', items: [
          '**Bilijarna kolika**: epizode jakog bola pod desnim rebarnim lukom ili u epigastrijumu koje traju najmanje 15–30 minuta, sa širenjem u leđa ili desno rame; bez temperature.',
          '**Akutni holecistitis**: jak bol koji traje više sati i pojačava se, temperatura, bolna osetljivost na palpaciju (Marfijev znak), povišeni markeri zapaljenja.',
          '**Kamen u holedohusu**: žutica, tamna mokraća, svetla stolica, poremećeni testovi jetre.',
          '**Akutni holangitis**: bol, temperatura sa drhtavicom i žutica; uz hipotenziju i konfuziju životno ugrožavajuće stanje.',
          '**Akutni pankreatitis**: naglo nastao jak bol u gornjem trbuhu, često sa mučninom i povraćanjem; osetljiv epigastrijum, temperatura, tahikardija.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Bol koji traje više sati ili se ne smiruje na analgetik',
          'Temperatura, drhtavica, defans ili palpabilna bolna žučna kesa',
          'Žutica',
          'Hipotenzija, tahikardija, konfuzija (sepsa, teški pankreatitis)',
          'Jak bol u gornjem trbuhu sa upornim povraćanjem',
          'Stariji i dijabetičari: klinička slika može biti blaga i pri teškoj bolesti'
        ] },
        { type: 'list', title: 'Dijagnostika', items: [
          'Kod sumnje na kamence: testovi jetre i **ultrazvuk abdomena**.',
          'Ultrazvučni znaci holecistitisa: zadebljan zid žučne kese, tečnost oko nje, ultrazvučni Marfijev znak.',
          'Prošireni žučni putevi ili poremećeni testovi jetre uz uredan ultrazvuk: dalja obrada (MRCP) u bolnici.',
          'Sumnja na pankreatitis: amilaza ili lipaza, ali obrada pripada bolnici; ne podrazumevaj da je uzrok alkohol samo zato što pacijent pije.',
          'Diferencijalno: infarkt miokarda, ulkusna bolest i perforacija, bazalna pneumonija, pijelonefritis, bolesti aorte.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Vitalni parametri, pregled trbuha, EKG.',
          'Tipična kolika bez crvenih zastavica: NSAIL parenteralno; ako bol potpuno prestane, pacijent ide kući uz uput za ultrazvuk i testove jetre.',
          'Savet: odmah se javiti kod bola koji traje više sati, temperature ili žutice.',
          'Dokazani simptomatski kamenci: uput hirurgu radi laparoskopske holecistektomije.',
          'Sumnja na holecistitis, holangitis ili pankreatitis: ništa na usta, i.v. linija i kristaloid, analgezija, hitan transport u bolnicu.',
          'Kod znakova sepse ili šoka: kiseonik, brza nadoknada tečnosti i transport SHMP uz najavu.'
        ] },
        { type: 'drugs', title: 'Analgezija', items: [
          { name: 'diklofenak', dose: '50–75 mg i.m. jednokratno', note: 'Prvi izbor kod bilijarne kolike; smanjuje i rizik prelaska u holecistitis. Oprez: oštećenje bubrega, gastrointestinalne komplikacije, alergija na NSAIL' },
          { name: 'metamizol', dose: '500–1000 mg p.o., najviše 4× dnevno (do 4 g dnevno)', note: 'Može biti dovoljan u blažim slučajevima ili kada je NSAIL kontraindikovan; rizik agranulocitoze' },
          { name: 'ibuprofen', dose: '400 mg p.o. do 3× dnevno, uz obrok', note: 'Za kuću do operacije, najkraće moguće' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Holecistitis — hitno hirurgu; rana laparoskopska holecistektomija (u roku od nedelju dana od dijagnoze) je standard.',
          'Holangitis — hitno u bolnicu.',
          'Akutni pankreatitis — hitna hospitalizacija, i kada je pacijent pri prvom pregledu stabilan.',
          'Žutica ili prošireni žučni putevi na ultrazvuku — hitna obrada.',
          'Simptomatska holelitijaza — hirurgu radi holecistektomije.',
          'Polip žučne kese od 1 cm ili veći — hirurg.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Asimptomatski kamenci u normalnoj žučnoj kesi se ne leče dok ne daju simptome.',
          'Posle prve kolike oko polovine pacijenata ima ponovne napade; godišnji rizik komplikacija je 0,5–3%.',
          'NSAIL bolje kontrolišu bol od spazmolitika; spazmolitik (butilskopolamin) može se dodati, a kod jakog bola dolazi u obzir i opioid.',
          'Kod akutnog pankreatitisa se ne daju profilaktički antibiotici.',
          'Bol u gornjem trbuhu kod starijeg pacijenta sa hipotenzijom: pre pankreatitisa isključi infarkt i bolest aorte.'
        ] }
      ],
      sources: [
        { name: 'EASL 2016 – Clinical Practice Guidelines: gallstones', url: 'https://easl.eu/wp-content/uploads/2018/10/Gallstones-English-report.pdf' },
        { name: 'NICE CG188 – Gallstone disease', url: 'https://www.nice.org.uk/guidance/cg188/chapter/Recommendations' },
        { name: 'NICE NG104 – Pancreatitis', url: 'https://www.nice.org.uk/guidance/ng104/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 44 god., dolazi sa bolom pod desnim rebarnim lukom koji je počeo pre dva sata posle masne večere i širi se pod lopaticu. Afebrilna je, trbuh je mek, EKG uredan. Šta dati?',
          options: ['Opioid i.v. i hitan transport hirurgu', 'Omeprazol i antacid', 'Diklofenak 75 mg i.m. i posmatranje do prestanka bola', 'Ceftriakson i.m. i kontrola sutra'],
          answer: 2,
          explain: 'Slika odgovara nekomplikovanoj bilijarnoj kolici, gde je NSAIL prvi izbor jer ublažava bol i smanjuje rizik od progresije u holecistitis. Bez temperature i defansa nema indikacije za antibiotik ni hitan transport.'
        },
        {
          q: 'Ista pacijentkinja se javlja posle dva dana: bol traje 14 sati, ima temperaturu 38,4 °C i bolnu osetljivost uz prekid udaha pri palpaciji pod desnim rebarnim lukom. Šta je ispravno?',
          options: ['Ponoviti diklofenak i zakazati ultrazvuk naredne nedelje', 'Oralni antibiotik i kontrola za tri dana', 'Spazmolitik i dijeta bez masti', 'Hitno uputiti hirurgu zbog sumnje na akutni holecistitis'],
          answer: 3,
          explain: 'Bol koji traje više sati, temperatura i pozitivan Marfijev znak znače akutni holecistitis. Lečenje je bolničko, a preporučuje se rana laparoskopska holecistektomija.'
        },
        {
          q: 'Muškarac, 52 god., posle obilnog konzumiranja alkohola ima naglo nastao jak bol u gornjem trbuhu i više puta povraća. TA 100/65 mmHg, puls 112/min, EKG bez ishemije. Šta uraditi u ambulanti?',
          options: ['I.v. linija, kristaloid, analgezija i hitan transport u bolnicu', 'IPP i antiemetik, pa kontrola sutra', 'Uput za ambulantno određivanje amilaze i ultrazvuk', 'Diklofenak i.m. i otpust kući ako bol popusti'],
          answer: 0,
          explain: 'Verovatan je akutni pankreatitis sa znacima hipovolemije: potrebni su nadoknada tečnosti i hospitalizacija. Stanje se može brzo pogoršati i kada je početna slika blaga.'
        },
        {
          q: 'Kod muškarca, 58 god., na sistematskom ultrazvuku nađena su dva kamenca u žučnoj kesi normalnog izgleda. Nikada nije imao bolove, testovi jetre su uredni. Šta savetovati?',
          options: ['Elektivnu holecistektomiju radi prevencije komplikacija', 'Lečenje nije potrebno dok se ne pojave simptomi', 'Ursodeoksiholnu kiselinu trajno', 'Litotripsiju vantelesnim udarnim talasima'],
          answer: 1,
          explain: 'Asimptomatski kamenci u normalnoj žučnoj kesi ne zahtevaju lečenje. Rastvaranje kamenaca lekovima i litotripsija se ne preporučuju zbog niske stope izlečenja.'
        }
      ]
    },
    {
      id: 'git-krvarenje',
      title: 'Krvarenje iz digestivnog trakta i skrining kolorektalnog karcinoma',
      summary: 'Akutno krvarenje: proceni hemodinamiku, obezbedi venski put, hitan transport. Skrining: test na okultno krvarenje od 50 do 74 godine.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Hematemeza i melena ukazuju na krvarenje iz gornjeg dela digestivnog trakta, a sveža krv na donji deo — ali masivno gornje krvarenje može dati i svežu krv na anus. Vitalni parametri su važniji od početnog hemoglobina, koji u prvim satima može biti uredan. Hronično, okultno krvarenje otkriva se kao sideropenijska anemija i traži endoskopsku obradu.' },
        { type: 'steps', title: 'Postupak kod akutnog krvarenja (ambulanta / teren)', items: [
          '**ABC**: prohodnost disajnog puta (rizik aspiracije kod hematemeze), kiseonik kod hipoksemije ili šoka.',
          'Izmeri TA, puls, disanje, saturaciju, kapilarno punjenje; tahikardija je rani, a hipotenzija kasni znak.',
          'Plasiraj dve široke i.v. kanile i započni kristaloid: bolus 500 ml za manje od 15 min, uz reprocenu.',
          'Kratka anamneza: NSAIL, acetilsalicilna kiselina, antikoagulansi, alkohol, ciroza, ranija krvarenja, ulkus.',
          'Digitorektalni pregled: melena, sveža krv ili tumor.',
          'Ne davati ništa na usta; hitan transport u bolnicu sa endoskopijom (SHMP 194), uz najavu kod nestabilnog pacijenta.',
          'U bolnici: restriktivna transfuzija (prag hemoglobina 70 g/l, a 80 g/l kod kardiovaskularnih bolesnika) i endoskopija u roku od 24 h posle hemodinamske stabilizacije.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Tahikardija, hipotenzija, ortostatski pad pritiska, sinkopa',
          'Hematemeza sveže krvi ili obilna melena',
          'Poznata ciroza ili znaci portne hipertenzije (sumnja na varikse)',
          'Antikoagulantna ili antiagregaciona terapija',
          'Stariji pacijenti i značajni komorbiditeti',
          'Bol u trbuhu sa krvavom stolicom kod pacijenta sa atrijalnom fibrilacijom ili aterosklerozom (ishemija creva)'
        ] },
        { type: 'list', title: 'Uzroci', items: [
          'Gornji deo: peptički ulkus (NSAIL, H. pylori), erozivni gastritis i ezofagitis, variksi jednjaka, Malori–Vajsov rascep, karcinom.',
          'Donji deo: divertikuloza, hemoroidi i fisure, angiodisplazije, kolorektalni karcinom i polipi, zapaljenske bolesti creva, ishemijski kolitis.',
          'Crna stolica bez krvarenja: preparati gvožđa, bizmut, aktivni ugalj.',
          'Sideropenijska anemija kod muškarca ili žene u postmenopauzi: traži izvor krvarenja u digestivnom traktu.'
        ] },
        { type: 'list', title: 'Skrining kolorektalnog karcinoma', items: [
          'Nacionalni program u Srbiji: muškarci i žene od **50 do 74 godine**, imunohemijski test na skriveno krvarenje u stolici, **svake druge godine**.',
          'Pozitivan test: uput za **kolonoskopiju** radi utvrđivanja uzroka krvarenja.',
          'Negativan test: ponovno testiranje za dve godine.',
          'Pozitivan test ne znači karcinom: uzrok može biti polip ili drugo oboljenje, ali se mora razjasniti kolonoskopijom.',
          'Osobe sa povišenim rizikom (kolorektalni karcinom u porodici, zapaljenske bolesti creva, nasledni sindromi) prate se po posebnom režimu kod gastroenterologa.',
          'Skrining je za osobe bez simptoma; pacijent sa simptomima ide na dijagnostičku obradu.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Svaka hematemeza ili melena — hitno u bolnicu.',
          'Obilno ili ponavljano rektalno krvarenje, ili krvarenje uz znake hemodinamske nestabilnosti — hitno.',
          'Rektalno krvarenje uz promenu ritma pražnjenja, gubitak telesne mase ili anemiju — kolonoskopija po hitnom prioritetu.',
          'Sideropenijska anemija bez jasnog uzroka — gastroenterolog radi endoskopske obrade.',
          'Pozitivan skrining test na okultno krvarenje — kolonoskopija.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Normalan hemoglobin neposredno posle početka krvarenja ne isključuje veliki gubitak krvi.',
          'Beta-blokatori mogu prikriti tahikardiju kod pacijenta koji krvari.',
          'Pacijenti sa veoma niskim rizikom (Glazgov–Blečford skor 0–1) mogu se posle procene u bolnici zbrinuti ambulantno.',
          'Acetilsalicilna kiselina u sekundarnoj prevenciji se posle postignute hemostaze ne prekida; ako je prekinuta, vraća se što pre.',
          'Negativan test na okultno krvarenje ne isključuje karcinom kod pacijenta sa simptomima.'
        ] }
      ],
      sources: [
        { name: 'ESGE 2021 – Nonvariceal upper gastrointestinal hemorrhage', url: 'https://pure.amsterdamumc.nl/ws/files/142756192/Endoscopic-diagnosis-and-management-of-nonvariceal-upper-gastrointestinal-hemorrhage-nvugih-european-society-of-gastr.pdf' },
        { name: 'NICE CG141 – Acute upper gastrointestinal bleeding', url: 'https://www.nice.org.uk/guidance/cg141/chapter/Recommendations' },
        { name: 'Skrining Srbija – Nacionalni program ranog otkrivanja raka debelog creva', url: 'https://www.skriningsrbija.rs/srl/skrining-raka-debelog-creva/' }
      ],
      questions: [
        {
          q: 'Muškarac, 66 god., na naproksenu zbog bola u kolenu, dolazi u ambulantu zbog crne katranaste stolice od jutros i vrtoglavice pri ustajanju. TA 105/65 mmHg, puls 110/min. Hemoglobin iz kapilarne krvi je 128 g/l. Šta je ispravno?',
          options: ['Hemoglobin je uredan, pa propisati IPP i zakazati gastroskopiju', 'Venski put, kristaloid i hitan transport u bolnicu', 'Test na okultno krvarenje i kontrola sutra', 'Ukinuti naproksen i testirati na H. pylori'],
          answer: 1,
          explain: 'Melena uz tahikardiju i ortostatske tegobe znači značajno akutno krvarenje; hemoglobin u prvim satima ne odražava gubitak. Potrebni su venski put, nadoknada tečnosti i bolnička endoskopija u roku od 24 h.'
        },
        {
          q: 'Žena, 58 god., bez tegoba, donosi pozitivan imunohemijski test na okultno krvarenje iz skrininga. Koji je sledeći korak?',
          options: ['Ponoviti test za mesec dana', 'Odrediti tumorske markere i uraditi ultrazvuk abdomena', 'Uput za kolonoskopiju', 'Digitorektalni pregled i, ako je uredan, kontrola za dve godine'],
          answer: 2,
          explain: 'Pozitivan skrining test se razjašnjava kolonoskopijom, kojom se utvrđuje uzrok krvarenja i po potrebi uklanjaju polipi.'
        },
        {
          q: 'Muškarac, 62 god., ima hemoglobin 98 g/l, MCV 71 fl i nizak feritin. Nema tegoba, stolica mu je normalne boje, a test na okultno krvarenje je negativan. Kako postupiti?',
          options: ['Preparat gvožđa tri meseca, pa kontrola krvne slike', 'Savet o ishrani bogatoj gvožđem', 'Ponavljati test na okultno krvarenje jednom mesečno', 'Uputiti na endoskopsku obradu digestivnog trakta, uz nadoknadu gvožđa'],
          answer: 3,
          explain: 'Sideropenijska anemija kod muškarca upućuje na gubitak krvi iz digestivnog trakta dok se ne dokaže suprotno, i pored negativnog testa na okultno krvarenje. Gvožđe se nadoknađuje, ali obrada se ne odlaže.'
        },
        {
          q: 'Muškarac, 54 god., bez tegoba i bez opterećenja u porodici, uradio je u okviru skrininga test na skriveno krvarenje u stolici i nalaz je negativan. Šta mu savetovati?',
          options: ['Ponovno testiranje za dve godine', 'Kolonoskopiju radi potvrde', 'Ponovno testiranje za deset godina', 'Dalji skrining nije potreban'],
          answer: 0,
          explain: 'U nacionalnom programu osobe od 50 do 74 godine testiraju se svake druge godine. Kolonoskopija je rezervisana za pozitivan test, simptome ili povišen rizik.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'git-slucaj-1',
      title: 'Muškarac, 71 god., slabost i tamna stolica',
      intro: 'Teren SHMP, kućna poseta. Muškarac, 71 god., od jutros malaksao, dva puta imao crnu, lepljivu stolicu neprijatnog mirisa. Pre godinu dana ugrađen mu je stent, uzima acetilsalicilnu kiselinu 100 mg, bisoprolol, a poslednje dve nedelje i diklofenak zbog bola u leđima. Bled je, oznojen, TA 100/60 mmHg, puls 88/min, SpO2 96%.',
      steps: [
        {
          q: 'Kako procenjuješ stanje ovog pacijenta?',
          options: ['Stabilan je jer je puls ispod 100/min', 'Verovatno je crna stolica posledica ishrane, potrebno je samo praćenje', 'Značajno krvarenje iz gornjeg dela trakta; bisoprolol prikriva tahikardiju', 'Krvarenje iz hemoroida, jer nema hematemeze'],
          answer: 2,
          explain: 'Melena uz bledilo, znojenje i nizak pritisak znači značajno krvarenje. Beta-blokator sprečava kompenzatornu tahikardiju, pa uredan puls ne sme da zavara.'
        },
        {
          q: 'Šta je sledeći korak na terenu?',
          options: ['Venski put, kristaloid, transport u bolnicu sa endoskopijom uz najavu', 'Pantoprazol p.o. i kontrola kod izabranog lekara sutra', 'Diklofenak zameniti paracetamolom i ostaviti pacijenta kod kuće', 'Dati još jednu dozu acetilsalicilne kiseline zbog stenta i čekati'],
          answer: 0,
          explain: 'Prioritet su venski put, nadoknada volumena i brz transport. Pacijent ne dobija ništa na usta. O antiagregacionoj terapiji odlučuje bolnički tim.'
        },
        {
          q: 'U toku transporta pacijent postaje pospan, TA je 85/50 mmHg. Dobio je 500 ml kristaloida. Šta dalje?',
          options: ['Prekinuti infuziju zbog rizika od opterećenja srca', 'Dati diazepam jer je uznemiren', 'Zaustaviti vozilo i čekati da se pritisak popravi', 'Nastaviti nadoknadu kristaloidom uz reprocenu, kiseonik, najava prijemnoj službi'],
          answer: 3,
          explain: 'Pogoršanje svesti i pad pritiska znače hemoragijski šok. Nastavlja se nadoknada volumena i daje kiseonik, a transport se ne prekida jer su konačno lečenje endoskopska hemostaza i transfuzija.'
        },
        {
          q: 'Endoskopija je pokazala ulkus dvanaestopalačnog creva, urađena je hemostaza. Pacijent se posle otpusta javlja izabranom lekaru. Šta je najvažnije za sprečavanje ponovnog krvarenja?',
          options: ['Doživotna dijeta bez začina i kafe', 'Testiranje i eradikacija H. pylori, izbegavanje NSAIL i nastavak acetilsalicilne kiseline uz IPP', 'Trajno ukidanje acetilsalicilne kiseline', 'Zamena diklofenaka ibuprofenom uz antacid'],
          answer: 1,
          explain: 'Eradikacija H. pylori i izbegavanje NSAIL smanjuju rizik ponovnog krvarenja. Acetilsalicilna kiselina u sekundarnoj prevenciji se posle postignute hemostaze nastavlja.'
        }
      ]
    },
    {
      id: 'git-slucaj-2',
      title: 'Žena, 47 god., bol u gornjem trbuhu posle večere',
      intro: 'Ambulanta doma zdravlja. Žena, 47 god., BMI 31, dolazi zbog jakog bola pod desnim rebarnim lukom koji je počeo pre tri sata, posle večere, i širi se pod desnu lopaticu. Mučnina, jednom povratila. TA 135/85 mmHg, puls 84/min, temperatura 36,8 °C.',
      steps: [
        {
          q: 'Trbuh je mek, bolno osetljiv pod desnim rebarnim lukom, bez defansa. Šta uraditi pre terapije?',
          options: ['Hitno uputiti na CT abdomena', 'EKG, radi isključenja srčanog uzroka bola', 'Dati antacid i sačekati 30 minuta', 'Odmah uputiti hirurgu kao akutni abdomen'],
          answer: 1,
          explain: 'Infarkt miokarda može se predstaviti bolom u gornjem trbuhu, pa je EKG jednostavan i obavezan korak. Kod mekog trbuha bez temperature nema znakova akutnog abdomena.'
        },
        {
          q: 'EKG je uredan. Koja je terapija izbora u ambulanti?',
          options: ['Ceftriakson i.m.', 'Omeprazol p.o.', 'Diklofenak 75 mg i.m.', 'Loperamid p.o.'],
          answer: 2,
          explain: 'Radna dijagnoza je bilijarna kolika, a NSAIL je analgetik prvog izbora. Antibiotik nije potreban bez znakova zapaljenja.'
        },
        {
          q: 'Bol je prestao posle 40 minuta. Ultrazvuk narednih dana pokazuje više kamenaca u žučnoj kesi, zid je tanak, žučni putevi nisu prošireni. Šta dalje?',
          options: ['Ništa, jer je napad prošao', 'Ursodeoksiholna kiselina šest meseci', 'Kontrolni ultrazvuk za godinu dana', 'Uput hirurgu radi laparoskopske holecistektomije'],
          answer: 3,
          explain: 'Simptomatska holelitijaza je indikacija za laparoskopsku holecistektomiju, jer oko polovine pacijenata ima ponovne kolike. Bez lečenja ostaju samo asimptomatski kamenci.'
        },
        {
          q: 'Tri nedelje kasnije, dok čeka operaciju, dolazi sa bolom koji traje od juče, temperaturom 38,9 °C sa drhtavicom i žutim beonjačama. TA 95/60 mmHg, puls 116/min. Šta je ispravno?',
          options: ['Hitan transport u bolnicu uz i.v. nadoknadu tečnosti: sumnja na akutni holangitis', 'Diklofenak i.m. i ubrzati termin operacije', 'Oralni antibiotik i kontrola za 48 sati', 'Ambulantno uraditi laboratoriju i ultrazvuk sutra ujutru'],
          answer: 0,
          explain: 'Bol, temperatura sa drhtavicom i žutica upućuju na holangitis, a hipotenzija i tahikardija na sepsu. Potrebno je hitno bolničko lečenje sa oslobađanjem žučnih puteva.'
        }
      ]
    }
  ]
});
