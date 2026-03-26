<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80&auto=format&fit=crop" alt="Community" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Community</span></div>
        <h1>Our <span class="tg">Communities</span></h1>
        <p>Join special interest groups and connect with like-minded members</p>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Explore</div>
          <h2 class="section-title-xl">Find Your <span class="tg">Tribe</span></h2>
          <p class="sec-sub">Whether you love coding, music, entrepreneurship or academics — there's a community for you in Sundarbans.</p>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(c, i) in communities" :key="c.name" :style="`--card-delay:${i*0.08}s`">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
              <span style="font-size:2.5rem">{{ c.icon }}</span>
              <span style="font-size:0.72rem;color:var(--text3)">{{ c.members }} members</span>
            </div>
            <h3 style="font-family:Cinzel,serif;font-size:1rem;font-weight:700;margin-bottom:0.5rem">{{ c.name }}</h3>
            <p class="desc" style="font-size:0.83rem;margin-bottom:1rem">{{ c.desc }}</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem">
              <span v-for="tag in c.tags" :key="tag" style="font-size:0.68rem;background:var(--surface2);border:1px solid var(--border);color:var(--text2);padding:0.2rem 0.6rem;border-radius:99px">{{ tag }}</span>
            </div>
            <a href="#" class="submit-btn" style="font-size:0.82rem;padding:0.5rem 1.1rem">Join Community</a>
          </div>
        </div>
      </div>
    </section>

    <!-- WhatsApp Groups -->
    <section class="section rs" style="background:var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Stay Connected</div>
          <h2 class="section-title-xl">WhatsApp <span class="tg">Groups</span></h2>
          <p class="sec-sub">Join our active WhatsApp groups for real-time updates, discussions, and quick help</p>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(g, i) in groups" :key="g.name" :style="`--card-delay:${i*0.1}s`">
            <div style="font-size:2rem;margin-bottom:0.75rem">{{ g.icon }}</div>
            <h4 style="font-family:Cinzel,serif;font-weight:700;margin-bottom:0.4rem">{{ g.name }}</h4>
            <p class="desc" style="font-size:0.82rem;margin-bottom:1rem">{{ g.desc }}</p>
            <a href="#" class="submit-btn" style="font-size:0.82rem;padding:0.5rem 1.1rem;background:#25D366;display:inline-flex;align-items:center;gap:0.5rem">
              <span>Join Group</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section rs" style="padding:5rem 0;background:linear-gradient(135deg,rgba(212,160,23,0.06),rgba(8,7,5,0.95))">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Create</div>
          <h2 class="cta-heading">Start a New <span class="cta-acc">Community</span></h2>
          <p class="cta-sub">Have a passion that doesn't have a group yet? Start your own community within Sundarbans and gather like-minded members.</p>
          <div class="cta-acts">
            <router-link to="/contact" class="cta-btn-p">Start Community →</router-link>
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

const communities = [
  { icon: '💻', name: 'Tech & Coding Club', members: '1,240', desc: 'For developers, hackers and tech enthusiasts. Weekly coding challenges, project collabs and tech talks.', tags: ['Python', 'Web Dev', 'DSA', 'ML'] },
  { icon: '📊', name: 'Data Science Hub', members: '890', desc: 'Explore data, build models, and share insights. Perfect for ML/AI enthusiasts and statistics lovers.', tags: ['ML', 'Statistics', 'Python', 'R'] },
  { icon: '🎨', name: 'Design & Creativity', members: '560', desc: 'For designers, artists and creators. Share your work, get feedback and collaborate on visual projects.', tags: ['UI/UX', 'Figma', 'Illustration', 'Branding'] },
  { icon: '🚀', name: 'Entrepreneurship Cell', members: '420', desc: 'For aspiring founders and innovators. Pitch ideas, find co-founders and learn from successful entrepreneurs.', tags: ['Startups', 'Business', 'Innovation', 'Funding'] },
  { icon: '📚', name: 'Academic Excellence', members: '2,100', desc: 'The central hub for academic discussions, doubt-clearing, and peer mentoring across all subjects.', tags: ['Maths', 'Physics', 'CS', 'Study Tips'] },
  { icon: '🏋️', name: 'Wellness & Fitness', members: '340', desc: 'Balance your studies with health. Share workout routines, mental health tips and wellness resources.', tags: ['Fitness', 'Mental Health', 'Yoga', 'Running'] },
  { icon: '🎵', name: 'Arts & Culture', members: '280', desc: 'Music, dance, poetry and all things creative. Express yourself and celebrate diverse cultural talent.', tags: ['Music', 'Dance', 'Poetry', 'Theatre'] },
  { icon: '🌍', name: 'Social Impact', members: '195', desc: 'Students passionate about making a difference. Community service, volunteering and social initiatives.', tags: ['NGO', 'Environment', 'Social Work'] },
  { icon: '💼', name: 'Career & Placements', members: '1,560', desc: 'Resume reviews, interview prep, internship hunts and career guidance from seniors and professionals.', tags: ['Jobs', 'Internships', 'Resume', 'Interviews'] },
]

const groups = [
  { icon: '📢', name: 'Main Announcements', desc: 'Official updates, event announcements, and important news from Sundarbans House leadership' },
  { icon: '📚', name: 'Doubt Clearing Hub', desc: 'Ask any academic doubt anytime — seniors and peers are always ready to help you out' },
  { icon: '🎯', name: 'Events & Activities', desc: 'Stay updated on all upcoming events, competitions, and activities organized by Sundarbans' },
  { icon: '🏙️', name: 'Delhi Chapter', desc: 'Dedicated group for all Delhi-based Sundarbans members for local meetups and connections' },
  { icon: '🌊', name: 'Mumbai Chapter', desc: 'Mumbai Sundarbans members unite here — local events, meetups and city-specific resources' },
  { icon: '💻', name: 'Bangalore Tech Group', desc: 'Tech-focused discussions for Bangalore members — job openings, tech events and networking' },
]
</script>
