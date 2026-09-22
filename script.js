/* =========================================================
   MOODIFY 2.0
   MUSIC DATABASE + FILTER + FAVORITES + PLAYER
   ========================================================= */

const songs = [

/* =========================================================
   KANNADA — 200
   ========================================================= */

["Anisuthide Yaako Indu","Sonu Nigam","Romantic","Kannada"],
["Nee Sigovaregu","Vijay Prakash","Romantic","Kannada"],
["Jeeva Hoovagide","S. P. Balasubrahmanyam","Calm","Kannada"],
["Jothe Jotheyali","S. P. Balasubrahmanyam","Romantic","Kannada"],
["Naguva Nayana","S. P. Balasubrahmanyam","Romantic","Kannada"],
["Bombe Helutaithe","Vijay Prakash","Calm","Kannada"],
["Minchagi Neenu Baralu","Sonu Nigam","Romantic","Kannada"],
["Marali Manasaagide","Sid Sriram","Romantic","Kannada"],
["Neene Neene","Sonu Nigam","Romantic","Kannada"],
["Nooru Janmaku","Sonu Nigam","Romantic","Kannada"],
["Mungaru Maleye","Sonu Nigam","Calm","Kannada"],
["Suvvali","Sonu Nigam","Romantic","Kannada"],
["Ee Sanje Yakagide","Sonu Nigam","Romantic","Kannada"],
["Ondu Malebillu","Armaan Malik","Romantic","Kannada"],
["Kariye Kariye","Sonu Nigam","Sad","Kannada"],
["Hrudayake Hedarike","Sonu Nigam","Romantic","Kannada"],
["Yaava Mohana Murali","S. P. Balasubrahmanyam","Calm","Kannada"],
["Duniya Duniya","Sonu Nigam","Sad","Kannada"],
["Nee Enbathina","Vijay Prakash","Romantic","Kannada"],
["Ninnindale","Sonu Nigam","Romantic","Kannada"],
["Ninnannu Nodida","Sonu Nigam","Romantic","Kannada"],
["Kaanada Kadalige","S. Janaki","Calm","Kannada"],
["Nagu Naguta Nali","S. P. Balasubrahmanyam","Happy","Kannada"],
["Yenendu Hesaridali","Sonu Nigam","Romantic","Kannada"],
["Ninnaseya","Vijay Prakash","Romantic","Kannada"],
["Ee Sundara Beladingala","S. P. Balasubrahmanyam","Calm","Kannada"],
["Kanaso Idu","Sonu Nigam","Romantic","Kannada"],
["Marethuhoyithe","Sanjith Hegde","Sad","Kannada"],
["Soul of Dia","Siddhartha Belmannu","Romantic","Kannada"],
["Belageddu","Vijay Prakash","Happy","Kannada"],
["Kushiyagide","Vijay Prakash","Happy","Kannada"],
["Baanali Badalago","S. P. Balasubrahmanyam","Calm","Kannada"],
["Nanna Preethiya Hudugi","Sonu Nigam","Romantic","Kannada"],
["Nanna Ninna Naduvalli","Sonu Nigam","Romantic","Kannada"],
["Kannu Hodiyaka","Vijay Prakash","Happy","Kannada"],
["Salaam Rocky Bhai","Vijay Prakash","Energetic","Kannada"],
["Dheera Dheera","Mohan Krishna","Energetic","Kannada"],
["Garbadhi","Supriya Lohith","Romantic","Kannada"],
["Puneeth","Vijay Prakash","Energetic","Kannada"],
["Tagaru Banthu Tagaru","Anthony Daasan","Energetic","Kannada"],
["Tagaru Title Track","Charan Raj","Energetic","Kannada"],
["Badava Rascal Title Track","Charan Raj","Energetic","Kannada"],
["Kirik Party","Rakshit Shetty","Happy","Kannada"],
["Belageddu","Vijay Prakash","Happy","Kannada"],
["Thirboki Jeevana","Vijay Prakash","Energetic","Kannada"],
["Karabuu","Shashank Sheshagiri","Energetic","Kannada"],
["Chuttu Chuttu","Ravindra Soragavi","Happy","Kannada"],
["Yenammi Yenammi","Vijay Prakash","Happy","Kannada"],
["Jeeva Hoovagide","S. P. Balasubrahmanyam","Calm","Kannada"],
["Nee Nanna Gellalare","S. P. Balasubrahmanyam","Romantic","Kannada"],
["Nanna Ninna Prema","Sonu Nigam","Romantic","Kannada"],
["Nee Nanna Gellalare Title","S. Janaki","Romantic","Kannada"],
["Arare Shuruvayitu Hege","Armaan Malik","Romantic","Kannada"],
["Kaanada Kadalige","S. Janaki","Calm","Kannada"],
["Naguva Nayana","S. P. Balasubrahmanyam","Romantic","Kannada"],
["Hrudayada Thumbi","Sonu Nigam","Romantic","Kannada"],
["Nanna Cheluve","Sonu Nigam","Romantic","Kannada"],
["Mellage","Sonu Nigam","Calm","Kannada"],
["Madhura Pisumaatige","Sonu Nigam","Romantic","Kannada"],
["Onde Ondu Saari","Sonu Nigam","Romantic","Kannada"],
["Ninna Sanihake","Sanjith Hegde","Romantic","Kannada"],
["Kareyole","Vijay Prakash","Romantic","Kannada"],
["Neenire Neenire","Sonu Nigam","Romantic","Kannada"],
["Ninna Notavu","Sid Sriram","Romantic","Kannada"],
["Tulasi","Kannada","Calm","Kannada"],
["Masth Malaika","Kannada","Energetic","Kannada"],
["Tabaahi","Vishal Mishra","Energetic","Kannada"],
["KD Title Track","Armaan Malik","Energetic","Kannada"],
["Radha Radha","Sid Sriram","Romantic","Kannada"],
["Bum Chiki Bum","Kannada","Happy","Kannada"],
["Ra Ga Sa Da Aa","Kannada","Energetic","Kannada"],
["Yene Helu Kusuma","Kannada","Romantic","Kannada"],
["Bangle Bangari","Kannada","Happy","Kannada"],
["Naguvina Nesara","Kannada","Calm","Kannada"],
["In The Night","Kannada","Chill","Kannada"],
["Varnamaale","Kannada","Calm","Kannada"],
["Ayyo Sivane","Kannada","Happy","Kannada"],
["Madanaari","Kannada","Romantic","Kannada"],
["Kabul Drakshi","Kannada","Chill","Kannada"],
["Settagalla","Kannada","Happy","Kannada"],
["Nannedeya Haadondanu","Kannada","Romantic","Kannada"],
["Rangoli","Kannada","Happy","Kannada"],
["Preethi Mundhe","Kannada","Romantic","Kannada"],
["Kaarmoda Karagi","Kannada","Sad","Kannada"],
["Hasravva","Kannada","Chill","Kannada"],
["Summane Summane","Kannada","Calm","Kannada"],
["Scooter Song","Kannada","Happy","Kannada"],
["Nee Nanna","Kannada","Romantic","Kannada"],
["Yenidu Maleyaagiro Haagide","Kannada","Romantic","Kannada"],
["Manamohaka","Kannada","Romantic","Kannada"],
["Kandamma Kandamma","Kannada","Happy","Kannada"],
["Benki Song","Kannada","Energetic","Kannada"],
["Kantara Varaha Roopam","Sai Vignesh","Energetic","Kannada"],
["Singara Siriye","Vijay Prakash","Romantic","Kannada"],
["Loka Sundari","Kannada","Happy","Kannada"],
["Gombe Gombe","Sonu Nigam","Romantic","Kannada"],
["Hrudayada Maathu","Sonu Nigam","Sad","Kannada"],
["Ninna Gungalli","Sonu Nigam","Romantic","Kannada"],
["Nee Nanna Olavu","Sonu Nigam","Romantic","Kannada"],
["Preetham Gubbi","Kannada","Calm","Kannada"],
["Nee Nanna Jeeva","Kannada","Romantic","Kannada"],
["O Marave","Kannada","Calm","Kannada"],
["Maleyali Jotheyali","Sonu Nigam","Romantic","Kannada"],
["Nodivalandava","S. P. Balasubrahmanyam","Happy","Kannada"],
["Kanasalu Nanasalu","Sonu Nigam","Romantic","Kannada"],
["Ee Preethi Yeke Bhoomi Melide","Sonu Nigam","Romantic","Kannada"],
["Preethse Antha Prana Tinnuve","Sonu Nigam","Sad","Kannada"],
["Nanna Usire","Sonu Nigam","Sad","Kannada"],
["Kariya I Love You","Kannada","Happy","Kannada"],
["Jeeva Hoovagide Remix","Kannada","Chill","Kannada"],
["Halli Haadu","Kannada","Happy","Kannada"],
["College Days","Kannada","Happy","Kannada"],
["College Papa Kannada","Kannada","Happy","Kannada"],
["Local Loka","Kannada","Energetic","Kannada"],
["Raambo 2 Title Track","Kannada","Happy","Kannada"],
["Pataki Poriyo","Kannada","Energetic","Kannada"],
["Pataki","Kannada","Energetic","Kannada"],
["Pushpavati","Kannada","Happy","Kannada"],
["Chuttu Chuttu Remix","Kannada","Energetic","Kannada"],
["Dostha Kano","Kannada","Happy","Kannada"],
["Yenagali Munde Saagu Nee","Kannada","Motivational","Kannada"],
["Huttidare Kannada Nadalli","Kannada","Motivational","Kannada"],
["Jogada Siri Belakinalli","Kannada","Calm","Kannada"],
["Barisu Kannada Dindimava","Kannada","Motivational","Kannada"],
["Hacchevu Kannada Da Deepa","Kannada","Motivational","Kannada"],
["Kannadave Nammamma","Kannada","Calm","Kannada"],
["Elladaru Iru Enthadaru Iru","Kannada","Motivational","Kannada"],
["Endendu Ninnanu Maretu","Kannada","Sad","Kannada"],
["Yaare Koogadali","Kannada","Motivational","Kannada"],
["Aaha Mysooru","Kannada","Happy","Kannada"],
["Mysore Mallige","Kannada","Calm","Kannada"],
["Karunada Thayi Sada Chinmayi","Kannada","Motivational","Kannada"],
["Kannada Naadina Jeevanadi","Kannada","Motivational","Kannada"],
["Hacchevu Kannada Da Deepa","Kannada","Happy","Kannada"],
["Nee Bandu Ninthaaga","Kannada","Romantic","Kannada"],
["Ninna Kanda Kshanadinda","Kannada","Romantic","Kannada"],
["Preethiya Hesare Neenu","Kannada","Romantic","Kannada"],
["Usire Usire","Kannada","Sad","Kannada"],
["Olavina Udugore","Kannada","Romantic","Kannada"],
["Ninna Nodalentho","Kannada","Romantic","Kannada"],
["Nanna Hrudaya","Kannada","Sad","Kannada"],
["O Priya O Priya","Kannada","Romantic","Kannada"],
["Preethse Preethse","Kannada","Romantic","Kannada"],
["Nanna Thangi","Kannada","Calm","Kannada"],
["Mungaru Maleye 2","Kannada","Romantic","Kannada"],
["Koli Kooguthide","Kannada","Happy","Kannada"],
["Cheluve Ondu Kelthini","Kannada","Romantic","Kannada"],
["Jeeva Veene","Kannada","Calm","Kannada"],
["Hoovina Baanadante","Kannada","Romantic","Kannada"],
["Aakasha Neenadare","Kannada","Romantic","Kannada"],
["O Malenaada","Kannada","Calm","Kannada"],
["Ee Hrudaya","Kannada","Romantic","Kannada"],
["Nanna Preethiya Rani","Kannada","Romantic","Kannada"],
["Nee Irade","Kannada","Sad","Kannada"],
["Ninna Preethiya","Kannada","Romantic","Kannada"],
["Sone Sone","Kannada","Happy","Kannada"],
["Dwapara","Kannada","Romantic","Kannada"],
["Usire Usire 2","Kannada","Sad","Kannada"],
["Kanasina Rani","Kannada","Romantic","Kannada"],
["Nodutha Naliyutha","Kannada","Happy","Kannada"],
["Preethi Geethi Ityadi","Kannada","Happy","Kannada"],
["Love Me Again Kannada","Kannada","Romantic","Kannada"],
["Hudugi Hudugi","Kannada","Happy","Kannada"],
["Nee Sigovaregu Reprise","Kannada","Romantic","Kannada"],
["Ondu Sari Helbidu","Kannada","Romantic","Kannada"],
["Kanna Muche Kaade Goode","Kannada","Happy","Kannada"],
["Hrudaya Hrudaya","Kannada","Romantic","Kannada"],
["Ninna Kanna Notadalli","Kannada","Romantic","Kannada"],
["Preethiya Loka","Kannada","Romantic","Kannada"],
["Jotheyali Jothe Jotheyali","Kannada","Calm","Kannada"],
["Madhura Madhura","Kannada","Romantic","Kannada"],
["Nee Enage","Kannada","Romantic","Kannada"],
["Ee Preethiya Charisma","Kannada","Happy","Kannada"],
["Kanasugala Kanasugala","Kannada","Calm","Kannada"],
["Nanna Cheluve","Kannada","Romantic","Kannada"],
["Olave Mandhara","Kannada","Romantic","Kannada"],
["Kannu Kannu","Kannada","Romantic","Kannada"],
["Hrudaya Kadalina","Kannada","Calm","Kannada"],
["Nanna Hrudayadalli","Kannada","Romantic","Kannada"],
["Preethi Endarenu","Kannada","Romantic","Kannada"],
["Ninna Cheluvina","Kannada","Romantic","Kannada"],
["Nee Nanna Sangaathi","Kannada","Romantic","Kannada"],
["Ondu Munjane","Kannada","Calm","Kannada"],
["Ee Sundara Beladingala 2","Kannada","Calm","Kannada"],
["Mouna Thaalithe","Kannada","Calm","Kannada"],
["Male Baruva Haagide","Kannada","Calm","Kannada"],
["Nanna Ninna Prema","Kannada","Romantic","Kannada"],
["Preethiya Karedare","Kannada","Romantic","Kannada"],
["Kanna Sanneyindalene","Kannada","Romantic","Kannada"],
["Ninna Nodalentho","Kannada","Romantic","Kannada"],
["Olavina Geleyane","Kannada","Romantic","Kannada"],
["Hrudayake Hedarike Reprise","Kannada","Sad","Kannada"],
["Marali Manasaagide Reprise","Kannada","Sad","Kannada"],
["Marethuhoyithe Reprise","Kannada","Sad","Kannada"],
["Kariya I Love You Remix","Kannada","Happy","Kannada"],
["Appu","Kannada","Energetic","Kannada"],
["Power Star","Kannada","Energetic","Kannada"],
["Jackie Title Track","Kannada","Energetic","Kannada"],
["Raajakumara Title Track","Kannada","Motivational","Kannada"],
["Yuvarathnaa Title Track","Kannada","Motivational","Kannada"],
["James Title Track","Kannada","Energetic","Kannada"],
["Anjani Putra Title Track","Kannada","Energetic","Kannada"],
["Ninnindale Title Track","Kannada","Romantic","Kannada"],
["Googly Title Track","Kannada","Happy","Kannada"],
["Mr and Mrs Ramachari Title Track","Kannada","Romantic","Kannada"],
["Kirik Party Title Track","Kannada","Happy","Kannada"],
["Dia Title Track","Kannada","Romantic","Kannada"],
["Love Mocktail Title Track","Kannada","Romantic","Kannada"],
["Gaalipata Title Track","Kannada","Happy","Kannada"],
["Milana Title Track","Kannada","Romantic","Kannada"],
["Paramathma Title Track","Kannada","Chill","Kannada"],
["Simple Agi Ond Love Story","Kannada","Romantic","Kannada"],
["Ulidavaru Kandanthe","Kannada","Chill","Kannada"],
["RangiTaranga Title Track","Kannada","Chill","Kannada"],
["Garuda Gamana Vrishabha Vahana","Kannada","Energetic","Kannada"],
["Sapta Sagaradaache Ello Title Track","Kannada","Calm","Kannada"],
["Kantara Title Track","Kannada","Energetic","Kannada"],
["777 Charlie Title Track","Kannada","Happy","Kannada"],
["Avane Srimannarayana Title Track","Kannada","Happy","Kannada"],
["Kavaludaari Title Track","Kannada","Chill","Kannada"],
["Bell Bottom Title Track","Kannada","Happy","Kannada"],
["Operation Alamelamma","Kannada","Happy","Kannada"],
["French Biryani Title Track","Kannada","Happy","Kannada"],
["Garuda Gamana","Kannada","Calm","Kannada"],
["Sapta Sagaradaache Ello Side A","Kannada","Sad","Kannada"],
["Sapta Sagaradaache Ello Side B","Kannada","Romantic","Kannada"],
["Kaatera Title Track","Kannada","Energetic","Kannada"],
["Martin Title Track","Kannada","Energetic","Kannada"],
["UI Title Track","Kannada","Energetic","Kannada"],
["Toxic Title Track","Kannada","Energetic","Kannada"],
["Jolly Title Track","Kannada","Happy","Kannada"],
["Mother Promise","Kannada","Calm","Kannada"],
["Brindhavihari Title Track","Kannada","Romantic","Kannada"],
["Yuva Title Track","Kannada","Motivational","Kannada"],
["KRGF Theme","Kannada","Energetic","Kannada"],
["KGF Garbadhi","Kannada","Romantic","Kannada"],

/* =========================================================
   HINDI — 50
   ========================================================= */

["Dildaara (Stand By Me)","Shafqat Amanat Ali","Romantic","Hindi"],
["Tum Se Hi","Mohit Chauhan","Romantic","Hindi"],
["Agar Tum Saath Ho","Alka Yagnik, Arijit Singh","Sad","Hindi"],
["Channa Mereya","Arijit Singh","Sad","Hindi"],
["Kesariya","Arijit Singh","Romantic","Hindi"],
["Apna Bana Le","Arijit Singh","Romantic","Hindi"],
["Tujh Mein Rab Dikhta Hai","Roop Kumar Rathod","Romantic","Hindi"],
["Tum Hi Ho","Arijit Singh","Romantic","Hindi"],
["Raabta","Arijit Singh","Romantic","Hindi"],
["Phir Le Aaya Dil","Arijit Singh","Sad","Hindi"],
["Iktara","Kavita Seth","Calm","Hindi"],
["Ilahi","Arijit Singh","Happy","Hindi"],
["Safarnama","Lucky Ali","Chill","Hindi"],
["Khaabon Ke Parinday","Mohit Chauhan","Chill","Hindi"],
["Zinda","Siddharth Mahadevan","Motivational","Hindi"],
["Kar Har Maidaan Fateh","Sukhwinder Singh","Motivational","Hindi"],
["Lakshya","Shankar Mahadevan","Motivational","Hindi"],
["Apna Time Aayega","Ranveer Singh","Motivational","Hindi"],
["Aashayein","KK","Motivational","Hindi"],
["Love You Zindagi","Amit Trivedi","Happy","Hindi"],
["Gallan Goodiyaan","Yashita Sharma","Happy","Hindi"],
["Badtameez Dil","Benny Dayal","Happy","Hindi"],
["London Thumakda","Labh Janjua","Happy","Hindi"],
["Ullu Ka Pattha","Arijit Singh","Energetic","Hindi"],
["Nashe Si Chadh Gayi","Arijit Singh","Happy","Hindi"],
["Kala Chashma","Amar Arshi","Energetic","Hindi"],
["Jaiye Sajana","Hindi","Romantic","Hindi"],
["Tu Hi Disda","Hindi","Romantic","Hindi"],
["Ram Ji Aake Bhala Karenge","Hindi","Calm","Hindi"],
["Ek Din Title Track","Hindi","Motivational","Hindi"],
["Tu Meri Main Tera Main Tera Tu Meri","Hindi","Romantic","Hindi"],
["Dil Dil Dil","Hindi","Happy","Hindi"],
["Dilbar Ki Aankhon Ka","Hindi","Romantic","Hindi"],
["Bijuria","Hindi","Energetic","Hindi"],
["Tabaahi Hindi","Hindi","Energetic","Hindi"],
["Heeriye","Jasleen Royal","Romantic","Hindi"],
["O Maahi","Arijit Singh","Romantic","Hindi"],
["Satranga","Arijit Singh","Sad","Hindi"],
["Ve Kamleya","Arijit Singh","Romantic","Hindi"],
["Tere Vaaste","Varun Jain","Romantic","Hindi"],
["Chaleya","Arijit Singh","Romantic","Hindi"],
["Heer Ranjha","Rito Riba","Sad","Hindi"],
["Maan Meri Jaan","King","Romantic","Hindi"],
["Husn","Anuv Jain","Romantic","Hindi"],
["Jo Tum Mere Ho","Anuv Jain","Romantic","Hindi"],
["Kho Gaye Hum Kahan","Jasleen Royal","Chill","Hindi"],
["O Bedardeya","Arijit Singh","Sad","Hindi"],
["Sajni","Arijit Singh","Romantic","Hindi"],
["Ve Haaniyaan","Avvy Sra","Romantic","Hindi"],
["Aaj Ki Raat","Madhubanti Bagchi","Energetic","Hindi"],
["Ami Je Tomar","Shreya Ghoshal","Calm","Hindi"],

/* =========================================================
   TAMIL — 50
   ========================================================= */

["Aasa Kooda","Sai Abhyankkar","Happy","Tamil"],
["Pavazha Malli","Tamil","Romantic","Tamil"],
["Radhimaa","Tamil","Romantic","Tamil"],
["Monica","Tamil","Energetic","Tamil"],
["Karuppa Kooda Va","Tamil","Energetic","Tamil"],
["Nallaru Po","Tamil","Happy","Tamil"],
["Hangova","Tamil","Chill","Tamil"],
["Vaama Vaama","Tamil","Happy","Tamil"],
["Bum Baa Diga Diga","Tamil","Energetic","Tamil"],
["Ala Bolelo","Tamil","Happy","Tamil"],
["Alaakaa Loova","Tamil","Romantic","Tamil"],
["The Wedding Song","Tamil","Happy","Tamil"],
["Pattampoochi","Tamil","Calm","Tamil"],
["Goindhamma","Tamil","Energetic","Tamil"],
["Aura 10/10","Tamil","Energetic","Tamil"],
["God Mode","Tamil","Energetic","Tamil"],
["Kattazhagi","Tamil","Romantic","Tamil"],
["Raga of Revenge","Tamil","Energetic","Tamil"],
["Oorum Blood","Tamil","Energetic","Tamil"],
["Arabic Kuthu","Anirudh Ravichander","Energetic","Tamil"],
["Why This Kolaveri Di","Dhanush","Happy","Tamil"],
["Megham Karukatha","Dhanush","Romantic","Tamil"],
["Kaavaalaa","Shilpa Rao","Energetic","Tamil"],
["Hukum","Anirudh Ravichander","Energetic","Tamil"],
["Naa Ready","Vijay","Energetic","Tamil"],
["Badass","Anirudh Ravichander","Energetic","Tamil"],
["Jimikki Ponnu","Anirudh Ravichander","Happy","Tamil"],
["Chellamma","Anirudh Ravichander","Happy","Tamil"],
["Selfie Pulla","Vijay","Happy","Tamil"],
["Vaathi Coming","Anirudh Ravichander","Energetic","Tamil"],
["Enjoy Enjaami","Dhee","Chill","Tamil"],
["Rowdy Baby","Dhanush","Happy","Tamil"],
["Marana Mass","Anirudh Ravichander","Energetic","Tamil"],
["Kutty Story","Vijay","Chill","Tamil"],
["Katchi Sera","Sai Abhyankkar","Romantic","Tamil"],
["Achacho","Tamil","Happy","Tamil"],
["Vazhithunaiye","Tamil","Romantic","Tamil"],
["Nenjame Nenjame","A.R. Rahman","Calm","Tamil"],
["Munbe Vaa","Shreya Ghoshal","Romantic","Tamil"],
["Vaseegara","Bombay Jayashri","Romantic","Tamil"],
["New York Nagaram","A.R. Rahman","Sad","Tamil"],
["Hosanna","Vijay Prakash","Romantic","Tamil"],
["Thalli Pogathey","A.R. Rahman","Romantic","Tamil"],
["Mental Manadhil","A.R. Rahman","Chill","Tamil"],
["Aaromale","A.R. Rahman","Calm","Tamil"],
["Kadhal Sadugudu","S.P. Charan","Happy","Tamil"],
["Anbil Avan","Devan Ekambaram","Romantic","Tamil"],
["Oh Penne","Anirudh Ravichander","Romantic","Tamil"],
["Meesaya Murukku","Hiphop Tamizha","Energetic","Tamil"],
["Vaadi Pulla Vaadi","Hiphop Tamizha","Happy","Tamil"],

/* =========================================================
   TELUGU — 50
   ========================================================= */

["Irumudi Kattu","Telugu","Energetic","Telugu"],
["Aaya Sher","Telugu","Energetic","Telugu"],
["Hellallallo","Telugu","Happy","Telugu"],
["Rai Rai Raa Raa","Telugu","Energetic","Telugu"],
["Thippukuntannav","Telugu","Happy","Telugu"],
["Chikiri Chikiri","Telugu","Happy","Telugu"],
["Peelings","Telugu","Energetic","Telugu"],
["Chuttamalle","Shilpa Rao","Romantic","Telugu"],
["Gira Gira Gingiraagirey","Telugu","Happy","Telugu"],
["College Papa","Bheems Ceciroleo","Happy","Telugu"],
["Yeshanagula","Telugu","Calm","Telugu"],
["Mallepoola Pallaki","Telugu","Romantic","Telugu"],
["Thassadiya","Telugu","Energetic","Telugu"],
["Neno Butterfly","Telugu","Happy","Telugu"],
["Hoyila Hoyila","Telugu","Happy","Telugu"],
["Dheema","Telugu","Romantic","Telugu"],
["Samajavaragamana","Sid Sriram","Romantic","Telugu"],
["Inkem Inkem Inkem Kaavaale","Sid Sriram","Romantic","Telugu"],
["Butta Bomma","Armaan Malik","Happy","Telugu"],
["Ramuloo Ramulaa","Anurag Kulkarni","Energetic","Telugu"],
["Oo Antava Oo Oo Antava","Indravathi Chauhan","Energetic","Telugu"],
["Srivalli","Sid Sriram","Romantic","Telugu"],
["Daakko Daakko Meka","Shankar Mahadevan","Energetic","Telugu"],
["Saami Saami","Mounika Yadav","Energetic","Telugu"],
["Naatu Naatu","Rahul Sipligunj","Energetic","Telugu"],
["Komuram Bheemudo","Kaala Bhairava","Motivational","Telugu"],
["Dosti","Hemachandra","Motivational","Telugu"],
["Neetho Unte Chalu","Mohana Bhogaraju","Romantic","Telugu"],
["Oh Sita Hey Rama","Vishal Chandrashekhar","Romantic","Telugu"],
["Inthandham","SPB Charan","Romantic","Telugu"],
["Kadalalle","Sid Sriram","Romantic","Telugu"],
["Adiga Adiga","Sid Sriram","Sad","Telugu"],
["Vellipomaakey","Sid Sriram","Sad","Telugu"],
["Pacha Bottesina","Karthik","Romantic","Telugu"],
["Yemito","Haricharan","Romantic","Telugu"],
["Pranavalaya","Anurag Kulkarni","Calm","Telugu"],
["Na Roja Nuvve","Hesham Abdul Wahab","Romantic","Telugu"],
["Aradhya","Sid Sriram","Romantic","Telugu"],
["Kushi Title Song","Hesham Abdul Wahab","Romantic","Telugu"],
["O Rendu Prema Meghaalila","Vijai Bulganin","Romantic","Telugu"],
["Oh My Baby","Shilpa Rao","Happy","Telugu"],
["Kalaavathi","Sid Sriram","Romantic","Telugu"],
["Mind Block","Blaaze","Energetic","Telugu"],
["Top Lesi Poddi","Sagar","Energetic","Telugu"],
["Ringa Ringa","Priya Hemesh","Energetic","Telugu"],
["Pakka Local","Geetha Madhuri","Energetic","Telugu"],
["Blockbuster","Shreya Ghoshal","Happy","Telugu"],
["Seeti Maar","Jaspreet Jasz","Energetic","Telugu"],
["Mind Block Mass","Telugu","Energetic","Telugu"],
["Pushpa Pushpa","Telugu","Energetic","Telugu"],

/* =========================================================
   ENGLISH — 30
   ========================================================= */

["Blinding Lights","The Weeknd","Energetic","English"],
["Save Your Tears","The Weeknd","Sad","English"],
["Starboy","The Weeknd","Energetic","English"],
["Die For You","The Weeknd","Romantic","English"],
["Call Out My Name","The Weeknd","Sad","English"],
["Dancing in the Flames","The Weeknd","Energetic","English"],
["Open Hearts","The Weeknd","Romantic","English"],
["Cry For Me","The Weeknd","Sad","English"],
["São Paulo","The Weeknd","Energetic","English"],
["Timeless","The Weeknd","Chill","English"],
["Popular","The Weeknd","Chill","English"],
["One Of The Girls","The Weeknd","Romantic","English"],
["Moth To A Flame","The Weeknd","Romantic","English"],
["Die For You Remix","The Weeknd","Romantic","English"],
["Timeless Remix","The Weeknd","Chill","English"],
["As It Was","Harry Styles","Chill","English"],
["Perfect","Ed Sheeran","Romantic","English"],
["Photograph","Ed Sheeran","Romantic","English"],
["Shape of You","Ed Sheeran","Happy","English"],
["Happier","Marshmello","Sad","English"],
["Stay","The Kid LAROI","Energetic","English"],
["Believer","Imagine Dragons","Motivational","English"],
["Thunder","Imagine Dragons","Energetic","English"],
["Demons","Imagine Dragons","Sad","English"],
["Whatever It Takes","Imagine Dragons","Motivational","English"],
["Counting Stars","OneRepublic","Motivational","English"],
["I Ain't Worried","OneRepublic","Happy","English"],
["Daylight","David Kushner","Sad","English"],
["Until I Found You","Stephen Sanchez","Romantic","English"],
["Golden Hour","JVKE","Romantic","English"]

];


