'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        ownerId: 1,
        address: '880 Summit Blvd',
        city: 'Big Bear Lake',
        state: 'California',
        country: 'United States of America',
        lat: 34.236647,
        lng: -116.889336,
        name: 'Black Rock by Destination Big Bear',
        description: 'Completed in 2021, this modern, rustic, luxury masterpiece balances nature, architecture, design and functionality to create an unmatched mountain experience. The concept for Black Rock was inspired by taking a world-class luxury hotel experience and distilling it down into an epic vacation home. The owners have spared no expense in bringing that concept to life. Working with top designers, they brought a luxurious lifestyle to the mountains of Big Bear and created the ultimate Big Bear cabin rental.',
        price: 2337,
        category: 'Cabin',
        type: 'Entire home',
        guests: 15,
        bedrooms: 5,
        beds: 9,
        baths: 5.5
      },
      {
        ownerId: 2,
        address: '14th road Minh Phu',
        city: 'Soc Son',
        state: 'Ha Noi',
        country: 'Vietnam',
        lat: 21.283391,
        lng: 105.777750,
        name: 'Big Pine House by the Forest',
        description: 'The Big Pine House is located right on the hillside with the surrounding old pine forest bringing a cool vibe all year round. The house also owns an extremely spacious front view with a transparent toughened glass wall.',
        price: 135,
        category: 'Treehouse',
        type: 'Entire bungalow',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 3,
        address: 'Banjar Kepitu',
        city: 'Kecamatan Tampaksiring',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.447133,
        lng: 115.234717,
        name: 'Lovely New 3BR Villa with Stunning Jungle View',
        description: 'Set amongst the tropical greenery of Ubud and in the middle are perfect rice fields. This brand new modern villa will offer you serenity and peace with its infinity pool looking onto the lush greenery valley view.',
        price: 339,
        category: 'Tropical',
        type: 'Entire villa',
        guests: 8,
        bedrooms: 3,
        beds: 4,
        baths: 3
      },
      {
        ownerId: 7,
        address: '204 Big Sky Way',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States of America',
        lat: 38.050152,
        lng: -121.339526,
        name: 'The Kellogg Doolittle House',
        description: 'Created over 25 meticulous years, Kellogg Doolittle in Joshua Tree National Park is a marvel of the organic architecture movement. It is one of the most exclusive homes in the world, and available for the first time as an WhereBnb Luxe exclusive.',
        price: 12500,
        category: 'Luxe',
        type: 'Luxury stay',
        guests: 6,
        bedrooms: 3,
        beds: 3,
        baths: 3
      },
      {
        ownerId: 1,
        address: '54432 Rd 432',
        city: 'Bass Lake',
        state: 'California',
        country: 'United States of America',
        lat: 37.336447,
        lng: -119.579650,
        name: 'Cozy A Frame in Bass Lake',
        description: 'Welcome to Acorn Falls! Ideally located, this cozy A frame is across the street from the Falls Beach at Bass Lake, walking distance to the Angel Falls trail head, and only 17 miles to Yosemite National Park. Acorn Falls is sure to delight all who enter. The cabin is a perfect choice for families, girlfriend/guys getaways, couples, or solo travelers looking for a bit of quiet solitude. Acorn Falls is comfortable, fully stocked with thoughtful amenities and luxurious finishes.',
        price: 536,
        category: 'A-Frame',
        type: 'Entire cabin',
        guests: 8,
        bedrooms: 4,
        beds: 5,
        baths: 2
      },
      {
        ownerId: 7,
        address: 'Hagastubakken 26, 2005',
        city: 'Raelingen',
        state: 'Akershus',
        country: 'Norway',
        lat: 59.942727,
        lng: 11.051970,
        name: 'The WonderINN Mirrored Glass Cabin',
        description: 'Immerse yourself in the wilderness, still within reach of civilization! WonderINN is literally a hidden gem; the unique design of the mirrored glass blends into the landscape so you can retreat to comfort and luxury as you watch the world pass by.',
        price: 466,
        category: 'Tiny Home',
        type: 'Tiny home',
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1
      },
      {
        ownerId: 5,
        address: '198/8-9 Thawewong Rd, Pa Tong',
        city: 'Kathu',
        state: 'Phuket',
        country: 'Thailand',
        lat: 7.906378,
        lng: 98.296665,
        name: 'Villa Samira',
        description: 'A contemporary variation on classic Thai themes, this villa maxes out its panoramic views of the Bay of Bengal. A wide open great room is entirely alfresco, with a reflection pond in the center flanked by stepping stones and staircases above. Rest a cool drink on the ledge of your oversized jacuzzi or dip in the 19-meter infinity pool and take it all in. Quiet Kamala Beach is just a 4-mile drive.',
        price: 1490,
        category: 'Luxe',
        type: 'Entire villa',
        guests: 12,
        bedrooms: 6,
        beds: 6,
        baths: 6
      },
      {
        ownerId: 1,
        address: 'Cam. Viejo a San Jose Km. 4.5, El Medano Ejidal',
        city: 'Cabo San Lucas',
        state: 'Baja California Sur',
        country: 'Mexico',
        lat: 22.899308,
        lng: -109.892314,
        name: 'West Enclave 7 - Luxury Stay',
        description: 'Loungers wait on the white-sand beach beyond the warm sandstone walls of this contemporary home on the Sea of Cortez. Floor-to-ceiling windows open the living areas to water on two sides: the sea on one, and a courtyard reflecting pool on the other. Surrounded by Ritz Carlton resort grounds, it is close to golf and dining, plus art gallery walks in downtown San José del Cabo.',
        price: 5300,
        category: 'Luxe',
        type: 'Luxury stay',
        guests: 16,
        bedrooms: 5,
        beds: 11,
        baths: 6.5
      },
      {
        ownerId: 4,
        address: 'Via Valassina, 31, 22021 Bellagio CO',
        city: 'Varenna',
        state: 'Lecco',
        country: 'Italy',
        lat: 45.983995,
        lng: 9.262183,
        name: 'Small Wood Furnished Home on the Lake',
        description: 'A small house, furnished entirely in natural wood, with a double bed and a bunk bed, fireplace and wood-burning oven. There is also a garden equipped with barbecues, sun loungers and sofas, with private access to the lake.',
        price: 255,
        category: 'Tiny Home',
        type: 'Entire home',
        guests: 3,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 5,
        address: '181 Hua Hin 112 Rd Hua-Na21 Thap Tai, Hua Hin District',
        city: 'Tambon Nong Kae',
        state: 'Chang Wat Prachuap Khiri Khan',
        country: 'Thailand',
        lat: 12.499935,
        lng: 99.932481,
        name: 'Turtle Bay HuaHin Eco LuxeTurt Villa in Lotus Bay',
        description: 'A unique Turtle Shape villa located in natural lotus pond surrounding by nature Khao Tao Valley and Sai Noi beach. Private one bed room studio villa comprising spacious bathroom and outdoor waterside living deck.',
        price: 97,
        category: 'Dome',
        type: 'Houseboat',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 1,
        address: '15123 County Rd 222',
        city: 'Crane Hill',
        state: 'Alabama',
        country: 'United States of America',
        lat: 34.092693,
        lng: -87.061326,
        name: 'Wanderlust Treehouse Experience',
        description: 'Our very unique treehouse is nestled into the treetops on 40 acres of completely secluded property. Great for a couples retreat, honeymoon, or spiritual reconnecting. Get away from it all and enjoy the nature trails and 2 acre lake(seasonal at times) to pass the time and be able to really unwind. Sit and enjoy your morning coffee outside on the deck as you may be able to catch a peak at the deer and other small animals making their way.',
        price: 350,
        category: 'Treehouse',
        type: 'Treehouse',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1.5
      },
      {
        ownerId: 4,
        address: 'Largo Michele Ayroldi Carissimo, 14, 72017',
        city: 'Ostuni',
        state: 'BR',
        country: 'Italy',
        lat: 40.730232,
        lng: 17.577138,
        name: 'I TRULLI DI CAROLE',
        description: 'Complex of authentic trulli entirely renovated preserving all the characteristics. Trulli Carole are located halfway between Ostuni and Martina Franca, surrounded by centuries-old olive and fruit trees. On the front of the house a stone paved area welcomes the swimming pool (mt 5x8) equipped with sun beds and special straw umbrellas and the outdoor kitchen with hob, barbecue and large table for outdoor dining.',
        price: 510,
        category: 'Dome',
        type: 'Trullo',
        guests: 10,
        bedrooms: 3,
        beds: 5,
        baths: 4
      },
      {
        ownerId: 4,
        address: 'Milonogianni 12',
        city: 'Chania 731 35',
        state: 'Crete',
        country: 'Greece',
        lat: 35.515004,
        lng: 24.020118,
        name: 'Minoas Sea Villa Heated Pool',
        description: 'Nuzzled in a gorgeous setting, above the sun kissed beach of Georgioupolis in Crete, Minoas Villas captures the essence of chic and luxurious living only few minutes away from the shimmering sea. Built amphitheatrically with direct sea views, this exceptional built Villas, member of the HotelPraxis Group evokes the island’s Cretan spirit and cosmopolitan charm in its elegant environs while ensuring a holiday beyond comparison.',
        price: 419,
        category: 'Amazing Pool',
        type: 'Entire villa',
        guests: 10,
        bedrooms: 4,
        beds: 6,
        baths: 3
      },
      {
        ownerId: 5,
        address: 'Herdade da, Av. Pinhal da Aroeira 1, 2820-112 Aroeira',
        city: 'Costa da Caparica',
        state: 'Setúbal',
        country: 'Portugal',
        lat: 38.582212,
        lng: -9.173972,
        name: 'Casa Muito: Beach, City, Surf!',
        description: 'In the center of Costa da Caparica and 7 minutes walk to the beach, we have a lovely cozy house to make you feel at home, just 20 minutes from the vibrant Lisbon.',
        price: 222,
        category: 'Beach',
        type: 'Entire home',
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 1
      },
      {
        ownerId: 5,
        address: '4545 Thomas Lake Harris Dr',
        city: 'Santa Rosa',
        state: 'California',
        country: 'United States of America',
        lat: 38.504816,
        lng: -122.721404,
        name: 'New Modernist Wine Country Estate Home w/ Jacuzzi',
        description: 'This modernist wine country estate home is nestled just outside of the city, amongst soaring redwoods and rolling vineyard views. Set on a quiet and private 3 acres, yet close to many towns and wineries. Fully renovated 3600 sq. ft. two-story home, with lux materials throughout. Relax in the massive family room with vaulted ceilings and a 20inch marble fireplace.Find your self glowing from the vintage chandeliers and lighting throughout the entire home.',
        price: 1480,
        category: 'Luxe',
        type: 'Entire villa',
        guests: 8,
        bedrooms: 4,
        beds: 6,
        baths: 3.5
      },
      {
        ownerId: 2,
        address: '4545 Thomas Lake Harris Dr',
        city: 'Sea Ranch',
        state: 'California',
        country: 'United States of America',
        lat: 38.716527,
        lng: -123.453766,
        name: 'Award-Winning Forest Getaway: The Sea Ranch House',
        description: 'Named `The Ranch House` by its architect Don Jacobs, this updated 70s cabin is a forest getaway with modern sensibility.The house is surrounded by redwoods & has 2 large decks, 1 with propane firepit with ample seating, the other with hot tub.Living room has picture windows with forest views & Morso wood - burning stove.Guests are encouraged to enjoy the hiking trails, pools, and outdoor amenities.House comfortably sleeps 4, plus fast internet.',
        price: 900,
        category: 'Design',
        type: 'Entire home',
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1
      },
      {
        ownerId: 6,
        address: '15 US-50',
        city: 'Stateline',
        state: 'Nevada',
        country: 'United States of America',
        lat: 39.0982904,
        lng: -119.9407817,
        name: 'Villa Harrah',
        description: 'With walls of windows that soar above the lake, this light-filled villa looks like it is floating on water. Wander from the full cinema, wet bar, and pool table to a deluxe spa with a sauna, hot tub, salt room, and even a nail and hair salon.A large terrace lead to a pool, sandy beach and private pier, and the balconies seem endless.You are just minutes from Zephyr Cove Beach and Edgewood Tahoe Golf Course. Copyright © Luxury Retreats.All rights reserved.',
        price: 20000,
        category: 'Luxe',
        type: 'Lakefront resort',
        guests: 10,
        bedrooms: 6,
        beds: 11,
        baths: 7.5
      },
      {
        ownerId: 2,
        address: 'G6FX+R5G, Kedewatan, Ubud',
        city: 'Gianyar Regency',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.324038,
        lng: 115.407732,
        name: 'Ubud Tropical Paradise - Villa Bambu Blue',
        description: 'A dreamy, tropical private villa located on the edge of Bali`s popular tourist town, Ubud.',
        price: 140,
        category: 'Amazing Pool',
        type: 'Entire villa',
        guests: 6,
        bedrooms: 3,
        beds: 3,
        baths: 3
      },
      {
        ownerId: 3,
        address: '5101 N Lake Blvd',
        city: 'Carnelian Bay',
        state: 'California',
        country: 'United States of America',
        lat: 39.230808,
        lng: -120.081505,
        name: 'Little Black Cabin by the Lake',
        description: 'We have restored and transformed this original, hand built, 1940s Tahoe cabin into a beautiful and modern four season escape. Our cozy one bedroom + loft, one bathroom cabin is centrally located in one of the most sought after neighborhoods in the region. We spent the past year thoughtfully curating all spaces throughout the home with modern furniture, new bedding and linens, as well as top- end housewares, appliances and beautiful things we love.',
        price: 681,
        category: 'Cabin',
        type: 'Entire home',
        guests: 3,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 5,
        address: '12 Main St E',
        city: 'Kingsville',
        state: 'Ontario',
        country: 'Canada',
        lat: 42.038119,
        lng: - 82.738522,
        name: 'Floating Geodesic Dome on Historic Wine Route',
        description: 'Experience a one of a kind stay in our floating, star gazer geodesic dome on beautiful Fox Creek! This 4 season, glamping stay is only steps away from wineries, breweries, beaches, shopping and much more. Our unique reservation provides you with a calm floating experience, leaving you rested, reconnected and ready to explore incredible Essex County, Ontario. We look forward to meeting you and sharing this creative space!',
        price: 203,
        category: 'Dome',
        type: 'Dome',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 3,
        address: 'Jalan A.A Gede Rai, Jl. Raya Mawang Kelod, Lodtunduh',
        city: 'Ubud',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.564608,
        lng: 115.257283,
        name: 'Bali Bamboo House | Rescape Ubud - Resound Villa',
        description: 'Rescape (retreat/ escape) Ubud is an uniquely designed villa built by bamboo, allowing guests to unwind and escape from all the daily hassle. This stay is perfect for couples, young families, artists, musicians and everyone who loves to fully embrace the nature. The place feels secluded and yet only 5 minutes away by bike from central Ubud!',
        price: 87,
        category: 'A-Frame',
        type: 'Hut',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 3,
        address: '8546+G8X, Jl. Courtyard, Seminyak, Kec. Kuta',
        city: 'Kabupaten Badung',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.687071,
        lng: 115.160640,
        name: 'Amazing 6BR w/ Gym, Massage Room & Yoga Shala',
        description: 'This villa encapsulates all that is great about Bali within one place, its superbly large and spacious design dominates the verticality of its overall structure. With 6 bedrooms located in different portions of the house, this villa thrives in being wide open and perfect for your family gatherings. In each portion of the house you will find naturally cold breezes that drift and flow through the entirety of the villa with no effort.',
        price: 499,
        category: 'Amazing Pool',
        type: 'Entire villa',
        guests: 14,
        bedrooms: 6,
        beds: 6,
        baths: 6
      },
      {
        ownerId: 3,
        address: 'Jln Raya Gilimanuk Br.Bonian, Selemadeg,Tabanan, Antap, Kec. Selemadeg',
        city: 'Kabupaten Tabanan',
        state: 'Nusa Tenggara Barat',
        country: 'Indonesia',
        lat: -8.511484,
        lng: 114.977649,
        name: 'Seaview Bamboo Villa - "Nanti Lombok" - Villa Atas',
        description: 'Nestled in the hills of Kuta Lombok overlooking the bay. Nanti is a boutique luxury bamboo resort welcoming you to an unforgettable AirBnB experience.',
        price: 166,
        category: '',
        type: 'Hut',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 4,
        address: 'Jl. Jangu, Duda, Kec. Selat, Kabupaten Karangasem',
        city: 'Selat',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.447908,
        lng: 115.484601,
        name: 'Hideout Coccon - Barefoot Luxury Bamboo House',
        description: 'Hideout Cocoon is truly one of Hideout gems. The entrance to your private bamboo villa weaves through a bamboo tunnel path and over a small bamboo bridge that crosses over one of the cleanest rivers in Bali. Your garden is fully enclosed by lush jungle vegetation. The house is at the centre of it all, together with a heated jacuzzi and a bonfire. Hideout Cocoon is very modern, luxurious and the perfect choice for a honeymoon, quick staycation or longer escape from the world.',
        price: 244,
        category: 'Treehouse',
        type: 'Treehouse',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 4,
        address: 'Av. Boca Paila entre Zacil-ha y Nicte-ha, 77760',
        city: 'Tulum',
        state: 'Quintana Roo',
        country: 'Mexico',
        lat: 20.212720,
        lng: -87.470502,
        name: 'Relaxing Space with Common Pools & Lounge Area',
        description: 'Discover this beautiful 3bed apartment in the best of Aldea Zama, located on 1st floor by stairs only, surrounded by all the necessary amenities to make your stay, the most pleasant. This property is perfect for a group of friends, family or bach parties looking to escape and forget about the daily routine and live a relaxing experience.',
        price: 206,
        category: 'Tropical',
        type: 'Entire rental unit',
        guests: 8,
        bedrooms: 3,
        beds: 4,
        baths: 3
      },
      {
        ownerId: 4,
        address: 'C. Manuel M. Plascencia 91, 63734',
        city: 'Sayulita',
        state: 'Nayarit',
        country: 'Mexico',
        lat: 20.865980,
        lng: -105.435433,
        name: 'Indoor-Outdoor Living at a Cozy Flat Surrounded by Greenery',
        description: 'Doze off in a macrame hammock in the mottled shade of rustling palm trees. Prepare meals in an open-air kitchen and dine alfresco among potted cactuses. Wander down to the pool to sunbathe and swim, then rinse off under a glorious rain shower.',
        price: 180,
        category: 'Beach',
        type: 'Entire rental unit',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 3
      },
      {
        ownerId: 4,
        address: 'KM 5 Carretera Tulum-Boca Paila Lt10 Zona Hotelera, 77780',
        city: 'Tulum',
        state: 'Quintana Roo',
        country: 'Mexico',
        lat: 20.172451,
        lng: -87.449677,
        name: 'Design Loft with Private Pool and SPA',
        description: 'Imagine a place between world class design and nature: Casa Madera is one of the most beautiful AirbnBs in Tulum. The famous Terreo Studio has build it with not cutting one tree, using local materials and created a Design Apartment with 2 full bathrooms include rain fall showers and bathtubs plus a beautiful terrace surround by trees and a amazing garden - featured in Magazines around the world.Everywhere you will find antique decor and tasteful interiors.',
        price: 220,
        category: 'Design',
        type: 'Entire condo',
        guests: 5,
        bedrooms: 2,
        beds: 2,
        baths: 2.5
      },
      {
        ownerId: 6,
        address: '100 South Park Avenue',
        city: 'Breckenridge',
        state: 'Colorado',
        country: 'United States of America',
        lat: 39.483489,
        lng: -106.048017,
        name: 'Brand New Home - Bhava Cabin',
        description: 'Curious about what makes the mountains so special? Find out for yourself at our brand new A-frame home 10 min away from downtown Breckenridge! All you have to do is bring your bags and we take care of the rest! Sleeps 8 (4 bedrooms- 1 king, 3 queens, 3 twins)! Our Cabin has three interior floors, a private hot tub, and BBQ on the exterior deck. Top floor primary bedroom loft, main floor open concept kitchen and comfortable dinning room. Bottom floor Entertainment room and bunk room with a Smart TV for relaxing, pool table, and games to have fun!',
        price: 507,
        category: 'A-Frame',
        type: 'Entire home',
        guests: 8,
        bedrooms: 4,
        beds: 7,
        baths: 3
      },
      {
        ownerId: 6,
        address: '21050 River Blvd',
        city: 'Monte Rio',
        state: 'California',
        country: 'United States of America',
        lat: 38.466803,
        lng: -123.007978,
        name: 'Crow\'s Nest - Private, Spa, High-Speed Internet',
        description: 'Located high in the redwoods of Monte Rio, the Crow\'s Nest provides a birds eye view of the old growth forest surrounding the property.Take in the stunning views from our patio, the hot tub, or through the many large windows in the cabin.',
        price: 622,
        category: 'Cabin',
        type: 'Entire cabin',
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1
      },
      {
        ownerId: 2,
        address: '2179 Le Thanh Ton, Phuong Brn Thanh',
        city: 'Quan 4',
        state: 'Thanh pho Ho Chi Minh',
        country: 'Vietnam',
        lat: 10.774950,
        lng: 106.698558,
        name: 'Big Balcony Apartment with Free Gym & Pool in Center, CBD',
        description: 'Enjoy a stylish experience at this centrally-located place. This apartment is 34 sqm and located in a famous building in the center of Saigon.',
        price: 42,
        category: 'Amazing Pool',
        type: 'Entire condo',
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1
      },
      {
        ownerId: 2,
        address: '20 Duong so 48, Phuong 3',
        city: 'Quan 4',
        state: 'Thanh pho Ho Chi Minh',
        country: 'Vietnam',
        lat: 10.755809,
        lng: 106.701605,
        name: 'Saltwater Pool - Amazing City View - Luxury Apartment',
        description: 'LIOHOME - Let\'s enjoy the fresh-air and enterprizing life in HCMC. We will have a heavenly view with a private balcony. Regardless of the time of day, the panoramas are spectacular: from the city’s evening lights, welcoming the dawn, the meandering afternoon Saigon River and the endless dramatic Saigon skies. A perfect combination of modern architecture & exquisite interior design.',
        price: 64,
        category: 'Amazing Pool',
        type: 'Entire rental unit',
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2
      },
      {
        ownerId: 2,
        address: 'Church Road, Villa Libertad',
        city: 'El Nido',
        state: 'Palawan',
        country: 'Philippines',
        lat: 11.203385,
        lng: 119.421874,
        name: 'Amelia Room at Colibris Corner, Maremegmeg Beach',
        description: 'Purlieu to native Palawan hummingbirds, Colibris Corner is a newly built themed villa with direct access to Las Cabañas Beach & Maremegmeg Beach.',
        price: 64,
        category: 'Beach',
        type: 'Private room in villa',
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1
      },
      {
        ownerId: 7,
        address: '62209 Verbena Rd',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States of America',
        lat: 34.139314,
        lng: -116.306327,
        name: 'THAVN - Joshua Tree Remote Dessert Bubble Dome',
        description: 'Unique desert bubble is located in a private 30 acres lot! ~13 miles from Joshua Tree National Park in Joshua Tree, California! If you love traveling, camping, uniqueness, nature, adventure and experience the magic of the desert, the bubble is a purposefully designed tent with intentional features to help you maximize your travel experiences.Comfortable, luxurious and right in the middle of the desert.Experience the best of both worlds.',
        price: 917,
        category: 'Dome',
        type: 'Dome',
        guests: 3,
        bedrooms: 1,
        beds: 1,
        baths: 1.5
      },
      {
        ownerId: 2,
        address: 'Jalan Gunung Agung, Sebudi, Kec. Selat',
        city: 'Kabupaten Karangasem',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.378964,
        lng: 115.501081,
        name: 'HIDEOUT HORIZON - Eco Bamboo Home',
        description: 'Hideout Horizon is the largest addition to the Hideout Family. The most adventurous all-bamboo home is ready to welcome those seeking a little jungle adventure in East Karangasem. Your perfect little staycation in Bali is right here. We take relaxation seriously.',
        price: 218,
        category: 'Treehouse',
        type: 'Treehouse',
        guests: 4,
        bedrooms: 2,
        beds: 3,
        baths: 1.5
      },
      {
        ownerId: 6,
        address: '23033 E Pacific Coast Hwy',
        city: 'Malibu',
        state: 'California',
        country: 'United States of America',
        lat: 34.037593,
        lng: -118.678144,
        name: 'Malibu Beachfront Villa - Villa Trancoso',
        description: 'Chic beach house on Broad Beach. Spacious living and bedroom areas are bathed in sunlight, ocean views, and offer tremendous indoor/outdoor entertainment flow with walls of glass to maximize the California beach lifestyle.',
        price: 2195,
        category: 'Beach',
        type: 'Entire home',
        guests: 8,
        bedrooms: 4,
        beds: 4,
        baths: 4
      },
      {
        ownerId: 6,
        address: '2145 Rambla Pacifico St',
        city: 'Malibu',
        state: 'California',
        country: 'United States of America',
        lat: 34.061345,
        lng: -118.652267,
        name: 'Stone Manor',
        description: 'As you enter the grounds of Stone Manor and edge up the immense driveway, tiled in bright natural stone, and passing leafy lemon trees, just one glimpse of the home will reveal that you’re in for something special. This classic California mansion, composed of elegant stone and masonry sits on 3 acres of land where carefully landscaped gardens and forest present comfort and tranquility throughout.',
        price: 4000,
        category: 'Luxe',
        type: 'Arts & Crafts villa',
        guests: 10,
        bedrooms: 5,
        beds: 5,
        baths: 6
      },
      {
        ownerId: 1,
        address: '45 Ocean Point Dr',
        city: 'Silly Creek',
        state: 'Turks',
        country: 'Turks & Caicos Islands',
        lat: 21.747807,
        lng: -72.2936940,
        name: 'Oceanside Tower',
        description: 'Nestled on the slender Silly Creek peninsula along the southwest coast of Providenciales, this modern yet classic Caribbean home surveys panoramic ocean vistas on every level—from its lofty observation tower, to its broad veranda, to its private beach cove. Plunge into the turquoise sea, lounge by the infinity swimming pool, and dine alfresco as the sun sets over the horizon.',
        price: 1500,
        category: 'Tropical',
        type: 'Luxury stay',
        guests: 8,
        bedrooms: 4,
        beds: 4,
        baths: 4
      },
      {
        ownerId: 1,
        address: 'JRJV+H93, Frente super fresco Santa Teresa de Cobano',
        city: 'Santa Teresa',
        state: 'Puntarenas',
        country: 'Costa Rica',
        lat: 9.631849,
        lng: -85.156499,
        name: 'Maison Marazul',
        description: 'This exquisite Costa Rican villa enjoys a beachfront location at Santa Teresa cove, just steps from the Florblanca hotel and minutes from Playa Hermosa. Nestled amid lush tropical trees and flowers yielding to Pacific ocean vistas, the villa offers ample alfresco living space for dining and relaxation, elegant and spacious interiors with beautiful rustic accents, and three bedroom suites accommodating six guests.',
        price: 1850,
        category: 'Tropical',
        type: 'Garden beach house',
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 3
      },
      {
        ownerId: 1,
        address: 'Birdview Ave &, Offside Drive',
        city: 'Malibu',
        state: 'California',
        country: 'United States of America',
        lat: 34.000909,
        lng: -118.806658,
        name: 'Carbon Beach',
        description: 'Los Angeles is home to some of America’s most beautiful and prestigious cities, perhaps none more so than Malibu. Twenty-one miles of dynamic coast make up the width of the city limits, most of which is viewable from the iconic Pacific Coast Highway. Built on stilts, right over top of Malibu’s Carbon Beach, this modern and stunning luxury villa is the epitome of the Malibu lifestyle.',
        price: 7850,
        category: 'Design',
        type: 'Contemporary beachhouse',
        guests: 10,
        bedrooms: 5,
        beds: 5,
        baths: 4.5
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
