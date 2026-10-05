MED.register({
  id: 'neuro-psih',
  title: 'Neurologija i mentalno zdravlje',
  icon: '🧠',
  color: '#6E56CF',
  topics: [
    {
      id: 'glavobolje',
      title: 'Glavobolje',
      summary: 'Većina glavobolja je primarna; posao lekara je da prepozna crvene zastavice i da racionalno leči migrenu.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Preko 90% glavobolja u ambulanti su primarne: tenziona, migrena i ređe klaster. Dijagnoza je klinička, na osnovu anamneze i urednog neurološkog nalaza; snimanje nije potrebno ako nema crvenih zastavica. Zadatak je isključiti sekundarnu glavobolju, dati efikasnu akutnu terapiju i sprečiti prekomernu upotrebu analgetika.' },
        { type: 'list', title: 'Kako ih razlikovati', items: [
          '**Tenziona**: obostrana, stezanje ili pritisak (kao obruč), blaga do umerena, ne pogoršava se pri uobičajenoj aktivnosti, bez mučnine; traje od 30 min do neprekidno.',
          '**Migrena**: jednostrana, pulsirajuća, umerena do jaka, pogoršava se pri fizičkoj aktivnosti, uz mučninu ili foto- i fonofobiju; traje 4–72 h.',
          '**Aura**: potpuno reverzibilni vidni, senzitivni ili govorni simptomi koji se razvijaju postepeno tokom 5 i više minuta i traju 5–60 min.',
          '**Klaster**: strogo jednostrana, orbitalna, veoma jaka bol 15–180 min, uz suzenje, crvenilo oka, curenje nosa ili ptozu na istoj strani; pacijent je nemiran.',
          '**Glavobolja zbog prekomerne upotrebe lekova**: glavobolja 15 i više dana mesečno uz redovno uzimanje analgetika duže od 3 meseca.'
        ] },
        { type: 'flags', title: 'Crvene zastavice (SNOOP)', items: [
          '**S**istemski znaci: febrilnost, ukočen vrat, osip, gubitak težine, malignitet, imunosupresija, trudnoća ili puerperijum.',
          '**N**eurološki ispad, izmenjena svest, epileptični napad, edem papile.',
          '**O**nset – nagli početak: maksimalna jačina u roku od 5 minuta (udar groma) znači subarahnoidalnu hemoragiju dok se ne dokaže suprotno.',
          '**O**lder – nova glavobolja posle 50. godine: misli na gigantocelularni arteritis (osetljivost poglavine, klaudikacija vilice, smetnje vida, visoka SE).',
          '**P**romena obrasca: progresivna glavobolja, pogoršanje pri kašlju, naprezanju ili promeni položaja, buđenje iz sna zbog bola.',
          'Glavobolja posle traume glave, naročito kod starijih i kod pacijenata na antikoagulantnoj terapiji.',
          'Crveno bolno oko sa zamućenim vidom i mučninom: akutni glaukom zatvorenog ugla.'
        ] },
        { type: 'steps', title: 'Postupak u ambulanti', items: [
          'Anamneza: početak i brzina razvoja, trajanje, učestalost, prateći simptomi, koliko dana mesečno uzima analgetike.',
          'Pregled: TA, temperatura, svest, ukočenost vrata, kranijalni nervi, zenice, snaga, hod, očno dno ako je moguće, palpacija temporalnih arterija kod starijih od 50.',
          'Bez crvenih zastavica i uz uredan neurološki nalaz: klinička dijagnoza primarne glavobolje, bez snimanja.',
          'Sa crvenom zastavicom: hitno upućivanje na sekundarni nivo; udar groma i sumnja na meningitis idu sanitetom.',
          'Preporuči dnevnik glavobolje najmanje 8 nedelja (dani sa bolom, uzeti lekovi, okidači) i zakaži kontrolu.'
        ] },
        { type: 'drugs', title: 'Akutna terapija', items: [
          { name: 'ibuprofen', dose: '400–800 mg p.o. jednokratno na početku napada', note: 'Za migrenu i tenzionu glavobolju; oprez kod ulkusa, bubrežne slabosti, antikoagulantne terapije' },
          { name: 'paracetamol', dose: '1000 mg p.o., razmak između doza najmanje 4 h, najviše 4 g za 24 h', note: 'Kod migrene slabiji od NSAIL; lek prvog izbora u trudnoći' },
          { name: 'acetilsalicilna kiselina', dose: '900–1000 mg p.o. jednokratno na početku napada migrene', note: 'Ne kod mlađih od 16 godina' },
          { name: 'sumatriptan', dose: '50 mg p.o. (nekima treba 100 mg) na početku bola; ako bol prođe pa se vrati, druga doza posle najmanje 2 h; najviše 300 mg za 24 h', note: 'Ako prva doza nije delovala, drugu ne uzimati za isti napad. KI: ishemijska bolest srca, preležan infarkt, moždani udar ili TIA, neregulisana hipertenzija' },
          { name: 'metoklopramid', dose: '10 mg p.o. uz analgetik, najviše 3× dnevno', note: 'Kod mučnine i povraćanja; samo kratkotrajno' },
          { name: 'kiseonik (klaster)', dose: '100% kiseonik najmanje 12 l/min preko maske bez povratnog disanja sa rezervoarom, najmanje 15 min', note: 'I/ili sumatriptan 6 mg s.c.; paracetamol, NSAIL, opioidi i oralni triptani se ne daju' }
        ] },
        { type: 'drugs', title: 'Profilaksa migrene', items: [
          { name: 'propranolol', dose: '40 mg p.o. 2–3× dnevno, po potrebi postepeno do 240 mg dnevno', note: 'KI: astma, bradikardija, AV blok; oprez kod depresije (toksičnost pri predoziranju)' },
          { name: 'amitriptilin', dose: 'početi 10 mg p.o. uveče, postepeno povećavati po potrebi (raspon 10–100 mg uveče)', note: 'Koristan uz nesanicu i tenzionu glavobolju; antiholinergički efekti, oprez kod starijih' },
          { name: 'topiramat', dose: 'početi 25 mg p.o. 1× dnevno, titrirati tokom 4 nedelje do 50 mg 2× dnevno', note: 'Kontraindikovan u trudnoći; kod žena u reproduktivnom periodu samo uz visoko efikasnu kontracepciju' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno (sanitet): glavobolja tipa udar groma, glavobolja sa febrilnošću i ukočenim vratom, novi neurološki ispad, poremećaj svesti.',
          'Hitno istog dana: sumnja na gigantocelularni arteritis – odmah SE i CRP, bez odlaganja započeti glukokortikoid u visokoj dozi i hitno uputiti reumatologu, a kod smetnji vida oftalmologu.',
          'Neurologu: sumnja na klaster glavobolju, neuspeh dve profilaktičke terapije, atipična ili produžena aura, nejasna dijagnoza.',
          'Dalja obrada: značajna promena ustaljenog obrasca, glavobolja izazvana kašljem, naprezanjem ili naporom, nova glavobolja uz malignitet ili imunosupresiju.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Profilaksu razmotri kada napadi i pored pravilne akutne terapije značajno remete svakodnevni život.',
          'Glavobolja zbog prekomerne upotrebe lekova: obični analgetici 15 i više dana mesečno, triptani, opioidi ili kombinovani analgetici 10 i više dana mesečno.',
          'Leči se naglim ukidanjem leka koji se prekomerno koristi na najmanje mesec dana; upozori na prolazno pogoršanje i kontroliši za 4–8 nedelja.',
          'Svakome ko uzima akutnu terapiju objasni rizik od glavobolje zbog prekomerne upotrebe lekova. Opioide ne propisuj za migrenu ni tenzionu glavobolju.',
          'Ženama sa migrenom sa aurom ne propisuj rutinski kombinovanu hormonsku kontracepciju.',
          'Triptan uzeti na početku bola, ne tokom aure.'
        ] }
      ],
      sources: [{ name: 'NICE CG150 – Headaches in over 12s', url: 'https://www.nice.org.uk/guidance/cg150/chapter/Recommendations' }, { name: 'EHF – Aids to management of headache disorders in primary care (2. izdanje)', url: 'https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6734476/fullTextXML' }, { name: 'ALIMS – Sumatriptan, uputstvo za lek', url: 'https://www.alims.gov.rs/doc_file/lekovi/pil/515-01-02722-19-001.pdf' }],
      questions: [
        {
          q: 'Žena, 29 god., ima 3 napada mesečno jednostrane pulsirajuće glavobolje sa mučninom i fotofobijom, traju oko 12 h. Ibuprofen 400 mg pomaže delimično. Neurološki nalaz uredan. Šta je najbolji sledeći korak?',
          options: ['Uputiti na MR endokranijuma pre bilo kakve promene terapije', 'Dodati sumatriptan 50–100 mg p.o. na početku bola, uz ibuprofen', 'Propisati tramadol 50 mg p.o. po potrebi za jače napade', 'Odmah uvesti topiramat kao profilaksu'],
          answer: 1,
          explain: 'Tipična migrena bez crvenih zastavica ne zahteva snimanje. Kada NSAIL nije dovoljan dodaje se triptan (uz antiemetik po potrebi). Opioidi se ne koriste, a profilaksa nije indikovana kod 3 napada mesečno koji se mogu kontrolisati akutnom terapijom.'
        },
        {
          q: 'Muškarac, 52 god., javlja se zbog glavobolje koja je nastala naglo pre 2 h tokom dizanja tereta i za oko minut dostigla maksimum. Sada je bol 6/10, TA 160/95, neurološki nalaz uredan. Postupak?',
          options: ['Ibuprofen 600 mg p.o. i kontrola sutra ako bol ne prođe', 'Sumatriptan 50 mg p.o. jer je verovatno prvi napad migrene', 'Sniziti pritisak kaptoprilom i opservirati 1 h u ambulanti', 'Hitan transport u bolnicu sa CT-om zbog sumnje na subarahnoidalnu hemoragiju'],
          answer: 3,
          explain: 'Glavobolja koja dostiže maksimum u roku od nekoliko minuta je subarahnoidalna hemoragija dok se ne dokaže suprotno, čak i uz uredan neurološki nalaz i popuštanje bola. Potreban je hitan CT; povišen pritisak je ovde posledica, ne uzrok.'
        },
        {
          q: 'Žena, 44 god., ima glavobolju skoro svakog dana poslednjih 6 meseci. Uzima kombinovani analgetik sa kofeinom 4–5 dana nedeljno. Ranije je imala epizodičnu migrenu. Neurološki nalaz uredan. Šta savetuješ?',
          options: ['Naglo ukinuti kombinovani analgetik, objasniti prolazno pogoršanje i razmotriti profilaksu', 'Zameniti analgetik jačim, npr. tramadolom, da bi se smanjio broj tableta', 'Nastaviti isti analgetik i dodati diazepam uveče zbog napetosti', 'Uputiti na CT glave jer je glavobolja postala svakodnevna'],
          answer: 0,
          explain: 'Glavobolja 15 i više dana mesečno uz kombinovane analgetike 10 i više dana mesečno je glavobolja zbog prekomerne upotrebe lekova. Leči se ukidanjem leka (obične i kombinovane analgetike i triptane naglo), uz edukaciju i eventualno profilaksu migrene.'
        }
      ]
    },
    {
      id: 'vrtoglavica',
      title: 'Vrtoglavica',
      summary: 'Ključno je razlikovati bezazlenu perifernu vrtoglavicu od moždanog udara zadnje lobanjske jame.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Prvo razjasni šta pacijent podrazumeva: pravu vrtoglavicu (iluzija okretanja), presinkopu, nestabilnost pri hodu ili neodređenu ošamućenost. Za pravu vrtoglavicu najviše govore trajanje i okidači: sekunde pri promeni položaja (BPPV), dani neprekidno (vestibularni neuronitis ili moždani udar), sati uz šum i nagluvost (Menijerova bolest).' },
        { type: 'list', title: 'Periferna naspram centralne', items: [
          '**Periferna**: jaka vrtoglavica sa mučninom, nistagmus jednosmeran horizontalno-rotatorni koji se smiruje fiksacijom pogleda, pacijent može da hoda uz pridržavanje.',
          '**Centralna**: nistagmus koji menja smer sa smerom pogleda ili je čisto vertikalan, ne smiruje se fiksacijom, izražena ataksija – ne može da stoji ni sedi bez oslonca.',
          '**BPPV**: kratki napadi (sekunde), izazvani okretanjem u krevetu, sagibanjem ili gledanjem nagore; između napada bez tegoba; sluh uredan.',
          '**Vestibularni neuronitis**: nagla, stalna vrtoglavica danima, mučnina, spontani nistagmus, bez gubitka sluha i bez neuroloških ispada; često posle virusne infekcije.',
          '**Menijerova bolest**: ponavljane epizode od 20 min do nekoliko sati sa tinitusom, osećajem punoće u uvu i fluktuirajućom nagluvošću.'
        ] },
        { type: 'flags', title: 'Crvene zastavice za centralni uzrok', items: [
          'Diplopije, dizartrija, disfagija, utrnulost lica, slabost ili nespretnost ekstremiteta.',
          'Nova jaka potiljačna glavobolja ili bol u vratu (disekcija vertebralne arterije, krvarenje u malom mozgu).',
          'Nemogućnost samostalnog stajanja ili hoda.',
          'Vertikalni nistagmus ili nistagmus koji menja smer.',
          'Akutni jednostrani gubitak sluha uz vrtoglavicu (moguća ishemija u slivu AICA).',
          'Stariji pacijent sa vaskularnim faktorima rizika ili atrijalnom fibrilacijom i prvom epizodom stalne vrtoglavice.'
        ] },
        { type: 'steps', title: 'Pregled i testovi', items: [
          'Vitalni parametri, glikemija, EKG; TA ležeći i stojeći ako anamneza govori za presinkopu.',
          'Neurološki pregled: bulbomotorika, nistagmus, facijalis, govor, proba prst–nos, snaga, obavezno hod.',
          'Epizodna položajna vrtoglavica: **Dix-Hallpike** – glava okrenuta u stranu, brzo polaganje sa glavom blago zabačenom preko ivice kreveta, posmatrati oči.',
          'Pozitivan Dix-Hallpike: posle kratke latencije javlja se rotatorni nistagmus sa vrtoglavicom, kratko traje i slabi pri ponavljanju. Tada uradi **Epley** manevar (ne kod nestabilne vratne kičme).',
          'Stalna vrtoglavica sa spontanim nistagmusom: **HINTS** (test impulsa glave, nistagmus, test pokrivanja oka).',
          'HINTS govori za centralni uzrok ako je prisutno bilo šta od sledećeg: uredan test impulsa glave, nistagmus koji menja smer, vertikalna devijacija oka pri otkrivanju.'
        ] },
        { type: 'drugs', title: 'Simptomatska terapija (što kraće)', items: [
          { name: 'dimenhidrinat', dose: '50–100 mg p.o., po potrebi ponoviti uz razmak od najmanje 4–6 h, najviše 400 mg dnevno', note: 'Kod starijih najmanja doza – osetljiviji su na antiholinergičko dejstvo' },
          { name: 'metoklopramid', dose: '10 mg p.o. do 3× dnevno, razmak najmanje 6 h', note: 'Za mučninu i povraćanje; samo kratkotrajno' },
          { name: 'betahistin', dose: 'doza prema sažetku karakteristika leka, podeljeno u više dnevnih doza', note: 'Samo za profilaksu napada kod Menijerove bolesti; nema mesto u BPPV. Vestibularne supresore ukinuti što pre' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno (sanitet, jedinica za moždani udar): bilo koja crvena zastavica ili HINTS koji govori za centralni uzrok.',
          'Hitno ORL: vrtoglavica sa naglim jednostranim gubitkom sluha.',
          'ORL ili neurolog: BPPV koji se ne povlači posle ponovljenih manevara, atipičan nistagmus pri Dix-Hallpike testu, ponavljane epizode sa oštećenjem sluha.',
          'Kardiolog: presinkopa pri naporu, palpitacije, patološki EKG.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'HINTS se primenjuje samo kod pacijenta koji u trenutku pregleda ima stalnu vrtoglavicu i nistagmus; kod BPPV se ne radi.',
          'Uredan test impulsa glave kod pacijenta sa akutnom stalnom vrtoglavicom je loš znak – govori za moždani udar.',
          'BPPV se leči repozicionim manevrom, ne lekovima; recidivi su mogući.',
          'Kod vestibularnog neuronitisa podstiči ranu mobilizaciju i vestibularne vežbe.',
          'Kod starijih uvek pregledaj listu lekova: antihipertenzivi, sedativi i antiepileptici često daju nestabilnost koju pacijent zove vrtoglavicom.'
        ] }
      ],
      sources: [{ name: 'NICE NG127 – Suspected neurological conditions', url: 'https://www.nice.org.uk/guidance/ng127/chapter/Recommendations' }, { name: 'ALIMS – dimenhidrinat, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-01968-20-001.pdf' }],
      questions: [
        {
          q: 'Žena, 61 god., žali se na kratke napade okretanja kada legne ili se okrene u krevetu na desnu stranu, traju oko 20 s. Sluh uredan, neurološki nalaz uredan. Šta je sledeći korak?',
          options: ['Propisati betahistin 3× dnevno tokom mesec dana', 'Uputiti na MR endokranijuma zbog sumnje na leziju zadnje jame', 'Uraditi Dix-Hallpike test i, ako je pozitivan, Epley manevar', 'Propisati dimenhidrinat 50 mg 3× dnevno tokom 2 nedelje'],
          answer: 2,
          explain: 'Kratka položajna vrtoglavica bez drugih simptoma je tipična za BPPV. Dijagnoza se potvrđuje Dix-Hallpike testom, a leči repozicionim manevrom. Lekovi ne leče BPPV, a snimanje nije potrebno uz tipičnu sliku.'
        },
        {
          q: 'Muškarac, 67 god., hipertoničar i dijabetičar, ima od jutros stalnu vrtoglavicu sa povraćanjem. Ima spontani nistagmus koji udara udesno pri pogledu udesno i ulevo pri pogledu ulevo. Test impulsa glave je uredan. Ne može da stoji bez oslonca. Postupak?',
          options: ['Hitan transport u bolnicu sa jedinicom za moždani udar', 'Dimenhidrinat i.m. i kontrola za 3 dana kod izabranog lekara', 'Epley manevar jer je najverovatnije u pitanju BPPV', 'Uput ORL specijalisti u redovnom terminu zbog neuronitisa'],
          answer: 0,
          explain: 'Nistagmus koji menja smer, uredan test impulsa glave i teška ataksija kod pacijenta sa vaskularnim rizikom govore za moždani udar zadnje lobanjske jame. Kod neuronitisa je test impulsa glave patološki, a nistagmus jednosmeran.'
        },
        {
          q: 'Žena, 38 god., ima treći dan stalnu vrtoglavicu posle prehlade. Nistagmus je jednosmeran, test impulsa glave patološki, sluh uredan, hoda uz pridržavanje, nema neuroloških ispada. Uzima diazepam 5 mg 3× dnevno od početka. Savet?',
          options: ['Nastaviti diazepam još 2 nedelje i strogo mirovati u krevetu', 'Dodati betahistin i dimenhidrinat i nastaviti diazepam', 'Uputiti hitno na CT jer vrtoglavica traje duže od 48 h', 'Ukinuti diazepam, podstaći kretanje i vestibularne vežbe'],
          answer: 3,
          explain: 'Slika odgovara vestibularnom neuronitisu. Vestibularni supresori se daju samo kratko, u prvim danima, jer usporavaju centralnu kompenzaciju; rana mobilizacija ubrzava oporavak.'
        }
      ]
    },
    {
      id: 'tia',
      title: 'TIA i sekundarna prevencija moždanog udara',
      summary: 'TIA je upozorenje: rizik od moždanog udara je najveći u prvim danima, pa se zbrinjava kao hitno stanje.',
      urgent: true,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Tranzitorni ishemijski atak je prolazna epizoda fokalnog neurološkog ispada koja se potpuno povlači. Rizik od moždanog udara je najveći u prvim danima, pa pacijent treba da bude viđen kod neurologa u roku od 24 h. Ako ispad i dalje traje u trenutku pregleda, to nije TIA nego moždani udar do dokaza suprotnog.' },
        { type: 'list', title: 'Klinička slika', items: [
          'Nagla jednostrana slabost ili utrnulost lica, ruke ili noge.',
          'Poremećaj govora: afazija ili dizartrija.',
          'Amaurosis fugax: prolazno slepilo na jednom oku, kao zavesa.',
          'Vertebrobazilarni sliv: diplopije, ataksija, vrtoglavica uz druge znake moždanog stabla.',
          'Ne liče na TIA: izolovana ošamućenost, sinkopa, prolazna konfuzija, simptomi koji se šire (migrenska aura, fokalni napad).'
        ] },
        { type: 'steps', title: 'Postupak na terenu i u ambulanti', items: [
          'FAST procena (lice, ruka, govor, vreme) i tačno vreme početka i prestanka simptoma.',
          'Glikemija odmah – hipoglikemija imitira moždani udar. TA, puls, SpO2, EKG (atrijalna fibrilacija).',
          'Ispad i dalje prisutan: postupak kao kod moždanog udara – hitan transport sa najavom u jedinicu za moždani udar, bez antiagregacione terapije pre CT-a.',
          'Simptomi su se potpuno povukli: acetilsalicilna kiselina 300 mg p.o. odmah, osim ako postoji kontraindikacija ili je pacijent na antikoagulantnoj terapiji.',
          'Pacijent na antikoagulantnoj terapiji: bez dodatne antiagregacije, hitno u bolnicu radi CT-a i isključenja krvarenja.',
          'Uputiti istog dana neurologu ili u prijemnu ambulantu; pregled specijaliste treba da bude unutar 24 h od događaja.',
          'Ne snižavati naglo krvni pritisak. Objasniti pacijentu da pri povratku simptoma odmah zove 194.'
        ] },
        { type: 'list', title: 'Obrada na sekundarnom nivou', items: [
          'Snimanje mozga po proceni specijaliste (MR sa difuzijom; CT kada se sumnja na drugu dijagnozu ili je pacijent na antikoagulansu).',
          'Ultrazvuk karotidnih arterija: simptomatska stenoza 50–99% (NASCET) se hitno upućuje radi endarterektomije.',
          'EKG i holter EKG radi otkrivanja paroksizmalne atrijalne fibrilacije; ehokardiografija po proceni.',
          'Lipidni status, glikemija ili HbA1c, kreatinin, krvna slika.'
        ] },
        { type: 'drugs', title: 'Sekundarna prevencija', items: [
          { name: 'acetilsalicilna kiselina', dose: '300 mg p.o. dnevno, započeti odmah; dalju antiagregacionu terapiju određuje neurolog', note: 'Uz inhibitor protonske pumpe kod ranije dispepsije na acetilsalicilnu kiselinu' },
          { name: 'klopidogrel', dose: 'uobičajeno 75 mg p.o. 1× dnevno (ponekad jednokratna veća početna doza)', note: 'Kratkotrajnu dvojnu antiagregacionu terapiju uvodi specijalista; zatim se trajno nastavlja jedan lek' },
          { name: 'atorvastatin', dose: 'statin visokog intenziteta p.o. 1× dnevno, doza prema smernicama za sekundarnu prevenciju', note: 'Uvodi se što pre po potvrdi dijagnoze TIA' },
          { name: 'direktni oralni antikoagulans', dose: 'doza prema sažetku karakteristika leka, bubrežnoj funkciji, uzrastu i telesnoj masi', note: 'Kod atrijalne fibrilacije umesto antiagregacije; vreme uvođenja određuje neurolog' },
          { name: 'antihipertenzivna terapija', dose: 'ACE inhibitor ili sartan uz tiazidima sličan diuretik ili kalcijumski antagonist, titrirati do cilja', note: 'Ciljne vrednosti prema važećim smernicama za hipertenziju; ne snižavati naglo u akutnoj fazi' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno sanitetom: ispad i dalje traje, ponavljane TIA u kratkom razmaku (krešendo TIA), TIA kod pacijenta na antikoagulantnoj terapiji.',
          'Istog dana neurologu: svaka sumnja na TIA – pregled specijaliste unutar 24 h od početka simptoma.',
          'Vaskularnom hirurgu: simptomatska karotidna stenoza 50–99%.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Skorove (ABCD2) ne koristi da bi odložio upućivanje – i pacijent sa niskim skorom može imati karotidnu stenozu ili atrijalnu fibrilaciju.',
          'Dvojna antiagregaciona terapija posle TIA je kratkotrajna i vremenski ograničena – trajanje određuje neurolog.',
          'Kod atrijalne fibrilacije antiagregaciona terapija nije zamena za antikoagulantnu.',
          'Prestanak pušenja, fizička aktivnost, kontrola dijabetesa i pritiska su deo terapije, ne dodatak.',
          'Kod sumnje na TIA se ne radi rutinski CT; izuzetak su pacijenti kod kojih se sumnja na drugu dijagnozu koju CT može da otkrije.'
        ] }
      ],
      sources: [{ name: 'NICE NG128 – Stroke and TIA in over 16s', url: 'https://www.nice.org.uk/guidance/ng128/chapter/Recommendations' }, { name: 'NHS – Clopidogrel', url: 'https://www.nhs.uk/medicines/clopidogrel/how-and-when-to-take-clopidogrel/' }],
      questions: [
        {
          q: 'Muškarac, 66 god., dolazi u ambulantu jer mu je pre 3 h desna ruka bila slaba i nije mogao da izgovori reči oko 20 minuta. Sada je bez tegoba, neurološki nalaz uredan, TA 165/90, glikemija 6,1, EKG sinusni ritam. Ne uzima antikoagulanse. Postupak?',
          options: ['Uvesti antihipertenziv i zakazati neurologa u redovnom terminu za mesec dana', 'Dati acetilsalicilnu kiselinu 300 mg p.o. i istog dana uputiti neurologu', 'Dati kaptopril 25 mg pod jezik da se pritisak brzo snizi i otpustiti kući', 'Uraditi lipidni status i kontrolu za 7 dana, jer su simptomi prošli'],
          answer: 1,
          explain: 'TIA je hitno stanje sa najvećim rizikom od moždanog udara u prvim danima. Kada su simptomi potpuno prošli daje se ASK 300 mg i obezbeđuje pregled neurologa unutar 24 h. Naglo snižavanje pritiska nije indikovano.'
        },
        {
          q: 'Žena, 74 god., imala je TIA pre 10 dana. Holter EKG je pokazao paroksizmalnu atrijalnu fibrilaciju. Bubrežna funkcija uredna, bez krvarenja u anamnezi. Koja je antitrombotska terapija izbora za dugoročnu prevenciju?',
          options: ['Acetilsalicilna kiselina 100 mg dnevno trajno', 'Klopidogrel 75 mg dnevno trajno', 'Direktni oralni antikoagulans trajno', 'Acetilsalicilna kiselina i klopidogrel trajno'],
          answer: 2,
          explain: 'Kod kardioembolijske TIA zbog atrijalne fibrilacije indikovana je oralna antikoagulantna terapija, prednost imaju direktni oralni antikoagulansi. Antiagregaciona terapija znatno slabije sprečava embolijski moždani udar.'
        },
        {
          q: 'Ekipa HMP dolazi kod muškarca, 70 god., kome je pre 40 min oslabila leva strana tela. Pri pregledu i dalje ima slabost leve ruke i asimetriju lica. TA 180/100, glikemija 7,2. Šta je ispravno?',
          options: ['Hitan transport sa najavom u jedinicu za moždani udar, bez davanja acetilsalicilne kiseline', 'Dati acetilsalicilnu kiselinu 300 mg p.o. i transportovati u bolnicu', 'Sniziti pritisak urapidilom na ispod 140/90 pa zatim transportovati', 'Sačekati 1 h na terenu jer se kod TIA simptomi obično povuku'],
          answer: 0,
          explain: 'Dok ispad traje to je moždani udar i pacijent je kandidat za reperfuzionu terapiju – svaki minut je važan. ASK se ne daje pre CT-a jer krvarenje nije isključeno, a pritisak se prehospitalno po pravilu ne snižava.'
        }
      ]
    },
    {
      id: 'depresija',
      title: 'Depresija',
      summary: 'Česta, nedovoljno prepoznata i lečiva u primarnoj zaštiti; uvek aktivno pitaj za suicidalne misli.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Depresivna epizoda: najmanje 2 nedelje sniženog raspoloženja ili gubitka interesovanja, uz poremećaj sna, apetita, energije, koncentracije, osećaj krivice, psihomotornu usporenost i suicidalne misli. Većinu blagih i umerenih epizoda može da vodi izabrani lekar. Pre terapije isključi bipolarni poremećaj, somatske uzroke i zloupotrebu alkohola.' },
        { type: 'list', title: 'Skrining i procena težine', items: [
          '**PHQ-2**: dva pitanja o sniženom raspoloženju i gubitku interesovanja u poslednje 2 nedelje; pozitivan odgovor traži PHQ-9.',
          '**PHQ-9** (0–27): 5–9 blaga, 10–14 umerena, 15–19 umereno teška, 20–27 teška depresija. NICE deli na manje tešku (ispod 16) i težu depresiju (16 i više).',
          'Stavka 9 u PHQ-9 (misli o smrti ili samopovređivanju): svaki pozitivan odgovor zahteva direktnu procenu suicidalnosti.',
          'Pitaj za ranije epizode povišenog raspoloženja, smanjene potrebe za snom i preteranog trošenja (bipolarni poremećaj).',
          'Laboratorija: krvna slika, TSH, glikemija; po proceni vitamin B12 kod starijih.',
          'Lekovi i supstance koji mogu da doprinesu: alkohol, kortikosteroidi, interferon, izotretinoin, benzodiazepini.'
        ] },
        { type: 'steps', title: 'Procena suicidalnosti', items: [
          'Pitaj direktno: da li razmišljate o tome da sebi oduzmete život? Pitanje ne povećava rizik.',
          'Stepenuj: pasivne misli o smrti → aktivne suicidalne misli → plan → namera i pripreme.',
          'Faktori rizika: raniji pokušaj (najjači), muški pol, starija životna dob, alkohol, psihoza, beznađe, skorašnji gubitak, hronična bolest, dostupnost sredstava.',
          'Zaštitni faktori: porodica, deca, razlozi za život, spremnost da prihvati pomoć.',
          'Plan sa namerom, psihotični simptomi ili nedavni pokušaj: ne ostavljaj pacijenta samog, hitan psihijatrijski pregled uz pratnju.',
          'Niži rizik: dogovori bezbednosni plan, uključi porodicu, ukloni sredstva (lekovi, oružje), rana kontrola (za oko nedelju dana).'
        ] },
        { type: 'drugs', title: 'Antidepresivi – početak', items: [
          { name: 'sertralin', dose: 'početi 50 mg p.o. 1× dnevno; po potrebi povećavati za 50 mg u razmacima od najmanje nedelju dana, najviše 200 mg dnevno', note: 'Kod paničnog poremećaja početi sa 25 mg prvih nedelju dana' },
          { name: 'escitalopram', dose: '10 mg p.o. 1× dnevno, najviše 20 mg; stariji od 65 god. početi 5 mg, najviše 10 mg', note: 'Produžava QT dozno zavisno – ne kombinovati sa drugim lekovima koji produžavaju QT' },
          { name: 'drugi antidepresivi (fluoksetin, mirtazapin i dr.)', dose: 'doza prema sažetku karakteristika leka', note: 'Izbor prema profilu neželjenih dejstava, interakcijama i ranijem odgovoru pacijenta' }
        ] },
        { type: 'steps', title: 'Praćenje terapije', items: [
          'Objasni: efekat se javlja tek posle nekoliko nedelja, a neželjeni efekti (mučnina, nemir, glavobolja) odmah i obično prolaze.',
          'Prva kontrola obično u roku od 2 nedelje; za 1 nedelju kod uzrasta 18–25 godina i kod povišenog suicidalnog rizika.',
          'Bez odgovora posle više nedelja na adekvatnoj dozi: proveri uzimanje, povećaj dozu ili promeni lek.',
          'Posle postizanja remisije nastavi istu dozu više meseci (uobičajeno najmanje 6); kod ponavljanih epizoda duže.',
          'Ukidanje postepeno, u koracima (npr. svaki korak 50% prethodne doze, pri manjim dozama 25%), uz 1–2 nedelje procene posle svakog; naglo ukidanje daje simptome obustave (vrtoglavica, parestezije, razdražljivost).'
        ] },
        { type: 'refer', title: 'Kada psihijatru', items: [
          'Hitno: suicidalni plan ili namera, psihotični simptomi, odbijanje hrane i tečnosti, teško zanemarivanje sebe.',
          'Sumnja na bipolarni poremećaj (antidepresiv bez stabilizatora može da izazove maniju).',
          'Izostanak odgovora na dva antidepresiva u adekvatnoj dozi i trajanju.',
          'Teška depresija, depresija u trudnoći i posle porođaja, depresija kod dece i adolescenata.',
          'Udružena zavisnost od alkohola ili psihoaktivnih supstanci.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod blage depresije prva linija su psihoedukacija, fizička aktivnost i psihoterapija; antidepresiv nije obavezan.',
          'SSRI povećavaju rizik od krvarenja uz NSAIL, antiagregacione i antikoagulantne lekove – razmotri gastroprotekciju.',
          'Kod starijih SSRI mogu da izazovu hiponatremiju: proveri natrijum pri pojavi konfuzije, slabosti ili padova.',
          'SSRI sa tramadolom, triptanima ili kantarionom: rizik od serotoninskog sindroma.',
          'Kantarion ne preporučuj: neujednačeni preparati i ozbiljne interakcije (i sa hormonskom kontracepcijom).'
        ] }
      ],
      sources: [{ name: 'NICE NG222 – Depression in adults', url: 'https://www.nice.org.uk/guidance/ng222/chapter/Recommendations' }, { name: 'ALIMS – sertralin, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-02369-20-003.pdf' }, { name: 'ALIMS – escitalopram, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-05528-17-009.pdf' }],
      questions: [
        {
          q: 'Žena, 23 god., ima PHQ-9 skor 16. Negira suicidalne misli, bez ranijih epizoda povišenog raspoloženja, TSH uredan. Započinješ sertralin 50 mg. Kada zakazuješ prvu kontrolu?',
          options: ['Za 6–8 nedelja, kada se očekuje pun efekat leka', 'Za 3 meseca, uz kontrolni PHQ-9', 'Samo ako se pacijentkinja sama javi zbog pogoršanja', 'Za oko nedelju dana, radi procene podnošljivosti i suicidalnog rizika'],
          answer: 3,
          explain: 'Prve nedelje terapije nose rizik od neželjenih efekata, prekida uzimanja i prolaznog pojačanja nemira i suicidalnih misli. Kod osoba uzrasta 18–25 godina i kod povišenog suicidalnog rizika kontrola se zakazuje već za 1 nedelju.'
        },
        {
          q: 'Muškarac, 58 god., posle gubitka posla kaže da bi bilo bolje da ga nema. Na direktno pitanje priznaje da je odlučio da se obesi u garaži i da je napisao oproštajno pismo. Pije svakodnevno. Postupak?',
          options: ['Uvesti sertralin 50 mg i zakazati kontrolu za 7 dana', 'Ne ostavljati ga samog i obezbediti hitan psihijatrijski pregled uz pratnju', 'Propisati diazepam 5 mg 3× dnevno i uputiti psihologu', 'Dogovoriti usmeno da neće ništa učiniti i pozvati ga sutra telefonom'],
          answer: 1,
          explain: 'Konkretan plan, namera i pripreme, uz muški pol i alkohol, znače visok neposredni rizik. Pacijent se ne ostavlja sam i hitno se upućuje psihijatru uz pratnju; ambulantno uvođenje leka ili dogovor nisu dovoljni.'
        },
        {
          q: 'Žena, 31 god., sa depresivnim simptomima navodi da je pre 2 godine imala period od nedelju dana kada je spavala 3 h dnevno, bila puna energije i potrošila ušteđevinu. Šta je najprimerenije?',
          options: ['Uvesti escitalopram 10 mg i kontrolisati za 2 nedelje', 'Uvesti fluoksetin 20 mg jer ima najmanje interakcija', 'Ne uvoditi antidepresiv samostalno, uputiti psihijatru zbog sumnje na bipolarni poremećaj', 'Propisati mirtazapin 30 mg uveče zbog nesanice u anamnezi'],
          answer: 2,
          explain: 'Anamneza epizode povišenog raspoloženja sa smanjenom potrebom za snom i trošenjem ukazuje na bipolarni poremećaj. Monoterapija antidepresivom može da izazove maniju, pa terapiju vodi psihijatar.'
        }
      ]
    },
    {
      id: 'anksioznost',
      title: 'Anksiozni poremećaji i panični napad',
      summary: 'Panični napad liči na hitno somatsko stanje; prvo isključi organski uzrok, zatim leči uzrok a ne samo simptom.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Panični napad je iznenadan talas intenzivnog straha koji brzo dostiže vrhunac, uz lupanje srca, gušenje, drhtanje, trnjenje i strah od smrti. Generalizovani anksiozni poremećaj je preterana, teško kontrolisana briga većinu dana, mesecima. Lečenje su kognitivno-bihejvioralna terapija i SSRI; benzodiazepini se ne preporučuju za panični poremećaj, a kod GAD samo kratkotrajno u krizi.' },
        { type: 'list', title: 'Organski uzroci koje treba isključiti', items: [
          'Kardiološki: akutni koronarni sindrom, tahiaritmije (SVT, atrijalna fibrilacija).',
          'Respiratorni: astma, plućna embolija, pneumotoraks.',
          'Endokrini i metabolički: hipertireoza, hipoglikemija, ređe feohromocitom.',
          'Supstance: kofein, energetska pića, kokain, amfetamini, dekongestivi, salbutamol, levotiroksin u višku.',
          'Apstinencija od alkohola ili benzodiazepina.',
          'Neurološki: fokalni epileptični napadi, vestibularni poremećaji.'
        ] },
        { type: 'flags', title: 'Kada to nije samo panika', items: [
          'Prvi napad posle 40. godine ili kod pacijenta sa kardiovaskularnim faktorima rizika.',
          'Bol u grudima pri naporu, sinkopa, SpO2 ispod 94%, jednostrani otok noge, hemoptizije.',
          'Patološki EKG ili nepravilan puls.',
          'Febrilnost, gubitak težine, tremor i nepodnošenje toplote.',
          'Napad koji ne popušta ili nastaje iz sna uz gubitak svesti.'
        ] },
        { type: 'steps', title: 'Postupak kod akutnog napada', items: [
          'Vitalni parametri, SpO2, glikemija i EKG kod prvog napada ili kada postoji bilo kakva sumnja.',
          'Miran prostor, smiren ton, objasni da simptomi nisu opasni i da prolaze.',
          'Vođeno usporeno disanje, sa izdahom dužim od udaha.',
          'Benzodiazepin nije rutinska terapija paničnog napada; ako se izuzetno daje, onda jednokratno i u najmanjoj dozi.',
          'Posle napada: edukacija o prirodi paničnog napada, dogovor o kontroli i planu lečenja.'
        ] },
        { type: 'drugs', title: 'Terapija', items: [
          { name: 'sertralin', dose: 'panični poremećaj: 25 mg p.o. 1× dnevno prvih nedelju dana, zatim 50 mg; po potrebi do najviše 200 mg dnevno', note: 'Niža početna doza smanjuje rana neželjena dejstva; upozori na prolazno pojačanje nemira i nesanicu' },
          { name: 'escitalopram', dose: 'panični poremećaj: 5 mg p.o. 1× dnevno prve nedelje, zatim 10 mg; najviše 20 mg dnevno', note: 'Stariji od 65 godina: početi 5 mg, do 10 mg dnevno; dozno zavisno produžava QT' },
          { name: 'diazepam', dose: 'najmanja efikasna doza p.o. (registrovani raspon za anksioznost 5–30 mg dnevno u podeljenim dozama), samo kratkotrajno u krizi', note: 'Stariji i iscrpljeni: polovina doze. Zavisnost, sedacija, padovi; ne uz alkohol i opioide' },
          { name: 'lorazepam', dose: '1–4 mg p.o. dnevno, podeljeno; najduže do 4 nedelje', note: 'Alternativa diazepamu; ista ograničenja' },
          { name: 'propranolol', dose: '40 mg p.o. 1× dnevno, po potrebi do 40 mg 3× dnevno', note: 'Samo za somatske simptome (lupanje srca, tremor); KI astma, bradikardija' }
        ] },
        { type: 'list', title: 'Racionalno sa benzodiazepinima', items: [
          'Propisuj najmanju efikasnu dozu, uz jasan datum prestanka i bez automatskog obnavljanja recepta.',
          'Izbegavaj kod starijih (padovi, konfuzija), kod zavisnika, kod HOBP i apneje u snu, i u kombinaciji sa opioidima.',
          'Posle dužeg redovnog uzimanja ne ukidaj naglo: rizik od apstinencijalnih napada.',
          'Ukidanje dugotrajne terapije: sporo, stepenasto smanjivanje srazmerno trenutnoj dozi (koraci sve manji kako doza pada), uz podršku.',
          'Benzodiazepini ne leče anksiozni poremećaj – samo prekrivaju simptome dok se uzimaju.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno na internistički ili urgentni prijem: sumnja na organski uzrok napada.',
          'Psihijatru: izostanak odgovora na SSRI posle adekvatnog trajanja terapije, izražena agorafobija, udružena depresija sa suicidalnim rizikom.',
          'Psihijatru: zavisnost od benzodiazepina ili alkohola, sumnja na opsesivno-kompulzivni ili posttraumatski stresni poremećaj.',
          'Psihologu ili psihoterapeutu: kognitivno-bihejvioralna terapija kao prva linija kad god je dostupna.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Panični napad je dijagnoza isključenja kod prvog javljanja, naročito posle 40. godine.',
          'Upitnik GAD-7 je koristan za procenu težine i praćenje odgovora na terapiju.',
          'Ako je lek delotvoran, nastavlja se najmanje godinu dana jer je rizik od relapsa visok.',
          'Pitaj za kofein, alkohol i energetska pića – često su glavni okidač.',
          'Anksioznost i depresija često idu zajedno: uvek proveri raspoloženje i suicidalne misli.'
        ] }
      ],
      sources: [{ name: 'NICE CG113 – Generalised anxiety disorder and panic disorder', url: 'https://www.nice.org.uk/guidance/cg113/chapter/Recommendations' }, { name: 'NICE NG215 – Medicines associated with dependence or withdrawal', url: 'https://www.nice.org.uk/guidance/ng215/chapter/Recommendations' }, { name: 'ALIMS – diazepam tablete, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-02023-18-001.pdf' }],
      questions: [
        {
          q: 'Muškarac, 54 god., pušač i hipertoničar, prvi put u životu ima napad lupanja srca, stezanja u grudima, znojenja i straha od smrti, traje 40 min. Supruga kaže da je pod stresom. Šta je prvi korak?',
          options: ['EKG, vitalni parametri i postupak kao kod sumnje na akutni koronarni sindrom', 'Diazepam 5 mg p.o. i vežbe disanja, pa procena posle 30 min', 'Uvesti sertralin 25 mg i zakazati kontrolu za 2 nedelje', 'Smiriti pacijenta i uputiti psihijatru u redovnom terminu'],
          answer: 0,
          explain: 'Prvi napad posle 40. godine kod pacijenta sa faktorima rizika i bolom u grudima koji traje 40 min nije panični napad dok se ne isključi akutni koronarni sindrom. Davanje sedativa pre EKG-a odlaže dijagnozu.'
        },
        {
          q: 'Žena, 27 god., ima ponavljane panične napade 2 meseca, uredan EKG i TSH. Započinješ sertralin. Koji savet o početku terapije je ispravan?',
          options: ['Početi odmah sa 100 mg da bi efekat nastupio brže', 'Uzimati lek samo u danima kada oseti da napad dolazi', 'Početi sa 25 mg i upozoriti na moguće prolazno pojačanje nemira', 'Očekivati pun efekat već posle 3–4 dana uzimanja'],
          answer: 2,
          explain: 'Kod anksioznih poremećaja SSRI se uvodi u nižoj dozi jer prvih 1–2 nedelje može prolazno da pojača nemir. Uzima se svakodnevno, a efekat se procenjuje tek posle više nedelja.'
        },
        {
          q: 'Žena, 72 god., uzima bromazepam 3 mg uveče već 6 godina. Imala je dva pada u poslednja 3 meseca. Želi da prestane. Šta je ispravno?',
          options: ['Odmah potpuno ukinuti bromazepam jer je rizik od pada visok', 'Zameniti bromazepam zolpidemom 10 mg uveče', 'Nastaviti isto jer je ukidanje posle 6 godina previše rizično', 'Postepeno smanjivati dozu tokom više nedelja ili meseci uz podršku'],
          answer: 3,
          explain: 'Dugotrajna upotreba benzodiazepina kod starijih povećava rizik od padova i treba je ukinuti, ali postepeno, stepenastim smanjivanjem doze. Naglo ukidanje nosi rizik od apstinencijalnih napada, a zolpidem ima iste rizike.'
        }
      ]
    },
    {
      id: 'nesanica',
      title: 'Nesanica',
      summary: 'Hronična nesanica se leči promenom navika i KBT-I; hipnotici su kratkotrajna i rezervna opcija.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Nesanica je teškoća uspavljivanja, održavanja sna ili prerano buđenje, uz dnevne posledice, i pored adekvatnih uslova za spavanje. Hronična je kada traje mesecima. Prva linija lečenja hronične nesanice je kognitivno-bihejvioralna terapija za nesanicu (KBT-I), ne lek.' },
        { type: 'list', title: 'Šta tražiti u anamnezi', items: [
          'Raspored spavanja: vreme odlaska u krevet, uspavljivanja, buđenja, dnevno dremanje; dnevnik spavanja 2 nedelje.',
          'Depresija i anksioznost (prerano buđenje je tipično za depresiju).',
          'Hrkanje, pauze u disanju, dnevna pospanost: opstruktivna apneja u snu.',
          'Neprijatan nagon za pomeranjem nogu uveče: sindrom nemirnih nogu – proveri feritin.',
          'Bol, nikturija, dispneja, refluks, valunzi.',
          'Kofein, alkohol, nikotin; lekovi: kortikosteroidi, teofilin, dekongestivi, beta-blokatori, SSRI, diuretici uveče, levotiroksin u višku.'
        ] },
        { type: 'steps', title: 'Nefarmakološki postupak', items: [
          'Stalno vreme ustajanja svakog dana, uključujući vikend.',
          'Kontrola stimulusa: krevet samo za spavanje; ako ne može da zaspi, ustati i vratiti se tek kada se javi pospanost.',
          'Restrikcija vremena u krevetu: ograničiti na stvarno vreme spavanja, pa postepeno produžavati.',
          'Bez dremanja preko dana; bez kofeina posle podne; bez alkohola kao sredstva za spavanje.',
          'Bez ekrana i jakog svetla 1 h pre spavanja; hladna, tamna i tiha soba.',
          'Redovna fizička aktivnost, ali ne neposredno pred spavanje.'
        ] },
        { type: 'drugs', title: 'Lekovi (kratkotrajno)', items: [
          { name: 'zolpidem', dose: '10 mg p.o. neposredno pred spavanje; 65 i više godina ili oštećenje jetre ili bubrega: 5 mg', note: 'Od 2 dana do najviše 4 nedelje, po mogućnosti ne svake noći; tolerancija i zavisnost' },
          { name: 'melatonin sa produženim oslobađanjem', dose: '2 mg p.o. 1–2 h pre spavanja', note: 'Kratkotrajno, najduže 13 nedelja' },
          { name: 'sedativni antidepresiv', dose: 'doza prema sažetku karakteristika leka', note: 'Samo kada uz nesanicu postoji depresija; nije terapija za samu nesanicu' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Sumnja na opstruktivnu apneju u snu: hrkanje, posvedočene apneje, dnevna pospanost, gojaznost, rezistentna hipertenzija.',
          'Sumnja na narkolepsiju ili parasomnije (hodanje u snu, nasilno ponašanje u snu).',
          'Nesanica uz tešku depresiju, suicidalne misli ili psihozu.',
          'Hronična nesanica koja ne reaguje na pravilno sprovedene nefarmakološke mere.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Akutna nesanica zbog stresa obično prolazi sama; hipnotik, ako je neophodan, samo nekoliko dana.',
          'Benzodiazepini i Z-lekovi kod starijih povećavaju rizik od padova, preloma i konfuzije – izbegavati.',
          'Sedativni antihistaminici i antipsihotici se ne preporučuju za nesanicu.',
          'Alkohol skraćuje uspavljivanje, ali razbija drugi deo noći.',
          'Hipnotik ne propisuj pacijentu sa nelečenom apnejom u snu.'
        ] }
      ],
      sources: [{ name: 'NHS – Zolpidem', url: 'https://www.nhs.uk/medicines/zolpidem/how-and-when-to-take-zolpidem/' }, { name: 'NHS – Melatonin', url: 'https://www.nhs.uk/medicines/melatonin/how-and-when-to-take-melatonin/' }, { name: 'NICE NG215 – Medicines associated with dependence or withdrawal', url: 'https://www.nice.org.uk/guidance/ng215/chapter/Recommendations' }],
      questions: [
        {
          q: 'Žena, 49 god., već 5 meseci teško zaspi i budi se više puta noću, 4–5 noći nedeljno. Danju je umorna. Nije depresivna, ne hrče, pije 4 kafe dnevno, poslednju oko 18 h. Šta je prva linija lečenja?',
          options: ['Zolpidem 10 mg svake večeri tokom 3 meseca', 'Kontrola stimulusa, restrikcija vremena u krevetu i ukidanje popodnevnog kofeina', 'Bromazepam 3 mg uveče uz kontrolu za mesec dana', 'Kvetiapin 25 mg uveče jer ne izaziva zavisnost'],
          answer: 1,
          explain: 'Za hroničnu nesanicu prva linija je KBT-I, čiji su osnov kontrola stimulusa i restrikcija spavanja, uz korekciju navika. Hipnotici su ograničeni na najviše 4 nedelje, a antipsihotici se ne preporučuju.'
        },
        {
          q: 'Muškarac, 56 god., BMI 34, žali se na nesanicu i jutarnje glavobolje. Supruga kaže da glasno hrče i povremeno prestane da diše. Na poslu zaspi za stolom. TA 155/95 na tri leka. Šta je sledeći korak?',
          options: ['Zolpidem 10 mg uveče 4 nedelje i kontrola', 'Diazepam 5 mg uveče jer smanjuje noćna buđenja', 'Melatonin 2 mg uveče i saveti o higijeni spavanja', 'Uputiti na ispitivanje zbog sumnje na opstruktivnu apneju u snu'],
          answer: 3,
          explain: 'Hrkanje, posvedočene apneje, dnevna pospanost, gojaznost i rezistentna hipertenzija ukazuju na opstruktivnu apneju u snu. Sedativi i hipnotici mogu da je pogoršaju; potrebna je poligrafija ili polisomnografija.'
        },
        {
          q: 'Žena, 78 god., traži nešto za spavanje. Živi sama, koristi štap, pre mesec dana je pala. Leže u 20 h, zaspi oko 23 h, ustaje u 6 h, drema posle ručka 2 h. Šta savetuješ?',
          options: ['Kasniji odlazak u krevet, ukidanje dnevnog dremanja i stalno vreme ustajanja, bez hipnotika', 'Zolpidem 10 mg jer je bezbedniji od benzodiazepina kod starijih', 'Lorazepam 2,5 mg uveče uz savet da ne ustaje noću', 'Difenhidramin uveče jer se izdaje bez recepta'],
          answer: 0,
          explain: 'Pacijentkinja provodi u krevetu znatno više vremena nego što spava i drema danju; rešenje je bihejvioralno. Hipnotici i sedativni antihistaminici kod starije osobe sa padom nose visok rizik od novih padova i konfuzije.'
        }
      ]
    },
    {
      id: 'demencija-delirijum',
      title: 'Demencija i delirijum kod starijih',
      summary: 'Akutna konfuzija je delirijum i hitno stanje sa somatskim uzrokom; demencija se razvija mesecima.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Delirijum je akutni poremećaj pažnje i svesti koji nastaje za sate do dane i fluktuira tokom dana; gotovo uvek ima somatski uzrok i povećava smrtnost. Demencija je postepeno, višemesečno ili višegodišnje opadanje pamćenja i drugih kognitivnih funkcija koje remeti svakodnevno funkcionisanje, uz očuvanu svest. Pacijent sa demencijom ima visok rizik od delirijuma, pa svako naglo pogoršanje traži uzrok.' },
        { type: 'list', title: 'Razlikovanje', items: [
          '**Početak**: delirijum sati do dani; demencija meseci do godine.',
          '**Pažnja**: u delirijumu izrazito poremećena (ne može da nabroji mesece unazad); u ranoj demenciji očuvana.',
          '**Svest**: u delirijumu izmenjena – pospan ili uznemiren; u demenciji bistra.',
          '**Tok**: delirijum fluktuira, gore je noću; demencija je stabilna iz dana u dan i sporo napreduje.',
          '**Halucinacije**: u delirijumu česte, vidne; u demenciji retke (osim kod demencije sa Levijevim telima).',
          '**Depresija** kod starijih može da liči na demenciju: pacijent se žali na pamćenje, odgovara sa ne znam, početak je relativno brz.',
          'Hipoaktivni delirijum (tih, usporen, pospan pacijent) se najčešće previdi.'
        ] },
        { type: 'list', title: 'Testovi u ambulanti', items: [
          '**Mini-Cog**: ponavljanje 3 reči, crtanje sata, prisećanje reči. Bod za svaku reč i 2 boda za ispravan sat; skor 0–2 je pozitivan skrining.',
          '**MMSE** (0–30): niži skor znači teže oštećenje; rezultat zavisi od obrazovanja, vida, sluha i jezika, pa se ne tumači izolovano.',
          '**4AT** za delirijum: budnost, orijentacija, pažnja (meseci unazad), akutna promena ili fluktuacija; skor 4 i više govori za delirijum.',
          'Heteroanamneza od člana porodice je presudna: kada je počelo, kako napreduje, šta više ne može sam.',
          'Proceni svakodnevno funkcionisanje: lekovi, novac, kuvanje, snalaženje van kuće.'
        ] },
        { type: 'steps', title: 'Postupak kod akutne konfuzije', items: [
          'Vitalni parametri, SpO2, temperatura, glikemija odmah.',
          'Traži uzrok: infekcija (urinarna, pneumonija), dehidracija, bol, retencija urina, opstipacija, hipoksija, moždani udar, pad sa povredom glave.',
          'Pregledaj sve lekove: nedavno uvedeni ili ukinuti, posebno benzodiazepini, opioidi, antiholinergici, kortikosteroidi; pitaj za alkohol.',
          'Laboratorija: krvna slika, CRP, elektroliti, kalcijum, urea, kreatinin, glikemija, urin; EKG.',
          'Nefarmakološke mere: mirno i osvetljeno okruženje, naočare i slušni aparat, poznata osoba uz pacijenta, hidracija, bez fiksacije.',
          'Lek samo ako pacijent ugrožava sebe ili druge i smirivanje razgovorom nije uspelo, u najmanjoj dozi i najkraće moguće.',
          'Delirijum bez jasnog i lako rešivog uzroka upućuje se u bolnicu.'
        ] },
        { type: 'drugs', title: 'Lekovi', items: [
          { name: 'haloperidol', dose: 'najmanja klinički odgovarajuća doza p.o. ili i.m., uz opreznu titraciju prema simptomima', note: 'Samo kada deeskalacija nije uspela, kratkotrajno (obično do nedelju dana). Izbegavati kod Parkinsonove bolesti i demencije sa Levijevim telima' },
          { name: 'donepezil', dose: '5 mg p.o. 1× dnevno, posle mesec dana po potrebi 10 mg 1× dnevno', note: 'Za blagu do umerenu Alchajmerovu demenciju; uvodi neurolog ili psihijatar. Bradikardija, sinkopa, mučnina' },
          { name: 'memantin', dose: 'mala početna doza p.o. 1× dnevno, postepeno nedeljno povećavanje prema sažetku karakteristika leka', note: 'Za umerenu i tešku Alchajmerovu demenciju; uvodi specijalista' }
        ] },
        { type: 'list', title: 'Reverzibilni uzroci kognitivnog pada', items: [
          'Depresija.',
          'Hipotireoza, nedostatak vitamina B12 i folata, hiperkalcemija, hiponatremija.',
          'Lekovi: benzodiazepini, antiholinergici, opioidi; hronična zloupotreba alkohola.',
          'Hronični subduralni hematom (pad pre nekoliko nedelja, antikoagulantna terapija).',
          'Normotenzivni hidrocefalus: trijas poremećaj hoda, inkontinencija urina, kognitivni pad.',
          'Tumor mozga, neurosifilis, HIV.',
          'Minimum obrade pre dijagnoze demencije: krvna slika, glikemija, elektroliti, kalcijum, kreatinin, jetreni enzimi, TSH, B12 i snimanje mozga.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Naglo pogoršanje kod poznate demencije nije napredovanje bolesti nego delirijum dok se ne dokaže suprotno.',
          'Benzodiazepini pogoršavaju delirijum; izuzetak je delirijum zbog apstinencije od alkohola ili benzodiazepina.',
          'Antipsihotici kod demencije povećavaju rizik od moždanog udara i smrtnosti – samo kratkotrajno i uz jasnu indikaciju.',
          'Pozitivan nalaz urina bez simptoma kod starije osobe ne objašnjava konfuziju – traži dalje.',
          'Kod dijagnoze demencije razgovaraj o vožnji, bezbednosti u kući, starateljstvu i opterećenju negovatelja.'
        ] }
      ],
      sources: [{ name: 'NICE CG103 – Delirium', url: 'https://www.nice.org.uk/guidance/cg103/chapter/Recommendations' }, { name: 'NICE NG97 – Dementia', url: 'https://www.nice.org.uk/guidance/ng97/chapter/Recommendations' }, { name: 'Mini-Cog – Scoring', url: 'https://mini-cog.com/scoring-the-mini-cog/' }],
      questions: [
        {
          q: 'Muškarac, 82 god., sa blagom demencijom, od juče je pospan, dezorijentisan, ne prepoznaje ćerku i noću vidi životinje u sobi. Pre 5 dana mu je zbog bola uveden tramadol. Kako tumačiš stanje?',
          options: ['Očekivano napredovanje Alchajmerove demencije', 'Kasna depresivna epizoda sa psihotičnim simptomima', 'Delirijum – tražiti uzrok, pre svega novi lek, infekciju i retenciju urina', 'Demencija sa Levijevim telima, uvesti haloperidol'],
          answer: 2,
          explain: 'Akutan početak, fluktuacija, poremećena svest i vidne halucinacije kod pacijenta sa demencijom znače delirijum. Nedavno uveden opioid je čest okidač; treba tražiti i druge uzroke i ukloniti ih.'
        },
        {
          q: 'Žena, 74 god., dolazi sa ćerkom zbog zaboravnosti koja napreduje 4 meseca. Usporena je, hoda sitnim koracima širokog oslonca kao da su joj stopala zalepljena za pod, i počela je da ne zadržava mokraću. Na šta posumnjati?',
          options: ['Normotenzivni hidrocefalus – uputiti na snimanje mozga i neurologu', 'Alchajmerova demencija – uvesti donepezil 5 mg uveče', 'Urinarna infekcija – propisati antibiotik i kontrolu za 7 dana', 'Fiziološko starenje – savetovati vežbe pamćenja'],
          answer: 0,
          explain: 'Trijas poremećaj hoda, inkontinencija i kognitivni pad ukazuje na normotenzivni hidrocefalus, potencijalno reverzibilan uzrok. Potrebno je snimanje mozga i neurološka procena pre nego što se postavi dijagnoza degenerativne demencije.'
        },
        {
          q: 'Žena, 85 god., u domu za stare je akutno konfuzna i uznemirena, čupa braunilu, ali ne napada osoblje. Sestra traži nešto za smirenje. Šta je prvi izbor?',
          options: ['Diazepam 10 mg i.m. i fiksacija ruku za krevet', 'Tražiti uzrok i primeniti nefarmakološke mere; lek samo ako ugrožava sebe ili druge', 'Haloperidol 5 mg i.m. odmah, zatim 5 mg na 8 h', 'Zolpidem 10 mg uveče da se uspostavi ritam spavanja'],
          answer: 1,
          explain: 'Osnov lečenja delirijuma je uklanjanje uzroka i nefarmakološke mere. Benzodiazepini i fiksacija pogoršavaju delirijum, a haloperidol se daje samo kada deeskalacija ne uspe, u najmanjoj dozi i kratkotrajno.'
        }
      ]
    },
    {
      id: 'alkohol',
      title: 'Alkohol i zavisnosti',
      summary: 'Kratak skrining i kratka intervencija smanjuju rizično pijenje; teška apstinencija je hitno stanje.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Rizično pijenje je često i retko se spontano prijavljuje, pa treba pitati rutinski i bez osuđivanja. Kratka intervencija izabranog lekara dokazano smanjuje unos kod osoba koje piju rizično, a nisu zavisne. Kod zavisnih je nagli prestanak opasan: apstinencijalni sindrom može da dovede do konvulzija i delirijum tremensa.' },
        { type: 'list', title: 'Skrining', items: [
          '**AUDIT-C** (3 pitanja, 0–12): koliko često pije, koliko pića u tipičnom danu, koliko često 6 i više pića odjednom.',
          'Viši skor znači veći rizik (prag zavisi od korišćene preporuke i niži je za žene); pozitivan skrining dopuni punim AUDIT upitnikom (10 pitanja).',
          'Pun AUDIT: skor preko 15 traži sveobuhvatnu procenu, a 20 i više ukazuje na verovatnu zavisnost i potrebu za medicinski vođenom detoksikacijom.',
          'Laboratorijski tragovi: povišen GGT, AST veći od ALT, makrocitoza (MCV iznad 100 fl). Uredni nalazi ne isključuju problem.',
          'Pitaj za pijenje kod: hipertenzije koja se teško reguliše, nesanice, depresije, padova, gastritisa, aritmija.'
        ] },
        { type: 'steps', title: 'Kratka intervencija (5–10 minuta)', items: [
          'Daj povratnu informaciju: poveži pijenje sa konkretnim nalazom ili tegobom pacijenta (pritisak, jetreni enzimi, san).',
          'Naglasi da je odluka njegova, bez moralisanja.',
          'Daj jasan savet: smanjiti unos ili prestati; kod trudnoće, bolesti jetre i zavisnosti savet je potpuna apstinencija.',
          'Ponudi izbor ciljeva i načina: dani bez alkohola, manja pića, dnevnik pijenja.',
          'Dogovori konkretan cilj i ranu kontrolu.',
          'Kod znakova zavisnosti (žudnja, gubitak kontrole, jutarnje pijenje, apstinencijalni simptomi) ne savetuj nagli prestanak bez nadzora – uputi na lečenje.'
        ] },
        { type: 'list', title: 'Apstinencijalni sindrom', items: [
          '**Prvog dana** od poslednjeg pića: tremor, znojenje, tahikardija, hipertenzija, mučnina, nesanica, anksioznost.',
          '**U prva dva dana**: generalizovani konvulzivni napadi; mogu se javiti i alkoholne halucinacije uz očuvanu orijentaciju.',
          '**Tipično posle 2–4 dana**: delirijum tremens – konfuzija, halucinacije, grub tremor, febrilnost, izražena autonomna hiperaktivnost; smrtnost bez lečenja je značajna.',
          'Težina se prati skalom CIWA-Ar (10 stavki) kao dopunom kliničke procene; terapija se daje prema simptomima.',
          '**Vernikeova encefalopatija**: konfuzija, ataksija, oftalmoplegija ili nistagmus – dovoljan je jedan znak kod alkoholičara za sumnju.'
        ] },
        { type: 'drugs', title: 'Terapija apstinencije', items: [
          { name: 'diazepam', dose: '5–20 mg p.o., po potrebi ponoviti za 2–4 h, prema simptomima; zatim postepeno smanjivanje', note: 'Stariji i iscrpljeni: polovina doze. Ambulantno samo kod blage apstinencije uz nadzor; ne izdavati veće količine' },
          { name: 'diazepam (delirijum tremens)', dose: '10–20 mg i.v. ili i.m.; veće doze prema težini simptoma', note: 'NICE kao prvu liniju navodi lorazepam p.o.; kod apstinencijalnih napada benzodiazepin brzog dejstva. Hitan transport' },
          { name: 'lorazepam', dose: 'p.o. prema simptomima, doza prema sažetku karakteristika leka', note: 'Prva linija kod delirijum tremensa prema NICE; prednost kod oštećenja jetre' },
          { name: 'tiamin (vitamin B1)', dose: 'parenteralno, u dozama ka gornjem kraju preporučenog raspona, PRE davanja glukoze; zatim 100 mg p.o. 2–3× dnevno', note: 'Sumnja na Vernikeovu encefalopatiju: parenteralno najmanje 5 dana, u bolnici' }
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno u bolnicu: delirijum tremens, konvulzije, sumnja na Vernikeovu encefalopatiju, teška apstinencija.',
          'Bolnička detoksikacija: raniji apstinencijalni napadi ili delirijum, teška zavisnost, značajne somatske ili psihijatrijske bolesti, trudnoća, bez podrške kod kuće.',
          'Psihijatru ili centru za bolesti zavisnosti: svaka zavisnost od alkohola, opioida ili sedativa radi lečenja i održavanja apstinencije.',
          'Gastroenterologu: znaci ciroze, žutica, ascites, trombocitopenija.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Glukoza pre tiamina kod pothranjenog alkoholičara može da izazove ili pogorša Vernikeovu encefalopatiju.',
          'Apstinencija se često javi neplanirano: 2–3 dana posle prijema u bolnicu ili u toku akutne bolesti.',
          'Hipoglikemija, hipokalemija i hipomagnezemija su česte kod alkoholičara – proveri ih.',
          'Lekove za održavanje apstinencije (naltrekson, akamprosat, disulfiram) uvodi psihijatar.',
          'Alkohol sa benzodiazepinima ili opioidima: zbirna depresija disanja.'
        ] }
      ],
      sources: [{ name: 'NICE CG100 – Alcohol-use disorders: physical complications', url: 'https://www.nice.org.uk/guidance/cg100/chapter/Recommendations' }, { name: 'NICE CG115 – Alcohol-use disorders: harmful drinking and dependence', url: 'https://www.nice.org.uk/guidance/cg115/chapter/Recommendations' }, { name: 'ALIMS – diazepam tablete, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-02023-18-001.pdf' }],
      questions: [
        {
          q: 'Ekipa HMP nalazi muškarca, 48 god., poznatog alkoholičara, konfuznog, sa nesigurnim hodom i nistagmusom. Glikemija 2,9 mmol/l. Šta dati prvo?',
          options: ['Glukozu 10% i.v., a tiamin po dolasku u bolnicu', 'Diazepam 10 mg i.v. zbog apstinencije', 'Haloperidol 5 mg i.m. zbog konfuzije', 'Tiamin parenteralno, zatim odmah glukozu i.v.'],
          answer: 3,
          explain: 'Konfuzija, ataksija i nistagmus kod alkoholičara su Vernikeova encefalopatija dok se ne dokaže suprotno. Tiamin se daje pre ili istovremeno sa glukozom, jer opterećenje glukozom troši preostali tiamin; korekcija hipoglikemije se pritom ne odlaže.'
        },
        {
          q: 'Muškarac, 51 god., primljen je pre 3 dana zbog preloma potkolenice. Danas je dezorijentisan, znoji se, ima grub tremor, vidi bube po zidu, puls 124/min, TA 170/100, T 38,2 °C. Supruga kaže da pije litar rakije dnevno. Dijagnoza i lek izbora?',
          options: ['Masna embolija; kiseonik i kortikosteroid', 'Sepsa; antibiotik širokog spektra i haloperidol', 'Delirijum tremens; benzodiazepin u titriranim dozama i tiamin', 'Akutna psihoza; haloperidol 5 mg i.m. bez benzodiazepina'],
          answer: 2,
          explain: 'Konfuzija, halucinacije, tremor i autonomna hiperaktivnost nekoliko dana posle prestanka pijenja su delirijum tremens. Lek izbora su benzodiazepini uz tiamin; antipsihotik sam snižava konvulzivni prag i ne leči uzrok.'
        },
        {
          q: 'Žena, 45 god., ima TA 150/95 i GGT 110. AUDIT-C skor je 6; pije 3–4 čaše vina svake večeri, bez jutarnjeg pijenja, bez apstinencijalnih simptoma, radi normalno. Šta je najprimereniji postupak?',
          options: ['Uputiti na bolničku detoksikaciju', 'Sprovesti kratku intervenciju: povezati nalaze sa pijenjem, dogovoriti cilj i kontrolu', 'Propisati diazepam 5 mg 3× dnevno i savetovati nagli prestanak', 'Samo uvesti antihipertenziv i kontrolisati GGT za 6 meseci'],
          answer: 1,
          explain: 'Ovo je rizično pijenje bez znakova zavisnosti – upravo grupa kod koje kratka intervencija izabranog lekara ima dokazan efekat. Detoksikacija i benzodiazepini su za zavisne sa apstinencijalnim sindromom.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'neuro-psih-slucaj-1',
      title: 'Žena, 36 god., jaka glavobolja i povraćanje',
      intro: 'Ambulanta doma zdravlja, ponedeljak ujutru. Žena, 36 god., dolazi u pratnji supruga zbog jake glavobolje i povraćanja. Ima migrenu od 20. godine, 1–2 napada mesečno. TA 150/90, puls 88/min, T 37,1 °C, SpO2 98%.',
      steps: [
        {
          q: 'Pacijentkinja kaže da je ovo drugačije od njene migrene. Šta je najvažnije da saznaš u anamnezi?',
          options: ['Da li je u poslednje vreme bila pod stresom na poslu', 'Koji triptan joj je ranije najbolje pomagao', 'Kako je bol počeo i za koliko je dostigao maksimum', 'Da li u porodici neko ima migrenu'],
          answer: 2,
          explain: 'Promena ustaljenog obrasca glavobolje je crvena zastavica. Brzina nastanka je ključni podatak: bol koji dostiže maksimum u roku od nekoliko minuta upućuje na subarahnoidalnu hemoragiju, bez obzira na raniju migrenu.'
        },
        {
          q: 'Bol je počeo sinoć naglo, tokom polnog odnosa, kao udarac u potiljak, i odmah bio najjači u životu. Pri pregledu: svesna, orijentisana, bez fokalnog ispada, vrat blago ukočen. Šta je sledeći korak?',
          options: ['Hitan transport sanitetom u bolnicu sa CT-om, uz najavu', 'Sumatriptan 6 mg s.c. i procena posle 1 h', 'Metoklopramid i ketoprofen i.m., pa kontrola sutra', 'Uput neurologu sa oznakom hitno za sutrašnji dan'],
          answer: 0,
          explain: 'Glavobolja tipa udar groma sa ukočenim vratom je subarahnoidalna hemoragija do dokaza suprotnog. Potreban je hitan CT; triptan je vazokonstriktor i kontraindikovan, a NSAIL treba izbegavati zbog krvarenja.'
        },
        {
          q: 'Dok čekaš sanitet, pacijentkinja je uznemirena, bol 9/10, TA 165/95. Šta je primereno uraditi?',
          options: ['Dati acetilsalicilnu kiselinu 500 mg p.o. kao analgetik', 'Sniziti pritisak nifedipinom pod jezik na ispod 120/80', 'Dati diazepam 10 mg i.m. da se smiri i zaspi', 'Polusedeći položaj, i.v. put, paracetamol i.v., antiemetik, praćenje svesti i zenica'],
          answer: 3,
          explain: 'Do bolnice su važni mirovanje, analgezija bez uticaja na hemostazu, antiemetik i praćenje neurološkog statusa. ASK povećava rizik od ponovnog krvarenja, nagli pad pritiska ugrožava perfuziju mozga, a sedacija prikriva pogoršanje svesti.'
        },
        {
          q: 'Suprug pita da li je moglo da se sačeka i vidi hoće li proći, pošto je ujutru bol bio nešto slabiji. Šta je tačno?',
          options: ['Da, popuštanje bola posle analgetika praktično isključuje krvarenje', 'Ne, popuštanje bola ne isključuje krvarenje, a ponovno krvarenje u prvim danima je često i opasno', 'Da, uz uredan neurološki nalaz moglo je da se sačeka nekoliko dana', 'Ne, ali samo zato što je pritisak bio povišen'],
          answer: 1,
          explain: 'Manje upozoravajuće krvarenje može prolazno da popusti, a rizik od ponovnog, težeg krvarenja je najveći u prvim danima. Uredan neurološki nalaz i odgovor na analgetik ne isključuju subarahnoidalnu hemoragiju.'
        }
      ]
    },
    {
      id: 'neuro-psih-slucaj-2',
      title: 'Muškarac, 69 god., prolazno oduzimanje ruke',
      intro: 'Ambulanta doma zdravlja. Muškarac, 69 god., hipertoničar i pušač, dolazi jer mu je jutros oko 8 h leva ruka bila slaba i ispala mu je šolja, a supruga je primetila iskrivljena usta. Trajalo je oko 15 minuta. Sada je 10:30 h i oseća se dobro. TA 170/95, puls nepravilan oko 90/min.',
      steps: [
        {
          q: 'Neurološki nalaz je sada potpuno uredan. Šta još treba uraditi odmah u ambulanti?',
          options: ['Samo izmeriti pritisak još jednom posle 15 min mirovanja', 'Izmeriti glikemiju i uraditi EKG', 'Uraditi Dix-Hallpike test', 'Uraditi MMSE zbog procene kognicije'],
          answer: 1,
          explain: 'Hipoglikemija može da imitira TIA, a nepravilan puls zahteva EKG zbog moguće atrijalne fibrilacije, što menja izbor antitrombotske terapije.'
        },
        {
          q: 'Glikemija je 6,4 mmol/l. EKG: atrijalna fibrilacija, komorska frekvencija oko 95/min, do sada nepoznata. Pacijent ne uzima antikoagulanse. Šta je sledeći korak?',
          options: ['Odmah uvesti varfarin i zakazati INR za 5 dana', 'Dati bisoprolol i zakazati kardiologa u redovnom terminu', 'Zakazati dopler karotida i neurologa za 2–3 nedelje', 'Dati acetilsalicilnu kiselinu 300 mg p.o. i istog dana uputiti neurologu radi snimanja mozga'],
          answer: 3,
          explain: 'TIA zahteva procenu specijaliste unutar 24 h i snimanje mozga pre uvođenja antikoagulantne terapije. Do tada se daje ASK 300 mg; antikoagulans se ne uvodi u ambulanti pre isključenja krvarenja.'
        },
        {
          q: 'Dok pišeš uput, pacijent ponovo ne može da podigne levu ruku i govor mu postaje nerazgovetan. Šta sada?',
          options: ['Pozvati sanitet za hitan transport sa najavom u jedinicu za moždani udar i zabeležiti tačno vreme', 'Sačekati 15 min jer će se simptomi verovatno ponovo povući', 'Dati još 300 mg acetilsalicilne kiseline i klopidogrel 300 mg', 'Dati kaptopril 25 mg jer je pritisak 170/95'],
          answer: 0,
          explain: 'Novi ispad znači moždani udar do dokaza suprotnog i pacijent je kandidat za reperfuzionu terapiju. Tačno vreme početka je presudno; dodatni lekovi i snižavanje pritiska samo odlažu transport.'
        },
        {
          q: 'Dve nedelje kasnije pacijent dolazi sa otpusnom listom: mali ishemijski moždani udar, potpun oporavak, atrijalna fibrilacija. Šta od sledećeg treba da bude deo trajne terapije?',
          options: ['Acetilsalicilna kiselina 100 mg doživotno umesto antikoagulansa', 'Dvojna antiagregaciona terapija doživotno', 'Oralni antikoagulans, statin visokog intenziteta i dobra regulacija krvnog pritiska', 'Samo antihipertenziv, jer je uzrok bio povišen pritisak'],
          answer: 2,
          explain: 'Kod atrijalne fibrilacije sekundarna prevencija je oralna antikoagulantna terapija, a ne antiagregaciona. Uz to idu statin, regulacija pritiska i prestanak pušenja.'
        }
      ]
    },
    {
      id: 'neuro-psih-slucaj-3',
      title: 'Žena, 81 god., od juče ne zna gde se nalazi',
      intro: 'Kućna poseta. Žena, 81 god., živi sa sinom. Do pre 2 dana samostalna, uredno je uzimala lekove i kuvala. Od juče je zbunjena, ne zna koji je dan, čas pospana čas uznemirena, noću je pokušala da izađe iz kuće. Boluje od hipertenzije i dijabetesa tipa 2. TA 125/70, puls 98/min, T 37,6 °C, SpO2 95%.',
      steps: [
        {
          q: 'Sin pita da li je to počela demencija. Šta odgovaraš i šta radiš prvo?',
          options: ['Nagli početak i fluktuacija govore za delirijum; izmeriti glikemiju i tražiti somatski uzrok', 'Verovatno jeste Alchajmerova bolest; uraditi MMSE i uputiti neurologu', 'To je staračka depresija; uvesti sertralin 50 mg', 'Radi se o psihozi; dati haloperidol 5 mg i.m.'],
          answer: 0,
          explain: 'Promena nastala za dan-dva, uz fluktuaciju budnosti, je delirijum. MMSE u delirijumu nije merodavan, a prvi korak je isključiti hipoglikemiju i potražiti uzrok.'
        },
        {
          q: 'Glikemija je 8,9 mmol/l. Sin kaže da joj je pre 4 dana lekar u privatnoj ordinaciji zbog nesanice i nevoljnog bežanja mokraće uveo bromazepam 3 mg uveče i oksibutinin. Pri pregledu: donji trbuh bolan, palpira se rezistencija iznad simfize. Šta je najverovatnije u osnovi?',
          options: ['Akutni abdomen koji zahteva hitnu operaciju', 'Moždani udar u slivu zadnje moždane arterije', 'Retencija urina i neželjeno dejstvo antiholinergika i benzodiazepina', 'Hiperglikemijsko hiperosmolarno stanje'],
          answer: 2,
          explain: 'Antiholinergik i benzodiazepin su među najčešćim lekovima koji izazivaju delirijum kod starijih, a oksibutinin može da dovede i do retencije urina, koja sama po sebi izaziva delirijum. Pun mehur se palpira iznad simfize.'
        },
        {
          q: 'Šta je sledeći korak u zbrinjavanju?',
          options: ['Nastaviti oba leka i dodati haloperidol 0,5 mg uveče', 'Ukinuti oksibutinin i bromazepam, obezbediti kateterizaciju mehura i pregled urina, uputiti u bolnicu', 'Naglo ukinuti sve lekove, uključujući antihipertenzive i metformin', 'Povećati bromazepam na 6 mg jer je noću uznemirena'],
          answer: 1,
          explain: 'Lečenje delirijuma je uklanjanje uzroka: obustava lekova okidača i rasterećenje mehura, uz traženje infekcije. Posle samo 4 dana uzimanja bromazepam se može bezbedno ukinuti. Dodavanje sedativa pogoršava stanje.'
        },
        {
          q: 'Posle kateterizacije dobijeno je 900 ml urina, test trakom leukociti i nitriti pozitivni. Nakon 5 dana lečenja pacijentkinja je ponovo orijentisana. Sin pita šta dalje. Šta je ispravno?',
          options: ['Vratiti bromazepam u manjoj dozi da ne bi ponovo bila uznemirena', 'Odmah uvesti donepezil jer je delirijum dokaz demencije', 'Nije potrebno nikakvo praćenje jer se potpuno oporavila', 'Proceniti kogniciju za nekoliko nedelja i izbegavati antiholinergike i benzodiazepine'],
          answer: 3,
          explain: 'Delirijum često otkriva dotad neprepoznato kognitivno oštećenje, ali se kognicija procenjuje tek posle oporavka, za nekoliko nedelja. Lekove koji su ga izazvali treba trajno izbegavati i to upisati u karton.'
        }
      ]
    }
  ]
});