/* =========================================================
   CONVERT DATABASE
   ========================================================= */

const musicDatabase = songs.map((song, index) => ({
  id: index + 1,
  title: song[0],
  artist: song[1],
  mood: song[2],
  language: song[3],

  /*
   * IMPORTANT:
   * Real YouTube IDs will be added after verification.
   * Never invent these IDs.
   */
  videoId: ""
}));


/* =========================================================
   APP STATE
   ========================================================= */

let selectedLanguage = "Kannada";
let selectedMood = "Happy";

let currentSongs = [];
let currentIndex = -1;

let favorites =
  JSON.parse(localStorage.getItem("moodifyFavorites")) || [];

let darkMode =
  localStorage.getItem("moodifyDarkMode") === "true";

let ytPlayer = null;
let youtubeReady = false;


/* =========================================================
   DOM
   ========================================================= */

const languageButtons =
  document.querySelectorAll(".language-btn");

const moodButtons =
  document.querySelectorAll(".mood-btn");

const findMusicBtn =
  document.getElementById("findMusicBtn");

const songContainer =
  document.getElementById("songContainer");

const resultsTitle =
  document.getElementById("resultsTitle");

const resultsCount =
  document.getElementById("resultsCount");

const playerSection =
  document.getElementById("playerSection");

const playerSongTitle =
  document.getElementById("playerSongTitle");

