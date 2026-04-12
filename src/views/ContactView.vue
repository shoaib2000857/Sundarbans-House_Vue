<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Contact"
      title="Get in"
      accent-title="Touch"
      subtitle="Have questions? We'd love to hear from you — reach out any time."
    />

    <section class="section rs">
      <div class="container">
        <div
          style="
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 4rem;
            align-items: start;
          ">
          <div>
            <div class="section-tag">Contact Us</div>
            <h2 class="section-title-xl">
              We're Here to <span class="tg">Help</span>
            </h2>
            <p class="desc">
              Feel free to reach out through any of these channels. We usually
              respond within 24 to 48 hours.
            </p>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 2rem;
              ">
              
                class="card-base"
                v-for="info in contactInfo"
                :key="info.title"
                :href="info.link"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  display: flex;
                  align-items: flex-start;
                  gap: 1rem;
                  padding: 1.25rem;
                  text-decoration: none;
                  cursor: pointer;
                  transition: transform 0.15s, box-shadow 0.15s;
                "
                @mouseover="$event.currentTarget.style.transform='translateY(-2px)'"
                @mouseleave="$event.currentTarget.style.transform='translateY(0)'">
                <div style="font-size: 1.5rem; min-width: 36px">
                  {{ info.icon }}
                </div>
                <div>
                  <h4
                    style="
                      font-family: Cinzel, serif;
                      font-size: 0.88rem;
                      font-weight: 700;
                      margin-bottom: 0.25rem;
                    ">
                    {{ info.title }}
                  </h4>
                  <p style="font-size: 0.83rem; color: var(--text2)">
                    {{ info.value }}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div class="card-base rs">
            <h3
              style="
                font-family: Cinzel, serif;
                font-weight: 700;
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
              ">
              Send a Message
            </h3>
            <div v-if="sent" style="text-align: center; padding: 2rem">
              <div style="font-size: 3rem; margin-bottom: 1rem">✅</div>
              <h4
                style="
                  font-family: Cinzel, serif;
                  font-weight: 700;
                  margin-bottom: 0.5rem;
                ">
                Message Sent!
              </h4>
              <p class="desc">We'll get back to you within 24 hours.</p>
              <button
                @click="sent = false"
                class="submit-btn"
                style="margin-top: 1rem">
                Send Another
              </button>
            </div>
            <template v-else>
              <div class="grid-2" style="gap: 1rem">
                <div class="form-field">
                  <label>Your Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="John Doe" />
                </div>
                <div class="form-field">
                  <label>Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    placeholder="you@example.com" />
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
                <textarea
                  v-model="form.message"
                  class="form-textarea"
                  placeholder="Tell us how we can help..."></textarea>
              </div>
              <p
                v-if="error"
                style="color: #e74c3c; font-size: 0.85rem; margin-bottom: 0.75rem;">
                {{ error }}
              </p>
              <button
                @click="submitForm"
                class="submit-btn"
                :disabled="submitting">
                {{ submitting ? "Sending..." : "Send Message →" }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageHero from "../components/PageHero.vue";
import { useScrollReveal } from "../composables/useAnimations.js";
useScrollReveal();

const form = ref({ name: "", email: "", subject: "", message: "" });
const submitting = ref(false);
const sent = ref(false);
const error = ref("");

async function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert("Please fill in all required fields.");
    return;
  }

  submitting.value = true;
  error.value = "";

  try {
    const response = await fetch("https://formspree.io/f/mgorwpak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      }),
    });

    if (response.ok) {
      sent.value = true;
      form.value = { name: "", email: "", subject: "", message: "" };
    } else {
      const data = await response.json();
      error.value = data?.errors?.[0]?.message || "Something went wrong. Try again.";
    }
  } catch (e) {
    error.value = "Network error. Please check your connection.";
  } finally {
    submitting.value = false;
  }
}

const contactInfo = [
  {
    icon: "📸",
    title: "Instagram",
    value: "@sundarbanshouse.official",
    link: "https://www.instagram.com/sundarbanshouse.official/"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/company/sundarbans-iitm",
    link: "https://www.linkedin.com/company/sundarbans-iitm/"
  },
  {
    icon: "▶️",
    title: "Youtube",
    value: "YouTube Channel",
    link: "https://www.youtube.com/channel/UC8pGrF1iAbj7MXNSf7AlqFg"
  }
];
</script>
