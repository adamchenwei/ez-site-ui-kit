import { getRandomId } from 'ez-site-content-store';

export default () => {
  const id = getRandomId();
  return {
    id,
    name: 'Al-Masjid Al-Awwal',
    route: 'Al-Masjid-Al-Awwal-1518933867988',
    website: 'https://www.spreaker.com/user/radio1mm',
    phones: [
      '+1 412-434-7979',
    ],
    locations: [
      {
        id: 473739571,
        longitude: 0,
        latitude: 0,
        address: '1911 Wylie Ave',
        city: 'Pittsburgh',
        state: 'PA',
        zip: '15219',
        country: 'USA',
        tags: [],
      },
    ],
    imams: [],
    socialAccounts: [
      {
        name: 'spreaker',
        url: 'https://www.spreaker.com/user/radio1mm',
      },
    ],
    snapshots: [
      {
        id: 776395164,
        name: 'front',
        url: '/placeholder/masjid.jpg',
      },
    ],
  };
};