const playerSongArtist =
  document.getElementById("playerSongArtist");

const playerFavoriteBtn =
  document.getElementById("playerFavoriteBtn");

const playerStatus =
  document.getElementById("playerStatus");

const playerPlaceholder =
  document.getElementById("playerPlaceholder");

const favoritesContainer =
  document.getElementById("favoritesContainer");

const playBtn =
  document.getElementById("playBtn");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");

const themeBtn =
  document.getElementById("themeBtn");


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

  if (darkMode) {
    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }

  } else {

    document.body.classList.remove("dark");

    if (themeBtn) {
      themeBtn.textContent = "🌙";
    }
  }
}


applyTheme();


if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    localStorage.setItem(
      "moodifyDarkMode",
      darkMode
    );

    applyTheme();
  });
}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    languageButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    selectedLanguage =
      button.dataset.language;

    resultsTitle.textContent =
      `${selectedLanguage} • ${selectedMood}`;
  });

});


/* =========================================================
   MOOD BUTTONS
   ========================================================= */

moodButtons.forEach(button => {

  button.addEventListener("click", () => {

    moodButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    selectedMood =
      button.dataset.mood;

    resultsTitle.textContent =
      `${selectedLanguage} • ${selectedMood}`;
  });

});


/* =========================================================
   FIND MUSIC
   ========================================================= */

