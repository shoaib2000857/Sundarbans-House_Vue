<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop" alt="Teams" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Our Teams</span></div>
        <h1>Our <span class="tg">Teams</span></h1>
        <p>Meet the passionate individuals who drive Sundarbans House forward</p>
      </div>
    </section>

    <!-- Leadership -->
    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Leadership</div>
          <h2 class="section-title-xl">House <span class="tg">Leadership</span></h2>
          <p class="sec-sub">The core team guiding Sundarbans House with vision and dedication</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem">
          <div class="card-base rc" v-for="(m, i) in leadership" :key="m.name" :style="`--card-delay:${i*0.1}s;text-align:center`">
            <div style="width:90px;height:90px;border-radius:50%;overflow:hidden;margin:0 auto 1rem;border:3px solid var(--accent)">
              <img :src="m.img" :alt="m.name" style="width:100%;height:100%;object-fit:cover" @error="e=>e.target.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80&auto=format&fit=crop&crop=face'" />
            </div>
            <h3 style="font-family:Cinzel,serif;font-size:1rem;font-weight:700;margin-bottom:0.25rem;color:var(--text)">{{ m.name }}</h3>
            <div class="section-tag" style="margin:0 auto 0.75rem;display:inline-flex">{{ m.role }}</div>
            <p class="desc" style="font-size:0.82rem;margin:0">{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="section rs" style="background:var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Departments</div>
          <h2 class="section-title-xl">Our <span class="tg">Teams</span></h2>
          <p class="sec-sub">Specialized teams working behind the scenes to make Sundarbans great</p>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(d, i) in departments" :key="d.name" :style="`--card-delay:${i*0.1}s`">
            <div style="font-size:2.5rem;margin-bottom:1rem">{{ d.icon }}</div>
            <h3 style="font-family:Cinzel,serif;font-size:1rem;font-weight:700;margin-bottom:0.5rem">{{ d.name }}</h3>
            <p class="desc" style="font-size:0.83rem;margin-bottom:1rem">{{ d.desc }}</p>
            <div style="display:flex;align-items:center;gap:0.5rem">
              <div v-for="(av, j) in d.avatars" :key="j" class="mav">{{ av }}</div>
              <span style="font-size:0.73rem;color:var(--text2);margin-left:0.5rem">{{ d.count }} members</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join -->
    <section class="cta-section rs" style="padding:5rem 0;background:linear-gradient(135deg,rgba(212,160,23,0.06),rgba(8,7,5,0.95))">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Join Us</div>
          <h2 class="cta-heading">Be Part of the <span class="cta-acc">Team</span></h2>
          <p class="cta-sub">Want to contribute to Sundarbans House? We're always looking for passionate students to join our teams and help shape the community.</p>
          <div class="cta-acts">
            <router-link to="/contact" class="cta-btn-p">Apply Now →</router-link>
            <router-link to="/about" class="cta-btn-o">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
import { useScrollReveal } from '../composables/useAnimations.js'
useScrollReveal()

const leadership = [
  { name: 'Samar', role: 'House Captain', bio: 'Leading Sundarbans with vision and passion for community building across IIT Madras BS.', img: '/teams/Samar.jpeg' },
  { name: 'Mannu', role: 'Vice Captain', bio: 'Driving initiatives, coordinating teams, and ensuring every member gets the best experience.', img: '/teams/mannu.jpg' },
  { name: 'Tejashvi', role: 'Academic Head', bio: 'Curating study resources and organizing academic sessions for students across all levels.', img: '/teams/tejashvi.jpg' },
  { name: 'Chandan', role: 'Events Head', bio: 'Orchestrating memorable events and competitions that bring the community together.', img: '/teams/chandan.webp' },
  { name: 'Riya', role: 'Community Manager', bio: 'Managing community platforms, engagement and ensuring every member feels at home.', img: '/teams/Riya.jpg' },
  { name: 'Aakash', role: 'Tech Lead', bio: 'Building the digital infrastructure that powers Sundarbans House presence.', img: '/teams/aakash.webp' },
]

const departments = [
  { icon: '📚', name: 'Academic Team', desc: 'Curates study materials, organizes doubt sessions, and peer tutoring programs', avatars: ['A','B','C'], count: 12 },
  { icon: '🎯', name: 'Events Team', desc: 'Plans and executes workshops, competitions, hackathons, and cultural events', avatars: ['D','E','F'], count: 8 },
  { icon: '📣', name: 'Marketing & Social', desc: 'Manages social media, designs creatives, and spreads the Sundarbans brand', avatars: ['G','H','I'], count: 10 },
  { icon: '🤝', name: 'Outreach Team', desc: 'Connects with new members, organizes onboarding, and manages city chapters', avatars: ['J','K','L'], count: 15 },
  { icon: '💻', name: 'Tech Team', desc: 'Builds and maintains all digital tools, websites, and automation systems', avatars: ['M','N','O'], count: 6 },
  { icon: '🎨', name: 'Design Team', desc: 'Creates all visual assets, event banners, and the aesthetic identity of the house', avatars: ['P','Q','R'], count: 7 },
]
</script>
