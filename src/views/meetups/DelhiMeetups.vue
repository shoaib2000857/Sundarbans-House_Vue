<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'DelhiMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Delhi NCR Chapter',
        heroTitle: 'Delhi NCR',
        heroDesc: 'Sundarbans meetups across Delhi NCR with regular student-led gatherings.',
        stats: { total: 8, cities: 1, members: 236 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: "10th Aug. 2025", instaUrl: 'https://www.instagram.com/p/DNu-F89YqVj/', title: 'Tricolor Trials 2.0', date: "10th Aug. 2025", location: 'Delhi NCR', duration: 'Community Meetup', special: 'Meetup #258', about: 'Introductions at Central Park, Connaught Place, followed by the National Anthem. Ended with snacks and conversations at Haldiram’s.', attended: '46', photos: 'NA', tags: ['Boundless X Sundarbans X Nallamala', 'Delhi NCR'] },
          { id: 2, badge: "13th Sept. 2025", instaUrl: 'https://www.instagram.com/p/DOv20AGE-k5/', title: 'PickleBall', date: "13th Sept. 2025", location: 'Delhi NCR', duration: 'Community Meetup', special: 'Meetup #325', about: 'A proper team game having multiple teams with some audience.', attended: '20', photos: 'NA', tags: ['Sundarbans', 'Delhi NCR'] },
          { id: 3, badge: "21st Sept. 2025", instaUrl: 'https://www.instagram.com/p/DPWlXmvDxtl/', title: 'Dandiya Night', date: "21st Sept. 2025", location: 'Delhi NCR', duration: 'Community Meetup', special: null, about: 'A fantastic Dandiya night meetup for BS students in Delhi, and it was a blast!', attended: '70+', photos: 'NA', tags: ['Pravaha X Sundarbans X Pichavaram X Kanha', 'Delhi NCR'] },
          { id: 4, badge: "28th Sept. 2025", instaUrl: 'https://www.instagram.com/...', title: 'Navrang 2.0', date: "28th Sept. 2025", location: 'Delhi NCR', duration: 'Community Meetup', special: 'Meetup #340', about: 'Garba night at Pacific Mall, Tagore Garden. Music, dance, and energy created the perfect vibe.', attended: '45', photos: 'NA', tags: ['Sundarbans X Boundless X Corbett', 'Delhi NCR'] },
          { id: 5, badge: "14th Jan. 2026", instaUrl: 'https://www.instagram.com/p/DT7X2cfjxAY/', title: 'BoneFire Bash', date: "14th Jan. 2026", location: 'Delhi NCR', duration: 'Community Meetup', special: null, about: 'Bonfire Bash was pure warmth. Live Dhol, DJ, cozy Bonfire Zone, and unlimited buffet.', attended: 'NA', photos: 'NA', tags: ['Boundless X Kanha X Pichavaram X Sundarbans', 'Delhi NCR'] },
          { id: 6, badge: '24 Jan. 2026', instaUrl: 'https://www.instagram.com/p/DT8AmnbE9WK/', title: 'GREATER NOIDA MEET-UP', date: '24 Jan. 2026', location: 'Delhi NCR', duration: 'Community Meetup', special: null, about: 'Bringing the IIT Madras BS Degree Programme community together-no agenda, just students connecting and sharing stories.', attended: '12', photos: 'NA', tags: ['Sundarbans', 'Delhi NCR'] },
          { id: 7, badge: "7th Feb. 2026", instaUrl: 'https://www.instagram.com/p/DUlRj1jk928/', title: 'AksharDham MeetUp', date: "7th Feb. 2026", location: 'Delhi NCR', duration: 'Community Meetup', special: 'Meetup #504', about: 'Good times, familiar faces, and an electric energy that makes campus life unforgettable.', attended: '28', photos: 'NA', tags: ['Sundarbans', 'Delhi NCR'] },
          { id: 8, badge: "7th Feb. 2026", instaUrl: '#', title: 'Unapologetically Her', date: "7th Feb. 2026", location: 'Delhi NCR', duration: 'Community Meetup', special: null, about: 'First-ever girls-only meetup. Beautifully dressed girls turning from strangers to friends.', attended: '15 approx.', photos: 'NA', tags: ['Sundarbans', 'Delhi NCR'] },
        ],
      },
    }
  },
}
</script>