if (findMusicBtn) {

  findMusicBtn.addEventListener("click", () => {

    renderSongs();

    document
      .getElementById("resultsSection")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  });
}


/* =========================================================
   FILTER SONGS
   ========================================================= */

function getFilteredSongs() {

  return musicDatabase.filter(song =>

    song.language === selectedLanguage &&
    song.mood === selectedMood

  );
}


/* =========================================================
   RENDER SONGS
   ========================================================= */

function renderSongs() {

  currentSongs = getFilteredSongs();

  currentIndex = -1;

  songContainer.innerHTML = "";

  resultsTitle.textContent =
    `${selectedLanguage} • ${selectedMood}`;

  resultsCount.textContent =
    `${currentSongs.length} songs selected for your mood`;

  if (currentSongs.length === 0) {

    songContainer.innerHTML = `
      <div class="empty-favorites">
        <div>🎵</div>
        <p>No songs found for this combination yet.</p>
      </div>
    `;

    return;
  }


  currentSongs.forEach((song, index) => {

    const card =
      document.createElement("article");

    card.className = "song-card";

    const isFavorite =
      favorites.includes(song.id);


    card.innerHTML = `

      <div class="song-number">
        #${index + 1}
      </div>

      <h3>
        ${escapeHTML(song.title)}
      </h3>

      <p>
        ${escapeHTML(song.artist)}
      </p>

      <span class="song-language">
        ${languageEmoji(song.language)}
        ${song.language}
      </span>

      <button
        class="favorite-btn ${isFavorite ? "active" : ""}"
        aria-label="Favorite"
        data-id="${song.id}">
        ${isFavorite ? "♥" : "♡"}
      </button>

    `;


    /*
     * SONG CARD ITSELF PLAYS THE SONG
     */

    card.addEventListener("click", event => {

      if (
        event.target.closest(".favorite-btn")
      ) {
        return;
      }

      playSong(index);
    });


    const favoriteButton =
      card.querySelector(".favorite-btn");


    favoriteButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleFavorite(song.id);

        renderSongs();
      }
    );


    songContainer.appendChild(card);

  });
}


