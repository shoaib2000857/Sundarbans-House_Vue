<template>
  <div class="meetups-page">
    <div class="noise"></div>
    <div class="ambient"></div>
    <canvas ref="particlesCanvas"></canvas>
    <div ref="cur" class="cur"></div>
    <div ref="curRing" class="cur-ring"></div>

    <!-- PRELOADER -->
    <transition name="fade">
      <div v-if="showPreloader" class="preloader">
        <div class="preloader-orbit-wrap">
          <div class="preloader-orbit-ring">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs><path id="op2" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"/></defs>
              <text><textPath href="#op2" startOffset="0%">✦ SUNDARBANS HOUSE · IIT MADRAS BS · EXCELLENCE · </textPath></text>
            </svg>
          </div>
          <div class="preloader-logo-center">
            <img :src="logoSrc" alt="S" class="preloader-logo-img" @error="logoError=true" v-if="!logoError">
            <span class="preloader-logo-letter" v-else>S</span>
          </div>
        </div>
        <div class="preloader-bar"><div class="preloader-fill" :style="{ width: fillPct + '%' }"></div></div>
        <div class="preloader-text">Loading Sundarbans...</div>
      </div>
    </transition>

    <!-- NAVBAR -->
    <nav :class="{ scrolled: navScrolled }">
      <router-link to="/" class="nav-brand">
        <div class="nav-logo-wrap">
          <img :src="logoSrc" alt="S" @error="(e) => e.target.style.display='none'">
        </div>
        <div>
          <div class="nav-brand-name">SUNDARBANS</div>
          <div class="nav-brand-sub">IIT Madras BS</div>
        </div>
      </router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/study">Study Corner</router-link>
        <router-link to="/events">Events</router-link>
        <router-link to="/meetups" class="active">Meetups</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/teams">Teams</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="nav-actions">
        <router-link to="/sundarbans/login" class="nav-cta">Lounge →</router-link>
        <router-link to="/course" class="nav-cta nav-cta-outline">Course →</router-link>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-pill">
          <span class="hero-pill-dot"></span>
          IIT Madras BS · Student Chapters Across India
        </div>
        <h1 class="hero-title">Our <span class="accent">Chapters</span></h1>
        <p class="hero-desc">
          Active student communities in 9 cities. Find your nearest chapter, connect with peers, and attend local meetups — all driven by students, for students.
        </p>
        <div class="hero-stats">
          <div class="hstat">
            <span class="hstat-num">{{ animStats.cities }}</span>
            <span class="hstat-lbl">Cities</span>
          </div>
          <div class="hstat-div"></div>
          <div class="hstat">
            <span class="hstat-num">{{ animStats.members }}<span class="hstat-plus">+</span></span>
            <span class="hstat-lbl">Members</span>
          </div>
          <div class="hstat-div"></div>
          <div class="hstat">
            <span class="hstat-num">{{ animStats.meetups }}<span class="hstat-plus">+</span></span>
            <span class="hstat-lbl">Meetups Held</span>
          </div>
        </div>
      </div>
    </section>

    <!-- REGIONS GRID -->
    <section class="section" ref="gridSection">
      <div class="container">
        <span class="sec-eyebrow reveal">Select Your Region</span>
        <h2 class="sec-title reveal rd1">All Chapters</h2>
        <div class="sec-rule reveal rd2"></div>

        <div class="regions-grid">
          <div
            v-for="region in regions"
            :key="region.slug"
            class="region-card reveal"
            :class="{ featured: region.featured }"
            @mouseenter="hoveredRegion = region.slug"
            @mouseleave="hoveredRegion = null"
            @click="goToRegion(region.slug)"
          >
            <!-- BG IMAGE -->
            <img
              :src="region.image"
              :alt="region.name"
              class="region-bg"
              loading="lazy"
            />
            <div class="region-overlay"></div>
            <div class="region-gold-tint" v-if="hoveredRegion === region.slug"></div>

            <!-- CONTENT -->
            <div class="region-content">
              <div class="region-top">
                <span class="region-badge" v-if="region.badge">{{ region.badge }}</span>
              </div>
              <div class="region-bottom">
                <h3 class="region-name">{{ region.name }}</h3>
                <p class="region-members">{{ region.members }} members</p>
                <transition name="slide-up">
                  <router-link
                    v-if="hoveredRegion === region.slug"
                    :to="'/meetups/' + region.slug"
                    class="region-view-btn"
                    @click.stop
                  >
                    View →
                  </router-link>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-brand">
        <div class="footer-logo">
          <img :src="logoSrc" alt="S" @error="(e) => e.target.style.display='none'">
        </div>
        <span class="footer-name">Sundarbans House</span>
      </div>
      <span class="footer-right">IIT Madras BS · Est. 2024</span>
    </footer>
  </div>
