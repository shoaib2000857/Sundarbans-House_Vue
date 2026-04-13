<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'
export default {
  name: 'ChandigarhMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Chandigarh Chapter',
        heroTitle: 'Chandigarh',
        heroDesc: 'India\'s most planned city hosts one of IITM BS\'s most organised student chapters. Clean, purposeful, and growing fast.',
        stats: { total: 3, cities: 1, members: 120 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: 'January 2026', instaUrl: 'https://instagram.com/p/chd1', title: 'Sector 17 Meetup', date: '18 Jan 2026', location: 'Sector 17, Chandigarh', duration: '2.5 hrs', special: null, about: 'Chandigarh\'s most central sector hosted a well-attended meetup where students discussed the programme\'s new electives and shared internship experiences.', attended: 32, photos: 38, tags: ['Sector 17', 'Chandigarh', 'Jan 2026'] },
          { id: 2, badge: 'September 2025', instaUrl: 'https://instagram.com/p/chd2', title: 'Rock Garden Meetup', date: '28 Sep 2025', location: 'Rock Garden, Chandigarh', duration: '2 hrs', special: null, about: 'Set against Nek Chand\'s famous sculpture garden, this meetup had a distinctly creative energy. Students drew inspiration from the art around them for their own projects.', attended: 24, photos: 45, tags: ['Rock Garden', 'Chandigarh', 'Sep 2025'] },
          { id: 3, badge: 'April 2025', instaUrl: 'https://instagram.com/p/chd3', title: 'Sukhna Lake Meetup', date: '13 Apr 2025', location: 'Sukhna Lake, Chandigarh', duration: '2 hrs', special: 'First Meetup', about: 'Chandigarh\'s first Sundarbans meetup by the serene Sukhna Lake. A peaceful setting for a spirited founding gathering — the beginning of a strong northern chapter.', attended: 14, photos: 18, tags: ['Sukhna Lake', 'Chandigarh', 'Apr 2025', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
