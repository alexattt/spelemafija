var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

var mainHtmlPage = document.getElementsByTagName("main");

function changeMainBg(isMainPage) {
  if (isMainPage) {
    mainHtmlPage[0].style.backgroundImage = "url('assets/background_one.png')";
  } else {
    mainHtmlPage[0].style.backgroundImage = "url('assets/background_two.png')";
  }
}

var mainPageContent = document.getElementById("main-page-content");
var clubPageContent = document.getElementById("club-page-content");
var rulesPageContent = document.getElementById("rules-page-content");
var galleryPageContent = document.getElementById("gallery-page-content");
var corporatePageContent = document.getElementById("corporate-page-content");

var mainPageLink = document.getElementById("main-page");
var clubPageLink = document.getElementById("club-page");
var rulesPageLink = document.getElementById("rules-page");
var galleryPageLink = document.getElementById("gallery-page");
var corporatePageLink = document.getElementById("corporate-page");

var mainPageLinkMobile = document.getElementById("main-page-mobile");
var clubPageLinkMobile = document.getElementById("club-page-mobile");
var rulesPageLinkMobile = document.getElementById("rules-page-mobile");
var galleryPageLinkMobile = document.getElementById("gallery-page-mobile");
var corporatePageLinkMobile = document.getElementById("corporate-page-mobile");

function showMainPage() {
  mainPageContent.classList.remove("hidden");
  mainPageContent.classList.add("visible");

  mainPageLink.classList.add("active-link");
  mainPageLinkMobile.classList.add("active-link");
}
function hideMainPage() {
  mainPageContent.classList.add("hidden");
  mainPageContent.classList.remove("visible");

  mainPageLink.classList.remove("active-link");
  mainPageLinkMobile.classList.remove("active-link");
}

function showClubPage() {
  clubPageContent.classList.remove("hidden");
  clubPageContent.classList.add("visible");

  clubPageLink.classList.add("active-link");
  clubPageLinkMobile.classList.add("active-link");
}
function hideClubPage() {
  clubPageContent.classList.add("hidden");
  clubPageContent.classList.remove("visible");

  clubPageLink.classList.remove("active-link");
  clubPageLinkMobile.classList.remove("active-link");
}

function showRulesPage() {
  rulesPageContent.classList.remove("hidden");
  rulesPageContent.classList.add("visible");

  rulesPageLink.classList.add("active-link");
  rulesPageLinkMobile.classList.add("active-link");
}
function hideRulesPage() {
  rulesPageContent.classList.add("hidden");
  rulesPageContent.classList.remove("visible");

  rulesPageLink.classList.remove("active-link");
  rulesPageLinkMobile.classList.remove("active-link");
}

function showGalleryPage() {
  galleryPageContent.classList.remove("hidden");
  galleryPageContent.classList.add("visible");

  galleryPageLink.classList.add("active-link");
  galleryPageLinkMobile.classList.add("active-link");
}
function hideGalleryPage() {
  galleryPageContent.classList.add("hidden");
  galleryPageContent.classList.remove("visible");

  galleryPageLink.classList.remove("active-link");
  galleryPageLinkMobile.classList.remove("active-link");
}

function showCorporatePage() {
  corporatePageContent.classList.remove("hidden");
  corporatePageContent.classList.add("visible");

  corporatePageLink.classList.add("active-link");
  corporatePageLinkMobile.classList.add("active-link");
}
function hideCorporatePage() {
  corporatePageContent.classList.add("hidden");
  corporatePageContent.classList.remove("visible");

  corporatePageLink.classList.remove("active-link");
  corporatePageLinkMobile.classList.remove("active-link");
}

mainPageLink.addEventListener("click", function () {
  changeMainBg(true);

  showMainPage();
  hideClubPage();
  hideRulesPage();
  hideGalleryPage();
  hideCorporatePage();
});

clubPageLink.addEventListener("click", function () {
  changeMainBg(false);

  showClubPage();
  hideMainPage();
  hideRulesPage();
  hideGalleryPage();
  hideCorporatePage();
});

rulesPageLink.addEventListener("click", function () {
  changeMainBg(false);

  showRulesPage();
  hideMainPage();
  hideClubPage();
  hideGalleryPage();
  hideCorporatePage();
});

galleryPageLink.addEventListener("click", function () {
  changeMainBg(false);

  showGalleryPage();
  hideMainPage();
  hideClubPage();
  hideRulesPage();
  hideCorporatePage();
});

corporatePageLink.addEventListener("click", function () {
  changeMainBg(false);

  showCorporatePage();
  hideMainPage();
  hideClubPage();
  hideRulesPage();
  hideGalleryPage();
});

mainPageLinkMobile.addEventListener("touchstart", function () {
  changeMainBg(true);

  showMainPage();
  hideClubPage();
  hideRulesPage();
  hideGalleryPage();
  hideCorporatePage();

  burgerMenu.click();
});

