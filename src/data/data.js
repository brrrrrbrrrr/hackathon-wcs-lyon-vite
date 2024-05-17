import chakra1 from '../assets/logoschakras/chakra1.png';
import chakra2 from '../assets/logoschakras/chakra2.png';
import chakra3 from '../assets/logoschakras/chakra3.png';
import chakra4 from '../assets/logoschakras/chakra4.png';
import chakra5 from '../assets/logoschakras/chakra5.png';
import chakra6 from '../assets/logoschakras/chakra6.png';
import chakra7 from '../assets/logoschakras/chakra7.png';

import redjasper from '../assets/stones/red-jasper.png';
import carnelian from '../assets/stones/carnelian.png';
import citrine from '../assets/stones/citrine.png';
import rosequartz from '../assets/stones/RoseQuartz.png';
import bluelaceagate from '../assets/stones/bluelaceagatestone.webp';
import amethyst from '../assets/stones/Amethyst.png';
import clearquartz from '../assets/stones/ClearQuartz.png';

import chakraracine from '../assets/silhouettes/1-racine.png';
import chakrasacre from '../assets/silhouettes/2-sacre.png';
import chakrasolaire from '../assets/silhouettes/3-solaire.png';
import chakracoeur from '../assets/silhouettes/4-coeur.png';
import chakragorge from '../assets/silhouettes/5-gorge.png';
import chakraoeil from '../assets/silhouettes/6-3eme-oeil.png';
import chakracouronne from '../assets/silhouettes/7-couronne.png';

const data = [
  {
    id: 1,
    logo: chakra1,
    nameS: 'Muladhara',
    nameEn: 'Root',
    mantras: 'I am grounded. I am strong, supported and abundant',
    schema: chakraracine,
    infos: '',
    activities: 'Yoga, hiking, gardening',
    suggestedActivities: 'Walking barefoot in nature, Grounding meditation',
    color: '#ec212750',
    position: 'left',
    stone: 'Red Jasper',
    stoneImg: redjasper,
  },
  {
    id: 2,
    logo: chakra2,
    nameS: 'Svadhishtana',
    nameEn: 'Sacral',
    mantras: 'I am creative. I am the creator of all my reality.',
    schema: chakrasacre,
    infos: '',
    activities: 'Dancing, painting, swimming',
    suggestedActivities: 'Creative writing, Sensual movement practice',
    color: '#f15b2250',
    position: 'middle',
    stone: 'Carnelian',
    stoneImg: carnelian,
  },
  {
    id: 3,
    logo: chakra3,
    nameS: 'Manipura',
    nameEn: 'Solar Plexus',
    mantras: 'I am powerful. I am worthy of pursuing my passion and purpose',
    schema: chakrasolaire,
    infos: '',
    activities: 'Martial arts, cooking, core exercises',
    suggestedActivities: 'Empowerment workshop, Setting and achieving goals',
    color: '#ffcb0650',
    position: 'right',
    stone: 'Citrine',
    stoneImg: citrine,
  },
  {
    id: 4,
    logo: chakra4,
    nameS: 'Anahata',
    nameEn: 'Heart',
    mantras: 'I am Love. I give love, I am open to love.',
    schema: chakracoeur,
    infos: '',
    activities:
      'Volunteering, spending time with loved ones, practicing gratitude',
    suggestedActivities: 'Heart-opening yoga poses, Random acts of kindness',
    color: '#19a44850',
    position: 'middle',
    stone: 'Rose Quartz',
    stoneImg: rosequartz,
  },
  {
    id: 5,
    logo: chakra5,
    nameS: 'Vishudda',
    nameEn: 'Throat',
    mantras:
      'I am expressive. I am in agreement with my truth. I speak with clarity and intention',
    schema: chakragorge,
    infos: '',
    activities: 'Singing, public speaking, journaling',
    suggestedActivities: 'Throat chakra meditation, Screaming into the void',
    color: '#2aace350',
    position: 'left',
    stone: 'Blue Lace Agate',
    stoneImg: bluelaceagate,
  },
  {
    id: 6,
    logo: chakra6,
    nameS: 'Ajna',
    nameEn: 'Third Eye',
    mantras:
      'I am intuitive. I am connected with my spirit and I trust my intuition.',
    schema: chakraoeil,
    infos: '',
    activities: 'Meditation, stargazing, dream journaling',
    suggestedActivities: 'Visualization exercises, Mindfulness practices',
    color: '#5643a350',
    position: 'middle',
    stone: 'Amethyst',
    stoneImg: amethyst,
  },
  {
    id: 7,
    logo: chakra7,
    nameS: 'Sahasrara',
    nameEn: 'Crown',
    mantras:
      'I am divine. I am one with the divine. I honor the divine in me and around me',
    schema: chakracouronne,
    infos: '',
    activities: 'Prayer, meditation, studying philosophy',
    suggestedActivities: 'Silent retreat, Connecting with spiritual community',
    color: '#98279150',
    position: 'right',
    stone: 'Clear Quartz',
    stoneImg: clearquartz,
  },
];

export default data;
