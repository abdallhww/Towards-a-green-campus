// الانتقال الناعم بين الأقسام
const sectionButtons = document.querySelectorAll('header .buttons button');
sectionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// زر رجوع للأعلى
const backButtons = document.querySelectorAll('button.back-top');
backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// الموسيقى الخلفية وتشغيل/كتم
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
musicToggle.addEventListener('click', () => {
  if(music.paused) {
    music.play();
    musicToggle.textContent = '🔊';
  } else {
    music.pause();
    musicToggle.textContent = '🔇';
  }
});

// تبديل اللغة بين العربية والإنجليزية
const langSwitch = document.getElementById('lang-switch');
let isArabic = true;

const translations = {
  logo: ['نحو حرم جامعي أخضر', 'Towards a Green University Campus'],
  'about-h2': ['نبذة عن الحملة', 'About the Campaign'],
  'about-p': ['تهدف حملة "نحو حرم جامعي أخضر" إلى تعزيز الوعي البيئي بين الطلاب من خلال نظام سلات ذكية لفرز النفايات.', 'The "Towards a Green University Campus" campaign aims to raise environmental awareness among students through a smart waste sorting system.'],
  'goals-h2': ['أهداف الحملة', 'Campaign Goals'],
  'goals-p': ['• نشر ثقافة الاستدامة داخل الحرم الجامعي.<br>• تشجيع الطلاب على فرز النفايات.<br>• تقليل كمية النفايات غير المفروزة.', '• Spread sustainability culture on campus.<br>• Encourage students to sort waste.<br>• Reduce unsegregated waste.'],
  'how-h2': ['كيف تعمل السلات الذكية؟', 'How Smart Bins Work'],
  'how-p': ['تفتح السلة باستخدام البطاقة الجامعية، ويُحسب الوزن داخل السلة ليضاف إلى رصيد الطالب كنقاط.', 'The bin opens with the student card, and the weight inside is added to the student\'s points.'],
  'points-h2': ['نظام النقاط والمكافآت', 'Points and Rewards System'],
  'points-p': ['يمكن للطالب استبدال النقاط بمكافآت مثل وجبات كافتيريا، استعارة كتب أو بطاقات خصم في متجر الجامعة.', 'Students can redeem points for rewards like cafeteria meals, borrowing books, or discount cards in the campus store.'],
  'monitoring-h2': ['المراقبة والعقوبات', 'Monitoring and Penalties'],
  'monitoring-p': ['توجد كاميرات مراقبة على السلات لضمان الاستخدام السليم، مع فرض عقوبات على المخالفين.', 'CCTV cameras are installed on bins to ensure proper use, with penalties for violators.'],
  'section-buttons': ['عن الحملة,أهداف الحملة,كيف تعمل السلات,نظام النقاط,المراقبة', 'About,Goals,How It Works,Points,Monitoring']
};

langSwitch.addEventListener('click', () => {
  isArabic = !isArabic;
  langSwitch.textContent = isArabic ? 'English' : 'العربية';

  document.getElementById('logo').textContent = translations.logo[isArabic ? 0 : 1];
  document.getElementById('about-h2').textContent = translations['about-h2'][isArabic ? 0 : 1];
  document.getElementById('about-p').innerHTML = translations['about-p'][isArabic ? 0 : 1];
  document.getElementById('goals-h2').textContent = translations['goals-h2'][isArabic ? 0 : 1];
  document.getElementById('goals-p').innerHTML = translations['goals-p'][isArabic ? 0 : 1];
  document.getElementById('how-h2').textContent = translations['how-h2'][isArabic ? 0 : 1];
  document.getElementById('how-p').innerHTML = translations['how-p'][isArabic ? 0 : 1];
  document.getElementById('points-h2').textContent = translations['points-h2'][isArabic ? 0 : 1];
  document.getElementById('points-p').innerHTML = translations['points-p'][isArabic ? 0 : 1];
  document.getElementById('monitoring-h2').textContent = translations['monitoring-h2'][isArabic ? 0 : 1];
  document.getElementById('monitoring-p').innerHTML = translations['monitoring-p'][isArabic ? 0 : 1];

  const buttons = document.querySelectorAll('header .buttons button');
  const btnTexts = translations['section-buttons'][isArabic ? 0 : 1].split(',');
  buttons.forEach((btn, i) => btn.textContent = btnTexts[i]);
});