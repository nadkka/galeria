const gallery = (el) => {
    if ( el== 'barcelona'){
        document.getElementById('wybrane').src = 'barcelona.jpg';
        document.getElementById("odsylacz").href ="barcelona.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215602.804616602!2d1.9737767240072452!3d41.431952650560675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Prowincja%20Barcelona%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1697362756765!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="BARCELONA";
        document.getElementById('opis').innerHTML="Barcelona jest położona nad Morzem Śródziemnym. Jest stolicą prowincji o tej samej nazwie oraz wspólnoty autonomicznej Katalonii. Kojarzymy ją głównie z ciepłego klimatu, modernistycznej architektury Gaudiego i FC Barcelony. Powierzchnia Barcelony wynosi 101,9 km², co sprawia, że jest o 0,8km² mniejsza od Piły.";
    }
    else if (el== 'londyn'){
        document.getElementById('wybrane').src = 'londyn.jpg';
        document.getElementById("odsylacz").href ="londyn.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367204.2210604526!2d-0.46750359449169!3d51.51254853615338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1697362681625!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="LONDYN";
        document.getElementById('opis').innerHTML="Londyn jest stolicą i jednocześnie największym miastem Wielkiej Brytanii. Jest położony nad Tamizą w południowo-wschodniej części kraju. Jego powierzchnia 1572 km² plasuje go na trzecim, co do wielkości, miejscu wśród miast Europy. Liczba jego mieszkańców wynosi prawie 9 milionów, a całej aglomeracji londyńskiej prawie 20 milionów osób. ";
    }
    else if (el== 'zakhyntos'){
        document.getElementById('wybrane').src = 'zakhyntos.jpg';
        document.getElementById("odsylacz").href ="zakhyntos.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464405.8630444797!2d20.70399431991506!3d38.08634815656373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x136747d9efb0afbd%3A0xdbba1265b653379a!2sZakintos%2C%20Grecja!5e0!3m2!1spl!2spl!4v1697362821971!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="ZAKHYNTOS";
        document.getElementById('opis').innerHTML="Zakynthos to jedna ze znanych greckich wysp. Zlokalizowana jest na Morzu Jońskim i należy do archipelagu Wysp Jońskich. Znajduje się na zachód od kontynentu. Najbliższym jej obszarem na lądzie jest półwysep Peloponez. Najbardziej znaną atrakcją Zakhyntosa jest plaża z wrakiem statku zwana Navagio, do której można dopłynąć wyłącznie łodzią. ";
    }
    else if (el== 'malta'){
        document.getElementById('wybrane').src = 'malta.jpg';
        document.getElementById("odsylacz").href ="malta.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390301.5250366079!2d14.388996705956748!3d35.93358398570196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45281d8647c5%3A0xf582d86136be4239!2sMalta!5e0!3m2!1spl!2spl!4v1697362918362!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="MALTA";
        document.getElementById('opis').innerHTML="Archipelag Maltański jest położony 81 km na południe od Sycylii, co czyni Maltę najbardziej wysuniętym na południe krajem Europy. Główną wyspą Archipelagu jest Malta – stanowi 78% jego całkowitej powierzchni. Znajdują się tam laguny z krystalicznie czystą wodą, malownicze klify, przepiękne rafy koralowe i setki zabytkowych budowli.";
    }
    else if (el== 'mediolan'){
        document.getElementById('wybrane').src = 'mediolan.jpg';
        document.getElementById("odsylacz").href ="mediolan.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620220.686365813!2d9.100650598301117!3d45.44732699212654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMediolan%2C%20W%C5%82ochy!5e0!3m2!1spl!2spl!4v1697363029415!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="MEDIOLAN";
        document.getElementById('opis').innerHTML="Mediolan jest światową stolicą mody i najważniejszym centrum gospodarczo-finansowym we Włoszech. To jedno z najbogatszych miast w Europie. Swoje kolekcje prezentują tutaj najsłynniejsze marki oraz podziwiać można najlepiej opłacane modelki świata. Mediolan nie ma tak wielu zabytków jak Rzym, czy Florencja, ale te, które posiada są pełne klasy i ogromnej wartości.";
    }
    else if (el== 'wenecja'){
        document.getElementById('wybrane').src = 'wenecja.jpg';
        document.getElementById("odsylacz").href ="wenecja.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402284.12000316323!2d12.197504763572887!3d45.43038179094164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sWenecja%2C%20W%C5%82ochy!5e0!3m2!1spl!2spl!4v1697363073453!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="WENECJA";
        document.getElementById('opis').innerHTML="Wenecja to miasto odwiedzane każdego roku przez 30 milionów turystów. Położone jest na bagnistych wysepkach Adriatyku i tworzy zespół mostów oraz kanałów. Swoista architektura i nietypowe położenie miasta sprawiły, że zostało ono w całości wpisane na Listę Światowego Dziedzictwa UNESCO. Wenecji od wieków wróżono upadek z powodu nietypowej lokalizacji. ";
    }
    else if (el== 'lanzarote'){
        document.getElementById('wybrane').src = 'lanzarote.jpg';
        document.getElementById("odsylacz").href ="lanzarote.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631126.5953813578!2d-13.868192189166853!3d29.090479220848895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc46276fc5b3ba57%3A0x93c5d5f6589a2ec4!2sArrecife%2C%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1697363121305!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="LANZAROTE";
        document.getElementById('opis').innerHTML="Lanzarote to synonim wulkanów, skał w niezwykłych kształtach oraz czarnych i czerwonych ziem, kontrastujących z białymi domami. Krajobraz tej Wyspy Kanaryjskiej, leżącej najbardziej na wschód archipelagu, wypełniają łyse góry o słabo ukształtowanej rzeźbie terenu, lasy palmowe oraz cisza, która stanowi jeden z najbardziej charakterystycznych elementów.";
    }
    else if (el== 'rzym'){
        document.getElementById('wybrane').src = 'rzym.jpg';
        document.getElementById("odsylacz").href ="rzym.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200866.9646929605!2d11.961381905500495!3d42.21287599635309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2zUnp5bSwgV8WCb2NoeQ!5e0!3m2!1spl!2spl!4v1697363178091!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="RZYM";
        document.getElementById('opis').innerHTML="Rzym to jedno z najpiękniejszych i najbardziej romantycznych miejsc na ziemi, które zachwyca turystów na każdym kroku. Majestatyczne Koloseum, przepiękna Fontanna di Trevi, starożytny Panteon czy urokliwe Schody Hiszpańskie prowadzące do kościoła Trinitia dei Monti to tylko nieliczne z ciekawych miejsc, które warto zobaczyć w Rzymie.";
    }
    else if (el== 'piza'){
        document.getElementById('wybrane').src = 'piza.jpg';
        document.getElementById("odsylacz").href ="piza.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46146.896904827125!2d10.317439448368997!3d43.70678627152896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5919af0f6598f%3A0xaab80fb5a78478c8!2zUGl6YSwgV8WCb2NoeQ!5e0!3m2!1spl!2spl!4v1697363213328!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="PIZA";
        document.getElementById('opis').innerHTML="Piza jest jednym z miast należących do Toskanii, pięknego i malowniczego regionu we Włoszech. Większości kojarzy się wyłącznie z Krzywą Wieżą, która na przestrzeni lat stała się symbolem tego miasta. W Pizie oprócz Krzywej Wieży nie ma praktycznie żadnych innych atrakcji, więc na zwiedzanie miasta wystarczy nam maksymalnie kilka godzin.";
    }
    else if (el== 'matera'){
        document.getElementById('wybrane').src = 'matera.jpg';
        document.getElementById("odsylacz").href ="matera.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24211.389570704974!2d16.561160603910434!3d40.6646325037353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477ee2482b152b%3A0x8f6a4ae10da9360!2s75100%20Matera%2C%20Prowincja%20Matera%2C%20W%C5%82ochy!5e0!3m2!1spl!2spl!4v1697363309086!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="MATERA";
        document.getElementById('opis').innerHTML="Matera to jedno z najbardziej niezwykłych miejsc, jakie ma do zaoferowania południe Włoch. Z jednej strony miasto jest zachwycające, ale z drugiej stoi za tym wstrząsająca historia. Matera określana jest mianem jedynego na świecie miasta wykutego w skale. Oprócz zabytkowej część Matery możemy wspiąć się na pobliskie wzgórza, na których znajdziemy ogrom jaskiń. ";
    }
    else if (el== 'korfu'){
        document.getElementById('wybrane').src = 'korfu.jpg';
        document.getElementById("odsylacz").href ="korfu.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278236.4508219165!2d19.79592427248724!3d39.60225750842083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b5c00bfd150d7%3A0x400bd2ce2b99410!2sKorfu%2C%20Grecja!5e0!3m2!1spl!2spl!4v1697363348318!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="KORFU";
        document.getElementById('opis').innerHTML="Korfu to zielona wyspa, obdarzona jednak jednymi z najpiękniejszych greckich plaż. “Królowa jońskich wysp” zachęca przepięknymi widokami, ale i kawałkiem historii i ciekawej architektury. Znajdziemy tu jedyne na wyspie lotnisko niemal w całości otoczone przez wodę. Przy lądowaniu można zobaczyć ludzi fotografujących przelatujące samoloty. ";
    }
    else if (el== 'berlin'){
        document.getElementById('wybrane').src = 'berlin.jpg';
        document.getElementById("odsylacz").href ="berlin.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310852.71795934014!2d12.801027202739125!3d52.505622743165944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1697363398255!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="BERLIN";
        document.getElementById('opis').innerHTML="Berlin jest stolicą i największym miastem Niemiec, a także siedzibą rządu Republiki Federalnej Niemiec. Mieszka w nim niemalże 3,5 mln osób. Jest trzecim największym miastem Unii Europejskiej. Berlin jest położony nad rzeką Sprewą, we wschodniej części Niemiec, 90 km od granicy z Polską. Najbardziej znany jest z Bramy Brandenburskiej. ";
    }
    else if (el== 'budapeszt'){
        document.getElementById('wybrane').src = 'budapeszt.jpg';
        document.getElementById("odsylacz").href ="budapeszt.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754798.1155311328!2d18.709786715342467!3d47.015076217603855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapeszt%2C%20W%C4%99gry!5e0!3m2!1spl!2spl!4v1697363458234!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="BUDAPESZT";
        document.getElementById('opis').innerHTML="Budapeszt to urokliwe miasto, nasycone historią – zarówno tą pozytywną, jak i tą ponurą, z okresu wojennego i powojennego. Węgrzy są bardzo przyjaznym narodem, a ich dobre nastawienie do Polaków sprawia, że wyjazd do stolicy Węgier powinien być niezwykle przyjemnym doświadczeniem. Budapeszt przecięty jest Dunajem - drugą największą rzeką Europy. ";
    }
    else if (el== 'praga'){
        document.getElementById('wybrane').src = 'praga.jpg';
        document.getElementById("odsylacz").href ="praga.jpg";
        document.getElementById("mapka").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668014.6513148937!2d14.123632818479498!3d49.60245916730099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraga%2C%20Czechy!5e0!3m2!1spl!2spl!4v1697363493947!5m2!1spl!2spl";
        document.getElementById("miejsce").innerHTML="PRAGA";
        document.getElementById('opis').innerHTML="Praga to stolica sąsiadujących z Polską Czech. Praga mieści się w zachodniej części państwa, nad rzeka Wełtawą. Znajdują się w niej siedziby władz czeskich, siedziby związków wyznaniowych, licznych stowarzyszeń oraz uczelni, tj. Uniwersytet Karola, Akademia Sztuk Scenicznych, a także mnóstwo wartych zobaczenia zabytków, które zostały wpisane na listę UNESCO. ";
    }
    document.getElementById("main").style.display="block";
}
