<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80&auto=format&fit=crop" alt="Study" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Study Corner</span></div>
        <h1>Study <span class="tg">Corner</span></h1>
        <p>Curated academic resources, notes, and materials to help you excel</p>
      </div>
    </section>

    <!-- Search & Filter -->
    <section class="section rs" style="background:var(--bg2);padding:3rem 0">
      <div class="container">
        <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;justify-content:space-between">
          <div style="flex:1;min-width:240px;position:relative">
            <input v-model="search" type="text" placeholder="Search resources, subjects, topics..." class="form-input" style="padding-left:2.5rem" />
            <svg style="position:absolute;left:0.85rem;top:50%;transform:translateY(-50%);color:var(--text2)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <div class="filter-tabs" style="margin:0">
            <div class="ftab" v-for="tab in tabs" :key="tab" :class="{active: activeTab===tab}" @click="activeTab=tab">{{ tab }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
    <section class="section rs">
      <div class="container">
        <div class="sec-hdr" style="text-align:left;margin-bottom:2rem;max-width:none">
          <div class="section-tag">{{ activeTab === 'All' ? 'All Resources' : activeTab }}</div>
          <h2 class="section-title-xl" style="margin-bottom:0.5rem">{{ filteredResources.length }} <span class="tg">Resources Found</span></h2>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(r, i) in filteredResources" :key="r.title" :style="`--card-delay:${(i%3)*0.1}s`">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
              <div style="font-size:2rem">{{ r.icon }}</div>
              <div class="section-tag" style="margin:0">{{ r.category }}</div>
            </div>
            <h3 style="font-family:Cinzel,serif;font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:var(--text)">{{ r.title }}</h3>
            <p class="desc" style="font-size:0.83rem;margin-bottom:0.75rem">{{ r.desc }}</p>
            <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem">
              <span style="font-size:0.72rem;color:var(--text3)">📁 {{ r.files }} files</span>
              <span style="font-size:0.72rem;color:var(--text3)">👁 {{ r.views }} views</span>
              <span style="font-size:0.72rem;color:var(--accent)">⭐ {{ r.rating }}</span>
            </div>
            <a href="#" class="submit-btn" style="font-size:0.82rem;padding:0.5rem 1.1rem">Download →</a>
          </div>
        </div>
        <div v-if="filteredResources.length === 0" style="text-align:center;padding:4rem;color:var(--text2)">
          <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
          <p>No resources found for "{{ search }}"</p>
        </div>
      </div>
    </section>

    <!-- Contribute CTA -->
    <section class="cta-section rs" style="padding:5rem 0;background:linear-gradient(135deg,rgba(212,160,23,0.06),rgba(8,7,5,0.95))">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Contribute</div>
          <h2 class="cta-heading">Share Your <span class="cta-acc">Knowledge</span></h2>
          <p class="cta-sub">Have notes, solutions, or study materials? Share them with the community and help fellow students succeed.</p>
          <div class="cta-acts">
            <router-link to="/contact" class="cta-btn-p">Upload Resources →</router-link>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import { useScrollReveal } from '../composables/useAnimations.js'
useScrollReveal()

const search = ref('')
const tabs = ['All', 'Mathematics', 'Statistics', 'Programming', 'Data Science', 'Physics']
const activeTab = ref('All')

const resources = [
  { icon: '📐', title: 'Calculus Complete Notes', desc: 'Comprehensive notes covering limits, derivatives, integrals — perfect for Foundation level', category: 'Mathematics', files: 24, views: 1840, rating: '4.9', tags: ['Mathematics'] },
  { icon: '📊', title: 'Statistics Cheat Sheet', desc: 'All key formulas, distributions, and hypothesis testing concepts in one place', category: 'Statistics', files: 8, views: 2340, rating: '5.0', tags: ['Statistics'] },
  { icon: '💻', title: 'Python Crash Course', desc: 'From variables to OOP — complete beginner to intermediate Python guide', category: 'Programming', files: 18, views: 3210, rating: '4.8', tags: ['Programming'] },
  { icon: '🤖', title: 'Machine Learning Primer', desc: 'Introduction to ML algorithms with worked examples and Python implementations', category: 'Data Science', files: 32, views: 2750, rating: '4.9', tags: ['Data Science', 'Programming'] },
  { icon: '📈', title: 'Linear Algebra Made Easy', desc: 'Vectors, matrices, eigenvalues — visualized and explained simply', category: 'Mathematics', files: 15, views: 1540, rating: '4.7', tags: ['Mathematics'] },
  { icon: '🔬', title: 'Probability Theory Notes', desc: 'Bayes theorem, conditional probability, random variables — all covered', category: 'Statistics', files: 11, views: 1980, rating: '4.8', tags: ['Statistics', 'Mathematics'] },
  { icon: '🖥️', title: 'Data Structures & Algorithms', desc: 'Arrays, linked lists, trees, graphs — with complexity analysis', category: 'Programming', files: 28, views: 2890, rating: '4.9', tags: ['Programming'] },
  { icon: '⚡', title: 'Physics Mechanics Notes', desc: 'Newton\'s laws, energy, momentum — Foundation physics complete guide', category: 'Physics', files: 20, views: 1320, rating: '4.6', tags: ['Physics'] },
  { icon: '📉', title: 'Data Visualization Guide', desc: 'Matplotlib, Seaborn, and Plotly — create stunning charts and graphs', category: 'Data Science', files: 14, views: 1670, rating: '4.8', tags: ['Data Science', 'Programming'] },
]

const filteredResources = computed(() => {
  let list = resources
  if (activeTab.value !== 'All') list = list.filter(r => r.tags.includes(activeTab.value))
  if (search.value.trim()) list = list.filter(r => r.title.toLowerCase().includes(search.value.toLowerCase()) || r.desc.toLowerCase().includes(search.value.toLowerCase()))
  return list
})
</script>
