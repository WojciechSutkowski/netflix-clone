import { ref } from 'vue'
import { ApiTypes } from './../types/apiTypes'
import { Movie, Series, Standup, Season, Episode } from './../types/store'

const api = ref<ApiTypes[]>([
  {
    title: 'Ricky Gervais: Supernature',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTkb2eYLP3-nqhLN3ISo3WRiU1yJZzpa6u4PDhSlFUMLpDGSfc3RlE2_KCmdvIFN2hBLQF5x1t-n9Lhg0MxJJhKj_WmGTkM3yIyFOHDRcNbiUW1D2tRfEbqX4CuJ3WElum34.jpg?r=78c',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'ricky-gervais-supernature',
  },
  {
    title: 'Ricky Gervais: Supernature',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTkb2eYLP3-nqhLN3ISo3WRiU1yJZzpa6u4PDhSlFUMLpDGSfc3RlE2_KCmdvIFN2hBLQF5x1t-n9Lhg0MxJJhKj_WmGTkM3yIyFOHDRcNbiUW1D2tRfEbqX4CuJ3WElum34.jpg?r=78c',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'ricky-gervais-supernature',
  },
  {
    title: 'Pulp Fiction',
    type: {
      typeName: 'Movie',
      time: 100,
      director: 'Quentin Tarantino',
      script: ['Quentin Tarantino'],
      cast: ['a', 'b'],
      genres: ['gangster', 'comedy'],
      categories: ['comedy', 'usa'],
    },
    cover:
      'https://fiocondutor.com.pt/wp-content/uploads/2022/07/pulp_banner.jpeg',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'pulp-fiction',
  },
  {
    title: 'BoJack Horseman',
    type: {
      typeName: 'Series',
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              episodeNumber: 1,
              title: 'episode 1',
              time: 36,
              cover: 'cover 1x1',
            },
            {
              episodeNumber: 2,
              title: 'episode 2',
              time: 36,
              cover: 'cover 1x2',
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'episode 1',
              time: 36,
              cover: 'cover 2x1',
            },
            {
              episodeNumber: 2,
              title: 'episode 2',
              time: 36,
              cover: 'cover 2x2',
            },
          ],
        },
      ],
      creators: ['a', 'b'],
      cast: ['a', 'b'],
      genres: ['a', 'b'],
      categories: ['a', 'b'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABew2yOimNrplXwv8mVSuReqWsDNpIxO8DBrY_0rntj3LGJdZXz0wZKI5Z3H7ahKJyKtBADqtR0S6AF_sSSjyzc_hxeqWEg-haG_VqI_Zc1yhVavXR0rfuI-e8rd-N1pP5yTA.jpg?r=37e',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'bojack-horseman',
  },
])

export default api
