<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'NagpurMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Nagpur Chapter',
        heroTitle: 'Nagpur',
        heroDesc: 'Sundarbans Nagpur chapter meetup archive and activity timeline.',
        stats: { total: 2, cities: 1, members: 40 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DNmtiUnRzS2/?img_index=4&igsh=MXcya2JyOHd4c2ZyNA==', title: 'Zilpi Lake Meetup', date: 'Date TBA', location: 'Nagpur', duration: 'Community Meetup', special: 'Meetup #256', about: 'Fun bus ride to Zilpi Lake, visited Sidhivinayak Mandir, enjoyed games by the lakeside, and sang the National Anthem.', attended: '15+', photos: 'NA', tags: ['Tricolor Trails 2.0 (Sundarbans x Boundless x Nallamala)', 'Nagpur'] },
          { id: 2, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DVDqyGijMeG/?igsh=dHBqMjlzODdxOTJy', title: 'Pickleball and Turf Meetup', date: 'Date TBA', location: 'Nagpur', duration: 'Community Meetup', special: 'Meetup #516', about: 'Intense tournament play at Prism Court followed by slow moments at the cafe.', attended: '25+', photos: 'NA', tags: ['Sundarbans x sportify', 'Nagpur'] },
        ],
      },
    }
  },
}
</script>
