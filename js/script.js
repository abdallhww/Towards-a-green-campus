// التنقل بين الأقسام
document.querySelectorAll('header .buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// زر رجوع للأعلى
document.querySelectorAll('button.back-top').forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// الموسيقى الخلفية
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
musicToggle.addEventListener('click', () => {
  if(music.paused) { music.play(); musicToggle.textContent='🔊'; }
  else { music.pause(); musicToggle.textContent='🔇'; }
});

// الترجمة العربية/الإنجليزية
const langSwitch = document.getElementById('lang-switch');
let isArabic = true;

const translations = {
  logo: ['نحو حرم جامعي أخضر', 'Towards a Green University Campus'],
  'about-h2': ['نبذة عن الحملة', 'About the Campaign'],
  'about-p': [`تهدف حملة "نحو حرم جامعي أخضر" إلى غرس الوعي البيئي بين طلبة الجامعة من خلال تشجيعهم على المشاركة الفعّالة في فرز النفايات.
تعتمد الحملة على سلات مخصصة بثلاثة أقسام لفرز النفايات الورقية والبلاستيكية والعامة، في خطوة تسعى إلى جعل المحافظة على النظافة أسلوب حياة يومي داخل الحرم الجامعي . 
فكل رمية نفاية في المكان الصحيح هي رسالة وعي ومسؤولية، وخطوة صغيرة نحو بيئة جامعية أنظف وأكثر استدامة، تعكس ثقافة طلابها وحرصهم على مستقبل أكثر خضرة.` ,
               `The "Towards a Green Campus" campaign aims to promote environmental awareness among university students by encouraging active participation in waste sorting.
The campaign introduces three-section waste bins for paper, plastic, and general waste — a simple yet meaningful step toward making cleanliness a daily habit across the campus.
Every piece of waste placed in its proper bin is a message of awareness and responsibility, a small action that leads to a cleaner, more sustainable university environment that reflects the values and care of its students.`],
  'goals-h2': ['أهداف الحملة', 'Campaign Goals'],
  'goals-p': ['• نشر ثقافة الاستدامة داخل الحرم الجامعي.<br>• تشجيع الطلاب على فرز النفايات.<br>• تقليل كمية النفايات غير المفروزة.',
               '• Spread sustainability culture on campus.<br>• Encourage students to sort waste.<br>• Reduce unsegregated waste.'],
  'how-h2': ['شعارنا', 'Our Slogan'],
  'how-p': [`شعارنا يجسد جوهر مبادرتنا ورؤيتنا نحو بيئة جامعية أكثر وعيًا واستدامة. فهو يذكّرنا بأن التغيير الحقيقي لا يبدأ بخطوات كبيرة أو مشاريع ضخمة، بل من خلال تفاصيل صغيرة وقرارات يومية واعية تصنع فارقًا ملموسًا مع مرور الوقت.
فكل تصرّف مسؤول، وكل مبادرة بسيطة لحماية البيئة، تمثل خطوة ذكية ومدروسة نحو مستقبل أنظف وأخضر.
إن شعارنا ليس مجرد كلمات، بل دعوة للتأمل والعمل — تذكير دائم بأن التغيير يبدأ منّا، ومن إيماننا بأن الأثر الحقيقي يُبنى بالاستمرار والإصرار على الخير، مهما كانت الخطوة صغيرة.` ,
              `Our slogan embodies the essence of our initiative and our vision for a more conscious and sustainable campus. It reminds us that true change doesn’t start with grand actions or massive projects, but with small, thoughtful choices made every day that gradually create a lasting impact.
Every responsible act and every simple effort to protect the environment represents a smart and meaningful step toward a cleaner, greener future.
Our slogan is not just a phrase — it’s a call to reflect and to act, a constant reminder that real change begins with us, and that genuine impact grows through persistence, care, and belief in every small step we take.`],
  'points-h2': ['رسالتنا', 'Our Mission'],
  'points-p': [`رسالتنا تتمثل في تعزيز ثقافة الفرز والتدوير داخل الحرم الجامعي، ليس كمجرد سلوك بيئي، بل كقيمة يومية تعبّر عن وعي ومسؤولية كل فرد تجاه البيئة.
نعمل على تحقيق ذلك من خلال حملات توعوية عملية تدمج بين التعلم والتطبيق، وشراكات فاعلة مع مختلف الجهات داخل الجامعة وخارجها، إلى جانب مبادرات طلابية مبتكرة تنطلق من المعرفة وتستند إلى الإحساس العميق بالمسؤولية البيئية.
فغايتنا أن يصبح الفرز والتدوير أسلوب حياة، يرسخ في أذهان الطلبة أن حماية البيئة ليست واجبًا إضافيًا، بل جزءًا من هويتهم الجامعية ودورهم في بناء مستقبل مستدام.` ,
                 `Our mission is to promote a culture of waste sorting and recycling within the university campus — not just as an environmental act, but as a daily value that reflects awareness and responsibility toward our surroundings.
We strive to achieve this through hands-on awareness campaigns, active partnerships within and beyond the university, and innovative student-led initiatives built on knowledge and a strong sense of environmental responsibility.
Our goal is to make sorting and recycling a way of life, inspiring students to see environmental protection not as an obligation, but as an integral part of their identity and their role in shaping a sustainable future.`],
  'monitoring-h2': ['رؤيتنا', 'Our Vision'],
  'monitoring-p': [`رؤيتنا تتجسد في الوصول إلى جامعة خضراء رائدة تكون نموذجًا يحتذى به في الاستدامة والمسؤولية البيئية.
نسعى إلى تحويل النفايات إلى موارد مستدامة تُسهم في خدمة البيئة وتعزيز الاقتصاد ودعم المجتمع، من خلال تبنّي ممارسات واعية تُحوّل التحديات البيئية إلى فرص للتطوير والإبداع.
فجامعتنا الطموحة لا تكتفي بالنظافة، بل تسعى لأن تكون بيئة تعليمية ملهمة تنشر الوعي وتغرس في طلبتها ثقافة احترام الموارد والمحافظة عليها لأجيال قادمة.` ,
                      `Our vision is to create a leading green university that stands as a model of sustainability and environmental responsibility.
We aim to transform waste into sustainable resources that benefit the environment, strengthen the economy, and support the community — turning environmental challenges into opportunities for innovation and growth.
Our university aspires not only to be clean, but to become an inspiring learning environment that spreads awareness and instills in its students a culture of respect and care for the planet for generations to come.`],
  'bins-h2': ['أنواع السلات الثلاث', 'The Three Types of Bins'],
  'bin-cards': [
    [
      {title: 'السلة الخضراء', text: 'مخصصة للنفايات القابلة للتدوير مثل البلاستيك والمعادن والزجاج.'},
      {title: 'السلة الصفراء', text: 'مخصصة للورق والكرتون والمطبوعات القديمة.'},
      {title: 'السلة الزرقاء', text: 'مخصصة للنفايات العامة التي لا يمكن إعادة تدويرها.'}
    ],
    [
      {title: 'Green Bin', text: 'For recyclable waste like plastic, metal, and glass.'},
      {title: 'Yellow Bin', text: 'For paper, cardboard, and old prints.'},
      {title: 'Blue Bin', text: 'For general waste that cannot be recycled.'}
    ]
  ],
   'bins-summary': [
    'هذه السلات تمثل خطوة عملية نحو بيئة جامعية أكثر نظافة ووعيًا، وتشجع الطلبة على تحمل مسؤوليتهم في الحفاظ على مواردنا وتقليل الأثر البيئي.',
    'These bins represent a practical step towards a cleaner, more aware university environment, encouraging students to take responsibility for preserving our resources and reducing environmental impact.'
  ],
  'bins-p': [
    'سيتم تقسيم السلات في الحرم الجامعي إلى ثلاث فئات رئيسية لتسهيل عملية الفرز والتدوير:',
    'The bins on campus will be divided into three main categories to facilitate sorting and recycling:'
  ],
  'section-buttons': [['عن الحملة','أهداف الحملة','شعارنا','رسالتنا','رؤيتنا','أنواع السلات الثلاث'],
                      ['About','Goals','Our Slogan','Our Mission','Our Vision','Types of Bins']]
};

// تغيير اللغة عند الضغط
langSwitch.addEventListener('click', () => {
  isArabic = !isArabic;
  langSwitch.textContent = isArabic ? 'English' : 'العربية';

  document.getElementById('logo').textContent = translations.logo[isArabic?0:1];
  document.getElementById('about-h2').textContent = translations['about-h2'][isArabic?0:1];
  document.getElementById('about-p').innerHTML = translations['about-p'][isArabic?0:1];
  document.getElementById('goals-h2').textContent = translations['goals-h2'][isArabic?0:1];
  document.getElementById('goals-p').innerHTML = translations['goals-p'][isArabic?0:1];
  document.getElementById('how-h2').textContent = translations['how-h2'][isArabic?0:1];
  document.getElementById('how-p').innerHTML = translations['how-p'][isArabic?0:1];
  document.getElementById('points-h2').textContent = translations['points-h2'][isArabic?0:1];
  document.getElementById('points-p').innerHTML = translations['points-p'][isArabic?0:1];
  document.getElementById('monitoring-h2').textContent = translations['monitoring-h2'][isArabic?0:1];
  document.getElementById('monitoring-p').innerHTML = translations['monitoring-p'][isArabic?0:1];
  document.getElementById('bins-p').textContent = translations['bins-p'][isArabic ? 0 : 1];
  document.querySelector('.bins-summary').textContent = translations['bins-summary'][isArabic ? 0 : 1];


  // تحديث أزرار الهيدر
  const btns = document.querySelectorAll('header .buttons button');
  btns.forEach((btn,i)=> btn.textContent = translations['section-buttons'][isArabic?0:1][i]);

  // تحديث نص أزرار "رجوع للأعلى"
  document.querySelectorAll('button.back-top').forEach(btn => {
    btn.textContent = isArabic ? '🔝 رجوع للأعلى' : '🔝 Back to Top';
  });

  // تحديث قسم السلات
  document.getElementById('bins-h2').textContent = translations['bins-h2'][isArabic?0:1];
  const binCards = document.querySelectorAll('.bin-card');
  binCards.forEach((card, i) => {
    card.querySelector('h3').textContent = translations['bin-cards'][isArabic?0:1][i].title;
    card.querySelector('p').textContent = translations['bin-cards'][isArabic?0:1][i].text;
  });
});