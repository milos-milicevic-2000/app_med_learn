MED.register({
  id: 'hitna-kardio',
  title: 'Hitna stanja: srce i disanje',
  icon: '🚑',
  color: '#E5484D',
  topics: [
    {
      id: 'srcani-zastoj',
      title: 'Srčani zastoj i KPR odraslih',
      summary: 'Rane kompresije i rana defibrilacija spasavaju život; sve ostalo je dopuna kvalitetnoj KPR.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Srčani zastoj prepoznaješ po tome što osoba **ne reaguje i ne diše ili ne diše normalno** (agonalni udasi se računaju kao zastoj). Ishod zavisi od neprekidnih kvalitetnih kompresija i što ranije defibrilacije kod šokabilnog ritma. Lekovi i napredni disajni put dolaze posle ta dva postupka.'
        },
        {
          type: 'steps',
          title: 'Osnovne mere (BLS)',
          items: [
            'Proveri bezbednost, proveri da li osoba reaguje i da li diše normalno. Spori, hroptavi (agonalni) udasi nisu normalno disanje.',
            'Ne reaguje i ne diše normalno: pozovi pomoć (194), zatraži defibrilator i odmah počni kompresije.',
            'Koren dlana na donju polovinu grudne kosti (sredina grudnog koša); dubina **najmanje 5 cm, ne više od 6 cm**, frekvencija **100–120/min**, uz potpuno otpuštanje.',
            'Odnos **30 kompresija : 2 udaha**, svaki udah oko 1 sekunde; prekid kompresija radi dva udaha ne duži od 10 sekundi.',
            'Čim stigne defibrilator, uključi ga i zalepi elektrode dok se kompresije nastavljaju; prati uputstva AED-a.',
            'Što manje prekida u kompresijama; ne naslanjaj se na grudni koš između kompresija.'
          ]
        },
        {
          type: 'steps',
          title: 'Napredne mere (ALS)',
          items: [
            'KPR 30:2, priključi monitor/defibrilator i proceni ritam; ritam se ponovo procenjuje posle svaka 2 minuta KPR. Prekid kompresija za šok kraći od 5 sekundi.',
            '**Šokabilni ritam (VF / VT bez pulsa):** jedan šok, bifazni najmanje 150 J, pa odmah nastavi kompresije 2 minuta.',
            'Sledeći šokovi: razumno je povećati energiju ako defibrilator to omogućava. Ako ne znaš preporučenu energiju aparata, koristi najveću.',
            '**Posle 3. šoka:** adrenalin 1 mg i.v. i amiodaron 300 mg i.v. Adrenalin zatim na 3–5 minuta; amiodaron još 150 mg posle 5. šoka.',
            '**Nešokabilni ritam (asistolija / PEA):** KPR, adrenalin 1 mg i.v. što pre, zatim na 3–5 minuta.',
            'Venski put: prvo i.v.; ako ne uspe iz dva pokušaja, razmotri intraosealni put.',
            'Kiseonik u najvećoj mogućoj koncentraciji. Intubaciju izvodi samo uvežban tim, uz kapnografiju; sa obezbeđenim disajnim putem ventilacija 10/min i kompresije bez prekida.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi tokom KPR',
          items: [
            { name: 'adrenalin', dose: '1 mg i.v. (ili i.o.), ponavljati na 3–5 min', note: 'Šokabilni ritam: prva doza posle 3. šoka. Nešokabilni ritam: što pre.' },
            { name: 'amiodaron', dose: '300 mg i.v. posle 3. šoka, zatim 150 mg i.v. posle 5. šoka', note: 'Samo kod VF / VT bez pulsa, bez obzira da li je ritam uporan ili se vraća.' },
            { name: 'lidokain', dose: '100 mg i.v. posle 3. šoka, zatim 50 mg i.v. posle 5. šoka', note: 'Alternativa ako amiodaron nije dostupan.' },
            { name: 'kiseonik', dose: 'Najveća moguća koncentracija tokom KPR', note: 'Posle povratka cirkulacije titrirati na SpO2 94–98%.' },
            { name: 'tečnosti', dose: 'Izotonični fiziološki ili balansirani kristaloid i.v.', note: 'Tokom KPR samo ako je uzrok zastoja hipovolemija.' }
          ]
        },
        {
          type: 'list',
          title: 'Reverzibilni uzroci: 4H i 4T',
          items: [
            '**Hipoksija.**',
            '**Hipovolemija.**',
            '**Hipo/hiperkalijemija** i drugi metabolički poremećaji.',
            '**Hipotermija / hipertermija.**',
            '**Tromboza** — koronarna ili plućna. Kod sumnje na plućnu emboliju razmotri trombolizu i produženu KPR (60–90 min).',
            '**Tenzioni pneumotoraks.**',
            '**Tamponada srca** i **toksini**.'
          ]
        },
        {
          type: 'steps',
          title: 'Odmah posle povratka spontane cirkulacije',
          items: [
            'Ponovi ABCDE procenu.',
            'Titriraj kiseonik do SpO2 94–98%, uz normalnu ventilaciju (normalan PaCO2).',
            'Održavaj sistolni pritisak iznad 100 mmHg.',
            'Uradi 12-kanalni EKG; traži i leči uzrok (koronarografija / PCI kada je indikovana).',
            'Transport u bolnicu uz stalni monitoring.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Agonalno disanje nije disanje — počni KPR.',
            'Posle šoka se odmah nastavljaju kompresije 2 minuta; ritam se ne proverava odmah.',
            'Asistolija i PEA se ne defibriliraju; adrenalin se kod njih daje što pre.',
            'Do tri uzastopna šoka dolaze u obzir samo kod VF / VT bez pulsa nastale pred timom, na monitoru, sa defibrilatorom odmah pri ruci.',
            'Kalcijum, natrijum-bikarbonat i kortikosteroidi se ne daju rutinski tokom srčanog zastoja.'
          ]
        }
      ],
      sources: [
        { name: 'ERC 2025 – Adult Advanced Life Support', url: 'https://www.erc.edu/media/vedoa2ga/gl2025-05-als-e.pdf' },
        { name: 'ERC 2025 – Adult Basic Life Support', url: 'https://www.erc.edu/media/wrhj5sye/gl2025-04-bls-e.pdf' }
      ],
      questions: [
        {
          q: 'Na ulici zatičeš muškarca od oko 60 godina koji ne reaguje i ima retke, hroptave udahe. Šta radiš?',
          options: [
            'Postavljaš ga u bočni položaj i čekaš ekipu',
            'Čekaš da disanje samo postane pravilno',
            'Zoveš pomoć, tražiš defibrilator i počinješ kompresije',
            'Daješ pet inicijalnih udaha, pa ponovo procenjuješ'
          ],
          answer: 2,
          explain: 'Agonalni udasi kod osobe koja ne reaguje znače srčani zastoj. Bočni položaj je za osobu koja normalno diše, a pet inicijalnih udaha je deo pedijatrijskog algoritma.'
        },
        {
          q: 'Tokom KPR na monitoru je ventrikularna fibrilacija. Upravo je isporučen treći šok i nastavljene su kompresije. Koje lekove sada daješ?',
          options: [
            'Adrenalin 1 mg i amiodaron 300 mg i.v.',
            'Samo adrenalin 1 mg, amiodaron posle 5. šoka',
            'Atropin 3 mg i adrenalin 1 mg i.v.',
            'Amiodaron 150 mg i adrenalin 0,5 mg i.v.'
          ],
          answer: 0,
          explain: 'Kod šokabilnog ritma posle trećeg šoka daju se adrenalin 1 mg i amiodaron 300 mg i.v. Amiodaron 150 mg je druga doza, posle petog šoka. Atropin nije deo algoritma srčanog zastoja.'
        },
        {
          q: 'Pacijent u srčanom zastoju, na monitoru organizovana električna aktivnost 40/min, puls se ne pipa. Venski put je obezbeđen. Šta je ispravno?',
          options: [
            'Defibrilacija 200 J, pa nastavak KPR',
            'Atropin 0,5 mg i.v. i transkutani pejsing',
            'Amiodaron 300 mg i.v. i nastavak KPR',
            'KPR, adrenalin 1 mg i.v. i traženje uzroka 4H/4T'
          ],
          answer: 3,
          explain: 'Ovo je električna aktivnost bez pulsa (PEA), nešokabilni ritam: KPR, adrenalin 1 mg što pre i na 3–5 minuta, uz aktivno traženje reverzibilnih uzroka. Šok i amiodaron nemaju mesto.'
        },
        {
          q: 'Posle 12 minuta KPR pacijent dobija puls i počinje spontano da diše. SpO2 je 100% na visokom protoku kiseonika. Šta je sledeći korak?',
          options: [
            'Nastaviti maksimalni protok kiseonika do bolnice',
            'Smanjiti kiseonik do SpO2 94–98% i uraditi 12-kanalni EKG',
            'Dati profilaktički amiodaron 300 mg i.v.',
            'Dati još jedan adrenalin 1 mg radi stabilizacije'
          ],
          answer: 1,
          explain: 'Odmah posle povratka cirkulacije cilj je SpO2 94–98%, sistolni pritisak iznad 100 mmHg i 12-kanalni EKG radi otkrivanja uzroka. Bolus adrenalina od 1 mg je doza za srčani zastoj.'
        }
      ]
    },
    {
      id: 'aks',
      title: 'Akutni koronarni sindrom',
      summary: 'EKG u prvih 10 minuta deli pacijente na STEMI (hitna reperfuzija) i AKS bez ST elevacije.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Kod svake sumnje na akutni koronarni sindrom snimi i protumači **12-kanalni EKG u roku od 10 minuta** od prvog kontakta. Perzistentna ST elevacija znači radnu dijagnozu STEMI i hitnu reperfuziju. Bez ST elevacije na terenu ne možeš razlikovati NSTEMI od nestabilne angine (nema troponina) — oba se zbrinjavaju kao AKS i transportuju u bolnicu.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Bol, pritisak, stezanje, težina ili pečenje u grudima; kod AKS tipično anginozni bol u miru duži od 20 minuta.',
            'Ekvivalenti bola: dispneja, bol u epigastrijumu, bol u levoj ili desnoj ruci, vratu ili vilici.',
            'Prateće tegobe mogu biti preznojavanje, mučnina, povraćanje.',
            'Popuštanje bola posle nitroglicerina ne sme se koristiti kao dijagnostički test.'
          ]
        },
        {
          type: 'list',
          title: 'EKG',
          items: [
            '**STEMI:** nova ST elevacija u J-tački u najmanje 2 susedna odvoda: 1 mm i više; u V2–V3 prag je 2,5 mm (muškarci mlađi od 40 god.), 2 mm (muškarci od 40 god.) ili 1,5 mm (žene).',
            'Blok leve ili desne grane ili pejsmejker ritam uz jaku kliničku sumnju na ishemiju koja traje: zbrinjavaj kao STEMI.',
            'Sumnja na infarkt donjeg zida: snimi desne odvode **V3R i V4R** (zahvaćenost desne komore).',
            'Tegobe traju, a standardni EKG nije ubedljiv: snimi zadnje odvode **V7–V9** (zadnji infarkt).',
            'Ako je prvi EKG nejasan a tegobe traju ili se vraćaju, ponovi EKG.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak na terenu / u ambulanti',
          items: [
            '12-kanalni EKG u roku od 10 minuta; što pre stalni EKG monitoring i defibrilator uz pacijenta.',
            'Izmeri pritisak, puls i SpO2; obezbedi venski put.',
            '**Acetilsalicilna kiselina 150–300 mg** p.o. što pre (ako nema kontraindikacija).',
            'Kiseonik **samo kod hipoksemije (SpO2 ispod 90%)**; kod SpO2 iznad 90% rutinski se ne preporučuje.',
            'Nitroglicerin sublingvalno može ublažiti bol (pazi na kontraindikacije); za jak bol opioid i.v.',
            'STEMI: odmah najavi pacijenta i transportuj ga direktno u PCI centar, zaobilazeći bolnice bez sale za kateterizaciju.',
            'U ambulanti doma zdravlja: pozovi SHMP (194) i ne ostavljaj pacijenta bez nadzora.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'acetilsalicilna kiselina', dose: '150–300 mg p.o. jednokratno (udarna doza)', note: 'Ako pacijent ne može da guta: 75–250 mg i.v. gde je dostupno.' },
            { name: 'nitroglicerin', dose: 'Sublingvalno, pojedinačna doza prema sažetku karakteristika leka', note: 'Ne davati kod hipotenzije, izražene bradikardije ili tahikardije, infarkta desne komore, teške aortne stenoze i inhibitora fosfodiesteraze 5 u prethodnih 24–48 h.' },
            { name: 'morfin', dose: 'I.v., titrirano; ESC navodi kao primer 5–10 mg', note: 'Samo za jak bol. Može pojačati mučninu i povraćanje i usporiti resorpciju oralnih antiagregacionih lekova.' },
            { name: 'tikagrelor', dose: '180 mg p.o. jednokratno (udarna doza)', note: 'Kod STEMI pre primarne PCI davanje pre sale se može razmotriti — prati protokol STEMI mreže. Alternativa: prasugrel 60 mg p.o.' },
            { name: 'klopidogrel', dose: '300–600 mg p.o. jednokratno (udarna doza)', note: 'Kada tikagrelor i prasugrel nisu dostupni ili su kontraindikovani. Uz fibrinolizu: 300 mg (75 mg kod starijih od 75 godina).' },
            { name: 'kiseonik', dose: 'Titrirano, samo ako je SpO2 ispod 90%', note: 'Rutinska primena kod SpO2 iznad 90% se ne preporučuje.' }
          ]
        },
        {
          type: 'refer',
          title: 'Transport i reperfuzija',
          items: [
            'STEMI sa tegobama do 12 h: **primarna PCI** ako se može izvesti u roku od 120 minuta od postavljanja dijagnoze.',
            'Ako PCI nije dostižna za 120 minuta: fibrinoliza (cilj do 10 minuta od dijagnoze), zatim odmah transfer u PCI centar.',
            'AKS bez ST elevacije sa veoma visokim rizikom (šok, bol koji ne prestaje, akutna srčana insuficijencija, životno ugrožavajuće aritmije): hitna koronarografija.',
            'Ostali pacijenti sa sumnjom na AKS: transport u bolnicu uz monitoring; troponin i dalja procena su bolnički.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Donji infarkt: pre nitroglicerina proveri pritisak i snimi desne odvode — nitrati se ne daju kod hipotenzije i infarkta desne komore.',
            'Pitaj za sildenafil i srodne lekove pre nitroglicerina.',
            'Kod AKS bez ST elevacije drugi antiagregacioni lek se ne daje rutinski pre nego što je poznata koronarna anatomija, ako se planira rana invazivna strategija.',
            'Monitoring i defibrilator ne napuštaju pacijenta: maligne aritmije su moguće u svakom trenutku.',
            'Ako bol i ST elevacija potpuno prođu posle nitroglicerina, snimi novi EKG — moguć je koronarni spazam.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2023 – Acute Coronary Syndromes', url: 'https://academic.oup.com/eurheartj/article/44/38/3720/7243210' }
      ],
      questions: [
        {
          q: 'Muškarac, 54 god., bol iza grudne kosti 40 minuta, preznojen. TA 140/85, puls 88/min, SpO2 97% na sobnom vazduhu. EKG: ST elevacija V2–V5. Šta od navedenog NE treba uraditi?',
          options: [
            'Dati acetilsalicilnu kiselinu 300 mg p.o.',
            'Dati kiseonik 10 l/min preko maske',
            'Najaviti pacijenta PCI centru',
            'Postaviti venski put i priključiti monitor'
          ],
          answer: 1,
          explain: 'Kiseonik se preporučuje samo kod hipoksemije (SpO2 ispod 90%); kod saturacije iznad 90% rutinska primena se ne preporučuje. Ostalo su obavezni postupci kod STEMI.'
        },
        {
          q: 'Žena, 67 god., od jutros otežano diše i ima nelagodnost u epigastrijumu koja se širi u vilicu. Zatražila je samo lek za želudac. Šta je najvažniji prvi postupak u ambulanti?',
          options: [
            'Snimiti 12-kanalni EKG u roku od 10 minuta',
            'Dati inhibitor protonske pumpe i zakazati kontrolu',
            'Uputiti na ultrazvuk abdomena narednih dana',
            'Dati antiemetik i pratiti tegobe do sutra'
          ],
          answer: 0,
          explain: 'Dispneja, bol u epigastrijumu i bol u vilici su ekvivalenti bola u grudima. EKG je brz i dostupan i mora se uraditi i protumačiti u roku od 10 minuta pre nego što se tegobe pripišu želucu.'
        },
        {
          q: 'Muškarac, 61 god., bol u grudima 1 h. EKG: ST elevacija u II, III, aVF i u V4R. TA 85/55, puls 58/min. Šta je ispravno?',
          options: [
            'Nitroglicerin sublingvalno radi smanjenja bola',
            'Nitroglicerin, pa ponoviti EKG za 30 minuta',
            'Sačekati da pritisak poraste, pa dati nitroglicerin',
            'Bez nitrata; acetilsalicilna kiselina i hitno u PCI centar'
          ],
          answer: 3,
          explain: 'Nitrati se ne daju kod hipotenzije, izražene bradikardije i infarkta desne komore. ST elevacija u V3R–V4R ukazuje na zahvaćenost desne komore; prioritet je reperfuzija.'
        },
        {
          q: 'Ekipa SHMP dijagnostikuje STEMI kod pacijenta čije tegobe traju 2 sata. Najbliži PCI centar je na 50 minuta vožnje. Koja je strategija?',
          options: [
            'Transport u najbližu opštu bolnicu radi troponina',
            'Fibrinoliza na terenu, pa kućno lečenje',
            'Direktan transport u PCI centar uz najavu',
            'Opservacija u ambulanti i ponovni EKG za 1 sat'
          ],
          answer: 2,
          explain: 'Primarna PCI je metoda izbora kada je izvodljiva u roku od 120 minuta od dijagnoze. Zaustavljanje u bolnici bez sale za kateterizaciju i čekanje troponina samo odlažu reperfuziju.'
        }
      ]
    },
    {
      id: 'edem-pluca',
      title: 'Akutni edem pluća i akutna srčana insuficijencija',
      summary: 'Kiseonik ili neinvazivna ventilacija, diuretik i.v. i vazodilatator ako pritisak dozvoljava; uvek traži uzrok.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Akutni kardiogeni edem pluća je nagla plućna kongestija sa teškom dispnejom i hipoksemijom. Osnova lečenja su **kiseonik ili neinvazivna ventilacija, diuretik Henleove petlje i.v. i vazodilatator** kada je sistolni pritisak iznad 110 mmHg. Uvek traži uzrok koji je doveo do pogoršanja.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Teška dispneja i ortopneja, pacijent sedi i bori se za vazduh; tahipneja, niska SpO2.',
            'Vlažni pukoti obostrano, nekad i vizing.',
            'Hladna, vlažna koža, tahikardija; pritisak je često povišen.',
            'Znaci hronične insuficijencije: otoci nogu, nabrekle vene vrata.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Hipotenzija sa hladnom periferijom i konfuzijom — kardiogeni šok.',
            'Respiratorni distres: frekvencija disanja preko 25/min i SpO2 ispod 90%.',
            'Pomućena svest i iscrpljenost — preti respiratorni zastoj.',
            'ST elevacija ili nova maligna aritmija na EKG-u.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak na terenu',
          items: [
            'Pacijent u sedećem položaju; monitoring SpO2, pritiska i EKG-a.',
            'Kiseonik ako je SpO2 ispod 90%.',
            'Respiratorni distres (frekvencija preko 25/min, SpO2 ispod 90%): što pre **neinvazivna ventilacija pozitivnim pritiskom** ako je dostupna; uz nju redovno kontroliši pritisak.',
            'Venski put i 12-kanalni EKG.',
            'Furosemid i.v.',
            'Sistolni pritisak iznad 110 mmHg: vazodilatator (nitroglicerin), uz praćenje pritiska.',
            'Traži uzrok po akronimu CHAMPIT i transportuj u bolnicu uz lekara.'
          ]
        },
        {
          type: 'list',
          title: 'Uzroci koje treba odmah tražiti (CHAMPIT)',
          items: [
            '**C** — akutni koronarni sindrom.',
            '**H** — hipertenzivna emergencija.',
            '**A** — aritmija.',
            '**M** — mehanički uzrok (npr. akutna valvularna lezija).',
            '**P** — plućna embolija.',
            '**I** — infekcija. **T** — tamponada.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'furosemid', dose: '20–40 mg i.v. ako pacijent do sada nije uzimao diuretik; kod hronične terapije i.v. doza 1–2 puta veća od dnevne oralne', note: 'Diuretici i.v. su osnova lečenja kongestije; efekat proceni diurezom i kliničkim poboljšanjem.' },
            { name: 'nitroglicerin', dose: 'Samo ako je sistolni pritisak iznad 110 mmHg; počinje se malom dozom i titrira uz praćenje pritiska', note: 'Na terenu sublingvalni oblik prema sažetku karakteristika leka, u bolnici i.v. infuzija. Izbegni hipotenziju.' },
            { name: 'kiseonik', dose: 'Titrirano ako je SpO2 ispod 90%', note: 'Kod respiratornog distresa prednost ima neinvazivna ventilacija.' },
            { name: 'opioidi (morfin)', dose: 'Ne rutinski', note: 'Samo kod odabranih pacijenata sa jakim, upornim bolom ili anksioznošću.' }
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Svaki akutni edem pluća ide u bolnicu, i kada se stanje popravi na terapiju.',
            'Vazodilatator dolazi u obzir samo iznad 110 mmHg sistolnog pritiska; hipotenzivan pacijent sa edemom pluća je u kardiogenom šoku.',
            'Edem pluća uz STEMI zahteva hitnu reperfuziju u PCI centru.',
            'Kod pacijenta na hroničnoj terapiji diuretikom početna i.v. doza se računa prema njegovoj dnevnoj oralnoj dozi.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2021 – Acute and Chronic Heart Failure', url: 'https://academic.oup.com/eurheartj/article-pdf/42/36/3599/40316213/ehab368.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 74 god., probudila se sa teškim gušenjem. Sedi, preznojena, pukoti do vrhova obostrano. TA 195/110, puls 112/min, SpO2 84%. Šta daješ uz kiseonik?',
          options: [
            'Infuziju 500 ml fiziološkog rastvora',
            'Morfin i.v. kao prvi i osnovni lek',
            'Furosemid i.v. i nitroglicerin',
            'Samo kiseonik, lekovi tek u bolnici'
          ],
          answer: 2,
          explain: 'Kod edema pluća sa sistolnim pritiskom iznad 110 mmHg daju se diuretik i.v. i vazodilatator. Opioidi se ne preporučuju rutinski, a infuzija pogoršava kongestiju.'
        },
        {
          q: 'Muškarac, 69 god., poznata srčana insuficijencija, teška dispneja, pukoti obostrano. TA 80/50, hladna i marmorizovana koža, konfuzan. Šta je ispravno?',
          options: [
            'Nitroglicerin sublingvalno, dve doze odmah',
            'Furosemid i.v. i lečenje kod kuće',
            'Morfin i.v. radi smirenja pacijenta',
            'Kiseonik, bez vazodilatatora, hitan transport u intenzivnu negu'
          ],
          answer: 3,
          explain: 'Hipotenzija sa znacima hipoperfuzije znači kardiogeni šok. Vazodilatatori dolaze u obzir samo kada je sistolni pritisak iznad 110 mmHg; pacijentu treba bolnička potpora cirkulacije.'
        },
        {
          q: 'Pacijent svakodnevno uzima furosemid 40 mg p.o. Dolazi sa akutnom dekompenzacijom srčane insuficijencije, TA 135/80. Koju početnu i.v. dozu furosemida biraš?',
          options: [
            '40–80 mg i.v.',
            '10 mg i.v.',
            '250 mg i.v. u bolusu',
            'Ne daje se i.v., samo udvostručiti oralnu dozu'
          ],
          answer: 0,
          explain: 'Kod pacijenata na hroničnoj diuretskoj terapiji početna i.v. doza je 1–2 puta veća od dnevne oralne. Kod onih koji nisu uzimali diuretik počinje se sa 20–40 mg i.v.'
        }
      ]
    },
    {
      id: 'hipertenzivna-kriza',
      title: 'Hipertenzivna kriza',
      summary: 'Ne leči se broj nego oštećenje organa: emergencija ide u bolnicu, urgencija se rešava oralno.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: '**Hipertenzivna emergencija** je pritisak 180/110 mmHg i više uz **akutno oštećenje organa**, često sa simptomima — zahteva hitno, pažljivo sniženje, najčešće i.v. terapijom u bolnici. **Hipertenzivna urgencija** je težak porast pritiska bez znakova akutnog oštećenja organa — leči se oralno i obično ne zahteva hospitalizaciju. Naglo i nekontrolisano obaranje pritiska se ne preporučuje.'
        },
        {
          type: 'flags',
          title: 'Znaci akutnog oštećenja organa (emergencija)',
          items: [
            'Glavobolja, poremećaj vida, vrtoglavica, neurološki ispad.',
            'Encefalopatija: somnolencija, letargija, konvulzije, kortikalno slepilo. Žarišni ispad je redak i treba da pobudi sumnju na moždani udar.',
            'Bol u grudima (ishemija miokarda, disekcija aorte).',
            'Dispneja (akutna srčana insuficijencija, edem pluća).',
            'Maligna hipertenzija: retinopatija (krvarenja, eksudati, edem papile), akutno pogoršanje bubrežne funkcije.',
            'Trudnica: preeklampsija ili eklampsija.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Ponovi merenje posle mirovanja; proceni simptome i znake oštećenja organa (neurološki status, vid, srce, pluća).',
            'Traži okidač: bol, uznemirenost, propuštena terapija, simpatikomimetici (npr. kokain, metamfetamin), trudnoća.',
            'Uradi EKG.',
            '**Bez oštećenja organa (urgencija):** oralna terapija prema uobičajenom algoritmu, opservacija najmanje 2 sata, rana ambulantna kontrola.',
            '**Sa oštećenjem organa (emergencija):** venski put, monitoring i hitan transport u bolnicu; i.v. lek kratkog dejstva koji se može titrirati.',
            'Brzina i cilj sniženja zavise od zahvaćenog organa (vidi sledeću sekciju).'
          ]
        },
        {
          type: 'list',
          title: 'Koliko brzo i dokle spuštati',
          items: [
            '**Maligna hipertenzija:** tokom nekoliko sati, srednji arterijski pritisak za 20–25%.',
            '**Hipertenzivna encefalopatija:** odmah, srednji arterijski pritisak za 20–25%.',
            '**Akutni koronarni događaj i kardiogeni edem pluća:** odmah, sistolni ispod 140 mmHg.',
            '**Akutna bolest aorte (disekcija):** odmah, sistolni ispod 120 mmHg i frekvencija ispod 60/min.',
            '**Ishemijski moždani udar:** bez aktivnog obaranja osim ako je pritisak izrazito visok (preko 220/120 mmHg); pre trombolize ispod 185/110 mmHg.',
            '**Moždano krvarenje:** sniženje u bolnici (cilj sistolnog 140–160 mmHg); izbegni pad sistolnog veći od 70 mmHg.',
            '**Eklampsija / teška preeklampsija:** odmah, sistolni ispod 160 i dijastolni ispod 105 mmHg; magnezijum-sulfat.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'oralni antihipertenziv (npr. kaptopril)', dose: 'P.o., mala početna doza', note: 'Za urgenciju. Pacijenti mogu biti veoma osetljivi, zato se počinje malom dozom. ACE inhibitori se ne daju u trudnoći.' },
            { name: 'urapidil', dose: '12,5–25 mg i.v. bolus; nastavak 5–40 mg/h u kontinuiranoj infuziji', note: 'Za emergenciju, uz monitoring pritiska.' },
            { name: 'nitroglicerin', dose: '5–200 mikrograma/min i.v. infuzija, povećavati za 5 mikrograma/min na 5 min', note: 'Prvi izbor kod akutnog koronarnog događaja i kardiogenog edema pluća.' },
            { name: 'metoprolol', dose: '2,5–5 mg i.v. tokom 2 min; može se ponoviti na 5 min do najviše 15 mg', note: 'Kada je potrebna i kontrola frekvencije (npr. akutna bolest aorte).' },
            { name: 'furosemid', dose: '20–40 mg i.v.', note: 'Samo uz edem pluća, kao dodatak vazodilatatoru; nije rutinski antihipertenziv.' }
          ]
        },
        {
          type: 'list',
          title: 'Šta NE raditi',
          items: [
            'Ne davati kratkodelujući nifedipin — izaziva nagle padove pritiska.',
            'Ne obarati pritisak naglo i nekontrolisano: može dovesti do novih komplikacija.',
            'Ne lečiti urgenciju i.v. lekovima — dovoljna je oralna terapija i kontrola.',
            'Ne spuštati pritisak kod sumnje na ishemijski moždani udar pre bolnice, osim iznad navedenih pragova.',
            'Ne lečiti broj ako je pritisak skočio zbog bola ili uznemirenosti: pritisak se normalizuje kada se uzrok otkloni.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Urgenciju od emergencije ne razlikuje visina pritiska nego akutno oštećenje organa.',
            'Disekcija aorte je izuzetak od postepenog sniženja: pritisak i frekvencija se obaraju odmah.',
            'Pacijent sa visokim pritiskom i žarišnim neurološkim ispadom ide u jedinicu za moždani udar, ne na obaranje pritiska.',
            'Posle hipertenzivne emergencije pacijenta treba ispitati na sekundarnu hipertenziju.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2024 – Elevated Blood Pressure and Hypertension', url: 'https://academic.oup.com/eurheartj/article-pdf/45/38/3912/59633218/ehae178.pdf' },
        { name: 'ESC Council on Hypertension 2019 – Management of Hypertensive Emergencies', url: 'https://academic.oup.com/ehjcvp/article/5/1/37/5079054' }
      ],
      questions: [
        {
          q: 'Muškarac, 58 god., dolazi na kontrolu, TA 200/115 u dva merenja. Nema tegoba, juče mu je ponestalo lekova. Neurološki uredan, EKG bez akutnih promena. Šta radiš?',
          options: [
            'Urapidil 25 mg i.v. i hitan transport u bolnicu',
            'Oralna terapija, opservacija najmanje 2 sata i rana kontrola',
            'Kratkodelujući nifedipin, pa otpust kući',
            'Nitroglicerin i.v. u infuziji do normalizacije pritiska'
          ],
          answer: 1,
          explain: 'Bez akutnog oštećenja organa ovo je urgencija: oralna terapija, opservacija i rana ambulantna kontrola, obično bez hospitalizacije. Kratkodelujući nifedipin se ne koristi zbog naglih padova pritiska.'
        },
        {
          q: 'Žena, 66 god., nagla slabost desne ruke i noge i otežan govor pre 50 minuta. TA 190/100. Šta je ispravno na terenu?',
          options: [
            'Bez antihipertenziva, hitan transport u jedinicu za moždani udar',
            'Kaptopril p.o. i ponovno merenje za sat vremena',
            'Urapidil i.v. do pritiska 130/80, pa transport',
            'Nitroglicerin sublingvalno i opservacija u ambulanti'
          ],
          answer: 0,
          explain: 'Kod akutnog ishemijskog moždanog udara pritisak se aktivno ne obara osim ako je izrazito visok (preko 220/120 mmHg), odnosno do ispod 185/110 mmHg pre trombolize, jer perfuzija mozga zavisi od sistemskog pritiska.'
        },
        {
          q: 'Muškarac, 62 god., iznenadan cepajući bol u grudima koji se širi među lopatice. TA 190/105, puls 104/min. EKG bez ST elevacije. Sumnjaš na disekciju aorte. Koji je cilj terapije?',
          options: [
            'Sniženje srednjeg pritiska za 25% tokom 24 sata',
            'Pritisak se ne obara dok se ne potvrdi dijagnoza',
            'Sistolni ispod 160 mmHg, frekvencija nije bitna',
            'Sistolni ispod 120 mmHg i frekvencija ispod 60/min, odmah'
          ],
          answer: 3,
          explain: 'Akutna bolest aorte traži trenutno sniženje sistolnog pritiska ispod 120 mmHg i frekvencije ispod 60/min, beta-blokatorom uz vazodilatator.'
        },
        {
          q: 'Koji postupak kod jako povišenog pritiska treba izbegavati?',
          options: [
            'Ponovno merenje posle mirovanja',
            'EKG i neurološki pregled',
            'Kratkodelujući nifedipin',
            'Oralnu terapiju u maloj početnoj dozi kod urgencije'
          ],
          answer: 2,
          explain: 'Kratkodelujući nifedipin ne treba koristiti jer izaziva nagle padove pritiska; naglo i nekontrolisano sniženje može dovesti do komplikacija.'
        }
      ]
    },
    {
      id: 'plucna-embolija',
      title: 'Plućna embolija',
      summary: 'Nagla dispneja uz faktor rizika — misli na emboliju, proceni verovatnoću i hemodinamiku.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Plućna embolija nema specifičnu sliku, pa je ključ **klinička sumnja** i procena verovatnoće (Wells). Na terenu se dijagnoza ne može potvrditi; zadatak je prepoznati, proceniti da li je pacijent **hemodinamski nestabilan** (visok rizik) i transportovati ga u bolnicu koja ima CT plućnu angiografiju.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Dispneja, bol u grudima, presinkopa ili sinkopa, hemoptizije.',
            'Hemodinamska nestabilnost je retka, ali označava visok rizik.',
            'Znaci duboke venske tromboze: otok i bol noge.',
            'Faktori rizika: operacija, imobilizacija, prelom, malignitet, prethodna tromboza, estrogeni, trudnoća i puerperijum.',
            'Embolija može biti i bez simptoma ili slučajan nalaz.'
          ]
        },
        {
          type: 'list',
          title: 'Wells skor (dvostepeni)',
          items: [
            'Klinički znaci i simptomi duboke venske tromboze (najmanje otok noge i bol pri palpaciji dubokih vena) — 3 poena.',
            'Alternativna dijagnoza manje verovatna od plućne embolije — 3 poena.',
            'Srčana frekvencija preko 100/min — 1,5 poen.',
            'Imobilizacija duža od 3 dana ili operacija u prethodne 4 nedelje — 1,5 poen.',
            'Prethodna duboka venska tromboza ili plućna embolija — 1,5 poen.',
            'Hemoptizije — 1 poen. Malignitet (lečenje u toku, lečen u poslednjih 6 meseci ili palijativno) — 1 poen.',
            '**Više od 4 poena: embolija verovatna** (CT angiografija). **4 i manje: embolija malo verovatna** (D-dimer).'
          ]
        },
        {
          type: 'flags',
          title: 'Znaci visokog rizika',
          items: [
            'Srčani zastoj.',
            'Opstruktivni šok: sistolni pritisak ispod 90 mmHg (ili potreba za vazopresorima) uz znake hipoperfuzije organa.',
            'Perzistentna hipotenzija: sistolni ispod 90 mmHg ili pad za 40 mmHg i više, duže od 15 minuta.'
          ]
        },
        {
          type: 'steps',
          title: 'Zbrinjavanje do bolnice',
          items: [
            'ABCDE, monitoring (EKG, pritisak, SpO2), venski put.',
            'Kiseonik ako je SpO2 ispod 90%.',
            'EKG: kod blažih oblika jedina promena može biti sinusna tahikardija; kod težih inverzija T u V1–V4, QR u V1, S1Q3T3, blok desne grane.',
            'Hipotenzija: samo skroman bolus tečnosti (do 500 ml tokom 15–30 min); veći volumen može pogoršati funkciju desne komore.',
            'Kod visoke ili srednje kliničke verovatnoće antikoagulacija se započinje bez odlaganja, dok se čeka dijagnostika — prema lokalnom protokolu.',
            'Hitan transport uz najavu; pacijent visokog rizika ide u ustanovu koja može da sprovede reperfuziju (trombolizu).'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'kiseonik', dose: 'Titrirano ako je SpO2 ispod 90%' },
            { name: 'nefrakcionisani heparin', dose: 'I.v., sa bolusom prilagođenim telesnoj masi', note: 'Kod sumnje na emboliju visokog rizika, bez odlaganja.' },
            { name: 'niskomolekularni heparin', dose: 'S.c., terapijska doza prema telesnoj masi (prema sažetku karakteristika leka)', note: 'Ima prednost nad nefrakcionisanim heparinom kod pacijenta bez hemodinamske nestabilnosti.' },
            { name: 'kristaloidi', dose: 'Do 500 ml i.v. tokom 15–30 min', note: 'Samo kod hipotenzije; ne ponavljati velike zapremine.' },
            { name: 'sistemska tromboliza', dose: 'U bolnici, prema protokolu', note: 'Za emboliju visokog rizika. Kod zastoja zbog embolije KPR se posle trombolize nastavlja najmanje 60–90 min.' }
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Normalan EKG ne isključuje emboliju; S1Q3T3 se viđa uglavnom u težim oblicima.',
            'D-dimer ima smisla kod male verovatnoće; kod verovatne embolije ide se na CT angiografiju.',
            'Ne daji velike količine tečnosti hipotenzivnom pacijentu sa sumnjom na emboliju.',
            'Kod pacijenta bez hemodinamske nestabilnosti prednost ima niskomolekularni heparin, kod nestabilnog nefrakcionisani.'
          ]
        }
      ],
      sources: [
        { name: 'ESC 2019 – Acute Pulmonary Embolism', url: 'https://academic.oup.com/eurheartj/article-pdf/41/4/543/31898124/ehz405.pdf' },
        { name: 'NICE NG158 – Venous thromboembolic diseases (Wells skor)', url: 'https://www.nice.org.uk/guidance/ng158/chapter/recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 46 god., 10 dana posle operacije kuka, nagla dispneja. Puls 118/min, TA 125/80, leva potkolenica otečena i bolna, pluća čista, druga dijagnoza nije verovatnija. Wells skor?',
          options: [
            'Manji od 2 — embolija malo verovatna',
            'Tačno 4 — embolija malo verovatna',
            'Skor se ne može računati bez D-dimera',
            'Veći od 4 — embolija verovatna'
          ],
          answer: 3,
          explain: 'Znaci tromboze (3), alternativna dijagnoza manje verovatna (3), tahikardija (1,5) i nedavna operacija (1,5) daju 9 poena. Kod skora većeg od 4 embolija je verovatna i ide se na CT angiografiju.'
        },
        {
          q: 'Muškarac, 63 god., karcinom pluća, nagla dispneja i sinkopa. TA 80/50 već 20 minuta, puls 130/min, hladna periferija. Šta je najprimerenije na terenu?',
          options: [
            'Infuzija 2000 ml kristaloida što brže',
            'Kiseonik, najviše 500 ml kristaloida, hitan transport uz najavu',
            'Opservacija u ambulanti dok pritisak ne poraste',
            'D-dimer sutradan u domu zdravlja'
          ],
          answer: 1,
          explain: 'Perzistentna hipotenzija znači emboliju visokog rizika. Dozvoljen je samo skroman bolus tečnosti (do 500 ml) jer veći volumen može pogoršati funkciju desne komore; potrebna je hitna reperfuzija u bolnici.'
        },
        {
          q: 'Mlada žena na oralnoj kontracepciji, bol u grudima i dispneja. EKG: sinusna tahikardija 110/min, bez drugih promena. Šta zaključuješ?',
          options: [
            'Embolija nije isključena — uputiti hitno u bolnicu',
            'EKG bez S1Q3T3 isključuje plućnu emboliju',
            'Verovatno anksioznost — dati sedativ i otpustiti',
            'Dovoljan je analgetik i kontrola za nedelju dana'
          ],
          answer: 0,
          explain: 'Kod blažih oblika plućne embolije sinusna tahikardija može biti jedina EKG promena; S1Q3T3 i blok desne grane viđaju se u težim oblicima. Uz faktor rizika potrebna je bolnička dijagnostika.'
        },
        {
          q: 'Kod hemodinamski nestabilnog pacijenta sa sumnjom na plućnu emboliju visokog rizika, kako se započinje antikoagulacija?',
          options: [
            'Acetilsalicilnom kiselinom p.o.',
            'Oralnim antikoagulansom posle CT nalaza',
            'Nefrakcionisanim heparinom i.v., bez odlaganja',
            'Antikoagulacija se ne daje dok se ne uradi D-dimer'
          ],
          answer: 2,
          explain: 'Kod sumnje na emboliju visokog rizika preporučuje se nefrakcionisani heparin i.v. sa bolusom prilagođenim telesnoj masi, bez odlaganja. Kod stabilnog pacijenta prednost ima niskomolekularni heparin.'
        }
      ]
    },
    {
      id: 'aritmije-hitno',
      title: 'Tahiaritmije i bradikardije na terenu',
      summary: 'Prvo pitanje nije koji je ritam, nego da li je pacijent nestabilan — nestabilna tahikardija dobija struju.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Kod svake aritmije prvo proceni da li postoje životno ugrožavajući znaci. **Nestabilna tahikardija** se leči sinhronizovanom kardioverzijom, **nestabilna bradikardija** atropinom, a zatim pejsingom. Kod stabilnog pacijenta ima vremena za 12-kanalni EKG: uski ili široki QRS, pravilan ili nepravilan ritam.'
        },
        {
          type: 'flags',
          title: 'Životno ugrožavajući znaci',
          items: [
            '**Šok:** hipotenzija (npr. sistolni ispod 90 mmHg) sa znacima loše perfuzije organa.',
            '**Sinkopa.**',
            '**Ishemija miokarda:** bol u grudima ili ishemijske promene na 12-kanalnom EKG-u.',
            '**Teška srčana insuficijencija:** edem pluća, povišen jugularni venski pritisak.',
            'Aritmija neposredno posle povratka spontane cirkulacije.'
          ]
        },
        {
          type: 'steps',
          title: 'Tahikardija sa pulsom',
          items: [
            'ABCDE; monitoring SpO2, EKG, pritisak; kiseonik ako je SpO2 ispod 94%; venski put; 12-kanalni EKG; traži i leči reverzibilne uzroke.',
            '**Nestabilan:** sinhronizovani šok, do 3 pokušaja, uz sedaciju ili anesteziju ako je pri svesti. Bez uspeha: amiodaron 300 mg i.v. tokom 10–20 min, pa ponoviti šok.',
            '**Uski QRS, pravilan:** vagalni manevar; bez efekta adenozin; bez efekta verapamil ili beta-blokator; bez efekta sinhronizovani šok.',
            '**Uski QRS, nepravilan (verovatno AF):** kontrola frekvencije — beta-blokator, verapamil, diltiazem ili digoksin; kod ejekcione frakcije ispod 40% beta-blokator ili digoksin.',
            '**Široki QRS, pravilan** (VT ili nejasan mehanizam): amiodaron 300 mg i.v. tokom 10–60 min ili sinhronizovani šok. Kod poznate strukturne bolesti srca prednost ima kardioverzija.',
            '**Polimorfna VT sa produženim QT:** magnezijum 8 mmol (2 g magnezijum-sulfata) i.v. tokom 10 min; izbegni amiodaron.',
            '**Široki QRS, nepravilan:** moguća AF sa preekscitacijom — kardioverzija; ne davati amiodaron ni adenozin.'
          ]
        },
        {
          type: 'steps',
          title: 'Bradikardija',
          items: [
            'ABCDE; monitoring; kiseonik ako je SpO2 ispod 94%; venski put; 12-kanalni EKG; traži reverzibilne uzroke (npr. infarkt miokarda, poremećaj elektrolita).',
            'Sa životno ugrožavajućim znacima: **atropin 0,5 mg i.v.**, po potrebi ponavljati na 3–5 min do ukupno 3 mg.',
            'Bez zadovoljavajućeg odgovora: adrenalin 2–10 mikrograma/min i.v. ili izoprenalin 5 mikrograma/min i.v. i/ili transkutani pejsing; traži pomoć radi transvenskog pejsinga.',
            'Proceni rizik od asistolije: nedavna asistolija, AV blok Mobitz II, kompletan blok sa širokim QRS, ventrikularna pauza duža od 3 sekunde.',
            'Postoji rizik od asistolije, i kad je odgovor na atropin dobar: iste privremene mere i hitan transport uz spreman pejsing.',
            'Bez životno ugrožavajućih znakova i bez rizika od asistolije: opservacija.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi',
          items: [
            { name: 'adenozin', dose: '6 mg brzi i.v. bolus; bez efekta 12 mg; zatim razmotriti 18 mg', note: 'Samo ako na EKG-u u miru nema znakova preekscitacije. Kod doze od 18 mg proceni podnošljivost.' },
            { name: 'verapamil', dose: '0,075–0,15 mg/kg i.v. (prosečno 5–10 mg) tokom 2 min', note: 'Pravilna tahikardija uskog QRS kada vagalni manevar i adenozin ne uspeju. Izbegavati kod hemodinamske nestabilnosti i srčane insuficijencije sa ejekcionom frakcijom ispod 40%.' },
            { name: 'metoprolol', dose: '2,5–15 mg i.v., u bolusima od po 2,5 mg', note: 'Tahikardija uskog QRS, kontrola frekvencije.' },
            { name: 'amiodaron', dose: '300 mg i.v. tokom 10–60 min (nestabilan posle neuspelog šoka: tokom 10–20 min); zatim 900 mg tokom 24 h', note: 'Kontraindikovan kod AF sa preekscitacijom (brza, široka, nepravilna tahikardija).' },
            { name: 'atropin', dose: '0,5 mg i.v., ponoviti na 3–5 min do ukupno 3 mg', note: 'Ne davati kod transplantiranog srca ni kod AV bloka visokog stepena sa širokim QRS — nije efikasan i može pogoršati blok.' },
            { name: 'magnezijum-sulfat', dose: '8 mmol (2 g) i.v. tokom 10 min; može se ponoviti jednom', note: 'Polimorfna VT tipa torsades de pointes.' }
          ]
        },
        {
          type: 'list',
          title: 'Praktične napomene',
          items: [
            'Vagalni manevar: pacijent duva u špric od 10 ml dovoljno jako da pomeri klip; najbolje ležeći, uz podizanje nogu.',
            'Energija sinhronizovanog šoka: AF — odmah maksimalna energija defibrilatora; flater i paroksizmalna SVT — početno 70–120 J; VT sa pulsom — početno 120–150 J.',
            'Šok mora biti sinhronizovan sa R talasom.',
            'AF trajanja dužeg od 24 h zahteva antikoagulaciju; na terenu je kod stabilnog pacijenta cilj kontrola frekvencije.',
            'Kod bradikardije izazvane beta-blokatorom ili blokatorom kalcijumskih kanala razmotri glukagon.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Sinusna tahikardija je odgovor na nešto drugo — leči uzrok, ne pokušavaj da usporiš srce lekom ili šokom.',
            'Verapamil je predviđen samo za tahikardiju uskog QRS kod hemodinamski stabilnog pacijenta.',
            'Kompletan AV blok sa širokim QRS: atropin ne pomaže — pripremi pejsing.',
            'Ako tahiaritmija ili znaci ugroženosti traju, zatraži pomoć iskusnijeg kolege.'
          ]
        }
      ],
      sources: [
        { name: 'ERC 2025 – Adult Advanced Life Support (periarestne aritmije)', url: 'https://www.erc.edu/media/vedoa2ga/gl2025-05-als-e.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 29 god., naglo nastalo lupanje srca pre 30 minuta. Svesna, TA 115/70, SpO2 98%. EKG: pravilna tahikardija uskog QRS, 190/min. Šta je prvi postupak?',
          options: [
            'Vagalni manevar',
            'Sinhronizovana kardioverzija 100 J',
            'Amiodaron 300 mg i.v. u infuziji',
            'Verapamil 10 mg i.v. kao prvi lek'
          ],
          answer: 0,
          explain: 'Stabilna pravilna tahikardija uskog QRS se prvo leči vagalnim manevrom. Ako ne uspe, sledi adenozin 6 mg, pa 12 mg, pa eventualno 18 mg; tek zatim verapamil ili beta-blokator.'
        },
        {
          q: 'Muškarac, 68 god., preležao infarkt. Lupanje srca, bol u grudima, TA 75/40, konfuzan, preznojen. Monitor: pravilna tahikardija širokog QRS, 180/min, puls se pipa. Šta radiš?',
          options: [
            'Adenozin 6 mg i.v. radi diferencijalne dijagnoze',
            'Amiodaron 300 mg i.v. tokom 60 minuta',
            'Sinhronizovani šok uz sedaciju',
            'Verapamil 5 mg i.v. tokom 2 minuta'
          ],
          answer: 2,
          explain: 'Tahikardija sa životno ugrožavajućim znacima (šok, ishemija) zahteva sinhronizovani šok, do 3 pokušaja; za VT sa pulsom početna energija je 120–150 J. Spora infuzija amiodarona je za stabilne pacijente.'
        },
        {
          q: 'Muškarac, 71 god., vrtoglavica i kratkotrajan gubitak svesti. Puls 34/min, TA 80/50, bled i preznojen. EKG: sinusna bradikardija, uski QRS. Koji je prvi lek i doza?',
          options: [
            'Adrenalin 1 mg i.v. u bolusu',
            'Amiodaron 150 mg i.v.',
            'Atropin 3 mg i.v. odjednom',
            'Atropin 0,5 mg i.v., po potrebi ponavljati do 3 mg'
          ],
          answer: 3,
          explain: 'Bradikardija sa životno ugrožavajućim znacima: atropin 0,5 mg i.v., ponavljati na 3–5 min do ukupno 3 mg; bez odgovora adrenalin 2–10 mikrograma/min ili pejsing. Atropin se ne daje kod AV bloka visokog stepena sa širokim QRS.'
        },
        {
          q: 'Muškarac, 72 god., lupanje srca nekoliko dana. TA 130/80, bez bola i dispneje. EKG: nepravilna tahikardija uskog QRS 140/min, verovatno fibrilacija pretkomora. Šta je ispravno na terenu?',
          options: [
            'Sinhronizovani šok maksimalnom energijom odmah',
            'Kontrola frekvencije i upućivanje u bolnicu',
            'Adenozin 6 mg, zatim 12 mg i.v.',
            'Magnezijum-sulfat 2 g i.v. tokom 10 minuta'
          ],
          answer: 1,
          explain: 'Stabilan pacijent sa verovatnom AF leči se kontrolom frekvencije, a kod trajanja dužeg od 24 h potrebna je antikoagulacija. Šok je za nestabilne, adenozin za pravilnu tahikardiju uskog QRS, a magnezijum za polimorfnu VT.'
        }
      ]
    },
    {
      id: 'anafilaksa',
      title: 'Anafilaksa',
      summary: 'Adrenalin intramuskularno u butinu odmah — antihistaminik i kortikosteroid ne spasavaju život.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Anafilaksa je teška reakcija preosetljivosti sa naglim početkom i brzim napredovanjem, sa ugrožavanjem **disajnog puta, disanja i/ili cirkulacije**, najčešće uz promene na koži i sluznicama. **Adrenalin i.m. je terapija prve linije** i ne sme se odlagati. Najčešći okidači su hrana, ubodi insekata i lekovi.'
        },
        {
          type: 'list',
          title: 'Kako prepoznati',
          items: [
            'Nagli početak i brzo napredovanje tegoba.',
            '**Disajni put:** otok grla i jezika, promuklost, stridor.',
            '**Disanje:** otežano disanje, vizing, kašalj.',
            '**Cirkulacija:** bledilo, hladna i vlažna koža, hipotenzija, kolaps, poremećaj svesti.',
            'Koža i sluznice: crvenilo, urtikarija, angioedem — mogu biti diskretni ili izostati u 10–20% reakcija.',
            'Promene na koži bez ugroženog disajnog puta, disanja ili cirkulacije nisu anafilaksa.',
            'Bol u trbuhu i povraćanje mogu biti simptom anafilakse.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Pozovi pomoć; ukloni okidač ako je moguće (npr. prekini davanje leka).',
            '**Adrenalin i.m.** u anterolateralnu stranu butine, odmah.',
            'Položaj: ležeći, sa ili bez podignutih nogu, kod niskog pritiska; poluležeći ako tako lakše diše; trudnica na levi bok. Ne dozvoli naglo ustajanje ni sedenje.',
            'Kiseonik u najvećoj koncentraciji (maska sa rezervoarom), zatim titrirati do SpO2 94–98%.',
            'Venski put i brzi bolus kristaloida: odrasli 500–1000 ml, deca 10 ml/kg.',
            'Bez poboljšanja posle 5 minuta: **ponovi adrenalin i.m.** u istoj dozi.',
            'Prati disanje, SpO2, puls, pritisak i svest. Transport u bolnicu.'
          ]
        },
        {
          type: 'drugs',
          title: 'Adrenalin i.m. (1 mg/ml)',
          items: [
            { name: 'adrenalin — odrasli i deca starija od 12 godina', dose: '0,5 mg i.m. (0,5 ml), ponoviti posle 5 min ako nema poboljšanja', note: 'Mesto: anterolateralna strana butine. Kod sitnog deteta pre puberteta 0,3 mg.' },
            { name: 'adrenalin — deca 6–12 godina', dose: '0,3 mg i.m. (0,3 ml), ponoviti posle 5 min po potrebi' },
            { name: 'adrenalin — deca od 6 meseci do 6 godina', dose: '0,15 mg i.m. (0,15 ml), ponoviti posle 5 min po potrebi' },
            { name: 'adrenalin — odojčad mlađa od 6 meseci', dose: '0,1–0,15 mg i.m. (0,1–0,15 ml)', note: 'Orijentaciono 0,01 mg/kg, najviše 0,5 mg.' }
          ]
        },
        {
          type: 'drugs',
          title: 'Ostalo (tek posle adrenalina)',
          items: [
            { name: 'kristaloidi', dose: '500–1000 ml i.v. brzo kod odraslih; 10 ml/kg kod dece', note: 'Obavezno kod refraktarne anafilakse i hipotenzije.' },
            { name: 'bronhodilatator (salbutamol, ipratropijum)', dose: 'Inhalaciono, kao kod napada astme', note: 'Dodatak adrenalinu kod bronhospazma, ne zamena za njega.' },
            { name: 'antihistaminik', dose: 'P.o., nesedirajući (npr. cetirizin), kada je pacijent stabilizovan', note: 'Treća linija: deluje samo na kožne simptome, ne na disanje ni cirkulaciju. Ne sme da odloži adrenalin.' },
            { name: 'kortikosteroid', dose: 'Ne rutinski', note: 'Razmotriti posle početne reanimacije kod refraktarne reakcije ili pridružene astme.' },
            { name: 'glukagon', dose: 'I.v., prema protokolu', note: 'Razmotriti kod pacijenata na beta-blokatorima sa reakcijom refraktarnom na adrenalin i tečnosti.' }
          ]
        },
        {
          type: 'refer',
          title: 'Opservacija i upućivanje',
          items: [
            'Opservacija u ustanovi opremljenoj za zbrinjavanje životno ugrožavajućih stanja — moguća je bifazna reakcija (oko 5% pacijenata).',
            'Najmanje 2 h od povlačenja simptoma: samo uz brz odgovor na jednu dozu adrenalina, potpun oporavak, obučenost i nadzor posle otpusta.',
            'Najmanje 6 h: ako su bile potrebne 2 doze adrenalina ili je ranije imao bifaznu reakciju.',
            'Najmanje 12 h: teška reakcija sa više od 2 doze, teška astma ili teška respiratorna slika, moguća dalja resorpcija alergena, kasni noćni sati, otežan pristup hitnoj pomoći.',
            'Refraktarna anafilaksa (bez poboljšanja posle 2 doze i.m.): i.v. infuzija adrenalina u rukama iskusnog tima; do tada adrenalin i.m. na 5 min.',
            'Pri otpustu: uput alergologu, plan postupanja i adrenalinski autoinjektor gde je dostupan.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Odsustvo osipa ne isključuje anafilaksu.',
            'Promena položaja iz ležećeg u sedeći ili stojeći kod anafilakse povezana je sa kolapsom i smrtnim ishodom.',
            'Adrenalin i.v. daju samo iskusni specijalisti, u odgovarajućim uslovima.',
            'Antihistaminik i kortikosteroid nisu deo početnog hitnog lečenja.',
            'Adrenalin se daje u butinu: intramuskularni put ima prednost nad supkutanim i intravenskim.'
          ]
        }
      ],
      sources: [
        { name: 'Resuscitation Council UK 2021 – Emergency treatment of anaphylaxis', url: 'https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf' },
        { name: 'ERC 2025 – Paediatric Life Support (anafilaksa)', url: 'https://www.erc.edu/umbraco/api/download-page/download/053c0724-acae-4886-960e-c4e3e31c4cd2' },
        { name: 'ERC 2025 – First Aid', url: 'https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 35 god., 10 minuta posle uboda ose: urtikarija po celom telu, promuklost, vizing, TA 85/50. Šta daješ prvo?',
          options: [
            'Antihistaminik i.m.',
            'Kortikosteroid i.v.',
            'Adrenalin 0,5 mg supkutano u nadlakticu',
            'Adrenalin 0,5 mg i.m. u butinu'
          ],
          answer: 3,
          explain: 'Adrenalin 0,5 mg i.m. u anterolateralnu stranu butine je prva linija; intramuskularni put ima prednost nad supkutanim. Antihistaminik je treća linija, a kortikosteroid se ne daje rutinski.'
        },
        {
          q: 'Dete od 4 godine posle kikirikija dobija otok usana, stridor i postaje pospano. Koja je doza adrenalina i.m.?',
          options: [
            '0,5 mg',
            '0,15 mg',
            '0,3 mg',
            '0,05 mg'
          ],
          answer: 1,
          explain: 'Za decu od 6 meseci do 6 godina doza je 0,15 mg i.m. (orijentaciono 0,01 mg/kg). Doza od 0,3 mg je za uzrast 6–12 godina, a 0,5 mg za starije od 12 godina i odrasle.'
        },
        {
          q: 'Žena sa anafilaksom primila je adrenalin 0,5 mg i.m. Posle 5 minuta i dalje je hipotenzivna i ima vizing. Kiseonik i infuzija teku. Šta je sledeći korak?',
          options: [
            'Sačekati još 15 minuta da adrenalin deluje',
            'Dati antihistaminik i kortikosteroid i.v.',
            'Ponoviti adrenalin 0,5 mg i.m.',
            'Dati adrenalin 1 mg i.v. u bolusu'
          ],
          answer: 2,
          explain: 'Ako posle 5 minuta problemi sa disanjem ili cirkulacijom traju, ponavlja se ista i.m. doza adrenalina. Adrenalin i.v. daju samo iskusni specijalisti, a bolus od 1 mg je doza za srčani zastoj.'
        },
        {
          q: 'Pacijent je zbog anafilakse primio dve doze adrenalina i.m. i sada je bez tegoba. Koliko najmanje treba da traje opservacija posle povlačenja simptoma?',
          options: [
            'Najmanje 6 sati',
            'Nije potrebna, može odmah kući',
            'Dovoljno je 30 minuta u ambulanti',
            'Dovoljno je 1 sat uz antihistaminik'
          ],
          answer: 0,
          explain: 'Kada su bile potrebne dve doze adrenalina preporučuje se najmanje 6 sati opservacije zbog moguće bifazne reakcije. Brzi otpust posle 2 sata dolazi u obzir samo posle jedne doze i uz ispunjene uslove.'
        }
      ]
    },
    {
      id: 'teska-astma-hobp',
      title: 'Teški napad astme i egzacerbacija HOBP',
      summary: 'Bronhodilatator u ponavljanim dozama, sistemski kortikosteroid rano i kiseonik sa ciljnom saturacijom.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Oba stanja se leče istim trojstvom: **kratkodelujući bronhodilatator, sistemski kortikosteroid, kontrolisani kiseonik**. Razlika je u cilju saturacije: kod astme 93–95% (deca 94–98%), kod HOBP **88–92%**. Težinu procenjuj po najtežem znaku: govor, frekvencija disanja, puls, SpO2 i stanje svesti.'
        },
        {
          type: 'list',
          title: 'Procena težine napada astme',
          items: [
            '**Blag ili umeren:** govori u frazama, radije sedi nego leži, nije uznemiren, pomoćna muskulatura se ne koristi, puls 100–120/min, SpO2 90–95%, PEF preko 50%.',
            '**Težak:** govori pojedinačne reči, sedi nagnut napred, uznemiren, frekvencija disanja preko 30/min, pomoćna muskulatura u upotrebi, puls preko 120/min, SpO2 ispod 90%, PEF 50% i manje.',
            '**Životno ugrožavajući:** pospan, konfuzan ili tih grudni koš.',
            'Faktori rizika za smrtni ishod: ranija intubacija zbog astme, prekomerna upotreba kratkodelujućeg bronhodilatatora.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Tih grudni koš, pospanost ili konfuzija — hitan transport, po mogućstvu u intenzivnu negu.',
            'Astma: SpO2 ispod 90% na sobnom vazduhu, puls preko 120/min, frekvencija disanja preko 30/min.',
            'HOBP: naglo pogoršanje dispneje u miru, visoka frekvencija disanja, pad saturacije, konfuzija, pospanost.',
            'HOBP: novi znaci kao što su cijanoza i periferni otoci; izostanak odgovora na početnu terapiju.'
          ]
        },
        {
          type: 'steps',
          title: 'Napad astme — postupak u primarnoj zaštiti',
          items: [
            'Proceni težinu dok započinješ salbutamol i kiseonik.',
            'Salbutamol **4–10 udaha preko komore, ponavljati na 20 minuta tokom prvog sata**.',
            'Oralni kortikosteroid rano: odrasli prednizolon 40–50 mg, deca 1–2 mg/kg (najviše 40 mg).',
            'Kontrolisani kiseonik do **SpO2 93–95%** (deca 94–98%).',
            'Težak ili životno ugrožavajući napad: hitan transport; dok čekaš i tokom transporta salbutamol, ipratropijum-bromid, kiseonik i sistemski kortikosteroid.',
            'Proceni odgovor posle 1 sata (ili ranije). Otpust dolazi u obzir ako su tegobe popustile, PEF je preko 60–80%, SpO2 preko 94% na sobnom vazduhu i kućni uslovi su odgovarajući.',
            'Pri otpustu: prednizolon ukupno 5–7 dana (deca 3–5 dana), kontrola za 2–7 dana.'
          ]
        },
        {
          type: 'steps',
          title: 'Egzacerbacija HOBP — postupak',
          items: [
            'Kiseonik titrirano do **SpO2 88–92%**.',
            'Kratkodelujući beta-2 agonist, sa ili bez kratkodelujućeg antiholinergika, kao početni bronhodilatator.',
            'Ako se koristi nebulizator, bolje je da ga pokreće vazduh nego kiseonik.',
            'Sistemski kortikosteroid: prednizon 40 mg dnevno tokom 5 dana.',
            'Antibiotik ako su pojačani dispneja, količina i gnojnost ispljuvka, ili dva od ta tri znaka kada je jedan gnojnost; trajanje do 5 dana.',
            'Proceni potrebu za bolnicom: teški simptomi, akutna respiratorna insuficijencija, novi znaci (cijanoza, otoci), nema odgovora na terapiju, teški komorbiditeti, nedovoljna podrška kod kuće.',
            'Pneumonija, plućna embolija i srčana insuficijencija mogu oponašati ili pogoršati egzacerbaciju.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'salbutamol', dose: '4–10 udaha preko komore na 20 min tokom prvog sata; zatim prema težini', note: 'Dozirni inhalator sa komorom je najisplativiji i efikasan način primene kod većine pacijenata.' },
            { name: 'ipratropijum-bromid', dose: 'Inhalaciono, uz salbutamol', note: 'Kod astme samo za težak napad. Kod HOBP po izboru uz beta-2 agonist.' },
            { name: 'prednizon / prednizolon', dose: 'Astma: 40–50 mg p.o. 1× dnevno 5–7 dana. HOBP: 40 mg p.o. 1× dnevno 5 dana', note: 'Deca 6–11 god. sa astmom: 1–2 mg/kg dnevno, najviše 40 mg, 3–5 dana.' },
            { name: 'kortikosteroid i.v.', dose: 'Ekvivalentna doza (astma: ekvivalent prednizolona 50 mg dnevno ili hidrokortizon 200 mg dnevno u podeljenim dozama)', note: 'Samo ako pacijent ne može da guta, povraća ili je previše dispnoičan; oralni put je jednako efikasan.' },
            { name: 'magnezijum-sulfat', dose: '2 g i.v. tokom 20 min, jednokratno', note: 'Nije za rutinsku primenu; razmotriti kod teškog napada astme bez odgovora na početnu terapiju.' },
            { name: 'kiseonik', dose: 'Astma: do SpO2 93–95% (deca 94–98%). HOBP: do SpO2 88–92%', note: 'Titrirati prema pulsnoj oksimetriji. Kod životno ugrožavajuće hipoksemije kiseonik se ne uskraćuje nikome.' }
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Sedativi se moraju izbegavati u napadu astme zbog depresije disanja.',
            'Aminofilin i teofilin i.v. se ne preporučuju ni kod napada astme ni kod egzacerbacije HOBP.',
            'Oralni kortikosteroid treba najmanje 4 sata da dovede do kliničkog poboljšanja, zato se daje rano.',
            'Kod napada astme antibiotik se ne propisuje rutinski.',
            'Neinvazivna ventilacija je prvi vid ventilatorne potpore kod HOBP sa akutnom respiratornom insuficijencijom.'
          ]
        }
      ],
      sources: [
        { name: 'GINA 2024 – Global Strategy for Asthma Management and Prevention', url: 'https://ginasthma.org/wp-content/uploads/2024/05/GINA-2024-Strategy-Report-24_05_22_WMS.pdf' },
        { name: 'GOLD 2025 – Global Strategy for Prevention, Diagnosis and Management of COPD', url: 'https://goldcopd.org/wp-content/uploads/2024/11/GOLD-2025-Report-v1.0-15Nov2024_WMV.pdf' },
        { name: 'ERC 2025 – First Aid (kiseonik)', url: 'https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 70 god., HOBP, pogoršanje dispneje i gnojav ispljuvak. SpO2 83% na sobnom vazduhu, frekvencija disanja 26/min, svestan. Kako daješ kiseonik?',
          options: [
            'Visok protok do SpO2 100%',
            'Ne daje se kiseonik zbog rizika od hiperkapnije',
            'Titrirano, do ciljne SpO2 88–92%',
            'Titrirano, do ciljne SpO2 preko 96%'
          ],
          answer: 2,
          explain: 'Kod HOBP kiseonik se titrira na 88–92%. Hipoksemija se mora ispraviti, a kod životno ugrožavajuće hipoksemije kiseonik se ne uskraćuje.'
        },
        {
          q: 'Devojka, 22 god., astma. Izgovara pojedinačne reči, frekvencija disanja 34/min, puls 128/min, SpO2 89%. Dobila je salbutamol i ipratropijum. Šta još daješ odmah?',
          options: [
            'Prednizolon 40–50 mg p.o. i kiseonik do SpO2 93–95%',
            'Sedativ i.m. zbog uznemirenosti',
            'Aminofilin i.v. u brzom bolusu',
            'Antibiotik širokog spektra'
          ],
          answer: 0,
          explain: 'Težak napad zahteva rani sistemski kortikosteroid i kiseonik titriran do 93–95%, uz hitan transport. Sedativi se moraju izbegavati, aminofilin se ne preporučuje, a antibiotik se ne daje rutinski.'
        },
        {
          q: 'Mladić sa astmom: posle sat vremena terapije vizing se više ne čuje, pacijent je pospan, SpO2 86%. Kako tumačiš nalaz?',
          options: [
            'Dobar odgovor na terapiju, može kući',
            'Očekivan efekat kortikosteroida',
            'Verovatno anksioznost, treba ga umiriti',
            'Životno ugrožavajući napad, hitan transport'
          ],
          answer: 3,
          explain: 'Pospanost, konfuzija ili tih grudni koš označavaju životno ugrožavajući napad: hitan transport, po mogućstvu u intenzivnu negu, uz salbutamol, ipratropijum, kiseonik i sistemski kortikosteroid.'
        },
        {
          q: 'Pacijent sa egzacerbacijom HOBP može da guta. Koji režim sistemskog kortikosteroida preporučuje GOLD?',
          options: [
            'Kortikosteroid se ne daje u egzacerbaciji',
            'Prednizon 40 mg dnevno tokom 5 dana',
            'Prednizon 40 mg dnevno tokom mesec dana',
            'Isključivo intravenski, visoke doze 14 dana'
          ],
          answer: 1,
          explain: 'Preporučuje se doza ekvivalentna 40 mg prednizona dnevno tokom 5 dana. Sistemski kortikosteroidi skraćuju oporavak i smanjuju rizik od neuspeha lečenja.'
        }
      ]
    },
    {
      id: 'strano-telo-disajni-put',
      title: 'Opstrukcija disajnog puta stranim telom',
      summary: 'Dok kašlje, ohrabri ga; kad kašalj oslabi: udarci po leđima, pa potisci; gubitak svesti znači KPR.',
      urgent: true,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Na gušenje posumnjaj kada osoba iznenada ne može da govori ili kašlje, naročito tokom jela. Postupak ide stepenasto: **podsticanje kašlja, zatim udarci po leđima, zatim potisci** (u trbuh kod odraslih i dece, na grudni koš kod odojčadi). Kod gubitka svesti počinje se KPR.'
        },
        {
          type: 'list',
          title: 'Procena',
          items: [
            'Pitaj: da li se gušiš?',
            'Osoba koja je svesna i može da kašlje: kašalj stvara visok pritisak u disajnim putevima i može izbaciti strano telo.',
            'Znaci teške opstrukcije: ne može da govori ni da kašlje, ili kašalj postaje neefikasan.',
            'Kod deteta: posumnjaj na strano telo ako ne može da kašlje, govori ili diše.'
          ]
        },
        {
          type: 'steps',
          title: 'Odrasli',
          items: [
            'Podstiči osobu da kašlje.',
            'Ne može da kašlje ili kašalj postaje neefikasan: **do 5 udaraca po leđima** — stani iza osobe, korenom dlana između lopatica.',
            'Bez uspeha: **do 5 potisaka u trbuh** — nagni osobu napred, pesnica između pupka i rebarnog luka, oštar potisak ka unutra i nagore.',
            'Naizmenično 5 udaraca po leđima i 5 potisaka u trbuh dok se opstrukcija ne otkloni ili osoba ne prestane da reaguje.',
            'Pozovi hitnu pomoć (194).',
            'Ne reaguje i ne diše normalno: počni kompresije grudnog koša i KPR po standardnom algoritmu.'
          ]
        },
        {
          type: 'steps',
          title: 'Deca i odojčad',
          items: [
            'Starije dete podstiči da kašlje; pozovi ili pošalji nekoga da pozove hitnu pomoć.',
            'Kašalj nije moguć ili slabi: **do 5 udaraca po leđima**. Odojče položi potrbuške na podlakticu oslonjenu na nogu, glava niže od grudnog koša; dete nagni napred.',
            'Bez uspeha kod **odojčeta**: okreni ga na leđa preko kolena i daj **do 5 potisaka na grudni koš** tehnikom dva palca sa obuhvatanjem grudnog koša, oštrije nego kod kompresija.',
            'Bez uspeha kod **deteta**: **do 5 potisaka u trbuh** — pesnica između pupka i vrha grudne kosti, oštro ka unutra i nagore.',
            'Dok je dete pri svesti, smenjuj do 5 udaraca po leđima i do 5 potisaka; prekini čim se pojave kašalj, glasno disanje ili plač.',
            'Gubitak svesti: odmah KPR, počevši sa **5 inicijalnih udaha**, zatim 15:2.'
          ]
        },
        {
          type: 'list',
          title: 'Šta ne raditi',
          items: [
            'Ne čistiti usta prstom naslepo — može pogoršati opstrukciju ili povrediti meka tkiva.',
            'Prstom ukloni samo strano telo koje se jasno vidi u ustima.',
            'Ne počinjati potiscima u trbuh pre udaraca po leđima: udarci po leđima su preporučena prva mera.',
            'Ne davati potiske u trbuh odojčetu — kod odojčadi se koriste potisci na grudni koš.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Svaka osoba kod koje su primenjeni potisci u trbuh ili kompresije grudnog koša treba da bude pregledana zbog mogućih povreda i komplikacija.',
            'Gubitak svesti ili zastoj disanja tokom epizode — hitan transport u bolnicu.',
            'Dete: pozovi hitnu pomoć što pre, a najkasnije kada dete izgubi svest.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Dok osoba kašlje, najbolja pomoć je ohrabrenje i nadzor.',
            'Odojče: leđa i grudni koš. Dete i odrasli: leđa i trbuh.',
            'Kompresije grudnog koša stvaraju veći pritisak u disajnim putevima od potisaka u trbuh, zato se kod onesvešćenog počinje KPR.',
            'Ekipa sa opremom može ukloniti strano telo laringoskopijom i kleštima.'
          ]
        }
      ],
      sources: [
        { name: 'ERC 2025 – First Aid (gušenje kod odraslih)', url: 'https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf' },
        { name: 'ERC 2025 – Paediatric Life Support', url: 'https://www.erc.edu/umbraco/api/download-page/download/053c0724-acae-4886-960e-c4e3e31c4cd2' }
      ],
      questions: [
        {
          q: 'U restoranu se muškarac zagrcnuo zalogajem. Crven je u licu, glasno kašlje i uspeva da kaže da se guši. Šta radiš?',
          options: [
            'Odmah pet potisaka u trbuh',
            'Podstičeš ga da kašlje i posmatraš',
            'Čistiš mu usta prstom naslepo',
            'Polažeš ga na leđa i počinješ kompresije'
          ],
          answer: 1,
          explain: 'Osobu koja je svesna i može da kašlje treba podsticati da kašlje, jer kašalj stvara visok pritisak u disajnim putevima. Udarci i potisci su za tešku opstrukciju, kada kašalj postane neefikasan.'
        },
        {
          q: 'Beba od 8 meseci se zagrcnula komadićem jabuke, ne plače, bezvučno pokušava da kašlje. Koji je ispravan postupak?',
          options: [
            'Pet potisaka u trbuh, pa pet udaraca po leđima',
            'Prstom naslepo pokušati da se izvadi komad',
            'Sačekati da sama iskašlje, bez intervencije',
            'Pet udaraca po leđima, pa pet potisaka na grudni koš'
          ],
          answer: 3,
          explain: 'Kod odojčeta se daju udarci po leđima sa glavom nižom od grudnog koša, a zatim potisci na grudni koš tehnikom dva palca. Potisci u trbuh su za stariju decu, a čišćenje naslepo može pogoršati opstrukciju.'
        },
        {
          q: 'Žena, 60 god., guši se zalogajem mesa. Posle dve serije udaraca po leđima i potisaka u trbuh prestaje da reaguje i ne diše normalno. Šta je sledeći korak?',
          options: [
            'Pozvati 194 i početi kompresije grudnog koša (KPR)',
            'Nastaviti potiske u trbuh u ležećem položaju',
            'Postaviti je u bočni položaj i čekati ekipu',
            'Čekati da sama prodiše, uz nadzor'
          ],
          answer: 0,
          explain: 'Kada osoba prestane da reaguje i ne diše normalno, počinju kompresije po standardnom BLS algoritmu. Kompresije stvaraju veći pritisak u disajnim putevima od potisaka u trbuh i obezbeđuju cirkulaciju.'
        },
        {
          q: 'Muškarac se gušio zalogajem; posle tri potiska u trbuh komad je izleteo. Sada normalno diše i govori i hoće da nastavi večeru. Šta savetuješ?',
          options: [
            'Ništa posebno, epizoda je završena',
            'Da popije vodu i miruje pola sata',
            'Pregled lekara zbog mogućih povreda od potisaka',
            'Kontrolu samo ako dobije temperaturu'
          ],
          answer: 2,
          explain: 'Svaku osobu uspešno zbrinutu potiscima u trbuh ili kompresijama grudnog koša treba da pregleda zdravstveni radnik, jer su moguće povrede i komplikacije.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'hitna-kardio-slucaj-1',
      title: 'Muškarac, 59 god., bol u grudima u ambulanti',
      intro: 'U ambulantu doma zdravlja ulazi muškarac od 59 godina, pušač, leči se od hipertenzije. Pre sat vremena, dok je cepao drva, počeo je pritisak iza grudne kosti koji ne prolazi, uz mučninu i preznojavanje. Bled je i oznojen. TA 105/65, puls 54/min, SpO2 96% na sobnom vazduhu, frekvencija disanja 18/min.',
      steps: [
        {
          q: 'Pacijent sedi u čekaonici i žali se na bol jačine 8/10. Šta je prvi postupak?',
          options: [
            'Napisati uput za internistu za sutra',
            'Snimiti 12-kanalni EKG i priključiti monitor',
            'Dati analgetik i proceniti efekat za 30 minuta',
            'Uzeti krv za laboratoriju i sačekati nalaz'
          ],
          answer: 1,
          explain: 'Kod sumnje na AKS EKG mora biti snimljen i protumačen u roku od 10 minuta od prvog kontakta, a EKG monitoring i defibrilator obezbeđeni što pre.'
        },
        {
          q: 'EKG: sinusna bradikardija 54/min, ST elevacija 3 mm u II, III i aVF. Pozvao si SHMP. Šta radiš dok čekaš ekipu?',
          options: [
            'Kiseonik 10 l/min i nitroglicerin odmah',
            'Čekam troponin pre bilo kakve terapije',
            'Samo opservacija, bez lekova do dolaska ekipe',
            'Acetilsalicilna kiselina 300 mg p.o., venski put, monitoring, desni odvodi'
          ],
          answer: 3,
          explain: 'Acetilsalicilna kiselina 150–300 mg daje se što pre. Kiseonik nije potreban uz SpO2 96%, a kod donjeg infarkta treba snimiti V3R i V4R pre odluke o nitroglicerinu. STEMI se ne potvrđuje troponinom.'
        },
        {
          q: 'Pritisak je sada 88/55. Desni odvodi pokazuju ST elevaciju u V4R. Bol i dalje traje. Šta je ispravno?',
          options: [
            'Bez nitrata; nastaviti monitoring i hitan transport u PCI centar',
            'Nitroglicerin sublingvalno radi rasterećenja srca',
            'Furosemid 40 mg i.v. radi rasterećenja srca',
            'Urapidil 12,5 mg i.v. radi zaštite miokarda'
          ],
          answer: 0,
          explain: 'Nitrati se ne daju kod hipotenzije i infarkta desne komore. Diuretik i antihipertenziv nemaju indikaciju kod hipotenzivnog pacijenta bez kongestije; prioritet je reperfuzija.'
        },
        {
          q: 'Ekipa SHMP je stigla. Tokom premeštanja na nosila pacijent prestaje da reaguje i ne diše; na monitoru je ventrikularna fibrilacija. Šta je sledeći korak?',
          options: [
            'Adrenalin 1 mg i.v. pa provera ritma',
            'Amiodaron 300 mg i.v. pa defibrilacija',
            'Odmah defibrilacija, zatim 2 minuta kompresija',
            'Intubacija, pa tek onda defibrilacija'
          ],
          answer: 2,
          explain: 'Šok se isporučuje što ranije, a zatim se odmah nastavljaju kompresije 2 minuta. Adrenalin i amiodaron dolaze tek posle trećeg šoka.'
        },
        {
          q: 'Posle prvog šoka i 2 minuta KPR pacijent ima puls i diše. TA 100/60, EKG i dalje pokazuje ST elevaciju u donjim odvodima. Kuda ga transportuješ?',
          options: [
            'U najbližu opštu bolnicu radi stabilizacije',
            'Ostaje u domu zdravlja na opservaciji 2 sata',
            'Na neurološko odeljenje zbog gubitka svesti',
            'Direktno u PCI centar uz najavu i monitoring'
          ],
          answer: 3,
          explain: 'Posle povratka cirkulacije radi se 12-kanalni EKG i leči uzrok; pacijent sa STEMI ide direktno u PCI centar, zaobilazeći bolnice bez sale za kateterizaciju.'
        }
      ]
    },
    {
      id: 'hitna-kardio-slucaj-2',
      title: 'Žena, 41 god., loše joj je posle injekcije',
      intro: 'U ambulanti doma zdravlja žena od 41 godine prima prvu dozu antibiotika i.m. zbog infekcije. Pet minuta kasnije sestra te zove: pacijentkinja se žali na svrab dlanova, stezanje u grlu i vrtoglavicu. Lice joj je crveno, usne otečene, glas promukao. TA 80/45, puls 124/min, SpO2 91%, čuje se vizing.',
      steps: [
        {
          q: 'Šta je prvi postupak?',
          options: [
            'Adrenalin 0,5 mg i.m. u anterolateralnu stranu butine',
            'Antihistaminik i.m. i kortikosteroid i.v.',
            'Salbutamol preko komore i posmatranje',
            'Venski put, pa adrenalin 1 mg i.v. u bolusu'
          ],
          answer: 0,
          explain: 'Ovo je anafilaksa sa ugroženim disajnim putem, disanjem i cirkulacijom. Adrenalin i.m. se daje pre svega ostalog; antihistaminik ne deluje na disanje ni cirkulaciju, a bronhodilatator je samo dodatak.'
        },
        {
          q: 'Adrenalin je dat. Pacijentkinja pokušava da ustane jer joj je muka. Šta radiš dalje?',
          options: [
            'Dozvoliš joj da sedne na stolicu i daš vodu',
            'Vodiš je do toaleta uz pratnju sestre',
            'Polegneš je, daš kiseonik i brzo 500–1000 ml kristaloida i.v.',
            'Polegneš je i daš diuretik zbog otoka usana'
          ],
          answer: 2,
          explain: 'Promena položaja iz ležećeg u sedeći ili stojeći povezana je sa kolapsom. Kod niskog pritiska pacijent leži, dobija kiseonik u najvećoj koncentraciji i brzi bolus kristaloida.'
        },
        {
          q: 'Pet minuta posle adrenalina: TA 85/50, vizing i promuklost traju. Infuzija teče. Šta je sledeći korak?',
          options: [
            'Čekati još 10 minuta na efekat prve doze',
            'Ponoviti adrenalin 0,5 mg i.m.',
            'Dati aminofilin i.v. zbog vizinga',
            'Dati dvostruku dozu antihistaminika'
          ],
          answer: 1,
          explain: 'Ako posle 5 minuta problemi sa disajnim putem, disanjem ili cirkulacijom traju, ponavlja se ista doza adrenalina i.m.'
        },
        {
          q: 'Posle druge doze stanje se popravlja: TA 115/70, SpO2 97%, disanje slobodno. Stigla je ekipa SHMP. Pacijentkinja pita može li kući. Šta je ispravno?',
          options: [
            'Može kući uz antihistaminik p.o.',
            'Ostaje u ambulanti još 30 minuta, pa kući',
            'Kući uz savet da izbegava sve antibiotike',
            'Transport u bolnicu, opservacija najmanje 6 sati, zatim alergolog'
          ],
          answer: 3,
          explain: 'Posle dve doze adrenalina preporučuje se najmanje 6 sati opservacije u ustanovi opremljenoj za zbrinjavanje anafilakse, zbog moguće bifazne reakcije. Alergiju na lek treba upisati u karton.'
        }
      ]
    },
    {
      id: 'hitna-kardio-slucaj-3',
      title: 'Muškarac, 72 god., sve teže diše',
      intro: 'Ekipa SHMP izlazi na poziv supruge: muškarac od 72 godine sa HOBP, dugogodišnji pušač, već tri dana sve teže diše, više kašlje i iskašljava više ispljuvka, koji je postao žutozelen. Zatičete ga kako sedi nagnut napred i govori kratke rečenice. Frekvencija disanja 28/min, puls 108/min, TA 145/85, SpO2 82% na sobnom vazduhu. Obostrano produžen ekspirijum i difuzni vizing.',
      steps: [
        {
          q: 'Kako započinješ terapiju kiseonikom?',
          options: [
            'Visok protok, cilj SpO2 98–100%',
            'Bez kiseonika dok se ne uradi gasna analiza',
            'Titrirano, cilj SpO2 88–92%',
            'Visok protok dok ne prestane dispneja'
          ],
          answer: 2,
          explain: 'Kod egzacerbacije HOBP kiseonik se titrira do saturacije 88–92%. Hipoksemija se mora ispraviti; kod životno ugrožavajuće hipoksemije kiseonik se ne uskraćuje.'
        },
        {
          q: 'SpO2 je 89% uz nizak protok kiseonika. Koju terapiju daješ?',
          options: [
            'Salbutamol sa ili bez ipratropijuma inhalaciono i prednizon 40 mg',
            'Aminofilin i.v. i sedativ i.m.',
            'Samo antibiotik, bez bronhodilatatora',
            'Samo kiseonik, ostalo u bolnici'
          ],
          answer: 0,
          explain: 'Početni bronhodilatator je kratkodelujući beta-2 agonist sa ili bez antiholinergika, uz sistemski kortikosteroid (prednizon 40 mg dnevno, 5 dana). Metilksantini i.v. se ne preporučuju.'
        },
        {
          q: 'Supruga je u međuvremenu sama pojačala kiseonik na najjače. Posle 15 minuta pacijent je pospan i teško se budi, SpO2 99%. Šta radiš?',
          options: [
            'Ništa, pacijent se umorio i zaspao',
            'Ukidaš kiseonik u potpunosti',
            'Daješ sedativ da se odmori do bolnice',
            'Vraćaš kiseonik na cilj 88–92% i hitno transportuješ'
          ],
          answer: 3,
          explain: 'Akutna promena svesti kod egzacerbacije HOBP znak je životno ugrožavajuće respiratorne insuficijencije. Cilj saturacije ostaje 88–92%: bez kiseonika je imao 82%, pa se kiseonik titrira, a ne ukida; u bolnici sledi neinvazivna ventilacija.'
        },
        {
          q: 'Tokom transporta pacijent je budniji, SpO2 90%. Supruga pita da li je antibiotik potreban. Šta odgovaraš?',
          options: [
            'Nije, antibiotik se nikada ne daje u egzacerbaciji',
            'Jeste, jer ima pojačanu dispneju, više ispljuvka i gnojav ispljuvak',
            'Jeste, ali najmanje tri nedelje',
            'Nije, dovoljno je povećati dozu kortikosteroida'
          ],
          answer: 1,
          explain: 'Antibiotik je indikovan kada postoje sva tri kardinalna znaka (dispneja, količina i gnojnost ispljuvka), ili dva ako je jedan gnojnost, kao i kod potrebe za mehaničkom ventilacijom. Preporučeno trajanje je do 5 dana.'
        }
      ]
    }
  ]
});