clubPageLinkMobile.addEventListener("touchstart", function () {
  changeMainBg(false);

  showClubPage();
  hideMainPage();
  hideRulesPage();
  hideGalleryPage();
  hideCorporatePage();

  burgerMenu.click();
});

rulesPageLinkMobile.addEventListener("touchstart", function () {
  changeMainBg(false);

  showRulesPage();
  hideMainPage();
  hideClubPage();
  hideGalleryPage();
  hideCorporatePage();

  burgerMenu.click();
});

galleryPageLinkMobile.addEventListener("touchstart", function () {
  changeMainBg(false);

  showGalleryPage();
  hideMainPage();
  hideClubPage();
  hideRulesPage();
  hideCorporatePage();

  burgerMenu.click();
});

corporatePageLinkMobile.addEventListener("touchstart", function () {
  changeMainBg(false);

  showCorporatePage();
  hideMainPage();
  hideClubPage();
  hideRulesPage();
  hideGalleryPage();

  burgerMenu.click();
});

function toggleMobileGallery() {
  const carousel = document.getElementsByClassName("carousel")[0];

  carousel.removeAttribute("navigation", "");
  carousel.removeAttribute("pagination", "");
}

function toggleDesktopGallery() {
  const carousel = document.getElementsByClassName("carousel")[0];

  carousel.setAttribute("navigation", "");
  carousel.setAttribute("pagination", "");
}

window.addEventListener("load", () => {
  mainPageLink.classList.add("active-link");

  var currentYear = document.getElementById("current-year");
  currentYear.innerHTML = new Date().getFullYear().toString();

  if (this.window.innerWidth < 1080) {
    this.toggleMobileGallery();
  } else {
    this.toggleDesktopGallery();
  }
});

window.addEventListener("resize", () => {
  if (this.window.innerWidth < 1080) {
    this.toggleMobileGallery();
  } else {
    this.toggleDesktopGallery();
  }
});

function changeToLV() {
  const allElements = document.getElementsByClassName("lv");

  for (let index = 0; index < allElements.length; index++) {
    const element = allElements[index];
    const translationIndex = element.classList.value
      .split(" ")
      .find((className) => className.includes("translation"))
      .split("-")[1];

    if (element.classList.contains("mafia-title") || element.classList.contains("page-title")) {
      element.style.fontFamily = "Corleone";
    }
    element.innerHTML = LV_TRANSLATIONS[Number(translationIndex)];
  }
}

function changeToRU() {
  const allElements = document.getElementsByClassName("lv");

  for (let index = 0; index < allElements.length; index++) {
    const element = allElements[index];
    const translationIndex = element.classList.value
      .split(" ")
      .find((className) => className.includes("translation"))
      .split("-")[1];

    if (element.classList.contains("mafia-title") || element.classList.contains("page-title")) {
      element.style.fontFamily = "Orelega One";
    }

    element.innerHTML = RUS_TRANSLATIONS[Number(translationIndex)];
  }
}

const lvLangBtn = document.getElementById("lv-lang-btn");
const ruLangBtn = document.getElementById("ru-lang-btn");

lvLangBtn.addEventListener("click", function () {
  changeToLV();
});

ruLangBtn.addEventListener("click", function () {
  changeToRU();
});

const lvLangBtnMobile = document.getElementById("lv-lang-btn-mobile");
const ruLangBtnMobile = document.getElementById("ru-lang-btn-mobile");

lvLangBtnMobile.addEventListener("touchstart", function () {
  changeToLV();
  burgerMenu.click();
});

ruLangBtnMobile.addEventListener("touchstart", function () {
  changeToRU();
  burgerMenu.click();
});

