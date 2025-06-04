export const maps = [
  {
    id: 'dust2',
    name: 'Dust 2',
    image: '/maps/dust2.webp',
    backgroundImage: '/MapsIcon/Dust.jpg',
    icon: '/MapsIcon/DustIcon.webp',
    spots: [
      {
        id: 'd2-a-site',
        name: 'A Site',
        position: { x:68, y: 16 },
        nades: [
          {
            id: 'd2-a-cross-smoke',
            type: 'smoke',
            team: 'T',
            title: 'Cross Smoke',
            description: 'Stand near the blue container, aim at the line-up between the houses, throw',
            startPosition: { x: 65, y: 49 },
            endPosition: { x: 67, y: 23 },
            difficulty: 'Easy',
            tickrate: '64/128',
            technique: 'Standing throw',
            videoUrl: 'https://www.youtube.com/embed/7Q8N_y92GbQ'
          },
          {
            id: 'd2-a-box-smoke',
            type: 'smoke',
            team: 'CT',
            title: 'Box Smoke',
            description: 'Stand in the corner under the platform, aim for the top of the roof, jump throw',
            startPosition: { x: 66, y: 20 },
            endPosition: { x: 61, y: 55 },
            difficulty: 'Easy',
            tickrate: '64/128',
            technique: 'Jump throw',
            videoUrl: 'https://www.youtube.com/embed/-ae_l5nKVpg'
          },
          {
            id: 'd2-a-long-smoke',
            type: 'smoke',
            team: 'CT',
            title: 'Long Corner Smoke',
            description: 'Stand at blue container, aim between the wires, running throw',
            startPosition: { x: 70, y: 65 },
            endPosition: { x: 80, y: 40 },
            difficulty: 'Medium',
            tickrate: '64/128',
            technique: 'Running throw',
            videoUrl: 'https://example.com/video3'
          }
        ]
      },
      {
        id: 'd2-b-site',
        name: 'B Site',
        position: { x: 32, y: 13 },
        nades: [
          {
            id: 'd2-b-window-smoke',
            type: 'smoke',
            team: 'T',
            title: 'Window Smoke',
            description: 'Stand in the corner and aim at the dot like in the video, jump throw',
            startPosition: { x: 35, y: 61 },
            endPosition: { x: 35, y: 12 },
            difficulty: 'Easy',
            tickrate: '64/128',
            technique: 'Jump throw',
            videoUrl: 'https://www.youtube.com/embed/rKXpN-gq22Q'
          },
          {
            id: 'd2-b-door-smoke',
            type: 'smoke',
            team: 'T',
            title: 'B Door Smoke',
            description: 'From the respawn, run to the end of the parapet, while jumping off it, throw a grenade aiming at the middle of the wall along the lineup',
            startPosition: { x: 33, y: 76 },
            endPosition: { x: 35, y: 22 },
            difficulty: 'Hard',
            tickrate: '64/128',
            technique: 'Run + Jump throw',
            videoUrl: 'https://www.youtube.com/embed/3gqDp7oU_AM'
          }
        ]
      }
    ]
  },
  {
    id: 'mirage',
   image: '/maps/mirage.webp',
    backgroundImage: '/MapsIcon/mirage.webp',
    icon: '/MapsIcon/MirageIcon.webp',
    spots: [
      {
        id: 'mirage-a-site',
        name: 'A Site',
        position: { x: 70, y: 30 },
        nades: [
          {
            id: 'mirage-stairs-smoke',
            type: 'smoke',
            team: 'T',
            title: 'Stairs Smoke',
            description: 'Stand at T ramp, aim at the window corner, jump throw',
            startPosition: { x: 60, y: 45 },
            endPosition: { x: 75, y: 25 },
            difficulty: 'Medium',
            tickrate: '64/128',
            technique: 'Jump throw',
            videoUrl: 'https://example.com/video3'
          }
        ]
      }
    ]
  },
  {
    id: 'nuke',
    name: 'Nuke',
    image: '/maps/nuke.webp',
    backgroundImage: '/MapsIcon/Nuke.webp',
    icon: '/MapsIcon/NukeIcon.webp',
    spots: []
  },
  {
    id: 'inferno',
    name: 'Inferno',
    image: '/maps/inferno.png',
    backgroundImage: '/MapsIcon/Inferno.jpeg',
    icon: '/MapsIcon/InfernoIcon.webp',
    spots: []
  },
  {
    id: 'overpass',
    name: 'Overpass',
    image: '/maps/overpass.webp',
    backgroundImage: '/MapsIcon/Overpass.webp',
    icon: '/MapsIcon/OverpassIcon.webp',
    spots: []
  },
  {
    id: 'anubis',
    name: 'Anubis',
    image: '/maps/anubis.png',
    backgroundImage: '/MapsIcon/Anubis.webp',
    icon: '/MapsIcon/AnubisIcon.webp',
    spots: []
  },
  {
    id: 'ancient',
    name: 'Ancient',
    image: '/maps/ancient.webp',
    backgroundImage: '/MapsIcon/Ancient.webp',
    icon: '/MapsIcon/AncientIcon.webp',
    spots: []
  }
];

export const nadeTypes = [
  { 
    id: 'smoke', 
    name: 'Smoke', 
    color: 'rgba(200, 200, 200, 0.8)',
    icons: {
      T: 'endGrenadeIcons/SmokeT.png',
      CT: 'endGrenadeIcons/SmokeCT.png'
    }
  },
  { 
    id: 'flash', 
    name: 'Flash', 
    color: 'rgba(255, 255, 200, 0.8)',
    icons: {
      T: 'endGrenadeIcons/flash.png',
      CT: 'endGrenadeIcons/flash.png'
    }
  },
  { 
    id: 'molotov', 
    name: 'Molotov', 
    color: 'rgba(255, 100, 100, 0.8)',
    icons: {
      T: 'endGrenadeIcons/molotov.png',
      CT: 'endGrenadeIcons/molotov.png'
    }
  },
  { 
    id: 'he', 
    name: 'HE Grenade', 
    color: 'rgba(100, 255, 100, 0.8)',
    icons: {
      T: 'endGrenadeIcons/he.png',
      CT: 'endGrenadeIcons/he.png'
    }
  }
];
