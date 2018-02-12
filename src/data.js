export var content_data = [
	{
		"id": 0,
		"title": "Test React JS",
		"lead" : "Wszystkie informacje i dokumentacja dotycząca testu React JS na potrzeby SEO w wersji renderowania Client Side. Czy Google poradzi sobie i zaindeskuje poniższą stronę?",
		"description": "<p>Test ten powstał w imię nauki, a czegoż by innego powstać m&oacute;gł? Argument&oacute;w za jego przeprowadzeniem miałem kilka, poszerzenie wiedzy, chęć zmierzenia się czymś nowym oraz poznanie jednego z najpopularniejszych framework&oacute;w od jego zaplecza, czyli od dupy strony.</p><p>Założenia testu składają się z kilku etap&oacute;w:</p><ol><li>Stworzenie strony w React &ndash; rękami SEOwca by lepiej zrozumieć mechanizm działania frameworka</li><li>Opublikowanie strony na serwerze dostępnym dla robot&oacute;w i ludzi rzecz jasna też</li><li>Podpięcie do narzędzi Google Search Console</li><li>Przesłanie do indeksu strony gł&oacute;wnej</li><li>Analiza strony w oparciu narzędzie GSC &ndash; gł&oacute;wnie pobranie jej jako Google</li><li>Sprawdzania cache strony w wyszukiwarce oraz indeksowania i prędkości tego indeksowania</li></ol><p>Dla os&oacute;b, kt&oacute;re nie miały do czynienia to od razu zaznaczę tutaj, że istnieje możliwość renderowania strony w React JS po stronie serwera, wartość i jakość takiego renderowania w służbie SEO jest na pewno wiele razy lepsza, ale ocena tej jakości i wartości zostanie dopiero przeprowadzona w kolejnych testach, po testach Client-Side.</p><p>R&oacute;żnica pomiędzy Client a Server jest ogromna. W przypadku Clien-Side widzimy tylko w źr&oacute;dle strony jeden element &lt;div&gt; w sekcji &lt;body&gt;, kt&oacute;ry pobierany jest przez React i metodą render tworzy wirtualne drzewo DOM, a następnie właściwy DOM.</p><p>Otwierając narzędzia dla developer&oacute;w, zobaczyć piękny szablon HTML, ale to właśnie jest coś, co może wprowadzić w błąd&hellip; a może i nie, bo przecież Google renderuje DOM, tylko kiedy, jak? Na te pytania właśnie ma też odpowiedzieć ten test.</p><p>W przypadku renderowania Server Side, mamy wygenerowany HTML dla żądanego adresu, przy czym ładowane są także pozostałe pliki JS, kt&oacute;re dają użytkownikowi możliwość poczucia, że strona działa Clinet Side. Z jednej strony brzmi fantastycznie, takie strony są szybkie i lekkie. Czy jednak na pewno są szybkie i lekkie dla robota wyszukiwarki. Ten temat jednak rozwiązany będzie na teście Reacta Server Side.</p><p>Starałem się napisać tą stronę zgodnie ze standardami, dlatego nie ma tutaj użytego natywnego Reacta, ale korzystam z szablon&oacute;w JSX, czyli tak jak to developerzy robią na co dzień. Co ważne, ten projekt nie pokazuje pełni możliwości React JS, bo nie ma w nim choćby ani jednego komponentu stanowego, ale one akurat dla pracy SEOwca nie są tak istotne.</p><p>Wszelka dostępna dokumentacja techniczna dostępna jest dla zainteresowanych na GitHubie: <a href=\"https://github.com/haincz/reactjsaseo/\">https://github.com/haincz/reactjsaseo/</a></p><p>Do stworzenia strony zostały użyte następujące biblioteki oraz pluginy:</p><p>&nbsp;&nbsp;&nbsp; react: ^16.2.0,</p><p>&nbsp;&nbsp;&nbsp; react-dom: ^16.2.0,</p><p>&nbsp;&nbsp;&nbsp; react-meta-tags: ^0.3.0</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp; babel-core: ^6.26.0,</p><p>&nbsp;&nbsp;&nbsp; babel-loader: ^7.1.2,</p><p>&nbsp;&nbsp;&nbsp; babel-preset-es2015: ^6.24.1,</p><p>&nbsp;&nbsp;&nbsp; babel-preset-react: ^6.24.1,</p><p>&nbsp;&nbsp;&nbsp; babel-preset-react-hmre: ^1.1.1,</p><p>&nbsp;&nbsp;&nbsp; babel-preset-stage-0: ^6.24.1,</p><p>&nbsp;&nbsp;&nbsp; css-loader: ^0.28.9,</p><p>&nbsp;&nbsp;&nbsp; extract-text-webpack-plugin: ^3.0.2,</p><p>&nbsp;&nbsp;&nbsp; html-webpack-plugin: ^2.30.1,</p><p>&nbsp;&nbsp;&nbsp; react-hot-loader: ^3.1.3,</p><p>&nbsp;&nbsp;&nbsp; react-router: ^4.2.0,</p><p>&nbsp;&nbsp;&nbsp; react-router-dom: ^4.2.2,</p><p>&nbsp;&nbsp;&nbsp; style-loader: ^0.19.1,</p><p>&nbsp;&nbsp;&nbsp; webpack: ^3.10.0,</p><p>&nbsp;&nbsp;&nbsp; webpack-dev-server: 2.11.1</p><p>Dodatkową istotną informacją jest fakt, że url tworzone są dynamicznie w oparciu o tak zwaną technologię History API.</p><h2>Dźień pierwszy:</h2><h3>site: 0</h3><h3>cache: czekamy do pierwszego zaindeksowania</h3><h3>widoczność fragmentu tekstu: j.w</h3><h3>Pobierz jako Google: </h3><img src='/src/image/fetchasgoogleday1.jpg'/><h2>Dźień czwarty:</h2><h3>site: 1</h3><h3>cache:</h3><img src='/src/image/day4cache.jpg' /><h3>widoczność fragmentu tekstu:</h3><p>Wygląda na to, że google poradził sobie z częścią tekstu na stronie głównej (jedynej zaindeksowanej)</p><img src='/src/image/day4contentindex.jpg'/>",
		"image": "src/image/testreacjs.jpg",
	},
	{
		"id": 1,
		"title": "Techniczne SEO",
		"lead" : "Kilka słów o tym czym dlaczego SEO to nie tylko linki i content, dlaczego Java Script nie musi być SEOowym Katharsis i dlaczego warto podejść do tematu SEO od tej strony",
		"description": "<p>Techniczne SEO to jedno z ciekawszych wyzwań jakie stoją przed specjalistą SEO. Dzieje się tak z kilku powod&oacute;w:</p><ol><li>Musisz być na bieżąco ze wszystkimi zmianami i nowościami od Google</li><li>Cały czas się uczysz i rozwijasz, a uczyć się trzeba tu szybko i szybko reagować</li><li>Cały czas testujesz</li></ol><p>W przypadku technicznego SEO każdy dzień jest nieco inny i praca tutaj nie kończy się na kreatywnym&nbsp; wymyślaniu trend&oacute;w, materiał&oacute;w i dobierania do nich sł&oacute;w kluczowych czy też linkowaniu. Techniczne SEO wymaga pewnej dyscypliny, dużej koncentracji i odporności na b&oacute;l oczu z powodu przekrwienia. Techniczne SEO wymaga także kreatywności i stosowania czasem hack&oacute;w i szpagat&oacute;w, kt&oacute;re są &bdquo;dozwolone&rdquo; z og&oacute;lnie przyjętymi zasadami White Hat.</p><p>Czym tak naprawdę jest techniczne SEO?</p><p>Pomińmy kwestie redirect&oacute;w, nagł&oacute;wk&oacute;w, tytuł&oacute;w, alt&oacute;w w obrazkach, kod&oacute;w odpowiedzi czy sitemap (to wie każdy junior SEO) czy nawet test&oacute;w PageSpeed, bo to, że wrzucisz stronę do narzędzia Google, nie świadczy o technicznym SEO, ale jakie wnioski z tego się wyciągnie i co zrobi się z tym dalej już tak.</p><p>Osoba techniczna w SEO powinna znać narzędzia i wyciągać wnioski z raport&oacute;w, kt&oacute;re te narzędzia udostępniają. Tak naprawdę są dwa takie narzędzia, kt&oacute;re każdy SEO musi ogarniać: Google Search Console i Screamin Frog(lub zamienniki - ja używam froga).</p><p>Osoba techniczna SEO musi polubić się z Java Scriptem &ndash; doskonale jak umie napisać sw&oacute;j program, zna zależności i sposoby renderowania takiego programu jak i egzekwowania plik&oacute;w JS przez Google. Osoba techniczna SEO rozumie og&oacute;lnie działanie popularnych Framework&oacute;w, a aktualnie są to frameworki JS, wie co to jest History API i nieźle radzi sobie HTML 5 i CSS (jeżeli wiesz jak w CSS umieścić tekst, do kt&oacute;rego dostanie się Google Bot i będzie widoczny w cache, to już całkiem nieźle)</p><p>Kolejne kwestie to HTTPS, AMP, PWA, Mobile czy też dane strukturalne i relacje wynikające z tego: wiązane canonicalem, alternatem czy tez innymi tagami. Każdy z powyższych temat&oacute;w to temat na osobny rozdział w książce.</p><p>Techniczny SEO, to wsparcie dla SEO contentowego i dobra podstawa do tego, by ten content indeksował się poprawnie. Osoba odpowiedzialna za techniczne SEO musi być swego rodzaju SEO Homeopatą, kt&oacute;ry dostrzeże zależności i zagrożenia przy wszelkiego rodzaju wdrożeniach czy migracjach i dogada się łatwo z developerami używając języka 0-1, a nie poezji.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>",
		"image": "src/image/technicalseo.jpg",

	},
	{
		"id": 2,
		"title": "Framework React JS",
		"lead" : "Przybliżenie frameworka React JS, który aktualnie jest jednym z najbardziej popularnych framworków",
		"description": "<p>Tw&oacute;rcą React JS jest Jordan Walke, programista Facebooka, kt&oacute;ry inspirował się rozszerzeniem PHP &ndash; XHP. Framework JavaScriptowy znajduje swoje zastosowanie przy pisaniu interfejs&oacute;w aplikacji internetowych.<\/p><p>Cechą, kt&oacute;ra stanowi o wyjątkowości React jest wirtualny DOM. Dzięki niemu framework przechowuje cały DOM w pamięci, a po zmianie stanu &ndash; wykryciu r&oacute;żnic między wirtualnym DOM, właściwym DOM &ndash; aktualizuje tylko te elementy, kt&oacute;rych stan uległ zmianie.<\/p> <p>Kolejnym istotnym elementem, kt&oacute;ry wyr&oacute;żnia React jest JSX - rozszerzenie składniowe JavaScript, pozwalające tworzyć komponenty i opisać, jak powinien wyglądać interfejs użytkownika. &nbsp;JSX daje możliwość wstawiania kodu HTML (lub komponent&oacute;w React) bezpośrednio w kodzie, zamiast ciągu znak&oacute;w.<\/p> <p>Biblioteka REACT jest obecnie stosowana przez takie znane marki jak Netflix, Imgur, PayPal, Archive.org, Gamepedia, SeatGeek, HelloSign czy Walmart. W 2015 roku React.js był jednym z najpopularniejszych projekt&oacute;w na GitHubie, a obecnie jest jednym z najczęściej poruszanych wątk&oacute;w na developerskim forum Stack Overflow.<\/p>",
		"image": "src/image/reactjs.jpg",

	},
]