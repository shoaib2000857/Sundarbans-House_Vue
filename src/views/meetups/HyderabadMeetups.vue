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
        heroDesc: 'Sundarbans Hyderabad chapter meetup archive and activity timeline.',
        stats: { total: 4, cities: 1, members: 67 },
        upcoming: null,
        pastMeetups: [
          { id: 1, badge: "28 Sep'25", instaUrl: 'https://www.instagram.com/p/DPrD1XKEvJl/?img_index=4&igsh=MXdtbWt2MTlueGY1dQ==', title: 'Dandiya Meetup', date: "28 Sep'25", location: 'Hyderabad', duration: 'Community Meetup', special: 'Meetup #339', about: 'What an amazing evening full of dance, music, and laughter! Our Dandiya meetup brought everyone together to celebrate culture, friendship, and the joy of the festive spirit.', attended: 'NA', photos: 'NA', tags: ['SUNDARBANS X NALLAMALA X CORBETT X PRAVAHA X BOUNDLESS TRAVEL SOCIETY', 'Hyderabad'] },
          { id: 2, badge: "12 Oct'25", instaUrl: 'https://www.instagram.com/p/DQZ8H0ik1vf/?igsh=MWNjZDhzemNrcDdndA==', title: 'Photo Walk Meetup', date: "12 Oct'25", location: 'Hyderabad', duration: 'Community Meetup', special: 'Meetup #353', about: 'Started with lunch at Dumatara Restaurant, followed by a photo walk at the magnificent Chowmahalla Palace. Clicked, explored, and soaked in the history and grandeur of this beautiful palace.', attended: '26', photos: 'NA', tags: ['SUNDARBANS X IRIS', 'Hyderabad'] },
          { id: 3, badge: "16 Nov'25", instaUrl: 'https://www.instagram.com/p/DRq-OkHExaC/?igsh=MXc5b3dvMmEwajRqYw==', title: "Children's Day Meetup", date: "16 Nov'25", location: 'Hyderabad', duration: 'Community Meetup', special: 'Meetup #379', about: 'Celebrated Children’s Day with underprivileged children at a local labour site. Organized games, distributed prizes, and shared valuable life lessons through stories.', attended: '20', photos: 'NA', tags: ['SUNDARBANS X SAHARA X NILGIRI', 'Hyderabad'] },
          { id: 4, badge: "22 Feb'26", instaUrl: 'https://www.instagram.com...', title: 'Sports Meetup', date: "22 Feb'26", location: 'Hyderabad', duration: 'Community Meetup', special: 'Meetup #537', about: 'An action-packed day organizing a badminton tournament as part of the Rastriya Khel Mahotsav. Fast-paced rallies, competitive matches, and a friendly atmosphere.', attended: '21', photos: 'NA', tags: ['SUNDARBANS X NALLAMALA X SPORTIFY', 'Hyderabad'] },
        ],
      },
    }
  },
}
</script>
