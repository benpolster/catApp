
const regularCats = {
  bagira: {
    name: "בגירה",
    image: "images/bagira.png",
    short: "פלאפית, קנאית, מלכת הבית שלא יוצאת לשום מקום.",
    lore: "בגירה אוהבת פינוקים, מתה על להיות על הידיים, נעימה ופלאפית בטירוף, שונאת חתולות, אוהבת זכרים, וקנאית מסריחה שלא יוצאת מהבית. היא נסיכת פנים עם לב של כרית וחוש בעלות של עורך דין.",
    tags: ["פינוקים", "ידיים עכשיו", "קנאית", "אנטי חוץ"]
  },
  sumsum: {
    name: "סומסום",
    image: "images/sumsum.png",
    short: "דוכס גרגרן, שמן, אוהב חתולות וליטופים, נווד בלתי נלאה.",
    lore: "סומסום הוא הדוכס הגרגרן של הממלכה: שמן, אפור, מאוהב בחטיפים, אוהב חתולות, אוהב ליטופים, ונווד אין־סופי. יש לו אנרגיה של מי שנעלם לשלושה רחובות וחוזר כי מישהו פתח טונה.",
    tags: ["גרגרן", "ליטופים", "נווד", "דוכס"]
  },
  chag: {
    name: "צ׳אג",
    image: "images/chag.png",
    short: "האמא הרעה של סינדרלה ושלטון ברזל על כל מי שנושם.",
    lore: "צ׳אג שולטת בבית ביד ברזל ובכף פרווה. אם משהו לא עובד בכוח — היא עובדת ביותר כוח. חייבת פינוקים רק לעצמה, מכפכפת את כולם, ושונאת זכרים בעקביות מעוררת השראה.",
    tags: ["דיקטטורית", "פינוקים שלי", "כפכופים", "אנטי זכרים"]
  },
  tomi: {
    name: "טומי",
    image: "images/tomi.png",
    short: "זקנה, פחדנית, מיללת הרבה, אבל תמיד חוזרת הביתה.",
    lore: "טומי היא גברת מבוגרת עם חרדות, מסעות קצרים, וקול שלא מפסיק. היא מטיילת, בורחת, נבהלת, ואז חוזרת כאילו כלום. בנוסף היא אוהבת ללוש בני אנוש כאילו הם בצק עם נשמה.",
    tags: ["זקנה עם סטייל", "פחדנית", "מייללת", "לישה"]
  },
  blue: {
    name: "בלו",
    image: "images/blue_akila.png",
    short: "אחד מצמד הטרור. רץ אחרי כפות רגליים ולא מכיר מנוחה.",
    lore: "בלו הוא אחד הילדים של בגירה: שטותניק, שובב, רודף אחרי כפות רגליים, שותה חלב, מטפס על הספה, ולא נח לרגע. הוא תינוק כאוס עם פרצוף תמים של שקרן מקצועי.",
    tags: ["גור טרור", "חלב", "כפות רגליים", "בלי ברקסים"]
  },
  akila: {
    name: "אקילה",
    image: "images/blue_akila.png",
    short: "האחות התאומה עם אותה אנרגיית פשע, רק עם עוד חוצפה בעיניים.",
    lore: "אקילה היא הילדה של בגירה ואחותו לפשע של בלו: שובבה, מטפסת, רצה אחרי כפות רגליים, שותה חלב, ולא יודעת מה זה לנוח. אם יש בלגן — כנראה היא חשבה עליו חצי דקה קודם.",
    tags: ["תאומה מסוכנת", "ספה זה הר", "חלב", "כאוס"]
  },
  gary: {
    name: "גרי",
    image: "images/gary.png",
    short: "אצילי, חכם, עדין, ואוהב בני אדם באופן מחשיד.",
    lore: "גרי הוא אציל, חכם, עדין, אוהב בני אדם, רץ מהר, ופורץ הביתה כשמתאפשר. יש לו וייב של גנב־ג׳נטלמן שחושב שכל בית הוא בעצם שלו אם רק פתחו רגע דלת.",
    tags: ["אצילי", "אוהב אנשים", "רץ מהר", "פורץ מכובד"]
  }
};

