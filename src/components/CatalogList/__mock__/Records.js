import {Records} from 'ez-site-content-store';
const data = [
  {
    id: 1,
    title: 'Masjid Rahmah',
    route: {
      webRoute: 'www.masjidrahmah.com',
    },
    tags:[],
    references:[],
    collectionInfo:[],
  },
  {
    id: 2,
    title: 'Masjid Uthaymeen',
    route: {
      webRoute: 'www.masjiduthaymeen.com',
    },
    tags:[],
    references:[],
    collectionInfo:[],
  },
];

console.log(Records);
const result = new Records(data);
export default result;