<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&auto=format&fit=crop" alt="Contact" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Contact</span></div>
        <h1>Get in <span class="tg">Touch</span></h1>
        <p>Have a question, suggestion or want to collaborate? We'd love to hear from you.</p>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:4rem;align-items:start">
          <div>
            <div class="section-tag">Contact Us</div>
            <h2 class="section-title-xl">We're Here to <span class="tg">Help</span></h2>
            <p class="desc">Whether you have a question about events, need academic help, or want to contribute to Sundarbans — reach out and we'll respond promptly.</p>
            <div style="display:flex;flex-direction:column;gap:1.5rem;margin-top:2rem">
              <div class="card-base" v-for="info in contactInfo" :key="info.title" style="display:flex;align-items:flex-start;gap:1rem;padding:1.25rem">
                <div style="font-size:1.5rem;min-width:36px">{{ info.icon }}</div>
                <div>
                  <h4 style="font-family:Cinzel,serif;font-size:0.88rem;font-weight:700;margin-bottom:0.25rem">{{ info.title }}</h4>
                  <p style="font-size:0.83rem;color:var(--text2)">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-base rs">
            <h3 style="font-family:Cinzel,serif;font-weight:700;margin-bottom:1.5rem;font-size:1.1rem">Send a Message</h3>
            <div v-if="sent" style="text-align:center;padding:2rem">
              <div style="font-size:3rem;margin-bottom:1rem">✅</div>
              <h4 style="font-family:Cinzel,serif;font-weight:700;margin-bottom:0.5rem">Message Sent!</h4>
              <p class="desc">We'll get back to you within 24 hours.</p>
              <button @click="sent=false" class="submit-btn" style="margin-top:1rem">Send Another</button>
            </div>
            <template v-else>
              <div class="grid-2" style="gap:1rem">
                <div class="form-field">
                  <label>Your Name</label>
                  <input v-model="form.name" type="text" class="form-input" placeholder="John Doe" />
                </div>
                <div class="form-field">
                  <label>Email Address</label>
                  <input v-model="form.email" type="email" class="form-input" placeholder="you@example.com" />
                </div>
              </div>
              <div class="form-field">
                <label>Subject</label>
                <select v-model="form.subject" class="form-select">
                  <option value="">Select a topic</option>
                  <option>General Inquiry</option>
                  <option>Academic Help</option>
                  <option>Event Proposal</option>
                  <option>Team Application</option>
                  <option>Technical Issue</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-field">
                <label>Message</label>
                <textarea v-model="form.message" class="form-textarea" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button @click="submitForm" class="submit-btn" :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Send Message →' }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import { useScrollReveal } from '../composables/useAnimations.js'
useScrollReveal()

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitting = ref(false)
const sent = ref(false)

function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all required fields.')
    return
  }
  submitting.value = true
  setTimeout(() => { submitting.value = false; sent.value = true; form.value = { name: '', email: '', subject: '', message: '' } }, 1500)
}

const contactInfo = [
  { icon: '📧', title: 'Email', value: 'sundarbanshouse@iitm.ac.in' },
  { icon: '📱', title: 'WhatsApp', value: 'Join our main community group for quick responses' },
  { icon: '📍', title: 'Based At', value: 'IIT Madras BS Online Degree Programme, Chennai' },
  { icon: '🕐', title: 'Response Time', value: 'Usually within 24 hours on weekdays' },
]
</script>
