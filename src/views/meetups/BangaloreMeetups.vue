<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'BangaloreMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Bangalore Chapter',
        heroTitle: 'Bangalore',
        heroDesc: 'Sundarbans Bangalore chapter meetup archive and activity timeline.',
        stats: { total: 1, cities: 1, members: 27 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DVFbTLNiVmS/?igsh=MTlicjMzZmc1dHBlYw==', title: 'Bangalore Meetup', date: 'Date TBA', location: 'Bangalore', duration: 'Community Meetup', special: 'Meetup #521', about: 'Details will be updated soon.', attended: '27', photos: 'NA', tags: ['Sundarbans X Kaziranga X Namalla X Sportify', 'Bangalore'] },
        ],
      },
    }
  },
}
</script>
