<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="About"
      title="About"
      accent-title="Sundarbans House"
      subtitle="Our story, mission, and the vibrant community that makes us unique"
    />

    <section class="section about-section rs">
      <div class="container">
        <div class="about-grid">
          <div class="about-text-col">
            <div class="section-tag">Our Story</div>
            <h2 class="section-title-xl">
              Named after the
              <span class="tg">world's largest mangrove forest</span>
            </h2>
            <p class="desc">
              Sundarbans House is one of the vibrant student houses under the
              IIT Madras BS Online Degree Programme. We are a diverse community
              of learners, innovators, and leaders spread across India and
              beyond, united by our passion for knowledge and excellence.
            </p>
            <p class="desc">
              Just as the Sundarbans ecosystem thrives through collaboration of
              diverse species, our house flourishes through the collective
              efforts of our members from all walks of life.
            </p>
            <p class="desc">
              From Foundation level students to advanced BS degree scholars — we
              grow together, learn together, and celebrate together.
            </p>
            <h3
              style="
                font-family: Cinzel, serif;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 2rem 0 1rem;
              ">
              Building More Than Just a Community
            </h3>
            <p class="desc">
              Sundarbans House is one of the most active and dynamic student
              communities within the IIT Madras BS Degree Programme. It
              represents a network of passionate individuals who come together
              to connect, collaborate, and grow beyond academics.
            </p>
            <p class="desc">
              Inspired by unity and collaboration, the house creates a platform
              where students support each other and experience a meaningful
              college life, even in an online environment.
            </p>
          </div>
          <div class="about-img-col">
            <div class="about-img-stack">
              <div class="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format&fit=crop"
                  alt="Team" />
              </div>
              <div class="about-img-secondary">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format&fit=crop"
                  alt="Study" />
              </div>
              <div class="about-img-badge">
                <div class="ib-num">Since 2021</div>
                <div class="ib-label">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="grid-2" style="gap: 3rem; align-items: center">
          <div>
            <div class="section-tag">Our Vision</div>
            <h2 class="section-title-xl">
              Discover your <span class="tg">potential</span>
            </h2>
            <p class="desc" style="font-size: 1.05rem">
              To build a strong, inclusive, and growth-driven community where
              every student can discover their potential, develop skills, and
              emerge as a future leader.
            </p>
          </div>
          <div class="card-base" style="padding: 2.5rem">
            <div class="section-tag">Our Mission</div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-size: 1.3rem;
                font-weight: 700;
                margin-bottom: 1rem;
                color: var(--text);
              ">
              Driving Excellence Together
            </h3>
            <ul
              class="mission-list"
              style="
                line-height: 1.9;
                color: var(--text2);
                padding-left: 1.2rem;
              ">
              <li>Promote collaboration and teamwork</li>
              <li>Encourage learning beyond academics</li>
              <li>Provide opportunities for leadership and innovation</li>
              <li>Build a supportive and inclusive environment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Our Values</div>
          <h2 class="section-title-xl">
            What <span class="tg">drives us</span>
          </h2>
        </div>
        <div class="grid-3">
          <div
            class="card-base rc"
            style="--card-delay: 0.1s; text-align: center"
            v-for="v in values"
            :key="v.title">
            <div style="font-size: 2.5rem; margin-bottom: 1rem">
              {{ v.icon }}
            </div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-size: 1.1rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
              ">
              {{ v.title }}
            </h3>
            <p class="desc" style="margin: 0">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">By the Numbers</div>
          <h2 class="section-title-xl">Our <span class="tg">impact</span></h2>
        </div>
        <div
          class="stats-band"
          style="
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          ">
          <div
            class="card-base"
            style="text-align: center"
            v-for="s in stats"
            :key="s.label">
            <div
              class="stat-number"
              :data-count="s.count"
              :style="`font-family:Cinzel,serif;font-size:3rem;font-weight:800;background:${s.gradient};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent`">
              0
            </div>
            <div
              style="
                color: var(--text2);
                font-size: 0.85rem;
                margin-top: 0.3rem;
              ">
              {{ s.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Our Mission</div>
          <h2 class="section-title-xl">
            Built for <span class="tg">students, by students</span>
          </h2>
        </div>
        <div class="grid-2">
          <div class="card-base rs">
            <div style="font-size: 2rem; margin-bottom: 1rem">🎓</div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 0.75rem;
              ">
              Academic Support
            </h3>
            <p class="desc" style="margin: 0">
              Providing curated study materials, doubt sessions, and peer
              tutoring to help every member excel in their academics — from
              Foundation to advanced BS levels.
            </p>
          </div>
          <div class="card-base rs">
            <div style="font-size: 2rem; margin-bottom: 1rem">🌐</div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 0.75rem;
              ">
              National Network
            </h3>
            <p class="desc" style="margin: 0">
              Connecting students across 40+ cities, organizing regional
              meetups, and building a pan-India community that supports and
              celebrates each other.
            </p>
          </div>
          <div class="card-base rs">
            <div style="font-size: 2rem; margin-bottom: 1rem">🚀</div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 0.75rem;
              ">
              Leadership Development
            </h3>
            <p class="desc" style="margin: 0">
              Offering students the opportunity to lead teams, organize events,
              and develop skills that go beyond the classroom into real-world
              leadership.
            </p>
          </div>
          <div class="card-base rs">
            <div style="font-size: 2rem; margin-bottom: 1rem">🤝</div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 0.75rem;
              ">
              Inclusive Community
            </h3>
            <p class="desc" style="margin: 0">
              Embracing diversity, welcoming students from all backgrounds, and
              creating a safe, supportive environment where everyone can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="cta-section rs"
      style="
        padding: 5rem 0;
        background: linear-gradient(
          135deg,
          rgba(212, 160, 23, 0.06),
          rgba(8, 7, 5, 0.95)
        );
      ">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Be Part of Us</div>
          <h2 class="cta-heading">
            Join <span class="cta-acc">Sundarbans</span>
          </h2>
          <p class="cta-sub">
            Become part of one of IIT Madras BS's most vibrant student
            communities. Connect, learn, and grow with thousands of motivated
            students.
          </p>
          <div class="cta-acts">
            <router-link to="/community" class="cta-btn-p"
              >Join Community →</router-link
            >
            <router-link to="/contact" class="cta-btn-o"
              >Contact Us</router-link
            >
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>

import { useScrollReveal, useCounters } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";
useScrollReveal();
useCounters();

const values = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    desc: "Committed to fostering a culture of learning, peer mentorship and high academic achievement.",
  },
  {
    icon: "🌟",
    title: "Community Spirit",
    desc: "Building lasting connections across the nation, celebrating diversity and collective growth.",
  },
  {
    icon: "🚀",
    title: "Growth Mindset",
    desc: "Empowering every student to reach their full potential through innovation and resilience.",
  },
];

const stats = [
  {
    count: 5170,
    label: "Active Members",
    gradient: "linear-gradient(135deg,#d4a017,#f0c040)",
  },
  {
    count: 500,
    label: "Events Hosted",
    gradient: "linear-gradient(135deg,#10B981,#059669)",
  },
  {
    count: 40,
    label: "Cities Connected",
    gradient: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
  {
    count: 3,
    label: "Active Communities",
    gradient: "linear-gradient(135deg,#d4a017,#8b6914)",
  },
];
</script>