const goldCards = {
  mitch: {
    name: "מיצ",
    image: "images/mitch.png",
    short: "השנייה בשושלת. קטנה, רזה, מלאכית, ומנוזלת באופן הירואי.",
    lore: "מיצ הייתה השנייה. היא ניסתה להמשיך את השושלת אך נפלה בקרב לאחר מאבק עיקש בצינון כרוני. קטנה, רזה, בוגרת, עם כנפיים של מלאך כי אגדות לא באמת הולכות לשום מקום.",
    tags: ["OG שנייה", "מלאכית", "צינון כרוני", "אגדה"]
  },
  ketem: {
    name: "כתם",
    image: "images/ketem.png",
    short: "הארנבת הלבנה. מסריחה, חופרת ברצפה, ותכלס פשוט שם.",
    lore: "כתם היא הארנבת הלבנה והשמנה של החבורה. היא תמיד מסריחה, תמיד חופרת ברצפה, ואין לה באמת תכלית ברורה. היא פשוט שם — ובאופן בלתי מוסבר זה הפך אותה לחשובה.",
    tags: ["ארנבת", "שמנה", "חופרת", "פשוט שם"]
  },
  chavrika: {
    name: "חבריקה",
    image: "images/chavrika.png",
    short: "ה־OG המיתולוגית. הראשונה. האלפא. זו שהתחילה הכל.",
    lore: "חבריקה היא החתולה המיתולוגית — הראשונה שהייתה שם, הוגת האבולוציה, והתחלת כל השושלת. היא מתה בשיבה טובה ולכן לא יוצאת בחידון. היא קלף זהב אלוהי, מושלם, קדוש, ויפה באופן לא סביר.",
    tags: ["OG", "מיתולוגית", "מלאך מושלם", "התחילה הכל"]
  },
  joy: {
    name: "ג׳וי",
    image: "images/joy.png",
    short: "האחת והיחידה. כל מילה מעבר לזה באמת מיותרת.",
    lore: "ג׳וי הייתה הכלבה של המשפחה. היא האחת והיחידה. אין צורך להרחיב, אין צורך להצדיק, אין צורך להסביר. זה קלף הסיום, האלוהים בפני עצמו, השלמות עטופה בפרווה.",
    tags: ["הכלבה", "אלוהות", "שלמות", "האחת והיחידה"]
  }
};

const quizQuestions = [
  {
    q: "אם היית צריכה לבחור מקצוע על סמך צליל בלבד, מה נשמע הכי אמין?",
    a: [
      { t: "מנכ״לית של מגירות שלא נסגרות עד הסוף", s: ["bagira", "chag"] },
      { t: "מבקר מזון לעניינים רגשיים ופחמימתיים", s: ["sumsum", "gary"] },
      { t: "אחראית בהלה עירונית בדרג ביניים", s: ["tomi", "bagira"] },
      { t: "טכנאית מרדפים לכפות רגליים ושטיחים", s: ["blue", "akila"] }
    ]
  },
  {
    q: "איזה חפץ הכי ראוי לקבל התנצלות ממך?",
    a: [
      { t: "כפית שנשפטה מהר מדי", s: ["bagira", "gary"] },
      { t: "פיתה שלא שרדה את הסיטואציה", s: ["sumsum", "tomi"] },
      { t: "כרית שנקלעה להפיכה משטרית", s: ["chag", "akila"] },
      { t: "שרוך שנראה חשוד ולכן נרדף", s: ["blue", "akila"] }
    ]
  },
  {
    q: "אם היו נותנים לך רק כובע אחד לכל החיים, מה היית בוחרת?",
    a: [
      { t: "כובע פרווה דרמטי עם עלבון מובנה", s: ["bagira", "tomi"] },
      { t: "כובע בצורת בורקס מסיבה מקצועית", s: ["sumsum", "gary"] },
      { t: "קסדה עם כתובת 'אני מזהירה פעם אחת'", s: ["chag", "akila"] },
      { t: "סיר קטן כי אין זמן להסברים", s: ["blue", "akila"] }
    ]
  },
  {
    q: "מה הכי סביר שתגידי במעמד חגיגי בלי שום הקשר?",
    a: [
      { t: "אני מוכנה להיסחב, אבל רק בסטייל", s: ["bagira", "gary"] },
      { t: "רגע, לפני שנמשיך, יש פה עוד משהו לנשנש?", s: ["sumsum", "tomi"] },
      { t: "אני לא שולטת, אני פשוט היחידה עם תוכנית", s: ["chag", "akila"] },
      { t: "למה הרצפה זזה? אני רודפת אחריה", s: ["blue", "akila"] }
    ]
  },
  {
    q: "איזה כישלון קטן יכול להפוך אצלך לאירוע לאומי?",
    a: [
      { t: "מישהו אחר קיבל תשומת לב בלתי מורשית", s: ["bagira", "chag"] },
      { t: "נגמר משהו טעים באופן לא דמוקרטי", s: ["sumsum", "gary"] },
      { t: "הקומקום השמיע רעש שאף אחד לא לקח ברצינות", s: ["tomi", "bagira"] },
      { t: "ראיתי בהונות ופשוט פעלתי מהלב", s: ["blue", "akila"] }
    ]
  },
  {
    q: "בחרי סיבה מוזרה אבל משכנעת לבטל תוכניות:",
    a: [
      { t: "אני כרגע עסוקה בלהיות אייקון ביתי", s: ["bagira", "gary"] },
      { t: "יש לי פגישה עם פחמימה ואני לא מאחרת לזה", s: ["sumsum", "tomi"] },
      { t: "יש לי משטר חדש להקים על הספה", s: ["chag", "akila"] },
      { t: "אני באמצע ספרינט אידיאולוגי במסדרון", s: ["blue", "akila"] }
    ]
  },
  {
    q: "אם הייתי שמה אותך על שלט חוצות, מה היה כתוב עליו?",
    a: [
      { t: "יותר רכות, פחות גישה — או להפך", s: ["bagira", "tomi"] },
      { t: "תאמינו בי, אני אמצא את החטיף", s: ["sumsum", "gary"] },
      { t: "לא ויכוח, זו פשוט הוראה עם אייליינר", s: ["chag", "akila"] },
      { t: "רץ, קופץ, צורח, וחוזר שוב", s: ["blue", "akila"] }
    ]
  }
];

