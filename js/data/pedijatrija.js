MED.register({
  id: 'pedijatrija',
  title: 'Dete u ambulanti i na terenu',
  icon: '🧸',
  color: '#FF8DCC',
  topics: [
    {
      id: 'febrilno-dete',
      title: 'Febrilno dete',
      summary: 'Visina temperature ne govori koliko je dete bolesno – govore izgled, disanje, cirkulacija i uzrast.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina febrilne dece ima virusnu infekciju koja prolazi sama. Zadatak lekara je da među njima prepozna dete sa ozbiljnom bakterijskom infekcijom. Za to služi semafor sistem (NICE): boja kože, aktivnost, disanje, cirkulacija i hidracija, uz uzrast. Odojče mlađe od 3 meseca sa temperaturom 38 °C i više je visokorizično bez obzira na to kako izgleda.' },
        { type: 'flags', title: 'Crveno – visok rizik, hitno u bolnicu', items: [
          'Bleda, marmorizovana, pepeljasta ili modra koža, usne ili jezik.',
          'Ne reaguje na okolinu, ne može da se probudi ili ne ostaje budno; izgleda teško bolesno.',
          'Slab, piskav ili neprekidan plač.',
          'Stenjanje pri disanju, frekvencija disanja preko 60/min, umereno ili jako uvlačenje grudnog koša.',
          'Snižen turgor kože.',
          'Uzrast ispod 3 meseca sa temperaturom 38 °C i više.',
          'Osip koji ne bledi na pritisak, ispupčena fontanela, ukočen vrat, epileptični status, žarišni neurološki znaci ili žarišne konvulzije.'
        ] },
        { type: 'list', title: 'Žuto – srednji rizik', items: [
          'Bledilo koje primećuje roditelj; slabije reaguje na okolinu, budi se samo uz dužu stimulaciju, smanjena aktivnost, ne smeje se.',
          'Širenje nozdrva; frekvencija disanja preko 50/min (6–12 meseci) ili preko 40/min (stariji od 12 meseci); SpO2 95% i niže; pukoti nad plućima.',
          'Tahikardija: preko 160/min do 12 meseci, preko 150/min od 12 do 24 meseca, preko 140/min od 2 do 5 godina.',
          'Kapilarno punjenje 3 sekunde i duže, suve sluznice, slabo uzimanje hrane, smanjena diureza.',
          'Uzrast 3–6 meseci sa temperaturom 39 °C i više; drhtavica.',
          'Temperatura koja traje 5 dana i duže.',
          'Otok zgloba ili ekstremiteta, dete ne koristi ekstremitet ili ne staje na nogu.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Izmeri i zabeleži temperaturu, puls, frekvenciju disanja i kapilarno punjenje; SpO2 ako je dostupna.',
          'Svuci dete i pregledaj celu kožu; traži fokus: uši, ždrelo, pluća, trbuh, zglobovi, znaci meningitisa.',
          'Bilo koji crveni znak: hitno u bolnicu sanitetom. Kiseonik kod znakova šoka ili SpO2 ispod 92%.',
          'Žuti znaci bez jasnog fokusa: pedijatar istog dana ili, ako je dete stabilno, jasan plan sa ponovnim pregledom i uputstvom roditeljima.',
          'Samo zeleni znaci: kućno lečenje, tečnost, uputstvo kada da se odmah jave.',
          'Posle antipiretika ne zaključuj o težini bolesti na osnovu toga da li je temperatura pala.'
        ] },
        { type: 'drugs', title: 'Antipiretici (samo ako je dete uznemireno)', items: [
          { name: 'paracetamol', dose: '15 mg/kg p.o. na 4–6 h (pojedinačno najviše 1 g), najviše 60 mg/kg dnevno i 4 doze za 24 h', note: 'Razmak između doza najmanje 4 h. Sirup se ne daje mlađima od 2 meseca; ispod 3 meseca samo po odluci lekara' },
          { name: 'ibuprofen', dose: '10 mg/kg p.o. na 6–8 h (pojedinačno najviše 400 mg), najviše 30 mg/kg dnevno', note: 'Od navršena 3 meseca; uz hranu. Izbegavati kod dehidracije i kod varičele' }
        ] },
        { type: 'list', title: 'Odojče mlađe od 3 meseca', items: [
          'Temperatura 38 °C i više u ovom uzrastu je visokorizična i zahteva hitan pregled pedijatra u bolnici, čak i kada dete izgleda dobro.',
          'Do 28 dana života: hitna procena na sepsu, puna obrada (krvna slika, CRP, hemokultura, urin, lumbalna punkcija) i empirijski antibiotik u bolnici.',
          'Od 29 dana do 3 meseca: nizak prag za obradu i lečenje, prema izgledu i nalazu.',
          'Neke vakcine mogu da izazovu temperaturu u ovom uzrastu, ali to ne sme biti razlog da se dete ne pregleda.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antipiretik se daje zbog uznemirenosti deteta, ne da bi se spustila cifra na toplomeru.',
          'Antipiretici ne sprečavaju febrilne konvulzije.',
          'Paracetamol i ibuprofen se ne daju istovremeno; naizmenično samo ako uznemirenost traje ili se vrati pre sledeće doze.',
          'Rashlađivanje mlakom vodom se ne preporučuje.',
          'Temperatura 5 dana i duže: misli na Kavasakijevu bolest (konjunktivitis, promene usana i jezika, osip, promene šaka i stopala, limfadenopatija).',
          'Zabrinutost roditelja i tvoj utisak da dete nije dobro su razlog za upućivanje i bez crvenih znakova.'
        ] }
      ],
      sources: [
        { name: 'NICE NG143 – Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143/chapter/Recommendations' },
        { name: 'RCH Melbourne – Febrile child', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Febrile_child/' },
        { name: 'RCH Melbourne – Acute pain management (doze paracetamola i ibuprofena)', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Acute_pain_management/' }
      ],
      questions: [
        {
          q: 'Majka donosi odojče od 7 nedelja. Kod kuće izmerena temperatura 38,3 °C. Dete sisa, budno je, ružičasto, pregled uredan. Šta je ispravno?',
          options: ['Paracetamol sirup i kontrola sutra ako temperatura traje', 'Amoksicilin p.o. jer je dete malo, uz kontrolu za 2 dana', 'Hitno uputiti u bolnicu radi obrade, iako dete izgleda dobro', 'Umiriti majku da je u pitanju virusna infekcija i savetovati tečnost'],
          answer: 2,
          explain: 'Temperatura 38 °C i više kod deteta mlađeg od 3 meseca je crveni znak sam po sebi, jer klinička slika u tom uzrastu nije pouzdana. Potrebna je bolnička obrada; antibiotik na slepo u ambulanti samo maskira sliku.'
        },
        {
          q: 'Dečak, 2 god., 13 kg, ima temperaturu 39,2 °C drugi dan, plačljiv je i neće da se igra. Budan, ružičast, pije, pregled pokazuje crveno ždrelo. Koliko paracetamola po dozi?',
          options: ['Oko 195 mg, uz razmak od najmanje 4 h i najviše 4 doze dnevno', 'Oko 65 mg, uz razmak od 8 h', 'Oko 400 mg, uz razmak od 4 h', 'Oko 195 mg na svaka 2 h dok temperatura ne padne ispod 38 °C'],
          answer: 0,
          explain: 'Doza paracetamola je 15 mg/kg, dakle oko 195 mg za 13 kg, na 4–6 h, najviše 60 mg/kg dnevno. Antipiretik se daje zbog uznemirenosti deteta, a ne da bi se dostigla određena temperatura.'
        },
        {
          q: 'Devojčica, 18 meseci, temperatura 39 °C od jutros. Pospana je i budi se samo kada je majka duže drma, puls 165/min, kapilarno punjenje 3 s, disanje 44/min. Nema osipa. Kako je razvrstavaš?',
          options: ['Zeleno – kućno lečenje uz antipiretik', 'Zeleno, jer nema osipa ni ukočenog vrata', 'Crveno, jer je temperatura 39 °C', 'Najmanje žuto, sa više znakova – pedijatar istog dana, uz nizak prag za hitan transport'],
          answer: 3,
          explain: 'Buđenje samo uz dužu stimulaciju, tahikardija preko 150/min za taj uzrast, kapilarno punjenje 3 s i disanje preko 40/min su žuti znaci. Visina temperature sama (posle 6 meseci) ne određuje kategoriju.'
        }
      ]
    },
    {
      id: 'febrilne-konvulzije',
      title: 'Febrilne konvulzije',
      summary: 'Strašno izgledaju, a najčešće su bezazlene; posao je zaštititi dete, prekinuti napad duži od 5 minuta i isključiti meningitis.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Febrilna konvulzija je napad uz temperaturu od najmanje 38 °C kod deteta uzrasta od 6 meseci do 6 godina, bez infekcije centralnog nervnog sistema. Većina napada prestane sama za nekoliko minuta. Napad koji traje 5 minuta i duže leči se benzodiazepinom, a posle svakog napada treba tražiti uzrok temperature i znake meningitisa.' },
        { type: 'list', title: 'Proste i složene', items: [
          '**Prosta**: generalizovana toničko-klonička, traje kraće od 15 min, potpun oporavak za manje od 1 h, ne ponavlja se u istoj bolesti.',
          '**Složena**: žarišna obeležja, ili trajanje duže od 15 min, ili izmenjena svest duže od 1 h, ili ponavljanje u istoj bolesti.',
          'Rizik od ponovne febrilne konvulzije: oko 50% ako je prva bila u uzrastu od godinu dana, oko 30% ako je bila sa dve godine.',
          'Prosta febrilna konvulzija ne zahteva dodatna ispitivanja osim onih potrebnih za otkrivanje uzroka temperature.'
        ] },
        { type: 'steps', title: 'Postupak tokom napada', items: [
          'Zabeleži vreme početka. Položi dete na bok, na ravnu podlogu, skloni predmete oko njega; ništa ne stavljaj u usta.',
          'Oslobodi disajni put, daj kiseonik, prati SpO2 i puls.',
          'Izmeri glikemiju. Hipoglikemiju leči: glukoza 10% 2 ml/kg i.v., kontrola posle 5–10 min.',
          'Napad traje 5 minuta i duže (ili je trajanje nepoznato): benzodiazepin. Ako postoji venski put – i.v.; ako ne – bukalno, intranazalno ili i.m.',
          'Ako napad traje, ponovi dozu benzodiazepina jednom; ukupno najviše 2 doze, računajući i onu datu pre dolaska ekipe.',
          'Napad koji ne staje posle dve doze: epileptični status – hitan transport uz zaštitu disajnog puta i najavu.',
          'Posle napada: bočni položaj, traženje fokusa infekcije, pregled na osip i znake meningitisa.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'midazolam', dose: '0,3 mg/kg bukalno ili intranazalno (najviše 10 mg); ili 0,15 mg/kg i.v. ili i.m. (najviše 10 mg)', note: 'Bukalni i intranazalni put su praktični na terenu kada nema venskog puta' },
          { name: 'diazepam i.v.', dose: '0,2–0,3 mg/kg i.v. polako (najviše 10 mg)', note: 'Pratiti disanje; pripremiti balon sa maskom' },
          { name: 'diazepam rektalno', dose: 'rektalni rastvor u dozi prema telesnoj masi i uputstvu za lek', note: 'Alternativa kada nema venskog puta ni midazolama' },
          { name: 'paracetamol', dose: '15 mg/kg p.o. na 4–6 h, najviše 60 mg/kg dnevno', note: 'Zbog udobnosti deteta – ne sprečava ponavljanje konvulzija' }
        ] },
        { type: 'flags', title: 'Crvene zastavice – sumnja na infekciju CNS', items: [
          'Ukočen vrat, ispupčena fontanela, osip koji ne bledi.',
          'Dete se ne oporavlja i ostaje izmenjene svesti duže od 1 h posle napada.',
          'Žarišni napad ili žarišni neurološki ispad posle napada.',
          'Napad duži od 15 minuta ili ponovljen u istoj bolesti.',
          'Odojče, kod koga znaci meningitisa nisu pouzdani, i dete koje već prima antibiotik (slika može biti maskirana).'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno sanitetom: napad koji traje, složena febrilna konvulzija, bilo koja crvena zastavica, dete koje se nije potpuno oporavilo.',
          'Pedijatru istog dana: prva febrilna konvulzija, nejasan uzrok temperature, uzrast ispod 18 meseci, zabrinuti roditelji bez mogućnosti nadzora.',
          'Neuropedijatru: produžene ili žarišne konvulzije, epilepsija u porodici, zastoj u razvoju.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Antipiretici ne sprečavaju febrilne konvulzije i ne daju se sa tim ciljem.',
          'Roditeljima objasni šta da rade pri sledećem napadu: bočni položaj, ništa u usta, meriti vreme, zvati 194 ako traje duže od 5 minuta.',
          'Napad bez temperature, van uzrasta 6 meseci do 6 godina ili sa žarišnim znacima nije febrilna konvulzija dok se ne dokaže suprotno.',
          'Uvek izmeri glikemiju detetu koje ima konvulzije.'
        ] }
      ],
      sources: [
        { name: 'RCH Melbourne – Febrile seizure', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Febrile_seizure/' },
        { name: 'RCH Melbourne – Seizures: acute management', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Seizures_-_acute_management/' },
        { name: 'Resuscitation Council UK 2025 – Paediatric life support', url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines' }
      ],
      questions: [
        {
          q: 'Ekipa HMP stiže kod dečaka od 2 godine, 12 kg, sa temperaturom 39,5 °C. Majka kaže da se trese već 8 minuta. Pri dolasku: generalizovani toničko-klonički grčevi, cijanotičan oko usana. Venski put nije plasiran. Šta dati?',
          options: ['Paracetamol čepić i hladne obloge, pa sačekati da napad stane', 'Midazolam 0,3 mg/kg bukalno ili intranazalno, uz kiseonik i bočni položaj', 'Fenobarbiton i.m. kao lek prve linije', 'Ništa dok se ne plasira venski put, ma koliko to trajalo'],
          answer: 1,
          explain: 'Napad koji traje 5 minuta i duže leči se benzodiazepinom. Bez venskog puta lek izbora je midazolam bukalno ili intranazalno 0,3 mg/kg (ovde oko 3,6 mg). Antipiretik ne prekida napad, a čekanje na venski put produžava hipoksiju.'
        },
        {
          q: 'Devojčica, 3 god., imala je kod kuće generalizovani napad od 2 minuta uz temperaturu 39 °C. Pri pregledu posle 40 minuta: budna, igra se, crveno ždrelo, bez osipa, vrat slobodan. Roditelji pitaju da li treba EEG i snimanje glave. Šta odgovaraš?',
          options: ['Da, EEG i CT su obavezni posle svake konvulzije', 'Da, i potrebno je odmah uvesti antiepileptik', 'Da, uz lumbalnu punkciju kod svakog deteta', 'Ne, kod proste febrilne konvulzije dovoljno je naći uzrok temperature'],
          answer: 3,
          explain: 'Generalizovan napad kraći od 15 minuta, sa potpunim oporavkom za manje od 1 h i bez ponavljanja, je prosta febrilna konvulzija. Ne zahteva dodatna ispitivanja osim onih za uzrok temperature, ni antiepileptik.'
        },
        {
          q: 'Majka deteta koje je imalo prostu febrilnu konvulziju pita kako da spreči sledeću. Šta je tačno?',
          options: ['Redovni antipiretici ne sprečavaju ponavljanje; naučiti šta raditi tokom napada', 'Davati paracetamol na 4 h čim temperatura pređe 37,5 °C – to sprečava napad', 'Kupati dete u hladnoj vodi pri svakoj temperaturi', 'Davati diazepam svakodnevno tokom cele zime'],
          answer: 0,
          explain: 'Antipiretici ne sprečavaju febrilne konvulzije. Roditelje treba naučiti postupku: bočni položaj, ništa u usta, merenje vremena i poziv 194 ako napad traje duže od 5 minuta. Rizik ponavljanja je veći što je dete mlađe.'
        }
      ]
    },
    {
      id: 'krup-bronhiolitis',
      title: 'Krup, epiglotitis i bronhiolitis',
      summary: 'Tri uzroka otežanog disanja kod malog deteta sa potpuno različitim lečenjem: kortikosteroid, hitna intubacija ili samo potpora.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Krup je virusna upala grkljana i dušnika sa kašljem nalik lavežu i inspiratornim stridorom; leči se jednom dozom kortikosteroida, a teški oblici inhalacijom adrenalina. Epiglotitis je redak, ali neposredno ugrožava disajni put i dete se ne sme uznemiravati. Bronhiolitis je infekcija malih disajnih puteva kod dece mlađe od 2 godine i leči se samo potporno.' },
        { type: 'list', title: 'Razlikovanje', items: [
          '**Krup**: uzrast najčešće od 6 meseci do 6 godina; prehlada, zatim kašalj kao lavež, promuklost, inspiratorni stridor, gore noću; dete nije toksično.',
          '**Epiglotitis**: nagli početak, visoka temperatura, dete izgleda teško bolesno, sedi nagnuto napred, balavi, ne guta, glas prigušen, kašlja skoro nema.',
          '**Bronhiolitis**: uzrast ispod 2 godine, najčešće 3–6 meseci; kijavica 1–3 dana, zatim uporan kašalj, ubrzano disanje ili uvlačenje grudnog koša, pukoti ili vizing.',
          '**Strano telo**: nagli početak tokom igre ili jela, bez temperature, jednostrani nalaz.',
          '**Bakterijski traheitis**: dete sa slikom krupa koje se pogoršava, visoko febrilno i ne reaguje na terapiju.'
        ] },
        { type: 'steps', title: 'Krup – postupak', items: [
          'Ostavi dete u krilu roditelja, u položaju koji samo zauzme; ne uznemiravaj ga i ne gledaj ždrelo špatulom bez potrebe.',
          'Proceni težinu: blag (kašalj kao lavež, bez stridora u miru), umeren (povremen stridor u miru), težak (stalan stridor, izražen disajni napor).',
          'Životno ugrožen: dvofazni stridor, teško uvlačenje, iscrpljenost, poremećaj svesti, cijanoza.',
          'Svakom detetu sa krupom, i blagim, daj jednu dozu kortikosteroida p.o.',
          'Težak i životno ugrožavajući krup: adrenalin inhalacijom i kiseonik, hitan transport uz lekara.',
          'Posle adrenalina dete se posmatra najmanje 3 sata, jer dejstvo prolazi i stridor može da se vrati.',
          'Kući može dete bez stridora u miru; roditeljima objasni kada da se vrate.'
        ] },
        { type: 'drugs', title: 'Lekovi za krup', items: [
          { name: 'deksametazon', dose: '0,15 mg/kg p.o. jednokratno kod blagog i umerenog krupa; 0,6 mg/kg (najviše 12 mg) p.o., i.m. ili i.v. kod teškog', note: 'Jedna doza je dovoljna za većinu dece' },
          { name: 'prednizolon', dose: '1 mg/kg p.o. jednokratno', note: 'Alternativa kada deksametazon nije dostupan' },
          { name: 'adrenalin inhalacijom', dose: '5 ml rastvora 1:1000 (1 mg/ml) preko nebulizatora, nerazblaženo', note: 'Dejstvo je prolazno – obavezno posmatranje najmanje 3 h i kortikosteroid uz to' }
        ] },
        { type: 'steps', title: 'Sumnja na epiglotitis', items: [
          'Ne gledaj ždrelo, ne polaži dete, ne plasiraj venski put i ne uznemiravaj ga – plač može da dovede do potpune opstrukcije.',
          'Ostavi dete da sedi u krilu roditelja; kiseonik samo ako ga mirno prihvata.',
          'Odmah organizuj transport sanitetom uz lekara i opremu za disajni put, sa najavom da bolnica pripremi anesteziologa i ORL.',
          'Ako dete prestane da diše: ventilacija balonom sa maskom do dolaska u bolnicu.'
        ] },
        { type: 'list', title: 'Bronhiolitis – šta raditi i šta ne', items: [
          'Izmeri SpO2 svakom detetu; proceni hranjenje i hidraciju.',
          'Lečenje je potporno. NE daju se: antibiotici, salbutamol, adrenalin inhalacijom, sistemski ni inhalacioni kortikosteroidi, hipertoni rastvor soli.',
          'Simptomi su obično najizraženiji između 3. i 5. dana bolesti; kašalj kod većine prolazi za 3 nedelje.',
          'Veći rizik od teške slike: prevremeno rođena deca (posebno pre 32. nedelje), urođene srčane mane, hronična plućna bolest, imunodeficijencija, neuromišićne bolesti.',
          'Odojčad, posebno mlađa od 6 nedelja, mogu imati apneju kao jedini znak.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Bronhiolitis, hitno sanitetom: apneja (viđena ili prijavljena), dete izgleda teško bolesno, težak respiratorni distres (stenjanje, izraženo uvlačenje, disanje preko 70/min), centralna cijanoza.',
          'Bronhiolitis, razmotriti upućivanje: disanje preko 60/min, unos tečnosti 50–75% uobičajenog ili manje, znaci dehidracije, trajno SpO2 ispod 92%.',
          'Krup: stridor u miru, disajni napor, potreba za adrenalinom, nesigurna dijagnoza.',
          'Epiglotitis i sumnja na strano telo: uvek hitno.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Tiho dete koje balavi i sedi nagnuto napred je opasnije od glasnog deteta koje laje.',
          'Kod krupa je kortikosteroid lek za sve, a adrenalin samo most do njegovog dejstva.',
          'Antibiotici, sirupi protiv kašlja i vlažan vazduh nemaju dokazanu korist kod krupa.',
          'Kod bronhiolitisa je najvažnija odluka gde će dete biti lečeno, a ne koji lek će dobiti.',
          'Lošije hranjenje je kod odojčeta sa bronhiolitisom rani znak pogoršanja.'
        ] }
      ],
      sources: [
        { name: 'RCH Melbourne – Croup (laryngotracheobronchitis)', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/' },
        { name: 'NICE NG9 – Bronchiolitis in children', url: 'https://www.nice.org.uk/guidance/ng9/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Dečak, 20 meseci, 11 kg, prehlađen 2 dana, noćas kašlje kao da laje. Pri pregledu miran, bez stridora u miru, bez uvlačenja, SpO2 98%. Šta je terapija?',
          options: ['Deksametazon 0,15 mg/kg p.o. jednokratno i uputstvo roditeljima', 'Samo inhalacije fiziološkog rastvora i kontrola sutra', 'Amoksicilin 7 dana i sirup protiv kašlja', 'Adrenalin inhalacijom i otpust kući odmah posle'],
          answer: 0,
          explain: 'I blag krup se leči jednom dozom kortikosteroida (0,15 mg/kg deksametazona, ovde oko 1,6 mg). Antibiotik i antitusici nemaju mesto, a adrenalin je rezervisan za teške oblike i traži posmatranje najmanje 3 h.'
        },
        {
          q: 'Devojčica, 4 god., razbolela se pre 6 sati: temperatura 39,8 °C, sedi nagnuta napred sa otvorenim ustima, pljuvačka joj curi, jedva govori, tih stridor. Šta NE treba uraditi?',
          options: ['Ostaviti je da sedi u majčinom krilu', 'Najaviti dolazak bolnici i tražiti anesteziologa', 'Pregledati ždrelo špatulom i plasirati venski put pre transporta', 'Dati kiseonik samo ako ga mirno prihvata'],
          answer: 2,
          explain: 'Slika odgovara epiglotitisu. Pregled ždrela, polaganje deteta i bolne procedure mogu da izazovu potpunu opstrukciju disajnog puta. Dete se ne uznemirava i hitno transportuje tamo gde se može obezbediti disajni put.'
        },
        {
          q: 'Odojče, 3 meseca, rođeno u terminu, treći dan kijavice i kašlja. Disanje 56/min, blago uvlačenje, obostrano sitni pukoti i vizing, SpO2 95%, popije oko dve trećine uobičajene količine mleka. Šta je ispravno?',
          options: ['Salbutamol inhalacijom i prednizolon p.o.', 'Potporno lečenje, uputstvo roditeljima o znacima pogoršanja i kontrola narednog dana', 'Amoksicilin zbog pukota nad plućima', 'Adrenalin inhalacijom na svaka 4 h kod kuće'],
          answer: 1,
          explain: 'Ovo je bronhiolitis bez kriterijuma za hitno upućivanje. Bronhodilatatori, kortikosteroidi, adrenalin i antibiotici se ne koriste. Pošto se pogoršanje očekuje između 3. i 5. dana, važni su jasno uputstvo i rana kontrola; unos na donjoj granici spušta prag za upućivanje.'
        }
      ]
    },
    {
      id: 'dehidracija-dete',
      title: 'Dehidracija i gastroenteritis kod dece',
      summary: 'Proceni stepen dehidracije po kliničkim znacima; većina dece se rehidrira na usta, malim i čestim gutljajima.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Akutni gastroenteritis je najčešće virusni i prolazi sam; opasnost je dehidracija, naročito kod odojčadi. Procena se zasniva na kliničkim znacima i razvrstava dete u tri grupe: bez kliničke dehidracije, klinička dehidracija i šok. Oralna rehidracija je terapija izbora; venski put je za šok i neuspeh oralne rehidracije.' },
        { type: 'list', title: 'Procena stepena dehidracije', items: [
          '**Bez kliničke dehidracije**: dete budno i reaguje normalno, diureza uredna, sluznice vlažne, boja kože i ekstremiteti normalni.',
          '**Klinička dehidracija**: izmenjena reaktivnost (razdražljivo, letargično), smanjena diureza, upale oči, suve sluznice, tahikardija, tahipneja, snižen turgor.',
          'Znaci upozorenja unutar dehidracije: dete izgleda loše ili se pogoršava, izmenjena reaktivnost, upale oči, tahikardija, tahipneja, snižen turgor.',
          '**Šok**: snižen nivo svesti, bleda ili marmorizovana koža, hladni ekstremiteti, slab periferni puls, produženo kapilarno punjenje, hipotenzija.',
          '**Hipernatremijska dehidracija**: trzaji, povišen tonus, pojačani refleksi, konvulzije, pospanost.'
        ] },
        { type: 'list', title: 'Ko je u većem riziku', items: [
          'Deca mlađa od 1 godine, posebno mlađa od 6 meseci, i odojčad male porođajne mase.',
          'Više od 5 tečnih stolica ili više od 2 povraćanja u prethodna 24 sata.',
          'Deca kojoj tečnost nije nuđena ili je nisu podnela pre pregleda.',
          'Odojčad koja su prestala da sisaju tokom bolesti; pothranjena deca.'
        ] },
        { type: 'steps', title: 'Postupak', items: [
          'Proceni stepen dehidracije, izmeri telesnu masu, puls, disanje, kapilarno punjenje; izmeri glikemiju kod pospanog deteta.',
          'Bez dehidracije: nastaviti dojenje i mleko, podsticati unos tečnosti; ne davati voćne sokove ni gazirana pića; kod rizične dece ponuditi oralni rehidracioni rastvor (ORS).',
          'Klinička dehidracija: ORS niske osmolarnosti 50 ml/kg tokom 4 h, uz tečnost za održavanje, često i u malim količinama (kašičica ili špric na par minuta).',
          'Ako dete odbija ORS, a nema znake upozorenja, dopuniti uobičajenim tečnostima (mleko, voda).',
          'Šok: hitno i.v. bolus 0,9% NaCl 10 ml/kg, ponovna procena, po potrebi ponoviti; transport u bolnicu.',
          'Pogoršanje uprkos oralnoj rehidraciji, uporno povraćanje ORS-a ili znaci upozorenja: bolnica (nazogastrična ili venska rehidracija).',
          'Posle rehidracije: odmah vratiti uobičajenu ishranu; kod rizične dece 5 ml/kg ORS-a posle svake obilne tečne stolice.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'oralni rehidracioni rastvor', dose: '50 ml/kg p.o. tokom 4 h kod kliničke dehidracije, uz tečnost za održavanje', note: 'Mali, česti gutljaji; povraćanje nije razlog da se prekine – nastaviti sporije' },
          { name: 'ondansetron', dose: 'jednokratno p.o. kod upornog povraćanja, stariji od 6 meseci: 8–15 kg 2 mg, 15–30 kg 4 mg, preko 30 kg 8 mg', note: 'Da bi oralna rehidracija uspela; drugi antiemetici se ne preporučuju' },
          { name: 'fiziološki rastvor (0,9% NaCl)', dose: '10 ml/kg i.v. brzo kod šoka, uz ponovnu procenu; po potrebi ponoviti', note: 'Ako šok traje posle ponovljenih bolusa – misliti i na druge uzroke i tražiti pomoć' }
        ] },
        { type: 'flags', title: 'Crvene zastavice za drugu dijagnozu', items: [
          'Povraćanje žuči ili krvi; jak bol u trbuhu, distenzija, dete odbija da hoda.',
          'Krv ili sluz u stolici; bledilo i smanjena diureza posle krvavog proliva.',
          'Temperatura 38 °C i više kod mlađih od 3 meseca ili 39 °C i više kod starijih.',
          'Ukočen vrat, ispupčena fontanela, osip koji ne bledi, izmenjena svest.',
          'Ubrzano i duboko disanje uz obilno mokrenje uprkos dehidraciji: izmeri glikemiju (dijabetesna ketoacidoza).',
          'Proliv duži od 10 dana; odojče mlađe od 6 meseci.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Lekovi protiv proliva se ne daju deci.',
          'Antibiotici se ne daju rutinski; izuzeci su sepsa, širenje infekcije van creva i određeni dokazani uzročnici.',
          'Dojenje se ne prekida ni tokom rehidracije.',
          'Roditeljima pokaži kako se daje ORS: 5 ml na par minuta je preko 100 ml na sat.',
          'Dete koje povraća, a nema proliv, nema gastroenteritis dok ne isključiš druge uzroke.'
        ] }
      ],
      sources: [
        { name: 'NICE CG84 – Diarrhoea and vomiting caused by gastroenteritis in under 5s', url: 'https://www.nice.org.uk/guidance/cg84/chapter/Recommendations' },
        { name: 'RCH Melbourne – Gastroenteritis', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Gastroenteritis/' },
        { name: 'NICE NG29 – Intravenous fluid therapy in children', url: 'https://www.nice.org.uk/guidance/ng29/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Dečak, 14 meseci, 10 kg, ima proliv i povraćanje 2 dana. Razdražljiv, oči upale, sluznice suve, puls ubrzan, kapilarno punjenje 2 s, ekstremiteti topli. Kako ga rehidriraš?',
          options: ['Voćni sok i čaj po želji, kontrola za 2 dana', 'Infuzija 0,9% NaCl 20 ml/kg odmah u ambulanti', 'Loperamid i dijeta bez mleka', 'ORS 500 ml tokom 4 h, u malim i čestim gutljajima, uz tečnost za održavanje'],
          answer: 3,
          explain: 'Dete ima kliničku dehidraciju bez šoka, pa je terapija oralna: ORS 50 ml/kg (ovde 500 ml) tokom 4 h, uz tečnost za održavanje. Voćni sokovi se ne daju, loperamid je kontraindikovan, a venski bolus je za šok.'
        },
        {
          q: 'Devojčica, 8 meseci, 8 kg, proliv 3 dana. Pospana, teško se budi, koža marmorizovana, ekstremiteti hladni, kapilarno punjenje 5 s, puls slabo pipljiv. Šta je prvi postupak?',
          options: ['ORS na kašičicu 50 ml/kg tokom 4 h', 'Bolus 0,9% NaCl 10 ml/kg i.v. brzo, ponovna procena i hitan transport', 'Ondansetron p.o. pa pokušati oralnu rehidraciju', 'Uput pedijatru za sutra ujutru'],
          answer: 1,
          explain: 'Snižen nivo svesti, marmorizovana koža, hladni ekstremiteti i produženo kapilarno punjenje su znaci šoka. Daje se brz i.v. bolus kristaloida 10 ml/kg (ovde 80 ml), uz ponovnu procenu i ponavljanje po potrebi, i hitan transport.'
        },
        {
          q: 'Dečak, 3 god., 15 kg, povraća od sinoć 6 puta, ima dve tečne stolice. Blago dehidriran, ali povrati svaki gutljaj ORS-a. Trbuh mek, bez crvenih zastavica. Šta može da pomogne da oralna rehidracija uspe?',
          options: ['Metoklopramid i.m. u dozi za odrasle', 'Prekid svakog unosa na usta tokom 12 h', 'Jednokratna doza ondansetrona p.o., zatim ORS u malim gutljajima', 'Antibiotik širokog spektra'],
          answer: 2,
          explain: 'Jedna oralna doza ondansetrona (2 mg za 8–15 kg, 4 mg za 15–30 kg) kod deteta starijeg od 6 meseci smanjuje povraćanje i omogućava oralnu rehidraciju. Drugi antiemetici se ne preporučuju, a gladovanje i antibiotici nemaju mesto.'
        }
      ]
    },
    {
      id: 'osipne-groznice',
      title: 'Osipne groznice i meningokokna sepsa',
      summary: 'Većina osipa uz temperaturu je bezazlena; osip koji ne bledi na pritisak kod febrilnog deteta je hitno stanje.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kod febrilnog deteta sa osipom prvo pitanje nije koja je to osipna groznica, nego da li osip bledi na pritisak i kako dete izgleda. Petehije ili purpura uz temperaturu znače meningokoknu bolest dok se ne dokaže suprotno i zahtevaju hitan transport. Kod ostalih osipa dijagnoza se postavlja po izgledu i redosledu pojave osipa, prodromu i vakcinalnom statusu.' },
        { type: 'steps', title: 'Petehijalni osip i sumnja na meningokoknu bolest', items: [
          'Svuci dete i pregledaj celu kožu, uključujući pelensku regiju i vežnjače; pritisni osip čašom ili prstom – petehije ne blede.',
          'Na meningokoknu bolest ukazuju: purpura (promene veće od 2 mm), osip koji se brzo širi, ili osip koji ne bledi uz znake meningitisa ili teško bolesno dete.',
          'Odmah pozovi sanitet za hitan transport i najavi bolnici da stiže dete sa sumnjom na meningokoknu bolest.',
          'ABC: kiseonik, venski ili intraosalni put; kod znakova šoka bolus kristaloida 10 ml/kg, uz ponovnu procenu.',
          'Kod jake sumnje na meningokoknu bolest daj ceftriakson ili benzilpenicilin i.v. ili i.m. što pre, pod uslovom da to ne odlaže transport.',
          'Izmeri glikemiju; prati svest, disanje, puls i kapilarno punjenje tokom transporta.',
          'Obavesti epidemiologa radi zaštite bliskih kontakata.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'ceftriakson', dose: '80–100 mg/kg i.v. ili i.m. (najviše 4 g) jednokratno pre transporta', note: 'Doza za bakterijski meningitis kod dece od 15 dana do 12 godina; ne odlagati transport zbog davanja' },
          { name: 'fenoksimetilpenicilin (šarlah)', dose: 'deca: 250 mg p.o. 2–3× dnevno; adolescenti i odrasli: 250 mg 4× dnevno ili 500 mg 2× dnevno; 10 dana', note: 'Ceo kurs od 10 dana i kada se dete brzo oporavi' },
          { name: 'amoksicilin (šarlah)', dose: '50 mg/kg p.o. 1× dnevno (najviše 1000 mg) ili 25 mg/kg 2× dnevno (najviše 500 mg po dozi); 10 dana', note: 'Alternativa penicilinu; kod alergije na penicilin makrolid ili cefalosporin prema težini alergije' },
          { name: 'paracetamol', dose: '15 mg/kg p.o. na 4–6 h, najviše 60 mg/kg dnevno', note: 'Antipiretik izbora kod varičele; ibuprofen kod varičele izbegavati' }
        ] },
        { type: 'list', title: 'Najčešće osipne groznice', items: [
          '**Varičela**: osip brzo prelazi iz makule u papulu i vezikulu, pa u krustu; svrbi. Inkubacija 10–21 dan. Zarazna 1–2 dana pre osipa do zasušivanja svih promena (obično oko 5 dana od izbijanja).',
          '**Šarlah**: streptokokna angina uz sitan, hrapav osip i malinast jezik. Dete nije zarazno 12–24 h posle početka antibiotika, ako je afebrilno.',
          '**Morbili**: visoka temperatura, kašalj, kijavica i konjunktivitis, Koplikove mrlje, zatim makulopapulozni osip koji se širi od glave ka trupu i nogama. Zarazni 4 dana pre do 4 dana posle izbijanja osipa.',
          '**Peta bolest** (parvovirus B19): crvenilo obraza kao posle šamara, nekoliko dana posle blagih simptoma nalik prehladi.',
          '**Šesta bolest** (roseola): odojčad i mala deca; nagla visoka temperatura nekoliko dana, a osip na grudima, trbuhu i leđima izbije tek pošto temperatura padne.'
        ] },
        { type: 'list', title: 'Ko je u riziku i šta savetovati', items: [
          'Varičela – veći rizik od teške bolesti: imunokompromitovani, trudnice bez imuniteta, novorođenčad čije majke dobiju varičelu oko porođaja, prevremeno rođena deca.',
          'Kontakt trudnice, novorođenčeta ili imunokompromitovane osobe sa varičelom: hitna konsultacija infektologa.',
          'Parvovirus B19 – rizik: trudnice (pobačaj, oštećenje ploda), osobe sa hemolitičkim anemijama (teška anemija), imunokompromitovani.',
          'Morbili – komplikacije: pneumonija, encefalitis; kod teško obolele i hospitalizovane dece daje se vitamin A.',
          'MMR vakcina u Srbiji: prva doza sa navršenih 12 do 15 meseci, revakcinacija pre upisa u prvi razred.',
          'Deci mlađoj od 16 godina ne davati acetilsalicilnu kiselinu.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno sanitetom: osip koji ne bledi uz temperaturu, osip sa znacima šoka ili meningitisa, dete koje izgleda teško bolesno.',
          'Infektolog: sumnja na morbile (uz prijavu), varičela kod rizičnih grupa ili sa komplikacijama (bakterijska superinfekcija kože, pneumonija, ataksija).',
          'Pedijatar: temperatura 5 dana i duže uz osip (Kavasakijeva bolest), purpura na nogama i gluteusima kod deteta koje izgleda dobro.',
          'Hematolog: petehije bez temperature kod deteta koje izgleda dobro, uz modrice ili krvarenje iz sluznica.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod svakog febrilnog deteta sa osipom uradi test pritiskom; osip koji je juče bledeo danas može da ne bledi.',
          'Na tamnoj koži petehije traži na vežnjačama i sluznicama.',
          'Ne odlaži transport da bi dao antibiotik – ali ako transport kasni, antibiotik daj.',
          'Ibuprofen se ne daje kod varičele zbog rizika od teških infekcija kože.',
          'Kod šeste bolesti osip dolazi kada detetu bude bolje; kod morbila je dete najbolesnije kada osip izbija.'
        ] }
      ],
      sources: [
        { name: 'NICE NG240 – Meningitis (bacterial) and meningococcal disease', url: 'https://www.nice.org.uk/guidance/ng240/chapter/Recommendations' },
        { name: 'CDC – Clinical guidance for group A streptococcal pharyngitis', url: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html' },
        { name: 'CDC – Clinical overview of measles', url: 'https://www.cdc.gov/measles/hcp/clinical-overview/index.html' },
        { name: 'CDC – Clinical overview of chickenpox', url: 'https://www.cdc.gov/chickenpox/hcp/clinical-overview/index.html' }
      ],
      questions: [
        {
          q: 'Dečak, 5 god., ima varičelu treći dan, temperaturu 38,6 °C i jak svrab. Majka pita šta sme da mu da za temperaturu. Šta savetuješ?',
          options: ['Ibuprofen, jer bolje deluje na svrab', 'Acetilsalicilnu kiselinu u dečjoj dozi', 'Paracetamol; ibuprofen i acetilsalicilnu kiselinu izbegavati', 'Naizmenično ibuprofen i acetilsalicilnu kiselinu'],
          answer: 2,
          explain: 'Kod varičele je antipiretik izbora paracetamol. Ibuprofen se izbegava zbog rizika od teških infekcija kože, a acetilsalicilna kiselina se ne daje deci mlađoj od 16 godina.'
        },
        {
          q: 'Devojčica, 6 god., ima anginu, temperaturu, sitan hrapav osip po trupu i malinast jezik. Težina 20 kg, nije alergična na penicilin. Koja terapija je ispravna?',
          options: ['Fenoksimetilpenicilin 250 mg 2–3× dnevno ili amoksicilin 50 mg/kg 1× dnevno, 10 dana', 'Azitromicin 3 dana kao prvi izbor', 'Amoksicilin 3 dana, do pada temperature', 'Samo antipiretik, jer je šarlah virusna bolest'],
          answer: 0,
          explain: 'Šarlah izaziva streptokok grupe A i leči se penicilinom ili amoksicilinom 10 dana, da bi se sprečile komplikacije. Makrolidi su rezervisani za alergiju na penicilin, a kraći kurs nije dovoljan.'
        },
        {
          q: 'Dete, 10 meseci, imalo je 3 dana temperaturu do 39,5 °C i bilo dobro raspoloženo između skokova. Danas je afebrilno, a po trupu se pojavio sitan ružičast osip koji bledi na pritisak. Šta je najverovatnije i šta raditi?',
          options: ['Morbili – hitno uputiti infektologu i prijaviti', 'Alergija na paracetamol – zabraniti lek doživotno', 'Meningokokna sepsa – ceftriakson i.m. odmah', 'Šesta bolest (roseola) – umiriti roditelje, nije potrebna terapija'],
          answer: 3,
          explain: 'Osip koji izbije pošto temperatura padne, kod odojčeta koje izgleda dobro, tipičan je za šestu bolest. Kod morbila osip izbija na vrhuncu bolesti uz kašalj, kijavicu i konjunktivitis, a meningokokni osip ne bledi na pritisak.'
        }
      ]
    },
    {
      id: 'pedijatrijska-reanimacija',
      title: 'Osnove pedijatrijske reanimacije i doziranja',
      summary: 'Dete najčešće staje zbog hipoksije: prepoznaj pogoršanje na vreme, počni sa 5 udaha i računaj sve po kilogramu.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Srčani zastoj kod dece je najčešće posledica respiratorne ili cirkulatorne insuficijencije, a ne primarne aritmije. Zato je najvažnije prepoznati dete koje se pogoršava, a reanimacija počinje ventilacijom. Preporuke su prema smernicama iz 2025. godine. Sve doze se računaju po telesnoj masi.' },
        { type: 'list', title: 'Vitalni parametri – pragovi za zabrinutost', items: [
          '**Disanje**: preko 60/min u uzrastu 0–5 meseci, preko 50/min od 6 do 12 meseci, preko 40/min posle 12 meseci.',
          '**Puls**: preko 160/min do 12 meseci, preko 150/min od 12 do 24 meseca, preko 140/min od 2 do 5 godina.',
          '**Kapilarno punjenje** 3 sekunde i duže; SpO2 95% i niže na sobnom vazduhu.',
          'Bradikardija ispod 60/min sa znacima loše perfuzije, uprkos dobroj ventilaciji, zahteva kompresije grudnog koša.',
          'Hipotenzija je kasni znak šoka kod deteta – ne čekaj je.',
          'Ciljna SpO2 kod prethodno zdravog deteta: 94–98%.'
        ] },
        { type: 'list', title: 'Procena telesne mase', items: [
          'Najtačniji podatak je masa koju navedu roditelji – koristi je kada je dostupna.',
          'Ako nije: metoda zasnovana na dužini deteta (traka), po mogućnosti korigovana za građu, tačnija je od formula.',
          'Kod gojazne dece se u reanimaciji uglavnom koristi idealna telesna masa.',
          'Zapiši masu i unapred izračunaj doze u ml pre nego što ti zatrebaju.'
        ] },
        { type: 'steps', title: 'Osnovne mere reanimacije (PBLS)', items: [
          'Bezbednost, zatim proveri da li dete reaguje. Pozovi pomoć ili 194, na zvučnik.',
          'Otvori disajni put i proveri disanje. Ako ne diše normalno: **5 početnih udaha**.',
          'Nema znakova života: počni kompresije grudnog koša. Odnos **15:2** ako si obučen za pedijatrijsku reanimaciju (inače 30:2).',
          'Kompresije: dubina najmanje trećina prednje-zadnjeg prečnika grudnog koša, frekvencija 100–120/min.',
          'Odojče: tehnika sa dva palca uz obuhvatanje grudnog koša. Dete starije od 1 godine: jedna ili dve šake.',
          'Ako si sam i bez telefona: reanimiraj 1 minut pre nego što odeš po pomoć.',
          'Postavi defibrilator čim stigne i prati njegova uputstva.'
        ] },
        { type: 'drugs', title: 'Doze u hitnim stanjima', items: [
          { name: 'adrenalin (srčani zastoj)', dose: '10 mikrograma/kg i.v. ili i.o. (najviše 1 mg); kod ritma za defibrilaciju posle 3. i 5. šoka', note: 'Isprati svaku dozu; intraosalni put ako venski nije brzo dostupan' },
          { name: 'defibrilacija', dose: '4 J/kg po šoku, zatim odmah 2 min reanimacije', note: 'Ne prelaziti energije preporučene za odrasle' },
          { name: 'amjodaron', dose: '5 mg/kg i.v. ili i.o. posle 3. šoka (najviše 300 mg) i posle 5. šoka (najviše 150 mg)', note: 'Samo kod ritmova za defibrilaciju' },
          { name: 'kristaloid (šok)', dose: '10 ml/kg i.v. ili i.o. bolus, ponovna procena posle svakog; ponavljati po potrebi', note: 'Kod kardiogenog šoka opreznije, npr. 5 ml/kg' },
          { name: 'glukoza 10%', dose: '2 ml/kg i.v. (0,2 g/kg), kontrola glikemije posle 5–10 min', note: 'Lečiti glikemiju ispod 3,9 mmol/l uz simptome ili ispod 3,0 mmol/l bez simptoma' },
          { name: 'benzodiazepin (konvulzije 5 min i duže)', dose: 'midazolam 0,3 mg/kg bukalno ili intranazalno, ili 0,15 mg/kg i.v. ili i.m. (najviše 10 mg)', note: 'Najviše dve doze; zatim lek druge linije u bolnici' }
        ] },
        { type: 'steps', title: 'Strano telo u disajnom putu', items: [
          'Dete kašlje efikasno: podstiči kašalj i posmatraj, ne radi ništa drugo.',
          'Kašalj postaje neefikasan, dete svesno: do 5 udaraca po leđima.',
          'Bez efekta: do 5 potisaka – na grudni koš kod odojčeta, na trbuh kod deteta starijeg od 1 godine.',
          'Naizmenično ponavljaj udarce i potiske dok strano telo ne izađe; prekini čim dete zakašlje, zaplače ili prodiše.',
          'Dete izgubi svest: odmah reanimacija, počevši sa 5 udaha.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod deteta prvo vazduh: 5 udaha pre kompresija.',
          'Dete koje je bilo tahikardno i ubrzano disalo, a sada usporava, ne oporavlja se – iscrpljuje se.',
          'Ne gubi vreme na venski put: posle kratkog pokušaja plasiraj intraosalnu iglu.',
          'Svaka konvulzija, poremećaj svesti i teško bolesno dete: izmeri glikemiju.',
          'Roditelji mogu da ostanu uz dete tokom reanimacije ako to ne ometa rad ekipe.'
        ] }
      ],
      sources: [
        { name: 'Resuscitation Council UK 2025 – Paediatric life support (basic and advanced)', url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines' },
        { name: 'NICE NG143 – Fever in under 5s (pragovi za puls i disanje)', url: 'https://www.nice.org.uk/guidance/ng143/chapter/Recommendations' },
        { name: 'RCH Melbourne – Seizures: acute management', url: 'https://www.rch.org.au/clinicalguide/guideline_index/Seizures_-_acute_management/' }
      ],
      questions: [
        {
          q: 'Sam si u ambulanti sa sestrom. Odojče od 5 meseci ne reaguje i ne diše. Sestra zove 194. Šta je tvoj prvi postupak posle otvaranja disajnog puta?',
          options: ['30 kompresija grudnog koša, pa 2 udaha', '5 početnih udaha, zatim kompresije i ventilacija u odnosu 15:2', 'Tražiti puls 30 sekundi pre bilo čega drugog', 'Odmah adrenalin i.m. u butinu'],
          answer: 1,
          explain: 'Zastoj kod dece je najčešće hipoksijski, pa reanimacija počinje sa 5 početnih udaha. Obučeni spasioci zatim rade 15:2, kod odojčeta tehnikom dva palca, dubine najmanje trećine grudnog koša i frekvencije 100–120/min.'
        },
        {
          q: 'Dečak, 4 god., 16 kg, u srčanom zastoju, ritam za defibrilaciju. Dao si tri šoka uz reanimaciju. Koje doze sada slede?',
          options: ['Adrenalin 1 mg i amjodaron 300 mg, kao kod odraslog', 'Adrenalin 16 mg i amjodaron 8 mg', 'Samo četvrti šok od 360 J, bez lekova', 'Adrenalin 160 mikrograma i amjodaron 80 mg i.v. ili i.o.'],
          answer: 3,
          explain: 'Posle trećeg šoka daje se adrenalin 10 mikrograma/kg (160 mikrograma za 16 kg) i amjodaron 5 mg/kg (80 mg). Energija šoka je 4 J/kg, ovde oko 64 J. Doze za odrasle su za ovo dete višestruko prevelike.'
        },
        {
          q: 'Devojčica, 2 god., zagrcnula se komadom jabuke. Svesna je, ali više ne može da kašlje ni da plače, postaje modra. Šta radiš?',
          options: ['Do 5 udaraca po leđima, zatim do 5 abdominalnih potisaka, naizmenično', 'Pokušaš da prstom naslepo izvadiš strano telo', 'Položiš je na leđa i odmah počneš kompresije', 'Daš joj da pije vodu da komad sklizne'],
          answer: 0,
          explain: 'Kod svesnog deteta sa neefikasnim kašljem daje se do 5 udaraca po leđima, zatim do 5 potisaka (abdominalnih kod deteta starijeg od godinu dana, grudnih kod odojčeta). Reanimacija počinje tek ako dete izgubi svest.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'pedijatrija-slucaj-1',
      title: 'Dečak, 3 god., temperatura i pospanost',
      intro: 'Ambulanta doma zdravlja, popodne. Majka dovodi dečaka od 3 godine, 15 kg, koji od jutros ima temperaturu do 39,6 °C, dva puta je povratio i sve je pospaniji. Juče je bio potpuno zdrav. Uredno vakcinisan po kalendaru.',
      steps: [
        {
          q: 'Dečak leži u majčinom krilu i slabo reaguje kada mu se obratiš. Puls 168/min, disanje 38/min, kapilarno punjenje 4 s, šake i stopala hladni. Šta je sledeći korak u pregledu?',
          options: ['Pogledati ždrelo i uši, pa propisati antipiretik', 'Svući dete i pregledati celu kožu, uključujući test pritiskom na svaki osip', 'Uraditi krvnu sliku i CRP i zakazati kontrolu sutra', 'Sačekati 1 h da antipiretik deluje, pa ponovo proceniti'],
          answer: 1,
          explain: 'Dete već ima crvene i žute znake (slabo reaguje, tahikardija, produženo kapilarno punjenje, hladni ekstremiteti). Kod takvog deteta mora se pregledati cela koža u potrazi za osipom koji ne bledi; čekanje na efekat antipiretika je gubljenje vremena.'
        },
        {
          q: 'Na butinama i trupu nalaziš desetak tamnocrvenih tačkastih promena i dve veće od 3 mm. Ne blede kada ih pritisneš čašom. Majka kaže da ih pre sat vremena nije bilo. Radna dijagnoza i prvi potez?',
          options: ['Alergijski osip – antihistaminik i kontrola sutra', 'Virusni osip – umiriti majku', 'Meningokokna bolest – odmah pozvati sanitet za hitan transport i najaviti bolnici', 'Imunska trombocitopenija – uput hematologu u redovnom terminu'],
          answer: 2,
          explain: 'Purpura veća od 2 mm i osip koji se brzo širi i ne bledi, kod febrilnog deteta sa znacima šoka, znače meningokoknu bolest dok se ne dokaže suprotno. Transport je hitan i bolnica se obaveštava unapred.'
        },
        {
          q: 'Sanitet stiže za oko 20 minuta. Imaš venski put. Šta radiš dok čekaš?',
          options: ['Kiseonik, bolus kristaloida 10 ml/kg uz ponovnu procenu i ceftriakson 80–100 mg/kg', 'Samo paracetamol i hladne obloge, da ne maskiraš sliku', 'Deksametazon i.v. i ništa drugo', 'Infuzija 5% glukoze 500 ml brzo'],
          answer: 0,
          explain: 'Pošto transport nije odmah dostupan, antibiotik se daje bez odlaganja (ceftriakson, ovde 1,2–1,5 g). Šok se leči bolusima kristaloida 10 ml/kg (150 ml) uz ponovnu procenu posle svakog. Rastvor glukoze nije tečnost za reanimaciju.'
        },
        {
          q: 'Posle prvog bolusa puls je 160/min, kapilarno punjenje i dalje 4 s. Glikemija 2,6 mmol/l. Šta sada?',
          options: ['Prekinuti tečnost da se ne preoptereti', 'Dati adrenalin 0,5 mg i.m.', 'Sačekati dolazak u bolnicu sa svakom daljom terapijom', 'Ponoviti bolus 10 ml/kg i dati glukozu 10% 2 ml/kg i.v., pa ponovo izmeriti glikemiju'],
          answer: 3,
          explain: 'Šok koji traje zahteva ponavljanje bolusa od 10 ml/kg; u prvom satu može biti potrebno 40–60 ml/kg. Hipoglikemija se leči glukozom 10% 2 ml/kg (ovde 30 ml), uz kontrolu posle 5–10 minuta.'
        }
      ]
    },
    {
      id: 'pedijatrija-slucaj-2',
      title: 'Devojčica, 2 god., noćni kašalj i otežano disanje',
      intro: 'Teren HMP, 2 sata posle ponoći. Devojčica, 2 godine, 12 kg, prehlađena dva dana. Probudila se sa kašljem koji zvuči kao lavež i čudnim zvukom pri udisanju. Temperatura 37,9 °C. Uredno vakcinisana.',
      steps: [
        {
          q: 'Zatičeš je u majčinom naručju, uplakanu. Čuje se inspiratorni stridor i kada se smiri, vidi se uvlačenje iznad grudne kosti, SpO2 95%, ružičasta je, guta pljuvačku, glas promukao. Kako pristupaš?',
          options: ['Položiti je na leđa i špatulom pogledati ždrelo', 'Odvojiti je od majke radi lakšeg pregleda', 'Odmah plasirati venski put i uzeti krv', 'Ostaviti je u majčinom krilu, ne uznemiravati i proceniti težinu posmatranjem'],
          answer: 3,
          explain: 'Dete sa stridorom se ne uznemirava: plač pojačava opstrukciju. Procena se radi posmatranjem. Promuklost, kašalj kao lavež i očuvano gutanje govore za krup, a ne za epiglotitis.'
        },
        {
          q: 'Procenjuješ da je u pitanju umeren do težak krup (stridor u miru sa uvlačenjem). Šta daješ?',
          options: ['Deksametazon p.o. i adrenalin 5 ml rastvora 1:1000 inhalacijom', 'Salbutamol inhalacijom i amoksicilin p.o.', 'Samo hladan vazduh sa prozora', 'Diazepam rektalno da se smiri'],
          answer: 0,
          explain: 'Svako dete sa krupom dobija kortikosteroid (deksametazon 0,15 mg/kg, kod teškog 0,6 mg/kg), a kod izraženog stridora u miru sa disajnim naporom dodaje se adrenalin inhalacijom. Sedacija je opasna, a salbutamol i antibiotik ne deluju.'
        },
        {
          q: 'Petnaest minuta posle inhalacije stridor je skoro nestao i devojčica se smirila. Majka pita da li može da ostane kod kuće. Šta odgovaraš?',
          options: ['Može, jer je terapija uspela', 'Može, uz još jednu inhalaciju adrenalina ostavljenu majci', 'Ne – dejstvo adrenalina je prolazno, potrebno je posmatranje najmanje 3 sata u zdravstvenoj ustanovi', 'Ne, jer joj je odmah potrebna intubacija'],
          answer: 2,
          explain: 'Adrenalin deluje brzo, ali kratko, i stridor može da se vrati kada dejstvo prođe, pre punog efekta kortikosteroida. Zato se dete posle adrenalina posmatra najmanje 3 sata i otpušta tek kada nema stridora u miru.'
        },
        {
          q: 'Tokom transporta se stanje menja: devojčica postaje tiha i pospana, stridor je slabiji, ali je uvlačenje grudnog koša jače, a SpO2 pada na 88%. Kako to tumačiš?',
          options: ['Poboljšanje, jer je stridor tiši', 'Iscrpljenost i preteća potpuna opstrukcija – kiseonik, ponoviti adrenalin, pripremiti ventilaciju i najaviti bolnici', 'Dejstvo deksametazona – nije potrebna intervencija', 'Dete je zaspalo jer je noć – nastaviti transport bez promena'],
          answer: 1,
          explain: 'Tiši stridor uz jače uvlačenje, pospanost i pad saturacije znači da se dete iscrpljuje i da protok vazduha opada. To je životno ugrožavajući krup: kiseonik, adrenalin, spremnost za ventilaciju balonom i maskom i hitna najava bolnici.'
        }
      ]
    }
  ]
});
