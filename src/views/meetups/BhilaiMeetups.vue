<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'BhilaiMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Bhilai Chapter',
        heroTitle: 'Bhilai',
        heroDesc: 'Sundarbans Bhilai chapter meetup archive and activity timeline.',
        stats: { total: 1, cities: 1, members: 17 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: '7th Sep 2025', instaUrl: 'https://www.instagram.com/p/DOti59bjLhs/?utm_source=ig_web_copy_link&igsh=MzRlODBi...', title: 'Bhilai Meetup', date: '7th Sep 2025', location: 'Bhilai', duration: 'Community Meetup', special: 'Meetup #276', about: 'A successful meet-up in Bhilai, Chhatisgarh. Many more to come!', attended: '17', photos: 'NA', tags: ['Kaziranga X Sundarbans X Corbett X Nallamala X Bandipur X Namdapha X Saranda X Pichavaram X Gir X Kanha', 'Bhilai'] },
        ],
      },
    }
  },
}
</script>
