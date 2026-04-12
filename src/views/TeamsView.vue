<template>
  <div>

  <!-- HERO -->
  <section class="page-hero">
    <div class="page-hero-bg">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop" alt="Teams">
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container page-hero-content">
      <div class="breadcrumb-nav"><a href="index.html">Home</a><span>/</span><span>Teams</span></div>
      <h1>Our <span class="tg">Teams</span></h1>
      <p>Meet the passionate people who drive Sundarbans House forward</p>
    </div>
  </section>

  <!-- ── SVG ICON SYMBOLS (render once, reuse everywhere) ── -->
  <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-email" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </symbol>
  </svg>

  <!-- ══ UPPER HOUSE COUNCIL ══ -->
  <section class="section rs">
    <div class="container">
      <div class="sec-hdr">
        <div class="section-tag">Leadership</div>
        <h2 class="section-title-xl">Upper House <span class="tg">Council</span></h2>
        <p class="sec-sub">The core leadership driving Sundarbans House's vision and operations</p>
      </div>
      <div class="tm-lead-grid">

        <TmCard photo="../../teams/Samar.jpeg" alt="Samar Ahmad" initials="SA" name="Samar Ahmad" role="Web Admin"
          level="Diploma · Data Science" email="23f3001032@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/samarahmad10/"
          instagram="https://www.instagram.com/thesamarsoldier/?hl=en" :delay="0.1"/>

        <TmCard photo="../../teams/mannu.jpg" alt="Mannu Yadav" initials="MY" name="Mannu Yadav" role="Secretary"
          level="Diploma · Data Science" email="23f3001972@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/mannuyadav/" :delay="0.2"/>

        <TmCard photo="../../teams/aditya.jpeg" alt="Aditya V" initials="AV" name="Aditya V" role="Deputy Secretary"
          level="Diploma · Data Science" email="23f2000809@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/aditya-vaidhya/"
          instagram="https://www.instagram.com/adityavaidhya29/?hl=en" :delay="0.3"/>

      </div>
    </div>
  </section>

  <!-- ══ WEBOPS TEAM ══ -->
  <section class="section rs" style="background:var(--bg2)">
    <div class="container">
      <div class="sec-hdr">
        <div class="section-tag">Tech</div>
        <h2 class="section-title-xl">WebOps <span class="tg">Team</span></h2>
        <p class="sec-sub">Building and maintaining the digital presence of Sundarbans House</p>
      </div>
      <div class="tm-webops-grid">

        <TmCard photo="../../teams/Samar.jpeg" alt="Samar Ahmad" initials="SA" name="Samar Ahmad" role="Web Admin"
          level="Diploma · Data Science" email="23f3001032@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/samarahmad10/"
          instagram="https://www.instagram.com/thesamarsoldier/?hl=en" :delay="0.1"/>

        <TmCard photo="../../teams/Riya.jpg" alt="Riya Moun" initials="RM" name="Riya Moun" role="Web Developer"
          level="Diploma · Data Science" :delay="0.2"/>

        <TmCard photo="../../teams/Anuraj.jpg" alt="Anuraj Jit Saikia" initials="AJ" name="Anuraj Jit Saikia"
          role="Web Developer" level="Diploma · Data Science" :delay="0.3"/>

        <TmCard photo="../../teams/tejashvi.jpg" alt="Tejashvi Yadav" initials="TY" name="Tejashvi Yadav"
          role="AI & Web Engineer" level="Diploma · Data Science"
          linkedin="https://linkedin.com/in/tejashvi-yadav-46bba1272"
          instagram="https://instagram.com/tejaxhvi" :delay="0.4"/>

        <TmCard photo="../../teams/shoaib.jpeg" alt="Shoaib Sadiq Salehmohamed" initials="SS"
          name="Shoaib Sadiq Salehmohamed" role="Web Developer" level="Diploma · Data Science"
          email="shoaibkulsums@gmail.com" linkedin="https://linkedin.com/in/shoaib-ssm" :delay="0.5"/>

      </div>
    </div>
  </section>

  <!-- ══ LOWER HOUSE COUNCIL ══ -->
  <section class="section rs">
    <div class="container">
      <div class="sec-hdr">
        <div class="section-tag">Regional</div>
        <h2 class="section-title-xl">Lower House <span class="tg">Council</span></h2>
        <p class="sec-sub">Regional coordinators connecting students across India</p>
      </div>
      <div class="tm-lower-grid">

        <TmCard photo="../../teams/rushabh.jpg" alt="Rushabh Kapse" initials="RK" name="Rushabh Kapse"
          role="📍 Mumbai" level="Diploma · Data Science" :delay="0.1"/>

        <TmCard photo="../../teams/dishi.jpg" alt="Dishi Gupta" initials="DG" name="Dishi Gupta" role="📍 Delhi"
          level="2nd Year · Electronic Systems" linkedin="http://www.linkedin.com/in/dishi-gupta-984ba0376"
          instagram="https://www.instagram.com/bitti_the_cat" :delay="0.2"/>

        <TmCard photo="../../teams/aditri.jpg" alt="Aditri Bordoloi" initials="AB" name="Aditri Bordoloi"
          role="📍 Bengaluru" level="2nd Year · Electronic Systems" :delay="0.3"/>

        <TmCard photo="../../teams/aakash.webp" alt="Aakash Rawal" initials="AR" name="Aakash Rawal"
          role="📍 Chandigarh" level="2nd Year · Mathematics"
          linkedin="http://www.linkedin.com/in/aakash-rawal-04b24b324"
          instagram="https://www.instagram.com/aakash7468" :delay="0.4"/>

        <TmCard photo="../../teams/R SAI SAHANAA.jpeg" alt="R Sai Sahaana" initials="RS" name="R Sai Sahaana"
          role="📍 Chennai" level="Diploma · Data Science" :delay="0.5"/>

        <TmCard photo="../../teams/nivash.jpeg" alt="Nivash Kumar" initials="NK" name="Nivash Kumar"
          role="Regional Coordinator" level="Diploma · Data Science"
          linkedin="http://www.linkedin.com/in/nivash-kumar-896a80173" :delay="0.6"/>

        <TmCard photo="../../teams/chandan.webp" alt="Chandan Saw" initials="CS" name="Chandan Saw"
          role="Regional Coordinator" level="Diploma · Data Science"
          linkedin="https://www.linkedin.com/in/chandanshaw1" :delay="0.7"/>

        <TmCard photo="../../teams/kartik.webp" alt="Kartik Singh" initials="KS" name="Kartik Singh"
          role="Regional Coordinator" level="Diploma · Data Science" :delay="0.8"/>

        <TmCard photo="../../teams/divy.jpeg" alt="Divya Prakash" initials="DP" name="Divya Prakash"
          role="Regional Coordinator" level="Diploma · Data Science"
          linkedin="https://in.linkedin.com/in/divya-prakash-5b564b273" :delay="0.9"/>

        <TmCard photo="../../teams/laksh.webp" alt="Laksh Wadhawan" initials="LW" name="Laksh Wadhawan"
          role="Regional Coordinator" level="Diploma · Data Science"
          linkedin="https://www.linkedin.com/in/laksh-w-5911791b3/" :delay="1.0"/>

      </div>
    </div>
  </section>

  <!-- ══ COMMUNITY HEADS ══ -->
  <section class="section rs" style="background:var(--bg2)">
    <div class="container">
      <div class="sec-hdr">
        <div class="section-tag">Team Leads</div>
        <h2 class="section-title-xl">Community <span class="tg">Heads</span></h2>
        <p class="sec-sub">Department leads powering every initiative inside Sundarbans House</p>
      </div>
      <div class="tm-comm-grid">

        <TmCard photo="../../teams/himanshu.jpg" alt="Himanshu Sharma" initials="HS" name="Himanshu Sharma"
          role="E-Sports" level="Diploma · Data Science" email="24f2003630@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/himanshu-sharma-4b2176333/"
          instagram="https://www.instagram.com/hs_16405?igsh=MTF3aTdrbHZvMjZ2OA==" :delay="0.1"/>

        <TmCard photo="../../teams/avneesh.jpg" alt="Avneesh Singh" initials="AS" name="Avneesh Singh"
          role="Technical" level="Diploma · Data Science" email="22f3002042@ds.study.iitm.ac.in"
          linkedin="https://www.linkedin.com/in/avneesh-singh-dev/"
          instagram="https://www.instagram.com/0xasr.dev/" :delay="0.2"/>

        <TmCard photo="../../teams/abhisekh.jpg" alt="Abhisekh Chowdhury" initials="AC" name="Abhisekh Chowdhury"
          role="Cultural" level="Diploma · Data Science" :delay="0.3"/>

      </div>
    </div>
  </section>

  </div>
