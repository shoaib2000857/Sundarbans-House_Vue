<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'ManamaMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Manama Chapter',
        heroTitle: 'Manama',
        heroDesc: 'Sundarbans international meetup archive for Manama.',
        stats: { total: 1, cities: 1, members: 0 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: 'Date TBA', instaUrl: '#', title: 'International Meetup', date: 'Date TBA', location: 'Manama', duration: 'Community Meetup', special: null, about: 'International Region Meetup in Manama.', attended: 'NA', photos: 'NA', tags: ['Sundarbans House', 'Manama'] },
        ],
      },
    }
  },
}
</script>
