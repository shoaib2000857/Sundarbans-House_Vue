<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Teams"
      title="Our"
      accent-title="Teams"
      subtitle="Meet the passionate people who drive Sundarbans House forward"
    />

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Leadership</div>
          <h2 class="section-title-xl">
            Upper House <span class="tg">Council</span>
          </h2>
          <p class="sec-sub">
            The core leadership driving Sundarbans House's vision and operations
          </p>
        </div>
        <div class="tm-lead-grid">
          <div class="tm-card rc" v-for="m in upperCouncil" :key="m.name">
            <div class="tm-photo-wrap">
              <img :src="m.img" :alt="m.name" @error="handleMissingImage" />
              <div class="tm-overlay">
                <div class="tm-name">{{ m.name }}</div>
                <div class="tm-role">{{ m.role }}</div>
              </div>
            </div>
            <div class="tm-info">
              <div class="tm-level">{{ m.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Tech</div>
          <h2 class="section-title-xl">WebOps <span class="tg">Team</span></h2>
          <p class="sec-sub">
            Building and maintaining the digital presence of Sundarbans House
          </p>
        </div>
        <div class="tm-webops-grid">
          <div class="tm-card rc" v-for="m in webOps" :key="m.name">
            <div class="tm-photo-wrap">
              <img :src="m.img" :alt="m.name" @error="handleMissingImage" />
              <div class="tm-overlay">
                <div class="tm-name">{{ m.name }}</div>
                <div class="tm-role">{{ m.role }}</div>
              </div>
            </div>
            <div class="tm-info">
              <div class="tm-level">{{ m.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Regional</div>
          <h2 class="section-title-xl">
            Lower House <span class="tg">Council</span>
          </h2>
          <p class="sec-sub">
            Regional coordinators connecting students across India
          </p>
        </div>
        <div class="tm-lower-grid">
          <div class="tm-card rc" v-for="m in lowerCouncil" :key="m.name">
            <div class="tm-photo-wrap">
              <img :src="m.img" :alt="m.name" @error="handleMissingImage" />
              <div class="tm-overlay">
                <div class="tm-name">{{ m.name }}</div>
                <div class="tm-role">{{ m.role }}</div>
              </div>
            </div>
            <div class="tm-info">
              <div class="tm-level">{{ m.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Team Leads</div>
          <h2 class="section-title-xl">
            Community <span class="tg">Heads</span>
          </h2>
          <p class="sec-sub">
            Department leads powering every initiative inside Sundarbans House
          </p>
        </div>
        <div class="tm-comm-grid">
          <div
            class="tm-comm-card rc"
            v-for="m in communityHeads"
            :key="m.name">
            <div class="tm-comm-icon">{{ m.icon }}</div>
            <div class="tm-comm-name">{{ m.name }}</div>
            <div class="tm-comm-role">{{ m.role }}</div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>

import { useScrollReveal } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";

useScrollReveal();

const upperCouncil = [
  {
    name: "Samar Ahmad",
    role: "Web Admin",
    level: "Diploma · Data Science",
    img: "/teams/Samar.jpeg",
  },
  {
    name: "Mannu Yadav",
    role: "Secretary",
    level: "Diploma · Data Science",
    img: "/teams/mannu.jpg",
  },
  {
    name: "Aditya V",
    role: "Deputy Secretary",
    level: "Diploma · Data Science",
    img: "/teams/aditya.jpeg",
  },
];

const webOps = [
  {
    name: "Samar Ahmad",
    role: "Web Admin",
    level: "Diploma · Data Science",
    img: "/teams/Samar.jpeg",
  },
  {
    name: "Anuraj Jit Saikia",
    role: "Web Developer",
    level: "Diploma · Data Science",
    img: "/teams/Anuraj.jpg",
  },
  {
    name: "Riya Moun",
    role: "Web Developer",
    level: "Diploma · Data Science",
    img: "/teams/Riya.jpg",
  },
  {
    name: "Sadia Tabassum",
    role: "Web Developer",
    level: "Diploma · Data Science",
    img: "/teams/Sadia.jpg",
  },
  {
    name: "Shoaib Sadiq Salehmohamed",
    role: "Web Developer",
    level: "Diploma · Data Science",
    img: "",
  },
  {
    name: "Tejashvi Yadav",
    role: "AI & Web Engineer",
    level: "Diploma · Data Science",
    img: "/teams/tejashvi.jpg",
  },
];

const lowerCouncil = [
  {
    name: "Rushabh Kapse",
    role: "📍 Mumbai",
    level: "Diploma · Data Science",
    img: "/teams/rushabh.jpg",
  },
  {
    name: "Dishi Gupta",
    role: "📍 Delhi",
    level: "2nd Year · Electronic Systems",
    img: "/teams/dishi.jpg",
  },
  {
    name: "Aditri Bordoloi",
    role: "📍 Bengaluru",
    level: "Foundation · Data Sciences",
    img: "/teams/Aditri.jpeg",
  },
  {
    name: "Aakash Rawal",
    role: "📍 Chandigarh",
    level: "2nd Year · Mathematics",
    img: "/teams/aakash.webp",
  },
  {
    name: "R Sai Sahaana",
    role: "📍 Chennai",
    level: "Diploma · Data Science",
    img: "/teams/R SAI SAHANAA.jpeg",
  },
  {
    name: "Nivash Kumar",
    role: "Regional Coordinator",
    level: "Diploma · Data Science",
    img: "/teams/nivash.jpeg",
  },
  {
    name: "Chandan Saw",
    role: "Regional Coordinator",
    level: "Diploma · Data Science",
    img: "/teams/chandan.webp",
  },
  {
    name: "Kartik Singh",
    role: "Regional Coordinator",
    level: "Diploma · Data Science",
    img: "/teams/kartik.webp",
  },
];

const communityHeads = [
  { icon: "💻", name: "Arjun Sharma", role: "Tech Head" },
  { icon: "🎭", name: "Priya Nair", role: "Cultural Head" },
  { icon: "📚", name: "Sameer Khan", role: "Academic Head" },
  { icon: "📣", name: "Ananya Singh", role: "Media Head" },
  { icon: "🏙️", name: "Vivek Joshi", role: "Meetups Coordinator" },
  { icon: "🎨", name: "Divya Rao", role: "Design Head" },
  { icon: "🤝", name: "Nikhil Verma", role: "Outreach Head" },
  { icon: "💰", name: "Shruti Mehta", role: "Finance Head" },
];

function handleMissingImage(event) {
  event.target.style.display = "none";
}
</script>

<style scoped>
.tm-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.3s;
}
.tm-card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 160, 23, 0.4);
  box-shadow:
    0 32px 64px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(212, 160, 23, 0.15);
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
  transition:
    transform 0.5s ease,
    filter 0.4s ease;
  filter: grayscale(15%);
}
.tm-card:hover .tm-photo-wrap img {
  transform: scale(1.06);
  filter: grayscale(0);
}
.tm-photo-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 7, 5, 0.95) 0%,
    rgba(8, 7, 5, 0.35) 45%,
    transparent 70%
  );
  pointer-events: none;
}
.tm-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.25rem 1rem;
  z-index: 2;
}
.tm-name {
  font-family: Cinzel, serif;
  font-weight: 700;
  font-size: 1rem;
  color: #f5edd0;
  margin-bottom: 0.3rem;
  line-height: 1.2;
}
.tm-role {
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d4a017;
  background: rgba(212, 160, 23, 0.12);
  border: 1px solid rgba(212, 160, 23, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
}
.tm-info {
  padding: 0.85rem 1.25rem 1rem;
}
.tm-level {
  font-size: 0.75rem;
  color: var(--text3);
}
.tm-lead-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.tm-lead-grid .tm-photo-wrap {
  aspect-ratio: 3/3.8;
}
.tm-webops-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.tm-lower-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.tm-lower-grid .tm-photo-wrap {
  aspect-ratio: 3/3.5;
}
.tm-lower-grid .tm-name {
  font-size: 0.88rem;
}
.tm-comm-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.tm-comm-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem 1rem 1.25rem;
  text-align: center;
  transition: all 0.3s;
}
.tm-comm-card:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 160, 23, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}
.tm-comm-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(212, 160, 23, 0.08);
  border: 1px solid rgba(212, 160, 23, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin: 0 auto 0.85rem;
}
.tm-comm-name {
  font-family: Cinzel, serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text);
  margin-bottom: 0.2rem;
}
.tm-comm-role {
  font-size: 0.72rem;
  color: var(--text3);
  margin-bottom: 0.75rem;
}
@media (max-width: 1024px) {
  .tm-lower-grid,
  .tm-comm-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .tm-lead-grid,
  .tm-webops-grid,
  .tm-lower-grid,
  .tm-comm-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .tm-lead-grid,
  .tm-webops-grid,
  .tm-lower-grid,
  .tm-comm-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