const RUS_TRANSLATIONS = [
  "Игра МАФИЯ",
  "ГЛАВНАЯ",
  "КЛУБ",
  "ПРАВИЛА ИГРЫ",
  "ГАЛЕРЕЯ",
  "КОРПОРАТИВ",
  "Игра",
  "МАФИЯ",
  "Психологическая ролевая игра с детективным сюжетом. Жители города, обессилевшие от разгула мафии, выносят решение посадить в тюрьму всех членов мафии. В ответ, мафия объявляет войну до полного уничтожения всех мирных жителей.",
  "Пришло время выбрать, на чьей вы стороне...",
  "КЛУБ",
  "Наш элитарный клуб существует и непрерывно функционирует в Риге с 2010 года. Мы всегда открыты для позитивных людей и проводим раз в неделю базовые игры в мафию на которые может прийти любой желающий. Наш игровой день – четверг (19:00-23:00). Место проведения мероприятий кафе “Miranda” (Рига, ул. Бикерниеку 14). Нас легко найти и у нас своя бесплатная парковка.",
  "А ещё у нас отзывчивые ведущие, уютная атмосфера и дружелюбные игроки. К нам приходят делиться новостями, знакомиться, влюбляться и главное - это окунуться в игровую атмосферу, получив от этого максимум впечатлений.",
  "Наши игры помогают справиться с внутренними страхами, учат отстаивать и формулировать свою точку зрения, улучшают навыки логического мышления. И, конечно же, неизбежно развивают ораторские и актёрские способности.",
  "Стать членом клуба может любой желающий. Клуб посещают люди самого разного возраста и отдельно проводятся игры для детей от 10 лет. У нас не приветствуется ненормативная лексика, личные оскорбления и злоупотребление алкогольными напитками.",
  "Добро пожаловать к нам в следующий четверг!",
  "ПРАВИЛА ИГРЫ",
  "Основные понятия",
  "Нарушениями правил",
  "Дисциплинарный регламент",
  "В игре принимают участие 8-13 человек. Игроки, вытягивая карты, случайным образом делятся на две команды – «красные» (мирный жители) и «чёрные» (мафия). В команде «красных» имеются две игровые роли и их карты отличаются от остальных (это комиссар и доктор). Ведёт игру и регламентирует её этапы ведущий. Игра имеет две основные фазы: «день» и «ночь». Победа «красных» наступает в том случае, когда из игры выведены все представители «чёрной» команды. Победа «чёрной» команды наступает в случае, когда за игровым столом остаётся равное количество игроков обеих команд.",
  "Начало игры",
  "Сидя за столом, игроки по очереди выбирают у ведущего игровую карту и ознакамливаются с ней. После получения всеми игроками своих «ролей в городе» наступает знакомство всех игроков по объявленной теме (ведущий самостоятельно решает этот вопрос в зависимости от публики).",
  "Первая игровая ночь",
  "Ведущий объявляет «Просыпается мафия!» и игроки, получившие «чёрные» карты, снимают с лица маски для визуального знакомства между собой. Ведущий объявляет «Мафия засыпает». После этих слов «чёрные» игроки закрывают лица масками. Далее ведущий объявляет «Просыпается комиссар!» и игрок, получивший соответствующую карту, снимает маску для знакомства с ведущим. Последним ведущий «будит» доктора. Увидев его лицо без маски, ведущий объявляет «Доктор засыпает!» Если в игре нет больше ролевых карт, то ведущий объявляет «Город просыпается!».",
  "Первый игровой день",
  "Игроки снимают маски и в течение трёх минут все имеют право разговаривать между собой, задавать друг другу вопросы и выявлять мафию за столом.",
  "Выдвижение кандидатур на удаление из-за стола",
  "После того, как все игроки перестали общаться (три минуты истекли), ведущий по очереди (начиная с 1-го игрока) даёт право каждому высказаться по 15 секунд. В течение этого времени игрок должен выставить одну или две кандидатуры на удаление из-за стола путём дальнейшего общего голосования. Причина выставления кандидатур может быть только одна – указанный игрок (игроки) по его мнению является (-ются) «мафией». Не выставить на голосование ни одну кандидатуру игрок не имеет права. В случае, когда за столом остался один представитель «чёрной» команды, все игроки выставляют только одну кандидатуру. Своё выступление игрок заканчивает словом «СПАСИБО» или «ПАС», или его прерывает ведущий в случае превышения выделенной нормы в 15 секунд.",
  "Оправдательное слово",
  "Ведущий объявляет всему «городу» о кандидатурах набравших наибольшее количество голосов. Как правило – это первое и второе место, или игроки поделившие первое место, а также возможен вариант – «первое место + игроки поделившие второе место». Объявленные (номинированные) кандидатуры имеют право на 30 секунд для оправдательного слова, чтобы объяснить всему «городу» почему они не являются мафией и почему не стоит голосовать против них. В течение этого времени они могут анализировать всю ситуацию за столом и обвинять других игроков в принадлежности к «чёрной» команде.",
  "Голосование",
  "Ведущий напоминает «городу» кандидатов на выбывание из игры и просит всех взять маски в руки. Голосование проводится последовательно по возрастанию игровых номеров (1, 2, 3…13). Для более чёткой фиксации голосов против конкретной кандидатуры, ведущий даёт отсчёт и на «три» регистрирует количество поднятых игроками масок. В отношении каждой кандидатуры на выбывание проводится своё отдельное голосование. Воздержаться от голосования игроки не имеют права и голосуют только один раз против одного конкретного кандидата. Если маска какого-либо игрока была поднята раньше или позже команды «три» (или вовсе не была поднята на протяжении всех голосований), то голос этого игрока автоматически засчитывается против последнего из всех выставленных кандидатов. Ведущий строго следит за справедливостью при разрешении этого вопроса и контролирует количество всех голосов. Кандидат на выбывание из игры не имеет права голосовать против себя. Ведущий своевременно это констатирует и исправляет оплошность игрока. Если количество голосов при голосовании разделилось поровну между всеми кандидатами, то объявляется повторное голосование. В этом случае у каждого номинированного игрока (кандидата на удаление из-за стола) есть право на дополнительные 30 секунд для ещё одной оправдательной речи. Если и при повторном голосовании голоса игроков делятся поровну между всеми кандидатами, то объявляется третье голосование. Исход №1 в этом случае будет вынужденное покидание игры всеми кандидатами. Исход №2 – все кандидаты остаются далее играть за столом. Номинированные игроки уже не принимают участия в третичном голосовании. Все голосования за столом происходят аналогично первичному на счёт «три». При наличии четырёх игроков за столом ситуация «Исход №1» невозможна и ведущий автоматически делает игру по «Исходу №2». В любой игровой ситуации, которая произошла по вине игрока и ставит под вопрос справедливость голосования, ведущий может принять своё окончательное решение для гармоничного продолжения игры. Игрок, покидающий игровой стол, открывает свою карту и имеет 15 секунд времени на заключительное слово «городу».",
  "Ночь",
  "Ведущий объявляет «Наступает ночь, город засыпает!». После того, как все закроют лица масками и в «городе» наступит полная тишина, ведущий даёт команду «Просыпается мафия!». «Чёрная» команда отрывает свои лица и жестами (взглядами) пытаются договориться между собой о жертве. Если этот процесс явно затягивается, то ведущий объявляет «Не вижу согласованного выстрела!». Если и в этом случае у мафии нет единогласного «ночного решения», то ведущий даёт команду «Мафия засыпает». В данном случае считается, что мафия промахнулась и при оглашении итогов прошедшей ночи, это озвучивается ведущим (или наоборот, называется жертва мафии в случае сострела). После того, как мафия «заснула», ведущий даёт команду «Просыпается комиссар!». Игрок с соответствующей картой снимает маску с лица и жестом указывает на другого игрока, которого желает «проверить» на принадлежность к «чёрной» команде. Ведущий даёт «комиссару» достоверную информацию, является ли проверяемый игрок мафией или не является. После этого действия «комиссар засыпает». При оглашении итогов прошедшей ночи ведущий озвучивает результат ночной проверки «комиссара» без уточнения кто проверял и кого проверял. В случае ночного устранения «мафией комиссара», результат ночной проверки последнего не озвучивается (остаётся тайной для «города»). После того, как «заснул комиссар», ведущий объявляет «Просыпается доктор!». Игрок с соответствующей картой снимает маску с лица и указывает на другого игрока, на того, кого он желает спасти после устранения мафии. Не обладая точной информацией о «ночном выстреле мафии», «доктор» выбирает «пациента» по собственному усмотрению, основываясь на интуиции и догадках. «Доктор» может «лечить» и самого себя. «Доктор» не может лечить два раза подряд одного и того же игрока. Если «доктор» угадал игрока устранённого только что «мафией», то считается, что он его спас. При оглашении ведущим результатов ночных действий «доктора», не указывается кто и кого «лечил», озвучивается только сам факт «спасения жителя города» (или «не спасения»). После того, как все ролевые игроки были ночью «разбужены», за игровым столом «наступает утро» и все снимают с лиц маски. Ведущий оглашает результаты «ночных разборок мафии» и «проверки комиссара» (если последний не был устранён «мафией»). «Результат работы доктора» озвучивается если он угадал «жертву» и соответственно спас игрока. Устранённый «мафией» игрок покидает стол и открывает свою карту. У него есть 15 секунд на заключительное слово. Если устранённый «мафией» игрок является комиссаром, то он не имеет права на заключительное слово. Ведущий строго следит за тем, чтобы покидающий игру комиссар ничего не сообщил игрокам.",
  "Второй игровой день",
  "Далее игра идёт по замкнутому циклу «ИГРОВОЙ ДЕНЬ – ВЫДВИЖЕНИЕ КАНДИДАТУР – ОПРАВДАТЕЛЬНОЕ СЛОВО – ГОЛОСОВАНИЕ – ИГРОВАЯ НОЧЬ» пока не достигнет условия победы одной из команд, что и озвучивается ведущим.",
  "Клятва в любой форме или ее аналог;",
  "Пари на любых условиях или его аналог;",
  "Сознательное подглядывание для получения информации или иные не игровые способы получения информации;",
  "Подсказки из зрительного зала;",
  "Нанесение оскорблений другим игрокам или ведущему, использование мата;",
  '"Ночные" подсказки, разговоры (любые звуки) под маской или жестикуляция;',
  'Непроизвольное подглядывание "ночью";d',
  '"Ночные" прикосновения;',
  "Самовольное покидание игрового стола;",
  "Стуки по игровому столу, неэтичное поведение по отношению к другим игрокам и ведущему, споры с ведущим;",
  "Использование излишней жестикуляции, отвлекающей других игроков;",
  "Речь во время предоставленного слова другому игроку, в том числе междометия и шёпот;",
  "Упоминание религии, национальных или политических тем.",
  "Нарушения правил фиксируются ведущим.",
  "Игроки, нарушившие правила, наказываются ведущим. При этом они получают замечание (три замечания означают дисквалификацию и игрок будет вынужден покинуть стол).",
  "Игрок может быть предупреждён и устно, решение о степени воздействия на недисциплинированного игрока принимает ведущий в каждом конкретном случае отдельно. При этом приоритетом для ведущего ставится гармоничная дальнейшая игра для большинства игроков.",
  "При любом «ночном» нарушении правил игрок должен быть дисквалифицирован и удалён из игры.",
  "Мафия – это командная игра! Не важно какая карта вам выпала, главное победа вашей команды. Покидая стол, постарайтесь своей речью помочь команде! Если вы не мафия, конечно…",
  "КОРПОРАТИВ",
  "Отметить День рождения (юбилей), вечеринку, корпоратив/ детский корпоратив, выпускной в стиле «Мафия» - это модно и оригинально!",
  "«Мафия» - игра не только увлекательная, но и очень стильная. Игра объединяет коллектив, помогает сотрудникам лучше понять друг друга и позволяет оценить их способности на новом поприще.",
  "Вы по-новому, весело и с пользой проведёте своё время, о чём будут свидетельствовать потом ваши фотографии в игровой маске.",
  'Для проведения игры "Мафия" мы предоставляем:',
  "профессионального ведущего;",
  "специально разработанное музыкальное сопровождение;",
  "карты;",
  "атрибутику.",
  'Проведение игр "Мафия" на корпоративе возможно в ресторане, кафе, в офисе, на природе или дома в удобное для вас время! Возможен выезд по всей Латвии. Продолжительность мероприятия от 3 часов и более. Одновременно за столом могут играть от 8 до 13 человек. Стоимость проведения корпоратива для каждой компании индивидуальна и зависит от количества игроков, места и продолжительности.',
  "В услугу «организация игр в Мафию» входит:",
  "выезд к вам профессиональных ведущих;",
  "предоставление атрибутики для игры;",
  "обучение игре новичков (правила и основные стратегии игры);",
  "проведение необходимого количества игр;",
  "фотограф* (оплачивается отдельно);",
  "помощь в подборе места для проведения игр (при необходимости).",
];

