MED.register({
  id: 'koza-infekcije',
  title: 'Koža i infektivne bolesti',
  icon: '🧴',
  color: '#12A594',
  topics: [
    {
      id: 'urtikarija',
      title: 'Urtikarija i angioedem',
      summary: 'Nesedativni antihistaminik je osnov terapije; ugrožen disajni put ili cirkulacija znače anafilaksu i adrenalin i.m.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Urtikarija se ispoljava urtikama, angioedemom ili sa oba. Akutna traje do 6 nedelja, a hronična duže od 6 nedelja. Prva linija su antihistaminici druge generacije, uzimani redovno, a ne po potrebi. Najvažnije je odmah prepoznati anafilaksu i angioedem koji ugrožava disajni put.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Urtika: oštro ograničen otok kože promenljive veličine, sa svrabom ili pečenjem, koji prolazi bez traga za 30 minuta do 24 sata.',
          'Angioedem: dublji otok kože ili sluzokože (usne, kapci, jezik, šake), više bolan nego svrbljiv, sporije se povlači.',
          'Akutna urtikarija: najčešće uz infekciju, lek ili hranu; često se uzrok ne otkrije.',
          'Hronična spontana urtikarija: bez spoljašnjeg okidača; alergija na hranu je izuzetno redak uzrok.',
          'Angioedem bez urtika: misli na ACE inhibitore i na nasledni angioedem (posredovan bradikininom).'
        ] },
        { type: 'flags', title: 'Kada je hitno', items: [
          'Otok jezika ili ždrela, promukao glas, stridor, otežano gutanje.',
          'Otežano disanje, vizing, pad saturacije.',
          'Hipotenzija, vrtoglavica, kolaps, bledilo i hladna koža.',
          'Nagli početak i brzo napredovanje tegoba posle izlaganja alergenu (ubod insekta, lek, hrana).'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni disajni put, disanje i cirkulaciju. Znaci anafilakse: adrenalin i.m. odmah, zovi 194, kiseonik, položaj prema tegobama.',
          'Ako tegobe ne popuštaju, ponovi adrenalin i.m. posle 5 minuta.',
          'Samo koža, bez sistemskih znakova: antihistaminik druge generacije u standardnoj dozi, svakodnevno.',
          'Potraži i ukloni okidač: novi lek (NSAIL, antibiotik, ACE inhibitor), hrana, infekcija.',
          'Teška akutna urtikarija: može kratak kurs oralnog kortikosteroida, najduže do 10 dana.',
          'Hronična urtikarija bez kontrole na standardnoj dozi: povećanje doze do četvorostruke (van odobrene indikacije), zatim dermatolog ili alergolog.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'adrenalin 1 mg/ml (1:1000)', dose: '0,5 mg (0,5 ml) i.m. u anterolateralnu stranu butine; ponoviti posle 5 minuta ako nema poboljšanja', note: 'Samo kod anafilakse. Doza za odrasle i decu stariju od 12 godina.' },
          { name: 'cetirizin', dose: '10 mg p.o. 1× dnevno', note: 'Kod hronične urtikarije uzimati redovno, ne po potrebi.' },
          { name: 'loratadin', dose: '10 mg p.o. 1× dnevno', note: 'Kod oštećenja jetre niža doza ili primena svaki drugi dan.' },
          { name: 'feksofenadin', dose: '180 mg p.o. 1× dnevno, pre obroka', note: 'Doza za urtikariju kod odraslih i dece od 12 godina.' },
          { name: 'omalizumab', dose: '300 mg s.c. na 4 nedelje', note: 'Druga linija kod hronične spontane urtikarije; uvodi specijalista.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Anafilaksa ili angioedem sa ugroženim disajnim putem: hitan transport (194), posmatranje u bolnici.',
          'Hronična urtikarija koja ne reaguje na povišene doze antihistaminika: dermatolog ili alergolog.',
          'Angioedem bez urtika, posebno ponavljan ili uz porodičnu anamnezu.',
          'Urtike koje traju duže od 24 sata, bole ili ostavljaju modrice: sumnja na urtikarijalni vaskulitis.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antihistaminici nisu deo početnog lečenja anafilakse i ne deluju na disajne ni na cirkulatorne tegobe.',
          'Kortikosteroidi se više ne preporučuju rutinski u lečenju anafilakse.',
          'Dugotrajna sistemska terapija kortikosteroidima kod hronične urtikarije se ne preporučuje.',
          'Angioedem mogu izazvati ACE inhibitori, a ređe i sartani, gliptini i inhibitori neprilizina; lek se ukida.',
          'Sedativni antihistaminici prve generacije se izbegavaju.'
        ] }
      ],
      sources: [
        { name: 'EAACI/GA²LEN/EuroGuiDerm/APAAACI vodič za urtikariju 2021', url: 'https://www.guidelines.edf.one/uploads/attachments/cl263w4y200oilajn3li6nqa1-urticaria-2021-gl.pdf' },
        { name: 'Resuscitation Council UK: hitno lečenje anafilakse 2021', url: 'https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf' },
        { name: 'NHS: feksofenadin', url: 'https://www.nhs.uk/medicines/fexofenadine/how-and-when-to-take-fexofenadine/' },
        { name: 'NHS: cetirizin', url: 'https://www.nhs.uk/medicines/cetirizine/how-and-when-to-take-cetirizine/' }
      ],
      questions: [
        {
          q: 'Muškarac, 38 god., deset minuta posle uboda ose ima urtike po celom telu, promukao je, oseća stezanje u grlu, TA 85/50 mmHg. Prvi lek?',
          options: [
            'Adrenalin 0,5 mg i.m. u anterolateralnu stranu butine',
            'Antihistaminik i.m. i posmatranje',
            'Metilprednizolon i.v., pa procena za 30 minuta',
            'Adrenalin 0,5 mg s.c. u nadlakticu'
          ],
          answer: 0,
          explain: 'Ugrožen disajni put i hipotenzija znače anafilaksu, a lek prvog izbora je adrenalin i.m. u butinu, koji se ponavlja posle 5 minuta ako nema poboljšanja. Antihistaminici i kortikosteroidi ne zamenjuju adrenalin.'
        },
        {
          q: 'Žena, 31 god., od juče ima urtike koje se sele i jako svrbe, posle virusne infekcije. Vitalni parametri uredni, nema otoka jezika ni tegoba sa disanjem. Terapija?',
          options: [
            'Kortikosteroidna krema na sve promene',
            'Antihistaminik prve generacije tri puta dnevno',
            'Antihistaminik druge generacije u standardnoj dozi, svakodnevno',
            'Adrenalin i.m. preventivno'
          ],
          answer: 2,
          explain: 'Kod urtikarije bez sistemskih znakova prva linija je nesedativni antihistaminik druge generacije. Sedativni antihistaminici se izbegavaju, a adrenalin je rezervisan za anafilaksu.'
        },
        {
          q: 'Pacijentkinja, 45 god., ima urtike skoro svaki dan već tri meseca. Cetirizin 10 mg dnevno pomaže samo delimično. Sledeći korak po smernicama?',
          options: [
            'Trajno uvesti prednizolon u maloj dozi',
            'Zameniti cetirizin antihistaminikom prve generacije',
            'Stroga eliminaciona dijeta šest meseci',
            'Povećati dozu antihistaminika druge generacije, do četvorostruke'
          ],
          answer: 3,
          explain: 'Kod hronične urtikarije koja nije kontrolisana standardnom dozom, sledeći korak je povećanje doze istog antihistaminika do četiri puta. Dugotrajni kortikosteroidi se ne preporučuju, a hrana je izuzetno redak uzrok.'
        },
        {
          q: 'Muškarac, 66 god., na ramiprilu dve godine, budi se sa otokom usana i jezika, bez urtika i bez svraba. Diše normalno. Šta je najvažnije?',
          options: [
            'Dati antihistaminik i nastaviti ramipril',
            'Ukinuti ACE inhibitor i uputiti ga na hitno posmatranje zbog rizika po disajni put',
            'Uraditi alergološko testiranje na hranu',
            'Lokalno hladna obloga i kontrola za nedelju dana'
          ],
          answer: 1,
          explain: 'Angioedem bez urtika kod pacijenta na ACE inhibitoru je posredovan bradikininom i može se javiti i posle višegodišnje terapije. Lek se ukida, a otok jezika zahteva posmatranje jer može ugroziti disajni put.'
        }
      ]
    },
    {
      id: 'infekcije-koze',
      title: 'Infekcije kože i mekih tkiva',
      summary: 'Impetigo lokalno, erizipel i celulitis 5 dana uskospektralnog antibiotika, apsces se drenira; bol nesrazmeran nalazu je hitan.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Impetigo, erizipel i celulitis izazivaju streptokok grupe A i Staphylococcus aureus, pa empirijska terapija mora da pokrije oba. Kod blagih oblika dovoljan je oralni antibiotik 5 dana. Apsces se leči incizijom i drenažom. Najvažnije je ne prevideti nekrotizirajuću infekciju.' },
        { type: 'list', title: 'Klinička slika', items: [
          '**Impetigo**: površne vezikule i pustule koje pucaju i stvaraju kruste; bulozni oblik sa većim mehurovima; bez sistemskih simptoma.',
          '**Erizipel**: nagao početak, bolno crvenilo sa jasno ograničenim, uzdignutim rubom, najčešće na licu ili potkolenici, često sa temperaturom.',
          '**Celulitis**: crvenilo, otok, toplota i bolnost bez jasne granice; najčešće noga ili lice.',
          '**Apsces**: bolan, fluktuirajući čvor sa gnojnim sadržajem.',
          'Crvenilo samo po sebi ne znači infekciju: misli na vensku insuficijenciju i druge neinfektivne uzroke.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Jak bol nesrazmeran lokalnom nalazu, brzo širenje, znaci sistemske toksičnosti: sumnja na nekrotizirajući fasciitis.',
          'Hipotenzija, poremećaj svesti, znaci sepse.',
          'Infekcija oko oka ili nosa (rizik od orbitalnog i intrakranijalnog širenja).',
          'Sumnja na zahvatanje zgloba ili kosti (septični artritis, osteomijelitis).',
          'Imunokompromitovan pacijent sa raširenom infekcijom.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni vitalne parametre i opšte stanje; potraži ulazno mesto (ragade između prstiju, rana, ekcem).',
          'Pre terapije ocrtaj flomasterom granicu crvenila da bi mogao da pratiš tok.',
          'Lokalizovan nebulozni impetigo: lokalna terapija 5 dana. Raširen ili bulozni impetigo: oralni antibiotik.',
          'Erizipel i celulitis bez sistemskih znakova: oralni antibiotik 5 dana, uz elevaciju zahvaćenog ekstremiteta.',
          'Apsces, veliki furunkul, karbunkul: incizija i drenaža; antibiotik dodati samo uz znake sistemskog odgovora ili oslabljen imunitet.',
          'Leči predisponirajuće stanje: otok, vensku insuficijenciju, ekcem, promene između prstiju stopala.',
          'Kontrola za 2–3 dana; ranije kod širenja crvenila, jačeg bola ili pogoršanja opšteg stanja.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'mupirocin 2% mast', dose: 'lokalno 3× dnevno, 5 dana', note: 'Lokalizovan nebulozni impetigo. Ne kombinovati lokalni i oralni antibiotik.' },
          { name: 'fusidinska kiselina 2%', dose: 'lokalno 3× dnevno, 5 dana', note: 'Alternativa mupirocinu; rezistencija se brzo razvija pri ponavljanoj primeni.' },
          { name: 'cefaleksin', dose: '500 mg p.o. na 8 h, 5 dana', note: 'Uskospektralna opcija za impetigo, erizipel i celulitis; deca 25 mg/kg po dozi na 12 h.' },
          { name: 'amoksicilin-klavulanat', dose: '500/125 mg p.o. na 8 h, 5 dana (7 dana kod infekcije oko oka ili nosa)', note: 'Širi spektar; iz ugla racionalne upotrebe prednost ima cefaleksin.' },
          { name: 'klaritromicin', dose: '500 mg p.o. na 12 h, 5–7 dana', note: 'Kod alergije na penicilin.' },
          { name: 'klindamicin', dose: '150–300 mg p.o. na 6 h (može do 450 mg na 6 h), 7 dana', note: 'Rezerva za teže infekcije i alergične na penicilin.' }
        ] },
        { type: 'refer', title: 'Kada hirurgu ili u bolnicu', items: [
          'Sumnja na nekrotizirajuću infekciju ili gasnu gangrenu: hitno hirurgu, bez čekanja na snimanje.',
          'Apsces koji zahteva inciziju i drenažu, posebno na licu, šaci ili perianalno.',
          'Sepsa, poremećaj svesti, hemodinamska nestabilnost.',
          'Infekcija oko oka ili nosa, sumnja na orbitalni celulitis, osteomijelitis ili septični artritis.',
          'Bez poboljšanja ili širenje posle 2–3 dana oralne terapije; pacijent ne može da uzima lekove na usta.',
          'Raširen impetigo kod imunokompromitovanog; bulozni impetigo kod odojčeta.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Pet dana je dovoljno za nekomplikovan celulitis; koža se sporije vraća u normalu i crvenilo petog dana nije neuspeh.',
          'Kod apscesa antibiotik ne zamenjuje drenažu; sam po sebi ne poboljšava ishod.',
          'Znaci sistemskog odgovora: temperatura iznad 38 °C ili ispod 36 °C, disanje preko 24/min, puls preko 90/min.',
          'MRSA je redak uzročnik tipičnog celulitisa; pokriva se kod gnojnih infekcija bez odgovora ili oslabljenog imuniteta.',
          'Pregledaj prostore između prstiju stopala: lečenje ragada i maceracije smanjuje recidive.'
        ] }
      ],
      sources: [
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' },
        { name: 'NICE NG141 (celulitis i erizipel)', url: 'https://www.nice.org.uk/guidance/ng141/chapter/Recommendations' },
        { name: 'NICE NG153 (impetigo)', url: 'https://www.nice.org.uk/guidance/ng153/chapter/Recommendations' },
        { name: 'IDSA vodič za infekcije kože i mekih tkiva 2014', url: 'https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/' }
      ],
      questions: [
        {
          q: 'Dete, 6 god., ima tri promene sa žućkastim krustama oko nosa i usta, bez temperature i dobrog opšteg stanja. Terapija?',
          options: [
            'Amoksicilin-klavulanat oralno, 10 dana',
            'Kortikosteroidna krema dva puta dnevno',
            'Oralni i lokalni antibiotik zajedno',
            'Lokalni antibiotik (npr. mupirocin 2%) 3× dnevno, 5 dana'
          ],
          answer: 3,
          explain: 'Lokalizovan nebulozni impetigo leči se lokalno, 5 dana. Oralni antibiotik je za raširene i bulozne oblike, a kombinacija lokalnog i oralnog se ne preporučuje.'
        },
        {
          q: 'Žena, 62 god., crvenilo, otok i toplota desne potkolenice dva dana, temperatura 37,8 °C, TA i puls uredni. Između prstiju stopala ragade. Šta propisuješ?',
          options: [
            'Ciprofloksacin 500 mg na 12 h, 14 dana',
            'Cefaleksin 500 mg na 8 h, 5 dana, uz elevaciju noge i lečenje promena između prstiju',
            'Samo lokalni antibiotik na crvenilo',
            'Ceftriakson i.m. deset dana u ambulanti'
          ],
          answer: 1,
          explain: 'Blag celulitis bez sistemskih znakova leči se oralnim antibiotikom aktivnim na streptokok i stafilokok tokom 5 dana. Elevacija i lečenje ulaznog mesta ubrzavaju oporavak i smanjuju recidive.'
        },
        {
          q: 'Muškarac, 29 god., fluktuirajući, bolan čvor od 3 cm na leđima sa okolnim crvenilom od 1 cm; afebrilan, puls 78/min. Postupak?',
          options: [
            'Incizija i drenaža; antibiotik nije rutinski potreban',
            'Oralni antibiotik 10 dana, bez incizije',
            'Tople obloge i lokalni antibiotik',
            'Punkcija iglom i kortikosteroid u šupljinu'
          ],
          answer: 0,
          explain: 'Apsces se leči incizijom i drenažom. Antibiotik se dodaje kod znakova sistemskog odgovora ili oslabljenog imuniteta, a sam ne poboljšava izlečenje.'
        },
        {
          q: 'Dijabetičar, 58 god., crvenilo potkolenice od jutros; bol je nepodnošljiv iako je crvenilo malo, pojavile su se tamne bule, puls 124/min, TA 90/55 mmHg. Šta radiš?',
          options: [
            'Oralni antibiotik i kontrola za 48 h',
            'Ocrtaš granicu crvenila i naručiš ga sutra',
            'Hitan transport u bolnicu i hirurška procena zbog sumnje na nekrotizirajući fasciitis',
            'Uputiš ga na dopler vena narednog dana'
          ],
          answer: 2,
          explain: 'Bol nesrazmeran nalazu, bule, brzo napredovanje i znaci šoka ukazuju na nekrotizirajuću infekciju. Lečenje je hitan hirurški debridman uz intravenske antibiotike, a svako odlaganje povećava smrtnost.'
        }
      ]
    },
    {
      id: 'herpes-zoster',
      title: 'Herpes zoster i herpes simpleks',
      summary: 'Antivirusni lek kod zostera treba uvesti unutar 72 h od osipa; zoster oka ide oftalmologu istog dana.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Herpes zoster je reaktivacija varičela-zoster virusa u jednom dermatomu. Antivirusna terapija ubrzava zarastanje, smanjuje stvaranje novih promena i jačinu akutnog bola, a najefikasnija je ako se počne unutar 72 sata od pojave osipa. Kod herpes simpleksa izbor zavisi od lokalizacije i učestalosti recidiva.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Zoster: jednostrani bol ili pečenje u dermatomu, potom grupisane vezikule na crvenoj podlozi koje ne prelaze srednju liniju.',
          'Oftalmički zoster: zahvaćena prva grana trigeminusa (čelo, kapak); promene na vrhu nosa ukazuju na rizik po oko.',
          'Vezikule u ušnom kanalu uz parezu facijalisa: zoster oticus.',
          'Labijalni herpes: peckanje, zatim grupisane vezikule na rubu usne.',
          'Genitalni herpes: bolne vezikule i erozije; prva epizoda je obično najteža.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Zahvaćeno oko ili okolina oka, crveno oko, pad vida.',
          'Imunokompromitovan pacijent, osip u više dermatoma ili raširen osip.',
          'Pareza facijalnog nerva, znaci meningitisa ili encefalitisa.',
          'Herpes simpleks na ekcematoznoj koži sa temperaturom (eczema herpeticum).',
          'Trudnica bez preležanih varičela u kontaktu sa obolelim.'
        ] },
        { type: 'steps', title: 'Postupak kod zostera', items: [
          'Potvrdi kliničku dijagnozu, utvrdi vreme pojave osipa, zahvaćeni dermatom i imunološki status.',
          'Uvedi antivirusni lek što pre, najbolje unutar 72 h od pojave osipa; dozu prilagodi bubrežnoj funkciji.',
          'Leči bol od prvog dana: paracetamol ili NSAIL; kod jakog neuropatskog bola lekovi za neuropatski bol uz postepenu titraciju.',
          'Zahvaćeno oko: antivirusni lek odmah i pregled oftalmologa istog dana.',
          'Savet o zaraznosti: promene su zarazne dok se ne osuše i ne pokriju krustama.',
          'Do tada izbegavati kontakt sa osobama koje nisu preležale varičele, trudnicama, novorođenčadi i imunokompromitovanima.'
        ] },
        { type: 'drugs', title: 'Antivirusna terapija', items: [
          { name: 'valaciklovir (zoster)', dose: '1000 mg p.o. 3× dnevno, 7 dana', note: 'Klirens kreatinina 30–49 ml/min: 1000 mg 2× dnevno; 10–29 ml/min: 1000 mg 1× dnevno.' },
          { name: 'aciklovir (zoster, varičela odraslih)', dose: '800 mg p.o. 5× dnevno na oko 4 h, bez noćne doze, 7 dana', note: 'Smanjiti dozu kod oštećene bubrežne funkcije; obezbediti dobru hidrataciju.' },
          { name: 'valaciklovir (labijalni herpes)', dose: '2000 mg p.o. 2× u jednom danu, druga doza oko 12 h posle prve', note: 'Uzeti pri prvim simptomima.' },
          { name: 'aciklovir 5% krem (labijalni herpes)', dose: 'lokalno 5× dnevno, na 4 h', note: 'Početi pri prvom peckanju.' },
          { name: 'aciklovir (prva epizoda genitalnog herpesa)', dose: '400 mg p.o. 3× dnevno, 7–10 dana', note: 'Alternativa: valaciklovir 1 g p.o. 2× dnevno, 7–10 dana.' },
          { name: 'valaciklovir (recidiv genitalnog herpesa)', dose: '500 mg p.o. 2× dnevno, 3 dana', note: 'Alternativa: aciklovir 800 mg 2× dnevno, 5 dana. Supresija: aciklovir 400 mg 2× dnevno ili valaciklovir 500 mg 1× dnevno.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Oftalmički zoster: oftalmolog istog dana.',
          'Imunokompromitovan pacijent, diseminovan zoster, neurološke komplikacije: bolnica (intravenski aciklovir).',
          'Zoster oticus sa parezom facijalisa: ORL ili neurolog, hitno.',
          'Sumnja na herpetični keratitis (crveno, bolno oko): oftalmolog; ne propisuj kortikosteroidne kapi.',
          'Eczema herpeticum: istog dana sistemski aciklovir i dermatolog.',
          'Bol koji traje mesecima posle osipa uprkos terapiji: ambulanta za bol ili neurolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Za početak terapije kasnije od 72 h od pojave osipa nema podataka o koristi; zato se ne čeka.',
          'Valaciklovir smanjuje rizik od očnih komplikacija oftalmičkog zostera.',
          'Zoster ne prenosi zoster: neimuna osoba posle kontakta dobija varičele.',
          'Kod starijih i bubrežnih bolesnika neprilagođena doza aciklovira ili valaciklovira dovodi do neurotoksičnosti.',
          'Rekombinantna vakcina protiv zostera (2 doze) preporučuje se odraslima od 50 godina i imunokompromitovanima.'
        ] }
      ],
      sources: [
        { name: 'EMA: valaciklovir, harmonizovan sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/referral/valtrex-article-30-referral-annex-i-ii-iii_en.pdf' },
        { name: 'ALIMS: aciklovir tablete, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/001875970%202024%2059010%20007%20000%20515%20021%2004%20001.pdf' },
        { name: 'CDC: herpes zoster, klinički pregled', url: 'https://www.cdc.gov/shingles/hcp/clinical-overview/index.html' },
        { name: 'CDC: smernice za lečenje genitalnog herpesa', url: 'https://www.cdc.gov/std/treatment-guidelines/herpes.htm' }
      ],
      questions: [
        {
          q: 'Žena, 68 god., drugi dan ima grupisane vezikule u pojasu na levoj strani grudnog koša, uz jak bol. Bubrežna funkcija uredna. Terapija?',
          options: [
            'Samo analgetik, jer je virusna bolest samoograničavajuća',
            'Aciklovir krem lokalno pet puta dnevno',
            'Valaciklovir 1000 mg 3× dnevno, 7 dana, uz analgeziju',
            'Amoksicilin zbog sprečavanja superinfekcije'
          ],
          answer: 2,
          explain: 'Osip traje manje od 72 h, pa je sistemski antivirusni lek indikovan. Lokalni aciklovir ne deluje kod zostera, a analgezija se uvodi od prvog dana.'
        },
        {
          q: 'Muškarac, 74 god., vezikule na čelu i gornjem kapku desno, nekoliko i na vrhu nosa; oko je crveno. Postupak?',
          options: [
            'Antivirusni lek odmah i pregled oftalmologa istog dana',
            'Antibiotske kapi za oko i kontrola za tri dana',
            'Kortikosteroidne kapi za oko i antihistaminik',
            'Antivirusni lek i kontrola kod izabranog lekara za nedelju dana'
          ],
          answer: 0,
          explain: 'Zahvaćenost prve grane trigeminusa sa promenama na vrhu nosa i crvenim okom znači oftalmički zoster sa rizikom od keratitisa i gubitka vida. Antivirusni lek se uvodi odmah, a oftalmolog pregleda istog dana.'
        },
        {
          q: 'Pacijent, 81 god., zoster, klirens kreatinina 25 ml/min. Kako doziraš valaciklovir?',
          options: [
            '1000 mg 3× dnevno, kao i kod ostalih',
            '2000 mg 2× dnevno, jedan dan',
            '500 mg 5× dnevno',
            '1000 mg 1× dnevno'
          ],
          answer: 3,
          explain: 'Pri klirensu kreatinina 10–29 ml/min doza za zoster je 1000 mg jednom dnevno. Neprilagođena doza kod starijih sa bubrežnom slabošću nosi rizik od neurotoksičnosti.'
        },
        {
          q: 'Student, 23 god., treći put ove godine oseća peckanje na rubu usne, vezikule se još nisu pojavile. Traži tablete. Šta je ispravno?',
          options: [
            'Aciklovir 800 mg 5× dnevno, 7 dana',
            'Valaciklovir 2000 mg, dve doze u razmaku od oko 12 h, samo jedan dan',
            'Antibiotska mast tri puta dnevno',
            'Kortikosteroidna krema na usnu'
          ],
          answer: 1,
          explain: 'Za labijalni herpes kod odraslih efikasna je jednodnevna terapija valaciklovirom 2000 mg dva puta, započeta pri prvim simptomima. Doza od 800 mg aciklovira pet puta dnevno je režim za zoster.'
        }
      ]
    },
    {
      id: 'suga',
      title: 'Šuga i vašljivost',
      summary: 'Permetrin 5% za obolelog i sve ukućane istovremeno; svrab posle terapije ne znači neuspeh.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Šugu izaziva grinja Sarcoptes scabiei i prenosi se bliskim kontaktom kože. Leči se permetrinom 5% ili oralnim ivermektinom, a istovremeno se leče svi ukućani i bliski kontakti, i oni bez tegoba. Vašljivost glave se leči lokalnim pedikulocidom uz ponavljanje tretmana, jer većina preparata ne ubija jaja.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Šuga: jak svrab koji se pojačava noću; slične tegobe imaju i ukućani.',
          'Papule, ekskorijacije i kanalići između prstiju, na ručnim zglobovima, u pazuhu, oko pupka i na genitalijama.',
          'Krustozna šuga: debele kruste sa ogromnim brojem grinja kod starih i imunokompromitovanih; veoma zarazna.',
          'Vašljivost glave: svrab poglavine, gnjide čvrsto zalepljene uz dlaku, žive vaši.',
          'Stidne vaši: svrab u preponama; prenose se polnim kontaktom.'
        ] },
        { type: 'steps', title: 'Postupak kod šuge', items: [
          'Postavi kliničku dijagnozu i popiši sve ukućane i bliske kontakte.',
          'Permetrin 5% krem naneti na celo telo od vrata nadole i oprati posle 8–14 sati.',
          'Jedna primena može biti dovoljna; često su potrebne dve ili više primena u razmaku od oko nedelju dana.',
          'Svi ukućani i bliski kontakti leče se istovremeno sa obolelim.',
          'Odeću i posteljinu korišćenu u poslednja tri dana oprati vrućom vodom i osušiti na visokoj temperaturi (preko 50 °C najmanje 10 minuta).',
          'Ono što ne može da se pere držati u zatvorenoj plastičnoj kesi od nekoliko dana do nedelju dana.',
          'Objasni da svrab može potrajati i posle uspešne terapije; to nije razlog za ponavljanje leka bez pregleda.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'permetrin 5% krem (šuga)', dose: 'lokalno na celo telo od vrata nadole, ostaviti 8–14 h, pa oprati; po potrebi ponoviti za oko 7 dana', note: 'Prva linija.' },
          { name: 'ivermektin (šuga)', dose: '200 µg/kg p.o., dve doze u razmaku od 7–14 dana', note: 'Bezbednost nije utvrđena kod dece lakše od 15 kg i kod trudnica. Proveri dostupnost i status registracije.' },
          { name: 'sumporna mast 5–10% (šuga)', dose: 'lokalno, prema uputstvu za magistralni preparat', note: 'Alternativa; bezbedna i kod odojčadi mlađe od 2 meseca.' },
          { name: 'permetrin 1% (vašljivost glave)', dose: 'lokalno na kosu prema uputstvu proizvođača; ponoviti 9. dana', note: 'Ubija žive vaši, ali ne i jaja, pa je drugi tretman potreban.' },
          { name: 'permetrin 1% (stidne vaši)', dose: 'lokalno na zahvaćenu regiju, prema uputstvu proizvođača', note: 'Pregledati i lečiti polne partnere; savetovati testiranje na druge polno prenosive infekcije.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Krustozna šuga: dermatolog ili infektolog (kombinacija oralnog ivermektina i lokalnog permetrina).',
          'Nesigurna dijagnoza ili izostanak odgovora posle pravilno sprovedene terapije cele porodice.',
          'Epidemija u kolektivu (dom za stare, vrtić): obavesti nadležnu epidemiološku službu.',
          'Izražena sekundarna bakterijska infekcija kože.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Najčešći razlog neuspeha je to što nisu lečeni svi kontakti u isto vreme.',
          'Grinje šuge po pravilu ne preživljavaju duže od 2–3 dana van ljudske kože.',
          'Isti pedikulocid ne primenjuj više od 2–3 puta ako ne deluje; promeni preparat.',
          'Svrab noću kod više članova porodice je šuga dok se ne dokaže suprotno.',
          'Stidne vaši su razlog za razgovor o polno prenosivim infekcijama.'
        ] }
      ],
      sources: [
        { name: 'CDC: šuga, klinička nega', url: 'https://www.cdc.gov/scabies/hcp/clinical-care/index.html' },
        { name: 'CDC: šuga, prevencija', url: 'https://www.cdc.gov/scabies/prevention/index.html' },
        { name: 'CDC: vašljivost glave, klinička nega', url: 'https://www.cdc.gov/lice/hcp/clinical-care/index.html' },
        { name: 'CDC: stidne vaši', url: 'https://www.cdc.gov/lice/about/pubic-lice.html' }
      ],
      questions: [
        {
          q: 'Muškarac, 44 god., tri nedelje ima svrab koji je najjači noću; papule i kanalići između prstiju i na ručnim zglobovima. Supruga i sin imaju slične tegobe. Šta propisuješ?',
          options: [
            'Kortikosteroidnu kremu i antihistaminik samo njemu',
            'Permetrin 5% krem njemu i svim ukućanima istovremeno, uz pranje odeće i posteljine',
            'Permetrin 5% samo onima koji imaju svrab',
            'Oralni antibiotik zbog sumnje na impetigo'
          ],
          answer: 1,
          explain: 'Šuga se leči permetrinom 5% od vrata nadole, a svi ukućani i bliski kontakti leče se istovremeno, i oni bez simptoma. U suprotnom dolazi do ponovnog zaražavanja.'
        },
        {
          q: 'Pacijent je pravilno sproveo terapiju permetrinom pre deset dana, kao i cela porodica. Novih promena nema, ali ga koža i dalje svrbi. Šta je ispravno?',
          options: [
            'Odmah ponoviti permetrin tri dana zaredom',
            'Preći na oralni ivermektin jer je permetrin zakazao',
            'Uvesti oralni kortikosteroid mesec dana',
            'Objasniti da svrab može da potraje i posle uspešne terapije; simptomatska terapija i kontrola'
          ],
          answer: 3,
          explain: 'Svrab posle uspešnog lečenja šuge može trajati još neko vreme i ne znači neuspeh ako nema novih promena. Nepotrebno ponavljanje skabicida samo iritira kožu.'
        },
        {
          q: 'Devojčica, 7 god., žive vaši u kosi. Majka je koristila permetrin 1% pre dva dana. Kada treba ponoviti tretman?',
          options: [
            'Oko 9. dana od prvog tretmana',
            'Svakog dana tokom nedelju dana',
            'Tek posle mesec dana, ako se vaši ponovo vide',
            'Drugi tretman nije potreban'
          ],
          answer: 0,
          explain: 'Permetrin ubija žive vaši, ali ne i jaja, pa se tretman ponavlja oko 9. dana da uništi novoizlegle vaši pre nego što polože nova jaja.'
        }
      ]
    },
    {
      id: 'dermatitis',
      title: 'Atopijski, kontaktni i seboroični dermatitis',
      summary: 'Emolijens svakodnevno i u izobilju; jačina lokalnog kortikosteroida bira se prema težini i regiji, kratko i ciljano.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Emolijensi su osnov lečenja atopijskog dermatitisa i koriste se uvek, i kada je koža mirna. Pogoršanja se leče lokalnim kortikosteroidom čija se jačina bira prema težini promena i regiji tela, jednom do dva puta dnevno. Kod kontaktnog dermatitisa ključno je otkriti i ukloniti uzrok, a seboroični dobro reaguje na ketokonazol.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Atopijski dermatitis: suva koža, svrab, ekcem pregiba; često uz astmu ili alergijski rinitis.',
          'Kontaktni iritativni: crvenilo, suvoća i ragade na mestu ponavljanog kontakta (voda, deterdženti); najčešće šake.',
          'Kontaktni alergijski: ekcem tačno na mestu dodira sa alergenom, nekad sa širenjem.',
          'Seboroični: crvenilo sa masnim, žućkastim ljuspama na poglavini, obrvama, oko nosa i na grudima.',
          'Bakterijska superinfekcija: vlaženje, pustule, žućkaste kruste, naglo pogoršanje ekcema.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          'Grupisane vezikule ili sitne okrugle erozije na ekcemu, uz bol i temperaturu: eczema herpeticum.',
          'Eczema herpeticum oko očiju.',
          'Ekcem koji se naglo širi uz temperaturu i loše opšte stanje.',
          'Crvenilo i ljuštenje većeg dela kože.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Emolijens bez mirisa svakodnevno na celu kožu, u velikim količinama, i umesto sapuna pri pranju.',
          'Emolijens se nanosi blagim prevlačenjem po koži, ne utrljavanjem.',
          'Pogoršanje: lokalni kortikosteroid 1–2× dnevno, jačine prema težini i regiji.',
          'Lice i vrat: blagi kortikosteroid; umereno jak samo kratko (3–5 dana) kod teških pogoršanja.',
          'Pazuh i prepone: umereno jaki ili jaki samo kratko (7–14 dana).',
          'Kontaktni dermatitis: otkrij i ukloni uzrok, zaštita kože; kod sumnje na alergijski uputi na epikutano testiranje.',
          'Seboroični dermatitis: ketokonazol šampon ili krem, pa terapija održavanja.'
        ] },
        { type: 'list', title: 'Jačina lokalnih kortikosteroida', items: [
          '**Blagi**: hidrokortizon; za blag ekcem, lice i vrat.',
          '**Umereno jaki**: klobetazon-butirat; za umereno težak ekcem.',
          '**Jaki**: npr. betametazon i mometazon; za težak ekcem na trupu i ekstremitetima, kratko.',
          '**Veoma jaki**: klobetazol-propionat; ne kod dece bez saveta dermatologa.',
          'Jedinica vrha prsta (od vrha do prvog zgloba kažiprsta) dovoljna je za površinu dva dlana.',
          'Na licu i genitalijama kortikosteroid lako ošteti kožu; koristi najslabiji i najkraće moguće.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'emolijens (bez mirisa)', dose: 'lokalno više puta dnevno; propisati 250–500 g nedeljno', note: 'Koristiti i u mirnoj fazi.' },
          { name: 'hidrokortizon krem ili mast', dose: 'lokalno 1–2× dnevno, do 7 dana', note: 'Blagi; pogodan za lice kratkotrajno.' },
          { name: 'ketokonazol 2% šampon (seboroični dermatitis)', dose: 'lokalno 2× nedeljno, 2–4 nedelje; održavanje 1× na 1–2 nedelje', note: 'Za poglavinu i perut.' },
          { name: 'ketokonazol 2% krem (seboroični dermatitis)', dose: 'lokalno 1–2× dnevno, 2–4 nedelje', note: 'Za lice i trup.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na eczema herpeticum: istog dana sistemski aciklovir i dermatolog; oko očiju i oftalmolog.',
          'Težak ekcem bez odgovora na pravilno sprovedenu terapiju.',
          'Sumnja na alergijski kontaktni dermatitis ili profesionalnu bolest kože: epikutani test.',
          'Potreba za lokalnim inhibitorom kalcineurina (druga linija, uvodi dermatolog).',
          'Nesigurna dijagnoza.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Najčešća greška je premalo emolijensa i strah od kortikosteroida; kratak, dovoljno jak kurs je bolji od dugog slabog.',
          'Kod infekcije ekcema bris kože nije rutinski potreban pri prvom javljanju.',
          'Emolijensi na odeći i posteljini povećavaju zapaljivost tkanine: upozori pušače.',
          'Dodaci za kupku sa emolijensom ne donose korist uz standardnu negu.',
          'Lokalni kortikosteroid se nanosi najviše 1–2× dnevno; češća primena ne donosi korist.'
        ] }
      ],
      sources: [
        { name: 'NICE CG57 (atopijski ekcem kod dece do 12 godina)', url: 'https://www.nice.org.uk/guidance/cg57/chapter/Recommendations' },
        { name: 'NHS: hidrokortizon za kožu', url: 'https://www.nhs.uk/medicines/hydrocortisone-for-skin/how-and-when-to-use-hydrocortisone-for-skin/' },
        { name: 'NHS: klobetazol', url: 'https://www.nhs.uk/medicines/clobetasol/about-clobetasol/' },
        { name: 'NHS: ketokonazol', url: 'https://www.nhs.uk/medicines/ketoconazole/how-and-when-to-use-ketoconazole/' }
      ],
      questions: [
        {
          q: 'Majka dovodi dečaka, 5 god., sa atopijskim dermatitisom: suva koža i umereno crveni plakovi u pregibima laktova. Emolijens maže retko, jer brzo potroši tubu. Šta je osnov terapije?',
          options: [
            'Emolijens svakodnevno u velikim količinama, uz kratak kurs lokalnog kortikosteroida na promene',
            'Samo oralni antihistaminik uveče',
            'Veoma jak kortikosteroid na celo telo dve nedelje',
            'Oralni antibiotik i antimikotična krema'
          ],
          answer: 0,
          explain: 'Emolijens je osnov lečenja i koristi se stalno, u količini od 250–500 g nedeljno. Pogoršanja se leče lokalnim kortikosteroidom odgovarajuće jačine, a veoma jaki preparati se kod dece ne koriste bez dermatologa.'
        },
        {
          q: 'Žena, 27 god., ima blag ekcem na kapcima i obrazima. Koji lokalni kortikosteroid je primeren?',
          options: [
            'Klobetazol-propionat, da brže prođe',
            'Betametazon dva puta dnevno mesec dana',
            'Blagi kortikosteroid (hidrokortizon), kratko',
            'Nijedan; na licu su kortikosteroidi zabranjeni'
          ],
          answer: 2,
          explain: 'Na licu i vratu koriste se blagi preparati, najkraće moguće, jer koža tu lako atrofira. Umereno jaki se koriste samo kratko kod teških pogoršanja, a veoma jaki ne.'
        },
        {
          q: 'Devojčica, 3 god., sa atopijskim dermatitisom dobija temperaturu 38,9 °C; na ekcemu obraza i vrata su se za dan pojavile brojne sitne vezikule i okrugle erozije, veoma bolne. Postupak?',
          options: [
            'Jači lokalni kortikosteroid i kontrola za tri dana',
            'Lokalni antibiotik i emolijens',
            'Oralni antihistaminik i hladne obloge',
            'Sistemski aciklovir odmah i dermatolog istog dana'
          ],
          answer: 3,
          explain: 'To je eczema herpeticum, širenje herpes simpleks virusa po ekcematoznoj koži. Zahteva sistemski aciklovir odmah i specijalistički pregled istog dana; kortikosteroid ga pogoršava.'
        },
        {
          q: 'Muškarac, 40 god., crvenilo sa masnim žućkastim ljuspama na obrvama, oko nosa i na poglavini, pogoršava se zimi. Terapija?',
          options: [
            'Oralni terbinafin šest nedelja',
            'Ketokonazol 2% šampon dva puta nedeljno 2–4 nedelje, zatim održavanje',
            'Jak kortikosteroid na lice svakodnevno',
            'Oralni antibiotik dve nedelje'
          ],
          answer: 1,
          explain: 'Slika odgovara seboroičnom dermatitisu, koji dobro reaguje na ketokonazol. Posle početne terapije šampon se koristi jednom u 1–2 nedelje da se spreče recidivi.'
        }
      ]
    },
    {
      id: 'gljivicne-infekcije',
      title: 'Gljivične infekcije kože i noktiju',
      summary: 'Koža se leči lokalno 1–2 nedelje; nokti traže terbinafin mesecima, uz proveru jetre pre terapije.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Dermatofitne infekcije kože (stopalo, prepone, trup) najčešće se uspešno leče lokalnim antimikotikom. Infekcija nokta zahteva višemesečnu sistemsku terapiju terbinafinom, koji može oštetiti jetru, pa dijagnozu i funkciju jetre treba proveriti pre uvođenja.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Tinea pedis: maceracija, ljuštenje i ragade između prstiju; ili suvo ljuštenje tabana.',
          'Tinea cruris i corporis: prstenasta ploča sa aktivnim, uzdignutim rubom koji se ljušti i bledim centrom.',
          'Onihomikoza: zadebljao, žućkast, trošan nokat sa odvajanjem od ležišta; češće na stopalima.',
          'Pityriasis versicolor: svetlije ili tamnije mrlje sa finim ljuštenjem na trupu, uočljivije posle sunčanja.',
          'Kandida u pregibima: jarko crvenilo sa vlaženjem i sitnim pustulama po obodu.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Koža: lokalni antimikotik na promenu i okolnu kožu; održavati kožu suvom, menjati čarape svakog dana.',
          'Ako nema poboljšanja posle 2 nedelje lokalne terapije, preispitaj dijagnozu i razmotri mikološki pregled.',
          'Nokti: pre sistemske terapije potvrdi dijagnozu mikološki, jer mnoge promene nokta nisu gljivične.',
          'Pre terbinafina uradi testove funkcije jetre; ponovi ih posle 4–6 nedelja terapije.',
          'Objasni da nokat izrasta sporo i da se zdrav izgled vidi tek mesecima posle završetka terapije.',
          'Blaga onihomikoza: lokalni lak, uz upozorenje da terapija traje 6–12 meseci.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'terbinafin 1% krem', dose: 'lokalno 1–2× dnevno, 1–2 nedelje', note: 'Tinea pedis, cruris i corporis.' },
          { name: 'ketokonazol 2% krem', dose: 'lokalno 1–2× dnevno; kod tinea pedis 2× dnevno; nastaviti još 3 dana posle povlačenja promena', note: 'Alternativa terbinafinu.' },
          { name: 'ketokonazol 2% šampon (pityriasis versicolor)', dose: 'lokalno 1× dnevno, do 5 dana', note: 'Promena boje kože povlači se sporo i posle izlečenja.' },
          { name: 'terbinafin tablete (koža)', dose: '250 mg p.o. 1× dnevno: tinea pedis 2–6 nedelja, tinea corporis 4 nedelje, tinea cruris 2–4 nedelje', note: 'Kod raširenih promena ili neuspeha lokalne terapije.' },
          { name: 'terbinafin tablete (onihomikoza)', dose: '250 mg p.o. 1× dnevno, 6 nedelja do 3 meseca; za nokte stopala obično 3 meseca', note: 'Kontraindikovan kod hronične ili aktivne bolesti jetre. Prekinuti odmah kod porasta jetrenih enzima.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Gljivična infekcija kosmatog dela glave, posebno kod dece (potrebna sistemska terapija): dermatolog.',
          'Neuspeh pravilno sprovedene terapije ili nesigurna dijagnoza.',
          'Raširene ili neuobičajene promene kod imunokompromitovanog pacijenta.',
          'Onihomikoza kod pacijenta sa bolešću jetre ili brojnim interakcijama lekova.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kortikosteroidna krema na dermatofitozi prolazno smiri crvenilo, ali infekcija se širi i slika postaje netipična.',
          'Recidivantni celulitis potkolenice često polazi od nelečene gljivične infekcije između prstiju.',
          'Kod uporne kandidijaze pregiba proveri glikemiju.',
          'Pacijent na terbinafinu treba odmah da se javi zbog mučnine, tamne mokraće, žutice ili svraba.',
          'Ne leči nokat sistemski bez potvrde: psorijaza i trauma nokta izgledaju slično.'
        ] }
      ],
      sources: [
        { name: 'ALIMS: terbinafin tablete, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/000454818%202023%2059010%20007%20000%20515%20021%2004%20002.pdf' },
        { name: 'NHS: terbinafin', url: 'https://www.nhs.uk/medicines/terbinafine/how-and-when-to-take-or-use-terbinafine/' },
        { name: 'NHS: ketokonazol', url: 'https://www.nhs.uk/medicines/ketoconazole/how-and-when-to-use-ketoconazole/' },
        { name: 'NHS: gljivična infekcija nokta', url: 'https://www.nhs.uk/conditions/fungal-nail-infection/' }
      ],
      questions: [
        {
          q: 'Muškarac, 33 god., rekreativac, ima svrab, maceraciju i ljuštenje između četvrtog i petog prsta stopala. Terapija?',
          options: [
            'Oralni terbinafin tri meseca',
            'Kortikosteroidna krema dva puta dnevno',
            'Terbinafin 1% krem 1–2× dnevno, 1–2 nedelje, uz sušenje stopala',
            'Oralni antibiotik sedam dana'
          ],
          answer: 2,
          explain: 'Interdigitalna tinea pedis leči se lokalnim antimikotikom uz održavanje kože suvom. Sistemska terapija je za raširene oblike ili neuspeh lokalne.'
        },
        {
          q: 'Žena, 56 god., zadebljao i žut nokat palca stopala; traži tablete. Šta radiš pre uvođenja terbinafina?',
          options: [
            'Ništa, klinička slika je dovoljna',
            'Uradiš samo krvnu sliku',
            'Uvedeš probno lek na dve nedelje, pa proceniš',
            'Potvrdiš dijagnozu mikološki i uradiš testove funkcije jetre'
          ],
          answer: 3,
          explain: 'Mnoge distrofije nokta nisu gljivične, a terapija traje mesecima i nosi rizik od oštećenja jetre. Zato se dijagnoza potvrđuje, a jetra proverava pre terapije i ponovo posle 4–6 nedelja.'
        },
        {
          q: 'Pacijentkinji je dijagnoza potvrđena, jetreni enzimi su uredni. Kako doziraš terbinafin za nokat stopala?',
          options: [
            '250 mg jednom dnevno, obično 3 meseca',
            '250 mg jednom dnevno, 2 nedelje',
            '500 mg dva puta dnevno, 6 nedelja',
            '250 mg jednom nedeljno, godinu dana'
          ],
          answer: 0,
          explain: 'Doza je 250 mg jednom dnevno; za nokte stopala obično su potrebna 3 meseca, a neki pacijenti trebaju i dužu terapiju. Nokat poprima zdrav izgled tek mesecima kasnije.'
        },
        {
          q: 'Mladić, 19 god., ima prstenastu promenu na butini. Dve nedelje je mazao kortikosteroidnu kremu: crvenilo se smanjilo, ali se promena proširila i rub je nejasan. Šta je najverovatnije?',
          options: [
            'Alergija na kremu; treba jači kortikosteroid',
            'Dermatofitoza izmenjena kortikosteroidom; ukinuti ga i uvesti antimikotik',
            'Psorijaza; uputiti na fototerapiju',
            'Bakterijska infekcija; uvesti oralni antibiotik'
          ],
          answer: 1,
          explain: 'Kortikosteroid prolazno smiri upalu, ali olakša širenje gljive i izmeni izgled promene. Lek se ukida i uvodi antimikotik; kod nejasne slike pomaže mikološki pregled.'
        }
      ]
    },
    {
      id: 'lajmska-bolest',
      title: 'Ujed krpelja i Lajmska bolest',
      summary: 'Krpelja izvaditi pincetom bez premazivanja; erythema migrans se leči odmah, bez serologije.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina uboda krpelja ne prenosi Lajmsku bolest, a brzo i pravilno vađenje smanjuje rizik. Erythema migrans je klinička dijagnoza: leči se odmah, bez laboratorijske potvrde. Osobe bez simptoma se ne leče i ne testiraju samo zato što su imale ubod.' },
        { type: 'steps', title: 'Vađenje krpelja', items: [
          'Uhvati krpelja čistom pincetom tankih vrhova što bliže površini kože.',
          'Povlači ravnomerno i postojano, bez uvrtanja i trzanja.',
          'Ne koristi vazelin, ulje, lak za nokte ni toplotu da bi se krpelj sam odvojio.',
          'Mesto uboda i ruke operi sapunom i vodom ili dezinfikuj alkoholom.',
          'Zabeleži datum i mesto uboda; uputi pacijenta da narednih nedelja prati kožu i opšte stanje.',
          'Ako se pojave crvenilo koje se širi ili temperatura, treba da se javi i pomene ubod.'
        ] },
        { type: 'list', title: 'Klinička slika', items: [
          '**Erythema migrans**: crvenilo koje se širi, obično na mestu uboda; najčešće se javlja 1–4 nedelje posle uboda (raspon 3 dana do 3 meseca).',
          'Reakcija na ubod nije erythema migrans: javlja se i povlači u prvih 48 h, toplija je, svrbi ili boli.',
          'Rana diseminovana bolest: višestruki eritemi, pareza facijalisa, meningoradikulitis, karditis sa AV blokom.',
          'Kasna bolest: artritis velikih zglobova (najčešće kolena), hronične promene kože.'
        ] },
        { type: 'list', title: 'Dijagnostika', items: [
          'Erythema migrans: bez laboratorije, odmah terapija.',
          'Bez erythema migrans: ELISA; ako je pozitivna ili granična, potvrda imunoblot testom.',
          'Negativna ELISA u prve 4 nedelje od početka simptoma uz i dalje prisutnu sumnju: ponoviti za 4–6 nedelja.',
          'Simptomi duži od 12 nedelja uz negativnu ELISA i jaku sumnju: uraditi imunoblot.',
          'Ne postavljaj dijagnozu osobi bez simptoma, čak i ako je imala ubod krpelja.'
        ] },
        { type: 'drugs', title: 'Terapija erythema migrans', items: [
          { name: 'doksiciklin', dose: '100 mg p.o. 2× dnevno, 10 dana (IDSA); NICE preporučuje 21 dan', note: 'Prvi izbor. Deca: 4,4 mg/kg dnevno u 2 doze, najviše 100 mg po dozi.' },
          { name: 'amoksicilin', dose: '500 mg p.o. 3× dnevno, 14 dana (IDSA); NICE preporučuje 1 g 3× dnevno, 21 dan', note: 'Trudnice i kada je doksiciklin kontraindikovan. Deca: 50 mg/kg dnevno u 3 doze, najviše 500 mg po dozi.' },
          { name: 'cefuroksim-aksetil', dose: '500 mg p.o. 2× dnevno, 14 dana', note: 'Alternativa. Deca: 30 mg/kg dnevno u 2 doze.' },
          { name: 'azitromicin', dose: '500 mg p.o. 1× dnevno, 5–10 dana (NICE: 17 dana)', note: 'Samo ako se prva tri leka ne podnose; manje je efikasan.' }
        ] },
        { type: 'list', title: 'Profilaksa posle uboda', items: [
          'Rutinska antibiotska profilaksa posle svakog uboda se ne preporučuje; osnov je posmatranje.',
          'IDSA: jednokratno doksiciklin 200 mg p.o. (deca 4,4 mg/kg, najviše 200 mg) samo kod visokorizičnog uboda, unutar 72 h od vađenja.',
          'Visokorizičan ubod ispunjava sva tri uslova: Ixodes krpelj, visoko endemsko područje, pripijen 36 h ili duže.',
          'Ako se rizik ne može pouzdano proceniti, preporuka je čekanje i praćenje.',
          'Profilaksa ne garantuje zaštitu: pacijent i dalje prati kožu i simptome.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na infekciju CNS, uveitis ili srčane komplikacije (AV blok): hitno u bolnicu.',
          'Fokalni simptomi kod odraslog (pareza facijalisa, artritis, radikulitis): infektolog ili odgovarajući specijalista, bez odlaganja terapije.',
          'Deca i mladi do 18 godina, osim kod pojedinačnog erythema migrans bez drugih simptoma: konsultacija specijaliste.',
          'Simptomi koji traju posle terapije.',
          'U Srbiji pri Pasterovom zavodu u Novom Sadu radi Savetovalište za lajmsku boreliozu i druge bolesti koje prenose krpelji.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Erythema migrans je dovoljan za dijagnozu i terapiju; čekanje serologije samo odlaže lečenje.',
          'Krpelj koji je kratko pripijen i nije se nasisao krvi nosi mali rizik; prenos se uglavnom dešava posle 36–48 h.',
          'Na početku terapije moguće je prolazno pogoršanje (temperatura, jeza, bolovi u mišićima): Jarisch-Herxheimerova reakcija.',
          'Pacijent često ne primeti ubod; izostanak podatka o krpelju ne isključuje bolest.'
        ] }
      ],
      sources: [
        { name: 'NICE NG95 (Lajmska bolest)', url: 'https://www.nice.org.uk/guidance/ng95/chapter/Recommendations' },
        { name: 'IDSA/AAN/ACR vodič za Lajmsku bolest 2020', url: 'https://www.idsociety.org/practice-guideline/lyme-disease/' },
        { name: 'CDC: šta uraditi posle uboda krpelja', url: 'https://www.cdc.gov/ticks/after-a-tick-bite/index.html' },
        { name: 'CDC: lečenje erythema migrans', url: 'https://www.cdc.gov/lyme/hcp/clinical-care/erythema-migrans-rash.html' }
      ],
      questions: [
        {
          q: 'Majka dovodi dete sa krpeljom pripijenim iza uva. Kako ga vadiš?',
          options: [
            'Premažeš ga uljem i sačekaš da se sam odvoji',
            'Pincetom tankih vrhova uz samu kožu, ravnomernim povlačenjem bez uvrtanja',
            'Uvrćeš ga prstima u smeru kazaljke na satu',
            'Približiš zagrejanu iglu da se krpelj povuče'
          ],
          answer: 1,
          explain: 'Krpelj se hvata pincetom što bliže koži i izvlači ravnomernim povlačenjem. Ulje, vazelin, lak i toplota se ne koriste.'
        },
        {
          q: 'Žena, 39 god., dve nedelje posle izleta ima na butini crvenilo prečnika 9 cm koje se širi, sa bledim centrom. Krpelja nije primetila, oseća se dobro. Postupak?',
          options: [
            'Uraditi serologiju i lečiti samo ako je pozitivna',
            'Kortikosteroidna krema i kontrola za dve nedelje',
            'Antihistaminik, jer je verovatno reakcija na ubod insekta',
            'Odmah doksiciklin 100 mg 2× dnevno, bez laboratorijske potvrde'
          ],
          answer: 3,
          explain: 'Erythema migrans je klinička dijagnoza i leči se bez serologije, koja je u ranoj fazi često negativna. Izostanak podatka o krpelju ne isključuje bolest.'
        },
        {
          q: 'Muškarac, 45 god., juče je izvadio krpelja koji je bio pripijen nekoliko sati posle šetnje gradskim parkom. Nema tegoba, traži antibiotik „za svaki slučaj“. Šta savetuješ?',
          options: [
            'Praćenje mesta uboda i opšteg stanja narednih nedelja; antibiotik nije potreban',
            'Doksiciklin 100 mg 2× dnevno, 10 dana',
            'Amoksicilin 500 mg 3× dnevno, 14 dana',
            'Serologiju na boreliju odmah, pa odluku'
          ],
          answer: 0,
          explain: 'Kratko pripijen krpelj nosi mali rizik, a rutinska profilaksa se ne preporučuje. Serologija neposredno posle uboda nema smisla; važno je da zna šta da prati i kada da se javi.'
        },
        {
          q: 'Trudnica, 12. nedelja, ima tipičan erythema migrans. Koji antibiotik biraš?',
          options: [
            'Doksiciklin',
            'Ciprofloksacin',
            'Amoksicilin',
            'Ne lečiti do porođaja'
          ],
          answer: 2,
          explain: 'Amoksicilin je izbor kada je doksiciklin kontraindikovan, kao u trudnoći. Erythema migrans se leči odmah i u trudnoći.'
        }
      ]
    },
    {
      id: 'ujedi-rane',
      title: 'Ujedi životinja, rane i antitetanusna zaštita',
      summary: 'Obilno ispiranje rane, procena za tetanus i besnilo kod svake povrede; antibiotik samo kod rizičnih ujeda.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kod svakog ujeda i rane redosled je isti: obrada rane, procena potrebe za antibiotikom, antitetanusna zaštita i procena rizika od besnila. Infekcije posle ujeda su polimikrobne (aerobi i anaerobi), pa je lek izbora amoksicilin sa klavulanskom kiselinom. Antirabičnu zaštitu indikuje i sprovodi nadležna antirabična stanica.' },
        { type: 'steps', title: 'Obrada rane', items: [
          'Što pre temeljno operi i ispiraj ranu sapunom i obilnom količinom vode, oko 15 minuta.',
          'Ukloni strana tela i devitalizovano tkivo (debridman); proveri funkciju tetiva, nerava i cirkulaciju.',
          'Ujedne rane se po pravilu ne šiju primarno; izuzetak je lice, uz obilno ispiranje i antibiotsku profilaksu.',
          'Imobiliši povređeni deo tela.',
          'Proceni indikaciju za antibiotik, antitetanusnu i antirabičnu zaštitu.',
          'Kontrola za 24–48 h; ranije kod bola, crvenila, sekrecije ili temperature.'
        ] },
        { type: 'list', title: 'Kada dati antibiotsku profilaksu', items: [
          'Mačji ujed koji je probio kožu i izazvao krvarenje: dati; i bez krvarenja ako rana može biti duboka.',
          'Ljudski ujed koji je probio kožu i izazvao krvarenje: dati.',
          'Pseći ujed sa krvarenjem: dati ako je rana duboka, ubodna ili gnječna, vidno zaprljana ili zahvata kost, zglob, tetivu ili krvni sud.',
          'Razmotriti kod rana na šaci, stopalu, licu, genitalijama i preko hrskavice, i kod dijabetesa, imunosupresije, asplenije, ciroze.',
          'Ujed koji nije probio kožu: bez antibiotika.',
          'Zdrav pacijent sa površnom ranom bez znakova infekcije: bez antibiotika.'
        ] },
        { type: 'drugs', title: 'Antibiotik', items: [
          { name: 'amoksicilin-klavulanat', dose: '500/125 mg p.o. na 8 h; profilaksa 3 dana, lečenje infekcije 5 dana', note: 'Prvi izbor kod ujeda zbog delovanja na anaerobe.' },
          { name: 'doksiciklin + metronidazol', dose: 'doksiciklin 200 mg p.o. prvog dana, zatim 100–200 mg dnevno; metronidazol 400 mg p.o. na 8 h', note: 'Kod alergije na penicilin; profilaksa 3 dana, lečenje 5 dana. U trudnoći tražiti savet specijaliste.' },
          { name: 'cefaleksin', dose: '500 mg p.o. na 8 h, 5 dana', note: 'Samo za inficirane rane koje nisu od ujeda.' }
        ] },
        { type: 'list', title: 'Antitetanusna zaštita po Pravilniku o imunizaciji', items: [
          'Potpuno vakcinisan i revakcinisan (najmanje 4 doze), poslednja doza pre manje od 10 godina: ni vakcina ni imunoglobulin.',
          'Potpuno vakcinisan, a poslednja doza pre više od 10 godina: jedna doza vakcine i 250 IJ humanog antitetanusnog imunoglobulina (HTIG).',
          'Nevakcinisan, nepotpuno vakcinisan ili bez dokaza: prva doza vakcine i HTIG odmah.',
          'Drugu dozu vakcine dati posle najmanje mesec dana, a treću najmanje šest meseci posle druge.',
          'Vakcina i HTIG daju se istovremeno, i.m., u naspramne ekstremitete.'
        ] },
        { type: 'list', title: 'Antirabična zaštita', items: [
          'Kategorija I (dodir, lizanje neoštećene kože): pranje, bez profilakse.',
          'Kategorija II (manje ogrebotine bez krvarenja): pranje rane i vakcinacija odmah.',
          'Kategorija III (ujedi i ogrebotine kroz kožu, kontakt sluzokože sa pljuvačkom): pranje, vakcina i imunoglobulin.',
          'Indikacije u Srbiji: ozleda od besne ili na besnilo sumnjive divlje ili domaće životinje.',
          'Takođe: ujed mačke nepoznatog vlasnika koja se ne može staviti pod desetodnevni veterinarski nadzor.',
          'Za psa nepoznatog vlasnika isto važi na teritoriji sa nepovoljnom epidemiološkom situacijom, koju procenjuje Pasterov zavod.',
          'Humani antirabični imunoglobulin: 20 IJ/kg, infiltrira se u ranu i oko nje, kod svih ozleda koje probijaju kožu.'
        ] },
        { type: 'refer', title: 'Kome se upućuje', items: [
          'Antirabična stanica nadležnog zavoda za javno zdravlje, istog dana: svaki ujed ili ogrebotina životinje sumnjive na besnilo.',
          'Hirurg: rana koja zahvata tetive, zglob, kost, nerve ili krvne sudove; ujedi šake; veliki defekti; rane lica.',
          'Bolnica: celulitis koji se širi, apsces, septični artritis, osteomijelitis, sepsa.',
          'Konsultacija: infekcija uprkos profilaksi, limfangitis, pacijent sa teškim komorbiditetom.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Mačji ujed izgleda bezazleno, ali zubi unose bakterije duboko; infekcija je česta i brza.',
          'Rana preko zgloba šake nastala udarcem u tuđe zube je ljudski ujed i ide hirurgu.',
          'Domaći Pravilnik predviđa HTIG i kod vakcinisanih kojima je prošlo više od 10 godina, što je šire od preporuka CDC.',
          'Tokom antirabične imunizacije ne daju se druge vakcine, osim antitetanusne.',
          'Po podacima SZO nije poznato da ujedi glodara prenose besnilo.'
        ] }
      ],
      sources: [
        { name: 'NICE NG184 (ujedi ljudi i životinja)', url: 'https://www.nice.org.uk/guidance/ng184/chapter/Recommendations' },
        { name: 'Pravilnik o imunizaciji i načinu zaštite lekovima (Sl. glasnik RS 82/2017)', url: 'https://www.zczajecar.com/images/dokumenta/doc2017/3.11.-PRAVILNIK-O-IMUNIZACIJI-I-NA%C4%8CINU-ZA%C5%A0TITE-LEKOVIMA-Sl.-glasnik-RS-br.-82-2017.pdf' },
        { name: 'SZO: besnilo', url: 'https://www.who.int/news-room/fact-sheets/detail/rabies' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Žena, 52 god., pre tri sata ju je domaća mačka ujela za kažiprst; dve duboke ubodne rane koje su krvarile, bez znakova infekcije. Šta je ispravno posle ispiranja?',
          options: [
            'Bez antibiotika, jer rana nije inficirana',
            'Primarni šav i lokalni antibiotik',
            'Amoksicilin-klavulanat 500/125 mg na 8 h, 3 dana, uz procenu antitetanusne zaštite',
            'Cefaleksin 500 mg na 8 h, 10 dana'
          ],
          answer: 2,
          explain: 'Mačji ujed koji je probio kožu i izazvao krvarenje je indikacija za profilaksu, naročito na šaci. Prvi izbor je amoksicilin-klavulanat tokom 3 dana; cefaleksin ne pokriva dobro uzročnike iz mačje usne duplje.'
        },
        {
          q: 'Radnik, 47 god., posekao se na zarđali lim. Uredno je vakcinisan u detinjstvu, a poslednju dozu vakcine protiv tetanusa primio je pre 14 godina. Šta dobija po domaćem Pravilniku?',
          options: [
            'Jednu dozu vakcine i 250 IJ humanog antitetanusnog imunoglobulina',
            'Ništa, jer je potpuno vakcinisan',
            'Samo imunoglobulin, bez vakcine',
            'Tri doze vakcine po šemi 0, 1 i 6 meseci'
          ],
          answer: 0,
          explain: 'Potpuno vakcinisana osoba kojoj je od poslednje doze prošlo više od 10 godina dobija jednu dozu vakcine i 250 IJ HTIG, intramuskularno u naspramne ekstremitete.'
        },
        {
          q: 'Dečaka, 9 god., ujeo je za potkolenicu pas lutalica koji je pobegao; rana je probila kožu i krvarila. Šta je obavezno uz obradu rane?',
          options: [
            'Samo antibiotik, jer besnila u gradu nema',
            'Kontrola kod izabranog lekara za deset dana',
            'Posmatranje deteta deset dana, pa odluka',
            'Uputiti ga istog dana u nadležnu antirabičnu stanicu radi odluke o vakcini i imunoglobulinu'
          ],
          answer: 3,
          explain: 'Ujed psa nepoznatog vlasnika koji se ne može staviti pod desetodnevni veterinarski nadzor je razlog za hitnu procenu u antirabičnoj stanici, koja odlučuje o zaštiti. Kada je zaštita indikovana kod ozlede koja probija kožu, uz vakcinu se daje i imunoglobulin.'
        },
        {
          q: 'Mladić, 24 god., dolazi dan posle tuče sa ranom od 5 mm nad zglobom na korenu trećeg prsta; ruka je otečena, a ispružanje prsta bolno. Postupak?',
          options: [
            'Zašiti ranu i dati analgetik',
            'Uputiti hirurgu: ljudski ujed nad zglobom sa sumnjom na infekciju zgloba',
            'Lokalni antibiotik i zavoj, kontrola za nedelju dana',
            'RTG šake za mesec dana ako bol ostane'
          ],
          answer: 1,
          explain: 'Rana nad zglobom šake posle udarca pesnicom u zube je ljudski ujed koji često prodire u zglob. Otok i bolno ispružanje ukazuju na infekciju koja traži hiruršku obradu i antibiotik, a ne šav.'
        }
      ]
    },
    {
      id: 'febrilno-stanje',
      title: 'Febrilno stanje i osipne groznice kod odraslog',
      summary: 'Traži fokus i crvene zastavice; osip koji ne bledi na pritisak uz temperaturu je hitan dok se ne dokaže suprotno.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina febrilnih stanja kod odraslih je virusna i prolazi spontano. Zadatak lekara je da nađe fokus infekcije, prepozna pacijenta koji je životno ugrožen i ne propiše antibiotik samo zato što postoji temperatura. Petehijalni ili purpurni osip koji ne bledi na pritisak uz temperaturu zahteva hitan transport.' },
        { type: 'steps', title: 'Pristup febrilnom pacijentu', items: [
          'Vitalni parametri: temperatura, puls, krvni pritisak, frekvencija disanja, SpO2, stanje svesti.',
          'Anamneza: trajanje, prateći simptomi, kontakti, putovanja, ubodi krpelja, novi lekovi, vakcinalni status, imunosupresija.',
          'Pregled od glave do pete: ždrelo, uši, limfni čvorovi, pluća, srce, trbuh, lumbalne lože, zglobovi, meningealni znaci.',
          'Pregledaj celu kožu, uključujući konjunktive, i proveri da li osip bledi na pritisak (test čašom).',
          'Bez fokusa i bez crvenih zastavica: simptomatska terapija, bez antibiotika, uz jasna uputstva za ponovno javljanje.',
          'Upozori da se javi odmah ako se pojavi osip, ako osip prestane da bledi na pritisak ili se stanje pogorša.'
        ] },
        { type: 'flags', title: 'Crvene zastavice', items: [
          '**Petehije ili purpura koje ne blede na pritisak**, osip koji se brzo širi, promene veće od 2 mm.',
          'Ukočen vrat, jaka glavobolja, fotofobija, poremećaj svesti.',
          'Hipotenzija, tahikardija, tahipneja, hladna i marmorizovana koža: sepsa.',
          'Imunokompromitovan pacijent, posebno posle hemioterapije.',
          'Povratnik iz tropskih krajeva, osoba bez slezine.',
          'Bolna koža sa ljuštenjem, erozije sluzokoža ili otok lica uz nov lek: teška reakcija na lek.'
        ] },
        { type: 'list', title: 'Osipne groznice: šta prepoznati', items: [
          'Morbili: visoka temperatura, kašalj, kijavica, konjunktivitis, Koplikove mrlje, pa makulopapulozni osip od glave ka trupu i nogama.',
          'Morbili su zarazni od 4 dana pre do 4 dana posle izbijanja osipa; izolacija i prijava.',
          'Varičela kod odraslog: vezikule u različitim stadijumima; teži tok nego kod dece.',
          'Šarlah: gušobolja, sitan hrapav osip, malinast jezik; leči se kao streptokokni faringitis.',
          'Infektivna mononukleoza: temperatura, gušobolja, uvećani limfni čvorovi, izražen umor; moguća uvećana slezina i jetra.',
          'Osip na lek: vremenska veza sa novim lekom; proveri sluzokože i opšte stanje.'
        ] },
        { type: 'list', title: 'Infektivna mononukleoza', items: [
          'Krvna slika: limfocitoza sa atipičnim limfocitima; mogući su snižen broj trombocita i povišeni jetreni enzimi.',
          'Kod tipične slike laboratorijska potvrda obično nije neophodna; dijagnozu potvrđuju antitela na EBV.',
          'Terapija je simptomatska: odmor, tečnost, analgetik i antipiretik.',
          'Ne propisuj ampicilin ni amoksicilin: izazivaju osip.',
          'Bez kontaktnih sportova i teških fizičkih napora do oporavka, zbog rizika od rupture uvećane slezine.',
          'Većina se oporavi za 2–4 nedelje; umor može trajati još nekoliko nedelja.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'paracetamol', dose: '500–1000 mg p.o. na 4–6 h, najviše 4 g dnevno', note: 'Kod oštećenja jetre najviše 2 g dnevno.' },
          { name: 'ibuprofen', dose: '200–400 mg p.o. na 6–8 h, najviše 2,4 g dnevno', note: 'Alternativa paracetamolu.' },
          { name: 'ceftriakson', dose: '2 g i.v. ili i.m. odmah, pre ili tokom transporta', note: 'Samo kod jake sumnje na meningokoknu bolest i ako ne odlaže transport. Ne davati kod teške alergije na ceftriakson ili penicilin.' },
          { name: 'aciklovir (varičela odraslih)', dose: '800 mg p.o. 5× dnevno, 7 dana', note: 'Početi što ranije; dozu smanjiti kod bubrežne slabosti.' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na meningokoknu bolest ili bakterijski meningitis: hitan transport (194), uz najavu bolnici.',
          'Znaci sepse ili hemodinamska nestabilnost: hitan transport.',
          'Temperatura kod pacijenta na hemioterapiji ili sa drugom teškom imunosupresijom: hitno u bolnicu.',
          'Temperatura po povratku iz tropskih krajeva: hitno infektologu.',
          'Mononukleoza sa otežanim disanjem ili gutanjem, ili sa bolom u trbuhu: bolnica.',
          'Temperatura koja traje nedeljama bez nađenog uzroka: infektolog.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Ne odlaži transport da bi dao antibiotik; kod jake sumnje na meningokoknu bolest daj ga usput, ako je odmah dostupan.',
          'Osip koji u početku bledi na pritisak može kasnije prestati da bledi; pacijent i porodica treba da znaju šta da prate.',
          'Temperatura bez fokusa nije indikacija za antibiotik kod stabilnog, imunokompetentnog odraslog.',
          'Gušobolja sa eksudatom kod adolescenta koja ne prolazi na antibiotik: misli na mononukleozu.',
          'Kod svakog osipa uz temperaturu pitaj za lekove uvedene poslednjih nedelja.'
        ] }
      ],
      sources: [
        { name: 'NICE NG240 (meningitis i meningokokna bolest)', url: 'https://www.nice.org.uk/guidance/ng240/chapter/Recommendations' },
        { name: 'CDC: infektivna mononukleoza', url: 'https://www.cdc.gov/epstein-barr/about/mononucleosis.html' },
        { name: 'CDC: morbili, klinički pregled', url: 'https://www.cdc.gov/measles/hcp/clinical-overview/index.html' },
        { name: 'WHO AWaRe antibiotic book 2022', url: 'https://www.who.int/publications/i/item/9789240062382' }
      ],
      questions: [
        {
          q: 'Student, 20 god., od jutros temperatura 39,5 °C i glavobolja; na potkolenicama i trupu nekoliko tamnocrvenih tačkica koje ne blede pod čašom. TA 100/60 mmHg, puls 118/min. Postupak?',
          options: [
            'Antipiretik i kontrola sutra ujutru',
            'Uput za laboratoriju i kontrola sa rezultatima',
            'Oralni amoksicilin i mirovanje kod kuće',
            'Hitan transport u bolnicu; ceftriakson parenteralno ako je odmah dostupan i ne odlaže polazak'
          ],
          answer: 3,
          explain: 'Temperatura sa osipom koji ne bledi na pritisak je meningokokna bolest dok se ne dokaže suprotno. Transport se ne odlaže, a kod jake sumnje daje se ceftriakson i.v. ili i.m. što pre, ako to ne usporava odlazak.'
        },
        {
          q: 'Devojka, 18 god., sedam dana temperatura, gušobolja sa eksudatom, uvećani vratni limfni čvorovi i jak umor. Pre tri dana je dobila amoksicilin, a danas ima makulopapulozni osip po trupu. Najverovatnije?',
          options: [
            'Šarlah koji zahteva nastavak amoksicilina',
            'Infektivna mononukleoza sa osipom posle aminopenicilina',
            'Morbili; potrebna je izolacija 21 dan',
            'Alergija na penicilin koja zahteva doživotno izbegavanje svih beta-laktama'
          ],
          answer: 1,
          explain: 'Dugotrajna gušobolja sa limfadenopatijom i umorom kod adolescenta, uz osip posle amoksicilina, tipična je za mononukleozu. Antibiotik se ukida; taj osip sam po sebi ne dokazuje alergiju na penicilin.'
        },
        {
          q: 'Mladić, 19 god., sa potvrđenom mononukleozom oseća se bolje posle deset dana i pita može li na fudbalski trening. Šta savetuješ?',
          options: [
            'Da izbegava kontaktne sportove i teške napore do oporavka, zbog rizika od rupture slezine',
            'Da može odmah, ako nema temperaturu',
            'Da može uz elastični pojas oko trbuha',
            'Da miruje u krevetu tri meseca'
          ],
          answer: 0,
          explain: 'Slezina je kod mononukleoze često uvećana i može da pukne pri naporu ili udarcu. Kontaktni sportovi i teški napori se izbegavaju do oporavka; strogo ležanje nije potrebno.'
        },
        {
          q: 'Muškarac, 35 god., drugi dan temperatura 38,4 °C, bolovi u mišićima i blaga gušobolja. Vitalni parametri uredni, pregled bez fokusa i bez osipa, inače zdrav. Šta je ispravno?',
          options: [
            'Azitromicin tri dana, za svaki slučaj',
            'Amoksicilin-klavulanat sedam dana',
            'Simptomatska terapija, bez antibiotika, uz jasna uputstva kada da se javi',
            'Kortikosteroid i.m. za brže obaranje temperature'
          ],
          answer: 2,
          explain: 'Kod stabilnog, imunokompetentnog odraslog sa kratkotrajnom temperaturom bez fokusa najverovatnija je virusna infekcija. Antibiotik ne pomaže, a pacijent mora da zna koje promene zahtevaju hitan pregled.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'koza-infekcije-slucaj-1',
      title: 'Muškarac, 59 god., crvena i otečena potkolenica',
      intro: 'U ambulantu dolazi dijabetičar, 59 god., gojazan, sa crvenilom, otokom i bolom leve potkolenice od pre dva dana. Temperatura 38,0 °C, TA 135/80 mmHg, puls 88/min. Navodi da mu se već dugo ljušti koža između prstiju na stopalima.',
      steps: [
        {
          q: 'Na potkolenici vidiš toplo, difuzno crvenilo bez oštre granice, bez fluktuacije; druga noga je mirna. Šta je sledeći korak?',
          options: [
            'Ocrtati granicu crvenila, pregledati stopalo i prostore između prstiju i proceniti znake teže infekcije',
            'Odmah uputiti na dopler vena i ne započinjati terapiju',
            'Dati diuretik zbog otoka',
            'Uzeti bris sa neoštećene kože za kulturu'
          ],
          answer: 0,
          explain: 'Slika odgovara celulitisu. Ocrtavanje granice omogućava praćenje, a ulazno mesto je često gljivična infekcija između prstiju. Bris neoštećene kože nije koristan.'
        },
        {
          q: 'Između prstiju nalaziš maceraciju i ragade. Nema bula ni nesrazmernog bola, opšte stanje je dobro. Koju terapiju propisuješ?',
          options: [
            'Ciprofloksacin 500 mg na 12 h, 14 dana',
            'Samo lokalni antibiotik i hladne obloge',
            'Cefaleksin 500 mg na 8 h, 5 dana, elevacija noge i antimikotik između prstiju',
            'Kortikosteroid oralno i antihistaminik'
          ],
          answer: 2,
          explain: 'Blag celulitis se leči oralnim antibiotikom aktivnim na streptokok i stafilokok tokom 5 dana, uz elevaciju. Lečenje promena između prstiju uklanja ulazno mesto i smanjuje recidive.'
        },
        {
          q: 'Kada zakazuješ kontrolu i na šta upozoravaš pacijenta?',
          options: [
            'Kontrola za mesec dana; do tada bez posebnih uputstava',
            'Kontrola nije potrebna ako redovno pije antibiotik',
            'Kontrola tek kada završi antibiotik',
            'Kontrola za 2–3 dana; odmah da se javi ako se crvenilo širi, bol naglo jača ili se opšte stanje pogorša'
          ],
          answer: 3,
          explain: 'Ako nema početnog poboljšanja za 2–3 dana ili se stanje pogorša, potrebna je ponovna procena. Jak bol nesrazmeran nalazu i naglo pogoršanje su znaci dublje infekcije.'
        },
        {
          q: 'Sutradan dolazi ranije: bol je nepodnošljiv, crvenilo je prešlo ocrtanu granicu za 10 cm, pojavile su se tamne bule, TA 95/55 mmHg, puls 126/min. Postupak?',
          options: [
            'Zameniti cefaleksin amoksicilin-klavulanatom i kontrola sutra',
            'Hitan transport u bolnicu i hirurška procena zbog sumnje na nekrotizirajuću infekciju',
            'Dodati analgetik i nastaviti isti antibiotik',
            'Inciziju bula uraditi u ambulanti i previti'
          ],
          answer: 1,
          explain: 'Brzo širenje, bule, bol nesrazmeran nalazu i znaci šoka ukazuju na nekrotizirajući fasciitis. To je hirurška hitnost: svako odlaganje zbog promene oralne terapije je opasno.'
        }
      ]
    },
    {
      id: 'koza-infekcije-slucaj-2',
      title: 'Žena, 72 god., bol i mehurići na čelu',
      intro: 'Penzionerka, 72 god., sa hipertenzijom i hroničnom bubrežnom slabošću (klirens kreatinina 40 ml/min), dolazi zbog jakog pekućeg bola desne strane čela koji traje tri dana. Od juče ima grupisane mehuriće na čelu i gornjem kapku desno.',
      steps: [
        {
          q: 'Šta je najvažnije proveriti pri pregledu?',
          options: [
            'Da li ima vaši u kosi',
            'Krvni pritisak, jer glavobolja ukazuje na hipertenzivnu krizu',
            'Da li promene prelaze srednju liniju, da li su zahvaćeni vrh nosa i oko, i kakav je vid',
            'Štitastu žlezdu i vratne limfne čvorove'
          ],
          answer: 2,
          explain: 'Jednostrane grupisane vezikule u dermatomu prve grane trigeminusa su oftalmički zoster. Promene na vrhu nosa i crveno oko ukazuju na zahvatanje oka, što menja hitnost.'
        },
        {
          q: 'Promene ne prelaze srednju liniju, na vrhu nosa su dve vezikule, desno oko je crveno i suzi. Šta radiš?',
          options: [
            'Uvodiš antivirusni lek odmah i šalješ je oftalmologu istog dana',
            'Propisuješ kortikosteroidne kapi za oko i kontrolu za nedelju dana',
            'Propisuješ aciklovir krem na kožu čela',
            'Daješ analgetik i čekaš da se promene osuše'
          ],
          answer: 0,
          explain: 'Oftalmički zoster sa znacima zahvatanja oka nosi rizik od keratitisa i trajnog oštećenja vida. Sistemski antivirusni lek se uvodi odmah, a oftalmološki pregled se obavlja istog dana.'
        },
        {
          q: 'Biraš valaciklovir. Koja doza je ispravna pri klirensu kreatinina od 40 ml/min?',
          options: [
            '1000 mg 3× dnevno, 7 dana',
            '500 mg 1× dnevno, 3 dana',
            '2000 mg 2× dnevno, jedan dan',
            '1000 mg 2× dnevno, 7 dana'
          ],
          answer: 3,
          explain: 'Pri klirensu 30–49 ml/min doza valaciklovira za zoster je 1000 mg dva puta dnevno. Puna doza kod bubrežne slabosti povećava rizik od neurotoksičnosti.'
        },
        {
          q: 'Ćerka pita da li majka sme da čuva unuče staro mesec dana. Šta savetuješ?',
          options: [
            'Može bez ograničenja, jer zoster nije zarazan',
            'Da izbegava kontakt sa bebom dok se sve promene ne osuše i ne pokriju krustama',
            'Može, ako nosi masku preko usta',
            'Da izbegava kontakt šest meseci'
          ],
          answer: 1,
          explain: 'Tečnost iz vezikula sadrži virus i može izazvati varičele kod neimunih, a novorođenčad su posebno ugrožena. Zaraznost traje dok se promene ne osuše i ne pokriju krustama.'
        }
      ]
    },
    {
      id: 'koza-infekcije-slucaj-3',
      title: 'Muškarac, 41 god., ujed psa za šaku',
      intro: 'Poštar, 41 god., dolazi sat vremena pošto ga je na ulici ujeo nepoznat pas za desnu šaku; pas je pobegao. Na dorzumu šake su dve ubodne rane koje su krvarile i razderotina od 2 cm. Ne seća se kada je poslednji put primio vakcinu protiv tetanusa.',
      steps: [
        {
          q: 'Šta je prvi postupak?',
          options: [
            'Odmah zašiti razderotinu da bi se smanjio ožiljak',
            'Obilno ispirati ranu sapunom i vodom oko 15 minuta, pa proveriti tetive, nerve i cirkulaciju',
            'Staviti zavoj i uputiti ga kući sa analgetikom',
            'Dati antibiotik i.m. i zakazati kontrolu'
          ],
          answer: 1,
          explain: 'Temeljno ispiranje sapunom i vodom je najvažnija mera kod svakog ujeda, i za bakterijsku infekciju i za besnilo. Ujedne rane se, osim na licu, po pravilu ne šiju primarno.'
        },
        {
          q: 'Funkcija tetiva i osećaj su očuvani. Treba li antibiotska profilaksa?',
          options: [
            'Ne, jer rana još nije inficirana',
            'Da, cefaleksin 500 mg na 8 h, 10 dana',
            'Da, lokalna antibiotska mast je dovoljna',
            'Da, amoksicilin-klavulanat 500/125 mg na 8 h, 3 dana'
          ],
          answer: 3,
          explain: 'Pseći ujed sa krvarenjem koji je ubodni i nalazi se na šaci je indikacija za profilaksu. Prvi izbor je amoksicilin-klavulanat tokom 3 dana, jer pokriva i anaerobe.'
        },
        {
          q: 'Kako rešavaš antitetanusnu zaštitu, s obzirom na to da nema dokaz o vakcinaciji?',
          options: [
            'Prva doza vakcine i 250 IJ HTIG odmah, zatim druga doza posle najmanje mesec dana i treća najmanje šest meseci posle druge',
            'Samo jedna doza vakcine',
            'Ništa, jer je vakcinisan u detinjstvu',
            'Samo imunoglobulin, bez vakcine'
          ],
          answer: 0,
          explain: 'Po domaćem Pravilniku osoba bez dokaza o imunizaciji tretira se kao nevakcinisana: dobija vakcinu i HTIG odmah, u naspramne ekstremitete, i nastavlja šemu sa još dve doze.'
        },
        {
          q: 'Pas je nepoznat i pobegao je. Šta još moraš da uradiš istog dana?',
          options: [
            'Ništa, jer je rana obrađena i antibiotik propisan',
            'Zakažeš kontrolu za deset dana da vidiš da li ima simptome besnila',
            'Uputiš ga u nadležnu antirabičnu stanicu radi odluke o vakcini i imunoglobulinu',
            'Propišeš antivirusni lek oralno'
          ],
          answer: 2,
          explain: 'Ujed psa nepoznatog vlasnika koji se ne može staviti pod desetodnevni veterinarski nadzor zahteva procenu u antirabičnoj stanici istog dana. Indikaciju postavlja stanica; kod ozlede koja probija kožu uz vakcinu se daje i imunoglobulin.'
        }
      ]
    }
  ]
});
