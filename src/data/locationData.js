import mapPosition from '@/assets/location/map_position.png';
import mapShip from '@/assets/location/map_ship.png';
import mapAirplane from '@/assets/location/map_airplane.png';
import position from '@/assets/location/icon_position.svg';
import ship from '@/assets/location/icon_ship.svg';
import airplane from '@/assets/location/icon_airplane.svg';

export default [
  {
    img: mapPosition,
    titleImg: position,
    title: '民宿地理位置',
    description: '飛樂米星空號位於',
    address: '澎湖縣馬公市山水里22鄰珠江182號',
    url: 'https://maps.app.goo.gl/1bEjCnPUHJeXzLQ16',
    distanceTitle: '民宿距離',
    distance: [
      {
        title: '馬公機場',
        description: '車程約',
        num: '12',
        unit: '分鐘',
      },
      {
        title: '馬公港口',
        description: '車程約',
        num: '15',
        unit: '分鐘',
      },
      {
        title: '馬公市區',
        description: '車程約',
        num: '15',
        unit: '分鐘',
      },
      {
        title: '山水沙灘',
        description: '車程約',
        num: '2',
        unit: '分鐘',
      },
    ],
  },
  {
    img: mapShip,
    titleImg: ship,
    title: '搭船',
    description: '馬公碼頭位於',
    address: '澎湖縣馬公市新營路25號',
    url: 'https://maps.goo.gl/maps/u9wGKvvZ2wYZEtV26',
    distanceTitle: '船班資訊',
    distance: [
      {
        title: '滿天星號',
        description: '航程約',
        num: '80',
        unit: '分鐘',
      },
      {
        title: '凱旋三號',
        description: '航程約',
        num: '85',
        unit: '分鐘',
      },
      {
        title: '凱旋六號',
        description: '航程約',
        num: '85',
        unit: '分鐘',
      },
      {
        title: '百麗客輪',
        description: '航程約',
        num: '60',
        unit: '分鐘',
      },
      {
        title: '台華輪(高雄)',
        description: '航程約',
        num: '270',
        unit: '分鐘',
      },
    ],
  },
  {
    img: mapAirplane,
    titleImg: airplane,
    title: '搭飛機',
    description: '澎湖機場位於',
    address: '澎湖縣湖西鄉隘門村126-5號',
    url: 'https://maps.goo.gl/maps/k1wG5P2KHNTHKFFL7',
    distanceTitle: '班機資訊',
    distance: [
      {
        type: 'short',
        title: '立榮航空',
        description: '航程約',
        num: '30~50',
        unit: '分鐘',
      },
      {
        type: 'short',
        title: '華信航空',
        description: '航程約',
        num: '30~50',
        unit: '分鐘',
      },
    ],
  },
];
