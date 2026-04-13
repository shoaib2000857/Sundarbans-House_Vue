<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'
export default {
  name: 'HyderabadMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Hyderabad Chapter',
        heroTitle: 'Hyderabad',
        heroDesc: 'Cyberabad to Charminar — Hyderabad\'s chapter bridges tradition and technology. A chapter that moves as fast as the city itself.',
        stats: { total: 5, cities: 2, members: 210 },
        upcoming: null, // No upcoming meetup — will show the empty state
        pastMeetups: [
          { id: 1, badge: 'November 2025', instaUrl: 'https://instagram.com/p/hyd1', title: 'HITEC City Meetup', date: '15 Nov 2025', location: 'HITEC City, Hyderabad', duration: '3 hrs', special: null, about: 'India\'s most concentrated tech corridor hosted our biggest Hyderabad meetup. Software engineers, data analysts, and students came together for a career-focused evening.', attended: 49, photos: 57, tags: ['HITEC City', 'Hyderabad', 'Nov 2025'] },
          { id: 2, badge: 'July 2025', instaUrl: 'https://instagram.com/p/hyd2', title: 'Banjara Hills Meetup', date: '06 Jul 2025', location: 'Banjara Hills, Hyderabad', duration: '2.5 hrs', special: null, about: 'A vibrant meetup in Banjara Hills where mentoring flowed as freely as the biryani. Seniors walked juniors through the toughest parts of the programme.', attended: 36, photos: 44, tags: ['Banjara Hills', 'Hyderabad', 'Jul 2025'] },
          { id: 3, badge: 'March 2025', instaUrl: 'https://instagram.com/p/hyd3', title: 'Charminar Meetup', date: '23 Mar 2025', location: 'Charminar, Hyderabad', duration: '2 hrs', special: null, about: 'The historic Charminar as our backdrop — this meetup had a distinct energy. Old city, new learning community. Powerful contrast and even more powerful conversations.', attended: 28, photos: 61, tags: ['Charminar', 'Hyderabad', 'Mar 2025'] },
          { id: 4, badge: 'October 2024', instaUrl: 'https://instagram.com/p/hyd4', title: 'Jubilee Hills Meetup', date: '20 Oct 2024', location: 'Jubilee Hills, Hyderabad', duration: '2 hrs', special: 'First Meetup', about: 'Hyderabad\'s founding meetup at Jubilee Hills. A small crew of determined students who knew they were starting something big. They were right.', attended: 15, photos: 19, tags: ['Jubilee Hills', 'Hyderabad', 'Oct 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