/* =========================================================
   PLAY SONG
   ========================================================= */
function playSong(index) {

  if (
    index < 0 ||
    index >= currentSongs.length
  ) {
    return;
  }

  currentIndex = index;

  const song =
    currentSongs[currentIndex];

  const query =
    encodeURIComponent(
      `${song.title} ${song.artist} ${song.language} official song`
    );

  const youtubeURL =
    `https://www.youtube.com/results?search_query=${query}`;

  window.open(
    youtubeURL,
    "_blank"
  );
}



/* =========================================================
   PREVIOUS
   ========================================================= */

if (prevBtn) {

  prevBtn.addEventListener("click", () => {

    if (!currentSongs.length) return;

    let index =
      currentIndex - 1;

    if (index < 0) {
      index =
        currentSongs.length - 1;
    }

    playSong(index);
  });
}


/* =========================================================
   NEXT
   ========================================================= */

if (nextBtn) {

  nextBtn.addEventListener("click", () => {

    if (!currentSongs.length) return;

    let index =
      currentIndex + 1;

    if (
      index >= currentSongs.length
    ) {
      index = 0;
    }

    playSong(index);
  });
}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

if (playBtn) {

  playBtn.addEventListener("click", () => {

    if (
      currentIndex === -1 ||
      !currentSongs.length
    ) {

      if (currentSongs.length) {
        playSong(0);
      }

      return;
    }


    const song =
      currentSongs[currentIndex];


    if (!song.videoId) {

      playerStatus.textContent =
        "🎵 Playback ID is being prepared for this song.";

      return;
    }


    if (!youtubeReady || !ytPlayer) {
      return;
    }


    const state =
      ytPlayer.getPlayerState();


    if (state === 1) {

      ytPlayer.pauseVideo();

      playBtn.textContent = "▶";

      playerStatus.textContent =
        "Paused";

    } else {

      ytPlayer.playVideo();

      playBtn.textContent = "⏸";

      playerStatus.textContent =
        "▶ Playing";
    }

  });
}


