<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Community"
      title="E-Sports"
      accent-title="Community"
      subtitle="Play. Compete. Win. — where Sundarbans players grind together."
    />

    <!-- Upcoming Events -->
    <section class="section rs">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">Upcoming Events</div>
          <h2 class="section-title-xl">What's <span class="tg-esports">Coming Up</span></h2>
          <p class="desc" style="max-width: 600px">
            Tournaments and sessions dropping soon — register before slots fill.
          </p>
        </div>

        <div class="events-grid">
          <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
            <div class="event-date-badge">
              <span class="event-day">{{ event.day }}</span>
              <span class="event-month">{{ event.month }}</span>
            </div>
            <div class="event-info">
              <span class="event-type-tag">{{ event.type }}</span>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-desc">{{ event.description }}</p>
              <div class="event-meta">
                <span>🕐 {{ event.time }}</span>
                <span>📍 {{ event.venue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">Past Events</div>
          <h2 class="section-title-xl">What We've <span class="tg-esports">Done</span></h2>
          <p class="desc" style="max-width: 600px">
            Tournaments played, champions crowned, and clips worth rewatching.
          </p>
        </div>

        <div class="past-events-grid">
          <div v-for="event in pastEvents" :key="event.id" class="past-event-card">
            <div class="past-event-img-wrap">
              <img :src="event.image" :alt="event.title" class="past-event-img" />
              <div class="past-event-overlay">
                <span class="past-event-date">{{ event.date }}</span>
              </div>
            </div>
            <div class="past-event-body">
              <span class="event-type-tag">{{ event.type }}</span>
              <h3 class="past-event-title">{{ event.title }}</h3>
              <p class="past-event-desc">{{ event.description }}</p>
              <div class="past-event-stat">👥 {{ event.attendees }} attended</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Team -->
    <section class="section rs">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">The Team</div>
          <h2 class="section-title-xl">People Behind the <span class="tg-esports">Community</span></h2>
          <p class="desc" style="max-width: 600px">
            The leads and members who keep things running.
          </p>
        </div>

        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-photo-wrap">
              <img :src="member.photo" :alt="member.name" class="team-photo" />
              <div class="team-overlay">
                <h4 class="team-name">{{ member.name }}</h4>
                <span class="team-city">📍 {{ member.city }}</span>
              </div>
            </div>
            <div class="team-footer">
              <p class="team-course">{{ member.role }} · {{ member.track }}</p>
              <div class="team-socials">
                <a :href="member.email" class="social-btn" title="Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a :href="member.linkedin" class="social-btn" title="LinkedIn" target="_blank">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a :href="member.instagram" class="social-btn" title="Instagram" target="_blank">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import { useScrollReveal } from "../composables/useAnimations.js";

useScrollReveal();

const upcomingEvents = [
  {
    id: 1,
    title: "Valorant 5v5 House Tournament",
    type: "Tournament",
    description:
      "Internal Valorant tournament. 8 teams, single elimination, prizes for top 3.",
    day: "20",
    month: "APR",
    time: "4:00 PM",
    venue: "Gaming Lab, Block C",
  },
  {
    id: 2,
    title: "Chess Blitz Night",
    type: "Tournament",
    description:
      "Speed chess rounds — 3 minutes per side. Open to all skill levels.",
    day: "27",
    month: "APR",
    time: "8:00 PM",
    venue: "Common Room, Floor 2",
  },
  {
    id: 3,
    title: "BGMI Squad Scrimmage",
    type: "Scrimmage",
    description:
      "Casual squad matches to build team chemistry before the main tournament season.",
    day: "03",
    month: "MAY",
    time: "5:00 PM",
    venue: "Gaming Lab, Block C",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "BGMI Inter-House Cup",
    type: "Tournament",
    description:
      "Four houses competed across 10 matches. Intense, chaotic, and brilliant. Winner: House Falcon.",
    date: "Mar 2025",
    attendees: 48,
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "FIFA Weekend League",
    type: "Tournament",
    description:
      "32-player bracket over 2 days. Last goal was a 90th-minute screamer.",
    date: "Jan 2025",
    attendees: 32,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gaming Strategy Workshop",
    type: "Workshop",
    description:
      "A pro gamer walked the community through macro strategy, mental resilience, and team comms.",
    date: "Nov 2024",
    attendees: 55,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80&auto=format&fit=crop",
  },
];

const team = [
  {
    name: "Vivaan Singh",
    role: "Community Lead",
    track: "Valorant",
    city: "Delhi",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop&crop=face",
    email: "mailto:vivaan@sundarbans.in",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Tanya Reddy",
    role: "Tournament Director",
    track: "BGMI",
    city: "Hyderabad",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80&auto=format&fit=crop&crop=face",
    email: "mailto:tanya@sundarbans.in",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Aman Joshi",
    role: "Strategy Coach",
    track: "Chess & FPS",
    city: "Pune",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=face",
    email: "mailto:aman@sundarbans.in",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Riya Menon",
    role: "Community Manager",
    track: "Operations",
    city: "Kochi",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop&crop=face",
    email: "mailto:riya@sundarbans.in",
    linkedin: "#",
    instagram: "#",
  },
];
</script>

<style scoped>
/* Accent color: #a855f7 (purple) */

.section-header {
  margin-bottom: 2.5rem;
}

.tg-esports {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Tags */
.esports-tag {
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  border-color: rgba(168, 85, 247, 0.3);
}

.event-type-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
  background: rgba(168, 85, 247, 0.12);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

/* Upcoming Events */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.event-card {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--rad2, 12px);
  padding: 1.4rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
}

.event-date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  border-radius: 10px;
  padding: 0.5rem 0.6rem;
  background: #a855f7;
  color: #fff;
  line-height: 1;
  flex-shrink: 0;
}

.event-day {
  font-size: 1.5rem;
  font-weight: 800;
}

.event-month {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}

.event-info { flex: 1; }

.event-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  color: #fff;
}

.event-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 0.6rem;
  line-height: 1.55;
}

.event-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
  flex-wrap: wrap;
}

/* Past Events */
.past-events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.past-event-card {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--rad2, 12px);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.past-event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
}

.past-event-img-wrap {
  position: relative;
  height: 180px;
}

.past-event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.past-event-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0.8rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.past-event-date {
  font-size: 0.78rem;
  color: #fff;
  font-weight: 600;
}

.past-event-body { padding: 1.1rem; }

.past-event-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.4rem 0 0.4rem;
  color: #fff;
}

.past-event-desc {
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.55;
  margin: 0 0 0.6rem;
}

.past-event-stat {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Team — photo card style */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(168, 85, 247, 0.2);
}

.team-photo-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.4s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.04);
}

.team-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 1rem 0.9rem;
  background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.team-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}

.team-city {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: #a855f7;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  width: fit-content;
}

.team-footer {
  padding: 0.75rem 1rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: #111;
}

.team-course {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.team-socials {
  display: flex;
  gap: 0.35rem;
  flex-shrink: 0;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.social-btn:hover {
  background: #a855f7;
  color: #fff;
  border-color: #a855f7;
}
</style>
