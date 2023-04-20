import { ref } from 'vue'
import { ApiTypes } from './../types/apiTypes'

const api = ref<ApiTypes[]>([
  {
    title: 'Ricky Gervais: Supernature',
    type: {
      typeName: 'Standup',
      time: 64,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['Brytyjskie', 'Komedie', 'Stand-upy'],
      categories: ['Prowokacyjny', 'Satyryczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTkb2eYLP3-nqhLN3ISo3WRiU1yJZzpa6u4PDhSlFUMLpDGSfc3RlE2_KCmdvIFN2hBLQF5x1t-n9Lhg0MxJJhKj_WmGTkM3yIyFOHDRcNbiUW1D2tRfEbqX4CuJ3WElum34.jpg?r=78c',
    year: 2022,
    maturityRating: 16,
    description: 'W swoim drugim stand-upie dla Netflix Ricky Gervais opowiada, co sądzi o zasadach tworzenia komedii, jak rozpieszcza swoje koty i dlaczego natura naprawdę nam wystarczy.',
    key: 'ricky-gervais-supernature',
  },
  {
    title: 'Ricky Gervais: Humanity',
    type: {
      typeName: 'Standup',
      time: 78,
      script: ['Ricky Gervais'],
      cast: ['Ricky Gervais'],
      genres: ['Brytyjskie', 'Komedie', 'Stand-upy'],
      categories: ['Błyskotliwy'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZGe9kh8A_GfMIrAaHNiifxb8o8Ta41xKzX_xGVxdxFmEvDbkJgND1x1H_HR9M_sZNi7ZcIBwH6JxHjBvhtrjUa7bJIo0ptOc5-NWfqs-dhOV6aLBcicstwUFKO0DMZ8DAYy.jpg?r=1de',
    year: 2018,
    maturityRating: 16,
    description: 'W pierwszym stand-upie od siedmiu lat Ricky Gervais w swoim charakterystycznym stylu żartuje ze sławy, śmiertelności i ludzi pozbawionych dystansu do samych siebie.',
    key: 'ricky-gervais-humanity',
  },
  {
    title: 'Jimmy Carr: His dark material',
    type: {
      typeName: 'Standup',
      time: 59,
      script: ['Jimmy Carr'],
      cast: ['Jimmy Carr'],
      genres: ['Brytyjskie', 'Komedie', 'Stand-upy'],
      categories: ['Niegrzeczny', 'Błyskotliwy'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeksLHXDEX_BAvgCpbu_eVK8CVL3zOrZZkg8G2ESmrrKwtJbGmRjvYI9QZbUbuoIgVs9_r6SXOC8HEdhnH8j4UCRJdOrv32iWRCRrjOeVWAjMaI-s0Qc0o7Gwo8ulg_WNczU.jpg?r=cc7',
    year: 2021,
    maturityRating: 16,
    description: 'Jimmy Carr szuka humoru w najciemniejszym z miejsc w tym specjalnym programie pełnym typowych dla niego szyderczych żartów, które nazywa „gwoździem do trumny kariery”.',
    key: 'jimmy-carr-dark-material',
  },
  {
    title: 'Jimmy Carr: Funny Business',
    type: {
      typeName: 'Standup',
      time: 62,
      script: ['Jimmy Carr'],
      cast: ['Jimmy Carr'],
      genres: ['Brytyjskie', 'Komedie', 'Stand-upy'],
      categories: ['Niegrzeczny', 'Błyskotliwy'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR_Gfuc7usoj4b-RiGUYXD1L4IT5rpfXyRBgdVC0NNA0J268_R3g6AG1K9WrezY7OYFaq7Nr1pQVq3wniwSb7stZbzZ4iBuAY6eGiWML7_VVcVpyRsgZqdgIVML7wGsYrIpd.jpg?r=3af',
    year: 2016,
    maturityRating: 16,
    description: 'Brytyjski komik Jimmy Carr z kamienną twarzą serwuje przezabawne żarty wypełnionej po brzegi widowni w londyńskim Hammersmith Apollo.',
    key: 'jimmy-carr-funny-business',
  },
  {
    title: 'Trevor Noah: I wish you would',
    type: {
      typeName: 'Standup',
      time: 60,
      script: ['Trevor Noah'],
      cast: ['Trevor Noah'],
      genres: ['Komedie', 'Stand-upy'],
      categories: ['Błyskotliwy', 'Satyryczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcr3PC7cPAchGHZEMVmWIxFomivAqvs--LX7zSU4lgT7-XtriCrCnBxujwNRqCwha1oNLhep2kdEd9xegKrZZQZbhLHP9nFgee-zgI8DjMTmohsWMveOUXxOsYpo_Ez9W6Tx.jpg?r=6d5',
    year: 2022,
    maturityRating: 13,
    description: 'Nagrodzony Emmy komik Trevor Noah opowiada m.in. o nauce niemieckiego, osądzaniu bohaterów horrorów i zamawianiu indyjskiego jedzenia w Szkocji.',
    key: 'trevor-noah-wish-you-could',
  },
  {
    title: 'Chris Rock: Selective Outrage',
    type: {
      typeName: 'Standup',
      time: 60,
      script: ['Chris Rock'],
      cast: ['Chris Rock'],
      genres: ['Komedie', 'Stand-upy'],
      categories: ['Prowokacyjny', 'Błyskotliwy', 'Satyryczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABagCu3nAoM3HzBBAGTHAUlNvsD77xc39ZxqbaQTCVupSXQ3CMZ8Y1EdjRtvNNN8brAkGG0JCs8rpdILr17BjjjXuRs5bUA9gjo4XSuHUa-FfgfHhQnsCHnKioz6degBSLWg9.jpg?r=7c9',
    year: 2023,
    maturityRating: 16,
    description: 'Chris Rock w elektryzującym programie o nierasistowskich spodniach do jogi, rozpieszczaniu dzieci, Kardashiankach i o tym, kto ucierpiał bardziej — on czy Will Smith.',
    key: 'chris-rock-outrage',
  },
  {
    title: 'Pulp Fiction',
    type: {
      typeName: 'Movie',
      time: 154,
      director: 'Quentin Tarantino',
      script: ['Quentin Tarantino', 'Roger Avary'],
      cast: [
        'John Travolta',
        'Samuel L. Jackson',
        'Uma Thurman',
        'Harvey Keitel',
        'Tim Roth',
        'Bruce Willis',
      ],
      genres: ['Filmy klasyczne', 'Kryminały', 'Dramaty', 'Kino niezależne'],
      categories: ['O nietypowej tematyce'],
    },
    cover:
      'https://fiocondutor.com.pt/wp-content/uploads/2022/07/pulp_banner.jpeg',
    year: 1994,
    maturityRating: 16,
    description:
      'Jedyny w swoim rodzaju kryminał, w którym splatają się historie cyngla, jego filozofującego partnera oraz przegranego boksera.',
    key: 'pulp-fiction',
  },
  {
    title: 'Django',
    type: {
      typeName: 'Movie',
      time: 165,
      director: 'Quentin Tarantino',
      script: ['Quentin Tarantino'],
      cast: ['Jamie Foxx', 'Christoph Waltz', 'Samuel L. Jackson', 'Leonardo DiCaprio'],
      genres: ['Dramaty', 'Westerny', 'Dramaty społeczne'],
      categories: ['Brutalny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckRnqmbac-mu2D9oKlW_9mHA5eBTzZeVGygGlNobkIgw0Q9wG8dyOLh3gv2-iZEPmAHjSeiugheIfI-iaWH566g8V6mnIyIaqA.webp?r=b3b',
    year: 2012,
    maturityRating: 16,
    description:
      'Były niewolnik imieniem Django przemierza Amerykę w towarzystwie niemieckiego łowcy głów, aby uwolnić żonę z rąk sadystycznego plantatora.',
    key: 'Django',
  },
  {
    title: 'Incepcja',
    type: {
      typeName: 'Movie',
      time: 148,
      director: 'Christopher Nolan',
      script: ['Christopher Nolan'],
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Tom Hardy', 'Cillian Murphy', 'Elliot Page', 'Ken Watanabe'],
      genres: ['Filmy science fiction', 'Akcja i przygoda', 'Filmy szpiegowskie'],
      categories: ['Zagmatwany'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS2V5zXR8s254pRnVMJ2KxBLvGmUgAZBrckGUU-CrSuKzDZJ5VgTRcyFSCgWzD_QYpf9sLoKJTJdyPEUbNvNhvDH9taSi1UZ7Y0.webp?r=7b4',
    year: 2010,
    maturityRating: 13,
    description:
      'Skonfliktowany wewnętrznie złodziej potrafiący wydobywać sekrety ze snów innych ludzi przyjmuje ostatnie, ryzykowne zlecenie: zaszczepienie w czyimś umyśle pewnej idei.',
    key: 'inception',
  },
  {
    title: 'Forrest Gump',
    type: {
      typeName: 'Movie',
      time: 143,
      director: 'Robert Zemeckis',
      script: ['Eric Roth'],
      cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Rebecca Williams'],
      genres: ['Filmy klasyczne', 'Komedie romantyczne', 'Dramaty', 'Komedie'],
      categories: ['Sentymentalny', 'Uczuciowy', 'Pogodny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa_DIDH4vJWtBGJYelF9wN8nyK3Q66zDKnL_k3gvm0JEfCN2XgVPqpZlxSrUle0z18sDSd0LNCsTedp8Io6EvJ65glZ9GNmnLb8.webp?r=e7f',
    year: 1994,
    maturityRating: 16,
    description:
      'Mężczyzna o złotym sercu wikła się w najważniejsze wydarzenia lat 60. i 70. XX wieku, zarażając innych niezachwianym optymizmem.',
    key: 'forrest-gump',
  },
  {
    title: 'Bękarty wojny',
    type: {
      typeName: 'Movie',
      time: 152,
      director: 'Quentin Tarantino',
      script: ['Quentin Tarantino'],
      cast: ['Brad Pitt', 'Melanie Laurent', 'Christoph Waltz', 'Eli Roth', 'Michael Fassbender', 'Daniel Brühl'],
      genres: ['Filmy wojskowe', 'Akcja i przygoda', 'Filmy szpiegowskie'],
      categories: ['Brutalny', 'Satyryczny', 'Trzymający w napięciu'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSIAL3HDFS5XEkxv6Uhqi3vZGsPQ_WyaZaiEDQWe2VfEeDC0FYstcIg2YvqxRqX8ppM4MOZ9YHewzqD6W5rtXmGKEYbyw2nca_Q.webp?r=15a',
    year: 2009,
    maturityRating: 18,
    description:
      'W okupowanym Paryżu Niemcy planują premierę filmu hitlerowskiej propagandy. Nie wiedzą, że właścicielką kina jest Żydówka, a grupa amerykańskich żołnierzy planuje zamach.',
    key: 'inglorious-basterds',
  },
  {
    title: 'Ojciec chrzestny',
    type: {
      typeName: 'Movie',
      time: 177,
      director: 'Francis Ford Copolla',
      script: ['Francis Ford Copolla', 'Mario Puzo'],
      cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Robert Duvall'],
      genres: ['Filmy klasyczne', 'Kryminały', 'Dramaty', 'Adaptacje filmowe'],
      categories: ['Brutalny', 'Mroczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZgK25XeX_7WsKJdDBUNdaZnSO6aSMPD0ED31KEMc79YPy0aF5YGyKayIHe845ktGfqwVjH1VVUBJG4ozM7nj--rn3sG1zFVCnM.webp?r=620',
    year: 1972,
    maturityRating: 16,
    description:
      'Michael Corleone, bohater wojenny i najmłodszy syn potężnego nowojorskiego bossa, dołącza do rodzinnego biznesu, gdy jego ojciec staje się celem zamachu.',
    key: 'godfather',
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
              title: 'Historia BoJacka Horsemana. Rozdział pierwszy',
              time: 25,
            },
            {
              episodeNumber: 2,
              title: 'BoJack nienawidzi żołnierzy',
              time: 25,
            },
            {
              episodeNumber: 3,
              title: 'Zadziorna myszka',
              time: 26,
            },
            {
              episodeNumber: 4,
              title: 'Zoe i Zelda',
              time: 25,
            },
            {
              episodeNumber: 5,
              title: 'Żyj szybko, Diane Nguyen',
              time: 25,
            },
            {
              episodeNumber: 6,
              title: 'D-uża sprawa',
              time: 25,
            },
            {
              episodeNumber: 7,
              title: 'Powiedz cokolwiek',
              time: 25,
            },
            {
              episodeNumber: 8,
              title: 'Teleskop',
              time: 25,
            },
            {
              episodeNumber: 9,
              title: 'Siła wyższa',
              time: 25,
            },
            {
              episodeNumber: 10,
              title: 'Koń jednej roli',
              time: 25,
            },
            {
              episodeNumber: 11,
              title: 'Dołująca końcówka',
              time: 25,
            },
            {
              episodeNumber: 12,
              title: 'Później',
              time: 26,
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 25,
            },
          ],
        },
        {
          seasonNumber: 3,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 25,
            },
          ],
        },
        {
          seasonNumber: 4,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 25,
            },
          ],
        },
        {
          seasonNumber: 5,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 25,
            },
          ],
        },
        {
          seasonNumber: 6,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 25,
            },
          ],
        },
      ],
      creators: ['Raphael Bob-Waksberg'],
      cast: ['Will Arnett', 'Aaron Paul', 'Amy Sedaris'],
      genres: ['Sitcomy', 'Seriale komediowe', 'Seriale amerykańskie'],
      categories: ['Udawana powaga', 'Błyskotliwy', 'Satyryczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABew2yOimNrplXwv8mVSuReqWsDNpIxO8DBrY_0rntj3LGJdZXz0wZKI5Z3H7ahKJyKtBADqtR0S6AF_sSSjyzc_hxeqWEg-haG_VqI_Zc1yhVavXR0rfuI-e8rd-N1pP5yTA.jpg?r=37e',
    year: 2020,
    maturityRating: 16,
    description: 'Oto najbardziej uwielbiany koń sitcomów lat 90. — 20 lat później. Straszny malkontent, ale serce ma ze... nie do końca ze złota... ale z czegoś podobnego. Z miedzi?',
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
              title: 'No Más',
              time: 47,
            },
            {
              episodeNumber: 2,
              title: 'Caballo Sin Nombre',
              time: 47,
            },
            {
              episodeNumber: 3,
              title: 'Szczerość',
              time: 47,
            },
            {
              episodeNumber: 4,
              title: 'Zielone światło',
              time: 47,
            },
            {
              episodeNumber: 5,
              title: 'Mas',
              time: 47,
            },
            {
              episodeNumber: 6,
              title: 'Zachód słońca',
              time: 47,
            },
            {
              episodeNumber: 7,
              title: 'Jedna minuta',
              time: 47,
            },
            {
              episodeNumber: 8,
              title: 'OIOM',
              time: 47,
            },
            {
              episodeNumber: 9,
              title: 'Kafkowsko',
              time: 47,
            },
            {
              episodeNumber: 10,
              title: 'Mucha',
              time: 47,
            },
            {
              episodeNumber: 11,
              title: 'Abiquiu',
              time: 47,
            },
            {
              episodeNumber: 12,
              title: 'Półśrodki',
              time: 47,
            },
            {
              episodeNumber: 13,
              title: 'Na całość',
              time: 47,
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 47,
            },
          ],
        },
        {
          seasonNumber: 3,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 47,
            },
          ],
        },
        {
          seasonNumber: 4,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 47,
            },
          ],
        },
        {
          seasonNumber: 5,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 47,
            },
          ],
        },
      ],
      creators: ['Vince Gilligan'],
      cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn', 'Dean Norris'],
      genres: ['Seriale dramatyczne', 'Seriale kryminalne', 'Seriale amerykańskie', 'Thrillery'],
      categories: ['Brutalny', 'Mocny', 'Mroczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBfDQFgFupQYov5pQ4k1VGJIyeFjUad48qV4qajtGYE_1TyEQxrT3nToxrVvqj_mb_VcxAJPMmuPN0rO4pOYPnXNhVxOqkVjHk.webp?r=9ff',
    year: 2013,
    maturityRating: 16,
    description: 'Umierający na raka nauczyciel chemii łączy siły z byłym uczniem, aby zabezpieczyć finansowo swoją rodzinę. Wspólnie zaczynają produkować i sprzedawać metamfetaminę.',
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
              title: 'Najbardziej nieszczęśliwe dziecko',
              time: 59,
            },
            {
              episodeNumber: 2,
              title: 'Samotniczka',
              time: 48,
            },
            {
              episodeNumber: 3,
              title: 'Przyjaciel czy wróg?',
              time: 48,
            },
            {
              episodeNumber: 4,
              title: 'Niezapomniany wieczór',
              time: 49,
            },
            {
              episodeNumber: 5,
              title: 'Kto po zasianym wietrze zbierze burzę?',
              time: 52,
            },
            {
              episodeNumber: 6,
              title: 'Coś za coś',
              time: 50,
            },
            {
              episodeNumber: 7,
              title: 'Kim naprawdę jesteś?',
              time: 47,
            },
            {
              episodeNumber: 8,
              title: 'Mordercza konfrontacja',
              time: 52,
            },
          ],
        },
      ],
      creators: ['Alfred Gough', 'Miles Millar'],
      cast: ['Jenna Ortega', 'Gwendoline Christie', 'Riki Lindhome', 'Christina Ricci'],
      genres: ['Seriale młodzieżowe', 'Seriale sensacyjne', 'Seriale komediowe', 'Seriale kryminalne'],
      categories: ['Udawana powaga'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDcgJD2l3mDG_FtQwdWivYlRvZ4aEkvNlYnBsH7h44LS09ckRwsequQh1t4I5NsJRsWYeHnX3GgDhxdiCtw1FQ1UgWB58DjJ_TVmbDq9RxQNDUEYjypmRla4fLED6gjvh7t.jpg?r=bb3',
    year: 2022,
    maturityRating: 13,
    description: 'Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół — i wrogów — w Akademii Nevermore.',
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
              title: 'Hymn państwowy',
              time: 44,
            },
            {
              episodeNumber: 2,
              title: 'Piętnaście milionów',
              time: 62,
            },
            {
              episodeNumber: 2,
              title: 'Cała Twoja historia',
              time: 49,
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 60,
            },
          ],
        },
        {
          seasonNumber: 3,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 60,
            },
          ],
        },
        {
          seasonNumber: 4,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 60,
            },
          ],
        },
        {
          seasonNumber: 5,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 60,
            },
          ],
        },
      ],
      creators: ['Charlie Brooker'],
      cast: ['Jesse Plemons', 'Cristin Milioti', 'Jimmi Simpson', 'Michaela Coel'],
      genres: ['Seriale dramatyczne', 'Brytyjskie', 'Seriale science fiction', 'Thrillery'],
      categories: ['Zagmatwany', 'Mrożący krew w żyłach'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXrtNp8jvpcZ_pWCTdvReV_k2mI1hXj6yUFOaZWZeJGaa7eKqgjbxXx06raOHUk92rDhK_lxtQWgJ1W246D9UUlR7NlMMiVQU96uLQY8aGsSr7VG9a6elMxyZENI4Nr-Z1AI.jpg?r=65c',
    year: 2019,
    maturityRating: 16,
    description: 'Ta antologia science fiction obejmuje wizje bliskiej przyszłości, w której mroczna strona ludzkiej natury wypacza największe technologiczne wynalazki.',
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
              title: 'Odcinek 1',
              time: 28,
            },
            {
              episodeNumber: 2,
              title: 'Odcinek 2',
              time: 25,
            },
            {
              episodeNumber: 3,
              title: 'Odcinek 3',
              time: 27,
            },
            {
              episodeNumber: 4,
              title: 'Odcinek 4',
              time: 27,
            },
            {
              episodeNumber: 5,
              title: 'Odcinek 5',
              time: 31,
            },            {
              episodeNumber: 6,
              title: 'Odcinek 6',
              time: 27,
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 30,
            },
          ],
        },        {
          seasonNumber: 3,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 30,
            },
          ],
        },
      ],
      creators: ['Ricky Gervais'],
      cast: ['Ricky Gervais', 'Tom Basden', 'Tony WAy', 'Diane Morgan'],
      genres: ['Seriale dramatyczne', 'Brytyjskie', 'Seriale komediowe'],
      categories: ['Udawana powaga', 'Błyskotliwy', 'Satyryczny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABauRTueqJuaU5Ib8Zr3eFGfW7RZLd6GYQ7PLxBr7d3TI2zKusEjxlJ5D9t41m53DNe8vX5APDTNsaLuOs0-i41YmMy1IDSraOS9SFP497KfYjO_dJmCFUmeD3QVwpp1MJ8Tj.jpg?r=842',
    year: 2022,
    maturityRating: 18,
    description: 'Dziennikarz próbujący pogodzić się ze śmiercią żony zaczyna zachowywać się nieprzyjemnie, aby odepchnąć od siebie tych, którzy próbują mu pomóc.',
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
              title: 'Odcinek 1',
              time: 57,
            },
            {
              episodeNumber: 2,
              title: 'Odcinek 2',
              time: 58,
            },
            {
              episodeNumber: 3,
              title: 'Odcinek 3',
              time: 55,
            },
            {
              episodeNumber: 4,
              title: 'Odcinek 4',
              time: 58,
            },
            {
              episodeNumber: 5,
              title: 'Odcinek 5',
              time: 56,
            },
            {
              episodeNumber: 6,
              title: 'Odcinek 6',
              time: 54,
            },
          ],
        },
        {
          seasonNumber: 2,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 59,
            },
          ],
        },
        {
          seasonNumber: 3,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 59,
            },
          ],
        },
        {
          seasonNumber: 4,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 59,
            },
          ],
        },
        {
          seasonNumber: 5,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 59,
            },
          ],
        },
        {
          seasonNumber: 6,
          episodes: [
            {
              episodeNumber: 1,
              title: 'Odcinek 1',
              time: 59,
            },
          ],
        },
      ],
      creators: ['Steven Knight'],
      cast: ['Cillian Murphy', 'Sam Neill', 'Helen McCrory', 'Paul Anderson', 'Tom Hardy'],
      genres: ['Seriale dramatyczne', 'Brytyjskie', 'Kostuimowe', 'Seriale kryminalne'],
      categories: ['Brutalny'],
    },
    cover:
      'https://occ-0-2508-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYVlOtJFmATO-GURLPtQvs9F6NUxMLGXQiNkbiyTSyNn64Jwak87nTJmLqPtWidF8GD3sxmydAQkrk9tu8ndmahn0x_qTs7DTRje8pkjwhTrE5E9Yv4NRbhd398hcJfMmJN6.jpg?r=482',
    year: 2022,
    maturityRating: 16,
    description: 'Tommy Shelby dowodzi gangiem działającym w Birmingham w 1919 roku. Szef grupy przestępczej zapłaci każdą cenę, aby wspiąć się po szczeblach kariery na sam szczyt.',
    key: 'peaky-blinders',
  },
])

export default api
