<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'PuneMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Pune Chapter',
        heroTitle: 'Pune',
        heroDesc: 'Sundarbans Pune chapter meetup archive and activity timeline.',
        stats: { total: 1, cities: 1, members: 55 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DUYd_vliX28/?img_index=4&igsh=MXBjMHh6dXRqM3pwOQ==', title: 'Pune House Connect', date: 'Date TBA', location: 'Pune', duration: 'Community Meetup', special: null, about: 'An evening full of connections where students from different houses came together to share ideas.', attended: '55+', photos: 'NA', tags: ['Bandipur x Wayanad x Kaziranga x Sundarbans x Gir Namdapha x Nilgiri x Pichavaram', 'Pune'] },
        ],
      },
    }
  },
}
</script>
