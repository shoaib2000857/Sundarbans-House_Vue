<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'PatnaMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Patna Chapter',
        heroTitle: 'Patna',
        heroDesc: 'Sundarbans Patna chapter meetup archive and activity timeline.',
        stats: { total: 3, cities: 1, members: 40 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: '6th Aug 2025', instaUrl: 'https://www.instagram.com/p/DNbABh0vVhF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', title: 'Tricolor Trails 2.0', date: '6th Aug 2025', location: 'Patna', duration: 'Community Meetup', special: 'Meetup #257', about: 'Gathered at Gandhi Maidan, trekked up Dungeshwari Hills, hoisted the flag, and explored Bodh Gaya.', attended: 'NA', photos: 'NA', tags: ['Boundless X Sundarbans X Nallamalla', 'Patna'] },
          { id: 2, badge: '28th Feb 2026', instaUrl: 'https://www.instagram.com/p/DVqspMaE2Ns/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', title: 'Holi Meetup', date: '28th Feb 2026', location: 'Patna', duration: 'Community Meetup', special: 'Meetup #548', about: 'Patna Holi Meetup with endless colors, feasting on Gola Road, and putting faces to Slack profiles.', attended: '40', photos: 'NA', tags: ['Saranda X Namdapha X Wayanad X Pichavaram X Kaziranga X Kanha X Sundarbans X Nallamala', 'Patna'] },
          { id: 3, badge: 'Date TBA', instaUrl: '#', title: 'Patna Premier League Phase 2', date: 'Date TBA', location: 'Patna', duration: 'Community Meetup', special: 'Meetup #560', about: 'Cricket premier league phase 2.', attended: 'NA', photos: 'NA', tags: ['Sundarbans X Nallamalla', 'Patna'] },
        ],
      },
    }
  },
}
</script>
