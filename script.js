let selectedLanguage = "";
let selectedMood = "";

function selectLanguage(button) {
    document.querySelectorAll(".language-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedLanguage = button.innerText;
}

function selectMood(button) {
    document.querySelectorAll(".mood-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedMood = button.innerText;
}

function findMusic() {
    if (!selectedLanguage || !selectedMood) {
        alert("Please choose both language and mood 🎧");
        return;
    }

    const recommendations = {
        "Kannada": [
            "🎵 Kannada playlist selected",
            "🎵 Latest Kannada hits",
            "🎵 Kannada mood songs"
        ],
        "Hindi": [
            "🎵 Hindi playlist selected",
            "🎵 Latest Hindi hits",
            "🎵 Hindi mood songs"
        ],
        "Tamil": [
            "🎵 Tamil playlist selected",
            "🎵 Latest Tamil hits",
            "🎵 Tamil mood songs"
        ],
        "Telugu": [
            "🎵 Telugu playlist selected",
            "🎵 Latest Telugu hits",
            "🎵 Telugu mood songs"
        ],
        "Malayalam": [
            "🎵 Malayalam playlist selected",
            "🎵 Latest Malayalam hits",
            "🎵 Malayalam mood songs"
        ],
        "English": [
            "🎵 English playlist selected",
            "🎵 Latest English hits",
            "🎵 English mood songs"
        ]
    };

    const language = selectedLanguage.replace(/🇮🇳|🇬🇧/g, "").trim();

    const songs = recommendations[language] || [];

    document.getElementById("result").style.display = "block";

    document.getElementById("selection").innerHTML =
        "🌐 Language: <b>" + language + "</b><br>" +
        "💭 Mood: <b>" + selectedMood + "</b><br><br>" +
        songs.join("<
