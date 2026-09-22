/* =========================================================
   MOODIFY 2.0
   Multilingual Mood-Based Music Recommendation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
       ===================================================== */

    const LANGUAGES = [
        "Kannada",
        "Hindi",
        "Tamil",
        "English"
    ];

    const MOODS = [
        "Happy",
        "Sad",
        "Romantic",
        "Energetic",
        "Calm",
        "Motivational",
        "Chill"
    ];

    const SONGS_PER_MOOD = 50;

    let currentLanguage = "English";
    let currentMood = "Happy";

    let favorites =
        JSON.parse(localStorage.getItem("moodifyFavorites") || "[]");


    /* =====================================================
       SONG DATABASE
       ===================================================== */

    const songDatabase = {

        Kannada: {

            Happy: [
                "Belageddu - Kirik Party",
                "Anisuthide Yaako Indu - Mungaru Male",
                "Jotheyali Jothe Jotheyali - Geetha",
                "Ninnindale - Milana",
                "Minchagi Neenu Baralu - Gaalipata",
                "Kannu Hodiyaka Monne Kalitaani",
                "Chuttu Chuttu - Raambo 2",
                "Yenammi Yenammi - Ayogya",
                "Singara Siriye - Kantara",
                "Sojugada Sooju Mallige",
                "Karagida Baaninalli - Gaalipata",
                "Neenade Naa - I Love You",
                "Ninnannu Nodida Mele",
                "Kushiyagide - KGF",
                "Hey Who Are You - Simple Agi Ondh Love Story",
                "Love You Chinna - Love Mocktail",
                "Usire Usire - Huccha",
                "Ondu Malebillu - Chakravarthy",
                "Nee Sigovaregu - Bhajarangi 2",
                "Kareyole - Rangitaranga",
                "No Problem - Kirik Party",
                "Thund Haikla Sahavasa",
                "Appu Dance",
                "College Days - Kannada",
                "Pakka Local - Kannada",
                "Halli Haida Pyatege Banda",
                "Nodu Nodu Kannalle",
                "Chuttu Chuttu Remix",
                "Tagaru Banthu Tagaru",
                "Raambo Raambo",
                "Duniya Duniya",
                "Kariya I Love You",
                "Hrudayake Hedarike",
                "Ee Sanje Yakagide",
                "Kaanada Kadalige",
                "Ninna Danigaagi",
                "Arare Shuruvayitu Hege",
                "Kushiyagide",
                "Hrudaya Hadide",
                "Nee Enbathenna",
                "Jeeva Hoovagide",
                "Suvvali",
                "Ee Preethi Yake Bhoomi Melide",
                "Naguva Nayana",
                "Preetham Gubbi",
                "Jeeva Hoovagide Remix",
                "Suntaragaali",
                "Dheera Dheera",
                "Rocky Bhai Theme",
                "Kantara Celebration"
            ],

            Sad: [
                "Marali Manasaagide",
                "Anisuthide Yaako Indu",
                "Ninnindale",
                "Nooru Janmaku",
                "Nanna Preethiya Hudugi",
                "Ee Sanje Yakagide",
                "Nee Enbathenna",
                "Hrudayake Hedarike",
                "Minchagi Neenu Baralu",
                "Jotheyali Jothe Jotheyali",
                "Naguva Nayana",
                "Olave Mandara",
                "Ninnannu Nodida Mele",
                "Kariya I Love You",
                "Usire Usire",
                "Nanna Neenu",
                "Hrudaya Hadide",
                "Neenade Naa",
                "Kaanada Kadalige",
                "Ninna Danigaagi",
                "Preethi Endarenu",
                "Ee Preethi Yake Bhoomi Melide",
                "Onde Usirante",
                "Kanaso Idu",
                "Sariyaagi Nenapide",
                "Nanna Cheluve",
                "Kolle Nanna",
                "Mugulu Nage",
                "Ninade Nenapu",
                "Kanasina Rani",
                "Nanna Usire",
                "Yaare Neenu Cheluve",
                "Ondu Malebillu",
                "Nodivalandava",
                "Nee Sigovaregu",
                "Kareyole",
                "Arare Shuruvayitu Hege",
                "Saagutha Doora Doora",
                "Ninna Snehake",
                "Preethiya Hesare Neenu",
                "Usire Usire Acoustic",
                "Ninnindale Acoustic",
                "Anisuthide Acoustic",
                "Hrudayake Hedarike",
                "Marali Manasaagide",
                "Naguva Nayana",
                "Nooru Janmaku",
                "Olave Mandara",
                "Nanna Preethiya Hudugi",
                "Kanaso Idu"
            ],

            Romantic: [
                "Anisuthide Yaako Indu",
                "Ninnindale",
                "Minchagi Neenu Baralu",
                "Jotheyali Jothe Jotheyali",
                "Ondu Malebillu",
                "Nooru Janmaku",
                "Ninnannu Nodida Mele",
                "Neenade Naa",
                "Kareyole",
                "Nee Sigovaregu",
                "Hrudayake Hedarike",
                "Ninna Danigaagi",
                "Naguva Nayana",
                "Ee Preethi Yake Bhoomi Melide",
                "Usire Usire",
                "Olave Mandara",
                "Mugulu Nage",
                "Ninna Snehake",
                "Nanna Cheluve",
                "Preethiya Hesare Neenu",
                "Sariyaagi Nenapide",
                "Kanaso Idu",
                "Kanasina Rani",
                "Nanna Usire",
                "Yaare Neenu Cheluve",
                "Ninna Preethiya",
                "Nee Enbathenna",
                "Arare Shuruvayitu Hege",
                "Ninna Nodalentho",
                "Ninna Hrudaya",
                "Preethi Endarenu",
                "Jeeva Hoovagide",
                "Suvvali",
                "Ninna Danigaagi Acoustic",
                "Anisuthide Acoustic",
                "Ninnindale Acoustic",
                "Nooru Janmaku Acoustic",
                "Ondu Malebillu Acoustic",
                "Jotheyali Jothe Jotheyali",
                "Minchagi Neenu Baralu",
                "Olave Mandara",
                "Kaanada Kadalige",
                "Hrudaya Hadide",
                "Nee Sigovaregu",
                "Ninna Snehake",
                "Nanna Neenu",
                "Neenade Naa",
                "Kareyole",
                "Mugulu Nage",
                "Mungaru Male Love Songs"
            ],

            Energetic: [
                "Tagaru Banthu Tagaru",
                "Chuttu Chuttu",
                "Yenammi Yenammi",
                "Dheera Dheera",
                "Salaam Rocky Bhai",
                "Karuvaada",
                "Raambo Raambo",
                "Pakka Local",
                "No Problem",
                "Thund Haikla Sahavasa",
                "Kantara Theme",
                "Rocky Bhai Theme",
                "Garbadhi",
                "Karabuu",
                "Koli Koli",
                "Jeeva Hoovagide Dance",
                "College Days",
                "Halli Haida",
                "Chuttu Chuttu Remix",
                "Tagaru Theme",
                "KGF Theme",
                "Kantara Celebration",
                "Raambo 2 Title Track",
                "Power Song",
                "Appu Dance",
                "Puneeth Rajkumar Hits",
                "Duniya Duniya",
                "Kariya I Love You",
                "Suntaragaali",
                "Mass Kannada Hits",
                "Kannada Party Mix",
                "Dance Kannada Hits",
                "College Party Kannada",
                "DJ Kannada Hits",
                "Kannada Workout Mix",
                "Rock Kannada",
                "High Energy Kannada",
                "Mass Hero Kannada",
                "Action Kannada",
                "Festival Kannada",
                "Celebration Kannada",
                "Weekend Kannada",
                "Dance Floor Kannada",
                "Beat Kannada",
                "Power Kannada",
                "Youth Kannada",
                "Party Time Kannada",
                "Superstar Kannada",
                "Kannada EDM Mix",
                "Kannada Trending Mix"
            ],

            Calm: [
                "Anisuthide Yaako Indu",
                "Naguva Nayana",
                "Minchagi Neenu Baralu",
                "Jotheyali Jothe Jotheyali",
                "Kaanada Kadalige",
                "Olave Mandara",
                "Mugulu Nage",
                "Ninnindale",
                "Nooru Janmaku",
                "Ondu Malebillu",
                "Ninna Danigaagi",
                "Neenade Naa",
                "Kareyole",
                "Nee Sigovaregu",
                "Hrudayake Hedarike",
                "Sariyaagi Nenapide",
                "Kanaso Idu",
                "Nanna Cheluve",
                "Ninna Snehake",
                "Usire Usire",
                "Jeeva Hoovagide",
                "Suvvali",
                "Ninna Nodalentho",
                "Ninna Hrudaya",
                "Preethiya Hesare Neenu",
                "Nanna Neenu",
                "Naguva Nayana Acoustic",
                "Anisuthide Acoustic",
                "Ninnindale Acoustic",
                "Minchagi Acoustic",
                "Mungaru Male Instrumental",
                "Kannada Rain Mix",
                "Kannada Acoustic Mix",
                "Kannada Melody",
                "Kannada Soft Songs",
                "Kannada Relaxing Songs",
                "Kannada Peaceful Music",
                "Kannada Evening Songs",
                "Kannada Night Songs",
                "Kannada Unplugged",
                "Kannada LoFi",
                "Kannada Chill Instrumental",
                "Kannada Piano Mix",
                "Kannada Guitar Mix",
                "Kannada Meditation",
                "Kannada Nature Mix",
                "Kannada Slow Songs",
                "Kannada Soft Melody",
                "Kannada Relax Mix",
                "Kannada Calm Playlist"
            ],

            Motivational: [
                "Dheera Dheera",
                "Salaam Rocky Bhai",
                "Karuvaada",
                "Tagaru Banthu Tagaru",
                "Kantara Theme",
                "KGF Theme",
                "Rocky Bhai Theme",
                "Power Song",
                "Yuva Power",
                "Jeeva Hoovagide",
                "Huttidare Kannada Nadalli",
                "Barisu Kannada Dindimava",
                "Kannada Anthem",
                "Hogona Hogona",
                "Belageddu",
                "No Problem",
                "Thund Haikla Sahavasa",
                "Pakka Local",
                "Koli Koli",
                "Garbadhi",
                "Karabuu",
                "Kantara Celebration",
                "Rocky Theme",
                "Heroic Kannada",
                "Kannada Victory",
                "Kannada Inspiration",
                "Kannada Success",
                "Kannada Power Mix",
                "Kannada Motivation Mix",
                "Kannada Workout Mix",
                "Kannada Gym Motivation",
                "Kannada Study Motivation",
                "Kannada Focus Music",
                "Kannada Morning Motivation",
                "Kannada Positive Energy",
                "Kannada Confidence",
                "Kannada Hustle",
                "Kannada Grind",
                "Kannada Goal Music",
                "Kannada Winning Songs",
                "Kannada Champion",
                "Kannada Rise Up",
                "Kannada Never Give Up",
                "Kannada Strong",
                "Kannada Warrior",
                "Kannada Fire",
                "Kannada Determination",
                "Kannada Success Mix",
                "Kannada Motivation Playlist",
                "Kannada Power Playlist"
            ],

            Chill: [
                "Mugulu Nage",
                "Ninnindale",
                "Anisuthide Yaako Indu",
                "Naguva Nayana",
                "Olave Mandara",
                "Kareyole",
                "Ondu Malebillu",
                "Minchagi Neenu Baralu",
                "Jotheyali Jothe Jotheyali",
                "Neenade Naa",
                "Ninna Danigaagi",
                "Nee Sigovaregu",
                "Hrudayake Hedarike",
                "Kaanada Kadalige",
                "Suvvali",
                "Jeeva Hoovagide",
                "Ninna Snehake",
                "Nanna Cheluve",
                "Kanaso Idu",
                "Sariyaagi Nenapide",
                "Ninna Nodalentho",
                "Ninna Hrudaya",
                "Preethiya Hesare Neenu",
                "Nanna Neenu",
                "Mugulu Nage Acoustic",
                "Ninnindale Acoustic",
                "Anisuthide Acoustic",
                "Kannada LoFi",
                "Kannada Chill Mix",
                "Kannada Sunset Mix",
                "Kannada Night Drive",
                "Kannada Late Night",
                "Kannada Cafe Mix",
                "Kannada Rain Mix",
                "Kannada LoFi Beats",
                "Kannada Chill Beats",
                "Kannada Soft Mix",
                "Kannada Evening Mix",
                "Kannada Weekend Mix",
                "Kannada Relax Mix",
                "Kannada Slow Mix",
                "Kannada Acoustic",
                "Kannada Unplugged",
                "Kannada Melody Mix",
                "Kannada Peace Mix",
                "Kannada Vibes",
                "Kannada Chill Vibes",
                "Kannada Night Vibes",
                "Kannada Relax Vibes",
                "Kannada Chill Playlist"
            ]
        },


        Hindi: {

            Happy: [
                "Ilahi - Yeh Jawaani Hai Deewani",
                "Badtameez Dil",
                "Gallan Goodiyaan",
                "London Thumakda",
                "Kar Gayi Chull",
                "Ullu Ka Pattha",
                "What Jhumka",
                "Tauba Tauba",
                "Aankh Marey",
                "Abhi Toh Party Shuru Hui Hai",
                "Bom Diggy Diggy",
                "Morni Banke",
                "Cutiepie",
                "Nachde Ne Saare",
                "The Breakup Song",
                "Kala Chashma",
                "Sweety Tera Drama",
                "High Rated Gabru",
                "Proper Patola",
                "Dil Chori",
                "Makhna",
                "Ghungroo",
                "Nashe Si Chadh Gayi",
                "Ude Dil Befikre",
                "Ainvayi Ainvayi",
                "Punjabi Wedding Song",
                "Saturday Saturday",
                "Let's Nacho",
                "Gal Mitthi Mitthi",
                "Desi Girl",
                "Dilliwali Girlfriend",
                "Balam Pichkari",
                "Subha Hone Na De",
                "Sooraj Dooba Hain",
                "Aaj Ki Party",
                "Sweety Tera Drama",
                "Tamma Tamma Again",
                "Kar Gayi Chull Remix",
                "Gallan Goodiyaan Remix",
                "London Thumakda Remix",
                "Happy Hindi Mix",
                "Bollywood Party Hits",
                "Hindi Celebration",
                "Dance With Me Hindi",
                "Bollywood Happy Songs",
                "Hindi Feel Good",
                "Weekend Bollywood",
                "Party Bollywood",
                "Hindi Fun Songs",
                "Bollywood Smiles"
            ],

            Sad: [
                "Channa Mereya",
                "Agar Tum Saath Ho",
                "Tujhe Kitna Chahne Lage",
                "Hamari Adhuri Kahani",
                "Kabira",
                "Phir Le Aya Dil",
                "Ae Dil Hai Mushkil",
                "Tera Yaar Hoon Main",
                "Khairiyat",
                "Bekhayali",
                "Kaise Hua",
                "Tadap Tadap",
                "Sach Keh Raha Hai Deewana",
                "Mann Bharryaa",
                "Bhula Dena",
                "Jo Bheji Thi Dua",
                "Humnava",
                "Tum Hi Ho",
                "Humdard",
                "Ishq Mubarak",
                "Main Rahoon Ya Na Rahoon",
                "Tu Jaane Na",
                "Tose Naina",
                "Alvida",
                "Jiyein Kyun",
                "Duaa",
                "Zaroori Tha",
                "Hasi",
                "Tera Ban Jaunga",
                "Kaun Tujhe",
                "Lo Safar",
                "Phir Kabhi",
                "Aayat",
                "Aahista",
                "Mitti Di Khushboo",
                "Tujhse Naraz Nahi Zindagi",
                "Aane Wala Pal",
                "Zindagi Kaisi Hai Paheli",
                "Woh Lamhe",
                "Aankhon Mein Teri",
                "Iktara",
                "Tu Bin Bataye",
                "O Saathi",
                "Tere Bina",
                "Kahin Toh Hogi Woh",
                "Pee Loon",
                "Tum Se Hi",
                "Dooriyan",
                "Sad Bollywood Mix",
                "Hindi Heartbreak Mix"
            ],

            Romantic: [
                "Tum Hi Ho",
                "Kesariya",
                "Tum Se Hi",
                "Pee Loon",
                "Aankhon Mein Teri",
                "Tera Ban Jaunga",
                "Apna Bana Le",
                "Ranjha",
                "Raabta",
                "Hawayein",
                "Janam Janam",
                "Agar Tum Saath Ho",
                "Khairiyat",
                "Ve Kamleya",
                "Heeriye",
                "O Maahi",
                "Satranga",
                "Tujh Mein Rab Dikhta Hai",
                "Pehli Dafa",
                "Kaise Mujhe",
                "Iktara",
                "Nazm Nazm",
                "Bolna",
                "Samjhawan",
                "Jeene Laga Hoon",
                "Tera Hone Laga Hoon",
                "Humko Deewana Kar Gaye",
                "Mast Magan",
                "Muskurane",
                "Hasi",
                "Kaun Tujhe",
                "Hawayein Acoustic",
                "Tum Hi Ho Acoustic",
                "Kesariya Acoustic",
                "Raabta Acoustic",
                "Ranjha Acoustic",
                "Apna Bana Le Acoustic",
                "Hindi Love Mashup",
                "Bollywood Love Songs",
                "Romantic Hindi Mix",
                "Hindi Couple Songs",
                "Love Hits Bollywood",
                "Hindi Love Vibes",
                "Romantic Evening Hindi",
                "Hindi Date Night",
                "Bollywood Romance",
                "Hindi Love Playlist",
                "Soft Hindi Love",
                "Hindi Romantic Classics",
                "Ultimate Hindi Love Mix"
            ],

            Energetic: [
                "Zinda - Bhaag Milkha Bhaag",
                "Malhari",
                "Jai Jai Shivshankar",
                "Ghungroo",
                "Jhoome Jo Pathaan",
                "Zinda Banda",
                "Sher Khul Gaye",
                "Bang Bang",
                "Dhoom Again",
                "Dhoom Machale",
                "Swag Se Swagat",
                "Kar Har Maidaan Fateh",
                "Apna Time Aayega",
                "Brothers Anthem",
                "Sultan Title Track",
                "Chak De India",
                "Lakshya Title Track",
                "Aarambh Hai Prachand",
                "Sadda Haq",
                "Bhaag DK Bose",
                "Dhan Te Nan",
                "Ainvayi Ainvayi",
                "Balam Pichkari",
                "Badtameez Dil",
                "Kala Chashma",
                "Gallan Goodiyaan",
                "What Jhumka",
                "Tauba Tauba",
                "High Rated Gabru",
                "Makhna",
                "Nashe Si Chadh Gayi",
                "Ude Dil Befikre",
                "Party All Night",
                "Abhi Toh Party",
                "Kar Gayi Chull",
                "Let's Nacho",
                "Bom Diggy",
                "Hindi Workout Mix",
                "Bollywood Gym Mix",
                "Hindi Party Mix",
                "Hindi Dance Hits",
                "Bollywood Energy",
                "Hindi Power Songs",
                "Hindi Workout Songs",
                "Hindi Motivation Beats",
                "Bollywood Fire",
                "Hindi High Energy",
                "Dance Bollywood",
                "Party Hindi",
                "Ultimate Hindi Energy"
            ],

            Calm: [
                "Iktara",
                "Kabira",
                "Aahista",
                "Kho Gaye Hum Kahan",
                "Tu Bin Bataye",
                "Phir Le Aya Dil",
                "Saibo",
                "Shaam",
                "Khaabon Ke Parinday",
                "Aaj Jaane Ki Zid Na Karo",
                "O Rangrez",
                "Manmarziyan",
                "Nazm Nazm",
                "Hawayein",
                "Pee Loon",
                "Tum Se Hi",
                "Kun Faya Kun",
                "Arziyan",
                "Maahi Ve",
                "Aayat",
                "Lae Dooba",
                "Tere Bina",
                "Kahaan Hoon Main",
                "Dariya",
                "Alag Aasmaan",
                "Kasoor",
                "Gul",
                "Baarishein",
                "cold/mess",
                "Riha",
                "Choo Lo",
                "Mishri",
                "Kho Gaye Hum Kahan Acoustic",
                "Iktara Acoustic",
                "Kabira Acoustic",
                "Hawayein Acoustic",
                "Nazm Nazm Acoustic",
                "Hindi LoFi",
                "Hindi Rain Mix",
                "Hindi Night Mix",
                "Hindi Coffee Mix",
                "Hindi Relaxing Songs",
                "Hindi Soft Songs",
                "Hindi Acoustic",
                "Hindi Unplugged",
                "Hindi Piano",
                "Hindi Chill",
                "Hindi Peaceful",
                "Hindi Evening",
                "Hindi Calm Playlist"
            ],

            Motivational: [
                "Zinda",
                "Apna Time Aayega",
                "Kar Har Maidaan Fateh",
                "Chak De India",
                "Lakshya",
                "Sultan Title Track",
                "Brothers Anthem",
                "Aarambh Hai Prachand",
                "Sadda Haq",
                "Dangal Title Track",
                "Dhaakad",
                "Parwah Nahi",
                "Besabriyaan",
                "Aashayein",
                "Ruk Ja O Dil Deewane",
                "Ziddi Dil",
                "Chak Lein De",
                "Aazadiyan",
                "Patakha Guddi",
                "Badal Pe Paon Hain",
                "Ilahi",
                "Kandhon Se Milte Hain Kandhe",
                "Lakshya",
                "Zinda Banda",
                "Jai Jai Shivshankar",
                "Malhari",
                "Sher Khul Gaye",
                "Jhoome Jo Pathaan",
                "Zinda Remix",
                "Hindi Workout Motivation",
                "Hindi Gym Motivation",
                "Hindi Study Motivation",
                "Hindi Focus Music",
                "Hindi Success Songs",
                "Hindi Hustle",
                "Hindi Grind",
                "Hindi Victory",
                "Hindi Champion",
                "Hindi Warrior",
                "Hindi Power Mix",
                "Hindi Motivation Mix",
                "Bollywood Motivation",
                "Hindi Goal Music",
                "Hindi Never Give Up",
                "Hindi Rise Up",
                "Hindi Strong",
                "Hindi Confidence",
                "Hindi Winning Songs",
                "Ultimate Hindi Motivation"
            ],

            Chill: [
                "Kho Gaye Hum Kahan",
                "Iktara",
                "Kasoor",
                "Gul",
                "Baarishein",
                "Alag Aasmaan",
                "Riha",
                "Choo Lo",
                "Mishri",
                "Shaam",
                "Saibo",
                "Aahista",
                "Tu Bin Bataye",
                "Hawayein",
                "Pee Loon",
                "Tum Se Hi",
                "Kabira",
                "Nazm Nazm",
                "O Maahi",
                "Heeriye",
                "Apna Bana Le",
                "Ranjha",
                "Raabta",
                "Agar Tum Saath Ho",
                "Khaabon Ke Parinday",
                "Dariya",
                "cold/mess",
                "Baarishein Acoustic",
                "Kasoor Acoustic",
                "Gul Acoustic",
                "Hindi LoFi",
                "Hindi Chill Beats",
                "Hindi Sunset Mix",
                "Hindi Night Drive",
                "Hindi Late Night",
                "Hindi Cafe Mix",
                "Hindi Rain Mix",
                "Hindi Soft Mix",
                "Hindi Acoustic Mix",
                "Hindi Relax Mix",
                "Hindi Vibes",
                "Hindi Chill Vibes",
                "Hindi Night Vibes",
                "Hindi Weekend Mix",
                "Hindi Slow Mix",
                "Hindi Melody",
                "Hindi Peace Mix",
                "Hindi Lounge",
                "Hindi Chill Playlist",
                "Ultimate Hindi Chill"
            ]
        },


        Tamil: {

            Happy: [
                "Arabic Kuthu",
                "Vaathi Coming",
                "Ranjithame",
                "Dippam Dappam",
                "Chellamma",
                "Jimikki Ponnu",
                "Private Party",
                "Megham Karukatha",
                "Rowdy Baby",
                "Enjoy Enjaami",
                "Kutti Story",
                "Why This Kolaveri Di",
                "Aaluma Doluma",
                "Sodakku",
                "Danga Maari Oodhari",
                "Don'u Don'u",
                "Selfie Pulla",
                "Mersal Arasan",
                "Petta Paraak",
                "Marana Mass",
                "Vaathi Raid",
                "Jolly O Gymkhana",
                "Hukum",
                "Kaavaalaa",
                "Pathala Pathala",
                "Naa Ready",
                "Badass",
                "Once Upon a Time",
                "Chellamma Remix",
                "Arabic Kuthu Remix",
                "Tamil Party Hits",
                "Tamil Happy Mix",
                "Kollywood Celebration",
                "Tamil Dance Hits",
                "Tamil Fun Songs",
                "Tamil Trending Mix",
                "Tamil Weekend Mix",
                "Tamil College Hits",
                "Tamil Youth Songs",
                "Tamil Vibe Mix",
                "Tamil Celebration Mix",
                "Tamil Mass Mix",
                "Tamil Beat Songs",
                "Tamil Party Playlist",
                "Tamil Happy Playlist",
                "Tamil Feel Good",
                "Tamil Dance Party",
                "Tamil Fun Playlist",
                "Tamil Good Mood",
                "Ultimate Tamil Happy"
            ],

            Sad: [
                "Kanave Unai",
                "Maruvaarthai",
                "Vaseegara",
                "New York Nagaram",
                "Munbe Vaa",
                "Po Nee Po",
                "Ennodu Nee Irundhaal",
                "Thalli Pogathey",
                "Nenjukkul Peidhidum",
                "Unakkenna Venum Sollu",
                "Aararo",
                "Vizhigalil Oru Vaanavil",
                "Pachai Kiligal",
                "Yaar Indha Saalai Oram",
                "Oru Naalil",
                "Kadhal Sadugudu",
                "Suttrum Vizhi",
                "Naan Pizhai",
                "The Life of Ram",
                "Kaathalae Kaathalae",
                "Vennilave Vennilave",
                "Ennai Konjum",
                "Poongatrile",
                "Snehithudaa",
                "Anbil Avan",
                "Unakkenna",
                "Nee Kavithaigala",
                "Yaaro Ivan",
                "Un Vizhigalil",
                "Aagayam Theepidithal",
                "Tamil Sad Mix",
                "Tamil Heartbreak",
                "Tamil Emotional Songs",
                "Tamil Sad Playlist",
                "Tamil Melody Sad",
                "Tamil Love Sad",
                "Tamil Pain Songs",
                "Tamil Lonely Songs",
                "Tamil Night Sad",
                "Tamil Rain Sad",
                "Tamil Acoustic Sad",
                "Tamil Broken Heart",
                "Tamil Deep Songs",
                "Tamil Emotional Mix",
                "Tamil Slow Songs",
                "Tamil Sad Vibes",
                "Tamil Memories",
                "Tamil Separation Songs",
                "Tamil Sad Classics",
                "Ultimate Tamil Sad"
            ],

            Romantic: [
                "Munbe Vaa",
                "Vaseegara",
                "Nenjukkul Peidhidum",
                "Maruvaarthai",
                "Thalli Pogathey",
                "Kaathalae Kaathalae",
                "Anbil Avan",
                "Naan Pizhai",
                "Ennodu Nee Irundhaal",
                "Kannana Kanney",
                "Megham Karukatha",
                "Innum Konjam Naeram",
                "Hosanna",
                "Pachai Kiligal",
                "New York Nagaram",
                "Unakkenna Venum Sollu",
                "Yaaro Ivan",
                "Nee Kavithaigala",
                "Un Vizhigalil",
                "Aararo",
                "Kadhal Sadugudu",
                "Suttrum Vizhi",
                "Vennilave Vennilave",
                "Poongatrile",
                "Ennai Konjum",
                "Unakkenna",
                "Oru Devathai",
                "Kangal Irandal",
                "Pookkal Pookkum",
                "Kadhaippoma",
                "Life of Ram",
                "Tamil Love Acoustic",
                "Tamil Romantic Mix",
                "Tamil Love Songs",
                "Tamil Couple Songs",
                "Tamil Date Night",
                "Tamil Love Vibes",
                "Tamil Romantic Evening",
                "Tamil Melody Love",
                "Tamil Soft Love",
                "Tamil Love Playlist",
                "Tamil Romantic Hits",
                "Tamil Love Classics",
                "Tamil Love Unplugged",
                "Tamil Love LoFi",
                "Tamil Romantic Acoustic",
                "Tamil Love Mix",
                "Tamil Heart Songs",
                "Ultimate Tamil Romance"
            ],

            Energetic: [
                "Vaathi Coming",
                "Arabic Kuthu",
                "Hukum",
                "Naa Ready",
                "Badass",
                "Kaavaalaa",
                "Jolly O Gymkhana",
                "Ranjithame",
                "Aaluma Doluma",
                "Marana Mass",
                "Petta Paraak",
                "Vaathi Raid",
                "Pathala Pathala",
                "Dippam Dappam",
                "Jimikki Ponnu",
                "Sodakku",
                "Danga Maari Oodhari",
                "Mersal Arasan",
                "Selfie Pulla",
                "Rowdy Baby",
                "Private Party",
                "Chellamma",
                "Don'u Don'u",
                "Kutti Story",
                "Tamil Mass Mix",
                "Tamil Workout Mix",
                "Tamil Gym Songs",
                "Tamil Party Mix",
                "Tamil Dance Mix",
                "Kollywood Energy",
                "Tamil High Energy",
                "Tamil Power Songs",
                "Tamil Youth Mix",
                "Tamil College Party",
                "Tamil Beat Mix",
                "Tamil Fire",
                "Tamil Mass Hits",
                "Tamil Action Songs",
                "Tamil Dance Hits",
                "Tamil Trending Beats",
                "Tamil Workout Motivation",
                "Tamil Party Playlist",
                "Tamil DJ Mix",
                "Tamil EDM",
                "Tamil Festival Mix",
                "Tamil Celebration",
                "Tamil Energy Playlist",
                "Tamil Power Mix",
                "Tamil Hype Songs",
                "Ultimate Tamil Energy"
            ],

            Calm: [
                "Munbe Vaa",
                "Vaseegara",
                "Nenjukkul Peidhidum",
                "Maruvaarthai",
                "Kaathalae Kaathalae",
                "Life of Ram",
                "Thalli Pogathey",
                "Pookkal Pookkum",
                "Kadhaippoma",
                "Anbil Avan",
                "Kannana Kanney",
                "Aararo",
                "Poongatrile",
                "Vennilave Vennilave",
                "New York Nagaram",
                "Ennai Konjum",
                "Un Vizhigalil",
                "Nee Kavithaigala",
                "Yaaro Ivan",
                "Hosanna",
                "Pachai Kiligal",
                "Tamil Soft Songs",
                "Tamil Melody",
                "Tamil Acoustic",
                "Tamil Unplugged",
                "Tamil LoFi",
                "Tamil Relaxing",
                "Tamil Rain Mix",
                "Tamil Evening",
                "Tamil Night",
                "Tamil Cafe",
                "Tamil Piano",
                "Tamil Guitar",
                "Tamil Chill",
                "Tamil Peaceful",
                "Tamil Meditation",
                "Tamil Nature",
                "Tamil Slow Mix",
                "Tamil Soft Melody",
                "Tamil Relax Mix",
                "Tamil Calm Vibes",
                "Tamil Peace Mix",
                "Tamil Evening Mix",
                "Tamil Night Mix",
                "Tamil Acoustic Mix",
                "Tamil LoFi Mix",
                "Tamil Lounge",
                "Tamil Relax Playlist",
                "Tamil Calm Playlist",
                "Ultimate Tamil Calm"
            ],

            Motivational: [
                "Neruppu Kumar",
                "Vaathi Coming",
                "Hukum",
                "Naa Ready",
                "Badass",
                "Pathala Pathala",
                "Vaathi Raid",
                "Marana Mass",
                "Petta Paraak",
                "Aaluma Doluma",
                "Danga Maari Oodhari",
                "Mersal Arasan",
                "Kutti Story",
                "Surviva",
                "Don't Worry Da",
                "Tamilanda",
                "Semma Mass",
                "Tamil Mass Theme",
                "Tamil Hero Theme",
                "Tamil Victory",
                "Tamil Power",
                "Tamil Motivation",
                "Tamil Workout",
                "Tamil Gym Motivation",
                "Tamil Study Motivation",
                "Tamil Focus",
                "Tamil Success",
                "Tamil Hustle",
                "Tamil Grind",
                "Tamil Warrior",
                "Tamil Champion",
                "Tamil Rise Up",
                "Tamil Never Give Up",
                "Tamil Strong",
                "Tamil Fire",
                "Tamil Confidence",
                "Tamil Winning",
                "Tamil Goal Music",
                "Tamil Dream Big",
                "Tamil Inspiration",
                "Tamil Power Mix",
                "Tamil Motivation Mix",
                "Tamil Success Mix",
                "Tamil Workout Mix",
                "Tamil Gym Mix",
                "Tamil Focus Mix",
                "Tamil Study Mix",
                "Tamil Champion Mix",
                "Ultimate Tamil Motivation"
            ],

            Chill: [
                "The Life of Ram",
                "Maruvaarthai",
                "Vaseegara",
                "Munbe Vaa",
                "Nenjukkul Peidhidum",
                "Kaathalae Kaathalae",
                "Kadhaippoma",
                "Pookkal Pookkum",
                "Nee Kavithaigala",
                "Un Vizhigalil",
                "Anbil Avan",
                "Hosanna",
                "Life of Ram Acoustic",
                "Maruvaarthai Acoustic",
                "Vaseegara Acoustic",
                "Munbe Vaa Acoustic",
                "Tamil LoFi",
                "Tamil Chill Beats",
                "Tamil Sunset",
                "Tamil Night Drive",
                "Tamil Late Night",
                "Tamil Cafe",
                "Tamil Rain",
                "Tamil Soft Mix",
                "Tamil Acoustic Mix",
                "Tamil Relax Mix",
                "Tamil Chill Mix",
                "Tamil Vibes",
                "Tamil Chill Vibes",
                "Tamil Night Vibes",
                "Tamil Weekend",
                "Tamil Lounge",
                "Tamil Melody Mix",
                "Tamil Peace Mix",
                "Tamil Slow Mix",
                "Tamil LoFi Beats",
                "Tamil Chill Playlist",
                "Tamil Relax Playlist",
                "Tamil Evening Mix",
                "Tamil Night Mix",
                "Tamil Soft Songs",
                "Tamil Romantic Chill",
                "Tamil Coffee Mix",
                "Tamil Road Trip Chill",
                "Tamil Sunset Mix",
                "Tamil Rainy Evening",
                "Tamil Peaceful Mix",
                "Tamil Acoustic Chill",
                "Tamil Late Night Mix",
                "Ultimate Tamil Chill"
            ]
        },


        English: {

            Happy: [
                "Happy - Pharrell Williams",
                "Uptown Funk",
                "Can't Stop the Feeling",
                "Good as Hell",
                "Levitating",
                "Shake It Off",
                "Dance Monkey",
                "Watermelon Sugar",
                "As It Was",
                "Blinding Lights",
                "I Gotta Feeling",
                "Don't Start Now",
                "Houdini",
                "Cruel Summer",
                "Flowers",
                "Espresso",
                "Calm Down",
                "One Kiss",
                "Attention",
                "Stay",
                "Heat Waves",
                "Peaches",
                "Senorita",
                "Shape of You",
                "Perfect",
                "Counting Stars",
                "Sugar",
                "Roar",
                "Firework",
                "On Top of the World",
                "Best Day of My Life",
                "Walking on Sunshine",
                "Good Time",
                "Dynamite",
                "Butter",
                "Permission to Dance",
                "Love Me Like You Do",
                "Cheap Thrills",
                "Havana",
                "Dance The Night",
                "Sao Paulo",
                "Friday",
                "Saturday Night",
                "Good Mood Mix",
                "Happy Pop Hits",
                "Feel Good Songs",
                "Weekend Hits",
                "Party Pop",
                "Happy Vibes",
                "Ultimate Happy"
            ],

            Sad: [
                "Someone You Loved",
                "Lovely",
                "Let Her Go",
                "All I Want",
                "The Night We Met",
                "Another Love",
                "When I Was Your Man",
                "Arcade",
                "Happier",
                "Before You Go",
                "Dancing With Your Ghost",
                "idontwannabeyouanymore",
                "Lovely",
                "Fix You",
                "Let Me Down Slowly",
                "Photograph",
                "Perfect",
                "Say You Won't Let Go",
                "Falling",
                "Drivers License",
                "traitor",
                "deja vu",
                "Someone Like You",
                "Easy On Me",
                "When We Were Young",
                "Stay With Me",
                "All of Me",
                "Too Good at Goodbyes",
                "Memories",
                "Happier Than Ever",
                "Arcade Acoustic",
                "Someone You Loved Acoustic",
                "Lovely Acoustic",
                "Another Love Acoustic",
                "The Night We Met Acoustic",
                "Sad Pop Mix",
                "Heartbreak Songs",
                "Emotional Pop",
                "Sad Night Mix",
                "Rainy Day Songs",
                "Lonely Songs",
                "Broken Heart Mix",
                "Deep Feelings",
                "Late Night Sad",
                "Emotional Hits",
                "Sad Vibes",
                "Heartbreak Playlist",
                "Slow Pop",
                "Sad Acoustic",
                "Ultimate Sad"
            ],

            Romantic: [
                "Perfect",
                "Until I Found You",
                "All of Me",
                "A Thousand Years",
                "Lover",
                "Love Story",
                "Photograph",
                "Thinking Out Loud",
                "Just the Way You Are",
                "Die With A Smile",
                "Adore You",
                "Say You Won't Let Go",
                "I Like Me Better",
                "Those Eyes",
                "Dandelions",
                "Yellow",
                "Kiss Me",
                "Can I Call You Tonight?",
                "Until I Found You",
                "Rewrite the Stars",
                "Shallow",
                "Love Me Like You Do",
                "Something Just Like This",
                "Closer",
                "One Kiss",
                "Perfect Duet",
                "Lover Acoustic",
                "Perfect Acoustic",
                "A Thousand Years Acoustic",
                "Until I Found You Acoustic",
                "Romantic Pop",
                "Love Songs",
                "Couple Songs",
                "Date Night Mix",
                "Romantic Evening",
                "Love Vibes",
                "Soft Love Songs",
                "English Love Playlist",
                "Romantic Classics",
                "Love Pop Hits",
                "Heart Songs",
                "Sweet Love Mix",
                "Couple Vibes",
                "Romantic Acoustic",
                "Love LoFi",
                "Chill Love",
                "Late Night Love",
                "Love Ballads",
                "Romantic Playlist",
                "Ultimate Romance"
            ],

            Energetic: [
                "Believer",
                "Thunder",
                "Enemy",
                "Centuries",
                "Immortals",
                "Natural",
                "Whatever It Takes",
                "Warriors",
                "Eye of the Tiger",
                "The Nights",
                "Wake Me Up",
                "Animals",
                "Titanium",
                "Don't You Worry Child",
                "Levels",
                "Turn Down for What",
                "Uptown Funk",
                "Can't Hold Us",
                "Lose Yourself",
                "Remember the Name",
                "Industry Baby",
                "God's Plan",
                "HUMBLE.",
                "Stronger",
                "Till I Collapse",
                "Blinding Lights",
                "As It Was",
                "Houdini",
                "Levitating",
                "Don't Start Now",
                "One Kiss",
                "Pepas",
                "The Business",
                "Head & Heart",
                "On My Way",
                "Animals",
                "Party Rock Anthem",
                "Bangarang",
                "Levels",
                "English Workout Mix",
                "Gym Motivation",
                "Energy Playlist",
                "Workout Hits",
                "Hype Songs",
                "Party Energy",
                "EDM Hits",
                "High Energy Pop",
                "Power Songs",
                "Hype Playlist",
                "Ultimate Energy"
            ],

            Calm: [
                "Perfect",
                "Photograph",
                "Yellow",
                "Until I Found You",
                "The Night We Met",
                "Ocean Eyes",
                "Lovely",
                "A Thousand Years",
                "All of Me",
                "Someone You Loved",
                "Let Her Go",
                "I Like Me Better",
                "Dandelions",
                "Those Eyes",
                "Until I Found You Acoustic",
                "Perfect Acoustic",
                "Ocean Eyes Acoustic",
                "Lovely Acoustic",
                "Yellow Acoustic",
                "Photograph Acoustic",
                "Calm Down",
                "Snooze",
                "Cardigan",
                "August",
                "Daylight",
                "Falling",
                "Duvet",
                "Apocalypse",
                "Space Song",
                "Mystery of Love",
                "English LoFi",
                "English Chill",
                "English Rain Mix",
                "English Sunset",
                "English Night",
                "English Cafe",
                "English Acoustic",
                "English Piano",
                "English Relax",
                "English Peaceful",
                "English Slow Mix",
                "English Soft Songs",
                "English Chill Vibes",
                "English Night Vibes",
                "English Evening",
                "English LoFi Beats",
                "English Relax Playlist",
                "English Calm Playlist",
                "English Soft Mix",
                "Ultimate Calm"
            ],

            Motivational: [
                "Believer",
                "Warriors",
                "Whatever It Takes",
                "Hall of Fame",
                "The Champion",
                "Eye of the Tiger",
                "Lose Yourself",
                "Remember the Name",
                "Till I Collapse",
                "Stronger",
                "Unstoppable",
                "Rise",
                "Fight Song",
                "Roar",
                "Brave",
                "Confident",
                "On Top of the World",
                "The Nights",
                "Counting Stars",
                "A Sky Full of Stars",
                "Don't Stop Believin'",
                "We Will Rock You",
                "We Are the Champions",
                "My Songs Know What You Did in the Dark",
                "Centuries",
                "Immortals",
                "Natural",
                "Thunder",
                "Enemy",
                "Legends Never Die",
                "English Gym Motivation",
                "English Study Motivation",
                "English Focus",
                "English Hustle",
                "English Grind",
                "English Success",
                "English Victory",
                "English Champion",
                "English Warrior",
                "English Power",
                "English Confidence",
                "English Never Give Up",
                "English Rise Up",
                "English Winning",
                "English Goal Music",
                "English Workout",
                "English Motivation Mix",
                "English Power Playlist",
                "Ultimate Motivation"
            ],

            Chill: [
                "Snooze",
                "Ocean Eyes",
                "Space Song",
                "Apocalypse",
                "Duvet",
                "Mystery of Love",
                "The Night We Met",
                "Lovely",
                "Yellow",
                "Until I Found You",
                "I Like Me Better",
                "Dandelions",
                "Those Eyes",
                "Cardigan",
                "August",
                "Daylight",
                "Sparks",
                "Sweet Creature",
                "Falling",
                "Line Without a Hook",
                "Heather",
                "Until I Found You Acoustic",
                "Ocean Eyes Acoustic",
                "Yellow Acoustic",
                "Lovely Acoustic",
                "English LoFi",
                "English Chill Beats",
                "English Sunset Mix",
                "English Night Drive",
                "English Late Night",
                "English Cafe",
                "English Rain",
                "English Soft Mix",
                "English Acoustic Mix",
                "English Relax Mix",
                "English Chill Mix",
                "English Vibes",
                "English Chill Vibes",
                "English Night Vibes",
                "English Weekend",
                "English Lounge",
                "English Melody Mix",
                "English Peace Mix",
                "English Slow Mix",
                "English LoFi Beats",
                "English Coffee Mix",
                "English Sunset Vibes",
                "English Rainy Evening",
                "English Late Night Mix",
                "Ultimate Chill"
            ]
        }

    };


    /* =====================================================
       HELPERS
       ===================================================== */

    function getElement(...names){

        for(const name of names){

            const element =
                document.getElementById(name) ||
                document.querySelector("." + name) ||
                document.querySelector(name);

            if(element) return element;
        }

        return null;
    }


    function cleanName(name){

        return name
            .replace(/\s*-\s*.*$/,"")
            .trim();
    }


    function youtubeURL(song, language){

        const query =
            encodeURIComponent(
                song + " " + language + " song"
            );

        return "https://www.youtube.com/results?search_query=" + query;
    }


    function saveFavorites(){

        localStorage.setItem(
            "moodifyFavorites",
            JSON.stringify(favorites)
        );
    }


    function isFavorite(song){

        return favorites.includes(
            currentLanguage + "|" + song
        );
    }


    function toggleFavorite(song){

        const key =
            currentLanguage + "|" + song;

        if(favorites.includes(key)){

            favorites =
                favorites.filter(
                    item => item !== key
                );

        }else{

            favorites.push(key);
        }

        saveFavorites();

        renderSongs();
    }


    /* =====================================================
       FIND SONGS
       ===================================================== */

    function getCurrentSongs(){

        let songs =
            songDatabase[currentLanguage]?.[currentMood] || [];

        return songs.slice(0, SONGS_PER_MOOD);
    }


    /* =====================================================
       CREATE SONG CARD
       ===================================================== */

    function createSongCard(song,index){

        const card =
            document.createElement("div");

        card.className =
            "moodify-song-card";

        card.dataset.song = song;

        const favorite =
            isFavorite(song);

        card.innerHTML = `
            <div class="moodify-song-number">
                ${String(index + 1).padStart(2,"0")}
            </div>

            <div class="moodify-song-info">
                <div class="moodify-song-title">
                    ${song}
                </div>

                <div class="moodify-song-subtitle">
                    ${currentLanguage} • ${currentMood}
                </div>
            </div>

            <button
                class="moodify-favorite"
                aria-label="Favorite"
                title="Favorite"
            >
                ${favorite ? "❤️" : "♡"}
            </button>

            <div class="moodify-song-arrow">
                ›
            </div>
        `;


        /* -------------------------------------------------
           SONG CARD CLICK
           ------------------------------------------------- */

        card.addEventListener("click",(event)=>{

            if(
                event.target.closest(
                    ".moodify-favorite"
                )
            ){
                return;
            }

            const url =
                youtubeURL(
                    cleanName(song),
                    currentLanguage
                );

            window.open(
                url,
                "_blank",
                "noopener"
            );
        });


        /* -------------------------------------------------
           FAVORITE BUTTON
           ------------------------------------------------- */

        const favoriteButton =
            card.querySelector(
                ".moodify-favorite"
            );

        if(favoriteButton){

            favoriteButton.addEventListener(
                "click",
                (event)=>{

                    event.stopPropagation();

                    toggleFavorite(song);
                }
            );
        }


        return card;
    }


    /* =====================================================
       RENDER SONGS
       ===================================================== */

    function renderSongs(){

        const possibleContainers = [
            "songsContainer",
            "songContainer",
            "songs",
            "recommendations",
            "song-list",
            "songList",
            ".songs",
            ".song-list",
            ".recommendations"
        ];

        let container = null;

        for(const selector of possibleContainers){

            container =
                document.querySelector(selector);

            if(container) break;
        }

        if(!container){

            console.warn(
                "Moodify: Song container not found."
            );

            return;
        }

        container.innerHTML = "";

        const songs =
            getCurrentSongs();

        songs.forEach(
            (song,index)=>{

                container.appendChild(
                    createSongCard(
                        song,
                        index
                    )
                );
            }
        );

        updateSongCount(songs.length);
    }


    /* =====================================================
       SONG COUNT
       ===================================================== */

    function updateSongCount(count){

        const possible = [
            "songCount",
            "totalSongs",
            "songsCount"
        ];

        possible.forEach(id=>{

            const element =
                document.getElementById(id);

            if(element){

                element.textContent =
                    count + " songs";
            }
        });
    }


    /* =====================================================
       LANGUAGE BUTTONS
       ===================================================== */

    function setupLanguageButtons(){

        const buttons =
            document.querySelectorAll(
                "[data-language]"
            );

        buttons.forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const language =
                        button.dataset.language;

                    if(
                        songDatabase[language]
                    ){

                        currentLanguage =
                            language;

                        setActive(
                            buttons,
                            button
                        );

                        renderSongs();
                    }
                }
            );
        });
    }


    /* =====================================================
       MOOD BUTTONS
       ===================================================== */

    function setupMoodButtons(){

        const buttons =
            document.querySelectorAll(
                "[data-mood]"
            );

        buttons.forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const mood =
                        button.dataset.mood;

                    if(
                        songDatabase[currentLanguage]?.[mood]
                    ){

                        currentMood =
                            mood;

                        setActive(
                            buttons,
                            button
                        );

                        renderSongs();
                    }
                }
            );
        });
    }


    /* =====================================================
       ACTIVE BUTTON
       ===================================================== */

    function setActive(
        buttons,
        activeButton
    ){

        buttons.forEach(button=>{

            button.classList.remove(
                "active"
            );

        });

        activeButton.classList.add(
            "active"
        );
    }


    /* =====================================================
       THEME
       ===================================================== */

    function setupTheme(){

        const themeButtons =
            document.querySelectorAll(
                "[data-theme]"
            );

        themeButtons.forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const theme =
                        button.dataset.theme;

                    document.body.dataset.theme =
                        theme;

                    localStorage.setItem(
                        "moodifyTheme",
                        theme
                    );
                }
            );
        });

        const savedTheme =
            localStorage.getItem(
                "moodifyTheme"
            );

        if(savedTheme){

            document.body.dataset.theme =
                savedTheme;
        }
    }


    /* =====================================================
       FAVORITES SECTION
       ===================================================== */

    function renderFavorites(){

        const container =
            document.getElementById(
                "favoritesContainer"
            );

        if(!container) return;

        container.innerHTML = "";

        if(!favorites.length){

            container.innerHTML =
                `<div class="empty-favorites">
                    ❤️ Your favorite songs will appear here.
                </div>`;

            return;
        }

        favorites.forEach(
            (item,index)=>{

                const parts =
                    item.split("|");

                const language =
                    parts[0];

                const song =
                    parts.slice(1).join("|");

                const card =
                    document.createElement("div");

                card.className =
                    "moodify-song-card";

                card.innerHTML = `
                    <div class="moodify-song-number">
                        ${String(index+1).padStart(2,"0")}
                    </div>

                    <div class="moodify-song-info">
                        <div class="moodify-song-title">
                            ${song}
                        </div>

                        <div class="moodify-song-subtitle">
                            ${language}
                        </div>
                    </div>

                    <button
                        class="moodify-favorite"
                    >
                        ❤️
                    </button>
                `;

                card.addEventListener(
                    "click",
                    event=>{

                        if(
                            event.target.closest(
                                ".moodify-favorite"
                            )
                        ) return;

                        window.open(
                            youtubeURL(
                                cleanName(song),
                                language
                            ),
                            "_blank",
                            "noopener"
                        );
                    }
                );

                const remove =
                    card.querySelector(
                        ".moodify-favorite"
                    );

                remove.addEventListener(
                    "click",
                    event=>{

                        event.stopPropagation();

                        favorites =
                            favorites.filter(
                                value =>
                                    value !== item
                            );

                        saveFavorites();

                        renderFavorites();
                        renderSongs();
                    }
                );

                container.appendChild(card);
            }
        );
    }


    /* =====================================================
       TRENDING SONGS
       ===================================================== */

    const trendingSongs = [

        ["Kannada","Chuttu Chuttu"],
        ["Kannada","Yenammi Yenammi"],
        ["Kannada","Singara Siriye"],
        ["Kannada","Dheera Dheera"],
        ["Kannada","Tagaru Banthu Tagaru"],

        ["Hindi","Tauba Tauba"],
        ["Hindi","What Jhumka"],
        ["Hindi","Heeriye"],
        ["Hindi","Kesariya"],
        ["Hindi","Chaleya"],

        ["Tamil","Arabic Kuthu"],
        ["Tamil","Vaathi Coming"],
        ["Tamil","Hukum"],
        ["Tamil","Kaavaalaa"],
        ["Tamil","Ranjithame"],

        ["English","Sao Paulo"],
        ["English","Blinding Lights"],
        ["English","As It Was"],
        ["English","Espresso"],
        ["English","Levitating"]
    ];


    function renderTrending(){

        const container =
            document.getElementById(
                "trendingContainer"
            );

        if(!container) return;

        container.innerHTML = "";

        trendingSongs.forEach(
            ([language,song],index)=>{

                const card =
                    document.createElement("div");

                card.className =
                    "moodify-song-card";

                card.innerHTML = `
                    <div class="moodify-song-number">
                        ${String(index+1).padStart(2,"0")}
                    </div>

                    <div class="moodify-song-info">
                        <div class="moodify-song-title">
                            ${song}
                        </div>

                        <div class="moodify-song-subtitle">
                            🔥 Trending • ${language}
                        </div>
                    </div>

                    <div class="moodify-song-arrow">
                        ›
                    </div>
                `;

                card.addEventListener(
                    "click",
                    ()=>{

                        window.open(
                            youtubeURL(
                                cleanName(song),
                                language
                            ),
                            "_blank",
                            "noopener"
                        );
                    }
                );

                container.appendChild(card);
            }
        );
    }


    /* =====================================================
       ADD SONG CARD STYLES
       ===================================================== */

    function addSongStyles(){

        if(
            document.getElementById(
                "moodifySongStyles"
            )
        ) return;

        const style =
            document.createElement("style");

        style.id =
            "moodifySongStyles";

        style.textContent = `

        .moodify-song-card{

            display:flex;

            align-items:center;

            gap:12px;

            padding:13px 14px;

            margin:7px 0;

            border-radius:14px;

            background:
                rgba(255,255,255,.045);

            border:
                1px solid rgba(255,255,255,.07);

            cursor:pointer;

            transition:
                transform .18s ease,
                background .18s ease,
                border-color .18s ease;

            user-select:none;
        }

        .moodify-song-card:hover{

            transform:
                translateY(-2px);

            background:
                rgba(70,190,255,.10);

            border-color:
                rgba(70,210,255,.30);
        }

        .moodify-song-card:active{

            transform:
                scale(.98);
        }

        .moodify-song-number{

            min-width:30px;

            color:
                #6e8199;

            font-size:10px;

            font-weight:700;
        }

        .moodify-song-info{

            flex:1;

            min-width:0;
        }

        .moodify-song-title{

            color:#fff;

            font-size:13px;

            font-weight:700;

            white-space:nowrap;

            overflow:hidden;

            text-overflow:ellipsis;
        }

        .moodify-song-subtitle{

            margin-top:4px;

            color:#71839b;

            font-size:9px;
        }

        .moodify-favorite{

            border:0;

            background:transparent;

            color:#ff4f81;

            font-size:18px;

            cursor:pointer;

            padding:4px 5px;

            flex-shrink:0;
        }

        .moodify-song-arrow{

            color:#58dfff;

            font-size:23px;

            font-weight:300;

            flex-shrink:0;
        }

        .empty-favorites{

            padding:25px;

            text-align:center;

            color:#71839b;

            font-size:12px;
        }

        `;
        
        document.head.appendChild(style);
    }


    /* =====================================================
       INITIALIZATION
       ===================================================== */

    function initialize(){

        addSongStyles();

        setupLanguageButtons();

        setupMoodButtons();

        setupTheme();

        renderSongs();

        renderFavorites();

        renderTrending();

        console.log(
            "🎵 Moodify 2.0 initialized"
        );

        console.log(
            "Language:",
            currentLanguage
        );

        console.log(
            "Mood:",
            currentMood
        );

        console.log(
            "Songs:",
            getCurrentSongs().length
        );
    }


    initialize();

});