const regularOrder = ["bagira","sumsum","chag","tomi","blue","akila","gary"];
const goldOrder = ["mitch","ketem","chavrika","joy"];
const unlockSequence = ["mitch", "ketem", "chavrika"];

const storage = window.sessionStorage;
const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];
const questionsWrap = qs('#questions');
const progressBar = qs('#progressBar');
const toast = qs('#toast');

function getUnlocks() {
  return JSON.parse(storage.getItem('catGoldUnlocks') || '{}');
}
function setUnlocks(obj) {
  storage.setItem('catGoldUnlocks', JSON.stringify(obj));
}
function getStats() {
  return JSON.parse(localStorage.getItem('catQuizStats') || '{}');
}
function setStats(obj) {
  localStorage.setItem('catQuizStats', JSON.stringify(obj));
}
function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
function buildQuiz() {
  questionsWrap.innerHTML = quizQuestions.map((item, i) => `
    <section class="question">
      <h4>${i+1}. ${item.q}</h4>
      <div class="options">
        ${item.a.map((ans,j) => `
          <label class="option">
            <input type="radio" name="q${i}" value="${j}" required>
            <span>${ans.t}</span>
          </label>`).join('')}
      </div>
    </section>
  `).join('');
}
function updateProgress() {
  const count = quizQuestions.filter((_,i) => qs(`input[name="q${i}"]:checked`)).length;
  progressBar.style.width = `${count / quizQuestions.length * 100}%`;
}
function computeResult(formData) {
  const scores = Object.fromEntries(regularOrder.map(k => [k,0]));
  quizQuestions.forEach((item, i) => {
    const picked = Number(formData.get(`q${i}`));
    const ans = item.a[picked];
    if (!ans) return;
    ans.s.forEach(k => scores[k] += 1);
  });
  const max = Math.max(...Object.values(scores));
  const winners = Object.entries(scores).filter(([,v]) => v === max).map(([k]) => k);
  return winners[Math.floor(Math.random()*winners.length)];
}
function showResult(key) {
  const cat = regularCats[key];
  qs('#resultImage').src = cat.image;
  qs('#resultName').textContent = cat.name;
  qs('#resultDesc').textContent = cat.lore;
  qs('#resultTags').innerHTML = cat.tags.map(t => `<span class="tag">${t}</span>`).join('');
  qs('#resultCard').classList.remove('hidden');
  qs('#resultCard').scrollIntoView({behavior:'smooth', block:'center'});
  qs('#openResultCard').onclick = () => openCardModal(cat, 'תוצאת חידון');
}
function saveStat(key) {
  const stats = getStats();
  stats[key] = (stats[key] || 0) + 1;
  setStats(stats);
  renderStats();
}
function renderRegular() {
  qs('#regularGrid').innerHTML = regularOrder.map(key => {
    const cat = regularCats[key];
    return `
      <article class="card-shell reveal regular-card" data-key="${key}">
        <img src="${cat.image}" alt="${cat.name}">
        <div class="card-info">
          <h4>${cat.name}</h4>
          <p>${cat.short}</p>
        </div>
      </article>`;
  }).join('');
  qsa('.regular-card').forEach(el => el.addEventListener('click', () => {
    openCardModal(regularCats[el.dataset.key], 'קלף רגיל');
  }));
}
function lockedCardMarkup() {
  return `
    <article class="card-shell gold-card locked generic-locked">
      <div>
        <div class="lock-badge">🔒</div>
        <h4>קלף זהב נעול</h4>
      </div>
    </article>`;
}
function renderGold() {
  const unlocks = getUnlocks();
  qs('#goldGrid').innerHTML = goldOrder.map(key => {
    const card = goldCards[key];
    const unlocked = !!unlocks[key];
    if (!unlocked) return lockedCardMarkup();
    return `
      <article class="card-shell gold-card unlocked" data-key="${key}">
        <img src="${card.image}" alt="${card.name}">
        <div class="card-info">
          <h4>${card.name}</h4>
          <p>${card.short}</p>
        </div>
      </article>`;
  }).join('');
  qsa('.gold-card.unlocked').forEach(el => el.addEventListener('click', () => {
    openCardModal(goldCards[el.dataset.key], 'קלף זהב');
  }));
  updateSecretVisibility();
}
function openCardModal(card, type='קלף') {
  qs('#modalImage').src = card.image;
  qs('#modalName').textContent = card.name;
  qs('#modalLore').textContent = card.lore;
  qs('#modalType').textContent = type;
  qs('#modalTags').innerHTML = (card.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  qs('#cardModal').classList.remove('hidden');
}
function closeModal() { qs('#cardModal').classList.add('hidden'); }
function unlockGold(key) {
  const unlocks = getUnlocks();
  if (unlocks[key]) {
    openCardModal(goldCards[key], 'קלף זהב');
    return;
  }
  unlocks[key] = true;
  setUnlocks(unlocks);
  renderGold();
  openCardModal(goldCards[key], 'נאסף! קלף זהב');
  showToast(`נאסף קלף הזהב: ${goldCards[key].name}`);
  updateSecretVisibility();
}
function nextAngelCard() {
  const unlocks = getUnlocks();
  return unlockSequence.find(key => !unlocks[key]) || null;
}
function updateSecretVisibility() {
  const unlocks = getUnlocks();
  const next = nextAngelCard();
  qs('#secretAngel').classList.toggle('hidden', !next);
  const firstThree = unlockSequence.every(key => !!unlocks[key]);
  qs('#secretJoy').classList.toggle('hidden', !firstThree || !!unlocks.joy);
}
function renderStats() {
  const stats = getStats();
  const values = regularOrder.map(k => stats[k] || 0);
  const max = Math.max(...values, 1);
  qs('#statsCard').innerHTML = regularOrder.map(key => {
    const count = stats[key] || 0;
    const width = count / max * 100;
    return `
      <div class="stat-row">
        <strong>${regularCats[key].name}</strong>
        <div class="stat-track"><div class="stat-fill" style="width:${width}%"></div></div>
        <span>${count}</span>
      </div>`;
  }).join('') + `<div class="quiz-actions compact"><button class="btn secondary" id="resetStats">איפוס סטטיסטיקות</button></div>`;
  qs('#resetStats').addEventListener('click', () => {
    localStorage.removeItem('catQuizStats');
    renderStats();
    showToast('הסטטיסטיקות התאדו. שום דבר לא קרה פה.');
  });
}
function pickDaily() {
  const key = regularOrder[Math.floor(Math.random() * regularOrder.length)];
  const cat = regularCats[key];
  qs('#dailyImage').src = cat.image;
  qs('#dailyName').textContent = cat.name;
  qs('#dailyText').textContent = cat.short;
}
function setupNav() {
  qs('#menuBtn').addEventListener('click', () => qs('#nav').classList.toggle('open'));
  qsa('.nav a').forEach(a => a.addEventListener('click', () => qs('#nav').classList.remove('open')));
  const sections = qsa('main section[id]');
  const links = qsa('.nav a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { threshold: 0.35 });
  sections.forEach(sec => obs.observe(sec));
}
function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  qsa('.reveal').forEach(el => obs.observe(el));
}

buildQuiz();
renderRegular();
renderGold();
renderStats();
pickDaily();
setupNav();
setupReveal();

questionsWrap.addEventListener('change', updateProgress);
qs('#dailyBtn').addEventListener('click', pickDaily);
qs('#quizForm').addEventListener('submit', e => {
  e.preventDefault();
  const winner = computeResult(new FormData(e.currentTarget));
  saveStat(winner);
  showResult(winner);
});
qs('#resetQuiz').addEventListener('click', () => {
  qs('#quizForm').reset();
  progressBar.style.width = '0';
  qs('#resultCard').classList.add('hidden');
});
qs('#copyResult').addEventListener('click', async () => {
  const text = `יצא לי ${qs('#resultName').textContent} באתר החתולים. לא יודעת אם להיעלב או להסכים.`;
  try {
    await navigator.clipboard.writeText(text);
    showToast('האבחון הועתק. עכשיו להפיץ ולברוח.');
  } catch {
    showToast(text);
  }
});
qs('#secretAngel').addEventListener('click', () => {
  const next = nextAngelCard();
  if (next) unlockGold(next);
});
qs('#secretJoy').addEventListener('click', () => unlockGold('joy'));
qs('#closeModal').addEventListener('click', closeModal);
qs('#cardModal').addEventListener('click', e => { if (e.target.dataset.close) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
