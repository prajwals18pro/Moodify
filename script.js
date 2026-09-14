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
            ["Jotheyali Jothe Jotheyali", "Geetha"]
        ],

        Sad: [
            ["Minchagi Neenu Baralu", "Gaalipata"],
            ["Ninnindale", "Milana"]
        ],

        Love: [
            ["Ninnindale", "Milana"],
            ["Mungaru Maleye", "Mungaru Male"]
        ],

        Attitude: [
            ["Tagaru Banthu Tagaru", "Tagaru"],
            ["Duniya", "Duniya"]
        ],

        Chill: [
            ["Belageddu", "Kirik Party"],
            ["Kaanada Kadalige", "Kannada Classic"]
        ],

        Energetic: [
            ["Pogaru", "Pogaru"],
            ["Karabuu", "Pogaru"]
        ],

        Emotional: [
            ["Nee Sigovaregu", "Bhajarangi"],
            ["Naguva Nayana", "Pallavi Anu Pallavi"]
        ]
    },


    Hindi: {

        Happy: [
            ["Ilahi", "Yeh Jawaani Hai Deewani"],
            ["Gallan Goodiyaan", "Dil Dhadakne Do"]
        ],

        Sad: [
            ["Agar Tum Saath Ho", "Tamasha"],
            ["Channa Mereya", "Ae Dil Hai Mushkil"]
        ],

        Love: [
            ["Tum Se Hi", "Jab We Met"],
            ["Tum Kya Mile", "Rocky Aur Rani Kii Prem Kahaani"]
        ],

        Attitude: [
            ["Apna Time Aayega", "Gully Boy"],
            ["Sultan Title Track", "Sultan"]
        ],

        Chill: [
            ["Iktara", "Wake Up Sid"],
            ["Khaabon Ke Parinday", "Zindagi Na Milegi Dobara"]
        ],

        Energetic: [
            ["Jai Jai Shivshankar", "War"],
            ["Malhari", "Bajirao Mastani"]
        ],

        Emotional: [
            ["Phir Le Aya Dil", "Barfi!"],
            ["Tujhe Kitna Chahne Lage", "Kabir Singh"]
        ]
    },


    Tamil: {

        Happy: [
            ["Vaathi Coming", "Master"],
            ["Arabic Kuthu", "Beast"]
        ],

        Sad: [
            ["Kanave Unai", "Tamil Melody"],
            ["New York Nagaram", "Sillunu Oru Kadhal"]
        ],

        Love: [
            ["Munbe Vaa", "Sillunu Oru Kadhal"],
            ["Vaseegara", "Minnale"]
        ],

        Attitude: [
            ["Neruppu Da", "Kabali"],
            ["Vaathi Coming", "Master"]
        ],

        Chill: [
            ["Megham Karukatha", "Thiruchitrambalam"],
            ["Thalli Pogathey", "Achcham Yenbadhu Madamaiyada"]
        ],

        Energetic: [
            ["Arabic Kuthu", "Beast"],
            ["Dippam Dappam", "Kaathuvaakula Rendu Kaadhal"]
        ],

        Emotional: [
            ["Maruvaarthai", "Enai Noki Paayum Thota"],
            ["Vaseegara", "Minnale"]
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
            ["Good Life", "OneRepublic"]
        ],

        Sad: [
            ["Lovely", "Billie Eilish"],
            ["Someone You Loved", "Lewis Capaldi"]
        ],

        Love: [
            ["Perfect", "Ed Sheeran"],
            ["Until I Found You", "Stephen Sanchez"]
        ],

        Attitude: [
            ["Believer", "Imagine Dragons"],
            ["Unstoppable", "Sia"]
        ],

        Chill: [
            ["Sunflower", "Post Malone"],
            ["Until I Found You", "Stephen Sanchez"]
        ],

        Energetic: [
            ["Thunder", "Imagine Dragons"],
            ["On Top of the World", "Imagine Dragons"]
        ],

        Emotional: [
            ["Lovely", "Billie Eilish"],
            ["Photograph", "Ed Sheeran"]
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


    const recommendedSongs = languageSongs[selectedMood];

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
                onclick="toggleFavorite(this, '${songName}')">

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

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {

        button.innerText = "♥";

        alert(songName + " ❤️ added to favorites!");

    } else {

        button.innerText = "♡";

    }
}
