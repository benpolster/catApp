
const regularCats = {
  bagira: { name: "בגירה", image: "images/bagira.png", short: "פלאפית, קנאית, מלכת הבית שלא יוצאת לשום מקום.", lore: "בגירה אוהבת פינוקים, מתה על להיות על הידיים, נעימה ופלאפית בטירוף, שונאת חתולות, אוהבת זכרים, וקנאית מסריחה שלא יוצאת מהבית. היא נסיכת פנים עם לב של כרית וחוש בעלות של עורך דין.", tags: ["פינוקים", "ידיים עכשיו", "קנאית", "אנטי חוץ"] },
  sumsum: { name: "סומסום", image: "images/sumsum.png", short: "דוכס גרגרן, שמן, אוהב חתולות וליטופים, נווד בלתי נלאה.", lore: "סומסום הוא הדוכס הגרגרן של הממלכה: שמן, אפור, מאוהב בחטיפים, אוהב חתולות, אוהב ליטופים, ונווד אין־סופי. יש לו אנרגיה של מי שנעלם לשלושה רחובות וחוזר כי מישהו פתח טונה.", tags: ["גרגרן", "ליטופים", "נווד", "דוכס"] },
  chag: { name: "צ׳אג", image: "images/chag.png", short: "האמא הרעה של סינדרלה ושלטון ברזל על כל מי שנושם.", lore: "צ׳אג שולטת בבית ביד ברזל ובכף פרווה. אם משהו לא עובד בכוח — היא עובדת ביותר כוח. חייבת פינוקים רק לעצמה, מכפכפת את כולם, ושונאת זכרים בעקביות מעוררת השראה.", tags: ["דיקטטורית", "פינוקים שלי", "כפכופים", "אנטי זכרים"] },
  tomi: { name: "טומי", image: "images/tomi.png", short: "זקנה, פחדנית, מיללת הרבה, אבל תמיד חוזרת הביתה.", lore: "טומי היא גברת מבוגרת עם חרדות, מסעות קצרים, וקול שלא מפסיק. היא מטיילת, בורחת, נבהלת, ואז חוזרת כאילו כלום. בנוסף היא אוהבת ללוש בני אנוש כאילו הם בצק עם נשמה.", tags: ["זקנה עם סטייל", "פחדנית", "מייללת", "לישה"] },
  blue: { name: "בלו", image: "images/blue_akila.png", short: "אחד מצמד הטרור. רץ אחרי כפות רגליים ולא מכיר מנוחה.", lore: "בלו הוא אחד הילדים של בגירה: שטותניק, שובב, רודף אחרי כפות רגליים, שותה חלב, מטפס על הספה, ולא נח לרגע. הוא תינוק כאוס עם פרצוף תמים של שקרן מקצועי.", tags: ["גור טרור", "חלב", "כפות רגליים", "בלי ברקסים"] },
  akila: { name: "אקילה", image: "images/blue_akila.png", short: "האחות התאומה עם אותה אנרגיית פשע, רק עם עוד חוצפה בעיניים.", lore: "אקילה היא הילדה של בגירה ואחותו לפשע של בלו: שובבה, מטפסת, רצה אחרי כפות רגליים, שותה חלב, ולא יודעת מה זה לנוח. אם יש בלגן — כנראה היא חשבה עליו חצי דקה קודם.", tags: ["תאומה מסוכנת", "ספה זה הר", "חלב", "כאוס"] },
  gary: { name: "גרי", image: "images/gary.png", short: "אצילי, חכם, עדין, ואוהב בני אדם באופן מחשיד.", lore: "גרי הוא אציל, חכם, עדין, אוהב בני אדם, רץ מהר, ופורץ הביתה כשמתאפשר. יש לו וייב של גנב־ג׳נטלמן שחושב שכל בית הוא בעצם שלו אם רק פתחו רגע דלת.", tags: ["אצילי", "אוהב אנשים", "רץ מהר", "פורץ מכובד"] }
};
const silverCats = {
  kachulit: { name: "כחולית", image: "images/kachulit.png", short: "בין הראשונות, לרגע גם המועדפת, נשאר לה מקום חם בלב.", lore: "כחולית הייתה בין הראשונות ולרגע גם המועדפת. לצערה הגיעה למצב של עיוורון והייתה חצי גמורה במשך תקופה ארוכה. עדיין היה לה מקום חם בלב — ולא יותר מזה.", tags: ["OG כסופה", "מקום חם בלב", "מיתולוגית", "נדירה"] },
  poof: { name: "פוף", image: "images/poof.png", short: "רזה, ראש גדול, אשכים בלתי ניתנים להתעלמות, ופוזל באהבה.", lore: "פוף היה חתול רזה עם ראש גדול ואשכים שלא מתפספסים מרחוק. הוא קיבל איזה אירוע ופזל כל היום. הרבה שכל לא היה שם, אבל אכן מתוק ברמה מסוכנת.", tags: ["OG כסוף", "ראש גדול", "פוזל", "מתוק מדי"] }
};
const goldCards = {
  mitch: { name: "מיצ", image: "images/mitch.png", short: "השנייה בשושלת. קטנה, רזה, מלאכית, ומנוזלת באופן הירואי.", lore: "מיצ הייתה השנייה. היא ניסתה להמשיך את השושלת אך נפלה בקרב לאחר מאבק עיקש בצינון כרוני. קטנה, רזה, בוגרת, עם כנפיים של מלאך כי אגדות לא באמת הולכות לשום מקום.", tags: ["OG שנייה", "מלאכית", "צינון כרוני", "אגדה"] },
  ketem: { name: "כתם", image: "images/ketem.png", short: "הארנבת הלבנה. מסריחה, חופרת ברצפה, ותכלס פשוט שם.", lore: "כתם היא הארנבת הלבנה והשמנה של החבורה. היא תמיד מסריחה, תמיד חופרת ברצפה, ואין לה באמת תכלית ברורה. היא פשוט שם — ובאופן בלתי מוסבר זה הפך אותה לחשובה.", tags: ["ארנבת", "שמנה", "חופרת", "פשוט שם"] },
  chavrika: { name: "חבריקה", image: "images/chavrika.png", short: "ה־OG המיתולוגית. הראשונה. האלפא. זו שהתחילה הכל.", lore: "חבריקה היא החתולה המיתולוגית — הראשונה שהייתה שם, הוגת האבולוציה, והתחלת כל השושלת. היא מתה בשיבה טובה ולכן לא יוצאת בחידון. היא קלף זהב אלוהי, מושלם, קדוש, ויפה באופן לא סביר.", tags: ["OG", "מיתולוגית", "מלאך מושלם", "התחילה הכל"] },
  joy: { name: "ג׳וי", image: "images/joy.png", short: "האחת והיחידה. כל מילה מעבר לזה באמת מיותרת.", lore: "ג׳וי הייתה הכלבה של המשפחה. היא האחת והיחידה. אין צורך להרחיב, אין צורך להצדיק, אין צורך להסביר. זה קלף הסיום, האלוהים בפני עצמו, השלמות עטופה בפרווה.", tags: ["הכלבה", "אלוהות", "שלמות", "האחת והיחידה"] }
};
const hokeCard = { name: "הוק", image: "images/hoke.png", short: "השרקן האהוב, חברו הטוב של ג׳וי, נסיך שמתחבא.", lore: "הוק היה השרקן האהוב. הוא אהב להתחבא והיה חברו הטוב של ג׳וי. שרקן נסיך, קטן בגודל, ענק במעמד, ומפעיל רשמי של משחק ניחוש השיר.", tags: ["שרקן נסיך", "מתחבא", "חבר של ג׳וי", "משחק השיר"] };
const labCats = [
  {
    "id": "poakila",
    "name": "פואקילה",
    "parents": [
      "poof",
      "babies"
    ],
    "short": "שליח עירוני עם ראש גדול, מהירות מוגזמת, ויכולת להסתבך לפני הכתובת.",
    "lore": "פואקילה הוא שילוב של פוף ושל ילדי הכאוס. שליח מהיר, מבולבל, קצת פוזל, והרבה יותר בטוח בעצמו ממה שהמציאות מאפשרת. החבילה בדרך. השפיות פחות.",
    "tags": [
      "פוף × בלו/אקילה",
      "שליח כאוס",
      "מהירות",
      "ראש גדול"
    ],
    "image": "images/lab/poakila.png"
  },
  {
    "id": "gromsum_concierge",
    "name": "גרומסום",
    "parents": [
      "gary",
      "sumsum"
    ],
    "short": "קונסיירז׳ יוקרתי שמסדר חדרים רק למי שהגיע עם חטיפים.",
    "lore": "גרומסום מערבב את האצילות של גרי עם הכרס והחוצפה של סומסום. הוא פותח דלתות, סוגר קערות, ושופט אורחים לפי איכות הנשנוש שלהם.",
    "tags": [
      "גרי × סומסום",
      "קונסיירז׳",
      "חטיפים",
      "אציל רעב"
    ],
    "image": "images/lab/gromsum_concierge.png"
  },
  {
    "id": "puchlit_guard",
    "name": "פוחלית",
    "parents": [
      "kachulit",
      "poof"
    ],
    "short": "מאבטחת לילה שרואה חצי, חושדת בכולם, וכותבת דו״ח גם לרוח.",
    "lore": "פוחלית היא שילוב של כחולית ופוף: עיני OG, ראש גדול, חוש חשדנות מפותח ואמונה עמוקה שכל כיסא מסתיר משהו. אם אין בעיה, היא תמציא אחת.",
    "tags": [
      "כחולית × פוף",
      "אבטחה",
      "חשדנות",
      "OG מוזר"
    ],
    "image": "images/lab/puchlit_guard.png"
  },
  {
    "id": "popgira_glam",
    "name": "פופגירה",
    "parents": [
      "poof",
      "bagira"
    ],
    "short": "גורו גלאם עם גוף רזה, ראש ענק, ופלאף עם דעות.",
    "lore": "פופגירה לקחה מפוף את הראש והבלבול, ומבגירה את הפינוק, הקנאה והאמונה שהיא משפיענית בינלאומית. היא לא עושה לוק — היא מכריזה עליו.",
    "tags": [
      "פוף × בגירה",
      "גלאם",
      "פלאף",
      "דעות בלי בקשה"
    ],
    "image": "images/lab/popgira_glam.png"
  },
  {
    "id": "akilomi",
    "name": "אקילומי",
    "parents": [
      "babies",
      "tomi"
    ],
    "short": "שליחת פיג׳מה שנבהלת מהר ומגיעה מהר יותר.",
    "lore": "אקילומי היא ערבוב של ילדי הכאוס עם נשמת החרדה של טומי. היא רצה בלילה, מתנצלת בפני הדלת, ועדיין איכשהו מגיעה בזמן.",
    "tags": [
      "בלו/אקילה × טומי",
      "שליחה",
      "פחדנית מהירה",
      "פיג׳מה"
    ],
    "image": "images/lab/akilomi.png"
  },
  {
    "id": "gromsum_taxi",
    "name": "גרומסום",
    "parents": [
      "gary",
      "sumsum"
    ],
    "short": "נהג מונית לילה, אצולה על ההגה, חטיף בתא כפפות.",
    "lore": "גרומסום בגרסת הכביש: גרי נותן לו קלאסה, סומסום נותן לו רעב, והוא נותן לכולם שיחות נפש שלא ביקשו. הנסיעה כוללת שיפוט חינם.",
    "tags": [
      "גרי × סומסום",
      "מונית",
      "לילה",
      "חטיף ביטוחי"
    ],
    "image": "images/lab/gromsum_taxi.png"
  },
  {
    "id": "begrila",
    "name": "בגרילה",
    "parents": [
      "bagira",
      "chag"
    ],
    "short": "מלכת הסלון שבודקת כריות, מחרימה חיבוקים, ושולטת בכל השטח.",
    "lore": "בגרילה משלבת את הפלאף הקנאי של בגירה עם שלטון הברזל של צ׳אג. היא לא יוצאת מהבית כי הבית כבר שלה, שלכם, ושל כל מי שנשם ליד הכרית.",
    "tags": [
      "בגירה × צ׳אג",
      "מלכת סלון",
      "קנאה",
      "שלטון כריות"
    ],
    "image": "images/lab/begrila.png"
  },
  {
    "id": "grakila_lifeguard",
    "name": "גרקילה",
    "parents": [
      "gary",
      "babies"
    ],
    "short": "מציל חופים שרץ מהר, נלחץ מהר יותר, ומסדר פוני לפני כל הצלה.",
    "lore": "גרקילה לוקח מגרי את האצילות והמהירות, ומבלו/אקילה את חוסר הבלמים. הוא נכנס דרמטית לכל סיטואציה ומבקש מחיאות כפיים לפני הפעולה.",
    "tags": [
      "גרי × בלו/אקילה",
      "מציל",
      "רץ מהר",
      "דרמה"
    ],
    "image": "images/lab/grakila_lifeguard.png"
  },
  {
    "id": "kachpoof_forecast",
    "name": "כחופוף",
    "parents": [
      "kachulit",
      "poof"
    ],
    "short": "חזאי בכיר שרואה חלק ומנחש את השאר בביטחון מוחלט.",
    "lore": "כחופוף הוא תחזית עם פרווה: קצת כחולית, קצת פוף, הרבה מבט של “אני יודע” בלי שום הוכחה. מחר יהיה בין שמש לדרמה.",
    "tags": [
      "כחולית × פוף",
      "חזאי",
      "ניחושים",
      "ביטחון מזויף"
    ],
    "image": "images/lab/kachpoof_forecast.png"
  },
  {
    "id": "tomchag_callcenter",
    "name": "טומצ׳אג",
    "parents": [
      "tomi",
      "chag"
    ],
    "short": "מוקד תלונות שמפחד מהטלפון ואז עונה כדי לנזוף בו.",
    "lore": "טומצ׳אג משלבת את טומי שנבהלת מכל רעש עם צ׳אג שמנהלת את העולם בכוח. היא מפחדת מכם, אבל עדיין תסביר לכם למה אתם טועים.",
    "tags": [
      "טומי × צ׳אג",
      "מוקד תלונות",
      "חרדה",
      "נזיפה"
    ],
    "image": "images/lab/tomchag_callcenter.png"
  },
  {
    "id": "togary",
    "name": "טוגרי",
    "parents": [
      "tomi",
      "gary"
    ],
    "short": "ספרן לילה אצילי שחוזר תמיד למדף הלא נכון.",
    "lore": "טוגרי הוא גרי עם נשמה של טומי: עדין, חכם, קצת חרד, ומיילל בספרייה למרות השלט. הלך לאיבוד בין המדפים וחזר כדי לספר על זה.",
    "tags": [
      "טומי × גרי",
      "ספרן",
      "אצילי חרד",
      "מיאו בשקט"
    ],
    "image": "images/lab/togary.png"
  },
  {
    "id": "sumgary",
    "name": "סומגרי",
    "parents": [
      "sumsum",
      "gary"
    ],
    "short": "קונסיירז׳ לילה, אציל עם תיאבון, וחדרים שמוכנים רק למביאי חטיף.",
    "lore": "סומגרי הוא הצד המנומס של השילוב בין סומסום לגרי. הוא יעזור לכם בחיוך, ימליץ על כרית, ואז יבדוק אם הבאתם מנחה ראויה.",
    "tags": [
      "סומסום × גרי",
      "מלון",
      "שירות מצוין",
      "תיאבון 99"
    ],
    "image": "images/lab/sumgary.png"
  },
  {
    "id": "sumbloo_chef",
    "name": "סומבלו",
    "parents": [
      "sumsum",
      "babies"
    ],
    "short": "שף קינוחים עם קרם על השפם וחוסר יכולת לאכול רק ביס.",
    "lore": "סומבלו הוא סומסום אחרי שפגש את האנרגיה של בלו ואקילה במטבח. הוא לא טועם כדי לבדוק איכות — הוא טועם כי הכול שלו.",
    "tags": [
      "סומסום × בלו/אקילה",
      "שף קינוחים",
      "חלב נשפך",
      "כאוס מתוק"
    ],
    "image": "images/lab/sumbloo_chef.png"
  },
  {
    "id": "chomi_judge",
    "name": "צ׳ומי",
    "parents": [
      "chag",
      "tomi"
    ],
    "short": "שופטת ביתית שגוזרת עונשים על מי שנשם חזק.",
    "lore": "צ׳ומי היא שילוב של טומי וצ׳אג: נבהלת מהראיות, אבל קובעת את פסק הדין. אצלה אין ערעורים, רק פיצויים בליטופים.",
    "tags": [
      "צ׳אג × טומי",
      "בית משפט",
      "נזיפות",
      "דרמה"
    ],
    "image": "images/lab/chomi_judge.png"
  },
  {
    "id": "tomkila_lostfound",
    "name": "טומקילה",
    "parents": [
      "tomi",
      "babies"
    ],
    "short": "פקידת אבדות ומציאות שמוצאת הכול חוץ משקט נפשי.",
    "lore": "טומקילה ירשה מטומי את הנטייה לדאוג ומבלו/אקילה את הנטייה להזיז כל דבר. היא תמצא את הגרב שאיבדתם וגם את ההחלטה הגרועה שעשיתם ב־2019.",
    "tags": [
      "טומי × בלו/אקילה",
      "אבדות ומציאות",
      "בלגן",
      "גרביים"
    ],
    "image": "images/lab/tomkila_lostfound.png"
  },
  {
    "id": "bagitom_radio",
    "name": "בגיטום",
    "parents": [
      "bagira",
      "tomi"
    ],
    "short": "שדרנית לילה שמשדרת דרמות, מיאו, ותה קר מדי.",
    "lore": "בגיטום היא בגירה עם חרדות של טומי: חייבת תשומת לב, מפחדת מרעשים, ומדברת למיקרופון כאילו כל העולם ביקש עדכון רגשי.",
    "tags": [
      "בגירה × טומי",
      "רדיו לילה",
      "דרמה",
      "פינוק חרדתי"
    ],
    "image": "images/lab/bagitom_radio.png"
  },
  {
    "id": "grikila_courier",
    "name": "גריקילה",
    "parents": [
      "gary",
      "babies"
    ],
    "short": "מוסר משלוחים במהירות, מטפס על כל דבר, ונעלם בדיוק כשצריך סדר.",
    "lore": "גריקילה הוא גרקילה בענייני עבודה: רגליים של גרי, מוח של גור טרור, ותיק משלוחים שהוא יותר אמונה ממקצוע.",
    "tags": [
      "גרי × בלו/אקילה",
      "משלוחים",
      "מהירות",
      "טיפוס"
    ],
    "image": "images/lab/grikila_courier.png"
  },
  {
    "id": "bagirolit_watch",
    "name": "בגירולית",
    "parents": [
      "bagira",
      "kachulit"
    ],
    "short": "שומרת על החלון, בוחנת כל תנועה מבחוץ, ולא באמת מתכוונת לצאת.",
    "lore": "בגירולית מערבבת את הביתיות הקנאית של בגירה עם ה־OG העיוורת־מלכותית של כחולית. היא רואה הכול, גם כשהיא לא רואה.",
    "tags": [
      "בגירה × כחולית",
      "משמרת חלון",
      "קנאה",
      "בית זה עולם"
    ],
    "image": "images/lab/bagirolit_watch.png"
  },
  {
    "id": "bagiri_hall",
    "name": "בגירי",
    "parents": [
      "bagira",
      "gary"
    ],
    "short": "נכנס בלי הזמנה, עולה על הידיים, ומפיץ קסם עם קנאה קלה ברקע.",
    "lore": "בגירי הוא הפגישה בין גרי הג׳נטלמן לבגירה הנסיכה. הוא אלגנטי, רך, אוהב בני אדם, ובטוח שכל חיבוק בעולם שייך לו.",
    "tags": [
      "בגירה × גרי",
      "אורח מלכותי",
      "חיבוקים",
      "קנאה אלגנטית"
    ],
    "image": "images/lab/bagiri_hall.png"
  },
  {
    "id": "chapoof_foreman",
    "name": "צ׳אפוף",
    "parents": [
      "chag",
      "poof"
    ],
    "short": "מפקח חפירות שחושב שחול זה לא עבודה, זה דרך חיים.",
    "lore": "צ׳אפוף משלב את כוח השלטון של צ׳אג עם הראש הגדול והבלבול של פוף. הוא לא רע, הוא פשוט יודע מה נכון לחפור.",
    "tags": [
      "צ׳אג × פוף",
      "מפקח חפירות",
      "ראש גדול",
      "עיקשות"
    ],
    "image": "images/lab/chapoof_foreman.png"
  },
  {
    "id": "sumbloo_fridge",
    "name": "סומבלו",
    "parents": [
      "sumsum",
      "babies"
    ],
    "short": "מומחה בפשיטות לילה ובביקורת איכות חלב לפני נשימת לב.",
    "lore": "סומבלו בגרסת המקרר: סומסום נתן לו תיאבון, הילדים נתנו לו מהירות, והמקרר נתן לו קריירה. כשאתה ישן — הוא צועד.",
    "tags": [
      "סומסום × בלו/אקילה",
      "מקרר",
      "חלב",
      "פשיטת לילה"
    ],
    "image": "images/lab/sumbloo_fridge.png"
  },
  {
    "id": "chagary",
    "name": "צ׳אגרי",
    "parents": [
      "chag",
      "gary"
    ],
    "short": "מחלק הוראות בנימוס, משתלט על הבית במהירות, ומעמיד זכרים לדום.",
    "lore": "צ׳אגרי לוקח מגרי את האצילות והכניסה המרשימה, ומצ׳אג את היכולת לגרום לכולם להרגיש שהם עובדים אצלו.",
    "tags": [
      "צ׳אג × גרי",
      "מלך הבית",
      "משילות",
      "נימוס מאיים"
    ],
    "image": "images/lab/chagary.png"
  },
  {
    "id": "tomlit",
    "name": "טומלית",
    "parents": [
      "tomi",
      "kachulit"
    ],
    "short": "אחראית וילונות וכרבולי חירום, חוזרת תמיד לשמיכה הקבועה.",
    "lore": "טומלית היא טומי עם נוכחות OG של כחולית: מיללת במשמרת, בודקת רוח, חוזרת הביתה, ומנהלת כרבולים כאילו זו מחלקת ביטחון.",
    "tags": [
      "טומי × כחולית",
      "כרבולים",
      "וילונות",
      "חזרה הביתה"
    ],
    "image": "images/lab/tomlit.png"
  },
  {
    "id": "bagipoof",
    "name": "בגיפוף",
    "parents": [
      "bagira",
      "poof"
    ],
    "short": "בודק איכות כריות, תופס את כל המקומות הנוחים ולא מוכן לקום לעולם.",
    "lore": "בגיפוף הוא פוף בתוך בגירה: ראש גדול, גוף מפונק, ומחויבות עמוקה לכרית שלא הייתה שלו לפני שנייה.",
    "tags": [
      "בגירה × פוף",
      "כריות",
      "פינוק",
      "לא זז"
    ],
    "image": "images/lab/bagipoof.png"
  },
  {
    "id": "tomsum",
    "name": "טומסום",
    "parents": [
      "tomi",
      "sumsum"
    ],
    "short": "נעלמת לסיבוב קצר, חוזרת לשמיכה, ומעירה הערות קטנות על איכות הליטופים.",
    "lore": "טומסום הוא סומסום עם חרדות של טומי: גרגרן, נודד, אבל כל יציאה נגמרת בחזרה לשמיכה ובקפה רגשי.",
    "tags": [
      "טומי × סומסום",
      "חוזר הביתה",
      "ליטופים",
      "שמיכה"
    ],
    "image": "images/lab/tomsum.png"
  },
  {
    "id": "sumchag_taster",
    "name": "סומצ׳אג",
    "parents": [
      "sumsum",
      "chag"
    ],
    "short": "טועמת את כל המנות מראש, שומרת רק לעצמה, ואם חסר אוכל זאת אשמתך.",
    "lore": "סומצ׳אג היא דוכס גרגרן עם משטר צבאי. היא טועמת כדי לוודא איכות, לוקחת כדי לוודא בעלות, ונוזפת כדי לוודא שאתה זוכר מי פה המלכה.",
    "tags": [
      "סומסום × צ׳אג",
      "טעימות",
      "שליטה",
      "גרגרנות"
    ],
    "image": "images/lab/sumchag_taster.png"
  },
  {
    "id": "bagikila_kindergarten",
    "name": "בגיקילה",
    "parents": [
      "bagira",
      "babies"
    ],
    "short": "גננת כאוס שמחנכת ביד אחת ושוברת עציץ בשנייה.",
    "lore": "בגיקילה משלבת את הפינוק של בגירה עם אנרגיית הריצה של בלו ואקילה. היא מנהלת גן, אבל הגן מנהל אותה חזרה.",
    "tags": [
      "בגירה × בלו/אקילה",
      "גננת",
      "צעצועים",
      "כאוס חמוד"
    ],
    "image": "images/lab/bagikila_kindergarten.png"
  },
  {
    "id": "grikachol_detective",
    "name": "גריכחול",
    "parents": [
      "gary",
      "kachulit"
    ],
    "short": "חוקר פרטי שפורץ ברישיון כדי לבדוק אבטחה.",
    "lore": "גריכחול הוא גרי עם נשמת OG של כחולית: אצילי, שקט, חד, ומוכן להיכנס לבית רק כדי לוודא שהדלת באמת נפתחת.",
    "tags": [
      "גרי × כחולית",
      "חוקר פרטי",
      "פריצה מכובדת",
      "תיק חטיפים"
    ],
    "image": "images/lab/grikachol_detective.png"
  },
  {
    "id": "tomgira_therapy",
    "name": "טומגירה",
    "parents": [
      "tomi",
      "bagira"
    ],
    "short": "יועצת רגשות שמקשיבה, מלפפת, ואז שופטת בשקט.",
    "lore": "טומגירה היא הפלאף של בגירה עם החרדה של טומי. היא תתן לכם לדבר פתוח, תכין תה, ואז תחליט שהיא הייתה צריכה יותר תשומת לב.",
    "tags": [
      "טומי × בגירה",
      "טיפול רגשי",
      "פינוק",
      "שיפוט שקט"
    ],
    "image": "images/lab/tomgira_therapy.png"
  }
  ,
  {
    "id": "pomsum_nutrition",
    "name": "פומסום",
    "parents": [
      "poof",
      "sumsum"
    ],
    "short": "מאמן תזונה קשוח עם קערת חטיפים ביד והכחשה מלאה לכל סתירה פנימית.",
    "lore": "פומסום הוא שילוב של פוף וסומסום: גרגרן מקצועי, קצת פוזל, מאוד בטוח בעצמו, ומשוכנע שחטיף הוא חלק בלתי נפרד מאורח חיים מאוזן. הוא ייתן לכם תפריט, ואז יאכל אותו.",
    "tags": [
      "פוף × סומסום",
      "מאמן תזונה",
      "חטיפים",
      "סותר את עצמו"
    ],
    "image": "images/lab/pomsum_nutrition.png"
  },
  {
    "id": "kachomsum_lostfound",
    "name": "כחומסום",
    "parents": [
      "kachulit",
      "sumsum"
    ],
    "short": "מחזיר אבידות, שומר חטיפים לעצמו, ומוצא גרביים בקצב מחשיד.",
    "lore": "כחומסום מחבר בין הווייב ה־OG של כחולית לבין התיאבון והנדודים של סומסום. הוא מנהל מחלקת אבידות, פותר תעלומות קטנות, ומחליט לבד אם האבדה היא חטיף שמצא במקרה.",
    "tags": [
      "כחולית × סומסום",
      "אבדות ומציאות",
      "חטיפים",
      "OG מסתורי"
    ],
    "image": "images/lab/kachomsum_lostfound.png"
  },
  {
    "id": "tomeri_radio",
    "name": "טומרי",
    "parents": [
      "tomi",
      "gary"
    ],
    "short": "מגיש רדיו לילי, נלחץ מכל שאלה, אבל משאיר את הקו פתוח לכל הדרמה.",
    "lore": "טומרי הוא טומי וגרי באולפן אחד: לב רך, קול רגוע, מעט חרדה והרבה נימוס. הוא עונה לכולם, נלחץ בשבילם, וחוזר הביתה בדיוק בזמן לתה של אחרי השידור.",
    "tags": [
      "טומי × גרי",
      "רדיו לילה",
      "לב פתוח",
      "דרמה נעימה"
    ],
    "image": "images/lab/tomeri_radio.png"
  },
  {
    "id": "akilag_officer",
    "name": "אקילאג",
    "parents": [
      "babies",
      "chag"
    ],
    "short": "שוטרת גן קטנה עם כריזמה גדולה, קנסות ליטופים, וחוק אחד: היא צודקת.",
    "lore": "אקילאג היא ערבוב של אקילה/בלו עם צ׳אג: גורת כאוס שנכנסה למדים ומיד התחילה לאכוף את הגינה. היא נראית קטנה, אבל הקנסות שלה מלאי סמכות ונחישות.",
    "tags": [
      "אקילה/בלו × צ׳אג",
      "שוטרת",
      "גן חתקים",
      "סמכות חמודה"
    ],
    "image": "images/lab/akilag_officer.png"
  },
  {
    "id": "bagipoof_stylist",
    "name": "בגיפוף",
    "parents": [
      "bagira",
      "poof"
    ],
    "short": "מעצב פרווה הורס ביטחון עם דעות חדות, פפיון מוגזם, וסטייל בלתי מעורער.",
    "lore": "בגיפוף הוא עוד גרסת מערבל של בגירה ופוף: הפינוק והפלאף של בגירה פגשו את הראש הגדול והבלבול המקסים של פוף, ויצרו אייקון מספרה שלא מרשה לאף אחד לגעת לו בשיער.",
    "tags": [
      "בגירה × פוף",
      "מעצב שיער",
      "סטייל",
      "פלאף עם דעות"
    ],
    "image": "images/lab/bagipoof_stylist.png"
  },
  {
    "id": "griag_customs",
    "name": "גריאג",
    "parents": [
      "gary",
      "chag"
    ],
    "short": "מנהלת מכס מלכותית שבודקת מזוודות, שופטת נשנושים, ולא עוברת בלי כבוד.",
    "lore": "גריאג היא גרי וצ׳אג בעמדת מכס אחת: מהירה, חדה, אלגנטית ואסרטיבית. היא פותחת מזוודות בלי למצמץ, מזהה חטיף ממרחק, ומחליטה מי עובר ומי חוזר הביתה עם נזיפה.",
    "tags": [
      "גרי × צ׳אג",
      "מכס",
      "בדיקות",
      "אצילות קשוחה"
    ],
    "image": "images/lab/griag_customs.png"
  },
  {
    "id": "sumgira_spa",
    "name": "סומגירה",
    "parents": [
      "sumsum",
      "bagira"
    ],
    "short": "מלכת ספא מפונקת שמרשה לאחרים להיכנס רק אם הם מביאים לה נוח.",
    "lore": "סומגירה משלבת את אהבת הפינוקים והביתיות של בגירה עם התיאבון והכריזמה של סומסום. היא שולטת בספא, ממנה כריות, ודואגת שכל טיפול יסתיים בליטוף, חטיף ומנוחה.",
    "tags": [
      "סומסום × בגירה",
      "ספא",
      "פינוקים",
      "מלכת נוחות"
    ],
    "image": "images/lab/sumgira_spa.png"
  }

];
const labOrder = labCats.map(cat => cat.id);
const quizQuestions = [
  { q: "את/ה מקבל/ת בדואר כפכף בודד עם פתק שכתוב עליו ‘הוא יודע’. מה עושים?", a: [ { t: "שומר/ת אותו למקרה שיהיה משפט", s: ["bagira", "tomi"], og: ["kachulit"] }, { t: "בודק/ת אם הוא אכיל כי לא פוסלים חוויות", s: ["sumsum", "gary"] }, { t: "מכריז/ה עליו כראש ממשלה זמני", s: ["chag", "akila"], og: ["poof"] }, { t: "רץ/ה אחריו במסדרון כי הוא התחיל", s: ["blue", "akila"] } ] },
  { q: "באמצע חתונה מישהו מביא לך מלפפון עם כובע. מה התגובה הסבירה?", a: [ { t: "אומר/ת לו ‘סוף סוף מישהו פה לבוש בהתאם’", s: ["gary", "bagira"] }, { t: "שואל/ת אם יש גם טחינה כי זה מתפתח", s: ["sumsum", "tomi"] }, { t: "ממנה אותו לאחראי משמעת ברחבה", s: ["chag", "akila"] }, { t: "נותן/ת לו שם, מאבד/ת אותו, ובוכה קלות", s: ["blue", "akila"], og: ["kachulit"] } ] },
  { q: "בחר/י סיבה הגיונית להיכנס לארון ולצאת משם עם תעודת זהות אחרת:", a: [ { t: "הייתה שם אנרגיה לא סגורה", s: ["bagira", "tomi"] }, { t: "חשבתי שיש שם ביסלי, יצאתי עם עבר", s: ["sumsum", "gary"] }, { t: "היה צריך לארגן מחדש את השלטון הפנימי", s: ["chag", "akila"], og: ["poof"] }, { t: "נכנסתי אחרי שרוך. אין לי עוד פרטים", s: ["blue", "akila"] } ] },
  { q: "אם כיסא היה שולח לך הודעה ‘ערה?’ מה היית עונה?", a: [ { t: "‘תלוי מי שואל ומה גובה המשענת’", s: ["bagira", "gary"], og: ["kachulit"] }, { t: "‘יש לך חטיפים או שאתה סתם רהיט?’", s: ["sumsum", "tomi"] }, { t: "‘קודם תתנצל על כל הפינות שפגעו בי’", s: ["chag", "akila"] }, { t: "‘אני כבר בדרך לרדוף אחרי הרגליים שלך’", s: ["blue", "akila"] } ] },
  { q: "איזה פריט הכי מתאים לשים במוזיאון של החלטות גרועות?", a: [ { t: "מראה שאומרת ‘אל תתחיל/י איתי היום’", s: ["bagira", "chag"] }, { t: "פיתה חתומה על ידי מי שנשבע שזה הביס האחרון", s: ["sumsum", "gary"] }, { t: "קומקום שצעק פעם אחת ומאז כולם בטראומה", s: ["tomi", "bagira"], og: ["kachulit"] }, { t: "גרב שהוגדרה כחשודה ונרדפה עד המטבח", s: ["blue", "akila"], og: ["poof"] } ] },
  { q: "היקום נותן לך שלט רחוק אבל יש בו רק כפתור אחד. מה כתוב עליו?", a: [ { t: "‘תרים אותי’", s: ["bagira", "gary"] }, { t: "‘עוד משהו קטן’", s: ["sumsum", "tomi"] }, { t: "‘יותר כוח’", s: ["chag", "akila"] }, { t: "‘רוץ בלי סיבה’", s: ["blue", "akila"], og: ["poof"] } ] },
  { q: "באמצע מבחן מופיעה לפניך קערת מרק עם שפם. מה מסמנים?", a: [ { t: "ג׳ — כי המרק נראה בטוח בעצמו", s: ["gary", "bagira"] }, { t: "את המרק, עם לחם בצד", s: ["sumsum", "tomi"] }, { t: "לא מסמנים. הופכים את השולחן בשם הצדק", s: ["chag", "akila"] }, { t: "שואלים אם השפם פנוי למשחק", s: ["blue", "akila"], og: ["kachulit"] } ] }
];
const regularOrder = ["bagira","sumsum","chag","tomi","blue","akila","gary"];
const silverOrder = ["kachulit","poof"];
const goldOrder = ["mitch","ketem","chavrika","joy"];
const unlockSequence = ["mitch", "ketem", "hoke", "chavrika"];
const storage = window.sessionStorage;
const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];
const questionsWrap = qs('#questions');
const progressBar = qs('#progressBar');
const toast = qs('#toast');
let secretDelayUntil = Date.now();
function scheduleNextSecret() { secretDelayUntil = Date.now() + 10000; setTimeout(updateSecretVisibility, 10050); }
function canShowSecret() { return Date.now() >= secretDelayUntil; }
function getUnlocks() { return JSON.parse(storage.getItem('catGoldUnlocks') || '{}'); }
function setUnlocks(obj) { storage.setItem('catGoldUnlocks', JSON.stringify(obj)); }
function getStats() { return JSON.parse(localStorage.getItem('catQuizStats') || '{}'); }
function setStats(obj) { localStorage.setItem('catQuizStats', JSON.stringify(obj)); }
function getLabCollection() { return JSON.parse(localStorage.getItem('catLabCollection') || '[]'); }
function setLabCollection(arr) { localStorage.setItem('catLabCollection', JSON.stringify([...new Set(arr)])); }
function showToast(text) { toast.textContent = text; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); }
function buildQuiz() { questionsWrap.innerHTML = quizQuestions.map((item,i)=>`<section class="question"><h4>${i+1}. ${item.q}</h4><div class="options">${item.a.map((ans,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" required><span>${ans.t}</span></label>`).join('')}</div></section>`).join(''); }
function updateProgress() { const count = quizQuestions.filter((_,i)=>qs(`input[name="q${i}"]:checked`)).length; progressBar.style.width = `${count / quizQuestions.length * 100}%`; }
function computeResult(formData) { const scores = Object.fromEntries(regularOrder.map(k=>[k,0])); const ogScores = Object.fromEntries(silverOrder.map(k=>[k,0])); quizQuestions.forEach((item,i)=>{ const picked=Number(formData.get(`q${i}`)); const ans=item.a[picked]; if(!ans) return; ans.s.forEach(k=>scores[k]+=1); (ans.og||[]).forEach(k=>ogScores[k]+=1); }); const ogMax=Math.max(...Object.values(ogScores),0); const ogCandidates=Object.entries(ogScores).filter(([,v])=>v===ogMax&&v>0).map(([k])=>k); const rareChance=ogMax>=2?0.22:ogMax===1?0.08:0; if(ogCandidates.length&&Math.random()<rareChance) return ogCandidates[Math.floor(Math.random()*ogCandidates.length)]; const highest=Math.max(...Object.values(scores)); const winners=Object.entries(scores).filter(([,v])=>v===highest).map(([k])=>k); return winners[Math.floor(Math.random()*winners.length)]; }
function showResult(key) { const cat = regularCats[key] || silverCats[key]; qs('#resultImage').src=cat.image; qs('#resultName').textContent=cat.name; qs('#resultDesc').textContent=cat.lore; qs('#resultTags').innerHTML=cat.tags.map(t=>`<span class="tag">${t}</span>`).join(''); qs('#resultCard').classList.remove('hidden'); qs('#resultCard').scrollIntoView({behavior:'smooth',block:'center'}); qs('#openResultCard').onclick=()=>openCardModal(cat, silverCats[key]?'תוצאת OG נדירה':'תוצאת חידון'); }
function saveStat(key) { const stats=getStats(); stats[key]=(stats[key]||0)+1; setStats(stats); renderStats(); }
function renderRegular() { qs('#regularGrid').innerHTML=regularOrder.map(key=>{ const cat=regularCats[key]; return `<article class="card-shell reveal regular-card" data-key="${key}"><img src="${cat.image}" alt="${cat.name}"><div class="card-info"><h4>${cat.name}</h4><p>${cat.short}</p></div></article>`; }).join(''); qsa('.regular-card').forEach(el=>el.addEventListener('click',()=>openCardModal(regularCats[el.dataset.key],'קלף רגיל'))); }
function renderSilver() { const target=qs('#silverGrid'); if(!target) return; target.innerHTML=silverOrder.map(key=>{ const cat=silverCats[key]; return `<article class="card-shell reveal silver-card" data-key="${key}"><img src="${cat.image}" alt="${cat.name}"><div class="card-info"><h4>${cat.name}</h4><p>${cat.short}</p></div></article>`; }).join(''); qsa('.silver-card').forEach(el=>el.addEventListener('click',()=>openCardModal(silverCats[el.dataset.key],'קלף OG כסוף'))); }
function lockedCardMarkup(){ return `<article class="card-shell gold-card locked generic-locked"><div><div class="lock-badge">🔒</div><h4>קלף זהב נעול</h4></div></article>`; }
function renderGold(){ const unlocks=getUnlocks(); qs('#goldGrid').innerHTML=goldOrder.map(key=>{ const card=goldCards[key]; const unlocked=!!unlocks[key]; if(!unlocked) return lockedCardMarkup(); return `<article class="card-shell gold-card unlocked" data-key="${key}"><img src="${card.image}" alt="${card.name}"><div class="card-info"><h4>${card.name}</h4><p>${card.short}</p></div></article>`; }).join(''); qsa('.gold-card.unlocked').forEach(el=>el.addEventListener('click',()=>openCardModal(goldCards[el.dataset.key],'קלף זהב'))); updateSecretVisibility(); }
function openCardModal(card,type='קלף'){ qs('#modalImage').src=card.image; qs('#modalName').textContent=card.name; qs('#modalLore').textContent=card.lore; qs('#modalType').textContent=type; qs('#modalTags').innerHTML=(card.tags||[]).map(t=>`<span class="tag">${t}</span>`).join(''); qs('#cardModal').classList.remove('hidden'); }
function closeModal(){ qs('#cardModal').classList.add('hidden'); }
function unlockGold(key){ const unlocks=getUnlocks(); if(key==='hoke'){ unlocks.hoke=true; setUnlocks(unlocks); showHokeGame(); openCardModal(hokeCard,'הוק הגיע!'); showToast('הוק הופיע. עכשיו תנחשו את השיר.'); scheduleNextSecret(); updateSecretVisibility(); return; } if(unlocks[key]){ openCardModal(goldCards[key],'קלף זהב'); return; } unlocks[key]=true; setUnlocks(unlocks); renderGold(); openCardModal(goldCards[key],'נאסף! קלף זהב'); showToast(`נאסף קלף הזהב: ${goldCards[key].name}`); scheduleNextSecret(); updateSecretVisibility(); }
function nextAngelCard(){ const unlocks=getUnlocks(); return unlockSequence.find(key=>!unlocks[key])||null; }
function updateSecretVisibility(){ const unlocks=getUnlocks(); const next=nextAngelCard(); const canShow=canShowSecret(); qs('#secretAngel').classList.toggle('hidden',!next||next==='hoke'||!canShow); qs('#secretHoke').classList.toggle('hidden',next!=='hoke'||!canShow); const specialDone=unlockSequence.every(key=>!!unlocks[key]); qs('#secretJoy').classList.toggle('hidden',!specialDone||!!unlocks.joy||!canShow); renderHokeState(); }
function showHokeGame(){ const card=qs('#hokeGameCard'); const locked=qs('#hokeLockedCard'); if(card) card.classList.remove('hidden'); if(locked) locked.classList.add('hidden'); }
function renderHokeState(){ const unlocks=getUnlocks(); const card=qs('#hokeGameCard'); const locked=qs('#hokeLockedCard'); if(!card||!locked) return; if(unlocks.hoke){ card.classList.remove('hidden'); locked.classList.add('hidden'); } else { card.classList.add('hidden'); locked.classList.remove('hidden'); } }
function normalizeAnswer(value){ return (value||'').toLowerCase().replace(/[״"׳']/g,'').replace(/\s+/g,'').trim(); }
function checkHokeAnswer(){ const answer=normalizeAnswer(qs('#songGuess')?.value); const correct=normalizeAnswer('הרקדן האוטומטי'); const feedback=qs('#songFeedback'); if(!feedback) return; if(answer===correct||answer.includes(correct)){ feedback.textContent='יא מלך יצאת רקדן תעשה סיבוב ותעוף מכאן.'; feedback.className='song-feedback success'; const unlocks=getUnlocks(); unlocks.hokeSolved=true; setUnlocks(unlocks); } else { feedback.textContent='לא. הוק הסתכל עלייך דרך הפוני של השרקנים. נסי שוב.'; feedback.className='song-feedback error'; } }

let selectedMixParents = [];
let mixerIsThinking = false;

function getMixParents() {
  return [
    ...regularOrder.map(key => ({ key, name: regularCats[key].name, image: regularCats[key].image, type: 'רגיל' })),
    ...silverOrder.map(key => ({ key, name: silverCats[key].name, image: silverCats[key].image, type: 'OG' }))
  ];
}
function canonicalParent(key) {
  return (key === 'blue' || key === 'akila') ? 'babies' : key;
}
function makePairKey(a,b) {
  return [canonicalParent(a), canonicalParent(b)].sort().join('__');
}
function cardPairKey(card) {
  return card.parents.map(canonicalParent).sort().join('__');
}
function parentDisplayName(key) {
  const cat = regularCats[key] || silverCats[key];
  if (cat) return cat.name;
  if (key === 'babies') return 'בלו/אקילה';
  return key;
}
function renderSelectedMixSlots() {
  const a = qs('#mixSlotA');
  const b = qs('#mixSlotB');
  const status = qs('#mixerPickStatus');
  const first = selectedMixParents[0];
  const second = selectedMixParents[1];
  const makeSlot = (key, fallback) => {
    const parent = getMixParents().find(item => item.key === key);
    if (!parent) return fallback;
    return `<div class="slot-card"><img src="${parent.image}" alt="${parent.name}"><span>${parent.name}</span></div>`;
  };
  if (a) a.innerHTML = makeSlot(first, 'קלף ראשון');
  if (b) b.innerHTML = makeSlot(second, 'קלף שני');

  if (status) {
    if (!first && !second) status.textContent = 'עוד לא נבחרו מספיק קורבנות.';
    else if (first && !second) status.textContent = `${parentDisplayName(first)} בפנים. צריך עוד אחד כדי שהאסון יהיה זוגי.`;
    else status.textContent = `${parentDisplayName(first)} + ${parentDisplayName(second)} מוכנים. עכשיו ללחוץ ערבוב ולחכות לבושה.`;
  }
  qsa('.mixer-parent-card').forEach(el => {
    el.classList.toggle('selected', selectedMixParents.includes(el.dataset.key));
  });
}
function toggleMixerParent(key) {
  if (mixerIsThinking) return;
  const exists = selectedMixParents.includes(key);
  if (exists) {
    selectedMixParents = selectedMixParents.filter(k => k !== key);
  } else if (selectedMixParents.length < 2) {
    selectedMixParents.push(key);
  } else {
    selectedMixParents = [selectedMixParents[1], key];
  }
  renderSelectedMixSlots();
}
function clearMixerSelection() {
  if (mixerIsThinking) return;
  selectedMixParents = [];
  renderSelectedMixSlots();
  renderMixerMiss('בחרו שני קלפים. המכונה כבר שופטת אתכם בשקט.');
}
function renderMixerOptions() {
  const grid = qs('#mixerPickerGrid');
  if (!grid) return;
  const markup = getMixParents().map(item => `<button type="button" class="mixer-parent-card" data-key="${item.key}">
    <img src="${item.image}" alt="${item.name}">
    <span>${item.name}</span>
    <small>${item.type}</small>
  </button>`).join('');
  grid.innerHTML = markup;
  qsa('.mixer-parent-card').forEach(btn => btn.addEventListener('click', () => toggleMixerParent(btn.dataset.key)));
  renderSelectedMixSlots();
}
function findLabCandidates(a,b) {
  const key = makePairKey(a,b);
  return labCats.filter(card => cardPairKey(card) === key);
}
function chooseLabCandidate(candidates) {
  const owned = getLabCollection();
  const fresh = candidates.filter(card => !owned.includes(card.id));
  const pool = fresh.length ? fresh : candidates;
  return pool[Math.floor(Math.random() * pool.length)];
}
function unlockLabCard(card) {
  const owned = getLabCollection();
  const isNew = !owned.includes(card.id);
  if (isNew) {
    owned.push(card.id);
    setLabCollection(owned);
    renderLabCollection();
  }
  return isNew;
}
function renderMixThinking(a, b) {
  const target = qs('#mixerResult');
  if (!target) return;
  target.innerHTML = `<div class="mixer-thinking">
    <div class="mixer-thinking-emoji">🌀</div>
    <h3>המערבל חושב...</h3>
    <p>${parentDisplayName(a)} ו${parentDisplayName(b)} נכנסו למכונה. כרגע מתבצעת עבירה על הטבע.</p>
  </div>`;
}
function renderMixResult(card, isNew, a, b) {
  const target = qs('#mixerResult');
  if (!target) return;
  target.innerHTML = `<div class="monster-message">יצרת מפלצת!!</div>
    <div class="mixer-result-compact">
      <article class="card-shell lab-card mixer-output-card" data-key="${card.id}">
        <img src="${card.image}" alt="${card.name}">
        <div class="card-info"><h4>${card.name}</h4><p>${card.short}</p></div>
      </article>
      <div class="mixer-result-copy">
        <p class="eyebrow small">${isNew ? 'נוסף לאוסף שלך' : 'כבר היה באוסף, אבל המפלצת דרשה הדרן'}</p>
        <h3>${card.name}</h3>
        <p>${card.lore}</p>
        <div class="mixer-badge-line">
          <span class="mix-pill">${parentDisplayName(a)}</span>
          <span class="mix-pill">+</span>
          <span class="mix-pill">${parentDisplayName(b)}</span>
        </div>
        <div class="tags">${(card.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="quiz-actions compact"><button type="button" class="btn secondary" id="openMixedCard">פתחו כקלף ענק</button></div>
      </div>
    </div>`;
  qs('#openMixedCard')?.addEventListener('click', () => openCardModal(card, 'קלף מערבל'));
  qs('.mixer-output-card')?.addEventListener('click', () => openCardModal(card, 'קלף מערבל'));
}
function renderMixerMiss(message) {
  const target = qs('#mixerResult');
  if (!target) return;
  target.innerHTML = `<div class="mixer-placeholder">${message}</div>`;
}
function setMixerBusy(isBusy) {
  mixerIsThinking = isBusy;
  const btn = qs('#mixButton');
  if (btn) {
    btn.disabled = isBusy;
    btn.textContent = isBusy ? 'מערבב... אל תפריעו למפלצת' : 'ערבבו לי יצור חדש';
  }
  qsa('.mixer-parent-card').forEach(el => el.disabled = isBusy);
}
function mixSelectedCats() {
  if (mixerIsThinking) return;
  const [a, b] = selectedMixParents;
  if (!a || !b) {
    renderMixerMiss('צריך ללחוץ על שני קלפים. אחד לבד זה סתם חתול עם בעיות מחויבות.');
    return;
  }
  if (a === b) {
    renderMixerMiss('אי אפשר לערבב חתול עם עצמו. ניסינו. יצא אגו עם שפם.');
    return;
  }
  if (canonicalParent(a) === canonicalParent(b)) {
    renderMixerMiss('בלו ואקילה כבר אותו סוג טרור. ערבוב שלהם יוצר רק ספה הפוכה.');
    return;
  }
  const candidates = findLabCandidates(a,b);
  if (!candidates.length) {
    renderMixerMiss(`לשילוב של ${parentDisplayName(a)} ו${parentDisplayName(b)} עוד אין קלף. המערבל ירק נצנץ והלך לשבת.`);
    showToast('אין עדיין קלף לשילוב הזה. המערבל מתנצל בצורה לא אמינה.');
    return;
  }

  setMixerBusy(true);
  renderMixThinking(a, b);
  window.setTimeout(() => {
    const target = qs('#mixerResult');
    if (target) {
      target.innerHTML = `<div class="monster-reveal"><h3>יצרת מפלצת!!</h3><p>נא לא להאכיל אותה אחרי חצות, למרות שהיא תבקש יפה.</p></div>`;
    }
    showToast('יצרת מפלצת!!');
    window.setTimeout(() => {
      const card = chooseLabCandidate(candidates);
      const isNew = unlockLabCard(card);
      renderMixResult(card, isNew, a, b);
      setMixerBusy(false);
    }, 900);
  }, 3000);
}
function renderLabCollection() {
  const owned = getLabCollection();
  const ownedCards = owned.map(id => labCats.find(card => card.id === id)).filter(Boolean);
  const crewBlock = qs('#labCrewBlock');
  const crewGrid = qs('#labCrewGrid');
  const mixerGrid = qs('#mixerCollectionGrid');
  const mixerHead = qs('#mixerCollectionHead');
  if (crewBlock) crewBlock.classList.toggle('hidden', !ownedCards.length);
  const markup = ownedCards.map(card => `<article class="card-shell lab-card" data-key="${card.id}">
    <img src="${card.image}" alt="${card.name}">
    <div class="card-info"><h4>${card.name}</h4><p>${card.short}</p></div>
  </article>`).join('');
  if (crewGrid) crewGrid.innerHTML = markup;
  if (mixerGrid) mixerGrid.innerHTML = ownedCards.length ? markup : `<article class="card-shell generic-locked"><div><div class="lock-badge">🧪</div><h4>עוד אין יצורי מערבל</h4><p>שני חתולים, כפתור אחד, ואחריות משפטית אפס.</p></div></article>`;
  if (mixerHead) mixerHead.classList.toggle('hidden', false);
  qsa('.lab-card').forEach(el => el.addEventListener('click', () => {
    const card = labCats.find(c => c.id === el.dataset.key);
    if (card) openCardModal(card, 'קלף מערבל');
  }));
}
function resetLabCollection() {
  localStorage.removeItem('catLabCollection');
  renderLabCollection();
  renderMixerMiss('האוסף המעורבב אופס. המערבל טוען שזה לא הוא.');
  showToast('חתולי המערבל נמחקו מהאוסף המקומי.');
}

function renderStats(){ const stats=getStats(); const allKeys=[...regularOrder,...silverOrder]; const values=allKeys.map(k=>stats[k]||0); const max=Math.max(...values,1); qs('#statsCard').innerHTML=allKeys.map(key=>{ const cat=regularCats[key]||silverCats[key]; const count=stats[key]||0; const width=count/max*100; return `<div class="stat-row"><strong>${cat.name}</strong><div class="stat-track"><div class="stat-fill" style="width:${width}%"></div></div><span>${count}</span></div>`; }).join('')+`<div class="quiz-actions compact"><button class="btn secondary" id="resetStats">איפוס סטטיסטיקות</button></div>`; qs('#resetStats').addEventListener('click',()=>{ localStorage.removeItem('catQuizStats'); renderStats(); showToast('הסטטיסטיקות התאדו. שום דבר לא קרה פה.'); }); }
function pickDaily(){ const key=regularOrder[Math.floor(Math.random()*regularOrder.length)]; const cat=regularCats[key]; qs('#dailyImage').src=cat.image; qs('#dailyName').textContent=cat.name; qs('#dailyText').textContent=cat.short; }
function setupNav(){ qs('#menuBtn').addEventListener('click',()=>qs('#nav').classList.toggle('open')); qsa('.nav a').forEach(a=>a.addEventListener('click',()=>qs('#nav').classList.remove('open'))); const sections=qsa('main section[id]'); const links=qsa('.nav a'); const obs=new IntersectionObserver(entries=>{ entries.forEach(entry=>{ if(!entry.isIntersecting)return; links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${entry.target.id}`)); }); },{threshold:.35}); sections.forEach(sec=>obs.observe(sec)); }
function setupReveal(){ const obs=new IntersectionObserver(entries=>{ entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); }); },{threshold:.15}); qsa('.reveal').forEach(el=>obs.observe(el)); }
buildQuiz(); renderRegular(); renderSilver(); renderGold(); renderStats(); renderMixerOptions(); renderLabCollection(); pickDaily(); renderHokeState(); setupNav(); setupReveal();
questionsWrap.addEventListener('change',updateProgress); qs('#dailyBtn').addEventListener('click',pickDaily); qs('#quizForm').addEventListener('submit',e=>{ e.preventDefault(); const winner=computeResult(new FormData(e.currentTarget)); saveStat(winner); showResult(winner); }); qs('#resetQuiz').addEventListener('click',()=>{ qs('#quizForm').reset(); progressBar.style.width='0'; qs('#resultCard').classList.add('hidden'); }); qs('#copyResult').addEventListener('click',async()=>{ const text=`יצא לי ${qs('#resultName').textContent} באתר החתולים. לא יודעת אם להיעלב או להסכים.`; try{ await navigator.clipboard.writeText(text); showToast('האבחון הועתק. עכשיו להפיץ ולברוח.'); }catch{ showToast(text); } }); qs('#secretAngel').addEventListener('click',()=>{ const next=nextAngelCard(); if(next) unlockGold(next); }); qs('#secretHoke').addEventListener('click',()=>unlockGold('hoke')); qs('#secretJoy').addEventListener('click',()=>unlockGold('joy')); qs('#submitSongGuess')?.addEventListener('click',checkHokeAnswer); qs('#openHokeCard')?.addEventListener('click',()=>openCardModal(hokeCard,'קלף הוק')); qs('#mixButton')?.addEventListener('click',mixSelectedCats); qs('#clearMixerSelection')?.addEventListener('click',clearMixerSelection); qs('#resetLabCollection')?.addEventListener('click',resetLabCollection); qs('#closeModal').addEventListener('click',closeModal); qs('#cardModal').addEventListener('click',e=>{ if(e.target.dataset.close) closeModal(); }); document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
