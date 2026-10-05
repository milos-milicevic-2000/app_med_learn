MED.register({
  id: 'kardio',
  title: 'Kardiovaskularne bolesti',
  icon: '❤️',
  color: '#E93D82',
  topics: [
    {
      id: 'hipertenzija',
      title: 'Arterijska hipertenzija',
      summary: 'Potvrdi dijagnozu merenjem van ordinacije, proceni ukupni rizik i počni dvojnom kombinacijom u jednoj tableti.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Hipertenzija je krvni pritisak u ordinaciji **≥140/90 mmHg** potvrđen ponovljenim merenjima, po mogućstvu i van ordinacije. Većini pacijenata treba i promena načina života i lekovi, a početak je **dvojna kombinacija** u jednoj tableti. ESC 2024 uvodi i kategoriju povišenog pritiska (120–139/70–89 mmHg), u kojoj se lekovi razmatraju prema ukupnom kardiovaskularnom riziku.'
        },
        {
          type: 'list',
          title: 'Dijagnoza i pragovi',
          items: [
            'Merenje u ordinaciji: posle 5 minuta mirovanja, tri merenja u razmaku 1–2 min, računa se prosek poslednja dva; pri prvom pregledu izmeri na obe ruke.',
            'Ordinacija: **≥140/90 mmHg**; dijagnozu potvrdi merenjem van ordinacije kad god je moguće.',
            'Kućno merenje (više dana, ujutru i uveče): **≥135/85 mmHg**.',
            'Holter pritiska: 24-časovni prosek **≥130/80 mmHg**, dnevni prosek ≥135/85 mmHg.',
            'Hipertenzija belog mantila: povišen pritisak u ordinaciji, normalan kod kuće. Maskirana hipertenzija: obrnuto.',
            'Ortostatska hipotenzija: pad sistolnog ≥20 mmHg i/ili dijastolnog ≥10 mmHg posle 1 i/ili 3 min stajanja; proveri kod starijih i pre pojačavanja terapije.'
          ]
        },
        {
          type: 'list',
          title: 'Početna obrada',
          items: [
            'Laboratorija: hemoglobin, glikemija našte ili HbA1c, lipidni status, kreatinin sa eGFR, natrijum, kalijum, kalcijum, TSH.',
            'Urin: odnos albumin/kreatinin.',
            'EKG sa 12 odvoda svima.',
            'Proceni ukupni kardiovaskularni rizik (SCORE2 / SCORE2-OP) i potraži oštećenje ciljnih organa.',
            'Pitaj za lekove i supstance koje dižu pritisak: NSAIL, oralni kontraceptivi, kortikosteroidi, dekongestivi, alkohol.',
            'Ehokardiografija, očno dno i ostala ispitivanja po indikaciji.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak lečenja',
          items: [
            'Svima: so ispod 5 g dnevno, smanjenje telesne mase, redovna fizička aktivnost, što manje alkohola, prestanak pušenja.',
            'Korak 1: **ACE inhibitor ili sartan + blokator kalcijumskih kanala ili tiazidni/tiazidima slični diuretik**, po mogućstvu u jednoj tableti.',
            'Monoterapija za početak dolazi u obzir kod povišenog pritiska (120–139/70–89 mmHg), krhkih, starijih od 85 godina i kod ortostatske hipotenzije.',
            'Kreatinin i kalijum kontroliši 1–2 nedelje posle uvođenja ACE inhibitora ili sartana; kontrole pritiska dok se ne postigne cilj.',
            'Korak 2: trojna kombinacija (ACE inhibitor ili sartan + blokator kalcijumskih kanala + diuretik) u najvišim podnošljivim dozama.',
            'Korak 3 (rezistentna hipertenzija): dodaj **spironolakton** ako bubrežna funkcija i kalijum to dozvoljavaju.',
            'Beta-blokator u bilo kom koraku kada postoji posebna indikacija: angina, preležan infarkt, srčana insuficijencija, kontrola frekvencije.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi i doze',
          items: [
            { name: 'ramipril', dose: '2,5–10 mg p.o. 1× dnevno', note: 'KI: trudnoća, angioedem. Kašalj: pređi na sartan. Ne kombinovati ACE inhibitor sa sartanom.' },
            { name: 'losartan', dose: '50–100 mg p.o. 1× dnevno', note: 'Alternativa kod kašlja na ACE inhibitor; KI trudnoća. Manja početna doza kod hipovolemije.' },
            { name: 'amlodipin', dose: '5–10 mg p.o. 1× dnevno', note: 'Otoci potkolenica zavise od doze.' },
            { name: 'hidrohlortiazid', dose: '12,5–25 mg p.o. 1× dnevno', note: 'Prati natrijum, kalijum i mokraćnu kiselinu. Pri eGFR <30 umesto tiazida diuretik Henleove petlje. Tiazidima slični (indapamid, hlortalidon): doza prema uputstvu.' },
            { name: 'spironolakton', dose: '25–50 mg p.o. 1× dnevno', note: 'Četvrti lek kod rezistentne hipertenzije. Oprez ako je eGFR <45 ili kalijum >4,5 mmol/l; kontrola kalijuma i kreatinina posle uvođenja.' },
            { name: 'bisoprolol', dose: '2,5–10 mg p.o. 1× dnevno', note: 'Kada postoji posebna indikacija za beta-blokator. KI: AV blok višeg stepena, izražena bradikardija.' }
          ]
        },
        {
          type: 'list',
          title: 'Ciljne vrednosti',
          items: [
            'ESC 2024: kod većine lečenih cilj je sistolni pritisak **120–129 mmHg**, pod uslovom da se terapija dobro podnosi.',
            'Ako se taj cilj ne podnosi: onoliko nisko koliko je razumno ostvarivo.',
            'Blaži ciljevi su prihvatljivi kod starijih od 85 godina, krhkih, sa ortostatskom hipotenzijom ili ograničenim životnim vekom.',
            'ESH 2023 (pacijenti sa hroničnom bubrežnom bolešću): prvo ispod 140/90 mmHg, zatim ispod 130/80 mmHg ako se podnosi; ne ciljati ispod 120/70 mmHg.',
            'Uspeh terapije proveravaj i merenjem van ordinacije.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice i kada uputiti',
          items: [
            'Visok pritisak **sa** bolom u grudima, dispnejom, neurološkim ispadom ili smetnjama vida: hipertenzivna emergencija, 194 i bolnica.',
            'Rezistentna hipertenzija: neregulisan pritisak na tri leka različitih klasa u optimalnim dozama, uključujući diuretik. Proveri adherencu, pa uputi.',
            'Sumnja na sekundarnu hipertenziju: početak u mladosti, nagli početak ili pogoršanje, stepen 3 (≥180/110 mmHg), hipokalijemija.',
            'Porast kreatinina veći od 30% posle ACE inhibitora ili sartana: misli na renovaskularnu bolest, uputi nefrologu.',
            'Hrkanje i dnevna pospanost (apneja u snu); napadi glavobolje, znojenja i palpitacija (feohromocitom).',
            'Trudnoća ili planiranje trudnoće kod žene na ACE inhibitoru ili sartanu; eGFR <30 ili izražena albuminurija.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Najčešći uzrok prividne rezistencije je neuzimanje terapije; pitaj bez osuđivanja i pojednostavi šemu na jednu tabletu.',
            'Asimptomatski visok pritisak bez oštećenja organa nije hitno stanje: bez naglog obaranja, uvedi ili pojačaj oralnu terapiju.',
            'ACE inhibitor i sartan su kontraindikovani u trudnoći; u trudnoći se koriste metildopa, labetalol i nifedipin.',
            'Porast kreatinina do 30% posle uvođenja ACE inhibitora ili sartana nije razlog za prekid; kontroliši ponovo.',
            'Kombinacija dva leka u manjim dozama po pravilu je bolja od povećanja doze jednog leka.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2024 – Elevated blood pressure and hypertension', url: 'https://academic.oup.com/eurheartj/article/45/38/3912/7741010' },
        { name: 'ESH 2023 – sinopsis za nefrološku praksu (ERA)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11139525/' }
      ],
      questions: [
        {
          q: 'Muškarac, 52 god., bez komorbiditeta. U ordinaciji na dve posete 152/94 i 150/96 mmHg, kućni prosek 146/92 mmHg. Nalazi uredni. Koja je početna terapija uz mere načina života?',
          options: [
            'Fiksna kombinacija ACE inhibitora i amlodipina',
            'Samo mere načina života i kontrola za šest meseci',
            'Bisoprolol 5 mg kao monoterapija prvog izbora',
            'Ramipril 10 mg, pa po potrebi dodati losartan'
          ],
          answer: 0,
          explain: 'Kod potvrđene hipertenzije preporučuje se početak dvojnom kombinacijom (blokator RAS + blokator kalcijumskih kanala ili diuretik), po mogućstvu u jednoj tableti. Beta-blokator nije prvi izbor bez posebne indikacije, a ACE inhibitor i sartan se ne kombinuju.'
        },
        {
          q: 'Žena, 31 god., na ramiprilu 5 mg zbog hipertenzije, javlja da je test na trudnoću pozitivan (6. nedelja). Pritisak 138/86 mmHg. Šta je ispravno?',
          options: [
            'Nastaviti ramipril do kraja prvog trimestra',
            'Odmah prekinuti ramipril, preći na lek bezbedan u trudnoći i uputiti ginekologu',
            'Zameniti ramipril losartanom u ekvivalentnoj dozi',
            'Zameniti ramipril spironolaktonom 25 mg dnevno'
          ],
          answer: 1,
          explain: 'ACE inhibitori i sartani su fetotoksični i prekidaju se čim se trudnoća potvrdi. U trudnoći se koriste metildopa, labetalol ili nifedipin; spironolakton se ne koristi.'
        },
        {
          q: 'Pacijent, 68 god., uzima ramipril 10 mg, amlodipin 10 mg i hidrohlortiazid 25 mg. Kućni prosek 158/96 mmHg, terapiju uzima redovno. Kalijum 4,2 mmol/l, eGFR 70. Sledeći korak?',
          options: [
            'Dodati losartan 100 mg uz ramipril',
            'Zameniti amlodipin drugim blokatorom kalcijumskih kanala',
            'Dodati spironolakton 25 mg i kontrolisati kalijum i kreatinin',
            'Ostaviti terapiju i kontrolisati za šest meseci'
          ],
          answer: 2,
          explain: 'Ovo je rezistentna hipertenzija (tri leka različitih klasa u optimalnim dozama, uključujući diuretik, uz proverenu adherencu). Sledeći lek je spironolakton, uz kontrolu kalijuma i bubrežne funkcije i razmatranje sekundarnih uzroka.'
        },
        {
          q: 'Muškarac, 44 god., dolazi zbog izmerenog pritiska kod kuće. U ambulanti 190/112 mmHg u tri merenja. Bez glavobolje, bola u grudima, dispneje i neurološkog ispada; EKG bez akutnih promena. Postupak?',
          options: [
            'Brzo oboriti pritisak sublingvalnim lekom i ponoviti merenje za 15 minuta',
            'Furosemid i.v. i hitan transport u bolnicu',
            'Hitno uputiti u urgentni centar zbog hipertenzivne krize',
            'Uvesti ili pojačati oralnu terapiju i kontrolisati za nekoliko dana'
          ],
          answer: 3,
          explain: 'Bez akutnog oštećenja ciljnih organa ovo nije emergencija i pritisak se snižava postepeno oralnom terapijom. Naglo obaranje pritiska može izazvati ishemiju mozga ili miokarda.'
        }
      ]
    },
    {
      id: 'srcana-insuficijencija',
      title: 'Hronična srčana insuficijencija',
      summary: 'Sumnju potvrdi NT-proBNP-om i ehokardiografijom; kod snižene ejekcione frakcije brzo uvedi sva četiri stuba terapije.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Srčana insuficijencija je klinički sindrom (dispneja, zamor, otoci) usled strukturne ili funkcionalne bolesti srca. Deli se prema ejekcionoj frakciji leve komore: **HFrEF ≤40%**, HFmrEF 41–49%, **HFpEF ≥50%**. Kod HFrEF četiri grupe lekova se preporučuju svim pacijentima: uvode se rano, u malim dozama, pa se titriraju.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Dispneja u naporu, ortopneja, paroksizmalna noćna dispneja, smanjena tolerancija napora, zamor.',
            'Otoci potkolenica, porast telesne mase, nokturija, nadutost i gubitak apetita.',
            'Znaci: nabrekle vratne vene, treći srčani ton, pomeren udar vrha, pukoti bazalno, hepatomegalija.',
            'Kod starijih često netipično: konfuzija, malaksalost, noćni kašalj.',
            'Traži uzrok: ishemijska bolest, hipertenzija, valvularna mana, atrijalna fibrilacija, alkohol, kardiotoksični lekovi.'
          ]
        },
        {
          type: 'list',
          title: 'Dijagnostika',
          items: [
            'EKG svima; potpuno normalan nalaz čini srčanu insuficijenciju manje verovatnom.',
            'Natriuretski peptidi: **NT-proBNP ispod 125 pg/ml** čini hroničnu srčanu insuficijenciju malo verovatnom; povišen nalaz traži ehokardiografiju.',
            'NT-proBNP je viši kod starijih, atrijalne fibrilacije i bubrežne insuficijencije, a niži kod gojaznih.',
            'Ehokardiografija: ejekciona frakcija, valvule, dijastolna funkcija. Bez nje nema klasifikacije ni ciljane terapije.',
            'Laboratorija: krvna slika, urea, kreatinin i elektroliti, tireoidna funkcija, glikemija i HbA1c, lipidi, feritin i saturacija transferina.',
            'RTG srca i pluća: zastoj, pleuralni izliv i isključivanje plućnih uzroka dispneje.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak kod HFrEF',
          items: [
            'Uvedi sva četiri stuba (ACE inhibitor ili ARNI, beta-blokator, antagonist mineralokortikoidnih receptora, SGLT2 inhibitor) u malim dozama, što pre.',
            'Diuretik Henleove petlje ako ima zastoja; smanji na najmanju dozu koja održava euvolemiju.',
            'Titriraj postepeno do ciljne ili najviše podnošljive doze; beta-blokator povećavaj najranije na dve nedelje.',
            'Kreatinin i kalijum kontroliši posle svakog uvođenja ili povećanja doze ACE inhibitora, ARNI ili antagoniste mineralokortikoidnih receptora.',
            'Nauči pacijenta: svakodnevno merenje telesne mase i javljanje pri naglom porastu, umeren unos soli, izbegavanje NSAIL.',
            'Proveri i leči manjak gvožđa; preporuči vakcinaciju protiv gripa i pneumokoka.',
            'Posle otpusta iz bolnice zbog srčane insuficijencije: česte kontrole i brza titracija u prvih 6 nedelja.'
          ]
        },
        {
          type: 'drugs',
          title: 'Četiri stuba i diuretici',
          items: [
            { name: 'ramipril (ACE inhibitor)', dose: 'početno 1,25–2,5 mg p.o. 2× dnevno; ciljno 5 mg 2× dnevno', note: 'Sartan kod nepodnošenja. KI: angioedem, trudnoća.' },
            { name: 'sakubitril/valsartan (ARNI)', dose: 'početno 49/51 mg p.o. 2× dnevno (24/26 mg kod nižeg pritiska ili slabije bubrežne funkcije); ciljno 97/103 mg 2× dnevno', note: 'Umesto ACE inhibitora; najmanje **36 h** pauze posle poslednje doze ACE inhibitora. Ne uvoditi ako je kalijum >5,4 mmol/l.' },
            { name: 'metoprolol sukcinat (retard)', dose: 'početno 12,5–25 mg p.o. 1× dnevno; udvostručavati na 2 nedelje do 200 mg 1× dnevno', note: 'Uvoditi kod stabilnog pacijenta bez zastoja. Alternative: bisoprolol, karvedilol, nebivolol.' },
            { name: 'karvedilol', dose: 'početno 3,125 mg p.o. 2× dnevno; povećavati na najmanje 2 nedelje do 25 mg 2× dnevno', note: 'Jače snižava pritisak; uzimati uz hranu.' },
            { name: 'spironolakton', dose: 'početno 25 mg p.o. 1× dnevno; po potrebi do 50 mg 1× dnevno', note: 'Uslov: kalijum ≤5,0 mmol/l. Pri eGFR 30–50 početi sa 25 mg svaki drugi dan. Ginekomastija: zameniti eplerenonom.' },
            { name: 'dapagliflozin ili empagliflozin', dose: '10 mg p.o. 1× dnevno, bez titracije', note: 'I bez dijabetesa. Preporučeni i kod HFmrEF i HFpEF. Genitalne mikoze; pauzirati tokom akutne bolesti sa dehidracijom.' },
            { name: 'furosemid', dose: 'početno 20–40 mg p.o. 1× dnevno; dalje prema zastoju, u 1–2 doze', note: 'Samo simptomatski. Prati kalijum, natrijum i kreatinin.' },
            { name: 'torasemid', dose: 'početno 10–20 mg p.o. 1× dnevno', note: 'Alternativa furosemidu; dozu po potrebi udvostručavati.' }
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Dispneja u miru, ortopneja sa niskom saturacijom, penušav iskašljaj: akutni edem pluća, 194.',
            'Hipotenzija sa hladnom periferijom, oligurijom ili konfuzijom: kardiogeni šok.',
            'Sinkopa, palpitacije sa presinkopom ili novonastala brza aritmija.',
            'Bol u grudima uz pogoršanje dispneje: akutni koronarni sindrom kao okidač.',
            'Izražena hiperkalijemija ili brz porast kreatinina: hitna obrada u bolnici.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Svaka nova sumnja sa povišenim NT-proBNP: ehokardiografija i kardiolog.',
            'Pogoršanje uprkos povećanju diuretika, učestale dekompenzacije, potreba za i.v. diuretikom.',
            'Trajno snižena ejekciona frakcija uprkos optimalnoj terapiji: kardiolog procenjuje potrebu za ICD ili CRT.',
            'Simptomatska hipotenzija, izražena bradikardija ili pogoršanje bubrežne funkcije koje sprečava titraciju.',
            'Manjak gvožđa (feritin <100 µg/l ili saturacija transferina <20%) uz simptome: procena za i.v. nadoknadu.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Blag porast kreatinina i kalijuma posle uvođenja blokatora RAS je očekivan; ne prekidaj terapiju bez razloga, već kontroliši ponovo.',
            'Izbegavaj kod HFrEF: NSAIL, verapamil i diltiazem, pioglitazon.',
            'Asimptomatski nizak pritisak nije razlog za smanjenje lekova koji produžavaju život; prvo smanji diuretik i nepotrebne antihipertenzive.',
            'Beta-blokator se ne ukida naglo; dozu smanji samo kod hipoperfuzije ili izražene bradikardije.',
            'Kod HFmrEF i HFpEF preporučuju se SGLT2 inhibitori; ostalo je diuretik prema zastoju i lečenje komorbiditeta.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2021 – Acute and chronic heart failure', url: 'https://academic.oup.com/eurheartj/article/42/36/3599/6358045' },
        { name: 'ESC 2023 – Focused update (heart failure)', url: 'https://academic.oup.com/eurheartj/article/44/37/3627/7246292' },
        { name: 'EMA – Entresto, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/entresto-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 70 god., gojazna, žali se na zamaranje i otoke oko skočnih zglobova uveče. EKG potpuno uredan, NT-proBNP 90 pg/ml. Šta zaključuješ?',
          options: [
            'Srčana insuficijencija je potvrđena, uvesti furosemid i ramipril',
            'Potrebna je hitna ehokardiografija u roku od 48 sati',
            'Srčana insuficijencija je malo verovatna, tražiti drugi uzrok tegoba',
            'Nalaz je bez značaja, ponoviti NT-proBNP za mesec dana'
          ],
          answer: 2,
          explain: 'Nizak NT-proBNP (ispod 125 pg/ml) uz normalan EKG čini hroničnu srčanu insuficijenciju malo verovatnom. Treba tražiti druge uzroke (venska insuficijencija, amlodipin, anemija, plućna bolest), uz oprez da gojaznost snižava vrednost.'
        },
        {
          q: 'Muškarac, 63 god., HFrEF (EF 30%), NYHA II. Uzima ramipril 5 mg 2× dnevno, beta-blokator u ciljnoj dozi i furosemid 40 mg. Pritisak 118/72 mmHg, kalijum 4,4 mmol/l, eGFR 62. Šta nedostaje u terapiji?',
          options: [
            'Spironolakton 25 mg i SGLT2 inhibitor 10 mg dnevno',
            'Digoksin i amlodipin',
            'Povećanje furosemida na 80 mg dva puta dnevno',
            'Ništa, terapija je optimalna dok je stabilan'
          ],
          answer: 0,
          explain: 'Četiri stuba su blokator RAS (ACE inhibitor ili ARNI), beta-blokator, antagonist mineralokortikoidnih receptora i SGLT2 inhibitor. Sva četiri se preporučuju svim pacijentima sa HFrEF, i onima sa blagim simptomima.'
        },
        {
          q: 'Pacijentu sa HFrEF uveden je ramipril. Posle 10 dana kreatinin je porastao sa 95 na 110 µmol/l, kalijum je 4,9 mmol/l, bez tegoba, pritisak 110/70 mmHg. Postupak?',
          options: [
            'Odmah prekinuti ramipril i uputiti nefrologu',
            'Zameniti ramipril losartanom u punoj dozi',
            'Prepoloviti dozu i dodati NSAIL za bolove',
            'Nastaviti ramipril i ponoviti nalaze'
          ],
          answer: 3,
          explain: 'Blag porast kreatinina posle uvođenja blokatora RAS je očekivan i ne zahteva prekid (porast do 30% se toleriše). Terapija se nastavlja uz kontrolu; proveri da li pacijent uzima NSAIL ili suplemente kalijuma.'
        },
        {
          q: 'Pacijent sa HFrEF na optimalnoj terapiji žali se na bol u kolenu zbog artroze i traži nešto jače. Šta propisuješ?',
          options: [
            'Diklofenak dva puta dnevno uz gastroprotekciju',
            'Paracetamol i lokalni preparat, bez sistemskih NSAIL',
            'Ibuprofen tri puta dnevno najduže 10 dana',
            'Selektivni koksib jer je bezbedniji za srce'
          ],
          answer: 1,
          explain: 'Sistemski NSAIL, uključujući koksibe, zadržavaju so i vodu, pogoršavaju bubrežnu funkciju i česti su okidač dekompenzacije. Kod srčane insuficijencije prednost imaju paracetamol i lokalni preparati.'
        }
      ]
    },
    {
      id: 'atrijalna-fibrilacija',
      title: 'Atrijalna fibrilacija',
      summary: 'Potvrdi EKG-om, proceni rizik od moždanog udara skorom CHA2DS2-VA i uvedi antikoagulans; zatim kontrola frekvencije.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Atrijalna fibrilacija je najčešća trajna aritmija i značajno povećava rizik od ishemijskog moždanog udara. Dijagnoza traži EKG zapis. Tri pitanja pri svakom susretu: da li treba **antikoagulans**, da li je **frekvencija** pod kontrolom i da li su lečeni **komorbiditeti i faktori rizika**.'
        },
        {
          type: 'list',
          title: 'Otkrivanje i početna obrada',
          items: [
            'Palpiraj puls starijim pacijentima; nepravilan puls znači EKG.',
            'Dijagnoza: EKG sa 12 odvoda ili zapis jednog odvoda u trajanju od najmanje 30 s, bez P talasa i sa nepravilnim RR intervalima.',
            'Simptomi: palpitacije, zamor, dispneja, vrtoglavica; deo pacijenata nema tegobe.',
            'Laboratorija: krvna slika, kreatinin sa klirensom (za doziranje antikoagulansa), elektroliti, TSH, jetrene probe, glikemija ili HbA1c.',
            'Ehokardiografija (ejekciona frakcija, valvule, veličina leve pretkomore).',
            'Traži okidače: hipertenzija, tireotoksikoza, alkohol, apneja u snu, infekcija, gojaznost.'
          ]
        },
        {
          type: 'list',
          title: 'CHA2DS2-VA skor (ESC 2024)',
          items: [
            '**C** srčana insuficijencija 1, **H** hipertenzija 1, **A2** starost ≥75 godina 2, **D** dijabetes 1.',
            '**S2** preležan moždani udar, TIA ili arterijska tromboembolija 2, **V** vaskularna bolest 1, **A** starost 65–74 godine 1.',
            'Skor **≥2: antikoagulans se preporučuje**. Skor 1: treba ga razmotriti. Skor 0: bez antikoagulansa.',
            'Ženski pol više nije poen; odluka ne zavisi od pola.',
            'Odluka ne zavisi od tipa fibrilacije ni od toga da li je ritam trenutno sinusni.',
            'Rizik od krvarenja se procenjuje da bi se korigovali promenljivi faktori (pritisak, alkohol, NSAIL), a ne da bi se antikoagulans uskratio.'
          ]
        },
        {
          type: 'drugs',
          title: 'Antikoagulansi',
          items: [
            { name: 'apiksaban', dose: '5 mg p.o. 2× dnevno', note: '2,5 mg 2× dnevno ako postoje **najmanje dva od tri**: starost ≥80 god., telesna masa ≤60 kg, kreatinin ≥133 µmol/l.' },
            { name: 'rivaroksaban', dose: '20 mg p.o. 1× dnevno uz obrok', note: '15 mg 1× dnevno ako je klirens kreatinina 15–49 ml/min.' },
            { name: 'dabigatran', dose: '150 mg p.o. 2× dnevno', note: '110 mg 2× dnevno kod ≥80 god. ili uz verapamil. KI: klirens kreatinina <30 ml/min.' },
            { name: 'edoksaban', dose: '60 mg p.o. 1× dnevno', note: '30 mg ako je klirens 15–50 ml/min, telesna masa ≤60 kg ili uz određene P-gp inhibitore (ciklosporin, dronedaron, eritromicin, ketokonazol).' },
            { name: 'varfarin', dose: 'p.o. 1× dnevno, doza prema INR; cilj INR 2,0–3,0', note: 'Obavezan kod **mehaničke valvule** i umerene do teške mitralne stenoze (ciljni INR kod valvula određuje kardiolog). Redovne kontrole INR.' }
          ]
        },
        {
          type: 'drugs',
          title: 'Kontrola frekvencije',
          items: [
            { name: 'bisoprolol', dose: '2,5–10 mg p.o. 1× dnevno', note: 'Prvi izbor, posebno uz srčanu insuficijenciju ili koronarnu bolest.' },
            { name: 'metoprolol sukcinat (retard)', dose: '25–200 mg p.o. 1× dnevno', note: 'Alternativa bisoprololu.' },
            { name: 'verapamil', dose: '240–320 mg p.o. dnevno, podeljeno u 3–4 doze', note: 'Samo kod očuvane ejekcione frakcije. Ne kombinovati sa beta-blokatorom. Kod starijih početi nižom dozom.' },
            { name: 'diltiazem', dose: '180–360 mg p.o. dnevno, podeljeno u 3–4 doze', note: 'Samo kod očuvane ejekcione frakcije.' },
            { name: 'digoksin', dose: 'p.o. 1× dnevno; doza prema telesnoj masi, uzrastu i bubrežnoj funkciji', note: 'Dodatak ili kod hipotenzije i srčane insuficijencije; male doze kod starijih i bubrežne insuficijencije.' }
          ]
        },
        {
          type: 'steps',
          title: 'Postupak u ambulanti',
          items: [
            'Hemodinamski nestabilan (hipotenzija, edem pluća, ishemija, sinkopa): 194, hitna elektrokardioverzija u bolnici.',
            'Stabilan: EKG, vitalni parametri, CHA2DS2-VA, klirens kreatinina, lista lekova.',
            'Uvedi antikoagulans kada je indikovan; ne čekaj pregled kardiologa.',
            'Kontrola frekvencije: prvi cilj je da pacijent u miru nema tegobe; stroža kontrola ako tegobe traju.',
            'Uputi kardiologu radi odluke o kontroli ritma (kardioverzija, antiaritmik, ablacija), posebno mlađe i simptomatske.',
            'Leči faktore rizika: pritisak, telesna masa, alkohol, apneja u snu, dijabetes.',
            'Kontroliši krvnu sliku i bubrežnu funkciju redovno, češće kod starijih i kod snižene bubrežne funkcije.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Odmah preko SHMP: hemodinamska nestabilnost, vrlo brza frekvencija sa tegobama, široki nepravilni QRS kompleksi.',
            'Novootkrivena fibrilacija: kardiolog i ehokardiografija, uz već započetu antikoagulaciju i kontrolu frekvencije.',
            'Tegobe uprkos kontroli frekvencije, mlađi pacijenti, srčana insuficijencija: procena za kontrolu ritma.',
            'Znaci moždanog udara ili TIA: odmah u jedinicu za moždani udar.',
            'Značajno krvarenje na antikoagulansu ili potreba za prekidom pre intervencije.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Antiagregaciona terapija nije zamena za antikoagulans u prevenciji moždanog udara kod fibrilacije.',
            'Smanjena doza direktnog antikoagulansa samo po kriterijumima iz uputstva za lek; neopravdano smanjenje ostavlja pacijenta nezaštićenim.',
            'Ako fibrilacija traje duže od 24 h, kardioverzija se radi tek posle najmanje 3 nedelje antikoagulacije ili posle transezofagusne ehokardiografije.',
            'Uspešna kardioverzija ili ablacija ne ukida indikaciju za antikoagulans; odlučuje rizik od moždanog udara.',
            'Direktni antikoagulansi se ne daju kod mehaničkih valvula.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2024 – Atrial fibrillation', url: 'https://academic.oup.com/eurheartj/article/45/36/3314/7738779' },
        { name: 'Europace 2024 – ključne novine ESC smernica za AF', url: 'https://academic.oup.com/europace/article/26/12/euae298/7931832' },
        { name: 'EMA – Eliquis, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/eliquis-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 68 god., sa hipertenzijom. Na sistematskom pregledu nepravilan puls, EKG potvrđuje atrijalnu fibrilaciju, frekvencija 88/min, bez tegoba. Šta je ispravno u pogledu antitrombotske terapije?',
          options: [
            'Bez terapije, jer nema tegobe i frekvencija je uredna',
            'Acetilsalicilna kiselina 100 mg dnevno',
            'Uvesti direktni oralni antikoagulans',
            'Sačekati kardiologa i ehokardiografiju pa odlučiti'
          ],
          answer: 2,
          explain: 'CHA2DS2-VA je 2 (starost 65–74 i hipertenzija), pa se antikoagulans preporučuje bez obzira na odsustvo simptoma. Antiagregaciona terapija nije prihvatljiva alternativa, a početak ne treba odlagati.'
        },
        {
          q: 'Žena, 82 god., 58 kg, kreatinin 98 µmol/l, novootkrivena nevalvularna atrijalna fibrilacija. Odlučuješ se za apiksaban. Koja doza?',
          options: [
            '2,5 mg dva puta dnevno',
            '5 mg dva puta dnevno',
            '5 mg jednom dnevno',
            '10 mg dva puta dnevno prvih sedam dana'
          ],
          answer: 0,
          explain: 'Doza apiksabana se smanjuje na 2,5 mg 2× dnevno kada su ispunjena najmanje dva od tri kriterijuma: ≥80 godina, ≤60 kg, kreatinin ≥133 µmol/l. Ovde su ispunjeni starost i telesna masa. Početna doza 10 mg važi za vensku trombozu, ne za fibrilaciju.'
        },
        {
          q: 'Muškarac, 59 god., sa mehaničkom mitralnom valvulom i atrijalnom fibrilacijom pita da li može da pređe na neki od novih lekova da ne bi kontrolisao INR. Odgovor?',
          options: [
            'Može, apiksaban 5 mg dva puta dnevno',
            'Može, rivaroksaban 20 mg jednom dnevno',
            'Može, dabigatran 150 mg dva puta dnevno',
            'Ne može, ostaje na varfarinu uz redovan INR'
          ],
          answer: 3,
          explain: 'Direktni oralni antikoagulansi se ne koriste kod mehaničkih valvula ni kod umerene do teške mitralne stenoze. Jedina opcija je antagonist vitamina K, sa ciljnim INR prema tipu i poziciji valvule.'
        },
        {
          q: 'Teren HMP: muškarac, 71 god., palpitacije i bol u grudima 40 minuta. Puls nepravilan oko 160/min, TA 80/50 mmHg, bled, oznojen, pukoti obostrano. EKG: atrijalna fibrilacija sa uskim QRS. Prioritet?',
          options: [
            'Bisoprolol p.o. i praćenje u ambulanti',
            'Hitna elektrokardioverzija, odnosno hitan transport uz monitoring',
            'Digoksin i upućivanje kardiologu sutradan',
            'Verapamil i.v. polako uz praćenje pritiska'
          ],
          answer: 1,
          explain: 'Hipotenzija, ishemijski bol i zastoj u plućima znače hemodinamsku nestabilnost, a preporučeno lečenje je hitna elektrokardioverzija. Lekovi sa negativnim inotropnim dejstvom mogu dodatno oboriti pritisak.'
        }
      ]
    },
    {
      id: 'stabilna-angina',
      title: 'Hronični koronarni sindrom (stabilna angina)',
      summary: 'Razlikuj stabilnu anginu od akutnog koronarnog sindroma; leči simptome i sprovedi sekundarnu prevenciju.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Stabilna angina je predvidiv bol ili stezanje u grudima pri naporu ili stresu koji prolazi u miru ili na nitroglicerin. Lečenje ima dva cilja: **ublažavanje simptoma** (antianginalni lekovi) i **sprečavanje infarkta i smrti** (antiagregacija, statin, kontrola faktora rizika). Svaka promena obrasca bola tretira se kao akutni koronarni sindrom.'
        },
        {
          type: 'list',
          title: 'Procena bola u grudima',
          items: [
            'Klasična angina ima tri obeležja: retrosternalna nelagodnost, provocirana naporom ili emocijom, prolazi u miru ili na nitroglicerin.',
            'ESC 2024 savetuje detaljan opis simptoma umesto podele na tipičnu i atipičnu anginu, jer ta podela slabo predviđa nalaz.',
            'Ekvivalenti angine: dispneja u naporu, zamor; češći kod žena, starijih i dijabetičara.',
            'Protiv angine: probadajući bol vezan za disanje ili pokret, bol na pritisak, traje sekundama ili satima bez prestanka.',
            'Faktori rizika: pušenje, dijabetes, hipertenzija, dislipidemija, porodična anamneza rane koronarne bolesti.',
            'Pregled: pritisak, puls, šumovi (aortna stenoza), periferni pulsevi, znaci anemije i tireotoksikoze.'
          ]
        },
        {
          type: 'list',
          title: 'Dijagnostika',
          items: [
            'EKG u miru svima; normalan nalaz ne isključuje koronarnu bolest.',
            'Laboratorija: krvna slika, lipidi, glikemija ili HbA1c, kreatinin, TSH po indikaciji.',
            'Ehokardiografija: ejekciona frakcija, segmentni ispadi kontraktilnosti, valvularne mane.',
            'Prvo se procenjuje klinička verovatnoća bolesti, zatim se bira test na sekundarnom nivou.',
            'Testovi: CT koronarografija ili funkcionalno snimanje (stres-ehokardiografija, perfuziona scintigrafija); ergometrija gde ostalo nije dostupno.'
          ]
        },
        {
          type: 'drugs',
          title: 'Antianginalna terapija',
          items: [
            { name: 'gliceriltrinitrat sprej', dose: '1–2 doze (0,4 mg po dozi) pod jezik; ponoviti na 5 min, najviše 3 doze za 15 min', note: 'Ako bol ne prođe posle tri doze: zvati 194. KI uz sildenafil i srodne lekove.' },
            { name: 'bisoprolol', dose: '2,5–10 mg p.o. 1× dnevno', note: 'Prva linija; ciljna frekvencija u miru 55–60/min.' },
            { name: 'amlodipin', dose: '5–10 mg p.o. 1× dnevno', note: 'Prva linija, sam ili uz beta-blokator.' },
            { name: 'verapamil', dose: '80–120 mg p.o. 3× dnevno', note: 'Alternativa beta-blokatoru; **ne kombinovati** sa beta-blokatorom. Kod starijih početi sa 40 mg 3× dnevno.' },
            { name: 'izosorbid mononitrat (retard)', dose: '30–60 mg p.o. 1× dnevno ujutru; po potrebi do 120 mg', note: 'Druga linija. Jednokratno jutarnje doziranje obezbeđuje period bez nitrata i smanjuje toleranciju.' },
            { name: 'ranolazin', dose: 'početno 375 mg p.o. 2× dnevno; posle 2–4 nedelje 500 mg 2×, najviše 750 mg 2× dnevno', note: 'Dodatna terapija. Trimetazidin je druga dodatna opcija (doza prema uputstvu).' }
          ]
        },
        {
          type: 'drugs',
          title: 'Sekundarna prevencija',
          items: [
            { name: 'acetilsalicilna kiselina', dose: '75–100 mg p.o. 1× dnevno, dugotrajno', note: 'Kod dokazane koronarne bolesti (preležan infarkt, revaskularizacija, dokazana opstruktivna bolest).' },
            { name: 'klopidogrel', dose: '75 mg p.o. 1× dnevno', note: 'Alternativa acetilsalicilnoj kiselini; uz nju privremeno posle stenta, prema preporuci kardiologa.' },
            { name: 'atorvastatin', dose: '40–80 mg p.o. 1× dnevno', note: 'Cilj LDL **<1,4 mmol/l**. Ako se ne postigne: dodati ezetimib 10 mg.' },
            { name: 'ramipril', dose: '2,5–10 mg p.o. 1× dnevno', note: 'Kod hipertenzije, dijabetesa ili srčane insuficijencije.' }
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice: sumnja na akutni koronarni sindrom',
          items: [
            'Bol u miru koji traje duže od 20 minuta.',
            'Novonastala teška angina.',
            'Angina koja postaje češća, duža ili se javlja na manji napor.',
            'Bol praćen znojenjem, mučninom, dispnejom, sinkopom ili hipotenzijom.',
            'Postupak: 194, EKG, acetilsalicilna kiselina prema protokolu za akutni koronarni sindrom; ne slati pacijenta samog na laboratoriju.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Normalan EKG u miru ne isključuje ni stabilnu anginu ni akutni koronarni sindrom.',
            'Nauči pacijenta da nitroglicerin uzima sedeći i da zove 194 ako bol ne prođe posle tri doze.',
            'Beta-blokator se ne ukida naglo: postepeno smanjuj dozu.',
            'Uvek pitaj za inhibitore fosfodiesteraze-5 pre propisivanja nitrata.',
            'Prestanak pušenja je deo lečenja, ne samo savet.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2024 – Chronic coronary syndromes', url: 'https://academic.oup.com/eurheartj/article/45/36/3415/7743115' },
        { name: 'ESC 2023 – Acute coronary syndromes', url: 'https://academic.oup.com/eurheartj/article/44/38/3720/7243210' },
        { name: 'ESC/EAS 2019 – Dyslipidaemias', url: 'https://academic.oup.com/eurheartj/article/41/1/111/5556353' }
      ],
      questions: [
        {
          q: 'Muškarac, 60 god., pušač, tri meseca ima stezanje iza grudne kosti pri hodu uzbrdo koje prolazi posle nekoliko minuta odmora. Učestalost se ne menja. EKG u miru uredan. Sledeći korak?',
          options: [
            'Umiriti pacijenta jer uredan EKG isključuje koronarnu bolest',
            'Hitno uputiti u koronarnu jedinicu preko SHMP',
            'Propisati samo dugodelujući nitrat i kontrolisati za šest meseci',
            'Nitroglicerin po potrebi, beta-blokator i statin, pa kardiologu radi testiranja'
          ],
          answer: 3,
          explain: 'Ovo je slika stabilne angine. Počinje se antianginalnom terapijom i korekcijom faktora rizika, a pacijent se upućuje na neinvazivnu dijagnostiku. Uredan EKG u miru ne isključuje bolest, a stabilan obrazac ne zahteva hitan transport.'
        },
        {
          q: 'Žena, 66 god., sa poznatom anginom, poslednjih pet dana ima bolove i u miru, jutros 25 minuta, slabiji efekat nitroglicerina. Sada bez bola, EKG bez promena. Postupak?',
          options: [
            'Zvati 194 i zbrinuti kao akutni koronarni sindrom, transport uz monitoring',
            'Povećati dozu beta-blokatora i zakazati kontrolu za nedelju dana',
            'Dodati dugodelujući nitrat i uputiti kardiologu redovnim putem',
            'Uputiti na ergometriju u toku narednih nekoliko dana'
          ],
          answer: 0,
          explain: 'Bol u miru duži od 20 minuta i angina koja se pogoršava znače nestabilnu anginu ili NSTEMI dok se ne dokaže suprotno. Normalan EKG bez bola to ne isključuje; potrebni su troponin i bolničko praćenje.'
        },
        {
          q: 'Pacijent sa stabilnom anginom uzima bisoprolol 5 mg, ali i dalje ima napade nekoliko puta nedeljno. Puls 58/min, pritisak 136/82 mmHg. Šta dodati?',
          options: [
            'Verapamil 80 mg tri puta dnevno',
            'Povećati bisoprolol na 10 mg',
            'Amlodipin 5 mg jednom dnevno',
            'Diltiazem tri puta dnevno'
          ],
          answer: 2,
          explain: 'Kada beta-blokator nije dovoljan, dodaje se dihidropiridinski blokator kalcijumskih kanala. Verapamil i diltiazem se ne kombinuju sa beta-blokatorom, a puls je već u ciljnom opsegu 55–60/min, pa povećanje bisoprolola nije opravdano.'
        },
        {
          q: 'Muškarac, 62 god., na izosorbid mononitratu zbog angine, traži recept za sildenafil. Šta mu kažeš?',
          options: [
            'Može, uz razmak od četiri sata između lekova',
            'Kombinacija je kontraindikovana zbog rizika od teške hipotenzije',
            'Može, ali samo polovinu uobičajene doze sildenafila',
            'Može, ako uzme nitroglicerin sprej pre odnosa'
          ],
          answer: 1,
          explain: 'Inhibitori fosfodiesteraze-5 pojačavaju vazodilatatorni efekat nitrata i mogu izazvati tešku hipotenziju, pa je kombinacija kontraindikovana. Sa kardiologom razmotri zamenu nitrata drugim antianginalnim lekom.'
        }
      ]
    },
    {
      id: 'dislipidemija',
      title: 'Dislipidemija i kardiovaskularni rizik',
      summary: 'Odredi kategoriju rizika (SCORE2), pa leči do ciljnog LDL: statin u dovoljnoj dozi, zatim ezetimib.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Ne leči se laboratorijski nalaz nego **ukupni kardiovaskularni rizik**: što je rizik veći, ciljni LDL je niži. Za prividno zdrave osobe rizik se procenjuje SCORE2 tablicama za region kojem zemlja pripada. Pacijenti sa dokazanom aterosklerotskom bolešću, dijabetesom, hroničnom bubrežnom bolešću ili naslednim poremećajem lipida svrstavaju se u visok ili veoma visok rizik bez računanja SCORE2.'
        },
        {
          type: 'list',
          title: 'Procena rizika',
          items: [
            '**SCORE2** (40–69 god.) i **SCORE2-OP** (≥70 god.): 10-godišnji rizik od fatalnog i nefatalnog infarkta i moždanog udara; ulaze pol, starost, pušenje, sistolni pritisak i ne-HDL holesterol.',
            'Mlađi od 50 god.: nizak do umeren rizik <2,5%, visok 2,5 do <7,5%, veoma visok ≥7,5%.',
            '50–69 god.: nizak do umeren <5%, visok 5 do <10%, veoma visok ≥10%.',
            '≥70 god.: nizak do umeren <7,5%, visok 7,5 do <15%, veoma visok ≥15%.',
            'Bez računanja u visokom ili veoma visokom riziku: dokazana aterosklerotska bolest, dijabetes, umerena i teška hronična bubrežna bolest, nasledni poremećaji lipida.',
            'Lipidni status ne mora našte. Lp(a) odrediti bar jednom u životu.'
          ]
        },
        {
          type: 'list',
          title: 'Ciljni LDL holesterol',
          items: [
            'Veoma visok rizik: **<1,4 mmol/l** i sniženje ≥50% od početne vrednosti.',
            'Visok rizik: **<1,8 mmol/l** i sniženje ≥50%.',
            'Umeren rizik: <2,6 mmol/l.',
            'Nizak rizik: <3,0 mmol/l.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Isključi sekundarne uzroke: hipotireoza (TSH), dijabetes, nefrotski sindrom, holestaza, alkohol, lekovi.',
            'Odredi kategoriju rizika i ciljni LDL; dogovori cilj sa pacijentom.',
            'Način života svima: ishrana sa manje zasićenih masti, fizička aktivnost, prestanak pušenja, telesna masa.',
            'Uvedi statin u dozi koja može da postigne cilj.',
            'Pre početka odredi ALT i CK; lipide proveri **8 (±4) nedelja** posle početka ili promene doze, a kada se postigne cilj jednom godišnje.',
            'Cilj nije postignut na najvišoj podnošljivoj dozi statina: dodaj ezetimib 10 mg.',
            'I dalje iznad cilja kod veoma visokog rizika: uputi radi procene za dodatnu terapiju.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi',
          items: [
            { name: 'atorvastatin', dose: '10–80 mg p.o. 1× dnevno; kod veoma visokog rizika 40–80 mg', note: 'U bilo koje doba dana, nezavisno od obroka.' },
            { name: 'rosuvastatin', dose: '5–40 mg p.o. 1× dnevno', note: 'Kod teške bubrežne insuficijencije doza je ograničena; proveri uputstvo za lek.' },
            { name: 'simvastatin', dose: '10–40 mg p.o. 1× dnevno, uveče', note: 'Najviša preporučena doza je 40 mg. Brojne interakcije (npr. klaritromicin, verapamil, diltiazem).' },
            { name: 'ezetimib', dose: '10 mg p.o. 1× dnevno', note: 'Uz statin kada cilj nije postignut ili sam kod nepodnošenja statina.' },
            { name: 'fenofibrat', dose: '160 mg p.o. 1× dnevno uz obrok (doza zavisi od oblika)', note: 'Kod izrazito visokih triglicerida. Manja doza kod snižene bubrežne funkcije.' }
          ]
        },
        {
          type: 'list',
          title: 'Bezbednost statina',
          items: [
            'ALT: pre početka i jednom 8–12 nedelja posle početka ili povećanja doze; rutinske kontrole posle toga nisu potrebne.',
            'ALT <3× gornje granice: nastaviti i ponoviti za 4–6 nedelja. ALT ≥3× gornje granice: prekinuti ili smanjiti dozu i ponoviti za 4–6 nedelja.',
            'CK: pre početka (ako je >4× gornje granice, ne započinjati); kasnije samo kod mišićnih tegoba.',
            'CK >10× gornje granice: prekinuti statin i proveriti bubrežnu funkciju.',
            'Mišićne tegobe sa CK <4× gornje granice: pauza 2–4 nedelje, pa ponovni pokušaj manjom dozom ili drugim statinom.',
            'Statini se ne daju u trudnoći i tokom dojenja.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Sumnja na porodičnu hiperholesterolemiju: izrazito povišen LDL uz ranu koronarnu bolest u porodici ili ksantome tetiva.',
            'Trigliceridi iznad 10 mmol/l (rizik od akutnog pankreatitisa) koji ne reaguju na dijetu i terapiju.',
            'Cilj nije postignut na statinu sa ezetimibom kod veoma visokog rizika.',
            'Nepodnošljivost statina posle pokušaja sa različitim statinima i dozama.',
            'Mišićna slabost, taman urin ili CK >10× gornje granice: hitno, zbog rabdomiolize.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Posle infarkta ili moždanog udara pacijent je u veoma visokom riziku: cilj je LDL <1,4 mmol/l bez obzira na početnu vrednost.',
            'Većina mišićnih tegoba na statinu nije uzrokovana lekom; pauza i ponovni pokušaj otkrivaju pravu nepodnošljivost.',
            'Kod izrazito visokog LDL uvek pitaj za porodičnu anamnezu i pregledaj tetive: srodnike treba testirati.',
            'Kod mladih SCORE2 potcenjuje doživotni rizik; izrazito povišen pojedinačni faktor rizika je dovoljan razlog za lečenje.',
            'Statin je dugotrajna terapija: prekid vraća LDL i rizik na početne vrednosti.'
          ]
        }
      ],
      sources: [
        { name: 'ESC/EAS 2019 – Dyslipidaemias', url: 'https://academic.oup.com/eurheartj/article/41/1/111/5556353' },
        { name: 'ESC 2021 – CVD prevention in clinical practice', url: 'https://academic.oup.com/eurheartj/article/42/34/3227/6358713' },
        { name: 'ESC e-Journal of Cardiology Practice – SCORE2 i kategorije rizika', url: 'https://www.escardio.org/communities/councils/cardiology-practice/scientific-documents-and-publications/ejournal/volume-22/new-insights-in-cardiovascular-risk-estimation-and-stratification/' }
      ],
      questions: [
        {
          q: 'Muškarac, 58 god., preležao infarkt miokarda pre godinu dana. Redovno uzima atorvastatin 80 mg. LDL je 2,4 mmol/l. Šta dalje?',
          options: [
            'Ništa, LDL je ispod 2,6 mmol/l',
            'Dodati ezetimib 10 mg dnevno',
            'Zameniti atorvastatin simvastatinom 40 mg',
            'Dodati fenofibrat'
          ],
          answer: 1,
          explain: 'Pacijent je u kategoriji veoma visokog rizika, cilj je LDL <1,4 mmol/l uz sniženje ≥50%. Kada najviša doza statina nije dovoljna, sledeći korak je ezetimib. Fibrat nije lek za snižavanje LDL, a simvastatin je slabiji.'
        },
        {
          q: 'Žena, 45 god., nepušač, pritisak uredan. LDL 5,6 mmol/l na dva merenja, TSH uredan. Majka imala infarkt u 50. godini. SCORE2 pokazuje nizak rizik. Kako postupaš?',
          options: [
            'Samo dijeta i kontrola lipida za godinu dana, jer je SCORE2 nizak',
            'Ezetimib kao monoterapija jer je mlada',
            'Omega-3 masne kiseline i kontrola za šest meseci',
            'Sumnja na porodičnu hiperholesterolemiju: uvesti statin i ispitati srodnike'
          ],
          answer: 3,
          explain: 'Izrazito povišen LDL uz ranu koronarnu bolest u porodici ukazuje na porodičnu hiperholesterolemiju. Pacijenti sa naslednim poremećajem lipida su u visokom riziku bez obzira na SCORE2 i leče se statinom, uz testiranje srodnika.'
        },
        {
          q: 'Pacijent, 64 god., šest nedelja na rosuvastatinu 20 mg, žali se na bolove u butinama. CK je dvostruko iznad gornje granice, kreatinin uredan. Postupak?',
          options: [
            'Pauzirati statin 2–4 nedelje, pa pokušati manjom dozom ili drugim statinom',
            'Trajno ukinuti statine i upisati alergiju u karton',
            'Nastaviti istu dozu i dodati NSAIL za bolove',
            'Hitno uputiti u bolnicu zbog rabdomiolize'
          ],
          answer: 0,
          explain: 'Kod mišićnih tegoba sa CK <4× gornje granice preporučuje se pauza od 2–4 nedelje. Ako tegobe prođu, ponovni pokušaj manjom dozom ili drugim statinom često uspe. Na rabdomiolizu ukazuju CK >10× gornje granice, slabost i taman urin.'
        },
        {
          q: 'Muškarac, 47 god., gojazan, pije alkohol svakodnevno. Trigliceridi 12 mmol/l, glikemija našte 8,9 mmol/l. Šta je prioritet?',
          options: [
            'Samo atorvastatin 80 mg zbog visokog kardiovaskularnog rizika',
            'Ezetimib 10 mg i kontrola za tri meseca',
            'Prekid alkohola, dijeta, regulacija glikemije i fenofibrat zbog rizika od pankreatitisa',
            'Ponoviti nalaz za šest meseci bez intervencije'
          ],
          answer: 2,
          explain: 'Trigliceridi iznad 10 mmol/l nose rizik od akutnog pankreatitisa, pa je prvi cilj njihovo sniženje: apstinencija, restrikcija masti i šećera, lečenje dijabetesa i fibrat. Statin dolazi u obzir zbog kardiovaskularnog rizika.'
        }
      ]
    },
    {
      id: 'dvt',
      title: 'Duboka venska tromboza i površinski tromboflebitis',
      summary: 'Klinička verovatnoća određuje put: D-dimer ili odmah ultrazvuk; antikoagulans traje najmanje 3 meseca.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Duboka venska tromboza se ne može potvrditi ni isključiti samo pregledom. Redosled je: **klinička verovatnoća (Wells skor) → D-dimer ili ultrazvuk vena → antikoagulans**. Najvažnija komplikacija je plućna embolija. Lek izbora za većinu pacijenata je direktni oralni antikoagulans.'
        },
        {
          type: 'list',
          title: 'Klinička slika i Wells skor',
          items: [
            'Jednostrani otok, bol i osetljivost duž dubokih vena, toplota, proširene površinske vene; nalaz je često oskudan.',
            'Po 1 poen: aktivan malignitet; paraliza ili skorašnja imobilizacija noge; ležanje duže od 3 dana ili velika operacija u poslednjih 12 nedelja.',
            'Po 1 poen: osetljivost duž dubokih vena; otok cele noge; obim potkolenice više od 3 cm veći nego na drugoj strani.',
            'Po 1 poen: testast edem samo na zahvaćenoj nozi; kolateralne površinske vene; prethodna duboka venska tromboza.',
            'Minus 2 poena: druga dijagnoza je bar jednako verovatna (celulitis, ruptura Bakerove ciste, hematom, limfedem).',
            '**≥2 poena: tromboza verovatna. ≤1 poen: malo verovatna.**'
          ]
        },
        {
          type: 'steps',
          title: 'Dijagnostički postupak',
          items: [
            'Malo verovatna tromboza: D-dimer visoke osetljivosti. Negativan nalaz isključuje trombozu; pozitivan traži ultrazvuk.',
            'Verovatna tromboza: ultrazvuk vena je prva metoda snimanja i radi se što pre.',
            'Ako se ultrazvuk ne može uraditi istog dana, a tromboza je verovatna: razmotri početak antikoagulansa do snimanja.',
            'Verovatna tromboza sa negativnim prvim ultrazvukom: ponovi ultrazvuk posle nekoliko dana.',
            'Pre terapije: krvna slika, kreatinin sa klirensom, jetrene probe, koagulacioni testovi.',
            'Pitaj za dispneju, bol u grudima, hemoptizije i sinkopu: sumnja na plućnu emboliju znači bolnicu.'
          ]
        },
        {
          type: 'drugs',
          title: 'Antikoagulantna terapija',
          items: [
            { name: 'rivaroksaban', dose: '15 mg p.o. 2× dnevno prve 3 nedelje, zatim 20 mg 1× dnevno, uz obrok', note: 'Bez prethodnog heparina. Oprez pri klirensu kreatinina 15–29 ml/min; ne preporučuje se ispod 15 ml/min.' },
            { name: 'apiksaban', dose: '10 mg p.o. 2× dnevno prvih 7 dana, zatim 5 mg 2× dnevno', note: 'Bez prethodnog heparina.' },
            { name: 'enoksaparin', dose: '1 mg/kg s.c. na 12 h ili 1,5 mg/kg s.c. 1× dnevno', note: 'Trudnoća; uvod u dabigatran, edoksaban ili varfarin. Pri klirensu <30 ml/min: 1 mg/kg 1× dnevno.' },
            { name: 'dabigatran', dose: '150 mg p.o. 2× dnevno, posle najmanje 5 dana parenteralnog antikoagulansa', note: 'KI: klirens kreatinina <30 ml/min. Edoksaban 60 mg 1× dnevno se uvodi na isti način.' },
            { name: 'varfarin', dose: 'p.o. 1× dnevno prema INR; cilj 2,0–3,0', note: 'Uvodi se uz heparin, koji se nastavlja dok INR ne uđe u terapijski opseg.' }
          ]
        },
        {
          type: 'list',
          title: 'Trajanje terapije',
          items: [
            'Najmanje **3 meseca** kod proksimalne duboke venske tromboze.',
            'Prva epizoda izazvana prolaznim faktorom (operacija, trauma, imobilizacija): 3 meseca, pa prekid.',
            'Bez prepoznatljivog faktora rizika ili sa trajnim faktorom: razmotriti produženu terapiju uz procenu rizika od krvarenja.',
            'Aktivni malignitet: terapija se nastavlja dok je bolest aktivna; lek bira onkolog ili hematolog.',
            'Produžena prevencija posle prvih 6 meseci: apiksaban 2,5 mg 2× dnevno ili rivaroksaban 10 mg 1× dnevno.',
            'Uz terapiju: rana mobilizacija i kompresija, bez strogog ležanja.'
          ]
        },
        {
          type: 'list',
          title: 'Površinski tromboflebitis',
          items: [
            'Bolna, crvena, tvrda traka duž površinske vene, najčešće kod varikoziteta.',
            'Ultrazvuk je potreban: određuje dužinu tromba, udaljenost od safenofemoralnog ušća i isključuje prateću duboku trombozu.',
            'Tromb dužine najmanje 5 cm, udaljen više od 3 cm od ušća, bez duboke tromboze: **fondaparinuks 2,5 mg s.c. 1× dnevno, 30–45 dana**.',
            'Tromb do 3 cm od safenofemoralnog ušća: uputiti, leči se kao duboka venska tromboza.',
            'Kratak tromb daleko od ušća: simptomatski (NSAIL, kompresija, kretanje) i kontrola.',
            'Antibiotik nije potreban osim kod jasne infekcije.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti u bolnicu',
          items: [
            'Sumnja na plućnu emboliju: dispneja, pleuralni bol, tahikardija, hemoptizija, sinkopa.',
            'Masivna iliofemoralna tromboza sa cijanozom i jakim bolom: hitno vaskularni hirurg.',
            'Visok rizik od krvarenja, aktivno krvarenje, trombocitopenija, teška bubrežna ili jetrena insuficijencija.',
            'Trudnoća i babinje: niskomolekularni heparin, vode hematolog i ginekolog.',
            'Tromboza na neuobičajenom mestu, mlađi pacijenti bez faktora rizika ili sa pozitivnom porodičnom anamnezom: hematolog.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'D-dimer vredi samo kada je negativan kod pacijenta sa malom verovatnoćom; pri visokoj verovatnoći ne isključuje trombozu.',
            'D-dimer je često povišen i bez tromboze: starost, trudnoća, malignitet, infekcija, skorašnja operacija.',
            'Direktni oralni antikoagulansi se ne daju u trudnoći.',
            'Kombinovani oralni kontraceptivi se ukidaju i zamenjuju metodom bez estrogena.',
            'Pre svake doze antikoagulansa proveri bubrežnu funkciju i lekove koji stupaju u interakcije.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2021 – konsenzus o dijagnozi i lečenju akutne DVT', url: 'https://academic.oup.com/eurjpc/article/29/8/1248/6319853' },
        { name: 'ESC 2019 – Acute pulmonary embolism', url: 'https://academic.oup.com/eurheartj/article/41/4/543/5556136' },
        { name: 'EMA – Arixtra, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/arixtra-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 34 god., tri dana ima bol u levom listu posle dužeg trčanja. Bez otoka, obimi potkolenica jednaki, bez faktora rizika, osetljiv medijalni gastroknemijus. Wells skor je ispod 2. Šta je sledeći korak?',
          options: [
            'Odmah enoksaparin 1 mg/kg i ultrazvuk sutradan',
            'Rivaroksaban 15 mg dva puta dnevno tri nedelje',
            'D-dimer; ako je negativan, tromboza je isključena',
            'Hitna CT angiografija plućnih arterija'
          ],
          answer: 2,
          explain: 'Pri maloj kliničkoj verovatnoći negativan D-dimer visoke osetljivosti isključuje duboku vensku trombozu i izbegava nepotrebnu antikoagulaciju i ultrazvuk. Ako je pozitivan, sledi ultrazvuk vena.'
        },
        {
          q: 'Muškarac, 61 god., pet dana posle operacije kuka: otok cele desne noge, list veći za 4 cm, testast edem. Tromboza je verovatna. Ultrazvuk je moguć tek sutra pre podne. Nema dispneje, nema povećan rizik od krvarenja. Postupak?',
          options: [
            'Započeti antikoagulans i obezbediti ultrazvuk što pre',
            'Sačekati ultrazvuk bez terapije, uz strogo mirovanje',
            'Uraditi D-dimer i ako je negativan odustati od ultrazvuka',
            'Propisati kompresivne čarape i acetilsalicilnu kiselinu'
          ],
          answer: 0,
          explain: 'Kod verovatne tromboze, kada snimanje kasni, antikoagulans se započinje do potvrde jer je rizik od plućne embolije veći od rizika nekoliko doza leka. D-dimer ovde ne pomaže: koristi se samo pri maloj verovatnoći, a posle operacije je gotovo uvek povišen.'
        },
        {
          q: 'Žena, 52 god., imala je prvu duboku vensku trombozu posle artroskopije kolena sa imobilizacijom. Tri meseca uredno uzima rivaroksaban 20 mg, bez tegoba, bez drugih faktora rizika. Šta savetuješ?',
          options: [
            'Nastaviti rivaroksaban 20 mg doživotno',
            'Preći na varfarin još šest meseci',
            'Nastaviti rivaroksaban 10 mg još godinu dana',
            'Prekinuti antikoagulans posle tri meseca'
          ],
          answer: 3,
          explain: 'Kod prve tromboze izazvane prolaznim faktorom rizika terapija traje tri meseca i zatim se prekida. Produžena terapija se razmatra kada nema prepoznatljivog faktora rizika ili je faktor trajan.'
        },
        {
          q: 'Muškarac, 57 god., sa varikozitetima: bolna crvena traka duž unutrašnje strane butine. Ultrazvuk: tromb u veni safeni magni dužine 8 cm, 10 cm od safenofemoralnog ušća, duboke vene prohodne. Terapija?',
          options: [
            'Antibiotik sedam dana',
            'Fondaparinuks 2,5 mg s.c. jednom dnevno, 30–45 dana',
            'Samo lokalni gel i mirovanje u krevetu',
            'Rivaroksaban 20 mg jednom dnevno doživotno'
          ],
          answer: 1,
          explain: 'Površinska venska tromboza donjeg ekstremiteta dužine najmanje 5 cm, udaljena više od 3 cm od ušća i bez duboke tromboze leči se fondaparinuksom 2,5 mg dnevno, 30 do najviše 45 dana. Antibiotik nije potreban.'
        }
      ]
    },
    {
      id: 'periferna-vaskularna',
      title: 'Periferna arterijska bolest i hronična venska insuficijencija',
      summary: 'Arterijska bolest je marker visokog kardiovaskularnog rizika; pre kompresije kod venske bolesti uvek proveri arterijske pulseve.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Periferna arterijska bolest je manifestacija sistemske ateroskleroze, pa je osnova lečenja **agresivna kontrola faktora rizika** uz trening hodanja. Hronična venska insuficijencija je česta i leči se pre svega **kompresijom**. Dve bolesti često postoje zajedno, a lečenja im se delom isključuju.'
        },
        {
          type: 'list',
          title: 'Periferna arterijska bolest: prepoznavanje',
          items: [
            'Klaudikacija: bol u listu, butini ili glutealno pri hodu koji prolazi posle kratkog stajanja; mnogi pacijenti nemaju tipične tegobe.',
            'Pregled: oslabljeni ili odsutni pulsevi stopala, šum nad femoralnom arterijom, hladna koža, bledilo pri elevaciji.',
            '**Pedobrahijalni indeks (ABI) ≤0,90** potvrđuje bolest.',
            'ABI >1,40 znači krute, nekompresibilne arterije (dijabetes, bubrežna bolest): potreban je indeks prst/nadlaktica ili analiza dopler talasa.',
            'Hronična ishemija koja ugrožava ekstremitet: ishemijski bol u miru, rana koja ne zarasta ili gangrena duže od 2 nedelje.',
            'Arterijski ulkus: na prstima, peti ili iznad koštanih izbočina; bolan, oštrih ivica.'
          ]
        },
        {
          type: 'steps',
          title: 'Periferna arterijska bolest: lečenje',
          items: [
            'Prestanak pušenja: ponudi i farmakološku pomoć.',
            'Nadgledan trening hodanja: najmanje 3 puta nedeljno, najmanje 30 minuta, najmanje 12 nedelja; hodati do umerenog ili jakog bola, odmoriti, nastaviti.',
            'Statin svima; cilj LDL <1,4 mmol/l i sniženje veće od 50%.',
            'Antiagregacija kod simptomatske bolesti: klopidogrel ili acetilsalicilna kiselina.',
            'Pritisak: ciljni sistolni 120–129 mmHg ako se podnosi; ACE inhibitor ili sartan su deo terapije. Regulacija dijabetesa.',
            'Nega stopala: pregled pri svakoj poseti, udobna obuća, hitno javljanje zbog rane.',
            'Vaskularnom hirurgu ako klaudikacije i dalje ograničavaju život uprkos lečenju i treningu.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi',
          items: [
            { name: 'klopidogrel', dose: '75 mg p.o. 1× dnevno', note: 'Simptomatska periferna arterijska bolest.' },
            { name: 'acetilsalicilna kiselina', dose: '75–100 mg p.o. 1× dnevno', note: 'Alternativa klopidogrelu (ESC navodi raspon 75–160 mg).' },
            { name: 'rivaroksaban + acetilsalicilna kiselina', dose: 'rivaroksaban 2,5 mg p.o. 2× dnevno uz acetilsalicilnu kiselinu 75–100 mg 1× dnevno', note: 'Kod visokog ishemijskog rizika bez visokog rizika od krvarenja; odlučuje specijalista.' },
            { name: 'atorvastatin', dose: '40–80 mg p.o. 1× dnevno', note: 'Statin je indikovan kod svih pacijenata sa perifernom arterijskom bolešću.' }
          ]
        },
        {
          type: 'list',
          title: 'Hronična venska insuficijencija',
          items: [
            'Tegobe: težina, umor i otok nogu uveče, noćni grčevi, svrab; bolje pri podizanju nogu i hodu.',
            'Znaci po težini: teleangiektazije, varikoziteti, edem, hiperpigmentacija i ekcem, lipodermatoskleroza, ulkus.',
            'Venski ulkus: iznad medijalnog maleolusa, plitak, nepravilnih ivica, vlažan, manje bolan od arterijskog.',
            'Osnova lečenja: **kompresivna terapija** (čarape ili zavoji, stepen kompresije prema težini bolesti), svakodnevno.',
            'Mere: hodanje i vežbe za list, podizanje nogu, smanjenje telesne mase, nega kože.',
            'Dupleks vena i vaskularni hirurg kod simptomatskih varikoziteta, promena na koži ili ulkusa.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Akutna ishemija ekstremiteta: nagli **bol, bledilo, odsustvo pulsa, hladnoća, parestezije, paraliza**. Hitno vaskularni tim; heparin i analgezija prema protokolu.',
            'Bol u stopalu u miru, rana koja ne zarasta ili gangrena kod arterijske bolesti: brzo uputiti vaskularnom hirurgu.',
            'Infekcija stopala kod dijabetičara sa arterijskom bolešću: hitno.',
            'Jednostrani nagli otok noge: isključi duboku vensku trombozu.',
            'Ulkus koji ne zarasta uprkos pravilnoj kompresiji ili ima neuobičajen izgled: uputiti radi dalje obrade.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Pre kompresivne terapije palpiraj pulseve i, ako nisu sigurno prisutni, izmeri ABI: jaka kompresija može ugroziti nogu sa teškom arterijskom bolešću.',
            'Beta-blokatori nisu kontraindikovani kod periferne arterijske bolesti kada postoji indikacija.',
            'Otoci na amlodipinu nisu venska insuficijencija i ne leče se diuretikom.',
            'Diuretik nije terapija venskih otoka.',
            'Pacijent sa perifernom arterijskom bolešću ima isti ciljni LDL kao pacijent posle infarkta.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2024 – Peripheral arterial and aortic diseases', url: 'https://academic.oup.com/eurheartj/article/45/36/3538/7738955' },
        { name: 'EMA – Xarelto, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/xarelto-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 64 god., pušač, ima bol u desnom listu posle 200 m hoda koji prolazi posle kratkog stajanja. Pulsevi stopala oslabljeni, ABI 0,70, bez rana. Šta je osnova lečenja?',
          options: [
            'Prestanak pušenja, trening hodanja, statin i antiagregacija',
            'Hitno upućivanje vaskularnom hirurgu radi revaskularizacije',
            'Kompresivne čarape i venoaktivni lek',
            'Mirovanje i kontrola za šest meseci'
          ],
          answer: 0,
          explain: 'Stabilna klaudikacija sa ABI ≤0,90 leči se kontrolom faktora rizika, nadgledanim hodanjem i lekovima koji smanjuju kardiovaskularne događaje. Revaskularizacija se razmatra ako tegobe ostanu onesposobljavajuće. Mirovanje pogoršava funkciju.'
        },
        {
          q: 'Žena, 74 god., sa atrijalnom fibrilacijom bez antikoagulansa, pre dva sata dobila je nagli jak bol u levoj nozi. Noga je bleda, hladna, bez pulseva ispod prepone, sa utrnulošću prstiju. Postupak?',
          options: [
            'Analgetik i zakazati dupleks arterija za sutra',
            'D-dimer i ultrazvuk vena',
            'Hitan transport vaskularnom timu, ne čekati dodatnu dijagnostiku',
            'Elevacija noge, topli oblozi i kontrola za 24 sata'
          ],
          answer: 2,
          explain: 'Ovo je akutna ishemija ekstremiteta, verovatno embolijska. Senzorni ispad znači ugrožen ekstremitet, a vreme do revaskularizacije odlučuje o ishodu. Potrebni su hitna procena vaskularnog tima, heparin i analgezija.'
        },
        {
          q: 'Žena, 69 god., ima plitak vlažan ulkus iznad medijalnog maleolusa sa smeđom pigmentacijom okolne kože i varikozitetima. Pulsevi stopala se jasno palpiraju, ABI 1,0. Šta je ključ lečenja?',
          options: [
            'Dugotrajna sistemska antibiotska terapija',
            'Furosemid zbog otoka',
            'Mirovanje u krevetu bez zavoja dok rana ne zaraste',
            'Kompresivna terapija uz previjanje i upućivanje na dupleks vena'
          ],
          answer: 3,
          explain: 'Lokalizacija, izgled i promene na koži ukazuju na venski ulkus. Uz očuvanu arterijsku cirkulaciju kompresija je najvažnija mera. Antibiotik samo kod kliničke infekcije, a diuretik ne leči venski otok.'
        },
        {
          q: 'Muškarac, 70 god., sa dugogodišnjim dijabetesom, ima klaudikacije i ranu na palcu. Pulsevi stopala se ne palpiraju, a izmereni ABI je 1,5. Kako tumačiš nalaz?',
          options: [
            'ABI je normalan, arterijska bolest je isključena',
            'Arterije su nekompresibilne, nalaz je nepouzdan i treba druga metoda',
            'Nalaz ukazuje na vensku insuficijenciju',
            'ABI potvrđuje blagu arterijsku bolest koja ne zahteva upućivanje'
          ],
          answer: 1,
          explain: 'ABI >1,40 znači krute arterije, što je često kod dijabetesa, pa ne isključuje ishemiju. Potreban je indeks prst/nadlaktica ili analiza dopler talasa, a rana uz odsutne pulseve traži brzo upućivanje vaskularnom hirurgu.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'kardio-slucaj-1',
      title: 'Žena, 71 god., zamaranje i otoci nogu',
      intro: 'Ambulanta doma zdravlja. Žena, 71 god., sa hipertenzijom i dijabetesom tip 2, žali se da se poslednja dva meseca zamara pri penjanju na prvi sprat i da spava na dva jastuka. Uzima amlodipin 10 mg i metformin. TA 148/88 mmHg, puls 92/min ritmičan, SpO2 95%, obostrani testasti otoci potkolenica, bazalno pukoti.',
      steps: [
        {
          q: 'EKG: sinusni ritam, blok leve grane. Šta je sledeći korak u obradi?',
          options: [
            'Uvesti furosemid i ne raditi dalju dijagnostiku ako otoci splasnu',
            'NT-proBNP i osnovna laboratorija, pa ehokardiografija ako je povišen',
            'Smanjiti amlodipin jer su otoci sigurno neželjeno dejstvo leka',
            'D-dimer i ultrazvuk vena obe noge'
          ],
          answer: 1,
          explain: 'Ortopneja, pukoti i patološki EKG čine srčanu insuficijenciju verovatnom. NT-proBNP i ehokardiografija su osnova dijagnoze. Amlodipin može doprineti otocima, ali ne objašnjava ortopneju i pukote.'
        },
        {
          q: 'NT-proBNP je 2100 pg/ml, eGFR 61, kalijum 4,3 mmol/l, hemoglobin i TSH uredni. Ehokardiografija kod kardiologa: EF 32%, bez značajne valvularne mane. Dok čekaš kontrolu, šta uvodiš uz furosemid 40 mg?',
          options: [
            'Samo furosemid dok kardiolog ne propiše ostalo',
            'Verapamil zbog pulsa 92/min',
            'Digoksin kao prvi lek',
            'ACE inhibitor u maloj dozi i SGLT2 inhibitor, zatim beta-blokator i spironolakton'
          ],
          answer: 3,
          explain: 'Kod HFrEF četiri stuba se uvode rano i u malim dozama. Beta-blokator se dodaje kada je zastoj pod kontrolom. Verapamil se izbegava kod snižene ejekcione frakcije, a digoksin nije prva linija u sinusnom ritmu.'
        },
        {
          q: 'Posle šest nedelja uzima ACE inhibitor, beta-blokator u maloj dozi, spironolakton 25 mg, dapagliflozin 10 mg i furosemid 40 mg. Bez otoka, TA 104/64 mmHg, bez vrtoglavice, puls 74/min. Kalijum 4,9 mmol/l, kreatinin blago viši nego na početku. Šta dalje?',
          options: [
            'Smanjiti furosemid i nastaviti titraciju beta-blokatora i ACE inhibitora',
            'Ukinuti spironolakton zbog kalijuma 4,9 mmol/l',
            'Ukinuti ACE inhibitor zbog porasta kreatinina',
            'Vratiti amlodipin jer je puls niži'
          ],
          answer: 0,
          explain: 'Pacijentkinja je euvolemična i bez simptoma hipotenzije, pa se diuretik smanjuje na najmanju potrebnu dozu, što ostavlja prostor za titraciju lekova koji produžavaju život. Blag porast kreatinina i kalijum ispod 5,0 mmol/l nisu razlog za prekid.'
        },
        {
          q: 'Tri meseca kasnije dolazi zbog bolova u kolenima. Komšinica joj je dala diklofenak, koji uzima deset dana. Dobila je 3 kg, otoci su se vratili, dispneja je izraženija, SpO2 94%, TA 126/78 mmHg. Postupak?',
          options: [
            'Dodati još jedan NSAIL jer bolovi nisu prošli',
            'Odmah hospitalizovati preko SHMP',
            'Ukinuti diklofenak, privremeno povećati furosemid i uskoro kontrolisati telesnu masu, kalijum i kreatinin',
            'Ukinuti beta-blokator dok se stanje ne popravi'
          ],
          answer: 2,
          explain: 'NSAIL su čest okidač dekompenzacije jer zadržavaju so i vodu i smanjuju efekat diuretika. Kod stabilne pacijentkinje dovoljni su ukidanje uzroka, privremeno povećanje diuretika i rana kontrola. Beta-blokator se ne ukida bez znakova hipoperfuzije.'
        }
      ]
    },
    {
      id: 'kardio-slucaj-2',
      title: 'Muškarac, 66 god., nepravilan puls na kontroli',
      intro: 'Ambulanta. Muškarac, 66 god., dolazi na redovnu kontrolu hipertenzije i dijabetesa tip 2. Uzima ramipril 10 mg i metformin. Kaže da se poslednjih mesec dana brže zamara, bez bola u grudima i gubitka svesti. TA 142/86 mmHg, puls nepravilan oko 118/min, SpO2 97%, bez znakova zastoja.',
      steps: [
        {
          q: 'Šta radiš prvo?',
          options: [
            'Zakazuješ 24-časovni holter EKG pa odlučuješ',
            'Uvodiš bisoprolol bez EKG-a jer je puls ubrzan',
            'EKG sa 12 odvoda odmah',
            'Upućuješ na ehokardiografiju pa EKG kod kardiologa'
          ],
          answer: 2,
          explain: 'Nepravilan puls zahteva EKG odmah: dijagnoza atrijalne fibrilacije ne može se postaviti bez zapisa, a EKG je dostupan u ambulanti i određuje sve dalje korake.'
        },
        {
          q: 'EKG: atrijalna fibrilacija, frekvencija komora 115–125/min, uski QRS, bez znakova ishemije. Pacijent je hemodinamski stabilan. Kako procenjuješ potrebu za antikoagulansom?',
          options: [
            'CHA2DS2-VA je 3 (hipertenzija, dijabetes, starost 65–74): antikoagulans je indikovan',
            'CHA2DS2-VA je 1: dovoljna je acetilsalicilna kiselina',
            'Antikoagulans tek ako fibrilacija traje duže od 48 sati',
            'Antikoagulans tek posle ehokardiografije i pregleda kardiologa'
          ],
          answer: 0,
          explain: 'Hipertenzija, dijabetes i starost 65–74 godine nose po jedan poen. Pri skoru ≥2 antikoagulans se preporučuje bez obzira na trajanje i tip fibrilacije i ne odlaže se zbog čekanja specijaliste.'
        },
        {
          q: 'Kreatinin 92 µmol/l, telesna masa 88 kg, krvna slika i jetrene probe uredne, TSH uredan. Šta propisuješ?',
          options: [
            'Apiksaban 2,5 mg dva puta dnevno i amjodaron',
            'Varfarin sa ciljnim INR 2–3 i digoksin',
            'Acetilsalicilnu kiselinu 100 mg i verapamil',
            'Apiksaban 5 mg dva puta dnevno i bisoprolol 2,5–5 mg dnevno'
          ],
          answer: 3,
          explain: 'Direktni oralni antikoagulans u punoj dozi je prvi izbor jer nema kriterijuma za smanjenje doze. Za kontrolu frekvencije prvi izbor je beta-blokator. Varfarin je rezervisan za mehaničke valvule i mitralnu stenozu.'
        },
        {
          q: 'Posle dve nedelje puls je 84/min u miru, pacijent se bolje oseća. Pita da li može da prekine lek za razređivanje krvi ako mu kardiolog vrati normalan ritam. Šta odgovaraš?',
          options: [
            'Da, čim se uspostavi sinusni ritam lek se ukida',
            'Ne, potreba za antikoagulansom zavisi od rizika od moždanog udara, a ne od trenutnog ritma',
            'Da, ali tek šest meseci posle kardioverzije',
            'Može da ga zameni acetilsalicilnom kiselinom posle kardioverzije'
          ],
          answer: 1,
          explain: 'Fibrilacija se često vraća bez simptoma, a rizik od moždanog udara ostaje određen faktorima rizika. Zato se antikoagulans kod CHA2DS2-VA ≥2 nastavlja i posle uspešne kardioverzije ili ablacije.'
        }
      ]
    },
    {
      id: 'kardio-slucaj-3',
      title: 'Žena, 38 god., otok i bol u levoj potkolenici',
      intro: 'Ambulanta. Žena, 38 god., pre četiri dana se vratila sa puta autobusom koji je trajao 14 sati. Od prekjuče ima bol i otok leve potkolenice. Uzima kombinovane oralne kontraceptive, pušač. TA 122/76 mmHg, puls 82/min, SpO2 98%, afebrilna, bez dispneje i bola u grudima.',
      steps: [
        {
          q: 'Pregled: leva potkolenica veća za 3,5 cm od desne, testast edem samo na levoj nozi, bolna osetljivost duž dubokih vena lista. Koža bez crvenila. Kako procenjuješ verovatnoću?',
          options: [
            'Mala verovatnoća: verovatno istegnuće mišića, analgetik i kontrola',
            'Mala verovatnoća: dovoljan je D-dimer za isključivanje',
            'Ne može se proceniti bez D-dimera',
            'Wells ≥2: tromboza je verovatna, potreban je ultrazvuk vena'
          ],
          answer: 3,
          explain: 'Razlika u obimu veća od 3 cm, testast edem i osetljivost duž dubokih vena daju tri poena. Kod verovatne tromboze ide se direktno na ultrazvuk; D-dimer se koristi pri maloj verovatnoći.'
        },
        {
          q: 'Ultrazvuk je moguć sutra u 10 časova. Krvna slika, kreatinin i jetrene probe su uredni, test na trudnoću negativan, nema povećan rizik od krvarenja. Šta radiš danas?',
          options: [
            'Ništa do ultrazvuka, uz savet da miruje',
            'Započinješ antikoagulans i šalješ na ultrazvuk sutra',
            'Propisuješ acetilsalicilnu kiselinu i elastični zavoj',
            'Propisuješ antibiotik zbog mogućeg celulitisa'
          ],
          answer: 1,
          explain: 'Kada je tromboza verovatna, a snimanje kasni, antikoagulans u terapijskoj dozi se započinje do potvrde. Acetilsalicilna kiselina nije terapija venske tromboze.'
        },
        {
          q: 'Ultrazvuk potvrđuje trombozu poplitealne vene. Pacijentkinja želi da se leči kod kuće. Koji režim je ispravan?',
          options: [
            'Rivaroksaban 20 mg jednom dnevno od prvog dana',
            'Apiksaban 2,5 mg dva puta dnevno',
            'Rivaroksaban 15 mg dva puta dnevno tri nedelje, zatim 20 mg jednom dnevno',
            'Dabigatran 150 mg dva puta dnevno bez prethodnog heparina'
          ],
          answer: 2,
          explain: 'Rivaroksaban i apiksaban imaju početnu višu dozu (rivaroksaban 15 mg 2× dnevno 3 nedelje; apiksaban 10 mg 2× dnevno 7 dana). Dabigatran i edoksaban traže najmanje 5 dana parenteralnog antikoagulansa pre početka.'
        },
        {
          q: 'Šta savetuješ u vezi sa kontracepcijom i trajanjem terapije?',
          options: [
            'Ukinuti kombinovane kontraceptive i preći na metodu bez estrogena; antikoagulans najmanje 3 meseca',
            'Nastaviti iste kontraceptive, antikoagulans doživotno',
            'Ukinuti kontraceptive odmah, antikoagulans 4 nedelje',
            'Nastaviti kontraceptive uz dodatak acetilsalicilne kiseline posle prekida antikoagulansa'
          ],
          answer: 0,
          explain: 'Estrogen i dugo putovanje su prolazni faktori rizika, pa terapija traje 3 meseca uz uklanjanje faktora. Dok traje antikoagulans potrebna je pouzdana kontracepcija bez estrogena, jer se direktni oralni antikoagulansi ne daju u trudnoći.'
        }
      ]
    }
  ]
});
