MED.register({
  id: 'hitna-ostalo',
  title: 'Hitna stanja: neurološka, metabolička i ostala',
  icon: '⚡',
  color: '#F76B15',
  topics: [
    {
      id: 'mozdani-udar',
      title: 'Akutni moždani udar',
      summary: 'Vreme je mozak: prepoznaj, utvrdi vreme početka, izmeri glikemiju i hitno vozi u jedinicu za moždani udar.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Naglo nastali fokalni neurološki ispad je moždani udar dok se ne dokaže suprotno. Na terenu se ishemijski i hemoragijski udar ne mogu razlikovati, pa se ne daje nikakva specifična terapija. Zadatak ekipe je brzo prepoznavanje, isključivanje hipoglikemije, tačan podatak o vremenu početka i transport uz najavu u ustanovu koja radi trombolizu i trombektomiju.' },
        { type: 'list', title: 'Prepoznavanje', items: [
          '**FAST**: lice (asimetrija pri osmehu), ruka (tone pri držanju obe ruke ispružene), govor (nerazgovetan, pogrešne reči, ne razume), vreme (zovi 194)',
          '**BE-FAST** dodaje ravnotežu (nagla nestabilnost, vrtoglavica) i oči (nagli gubitak vida, dvoslike) i hvata udare zadnjeg sliva',
          'Ostalo: nagla utrnulost polovine tela, zanemarivanje jedne strane, devijacija pogleda, nagla jaka glavobolja sa povraćanjem',
          'Imitatori: hipoglikemija, postiktalna (Todova) pareza, migrena sa aurom, sepsa kod starih, intoksikacija, periferna pareza facijalisa'
        ] },
        { type: 'steps', title: 'Postupak na terenu', items: [
          'ABCDE; kod poremećaja svesti bočni položaj i obezbeđenje disajnog puta, aspiracija po potrebi',
          'Kiseonik samo ako je SpO2 ispod 95%; rutinski kiseonik kod normalne saturacije ne koristi',
          '**Glikemija iz prsta odmah**: hipoglikemiju odmah koriguj glukozom i ponovo proceni neurološki nalaz',
          'Utvrdi **vreme kada je pacijent poslednji put viđen bez simptoma** (ne vreme kada je pronađen) i povedi svedoka ili uzmi broj telefona',
          'Venski put, bez odlaganja polaska',
          'EKG i monitoring (atrijalna fibrilacija), ali bez odlaganja polaska; ništa na usta zbog rizika od aspiracije',
          'Hitan transport uz **telefonsku najavu** u ustanovu sa jedinicom za moždani udar: vreme početka, deficit, terapija (antikoagulansi), glikemija, TA'
        ] },
        { type: 'flags', title: 'Šta ne raditi', items: [
          '**Ne snižavaj pritisak rutinski na terenu**: ESO savetuje protiv prehospitalnog obaranja pritiska kod sumnje na moždani udar',
          'Bez nifedipina ili kaptoprila pod jezik i bez furosemida radi obaranja pritiska',
          'Bez acetilsalicilne kiseline, klopidogrela i heparina pre CT-a jer krvarenje nije isključeno',
          'Bez sedativa ako nisu neophodni jer maskiraju neurološki nalaz',
          'Ne čekaj da simptomi prođu i ne ostavljaj pacijenta kod kuće zato što mu je bolje'
        ] },
        { type: 'list', title: 'Podaci koji odlučuju o terapiji u bolnici', items: [
          'Intravenska tromboliza se daje do 4,5 h od početka simptoma, mehanička trombektomija do 6 h, a kod odabranih pacijenata po snimanju i do 24 h',
          'Udar na buđenju ili nepoznato vreme početka ne isključuje reperfuziju: i dalje hitan transport',
          'Antikoagulantna terapija: koji lek i kada je uzeta poslednja doza',
          'Skorašnja operacija, trauma, krvarenje ili raniji moždani udar; funkcionalno stanje pre događaja',
          'Pragovi pritiska (ispod 185/110 mmHg pre trombolize) rešavaju se u bolnici titrabilnim i.v. lekovima'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Svaki suspektan moždani udar: hitno, sanitetom uz pratnju lekara, direktno u ustanovu sa CT-om i jedinicom za moždani udar',
          '**TIA** (simptomi su se povukli): hitno upućivanje na specijalističku procenu, u roku od 24 h od početka simptoma',
          'Nagla najjača glavobolja u životu, sa ili bez ispada: sumnja na subarahnoidalno krvarenje, hitan transport'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Glikemija se meri svakom pacijentu sa neurološkim ispadom pre nego što se proglasi moždani udar',
          'Najvažniji podatak koji nosiš u bolnicu je vreme kada je pacijent poslednji put bio dobro',
          'Visok pritisak u akutnom udaru je najčešće posledica, a ne uzrok: na terenu ga ne diraj',
          'Najava bolnici omogućava da tim i CT budu spremni pre dolaska pacijenta'
        ] }
      ],
      sources: [
        { name: 'NICE NG128 – Stroke and TIA in over 16s (preporuke)', url: 'https://www.nice.org.uk/guidance/ng128/chapter/Recommendations' },
        { name: 'ESO 2025 – Blood pressure management in acute stroke', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13151662/' },
        { name: 'ERC 2025 – First Aid', url: 'https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac 66 god., pre 40 minuta naglo slabost leve ruke i iskrivljena usta. TA 190/100 mmHg, SpO2 96%, glikemija 6,8 mmol/l. Šta radiš sa pritiskom na terenu?',
          options: [
            'Kaptopril 25 mg pod jezik i kontrola pritiska za 15 minuta',
            'Ne snižavam pritisak, hitan transport uz najavu bolnici',
            'Urapidil i.v. do ciljne vrednosti 140/90 mmHg',
            'Furosemid 40 mg i.v. radi postepenog obaranja pritiska'
          ],
          answer: 1,
          explain: 'ESO savetuje protiv rutinskog prehospitalnog snižavanja pritiska kod sumnje na moždani udar. Ciljne vrednosti pre trombolize (ispod 185/110 mmHg) postižu se u bolnici, posle CT-a.'
        },
        {
          q: 'Ženu od 74 god. ukućani nalaze konfuznu, znojavu, otežano govori i slabije pomera desnu ruku. Koji postupak je obavezan pre nego što stanje proglasiš moždanim udarom?',
          options: [
            'Acetilsalicilna kiselina 300 mg sažvakati',
            'Kiseonik 10 l/min preko maske sa rezervoarom',
            'Snižavanje pritiska ako je iznad 160/100 mmHg',
            'Merenje glikemije iz prsta'
          ],
          answer: 3,
          explain: 'Hipoglikemija može u potpunosti da imitira moždani udar i odmah se leči. Antiagregacija se ne daje pre CT-a, a kiseonik samo ako je SpO2 ispod 95%.'
        },
        {
          q: 'Koji anamnestički podatak je najvažniji za odluku o reperfuzionoj terapiji i mora da stigne do prijemne ekipe?',
          options: [
            'Vreme kada je pacijent poslednji put viđen bez simptoma',
            'Koliko godina pacijent boluje od hipertenzije',
            'Vrednosti lipida na poslednjoj kontroli',
            'Porodična anamneza za moždani udar'
          ],
          answer: 0,
          explain: 'Vremenski prozori za trombolizu (4,5 h) i trombektomiju računaju se od trenutka kada je pacijent poslednji put bio dobro. Ako je pronađen sa simptomima, računa se vreme kada je poslednji put viđen zdrav.'
        },
        {
          q: 'Muškarac 61 god. imao je 20 minuta oduzetost desne ruke i otežan govor, sada je neurološki uredan i želi kući. Šta je ispravno?',
          options: [
            'Kontrola kod izabranog lekara za sedam dana',
            'Uvesti acetilsalicilnu kiselinu i zakazati neurologa za mesec dana',
            'Hitno upućivanje na specijalističku procenu u roku od 24 sata',
            'Zakazati Holter pritiska i ultrazvuk karotida ambulantno'
          ],
          answer: 2,
          explain: 'TIA je upozorenje na preteći moždani udar. NICE traži hitno upućivanje na specijalističku procenu u roku od 24 sata od početka simptoma i rani početak sekundarne prevencije, a ne odloženu kontrolu.'
        }
      ]
    },
    {
      id: 'epi-napad',
      title: 'Epileptički napad i epileptički status',
      summary: 'Većina napada staje sama za 2–3 minuta; posle 5 minuta to je status i odmah se daje benzodiazepin.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Tokom napada zadatak je zaštita od povrede i merenje trajanja. **Epileptički status** je konvulzivni napad duži od 5 minuta ili više napada bez oporavka svesti između njih i zahteva hitnu primenu benzodiazepina. Uvek traži uzrok koji se odmah leči: hipoglikemija, hipoksija, eklampsija, intoksikacija, apstinencija, infekcija CNS, povreda glave.' },
        { type: 'steps', title: 'Postupak', items: [
          'Skloni opasne predmete, zaštiti glavu, olabavi odeću oko vrata. **Ništa ne stavljaj u usta** i ne sputavaj udove',
          'Meri vreme od početka napada; kiseonik preko maske, aspiracija ako ima sadržaja',
          'Po prestanku konvulzija bočni položaj, provera disanja i pulsa, SpO2',
          '**Glikemija iz prsta** kod svakog napada; ako je niska, glukoza i.v.',
          'Ako napad traje duže od 5 minuta: benzodiazepin. Ima venski put: diazepam i.v. Nema venskog puta: midazolam i.m. ili bukalno, ili diazepam rektalno',
          'Ako konvulzije traju i 5–10 minuta posle prve doze: ponovi benzodiazepin jednom, pripremi se za potporu disanja',
          'Status koji ne staje posle dve doze: hitan transport uz najavu, u bolnici druga linija (levetiracetam, valproat ili fenitoin i.v.)'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'diazepam i.v.', dose: '10 mg i.v. sporo (0,15–0,2 mg/kg, najviše 10 mg po dozi); može se ponoviti jednom posle 5–10 minuta', note: 'Sporo, oko 0,5 ml/min (2,5 mg/min) prema sažetku leka. Prati disanje i pritisak.' },
          { name: 'midazolam i.m.', dose: '10 mg i.m. kod telesne mase preko 40 kg; 5 mg i.m. kod 13–40 kg; jednokratno', note: 'Prvi izbor kada nema venskog puta; ne gubi vreme na kanilu.' },
          { name: 'midazolam bukalno', dose: '10 mg od 10 god. i odrasli; 7,5 mg od 5 do 9 god.; 5 mg od 1 do 4 god.; 2,5 mg od 6 do 11 meseci; između obraza i desni', note: 'Jedna doza. Odojčad od 3 do 6 meseci samo u bolničkim uslovima.' },
          { name: 'diazepam rektalno', dose: '0,2–0,5 mg/kg rektalno, najviše 20 mg, jednokratno', note: 'Alternativa kada nema venskog puta, posebno kod dece.' },
          { name: 'glukoza', dose: '20 g i.v. kod dokazane hipoglikemije: 200 ml 10% ili 100 ml 20% rastvora tokom 15 minuta', note: 'Kod alkoholičara i pothranjenih uz tiamin 100 mg i.v.' },
          { name: 'magnezijum-sulfat', dose: '4 g i.v. tokom 5–15 minuta kod eklampsije, zatim održavanje u bolnici', note: 'Lek izbora za konvulzije u trudnoći posle 20. nedelje i u puerperijumu.' }
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Napad duži od 5 minuta ili serija napada bez povratka svesti',
          'Prvi napad u životu, napad u trudnoći, napad posle povrede glave',
          'Febrilnost, ukočen vrat ili osip: sumnja na meningitis ili encefalitis',
          'Produžena postiktalna konfuzija ili nov fokalni neurološki ispad',
          'Otežano disanje, aspiracija, povreda tokom napada, intoksikacija ili apstinencija'
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Svi sa crvenim zastavicama i svi kojima je dat benzodiazepin na terenu',
          'Prvi napad u životu: obrada (laboratorija, snimanje, EEG) u bolničkim uslovima',
          'Poznata epilepsija, tipičan napad kraći od 5 minuta, potpun oporavak i odrasla osoba uz pacijenta: može ostati kod kuće uz kontrolu neurologa',
          'Dete sa prvim febrilnim napadom ili napadom dužim od 5 minuta: pedijatru hitno'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Najčešća greška je premala ili zakasnela doza benzodiazepina; puna doza na vreme je bezbednija od napada koji traje',
          'Kada nema vene, ne gubi vreme na kanilu: midazolam i.m. ili bukalno, ili diazepam rektalno',
          'Posle dve doze benzodiazepina sledi druga linija u bolnici (levetiracetam, fenitoin ili valproat i.v.), a ne treća doza',
          'Ugriz jezika sa strane, inkontinencija i postiktalna konfuzija govore za napad; kratak gubitak svesti sa brzim oporavkom govori za sinkopu',
          'Najčešći uzrok napada kod poznatog epileptičara je preskočena terapija, nesanica ili alkohol'
        ] }
      ],
      sources: [
        { name: 'NICE NG217 – Epilepsies: status epilepticus', url: 'https://www.nice.org.uk/guidance/ng217/chapter/7-Treating-status-epilepticus-repeated-or-cluster-seizures-and-prolonged-seizures' },
        { name: 'AES 2016 – Treatment of Convulsive Status Epilepticus', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4749120/' },
        { name: 'EMA – Buccolam, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/buccolam-epar-product-information_en.pdf' },
        { name: 'ALIMS – sažetak karakteristika leka, Bensedin rastvor za injekciju', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-00996-22-001.pdf' },
        { name: 'NICE NG133 – Hypertension in pregnancy (magnezijum-sulfat)', url: 'https://www.nice.org.uk/guidance/ng133/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Muškarac 35 god., oko 80 kg, ima generalizovane konvulzije koje traju 7 minuta. Venski put nije moguće brzo plasirati. Šta daješ?',
          options: [
            'Ništa još, sačekati spontani prestanak do 15. minuta',
            'Diazepam 5 mg u tableti pod jezik',
            'Midazolam 10 mg i.m.',
            'Nastaviti pokušaje plasiranja kanile dok ne uspe'
          ],
          answer: 2,
          explain: 'Napad duži od 5 minuta je status i leči se odmah. Bez venskog puta AES algoritam predviđa midazolam 10 mg i.m. kod telesne mase preko 40 kg; tableta kod pacijenta u napadu nije primenljiva.'
        },
        {
          q: 'Koja definicija epileptičkog statusa važi za donošenje odluke o terapiji na terenu?',
          options: [
            'Konvulzivni napad duži od 5 minuta ili ponavljani napadi bez oporavka svesti',
            'Konvulzivni napad koji traje najmanje 30 minuta',
            'Svaki prvi epileptički napad u životu',
            'Dva napada u toku 24 sata sa potpunim oporavkom između njih'
          ],
          answer: 0,
          explain: 'Operativna granica je 5 minuta jer napad koji toliko traje retko staje sam, a duže trajanje nosi rizik od oštećenja neurona. Granica od 30 minuta je vreme posle kog se očekuju trajne posledice.'
        },
        {
          q: 'U čekaonici pacijent pada i počinje generalizovani toničko-klonički napad. Šta je ispravan prvi postupak?',
          options: [
            'Staviti špatulu ili kašiku među zube da ne pregrize jezik',
            'Čvrsto držati ruke i noge da se ne povredi',
            'Sipati mu u usta rastvoren diazepam',
            'Skloniti predmete, zaštititi glavu, meriti vreme, bočni položaj po prestanku'
          ],
          answer: 3,
          explain: 'Tokom napada se pacijent samo štiti od povrede i meri se trajanje. Predmeti u ustima lome zube i ugrožavaju disajni put, a sputavanje izaziva povrede.'
        },
        {
          q: 'Trudnica u 34. nedelji, TA 170/110 mmHg, glavobolja, zatim generalizovane konvulzije. Koji je lek izbora?',
          options: [
            'Diazepam 20 mg i.v. kao jedini potreban lek',
            'Magnezijum-sulfat 4 g i.v. tokom 5–15 minuta, levi bočni položaj, hitno porodilište',
            'Fenitoin i.v. u punoj dozi zasićenja',
            'Samo antihipertenziv, konvulzije će prestati kada pritisak padne'
          ],
          answer: 1,
          explain: 'Konvulzije u trudnoći posle 20. nedelje su eklampsija dok se ne dokaže suprotno. Magnezijum-sulfat je efikasniji od diazepama i fenitoina u prekidanju i sprečavanju novih napada.'
        }
      ]
    },
    {
      id: 'hipoglikemija',
      title: 'Hipoglikemija',
      summary: 'Svaki poremećaj svesti traži glikemiju iz prsta; pri svesti šećer na usta, bez svesti glukoza i.v. ili glukagon.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kod osoba sa dijabetesom glikemija ispod 3,9 mmol/l je upozorenje, a ispod 3,0 mmol/l klinički značajna hipoglikemija. Teška hipoglikemija je ona u kojoj je pacijentu potrebna pomoć druge osobe. Najčešći uzroci su insulin i preparati sulfonilureje uz preskočen obrok, napor, alkohol ili pogoršanje bubrežne funkcije.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Adrenergički simptomi: znojenje, tremor, lupanje srca, glad, bledilo, uznemirenost',
          'Neuroglikopenija: konfuzija, usporen ili nerazgovetan govor, promena ponašanja, agresivnost, konvulzije, koma',
          'Može da imitira moždani udar (fokalni ispad), pijanstvo ili psihijatrijski poremećaj',
          'Kod dugogodišnjeg dijabetesa i uz beta-blokatore upozoravajući simptomi mogu da izostanu'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          '**Pri svesti, može da guta**: 15–20 g brzih ugljenih hidrata (tablete glukoze ili 150–200 ml voćnog soka)',
          'Ponovi merenje za 10–15 minuta; ako je glikemija i dalje ispod 4,0 mmol/l, ponovi istu količinu',
          'Kada se glikemija popravi: obrok sa složenim ugljenim hidratima (hleb, keks) da se spreči ponavljanje',
          '**Bez svesti ili ne može da guta**: ništa na usta, bočni položaj, venski put i glukoza i.v.',
          'Nema venskog puta: glukagon 1 mg i.m. ili s.c.; kada se probudi, odmah šećer na usta',
          'Kontrola glikemije na 10–15 minuta do stabilizacije; ako nema oporavka svesti uz normalnu glikemiju, traži drugi uzrok',
          'Utvrdi uzrok: greška u dozi, preskočen obrok, alkohol, novi lek, bubrežna slabost'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'glukoza i.v.', dose: '200 ml 10% ili 100 ml 20% rastvora i.v. tokom 15 minuta (20 g glukoze)', note: 'Kod srčane i bubrežne slabosti najmanja moguća zapremina. Kontrola glikemije posle 10–15 minuta, po potrebi ponoviti.' },
          { name: 'glukagon', dose: '1 mg i.m. ili s.c.; deca ispod 25 kg 0,5 mg', note: 'Slabiji efekat kod terapije sulfonilurejom, hroničnog alkoholizma i hronične bolesti jetre.' },
          { name: 'glukoza 10% kod dece', dose: '2 ml/kg i.v. (0,2 g/kg), zatim kontrola glikemije', note: 'Bolnička preporuka ISPAD; van bolnice glukagon i.m. ili s.c.' },
          { name: 'tiamin', dose: '100 mg i.v. kod alkoholičara i pothranjenih', note: 'Daje se uz glukozu (Nacionalni vodič).' }
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Hipoglikemija izazvana preparatima sulfonilureje ili dugodelujućim insulinom: vraća se satima, potrebna opservacija',
          'Nepotpun oporavak svesti, konvulzije ili neurološki ispad posle korekcije glikemije',
          'Namerno predoziranje insulinom ili tabletama, nepoznat uzrok, hipoglikemija kod osobe bez dijabetesa',
          'Stariji i usamljeni, bubrežna ili jetrena slabost, alkoholisanost, trudnoća',
          'Kod kuće može ostati pacijent na insulinu sa jasnim uzrokom, potpunim oporavkom, obrokom i nadzorom druge osobe'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Glikemija iz prsta je deo pregleda svakog pacijenta sa poremećajem svesti, konvulzijama ili fokalnim ispadom',
          'Masna hrana (čokolada) usporava porast glikemije: za korekciju se koristi čista glukoza ili sok',
          'Kratak efekat i.v. glukoze kod sulfonilureje vara: pacijent se probudi, pa ponovo utone za sat ili dva',
          'Ponavljane hipoglikemije su razlog da se javi izabranom lekaru radi korekcije terapije'
        ] }
      ],
      sources: [
        { name: 'JBDS 01 – Hospital Management of Hypoglycaemia in Adults (2023)', url: 'https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_01_Hypo_Guideline_with_QR_code_January_2023.pdf' },
        { name: 'ADA Standards of Care 2025 – 6. Glycemic Goals and Hypoglycemia', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11635034/' },
        { name: 'ISPAD 2022 – Hypoglycemia in children and adolescents', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10107518/' }
      ],
      questions: [
        {
          q: 'Muškarac 54 god. na insulinu, bez svesti, znojav. Glikemija 1,9 mmol/l, kanila je plasirana u kubitalnu venu. Šta daješ?',
          options: [
            'Glukozu i.v.: 200 ml 10% rastvora tokom 15 minuta',
            'Glukagon 1 mg i.m. pa sačekati 15 minuta pre i.v. terapije',
            'Zaslađen sok u usta uz pridržavanje glave',
            'Infuziju 0,9% NaCl 500 ml i hitan transport'
          ],
          answer: 0,
          explain: 'Kada postoji venski put, i.v. glukoza je najbrža i najpouzdanija. Glukagon je rezerva kada vene nema, a davanje tečnosti na usta pacijentu bez svesti vodi u aspiraciju.'
        },
        {
          q: 'Žena 32 god. sa dijabetesom tipa 1 dolazi u ambulantu drhtava i znojava, orijentisana. Glikemija 3,1 mmol/l. Šta je ispravno?',
          options: [
            'Tabla čokolade i kontrola glikemije za sat vremena',
            'Glukoza 50% 50 ml i.v. kroz kanilu na šaci',
            'Brzi ugljeni hidrati 15–20 g na usta, kontrola za 15 minuta',
            'Preskočiti sledeću dozu insulina i otpustiti kući'
          ],
          answer: 2,
          explain: 'Pacijent pri svesti dobija 15–20 g brzih ugljenih hidrata, uz ponovno merenje za 10–15 minuta i ponavljanje po potrebi. Masti usporavaju porast glikemije, a i.v. terapija nije potrebna ako može da guta.'
        },
        {
          q: 'Žena 79 god. na glibenklamidu, nađena konfuzna sa glikemijom 2,2 mmol/l. Posle i.v. glukoze je budna i želi da ostane kod kuće. Šta radiš?',
          options: [
            'Ostaviti je kod kuće uz obrok i savet da meri šećer',
            'Transport u bolnicu radi opservacije jer se hipoglikemija vraća',
            'Dati glukagon 1 mg i.m. profilaktički i otpustiti',
            'Prepoloviti dozu leka i zakazati kontrolu za sedam dana'
          ],
          answer: 1,
          explain: 'Preparati sulfonilureje deluju dugo, posebno kod starijih i uz slabiju bubrežnu funkciju, pa se hipoglikemija ponavlja satima. Potrebna je bolnička opservacija uz kontrole glikemije.'
        },
        {
          q: 'Pothranjen muškarac sa hroničnim alkoholizmom ima glikemiju 1,7 mmol/l i ne reaguje. Šta treba znati o glukagonu u ovoj situaciji?',
          options: [
            'Efikasniji je od i.v. glukoze i treba ga dati prvi',
            'Kod alkoholičara se daje u dozi od 5 mg i.m.',
            'Sme se dati isključivo intravenski',
            'Efekat je slab jer su rezerve glikogena iscrpljene, prioritet je i.v. glukoza'
          ],
          answer: 3,
          explain: 'Glukagon je manje efikasan kod hroničnog alkoholizma i bolesti jetre jer deluje preko rezervi glikogena. Potrebna je i.v. glukoza uz tiamin 100 mg.'
        }
      ]
    },
    {
      id: 'dka-hhs',
      title: 'Dijabetesna ketoacidoza i hiperosmolarno stanje',
      summary: 'Hiperglikemija sa dehidracijom: na terenu se nadoknađuje tečnost, insulin i kalijum se rešavaju u bolnici.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: '**DKA** je trijada hiperglikemije, ketoze i metaboličke acidoze, najčešće kod tipa 1, razvija se za sate do dan-dva. **HHS** se javlja kod starijih sa tipom 2, razvija se danima, sa veoma visokom glikemijom, teškom dehidracijom i poremećajem svesti, bez značajne ketoze. Oba stanja zahtevaju bolničko lečenje; na terenu je ključna nadoknada tečnosti.' },
        { type: 'list', title: 'Prepoznavanje', items: [
          'DKA: žeđ, poliurija, mučnina, povraćanje, **bol u trbuhu**, duboko ubrzano (Kusmaulovo) disanje, zadah na aceton, dehidracija',
          'DKA kriterijumi: glikemija 11,1 mmol/l i više ili poznat dijabetes; ketoni u krvi 3,0 mmol/l i više ili ketonurija 2+ i više; pH ispod 7,30 ili bikarbonati ispod 18 mmol/l',
          'HHS: izrazita hiperglikemija (aparat često pokazuje HI), hiperosmolarnost i teška dehidracija, poremećaj svesti, bez značajne ketoze i acidoze',
          '**Euglikemijska DKA**: kod pacijenata na SGLT2 inhibitorima, u trudnoći i pri smanjenom unosu hrane glikemija može biti i ispod 11,1 mmol/l',
          'Okidači: infekcija, izostavljena doza insulina, novootkriveni dijabetes, infarkt miokarda, moždani udar, kortikosteroidi'
        ] },
        { type: 'steps', title: 'Postupak na terenu', items: [
          'ABCDE, SpO2, TA, puls, temperatura, stanje svesti; kiseonik kod hipoksije',
          'Glikemija iz prsta; ketoni u krvi ili urinu ako je traka dostupna',
          'Venski put (po mogućstvu dva) i **0,9% NaCl ili balansirani kristaloid**: kod odraslih bez srčane i bubrežne slabosti 500–1000 ml/h u prva 2–4 sata',
          'Stariji, srčana ili bubrežna slabost: sporija nadoknada uz proveru disanja i auskultaciju pluća',
          'EKG: znaci hiperkalemije ili hipokalemije, ishemija kao okidač',
          'Traži okidač: temperatura, pluća, urin, koža i stopala, bol u grudima',
          'Hitan transport uz monitoring; pacijenta sa povraćanjem i poremećajem svesti u bočnom položaju'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: '0,9% NaCl ili balansirani kristaloid', dose: '500–1000 ml/h i.v. u prva 2–4 sata kod odraslih bez srčane i bubrežne slabosti', note: 'Dalje prema pritisku, pulsu, bilansu tečnosti i natrijumu. Oprez kod starijih i srčane slabosti.' },
          { name: 'tečnost kod dece', dose: 'Izotoni kristaloid i.v. oprezno, prema pedijatrijskom protokolu (ISPAD)', note: 'Kod dece postoji rizik od edema mozga; rano se javi pedijatru i ne daj insulin na terenu.' },
          { name: 'insulin', dose: 'Ne daje se na terenu; u bolnici kontinuirana i.v. infuzija oko 0,1 j/kg/h posle provere kalijuma', note: 'Ako je kalijum ispod 3,5 mmol/l, insulin se odlaže dok se kalijum ne nadoknadi, zbog rizika od opasne hipokalemije.' },
          { name: 'natrijum-bikarbonat', dose: 'Ne daje se rutinski', note: 'Acidoza se popravlja tečnošću i insulinom.' }
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Poremećaj svesti, hipotenzija, izražena tahikardija, hipoksija',
          'Uporno povraćanje i nemogućnost uzimanja tečnosti kod deteta ili mlade osobe sa tipom 1',
          'Dete sa glavoboljom, usporavanjem pulsa ili pogoršanjem svesti tokom lečenja: sumnja na edem mozga',
          'Trudnica sa ketozom, bez obzira na vrednost glikemije',
          'Bol u trbuhu i povraćanje kod pacijenta na SGLT2 inhibitoru, čak i uz skoro normalnu glikemiju'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Svaka sumnja na DKA ili HHS: hitno u bolnicu, sanitetom, sa započetom infuzijom',
          'Novootkrivena hiperglikemija sa ketonurijom, mršavljenjem ili povraćanjem, posebno kod dece i mladih: istog dana',
          'Hiperglikemija bez ketoze, bez dehidracije i sa urednim opštim stanjem: korekcija terapije kod izabranog lekara, ne hitna služba'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Bol u trbuhu i povraćanje kod mlade osobe: izmeri glikemiju pre nego što pomisliš na hirurško oboljenje',
          'Tečnost je prva terapija; sama nadoknada volumena snižava glikemiju',
          'Rutinsko davanje bikarbonata nije preporučeno: acidozu popravljaju tečnost i insulin',
          'HHS se leči pre svega nadoknadom tečnosti; pacijent je obično stariji, pa nadoknađuj uz stalnu procenu opterećenja'
        ] }
      ],
      sources: [
        { name: 'ADA/EASD/JBDS 2024 – Hyperglycaemic crises in adults with diabetes: a consensus report', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/' },
        { name: 'Nacionalni vodič dobre kliničke prakse za prehospitalno zbrinjavanje hitnih stanja (Ministarstvo zdravlja RS)', url: 'https://www.batut.org.rs/download/nacionalni%20vodici/siraVerzijaVodicaZaPrehospitalnoZbrinjavanjeHitnihStanja.pdf' }
      ],
      questions: [
        {
          q: 'Devojka 22 god. sa dijabetesom tipa 1 povraća od jutros, diše duboko i ubrzano. Glikemija 28 mmol/l, TA 95/60 mmHg, puls 118/min. Koji je prvi terapijski korak na terenu?',
          options: [
            'Brzodelujući insulin 10 jedinica s.c.',
            'Natrijum-bikarbonat 8,4% 50 ml i.v.',
            'Metoklopramid 10 mg i.m. i savet da pije više tečnosti',
            'Izotoni kristaloid 500–1000 ml/h i hitan transport'
          ],
          answer: 3,
          explain: 'U DKA je prvi i najvažniji korak nadoknada volumena izotonim rastvorom. Insulin se uvodi u bolnici posle provere kalijuma, a bikarbonat se rutinski ne daje.'
        },
        {
          q: 'Zašto se insulin ne daje na terenu pacijentu sa sumnjom na DKA?',
          options: [
            'Zato što insulin ne deluje u kiseloj sredini',
            'Zato što bez poznatog kalijuma može izazvati opasnu hipokalemiju, a prioritet je tečnost',
            'Zato što insulin kod dehidriranih izaziva edem pluća',
            'Zato što je insulin kontraindikovan kod pacijenta koji povraća'
          ],
          answer: 1,
          explain: 'Insulin uvodi kalijum u ćelije; ako je kalijum ispod 3,5 mmol/l, insulin se odlaže dok se ne nadoknadi. Zato se prvo daje tečnost i proverava kalijum, pa tek onda uvodi insulin.'
        },
        {
          q: 'Muškarac 58 god. na empagliflozinu ima povraćanje, bol u trbuhu i ubrzano disanje. Glikemija 10,5 mmol/l. Kako tumačiš nalaz?',
          options: [
            'Glikemija ispod 11 mmol/l isključuje ketoacidozu',
            'Verovatno gastroenteritis, dovoljna je oralna rehidracija',
            'Moguća euglikemijska ketoacidoza: ketoni i hitno u bolnicu',
            'Treba povećati dozu empagliflozina zbog loše regulacije'
          ],
          answer: 2,
          explain: 'SGLT2 inhibitori mogu izazvati ketoacidozu uz normalnu ili blago povišenu glikemiju. Ključ je klinička slika i ketoni, a lek se odmah obustavlja.'
        },
        {
          q: 'Muškarac 81 god. sa dijabetesom tipa 2, danima više mokri i slabije pije, sada somnolentan. Aparat pokazuje HI, ketoni u urinu u tragu, jezik suv, TA 100/60 mmHg. Šta je ispravno?',
          options: [
            'Sumnja na hiperosmolarno stanje: oprezna nadoknada 0,9% NaCl i hitan transport',
            'Dijabetesna ketoacidoza: bolus kratkodelujućeg insulina i.v.',
            'Moždani udar: bez infuzije, samo transport',
            'Infuzija 5% glukoze radi razblaženja krvi'
          ],
          answer: 0,
          explain: 'Veoma visoka glikemija, teška dehidracija i poremećaj svesti bez značajne ketoze kod starije osobe govore za HHS. Leči se pre svega tečnošću uz praćenje opterećenja; insulin se uvodi kasnije u bolnici.'
        }
      ]
    },
    {
      id: 'sinkopa',
      title: 'Sinkopa i kolaps',
      summary: 'Većina sinkopa je bezazlena; posao je da se anamnezom, pregledom i EKG-om izdvoje kardijalne i druge opasne.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Sinkopa je kratkotrajan gubitak svesti zbog prolazne globalne hipoperfuzije mozga, sa brzim početkom i spontanim potpunim oporavkom. Deli se na refleksnu (vazovagalnu, situacionu), ortostatsku i kardijalnu. Kardijalna sinkopa nosi rizik od iznenadne smrti i zahteva hitnu bolničku obradu. Početna procena su anamneza, pregled sa merenjem pritiska ležeći i stojeći i EKG sa 12 odvoda.' },
        { type: 'steps', title: 'Postupak', items: [
          'Ležeći položaj sa podignutim nogama; provera disanja i pulsa, ABCDE',
          'Vitalni parametri: TA na obe ruke, puls, SpO2, **glikemija**',
          '**EKG sa 12 odvoda svakom pacijentu** sa sinkopom',
          'Anamneza od pacijenta i svedoka: položaj i aktivnost, okidač, prodromi, trajanje, boja kože, trzaji, oporavak, lekovi, porodična anamneza',
          'Ortostatski test: TA ležeći, zatim tokom 3 minuta aktivnog stajanja',
          'Pregled: šum na srcu, znaci krvarenja (bledilo, melena), trbuh, neurološki nalaz, povrede nastale pri padu',
          'Stratifikuj rizik i odluči: kući uz edukaciju ili hitno u bolnicu uz monitoring'
        ] },
        { type: 'flags', title: 'Znaci visokog rizika', items: [
          'Sinkopa **tokom napora ili u ležećem položaju**, bez prodroma ili sa prethodnim lupanjem srca',
          'Bol u grudima, dispneja, bol u trbuhu ili leđima, nagla jaka glavobolja uz sinkopu',
          'Poznata strukturna bolest srca, srčana slabost, raniji infarkt',
          'Iznenadna srčana smrt u porodici u mlađem životnom dobu',
          'Sistolni pritisak ispod 90 mmHg, uporna bradikardija ispod 40/min, znaci krvarenja',
          'Patološki EKG'
        ] },
        { type: 'list', title: 'EKG nalazi koji upućuju na aritmijsku sinkopu', items: [
          'AV blok II stepena tipa Mobitz II ili III stepena; sinusna bradikardija ispod 40/min ili pauze duže od 3 s',
          'Bifascikularni blok ili QRS širi od 120 ms',
          'Znaci ishemije ili starog infarkta',
          'Produžen ili skraćen QT interval, preekscitacija (delta talas), Brugada obrazac',
          'Komorska tahikardija, brza supraventrikularna tahikardija, znaci hipertrofije komora'
        ] },
        { type: 'list', title: 'Šta ne propustiti', items: [
          'Plućna embolija: dispneja, tahikardija, hipoksija, otok noge',
          'Krvarenje: gastrointestinalno, ruptura aneurizme aorte, **ektopična trudnoća** kod žene u reproduktivnom dobu',
          'Aortna stenoza i hipertrofična kardiomiopatija: sinkopa u naporu, šum',
          'Subarahnoidalno krvarenje: sinkopa praćena naglom glavoboljom',
          'Epileptički napad: ugriz jezika sa strane, duga postiktalna konfuzija; kratki trzaji mogući su i kod obične sinkope',
          'Lekovi: antihipertenzivi, diuretici, nitrati, alfa-blokatori, lekovi koji produžavaju QT'
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Bilo koji znak visokog rizika ili patološki EKG: hitno, sanitetom uz monitoring ritma',
          'Sinkopa sa značajnom povredom, ponavljane sinkope nejasnog uzroka, stariji sa više bolesti',
          'Nizak rizik (mlada osoba, tipičan okidač i prodromi, normalan pregled i EKG): može kući uz edukaciju',
          'Ortostatska hipotenzija: revizija terapije i hidracija kod izabranog lekara, bolnica ako je uzrok krvarenje ili teška dehidracija'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Ortostatska hipotenzija: pad sistolnog za 20 mmHg ili više, dijastolnog za 10 mmHg ili više, ili sistolni ispod 90 mmHg u roku od 3 minuta stajanja',
          'Sinkopa u naporu ili ležeći je kardijalna dok se ne dokaže suprotno',
          'Normalan EKG posle događaja ne isključuje aritmiju, ali uz tipičnu anamnezu čini kardijalni uzrok malo verovatnim',
          'Savet kod vazovagalne sinkope: prepoznati prodrome, leći ili sesti, ukrstiti noge i stegnuti mišiće, dovoljno tečnosti'
        ] }
      ],
      sources: [
        { name: 'ESC 2018 – Guidelines for the diagnosis and management of syncope', url: 'https://academic.oup.com/eurheartj/article/39/21/1883/4939241' },
        { name: 'NICE NG126 – Ectopic pregnancy: simptomi i početna procena', url: 'https://www.nice.org.uk/guidance/ng126/chapter/Symptoms-and-signs-of-ectopic-pregnancy-and-initial-assessment' }
      ],
      questions: [
        {
          q: 'Muškarac 58 god. izgubio je svest dok se peo uz stepenice, bez ikakvog upozorenja. Sada je bez tegoba, TA 130/80 mmHg. EKG: blok leve grane. Šta radiš?',
          options: [
            'Otpust kući uz savet o unosu tečnosti i soli',
            'Hitno u bolnicu uz monitoring ritma',
            'Uput za ambulantni Holter EKG u narednih mesec dana',
            'Uput za elektivni tilt test'
          ],
          answer: 1,
          explain: 'Sinkopa u naporu, bez prodroma i uz patološki EKG ima visok rizik kardijalnog uzroka (aritmija, strukturna bolest). Takav pacijent ide hitno u bolnicu uz monitoring, a ne na odloženu ambulantnu obradu.'
        },
        {
          q: 'Devojka 19 god. je u gužvi osetila mučninu i toplotu, prebledela i kratko izgubila svest; oporavila se za minut. Pregled, TA i EKG su normalni. Šta je ispravno?',
          options: [
            'Refleksna sinkopa niskog rizika: edukacija, bez hospitalizacije',
            'Hitan CT glave zbog gubitka svesti',
            'Uput za EEG i uvođenje antiepileptika',
            'Hospitalizacija na kardiologiji radi monitoringa'
          ],
          answer: 0,
          explain: 'Tipičan okidač, prodromi, brz oporavak, mlada osoba bez bolesti srca i normalan EKG odgovaraju vazovagalnoj sinkopi. Dalja obrada nije potrebna, važna je edukacija o prepoznavanju prodroma.'
        },
        {
          q: 'Kako se definiše ortostatska hipotenzija pri testu aktivnog stajanja?',
          options: [
            'Pad sistolnog pritiska za najmanje 10 mmHg odmah po ustajanju',
            'Porast pulsa za najmanje 10 otkucaja u minuti pri stajanju',
            'Pad sistolnog pritiska za najmanje 40 mmHg posle 10 minuta stajanja',
            'Pad sistolnog za 20 ili dijastolnog za 10 mmHg, ili sistolni ispod 90, do 3. minuta'
          ],
          answer: 3,
          explain: 'Pritisak se meri ležeći, a zatim tokom 3 minuta aktivnog stajanja. Značajan je pad sistolnog za najmanje 20 mmHg, dijastolnog za najmanje 10 mmHg ili sistolni ispod 90 mmHg.'
        },
        {
          q: 'Žena 28 god. kolabirala je kod kuće. Žali se na bol u donjem trbuhu, menstruacija kasni tri nedelje. Puls 120/min, TA 90/55 mmHg, bleda. Šta je sledeći korak?',
          options: [
            'Vazovagalna sinkopa: podići noge i opservirati u ambulanti',
            'EKG, pa otpust kući ako je nalaz uredan',
            'Sumnja na rupturu ektopične trudnoće: dve venske linije i hitan transport ginekologu',
            'Infuzija 5% glukoze i kontrola pritiska za sat vremena'
          ],
          answer: 2,
          explain: 'Kolaps sa bolom u trbuhu i znacima hipovolemije kod žene u reproduktivnom dobu je ruptura ektopične trudnoće dok se ne dokaže suprotno. Potreban je hitan transport uz najavu, bez zadržavanja radi dijagnostike.'
        }
      ]
    },
    {
      id: 'trovanja',
      title: 'Akutna trovanja',
      summary: 'Leči se pacijent, a ne otrov: ABCDE, glikemija, potporna terapija, antidot samo kada je indikovan.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina otrovanih se zbrinjava potpornim merama: disajni put, disanje, cirkulacija, glikemija, temperatura. Specifični antidoti na terenu su malobrojni: nalokson za opioide, kiseonik za ugljen-monoksid, atropin za organofosfate, glukoza za hipoglikemiju. Saznaj šta je, koliko i kada uzeto, ponesi ambalažu i konsultuj Centar za kontrolu trovanja VMA (Nacionalni vodič navodi telefon 011/3608-440, dostupan 24 h).' },
        { type: 'steps', title: 'Opšti pristup', items: [
          '**Bezbednost ekipe**: gas, hemikalije, igle, agresivan pacijent. Kod sumnje na ugljen-monoksid prvo iznesi pacijenta na svež vazduh',
          'ABCDE: disajni put, frekvencija disanja, SpO2, TA, puls, GCS, zenice, temperatura; kiseonik i potpora disanju po potrebi',
          '**Glikemija** svakom sa poremećajem svesti; EKG i monitoring (QRS, QT, aritmije)',
          'Anamneza i heteroanamneza: supstanca, količina, vreme, put unosa, namera, dostupni lekovi u kući; ponesi kutije i blistere',
          'Poremećaj svesti: bočni položaj, aspiracija; ne izazivati povraćanje',
          'Aktivni ugalj samo ako je indikovan; antidot prema toksidromu',
          'Transport uz monitoring; svako namerno trovanje zahteva i psihijatrijsku procenu'
        ] },
        { type: 'list', title: 'Toksidromi i česta trovanja', items: [
          '**Opioidi**: usporeno disanje, uske zenice, poremećaj svesti. Prvo ventilacija, zatim nalokson',
          '**Benzodiazepini**: pospanost, ataksija, nerazgovetan govor, obično očuvani vitalni parametri; opasni su u kombinaciji sa alkoholom i opioidima',
          '**Alkohol**: bočni položaj, glikemija, utopljavanje, tiamin; uvek traži povredu glave i druge uzroke poremećaja svesti',
          '**Paracetamol**: prvih 24 h samo bledilo, mučnina, povraćanje; oštećenje jetre se uočava posle 12–48 h. Rizično je 10 g i više, uz faktore rizika već 5 g',
          '**Ugljen-monoksid**: glavobolja, mučnina, vrtoglavica, konfuzija, više ukućana sa istim tegobama zimi; pulsni oksimetar je lažno normalan',
          '**Organofosfati**: znojenje, salivacija, suzenje, bronhoreja, uske zenice, bradikardija, fascikulacije; dekontaminacija i atropin',
          '**Korozivi** (kiseline, baze): ne izazivati povraćanje, bez aktivnog uglja; hitno u bolnicu'
        ] },
        { type: 'drugs', title: 'Antidoti i terapija', items: [
          { name: 'nalokson', dose: '0,4–2 mg i.v. ili i.m., ponavljati na 2–3 minuta do adekvatnog disanja; u prvoj pomoći intranazalno', note: 'Kod zavisnika počni nižom dozom (Nacionalni vodič: 0,1 mg i.v.) i titriraj da izbegneš apstinenciju. Cilj je disanje, ne potpuno buđenje.' },
          { name: 'kiseonik 100%', dose: 'Preko maske sa rezervoarom kod trovanja ugljen-monoksidom, dok simptomi ne prođu (obično 4–5 sati)', note: 'Hiperbarična oksigenacija se razmatra kod gubitka svesti, neuroloških ili srčanih znakova i teške acidoze, a kod trudnica je terapija izbora.' },
          { name: 'aktivni ugalj', dose: '0,5–1 g/kg p.o. kod odraslih i dece; najefikasniji u prvom satu od ingestije', note: 'Samo uz očuvan ili zaštićen disajni put. Ne vezuje litijum, teške metale i alkohole; kontraindikovan kod koroziva i ugljovodonika.' },
          { name: 'atropin', dose: '1–5 mg i.v., ponavljati na 3–5 minuta do povlačenja bronhijalne hipersekrecije; deca 50 mikrograma/kg', note: 'Kod trovanja organofosfatima i karbamatima (Nacionalni vodič). Cilj je povlačenje bronhijalne sekrecije.' },
          { name: 'flumazenil', dose: '0,1–0,3 mg i.v., titrirati na 60 sekundi do buđenja ili ukupno 2 mg (Nacionalni vodič)', note: 'Benzodiazepini retko dovode do respiratorne insuficijencije, pa je potpora disanja najčešće dovoljna. Oprez kod mešovitih trovanja i hroničnih korisnika.' },
          { name: 'N-acetilcistein', dose: 'Bolnička terapija trovanja paracetamolom, i.v. po protokolu', note: 'Efikasnost naglo opada ako se započne kasnije od 8 h; nivo paracetamola se određuje najranije 4 h od ingestije.' }
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Depresija disanja, hipoksija, koma',
          'Konvulzije, hipertermija, hipotenzija, aritmije, širok QRS ili produžen QT',
          'Trovanje ugljen-monoksidom sa gubitkom svesti, bolom u grudima ili u trudnoći',
          'Ingestija korozivnog sredstva, metanola, antifriza, pesticida, gljiva',
          'Preparati sa produženim oslobađanjem, lekovi za srce, antidijabetici, gvožđe kod dece',
          'Dete sa bilo kojom nepoznatom ingestijom; svaki pokušaj samoubistva'
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Svako namerno trovanje, bez obzira na količinu i trenutno stanje',
          'Svi kojima je dat nalokson: dejstvo antidota može proći pre dejstva opioida',
          'Paracetamol u potencijalno toksičnoj ili nepoznatoj dozi, i kada nema simptoma',
          'Ugljen-monoksid: svi sa simptomima; proveri i ostale ukućane',
          'Kod kuće može ostati samo slučajna ingestija sigurno netoksične količine, posle konsultacije sa centrom za trovanja'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod opioida pacijenta ubija hipoventilacija: balon-maska i kiseonik idu pre naloksona',
          'Normalan SpO2 ne isključuje trovanje ugljen-monoksidom: obični pulsni oksimetar ne razlikuje karboksihemoglobin',
          'Asimptomatski pacijent posle paracetamola nije bezbedan pacijent',
          'Ispiranje želuca se ne radi rutinski; povraćanje se ne izaziva kod poremećaja svesti, koroziva i ugljovodonika',
          'Pijan pacijent sa poremećajem svesti ima hipoglikemiju ili povredu glave dok se ne dokaže suprotno'
        ] }
      ],
      sources: [
        { name: 'Nacionalni vodič dobre kliničke prakse za prehospitalno zbrinjavanje hitnih stanja (Ministarstvo zdravlja RS)', url: 'https://www.batut.org.rs/download/nacionalni%20vodici/siraVerzijaVodicaZaPrehospitalnoZbrinjavanjeHitnihStanja.pdf' },
        { name: 'ERC 2021 – Cardiac arrest in special circumstances (zvanični nemački prevod, otvoren pristup)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8190767/' },
        { name: 'CDC – Clinical Guidance for Carbon Monoxide Poisoning', url: 'https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html' },
        { name: 'ALIMS – sažetak karakteristika leka (paracetamol, odeljak 4.9 Predoziranje)', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-03464-16-001.pdf' }
      ],
      questions: [
        {
          q: 'Mladić nađen u stanu: diše 6 puta u minuti, cijanotičan, zenice tačkaste, pored njega špric. Šta je prvi postupak?',
          options: [
            'Flumazenil 0,5 mg i.v. u bolusu',
            'Aktivni ugalj 50 g preko sonde',
            'Ventilacija balon-maskom sa kiseonikom, zatim nalokson titrirano do adekvatnog disanja',
            'Izazvati povraćanje i postaviti u bočni položaj'
          ],
          answer: 2,
          explain: 'Kod trovanja opioidima smrt nastaje zbog hipoventilacije, pa je prvo potpora disanju, a zatim nalokson 0,4–2 mg i.v., i.m. ili intranazalno. Cilj je dovoljno disanje, a ne nagla potpuna reverzija.'
        },
        {
          q: 'Posle naloksona pacijent je budan, diše 16/min i traži da ode. Šta je ispravno?',
          options: [
            'Pustiti ga jer je antidot delovao i vitalni parametri su uredni',
            'Dati još 2 mg naloksona i.m. preventivno, pa otpustiti',
            'Dati aktivni ugalj 50 g, pa otpustiti uz pratnju',
            'Transport i opservacija jer nalokson deluje kraće od opioida'
          ],
          answer: 3,
          explain: 'Dejstvo naloksona može proći pre dejstva opioida, posebno dugodelujućih kao što je metadon, pa se depresija disanja može vratiti. Potrebna je opservacija uz praćenje disanja.'
        },
        {
          q: 'U januaru četvoro ukućana iz kuće sa peći na čvrsto gorivo ima glavobolju, mučninu i vrtoglavicu. SpO2 kod svih je 98–99%. Šta radiš?',
          options: [
            'Iznosim sve napolje, kiseonik 100% preko maske sa rezervoarom, transport svih',
            'Normalan SpO2 isključuje trovanje gasom, verovatno je virusna infekcija',
            'Analgetik, provetravanje prostorija i savet da se jave ako ne prođe',
            'Kiseonik 2 l/min preko nazalne kanile samo onome sa najjačim tegobama'
          ],
          answer: 0,
          explain: 'Više osoba sa istim nespecifičnim tegobama u prostoru sa pećima je trovanje ugljen-monoksidom dok se ne dokaže suprotno. Običan pulsni oksimetar karboksihemoglobin čita kao oksihemoglobin, pa je SpO2 lažno normalan.'
        },
        {
          q: 'Devojka 17 god. (55 kg) popila je pre 3 sata 30 tableta paracetamola od 500 mg. Nema tegoba, vitalni parametri uredni. Šta je ispravno?',
          options: [
            'Otpust kući jer je bez simptoma, kontrola sutra',
            'Hitno u bolnicu radi određivanja nivoa paracetamola i N-acetilcisteina',
            'Aktivni ugalj 50 g u ambulanti i otpust uz nadzor roditelja',
            'Kontrola transaminaza kod izabranog lekara za sedam dana'
          ],
          answer: 1,
          explain: 'Uzela je 15 g, a oštećenje jetre je moguće već od 10 g. Rana faza je skoro bez simptoma; nivo se određuje najranije 4 sata od ingestije, a efikasnost antidota naglo opada posle 8 sati. Potrebna je i psihijatrijska procena.'
        }
      ]
    },
    {
      id: 'sepsa-meningitis',
      title: 'Sepsa i sumnja na meningitis',
      summary: 'Infekcija sa poremećajem svesti, tahipnejom ili hipotenzijom je sepsa dok se ne dokaže suprotno; osip koji ne bledi traži antibiotik odmah.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Sepsa je životno ugrožavajuća disfunkcija organa izazvana poremećenim odgovorom na infekciju; septični šok je sepsa sa hipotenzijom koja ne reaguje na tečnost. Na terenu nema laktata ni hemokultura: dijagnoza je klinička, a zadatak je rano prepoznavanje, kiseonik, tečnost i brz transport. Kod sumnje na meningokoknu bolest antibiotik se daje pre transporta.' },
        { type: 'list', title: 'Rano prepoznavanje', items: [
          '**qSOFA** (2 ili više = visok rizik): frekvencija disanja 22/min i više, izmenjeno stanje svesti, sistolni pritisak 100 mmHg i manje',
          'qSOFA ima nisku osetljivost i ne služi kao jedini skrining: nizak skor ne isključuje sepsu, koristi i ukupnu kliničku sliku ili NEWS2',
          'Ostali znaci: tahikardija, povišena temperatura ili temperatura ispod 36 stepeni, marmorizovana ili pepeljasta koža, cijanoza, smanjeno mokrenje, nova potreba za kiseonikom',
          'Stariji i imunokompromitovani često nemaju temperaturu: nova konfuzija ili pad mogu biti jedini znak',
          'Traži izvor: pluća, urinarni trakt, trbuh, koža i meka tkiva, kateteri, CNS',
          'Rizične grupe: veoma stari i krhki, oslabljen imunitet (bolest ili lekovi, uključujući kortikosteroide), trauma, operacija ili invazivna procedura u poslednjih 6 nedelja'
        ] },
        { type: 'list', title: 'Sumnja na meningitis i meningokoknu bolest', items: [
          'Temperatura, glavobolja, ukočen vrat, fotofobija, povraćanje, izmenjeno stanje svesti; svi znaci retko su prisutni zajedno',
          '**Osip koji ne bledi na pritisak** (petehije, purpura) uz temperaturu: meningokokna sepsa dok se ne dokaže suprotno',
          'Test čašom: pritisni providnu čašu na osip; ako se vidi kroz staklo, ne bledi',
          'Rani nespecifični znaci: neobjašnjiv bol u udovima, leđima ili trbuhu, hladne šake i stopala, marmorizovana koža',
          'Odojče: razdražljivost ili pospanost, odbijanje obroka, napeta fontanela, plač visokog tona; ukočen vrat često izostaje'
        ] },
        { type: 'steps', title: 'Postupak na terenu', items: [
          'ABCDE; kiseonik do SpO2 94–98% (88–92% kod rizika od hiperkapnije)',
          'Venski put, po mogućstvu dva; glikemija; temperatura; EKG i monitoring',
          'Visok rizik ili znaci hipoperfuzije: **kristaloid u bolusima od 250 ml tokom 10–15 minuta**, procena posle svakog, do 1000 ml (NICE); SSC predlaže najmanje 30 ml/kg u prva 3 h',
          'Posle svakog bolusa proveri disanje i auskultuj pluća; oprez kod srčane i bubrežne slabosti',
          'Jaka sumnja na meningokoknu bolest: **ceftriakson što pre**, i.v. ili i.m., osim ako bi to odložilo transport',
          'Antipiretik po potrebi; ne zadržavaj se radi dijagnostike',
          'Hitan transport uz najavu: sumnja na sepsu, vitalni parametri, data terapija'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'ceftriakson', dose: '2 g i.v. ili i.m. odrasli; deca 80–100 mg/kg (najviše 4 g), jednokratno pre transporta', note: 'Kod jake sumnje na meningokoknu bolest. Alternativa je benzilpenicilin i.v. ili i.m. Ne davati kod teške alergije na ove antibiotike. Zabeleži vreme davanja.' },
          { name: 'kristaloid', dose: 'Bolusi od 250 ml i.v. tokom 10–15 minuta, do 1000 ml uz procenu posle svakog; dalje prema odgovoru', note: 'Balansirani rastvor, ili 0,9% NaCl ako balansirani nije dostupan. Vazopresor prve linije u bolnici je noradrenalin.' },
          { name: 'kiseonik', dose: 'Titrirati do SpO2 94–98%', note: 'Kod rizika od hiperkapnijske respiratorne insuficijencije cilj je 88–92%.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Svaka sumnja na sepsu, meningitis ili meningokoknu bolest: hitno, sanitetom uz pratnju lekara',
          'Febrilni neutropenični pacijent (hemioterapija): hitno u bolnicu i bez drugih znakova',
          'Infekcija sa novom konfuzijom, tahipnejom ili hipotenzijom kod starije osobe',
          'Meningokokna bolest se prijavljuje epidemiološkoj službi, koja određuje hemioprofilaksu za bliske kontakte'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod petehijalnog osipa sa temperaturom antibiotik se ne odlaže zbog lumbalne punkcije ni zbog hemokultura',
          'Odsustvo ukočenog vrata ne isključuje meningitis, posebno kod odojčadi i starih',
          'Kod septičnog šoka i velike verovatnoće sepse antibiotik se daje odmah, idealno u prvom satu od prepoznavanja: brz transport i najava',
          'Broj respiracija se broji, ne procenjuje: ulazi i u qSOFA i u NEWS2'
        ] }
      ],
      sources: [
        { name: 'Surviving Sepsis Campaign 2021 – International Guidelines', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8486643/' },
        { name: 'NICE NG253 – Suspected sepsis in people aged 16 or over: managing suspected sepsis', url: 'https://www.nice.org.uk/guidance/ng253/chapter/Managing-suspected-sepsis' },
        { name: 'NICE NG240 – Meningitis (bacterial) and meningococcal disease', url: 'https://www.nice.org.uk/guidance/ng240/chapter/Recommendations' },
        { name: 'ALIMS – sažetak karakteristika leka, ceftriakson', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-00434-18-002.pdf' }
      ],
      questions: [
        {
          q: 'Mladić 18 god., temperatura 39,5 stepeni, glavobolja, pospan, po nogama petehije koje ne blede na pritisak. TA 95/55 mmHg. Do bolnice ima 40 minuta. Šta radiš?',
          options: [
            'Ceftriakson 2 g i.v. ili i.m. odmah, tečnost, kiseonik i hitan transport',
            'Antipiretik i kontrola sutra ako se osip proširi',
            'Hitan transport bez antibiotika da se ne poremeti nalaz likvora',
            'Amoksicilin 1 g p.o. i uput infektologu istog dana'
          ],
          answer: 0,
          explain: 'Temperatura sa osipom koji ne bledi je meningokokna sepsa dok se ne dokaže suprotno, a stanje se pogoršava iz sata u sat. Antibiotik se daje pre transporta, ne čeka se lumbalna punkcija.'
        },
        {
          q: 'Koja tri parametra čine qSOFA skor?',
          options: [
            'Temperatura preko 38 stepeni, puls preko 90/min, leukocitoza',
            'Frekvencija disanja 22/min i više, izmenjena svest, sistolni pritisak 100 mmHg i manje',
            'Frekvencija disanja preko 30/min, sistolni pritisak ispod 90 mmHg, SpO2 ispod 90%',
            'GCS ispod 8, laktat preko 4 mmol/l, diureza ispod 0,5 ml/kg/h'
          ],
          answer: 1,
          explain: 'qSOFA čine tahipneja 22/min i više, izmenjeno stanje svesti i sistolni pritisak 100 mmHg i manje; dva ili više ukazuju na visok rizik. Prva opcija su stari SIRS kriterijumi.'
        },
        {
          q: 'Žena 76 god. sa dizurijom i temperaturom od juče, sada konfuzna. TA 85/50 mmHg, puls 115/min, disanje 26/min, SpO2 91%. Šta je ispravno?',
          options: [
            'Ciprofloksacin p.o. i kontrola kod izabranog lekara za dva dana',
            'Furosemid 40 mg i.v. zbog tahipneje i niske saturacije',
            'Kiseonik, venski put, bolus kristaloida 250 ml uz ponovnu procenu, hitan transport',
            'Antipiretik i opservacija dva sata u ambulanti'
          ],
          answer: 2,
          explain: 'Infekcija sa hipotenzijom, tahipnejom i konfuzijom je sepsa (qSOFA 3). Potrebni su kiseonik, tečnost u bolusima uz procenu opterećenja i hitan transport radi antibiotika i.v. i dalje obrade.'
        },
        {
          q: 'Muškarac 67 god. sa pneumonijom ima qSOFA 1 (disanje 24/min), ali je marmorizovane kože, puls 125/min i deluje teško bolesno. Kako postupaš?',
          options: [
            'qSOFA manji od 2 isključuje sepsu, lečiti ambulantno antibiotikom',
            'Ponoviti qSOFA sutra i tada odlučiti o upućivanju',
            'Uraditi sedimentaciju i krvnu sliku, pa odlučiti prema nalazu',
            'Nizak qSOFA ne isključuje sepsu: lečiti prema kliničkoj slici i hitno uputiti'
          ],
          answer: 3,
          explain: 'qSOFA je specifičan ali slabo osetljiv i ne preporučuje se kao jedini alat za skrining. Znaci hipoperfuzije i opšti utisak teško bolesnog pacijenta dovoljni su za hitno upućivanje.'
        }
      ]
    },
    {
      id: 'akutni-abdomen',
      title: 'Akutni abdomen',
      summary: 'Ne traži tačnu dijagnozu nego odgovor na pitanje: da li ovaj pacijent mora hirurgu odmah.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutni abdomen je naglo nastao bol u trbuhu koji može zahtevati hitnu hiruršku intervenciju. U ambulanti i na terenu cilj je prepoznati peritonealni nadražaj, krvarenje i opstrukciju, isključiti vanabdominalne uzroke (infarkt miokarda, ketoacidoza, pneumonija) i bezbedno uputiti pacijenta. Stari, deca, trudnice i pacijenti na kortikosteroidima imaju atipičnu sliku.' },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Hipotenzija, tahikardija, bledilo, hladan znoj ili sinkopa uz bol u trbuhu',
          'Trbuh tvrd kao daska, defans, povratna osetljivost, bol pri kašlju i potresu',
          'Bol nesrazmerno jak u odnosu na nalaz na trbuhu',
          'Povraćanje žuči ili fekulentnog sadržaja, distenzija, izostanak stolice i vetrova',
          'Hematemeza, melena ili sveža krv u stolici',
          'Starija osoba sa novim bolom u trbuhu; žena u reproduktivnom dobu sa bolom u donjem trbuhu',
          'Bolna, napeta kila koja se ne može vratiti; nagli bol u testisu'
        ] },
        { type: 'list', title: 'Šta ne propustiti', items: [
          '**Ruptura aneurizme abdominalne aorte**: stariji, pušači, hipertoničari; nagli bol u trbuhu, slabini ili leđima, hipotenzija ili kolaps, pulsirajuća masa; imitira renalnu koliku',
          '**Ektopična trudnoća**: svaka žena u reproduktivnom dobu sa bolom u trbuhu, izostankom menstruacije ili krvarenjem; test na trudnoću',
          '**Perforacija šupljeg organa**: nagao bol kao ubod nožem, trbuh kao daska, pacijent leži nepomično',
          '**Ileus**: grčeviti bolovi, povraćanje, distenzija, nema stolice ni vetrova; ožiljci od operacija, pregled kilnih otvora',
          '**Apendicitis**: bol koji se seli iz epigastrijuma u desni donji kvadrant, gubitak apetita, osetljivost i defans ileocekalno',
          '**Mezenterijalna ishemija**: stariji sa atrijalnom fibrilacijom, veoma jak bol uz oskudan nalaz na trbuhu',
          'Vanabdominalni uzroci: infarkt donjeg zida (EKG), ketoacidoza (glikemija), bazalna pneumonija, torzija testisa'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'ABCDE i vitalni parametri; kod znakova šoka dve venske linije i kristaloid, kiseonik',
          'Anamneza bola: početak, lokalizacija, širenje, karakter; povraćanje, stolica i vetrovi, mokrenje, poslednja menstruacija, operacije, lekovi (antikoagulansi, NSAIL)',
          'Pregled: inspekcija (ožiljci, distenzija), palpacija, defans, peristaltika, **kilni otvori**, testisi; rektalni pregled po indikaciji',
          '**EKG** kod bola u gornjem trbuhu i kod starijih; **glikemija**; urin traka; **test na trudnoću** kod žena u reproduktivnom dobu',
          'Ništa na usta; venski put; **analgezija se ne uskraćuje**',
          'Uporno povraćanje i sumnja na ileus: nazogastrična sonda ako je dostupna',
          'Upućivanje hirurgu ili ginekologu sa jasnom radnom dijagnozom, vremenom početka i datom terapijom'
        ] },
        { type: 'drugs', title: 'Analgezija i simptomatska terapija', items: [
          { name: 'paracetamol', dose: '1 g i.v. u 15-minutnoj infuziji kod telesne mase preko 50 kg; 15 mg/kg kod 33–50 kg', note: 'Najviše 4 g dnevno, a 3 g uz faktore rizika za hepatotoksičnost; razmak između doza najmanje 4 h.' },
          { name: 'morfin', dose: '4–6 mg i.v. sporo (tokom 1–5 minuta), ponavljati na 10–15 minuta do efekta', note: 'Doziranje po Nacionalnom vodiču. Razblažiti; prati disanje i pritisak, oprez kod hipovolemije.' },
          { name: 'metamizol', dose: '2,5 g i.v. sporo; najviše 5 g dnevno', note: 'Doziranje po Nacionalnom vodiču. Brzo ubrizgavanje može naglo oboriti pritisak.' },
          { name: 'diklofenak', dose: '75 mg duboko i.m.; najviše 150 mg dnevno', note: 'Samo kada su isključeni krvarenje i ulkusna bolest; ne kod sumnje na aneurizmu ili perforaciju.' }
        ] },
        { type: 'refer', title: 'Kada uputiti hirurgu', items: [
          'Hitno, sanitetom uz najavu: znaci šoka, peritonitis, sumnja na aneurizmu, ektopičnu trudnoću, perforaciju, ileus, mezenterijalnu ishemiju, uklještenu kilu',
          'Istog dana: sumnja na apendicitis, holecistitis, pankreatitis, divertikulitis sa temperaturom',
          'Torzija testisa: urologu ili hirurgu bez ikakvog odlaganja, vreme do operacije meri se satima',
          'Nejasan bol bez crvenih zastavica: zakazan ponovni pregled uz jasno uputstvo kada da se javi ranije'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Bol u slabini sa hipotenzijom kod starijeg pušača ili hipertoničara je aneurizma aorte dok se ne dokaže suprotno',
          'Analgezija ne maskira hirurški nalaz i ne odlaže dijagnozu; uskraćivanje nije opravdano',
          'NSAIL izbegavati kod mogućeg krvarenja, ulkusne bolesti i hipovolemije',
          'Bez laksativa i klizmi kod nejasnog bola u trbuhu',
          'Kod sumnje na rupturu aneurizme ne juri normalan pritisak: dovoljan je sistolni koji održava svest',
          'Nalaz koji je bio uredan ne važi satima kasnije: ponovljeni pregled je dijagnostički alat'
        ] }
      ],
      sources: [
        { name: 'NICE NG156 – Abdominal aortic aneurysm: diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng156/chapter/Recommendations' },
        { name: 'NICE NG126 – Ectopic pregnancy: simptomi i početna procena', url: 'https://www.nice.org.uk/guidance/ng126/chapter/Symptoms-and-signs-of-ectopic-pregnancy-and-initial-assessment' },
        { name: 'Nacionalni vodič dobre kliničke prakse za prehospitalno zbrinjavanje hitnih stanja (Ministarstvo zdravlja RS)', url: 'https://www.batut.org.rs/download/nacionalni%20vodici/siraVerzijaVodicaZaPrehospitalnoZbrinjavanjeHitnihStanja.pdf' },
        { name: 'ALIMS – sažetak karakteristika leka, paracetamol rastvor za infuziju', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-05080-19-001.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac 70 god., hipertoničar i pušač, ima nagli jak bol u levoj slabini koji se širi u preponu. Bled, znojav, TA 90/60 mmHg, puls 110/min. Šta je ispravno?',
          options: [
            'Renalna kolika: diklofenak 75 mg i.m. i otpust kući',
            'Lumbalni sindrom: analgetik i mirovanje',
            'Urin traka, pa odluka prema nalazu eritrocita',
            'Sumnja na rupturu aneurizme aorte: venski putevi, oprezna tečnost, hitan transport vaskularnom hirurgu'
          ],
          answer: 3,
          explain: 'Bol u slabini sa hipotenzijom kod starijeg muškarca sa faktorima rizika je ruptura aneurizme dok se ne dokaže suprotno. NICE savetuje restriktivnu nadoknadu tečnosti (permisivnu hipotenziju) tokom hitnog transporta u vaskularni centar.'
        },
        {
          q: 'Žena 45 god. sa jakim bolom u desnom gornjem kvadrantu i temperaturom čeka transport hirurgu. Kako postupaš sa bolom?',
          options: [
            'Ne dajem analgetik da ne bih prikrio nalaz hirurgu',
            'Dajem samo spazmolitik na usta uz gutljaj vode',
            'Dajem i.v. analgetik: paracetamol 1 g ili titrirani morfin',
            'Dajem diklofenak 75 mg i.m. svakom pacijentu sa bolom u trbuhu'
          ],
          answer: 2,
          explain: 'Rana analgezija ne smanjuje tačnost dijagnoze akutnog abdomena i ne odlaže odluku o operaciji. Pacijent ne uzima ništa na usta, a NSAIL nisu rutinski izbor dok nisu isključeni krvarenje i perforacija.'
        },
        {
          q: 'Žena 82 god. sa atrijalnom fibrilacijom, bez antikoagulantne terapije, ima nagli veoma jak difuzni bol u trbuhu. Trbuh je mek, bez defansa. Na šta misliš?',
          options: [
            'Opstipacija: klizma i laksativ',
            'Akutna mezenterijalna ishemija: hitno hirurgu',
            'Akutni gastritis: inhibitor protonske pumpe',
            'Funkcionalni bol: spazmolitik i kontrola'
          ],
          answer: 1,
          explain: 'Bol nesrazmerno jak u odnosu na fizikalni nalaz kod starije osobe sa izvorom embolije tipičan je za mezenterijalnu ishemiju. Peritonealni znaci se javljaju kasno, kada je crevo već nekrotično.'
        },
        {
          q: 'Muškarac 45 god., ranije operisan zbog perforiranog slepog creva, ima grčevite bolove, povraća, trbuh je distendiran, nema stolice ni vetrova od juče. Šta radiš?',
          options: [
            'Ništa na usta, i.v. tečnost, bez laksativa i klizme, hitno hirurgu',
            'Laksativ na usta i kontrola sutra',
            'Metoklopramid 10 mg i.m. i otpust kući',
            'Klizma u ambulanti, pa ponovna procena'
          ],
          answer: 0,
          explain: 'Slika odgovara mehaničkom ileusu, najverovatnije zbog priraslica. Laksativi, klizme i prokinetici su kontraindikovani; potrebni su nadoknada tečnosti, dekompresija sondom i hirurška procena.'
        }
      ]
    },
    {
      id: 'trauma',
      title: 'Trauma i krvarenje',
      summary: 'Prvo zaustavi krvarenje koje ubija, zatim ABCDE; teško povređenog ne zadržavaj na mestu događaja.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kod teške traume leči se redom ono što najbrže ubija: masivno spoljašnje krvarenje, opstrukcija disajnog puta, tenzioni pneumotoraks, hemoragijski šok. Na terenu se radi samo ono što spašava život, a zatim sledi brz transport uz najavu. Hipotermija, acidoza i koagulopatija se međusobno pogoršavaju, pa se pacijent utopljava od prvog minuta.' },
        { type: 'steps', title: 'Primarni pregled', items: [
          '**Bezbednost mesta događaja**, mehanizam povrede, broj povređenih; zatraži pomoć na vreme',
          '**Masivno spoljašnje krvarenje**: direktan pritisak, kompresivni zavoj, poveska na ekstremitetu, tamponada rane',
          '**A**: disajni put uz ručnu stabilizaciju vratne kičme (podizanje vilice bez zabacivanja glave), aspiracija, orofaringealni tubus',
          '**B**: kiseonik, frekvencija disanja, SpO2, simetrija grudnog koša; traži tenzioni i otvoreni pneumotoraks, nestabilan grudni koš',
          '**C**: puls, kapilarno punjenje, TA; dve venske linije; izvori krvarenja su grudni koš, trbuh, karlica, duge kosti i spoljašnje krvarenje',
          '**D**: GCS, zenice, pokreti sva četiri ekstremiteta, glikemija',
          '**E**: skini odeću i pregledaj celo telo, uključujući leđa, zatim pokrij i utopli; imobilizacija i transport'
        ] },
        { type: 'list', title: 'Kontrola krvarenja i imobilizacija', items: [
          'Direktan pritisak na ranu je prvi korak; ako životno ugrožavajuće krvarenje iz ekstremiteta ne staje, **poveska**, sa zapisanim vremenom postavljanja',
          'Rane na mestima gde poveska nije moguća: čvrsta tamponada gazom (hemostatskom ako postoji) i direktan pritisak',
          'Sumnja na aktivno krvarenje iz preloma karlice posle tupe visokoenergetske traume: **karlični pojas**',
          'Vratna kičma: ručna stabilizacija, kragna i daska ili vakuum madrac kod opasnog mehanizma, bola u vratu, ispada ili poremećaja svesti',
          'Prelomi dugih kostiju: imobilizacija dva susedna zgloba, provera pulsa, boje i senzibiliteta pre i posle',
          'Strano telo zabodeno u ranu se ne vadi: stabilizuj ga zavojem',
          'Amputirani deo: umotan, u kesi, u posudi sa ledom ili hladnom vodom, bez direktnog kontakta sa ledom; ide sa pacijentom u istu bolnicu'
        ] },
        { type: 'list', title: 'Hemoragijski šok', items: [
          'Rani znaci: tahikardija, bledilo, hladna koža, produženo kapilarno punjenje, uznemirenost; **hipotenzija je kasni znak**',
          'Stariji, pacijenti na beta-blokatorima i sportisti ne moraju imati tahikardiju',
          'Bez povrede mozga: restriktivna nadoknada do palpabilnog centralnog pulsa (karotidni ili femoralni); ciljni sistolni 80–90 mmHg dok se krvarenje ne zaustavi',
          'Teška povreda mozga (GCS 8 i manje): održavaj srednji arterijski pritisak od najmanje 80 mmHg',
          'Tenzioni pneumotoraks sa hemodinamskom nestabilnošću ili teškom respiratornom ugroženošću: odmah dekompresija grudnog koša',
          'Otvoreni pneumotoraks: jednostavan okluzivni zavoj i posmatranje zbog razvoja tenzionog pneumotoraksa'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'traneksamična kiselina', dose: '1 g i.v. tokom 10 minuta, što pre, najkasnije 3 h od povrede', note: 'Kod značajnog krvarenja ili rizika od njega. Druga doza od 1 g tokom 8 h daje se u bolnici.' },
          { name: 'kristaloid', dose: 'Mali bolusi i.v. uz ponovnu procenu, do palpabilnog centralnog pulsa', note: 'Restriktivan pristup dok se krvarenje ne zaustavi. Zagrejan ako je moguće.' },
          { name: 'morfin', dose: '4–6 mg i.v. sporo (tokom 1–5 minuta), ponavljati na 10–15 minuta do efekta', note: 'Prva linija analgezije kod teške traume (NICE); doziranje po Nacionalnom vodiču. Oprez kod hipovolemije i povrede glave; prati disanje.' },
          { name: 'fentanil', dose: '0,025–0,1 mg i.v. sporo (tokom 3–5 minuta)', note: 'Doziranje po Nacionalnom vodiču. Brza primena može izazvati depresiju disanja.' },
          { name: 'ketamin', dose: 'Analgetske doze i.v. kao druga linija (NICE); doziranje po lokalnom protokolu', note: 'Kada nema venskog puta NICE navodi intranazalni put.' },
          { name: 'kiseonik', dose: 'Kod teške traume odmah, zatim titrirati prema SpO2', note: 'Kod povrede mozga izbegavati hipoksiju.' }
        ] },
        { type: 'list', title: 'Povreda glave: kada na CT', items: [
          'Hitno (u roku od sat vremena): GCS 12 i manje pri pregledu, ili GCS ispod 15 dva sata posle povrede',
          'Sumnja na otvoreni ili impresioni prelom lobanje; znaci preloma baze (modrice oko očiju ili iza uha, krv iza bubne opne, likvoreja)',
          'Posttraumatski epileptički napad, fokalni neurološki ispad, više od jedne epizode povraćanja',
          'Gubitak svesti ili amnezija uz: 65 i više godina, poremećaj koagulacije, opasan mehanizam povrede, retrogradnu amneziju dužu od 30 minuta',
          '**Antikoagulantna terapija**: nizak prag za CT i bez gubitka svesti i bez simptoma',
          'Deca: odluka prema pedijatrijskim pravilima; upornost povraćanja, pospanost i promena ponašanja su znaci za hitno upućivanje'
        ] },
        { type: 'refer', title: 'Kada u bolnicu', items: [
          'Svaka teška trauma: brz transport u najbližu ustanovu sa hirurgijom i CT-om, uz telefonsku najavu',
          'Opasan mehanizam i kada pacijent deluje dobro: pad sa visine, izletanje iz vozila, pešak ili biciklista udaren vozilom, smrt saputnika',
          'Povreda glave sa bilo kojim kriterijumom za CT, sa intoksikacijom ili bez pouzdanog nadzora kod kuće',
          'Otvoreni prelomi, povrede sa ispadom pulsa ili senzibiliteta, sumnja na povredu kičme',
          'Lakša povreda glave bez kriterijuma može kući uz pisano uputstvo i nadzor odrasle osobe'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Normalan pritisak ne isključuje šok: hipotenzija je kasni znak krvarenja',
          'Poveska ostaje do hirurške kontrole krvarenja; vreme postavljanja mora biti zapisano',
          'Kod teške povrede mozga permisivna hipotenzija se ne primenjuje',
          'Vreme na mestu događaja kod krvarenja koje se ne može zaustaviti treba da bude što kraće: definitivno lečenje je operacija',
          'Pokrij pacijenta: hipotermija sama po sebi pogoršava krvarenje'
        ] }
      ],
      sources: [
        { name: 'European guideline on management of major bleeding and coagulopathy following trauma (6. izdanje, 2023)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/' },
        { name: 'NICE NG39 – Major trauma: assessment and initial management', url: 'https://www.nice.org.uk/guidance/ng39/chapter/Recommendations' },
        { name: 'NICE NG232 – Head injury: assessment and early management', url: 'https://www.nice.org.uk/guidance/ng232/chapter/Recommendations' },
        { name: 'Nacionalni vodič dobre kliničke prakse za prehospitalno zbrinjavanje hitnih stanja (Ministarstvo zdravlja RS)', url: 'https://www.batut.org.rs/download/nacionalni%20vodici/siraVerzijaVodicaZaPrehospitalnoZbrinjavanjeHitnihStanja.pdf' }
      ],
      questions: [
        {
          q: 'Motociklista ima duboku ranu natkolenice iz koje krv izbija u mlazu. Direktan pritisak i kompresivni zavoj ne zaustavljaju krvarenje. Šta radiš?',
          options: [
            'Podižem nogu i nastavljam pritisak do dolaska u bolnicu',
            'Postavljam povesku, zatežem do prestanka krvarenja i beležim vreme',
            'Hvatam krvni sud hemostatskom hvataljkom u dubini rane',
            'Prvo plasiram dve kanile i dajem 2 litra kristaloida'
          ],
          answer: 1,
          explain: 'Kada direktan pritisak ne zaustavlja krvarenje iz ekstremiteta, odmah se postavlja poveska i zateže dok krvarenje ne stane. Slepo hvatanje u rani oštećuje nerve i sudove, a infuzija bez kontrole krvarenja samo ispira krv.'
        },
        {
          q: 'Vozač posle sudara ima sve težu dispneju, TA 80/50 mmHg, nabrekle vene vrata i odsutan disajni šum desno. Šta je sledeći korak?',
          options: [
            'Hitan transport radi rendgenskog snimka pluća',
            'Kristaloid 1000 ml i.v. brzo zbog hipotenzije',
            'Dekompresija grudnog koša iglom na desnoj strani',
            'Morfin 5 mg i.v. zbog bola i dispneje'
          ],
          answer: 2,
          explain: 'Dispneja, hipotenzija, nabrekle vene vrata i odsutan disajni šum su tenzioni pneumotoraks: klinička dijagnoza koja se leči odmah, bez snimanja. NICE preporučuje dekompresiju pre snimanja kada postoji hemodinamska nestabilnost ili teška respiratorna ugroženost.'
        },
        {
          q: 'Muškarac 72 god. na varfarinu okliznuo se i udario glavom. Nije gubio svest, GCS 15, bez tegoba. Šta je ispravno?',
          options: [
            'Uputiti ga na CT glave jer je na antikoagulantnoj terapiji',
            'Otpustiti kući uz pisano uputstvo jer nema simptoma',
            'Uraditi rendgenski snimak lobanje u dva pravca',
            'Zakazati kontrolu INR za tri dana'
          ],
          answer: 0,
          explain: 'Pacijenti na antikoagulansima mogu imati intrakranijalno krvarenje i posle lake povrede, bez gubitka svesti i uz normalan nalaz, pa je prag za CT nizak. Rendgenski snimak lobanje nema mesto u proceni.'
        },
        {
          q: 'Muškarac sa ubodnom ranom trbuha je svestan, bled, radijalni puls se jedva pipa, TA 85/50 mmHg. Nema povrede glave. Kako nadoknađuješ volumen?',
          options: [
            'Dva litra kristaloida brzo, do normalizacije pritiska',
            'Vazopresor u infuziji umesto tečnosti',
            'Ne dajem ništa do dolaska u bolnicu',
            'Mali bolusi do palpabilnog centralnog pulsa, traneksamična kiselina 1 g, brz transport'
          ],
          answer: 3,
          explain: 'Kod aktivnog krvarenja primenjuje se restriktivna nadoknada: na terenu do palpabilnog centralnog pulsa, uz ciljni sistolni 80–90 mmHg ako nema povrede mozga. Traneksamična kiselina 1 g daje se što pre, najkasnije 3 sata od povrede.'
        }
      ]
    },
    {
      id: 'opekotine-toplota',
      title: 'Opekotine, toplotni udar i hipotermija',
      summary: 'Opekotinu hladi tekućom vodom 20 minuta, toplotni udar hladi odmah i agresivno, pothlađenog zagrevaj i pomeraj nežno.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Težinu opekotine određuju površina, dubina, lokalizacija, uzrast i pridružene povrede (inhalaciona povreda, trauma). Toplotni udar je telesna temperatura iznad 40 stepeni sa poremećajem funkcije CNS i leči se hitnim hlađenjem. Hipotermija je centralna temperatura ispod 35 stepeni; teško pothlađen pacijent može delovati mrtvo, a da ima šansu za potpuni oporavak.' },
        { type: 'list', title: 'Procena opekotine', items: [
          '**Pravilo devetki** (odrasli): glava i vrat 9%, svaka ruka 9%, prednja strana trupa 18%, zadnja strana trupa 18%, svaka noga 18%, perineum 1%',
          'Dlan pacijenta sa prstima je oko 1% površine tela: korisno za manje i nepravilne opekotine',
          'Kod dece je glava srazmerno veća, a noge manje: koristi pedijatrijske tablice (Lund-Brauder)',
          '**Samo crvenilo se ne računa** u procenat opečene površine',
          'Površinska dermalna: plikovi, vlažna, ružičasta, veoma bolna, bledi na pritisak',
          'Duboka dermalna i opekotina pune debljine: bleda, voštana ili kožasta, suva, slabo bolna ili bezbolna',
          'Znaci inhalacione povrede: opekotine lica, čađ u ustima i nosu, promuklost, stridor, požar u zatvorenom prostoru'
        ] },
        { type: 'steps', title: 'Postupak kod opekotina', items: [
          'Prekini dejstvo toplote; skini odeću i nakit sa opečene regije, ono što je zalepljeno ne čupaj',
          '**Hlađenje tekućom hladnom vodom 20 minuta**, uz oprez zbog hipotermije, posebno kod dece',
          'Hladi opekotinu, greji pacijenta: kod dece i velikih površina rizik od hipotermije',
          'ABCDE; kod znakova inhalacione povrede kiseonik 100% i rana najava radi intubacije',
          'Pokrij jednostavnom neprijanjajućom oblogom ili plastičnom folijom za hranu; bez masti i kućnih preparata',
          'Analgezija i.v.; venski put kroz neopečenu kožu ako je moguće',
          'Nadoknada tečnosti kod opekotina preko 20% površine tela kod odraslih i preko 10% kod dece'
        ] },
        { type: 'drugs', title: 'Tečnosti i analgezija', items: [
          { name: 'Ringer laktat', dose: '2–4 ml/kg po procentu opečene površine u prva 24 h; polovina u prvih 8 h', note: 'EBA preporučuje kristaloid, ali ne 0,9% NaCl. Dalje prema diurezi (odrasli 0,5 ml/kg/h, deca ispod 30 kg 1 ml/kg/h).' },
          { name: 'morfin', dose: '4–6 mg i.v. sporo, ponavljati na 10–15 minuta do efekta', note: 'Doziranje po Nacionalnom vodiču. Prati disanje i pritisak.' },
          { name: 'paracetamol', dose: '1 g i.v. u 15-minutnoj infuziji kod telesne mase preko 50 kg; 15 mg/kg kod 33–50 kg', note: 'Za manje opekotine i kao dodatak opioidu.' },
          { name: 'kiseonik 100%', dose: 'Preko maske sa rezervoarom kod požara u zatvorenom prostoru', note: 'Misli na trovanje ugljen-monoksidom.' }
        ] },
        { type: 'refer', title: 'Kada u centar za opekotine', items: [
          'Površinske dermalne opekotine preko 20% površine tela kod odraslih i preko 10% kod starijih od 65 godina',
          'Deca: preko 5% do 2. godine, preko 10% od 3 do 10 godina, preko 15% od 10 do 15 godina',
          'Duboke dermalne i opekotine pune debljine bilo koje površine i u bilo kom uzrastu',
          'Lice, šake, genitalije, veliki zglobovi; cirkularne opekotine',
          'Velike električne i hemijske opekotine; sumnja na inhalacionu povredu',
          'Pridružena trauma ili bolesti koje komplikuju lečenje; svi kojima je potrebna nadoknada tečnosti',
          'Male površinske opekotine: previjanje u ambulanti, kontrola za 48 h'
        ] },
        { type: 'steps', title: 'Toplotni udar', items: [
          'Prepoznaj: temperatura preko 40 stepeni uz konfuziju, konvulzije ili komu; koža vrela, suva ili znojava',
          'Skloni u hlad, skini odeću, ABCDE, kiseonik, glikemija',
          '**Hlađenje počinje odmah i pre transporta**: potapanje u hladnu vodu ako je izvodljivo, ili prskanje vodom uz ventilator',
          'Led ili hladne obloge na vrat, pazuhe i prepone kao dodatna mera',
          'Cilj je temperatura ispod 39 stepeni što pre, po mogućstvu u prvih 30 minuta od početka toplotnog udara',
          'Venski put i tečnost prema stanju; konvulzije prekini benzodiazepinom',
          'Antipiretici nisu terapija toplotnog udara; hitan transport uz nastavak hlađenja'
        ] },
        { type: 'steps', title: 'Hipotermija', items: [
          'Stepeni: blaga 32–35 stepeni (svestan), umerena 28–32 (poremećaj svesti), teška ispod 28 (bez svesti, sa ili bez znakova života)',
          '**Pomeraj nežno i u horizontalnom položaju**: grubo rukovanje može izazvati ventrikularnu fibrilaciju',
          'Skini mokru odeću, izoluj od podloge, umotaj u ćebad i foliju, pokrij glavu',
          'Sprečavanje daljeg hlađenja: suva odeća, izolacija, toplo okruženje, grejni pokrivači',
          'Zagrejane i.v. tečnosti (38–42 stepena), kiseonik, glikemija, EKG monitoring',
          'Znake života traži do jednog minuta; ako ih nema, započni KPR',
          'Ispod 30 stepeni: posle tri šoka dalje defibrilacije odloži dok temperatura ne pređe 30; adrenalin 1 mg samo jednom; od 30 do 35 stepeni razmak 6–10 minuta; transport uz KPR u ECMO centar'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Dvadeset minuta hladne tekuće vode je prva pomoć kod opekotine; pri tome utopli pacijenta',
          'Promuklost i čađ u ustima znače da disajni put može oteći za nekoliko sati: transport uz lekara i rana najava',
          'Kod toplotnog udara prognozu određuje brzina hlađenja: prvo hladi, pa vozi',
          'Pothlađen pacijent nije mrtav dok nije zagrejan i mrtav',
          'Sumnja na inhalacionu povredu je sama po sebi razlog za upućivanje u centar za opekotine'
        ] }
      ],
      sources: [
        { name: 'EBA 2017 – European Practice Guidelines for Burn Care', url: 'https://www.euroburn.org/wp-content/uploads/EBA-Guidelines-Version-4-2017.pdf' },
        { name: 'ERC 2025 – Special Circumstances in Resuscitation', url: 'https://www.erc.edu/media/wwufbysp/gl2025-06-spec-circ-e.pdf' },
        { name: 'ERC 2025 – First Aid', url: 'https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf' }
      ],
      questions: [
        {
          q: 'Dete od 3 god. je pre 10 minuta polilo podlakticu vrelim čajem. Koža je crvena sa plikovima. Šta savetuješ i radiš prvo?',
          options: [
            'Led direktno na opekotinu 10 minuta',
            'Namazati ulje ili pavlaku da se smanji bol',
            'Tekuća hladna voda 20 minuta, skinuti odeću, pokriti čistom folijom, utopliti dete',
            'Probušiti plikove i previti suvom gazom'
          ],
          answer: 2,
          explain: 'EBA preporučuje hlađenje hladnom tekućom vodom 20 minuta, skidanje odeće i nakita i pokrivanje jednostavnom neprijanjajućom oblogom, uz oprez zbog hipotermije kod dece. Led, masti i bušenje plikova nisu deo prve pomoći.'
        },
        {
          q: 'Muškarac 40 god. ima opekotine sa plikovima na celoj prednjoj strani trupa i celoj desnoj ruci. Kolika je približno opečena površina po pravilu devetki?',
          options: [
            'Oko 27%',
            'Oko 9%',
            'Oko 18%',
            'Oko 45%'
          ],
          answer: 0,
          explain: 'Prednja strana trupa je 18%, a cela ruka 9%, ukupno 27%. Kod odraslih se nadoknada tečnosti započinje preko 20% opečene površine, a takav pacijent se leči u centru za opekotine.'
        },
        {
          q: 'Građevinski radnik 30 god. kolabirao je u podne tokom toplotnog talasa. Konfuzan, koža vrela, temperatura 41 stepen, puls 140/min. Šta je prioritet?',
          options: [
            'Paracetamol 1 g i.v. i kontrola temperature za 30 minuta',
            'Hitan transport, hlađenje će se sprovesti u bolnici',
            'Metamizol 2,5 g i.v. i infuzija 2 litra kristaloida',
            'Hlađenje odmah: hladna voda ili prskanje uz ventilator, led na vrat, pazuhe i prepone'
          ],
          answer: 3,
          explain: 'Kod toplotnog udara prioritet su aktivne metode sa najbržim hlađenjem, pa se hladi odmah i tokom transporta, sa ciljem ispod 39 stepeni u prvih 30 minuta. Antipiretici nisu terapija toplotnog udara.'
        },
        {
          q: 'Planinar je nađen bez svesti u snegu, centralna temperatura 27 stepeni, na monitoru ventrikularna fibrilacija. Kako sprovodiš reanimaciju?',
          options: [
            'Proglašavam smrt ako posle 20 minuta nema povratka cirkulacije',
            'KPR, do tri šoka i jedna doza adrenalina dok je ispod 30 stepeni, transport uz KPR',
            'Standardni protokol: adrenalin 1 mg na 3–5 minuta i defibrilacija na 2 minuta',
            'Ne započinjem KPR dok se pacijent ne zagreje iznad 32 stepena'
          ],
          answer: 1,
          explain: 'Po ERC 2025, ako fibrilacija traje posle tri šoka, dalje defibrilacije se odlažu dok temperatura ne pređe 30 stepeni, a adrenalin 1 mg se daje samo jednom jer se ispod 30 stepeni nakuplja. Pacijent se uz KPR transportuje u centar sa vantelesnom potporom.'
        }
      ]
    },
    {
      id: 'agitacija-suicid',
      title: 'Akutno agitiran i suicidalan pacijent',
      summary: 'Bezbednost na prvom mestu, organski uzrok dok se ne isključi, razgovor pre leka, a o samoubistvu pitaj direktno.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Agitacija je simptom, a ne dijagnoza: iza nje mogu stajati hipoglikemija, hipoksija, intoksikacija, apstinencija, povreda glave, infekcija ili delirijum, i tek potom psihijatrijski poremećaj. Redosled je bezbednost, deeskalacija, isključivanje organskog uzroka, pa lekovi. Suicidalni rizik se procenjuje otvorenim, direktnim pitanjima kod svakog pacijenta u krizi.' },
        { type: 'steps', title: 'Postupak', items: [
          '**Bezbednost**: ne ulazi sam, ostani između pacijenta i izlaza, skloni predmete koji mogu biti oružje; pozovi policiju kod pretnje nasiljem ili oružja',
          '**Deeskalacija**: jedan sagovornik, miran i tih glas, bezbedna udaljenost, predstavi se, slušaj, ne raspravljaj se i ne preti',
          'Ponudi izbor i nešto konkretno: da sedne, vodu, lek na usta; postavi jasne i jednostavne granice',
          '**Isključi organski uzrok** čim je moguće: glikemija, SpO2, temperatura, TA, puls, zenice, znaci povrede glave, miris alkohola',
          'Ako je sedacija potrebna: prvo ponudi lek na usta, parenteralno tek ako odbija ili je opasnost neposredna',
          'Fizičko sputavanje je poslednja mera: najkraće moguće, po mogućstvu na leđima, bez ometanja disajnog puta, disanja i cirkulacije',
          'Posle sedacije: bočni položaj, praćenje disanja, SpO2, TA i svesti; dokumentuj razlog, lek, dozu i vreme'
        ] },
        { type: 'drugs', title: 'Medikamentozna sedacija', items: [
          { name: 'lorazepam', dose: '1–2 mg p.o.; ako ne deluje posle 45 minuta, 1–2 mg parenteralno gde je dostupan', note: 'Izbor kada je dijagnoza nejasna (Nacionalni vodič) i kada nema EKG-a ili podataka o ranijoj terapiji (NICE).' },
          { name: 'diazepam', dose: '10 mg i.m. ili sporo i.v., po potrebi ponoviti posle najmanje 4 h; delirijum tremens 10–20 mg i.v. ili i.m.', note: 'Registrovan za tešku akutnu agitaciju i delirijum tremens. Stari i iscrpljeni: polovina doze.' },
          { name: 'haloperidol', dose: '5 mg i.m., može se ponavljati na sat vremena; najviše 20 mg dnevno; stariji polovina doze, najviše 5 mg dnevno', note: 'Kod psihotične agitacije. Kontraindikovan kod Parkinsonove bolesti, demencije sa Levijevim telima i produženog QT intervala.' },
          { name: 'biperiden', dose: 'Parenteralno prema sažetku karakteristika leka, kod akutne distonije posle antipsihotika', note: 'Distonija: grč mišića vrata, vilice, jezika ili devijacija pogleda naviše.' }
        ] },
        { type: 'list', title: 'Procena suicidalnog rizika', items: [
          '**Pitaj direktno**: da li razmišljate o tome da sebi oduzmete život? Pitanje ne povećava rizik, a pacijentu često donosi olakšanje',
          'Razjasni redom: misli, plan, dostupnost sredstava, namera, pripreme (oproštajna poruka, razdeljivanje stvari)',
          'Najjači faktor rizika je **raniji pokušaj**; zatim depresija, psihoza, zloupotreba alkohola, beznađe, skorašnji gubitak',
          'Visok rizik: muški pol, starija dob, usamljenost, hronični bol ili teška telesna bolest, dostupno oružje ili lekovi, skorašnji otpust sa psihijatrije',
          'Zaštitni faktori: porodica i deca, podrška okoline, spremnost na saradnju, planovi za budućnost',
          'Posle pokušaja uvek prvo telesno zbrinjavanje (trovanje, povrede), pa psihijatrijska procena'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Konkretan plan sa dostupnim sredstvom, izražena namera ili skorašnji pokušaj',
          'Imperativne halucinacije, sumanutost krivice ili propasti, izrazito beznađe',
          'Nagla agitacija kod starije osobe bez psihijatrijske anamneze: delirijum dok se ne dokaže suprotno',
          'Temperatura, ukočenost mišića, konvulzije, patološki vitalni parametri ili fokalni neurološki nalaz',
          'Intoksikacija ili apstinencija; pacijent koji se naglo smirio posle sputavanja (proveri disanje i puls)'
        ] },
        { type: 'refer', title: 'Upućivanje i hospitalizacija bez pristanka', items: [
          'Visok suicidalni rizik: hitno psihijatru, uz pratnju; pacijent se ne ostavlja sam i ne ide sopstvenim prevozom',
          'Sumnja na organski uzrok agitacije: prvo urgentni prijem opšte bolnice, ne psihijatrija',
          'Osoba sa mentalnim smetnjama koja ozbiljno i neposredno ugrožava svoj ili tuđi život ili zdravlje može se uputiti u psihijatrijsku ustanovu i bez pristanka',
          'Lekar piše uput sa jasnim obrazloženjem opasnosti; na zahtev zdravstvene službe policija pruža asistenciju',
          'O zadržavanju odlučuju psihijatri ustanove i nadležni sud u zakonskim rokovima, a ne lekar na terenu',
          'Nizak rizik: plan bezbednosti, uklanjanje sredstava, uključivanje porodice, kontakt za krizne situacije i zakazana kontrola u narednim danima'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Glikemija i SpO2 se mere svakom agitiranom pacijentu čim to postane bezbedno',
          'Kod alkoholne apstinencije lek izbora je benzodiazepin; diazepam je registrovan za agitaciju u delirijum tremensu',
          'Bez EKG-a i kod srčanog bolesnika izbegavaj haloperidol i daj benzodiazepin',
          'Sediran pacijent je i dalje tvoj pacijent: prati disanje, SpO2, pritisak i svest',
          'Dokumentuj tačne reči pacijenta, procenu rizika i razlog svake prinudne mere'
        ] }
      ],
      sources: [
        { name: 'Nacionalni vodič dobre kliničke prakse za prehospitalno zbrinjavanje hitnih stanja (Ministarstvo zdravlja RS)', url: 'https://www.batut.org.rs/download/nacionalni%20vodici/siraVerzijaVodicaZaPrehospitalnoZbrinjavanjeHitnihStanja.pdf' },
        { name: 'NICE NG10 – Violence and aggression: short-term management', url: 'https://www.nice.org.uk/guidance/ng10/chapter/Recommendations' },
        { name: 'ALIMS – sažetak karakteristika leka, Haldol rastvor za injekciju', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-01824-17-002.pdf' },
        { name: 'ALIMS – sažetak karakteristika leka, Bensedin rastvor za injekciju', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-00996-22-001.pdf' }
      ],
      questions: [
        {
          q: 'U ambulanti muškarac 28 god. viče, šeta i preti osoblju. Šta je ispravan prvi postupak?',
          options: [
            'Odmah haloperidol 10 mg i.m. dok ga osoblje drži',
            'Zatvoriti vrata i razgovarati sa njim nasamo',
            'Glasno i odlučno narediti da sedne ili će biti pozvana policija',
            'Obezbediti izlaz i pomoć, mirno deeskalirati, pa što pre isključiti organski uzrok'
          ],
          answer: 3,
          explain: 'Prvo se obezbeđuje sigurnost osoblja i pokušava verbalna deeskalacija, koja često učini lek nepotrebnim. Agitacija može biti posledica hipoglikemije, hipoksije ili intoksikacije, pa se glikemija i SpO2 mere čim je bezbedno.'
        },
        {
          q: 'Muškarac 50 god., poslednje piće pre dva dana, tremor, znojenje, vidi insekte po zidu, uznemiren. Koji lek je prvi izbor?',
          options: [
            'Haloperidol 5 mg i.m. kao jedini lek',
            'Benzodiazepin, npr. diazepam 10–20 mg sporo i.v. ili i.m., uz tiamin',
            'Biperiden 5 mg i.m.',
            'Fizičko sputavanje bez lekova do dolaska u bolnicu'
          ],
          answer: 1,
          explain: 'Alkoholni apstinencijalni sindrom i delirijum tremens leče se benzodiazepinima; diazepam je za to registrovan u dozi 10–20 mg i.v. ili i.m. Antipsihotik sam ne leči apstinenciju, a sputavanje bez lekova nije terapija.'
        },
        {
          q: 'Žena 46 god. dolazi zbog nesanice, plače i kaže da više nema smisla. Kako postupaš u vezi sa suicidalnim rizikom?',
          options: [
            'Pitam je direktno o mislima o samoubistvu, planu i dostupnim sredstvima',
            'Izbegavam temu da joj ne bih sugerisao ideju',
            'O tome pitam samo članove porodice kada ona izađe',
            'Pitam je samo ako sama pomene samoubistvo'
          ],
          answer: 0,
          explain: 'Direktno pitanje o samoubistvu ne povećava rizik, a jedini je način da se on proceni. Procena ide redom: misli, plan, sredstva, namera, raniji pokušaji i zaštitni faktori.'
        },
        {
          q: 'Muškarac 45 god. kaže da će se večeras obesiti i da je pripremio konopac. Odbija odlazak psihijatru i hoće da ide kući. Šta je ispravno?',
          options: [
            'Poštovati odbijanje i zakazati kontrolu za sutra',
            'Uvesti antidepresiv i zakazati kontrolu za dve nedelje',
            'Ne ostavljati ga samog, hitno uputiti u psihijatrijsku ustanovu i bez pristanka, uz asistenciju policije po potrebi',
            'Uzeti potpis da odbija lečenje i otpustiti ga uz pratnju porodice'
          ],
          answer: 2,
          explain: 'Konkretan plan, pripremljeno sredstvo i izražena namera znače neposrednu opasnost po život. U toj situaciji zakon dozvoljava upućivanje u psihijatrijsku ustanovu bez pristanka; potpis o odbijanju ne štiti ni pacijenta ni lekara.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'hitna-ostalo-slucaj-1',
      title: 'Žena, 71 god., otežan govor i slabost ruke',
      intro: 'Ekipa HMP stiže u stan u 9.40. Ćerka kaže da je majka u 8.50 za doručkom ispustila šolju i počela da govori nerazumljivo. Pacijentkinja je budna, desni ugao usana je spušten, desna ruka tone pri držanju. Boluje od hipertenzije i atrijalne fibrilacije. TA 195/105 mmHg, puls 92/min aritmičan, SpO2 96%, disanje 16/min.',
      steps: [
        {
          q: 'Šta je sledeći korak pre nego što krenete?',
          options: [
            'Detaljan neurološki pregled sa ispitivanjem svih refleksa i senzibiliteta',
            'Kiseonik 10 l/min preko maske i acetilsalicilna kiselina 300 mg',
            'Glikemija iz prsta i potvrda vremena kada je poslednji put bila bez simptoma',
            'Kaptopril 25 mg pod jezik, pa kontrola pritiska pre polaska'
          ],
          answer: 2,
          explain: 'Hipoglikemija imitira moždani udar i mora se odmah isključiti, a vreme početka odlučuje o reperfuzionoj terapiji. Detaljan pregled samo troši vreme, a kiseonik pri SpO2 96% nije potreban.'
        },
        {
          q: 'Glikemija je 7,2 mmol/l. Ćerka potvrđuje da je majka u 8.50 bila potpuno dobro. Pritisak je i dalje 195/105 mmHg. Šta radite sa pritiskom?',
          options: [
            'Ne snižavamo ga na terenu, venski put i polazak',
            'Urapidil 25 mg i.v. da pritisak padne ispod 185/110 mmHg pre bolnice',
            'Furosemid 20 mg i.v. i nitroglicerin pod jezik',
            'Nifedipin 10 mg pod jezik uz kontrolu za 10 minuta'
          ],
          answer: 0,
          explain: 'Pritisak se kod sumnje na moždani udar na terenu rutinski ne snižava (ESO). Ciljne vrednosti pre trombolize postiže bolnički tim, kada se CT-om isključi krvarenje.'
        },
        {
          q: 'Ćerka pokazuje kutiju apiksabana i kaže da je majka poslednju tabletu popila sinoć oko 20 h. Pita da li da joj da aspirin koji imaju u kući. Šta odgovarate i radite?',
          options: [
            'Dati acetilsalicilnu kiselinu 300 mg jer je udar najverovatnije ishemijski',
            'Dati duplu dozu apiksabana jer je uzrok atrijalna fibrilacija',
            'Podatak o apiksabanu nije bitan za bolnicu, važan je samo pritisak',
            'Ništa na usta; lek i vreme poslednje doze beležimo i javljamo bolnici'
          ],
          answer: 3,
          explain: 'Pre CT-a se ne zna da li je udar ishemijski ili hemoragijski, pa se ne daje ni antiagregacija ni antikoagulans. Naziv antikoagulansa i vreme poslednje doze direktno utiču na odluku o trombolizi i trombektomiji.'
        },
        {
          q: 'Najbliža opšta bolnica bez CT-a je na 10 minuta, a bolnica sa jedinicom za moždani udar na 30 minuta. Od početka simptoma prošlo je 55 minuta. Kuda i kako vozite?',
          options: [
            'U najbližu bolnicu radi stabilizacije, pa neka oni organizuju premeštaj',
            'Direktno u jedinicu za moždani udar uz telefonsku najavu',
            'Ostaje kod kuće do ujutru, pa neurologu ako ne bude bolje',
            'U jedinicu za moždani udar bez najave, da ne gubimo vreme na telefon'
          ],
          answer: 1,
          explain: 'Pacijentkinja je duboko u vremenskom prozoru i treba joj ustanova koja može odmah da uradi CT i reperfuziju. Najava omogućava da je tim dočeka i značajno skraćuje vreme do terapije.'
        }
      ]
    },
    {
      id: 'hitna-ostalo-slucaj-2',
      title: 'Student, 19 god., temperatura i glavobolja',
      intro: 'U ambulantu doma zdravlja cimer dovodi studenta koji od sinoć ima temperaturu do 39,8 stepeni, jaku glavobolju, bolove u nogama i povraćao je dva puta. Pospan je, ali odgovara na pitanja. TA 100/60 mmHg, puls 124/min, disanje 24/min, SpO2 95%, kapilarno punjenje 4 sekunde, šake hladne.',
      steps: [
        {
          q: 'Šta je najvažnije da uradite u nastavku pregleda?',
          options: [
            'Pregled ždrela i otoskopija radi traženja žarišta',
            'Skinuti odeću i pregledati celu kožu, proveriti ukočenost vrata',
            'Uput za laboratoriju: krvna slika i CRP, pa kontrola sa nalazima',
            'Dati antipiretik i ponovo izmeriti temperaturu za sat vremena'
          ],
          answer: 1,
          explain: 'Kod febrilnog pacijenta koji deluje teško bolesno mora se pregledati cela koža radi traženja petehija i ispitati meningealni znaci. Bol u nogama i hladne šake su rani znaci sepse kod mladih i ne smeju se odložiti čekanjem laboratorije.'
        },
        {
          q: 'Na potkolenicama i trupu ima desetak sitnih tamnocrvenih promena koje ne blede pod pritiskom čaše. Vrat je blago ukočen. Sanitet stiže za 15 minuta, do bolnice je 35 minuta. Šta radite?',
          options: [
            'Čekam sanitet, antibiotik će dobiti u bolnici posle lumbalne punkcije',
            'Dajem amoksicilin sa klavulanskom kiselinom 1 g p.o.',
            'Dajem deksametazon 8 mg i.m. i antipiretik, bez antibiotika',
            'Venski put i ceftriakson 2 g i.v. odmah (i.m. ako nema vene)'
          ],
          answer: 3,
          explain: 'Temperatura sa osipom koji ne bledi je meningokokna bolest dok se ne dokaže suprotno i svako odlaganje antibiotika povećava smrtnost. Ceftriakson se daje parenteralno pre transporta, a dijagnostika se radi u bolnici.'
        },
        {
          q: 'Posle ceftriaksona TA je 88/50 mmHg, puls 132/min, SpO2 93%, pospaniji je. Šta je sledeći korak dok čekate sanitet?',
          options: [
            'Kiseonik i bolus kristaloida 250 ml tokom 10–15 minuta, pa ponovna procena',
            'Sedeći položaj i furosemid 20 mg i.v. zbog pada saturacije',
            'Adrenalin 0,5 mg i.m. jer je reč o reakciji na antibiotik',
            'Samo podići noge i čekati sanitet bez dalje terapije'
          ],
          answer: 0,
          explain: 'Slika odgovara septičnom šoku koji napreduje: potrebni su kiseonik i tečnost u bolusima uz procenu posle svakog. Anafilaksa je malo verovatna bez urtikarije, otoka i bronhospazma, uz kliničku sliku koja je postojala i pre leka.'
        },
        {
          q: 'Pacijent je predat ekipi HMP. Cimer pita da li je i on u opasnosti jer dele sobu. Šta je ispravno?',
          options: [
            'Nema rizika jer se bolest ne prenosi među odraslima',
            'Da odmah počne amoksicilin 500 mg tri puta dnevno sedam dana',
            'Prijaviti slučaj epidemiološkoj službi, koja određuje hemioprofilaksu bliskim kontaktima',
            'Da se javi samo ako dobije temperaturu u narednih mesec dana'
          ],
          answer: 2,
          explain: 'Bliski kontakti obolelog od meningokokne bolesti imaju povišen rizik i dobijaju hemioprofilaksu prema preporuci epidemiologa. Sumnja na meningokoknu bolest se prijavljuje odmah, ne čeka se potvrda dijagnoze.'
        }
      ]
    },
    {
      id: 'hitna-ostalo-slucaj-3',
      title: 'Muškarac, 68 god., bol u leđima i kolaps',
      intro: 'Ekipa HMP je pozvana u kuću zbog muškarca koji je pre 30 minuta dobio nagli jak bol u leđima i levoj slabini, a pri pokušaju da ustane kratko je izgubio svest. Pušač, leči hipertenziju. Sada je svestan, bled, oznojen. TA 85/55 mmHg, puls 116/min, SpO2 95%, disanje 22/min.',
      steps: [
        {
          q: 'Supruga kaže da je pre deset godina imao kamen u bubregu i da je bol sličan. Šta je sledeći korak?',
          options: [
            'Pregled trbuha i femoralnih pulseva, EKG i glikemija uz pripremu za hitan transport',
            'Diklofenak 75 mg i.m. zbog renalne kolike i kontrola za 30 minuta',
            'Urin traka na eritrocite radi potvrde kamena',
            'Spazmolitik i.m. i savet da pije više tečnosti'
          ],
          answer: 0,
          explain: 'Bol u slabini sa hipotenzijom i kolapsom kod starijeg pušača sa hipertenzijom nije renalna kolika dok se ne isključi ruptura aneurizme aorte. Pregled je kratak i ciljan, a EKG isključuje infarkt kao drugi čest uzrok.'
        },
        {
          q: 'Trbuh je mek, iznad pupka se pipa pulsirajuća osetljiva masa. Femoralni pulsevi su slabi, EKG sinusna tahikardija bez znakova ishemije. Plasirane su dve kanile. Kako nadoknađujete volumen?',
          options: [
            'Kristaloid 2000 ml brzo dok sistolni pritisak ne bude 120 mmHg',
            'Ne otvaram infuziju uopšte, bez obzira na stanje svesti',
            'Restriktivno: male boluse samo ako gubi svest ili centralni puls',
            'Infuziju 5% glukoze 500 ml sporim tempom'
          ],
          answer: 2,
          explain: 'Kod sumnje na rupturu aneurizme NICE savetuje restriktivnu nadoknadu volumena (permisivnu hipotenziju) tokom transporta: dok je pacijent svestan, ne juri se normalan pritisak jer to može pojačati krvarenje.'
        },
        {
          q: 'Pacijent je svestan, žali se na nepodnošljiv bol i uznemiren je. TA 88/55 mmHg. Šta dajete za bol?',
          options: [
            'Ništa, analgetik bi prikrio nalaz vaskularnom hirurgu',
            'Opioid i.v. u malim titriranim dozama uz praćenje pritiska i disanja',
            'Diklofenak 75 mg i.m. i metamizol 2,5 g i.v. brzo',
            'Diazepam 10 mg i.v. radi smirenja'
          ],
          answer: 1,
          explain: 'Analgezija se ne uskraćuje: opioid se titrira u malim dozama uz praćenje pritiska i disanja. NSAIL su kontraindikovani kod mogućeg krvarenja, a brzo dat metamizol može naglo oboriti pritisak.'
        },
        {
          q: 'Opšta bolnica bez vaskularne hirurgije je na 15 minuta, a centar sa vaskularnom hirurgijom na 40 minuta. Pacijent je svestan, sistolni pritisak 85–90 mmHg. Kako organizujete transport?',
          options: [
            'U najbližu bolnicu radi ultrazvuka i laboratorije, pa premeštaj',
            'Ostati na mestu dok se pritisak infuzijama ne stabilizuje',
            'U centar sa vaskularnom hirurgijom, bez najave da se ne gubi vreme',
            'Direktno u centar sa vaskularnom hirurgijom uz telefonsku najavu sumnje na rupturu aneurizme'
          ],
          answer: 3,
          explain: 'Jedino definitivno lečenje je hitna operacija ili endovaskularna intervencija, pa pacijent koji održava svest ide direktno tamo gde se to radi. Najava omogućava pripremu sale, krvi i tima pre dolaska.'
        }
      ]
    }
  ]
});
