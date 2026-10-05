MED.register({
  id: 'respiratorno',
  title: 'Respiratorne i ORL bolesti',
  icon: '🫁',
  color: '#0090FF',
  topics: [
    {
      id: 'prehlada-grip',
      title: 'Akutne infekcije gornjih disajnih puteva i grip',
      summary: 'Virusne, samoograničavajuće bolesti: simptomatska terapija, bez antibiotika, oseltamivir samo rizičnima i teškim oblicima.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Prehlada i grip su virusne infekcije koje prolaze same; antibiotik ne skraćuje bolest i ne sprečava komplikacije kod inače zdravih. Posao lekara je da prepozna pacijenta sa povišenim rizikom od komplikacija gripa, da na vreme uvede oseltamivir i da ne previdi pneumoniju.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Prehlada: postepen početak, kijanje, sekrecija i zapušenost nosa, grebanje u grlu, blago povišena temperatura ili bez nje.',
          'Grip: nagao početak, visoka temperatura, bolovi u mišićima, glavobolja, suv kašalj, izražena malaksalost.',
          'Kašalj posle virusne infekcije obično traje do 3–4 nedelje i to samo po sebi nije razlog za antibiotik.',
          '**Povišen rizik od komplikacija gripa**: ≥65 godina, deca mlađa od 5 (posebno od 2) godina, trudnice i žene do 2 nedelje posle porođaja.',
          'Rizik nose i hronične bolesti pluća, srca, bubrega i jetre, dijabetes, imunosupresija, BMI ≥40 kg/m² i boravak u ustanovi za negu.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Otežano disanje, tahipneja ili pad saturacije kiseonikom.',
          'Bol u grudima, hemoptizije ili fokalni auskultatorni nalaz (sumnja na pneumoniju).',
          'Novonastala konfuzija, pospanost, hipotenzija ili drugi znaci sepse.',
          'Ponovni skok temperature i pogoršanje posle prolaznog poboljšanja (bakterijska superinfekcija).',
          'Nemogućnost unosa tečnosti, dehidracija, pogoršanje osnovne hronične bolesti.'
        ] },
        { type: 'steps', title: 'Postupak u ambulanti', items: [
          'Izmeri temperaturu, puls, frekvenciju disanja, krvni pritisak i SpO2; pregledaj ždrelo i uši i auskultuj pluća.',
          'Proveri da li pacijent pripada grupi sa povišenim rizikom od komplikacija gripa.',
          'Kod blage slike bez rizika: simptomatska terapija, tečnost, odmor i jasno objašnjenje zašto antibiotik nije potreban.',
          'Sumnja na grip uz povišen rizik ili tešku, progresivnu bolest: uvedi oseltamivir što pre, najbolje unutar 48 h od početka simptoma.',
          'Dogovori kada da se javi ponovo: naglo pogoršanje, otežano disanje, ili kašalj koji se ne smiruje posle 3–4 nedelje.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'paracetamol', dose: '500–1000 mg p.o. na 4–6 h, najviše 4 g dnevno', note: 'Kod oštećenja jetre najviše 2 g dnevno.' },
          { name: 'ibuprofen', dose: '200–400 mg p.o. na 6–8 h, najviše 2,4 g dnevno', note: 'Alternativa paracetamolu; oprez kod ulkusne bolesti, bubrežne slabosti i antikoagulantne terapije.' },
          { name: 'oseltamivir', dose: '75 mg p.o. 2× dnevno, 5 dana', note: 'Najveća korist ako se počne unutar 48 h; kod teških i hospitalizovanih daje se i kasnije. Dozu prilagoditi kod sniženog klirensa kreatinina.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na pneumoniju ili hipoksemiju: RTG pluća i procena za bolničko lečenje.',
          'Teška, komplikovana ili progresivna bolest, bez obzira na trajanje simptoma.',
          'Trudnica ili imunokompromitovan pacijent sa izraženom kliničkom slikom.',
          'Dekompenzacija hronične srčane ili plućne bolesti, znaci sepse.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod prehlade i nekomplikovanog gripa antibiotik se ne daje; korist je zanemarljiva, a neželjena dejstva (dijareja, mučnina) realna.',
          'Oseltamivir je namenjen hospitalizovanima, pacijentima sa teškom ili progresivnom bolešću i onima sa povišenim rizikom od komplikacija.',
          'U trudnoći je oralni oseltamivir lek izbora, u standardnoj dozi.',
          'Za nazalne dekongestive i ispiranje nosa fiziološkim rastvorom dokazi su slabi; mogu se probati kratkotrajno, bez velikih očekivanja.',
          'Godišnja vakcinacija protiv gripa je najvažnija mera za rizične grupe.'
        ] }
      ],
      sources: [
        { name: 'CDC: antivirusni lekovi za grip, sažetak za kliničare', url: 'https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html' },
        { name: 'CDC: osobe sa povišenim rizikom od komplikacija gripa', url: 'https://www.cdc.gov/flu/highrisk/index.htm' },
        { name: 'NICE NG120 (akutni kašalj)', url: 'https://www.nice.org.uk/guidance/ng120/chapter/Recommendations' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Žena, 29 god., 26. nedelja trudnoće, od juče temperatura 39 °C, mijalgije i suv kašalj u sezoni gripa. SpO2 98%, pluća čista. Šta je ispravno?',
          options: [
            'Samo paracetamol, jer se antivirusni lekovi ne daju u trudnoći',
            'Oseltamivir 75 mg p.o. 2× dnevno 5 dana, uz paracetamol',
            'Amoksicilin 500 mg na 8 h radi sprečavanja pneumonije',
            'Sačekati 3 dana i lečiti samo ako se stanje pogorša'
          ],
          answer: 1,
          explain: 'Trudnice (i žene do 2 nedelje posle porođaja) imaju povišen rizik od komplikacija gripa; oralni oseltamivir je lek izbora u trudnoći i najkorisniji je ako se počne unutar 48 h. Antibiotik nema indikaciju.'
        },
        {
          q: 'Muškarac, 34 god., zdrav, treći dan curenja iz nosa, gušobolje i kašlja; sekret je postao žućkast. Afebrilan, pluća čista. Traži antibiotik. Šta radiš?',
          options: [
            'Propišeš amoksicilin jer je sekret promenio boju',
            'Propišeš azitromicin tri dana jer je kraća terapija bezbednija',
            'Uputiš ga na RTG sinusa pre odluke o antibiotiku',
            'Objasniš prirodan tok bolesti, daš simptomatsku terapiju i savet kada da se javi'
          ],
          answer: 3,
          explain: 'Infekcija gornjih disajnih puteva kod inače zdrave osobe je virusna i samoograničavajuća; antibiotik ne menja tok, a nosi rizik od neželjenih dejstava i rezistencije. Važni su objašnjenje i jasan savet kada doći ponovo.'
        },
        {
          q: 'Pacijent, 72 god., HOBP i dijabetes, ima grip peti dan; danas je dispnoičan, SpO2 89%, FR 28/min. Koji je postupak ispravan?',
          options: [
            'Hitno uputiti u bolnicu; oseltamivir je indikovan i posle 48 h kod teške bolesti',
            'Oseltamivir više nema smisla jer je prošlo 48 h, dovoljan je paracetamol',
            'Dati oralni antibiotik i zakazati kontrolu za tri dana',
            'Udvostručiti dozu oseltamivira i lečiti ga kod kuće'
          ],
          answer: 0,
          explain: 'Hipoksemija i tahipneja kod rizičnog pacijenta znače tešku, progresivnu bolest koja traži bolnicu. Kod teških i hospitalizovanih antivirusna terapija ima smisla i kada se započne posle 48 h.'
        },
        {
          q: 'Koju maksimalnu dnevnu dozu paracetamola preporučuješ inače zdravoj odrasloj osobi sa gripom?',
          options: [
            '2 g dnevno, podeljeno u dve doze',
            '6 g dnevno, ako je temperatura iznad 39 °C',
            '4 g dnevno, u pojedinačnim dozama od 500–1000 mg na 4–6 h',
            '1 g dnevno, jer veće doze oštećuju jetru'
          ],
          answer: 2,
          explain: 'Standardna doza je 500–1000 mg na 4–6 h, najviše 4 g dnevno. Granica od 2 g dnevno važi za pacijente sa oštećenjem jetre.'
        }
      ]
    },
    {
      id: 'faringitis',
      title: 'Akutni faringitis i tonzilitis',
      summary: 'Većina gušobolja je virusna; Centor skor i brzi strep test odlučuju ko dobija penicilin, a apsces se ne sme prevideti.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutna gušobolja traje oko nedelju dana i najčešće prolazi bez antibiotika, bez obzira na uzročnik. Antibiotik ima smisla samo kod verovatne ili dokazane infekcije beta-hemolitičkim streptokokom grupe A, i tada je lek izbora penicilin jer je streptokok na njega i dalje univerzalno osetljiv.' },
        { type: 'list', title: 'Centor skor (po 1 poen)', items: [
          'Temperatura iznad 38 °C.',
          'Odsustvo kašlja.',
          'Bolni, uvećani prednji vratni limfni čvorovi.',
          'Eksudat ili otok tonzila.',
          '**0–2 poena**: streptokok malo verovatan, bez testa i bez antibiotika, simptomatska terapija.',
          '**3–4 poena**: veća verovatnoća streptokoka; uradi brzi strep test ako je dostupan i leči samo pozitivne.',
          'McIsaac modifikacija dodatno uzima u obzir uzrast: deci dodaje poen, a starijim odraslima ga oduzima.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Trizmus, jednostrani bol i otok, potisnuta uvula, prigušen govor: peritonzilarni apsces.',
          'Stridor, slinjenje, nemogućnost gutanja pljuvačke, zauzimanje prinudnog položaja: sumnja na epiglotitis.',
          'Ukočen vrat, otok vrata ili bol pri pokretima vrata: duboka infekcija vrata.',
          'Znaci teške sistemske infekcije ili sepse.',
          'Nemogućnost unosa tečnosti i dehidracija.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni opšte stanje i disajni put; kod sumnje na epiglotitis ne pregledaj ždrelo špatulom, već odmah organizuj transport.',
          'Jasni virusni znaci (kašalj, kijavica, promuklost, konjunktivitis): bez testiranja i bez antibiotika.',
          'Izračunaj Centor skor; kod 3–4 poena uradi brzi strep test ili bris ždrela.',
          'Pozitivan test: penicilin ili amoksicilin. Negativan test: simptomatska terapija.',
          'Ako test nije dostupan, kod skora 3–4 razmotri odmah ili odložen recept; odloženi se koristi ako nema poboljšanja za 3–5 dana.',
          'Svima: analgetik, dovoljno tečnosti i savet da se jave ako nema poboljšanja posle nedelju dana ili kod naglog pogoršanja.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'fenoksimetilpenicilin (penicilin V)', dose: '500 mg (800 000 IJ) p.o. na 6 h ili 1000 mg na 12 h, 10 dana', note: 'Lek izbora. Pet dana može biti dovoljno za simptome, ali 10 dana daje veću šansu za eradikaciju.' },
          { name: 'amoksicilin', dose: '500 mg p.o. na 8 h, ili 1000 mg 1× dnevno, 10 dana', note: 'Ravnopravna alternativa; ne davati ako se sumnja na infektivnu mononukleozu (osip).' },
          { name: 'benzatin-benzilpenicilin', dose: '1 200 000 IJ i.m. jednokratno (telesna masa ≥27 kg)', note: 'Kada je saradnja u uzimanju oralne terapije nesigurna; ispod 27 kg doza je 600 000 IJ.' },
          { name: 'cefaleksin', dose: '500 mg p.o. na 12 h, 10 dana', note: 'Kod alergije na penicilin koja nije anafilaktičkog tipa.' },
          { name: 'klaritromicin', dose: '250–500 mg p.o. na 12 h, 5 dana', note: 'Kod prave alergije na penicilin; rezistencija streptokoka na makrolide je česta.' },
          { name: 'azitromicin', dose: '500 mg p.o. prvog dana, zatim 250 mg 1× dnevno još 4 dana', note: 'Alternativa kod alergije na penicilin.' },
          { name: 'paracetamol ili ibuprofen', dose: 'paracetamol 500–1000 mg p.o. na 4–6 h (najviše 4 g/dan) ili ibuprofen 200–400 mg p.o. na 6–8 h', note: 'Analgezija je osnov lečenja svake gušobolje.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na peritonzilarni, parafaringealni ili retrofaringealni apsces: hitno ORL (drenaža).',
          'Stridor, slinjenje ili ugrožen disajni put: hitan transport uz pratnju, bez manipulacije u ždrelu.',
          'Teška sistemska infekcija, sepsa ili nemogućnost uzimanja tečnosti i lekova.',
          'Bez poboljšanja ili pogoršanje uprkos antibiotiku: razmotri mononukleozu, apsces i druge dijagnoze.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antibiotik skraćuje simptome gušobolje u proseku za oko 16 sati; većini je bolje za nedelju dana i bez njega.',
          'Ni Centor skor 4 nije dokaz streptokoka; test, gde je dostupan, sprečava nepotrebne antibiotike.',
          'Makrolidi i široki spektar nisu prva linija; penicilin je dovoljan.',
          'Jednostrana gušobolja sa trizmusom je apsces dok se ne dokaže suprotno.',
          'Posle 12–24 h antibiotske terapije i bez temperature pacijent se može vratiti u kolektiv.'
        ] }
      ],
      sources: [
        { name: 'NICE NG84 (akutna gušobolja)', url: 'https://www.nice.org.uk/guidance/ng84/chapter/Recommendations' },
        { name: 'CDC: streptokokni faringitis, kliničke smernice', url: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Devojka, 19 god., gušobolja dva dana, temperatura 37,6 °C, kašlje i ima kijavicu, tonzile hiperemične bez eksudata, vratni limfni čvorovi neosetljivi. Sledeći korak?',
          options: [
            'Simptomatska terapija, bez testiranja i bez antibiotika',
            'Brzi strep test, pa antibiotik ako je pozitivan',
            'Amoksicilin 500 mg na 8 h, 10 dana',
            'Bris ždrela i azitromicin do rezultata'
          ],
          answer: 0,
          explain: 'Centor skor je 0, a kašalj i kijavica ukazuju na virus. Kod jasnih virusnih znakova i skora 0–2 ne testira se i ne daje se antibiotik.'
        },
        {
          q: 'Muškarac, 24 god., temperatura 38,9 °C, bez kašlja, eksudat na tonzilama i bolni prednji vratni limfni čvorovi; brzi strep test pozitivan. Nema alergija. Šta propisuješ?',
          options: [
            'Azitromicin 500 mg 1× dnevno, 3 dana',
            'Amoksicilin-klavulanat 875/125 mg na 12 h, 7 dana',
            'Fenoksimetilpenicilin 500 mg na 6 h, 10 dana',
            'Ciprofloksacin 500 mg na 12 h, 5 dana'
          ],
          answer: 2,
          explain: 'Streptokok grupe A je i dalje univerzalno osetljiv na penicilin, pa je uskospektralni penicilin V (ili amoksicilin) tokom 10 dana terapija izbora. Makrolidi i široki spektar su rezerva za alergične.'
        },
        {
          q: 'Pacijent, 31 god., peti dan gušobolje; bol je sada izrazito jača levo, teško otvara usta, govor je prigušen, uvula potisnuta udesno. Postupak?',
          options: [
            'Zameniti penicilin makrolidom i kontrola za 48 h',
            'Dodati kortikosteroid oralno i nastaviti isti antibiotik',
            'Uraditi brzi strep test pre svake dalje odluke',
            'Hitno uputiti ORL specijalisti zbog sumnje na peritonzilarni apsces'
          ],
          answer: 3,
          explain: 'Jednostrani bol, trizmus, prigušen govor i devijacija uvule su klasični znaci peritonzilarnog apscesa. To je gnojna komplikacija koja zahteva bolničku procenu i drenažu, a ne promenu oralnog antibiotika.'
        },
        {
          q: 'Žena, 27 god., Centor skor 4, brzi test nije dostupan. Navodi da je na penicilin jednom dobila urtikariju i otok usana. Koji antibiotik je prihvatljiv?',
          options: [
            'Amoksicilin, jer je reakcija bila davno',
            'Klaritromicin 250–500 mg na 12 h, 5 dana',
            'Cefaleksin, jer cefalosporini nemaju ukrštenu reakciju',
            'Benzatin-benzilpenicilin i.m. uz antihistaminik'
          ],
          answer: 1,
          explain: 'Urtikarija sa angioedemom je reakcija ranog tipa, pa se izbegavaju i penicilini i cefalosporini. Makrolid je alternativa, uz svest da je rezistencija streptokoka na makrolide česta.'
        }
      ]
    },
    {
      id: 'sinuzitis',
      title: 'Akutni rinosinuzitis',
      summary: 'Najčešće virusni i traje 2–3 nedelje; antibiotik tek posle 10 dana bez poboljšanja ili kod teške slike, a orbitalni znaci su hitni.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutni sinuzitis obično izazivaju virusi i samo mali deo slučajeva je bakterijski. Simptomi traju 2–3 nedelje, a antibiotik malo utiče na njihovo trajanje. U prvih desetak dana antibiotik se ne daje; posle toga je opravdan tek kod odsustva poboljšanja ili teške slike.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Zapušenost nosa, gnojna sekrecija iz nosa ili slivanje niz ždrelo, bol ili pritisak u licu, oslabljen miris.',
          'Na bakterijski uzrok ukazuju: simptomi duži od 10 dana bez poboljšanja ili pogoršanje posle početnog oporavka.',
          'Težak početak: temperatura ≥39 °C uz gnojni sekret ili bol u licu najmanje 3–4 dana uzastopno.',
          'Misli i na zubnu infekciju kao izvor jednostranog bola i sekreta.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Periorbitalni otok ili crvenilo, potisnuta očna jabučica, dvoslike, oftalmoplegija, novo slabljenje vida.',
          'Otok nad čeonom kosti, jaka čeona glavobolja.',
          'Znaci meningitisa ili fokalni neurološki ispadi.',
          'Teška sistemska infekcija, poremećaj svesti.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Simptomi do oko 10 dana: bez antibiotika; objasni da bolest traje 2–3 nedelje i daj analgetik.',
          'Simptomi duži od 10 dana bez poboljšanja: razmotri nazalni kortikosteroid u visokoj dozi tokom 14 dana (odrasli i deca ≥12 godina).',
          'U istoj situaciji razmotri i odložen recept za antibiotik: koristi se ako nema poboljšanja za 7 dana ili kod naglog pogoršanja.',
          'Sistemski veoma loše stanje, znaci teže bolesti ili visok rizik od komplikacija: antibiotik odmah.',
          'RTG sinusa i laboratorija rutinski nisu potrebni; snimanje samo kod sumnje na komplikaciju.',
          'Kontrola ako se stanje naglo pogorša ili nema poboljšanja posle 3 nedelje.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'paracetamol ili ibuprofen', dose: 'paracetamol 500–1000 mg p.o. na 4–6 h (najviše 4 g/dan) ili ibuprofen 200–400 mg p.o. na 6–8 h', note: 'Osnov simptomatske terapije.' },
          { name: 'mometazon-furoat, sprej za nos', dose: '200 µg intranazalno 2× dnevno (po 2 potiska od 50 µg u svaku nozdrvu), 14 dana', note: 'Kod simptoma dužih od 10 dana; ublažava simptome, ali ne skraćuje bolest. Primena van odobrene indikacije.' },
          { name: 'amoksicilin', dose: '1 g p.o. na 8 h, 5 dana', note: 'Kada je antibiotik indikovan (preporuka SZO).' },
          { name: 'fenoksimetilpenicilin', dose: '500 mg p.o. na 6 h, 5 dana', note: 'Uskospektralna prva linija po NICE.' },
          { name: 'amoksicilin-klavulanat', dose: '500/125 mg p.o. na 8 h, 5 dana', note: 'Kod sistemski veoma lošeg stanja, visokog rizika ili pogoršanja posle 2–3 dana prve linije.' },
          { name: 'doksiciklin', dose: '200 mg p.o. prvog dana, zatim 100 mg 1× dnevno još 4 dana', note: 'Kod alergije na penicilin; ne u trudnoći i ne deci mlađoj od 12 godina.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Bilo koji orbitalni ili periorbitalni znak: hitno u bolnicu (ORL, oftalmolog).',
          'Sumnja na intrakranijalnu komplikaciju ili tešku sistemsku infekciju: hitno u bolnicu.',
          'Pogoršanje uprkos antibiotiku druge linije.',
          'Ponavljane epizode ili simptomi koji prelaze u hroničan tok: ORL obrada.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antibiotik malo menja i trajanje simptoma i udeo pacijenata sa poboljšanjem; neuvođenje retko dovodi do komplikacija.',
          'Deset dana je praktična granica: pre toga bez antibiotika, posle toga procena.',
          'Kada se antibiotik daje, 5 dana je dovoljno.',
          'Za oralne dekongestive, antihistaminike, mukolitike i inhalacije pare nema dokaza o koristi.',
          'Otok kapka kod pacijenta sa sinuzitisom je hitno stanje, a ne alergija.'
        ] }
      ],
      sources: [
        { name: 'NICE NG79 (akutni sinuzitis)', url: 'https://www.nice.org.uk/guidance/ng79/chapter/Recommendations' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Žena, 36 god., šest dana zapušen nos, žućkast sekret i pritisak u obrazima. Afebrilna, opšte stanje dobro. Šta je ispravno?',
          options: [
            'Amoksicilin 1 g na 8 h, jer je sekret gnojav',
            'RTG paranazalnih sinusa pre odluke o terapiji',
            'Bez antibiotika; analgetik i objašnjenje da tegobe traju 2–3 nedelje',
            'Oralni dekongestiv i antihistaminik deset dana'
          ],
          answer: 2,
          explain: 'Kod simptoma kraćih od oko 10 dana antibiotik se ne daje jer je bolest gotovo uvek virusna. RTG nije potreban, a za oralne dekongestive i antihistaminike nema dokaza o koristi.'
        },
        {
          q: 'Muškarac, 44 god., tegobe 12 dana bez ikakvog poboljšanja, subfebrilan, opšte stanje dobro. Šta možeš da ponudiš po smernicama?',
          options: [
            'Nazalni kortikosteroid u visokoj dozi 14 dana i odložen recept za antibiotik',
            'Odmah amoksicilin-klavulanat 14 dana',
            'Ciprofloksacin 7 dana kao prvu liniju',
            'Depo kortikosteroid intramuskularno'
          ],
          answer: 0,
          explain: 'Posle 10 dana bez poboljšanja opcije su nazalni kortikosteroid u visokoj dozi i izostavljanje antibiotika ili odložen recept, koji se koristi ako nema poboljšanja za 7 dana. Široki spektar je rezerva za teške slučajeve.'
        },
        {
          q: 'Pacijent, 28 god., sinuzitis osmi dan; jutros otok i crvenilo levog gornjeg kapka, bol pri pokretima oka i dvoslike. Postupak?',
          options: [
            'Antihistaminik i hladne obloge, kontrola sutra',
            'Amoksicilin oralno i kontrola za 48 h',
            'Kapi sa antibiotikom za oko i nazalni dekongestiv',
            'Hitno uputiti u bolnicu zbog sumnje na orbitalnu komplikaciju'
          ],
          answer: 3,
          explain: 'Periorbitalni otok, bolna pokretljivost i dvoslike znače orbitalnu komplikaciju sinuzitisa, sa rizikom od gubitka vida i intrakranijalnog širenja. Potrebni su hitna bolnička procena i snimanje.'
        }
      ]
    },
    {
      id: 'otitis',
      title: 'Akutna upala srednjeg i spoljašnjeg uva',
      summary: 'Upala srednjeg uva najčešće prolazi za 3 dana uz analgetik; spoljašnje uvo se leči kapima, ne tabletama.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutna upala srednjeg uva je samoograničavajuća infekcija pretežno dečjeg uzrasta: simptomi traju oko 3 dana (do nedelju dana), a antibiotik malo utiče na bol. Upala spoljašnjeg ušnog kanala leči se lokalno; oralni antibiotici su tu neefikasni i podstiču rezistenciju.' },
        { type: 'list', title: 'Klinička slika', items: [
          '**Srednje uvo**: bol u uvu, temperatura, oslabljen sluh; kod male dece razdražljivost i hvatanje za uvo.',
          'Otoskopski: izbočena, hiperemična ili zamućena bubna opna, ponekad sekrecija posle perforacije.',
          '**Spoljašnje uvo**: svrab, bol pri povlačenju ušne školjke ili žvakanju, osećaj punoće, otok i sekret u kanalu.',
          'Spoljašnji otitis je čest posle kupanja i čačkanja ušiju.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Otok, crvenilo i bolnost iza uva, odstojeća ušna školjka: mastoiditis.',
          'Pareza facijalnog nerva, jaka glavobolja, ukočen vrat, poremećaj svesti.',
          'Teška sistemska infekcija ili odojče lošeg opšteg stanja.',
          'Stariji dijabetičar ili imunokompromitovan pacijent sa upornim, jakim bolom i granulacijama u kanalu: nekrotizirajući spoljašnji otitis.'
        ] },
        { type: 'steps', title: 'Postupak kod upale srednjeg uva', items: [
          'Redovan analgetik u dozi prilagođenoj uzrastu i telesnoj masi; kod jakog bola maksimalne dozvoljene doze.',
          'Većina dece: bez antibiotika ili odložen recept koji se koristi ako nema poboljšanja za 3 dana ili kod naglog pogoršanja.',
          'Sekrecija iz uva ili dete mlađe od 2 godine sa obostranom upalom: veća korist od antibiotika, razmotri sve tri opcije.',
          'Sistemski veoma loše stanje ili visok rizik od komplikacija: antibiotik odmah.',
          'Objasni da dekongestivi i antihistaminici ne pomažu.',
          'Kontrola ako nema poboljšanja posle 3 dana ili se stanje naglo pogorša.'
        ] },
        { type: 'steps', title: 'Postupak kod upale spoljašnjeg uva', items: [
          'Proceni bol i daj analgetik prema jačini bola.',
          'Očisti kanal (toaleta), a kod jakog otoka postavi traku gaze da kapi dopru do zida kanala.',
          'Propiši lokalnu terapiju kapima; sistemski antibiotik samo kod širenja van kanala ili posebnih faktora domaćina.',
          'Kod poznate ili moguće perforacije bubne opne biraj isključivo neototoksičan lokalni preparat.',
          'Kontrola ako nema odgovora za 48–72 h; savetuj da uvo ostane suvo.'
        ] },
        { type: 'drugs', title: 'Antibiotik kod upale srednjeg uva', items: [
          { name: 'amoksicilin (deca)', dose: '1–11 meseci 125 mg, 1–4 godine 250 mg, 5–17 godina 500 mg; p.o. na 8 h, 5–7 dana', note: 'Prva linija; uzrasne doze za decu prosečne telesne mase.' },
          { name: 'amoksicilin (odrasli)', dose: '500 mg p.o. na 8 h, 5 dana', note: 'Antibiotik razmotriti kod teških simptoma, npr. temperature ≥39 °C ili bola uprkos analgeticima.' },
          { name: 'amoksicilin-klavulanat', dose: 'odrasli 500/125 mg p.o. na 8 h, 5 dana', note: 'Druga linija, kod pogoršanja posle 2–3 dana prve linije.' },
          { name: 'klaritromicin', dose: '12–17 godina: 250–500 mg p.o. na 12 h, 5–7 dana; mlađa deca prema telesnoj masi', note: 'Kod alergije na penicilin.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na mastoiditis, meningitis, intrakranijalni apsces ili parezu facijalisa: hitno u bolnicu.',
          'Teška sistemska infekcija.',
          'Sumnja na nekrotizirajući spoljašnji otitis: hitno ORL.',
          'Spoljašnji otitis bez odgovora na lokalnu terapiju, ponavljane upale ili trajno oslabljen sluh: ORL.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod upale srednjeg uva antibiotik ne smanjuje bol u prva 24 h; analgetik je ono što detetu pomaže.',
          'Mastoiditis je redak i sa antibiotikom i bez njega, pa strah od njega nije razlog za rutinsko propisivanje.',
          'Spoljašnji otitis se leči kapima: koncentracija leka u kanalu je mnogostruko veća nego posle oralne primene.',
          'Kod perforirane bubne opne ne propisuj ototoksične kapi.',
          'Bol na povlačenje ušne školjke upućuje na spoljašnji, a ne na srednji otitis.'
        ] }
      ],
      sources: [
        { name: 'NICE NG91 (akutni otitis media)', url: 'https://www.nice.org.uk/guidance/ng91/chapter/Recommendations' },
        { name: 'AAO-HNSF: vodič za akutni otitis externa', url: 'https://www.entnet.org/resource/aao-hnsf-updated-cpg-acute-otitis-externa-press-release-fact-sheet/' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Dete, 4 god., bol u desnom uvu od sinoć, temperatura 38,2 °C, bubna opna crvena i izbočena, bez sekrecije, opšte stanje dobro. Šta je najprimerenije?',
          options: [
            'Amoksicilin odmah, 10 dana',
            'Analgetik redovno i odložen recept ako nema poboljšanja za 3 dana',
            'Kapi za uvo sa antibiotikom i dekongestiv za nos',
            'Uput ORL specijalisti radi paracenteze'
          ],
          answer: 1,
          explain: 'Kod deteta starijeg od 2 godine, bez sekrecije i dobrog opšteg stanja, upala najčešće prolazi za 3 dana. Analgetik je ključan, a antibiotik se može odložiti i uzeti samo ako nema poboljšanja.'
        },
        {
          q: 'Muškarac, 30 god., posle letovanja ima svrab i bol u levom uvu; bol se pojačava na povlačenje ušne školjke, kanal je otečen sa oskudnim sekretom, bubna opna cela. Terapija?',
          options: [
            'Amoksicilin oralno, 7 dana',
            'Azitromicin oralno, 3 dana',
            'Ispiranje uva vodom svaki dan do izlečenja',
            'Toaleta kanala, lokalne kapi i analgetik; uvo držati suvim'
          ],
          answer: 3,
          explain: 'Difuzni nekomplikovani spoljašnji otitis leči se lokalno. Oralni antibiotici su neefikasni jer uzročnici često nisu osetljivi, a koncentracija u kanalu je niska; uvo treba da ostane suvo.'
        },
        {
          q: 'Dete, 3 god., sedmi dan upale uva; danas otok i crvenilo iza uva, ušna školjka odstoji, temperatura 39,4 °C. Postupak?',
          options: [
            'Hitno uputiti u bolnicu zbog sumnje na mastoiditis',
            'Zameniti amoksicilin makrolidom i kontrola za 48 h',
            'Dodati kapi za uvo i nastaviti isti antibiotik',
            'Uputiti na audiometriju posle smirivanja infekcije'
          ],
          answer: 0,
          explain: 'Retroaurikularni otok sa odstojećom ušnom školjkom je mastoiditis, akutna komplikacija koja zahteva bolničko lečenje parenteralnim antibiotikom i procenu ORL specijaliste.'
        },
        {
          q: 'Žena, 74 god., dijabetičar, tri nedelje ima jak bol u uvu koji se pojačava noću; u kanalu granulaciono tkivo, a kapi nisu pomogle. Na šta misliš?',
          options: [
            'Na običan spoljašnji otitis koji traži dužu lokalnu terapiju',
            'Na cerumen koji treba isprati',
            'Na nekrotizirajući spoljašnji otitis; hitno uputiti ORL specijalisti',
            'Na neuralgiju trigeminusa; uvesti karbamazepin'
          ],
          answer: 2,
          explain: 'Uporan jak bol i granulacije u kanalu kod starijeg dijabetičara su tipični za nekrotizirajući (maligni) spoljašnji otitis, infekciju koja zahvata kost i zahteva hitno bolničko lečenje.'
        }
      ]
    },
    {
      id: 'bronhitis-kasalj',
      title: 'Akutni bronhitis i kašalj',
      summary: 'Akutni kašalj traje do 3–4 nedelje i ne leči se antibiotikom; hroničan kašalj (preko 8 nedelja) traži RTG i spirometriju.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutni kašalj najčešće prati virusnu infekciju gornjih disajnih puteva ili akutni bronhitis i prolazi sam za 3–4 nedelje. Antibiotici skraćuju kašalj kod bronhitisa u proseku za pola dana, pa se rutinski ne daju. Kašalj duži od 8 nedelja kod odraslog je hroničan i zahteva obradu.' },
        { type: 'list', title: 'Akutni kašalj: šta razlikovati', items: [
          'Infekcija gornjih disajnih puteva ili akutni bronhitis: opšte stanje dobro, pluća bez fokalnog nalaza.',
          'Pneumonija: fokalni nalaz, ubrzano disanje, niska saturacija, težina bolesti.',
          'Pertusis: napadi kašlja, inspiratorni zvuk, povraćanje posle kašlja; antibiotik ima smisla unutar 3 nedelje od početka kašlja.',
          'Neinfektivni uzroci: plućna embolija, srčana slabost, egzacerbacija astme ili HOBP, strano telo.'
        ] },
        { type: 'list', title: 'Hroničan kašalj (duže od 8 nedelja)', items: [
          'Obavezno uraditi RTG pluća i spirometriju.',
          'Pušenje je glavni uzrok hroničnog kašlja na koji se može uticati.',
          'ACE inhibitori izazivaju hroničan kašalj kod oko 15% pacijenata; kašalj se može javiti i dugo posle uvođenja leka.',
          'Česti uzroci: astma i eozinofilni bronhitis, refluks, bolesti gornjih disajnih puteva.',
          'Blokatori receptora angiotenzina II ne utiču na refleks kašlja.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Hemoptizije, gubitak telesne mase, noćno znojenje.',
          'Dispneja, bol u grudima, hipoksemija, znaci sepse.',
          'Pušač sa novim ili izmenjenim kašljem, promuklost koja ne prolazi.',
          'Sumnja na plućnu emboliju ili karcinom pluća.'
        ] },
        { type: 'steps', title: 'Postupak kod akutnog kašlja', items: [
          'Vitalni parametri sa SpO2 i auskultacija; isključi pneumoniju i ozbiljne neinfektivne uzroke.',
          'Infekcija gornjih disajnih puteva ili bronhitis kod pacijenta dobrog opšteg stanja: bez antibiotika, uz objašnjenje.',
          'Ako posle pregleda nije jasno treba li antibiotik kod infekcije donjih disajnih puteva, pomaže CRP iz kapilarne krvi.',
          'CRP ispod 20 mg/l: bez antibiotika; 20–100 mg/l: odložen recept; iznad 100 mg/l: antibiotik odmah.',
          'Sistemski veoma loše stanje: antibiotik odmah. Visok rizik od komplikacija: antibiotik odmah ili odložen recept.',
          'Ne propisuj bronhodilatatore, kortikosteroide ni mukolitike ako nema osnovne bolesti disajnih puteva.'
        ] },
        { type: 'drugs', title: 'Antibiotik, samo kada je indikovan', items: [
          { name: 'doksiciklin', dose: '200 mg p.o. prvog dana, zatim 100 mg 1× dnevno još 4 dana (ukupno 5 dana)', note: 'Prvi izbor po NICE; ne u trudnoći.' },
          { name: 'amoksicilin', dose: '500 mg p.o. na 8 h, 5 dana', note: 'Alternativa prvog izbora.' },
          { name: 'klaritromicin', dose: '250–500 mg p.o. na 12 h, 5 dana', note: 'Alternativa kod alergije na penicilin.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na sepsu, plućnu emboliju ili karcinom pluća: hitno ili ubrzano, prema težini.',
          'Hroničan kašalj sa patološkim RTG nalazom ili crvenim zastavicama: pulmolog.',
          'Hroničan kašalj bez uzroka posle osnovne obrade i probne terapije: pulmolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Visok rizik od komplikacija: značajan komorbiditet ili imunosupresija; stariji od 65 sa dva, odnosno stariji od 80 sa jednim faktorom.',
          'Ti faktori su: hospitalizacija u prethodnoj godini, dijabetes, srčana insuficijencija, oralni kortikosteroidi.',
          'Med (stariji od 1 godine) i biljni ili OTC preparati imaju ograničene dokaze o koristi; kodeinski sirupi ne pomažu.',
          'Pacijentu sa kašljem ne uvodi ACE inhibitor; ako ga već uzima, zameni ga.',
          'Kašalj od 3–4 nedelje posle virusne infekcije je očekivan tok, a ne neuspeh lečenja.'
        ] }
      ],
      sources: [
        { name: 'NICE NG120 (akutni kašalj)', url: 'https://www.nice.org.uk/guidance/ng120/chapter/Recommendations' },
        { name: 'NICE NG237 (akutna respiratorna infekcija kod starijih od 16)', url: 'https://www.nice.org.uk/guidance/ng237/chapter/Recommendations' },
        { name: 'ERS vodič za hroničan kašalj 2020', url: 'https://eprints.gla.ac.uk/191844/7/191844.pdf' },
        { name: 'CDC: pertusis, klinička nega', url: 'https://www.cdc.gov/pertussis/hcp/clinical-care/index.html' }
      ],
      questions: [
        {
          q: 'Muškarac, 41 god., nepušač, deset dana kašlje i iskašljava žućkast sputum posle prehlade. Afebrilan, SpO2 98%, pluća čista, opšte stanje dobro. Šta radiš?',
          options: [
            'Amoksicilin 500 mg na 8 h, 5 dana',
            'Salbutamol inhalaciono i oralni kortikosteroid',
            'Acetilcistein i azitromicin tri dana',
            'Bez antibiotika; objasniš da kašalj traje do 3–4 nedelje i kada da se javi'
          ],
          answer: 3,
          explain: 'Akutni bronhitis je najčešće virusan, a antibiotik skraćuje kašalj tek za oko pola dana. Bronhodilatatori, kortikosteroidi i mukolitici se ne daju ako nema osnovne bolesti disajnih puteva.'
        },
        {
          q: 'Žena, 58 god., kašlje pet dana, temperatura 37,9 °C, oskudan nalaz na plućima; nisi siguran treba li antibiotik. CRP iz kapilarne krvi je 14 mg/l. Odluka?',
          options: [
            'Antibiotik odmah, jer je CRP povišen',
            'Odložen recept za antibiotik',
            'Ne davati antibiotik rutinski',
            'Uputiti u bolnicu zbog sumnje na pneumoniju'
          ],
          answer: 2,
          explain: 'Kod CRP ispod 20 mg/l antibiotik se rutinski ne daje; odložen recept se razmatra za 20–100 mg/l, a antibiotik odmah iznad 100 mg/l.'
        },
        {
          q: 'Muškarac, 63 god., suv kašalj tri meseca. Pre četiri meseca uveden mu je ramipril. Nepušač, RTG pluća i spirometrija uredni. Sledeći korak?',
          options: [
            'Zameniti ACE inhibitor lekom druge grupe, npr. blokatorom receptora angiotenzina',
            'Uvesti kodeinski sirup protiv kašlja',
            'Dati probno antibiotik 10 dana',
            'Odmah uputiti na bronhoskopiju'
          ],
          answer: 0,
          explain: 'ACE inhibitori izazivaju hroničan kašalj kod oko 15% pacijenata i ne treba ih davati osobi koja kašlje. Blokatori receptora angiotenzina II ne utiču na refleks kašlja.'
        },
        {
          q: 'Pušač, 57 god., kašlje dva meseca, u poslednje dve nedelje primećuje krv u sputumu i smršao je 5 kg. Šta je obavezno?',
          options: [
            'Antibiotik dve nedelje, pa kontrola',
            'RTG pluća odmah i ubrzano upućivanje pulmologu',
            'Antitusik i savet o prestanku pušenja',
            'Probna terapija inhibitorom protonske pumpe osam nedelja'
          ],
          answer: 1,
          explain: 'Hemoptizije, gubitak telesne mase i promena kašlja kod pušača su crvene zastavice za karcinom pluća i tuberkulozu. Snimak i upućivanje se ne odlažu zbog probne terapije.'
        }
      ]
    },
    {
      id: 'pneumonija',
      title: 'Vanbolnički stečena pneumonija',
      summary: 'CRB-65 određuje mesto lečenja; kod lake pneumonije amoksicilin 5 dana, uz jasnu kontrolu i savet o očekivanom oporavku.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Dijagnoza u ambulanti je klinička: simptomi infekcije donjih disajnih puteva uz fokalni nalaz, ubrzano disanje ili nisku saturaciju, a potvrđuje se RTG snimkom. Težinu i mesto lečenja određuju klinička procena i CRB-65. Kod lake pneumonije dovoljno je 5 dana amoksicilina.' },
        { type: 'list', title: 'CRB-65 (po 1 poen)', items: [
          '**C**: novonastala konfuzija (dezorijentisanost u vremenu, prostoru ili prema ličnostima).',
          '**R**: frekvencija disanja 30/min ili više.',
          '**B**: sistolni pritisak ispod 90 mmHg ili dijastolni 60 mmHg ili niži.',
          '**65**: starost 65 godina ili više.',
          'Skor 0: nizak rizik (smrtnost ispod 1%), lečenje kod kuće.',
          'Skor 1: klinička procena; kućno lečenje uz bezbednosnu mrežu ili upućivanje na bolničku procenu.',
          'Skor 2 ili više: uputiti u bolnicu; 3–4 znači visok rizik (smrtnost iznad 10%).'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Hipoksemija (SpO2 ispod 90% na sobnom vazduhu), frekvencija disanja 30/min ili više.',
          'Hipotenzija, novonastala konfuzija, znaci sepse ili kardiorespiratorne insuficijencije.',
          'Nemogućnost uzimanja oralne terapije.',
          'Izostanak poboljšanja uprkos antibiotiku.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Izmeri temperaturu, puls, frekvenciju disanja, krvni pritisak i SpO2; proceni svest; auskultuj pluća.',
          'Izračunaj CRB-65 i uz kliničku procenu (komorbiditeti, trudnoća, socijalne okolnosti) odluči o mestu lečenja.',
          'Zatraži RTG pluća gde je dostupan; početak terapije ne odlaži zbog snimanja.',
          'Laka pneumonija: oralni antibiotik 5 dana; mikrobiološka ispitivanja rutinski nisu potrebna.',
          'Savetuj da se javi ako nema poboljšanja u roku od 3 dana ili ako se stanje pogorša.',
          'Posle 5 dana prekini antibiotik ako je pacijent klinički stabilan; produži samo ako nije.'
        ] },
        { type: 'drugs', title: 'Empirijska terapija u ambulanti', items: [
          { name: 'amoksicilin', dose: '500 mg p.o. na 8 h, 5 dana (mogu i veće doze; SZO preporučuje 1 g na 8 h)', note: 'Prva linija kod lake pneumonije.' },
          { name: 'doksiciklin', dose: '200 mg p.o. prvog dana, zatim 100 mg 1× dnevno još 4 dana (SZO: 100 mg na 12 h)', note: 'Kod alergije na penicilin ili sumnje na atipične uzročnike; ne u trudnoći.' },
          { name: 'klaritromicin', dose: '500 mg p.o. na 12 h, 5 dana', note: 'Alternativa; kod umereno teške pneumonije dodaje se amoksicilinu ako se sumnja na atipične uzročnike.' },
          { name: 'amoksicilin-klavulanat', dose: '500/125 mg p.o. na 8 h, 5 dana', note: 'Za teže oblike (u pravilu bolnica), uz klaritromicin. Nije prva linija za laku pneumoniju.' }
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'CRB-65 skor 2 ili više.',
          'Znaci teže bolesti: sepsa, kardiorespiratorna insuficijencija, hipoksemija.',
          'Pacijent ne može da uzima lekove na usta.',
          'Simptomi se ne popravljaju kako se očekuje uprkos antibiotiku.',
          'Skor 1 uz nepovoljne okolnosti: značajan komorbiditet, trudnoća, nema ko da brine o pacijentu.'
        ] },
        { type: 'list', title: 'Očekivani oporavak i kontrola', items: [
          '1 nedelja: temperatura treba da se povuče.',
          '4 nedelje: bol u grudima i iskašljavanje znatno manji.',
          '6 nedelja: kašalj i otežano disanje znatno manji.',
          '3 meseca: većina simptoma se povukla, umor može da traje; 6 meseci: potpun oporavak.',
          'Kontrolni RTG posle 6 nedelja razmotri kod pušača, starijih od 50 godina, upornih simptoma ili neobjašnjivog mršavljenja.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Pet dana antibiotika je dovoljno ako je pacijent stabilan; duža terapija ne ubrzava oporavak.',
          'Znaci nestabilnosti: temperatura u poslednjih 48 h, sistolni pritisak ispod 90, puls iznad 100, disanje iznad 24/min, SpO2 ispod 90%.',
          'Fluorohinoloni su rezerva zbog rizika od trajnih neželjenih dejstava, a ne prva linija.',
          'CRB-65 ne zamenjuje kliničku procenu: mlad pacijent sa hipoksemijom ide u bolnicu i sa skorom 0.',
          'Savetuj prestanak pušenja i vakcinaciju protiv gripa i pneumokoka.'
        ] }
      ],
      sources: [
        { name: 'NICE NG250 (pneumonija, 2025)', url: 'https://www.nice.org.uk/guidance/ng250/chapter/Recommendations' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Žena, 48 god., bez hroničnih bolesti: temperatura 38,7 °C, kašalj, pukoti desno bazalno. Orijentisana, FR 20/min, TA 120/75 mmHg, SpO2 97%. Koliki je CRB-65 i gde se leči?',
          options: [
            'Skor 0; lečenje kod kuće oralnim antibiotikom uz savet kada da se javi',
            'Skor 1; obavezno bolničko lečenje',
            'Skor 2; hitna hospitalizacija',
            'Skor se ne može računati bez vrednosti uree'
          ],
          answer: 0,
          explain: 'Nema konfuzije, FR je ispod 30, pritisak je normalan i mlađa je od 65: skor 0, nizak rizik, lečenje kod kuće. Urea je potrebna za CURB-65, ali ne i za CRB-65.'
        },
        {
          q: 'Istoj pacijentkinji propisuješ antibiotik. Šta je prva linija i koliko dugo?',
          options: [
            'Levofloksacin 500 mg 1× dnevno, 10 dana',
            'Azitromicin 500 mg 1× dnevno, 3 dana',
            'Amoksicilin 500 mg do 1 g na 8 h, 5 dana',
            'Cefiksim 400 mg 1× dnevno, 7 dana'
          ],
          answer: 2,
          explain: 'Amoksicilin je prva linija za laku vanbolničku pneumoniju, a 5 dana je dovoljno kod stabilnog pacijenta. Fluorohinoloni su rezerva, a oralni cefalosporini treće generacije nisu preporučeni izbor.'
        },
        {
          q: 'Muškarac, 79 god., kašalj i temperatura; danas ne zna koji je dan, FR 32/min, TA 100/55 mmHg, SpO2 88%. Postupak?',
          options: [
            'Amoksicilin oralno i kontrola sutra',
            'Doksiciklin oralno i RTG pluća ambulantno',
            'Kiseonik kod kuće i antibiotik intramuskularno',
            'Hitan transport u bolnicu; CRB-65 je 4'
          ],
          answer: 3,
          explain: 'Konfuzija, FR ≥30, dijastolni pritisak ≤60 mmHg i starost ≥65 daju skor 4, što znači visok rizik od smrti. Uz hipoksemiju je neophodno hitno bolničko lečenje.'
        },
        {
          q: 'Pušač, 56 god., lečen od pneumonije; posle šest nedelja oseća se dobro, ali i dalje kašlje. Šta je opravdano?',
          options: [
            'Ponoviti antibiotik još 10 dana',
            'Kontrolni RTG pluća, zbog faktora rizika za karcinom pluća',
            'Ništa, kašalj je uvek očekivan do šest meseci',
            'CT grudnog koša odmah, bez prethodnog RTG snimka'
          ],
          answer: 1,
          explain: 'Kontrolni RTG posle 6 nedelja treba razmotriti kod pušača, starijih od 50 godina i kod upornih simptoma, da se ne previdi tumor iza pneumonije. Novi antibiotik bez znakova infekcije nema smisla.'
        }
      ]
    },
    {
      id: 'astma',
      title: 'Astma',
      summary: 'Dijagnoza se potvrđuje varijabilnom opstrukcijom; svi dobijaju ICS, a ICS-formoterol po potrebi je preporučena olakšavajuća terapija.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Astma se dijagnostikuje na osnovu tipičnih varijabilnih simptoma i dokazane varijabilne opstrukcije. Po GINA, odrasli i adolescenti ne smeju se lečiti samo SABA: svi dobijaju terapiju koja sadrži inhalacioni kortikosteroid. Preporučeni put (Track 1) koristi niske doze ICS-formoterola kao olakšavajuću terapiju na svim koracima.' },
        { type: 'list', title: 'Dijagnoza', items: [
          'Simptomi: vizing, otežano disanje, stezanje u grudima i kašalj, promenljivi po jačini i vremenu, često gori noću.',
          'Spirometrija sa bronhodilatatornim testom: porast FEV1 ili FVC za ≥12% i ≥200 ml posle 200–400 µg salbutamola.',
          'Alternativa: prosečna dnevna varijabilnost PEF veća od 10% kod odraslih.',
          'Ako spirometrija nije dostupna, koristi PEF-metar (porast PEF ≥20% posle bronhodilatatora).',
          'Funkciju pluća meri pre uvođenja ICS, posle 3–6 meseci, a zatim najmanje jednom u 1–2 godine.'
        ] },
        { type: 'list', title: 'Procena kontrole (poslednje 4 nedelje)', items: [
          'Dnevni simptomi češće od dva puta nedeljno?',
          'Bilo kakvo noćno buđenje zbog astme?',
          'Potreba za SABA češće od dva puta nedeljno?',
          'Bilo kakvo ograničenje aktivnosti zbog astme?',
          'Nijedno DA: dobro kontrolisana; 1–2: delimično kontrolisana; 3–4: nekontrolisana.',
          'Na svakoj kontroli proveri tehniku inhalacije (posmatranjem), adherenciju i da li pacijent ima pisani akcioni plan.'
        ] },
        { type: 'steps', title: 'Stepenasta terapija po GINA (Track 1)', items: [
          '**Koraci 1–2**: niska doza ICS-formoterola samo po potrebi (1 udah kada ima tegobe).',
          '**Korak 3**: niska doza ICS-formoterola za održavanje i po potrebi (MART): 1 udah ujutru i uveče, plus 1 po potrebi.',
          '**Korak 4**: srednja doza MART: 2 udaha ujutru i uveče, plus 1 po potrebi.',
          '**Korak 5**: uputiti pulmologu radi procene fenotipa i dodatne terapije (LAMA, biološki lekovi).',
          'Pre pojačavanja terapije proveri tehniku, adherenciju, okidače i komorbiditete (rinitis, refluks, gojaznost).',
          'Posle 2–3 meseca dobre kontrole razmotri postepeno smanjenje terapije.',
          'Track 2 (kada ICS-formoterol nije dostupan): SABA po potrebi, ali uvek uz ICS; od koraka 2 redovan ICS, zatim ICS-LABA.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'budesonid-formoterol 160/4,5 µg (isporučena doza)', dose: 'koraci 1–2: 1 udah inhalaciono po potrebi; korak 3: 1 udah 2× dnevno + po potrebi; korak 4: 2 udaha 2× dnevno + po potrebi', note: 'Najviše 12 udaha ukupno u jednom danu; ako treba više, javiti se lekaru istog dana.' },
          { name: 'beklometazon-formoterol 100/6 µg', dose: 'korak 3: 1 udah inhalaciono 2× dnevno + 1 po potrebi; koraci 4–5: 2 udaha 2× dnevno + 1 po potrebi', note: 'Koristi se u MART režimu; za primenu samo po potrebi nema studija.' },
          { name: 'budesonid (Track 2)', dose: 'niska doza: ukupno 200–400 µg dnevno inhalaciono, svakodnevno', note: 'Srednja doza je preko 400 do 800 µg, visoka preko 800 µg dnevno. Uz pMDI koristiti komoru.' },
          { name: 'salbutamol 100 µg/udah (egzacerbacija)', dose: '4–10 udaha preko komore, ponoviti na 20 minuta, do 3 doze u prvom satu', note: 'Proceni odgovor posle 1 h ili ranije.' },
          { name: 'prednizolon', dose: '40–50 mg p.o. ujutru, 5–7 dana', note: 'Kod egzacerbacije koja nije blaga; kod kure kraće od 2 nedelje nije potrebno postepeno smanjivanje. Deca: 1–2 mg/kg, najviše 40 mg, 3–5 dana.' },
          { name: 'kiseonik', dose: 'titrirati do SpO2 93–95% (deca ≥94%)', note: 'Kod egzacerbacije sa hipoksemijom.' }
        ] },
        { type: 'flags', title: 'Teška egzacerbacija', items: [
          'Govori pojedinačne reči, sedi nagnut napred, uznemiren.',
          'Frekvencija disanja iznad 30/min, upotreba pomoćne disajne muskulature.',
          'Puls iznad 120/min, SpO2 na sobnom vazduhu ispod 90%.',
          'PEF 50% ili manje od predviđenog ili najboljeg ličnog.',
          '**Životno ugrožen**: pospan, konfuzan ili nečujan disajni šum: hitan transport uz SABA, ipratropijum, kiseonik i kortikosteroid.'
        ] },
        { type: 'refer', title: 'Kada uputiti pulmologu', items: [
          'Dijagnoza je nesigurna ili spirometrija nije dostupna za potvrdu.',
          'Astma nije kontrolisana posle 3–6 meseci terapije na koraku 4.',
          'Ponavljane egzacerbacije, hitne posete ili hospitalizacija zbog astme.',
          'Sumnja na profesionalnu astmu.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'I pacijent sa retkim tegobama ima upalu disajnih puteva i rizik od teške egzacerbacije; zato niko ne ostaje samo na SABA.',
          'ICS-formoterol po potrebi smanjuje rizik od hitnih poseta i hospitalizacija za oko dve trećine u odnosu na samo SABA.',
          'Pacijent čiji lek za održavanje sadrži neki drugi LABA ne koristi ICS-formoterol kao olakšavajuću terapiju.',
          'Loša tehnika inhalacije je najčešći razlog prividno nekontrolisane astme; gledaj kako pacijent uzima lek.',
          'Posle egzacerbacije zakaži kontrolu za 2–7 dana i proveri terapiju održavanja.'
        ] }
      ],
      sources: [
        { name: 'GINA Summary Guide 2025', url: 'https://ginasthma.org/wp-content/uploads/2025/11/GINA-Summary-Guide-2025-WEB_FINAL-WMS.pdf' }
      ],
      questions: [
        {
          q: 'Student, 22 god., vizing i kašalj nekoliko puta mesečno, uglavnom pri naporu; spirometrija pokazuje porast FEV1 za 15% i 320 ml posle salbutamola. Koja je preporučena početna terapija?',
          options: [
            'Samo salbutamol po potrebi',
            'Montelukast 10 mg uveče',
            'Niska doza ICS-formoterola po potrebi',
            'Teofilin sa produženim oslobađanjem'
          ],
          answer: 2,
          explain: 'Dijagnoza je potvrđena (≥12% i ≥200 ml). Po GINA se ni blaga astma ne leči samo SABA; preporučena terapija na koracima 1–2 je niska doza ICS-formoterola po potrebi.'
        },
        {
          q: 'Žena, 35 god., na budesonid-formoterolu 160/4,5 µg u MART režimu (1 udah 2× dnevno + po potrebi) i dalje ima noćne tegobe tri puta nedeljno. Šta radiš prvo?',
          options: [
            'Odmah povećaš na 2 udaha 2× dnevno',
            'Proveriš tehniku inhalacije, adherenciju i okidače',
            'Dodaš oralni prednizolon u maloj dozi trajno',
            'Uputiš je na biološku terapiju'
          ],
          answer: 1,
          explain: 'Pre svakog pojačavanja terapije proveravaju se tehnika (posmatranjem), redovnost uzimanja, okidači i komorbiditeti. To su najčešći uzroci loše kontrole i rešavaju se bez veće doze leka.'
        },
        {
          q: 'Muškarac, 28 god., astma; u ambulanti govori u kratkim rečenicama, FR 26/min, puls 112/min, SpO2 93%. Prva terapija?',
          options: [
            'Aminofilin intravenski',
            'Antibiotik i antitusik',
            'Samo kiseonik i posmatranje jedan sat',
            'Salbutamol 4–10 udaha preko komore na 20 minuta i prednizolon 40–50 mg p.o.'
          ],
          answer: 3,
          explain: 'To je blaga do umerena egzacerbacija: ponavljane doze SABA preko komore u prvom satu i rano dat oralni kortikosteroid. Kiseonik se titrira do SpO2 93–95%.'
        },
        {
          q: 'Koliko najviše udaha budesonid-formoterola 160/4,5 µg (održavanje i po potrebi zajedno) odrasli pacijent sme da uzme u jednom danu po GINA?',
          options: [
            '12 udaha',
            '4 udaha',
            '6 udaha',
            '20 udaha'
          ],
          answer: 0,
          explain: 'Gornja granica je 12 udaha ukupno u jednom danu. Većini treba mnogo manje, a pacijent kome treba više mora istog dana da se javi lekaru.'
        }
      ]
    },
    {
      id: 'hobp',
      title: 'Hronična opstruktivna bolest pluća',
      summary: 'Dijagnoza samo spirometrijom; terapija po GOLD grupama A/B/E, a prestanak pušenja je jedina mera koja menja tok bolesti.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Na HOBP treba misliti kod svakog pušača ili bivšeg pušača sa dispnejom, hroničnim kašljem ili iskašljavanjem. Dijagnoza se postavlja isključivo spirometrijom: postbronhodilatatorni odnos FEV1/FVC ispod 0,7. Terapija se bira prema simptomima i egzacerbacijama (grupe A, B i E), a ne prema vrednosti FEV1.' },
        { type: 'list', title: 'Dijagnostika i procena', items: [
          'Spirometrija posle bronhodilatatora: FEV1/FVC manji od 0,7 potvrđuje opstrukciju.',
          'Težina opstrukcije po FEV1: GOLD 1 ≥80%, GOLD 2 50–79%, GOLD 3 30–49%, GOLD 4 ispod 30% predviđenog.',
          'Simptomi: mMRC skala dispneje (prag ≥2) ili CAT upitnik (prag ≥10).',
          'Broj umerenih i teških egzacerbacija u prethodnoj godini.',
          'Broj eozinofila u krvi usmerava odluku o inhalacionom kortikosteroidu.',
          'SpO2 92% ili manje: potrebne su gasne analize arterijske krvi.'
        ] },
        { type: 'list', title: 'GOLD grupe (izveštaj 2026)', items: [
          '**Grupa A**: bez egzacerbacija, malo simptoma (mMRC 0–1, CAT ispod 10).',
          '**Grupa B**: bez egzacerbacija, izraženiji simptomi (mMRC ≥2 ili CAT ≥10).',
          '**Grupa E**: najmanje jedna umerena ili teška egzacerbacija u prethodnoj godini, bez obzira na simptome.',
          'Do izveštaja za 2025. prag za grupu E bio je ≥2 umerene ili ≥1 egzacerbacija sa hospitalizacijom; starije tabele koriste taj prag.'
        ] },
        { type: 'steps', title: 'Početna inhalaciona terapija', items: [
          '**Grupa A**: bronhodilatator, kratkodelujući ili dugodelujući; dugodelujući ima prednost osim kod veoma retke dispneje.',
          '**Grupa B**: kombinacija LABA+LAMA.',
          '**Grupa E**: LABA+LAMA; razmotri LABA+LAMA+ICS ako su eozinofili ≥300/µl.',
          'Svima kratkodelujući bronhodilatator po potrebi za brzo olakšanje.',
          'Pri eozinofilima ispod 100/µl ICS ima mali ili nikakav efekat.',
          'Kombinacija LABA+ICS se u HOBP ne preporučuje; ako postoji i astma, ICS je obavezan i leči se kao astma.',
          'Na kontroli proveri tehniku inhalacije, adherenciju, dispneju i egzacerbacije, pa prilagodi terapiju.'
        ] },
        { type: 'drugs', title: 'Egzacerbacija', items: [
          { name: 'salbutamol 100 µg/udah', dose: '1–2 udaha inhalaciono na 1 h, 2–3 doze, zatim na 2–4 h prema odgovoru', note: 'Sa kratkodelujućim antiholinergikom ili bez njega; preko komore. Izbegavati visoke doze.' },
          { name: 'prednizon ili prednizolon', dose: '40 mg p.o. 1× dnevno, 5 dana', note: 'Kod umerene i teške egzacerbacije; duže kure povećavaju rizik od pneumonije.' },
          { name: 'amoksicilin', dose: '500 mg p.o. na 8 h, 5 dana', note: 'Antibiotik samo ako je sputum postao gnojav uz pojačanu dispneju ili veću količinu sputuma.' },
          { name: 'doksiciklin', dose: '200 mg p.o. prvog dana, zatim 100 mg 1× dnevno, ukupno 5 dana', note: 'Ravnopravan prvi izbor.' },
          { name: 'amoksicilin-klavulanat', dose: '500/125 mg p.o. na 8 h, 5 dana', note: 'Kod povišenog rizika od neuspeha terapije; izbor uskladiti sa prethodnim kulturama sputuma.' },
          { name: 'kiseonik', dose: 'kontrolisano, malim protokom, uz titraciju prema SpO2', note: 'Previše kiseonika može pogoršati hiperkapniju; nebulizacija na vazduh, ne na kiseonik.' }
        ] },
        { type: 'list', title: 'Nefarmakološke mere', items: [
          'Prestanak pušenja: savet na svakoj poseti; nikotinska zamenska terapija, vareniklin i bupropion povećavaju uspeh.',
          'Vakcinacija: grip svake godine, pneumokok, RSV i COVID-19; uz to Tdap i vakcina protiv herpes zostera.',
          'Plućna rehabilitacija i fizička aktivnost za sve simptomatske pacijente.',
          'Dugotrajna oksigenoterapija (više od 15 h dnevno) kod teške hipoksemije u mirovanju produžava život.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Egzacerbacija sa hipoksemijom, poremećajem svesti, teškom dispnejom ili bez odgovora na početnu terapiju: bolnica.',
          'Sumnja na pneumoniju, plućnu emboliju, srčanu slabost ili pneumotoraks kao uzrok pogoršanja.',
          'SpO2 trajno 92% ili manje: pulmolog radi gasnih analiza i procene za oksigenoterapiju.',
          'Česte egzacerbacije uprkos LABA+LAMA, brzo napredovanje bolesti ili nesigurna dijagnoza.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Bez spirometrije nema dijagnoze HOBP; dispneja pušača može biti i srčana slabost.',
          'Kriterijum za dugotrajnu oksigenoterapiju: PaO2 ≤55 mmHg (7,3 kPa) ili SaO2 ≤88%, potvrđeno dva puta u tri nedelje.',
          'Antibiotik kod egzacerbacije daje se najduže 5 dana, i to samo uz gnojav sputum.',
          'Tokom egzacerbacije se dugodelujući bronhodilatatori ne prekidaju.',
          'Teofilin i aminofilin se ne preporučuju zbog neželjenih dejstava.'
        ] }
      ],
      sources: [
        { name: 'GOLD izveštaj 2026', url: 'https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf' },
        { name: 'NICE NG114 (egzacerbacija HOBP, antibiotici)', url: 'https://www.nice.org.uk/guidance/ng114/chapter/Recommendations' },
        { name: 'NICE NG115 (HOBP kod starijih od 16)', url: 'https://www.nice.org.uk/guidance/ng115/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Muškarac, 61 god., puši 35 godina, zamara se pri hodu uz stepenice i svako jutro iskašljava. Kako postavljaš dijagnozu HOBP?',
          options: [
            'RTG snimkom pluća koji pokazuje hiperinflaciju',
            'Na osnovu anamneze pušenja i auskultatornog nalaza',
            'Merenjem PEF-a tokom dve nedelje',
            'Spirometrijom: FEV1/FVC ispod 0,7 posle bronhodilatatora'
          ],
          answer: 3,
          explain: 'Dijagnoza HOBP zahteva spirometrijski dokaz opstrukcije koja nije potpuno reverzibilna: postbronhodilatatorni FEV1/FVC ispod 0,7. RTG i klinička slika služe za isključivanje drugih bolesti.'
        },
        {
          q: 'Pacijentkinja, 67 god., HOBP potvrđena spirometrijom; zastaje pri hodu po ravnom (mMRC 2) i prošle zime je jednom lečena antibiotikom i kortikosteroidom zbog pogoršanja. Koja je GOLD grupa po izveštaju za 2026?',
          options: [
            'Grupa A',
            'Grupa E',
            'Grupa B',
            'Grupa se ne može odrediti bez vrednosti FEV1'
          ],
          answer: 1,
          explain: 'Po GOLD 2026 već jedna umerena egzacerbacija u prethodnoj godini svrstava pacijenta u grupu E. Vrednost FEV1 određuje stepen opstrukcije, ali ne i grupu.'
        },
        {
          q: 'Pacijent u grupi E, eozinofili 120/µl, bez astme. Koja je preporučena početna terapija održavanja?',
          options: [
            'LABA+LAMA u fiksnoj kombinaciji',
            'LABA+ICS u fiksnoj kombinaciji',
            'Samo salbutamol po potrebi',
            'Teofilin oralno'
          ],
          answer: 0,
          explain: 'U grupi E početna terapija je LABA+LAMA. Trojna terapija se razmatra pri eozinofilima ≥300/µl, a LABA+ICS se u HOBP bez astme ne preporučuje.'
        },
        {
          q: 'Muškarac, 70 god., HOBP; tri dana jača dispneja, više sputuma koji je postao zelen. SpO2 93%, orijentisan, FR 22/min. Šta propisuješ uz češći bronhodilatator?',
          options: [
            'Samo antitusik i kontrolu za nedelju dana',
            'Prednizon 20 mg 14 dana i ciprofloksacin 10 dana',
            'Prednizon 40 mg 5 dana i antibiotik (npr. amoksicilin ili doksiciklin) 5 dana',
            'Aminofilin oralno i antibiotik 14 dana'
          ],
          answer: 2,
          explain: 'Umerena egzacerbacija se leči sistemskim kortikosteroidom 40 mg tokom 5 dana. Gnojav sputum uz pojačanu dispneju i veću količinu sputuma opravdava antibiotik, najduže 5 dana.'
        }
      ]
    },
    {
      id: 'alergijski-rinitis',
      title: 'Alergijski rinitis',
      summary: 'Nesedativni antihistaminik za blage, nazalni kortikosteroid za upornije tegobe; uvek pitaj za astmu.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Alergijski rinitis je IgE-posredovana upala sluznice nosa. Po ARIA se deli na intermitentni i perzistentni, odnosno blag i umeren do težak, prema uticaju na san i dnevne aktivnosti. Lečenje čine izbegavanje alergena, oralni antihistaminik druge generacije i intranazalni kortikosteroid. Često ide zajedno sa astmom i otežava njenu kontrolu.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Kijanje u napadima, svrab nosa, vodenasta sekrecija, zapušenost nosa.',
          'Svrab i crvenilo očiju, suzenje (alergijski konjunktivitis).',
          'Sezonska pojava (poleni) ili tegobe tokom cele godine (grinje, buđ, epitel životinja).',
          'Dijagnoza je klinička; kožni prik test ili specifični IgE potvrđuju alergen kada se planira imunoterapija.'
        ] },
        { type: 'flags', title: 'Kada nije obična alergija', items: [
          'Jednostrana zapušenost ili jednostrana sekrecija.',
          'Krvav ili gnojav sekret, bol u licu.',
          'Gubitak mirisa koji traje, polipi u nosu.',
          'Bez odgovora na pravilno sprovedenu terapiju.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Utvrdi okidače i posavetuj mere izbegavanja alergena.',
          'Blage ili povremene tegobe: oralni antihistaminik druge generacije, po potrebi ili redovno u sezoni.',
          'Uporne ili umereno teške tegobe, posebno zapušenost: intranazalni kortikosteroid redovno.',
          'Pokaži tehniku: glava blago napred, vrh spreja usmeriti od nosne pregrade, lagano udahnuti.',
          'Ako posle 14 dana redovne primene nema poboljšanja, proveri tehniku i adherenciju, pa razmotri dopunu terapije.',
          'Pitaj za kašalj, vizing i noćne tegobe; kod sumnje na astmu uradi spirometriju.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'cetirizin', dose: '10 mg p.o. 1× dnevno', note: 'Deca 6–11 godina: 5 mg 2× dnevno. Kod nekih pacijenata izaziva pospanost.' },
          { name: 'loratadin', dose: '10 mg p.o. 1× dnevno', note: 'Kod oštećenja jetre niža doza ili primena svaki drugi dan.' },
          { name: 'feksofenadin', dose: '120 mg p.o. 1× dnevno, pre obroka', note: 'Za odrasle i decu od 12 godina.' },
          { name: 'mometazon-furoat, sprej za nos 50 µg/potisak', dose: '1–2 potiska u svaku nozdrvu 1× dnevno; najviše 2 potiska u svaku nozdrvu za 24 h', note: 'Kada se tegobe smire, smanjiti na 1 potisak. Pun efekat se ne javlja odmah; koristiti redovno.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Jednostrani simptomi, krvav sekret ili sumnja na polipe: ORL.',
          'Tegobe koje ostaju uprkos redovnoj kombinovanoj terapiji: alergolog radi testiranja i procene za imunoterapiju alergenom.',
          'Udružena astma koja nije dobro kontrolisana: pulmolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Nazalni kortikosteroid deluje samo ako se koristi redovno i pravilno; loša tehnika je najčešći razlog neuspeha.',
          'Sprej usmeren ka nosnoj pregradi izaziva krvarenje i iritaciju.',
          'Antihistaminici prve generacije se izbegavaju zbog sedacije.',
          'Rinitis i astma su često udruženi; lečenje rinitisa je deo dobre kontrole astme.',
          'Jednostrana zapušenost nosa kod odraslog nije alergija dok se ne dokaže suprotno.'
        ] }
      ],
      sources: [
        { name: 'NHS: cetirizin', url: 'https://www.nhs.uk/medicines/cetirizine/how-and-when-to-take-cetirizine/' },
        { name: 'NHS: loratadin', url: 'https://www.nhs.uk/medicines/loratadine/how-and-when-to-take-loratadine/' },
        { name: 'NHS: feksofenadin', url: 'https://www.nhs.uk/medicines/fexofenadine/how-and-when-to-take-fexofenadine/' },
        { name: 'NHS: mometazon sprej za nos', url: 'https://www.nhs.uk/medicines/mometasone-nasal-spray/how-and-when-to-use-mometasone-nasal-spray/' }
      ],
      questions: [
        {
          q: 'Žena, 26 god., svakog proleća kija, svrbi je nos i suze joj oči; nos nije zapušen, tegobe su blage. Prva terapija?',
          options: [
            'Nazalni dekongestiv svakodnevno tokom cele sezone',
            'Depo kortikosteroid intramuskularno pred sezonu',
            'Oralni antihistaminik druge generacije, npr. cetirizin 10 mg 1× dnevno',
            'Antibiotik zbog sekrecije iz nosa'
          ],
          answer: 2,
          explain: 'Za blage tegobe sa kijanjem i svrabom dovoljan je nesedativni antihistaminik. Depo kortikosteroidi i dugotrajni dekongestivi nose više štete nego koristi.'
        },
        {
          q: 'Muškarac, 33 god., tokom cele godine ima zapušen nos koji mu remeti san; antihistaminik pomaže samo delimično. Sledeći korak?',
          options: [
            'Intranazalni kortikosteroid redovno, uz obuku tehnike primene',
            'Dodati drugi oralni antihistaminik',
            'Oralni kortikosteroid mesec dana',
            'Antihistaminik prve generacije uveče'
          ],
          answer: 0,
          explain: 'Kod upornih tegoba, a naročito zapušenosti, intranazalni kortikosteroid je efikasniji od antihistaminika. Uslov su redovna primena i pravilna tehnika.'
        },
        {
          q: 'Pacijent se žali da mu nazalni kortikosteroid ne pomaže i da mu često krvari nos. Prska ga pravo ka nosnoj pregradi. Šta savetuješ?',
          options: [
            'Prekid terapije jer lek ne deluje',
            'Zamenu oralnim kortikosteroidom',
            'Dvostruko veću dozu istog spreja',
            'Ispravku tehnike: usmeriti sprej od pregrade, glava blago napred'
          ],
          answer: 3,
          explain: 'Usmeravanje mlaza ka septumu izaziva iritaciju i krvarenje, a lek ne dospeva do sluznice školjki. Ispravka tehnike obično rešava i neefikasnost i krvarenje.'
        },
        {
          q: 'Muškarac, 52 god., tri meseca ima zapušenu samo desnu stranu nosa, povremeno sa sukrvičavim sekretom. Dosad nije imao alergije. Postupak?',
          options: [
            'Antihistaminik i kontrola za mesec dana',
            'Uputiti ORL specijalisti radi endoskopskog pregleda',
            'Nazalni kortikosteroid tri meseca',
            'Kožni prik test na inhalacione alergene'
          ],
          answer: 1,
          explain: 'Jednostrana zapušenost sa krvavim sekretom kod odraslog je crvena zastavica za tumor ili drugu strukturnu bolest. Potreban je ORL pregled, a ne probna antialergijska terapija.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'respiratorno-slucaj-1',
      title: 'Muškarac, 71 god., kašalj i temperatura',
      intro: 'U ambulantu dolazi penzioner, 71 god., pušač, sa hipertenzijom. Tri dana ima temperaturu do 38,8 °C, kašalj sa žućkastim sputumom i bol desno pri dubokom udahu. Dolazi sam, razgovara bez teškoća.',
      steps: [
        {
          q: 'Šta je prvi korak u proceni ovog pacijenta?',
          options: [
            'Propisati antibiotik i zakazati kontrolu za nedelju dana',
            'Izmeriti vitalne parametre sa SpO2, proceniti svest, auskultovati pluća i izračunati CRB-65',
            'Odmah ga uputiti na CT grudnog koša',
            'Uzeti sputum za kulturu i sačekati rezultat pre terapije'
          ],
          answer: 1,
          explain: 'Odluka o mestu lečenja zavisi od kliničke procene i CRB-65, za koji su potrebni svest, frekvencija disanja, krvni pritisak i godine. Kod lake pneumonije mikrobiologija rutinski nije potrebna.'
        },
        {
          q: 'Nalaz: orijentisan, FR 22/min, TA 130/80 mmHg, puls 96/min, SpO2 95%, pukoti desno bazalno. Koliki je CRB-65 i šta dalje?',
          options: [
            'Skor 0; simptomatska terapija bez antibiotika',
            'Skor 3; hitna hospitalizacija',
            'Skor 2; obavezno bolničko lečenje',
            'Skor 1 (godine); moguće kućno lečenje uz antibiotik, RTG i jasnu bezbednosnu mrežu'
          ],
          answer: 3,
          explain: 'Jedini poen donosi starost ≥65. Kod skora 1 odlučuje klinička procena: stabilan pacijent bez hipoksemije može se lečiti kod kuće uz jasna uputstva, a alternativa je upućivanje na bolničku procenu.'
        },
        {
          q: 'Odlučujete se za kućno lečenje. Nema alergija na lekove. Koji antibiotik i koliko dugo?',
          options: [
            'Amoksicilin 500 mg do 1 g na 8 h, 5 dana',
            'Moksifloksacin 400 mg 1× dnevno, 10 dana',
            'Azitromicin 500 mg 1× dnevno, 3 dana',
            'Ceftriakson 1 g i.m. 1× dnevno, 7 dana'
          ],
          answer: 0,
          explain: 'Amoksicilin je prva linija kod lake vanbolničke pneumonije, a 5 dana je dovoljno ako je pacijent stabilan. Fluorohinoloni su rezerva, a parenteralna terapija nije potrebna pacijentu koji može da guta.'
        },
        {
          q: 'Trećeg dana supruga zove: slabije jede, zbunjen je, ubrzano diše. U kućnoj poseti: dezorijentisan, FR 32/min, TA 85/55 mmHg, SpO2 87%. Postupak?',
          options: [
            'Zameniti amoksicilin klaritromicinom i doći sutra',
            'Dodati oralni kortikosteroid i povećati unos tečnosti',
            'Hitan transport u bolnicu preko SHMP (194), uz kiseonik; CRB-65 je sada 4',
            'Uraditi RTG pluća ambulantno narednog dana'
          ],
          answer: 2,
          explain: 'Pogoršanje uprkos antibiotiku uz konfuziju, FR ≥30, hipotenziju i hipoksemiju znači tešku pneumoniju sa visokim rizikom od smrti. Lečenje se nastavlja u bolnici, bez odlaganja.'
        },
        {
          q: 'Posle bolničkog lečenja dolazi na kontrolu šest nedelja kasnije. Oseća se dobro, još malo kašlje i dalje puši. Šta je opravdano?',
          options: [
            'Ništa više nije potrebno jer je klinički izlečen',
            'Kontrolni RTG pluća, savet o prestanku pušenja i vakcinacija protiv gripa i pneumokoka',
            'Profilaktički antibiotik tokom zime',
            'Dugotrajna terapija inhalacionim kortikosteroidom'
          ],
          answer: 1,
          explain: 'Kod pušača i starijih od 50 godina razmatra se kontrolni RTG posle 6 nedelja, da se ne previdi tumor iza pneumonije. Kontrola je i prilika za savet o pušenju i vakcinaciju.'
        }
      ]
    },
    {
      id: 'respiratorno-slucaj-2',
      title: 'Žena, 24 god., noćni kašalj',
      intro: 'Studentkinja, 24 god., dolazi jer je poslednja dva meseca kašalj i stezanje u grudima bude dva do tri puta nedeljno. Od detinjstva ima alergijsku kijavicu. Drugarica joj je dala salbutamol sprej koji joj pomaže i koji koristi skoro svaki dan.',
      steps: [
        {
          q: 'Sumnjaš na astmu. Kako potvrđuješ dijagnozu?',
          options: [
            'RTG pluća je dovoljan za dijagnozu',
            'Dobar odgovor na salbutamol po anamnezi je dovoljan dokaz',
            'Ukupni IgE i eozinofili u krvnoj slici',
            'Spirometrija sa bronhodilatatornim testom: porast FEV1 za ≥12% i ≥200 ml'
          ],
          answer: 3,
          explain: 'Astma se potvrđuje dokazom varijabilne opstrukcije, najčešće bronhodilatatornim testom. Poželjno je to uraditi pre uvođenja ICS, jer kasnije varijabilnost može nestati.'
        },
        {
          q: 'Spirometrija: FEV1 raste za 16% i 380 ml posle salbutamola. Koju terapiju uvodiš, s obzirom na učestalost tegoba?',
          options: [
            'Nastaviti samo salbutamol po potrebi',
            'Oralni prednizolon u maloj dozi svakodnevno',
            'Niska doza ICS-formoterola za održavanje i po potrebi (MART)',
            'Antihistaminik i sirup protiv kašlja'
          ],
          answer: 2,
          explain: 'Tegobe većinu dana i noćna buđenja jednom nedeljno ili češće odgovaraju koraku 3: niska doza ICS-formoterola kao MART. Lečenje samo SABA se po GINA ne preporučuje ni u jednom stepenu.'
        },
        {
          q: 'Posle tri meseca i dalje se budi dvaput nedeljno i često poseže za inhalerom. Šta radiš pre pojačavanja terapije?',
          options: [
            'Posmatraš kako uzima lek, proveriš redovnost uzimanja, okidače i lečenje rinitisa',
            'Odmah je upućuješ na biološku terapiju',
            'Dodaješ teofilin uveče',
            'Vraćaš je na salbutamol jer kombinacija ne deluje'
          ],
          answer: 0,
          explain: 'Najčešći uzroci loše kontrole su pogrešna tehnika, neredovno uzimanje i nelečeni okidači ili komorbiditeti poput rinitisa. Terapija se pojačava tek kada se to ispravi.'
        },
        {
          q: 'Jedne večeri dolazi u ambulantu: govori u rečenicama, FR 24/min, puls 108/min, SpO2 94%, difuzan vizing. Terapija?',
          options: [
            'Aminofilin i.v. i antibiotik',
            'Salbutamol 4–10 udaha preko komore na 20 minuta tokom prvog sata i prednizolon 40–50 mg p.o.',
            'Samo dodatna dva udaha svog leka, pa kući',
            'Antihistaminik i.m. i posmatranje'
          ],
          answer: 1,
          explain: 'Blaga do umerena egzacerbacija se leči ponavljanim dozama SABA preko komore i ranim oralnim kortikosteroidom tokom 5–7 dana. Posle sat vremena se procenjuje odgovor, a kontrola se zakazuje za 2–7 dana.'
        }
      ]
    },
    {
      id: 'respiratorno-slucaj-3',
      title: 'Muškarac, 66 god., zamaranje i jutarnji kašalj',
      intro: 'Vozač u penziji, 66 god., puši 40 godina po paklu dnevno. Godinama kašlje ujutru i iskašljava, a poslednju godinu mora da zastane kada hoda po ravnom. Prošle zime je jednom dobio antibiotik i tablete kortikosteroida zbog pogoršanja disanja.',
      steps: [
        {
          q: 'Šta je neophodno za postavljanje dijagnoze?',
          options: [
            'Spirometrija sa bronhodilatatornim testom',
            'RTG pluća i krvna slika',
            'Probna terapija bronhodilatatorom mesec dana',
            'Merenje SpO2 u mirovanju'
          ],
          answer: 0,
          explain: 'HOBP se potvrđuje samo spirometrijom: postbronhodilatatorni FEV1/FVC ispod 0,7. RTG služi za isključivanje drugih bolesti, a odgovor na terapiju ne dokazuje dijagnozu.'
        },
        {
          q: 'Spirometrija: FEV1/FVC 0,58, FEV1 54% predviđenog. mMRC 2, jedna umerena egzacerbacija prošle godine, eozinofili 150/µl. Koju terapiju održavanja uvodiš?',
          options: [
            'Samo salbutamol po potrebi',
            'LABA+ICS',
            'LABA+LAMA, uz kratkodelujući bronhodilatator po potrebi',
            'Inhalacioni kortikosteroid kao monoterapiju'
          ],
          answer: 2,
          explain: 'Po GOLD 2026 jedna umerena egzacerbacija znači grupu E, gde je početna terapija LABA+LAMA. Trojna terapija se razmatra pri eozinofilima ≥300/µl, a ICS kao monoterapija u HOBP nema mesto.'
        },
        {
          q: 'Koja mera najviše menja dalji tok njegove bolesti?',
          options: [
            'Uvođenje mukolitika tokom zime',
            'Profilaktički antibiotik svakog meseca',
            'Dodavanje teofilina',
            'Prestanak pušenja, uz savetovanje i farmakološku podršku'
          ],
          answer: 3,
          explain: 'Prestanak pušenja je ključna intervencija kod svakog pušača sa HOBP. Savetovanje u kombinaciji sa nikotinskom zamenom, vareniklinom ili bupropionom povećava uspeh.'
        },
        {
          q: 'Dva meseca kasnije: četiri dana jača dispneja, više sputuma koji je sada gnojav. Orijentisan, FR 23/min, SpO2 92%. Terapija u ambulanti?',
          options: [
            'Samo povećati dozu LABA+LAMA',
            'Češći salbutamol, prednizon 40 mg 5 dana i antibiotik 5 dana',
            'Antibiotik 14 dana bez kortikosteroida',
            'Kiseonik velikim protokom i aminofilin'
          ],
          answer: 1,
          explain: 'Umerena egzacerbacija: kratkodelujući bronhodilatator, sistemski kortikosteroid 40 mg tokom 5 dana i, zbog gnojavog sputuma uz pojačanu dispneju, antibiotik najduže 5 dana. Terapija održavanja se ne prekida.'
        }
      ]
    }
  ]
});
