# Malak — Portfolio (React + Vite)

بورتفوليو مبني بـ **React** (باستخدام Vite) — تصميم bento grid داكن مع لمسة برتقالية.

## 1) المتطلبات (Requirements)
لازم يكون عندك **Node.js** (نسخة 18 أو أحدث) مثبت على جهازك.
تأكد بـ:
```bash
node -v
npm -v
```
إذا ماعندكش Node، حمّلو من: https://nodejs.org

## 2) فتح المشروع لأول مرة (First-time setup)
1. فك ضغط الملف (unzip) اللي حملتيه.
2. افتح Terminal / CMD جوا مجلد المشروع (`malak-portfolio`).
3. ثبت الحزم (dependencies):
```bash
npm install
```

## 3) تشغيل المشروع محلياً (Development)
```bash
npm run dev
```
راح يعطيك رابط كيما `http://localhost:5173` — افتحيه في المتصفح، وكل تعديل تديريه في الكود يبان مباشرة (hot reload).

## 4) إضافة صورك (Add your images)
حط الصور التالية جوا مجلد **public/** (بنفس الأسماء):
- `profile1.jpg` — صورتك الشخصية (تظهر في Hero و About و Contact)
- `discover-fashion-app.png` — موجودة معاك، ضيفيها
- `Screenshotporfil.png` — صورة مشروع الوصفات
- `RealEstate.png` — صورة مشروع العقارات
- `cv.pdf` — ملف الـ CV تاعك (باش يخدم زر "Download CV")

## 5) بناء نسخة الإنتاج (Production build)
كي تكوني رايحة تنشري الموقع:
```bash
npm run build
```
راح ينشئلك مجلد `dist/` فيه كل ملفات الموقع النهائية (HTML/CSS/JS مضغوطين وجاهزين).

للتأكد أن البناء يخدم صحيح قبل النشر:
```bash
npm run preview
```

## 6) النشر (Deployment)
تقدري تنشري مجلد `dist/` في أي من هاذو:
- **Vercel**: `npm i -g vercel` ثم `vercel` جوا المجلد
- **Netlify**: اسحبي مجلد `dist/` مباشرة فوق netlify.com/drop
- **GitHub Pages**: بواسطة الأمر `npm run build` ثم رفع محتوى `dist/`

## هيكلة المشروع (Project structure)
```
malak-portfolio/
├── index.html              ← نقطة الدخول تع Vite
├── package.json
├── vite.config.js
├── public/                 ← حطي هنا صورك (profile1.jpg, ...)
└── src/
    ├── main.jsx             ← نقطة انطلاق React
    ├── App.jsx               ← يجمع كل الأقسام
    ├── index.css             ← كل الـ styling
    ├── context/
    │   └── AppContext.jsx    ← يدير اللغة (EN/FR/AR) والـ theme (dark/light) والقائمة
    ├── data/
    │   └── translations.js   ← نصوص الموقع بالثلاث لغات
    ├── hooks/
    │   └── useReveal.js      ← أنيميشن الظهور عند السكرول
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── GirlIllustration.jsx  ← رسمة SVG أصلية (مو منسوخة)
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## ملاحظات
- الرسمة الكرتونية (GirlIllustration) هي SVG أصلي كتبتلك إياه بالكامل، تقدري تعدلي فيه الألوان أو الشكل بحرية من جوا الملف `GirlIllustration.jsx`.
- تبديل اللغة والـ theme يخدم عبر React state (Context)، ماشي عبر تلاعب مباشر بالـ DOM كيما كان في نسخة HTML القديمة.
- الفورم تاع Contact يفتح تطبيق البريد (mailto:) عند الضغط على "Send Message" — إذا تحبي إرسال حقيقي عبر سيرفر (بدون فتح تطبيق mail)، يلزم backend أو خدمة كيما Formspree/EmailJS.