</template>

<script setup>
import { useScrollReveal } from "../composables/useAnimations.js";
useScrollReveal();
</script>

<!-- ══ REUSABLE CARD COMPONENT ══ -->
<!-- Save this as TmCard.vue in your components folder -->
<!--
<template>
  <div class="tm-card rc" :style="`--card-delay:${delay}s`">
    <div class="tm-photo-wrap">
      <img :src="photo" :alt="alt"
        @error="$event.target.style.display='none';$event.target.nextElementSibling.style.display='flex'">
      <div class="tm-no-photo" style="display:none">{{ initials }}</div>
      <div class="tm-overlay">
        <div class="tm-name">{{ name }}</div>
        <div class="tm-role">{{ role }}</div>
      </div>
    </div>
    <div class="tm-info">
      <div class="tm-level">{{ level }}</div>
      <div class="tm-socials">
        <a v-if="email" :href="`mailto:${email}`" class="tm-soc" title="Email">
          <svg width="13" height="13"><use href="#icon-email"/></svg>
        </a>
        <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener" class="tm-soc li" title="LinkedIn">
          <svg width="13" height="13"><use href="#icon-linkedin"/></svg>
        </a>
        <a v-if="instagram" :href="instagram" target="_blank" rel="noopener" class="tm-soc ig" title="Instagram">
          <svg width="13" height="13"><use href="#icon-instagram"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photo: String, alt: String, initials: String, name: String,
  role: String, level: String, email: String,
  linkedin: String, instagram: String, delay: { type: Number, default: 0.1 }
})
</script>
-->

