MED.register({
  id: 'endokrino',
  title: 'Endokrinologija, metabolizam i krv',
  icon: '🩸',
  color: '#AB4ABA',
  topics: [
    {
      id: 'dm2',
      title: 'Dijabetes melitus tip 2',
      summary: 'Potvrdi dijagnozu, postavi individualni cilj i biraj lek prema komorbiditetima: srce i bubreg odlučuju, ne samo HbA1c.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Lečenje dijabetesa tip 2 nije samo snižavanje glikemije: cilj je sprečavanje kardiovaskularnih i bubrežnih komplikacija. Pacijenti sa **aterosklerotskom bolešću, srčanom insuficijencijom ili hroničnom bubrežnom bolešću** treba da dobiju SGLT2 inhibitor i/ili GLP-1 agonist nezavisno od HbA1c. Uporedo se leče pritisak, lipidi i telesna masa.'
        },
        {
          type: 'list',
          title: 'Dijagnostički kriterijumi',
          items: [
            'Glikemija našte **≥7,0 mmol/l** (najmanje 8 h bez unosa kalorija).',
            'Glikemija u 2. satu OGTT sa 75 g glukoze **≥11,1 mmol/l**.',
            'HbA1c **≥6,5%** (48 mmol/mol), standardizovanom laboratorijskom metodom.',
            'Slučajna glikemija ≥11,1 mmol/l uz klasične simptome hiperglikemije.',
            'Bez jasne hiperglikemije potrebna su dva patološka nalaza: isti test ponovljen ili dva različita testa.',
            'Predijabetes (ADA): glikemija našte 5,6–6,9 mmol/l, 2. sat OGTT 7,8–11,0 mmol/l, HbA1c 5,7–6,4%.'
          ]
        },
        {
          type: 'list',
          title: 'Ciljevi lečenja',
          items: [
            'HbA1c **<7%** (53 mmol/mol) za većinu odraslih; niži cilj ako se postiže bezbedno, bez hipoglikemija.',
            'Blaži cilj (do 8%) kod ograničenog životnog veka ili kada šteta od lečenja prevazilazi korist.',
            'Samokontrola: glikemija pre obroka 4,4–7,2 mmol/l, najviša posle obroka <10,0 mmol/l.',
            'HbA1c najmanje dva puta godišnje; na 3 meseca dok cilj nije postignut ili posle promene terapije.',
            'Krvni pritisak <130/80 mmHg ako se bezbedno postiže.',
            'LDL: <1,4 mmol/l uz aterosklerotsku bolest, <1,8 mmol/l kod visokog rizika bez nje.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Pri dijagnozi: HbA1c, lipidi, kreatinin sa eGFR, odnos albumin/kreatinin u urinu, pritisak, BMI, pregled stopala, uput za očno dno.',
            'Edukacija: ishrana, fizička aktivnost, prestanak pušenja, prepoznavanje hipoglikemije ako lek to zahteva.',
            'Uobičajen početak je metformin, uz postepeno povećanje doze zbog digestivnih tegoba.',
            'Aterosklerotska bolest ili visok rizik: GLP-1 agonist ili SGLT2 inhibitor sa dokazanom koristi, bez obzira na HbA1c.',
            'Srčana insuficijencija ili hronična bubrežna bolest (eGFR ≥20): SGLT2 inhibitor, bez obzira na HbA1c.',
            'Cilj nije postignut: dodaj drugi lek prema prioritetu (telesna masa, rizik od hipoglikemije, cena, dostupnost).',
            'Insulin odmah ako je HbA1c >10% ili glikemija ≥16,7 mmol/l, ili postoje simptomi hiperglikemije i znaci katabolizma (gubitak telesne mase).'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi',
          items: [
            { name: 'metformin', dose: 'početno 500 mg p.o. 1× dnevno uz obrok; povećavati za 500 mg na 1–2 nedelje do 2000 mg dnevno', note: '**eGFR <30: kontraindikovan**; eGFR 30–45: ne započinjati, a kod već lečenih proceniti korist i rizik. Dugotrajno: povremeno proveriti vitamin B12.' },
            { name: 'empagliflozin', dose: '10 mg p.o. 1× dnevno (do 25 mg za glikemiju ako je eGFR ≥60)', note: 'Srčana insuficijencija, bubrežna bolest, aterosklerotska bolest. Efekat na glikemiju slabi pri eGFR <45. Genitalne mikoze; rizik od ketoacidoze.' },
            { name: 'dapagliflozin', dose: '10 mg p.o. 1× dnevno', note: 'Iste indikacije i mere opreza.' },
            { name: 'semaglutid s.c.', dose: '0,25 mg s.c. 1× nedeljno 4 nedelje, zatim 0,5 mg; po potrebi posle najmanje 4 nedelje 1 mg nedeljno', note: 'Aterosklerotska bolest, gojaznost. Mučnina na početku. Ne kombinovati sa DPP-4 inhibitorom.' },
            { name: 'liraglutid', dose: '0,6 mg s.c. 1× dnevno najmanje nedelju dana, zatim 1,2 mg; najviše 1,8 mg dnevno', note: 'Kao semaglutid.' },
            { name: 'gliklazid MR', dose: '30–120 mg p.o. 1× dnevno uz doručak', note: 'Rizik od hipoglikemije i porast telesne mase. Oprez kod starijih i bubrežne insuficijencije.' },
            { name: 'sitagliptin', dose: '100 mg p.o. 1× dnevno; 50 mg pri eGFR 30–44', note: 'Mali rizik od hipoglikemije. Linagliptin 5 mg 1× dnevno ne zahteva prilagođavanje doze bubrežnoj funkciji.' },
            { name: 'bazalni insulin', dose: 'početno 0,1–0,2 j/kg s.c. 1× dnevno (obično oko 10 jedinica)', note: 'Uz nastavak metformina. Dozu povećavati postepeno prema jutarnjoj glikemiji; pri hipoglikemiji smanjiti. Pre insulina razmotriti GLP-1 agonist.' }
          ]
        },
        {
          type: 'list',
          title: 'Praćenje komplikacija',
          items: [
            'Očno dno: pregled u vreme postavljanja dijagnoze; ako nema retinopatije i glikemija je dobro regulisana, zatim na 1–2 godine.',
            'Bubreg: eGFR i odnos albumin/kreatinin u urinu najmanje jednom godišnje; albuminuriju potvrditi u 2 od 3 uzorka u toku 3–6 meseci.',
            'Stopala: detaljan pregled najmanje jednom godišnje (monofilament 10 g i još jedan test osetljivosti, pulsevi); pri svakoj poseti ako ima gubitka osetljivosti ili ranijeg ulkusa.',
            'Pritisak pri svakoj poseti; lipidni status pri dijagnozi, zatim periodično.',
            'Albuminurija uz hipertenziju: ACE inhibitor ili sartan u najvišoj podnošljivoj dozi; kreatinin i kalijum 7–14 dana posle uvođenja.',
            'Porast kreatinina do 30% posle uvođenja ACE inhibitora ili sartana nije razlog za prekid.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Hitno: visoka glikemija uz povraćanje, dehidraciju, ketone, ubrzano duboko disanje ili poremećaj svesti.',
            'Sumnja na tip 1: mlađi, normalne telesne mase, brz početak, gubitak telesne mase, ketoni.',
            'Cilj nije postignut uprkos kombinovanoj terapiji ili je potreban složeniji insulinski režim.',
            'eGFR <30: nefrolog.',
            'Ulkus ili infekcija stopala, nagli pad vida, trudnoća ili planiranje trudnoće.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'SGLT2 inhibitor kod srčane insuficijencije i bubrežne bolesti daje se zbog organa, ne zbog šećera: indikovan je i pri HbA1c u cilju.',
            'Metformin privremeno obustavi pri povraćanju, dehidraciji i teškoj infekciji, kao i oko primene jodnog kontrasta kod snižene bubrežne funkcije.',
            'SGLT2 inhibitor obustavi pre veće operacije i tokom akutne bolesti sa slabim unosom tečnosti.',
            'HbA1c je nepouzdan kod hemoglobinopatija, skorašnjeg gubitka krvi ili transfuzije, hemolize i na hemodijalizi.',
            'Kod starijih je hipoglikemija opasnija od blago povišene glikemije: ublaži cilj i izbegavaj lekove koji je izazivaju.'
          ]
        }
      ],
      sources: [
        { name: 'ADA Standards of Care 2025 – 2. Diagnosis and classification', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11635041/' },
        { name: 'ADA Standards of Care 2025 – 9. Pharmacologic approaches', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11635045' },
        { name: 'ADA Standards of Care 2025 – 11. Chronic kidney disease', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11635029/' }
      ],
      questions: [
        {
          q: 'Muškarac, 49 god., bez tegoba, na sistematskom pregledu ima glikemiju našte 7,4 mmol/l. Šta je sledeći korak?',
          options: [
            'Odmah uvesti metformin 500 mg dva puta dnevno',
            'Ponoviti glikemiju našte ili uraditi HbA1c radi potvrde',
            'Postaviti dijagnozu dijabetesa i uputiti na očno dno',
            'Zaključiti da je nalaz uredan i kontrolisati za tri godine'
          ],
          answer: 1,
          explain: 'Kod pacijenta bez jasne hiperglikemije dijagnoza traži dva patološka nalaza: isti test ponovljen ili dva različita testa. Jedan nalaz je dovoljan samo uz klasične simptome i slučajnu glikemiju ≥11,1 mmol/l.'
        },
        {
          q: 'Žena, 67 god., dijabetes tip 2 i srčana insuficijencija sa sniženom ejekcionom frakcijom. Na metforminu 2000 mg, HbA1c 6,9%, eGFR 58. Šta menjaš u terapiji dijabetesa?',
          options: [
            'Ništa, HbA1c je u ciljnom opsegu',
            'Dodati gliklazid MR 30 mg',
            'Dodati pioglitazon',
            'Dodati SGLT2 inhibitor 10 mg jednom dnevno'
          ],
          answer: 3,
          explain: 'Kod srčane insuficijencije SGLT2 inhibitor se preporučuje radi prevencije hospitalizacija, nezavisno od HbA1c. Pioglitazon zadržava tečnost i izbegava se, a sulfonilureja ne donosi kardiovaskularnu korist.'
        },
        {
          q: 'Muškarac, 72 god., na metforminu 1000 mg dva puta dnevno. Na kontroli eGFR 38 ml/min (pre godinu dana 52), stabilan. Šta radiš sa metforminom?',
          options: [
            'Proceniti korist i rizik, smanjiti dozu i češće kontrolisati eGFR; ispod 30 ukinuti',
            'Nastaviti istu dozu bez kontrola dok eGFR ne padne ispod 15',
            'Povećati dozu jer se lek slabije resorbuje',
            'Zameniti metformin gliklazidom u najvišoj dozi'
          ],
          answer: 0,
          explain: 'Metformin je kontraindikovan pri eGFR <30, a pri padu ispod 45 treba ponovo proceniti korist i rizik nastavka; u praksi se doza smanjuje i eGFR češće kontroliše. Kod ovog pacijenta treba razmotriti i SGLT2 inhibitor zbog bubrežne bolesti.'
        },
        {
          q: 'Muškarac, 54 god., mesec dana žeđ, učestalo mokrenje i gubitak 6 kg. Glikemija 19 mmol/l, HbA1c 11,5%, ketoni u urinu u tragu, dobro opšte stanje. Koja je početna terapija?',
          options: [
            'Samo dijeta i fizička aktivnost tri meseca',
            'Metformin 500 mg jednom dnevno i kontrola za tri meseca',
            'Uvesti insulin uz metformin i razmotriti drugi tip dijabetesa',
            'Gliklazid MR 30 mg i kontrola HbA1c za šest meseci'
          ],
          answer: 2,
          explain: 'HbA1c >10%, glikemija ≥16,7 mmol/l i znaci katabolizma (gubitak telesne mase) su razlog da se počne insulinom. Gubitak telesne mase i ketoni traže da se misli i na tip 1.'
        }
      ]
    },
    {
      id: 'insulinska-terapija',
      title: 'Dijabetes tip 1 i insulinska terapija',
      summary: 'Osnove bazal-bolus režima, zbrinjavanje hipoglikemije i pravila bolesnih dana koja sprečavaju ketoacidozu.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Pacijent sa dijabetesom tip 1 ne stvara insulin i **nikada ne sme ostati bez bazalnog insulina**, ni kada ne jede. Režim vodi endokrinolog, a izabrani lekar najčešće rešava hipoglikemije, akutne bolesti, propisivanje i edukaciju. Ista pravila važe i za pacijente sa tipom 2 na intenziviranoj insulinskoj terapiji.'
        },
        {
          type: 'list',
          title: 'Osnove režima',
          items: [
            'Većina odraslih sa tipom 1 leči se višestrukim dnevnim dozama (bazalni i prandijalni insulin) ili insulinskom pumpom; prednost imaju insulinski analozi.',
            'Ukupna dnevna doza kod tipa 1 je obično 0,4–1,0 j/kg; oko 30–50% čini bazalni insulin, ostatak se deli na obroke.',
            'Bazalni insulin se podešava prema jutarnjoj glikemiji, prandijalni prema glikemiji posle obroka.',
            'Doza za obrok zavisi od količine ugljenih hidrata i trenutne glikemije; pacijent treba da zna svoja pravila korekcije.',
            'Mesta primene treba **rotirati** i pregledati zbog lipohipertrofije.',
            'Insulin čuvati prema uputstvu proizvođača (u frižideru, ne zamrzavati).'
          ]
        },
        {
          type: 'steps',
          title: 'Hipoglikemija: postupak',
          items: [
            'Nivo 1: glikemija **<3,9 mmol/l**; nivo 2: <3,0 mmol/l; nivo 3: teška epizoda u kojoj je potrebna pomoć druge osobe.',
            'Svestan i može da guta: **15–20 g** brzih ugljenih hidrata (glukoza, 150–200 ml voćnog soka).',
            'Ponovi merenje za 15 minuta; ako hipoglikemija traje, ponovi istu količinu.',
            'Kada se glikemija popravi: obrok ili užina sa složenim ugljenim hidratima da se spreči recidiv.',
            'Bez svesti ili ne može da guta: ništa na usta; bočni položaj, glukagon i.m. ili glukoza i.v.',
            'Posle teške hipoglikemije: utvrdi uzrok (preskočen obrok, višak insulina, fizički napor, alkohol, bubrežna insuficijencija) i koriguj terapiju.',
            'Hipoglikemija na preparat sulfonilureje ili dugodelujući insulin može se ponavljati satima: potrebna je opservacija; glukagon je tada manje efikasan.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi za tešku hipoglikemiju',
          items: [
            { name: 'glukagon', dose: '1 mg i.m. ili s.c.; mala deca (ispod 20–25 kg, prema uputstvu preparata) 0,5 mg', note: 'Kada nema venskog puta. Ako nema odgovora za 15 min, potrebna je glukoza i.v. Po buđenju dati ugljene hidrate na usta.' },
            { name: 'glukoza 10%', dose: '200 ml i.v. tokom 15 minuta', note: 'Ponoviti merenje glikemije posle 10–15 minuta.' },
            { name: 'glukoza 20%', dose: '100 ml i.v. tokom 15 minuta', note: 'Alternativa 10% rastvoru; u veliku venu.' }
          ]
        },
        {
          type: 'steps',
          title: 'Pravila bolesnih dana',
          items: [
            '**Nikada ne prekidati bazalni insulin**, čak ni kada pacijent ne jede ili povraća.',
            'Glikemiju meriti često (na nekoliko sati, i noću) i proveravati ketone u krvi ili urinu.',
            'Unositi dovoljno tečnosti; ako ne može da jede, uzimati ugljene hidrate u tečnom obliku.',
            'Uz visoku glikemiju i pozitivne ketone potrebne su dodatne doze brzodelujućeg insulina prema planu endokrinologa.',
            'Kod pacijenata sa tipom 2: privremeno obustaviti metformin i SGLT2 inhibitor dok traje povraćanje, proliv ili dehidracija.',
            'Javiti se lekaru: uporno povraćanje, ketoni koji ne padaju, glikemija koja ostaje visoka, bol u trbuhu, ubrzano disanje, pospanost.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice: dijabetesna ketoacidoza',
          items: [
            'Žeđ, poliurija, mučnina, povraćanje, bol u trbuhu, duboko ubrzano disanje, zadah na aceton, pospanost.',
            'Dijagnoza: glikemija >11 mmol/l (ili poznat dijabetes), ketoni u krvi ≥3 mmol/l ili ketonurija 2+ i više, pH <7,3 ili bikarbonati <15 mmol/l.',
            'Može biti prva manifestacija tipa 1, i kod odraslih.',
            'Na SGLT2 inhibitoru ketoacidoza može nastati i bez izrazito visoke glikemije.',
            'Na terenu: 0,9% NaCl i.v., 1000 ml tokom prvog sata ako je sistolni pritisak ≥90 mmHg (pri nižem pritisku 500 ml za 10–15 min, pa ponovna procena), i hitan transport.',
            'Insulin se uvodi u bolnici, uz praćenje kalijuma.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Sumnja na ketoacidozu ili hiperosmolarno stanje: hitno u bolnicu preko SHMP.',
            'Teška hipoglikemija, ponavljane hipoglikemije ili hipoglikemija bez upozoravajućih simptoma: endokrinolog.',
            'Novootkriven dijabetes tip 1: isti dan endokrinologu ili u bolnicu.',
            'Trudnoća ili planiranje trudnoće.',
            'Loša glikoregulacija uprkos pridržavanju režima; procena za kontinuirano merenje glukoze ili insulinsku pumpu.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Čest uzrok ketoacidoze kod poznatog dijabetesa je izostavljanje insulina tokom akutne bolesti.',
            'Za hipoglikemiju je najbolja čista glukoza; masna hrana sporije podiže glikemiju.',
            'Alkohol može izazvati odloženu hipoglikemiju; savetuj obrok uz piće i kontrolu glikemije pre spavanja.',
            'Glukagon treba propisati svima koji su na insulinu ili imaju visok rizik od hipoglikemije; član porodice treba da ume da ga primeni.',
            'Vozači na insulinu: izmeriti glikemiju pre vožnje i držati glukozu u vozilu.'
          ]
        }
      ],
      sources: [
        { name: 'ADA Standards of Care 2025 – 6. Glycemic goals and hypoglycemia', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11635034/' },
        { name: 'JBDS 2023 – Hospital management of hypoglycaemia in adults', url: 'https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_01_Hypo_Guideline_with_QR_code_January_2023.pdf' },
        { name: 'JBDS 2021 – Management of diabetic ketoacidosis in adults', url: 'https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Archive/JBDS_02%20_DKA_Guideline_amended_v2_June_2021_Archive.pdf' }
      ],
      questions: [
        {
          q: 'Devojka, 22 god., dijabetes tip 1, od jutros povraća zbog gastroenteritisa i ništa ne jede. Majka pita telefonom da li da preskoči večernji bazalni insulin jer se plaši hipoglikemije. Šta savetuješ?',
          options: [
            'Preskočiti bazalni insulin dok ponovo ne počne da jede',
            'Preskočiti sve insuline i davati samo vodu',
            'Dati bazalni insulin, često meriti glikemiju i ketone, davati tečnost sa šećerom',
            'Dati dvostruku dozu bazalnog insulina zbog infekcije'
          ],
          answer: 2,
          explain: 'Bazalni insulin se ne prekida jer akutna bolest povećava potrebu za insulinom, a bez njega nastaje ketoacidoza. Potrebni su česta kontrola glikemije i ketona i unos tečnosti; uporno povraćanje ili rast ketona znače bolnicu.'
        },
        {
          q: 'Teren HMP: muškarac, 45 god., na insulinu, zatečen bez svesti i oznojen. Glikemija 1,9 mmol/l. Venski put se ne može obezbediti. Šta daješ?',
          options: [
            'Glukagon 1 mg i.m.',
            'Zaslađen sok kašičicom u usta',
            'Brzodelujući insulin 4 jedinice s.c.',
            'Deksametazon 8 mg i.m.'
          ],
          answer: 0,
          explain: 'Kod teške hipoglikemije bez venskog puta daje se glukagon 1 mg i.m. Ništa se ne daje na usta osobi bez svesti zbog aspiracije. Kada se probudi, daju se ugljeni hidrati na usta i traži uzrok.'
        },
        {
          q: 'Žena, 58 god., na bazal-bolus režimu, dolazi u ambulantu oznojena i drhtava, svesna i orijentisana. Glikemija 3,2 mmol/l. Postupak?',
          options: [
            'Glukagon 1 mg i.m. i poziv 194',
            'Glukoza i.v. odmah',
            'Sendvič sa sirom i kontrola glikemije za sat vremena',
            'Dati 15–20 g glukoze na usta i ponoviti merenje za 15 minuta'
          ],
          answer: 3,
          explain: 'Svestan pacijent koji može da guta leči se brzim ugljenim hidratima na usta uz kontrolu za 15 minuta, a zatim obrokom. Parenteralna terapija je za poremećaj svesti, a masna i proteinska hrana sporije podiže glikemiju.'
        }
      ]
    },
    {
      id: 'hipotireoza',
      title: 'Hipotireoza',
      summary: 'Dijagnoza je TSH i fT4; levotiroksin doziraj prema uzrastu i srcu, a TSH kontroliši tek posle 6–8 nedelja.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Primarna hipotireoza je najčešće posledica autoimunog tireoiditisa, operacije ili radiojodne terapije. Dijagnoza je laboratorijska: **povišen TSH uz snižen fT4** (manifestna) ili **povišen TSH uz normalan fT4** (subklinička). Lečenje je levotiroksin, uz retke i strpljive kontrole TSH.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Umor, pospanost, osećaj hladnoće, porast telesne mase, opstipacija, suva koža, opadanje kose.',
            'Bradikardija, periorbitalni edem, promukao glas, usporeni refleksi.',
            'Menstrualni poremećaji i neplodnost; depresivno raspoloženje, usporeno mišljenje.',
            'Laboratorija: hiperholesterolemija, blaga anemija, hiponatremija, povišen CK.',
            'Kod starijih često samo umor, kognitivni pad ili srčana insuficijencija.'
          ]
        },
        {
          type: 'list',
          title: 'Dijagnostika',
          items: [
            'Prvi test je **TSH**; ako je povišen, dodaj fT4.',
            'Povišen TSH uz normalan fT4 ponovi posle 2–3 meseca, zajedno sa fT4 i anti-TPO antitelima, pre postavljanja dijagnoze.',
            'Anti-TPO antitela potvrđuju autoimunu etiologiju.',
            'Nizak fT4 uz nizak ili normalan TSH: sumnja na centralnu hipotireozu, uputiti endokrinologu.',
            'Ultrazvuk štitaste žlezde nije rutinski potreban, osim kod palpabilnog čvora ili strume.',
            'Lekovi koji mogu izazvati hipotireozu: amjodaron, litijum.'
          ]
        },
        {
          type: 'drugs',
          title: 'Levotiroksin',
          items: [
            { name: 'levotiroksin (odrasli bez srčane bolesti)', dose: 'puna zamenska doza oko 1,6 µg/kg p.o. 1× dnevno', note: 'Kod subkliničke hipotireoze orijentaciono oko 1,5 µg/kg dnevno. Nekim pacijentima treba niža početna doza.' },
            { name: 'levotiroksin (stariji ili srčana bolest)', dose: 'početno 25–50 µg p.o. 1× dnevno; povećavati za 12,5–25 µg na 6–8 nedelja', note: 'Brzo uvođenje može izazvati anginu ili aritmiju.' },
            { name: 'levotiroksin (titracija kod ostalih)', dose: 'korekcija doze za 12,5–25 µg p.o. na 4–6 nedelja, do normalizacije TSH', note: 'Posle svake promene doze sačekati kontrolni TSH pre sledeće korekcije.' }
          ]
        },
        {
          type: 'steps',
          title: 'Uzimanje i kontrola',
          items: [
            'Uzimati našte sa vodom, 30–60 minuta pre doručka; alternativa je pred spavanje, najmanje 3 sata posle večere.',
            'Razmak od najmanje 4 sata od preparata gvožđa i kalcijuma i drugih lekova koji ometaju resorpciju.',
            'TSH kontrolisati **6–8 nedelja** posle početka ili svake promene doze; ranije je nalaz nepouzdan.',
            'Cilj: TSH u referentnom opsegu (približno 0,4–4,0 mIU/l).',
            'Kada je doza stabilna: TSH jednom godišnje (na 6–12 meseci).',
            'Povišen TSH na dotad dobroj dozi: prvo proveri redovnost i način uzimanja, nove lekove i malapsorpciju (celijakija, atrofični gastritis, H. pylori).'
          ]
        },
        {
          type: 'list',
          title: 'Subklinička hipotireoza: koga lečiti',
          items: [
            'TSH **>10 mIU/l** kod mlađih od 65–70 godina: lečiti i bez simptoma.',
            'TSH <10 mIU/l uz simptome kod mlađih: probno lečenje; efekat proceniti 3–4 meseca pošto se TSH normalizuje i prekinuti ako nema poboljšanja.',
            'Bez lečenja: kontrola funkcije štitaste žlezde na 6 meseci prve dve godine, zatim jednom godišnje.',
            'Stariji od 80–85 godina sa TSH ≤10 mIU/l: praćenje, po pravilu bez lečenja.',
            'Trudnice i žene koje planiraju trudnoću: uputiti endokrinologu.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Hitno: hipotermija, bradikardija, hipotenzija i poremećaj svesti kod nelečene hipotireoze (miksedemska koma).',
            'Trudnoća ili planiranje trudnoće.',
            'Sumnja na centralnu hipotireozu ili drugu bolest hipofize.',
            'Čvor u štitastoj žlezdi, brzo rastuća ili asimetrična struma, kompresivne tegobe.',
            'TSH se ne normalizuje uprkos odgovarajućoj dozi i proverenom uzimanju.',
            'Koronarna bolest ili aritmije koje otežavaju uvođenje terapije; hipotireoza na amjodaronu.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Žena na levotiroksinu koja zatrudni: odmah uraditi TSH i javiti se endokrinologu, jer potreba za levotiroksinom u trudnoći raste.',
            'Suprimiran TSH na terapiji znači predoziranje: rizik od atrijalne fibrilacije i gubitka koštane mase, naročito kod starijih.',
            'Nespecifični umor uz normalan TSH nije indikacija za levotiroksin.',
            'Pri promeni preparata levotiroksina kontrolisati TSH posle 6–8 nedelja.',
            'Biotin u suplementima može poremetiti nalaze hormona: prekinuti ga najmanje 2 dana pre vađenja krvi.'
          ]
        }
      ],
      sources: [
        { name: 'ETA 2013 – Management of subclinical hypothyroidism', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3923601/' },
        { name: 'ATA 2014 – Treatment of hypothyroidism', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/' },
        { name: 'DailyMed (FDA) – levotiroksin, uputstvo za lek', url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/31a31756-68aa-4e01-bbb1-9d181f8d9181.xml' }
      ],
      questions: [
        {
          q: 'Žena, 72 god., sa stabilnom anginom pektoris, žali se na umor i zimogrožljivost. TSH 18 mIU/l, fT4 snižen. Kako započinješ lečenje?',
          options: [
            'Levotiroksin 100 µg dnevno, puna zamenska doza',
            'Levotiroksin 25 µg dnevno, uz postepeno povećanje',
            'Bez terapije, ponoviti TSH za šest meseci',
            'Levotiroksin 150 µg tri puta nedeljno'
          ],
          answer: 1,
          explain: 'Kod starijih i pacijenata sa srčanom bolešću levotiroksin se uvodi malom dozom (25–50 µg) i polako titrira, jer brzo uvođenje može izazvati anginu ili aritmiju.'
        },
        {
          q: 'Pacijentkinji si pre dve nedelje povećao levotiroksin sa 50 na 75 µg. Dolazi sa novim nalazom TSH 7,2 mIU/l (prethodno 9,5) i traži dalje povećanje. Šta radiš?',
          options: [
            'Povećavaš na 100 µg jer je TSH i dalje povišen',
            'Vraćaš na 50 µg jer terapija ne deluje',
            'Dodaješ liotironin uz levotiroksin',
            'Zadržavaš 75 µg i ponavljaš TSH 6–8 nedelja od promene doze'
          ],
          answer: 3,
          explain: 'TSH dostiže novo ravnotežno stanje tek 6–8 nedelja posle promene doze. Ranija kontrola vodi u nepotrebno povećanje doze i predoziranje.'
        },
        {
          q: 'Žena, 86 god., dobrog opšteg stanja, bez tegoba. Na sistematskom pregledu TSH 6,8 mIU/l, fT4 normalan; nalaz potvrđen posle tri meseca. Postupak?',
          options: [
            'Bez terapije, praćenje TSH i fT4',
            'Levotiroksin 50 µg dnevno doživotno',
            'Levotiroksin 1,6 µg/kg odmah u punoj dozi',
            'Hitno uputiti endokrinologu zbog rizika od miksedema'
          ],
          answer: 0,
          explain: 'Kod najstarijih (preko 80–85 godina) sa TSH ≤10 mIU/l preporučuje se praćenje i po pravilu izbegavanje lečenja, jer korist nije pokazana, a predoziranje nosi rizik od aritmija i gubitka koštane mase.'
        }
      ]
    },
    {
      id: 'hipertireoza',
      title: 'Hipertireoza i tireotoksikoza',
      summary: 'Prepoznaj kliničku sliku, potvrdi suprimiranim TSH, ublaži simptome beta-blokatorom i uputi radi utvrđivanja uzroka.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Tireotoksikoza je višak tireoidnih hormona u cirkulaciji bez obzira na uzrok. Najčešći uzroci su **Grejvsova bolest**, toksična polinodozna struma i toksični adenom, a kod dela pacijenata prolazni tireoiditis, kod kojeg tireostatici ne deluju. Zadatak izabranog lekara je da posumnja, potvrdi TSH-om, uvede beta-blokator i uputi endokrinologu.'
        },
        {
          type: 'list',
          title: 'Klinička slika',
          items: [
            'Palpitacije, tahikardija, gubitak telesne mase uz očuvan apetit, nepodnošenje toplote, znojenje.',
            'Tremor prstiju, nervoza, nesanica, učestale stolice, slabost proksimalnih mišića.',
            'Topla vlažna koža, struma.',
            'Grejvsova bolest: egzoftalmus, otok kapaka, dvoslike.',
            'Stariji: često samo atrijalna fibrilacija, gubitak telesne mase, apatija ili pogoršanje srčane insuficijencije.',
            'Subakutni tireoiditis: bol u vratu koji se širi ka uhu, povišena temperatura, često posle virusne infekcije.'
          ]
        },
        {
          type: 'list',
          title: 'Dijagnostika',
          items: [
            '**Suprimiran TSH** uz povišen fT4 i/ili fT3: manifestna hipertireoza.',
            'Nizak TSH uz normalne fT4 i fT3: subklinička hipertireoza; ponoviti nalaz.',
            'TSH-receptorska antitela (TRAb): osetljiv i specifičan test za Grejvsovu bolest.',
            'Sedimentacija i CRP: jako povišeni kod subakutnog tireoiditisa.',
            'Ultrazvuk i scintigrafija prema odluci endokrinologa.',
            'EKG svima zbog aritmija.',
            'Pitaj za amjodaron, jodni kontrast, preparate joda, biotin i uzimanje levotiroksina.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'propranolol', dose: '20–40 mg p.o. na 6 sati', note: 'Simptomatski, odmah po sumnji. KI: astma. Ne prekidati naglo.' },
            { name: 'bisoprolol', dose: '2,5–10 mg p.o. 1× dnevno', note: 'Dugodelujuća kardioselektivna alternativa.' },
            { name: 'tiamazol (metimazol)', dose: 'početno 10–30 mg p.o. 1× dnevno, prema težini hipertireoze', note: 'Uvodi ili potvrđuje endokrinolog. Prva kontrola hormona posle 3–4 nedelje. Lečenje Grejvsove bolesti obično traje 12–18 meseci.' },
            { name: 'propiltiouracil', dose: 'doziranje određuje endokrinolog', note: 'Umesto tiamazola pri planiranju trudnoće i u prvom trimestru.' }
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Tireotoksična kriza: visoka temperatura, izražena tahikardija, agitacija ili konfuzija, povraćanje, proliv, srčana insuficijencija. Hitno u bolnicu.',
            'Na tireostatiku **povišena temperatura, gušobolja ili afte**: sumnja na agranulocitozu; lek obustaviti i odmah uraditi krvnu sliku sa leukocitarnom formulom.',
            'Na tireostatiku žutica, taman urin, svrab: moguća hepatotoksičnost.',
            'Novonastala atrijalna fibrilacija ili srčana insuficijencija.',
            'Brzo napredovanje egzoftalmusa, bol u oku, pad vida ili dvoslike: hitno oftalmolog.',
            'Trudnoća uz tireotoksikozu: hitno endokrinolog i ginekolog.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Svaka novootkrivena manifestna hipertireoza: endokrinolog radi utvrđivanja uzroka i izbora lečenja (tireostatik, radiojod, operacija).',
            'Trajno suprimiran TSH uz normalne hormone, posebno kod starijih, uz srčanu bolest ili osteoporozu.',
            'Čvor ili velika struma sa kompresivnim tegobama.',
            'Poremećaj funkcije štitaste žlezde na amjodaronu: endokrinolog i kardiolog zajedno.',
            'Recidiv posle prekida tireostatika.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Pacijentu sa novom atrijalnom fibrilacijom ili neobjašnjivim gubitkom telesne mase odredi TSH.',
            'Kod tireoiditisa tireostatici ne pomažu jer se hormon oslobađa iz oštećenog tkiva; leče se simptomi, a kasnije može nastati prolazna hipotireoza.',
            'Pacijentu na tireostatiku daj pisano uputstvo: pri temperaturi, gušobolji ili aftama prekinuti lek i isti dan uraditi krvnu sliku.',
            'Pušenje pogoršava Grejvsovu orbitopatiju: prestanak je deo lečenja.',
            'Rutinske kontrole krvne slike i jetrenih proba tokom terapije tireostatikom ne predviđaju agranulocitozu; važno je uputstvo pacijentu.'
          ]
        }
      ],
      sources: [
        { name: 'ETA 2018 – Management of Graves hyperthyroidism', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6140607/' },
        { name: 'DailyMed (FDA) – metimazol, uputstvo za lek', url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/f69edfa9-0efb-4fe8-aeab-50f7baeebb6a.xml' }
      ],
      questions: [
        {
          q: 'Muškarac, 44 god., šest nedelja na tiamazolu zbog Grejvsove bolesti, javlja se sa temperaturom 38,6 °C i jakom gušoboljom od sinoć. Šta radiš?',
          options: [
            'Propisuješ antibiotik i nastavlja tiamazol',
            'Smanjuješ dozu tiamazola na pola i kontrola za sedam dana',
            'Obustavljaš tiamazol i odmah radiš krvnu sliku sa leukocitarnom formulom',
            'Dodaješ paracetamol i zakazuješ redovnu kontrolu kod endokrinologa'
          ],
          answer: 2,
          explain: 'Temperatura i gušobolja na tireostatiku su agranulocitoza dok se ne dokaže suprotno. Lek se odmah obustavlja i radi se krvna slika sa formulom; ako se agranulocitoza potvrdi, potrebno je bolničko lečenje.'
        },
        {
          q: 'Žena, 35 god., tri meseca palpitacije, tremor, gubitak 5 kg, znojenje. Puls 112/min, ritmičan, difuzna struma. TSH suprimiran, fT4 dvostruko povišen. Bez astme. Šta radiš u ambulanti?',
          options: [
            'Čekaš pregled endokrinologa bez terapije',
            'Uvodiš beta-blokator i upućuješ endokrinologu sa nalazima',
            'Uvodiš levotiroksin 25 µg da smiriš žlezdu',
            'Upućuješ na hitnu tireoidektomiju'
          ],
          answer: 1,
          explain: 'Beta-blokator (propranolol ili dugodelujući kao bisoprolol) ublažava adrenergičke simptome i može se uvesti pre utvrđivanja uzroka. Etiologiju i definitivno lečenje određuje endokrinolog.'
        },
        {
          q: 'Žena, 41 god., dve nedelje posle virusne infekcije ima bol u prednjem delu vrata koji se širi ka uhu, temperaturu 37,9 °C i palpitacije. Štitasta žlezda bolna na dodir. TSH nizak, fT4 povišen, sedimentacija 72 mm/h. Terapija?',
          options: [
            'Tiamazol 30 mg dnevno',
            'Antibiotik širokog spektra deset dana',
            'Radioaktivni jod',
            'Lek protiv bola i zapaljenja i beta-blokator za palpitacije'
          ],
          answer: 3,
          explain: 'Ovo je slika subakutnog tireoiditisa: hormon se oslobađa iz oštećenih folikula, pa tireostatici ne deluju. Leče se bol i simptomi, a kasnije treba kontrolisati TSH zbog prolazne hipotireoze.'
        }
      ]
    },
    {
      id: 'gojaznost',
      title: 'Gojaznost i metabolički sindrom',
      summary: 'Gojaznost je hronična bolest: izmeri BMI i obim struka, potraži komplikacije i dogovori realan cilj mršavljenja.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Gojaznost je hronična bolest i faktor rizika za dijabetes, kardiovaskularne bolesti, masnu jetru i apneju u snu. Realan cilj je **gubitak 5–15% telesne mase za 6 meseci**, koji već popravlja pritisak, glikemiju i lipide. Lečenje je stepenasto: promena načina života, zatim lekovi, zatim barijatrijska hirurgija.'
        },
        {
          type: 'list',
          title: 'Procena',
          items: [
            'BMI: 25–29,9 prekomerna telesna masa; 30–34,9 gojaznost I stepena; 35–39,9 II stepena; ≥40 III stepena.',
            'Obim struka: centralna gojaznost kod Evropljana **≥94 cm muškarci, ≥80 cm žene**.',
            'Metabolički sindrom (IDF): centralna gojaznost i još najmanje dva od četiri kriterijuma.',
            'Kriterijumi: trigliceridi ≥1,7 mmol/l; HDL <1,03 mmol/l (muškarci) ili <1,29 mmol/l (žene), ili lečenje tih poremećaja.',
            'Kriterijumi: pritisak ≥130/85 mmHg ili lečena hipertenzija; glikemija našte ≥5,6 mmol/l ili poznat dijabetes tip 2.',
            'Obrada: pritisak, glikemija našte, lipidi, mokraćna kiselina, TSH, jetrene probe; pitaj za hrkanje i dnevnu pospanost.',
            'Misli na sekundarne uzroke i lekove koji povećavaju telesnu masu (kortikosteroidi, neki psihofarmaci, insulin, sulfonilureja).'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Razgovor bez osuđivanja, sa fokusom na zdravlje, ne na izgled.',
            'Dogovori realan cilj: 5–15% početne telesne mase za 6 meseci, zatim održavanje.',
            'Ishrana: dnevni energetski deficit od oko 600 kcal daje gubitak od oko 0,5 kg nedeljno.',
            'Aktivnost: najmanje 150 minuta umerene aerobne aktivnosti nedeljno, uz vežbe snage.',
            'San, stres, alkohol i zaslađeni napici; dnevnik ishrane i redovno merenje.',
            'Bez dovoljnog efekta: razmotri farmakoterapiju; efekat leka proceni posle 3 meseca.',
            'Leči komorbiditete nezavisno od uspeha mršavljenja: pritisak, lipidi, glikemija, apneja u snu.'
          ]
        },
        {
          type: 'drugs',
          title: 'Farmakoterapija',
          items: [
            { name: 'orlistat', dose: '120 mg p.o. 3× dnevno, neposredno pre, tokom ili do sat vremena posle glavnog obroka', note: 'Masne stolice, flatulencija; razmotriti multivitamin. Prekinuti ako posle 12 nedelja nije izgubljeno najmanje 5% telesne mase.' },
            { name: 'liraglutid 3,0 mg', dose: 'početno 0,6 mg s.c. 1× dnevno; povećavati za 0,6 mg u razmacima od najmanje nedelju dana do 3,0 mg', note: 'Mučnina, povraćanje. Prekinuti ako posle 12 nedelja na 3,0 mg nije izgubljeno najmanje 5% početne telesne mase.' },
            { name: 'semaglutid 2,4 mg', dose: 's.c. 1× nedeljno: 0,25 mg (1–4. ned.), 0,5 mg (5–8.), 1 mg (9–12.), 1,7 mg (13–16.), zatim 2,4 mg', note: 'Iste mere opreza kao za liraglutid.' }
          ]
        },
        {
          type: 'list',
          title: 'Indikacije za lekove i hirurgiju',
          items: [
            'Lekovi (uz promenu načina života): BMI ≥30, ili BMI ≥27 uz bolest povezanu sa gojaznošću (za orlistat prag je BMI ≥28 uz faktore rizika).',
            'Barijatrijska hirurgija: BMI ≥40, ili BMI 35–39,9 uz komorbiditete.',
            'Kod BMI 30–35 uz dijabetes tip 2 hirurgija se razmatra pojedinačno.',
            'Kod gojaznih sa dijabetesom tip 2 biraj antidijabetike koji smanjuju telesnu masu.',
            'Dostupnost i uslovi propisivanja lekova za gojaznost zavise od važećih pravila RFZO; proveri pre preporuke.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'BMI ≥40, ili 35–39,9 sa komorbiditetima, radi procene za barijatrijsku hirurgiju.',
            'Sumnja na endokrini uzrok: ljubičaste strije, proksimalna slabost, lako stvaranje modrica, hirzutizam, poremećaj ciklusa.',
            'Sumnja na apneju u snu: glasno hrkanje, prekidi disanja, dnevna pospanost.',
            'Povišene jetrene probe ili znaci masne jetre: gastroenterolog ili hepatolog.',
            'Poremećaj ishrane ili depresija: psihijatar ili psiholog.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Obim struka otkriva visok rizik i kod osoba sa normalnim ili blago povišenim BMI.',
            'Metabolički sindrom nije dijagnoza za jedan lek: leči se svaka komponenta posebno i telesna masa kao zajednički uzrok.',
            'Glikemija našte ≥5,6 mmol/l kod osobe sa centralnom gojaznošću traži dalju proveru (OGTT).',
            'Posle barijatrijske operacije potrebno je trajno praćenje i nadoknada vitamina i minerala.',
            'Lekovi za gojaznost se ne koriste u trudnoći.'
          ]
        }
      ],
      sources: [
        { name: 'EASO 2015 – European guidelines for obesity management in adults', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5644856/' },
        { name: 'IDF – Consensus worldwide definition of the metabolic syndrome', url: 'https://idf.org/media/uploads/2023/05/attachments-30.pdf' },
        { name: 'EMA – Wegovy, sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/wegovy-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 48 god., BMI 29, obim struka 106 cm, pritisak 138/88 mmHg, trigliceridi 2,1 mmol/l, HDL 1,1 mmol/l, glikemija našte 5,4 mmol/l. Kako tumačiš nalaze?',
          options: [
            'Ima metabolički sindrom (struk, pritisak, trigliceridi): potrebna je promena načina života i procena ukupnog rizika',
            'Nema metabolički sindrom jer je BMI ispod 30',
            'Nema metabolički sindrom jer je glikemija normalna',
            'Ima metabolički sindrom i treba odmah uvesti metformin'
          ],
          answer: 0,
          explain: 'Centralna gojaznost (struk ≥94 cm) uz još dva kriterijuma, ovde pritisak ≥130/85 mmHg i trigliceride ≥1,7 mmol/l, ispunjava definiciju. BMI nije kriterijum. Osnova lečenja su smanjenje telesne mase i lečenje pojedinačnih komponenti.'
        },
        {
          q: 'Žena, 39 god., 98 kg, BMI 34, bez komorbiditeta, želi da smrša 30 kg za tri meseca. Koji cilj predlažeš?',
          options: [
            'Podržati cilj od 30 kg uz dijetu od 800 kcal dnevno',
            'Reći da cilj nije potreban dok nema komorbiditeta',
            'Gubitak 5–15% telesne mase (oko 5–15 kg) za šest meseci',
            'Odmah uputiti na barijatrijsku hirurgiju'
          ],
          answer: 2,
          explain: 'Realan cilj je 5–15% početne mase za šest meseci, uz dnevni deficit od oko 600 kcal. Nerealni ciljevi i drastične dijete vode u odustajanje. BMI 34 bez komorbiditeta nije indikacija za operaciju.'
        },
        {
          q: 'Muškarac, 46 god., BMI 42, dijabetes tip 2, hipertenzija i opstruktivna apneja u snu. Dve godine pokušava dijetom i vežbanjem, uz minimalan efekat. Šta predlažeš?',
          options: [
            'Nastaviti isti režim još godinu dana',
            'Uputiti na procenu za barijatrijsku hirurgiju uz nastavak lečenja komorbiditeta',
            'Uvesti diuretik radi smanjenja telesne mase',
            'Preporučiti preparate za mršavljenje iz slobodne prodaje'
          ],
          answer: 1,
          explain: 'BMI ≥40, ili 35–39,9 uz komorbiditete, je indikacija za razmatranje barijatrijske hirurgije kada konzervativno lečenje ne uspe. Lečenje komorbiditeta se nastavlja uporedo.'
        }
      ]
    },
    {
      id: 'giht',
      title: 'Giht i hiperurikemija',
      summary: 'Akutni napad leči rano i kratko; dugoročno snižavaj urate do cilja postepenom titracijom alopurinola.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Giht je artritis izazvan kristalima mononatrijum-urata i dobro se kontroliše ako se urati trajno drže ispod ciljne vrednosti. Lečenje ima dva dela: **brzo smirivanje napada** i **dugoročno snižavanje urata do cilja**. Najčešće greške su prekid alopurinola tokom napada i trajno ostajanje na početnoj dozi.'
        },
        {
          type: 'list',
          title: 'Klinička slika i dijagnoza',
          items: [
            'Nagli, vrlo jak bol, otok i crvenilo jednog zgloba, najčešće osnovnog zgloba palca stopala; često počinje noću.',
            'Drugi zglobovi: stopalo, skočni zglob, koleno, ručni zglob, lakat.',
            'Okidači: alkohol, obilan obrok bogat purinima, dehidracija, operacija, diuretik.',
            'Mokraćna kiselina tokom napada može biti normalna: ponovi je posle smirivanja napada.',
            'Zlatni standard je nalaz kristala u punktatu zgloba; u tipičnoj slici dijagnoza je klinička.',
            'Tofusi i bubrežni kamenci ukazuju na dugotrajnu bolest.',
            'Proveri eGFR, pritisak, glikemiju i lipide: giht često ide uz metabolički sindrom i bubrežnu bolest.'
          ]
        },
        {
          type: 'drugs',
          title: 'Akutni napad',
          items: [
            { name: 'kolhicin (mala doza)', dose: '1 mg p.o. na prvi znak napada, zatim 0,5 mg posle 1 sata; ne više tog dana', note: 'Odgovara režimu iz uputstva za tablete od 0,6 mg (1,2 mg pa 0,6 mg). Veće doze nisu efikasnije. Manja doza kod bubrežne i jetrene insuficijencije; opasne interakcije sa jakim inhibitorima CYP3A4 i P-gp.' },
            { name: 'naproksen', dose: '500 mg p.o. 2× dnevno dok napad ne prođe', note: 'Ili drugi NSAIL u punoj dozi. Izbegavati kod bubrežne bolesti, srčane insuficijencije, ulkusa i uz antikoagulanse.' },
            { name: 'prednizon', dose: 'p.o. 1× dnevno, kratak kurs od nekoliko dana (doza prema težini napada i komorbiditetima)', note: 'Kada su NSAIL i kolhicin kontraindikovani. Kod dijabetičara pratiti glikemiju.' }
          ]
        },
        {
          type: 'steps',
          title: 'Dugoročno snižavanje urata',
          items: [
            'Jasne indikacije: tofusi, radiografsko oštećenje zglobova, česti napadi (dva ili više godišnje).',
            'Razmotriti već posle prvog napada kod hronične bubrežne bolesti stadijuma 3 i više, vrlo visokih urata ili bubrežnih kamenaca.',
            'Alopurinol je prvi izbor, i kod hronične bubrežne bolesti: početi malom dozom i postepeno povećavati uz kontrolu urata.',
            'Cilj: mokraćna kiselina **<360 µmol/l** (6 mg/dl); kod teškog gihta sa tofusima niži cilj (<300 µmol/l).',
            'Uz početak terapije dati profilaksu napada tokom najmanje 3–6 meseci.',
            'Kada se postigne cilj: periodična kontrola urata i bubrežne funkcije; terapija je dugotrajna.',
            'Preispitaj lekove: hidrohlortiazid zameni drugim antihipertenzivom kada je moguće; losartan je dobar izbor.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi za snižavanje urata i profilaksu',
          items: [
            { name: 'alopurinol', dose: 'početno 100 mg p.o. 1× dnevno; povećavati postepeno za 100 mg do ciljnih urata (najviše 800 mg dnevno)', note: 'Kod snižene bubrežne funkcije početi sa 50 mg i sporije titrirati. **Osip: odmah prekinuti.** Ne daje se za asimptomatsku hiperurikemiju.' },
            { name: 'febuksostat', dose: '80 mg p.o. 1× dnevno; ako su urati posle 2–4 nedelje i dalje >357 µmol/l, 120 mg', note: 'Kod nepodnošenja ili neuspeha alopurinola. Oprez kod postojeće teške kardiovaskularne bolesti.' },
            { name: 'kolhicin (profilaksa)', dose: '0,5 mg p.o. 1–2× dnevno, prvih 3–6 meseci terapije', note: 'Sprečava napade izazvane promenom nivoa urata na početku lečenja.' }
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Hitno: sumnja na septički artritis (temperatura, opšte loše stanje, imunosupresija, veštački zglob) radi punkcije.',
            'Nejasna dijagnoza, atipična lokalizacija ili poliartikularni oblik: reumatolog.',
            'Cilj nije postignut uprkos najvišoj podnošljivoj dozi alopurinola.',
            'Teška reakcija na alopurinol (osip sa temperaturom, zahvatanje sluzokoža): hitno u bolnicu.',
            'Giht u mladosti, kod žena pre menopauze ili u trudnoći.',
            'Teška bubrežna insuficijencija uz potrebu za terapijom, ponavljani bubrežni kamenci.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Alopurinol se **ne prekida** tokom napada; napad se leči uz nastavak iste doze.',
            'Asimptomatska hiperurikemija se ne leči lekovima: savet o ishrani, alkoholu, telesnoj masi i reviziji lekova.',
            'Napadi u prvim mesecima terapije su očekivani i ne znače neuspeh; zato je potrebna profilaksa.',
            'Početna doza alopurinola retko postiže cilj: leči se prema vrednosti urata, ne prema fiksnoj dozi.',
            'Savet o ishrani: manje alkohola, purina i napitaka zaslađenih fruktozom.',
            'Topao, crven zglob uz temperaturu je septički artritis dok se ne dokaže suprotno, i kod pacijenta sa poznatim gihtom.'
          ]
        }
      ],
      sources: [
        { name: 'ACR 2020 – Guideline for the management of gout', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/' },
        { name: 'DailyMed (FDA) – kolhicin, uputstvo za lek', url: 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/5a0b4246-e7dd-29e5-e063-6294a90a2871.xml' },
        { name: 'EMA – Adenuric (febuksostat), sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/adenuric-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Muškarac, 52 god., probudio se pre osam sati sa jakim bolom, otokom i crvenilom osnovnog zgloba desnog palca stopala. Afebrilan, eGFR 85, bez drugih lekova. Šta propisuješ?',
          options: [
            'Alopurinol 300 mg odmah, bez leka protiv zapaljenja',
            'Kolhicin na svaka dva sata do pojave proliva',
            'Antibiotik zbog sumnje na infekciju',
            'Kolhicin u maloj dozi: 1 mg odmah, zatim 0,5 mg posle jednog sata'
          ],
          answer: 3,
          explain: 'Napad se leči kolhicinom u maloj dozi, NSAIL ili kortikosteroidom. Mala doza kolhicina je jednako efikasna kao stari režimi sa visokim dozama, uz manje neželjenih dejstava. Alopurinol sam ne leči napad.'
        },
        {
          q: 'Pacijent uzima alopurinol 300 mg šest meseci i dobija novi napad u kolenu. Pita da li da prekine alopurinol dok napad ne prođe. Šta savetuješ?',
          options: [
            'Nastaviti alopurinol u istoj dozi i lečiti napad kolhicinom ili NSAIL',
            'Prekinuti alopurinol do potpunog smirivanja pa ga ponovo uvesti',
            'Udvostručiti dozu alopurinola tokom napada',
            'Trajno zameniti alopurinol kolhicinom'
          ],
          answer: 0,
          explain: 'Terapija za snižavanje urata se nastavlja tokom napada, a napad se leči protivupalnim lekom. Posle napada se proveravaju urati i po potrebi povećava doza do cilja.'
        },
        {
          q: 'Muškarac, 45 god., bez tegoba, nikada nije imao artritis ni kamence. Na sistematskom pregledu mokraćna kiselina 480 µmol/l, eGFR 92. Postupak?',
          options: [
            'Alopurinol 100 mg dnevno doživotno',
            'Kolhicin 0,5 mg dnevno kao prevencija',
            'Bez lekova: savet o ishrani, alkoholu i telesnoj masi, provera kardiometaboličkih faktora rizika',
            'Febuksostat 80 mg dnevno'
          ],
          answer: 2,
          explain: 'Asimptomatska hiperurikemija nije indikacija za lekove koji snižavaju urate. Nalaz je povod da se provere pritisak, glikemija, lipidi i lekovi koji podižu urate.'
        }
      ]
    },
    {
      id: 'anemije',
      title: 'Anemije u primarnoj zaštiti',
      summary: 'Kreni od MCV i feritina; sideropenijska anemija nije dijagnoza dok se ne nađe uzrok gubitka gvožđa.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Anemija je hemoglobin **<130 g/l kod muškaraca, <120 g/l kod žena i <110 g/l kod trudnica**. Ona je znak, a ne dijagnoza: uvek se traži uzrok. Prvi koraci su MCV, retikulociti i feritin. Kod muškaraca i žena u postmenopauzi sideropenijska anemija znači gubitak krvi iz digestivnog trakta dok se ne dokaže suprotno.'
        },
        {
          type: 'list',
          title: 'Pristup po MCV',
          items: [
            '**Mikrocitna (nizak MCV)**: manjak gvožđa, talasemija minor, anemija hronične bolesti.',
            '**Normocitna**: anemija hronične bolesti, bubrežna bolest, akutno krvarenje, hemoliza, rani manjak gvožđa, bolesti kostne srži.',
            '**Makrocitna (visok MCV)**: manjak B12 ili folata, alkohol, bolest jetre, hipotireoza, lekovi, mijelodisplazija, retikulocitoza.',
            'Osnovni nalazi: krvna slika sa leukocitarnom formulom, retikulociti, feritin, CRP, kreatinin; zatim B12, folat, TSH, jetrene probe prema MCV.',
            'Hemoliza: povišeni retikulociti, LDH i indirektni bilirubin, snižen haptoglobin.',
            'Mikrocitoza uz normalan feritin: misli na talasemiju minor (elektroforeza hemoglobina); gvožđe ne davati bez dokazanog manjka.'
          ]
        },
        {
          type: 'list',
          title: 'Sideropenijska anemija: dijagnoza i uzrok',
          items: [
            'Feritin **<15 µg/l** znači prazne rezerve gvožđa; kao prag za manjak gvožđa preporučuje se **<45 µg/l**.',
            'Uz zapaljenje feritin može biti viši i pored manjka gvožđa (vrednost iznad 150 µg/l ga čini malo verovatnim); pomaže saturacija transferina.',
            'Muškarci i žene u postmenopauzi: **gastroskopija i kolonoskopija** su prva linija ispitivanja.',
            'Žene u reproduktivnom dobu: najčešći uzrok su menstruacije; endoskopija prema tegobama, porodičnoj anamnezi i odgovoru na terapiju.',
            'Serološki test na celijakiju svima sa sideropenijskom anemijom.',
            'Pitaj za NSAIL, acetilsalicilnu kiselinu, antikoagulanse, ishranu, davanje krvi, operacije želuca i creva.',
            'Test na okultno krvarenje u stolici ne zamenjuje endoskopiju.'
          ]
        },
        {
          type: 'drugs',
          title: 'Terapija',
          items: [
            { name: 'gvožđe p.o. (fero-sulfat, fero-fumarat, fero-glukonat)', dose: '50–100 mg elementarnog gvožđa p.o. 1× dnevno, našte; ako se ne podnosi, jedna tableta svaki drugi dan', note: 'Jedna tableta dnevno je dovoljna. Stolica postaje tamna. Ne uzimati u isto vreme sa levotiroksinom.' },
            { name: 'vitamin B12', dose: 'i.m.: u početku češće doze, zatim održavanje u dužim razmacima, prema uputstvu preparata', note: 'Kod neuroloških simptoma lečenje ne odlagati i uključiti specijalistu. Oralna nadoknada u visokim dozama dolazi u obzir kada uzrok nije malapsorpcija.' },
            { name: 'folna kiselina', dose: 'p.o. 1× dnevno, doza prema uputstvu preparata', note: '**Pre uvođenja isključiti manjak B12**: folat popravlja krvnu sliku, a neurološko oštećenje može da napreduje.' }
          ]
        },
        {
          type: 'steps',
          title: 'Praćenje odgovora',
          items: [
            'Krvnu sliku kontroliši u prve 4 nedelje: porast hemoglobina od najmanje 10 g/l za 2 nedelje govori u prilog manjku gvožđa i dobrom odgovoru.',
            'Nastavi gvožđe još oko **3 meseca posle normalizacije hemoglobina** da se popune rezerve.',
            'Zatim krvna slika na 3 meseca tokom prve godine, potom na 6 meseci još 2–3 godine.',
            'Izostanak odgovora: proveri uzimanje, malapsorpciju, nastavak krvarenja, pogrešnu dijagnozu.',
            'Parenteralno gvožđe (sekundarni nivo) kada je oralno kontraindikovano, neefikasno ili se ne podnosi.',
            'Dugotrajna terapija metforminom je razlog za povremenu proveru vitamina B12.'
          ]
        },
        {
          type: 'flags',
          title: 'Crvene zastavice',
          items: [
            'Teška anemija ili simptomi (dispneja u miru, angina, sinkopa, tahikardija): hitno u bolnicu radi procene za transfuziju.',
            'Melena, hematemeza, hematohezija ili znaci akutnog krvarenja.',
            'Pancitopenija ili anemija uz leukopeniju, trombocitopeniju ili nezrele ćelije u razmazu.',
            'Znaci hemolize: žutica, taman urin, splenomegalija.',
            'Gubitak telesne mase, noćno znojenje, limfadenopatija, promena pražnjenja creva, disfagija.',
            'Neurološki ispadi uz makrocitozu: parestezije, ataksija, poremećaj pamćenja.'
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Gastroenterolog: sideropenijska anemija kod muškaraca i žena u postmenopauzi; pozitivna serologija na celijakiju.',
            'Ginekolog: obilne ili neuredne menstruacije, krvarenje u postmenopauzi.',
            'Hematolog: neobjašnjena anemija, zahvaćeno više loza, sumnja na hemolizu, mijelodisplaziju ili hemoglobinopatiju.',
            'Nefrolog: anemija uz uznapredovalu bubrežnu bolest.',
            'Izostanak odgovora na pravilno sprovedenu terapiju posle 4 nedelje.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Gvožđe se ne daje naslepo: prvo feritin, pa uzrok, pa terapija.',
            'Normalan MCV ne isključuje manjak gvožđa ni B12: kombinovani manjak može dati normocitnu sliku.',
            'Feritin je reaktant akutne faze: uz povišen CRP normalna vrednost ne isključuje manjak gvožđa.',
            'Više tableta gvožđa dnevno ne ubrzava oporavak, a povećava neželjena dejstva.',
            'Kod starijih se anemija ne prihvata kao posledica godina: uvek ima uzrok.'
          ]
        }
      ],
      sources: [
        { name: 'BSG 2021 – Guidelines for the management of iron deficiency anaemia in adults', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8515119/' }
      ],
      questions: [
        {
          q: 'Muškarac, 63 god., umor dva meseca, bez digestivnih tegoba i vidljivog krvarenja. Hb 98 g/l, MCV 72 fl, feritin 8 µg/l. Šta je ključni sledeći korak?',
          options: [
            'Gvožđe p.o. tri meseca pa kontrola krvne slike',
            'Uputiti na gastroskopiju i kolonoskopiju uz početak nadoknade gvožđa',
            'Test na okultno krvarenje; ako je negativan, samo gvožđe',
            'Vitamin B12 i folna kiselina'
          ],
          answer: 1,
          explain: 'Kod muškaraca i žena u postmenopauzi sa novootkrivenom sideropenijskom anemijom gastroskopija i kolonoskopija su prva linija ispitivanja, i bez simptoma. Test na okultno krvarenje ih ne zamenjuje. Gvožđe se uvodi uporedo.'
        },
        {
          q: 'Žena, 28 god., obilne menstruacije, Hb 104 g/l, feritin 6 µg/l. Mesec dana uzima gvožđe tri puta dnevno uz obroke, ima mučninu i opstipaciju, Hb nepromenjen. Šta menjaš?',
          options: [
            'Povećavaš na četiri tablete dnevno',
            'Prekidaš gvožđe i daješ samo folnu kiselinu',
            'Odmah upućuješ na transfuziju eritrocita',
            'Jedna tableta dnevno našte, ili svaki drugi dan ako se ne podnosi; uputiti ginekologu'
          ],
          answer: 3,
          explain: 'Preporučena početna terapija je jedna tableta dnevno (50–100 mg elementarnog gvožđa) našte, a pri nepodnošenju jedna tableta svaki drugi dan. Više doza dnevno donosi više neželjenih dejstava. Uzrok gubitka krvi treba lečiti.'
        },
        {
          q: 'Žena, 71 god., na metforminu deset godina, ima trnjenje stopala i nesiguran hod. Hb 96 g/l, MCV 118 fl. Šta je ispravan redosled?',
          options: [
            'Odrediti B12 i folat, pa nadoknaditi B12 pre ili uz folat',
            'Odmah uvesti folnu kiselinu, a B12 proveriti kasnije',
            'Uvesti gvožđe p.o. i kontrolisati za mesec dana',
            'Zaključiti da je dijabetesna neuropatija i ne ispitivati dalje'
          ],
          answer: 0,
          explain: 'Makrocitna anemija sa neurološkim simptomima je manjak B12 dok se ne dokaže suprotno, a dugotrajna terapija metforminom je faktor rizika. Folna kiselina data sama popravlja krvnu sliku, dok neurološko oštećenje može da napreduje.'
        },
        {
          q: 'Muškarac, 78 god., sa koronarnom bolešću, dolazi zbog malaksalosti i gušenja pri oblačenju. Bled, puls 112/min, TA 100/60 mmHg. Hb iz jučerašnjeg nalaza 62 g/l, navodi crne stolice. Postupak?',
          options: [
            'Gvožđe p.o. i kontrola krvne slike za dve nedelje',
            'Uput za ambulantnu gastroskopiju redovnim putem',
            'Hitan transport u bolnicu preko SHMP',
            'Vitamin B12 i.m. i kontrola sutra'
          ],
          answer: 2,
          explain: 'Simptomatska teška anemija uz melenu, tahikardiju i hipotenziju kod koronarnog bolesnika je hitno stanje: potrebni su bolnička procena za transfuziju, hemodinamska stabilizacija i hitna endoskopija.'
        }
      ]
    },
    {
      id: 'osteoporoza',
      title: 'Osteoporoza',
      summary: 'Nađi pacijente sa visokim rizikom od preloma, potvrdi DXA nalazom i leči bisfosfonatom uz kalcijum i vitamin D.',
      urgent: false,
      sections: [
        {
          type: 'text',
          title: 'Ukratko',
          body: 'Osteoporoza je tiha do prvog preloma. Cilj je sprečiti prelome kuka i pršljenova. **Prelom pršljena ili kuka na malu traumu posle 50. godine znači osteoporozu** i bez nalaza denzitometrije. Prva linija lečenja su bisfosfonati uz dovoljan unos kalcijuma i vitamina D i prevenciju padova.'
        },
        {
          type: 'list',
          title: 'Koga testirati (DXA)',
          items: [
            'Žene ≥65 godina i muškarci ≥70 godina.',
            'Žene u postmenopauzi i muškarci 50–69 godina, prema faktorima rizika.',
            'Odrasli sa prelomom posle 50. godine.',
            'Glukokortikoidi: prednizon ≥5 mg dnevno (ili ekvivalent) tri meseca ili duže.',
            'Faktori rizika: prelom kuka kod roditelja, niska telesna masa, pušenje, alkohol, rana menopauza, bolesti i lekovi koji smanjuju koštanu masu.',
            'Smanjenje telesne visine od 4 cm ili više, ili kifoza: snimanje kičme zbog nemih preloma pršljenova.'
          ]
        },
        {
          type: 'list',
          title: 'Dijagnoza i procena rizika',
          items: [
            'DXA: **T-skor ≤ −2,5** osteoporoza; između −1,0 i −2,5 smanjena koštana masa (osteopenija).',
            'Prelom pršljena kod odrasle osobe starije od 50 godina dovoljan je za dijagnozu i bez DXA.',
            'FRAX: 10-godišnja verovatnoća velikog osteoporotičnog preloma i preloma kuka; pomaže u odluci o lečenju kod osteopenije.',
            'Pragovi za lečenje po FRAX-u zavise od zemlje i uzrasta: koristi kalkulator i preporuke koje važe za tvoju populaciju.',
            'Laboratorija za sekundarne uzroke: krvna slika, kalcijum, fosfat, alkalna fosfataza, kreatinin, TSH, 25-OH vitamin D; ostalo po indikaciji.'
          ]
        },
        {
          type: 'steps',
          title: 'Postupak',
          items: [
            'Proceni rizik od pada: lekovi, vid, ortostatska hipotenzija, bezbednost u kući, obuća.',
            'Vežbe sa opterećenjem i vežbe ravnoteže; prestanak pušenja, ograničenje alkohola.',
            'Kalcijum ukupno **1000–1200 mg dnevno** (hrana i suplement zajedno) i vitamin D **800–1000 IJ dnevno**.',
            'Pre bisfosfonata koriguj hipokalcemiju i manjak vitamina D, proveri bubrežnu funkciju i stanje zuba.',
            'Uvedi bisfosfonat i detaljno objasni način uzimanja; proveravaj pridržavanje.',
            'DXA kontrola 1–2 godine posle početka ili promene terapije.',
            'Posle 5 godina oralnog (3 godine i.v.) bisfosfonata ponovo proceni rizik: nastavak kod visokog rizika, pauza kod nižeg.'
          ]
        },
        {
          type: 'drugs',
          title: 'Lekovi',
          items: [
            { name: 'alendronat', dose: '70 mg p.o. 1× nedeljno', note: 'Ujutru našte, sa punom čašom obične vode, najmanje 30 min pre prvog obroka, pića ili leka; ne ležati najmanje 30 min. Ne preporučuje se pri klirensu kreatinina <35 ml/min.' },
            { name: 'risedronat', dose: '35 mg p.o. 1× nedeljno', note: 'Sličan način uzimanja. Ne preporučuje se pri klirensu kreatinina <30 ml/min.' },
            { name: 'ibandronat', dose: '150 mg p.o. 1× mesečno', note: 'Posle noćnog gladovanja, 1 sat pre prvog obroka; ne ležati 1 sat. Nije dokazano da smanjuje nevertebralne prelome.' },
            { name: 'zoledronska kiselina', dose: '5 mg i.v. infuzija 1× godišnje (sekundarni nivo)', note: 'Kontraindikovana pri klirensu kreatinina <35 ml/min.' },
            { name: 'denosumab', dose: '60 mg s.c. na 6 meseci', note: '**Ne prekidati i ne odlagati dozu** bez plana za nastavak drugim lekom: posle prekida koštana gustina brzo opada i raste rizik od preloma pršljenova.' }
          ]
        },
        {
          type: 'refer',
          title: 'Kada uputiti',
          items: [
            'Veoma visok rizik (skorašnji prelom pršljena ili kuka, više preloma): procena za anaboličku terapiju.',
            'Prelom ili značajan gubitak koštane mase uprkos redovnoj terapiji.',
            'Osteoporoza kod mlađih muškaraca i kod žena pre menopauze: traži sekundarni uzrok.',
            'Patološki laboratorijski nalazi koji ukazuju na sekundarni uzrok (npr. hiperkalcemija).',
            'Snižena bubrežna funkcija ili nepodnošenje oralnih bisfosfonata.',
            'Akutni prelom pršljena sa jakim bolom ili neurološkim ispadom; sumnja na prelom kuka: hitno ortoped.'
          ]
        },
        {
          type: 'pearls',
          title: 'Zapamti',
          items: [
            'Rizik od novog preloma je najveći neposredno posle prvog: lečenje ne odlagati.',
            'Neplaniran prekid denosumaba povećava rizik od preloma pršljenova; uvek planiraj nastavak drugim lekom.',
            'Retke komplikacije dugotrajne terapije bisfosfonatima: osteonekroza vilice i atipični prelom femura (nov bol u butini, kuku ili preponi treba prijaviti).',
            'Kalcijum i vitamin D sami nisu lečenje osteoporoze: oni su uslov da lek deluje.',
            'Pitaj na svakoj kontroli da li pacijent zaista uzima bisfosfonat i kako.'
          ]
        }
      ],
      sources: [
        { name: 'BHOF 2022 – Clinician guide to prevention and treatment of osteoporosis', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9546973/' },
        { name: 'NOGG 2022 – UK guideline for prevention and treatment of osteoporosis', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8979902/' },
        { name: 'EMA – Prolia (denosumab), sažetak karakteristika leka', url: 'https://www.ema.europa.eu/en/documents/product-information/prolia-epar-product-information_en.pdf' }
      ],
      questions: [
        {
          q: 'Žena, 68 god., posle podizanja saksije dobila je jak bol u leđima; RTG pokazuje kompresivni prelom pršljena L1. DXA: T-skor kuka −1,9. Kako postupaš?',
          options: [
            'Osteopenija, dovoljni su kalcijum i vitamin D',
            'Ponoviti DXA za dve godine pa odlučiti',
            'Klinička osteoporoza: uvesti lek protiv osteoporoze uz kalcijum i vitamin D',
            'Lečenje nije potrebno jer T-skor nije ispod −2,5'
          ],
          answer: 2,
          explain: 'Prelom pršljena kod osobe starije od 50 godina postavlja dijagnozu osteoporoze bez obzira na T-skor, a rizik od novog preloma je najveći neposredno posle prvog. Lečenje počinje odmah, uz isključivanje sekundarnih uzroka.'
        },
        {
          q: 'Pacijentkinji uvodiš alendronat 70 mg nedeljno. Koje uputstvo je ispravno?',
          options: [
            'Ujutru našte sa punom čašom vode, zatim najmanje 30 minuta ostati uspravna i ne jesti',
            'Uveče pred spavanje uz čašu mleka',
            'Uz doručak, zajedno sa kalcijumom radi bolje resorpcije',
            'Bilo kada tokom dana, sa sokom ili kafom'
          ],
          answer: 0,
          explain: 'Alendronat se uzima sa običnom vodom najmanje 30 minuta pre prvog obroka, pića ili leka, a pacijent ne sme da legne najmanje 30 minuta. Tako se obezbeđuje resorpcija i sprečava oštećenje jednjaka.'
        },
        {
          q: 'Žena, 74 god., tri godine prima denosumab 60 mg na šest meseci. Poslednju dozu je propustila pre četiri meseca jer se dobro oseća i želi da prekine terapiju. Šta savetuješ?',
          options: [
            'Prekid je bezbedan, DXA kontrola za dve godine',
            'Dati propuštenu dozu što pre, a prekid planirati samo uz nastavak drugim lekom',
            'Nastaviti samo kalcijum i vitamin D',
            'Sačekati još šest meseci pa odlučiti'
          ],
          answer: 1,
          explain: 'Posle prekida denosumaba koštana gustina brzo opada i raste rizik od preloma pršljenova. Neplaniran prekid treba izbeći: doza se ne odlaže, a pri prekidu se planira nastavak drugim lekom, prema preporuci specijaliste.'
        }
      ]
    }
  ],
  cases: [
    {
      id: 'endokrino-slucaj-1',
      title: 'Muškarac, 56 god., žeđ i učestalo mokrenje',
      intro: 'Ambulanta. Muškarac, 56 god., vozač, dolazi zbog žeđi, učestalog mokrenja i umora poslednja dva meseca; smršao je 2 kg. Otac je imao šećernu bolest. BMI 32, obim struka 110 cm, TA 152/94 mmHg, puls 80/min. Ne uzima lekove.',
      steps: [
        {
          q: 'Glikemija u ambulanti, tri sata posle obroka, iznosi 13,8 mmol/l. Kako postavljaš dijagnozu?',
          options: [
            'Potreban je OGTT pre bilo kakvog zaključka',
            'Nalaz nije dovoljan, ponoviti za tri meseca',
            'Slučajna glikemija ≥11,1 mmol/l uz klasične simptome: dijabetes; potvrditi laboratorijski i uraditi HbA1c',
            'Radi se o predijabetesu jer je glikemija ispod 14 mmol/l'
          ],
          answer: 2,
          explain: 'Slučajna glikemija ≥11,1 mmol/l uz klasične simptome hiperglikemije dovoljna je za dijagnozu. Vrednost treba potvrditi laboratorijski, a HbA1c daje polaznu tačku za praćenje. OGTT je ovde nepotreban.'
        },
        {
          q: 'Nalazi: glikemija našte 10,2 mmol/l, HbA1c 8,6%, LDL 3,9 mmol/l, eGFR 78, odnos albumin/kreatinin u urinu povišen u dva od tri uzorka. Ketona nema. Koja je početna terapija dijabetesa?',
          options: [
            'Metformin uz postepeno povećanje doze i SGLT2 inhibitor zbog albuminurije',
            'Samo dijeta tri meseca pa ponovna procena',
            'Gliklazid MR u najvišoj dozi odmah',
            'Bazal-bolus insulinska terapija'
          ],
          answer: 0,
          explain: 'Uz promenu načina života uvodi se metformin, a potvrđena albuminurija znači hroničnu bubrežnu bolest, kod koje se preporučuje SGLT2 inhibitor. Insulin nije neophodan bez katabolizma i pri HbA1c ispod 10%. Kod vozača je važno izbeći lekove koji izazivaju hipoglikemiju.'
        },
        {
          q: 'Kućni prosek pritiska je 148/92 mmHg. Šta još uvodiš zbog pritiska, bubrega i ukupnog rizika?',
          options: [
            'Amlodipin sam i kontrolu lipida za godinu dana',
            'Bisoprolol i fibrat',
            'Hidrohlortiazid sam i omega-3 masne kiseline',
            'ACE inhibitor ili sartan (uz drugi antihipertenziv po potrebi) i statin'
          ],
          answer: 3,
          explain: 'Kod dijabetesa sa albuminurijom i hipertenzijom ACE inhibitor ili sartan je obavezan deo terapije. Zbog kardiovaskularnog rizika indikovan je i statin. Kreatinin i kalijum se kontrolišu 7–14 dana posle uvođenja.'
        },
        {
          q: 'Šta od skrininga komplikacija treba uraditi sada, pri postavljanju dijagnoze?',
          options: [
            'Ništa prvih pet godina, kao kod tipa 1',
            'Pregled očnog dna i pregled stopala sa monofilamentom',
            'Samo EKG, ostalo posle deset godina bolesti',
            'CT koronarografiju i dopler karotida svima'
          ],
          answer: 1,
          explain: 'Kod dijabetesa tip 2 očno dno, neuropatija i bubrežna funkcija proveravaju se već pri dijagnozi, a zatim redovno. Kod tipa 1 skrining počinje oko pet godina od početka bolesti.'
        }
      ]
    },
    {
      id: 'endokrino-slucaj-2',
      title: 'Žena, 67 god., umor i bledilo',
      intro: 'Ambulanta. Žena, 67 god., žali se na umor i zamaranje pri hodu uzbrdo poslednja tri meseca. Zbog artroze kolena često uzima ibuprofen. Stolica je uredna, bez vidljive krvi, telesna masa stabilna. Bleda, TA 128/76 mmHg, puls 92/min, trbuh mek i bezbolan.',
      steps: [
        {
          q: 'Krvna slika: Hb 92 g/l, MCV 74 fl, leukociti i trombociti uredni. Koji nalaz tražiš sledeći?',
          options: [
            'Vitamin B12 i folat',
            'Feritin (uz CRP)',
            'Elektroforezu hemoglobina',
            'Punkciju kostne srži'
          ],
          answer: 1,
          explain: 'Mikrocitna anemija je najčešće posledica manjka gvožđa, a feritin je osnovni test. CRP pomaže u tumačenju jer feritin raste u zapaljenju. Elektroforeza dolazi u obzir ako je feritin normalan.'
        },
        {
          q: 'Feritin je 7 µg/l, CRP uredan, kreatinin uredan. Pacijentkinja je u postmenopauzi 15 godina. Šta radiš dalje?',
          options: [
            'Gvožđe p.o. i kontrola za tri meseca, bez daljeg ispitivanja',
            'Ukidaš ibuprofen i smatraš da je uzrok rešen',
            'Radiš test na okultno krvarenje i ako je negativan ne ispituješ dalje',
            'Upućuješ na gastroskopiju i kolonoskopiju, radiš serologiju na celijakiju i počinješ gvožđe'
          ],
          answer: 3,
          explain: 'Kod žene u postmenopauzi sa sideropenijskom anemijom gastroskopija i kolonoskopija su prva linija ispitivanja, a celijakija se rutinski isključuje. Nadoknada gvožđa ne čeka endoskopiju.'
        },
        {
          q: 'Koji režim nadoknade gvožđa propisuješ?',
          options: [
            'Jedna tableta dnevno (50–100 mg elementarnog gvožđa) našte; ako je ne podnosi, svaki drugi dan',
            'Tri tablete dnevno uz obroke i mleko',
            'Intravensko gvožđe kao prvi izbor kod svih',
            'Multivitamin sa gvožđem jednom nedeljno'
          ],
          answer: 0,
          explain: 'Preporučena početna terapija je jedna tableta dnevno, a kod nepodnošenja jedna tableta svaki drugi dan. Parenteralno gvožđe je rezervisano za slučajeve kada je oralno kontraindikovano, neefikasno ili se ne podnosi.'
        },
        {
          q: 'Gastroskopija: erozivni gastritis. Kolonoskopija: polip u cekumu, uklonjen. Posle četiri nedelje Hb je 112 g/l. Koliko dugo nastavljaš gvožđe?',
          options: [
            'Prekidaš odmah jer je Hb u porastu',
            'Do normalizacije Hb, pa prekid istog dana',
            'Još oko tri meseca posle normalizacije Hb, uz dalje kontrole krvne slike',
            'Doživotno, bez kontrola'
          ],
          answer: 2,
          explain: 'Hemoglobin raste, što potvrđuje dobar odgovor. Terapija se nastavlja oko tri meseca posle normalizacije hemoglobina da bi se popunile rezerve, a krvna slika se zatim kontroliše na tri meseca tokom prve godine. NSAIL treba ukinuti.'
        }
      ]
    },
    {
      id: 'endokrino-slucaj-3',
      title: 'Muškarac, 49 god., noćni bol u stopalu',
      intro: 'Ambulanta. Muškarac, 49 god., probudio se u četiri ujutru sa jakim bolom u levom stopalu; ne može da podnese ni čaršav. Sinoć je bio na proslavi, jeo roštilj i pio pivo. Ima hipertenziju i uzima hidrohlortiazid 25 mg. BMI 31, afebrilan, TA 146/90 mmHg. Osnovni zglob levog palca otečen, crven, topao i izrazito bolan.',
      steps: [
        {
          q: 'Šta je najverovatnija dijagnoza i treba li čekati nalaz mokraćne kiseline pre lečenja?',
          options: [
            'Akutni napad gihta; lečenje počinje odmah, mokraćna kiselina može biti normalna tokom napada',
            'Septički artritis; odmah antibiotik bez daljih ispitivanja',
            'Celulitis; antibiotik i mirovanje',
            'Giht je isključen dok se ne dokaže povišena mokraćna kiselina'
          ],
          answer: 0,
          explain: 'Nagli noćni monoartritis osnovnog zgloba palca posle alkohola i obilnog obroka kod pacijenta na tiazidu je tipičan giht. Urati tokom napada mogu biti normalni, pa nalaz ne sme da odloži terapiju. Na septički artritis se misli uz temperaturu i loše opšte stanje.'
        },
        {
          q: 'eGFR je 84, nema ulkusnu bolest, ne uzima druge lekove. Proteklo je šest sati od početka. Koja terapija je ispravna?',
          options: [
            'Alopurinol 300 mg odmah, bez leka protiv zapaljenja',
            'Kolhicin na svaka dva sata do pojave proliva',
            'NSAIL u punoj dozi, ili kolhicin u maloj dozi (1 mg pa 0,5 mg posle jednog sata)',
            'Lokalni led i paracetamol, bez drugih lekova'
          ],
          answer: 2,
          explain: 'Prva linija su NSAIL, kolhicin u maloj dozi ili glukokortikoid, prema komorbiditetima. Režim sa visokim dozama kolhicina nije efikasniji, a toksičniji je. Alopurinol sam ne leči napad.'
        },
        {
          q: 'Napad je prošao. Posle tri nedelje mokraćna kiselina je 540 µmol/l. Ovo mu je treći napad za godinu dana. Šta menjaš u terapiji hipertenzije i šta uvodiš?',
          options: [
            'Ostaviti hidrohlortiazid, savetovati samo dijetu',
            'Zameniti hidrohlortiazid drugim antihipertenzivom (npr. losartanom) i uvesti alopurinol 100 mg uz profilaksu kolhicinom',
            'Povećati hidrohlortiazid na 50 mg i dodati furosemid',
            'Uvesti alopurinol 600 mg odmah, bez profilakse'
          ],
          answer: 1,
          explain: 'Česti napadi (dva ili više godišnje) su jasna indikacija za snižavanje urata. Hidrohlortiazid treba zameniti kada je moguće, a losartan je dobar izbor. Alopurinol se uvodi malom dozom uz profilaksu, jer početak terapije provocira napade.'
        },
        {
          q: 'Posle četiri nedelje na alopurinolu 100 mg mokraćna kiselina je 450 µmol/l, pacijent dobro podnosi lek. Šta dalje?',
          options: [
            'Zadržati 100 mg jer su urati pali',
            'Prekinuti alopurinol jer nema novih napada',
            'Zameniti alopurinol febuksostatom',
            'Postepeno povećavati alopurinol do urata ispod 360 µmol/l'
          ],
          answer: 3,
          explain: 'Leči se do cilja: mokraćna kiselina <360 µmol/l (6 mg/dl). Doza alopurinola se postepeno povećava uz kontrolu urata. Febuksostat je rezerva za nepodnošenje ili neuspeh alopurinola.'
        }
      ]
    }
  ]
});
