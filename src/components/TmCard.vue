<template>
  <div class="tm-card rc" :style="`--card-delay:${delay}s`">
    <div class="tm-photo-wrap">
      <img :src="photo" :alt="alt"
        @error="$event.target.style.display='none';$event.target.nextElementSibling.style.display='flex'">
      <div class="tm-no-photo" style="display:none">{{ initials }}</div>
      <div class="tm-overlay">
        <div class="tm-name">{{ name }}</div>
        <div class="tm-role">{{ role }}</div>
      </div>
    </div>
    <div class="tm-info">
      <div class="tm-level">{{ level }}</div>
      <div class="tm-socials">
        <a v-if="email" :href="`mailto:${email}`" class="tm-soc" title="Email">
          <svg width="13" height="13"><use href="#icon-email"/></svg>
        </a>
        <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener" class="tm-soc li" title="LinkedIn">
          <svg width="13" height="13"><use href="#icon-linkedin"/></svg>
        </a>
        <a v-if="instagram" :href="instagram" target="_blank" rel="noopener" class="tm-soc ig" title="Instagram">
          <svg width="13" height="13"><use href="#icon-instagram"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photo: String, alt: String, initials: String, name: String,
  role: String, level: String, email: String,
  linkedin: String, instagram: String, delay: { type: Number, default: 0.1 }
})
</script>