/* =========================================================
   YOUTUBE IFRAME API
   ========================================================= */

window.onYouTubeIframeAPIReady =
function () {

  youtubeReady = true;

  ytPlayer =
    new YT.Player(
      "youtubePlayer",
      {

        width: "100%",
        height: "100%",

        videoId: "",

        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1
        },

        events: {

          onReady: () => {

            playerStatus.textContent =
              "Ready to play";

          },

          onStateChange: event => {

            if (
              event.data ===
              YT.PlayerState.PLAYING
            ) {

              playBtn.textContent =
                "⏸";

              playerStatus.textContent =
                "▶ Playing";

            }


            if (
              event.data ===
              YT.PlayerState.PAUSED
            ) {

              playBtn.textContent =
                "▶";

              playerStatus.textContent =
                "Paused";

            }


            if (
              event.data ===
              YT.PlayerState.ENDED
            ) {

              playBtn.textContent =
                "▶";

              playNextSong();
            }

          },

          onError: () => {

            playerStatus.textContent =
              "Unable to play this video.";

          }

        }

      }
    );
};


/* =========================================================
   AUTO NEXT
   ========================================================= */

function playNextSong() {

  if (!currentSongs.length) {
    return;
  }

  let next =
    currentIndex + 1;

  if (
    next >= currentSongs.length
  ) {
    next = 0;
  }

  playSong(next);
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        favoriteId =>
          favoriteId !== id
      );

  } else {

    favorites.push(id);
  }


  localStorage.setItem(
    "moodifyFavorites",
    JSON.stringify(favorites)
  );


  updatePlayerFavorite();

  renderFavorites();
}


