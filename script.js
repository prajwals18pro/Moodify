let selectedLanguage = "";
let selectedMood = "";

/* =========================
   LANGUAGE SELECTION
========================= */

function selectLanguage(button) {
    document.querySelectorAll(".language-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedLanguage = button.innerText
        .replace("🇮🇳", "")
        .replace("🇬🇧", "")
        .trim();
}


/* =========================
   MOOD SELECTION
========================= */

function selectMood(button) {
   document.body.className = "";
document.body.classList.add("mood-" + selectedMood.toLowerCase());

    document.querySelectorAll(".mood-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedMood = button.innerText
        .replace("😎", "")
        .replace("😢", "")
        .replace("❤️", "")
        .replace("🔥", "")
        .replace("😴", "")
        .replace("⚡", "")
        .replace("🥺", "")
        .trim();
}


/* =========================
   SONG DATABASE
========================= */

const songs = {
   Kannada: {
    Happy: [
        ["Anisuthide", "Mungaru Male"],
        ["Jotheyali Jothe Jotheyali", "Geetha"],
        ["Belageddu", "Kirik Party"],
        ["Bombe Helutaite", "Raambo 2"],
        ["Naguva Nayana", "Pallavi Anu Pallavi"],
        ["Paravashanadene", "Paramathma"],
        ["Kaanada Kadalige", "Kannada Classic"],
        ["Nooru Janmaku", "America America"],
        ["Yaava Mohana Murali", "Kannada Classic"],
        ["Minchagi Neenu Baralu", "Gaalipata"]
    ],

    Sad: [
        ["Minchagi Neenu Baralu", "Gaalipata"],
        ["Ninnindale", "Milana"],
        ["Jeeva Hoovagide", "Nee Nanna Gellalare"],
        ["Ee Sanje Yakagide", "Geetha"],
        ["Anisuthide", "Mungaru Male"],
        ["Naguva Nayana", "Pallavi Anu Pallavi"],
        ["Kariye Kogile", "Kannada Melody"],
        ["Nee Nanna Gellalare", "Nee Nanna Gellalare"],
        ["Hrudayake Hedarike", "Hrudayake Hedarike"],
        ["Jeeva Hoovagide", "Kannada Classic"]
    ],

    Love: [
        ["Ninnindale", "Milana"],
        ["Mungaru Maleye", "Mungaru Male"],
        ["Anisuthide", "Mungaru Male"],
        ["Jotheyali Jothe Jotheyali", "Geetha"],
        ["Paravashanadene", "Paramathma"],
        ["Naguva Nayana", "Pallavi Anu Pallavi"],
        ["Minchagi Neenu Baralu", "Gaalipata"],
        ["Ee Sanje Yakagide", "Geetha"],
        ["Kariye Kogile", "Kannada Melody"],
        ["Nooru Janmaku", "America America"]
    ],

    Attitude: [
        ["Tagaru Banthu Tagaru", "Tagaru"],
        ["Duniya", "Duniya"],
        ["Pogaru", "Pogaru"],
        ["Karabuu", "Pogaru"],
        ["Open The Bottle", "Raambo 2"],
        ["Yenammi Yenammi", "Ayogya"],
        ["Ra Ra Rakkamma", "Vikrant Rona"],
        ["Pushpavati", "Kranti"],
        ["Dostha Kano", "Appu"],
        ["Halli Haida Pyateg Banda", "Kannada"]
    ],

    Chill: [
        ["Belageddu", "Kirik Party"],
        ["Kaanada Kadalige", "Kannada Classic"],
        ["Anisuthide", "Mungaru Male"],
        ["Naguva Nayana", "Pallavi Anu Pallavi"],
        ["Jotheyali Jothe Jotheyali", "Geetha"],
        ["Paravashanadene", "Paramathma"],
        ["Mungaru Maleye", "Mungaru Male"],
        ["Ee Sanje Yakagide", "Geetha"],
        ["Ninnindale", "Milana"],
        ["Nooru Janmaku", "America America"]
    ],

    Energetic: [
        ["Pogaru", "Pogaru"],
        ["Karabuu", "Pogaru"],
        ["Tagaru Banthu Tagaru", "Tagaru"],
        ["Ra Ra Rakkamma", "Vikrant Rona"],
        ["Yenammi Yenammi", "Ayogya"],
        ["Pushpavati", "Kranti"],
        ["Dostha Kano", "Appu"],
        ["Open The Bottle", "Raambo 2"],
        ["Bombe Helutaite", "Raambo 2"],
        ["Belageddu", "Kirik Party"]
    ],

    Emotional: [
        ["Nee Sigovaregu", "Bhajarangi"],
        ["Naguva Nayana", "Pallavi Anu Pallavi"],
        ["Anisuthide", "Mungaru Male"],
        ["Minchagi Neenu Baralu", "Gaalipata"],
        ["Ninnindale", "Milana"],
        ["Mungaru Maleye", "Mungaru Male"],
        ["Jotheyali Jothe Jotheyali", "Geetha"],
        ["Jeeva Hoovagide", "Nee Nanna Gellalare"],
        ["Ee Sanje Yakagide", "Geetha"],
        ["Paravashanadene", "Paramathma"]
    ]
},
   Hindi: {
    Happy: [
        ["Ilahi", "Yeh Jawaani Hai Deewani"],
        ["Gallan Goodiyaan", "Dil Dhadakne Do"],
        ["Badtameez Dil", "Yeh Jawaani Hai Deewani"],
        ["London Thumakda", "Queen"],
        ["Kar Gayi Chull", "Kapoor & Sons"],
        ["Aankh Marey", "Simmba"],
        ["Abhi Toh Party Shuru Hui Hai", "Khoobsurat"],
        ["What Jhumka?", "Rocky Aur Rani Kii Prem Kahaani"],
        ["Ude Dil Befikre", "Befikre"],
        ["Nachde Ne Saare", "Baar Baar Dekho"]
    ],

    Sad: [
        ["Agar Tum Saath Ho", "Tamasha"],
        ["Channa Mereya", "Ae Dil Hai Mushkil"],
        ["Hamari Adhuri Kahani", "Hamari Adhuri Kahani"],
        ["Phir Le Aya Dil", "Barfi!"],
        ["Tujhe Bhula Diya", "Anjaana Anjaani"],
        ["Tune Jo Na Kaha", "New York"],
        ["Sach Keh Raha Hai Deewana", "Rehnaa Hai Terre Dil Mein"],
        ["Mann Bharryaa 2.0", "Shershaah"],
        ["Kaise Hua", "Kabir Singh"],
        ["Bekhayali", "Kabir Singh"]
    ],

    Love: [
        ["Tum Se Hi", "Jab We Met"],
        ["Tum Kya Mile", "Rocky Aur Rani Kii Prem Kahaani"],
        ["Pehli Dafa", "Atif Aslam"],
        ["Raabta", "Agent Vinod"],
        ["Hawayein", "Jab Harry Met Sejal"],
        ["Kesariya", "Brahmastra"],
        ["Tera Ban Jaunga", "Kabir Singh"],
        ["Apna Bana Le", "Bhediya"],
        ["Aaj Se Teri", "Padman"],
        ["Ve Kamleya", "Rocky Aur Rani Kii Prem Kahaani"]
    ],

    Attitude: [
        ["Apna Time Aayega", "Gully Boy"],
        ["Sultan Title Track", "Sultan"],
        ["Kar Har Maidaan Fateh", "Sanju"],
        ["Zinda", "Bhaag Milkha Bhaag"],
        ["Brothers Anthem", "Brothers"],
        ["Jee Karda", "Singh Is Kinng"],
        ["Malhari", "Bajirao Mastani"],
        ["Chak De India", "Chak De! India"],
        ["Dangal Title Track", "Dangal"],
        ["Sher Khul Gaye", "Fighter"]
    ],

    Chill: [
        ["Iktara", "Wake Up Sid"],
        ["Khaabon Ke Parinday", "Zindagi Na Milegi Dobara"],
        ["Kho Gaye Hum Kahan", "Baar Baar Dekho"],
        ["Shaam", "Aisha"],
        ["Aao Milo Chalo", "Jab We Met"],
        ["Phir Se Ud Chala", "Rockstar"],
        ["Safarnama", "Tamasha"],
        ["Ilahi", "Yeh Jawaani Hai Deewani"],
        ["Love You Zindagi", "Dear Zindagi"],
        ["Kyun", "Barfi!"]
    ],

    Energetic: [
        ["Jai Jai Shivshankar", "War"],
        ["Malhari", "Bajirao Mastani"],
        ["Ghungroo", "War"],
        ["Jhoome Jo Pathaan", "Pathaan"],
        ["Zinda Banda", "Jawan"],
        ["Aaj Ki Party", "Bajrangi Bhaijaan"],
        ["Muqabla", "Street Dancer 3D"],
        ["Nashe Si Chadh Gayi", "Befikre"],
        ["Kala Chashma", "Baar Baar Dekho"],
        ["High Rated Gabru", "Nawabzaade"]
    ],

    Emotional: [
        ["Phir Le Aya Dil", "Barfi!"],
        ["Tujhe Kitna Chahne Lage", "Kabir Singh"],
        ["Channa Mereya", "Ae Dil Hai Mushkil"],
        ["Agar Tum Saath Ho", "Tamasha"],
        ["Kaise Hua", "Kabir Singh"],
        ["Apna Bana Le", "Bhediya"],
        ["Main Rang Sharbaton Ka", "Phata Poster Nikhla Hero"],
        ["Jeena Jeena", "Badlapur"],
        ["Tera Yaar Hoon Main", "Sonu Ke Titu Ki Sweety"],
        ["Kabira", "Yeh Jawaani Hai Deewani"]
    ]
},
    
    Tamil: {
       
       Happy: [
        ["Vaathi Coming", "Master"],
        ["Arabic Kuthu", "Beast"],
        ["Chellamma", "Doctor"],
        ["Dippam Dappam", "Kaathuvaakula Rendu Kaadhal"],
        ["Private Party", "Don"],
        ["Jimikki Ponnu", "Varisu"],
        ["Ranjithame", "Varisu"],
        ["Kutti Story", "Master"],
        ["Selfie Pulla", "Kaththi"],
        ["Aaluma Doluma", "Vedalam"]
    ],

    Sad: [
        ["Kanave Unai", "Kadhalum Kadandhu Pogum"],
        ["Po Nee Po", "3"],
        ["Ennodu Nee Irundhaal", "I"],
        ["Maruvaarthai", "Enai Noki Paayum Thota"],
        ["Yennai Maatrum Kadhale", "Naanum Rowdy Dhaan"],
        ["Naan Pizhai", "Kaathuvaakula Rendu Kaadhal"],
        ["Vennilave Vennilave", "Minsara Kanavu"],
        ["Unakkenna Venum Sollu", "Yennai Arindhaal"],
        ["Thalli Pogathey", "Achcham Enbadhu Madamaiyada"],
        ["Oru Naalil", "Pudhupettai"]
    ],

    Love: [
        ["Munbe Vaa", "Sillunu Oru Kadhal"],
        ["Vaseegara", "Minnale"],
        ["Anbil Avan", "Vinnaithaandi Varuvaayaa"],
        ["Hosanna", "Vinnaithaandi Varuvaayaa"],
        ["Ennodu Nee Irundhaal", "I"],
        ["Megham Karukatha", "Thiruchitrambalam"],
        ["Nenjukkul Peidhidum", "Vaaranam Aayiram"],
        ["Kadhal Anukkal", "Enthiran"],
        ["Pachai Kiligal", "Indian"],
        ["Kaathalae Kaathalae", "96"]
    ],

    Attitude: [
        ["Vaathi Coming", "Master"],
        ["Naa Ready", "Leo"],
        ["Hukum", "Jailer"],
        ["Badass", "Leo"],
        ["Aaluma Doluma", "Vedalam"],
        ["Surviva", "Vivegam"],
        ["Petta Paraak", "Petta"],
        ["Danga Maari Oodhari", "Anegan"],
        ["Sodakku", "Thaanaa Serndha Koottam"],
        ["Jailer Theme", "Jailer"]
    ],

    Chill: [
        ["The Life of Ram", "96"],
        ["Kaathalae Kaathalae", "96"],
        ["Maruvaarthai", "Enai Noki Paayum Thota"],
        ["Nenjukkul Peidhidum", "Vaaranam Aayiram"],
        ["Thalli Pogathey", "Achcham Enbadhu Madamaiyada"],
        ["Vaseegara", "Minnale"],
        ["Munbe Vaa", "Sillunu Oru Kadhal"],
        ["Anbe En Anbe", "Dhaam Dhoom"],
        ["New York Nagaram", "Sillunu Oru Kadhal"],
        ["Pookkal Pookkum", "Madrasapattinam"]
    ],

    Energetic: [
        ["Vaathi Coming", "Master"],
        ["Arabic Kuthu", "Beast"],
        ["Ranjithame", "Varisu"],
        ["Naa Ready", "Leo"],
        ["Hukum", "Jailer"],
        ["Dippam Dappam", "Kaathuvaakula Rendu Kaadhal"],
        ["Aaluma Doluma", "Vedalam"],
        ["Selfie Pulla", "Kaththi"],
        ["Rowdy Baby", "Maari 2"],
        ["Chill Bro", "Pattas"]
    ],

    Emotional: [
        ["The Life of Ram", "96"],
        ["Kaathalae Kaathalae", "96"],
        ["Po Nee Po", "3"],
        ["Maruvaarthai", "Enai Noki Paayum Thota"],
        ["Vennilave Vennilave", "Minsara Kanavu"],
        ["Naan Pizhai", "Kaathuvaakula Rendu Kaadhal"],
        ["Ennodu Nee Irundhaal", "I"],
        ["New York Nagaram", "Sillunu Oru Kadhal"],
        ["Oru Naalil", "Pudhupettai"],
        ["Munbe Vaa", "Sillunu Oru Kadhal"]
    ]
},  


    Telugu: {

        Happy: [
            ["Butta Bomma", "Ala Vaikunthapurramuloo"],
            ["Ramuloo Ramulaa", "Ala Vaikunthapurramuloo"]
        ],

        Sad: [
            ["Inthandham", "Sita Ramam"],
            ["Oh Sita Hey Rama", "Sita Ramam"]
        ],

        Love: [
            ["Inthandham", "Sita Ramam"],
            ["Samajavaragamana", "Ala Vaikunthapurramuloo"]
        ],

        Attitude: [
            ["Mind Block", "Sarileru Neekevvaru"],
            ["Top Lesi Poddi", "Iddarammayilatho"]
        ],

        Chill: [
            ["Oh Sita Hey Rama", "Sita Ramam"],
            ["Adiga Adiga", "Ninnu Kori"]
        ],

        Energetic: [
            ["Mind Block", "Sarileru Neekevvaru"],
            ["Ramuloo Ramulaa", "Ala Vaikunthapurramuloo"]
        ],

        Emotional: [
            ["Adiga Adiga", "Ninnu Kori"],
            ["Kadalalle", "Dear Comrade"]
        ]
    },


    Malayalam: {

        Happy: [
            ["Darshana", "Hridayam"],
            ["Onakka Munthiri", "Hridayam"]
        ],

        Sad: [
            ["Pavizha Mazha", "Athiran"],
            ["Aaradhike", "Ambili"]
        ],

        Love: [
            ["Darshana", "Hridayam"],
            ["Aaradhike", "Ambili"]
        ],

        Attitude: [
            ["Kalapakkaara", "King of Kotha"],
            ["Illuminati", "Aavesham"]
        ],

        Chill: [
            ["Parayuvaan", "Ishq"],
            ["Puthiyoru Pathayil", "Varathan"]
        ],

        Energetic: [
            ["Illuminati", "Aavesham"],
            ["Kalapakkaara", "King of Kotha"]
        ],

        Emotional: [
            ["Pavizha Mazha", "Athiran"],
            ["Cherathukal", "Kumbalangi Nights"]
        ]
    },


    English: {
    Happy: [
        ["Happy", "Pharrell Williams"],
        ["Can't Stop the Feeling!", "Justin Timberlake"],
        ["Uptown Funk", "Mark Ronson ft. Bruno Mars"],
        ["On Top of the World", "Imagine Dragons"],
        ["Good Time", "Owl City & Carly Rae Jepsen"],
        ["Best Day of My Life", "American Authors"],
        ["Shake It Off", "Taylor Swift"],
        ["Walking on Sunshine", "Katrina & The Waves"],
        ["Dynamite", "BTS"],
        ["I Gotta Feeling", "The Black Eyed Peas"]
    ],

    Sad: [
        ["Someone You Loved", "Lewis Capaldi"],
        ["Let Her Go", "Passenger"],
        ["Lovely", "Billie Eilish & Khalid"],
        ["The Night We Met", "Lord Huron"],
        ["Another Love", "Tom Odell"],
        ["When I Was Your Man", "Bruno Mars"],
        ["Arcade", "Duncan Laurence"],
        ["All I Want", "Kodaline"],
        ["Dancing With Your Ghost", "Sasha Alex Sloan"],
        ["Before You Go", "Lewis Capaldi"]
    ],

    Love: [
        ["Perfect", "Ed Sheeran"],
        ["Until I Found You", "Stephen Sanchez"],
        ["All of Me", "John Legend"],
        ["A Thousand Years", "Christina Perri"],
        ["Just the Way You Are", "Bruno Mars"],
        ["Love Story", "Taylor Swift"],
        ["Thinking Out Loud", "Ed Sheeran"],
        ["Adore You", "Harry Styles"],
        ["Die With A Smile", "Lady Gaga & Bruno Mars"],
        ["Photograph", "Ed Sheeran"]
    ],

    Attitude: [
        ["Believer", "Imagine Dragons"],
        ["Thunder", "Imagine Dragons"],
        ["Whatever It Takes", "Imagine Dragons"],
        ["Legends Never Die", "Against The Current"],
        ["Hall of Fame", "The Script"],
        ["Stronger", "Kanye West"],
        ["Lose Yourself", "Eminem"],
        ["Centuries", "Fall Out Boy"],
        ["Unstoppable", "Sia"],
        ["The Greatest", "Sia"]
    ],

    Chill: [
        ["Golden", "Harry Styles"],
        ["Sunflower", "Post Malone & Swae Lee"],
        ["Ocean Eyes", "Billie Eilish"],
        ["Yellow", "Coldplay"],
        ["Here With Me", "d4vd"],
        ["Riptide", "Vance Joy"],
        ["As It Was", "Harry Styles"],
        ["Until I Found You", "Stephen Sanchez"],
        ["Lovely", "Billie Eilish & Khalid"],
        ["Heat Waves", "Glass Animals"]
    ],

    Energetic: [
        ["Blinding Lights", "The Weeknd"],
        ["Uptown Funk", "Mark Ronson ft. Bruno Mars"],
        ["Don't Start Now", "Dua Lipa"],
        ["Levitating", "Dua Lipa"],
        ["Shape of You", "Ed Sheeran"],
        ["Believer", "Imagine Dragons"],
        ["Counting Stars", "OneRepublic"],
        ["Cheap Thrills", "Sia"],
        ["Shut Up and Dance", "WALK THE MOON"],
        ["Dynamite", "BTS"]
    ],

    Emotional: [
        ["Perfect", "Ed Sheeran"],
        ["Someone You Loved", "Lewis Capaldi"],
        ["Fix You", "Coldplay"],
        ["Photograph", "Ed Sheeran"],
        ["Let Me Down Slowly", "Alec Benjamin"],
        ["Memories", "Maroon 5"],
        ["Lovely", "Billie Eilish & Khalid"],
        ["Before You Go", "Lewis Capaldi"],
        ["Dandelions", "Ruth B."],
        ["A Thousand Years", "Christina Perri"]
    ]
}
};
       
       
       
      

/* =========================
   FIND MUSIC
========================= */

function findMusic() {

    if (!selectedLanguage || !selectedMood) {

        alert("⚠️ Please choose both your language and mood!");

        return;
    }


    const languageSongs = songs[selectedLanguage];

    if (!languageSongs) {

        alert("Sorry! Songs are not available yet.");

        return;
    }


    const recommendedSongs = songs[selectedLanguage][selectedMood];
   

    if (!recommendedSongs) {

        alert("Sorry! No songs found for this mood.");

        return;
    }



    let songHTML = "";

    recommendedSongs.forEach((song, index) => {

    const songName = song[0];
    const artist = song[1];

    const searchURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(songName + " " + artist);

    songHTML += `
        <div class="song-card">

            <div class="song-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="song-info">

                <h3>🎵 ${songName}</h3>

                <p>${artist}</p>

            </div>

            <button class="listen-btn"
                onclick="window.open('${searchURL}', '_blank')">

                ▶️

            </button>

            <button class="favorite-btn"
            onclick="saveRecentlyPlayed('${song[0]}'); window.open(searchURL, '_blank')"
            

                ♡

            </button>

        </div>
    `;
});

    recommendedSongs.forEach((song, index) => {

        const songName = song[0];
        const artist = song[1];

        const searchURL =
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(songName + " " + artist);

        songHTML += `
            <div style="
                background: rgba(255,255,255,0.10);
                padding: 18px;
                margin: 12px 0;
                border-radius: 15px;
                text-align: left;
            ">

                <h3>🎵 ${index + 1}. ${songName}</h3>

                <p style="color:#cfd8dc;">
                    ${artist}
                </p>

                <button onclick="window.open('${searchURL}', '_blank')">
                    ▶️ Listen
                </button>

            </div>
        `;
    });


    document.getElementById("result").style.display = "block";


    document.getElementById("selection").innerHTML = `
        <h3>
            🌐 ${selectedLanguage}
            &nbsp; | &nbsp;
            💭 ${selectedMood}
        </h3>

        <br>

        ${songHTML}
    `;


    document.getElementById("result")
        .scrollIntoView({ behavior: "smooth" });
}
function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light-mode")) {
        button.innerText = "☀️";
    } else {
        button.innerText = "🌙";
    }
}
function toggleFavorite(button, songName) {
   function saveRecentlyPlayed(songName) {
      function showRecent() {
    const recent = JSON.parse(localStorage.getItem("moodifyRecent")) || [];
    const recentList = document.getElementById("recentList");

    if (recent.length === 0) {
        recentList.innerHTML = '<p class="no-recent">No songs played yet.</p>';
        return;
    }

    recentList.innerHTML = recent.map((song, index) => `
        <div class="recent-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>🎵 ${song}</h3>
        </div>
    `).join("");
      }
      showRecent();
    let recent = JSON.parse(localStorage.getItem("moodifyRecent")) || [];

    recent = recent.filter(song => song !== songName);
    recent.unshift(songName);

    if (recent.length > 5) {
        recent.pop();
    }

    localStorage.setItem("moodifyRecent", JSON.stringify(recent));
   }

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {

        button.innerText = "♥";

        alert(songName + " ❤️ added to favorites!");

    } else {

        button.innerText = "♡";

    }
}