const LV_TRANSLATIONS = [
  "Spēle mafija",
  "Galvenā",
  "Klubs",
  "Noteikumi",
  "Galerija",
  "Korporatīvs",
  "Spēle",
  "Mafija",
  "Mafija – ir psiholoģiska komandas lomu spēle ar detektīva sižetu, kas ļaus Jums jautri un aizraujoši pavadīt laiku draugu vai kolēģu kompānijā.",
  "Ir pienākusi kārta izvēlēties, kurā pusē esat Jūs...",
  "Klubs",
  "Mūsu elitārs klubs pastāv un funkcionē Rīgā kopš 2010. gada. Katru nedēļu notiek „Mafijas” bāzes spēles, kuras vienmēr ir atvērtas pozitīviem cilvēkiem, kuri vēlas nākt un pievienoties. Katru ceturtdienu mēs tiekamies un spēlējam „Mafiju” Rīgā, Biķernieku ielā 14 - kafejnīcā „Miranda” no 19:00 līdz 23:00. Mūs ir viegli atrast, kā arī ir pieejama bezmaksas stāvvieta. Katru ceturtdienu no savas puses nodrošinām arī atsaucīgus spēles vadītājus, patīkamu atmosfēru un draudzīgus spēlētājus.",
  "Cilvēki ierodas, lai dalītos ar jaunumiem, iepazītos ar jauniem draugiem, atrast otras pusītes un pats galvenais, lai ļautos aizrautīgām „mafijas” spēlēm.",
  "Spēle palīdz cilvēkiem atraisīties, tikt galā ar iekšējām bailēm, iemāca formulēt un aizstāvēt savu pozīciju un domas, kā arī attīsta loģisko domāšanu. Bez visa šī tiek pilnveidotas arī oratoriskās un aktiermeistarības spējas. Kļūt par kluba biedru var jebkurš interesents. To apmeklē ļaudis visdažādākajos vecumos. Tiek atsevišķi arī organizētas spēles priekš bērniem sākot no 10 gadu vecuma.",
  "Mēs nepraktizējam un neatbalstām nenormētu leksiku, personiskus aizvainojumus unnesamērīgu alkohola lietošanu.",
  "Ar prieku Jūs gaidīsim jau tuvākajā ceturtdienā!",
  "Noteikumi",
  "Pamatinformācija",
  "Noteikumu pārkāpumi",
  "Disciplinārais reglaments",
  "Spēles dalībnieku skaits: 8-13 spēlētāji. Spēlētāji, izvelkot kārtis, pēc nejaušības principa dalās divās komandās – „sarkanajos” (miermīlīgie iedzīvotāji) un „melnajos” (mafija). „Sarkano” komandā ir divas spēles lomu kārtis un šīs kārtis atšķiras no pārējām ( tās ir komisārs un ārsts). Spēles vadītājs ievada spēli un reglamentē tās etapus. Spēlei ir divas pamatfāzes: „nakts” un „diena”. „Sarkanie” uzvar gadījumā, ja no spēles ir izbalsoti visi „melnās” komandas pārstāvji. „Melnie” uzvar gadījumā, ja pie galda paliek vienāds skaits abu komandu pārstāvju.",
  "Spēles sākums",
  "Sēžot pie galda, spēlētāji pēc kārtas izvēlas spēļu kārti un iepazīstas ar to. Kad visi spēlētāji ir saņēmuši savas „lomas pilsētā”, notiek spēlētāju iepazīšanās vienam ar otru pēc noteiktas tēmas (vadītājs izvēlas tēmu atkarībā no publikas).",
  "Pirmā spēles nakts",
  "Vadītājs paziņo: ”Pamostas mafija!” un spēlētāji , kas saņēmuši „melnās” kārtis, noņem no sejas maskas vizuālajam kontaktam vienam ar otru. Vadītājs paziņo: ”Mafija aizmieg!”. Pēc šiem vārdiem „melnie” spēlētāji aizklāj sejas ar maskām.Spēlei turpinoties, vadītājs paziņo: „Pamostas komisārs!” un spēlētājs, kas saņēmis attiecīgo kārti, noņem masku, lai iepazītos ar vadītāju. Pēdējo vadītājs „modina” ārstu. Redzot viņa seju bez maskas vadītājs paziņo: ”Ārsts aizmieg!”. Ja spēlē vairāk nav lomu kāršu, tad vadītājs paziņo: ”Pilsēta pamostas”.",
  "Pirmā spēles diena",
  "Spēlētāji noņem maskas un trīs minūšu laikā visiem ir iespēja izteikties savā starpā, uzdot viens otram jautājumus un atklāt mafiju pie galda.",
  "Kandidātu nominēšana izbalsošanai",
  "Pēc tā, kad visi spēlētāji beiguši apspriešanu (pagājušas trīs minūtes), vadītājs pēc kārtas (sākot ar pirmo spēlētāju) dod iespēju katram izteikties 15 sekundes. Šajā laika periodā spēlētājam nepieciešams izvirzīt vienu vai divus kandidātus uz izbalsošanu. Iemesls kandidatūrām var būt tikai viens – norādītais spēlētājs (spēlētāji) pēc viņa viedokļa ir „mafija”. Neizvirzīt uz izbalsošanu nevienu kandidātu spēlētājam nav atļauts. Gadījumā, ja pie galda ir palicis tikai viens „melnās” komandas pārstāvis, spēlētāji izvirza tikai vienu kandidātu. Savu runu spēlētājs noslēdz ar vārdiem: „paldies” vai „nākamais”, vai arī viņu pārtrauc vadītājs, ja ir pārsniegta 15 sekunžu robeža.",
  "Attaisnošanās",
  "Vadītājs paziņo visai „pilsētai” par kandidātiem, kas saņēmuši vislielāko balsu skaitu (parasti – pirmā un otrā vieta, vai arī spēlētāji, kas dala pirmo vietu). Nosauktajiem kandidātiem ir dotas 30 sekundes, lai attaisnotos un izskaidrotu „pilsētai” kāpēc viņi nav mafija, un kāpēc nebalsot pret viņiem. Šajā laikā viņi var analizēt situāciju pie galda un apvainot citus spēlētājus piederībai pie „melnās” komandas.",
  "Balsošana",
  "Vadītājs atgādina „pilsētai” kandidātus uz izbalsošanu un lūdz visiem paņemt rokās maskas. Balsošana notiek spēlētāju numuru augošā secībā (1, 2, 3…13). Precīzākai balsu uzskaitei pret konkrēto kandidātu ,vadītājs skaita līdz trīs un reģistrē pacelto masku skaitu. Attiecībā uz katru kandidātu notiek atsevišķs balsojums. Atteikties no balsojuma spēlētājiem nav atļauts un balsot drīkst tikai vienu reizi pret vienu spēlētāju. Ja kāda spēlētāja maska tika pacelta pirms vai pēc komandas „trīs”, tādā gadījumā spēlētāja balss automātiski tiek ieskaitīta pret pēdējo no visiem izvirzītajiem kandidātiem. Vadītājs seko godīgumam šī jautājuma risināšanas gaitā un kontrolē balsu uzskaitīšanu. Kandidāts, kas tiek izbalsots, nedrīkst balsot pret sevi. Vadītājs tam seko un šādu rīcību izlabo.Ja balsu skaits ir vienāds, tiek paziņota atkārtota balsošana. Šādā gadījumā kandidātiem uz izbalsošanu tiek dotas papildus 30 sekundes sevis attaisnošanai. Ja balsu skaits atkal ir vienāds, tiek paziņota trešā balsošana.Iznākums Nr. 1 – šajā gadījumā visiem kandidātiem ir jāpamet spēle. Iznākums Nr.2 – visi kandidāti spēli turpina. Nominētie spēlētāji vairs nepiedalās trešajā balsojumā. Visas balsošanas pie galda notiek uz skaitu „trīs”.Ja pie galda ir palikuši 4 spēlētāji, „iznākums Nr.1” nav iespējams un vadītājs turpina spēli balstoties uz „iznākumu Nr.2”. Jebkurā spēles situācijā, kura notikusi spēlētāja vainas dēļ un apšauba balsojuma godīgumu, vadītājs var peiņemt savu galējo lēmumu harmoniskai spēles turpināšanas gaitai.Spēlētājs, kas pamet spēles galdu, atklāj savu kārti un viņam tiek dotas 15 sekundes noslēdzošajai runai.",
  "Nakts",
  "Vadītājs pasludina: ”Iestājas nakts, pilsēta aizmieg!”. Pēc tā, kad visi spēlētāji ir aizklājuši sejas ar maskām un „pilsētā” ir iestājies klusums, vadītājs dod komandu: ”Pamostas mafija!”.„Melnā” komanda atklāj sejas un ar žestiem (skatieniem) mēģina sarunāt savā starpā upuri. Ja šis process ieilgst, vadītājs paziņo:” Neredzu koordinētu šāvienu!”. Ja arī šajā gadījumā mafijai nav kopēja „nakts lēmuma”, vadītājs dod komandu: ”Mafija aizmieg!”. Dotajā situācijā skaitās, ka mafija ir aizšāvusi garām un nosaucot rezultātus par pagājušo nakti, to paziņo vadītājs ( vai arī otrādi, tiek nosaukts upuris, koordinēta šāviena gadījumā). Pēc tā, kad mafija ir „aizmigusi”, vadītājs dod komandu: ”Pamostas komisārs!”. Spēlētājs ar attiecīgo kārti noņem masku no sejas un norāda uz spēlētāju, kuru vēlas pārbaudīt piederībai „melnajai” komandai. Vadītājs dod „komisāram” patiesu informāciju vai norādītais spēlētājs ir vai nav mafija. Pēc šīs darbības „komisārs aizmieg”. Nosaucot pagājušās nakts rezultātus, vadītājs paziņo „komisāra” pārbaudes rezultātus, nekonkretizējot, kurš pārbaudīja un kuru pārbaudīja. Gadījumā, ja naktī „mafija novāc komisāru”, nakts pārbaudes rezultāts netiek izpausts. Pēc tā, kad „komisārs aizmieg”, vadītājs paziņo: ”Pamostas ārsts”. Spēlētājs ar attiecīgo kārti atklāj seju un norāda uz spēlētāju, kuru viņš vēlās glābt no mafijas šāviena. Bez informācijas par „naktī notikušo šāvienu”, „ārsts” izvēlas „pacientu”, balstoties uz saviem uzskatiem un intuīciju. „Ārsts” var „ārstēt” arī pats sevi. „Ārsts” nedrīkst „ārstēt” vienu un to pašu spēlētāju divas reizes pēc kārtas. Ja ārsts uzmin spēlētāju, kuru ir „nošāvusi mafija”, tad tas spēlētājs ir glābts no „šāviņa”. Vadītājs, nosaucot „ārsta” darbību rezultātus, nenorāda, kuru un kurš ir „ārstējis”, tiek paziņots tikai fakts vai „iedzīvotājs” ir izglābts vai nē. Pēc tā, kad visi lomu spēlētāji naktī ir bijuši „pamodināti”, pie spēļu galda „iestājas rīts” un visi noņem maskas. Vadītājs paziņo „mafijas nakts izrēķināšanos” un „komisāra” pārbaudes (ja nav „nošauts”). „Ārsta” darba rezultātu nosauc, ja ir uzminējis „upuri” un attiecīgi ir to izglābis.Mafijas „nošautais” spēlētājs pamet galdu un atklāj kārti. Viņam ir 15 sekundes pēdējiem vārdiem. Ja „nošautais” spēlētājs ir „komisārs” viņam netiek dota iespēja izteikties.",
  "Otrā spēles diena",
  "Turpmāk spēle turpinās kā secīgi: spēles diena – kandidatūru izvirzīšana – attaisnošanās- balsošana – spēles nakts. Spēle turpinās līdz nebūs sasniegti kādas komandas uzvaras nosacījumi, ko arī paziņos vadītājs.",
  "Zvēresta izteikšana jebkurā formā vai tā analogs;",
  "Jebkāda veida derības vai tā analogs;",
  "Apzināta skatīšanās cita kārtīs informācijas iegūšanai vai citi ar spēli nesaistīti informācijas iegūšanas veidi;",
  "Ieteikumi no skatītāju vidus;",
  "Apvainojoši izteikumi pret citiem spēlētājiem, vadītāju, lamu vārdu pielietošana;",
  "„Nakts” padomi, sarunas(jebkādas skaņas) zem maskas vai žestikulācija;",
  "Netīša skatīšanās „nakts” laikā;",
  "„Nakts” pieskārieni;",
  "Spēļu galda pamešana pēc savas vēlēšanās;",
  "Sitieni pa spēļu galdu, neētiska izturēšanās pret citiem spēlētājiem, vadītāju, strīdi ar vadītāju;",
  "Pārlieka žestu izmantošana, kas var traucēt citiem spēlētājiem;",
  "Runāšana laikā, kad vārds nodots citam spēlētājam, tajā skaitā arī izsauksmes un čukstēšana;",
  "Reliģijas, nacionālās piederības un politiskās tēmas.",
  "Noteikumu pārkāpumus fiksē vadītājs.",
  "Spēlētāji, kas pārkāpuši noteikumus, tiek sodīti. Šādā veidā viņi saņem aizrādījumus (trīs aizrādījumi nozīmē diskvalifikāciju un spēlētājs ir spiests pamest galdu).",
  "Spēlētājs var arī tikt mutiski brīdināts, lēmumu par nedisciplianēto spēlētāju pieņem vadītājs atkarībā no situācijas. Šādā veidā tiek nodrošināta harmoniska turpmākā spēles gaita.",
  "Par jebkuru „nakts” noteikumu pārkāpumu spēlētājs tiek diskvalificēts un izņemts no turpmākās spēles gaitas.",
  "Mafija – tā ir komandas spēle! Nav svarīgi kāda kārts jums ir tikusi, galvenais ir Jūsu komandas uzvara. Pametot galdu, centieties ar savu runu palīdzēt komandai! Protams, ja vien Jūs neesat mafija....",
  "Korporativs",
  "Nosvinēt dzimšanas dienu, sarīkot darba vai bērnu ballīti, kā arī atzīmēt jebkuru citu jubileju „Mafijas” stilā ir ļoti moderni un oriģināli.",
  "„Mafija” – ir ne tikai aizraujoša, bet arī ļoti stilīga spēle. Tā saliedē kolektīvu, palīdz kolēģiem labāk izprast vienam otru, kā arī ļauj vienam otru ieraudzīt jaunā gaismā.",
  "Tas ir vēl viens, jauns veids kā jautri un lietderīgi pavadīt laiku, par ko varēsiet arī vēlāk pārliecināties kopā skatoties bildes no pasākuma.",
  "Lai novadītu „Mafijas” spēles, mēs nodrošinām:",
  "profesionālu spēles vadītāju;",
  "atbilstoši pielāgotu mūzikas pavadījumu;",
  "„mafijas” kārtis;",
  "maskas un citu atribūtiku.",
  "Spēles „Mafija” vadīšana kolektīviem pasākumiem ir iespējama restorānos, kafejnīcās, birojos, brīvā dabā, kā arī jūsu mājās, jebkurā Jums brīvā laikā. Izbraucam visas Latvijas robežās. Provizoriskais pasākuma laiks ar kuru būtu jārēķinās ir sākot ar 3 stundām un vairāk. Vienlaicīgi pie galda var spēlēt no 8 līdz 13 cilvēkiem. Pasākuma organizēšanas un novadīšanas izmaksas ir atkarīgas no cilvēku skaita, vietas un vakara garuma, līdz ar ko, ar katru klientu tiek apspriestas individuāli.",
  "„Mafija” spēlēs organizēšanas pakalpojumos tiek iekļauts arī:",
  "profesionālu spēles vadītāju izbraukšana pie jums;",
  "iepazīstināšana ar spēles atribūtiku;",
  "spēles apmācīšana jauniem spēlētājiem (noteikumi un spēles pamatprincipi);",
  "nepieciešamu spēļu skaitu novadīšana;",
  "fotogrāfs (tiek apmaksāts atsevišķi);",
  "spēles norises vietas piemeklēšana (ja tas būs nepieciešams).",
];