/* =========================================================
   PLAYER FAVORITE
   ========================================================= */

if (playerFavoriteBtn) {

  playerFavoriteBtn.addEventListener(
    "click",
    () => {

      if (currentIndex === -1) {
        return;
      }

      const song =
        currentSongs[currentIndex];

      toggleFavorite(song.id);
    }
  );
}


function updatePlayerFavorite() {

  if (
    !playerFavoriteBtn ||
    currentIndex === -1
  ) {
    return;
  }

  const song =
    currentSongs[currentIndex];

  const active =
    favorites.includes(song.id);


  playerFavoriteBtn.textContent =
    active ? "♥" : "♡";


  playerFavoriteBtn.classList.toggle(
    "active",
    active
  );
}


/* =========================================================
   FAVORITES DISPLAY
   ========================================================= */

function renderFavorites() {

  if (!favoritesContainer) {
    return;
  }


  const favoriteSongs =
    musicDatabase.filter(
      song =>
        favorites.includes(song.id)
    );


  if (!favoriteSongs.length) {

    favoritesContainer.innerHTML = `

      <div class="empty-favorites">

        <div>♡</div>

        <p>
          Your favorite songs will appear here.
        </p>

      </div>

    `;

    return;
  }


  favoritesContainer.innerHTML = "";


  favoriteSongs.forEach(song => {

    const item =
      document.createElement("div");

    item.className = "song-card";


    item.innerHTML = `

      <div class="song-number">
        FAVORITE
      </div>

      <h3>
        ${escapeHTML(song.title)}
      </h3>

      <p>
        ${escapeHTML(song.artist)}
      </p>

      <span class="song-language">
        ${languageEmoji(song.language)}
        ${song.language}
      </span>

      <button
        class="favorite-btn active">
        ♥
      </button>

    `;


    item.addEventListener(
      "click",
      event => {

        if (
          event.target.closest(".favorite-btn")
        ) {
          return;
        }


        const index =
          currentSongs.findIndex(
            current =>
              current.id === song.id
          );


        if (index !== -1) {

          playSong(index);

        } else {

          currentSongs =
            [song];

          playSong(0);
        }

      }
    );


    item
      .querySelector(".favorite-btn")
      .addEventListener(
        "click",
        event => {

          event.stopPropagation();

          toggleFavorite(song.id);

          renderFavorites();

          renderSongs();
        }
      );


    favoritesContainer.appendChild(item);

  });
}


/* =========================================================
   LANGUAGE EMOJIS
   ========================================================= */

function languageEmoji(language) {

  const emojis = {

    Kannada: "🇮🇳",
    Hindi: "🇮🇳",
    Tamil: "🇮🇳",
    Telugu: "🇮🇳",
    English: "🇬🇧"

  };

  return emojis[language] || "🎵";
}


/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

renderFavorites();

renderSongs();

console.log(
  `Moodify loaded: ${musicDatabase.length} songs`
);
