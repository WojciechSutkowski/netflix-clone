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
    title: 'Ricky Gervais: Humanity',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZGe9kh8A_GfMIrAaHNiifxb8o8Ta41xKzX_xGVxdxFmEvDbkJgND1x1H_HR9M_sZNi7ZcIBwH6JxHjBvhtrjUa7bJIo0ptOc5-NWfqs-dhOV6aLBcicstwUFKO0DMZ8DAYy.jpg?r=1de',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'ricky-gervais-humanity',
  },
  {
    title: 'Jimmy Carr: His dark material',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeksLHXDEX_BAvgCpbu_eVK8CVL3zOrZZkg8G2ESmrrKwtJbGmRjvYI9QZbUbuoIgVs9_r6SXOC8HEdhnH8j4UCRJdOrv32iWRCRrjOeVWAjMaI-s0Qc0o7Gwo8ulg_WNczU.jpg?r=cc7',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'jimmy-carr-dark-material',
  },
  {
    title: 'Jimmy Carr: Funnybusiness',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR_Gfuc7usoj4b-RiGUYXD1L4IT5rpfXyRBgdVC0NNA0J268_R3g6AG1K9WrezY7OYFaq7Nr1pQVq3wniwSb7stZbzZ4iBuAY6eGiWML7_VVcVpyRsgZqdgIVML7wGsYrIpd.jpg?r=3af',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'jimmy-carr-funny-business',
  },
  {
    title: 'Trevor Noah: I wish you would',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcr3PC7cPAchGHZEMVmWIxFomivAqvs--LX7zSU4lgT7-XtriCrCnBxujwNRqCwha1oNLhep2kdEd9xegKrZZQZbhLHP9nFgee-zgI8DjMTmohsWMveOUXxOsYpo_Ez9W6Tx.jpg?r=6d5',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'trevor-noah-wish-you-could',
  },
  {
    title: 'Chris Rock: Outrage',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABagCu3nAoM3HzBBAGTHAUlNvsD77xc39ZxqbaQTCVupSXQ3CMZ8Y1EdjRtvNNN8brAkGG0JCs8rpdILr17BjjjXuRs5bUA9gjo4XSuHUa-FfgfHhQnsCHnKioz6degBSLWg9.jpg?r=7c9',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'chris-rock-outrage',
  },
  {
    title: 'Gabriel Iglesias: Stadium Fluffy',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['standup', 'dark humour'],
      categories: ['standup', 'dark humour'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXLEsfsxKdTttgboFI9mauW3geK2bj6VHPN-vyyMPBDik0O-hVgsFBG0txMcuWFTqNW5ySTe9GxS0AbgqXJ-SGAdtx6DBF3d--HBsS3EoXBXHaBNqtvU24i1nuSZvPx7t1se.jpg?r=070',
    year: 2021,
    maturityRating: 16,
    description: 'Desc',
    key: 'gabriel-iglesias-stadium-fluffy',
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
    title: 'Django',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckRnqmbac-mu2D9oKlW_9mHA5eBTzZeVGygGlNobkIgw0Q9wG8dyOLh3gv2-iZEPmAHjSeiugheIfI-iaWH566g8V6mnIyIaqA.webp?r=b3b',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'Django',
  },
  {
    title: 'Incepcja',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS2V5zXR8s254pRnVMJ2KxBLvGmUgAZBrckGUU-CrSuKzDZJ5VgTRcyFSCgWzD_QYpf9sLoKJTJdyPEUbNvNhvDH9taSi1UZ7Y0.webp?r=7b4',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'inception',
  },
  {
    title: 'Forrest Gump',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa_DIDH4vJWtBGJYelF9wN8nyK3Q66zDKnL_k3gvm0JEfCN2XgVPqpZlxSrUle0z18sDSd0LNCsTedp8Io6EvJ65glZ9GNmnLb8.webp?r=e7f',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'forrest-gump',
  },
  {
    title: 'Bękarty wojny',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSIAL3HDFS5XEkxv6Uhqi3vZGsPQ_WyaZaiEDQWe2VfEeDC0FYstcIg2YvqxRqX8ppM4MOZ9YHewzqD6W5rtXmGKEYbyw2nca_Q.webp?r=15a',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'inglorious-basterds',
  },
  {
    title: 'Ojciec chrzestny',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZgK25XeX_7WsKJdDBUNdaZnSO6aSMPD0ED31KEMc79YPy0aF5YGyKayIHe845ktGfqwVjH1VVUBJG4ozM7nj--rn3sG1zFVCnM.webp?r=620',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'godfather',
  },
  {
    title: 'Interstellar',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUBNRpUgXu0Jq0XovwqOlmh4SCQ-V2qOTg4NQAWN881al7jKukfHbfkFMyA7gTEK3oxtr-cGpxDpmeWkc21MT5jc-qmWkkFDXEQ.webp?r=c05',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'interstellar',
  },
  {
    title: 'Kac Vegas',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWtE9tyHeF_xgv4ho1REJIrRnPYxoALBLwxRPtk0A07L05r_YK1aMbxJ3X5hV7pkzw4EMvwDn7OwtHOpza1fjHqXkW584AkUqV0.webp?r=635',
    year: 1994,
    maturityRating: 16,
    description: 'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'hangover',
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
  {
    title: 'Breaking Bad',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVRzhYP8ERPFynkCkdSAIwRxRAtu97nGOSYqvHqSoNnNS9w1l9Mc5p1kaODM8rDMS-Bu6Wc7bCijFFcg8ErEAEbHYAHKvOEhqlw.webp?r=252',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'breaking-bad',
  },
  {
    title: 'Wednesday',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDcgJD2l3mDG_FtQwdWivYlRvZ4aEkvNlYnBsH7h44LS09ckRwsequQh1t4I5NsJRsWYeHnX3GgDhxdiCtw1FQ1UgWB58DjJ_TVmbDq9RxQNDUEYjypmRla4fLED6gjvh7t.jpg?r=bb3',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'wednesday',
  },
  {
    title: 'Czarne lustro',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXrtNp8jvpcZ_pWCTdvReV_k2mI1hXj6yUFOaZWZeJGaa7eKqgjbxXx06raOHUk92rDhK_lxtQWgJ1W246D9UUlR7NlMMiVQU96uLQY8aGsSr7VG9a6elMxyZENI4Nr-Z1AI.jpg?r=65c',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'black-mirror',
  },
  {
    title: 'After Life',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABauRTueqJuaU5Ib8Zr3eFGfW7RZLd6GYQ7PLxBr7d3TI2zKusEjxlJ5D9t41m53DNe8vX5APDTNsaLuOs0-i41YmMy1IDSraOS9SFP497KfYjO_dJmCFUmeD3QVwpp1MJ8Tj.jpg?r=842',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'after-life',
  },
  {
    title: 'Peaky Blinders',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'peaky-blinders',
  },
  {
    title: 'House of Cards',
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
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfp3cRX3Z98SpIjjW3dLURs4mf0R41RgLnd1b-xZOqob-JdyNvJ57vdtlyi1MjjreYFe2FwN4nrJxZ2Ibl4xqtCt-Cp5MuE3uM4zmaACaNt62aUJIL8IpQNLlwLdlLu_FTY7.jpg?r=4ef',
    year: 2016,
    maturityRating: 16,
    description: 'Desc',
    key: 'house-of-cards',
  },
])

export default api
