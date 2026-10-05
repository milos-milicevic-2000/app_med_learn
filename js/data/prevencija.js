MED.register({
  id: 'prevencija',
  title: 'Prevencija i rad izabranog lekara',
  icon: '🛡️',
  color: '#30A46C',
  topics: [
    {
      id: 'skrining',
      title: 'Preventivni pregledi i organizovani skrininzi u Srbiji',
      summary: 'Tri organizovana skrininga na karcinom i oportunistički skrining KV rizika i dijabetesa – ko, čime i koliko često.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'U Srbiji se sprovode tri organizovana skrininga: na karcinom debelog creva, dojke i grlića materice. Izabrani lekar poziva i motiviše ciljnu populaciju, deli testove i prati da li je pozitivan nalaz zaista doveo do dalje dijagnostike. Skrining je namenjen osobama BEZ simptoma; pacijent sa simptomima ide na dijagnostiku, ne na skrining.' },
        { type: 'list', title: 'Organizovani skrininzi', items: [
          '**Karcinom debelog creva**: žene i muškarci 50–74 godine; imunohemijski test na okultno krvarenje u stolici (FIT) na 2 godine.',
          'Pozitivan FIT ne znači karcinom, ali obavezno znači upućivanje na kolonoskopiju.',
          '**Karcinom dojke**: žene 50–69 godina; mamografija na 2 godine.',
          '**Karcinom grlića materice**: žene 25–64 godine; ginekološki pregled sa Papanikolau testom na 3 godine.',
          'Proveru i upućivanje radi izabrani lekar i izabrani ginekolog; iskoristi svaku posetu iz drugog razloga da proveriš status skrininga.'
        ] },
        { type: 'list', title: 'Kardiovaskularni rizik i dijabetes', items: [
          'Procenu ukupnog KV rizika (SCORE tablice za zemlje odgovarajućeg rizika) i skrining dijabetesa tipa 2 upitnikom rizika sprovodi izabrani lekar u okviru preventivnih pregleda.',
          'Potrebni podaci: pol, uzrast, pušenje, sistolni pritisak, lipidni status; uz to BMI, obim struka i porodična anamneza.',
          'Tablice rizika se NE primenjuju kod osoba koje već imaju KV bolest, dijabetes sa oštećenjem organa ili hroničnu bubrežnu bolest – oni su već u visokom riziku.',
          'Hipertenzija: ambulantni pritisak 140/90 mmHg i više traži potvrdu (kućno ili ambulatorno merenje) pre postavljanja dijagnoze.',
          '**Dijabetes**: glikemija natašte 7,0 mmol/l i više, HbA1c 6,5% i više, ili OGTT posle 2 h 11,1 mmol/l i više.',
          '**Predijabetes**: glikemija natašte 5,6–6,9 mmol/l, HbA1c 5,7–6,4% ili OGTT posle 2 h 7,8–11,0 mmol/l.'
        ] },
        { type: 'steps', title: 'Postupak u ambulanti', items: [
          'Pri svakoj poseti osobe u ciljnom uzrastu proveri u kartonu kada je poslednji put urađen FIT, mamografija, odnosno Papanikolau test.',
          'Objasni svrhu testa, kako se uzima uzorak stolice i šta znači pozitivan nalaz; podeli test i dogovori vraćanje.',
          'Pozitivan FIT: uput za kolonoskopiju i aktivno praćenje da je urađena. Ponavljanje FIT testa umesto kolonoskopije je greška.',
          'Izmeri pritisak, telesnu masu, visinu i obim struka; zatraži lipidni status i glikemiju; izračunaj ukupan KV rizik.',
          'Uz svaki nalaz daj konkretan savet: pušenje, ishrana, fizička aktivnost, alkohol.',
          'Upiši rezultat i datum sledećeg skrininga u karton.'
        ] },
        { type: 'flags', title: 'Simptomi koji NISU za skrining nego za dijagnostiku', items: [
          'Krv u stolici, promena ritma pražnjenja, neobjašnjiva sideropenijska anemija, gubitak težine.',
          'Palpabilna promena u dojci, uvlačenje kože ili bradavice, sukrvičav iscedak.',
          'Krvarenje posle odnosa, između ciklusa ili u postmenopauzi.',
          'Poliurija, polidipsija i gubitak težine: odmah glikemija, ne upitnik rizika.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Pozitivan FIT: gastroenterolog, kolonoskopija.',
          'Suspektan ili nejasan nalaz mamografije: dopunska dijagnostika u ustanovi koja sprovodi skrining.',
          'Patološki nalaz Papanikolau testa: ginekolog radi kolposkopije.',
          'Osobe sa jakom porodičnom anamnezom karcinoma dojke ili debelog creva: upućivanje radi ranijeg i individualno planiranog praćenja.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Negativan skrining test ne isključuje bolest kod pacijenta sa simptomima.',
          'Za mamografski skrining se mogu javiti i žene mlađe od ciljne grupe ako imaju pozitivnu porodičnu anamnezu – odluku donosi specijalista.',
          'Najveći gubitak u skriningu je pozitivan test bez dalje obrade – tvoj posao je da se to ne desi.',
          'Dijagnozu dijabetesa kod osobe bez simptoma potvrdi ponovljenim merenjem.'
        ] }
      ],
      sources: [
        { name: 'Kancelarija za skrining raka – Skrining Srbija', url: 'https://www.skriningsrbija.rs/' },
        { name: 'Skrining raka debelog creva', url: 'https://www.skriningsrbija.rs/src/skrining-raka-debelog-creva/' },
        { name: 'CDC – Diabetes testing', url: 'https://www.cdc.gov/diabetes/diabetes-testing/index.html' }
      ],
      questions: [
        {
          q: 'Muškarac, 62 god., bez tegoba, vraća FIT test koji je pozitivan. Kaže da ima hemoroide i moli da ponovi test za mesec dana. Šta je ispravno?',
          options: ['Ponoviti FIT za mesec dana, pa uputiti samo ako je opet pozitivan', 'Uputiti na kolonoskopiju bez ponavljanja testa', 'Uputiti proktologu radi lečenja hemoroida i ponoviti FIT za 2 godine', 'Uraditi krvnu sliku i, ako nema anemije, nastaviti redovan skrining'],
          answer: 1,
          explain: 'Svaki pozitivan FIT u skriningu zahteva kolonoskopiju. Hemoroidi ne isključuju polip ili karcinom, a ponavljanje testa ili uredan hemoglobin samo odlažu dijagnozu.'
        },
        {
          q: 'Žena, 54 god., dolazi po recept za antihipertenziv. Poslednja mamografija joj je bila pre 4 godine, a Papanikolau test pre 5 godina. Bez tegoba. Šta je najprimerenije?',
          options: ['Ništa, skrining je isključivo posao ginekologa i radiologa', 'Uputiti samo na ultrazvuk dojki jer je bezbedniji od mamografije', 'Savetovati da se javi kada primeti promenu u dojci', 'Uputiti na mamografiju i kod izabranog ginekologa radi Papanikolau testa'],
          answer: 3,
          explain: 'Žena je u ciljnoj grupi za oba skrininga (dojka 50–69 na 2 godine, grlić 25–64 na 3 godine) i kasni sa oba. Izabrani lekar koristi svaku posetu da proveri i pokrene skrining.'
        },
        {
          q: 'Muškarac, 47 god., gojazan, bez simptoma. Glikemija natašte je 7,4 mmol/l. Šta je sledeći korak?',
          options: ['Ponoviti glikemiju natašte ili uraditi HbA1c radi potvrde dijagnoze', 'Odmah uvesti insulin jer je glikemija iznad 7 mmol/l', 'Reći da je nalaz graničan i kontrolisati za 3 godine', 'Postaviti dijagnozu predijabetesa i savetovati samo dijetu'],
          answer: 0,
          explain: 'Glikemija natašte 7,0 mmol/l i više je u opsegu dijabetesa, ali se kod osobe bez simptoma dijagnoza potvrđuje ponovljenim testom. Predijabetes je 5,6–6,9 mmol/l.'
        }
      ]
    },
    {
      id: 'vakcinacija',
      title: 'Vakcinacija odraslih',
      summary: 'Tetanus na 10 godina i kod povrede, grip svake jeseni rizičnima, pneumokok starijima i hroničnim bolesnicima, HPV mladima.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Imunizacija odraslih u Srbiji se deli na obaveznu (po kliničkim i epidemiološkim indikacijama, npr. grip i pneumokok kod hroničnih bolesnika, tetanus kod povrede) i preporučenu. Izabrani lekar pri svakom kontaktu proverava vakcinalni status, naročito kod starijih od 65 godina, hroničnih bolesnika, trudnica i povređenih.' },
        { type: 'list', title: 'Tetanus, difterija, veliki kašalj', items: [
          'Odraslima starijim od 30 godina se preporučuje jedna doza Tdap vakcine, zatim revakcinacija dT ili TT vakcinom na svakih 10 godina.',
          'Trudnicama se preporučuje jedna doza Tdap vakcine između 28. i 38. nedelje gestacije, u svakoj trudnoći.',
          'Potpuno vakcinisanim se smatra lice sa najmanje četiri doze vakcine sa tetanusnom komponentom.',
          'Nevakcinisani: prva doza odmah, druga posle najmanje mesec dana, treća najmanje 6 meseci posle druge, četvrta najmanje godinu dana posle treće.'
        ] },
        { type: 'steps', title: 'Tetanus kod povređenog', items: [
          'Obradi ranu i utvrdi vakcinalni status iz dokumentacije, ne po sećanju pacijenta.',
          'Potpuno vakcinisan, poslednja doza pre manje od 10 godina: ni vakcina ni imunoglobulin.',
          'Potpuno vakcinisan, poslednja doza pre više od 10 godina: jedna doza vakcine i 250 i.j. humanog antitetanusnog imunoglobulina (HTIg) odmah.',
          'Nevakcinisan ili bez dokaza o vakcinaciji: prva doza vakcine i HTIg odmah, zatim nastavak serije.',
          'Nepotpuno vakcinisan odrasli: nedostajuće doze TT vakcine i HTIg 250 i.j. prema tabeli stručno-metodološkog uputstva.',
          'HTIg se može povećati na 500 i.j. kod inficiranih rana koje se ne mogu hirurški obraditi u 24 h, dubokih ili kontaminiranih rana i ujeda, uboda i ustrelina.',
          'Vakcina i HTIg se daju istovremeno, i.m., u suprotne ekstremitete.'
        ] },
        { type: 'list', title: 'Grip i pneumokok', items: [
          '**Grip** – lica u posebnom riziku: trudnice, stariji od 65 godina, hronične bolesti pluća (i astma), kardiovaskularne bolesti (osim hipertenzije), dijabetes, gojaznost sa BMI preko 40.',
          'Takođe: bubrežna disfunkcija, hemoglobinopatije, hronične neurološke bolesti, maligniteti, imunosupresija, transplantirani, kao i ukućani osoba u riziku koje ne mogu da prime vakcinu.',
          'Odrasli primaju jednu dozu inaktivisane vakcine pred početak sezone, svake godine.',
          '**Pneumokok** – lica u posebnom riziku: asplenija, hronične kardiovaskularne i plućne bolesti, dijabetes, hronične bolesti jetre i bubrega, maligniteti, HIV, transplantacija, oslabljen imunitet.',
          'Kod rizičnih se koriste konjugovana i polisaharidna vakcina po šemi iz uputstva; kada se daju obe, polisaharidna (PPV23) ide najmanje 8 nedelja posle konjugovane.',
          'Preporučena imunizacija: osobama starijim od 65 godina jedna doza PPV23.'
        ] },
        { type: 'list', title: 'HPV, hepatitis B i ostalo', items: [
          '**HPV** (devetovalentna vakcina): preporučuje se od navršenih 9 do navršenih 19 godina. Uzrast 9–14: dve doze u razmaku od 6 meseci; 15 i više: tri doze po šemi 0, 2, 6 meseci.',
          '**Hepatitis B** – obavezno za lica u riziku: hemodijaliza, insulin-zavisni dijabetes, hemofilija, hronične bolesti jetre i bubrega, HIV i HCV pozitivni.',
          'Hepatitis B kod odraslih koji nisu vakcinisani: tri doze po šemi 0, 1, 6 meseci; bolesnici na hemodijalizi primaju četiri dvostruke doze (0, 1, 2, 6 meseci).',
          'Kod dijaliznih i imunodeficijentnih proveri anti-HBs posle serije; ispod 10 mIU/ml znači ponovnu vakcinaciju.',
          '**Asplenija**: vakcinacija protiv pneumokoka, meningokoka, hemofilusa influence tip b i gripa.',
          'Vakcina protiv herpes zostera se preporučuje prema uzrastu i sažetku karakteristika leka.'
        ] },
        { type: 'refer', title: 'Kada uputiti ili konsultovati', items: [
          'Epidemiolog nadležnog zavoda za javno zdravlje: nejasan vakcinalni status, šeme za imunokompromitovane, postekspoziciona zaštita (besnilo, hepatitis B, morbili).',
          'Stručni tim za trajne kontraindikacije: sumnja na trajnu kontraindikaciju – izabrani lekar utvrđuje samo privremene.',
          'Teška alergijska reakcija na prethodnu dozu: dalja vakcinacija samo uz konsultaciju i u uslovima gde se može zbrinuti anafilaksa.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Blaga prehlada bez povišene temperature nije razlog za odlaganje vakcinacije.',
          'Kod povrede, kada preti tetanus, kontraindikacije se sužavaju na alergiju na komponente vakcine – tada se daje samo imunoglobulin.',
          'Vakcina protiv gripa se daje svake godine; pacijentu sa HOBP, srčanom slabošću ili dijabetesom to je deo terapije.',
          'Žive vakcine se ne daju trudnicama ni teško imunokompromitovanima.',
          'Svaku datu vakcinu upiši u karton imunizacije: datum, serija, mesto aplikacije.'
        ] }
      ],
      sources: [
        { name: 'Batut – Stručno-metodološko uputstvo za sprovođenje imunizacije 2025', url: 'https://www.batut.org.rs/download/SMU%20za%20sprovo%C4%91enje%20imunizacije%202025.pdf' },
        { name: 'Batut – Kalendar obavezne imunizacije u Republici Srbiji', url: 'https://www.batut.org.rs/download/izdvajamo/Kalendar%20obavezne%20imunizacije%20u%20Republici%20Srbiji.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 45 god., posekao se na zarđali lim u bašti. Rana je duboka i zaprljana zemljom. U kartonu postoji dokaz o potpunoj vakcinaciji, poslednja doza pre 14 godina. Šta je ispravno posle obrade rane?',
          options: ['Nije potrebno ništa, jer je potpuno vakcinisan u detinjstvu', 'Samo humani antitetanusni imunoglobulin 250 i.j.', 'Jedna doza vakcine i humani antitetanusni imunoglobulin 250 i.j.', 'Započeti kompletnu seriju od četiri doze vakcine bez imunoglobulina'],
          answer: 2,
          explain: 'Potpuno vakcinisano lice kod koga je od poslednje doze prošlo više od 10 godina dobija jednu dozu vakcine i 250 i.j. HTIg odmah, u suprotne ekstremitete. Da je prošlo manje od 10 godina, ne bi dobio ništa.'
        },
        {
          q: 'Žena, 58 god., sa dijabetesom tipa 2 i HOBP, dolazi u oktobru na kontrolu. Nikada se nije vakcinisala protiv gripa ni pneumokoka. Šta preporučuješ?',
          options: ['Vakcinu protiv gripa sada i vakcinaciju protiv pneumokoka', 'Vakcinu protiv gripa tek posle 65. godine', 'Samo vakcinu protiv pneumokoka, jer grip nije opasan za dijabetičare', 'Nijednu, jer hronične bolesti povećavaju rizik od neželjenih reakcija'],
          answer: 0,
          explain: 'Dijabetes i hronična plućna bolest su indikacije za vakcinaciju i protiv gripa i protiv pneumokoka, bez obzira na uzrast. Hronična bolest je razlog za vakcinaciju, a ne kontraindikacija.'
        },
        {
          q: 'Majka dovodi ćerku od 16 godina i pita za HPV vakcinu. Devojčica do sada nije primila nijednu dozu. Koja šema važi za nju?',
          options: ['Jedna doza, jer je starija od 15 godina', 'Dve doze u razmaku od 6 meseci', 'Vakcinacija više nema smisla posle 15. godine', 'Tri doze po šemi 0, 2 i 6 meseci'],
          answer: 3,
          explain: 'HPV9 vakcina se preporučuje od navršenih 9 do navršenih 19 godina. Kada se počinje sa 15 i više godina daju se tri doze (0, 2, 6 meseci); dve doze su dovoljne samo ako se počne u uzrastu 9–14.'
        }
      ]
    },
    {
      id: 'prestanak-pusenja',
      title: 'Prestanak pušenja',
      summary: 'Kratak savet lekara pri svakoj poseti i farmakoterapija uz podršku višestruko povećavaju uspeh.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Prestanak pušenja je najisplativija pojedinačna intervencija u primarnoj zaštiti. Savet lekara od nekoliko minuta povećava broj pokušaja, a kombinacija savetovanja i leka daje najbolje rezultate. Zavisnost od nikotina je hronično stanje sa recidivima: većini je potrebno više pokušaja, pa recidiv nije neuspeh nego povod za novi plan.' },
        { type: 'steps', title: 'Model 5A', items: [
          '**Pitaj** (Ask): pri svakoj poseti pitaj za pušenje i upiši status u karton.',
          '**Savetuj** (Advise): jasno, lično i bez osude – poveži sa zdravstvenim problemom tog pacijenta.',
          '**Proceni** (Assess): da li je spreman da pokuša u narednih mesec dana; proceni zavisnost (broj cigareta, koliko brzo posle buđenja pali prvu).',
          '**Pomozi** (Assist): dogovorite datum prestanka, ponudi lek, pripremi ga na apstinencijalne simptome i okidače.',
          '**Dogovori praćenje** (Arrange): rana kontrola ubrzo posle datuma prestanka, zatim periodično tokom terapije.',
          'Ako nije spreman: kratak motivacioni razgovor o ličnim razlozima, rizicima, dobitima i preprekama, pa ponovi pitanje pri sledećoj poseti.'
        ] },
        { type: 'drugs', title: 'Farmakoterapija', items: [
          { name: 'vareniklin', dose: '0,5 mg p.o. 1–2× dnevno prve nedelje, zatim 1 mg p.o. 2× dnevno; ukupno 12 nedelja', note: 'Početi 1–2 nedelje pre datuma prestanka; kurs završiti i ako je pacijent već prestao' },
          { name: 'citizin', dose: '1,5 mg p.o. na svaka 2 h (6 tableta dnevno) prva 3 dana, zatim postepeno ređe po šemi iz sažetka; ukupno 25 dana', note: 'Pušenje potpuno prekinuti najkasnije 5. dana terapije; bez efekta u prva 3 dana – prekinuti i pokušati ponovo za 2–3 meseca' },
          { name: 'nikotinska zamenska terapija', dose: 'flaster, žvakaća guma ili drugi oblik, u dozi prema stepenu zavisnosti i uputstvu proizvođača', note: 'Dugodelujući oblik se može kombinovati sa brzodelujućim za napade žudnje' },
          { name: 'bupropion', dose: 'p.o., doza i trajanje prema sažetku karakteristika leka', note: 'Snižava konvulzivni prag – ne kod epilepsije i poremećaja ishrane' }
        ] },
        { type: 'list', title: 'Šta pacijent treba da zna', items: [
          'Apstinencijalni simptomi (razdražljivost, nemir, nesanica, pojačan apetit, žudnja) su najjači u prvim nedeljama i prolaze.',
          'Lek ne zamenjuje odluku: bolje deluje uz jasan datum prestanka i podršku.',
          'Jedna cigareta posle prestanka najčešće vodi u recidiv – cilj je potpuna apstinencija.',
          'Alkohol, kafa i društvo pušača su najčešći okidači; isplaniraj unapred kako će ih izbeći.',
          'Porast telesne mase je čest, ali je zdravstvena korist od prestanka neuporedivo veća.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Savetovalište za odvikavanje od pušenja: visoka zavisnost, više neuspelih pokušaja, želja za grupnom podrškom.',
          'Psihijatar: teška psihijatrijska bolest kod koje prestanak može da zahteva prilagođavanje terapije.',
          'Trudnice: prednost ima savetovanje; odluku o leku donosi specijalista.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Pitanje o pušenju postavi svakom pacijentu, pri svakoj poseti – traje pola minuta.',
          'Najbolji trenutak za savet je kada pacijent sam vidi vezu: posle infarkta, pogoršanja HOBP, pre operacije, u trudnoći.',
          'Prestanak koristi u svakom uzrastu i posle svake dijagnoze, uključujući HOBP, koronarnu bolest i karcinom.',
          'Pacijentu koji je prestao čestitaj pri svakoj poseti i pitaj za žudnju – recidivi su najčešći u prvim mesecima.'
        ] }
      ],
      sources: [
        { name: 'NHS – Varenicline', url: 'https://www.nhs.uk/medicines/varenicline/how-and-when-to-take-varenicline/' },
        { name: 'ALIMS – citizin (Tabex), sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-02980-17-001.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 49 god., puši 25 cigareta dnevno, prvu odmah po buđenju. Posle razgovora kaže da želi da prestane i pristaje na vareniklin. Kako se lek uvodi?',
          options: ['Prva tableta na sam dan prestanka, odmah u punoj dozi 1 mg 2× dnevno', 'Početi 1–2 nedelje pre datuma prestanka, prve nedelje 0,5 mg, zatim 1 mg 2× dnevno', 'Uzimati 1 mg samo kada se javi jaka žudnja za cigaretom', 'Uzimati 0,5 mg dnevno 4 nedelje i prekinuti čim prestane da puši'],
          answer: 1,
          explain: 'Vareniklin se uvodi 1–2 nedelje pre dogovorenog datuma prestanka, uz postepeno povećanje doze prve nedelje, i uzima se redovno 12 nedelja. Kurs se završava i kada pacijent ranije prestane da puši.'
        },
        {
          q: 'Žena, 38 god., puši 15 cigareta dnevno. Na pitanje da li razmišlja o prestanku odgovara da sada nije trenutak jer je pod stresom. Šta je najprimerenije?',
          options: ['Propisati vareniklin, jer će lek sam stvoriti motivaciju', 'Reći da joj ne možeš pomoći dok sama ne odluči', 'Kratko razgovarati o njenim ličnim razlozima i preprekama i vratiti se na temu pri sledećoj poseti', 'Detaljno joj opisati slike karcinoma pluća da bi se uplašila'],
          answer: 2,
          explain: 'Kod pacijenta koji nije spreman cilj je kratak motivacioni razgovor bez pritiska i ponavljanje pitanja pri narednim posetama. Lek bez odluke o prestanku nema efekta, a zastrašivanje stvara otpor.'
        },
        {
          q: 'Muškarac, 55 god., započeo je citizin pre 6 dana po šemi i smanjio pušenje sa 20 na 5 cigareta dnevno. Šta mu savetuješ?',
          options: ['Da je do sada već trebalo potpuno da prestane sa pušenjem i da to učini odmah', 'Da nastavi da puši 5 cigareta do kraja terapije', 'Da udvostruči dozu citizina dok ne prestane potpuno', 'Da prekine citizin jer smanjenje nije dovoljno'],
          answer: 0,
          explain: 'Uz citizin se potpuni prestanak pušenja očekuje najkasnije petog dana terapije. Nastavak pušenja uz lek smanjuje uspeh, a dozu ne treba povećavati iznad šeme iz sažetka karakteristika leka.'
        }
      ]
    },
    {
      id: 'stariji-pacijent',
      title: 'Stariji pacijent: polifarmacija i padovi',
      summary: 'Svaki pad i svaka nova tegoba kod starijeg traže pregled liste lekova; manje lekova je često bolja terapija.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Kod starijih se neželjena dejstva lekova često prikazuju kao nova bolest: konfuzija, pad, vrtoglavica, inkontinencija, gubitak apetita. Pre nego što propišeš novi lek za novu tegobu, proveri da li je tegoba posledica postojeće terapije. Padovi nisu normalan deo starenja i većinom imaju uzroke na koje se može uticati.' },
        { type: 'steps', title: 'Pregled terapije', items: [
          'Zatraži da pacijent donese SVE što uzima: lekove na recept, bez recepta, biljne preparate, kapi, flastere.',
          'Za svaki lek odgovori: koja je indikacija, da li još postoji, da li je doza primerena uzrastu i bubrežnoj funkciji.',
          'Traži dupliranja (dva NSAIL, dva benzodiazepina pod različitim imenima) i propisivačke kaskade (lek uveden zbog neželjenog dejstva drugog leka).',
          'Izračunaj eGFR pre propisivanja lekova koji se izlučuju bubrezima.',
          'Ukidaj jedan po jedan lek, postepeno gde je potrebno (benzodiazepini, antidepresivi), i dogovori kontrolu.',
          'Novi lek uvodi u najmanjoj dozi i sporo povećavaj.',
          'Napiši pacijentu čitljiv spisak terapije sa vremenima uzimanja.'
        ] },
        { type: 'list', title: 'Lekovi koje treba izbegavati ili preispitati', items: [
          '**Benzodiazepini i Z-lekovi**: padovi, konfuzija, zavisnost. Ako su neophodni, upola manja doza i kratko.',
          '**Lekovi sa antiholinergičkim dejstvom** (sedativni antihistaminici, triciklični antidepresivi, lekovi za hiperaktivnu bešiku): konfuzija, retencija urina, opstipacija.',
          '**Antipsihotici kod demencije**: samo kratkotrajno i kada je pacijent opasan po sebe ili druge.',
          '**NSAIL**: oštećenje bubrega i krvarenje, naročito uz ACE inhibitore, diuretike i antikoagulanse.',
          '**Psihotropni lekovi uopšte** povećavaju rizik od pada – preispitaj ih kod svakog ko je pao.',
          'Antihipertenzivi i diuretici: proveri ortostatski pad pritiska pre nego što pojačaš terapiju.'
        ] },
        { type: 'steps', title: 'Procena rizika od pada', items: [
          'Pitaj pri svakoj prilici: da li ste pali u poslednjih godinu dana? Koliko puta? Da li ste se povredili?',
          'Dopunska pitanja: da li ste nesigurni pri stajanju ili hodu, da li se plašite pada? Potvrdan odgovor na bilo koje znači povišen rizik.',
          'Posmatraj ustajanje sa stolice i hod; proceni ravnotežu.',
          'Izmeri pritisak ležeći, pa posle najmanje 1 minuta stajanja: pad sistolnog za 20 mmHg i više ili dijastolnog za 10 mmHg i više je ortostatska hipotenzija.',
          'Pregledaj lekove, vid, stopala i obuću; pitaj za inkontinenciju, alkohol i uslove u kući (tepisi, osvetljenje, kupatilo).',
          'Dva i više padova u godini, pad sa povredom ili poremećaj hoda i ravnoteže: sveobuhvatna procena i plan (vežbe snage i ravnoteže, korekcija terapije, prilagođavanje doma).'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno: pad sa udarcem u glavu kod pacijenta na antikoagulantnoj terapiji, sumnja na prelom kuka, pad sa gubitkom svesti.',
          'Kardiolog ili neurolog: sinkopa, sumnja na aritmiju, novi neurološki ispad, parkinsonizam.',
          'Fizijatar: program vežbi snage i ravnoteže, pomagala za hod.',
          'Oftalmolog: pad uz oslabljen vid.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Nova konfuzija, pad ili inkontinencija kod starijeg: prvo pogledaj šta je uvedeno u terapiju u poslednjih nekoliko nedelja.',
          'Pad bez jasnog spoljnog uzroka je simptom dok se ne dokaže suprotno.',
          'Kod starijih izmeri pritisak i u stojećem položaju pre nego što povećaš antihipertenzivnu terapiju.',
          'Strah od pada vodi u manje kretanja, slabost i nove padove – zato su vežbe deo terapije.'
        ] }
      ],
      sources: [
        { name: 'NICE NG249 – Falls: assessment and prevention', url: 'https://www.nice.org.uk/guidance/ng249/chapter/Recommendations' },
        { name: 'CDC STEADI – Algorithm for fall risk screening', url: 'https://www.cdc.gov/steadi/media/pdfs/STEADI-Algorithm-508.pdf' },
        { name: 'NICE NG136 – Hypertension in adults', url: 'https://www.nice.org.uk/guidance/ng136/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Žena, 79 god., žali se na vrtoglavicu pri ustajanju. Uzima amlodipin, indapamid, ramipril i od pre mesec dana tamsulozin (pogrešno propisan zbog učestalog mokrenja). TA sedeći 128/70. Šta je sledeći korak?',
          options: ['Uvesti betahistin za vrtoglavicu', 'Uputiti na MR endokranijuma', 'Dodati još jedan antihipertenziv jer je vrtoglavica znak visokog pritiska', 'Izmeriti pritisak ležeći i posle najmanje 1 minuta stajanja i preispitati terapiju'],
          answer: 3,
          explain: 'Vrtoglavica pri ustajanju uz više lekova koji snižavaju pritisak je ortostatska hipotenzija dok se ne dokaže suprotno. Pad sistolnog za 20 ili dijastolnog za 10 mmHg posle stajanja potvrđuje dijagnozu; lečenje je korekcija terapije, ne novi lek.'
        },
        {
          q: 'Muškarac, 83 god., pao je dva puta u poslednja 3 meseca, bez povrede. Uzima 9 lekova, među njima lorazepam uveče i amitriptilin zbog nesanice. Šta je najvažnije uraditi?',
          options: ['Savetovati da se manje kreće po kući dok se ne oporavi', 'Pregledati terapiju i planirati postepeno ukidanje psihotropnih lekova, uz procenu hoda i ortostatskog pritiska', 'Dodati vitaminski preparat i kontrolisati za 6 meseci', 'Zameniti lorazepam zolpidemom u punoj dozi'],
          answer: 1,
          explain: 'Dva pada u godini traže sveobuhvatnu procenu. Benzodiazepin i triciklični antidepresiv su psihotropni lekovi koji povećavaju rizik od pada i treba ih preispitati i postepeno ukidati. Mirovanje vodi u slabost i nove padove, a zolpidem nosi iste rizike.'
        },
        {
          q: 'Žena, 81 god., od pre 3 nedelje uzima lek za hiperaktivnu bešiku. Ćerka kaže da je postala zaboravna i zbunjena, a ima i opstipaciju. Šta je najverovatnije objašnjenje?',
          options: ['Početak Alchajmerove bolesti – uvesti donepezil', 'Depresija – uvesti antidepresiv', 'Antiholinergičko dejstvo novog leka – preispitati i ukinuti lek', 'Normalno starenje – nije potrebna intervencija'],
          answer: 2,
          explain: 'Konfuzija i opstipacija koje se jave ubrzo po uvođenju antiholinergika su neželjeno dejstvo leka dok se ne dokaže suprotno. Dodavanje novog leka za novu tegobu bila bi propisivačka kaskada.'
        }
      ]
    },
    {
      id: 'laboratorija',
      title: 'Tumačenje osnovnih laboratorijskih nalaza',
      summary: 'Nalaz se tumači uz pacijenta: prvo isključi grešku uzorka, zatim prepoznaj vrednosti koje traže hitnu reakciju.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Laboratorijski nalaz ima smisla samo uz kliničku sliku i prethodne vrednosti. Koristi referentne opsege svoje laboratorije, a kod neočekivanog nalaza prvo pomisli na grešku uzorka (hemoliza, stajanje, uzorak iz ruke sa infuzijom). Ovde su obrasci koji se najčešće viđaju i vrednosti koje ne smeju da čekaju.' },
        { type: 'list', title: 'Krvna slika', items: [
          '**Anemija**: uvek pogledaj MCV. Mikrocitna – nedostatak gvožđa, talasemija, hronična bolest; makrocitna – nedostatak B12 ili folata, alkohol, bolest jetre, hipotireoza, lekovi.',
          'Sideropenijska anemija kod muškarca i žene u postmenopauzi je gubitak krvi iz digestivnog trakta dok se ne dokaže suprotno.',
          'Feritin raste u zapaljenju, pa uredan feritin uz povišen CRP ne isključuje nedostatak gvožđa.',
          '**Leukociti**: neutrofilija – bakterijska infekcija, kortikosteroidi, stres; limfocitoza – virusne infekcije; kod starijih uporna limfocitoza traži hematologa.',
          'Febrilan pacijent sa teškom neutropenijom (npr. posle hemioterapije) je hitan slučaj.',
          '**Trombociti**: izolovano nizak broj prvo proveri ponovljenim uzorkom (lažna trombocitopenija zbog slepljivanja u epruveti).',
          'Sniženje dve ili tri loze istovremeno traži hematološku obradu.'
        ] },
        { type: 'list', title: 'CRP i sedimentacija', items: [
          'CRP raste i pada brzo, pa je koristan za praćenje toka; sedimentacija se menja sporo.',
          'Nijedan nije specifičan: povišeni su u infekciji, autoimunim bolestima, malignitetu, posle traume i operacije.',
          'Odluku o antibiotiku donosi klinička slika; CRP je dopuna, ne zamena za pregled.',
          'Veoma visoka sedimentacija kod starijeg sa novom glavoboljom ili bolovima u ramenom pojasu: misli na gigantocelularni arteritis i reumatsku polimialgiju.',
          'Uporno povišena sedimentacija bez jasnog uzroka traži obradu (infekcija, malignitet, mijelom).'
        ] },
        { type: 'list', title: 'Kalijum i natrijum', items: [
          '**Hiperkalemija**: umerena 6,0–6,4 mmol/l, teška 6,5 mmol/l i više. Prvo isključi hemolizu uzorka, ali ne čekaj ponovljeni nalaz ako pacijent ima EKG promene ili je teška.',
          'Česti uzroci: bubrežna slabost, ACE inhibitori, sartani, spironolakton, preparati kalijuma, NSAIL, trimetoprim.',
          'EKG: šiljati T talasi, produžen PR, nestanak P talasa, širok QRS.',
          '**Hipokalemija**: teška je ispod 2,5 mmol/l. Uzroci: diuretici, povraćanje, proliv. Proveri magnezijum – bez njegove korekcije kalijum se teško popravlja.',
          '**Hiponatremija**: kod starijih najčešće tiazidni diuretici, SSRI, srčana slabost, ciroza, SIADH. Simptomi: mučnina, glavobolja, konfuzija, padovi, konvulzije.',
          'Teška ili simptomatska hiponatremija se koriguje u bolnici, kontrolisano – prebrza korekcija može da izazove osmotsku demijelinizaciju.'
        ] },
        { type: 'steps', title: 'Postupak kod teške hiperkalemije', items: [
          'Kalijum 6,5 mmol/l i više, ili 6,0 i više uz EKG promene: hitno stanje – EKG, i.v. put, monitoring, poziv 194 i transport u bolnicu.',
          'Teška hiperkalemija sa EKG promenama: kalcijum-hlorid 10% 10 ml i.v. tokom 5 min ili kalcijum-glukonat 10% 30 ml i.v. tokom 10 min (stabilizuje membranu, ne snižava kalijum).',
          'Insulin kratkog dejstva 10 j. sa 25 g glukoze i.v.; pratiti glikemiju zbog hipoglikemije.',
          'Salbutamol 10–20 mg nebulizacijom kao dopuna.',
          'Obustavi lekove koji podižu kalijum i traži uzrok (akutno oštećenje bubrega, lekovi).'
        ] },
        { type: 'list', title: 'Kreatinin i urin', items: [
          'Uvek gledaj eGFR, ne samo kreatinin: kod starije, sitne žene uredan kreatinin može da znači značajno sniženu funkciju.',
          '**Hronična bubrežna bolest**: eGFR ispod 60 ml/min/1,73 m² ili odnos albumin/kreatinin u urinu 3 mg/mmol i više, potvrđeno ponovljenim nalazom.',
          '**Akutno oštećenje bubrega**: porast kreatinina za 26 µmol/l i više u 48 h, ili za 50% i više u 7 dana, ili diureza ispod 0,5 ml/kg/h duže od 6 h.',
          'Urin test trakom: za otkrivanje proteinurije kod odraslih je merodavan odnos albumin/kreatinin, ne traka; hematuriju na traci potvrdi ponovljenim nalazom.',
          'Asimptomatska bakteriurija se ne leči antibiotikom, osim u trudnoći.',
          'Kod muškaraca i trudnica sa urinarnom infekcijom uzmi urinokulturu pre antibiotika.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Leči pacijenta, ne nalaz – ali visok kalijum sa EKG promenama leči odmah.',
          'Uporedi sa prethodnim vrednostima: trend govori više od jednog broja.',
          'Kod akutne bolesti sa povraćanjem, prolivom ili sepsom razmotri privremeno obustavljanje ACE inhibitora i sartana.',
          'Neočekivano visok kalijum kod pacijenta koji se dobro oseća i ima uredan EKG najčešće je hemoliza uzorka – ponovi odmah.'
        ] }
      ],
      sources: [
        { name: 'Resuscitation Council UK 2025 – Special circumstances', url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines' },
        { name: 'NICE NG148 – Acute kidney injury', url: 'https://www.nice.org.uk/guidance/ng148/chapter/Recommendations' },
        { name: 'NICE NG203 – Chronic kidney disease', url: 'https://www.nice.org.uk/guidance/ng203/chapter/Recommendations' }
      ],
      questions: [
        {
          q: 'Muškarac, 74 god., sa srčanom slabošću, uzima ramipril, spironolakton i poslednjih 10 dana ibuprofen zbog bola u kolenu. Malaksao je. Kalijum 6,8 mmol/l, kreatinin dvostruko viši nego pre mesec dana. EKG: šiljati T talasi, QRS proširen. Šta je prvi lek?',
          options: ['Kalcijum-glukonat 10% 30 ml i.v. tokom 10 min, uz monitoring', 'Furosemid 40 mg p.o. i kontrola kalijuma sutra', 'Natrijum-polistiren sulfonat p.o. i otpust kući', 'Samo obustaviti ibuprofen i ponoviti nalaz za 3 dana'],
          answer: 0,
          explain: 'Teška hiperkalemija sa EKG promenama neposredno ugrožava život. Prvo se daje kalcijum radi stabilizacije membrane, zatim insulin sa glukozom i salbutamol, uz hitan transport. Kombinacija ACE inhibitor, spironolakton i NSAIL je tipičan uzrok.'
        },
        {
          q: 'Muškarac, 66 god., umoran. Hemoglobin snižen, MCV snižen, feritin nizak. Nema vidljivog krvarenja, stolica uredne boje. Šta je sledeći korak?',
          options: ['Preparat gvožđa 3 meseca, pa kontrola krvne slike', 'Vitamin B12 i folna kiselina, jer je anemija kod starijih najčešće nutritivna', 'Preparat gvožđa i upućivanje na endoskopsku obradu digestivnog trakta', 'Transfuzija eritrocita u dnevnoj bolnici'],
          answer: 2,
          explain: 'Sideropenijska anemija kod muškarca je okultno krvarenje iz digestivnog trakta dok se ne dokaže suprotno. Gvožđe se nadoknađuje, ali se uzrok mora tražiti – odsustvo vidljive krvi u stolici ne isključuje karcinom.'
        },
        {
          q: 'Žena, 84 god., iz doma za stare, bez tegoba, afebrilna. U rutinskom urinu leukociti i nitriti pozitivni, urinokultura E. coli. Šta je ispravno?',
          options: ['Ciprofloksacin 7 dana', 'Nitrofurantoin 5 dana i kontrolna urinokultura', 'Jednokratna doza fosfomicina', 'Bez antibiotika, jer se radi o asimptomatskoj bakteriuriji'],
          answer: 3,
          explain: 'Asimptomatska bakteriurija je česta kod starijih i ne leči se antibiotikom (izuzetak su trudnice). Lečenje ne donosi korist, a nosi rizik od neželjenih dejstava i rezistencije.'
        }
      ]
    },
    {
      id: 'ekg-osnove',
      title: 'Osnove EKG-a za ambulantu',
      summary: 'Čitaj svaki EKG istim redosledom i znaj nekoliko nalaza koji se ne smeju propustiti.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'EKG u ambulanti i na terenu ne služi za finu dijagnostiku nego da odgovori na nekoliko pitanja: da li je ovo infarkt sa ST elevacijom, opasna aritmija ili blok, i da li sme da čeka. Sistematično čitanje uvek istim redosledom sprečava da upadljiv nalaz sakrije onaj važniji. Uvek uporedi sa starim EKG-om ako postoji.' },
        { type: 'steps', title: 'Sistematično čitanje', items: [
          'Proveri ime, datum, brzinu papira (25 mm/s) i kalibraciju (10 mm/mV).',
          '**Frekvencija**: 300 podeljeno brojem velikih kvadrata između dva R zupca; kod nepravilnog ritma broj QRS kompleksa u 10 s puta 6.',
          '**Ritam**: pravilan ili nepravilan; da li ispred svakog QRS postoji P talas i da li posle svakog P sledi QRS.',
          '**Osovina**: QRS pozitivan u I i aVF znači normalnu osovinu.',
          '**PR interval**: normalno 3–5 malih kvadrata (120–200 ms); kraći uz delta talas – preekscitacija; duži – AV blok I stepena.',
          '**QRS**: normalno uži od 3 mala kvadrata (120 ms); širi – blok grane, komorski ritam, hiperkalemija, preekscitacija.',
          '**ST segment i T talas** u svim odvodima, grupisano po zidovima; na kraju **QT interval** korigovan za frekvenciju.'
        ] },
        { type: 'list', title: 'Odvodi i zidovi', items: [
          'Donji zid: II, III, aVF. Uz infarkt donjeg zida snimi desne odvode (V4R) zbog infarkta desne komore.',
          'Prednji zid i septum: V1–V4.',
          'Lateralni zid: I, aVL, V5–V6.',
          'Zadnji zid: ST depresija u V1–V3 sa visokim R zupcem – snimi zadnje odvode V7–V9.',
          'ST elevacija u aVR uz rasprostranjenu ST depresiju: sumnja na bolest glavnog stabla ili višesudovnu bolest.'
        ] },
        { type: 'flags', title: 'Šta se ne sme propustiti', items: [
          '**ST elevacija u dva susedna odvoda** uz bol u grudima: postupak za STEMI, hitan transport u salu za kateterizaciju.',
          '**Tahikardija širokih QRS kompleksa**: komorska tahikardija dok se ne dokaže suprotno.',
          '**AV blok II stepena tipa Mobitz II i AV blok III stepena**: rizik od asistolije.',
          '**Hiperkalemija**: šiljati T talasi, produžen PR, nestanak P talasa, širok QRS.',
          '**Produžen QT interval**: rizik od torsades de pointes – proveri lekove, kalijum i magnezijum.',
          '**Atrijalna fibrilacija**: apsolutno nepravilan ritam bez P talasa – proceni frekvenciju i potrebu za antikoagulantnom terapijom.',
          'Kratak PR sa delta talasom, novonastali blok leve grane uz bol u grudima, sinusna tahikardija sa znacima opterećenja desnog srca uz dispneju.'
        ] },
        { type: 'steps', title: 'Postupak kod nestabilnog pacijenta sa aritmijom', items: [
          'Proceni znake nestabilnosti: šok (sistolni pritisak ispod 90 mmHg), sinkopa, ishemija miokarda, srčana slabost.',
          'Kiseonik ako je SpO2 snižena, i.v. put, monitoring, 12-kanalni EKG; pozovi pomoć i pripremi defibrilator.',
          'Nestabilna tahiaritmija: sinhronizovana kardioverzija je terapija izbora; ako ne uspe, amjodaron 300 mg i.v. tokom 10–20 min.',
          'Bradikardija sa znacima nestabilnosti: atropin 500 mikrograma i.v., po potrebi ponavljati na 3–5 min do ukupno 3 mg.',
          'Hitan transport uz lekarsku pratnju i najavu.'
        ] },
        { type: 'refer', title: 'Kada uputiti', items: [
          'Hitno sanitetom: ST elevacija, komorska tahikardija, AV blok visokog stepena, aritmija sa znacima nestabilnosti, bol u grudima sa novim promenama.',
          'Istog dana: novootkrivena atrijalna fibrilacija sa brzom komorskom frekvencijom ili simptomima.',
          'Kardiologu u redovnom terminu: asimptomatski blok grane, znaci hipertrofije leve komore, asimptomatska atrijalna fibrilacija sa kontrolisanom frekvencijom.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Uredan EKG ne isključuje akutni koronarni sindrom: kod trajnog bola ponovi snimak i uporedi.',
          'Mašinsko očitavanje je pomoć, ne dijagnoza – često greši u oba smera.',
          'Kod bola u grudima snimi EKG odmah, pre detaljne anamneze.',
          'Loš kontakt elektroda i zamenjene elektrode ruku daju lažne nalaze – ako slika nema smisla, snimi ponovo.',
          'Stari EKG pacijenta vredi koliko i novi: nova promena je važnija od same promene.'
        ] }
      ],
      sources: [
        { name: 'Resuscitation Council UK 2025 – Adult advanced life support', url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-advanced-life-support-guidelines' },
        { name: 'Resuscitation Council UK 2025 – Special circumstances', url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines' }
      ],
      questions: [
        {
          q: 'Muškarac, 59 god., ima bol u grudima 40 min. EKG: ST elevacija u II, III i aVF, ST depresija u I i aVL. TA 100/60. Šta treba uraditi pre davanja nitroglicerina?',
          options: ['Sačekati troponin iz laboratorije doma zdravlja', 'Snimiti desne prekordijalne odvode (V4R) zbog mogućeg infarkta desne komore', 'Dati furosemid i.v. jer je pritisak nizak', 'Ponoviti EKG za 2 h i uporediti'],
          answer: 1,
          explain: 'Infarkt donjeg zida je često udružen sa infarktom desne komore, kod koga nitrati mogu da izazovu tešku hipotenziju. Zato se snimaju desni odvodi; transport u salu za kateterizaciju se ne odlaže zbog laboratorije.'
        },
        {
          q: 'Žena, 71 god., dolazi zbog slabosti i ošamućenosti. Puls 34/min, TA 85/50, bleda i oznojena. EKG: P talasi i QRS kompleksi nezavisni jedni od drugih, QRS širok. Šta je prvi lek dok se organizuje transport?',
          options: ['Amjodaron 300 mg i.v.', 'Metoprolol 5 mg i.v.', 'Verapamil 5 mg i.v.', 'Atropin 500 mikrograma i.v., po potrebi ponoviti'],
          answer: 3,
          explain: 'Kompletan AV blok sa hipotenzijom je bradikardija sa znacima nestabilnosti: daje se atropin 500 mikrograma i.v., uz ponavljanje na 3–5 min do 3 mg, i hitan transport radi elektrostimulacije. Ostali navedeni lekovi dodatno usporavaju provođenje.'
        },
        {
          q: 'Muškarac, 64 god., sa preležanim infarktom, ima lupanje srca i vrtoglavicu. Puls 170/min, TA 80/50, konfuzan. EKG: pravilna tahikardija širokih QRS kompleksa. Šta je terapija izbora?',
          options: ['Sinhronizovana električna kardioverzija', 'Vagalni manevri i posmatranje', 'Verapamil 5 mg i.v. polako', 'Digoksin 0,5 mg i.v.'],
          answer: 0,
          explain: 'Tahikardija širokih QRS kompleksa kod pacijenta sa strukturnom bolešću srca je komorska tahikardija dok se ne dokaže suprotno. Uz znake nestabilnosti (hipotenzija, poremećaj svesti) terapija izbora je sinhronizovana kardioverzija; verapamil je opasan.'
        }
      ]
    },
    {
      id: 'propisivanje',
      title: 'Propisivanje lekova: interakcije i zamke',
      summary: 'Nekoliko kombinacija pravi većinu ozbiljnih neželjenih događaja: varfarin, trojka za bubreg, QT lekovi i nedeljni metotreksat.',
      urgent: false,
      sections: [
        { type: 'text', title: 'Ukratko', body: 'Većina ozbiljnih neželjenih događaja u primarnoj zaštiti potiče od malog broja lekova: antikoagulansa, NSAIL, diuretika, lekova koji deluju na renin-angiotenzin sistem, insulina i metotreksata. Pre svakog novog recepta pogledaj celu listu terapije, bubrežnu funkciju i uzrast. Kada nisi siguran za dozu ili interakciju, proveri sažetak karakteristika leka.' },
        { type: 'list', title: 'Varfarin', items: [
          'Mnogi lekovi menjaju efekat varfarina: antibiotici, antimikotici (i lokalni oralni gelovi), amjodaron, antiepileptici, biljni preparati.',
          'Pri svakom uvođenju ili ukidanju leka kod pacijenta na varfarinu planiraj raniju kontrolu INR.',
          'NSAIL i acetilsalicilna kiselina uz varfarin povećavaju rizik od krvarenja i bez promene INR – za bol je prvi izbor paracetamol.',
          'SSRI takođe povećavaju sklonost krvarenju uz antikoagulanse i NSAIL.',
          'Edukuj pacijenta: bez samoinicijativnog uzimanja lekova i biljnih preparata, stalan način ishrane, javiti se kod krvarenja ili crne stolice.'
        ] },
        { type: 'list', title: 'NSAIL + ACE inhibitor ili sartan + diuretik', items: [
          'Ova trojna kombinacija je čest uzrok akutnog oštećenja bubrega, naročito kod starijih i pri dehidraciji.',
          'Isti lekovi (uz spironolakton, preparate kalijuma i trimetoprim) podižu kalijum.',
          'Pre uvođenja NSAIL pitaj za antihipertenzive i proveri eGFR; kod HBB i srčane slabosti izbegavaj NSAIL.',
          'Pri povraćanju, prolivu ili sepsi razmotri privremeno obustavljanje ACE inhibitora i sartana dok se stanje ne stabilizuje.',
          'NSAIL, ACE inhibitori, sartani i tiazidi povećavaju nivo litijuma – rizik od toksičnosti.'
        ] },
        { type: 'list', title: 'Produženje QT intervala', items: [
          'Česti lekovi koji produžavaju QT: makrolidi, fluorohinoloni, citalopram i escitalopram (dozno zavisno), antipsihotici, neki antiemetici, amjodaron, sotalol.',
          'Rizik raste kada se kombinuju dva takva leka i uz hipokalemiju, hipomagnezemiju, bradikardiju i stariju životnu dob.',
          'Pre dodavanja drugog QT leka uradi EKG i proveri kalijum; ako je moguće, izaberi alternativu.',
          'Escitalopram: kod starijih od 65 godina početna doza 5 mg, najviše 10 mg dnevno.'
        ] },
        { type: 'drugs', title: 'Lekovi sa zamkom u doziranju', items: [
          { name: 'metotreksat', dose: 'JEDNOM NEDELJNO p.o. (reumatoidni artritis: početno 7,5 mg nedeljno, postepeno do najviše 20 mg nedeljno), uvek istog dana', note: 'Na receptu napiši dan u nedelji. Svakodnevno uzimanje je po život opasna greška' },
          { name: 'folna kiselina uz metotreksat', dose: 'uobičajeno 5 mg p.o. jednom nedeljno, drugog dana u odnosu na metotreksat', note: 'Smanjuje neželjena dejstva; ne uzima se istog dana' },
          { name: 'escitalopram', dose: '10 mg p.o. 1× dnevno, najviše 20 mg; stariji od 65 god. početi 5 mg, najviše 10 mg', note: 'Dozno zavisno produženje QT' },
          { name: 'diazepam', dose: 'kod starijih i iscrpljenih polovina uobičajene doze za odrasle', note: 'Padovi, konfuzija; uz opioide depresija disanja' },
          { name: 'direktni oralni antikoagulansi', dose: 'doza prema sažetku karakteristika leka: zavisi od indikacije, bubrežne funkcije, uzrasta i telesne mase', note: 'Proveri eGFR pre uvođenja i najmanje jednom godišnje; i premala doza je greška' }
        ] },
        { type: 'steps', title: 'Pre svakog recepta', items: [
          'Pogledaj celu listu terapije, uključujući lekove drugih lekara i preparate bez recepta.',
          'Proveri eGFR, uzrast, telesnu masu, trudnoću i dojenje.',
          'Pitaj za alergije i ranija neželjena dejstva.',
          'Proveri interakcije sa lekovima uske terapijske širine: varfarin, litijum, digoksin, antiepileptici, metotreksat.',
          'Napiši jasno dozu, učestalost i trajanje; za nedeljne lekove dan u nedelji.',
          'Dogovori šta se prati i kada: INR, kalijum i kreatinin, krvna slika, EKG.'
        ] },
        { type: 'pearls', title: 'Zapamti', items: [
          'Kod žene u reproduktivnom periodu pre svakog novog leka pomisli na trudnoću: topiramat je, na primer, kontraindikovan u trudnoći.',
          'Kantarion ima ozbiljne interakcije, i sa hormonskom kontracepcijom.',
          'Kratkotrajni antibiotik je čest okidač krvarenja kod pacijenta na varfarinu – kontroliši INR ranije.',
          'Kada stariji pacijent dobije novu tegobu, prvo pitanje je: koji lek je nedavno uveden ili promenjen?',
          'Ako ne znaš dozu napamet, proveri – to je znak dobre prakse, ne neznanja.'
        ] }
      ],
      sources: [
        { name: 'NHS – Methotrexate', url: 'https://www.nhs.uk/medicines/methotrexate/how-and-when-to-take-methotrexate/' },
        { name: 'NICE NG148 – Acute kidney injury', url: 'https://www.nice.org.uk/guidance/ng148/chapter/Recommendations' },
        { name: 'ALIMS – escitalopram, sažetak karakteristika leka', url: 'https://www.alims.gov.rs/doc_file/lekovi/smpc/515-01-05528-17-009.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 67 god., sa reumatoidnim artritisom, dolazi po produženje terapije. Na otpusnoj listi piše metotreksat 10 mg. Kaže da pije jednu tabletu od 10 mg svako jutro već 6 dana, ima ranice u ustima i malaksala je. Šta je ispravno?',
          options: ['Smanjiti dozu na 5 mg dnevno i dodati folnu kiselinu', 'Nastaviti isto i propisati rastvor za ispiranje usta', 'Odmah obustaviti metotreksat i hitno uputiti u bolnicu uz krvnu sliku', 'Preći na uzimanje svaki drugi dan i kontrolisati za 2 nedelje'],
          answer: 2,
          explain: 'Metotreksat se kod reumatoloških bolesti uzima jednom nedeljno. Svakodnevno uzimanje dovodi do mukozitisa i supresije koštane srži i po život je opasno: lek se odmah obustavlja i pacijent hitno upućuje.'
        },
        {
          q: 'Muškarac, 76 god., uzima ramipril i hidrohlortiazid, eGFR 52. Traži nešto jače za bol u kuku jer mu paracetamol nije dovoljan. Susedov diklofenak mu je pomogao. Šta je najbolji odgovor?',
          options: ['Izbegavati NSAIL zbog rizika od oštećenja bubrega; optimizovati paracetamol i nefarmakološke mere', 'Propisati diklofenak 75 mg 2× dnevno uz inhibitor protonske pumpe', 'Propisati ibuprofen 600 mg 3× dnevno, jer je bezbedniji za bubreg', 'Propisati diklofenak i udvostručiti dozu diuretika'],
          answer: 0,
          explain: 'NSAIL uz ACE inhibitor i diuretik kod starijeg sa sniženom eGFR nosi visok rizik od akutnog oštećenja bubrega i hiperkalemije. Inhibitor protonske pumpe štiti želudac, ali ne bubreg.'
        },
        {
          q: 'Žena, 72 god., uzima escitalopram 20 mg i dobija klaritromicin zbog pneumonije. Posle 3 dana ima kratkotrajan gubitak svesti. Kalijum 3,1 mmol/l (uzima furosemid). Na šta prvo pomisliti?',
          options: ['Vazovagalna sinkopa – savetovati hidraciju', 'Aritmija zbog produženog QT intervala – hitno EKG i upućivanje', 'Tranzitorni ishemijski atak – acetilsalicilna kiselina 300 mg', 'Epileptični napad – uvesti antiepileptik'],
          answer: 1,
          explain: 'Dva leka koja produžavaju QT (escitalopram u dozi iznad preporučene za starije i makrolid), uz hipokalemiju i stariju životnu dob, tipičan su okvir za torsades de pointes. Potreban je hitan EKG, korekcija kalijuma i obustava lekova koji produžavaju QT.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'prevencija-slucaj-1',
      title: 'Muškarac, 56 god., dolazi po uverenje',
      intro: 'Ambulanta doma zdravlja. Muškarac, 56 god., vozač, dolazi po lekarsko uverenje. Kod lekara nije bio 6 godina i kaže da je zdrav. Puši 20 cigareta dnevno 30 godina. TA 152/94, BMI 31, obim struka 108 cm.',
      steps: [
        {
          q: 'Imaš 10 minuta. Šta je najkorisnije uraditi u ovoj poseti?',
          options: ['Izdati uverenje i reći da dođe ako bude imao tegobe', 'Uputiti ga kardiologu, endokrinologu i pulmologu', 'Propisati antihipertenziv i statin odmah, bez daljih provera', 'Iskoristiti posetu za preventivni pregled: ponoviti merenje pritiska, zatražiti lipide i glikemiju, proveriti skrining i pitati za pušenje'],
          answer: 3,
          explain: 'Poseta iz administrativnog razloga je često jedina prilika za prevenciju. Jedno merenje pritiska nije dijagnoza, a upućivanje trojici specijalista pre osnovne obrade nije racionalno.'
        },
        {
          q: 'Koji organizovani skrining mu pripada po uzrastu i šta mu daješ?',
          options: ['Kolonoskopiju kao prvi skrining test', 'Imunohemijski test na okultno krvarenje u stolici (FIT), koji se ponavlja na 2 godine', 'PSA jednom godišnje u okviru organizovanog skrininga', 'Nijedan, organizovani skrining počinje sa 60 godina'],
          answer: 1,
          explain: 'Organizovani skrining karcinoma debelog creva obuhvata žene i muškarce 50–74 godine FIT testom na 2 godine; kolonoskopija sledi samo posle pozitivnog testa.'
        },
        {
          q: 'Na kontroli: kućna merenja pritiska prosečno 148/92, glikemija natašte 6,4 mmol/l, LDL povišen. Na pitanje o pušenju kaže da bi voleo da prestane, ali je probao dva puta bez uspeha. Šta je najbolji sledeći korak u vezi sa pušenjem?',
          options: ['Reći mu da smanji na 10 cigareta dnevno', 'Odložiti temu dok se ne reguliše pritisak', 'Dogovoriti datum prestanka, ponuditi farmakoterapiju i zakazati ranu kontrolu', 'Uputiti ga psihijatru zbog zavisnosti'],
          answer: 2,
          explain: 'Pacijent je spreman, pa sledi korak pomozi i dogovori praćenje: datum prestanka, lek (vareniklin, citizin ili nikotinska zamenska terapija) i rana kontrola. Raniji neuspeli pokušaji su pravilo, ne prepreka.'
        },
        {
          q: 'Kako tumačiš glikemiju natašte 6,4 mmol/l?',
          options: ['Predijabetes – savet o ishrani, telesnoj masi i aktivnosti, uz kontrolu', 'Dijabetes tipa 2 – uvesti metformin odmah', 'Uredan nalaz – nije potrebna kontrola', 'Greška laboratorije – nalaz zanemariti'],
          answer: 0,
          explain: 'Glikemija natašte 5,6–6,9 mmol/l je u opsegu predijabetesa; dijabetes je 7,0 mmol/l i više. Uz gojaznost, hipertenziju i pušenje ovo je pacijent kome promena načina života donosi najviše.'
        }
      ]
    },
    {
      id: 'prevencija-slucaj-2',
      title: 'Žena, 82 god., pala u kupatilu',
      intro: 'Kućna poseta. Žena, 82 god., juče je pala u kupatilu, bez udarca u glavu i bez preloma. Ovo je drugi pad za 4 meseca. Uzima: ramipril, indapamid, spironolakton, bisoprolol, sertralin, bromazepam uveče i, poslednje 2 nedelje, diklofenak zbog bola u leđima. TA sedeći 118/66, puls 58/min.',
      steps: [
        {
          q: 'Šta je prvi korak u proceni?',
          options: ['Uputiti na CT glave i neurologu', 'Savetovati mirovanje u krevetu narednih nedelju dana', 'Izmeriti pritisak ležeći i posle najmanje 1 minuta stajanja, posmatrati hod i pregledati sve lekove', 'Propisati lek protiv vrtoglavice'],
          answer: 2,
          explain: 'Dva pada u godini traže sveobuhvatnu procenu: ortostatski pritisak, hod i ravnoteža, lekovi, vid, uslovi u kući. Mirovanje pogoršava slabost, a novi lek bez procene je propisivačka kaskada.'
        },
        {
          q: 'Pritisak ležeći 124/70, posle 2 minuta stajanja 98/58 uz ošamućenost. Hoda nesigurno, sitnim koracima. Koji nalaz iz terapije najviše doprinosi padovima?',
          options: ['Samo sertralin', 'Samo diklofenak', 'Nijedan, padovi su posledica starosti', 'Kombinacija više antihipertenziva sa ortostatskom hipotenzijom i benzodiazepin uveče'],
          answer: 3,
          explain: 'Pad sistolnog pritiska za više od 20 mmHg posle stajanja je ortostatska hipotenzija, kojoj doprinose tri leka koja snižavaju pritisak i diuretici. Benzodiazepin dodatno narušava ravnotežu i budnost.'
        },
        {
          q: 'Stižu nalazi: kalijum 6,1 mmol/l (uzorak nije hemolizovan), kreatinin porastao za 60% u odnosu na vrednost od pre mesec dana, natrijum 128 mmol/l. EKG: sinusna bradikardija 56/min, bez šiljatih T talasa, QRS uzan. Kako tumačiš?',
          options: ['Očekivane vrednosti za uzrast, bez intervencije', 'Akutno oštećenje bubrega i hiperkalemija zbog NSAIL uz ACE inhibitor, diuretike i spironolakton', 'Hiperkalemija zbog ishrane bogate kalijumom', 'Laboratorijska greška, ponoviti za mesec dana'],
          answer: 1,
          explain: 'Porast kreatinina za 50% i više u 7 dana (ovde nedavno, posle uvođenja NSAIL) ispunjava kriterijum za akutno oštećenje bubrega. NSAIL uz ACE inhibitor i diuretik je klasičan uzrok, a spironolakton i ramipril dodatno podižu kalijum. Hiponatremiji doprinose indapamid i sertralin.'
        },
        {
          q: 'Šta preduzimaš?',
          options: ['Obustaviti diklofenak, spironolakton i ramipril i uputiti u bolnicu istog dana radi lečenja i praćenja', 'Smanjiti diklofenak na jednu tabletu dnevno i kontrolisati za 2 nedelje', 'Dodati furosemid da izbaci kalijum i ostaviti ostalu terapiju', 'Dati preparat kalijuma jer je natrijum nizak'],
          answer: 0,
          explain: 'Umerena hiperkalemija (6,0–6,4 mmol/l) uz akutno oštećenje bubrega kod starije osobe zahteva obustavu lekova koji je izazivaju i bolničko praćenje. Po stabilizaciji sledi trajna revizija terapije: bez NSAIL, postepeno ukidanje bromazepama, manje antihipertenziva.'
        }
      ]
    }
  ]
});