<style scoped>
.tm-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: transform 0.35s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.35s ease, border-color 0.3s;
}
.tm-card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 160, 23, 0.4);
  box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,160,23,0.15);
}
.tm-photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: rgba(212, 160, 23, 0.05);
}
.tm-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease, filter 0.4s ease;
  filter: grayscale(15%);
}
.tm-card:hover .tm-photo-wrap img { transform: scale(1.06); filter: grayscale(0%); }
.tm-photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8,7,5,0.95) 0%, rgba(8,7,5,0.35) 45%, transparent 70%);
  pointer-events: none;
}
.tm-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem 1.25rem 1rem; z-index: 2; }
.tm-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; color: #F5EDD0; margin-bottom: 0.3rem; line-height: 1.2; }
.tm-role {
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D4A017;
  background: rgba(212, 160, 23, 0.12);
  border: 1px solid rgba(212, 160, 23, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
}
.tm-info { padding: 0.85rem 1.25rem 1rem; }
.tm-level { font-size: 0.75rem; color: var(--text3); margin-bottom: 0.75rem; }
.tm-socials { display: flex; gap: 0.45rem; }
.tm-soc {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: none;
  color: var(--text3);
  text-decoration: none;
  transition: all 0.2s;
}
.tm-soc:hover { background: rgba(212,160,23,0.1); border-color: rgba(212,160,23,0.35); color: var(--accent); transform: translateY(-2px); }
.tm-soc.li:hover { background: rgba(10,102,194,0.15); border-color: rgba(10,102,194,0.4); color: #0A66C2; }
.tm-soc.ig:hover { background: rgba(220,39,67,0.12); border-color: rgba(220,39,67,0.35); color: #e6683c; }

/* ── GRIDS ── */
.tm-lead-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.tm-lead-grid .tm-photo-wrap { aspect-ratio: 3/3.8; }
.tm-webops-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.tm-lower-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
.tm-lower-grid .tm-photo-wrap { aspect-ratio: 3/3.5; }
.tm-lower-grid .tm-name { font-size: 0.88rem; }
.tm-comm-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }

/* ── NO PHOTO FALLBACK ── */
.tm-no-photo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(212, 160, 23, 0.25);
  background: linear-gradient(135deg, rgba(212,160,23,0.04), rgba(212,160,23,0.08));
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .tm-lower-grid, .tm-comm-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .tm-lead-grid, .tm-webops-grid { grid-template-columns: repeat(2, 1fr); }
  .tm-lower-grid, .tm-comm-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .tm-lead-grid, .tm-webops-grid, .tm-lower-grid, .tm-comm-grid { grid-template-columns: 1fr 1fr; }
}

[data-theme="light"] .tm-photo-wrap::after {
  background: linear-gradient(to top, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.3) 45%, transparent 70%);
}
[data-theme="light"] .tm-card { background: #fff; border-color: rgba(0,0,0,0.08); }
</style>