</template>

<script>
import logoSrc from '@/assets/LOGO.JPEG'

// Region images — place these in src/assets/regions/
import imgDelhi      from '@/assets/regions/delhi.jpg'
import imgMumbai     from '@/assets/regions/mumbai.jpg'
import imgBangalore  from '@/assets/regions/bangalore.jpg'
import imgChennai    from '@/assets/regions/chennai.jpg'
import imgKolkata    from '@/assets/regions/kolkata.jpg'
import imgHyderabad  from '@/assets/regions/hyderabad.jpg'
import imgPatna      from '@/assets/regions/patna.jpg'
import imgChandigarh from '@/assets/regions/chandigarh.jpg'
import imgPune       from '@/assets/regions/pune.jpg'

export default {
  name: 'Meetups',
  data() {
    return {
      logoSrc,
      logoError: false,
      showPreloader: true,
      fillPct: 0,
      navScrolled: false,
      hoveredRegion: null,
      statsAnimated: false,
      animStats: { cities: 0, members: 0, meetups: 0 },
      regions: [
        { slug: 'mumbai',     name: 'Mumbai',     members: '450+', image: imgMumbai,     badge: 'Largest Chapter' },
        { slug: 'patna',      name: 'Patna',      members: '180+', image: imgPatna,      badge: null },
        { slug: 'delhi',      name: 'Delhi',      members: '320+', image: imgDelhi,      badge: 'Most Active', featured: true },
        { slug: 'kolkata',    name: 'Kolkata',    members: '280+', image: imgKolkata,    badge: null },
        { slug: 'hyderabad',  name: 'Hyderabad',  members: '210+', image: imgHyderabad,  badge: null },
        { slug: 'bangalore',  name: 'Bangalore',  members: '390+', image: imgBangalore,  badge: null },
        { slug: 'chennai',    name: 'Chennai',    members: '260+', image: imgChennai,    badge: null },
        { slug: 'chandigarh', name: 'Chandigarh', members: '120+', image: imgChandigarh, badge: null },
        { slug: 'pune',       name: 'Pune',       members: '150+', image: imgPune,       badge: null },
      ],
    }
  },

  mounted() {
    this.initPreloader()
    this.initCursor()
    this.initParticles()
    window.addEventListener('scroll', this.onScroll)
    this.$nextTick(() => {
      this.initReveal()
      this.initStatsObserver()
    })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('mousemove', this.onMouseMove)
    if (this._rafCursor) cancelAnimationFrame(this._rafCursor)
    if (this._rafParticles) cancelAnimationFrame(this._rafParticles)
  },

  methods: {
    goToRegion(slug) {
      this.$router.push('/meetups/' + slug)
    },

    initPreloader() {
      setTimeout(() => { this.fillPct = 100 }, 50)
      setTimeout(() => {
        const el = this.$el.querySelector('.preloader')
        if (el) el.style.opacity = '0'
        setTimeout(() => { this.showPreloader = false }, 800)
      }, 1400)
    },

    initCursor() {
      let mx = 0, my = 0, rx = 0, ry = 0
      this.onMouseMove = (e) => {
        mx = e.clientX; my = e.clientY
        if (this.$refs.cur) { this.$refs.cur.style.left = mx + 'px'; this.$refs.cur.style.top = my + 'px' }
      }
      document.addEventListener('mousemove', this.onMouseMove)
      const raf = () => {
        rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11
        if (this.$refs.curRing) { this.$refs.curRing.style.left = rx + 'px'; this.$refs.curRing.style.top = ry + 'px' }
        this._rafCursor = requestAnimationFrame(raf)
      }
      raf()
    },

    initParticles() {
      this.$nextTick(() => {
        const cvs = this.$refs.particlesCanvas
        if (!cvs) return
        const ctx = cvs.getContext('2d')
        let W, H
        const pts = Array.from({ length: 55 }, () => ({
          x: Math.random() * innerWidth, y: Math.random() * innerHeight,
          r: Math.random() * 0.8 + 0.15,
          vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12,
          o: Math.random() * 0.15 + 0.03,
        }))
        const rsz = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight }
        rsz(); window.addEventListener('resize', rsz)
        const draw = () => {
          ctx.clearRect(0, 0, W, H)
          for (const p of pts) {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(212,160,23,${p.o})`; ctx.fill()
            p.x += p.vx; p.y += p.vy
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
          }
          this._rafParticles = requestAnimationFrame(draw)
        }
        draw()
      })
    },

    onScroll() { this.navScrolled = window.scrollY > 30 },

    initReveal() {
      const obs = new IntersectionObserver(
        (es) => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      )
      this.$el.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    },

    initStatsObserver() {
      const hero = this.$el.querySelector('.hero-stats')
      if (!hero) return
      const obs = new IntersectionObserver((es) => {
        es.forEach(e => {
          if (e.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true
            this.countUp('cities', 9)
            this.countUp('members', 2410)
            this.countUp('meetups', 48)
            obs.disconnect()
          }
        })
      }, { threshold: 0.4 })
      obs.observe(hero)
    },

    countUp(key, target, dur = 1200) {
      let start = 0
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        this.animStats[key] = Math.floor((1 - Math.pow(1 - p, 3)) * target)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    },
  },
}
</script>

<style scoped>
.meetups-page {
  --bg:          #080705;
  --surface:     #110f0a;
  --surface2:    #18150e;
  --border:      rgba(212,160,23,0.13);
  --border2:     rgba(212,160,23,0.22);
  --gold:        #D4A017;
  --gold-l:      #F0C040;
  --gold-d:      #8B6914;
  --gold-dim:    rgba(212,160,23,0.12);
  --white:       #F5EDD0;
  --white-dim:   rgba(245,237,208,0.55);
  --white-faint: rgba(245,237,208,0.08);

  font-family: 'Outfit', sans-serif;
  background: var(--bg);
  color: var(--white);
  overflow-x: hidden;
  cursor: none;
  min-height: 100vh;
}

/* CURSOR */
.cur { position:fixed;top:0;left:0;width:8px;height:8px;background:var(--gold-l);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .15s,height .15s; }
.cur-ring { position:fixed;top:0;left:0;width:32px;height:32px;border:1.5px solid rgba(212,160,23,.45);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%); }

/* NOISE + AMBIENT */
.noise { position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px; }
.ambient { position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 70% 50% at -5% 0%,rgba(212,160,23,.05) 0%,transparent 55%),radial-gradient(ellipse 50% 40% at 105% 100%,rgba(139,105,20,.05) 0%,transparent 55%); }
canvas { position:fixed;inset:0;pointer-events:none;z-index:0; }

/* PRELOADER */
.preloader { position:fixed;inset:0;z-index:99999;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;transition:opacity .8s ease; }
.preloader-orbit-wrap { position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center; }
.preloader-orbit-ring { position:absolute;inset:0;animation:orbit-spin 8s linear infinite; }
.preloader-orbit-ring svg { width:100%;height:100%; }
.preloader-orbit-ring textPath { fill:var(--gold);font-family:'Cinzel',serif;font-size:11px;letter-spacing:3px; }
.preloader-logo-center { position:absolute;width:80px;height:80px;display:flex;align-items:center;justify-content:center; }
.preloader-logo-img { width:80px;height:80px;object-fit:contain;border-radius:50%;animation:pulse-logo 2s ease-in-out infinite;filter:drop-shadow(0 0 16px rgba(212,160,23,.7)); }
.preloader-logo-letter { font-family:'Cinzel',serif;font-size:3rem;font-weight:900;background:linear-gradient(135deg,var(--gold-l),var(--gold),var(--gold-d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.preloader-bar { width:140px;height:2px;background:rgba(212,160,23,.1);border-radius:99px;margin:1.25rem auto .65rem;overflow:hidden; }
.preloader-fill { height:100%;background:linear-gradient(90deg,var(--gold-d),var(--gold-l),var(--gold-d));border-radius:99px;transition:width 1.2s cubic-bezier(.4,0,.2,1); }
.preloader-text { color:var(--white-dim);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase; }

/* NAVBAR */
nav { position:fixed;top:0;left:0;right:0;z-index:200;padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between;transition:background .4s,border-color .4s;border-bottom:1px solid transparent; }
nav.scrolled { background:rgba(8,7,5,.92);backdrop-filter:blur(20px);border-color:var(--border); }
.nav-brand { display:flex;align-items:center;gap:10px;text-decoration:none; }
.nav-logo-wrap { width:38px;height:38px;border-radius:50%;overflow:hidden;border:1.5px solid var(--border);background:var(--surface);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:17px;font-weight:700;color:var(--gold);flex-shrink:0; }
.nav-logo-wrap img { width:100%;height:100%;object-fit:cover; }
.nav-brand-name { font-family:'Cinzel',serif;font-size:14px;font-weight:700;color:var(--white);letter-spacing:.1em; }
.nav-brand-sub { font-size:9px;font-weight:400;color:var(--white-dim);letter-spacing:.12em;text-transform:uppercase; }
.nav-links { display:flex;align-items:center;gap:24px; }
.nav-links a { font-size:13px;font-weight:400;color:var(--white-dim);text-decoration:none;transition:color .25s; }
.nav-links a:hover,.nav-links a.active { color:var(--gold-l); }
.nav-links a.router-link-active { color:var(--gold); }
.nav-actions { display:flex;align-items:center;gap:10px; }
.nav-cta { background:var(--gold);color:#000;font-size:13px;font-weight:700;padding:9px 20px;border-radius:8px;text-decoration:none;transition:background .25s,transform .2s;box-shadow:0 4px 20px rgba(212,160,23,.3);letter-spacing:.04em; }
.nav-cta:hover { background:var(--gold-l);transform:translateY(-1px); }
.nav-cta-outline { background:transparent;color:var(--gold);border:1.5px solid var(--gold);box-shadow:none; }
.nav-cta-outline:hover { background:var(--gold-dim);transform:translateY(-1px); }

/* HERO */
.hero { min-height: 75vh; display:flex;flex-direction:column;justify-content:center;padding:130px 48px 60px;position:relative;z-index:2; }
.container { max-width:1160px;margin:0 auto; }
.hero-pill { display:inline-flex;align-items:center;gap:8px;background:rgba(212,160,23,.1);border:1px solid rgba(212,160,23,.3);padding:7px 16px;border-radius:100px;width:fit-content;font-size:12px;font-weight:500;color:var(--gold-l);margin-bottom:28px;opacity:0;animation:fadeUp .7s ease .2s forwards; }
.hero-pill-dot { width:6px;height:6px;border-radius:50%;background:var(--gold);animation:pulse-dot 1.8s ease-in-out infinite; }
.hero-title { font-family:'Cinzel',serif;font-size:clamp(48px,8vw,108px);font-weight:900;line-height:.95;color:var(--white);opacity:0;animation:fadeUp .9s ease .4s forwards; }
.hero-title .accent { background:linear-gradient(135deg,var(--gold-l),var(--gold),var(--gold-d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.hero-desc { margin-top:24px;max-width:560px;font-size:16px;font-weight:300;line-height:1.75;color:var(--white-dim);opacity:0;animation:fadeUp .7s ease .6s forwards; }
.hero-stats { margin-top:48px;display:flex;align-items:center;gap:32px;opacity:0;animation:fadeUp .7s ease .8s forwards; }
.hstat { display:flex;flex-direction:column;gap:4px; }
.hstat-num { font-family:'Cinzel',serif;font-size:36px;font-weight:700;color:var(--gold-l);line-height:1;letter-spacing:-.02em; }
.hstat-plus { font-size:.6em; }
.hstat-lbl { font-size:11px;font-weight:400;color:var(--white-dim);letter-spacing:.08em;text-transform:uppercase; }
.hstat-div { width:1px;height:40px;background:var(--border2); }

/* SECTION */
.section { padding:60px 48px 100px;position:relative;z-index:2; }
.sec-eyebrow { font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:12px; }
.sec-title { font-family:'Cinzel',serif;font-size:clamp(28px,4vw,48px);font-weight:700;line-height:1.1; }
.sec-rule { width:40px;height:2px;background:var(--gold);border-radius:2px;margin:20px 0 48px; }

/* REGIONS GRID */
.regions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.region-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  border: 1px solid var(--border);
  transition: border-color .3s, transform .35s, box-shadow .35s;
}
.region-card:hover {
  border-color: rgba(212,160,23,.4);
  transform: translateY(-4px);
  box-shadow: 0 24px 64px rgba(0,0,0,.7);
}
.region-card.featured {
  border-color: rgba(212,160,23,.3);
}

.region-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease, filter .4s;
  filter: saturate(.8) brightness(.75);
}
.region-card:hover .region-bg {
  transform: scale(1.06);
  filter: saturate(1) brightness(.85);
}

.region-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8,7,5,.88) 0%, rgba(8,7,5,.3) 50%, transparent 80%);
  transition: opacity .35s;
}
.region-card:hover .region-overlay {
  background: linear-gradient(to top, rgba(8,7,5,.92) 0%, rgba(8,7,5,.4) 55%, rgba(212,160,23,.04) 100%);
}

.region-gold-tint {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,160,23,.12) 0%, transparent 70%);
  pointer-events: none;
}

.region-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.region-top { display:flex;justify-content:flex-end; }
.region-badge {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gold-l);
  background: rgba(212,160,23,.15);
  border: 1px solid rgba(212,160,23,.35);
  padding: 4px 10px;
  border-radius: 100px;
}

.region-bottom { display:flex;flex-direction:column;gap:4px; }
.region-name {
  font-family: 'Cinzel', serif;
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 700;
  letter-spacing: .01em;
  color: var(--white);
  line-height: 1.1;
}
.region-members {
  font-size: 13px;
  font-weight: 300;
  color: var(--white-dim);
  letter-spacing: .03em;
}

.region-view-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gold);
  color: #000;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  width: fit-content;
  margin-top: 12px;
  letter-spacing: .04em;
  transition: background .2s, transform .2s;
  position: relative;
  overflow: hidden;
}
.region-view-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg,transparent 30%,rgba(255,255,255,.2) 50%,transparent 70%);
  transform: translateX(-100%);
  transition: transform .45s;
}
.region-view-btn:hover { background: var(--gold-l); }
.region-view-btn:hover::after { transform: translateX(100%); }

/* SLIDE UP TRANSITION */
.slide-up-enter-active { transition: opacity .25s ease, transform .25s ease; }
.slide-up-enter-from { opacity: 0; transform: translateY(12px); }
.slide-up-leave-active { transition: opacity .2s ease; }
.slide-up-leave-to { opacity: 0; }

/* FADE TRANSITION (preloader) */
.fade-leave-active { transition: opacity .8s ease; }
.fade-leave-to { opacity: 0; }

/* FOOTER */
footer { border-top:1px solid var(--border);padding:40px 48px;display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2; }
.footer-brand { display:flex;align-items:center;gap:10px; }
.footer-logo { width:32px;height:32px;border-radius:50%;background:var(--gold-dim);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:14px;font-weight:700;color:var(--gold);overflow:hidden; }
.footer-logo img { width:100%;height:100%;object-fit:cover; }
.footer-name { font-family:'Cinzel',serif;font-size:14px;font-weight:700;letter-spacing:.08em; }
.footer-right { font-size:12px;color:rgba(245,237,208,.2);letter-spacing:.05em; }

/* REVEAL */
.reveal { opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease; }
.reveal.visible { opacity:1;transform:translateY(0); }
.rd1 { transition-delay:.1s; }
.rd2 { transition-delay:.2s; }

/* KEYFRAMES */
@keyframes fadeUp { to { opacity:1;transform:translateY(0); } }
@keyframes orbit-spin { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
@keyframes pulse-logo { 0%,100%{transform:scale(1);}50%{transform:scale(1.08);} }
@keyframes pulse-dot { 0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.5);opacity:.6;} }

/* RESPONSIVE */
@media (max-width: 1100px) { .regions-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 800px)  {
  .regions-grid { grid-template-columns: repeat(2, 1fr); }
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .hero { padding: 110px 24px 50px; }
  .section { padding: 50px 24px 80px; }
}
@media (max-width: 480px)  { .regions-grid { grid-template-columns: 1fr; } }
</style>
