<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Community"
      title="Tech"
      accent-title="Community"
      subtitle="Build. Code. Innovate. — where engineers and thinkers come together."
    />

    <!-- Upcoming Events -->
    <section class="section rs">
      <div class="container">
        <div class="section-header">
          <div class="section-tag tech-tag">Upcoming Events</div>
          <h2 class="section-title-xl">What's <span class="tg">Coming Up</span></h2>
          <p class="desc" style="max-width: 600px">
            Events planned ahead — mark your calendar and show up.
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
          <div class="section-tag tech-tag">Past Events</div>
          <h2 class="section-title-xl">What We've <span class="tg">Done</span></h2>
          <p class="desc" style="max-width: 600px">
            A record of everything we've built, shipped, and learned from.
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
          <div class="section-tag tech-tag">The Team</div>
          <h2 class="section-title-xl">People Behind the <span class="tg">Community</span></h2>
          <p class="desc" style="max-width: 600px">
            The leads and members who keep things running.
          </p>
        </div>

        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-avatar-wrap">
              <img :src="member.avatar" :alt="member.name" class="team-avatar" />
              <div class="team-role-badge">{{ member.role }}</div>
            </div>
            <h4 class="team-name">{{ member.name }}</h4>
            <p class="team-bio">{{ member.bio }}</p>
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
    title: "Hackathon: Build in 24hrs",
    type: "Hackathon",
    description:
      "A 24-hour build sprint where teams solve real-world problems using any stack they choose.",
    day: "22",
    month: "APR",
    time: "9:00 AM",
    venue: "Main Hall, Block A",
  },
  {
    id: 2,
    title: "AI/ML Paper Reading Club",
    type: "Workshop",
    description:
      "We break down a recent ML research paper together — no PhD required.",
    day: "28",
    month: "APR",
    time: "6:00 PM",
    venue: "Room 204, Tech Block",
  },
  {
    id: 3,
    title: "Open Source Contribution Drive",
    type: "Sprint",
    description:
      "Pick an issue, raise a PR, ship it. Mentors available for first-timers.",
    day: "05",
    month: "MAY",
    time: "3:00 PM",
    venue: "Computer Lab 3, Block B",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Web Dev Bootcamp",
    type: "Workshop",
    description:
      "Three days of intensive frontend and backend development. 40 participants shipped live projects.",
    date: "March 2025",
    attendees: 40,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Open Source Sprint",
    type: "Sprint",
    description:
      "Members contributed to public repos and built their first open source PRs.",
    date: "Jan 2025",
    attendees: 25,
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "System Design Showdown",
    type: "Competition",
    description:
      "Teams designed scalable systems under time pressure. Top 3 presented to seniors.",
    date: "Nov 2024",
    attendees: 32,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Community Lead",
    bio: "Final year CS. Obsessed with distributed systems and bad coffee.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Sharma",
    role: "AI/ML Head",
    bio: "Building neural nets and mentoring anyone willing to learn PyTorch.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rohit Das",
    role: "Events Coordinator",
    bio: "If there's a hackathon happening, Rohit planned it.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Sneha Kapoor",
    role: "Dev Track Lead",
    bio: "Full-stack developer. React by day, Rust by night.",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];
</script>

<style scoped>
/* Accent color: #4f8ef7 (blue) */

.section-header {
  margin-bottom: 2.5rem;
}

/* Tags */
.tech-tag {
  background: rgba(79, 142, 247, 0.1);
  color: #4f8ef7;
  border-color: rgba(79, 142, 247, 0.3);
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
  background: rgba(79, 142, 247, 0.12);
  color: #4f8ef7;
  border: 1px solid rgba(79, 142, 247, 0.3);
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
  background: var(--bg2, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  padding: 1.4rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(79, 142, 247, 0.12);
}

.event-date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  border-radius: 10px;
  padding: 0.5rem 0.6rem;
  background: #4f8ef7;
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
  color: var(--text1, #0f172a);
}

.event-desc {
  font-size: 0.88rem;
  color: var(--text2, #64748b);
  margin: 0 0 0.6rem;
  line-height: 1.55;
}

.event-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  color: var(--text2, #64748b);
  flex-wrap: wrap;
}

/* Past Events */
.past-events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.past-event-card {
  background: var(--bg1, #fff);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.past-event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(79, 142, 247, 0.12);
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
  color: var(--text1, #0f172a);
}

.past-event-desc {
  font-size: 0.86rem;
  color: var(--text2, #64748b);
  line-height: 1.55;
  margin: 0 0 0.6rem;
}

.past-event-stat {
  font-size: 0.82rem;
  color: var(--text2, #64748b);
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: var(--bg2, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(79, 142, 247, 0.12);
}

.team-avatar-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg1, #fff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.team-role-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.62rem;
  font-weight: 700;
  color: #fff;
  background: #4f8ef7;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.team-name {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 0.3rem;
  color: var(--text1, #0f172a);
}

.team-bio {
  font-size: 0.84rem;
  color: var(--text2, #64748b);
  line-height: 1.5;
  margin: 0;
}
</style>
