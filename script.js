// Fungsi Pindah Menu Tab (Mendukung Tampilan Laptop & HP)
function switchTab(tabId) {
    // 1. Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Matikan status aktif di semua tombol navigasi (Laptop & HP)
    const desktopLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    desktopLinks.forEach(link => link.classList.remove('active'));
    mobileLinks.forEach(link => link.classList.remove('active'));

    // 3. Munculkan tab yang dipilih
    document.getElementById(tabId).classList.add('active');

    // 4. Aktifkan tombol navigasi yang sesuai di Desktop
    desktopLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(tabId)) {
            link.classList.add('active');
        }
    });

    // 5. Aktifkan tombol navigasi yang sesuai di HP
    mobileLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(tabId)) {
            link.classList.add('active');
        }
    });
}

// Fitur Episode Belum Siap (Coming Soon)
function comingSoon() {
    alert("Akan segera hadir, masih disiapkan oleh developer 🙏");
}

// Fitur Mengubah Tema Global Web dari Menu Pengaturan
function changeGlobalTheme() {
    const themeValue = document.getElementById('globalTheme').value;
    if (themeValue === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// --- LOGIKA UTAMA HALAMAN BACA (baca.html) ---

// 1. Mengubah Ukuran Huruf Cerita (+ / -)
function adjustFont(operator) {
    const paragraphs = document.querySelectorAll('.story-body p');
    paragraphs.forEach(p => {
        let currentSize = parseInt(window.getComputedStyle(p).fontSize);
        if (operator === '+' && currentSize < 32) {
            p.style.fontSize = (currentSize + 2) + 'px';
        } else if (operator === '-' && currentSize > 14) {
            p.style.fontSize = (currentSize - 2) + 'px';
        }
    });
}

// 2. Mengubah Jenis Font (Modern / Buku)
function changeReaderFont() {
    const selectedFont = document.getElementById('fontStyle').value;
    const storyBody = document.getElementById('storyContent');
    
    if (selectedFont === 'buku') {
        storyBody.classList.add('font-buku-serif');
        storyBody.classList.remove('font-modern-sans');
    } else {
        storyBody.classList.add('font-modern-sans');
        storyBody.classList.remove('font-buku-serif');
    }
}

// 3. Mengubah Tema Warna Halaman Membaca
function changeReaderTheme() {
    const selectedTheme = document.getElementById('colorTheme').value;
    
    // Reset tema membaca dahulu
    document.body.classList.remove('mode-malam', 'mode-sepia');
    
    if (selectedTheme === 'malam') {
        document.body.classList.add('mode-malam');
    } else if (selectedTheme === 'sepia') {
        document.body.classList.add('mode-sepia');
    }
}

// ==========================================
// DATABASE KONTEN NOVEL BACA NOVEL LORD DREAM
// ==========================================
const novelDatabase = {
    "1": {
        "title": "Petualangan Sang Pengendali Waktu",
        "episodes": {
            "1": {
                "title": "Episode 1: Arloji yang Berdetak Terbalik",
                "content": [
                    "Malam itu hujan turun sangat lebat di sudut kota, membasahi jalanan aspal sepi yang hanya diterangi oleh temaram lampu jalan. Kael, seorang mahasiswa tingkat akhir yang kelelahan dengan rutinitas hariannya, sedang merapikan barang-barang di gudang tua milik almarhum kakeknya. Tempat itu penuh dengan barang antik, bau kertas usang, dan debu tebal yang beterbangan setiap kali angin berembus dari celah ventilasi. Di antara tumpukan buku tua berjejer rapi, sebuah kotak kayu kecil dengan ukiran geometris yang rumit di bagian atasnya mendadak menarik perhatian mata Kael.",
                    "Rasa penasaran mengalahkan rasa lelahnya. Kael mendekati meja kayu berdebu itu dan meniup lapisan kotoran yang menutupi permukaan kotak. Ketika kotak kayu itu dibuka dengan derit pelan, sebuah arloji emas dengan rantai perak berkilau terbaring di atas kain beludru merah yang mulai memudar warnanya. Keanehan langsung terasa saat Kael memperhatikannya lebih dekat; jarum detik pada arloji tersebut tidak berputar ke kanan seperti jam normal pada umumnya, melainkan berputar berlawanan arah jarum jam dengan detak yang sangat pelan namun bergaung kuat.",
                    "Tanpa berpikir panjang dan seolah-olah digerakkan oleh kekuatan gaib yang tak kasat mata, Kael mengambil arloji tersebut dan menyentuh tombol pemutar kecil di sisi kanannya. Begitu tombol itu ditekan dengan bunyi klik yang tajam, gelombang getaran aneh langsung merambat melalui telapak tangan menuju ke seluruh tubuh. Detik itu juga, suara gemuruh rintik hujan yang semula sangat bising menghantam atap seng gudang tua mendadak lenyap total, menyisakan keheningan yang luar biasa sunyi dan mencekam di dalam ruangan.",
                    "Kael yang merasa kebingungan segera melangkah lebar menuju jendela kaca buram di sudut gudang dan menyekanya dengan telapak tangan agar bisa melihat ke arah luar. Matanya terbelalak sempurna, dipenuhi rasa tidak percaya atas apa yang sedang disaksikan oleh penglihatannya sendiri. Di luar sana, air hujan yang seharusnya jatuh menghantam bumi justru melayang diam dan menggantung kaku di udara bagaikan ribuan kristal bening yang dipajang. Seekor burung gereja yang sedang terbang melintasi halaman juga tampak membeku di udara dengan sayap yang mengepak setengah terbuka.",
                    "Dunia di sekitarnya benar-benar telah berhenti bergerak sepenuhnya, terkunci dalam satu fragmen waktu yang membeku akibat ulah arloji misterius tersebut. Jantung Kael berdegup dua kali lebih kencang, rasa takut dan takjub bercampur aduk menjadi satu di dalam dadanya membuat ia hampir lupa cara bernapas. Dengan tangan yang gemetar hebat, dia mengantongi arloji emas itu lalu perlahan memutar gagang pintu gudang untuk melangkah keluar, ingin memastikan apakah fenomena gila ini juga menimpa seluruh area kota.",
                    "Ketika kakinya menginjak tanah halaman yang basah namun tak lagi terasa beriak, keheningan mutlak langsung menyelimuti indra pendengarannya. Tidak ada suara angin, tidak ada deru mesin kendaraan dari kejauhan, bahkan daun yang gugur dari pohon mangga di dekatnya pun berhenti tepat beberapa sentimeter sebelum menyentuh permukaan tanah. Kael berjalan menyusuri trotoar sepi, merasa seperti satu-satunya makhluk hidup yang tersisa di dalam sebuah dunia mati yang berubah menjadi monumen raksasa.",
                    "Namun, ketenangan semu itu tidak bertahan lama ketika Kael sampai di persimpangan jalan utama yang gelap gulita akibat padamnya beberapa lampu kota. Di ujung jalan yang tertutup kabut tipis, dia menangkap sebuah pergerakan ganjil yang merusak hukum pembekuan waktu yang baru saja dia saksikan. Sepasang sepatu bot hitam melangkah dengan santai di atas genangan air yang membeku, menciptakan riak cahaya keperakan yang aneh di sekeliling langkah kaki misterius tersebut.",
                    "Sosok itu mengenakan jubah panjang berwarna hitam pekat dengan tudung yang menutupi sebagian besar wajahnya, berjalan perlahan namun pasti ke arah Kael berada. Kael langsung terpaku di tempatnya, seluruh otot tubuhnya mendadak kaku dan tidak bisa digerakkan karena rasa syok yang teramat sangat melihat ada orang lain yang bergerak. Bagaimana mungkin ada entitas lain yang sama sekali tidak terpengaruh oleh pembekuan waktu mutlak yang dihasilkan oleh arloji kuno di sakunya?",
                    "Ketika jarak di antara mereka hanya tersisa beberapa meter, sosok misterius berjubah hitam itu berhenti melangkah lalu perlahan mengangkat kepalanya menghadap Kael. Di balik kegelapan tudung kepalanya, terlihat sepasang mata yang menyala dengan pendaran warna biru safir yang dingin, menatap tajam langsung ke arah jantung Kael. Sosok itu menyunggingkan senyum tipis yang penuh misteri, seolah-olah dia sudah sangat lama menunggu momen pertemuan ini terjadi di lini masa tersebut.",
                    "\"Kau akhirnya menemukan kunci itu, Kael,\" ucap sosok berjubah tersebut dengan suara berat yang menggema langsung di dalam kepala Kael tanpa melalui udara yang membeku. Bersamaan dengan selesainya kalimat itu diucapkan, jarum arloji di dalam saku Kael mendadak bergetar hebat dan kembali berdetak maju dengan sangat cepat, memaksa aliran waktu dunia terhempas kembali berputar normal secara instan."
                ]
            },
            "2": {
                "title": "Episode 2: Sosok di Balik Kabut Waktu",
                "content": [
                    "Suara gemuruh hujan langsung menghantam indra pendengaran Kael dengan sangat keras, seolah tirai suara yang sempat terputus tiba-tiba dibuka kembali secara paksa. Air hujan yang semula menggantung kaku di udara seketika jatuh dengan hantaman berat, membasahi seluruh pakaian dan tubuh Kael hingga basah kuyup dalam hitungan detik. Dia terengah-engah dengan napas yang memburu, langsung berlutut di atas permukaan aspal jalanan yang dingin sambil memegangi dadanya yang terasa sangat sesak akibat hantaman mendadak dari realitas aliran waktu yang kembali berputar normal.",
                    "Dengan tubuh yang gemetar hebat akibat kombinasi rasa dingin dan syok, Kael berusaha keras mendongakkan kepalanya, menyeka sisa-sisa air hujan yang menghalangi pandangan matanya untuk melihat kembali ke arah persimpangan jalan. Namun, gang sempit dan jalanan utama yang beberapa detik lalu menjadi tempat berdirinya sosok misterius itu kini tampak kosong melompong tanpa menyisakan jejak kaki ataupun robekan jubah tunggal. Sosok berjubah hitam dengan sepasang mata biru safir yang menyala tersebut telah lenyap secara instan, menyatu bersama kabut malam dan rintik hujan yang kian menderu.",
                    "Kael memaksakan dirinya untuk berdiri kembali meskipun persendian kakinya terasa lemas bagaikan jeli setelah menyaksikan fenomena yang menembus batas logika manusia tersebut. Tangannya secara refleks meraba ke dalam saku jaketnya, memastikan bahwa benda yang menjadi pemicu kekacauan ini masih berada di tempatnya dengan aman. Begitu jemarinya menyentuh permukaan arloji emas itu, sensasi hangat yang luar biasa langsung mengalir ke kulitnya, sangat kontras dengan suhu udara malam yang menusuk tulang, menegaskan bahwa semua kejadian gila ini bukanlah sekadar ilusi dari pikirannya yang lelah.",
                    "Dia tahu bahwa bertahan di persimpangan jalan yang sepi dan gelap ini dalam kondisi basah kuyup bukanlah pilihan yang bijak, terutama setelah ada entitas asing yang mengetahui namanya secara misterius. Sambil terus menggenggam erat arloji kuno di dalam saku, Kael membalikkan badan dan berjalan setengah berlari kembali menuju gudang tua milik almarhum kakeknya, tempat yang kini dia rasa sedikit lebih aman daripada dunia luar yang mendadak terasa asing dan penuh ancaman tak kasat mata.",
                    "Sesampainya di dalam gudang, Kael langsung mengunci pintu kayu ek tebal itu rapat-rapat dan bersandar di sana selama beberapa menit untuk menenangkan detak jantungnya yang masih berpacu liar. Dia melangkah menuju meja kayu tempat kotak penyimpanan arloji tadi berada, lalu meletakkan benda emas itu di bawah temaram cahaya lampu meja yang berkedip redup. Dalam jarak sedekat ini, Kael bisa mendengar suara detak mekanis dari dalam jam kuno itu terdengar jauh lebih ritmis, seolah-olah benda mati tersebut sedang bernapas dan menikmati kebingungan yang sedang melanda pemilik barunya.",
                    "Sambil mengeringkan rambutnya menggunakan selembar kain usang yang dia temukan di atas rak, Kael mulai memikirkan kembali kata-kata yang diucapkan oleh sosok berjubah hitam di persimpangan jalan tadi. 'Kau akhirnya menemukan kunci itu, Kael.' Kalimat itu terus bergema di dalam kepala Kael, memicu ratusan pertanyaan baru yang tak memiliki jawaban: Siapa sebenarnya kakeknya hingga menyimpan benda berbahaya seperti ini? Dan kunci apa yang dimaksud oleh sosok misterius bermata safir tersebut?",
                    "Rasa penasaran yang membuncah membuat Kael mulai membongkar isi kotak kayu geometris tempat arloji itu semula berbaring, berharap ada petunjuk tambahan yang sengaja ditinggalkan di sana. Setelah memeriksa dengan saksama di bawah cahaya lampu, dia menemukan sebuah kompartemen rahasia yang tersembunyi di balik lapisan kain beludru merah yang sudah mulai mengelupas di dasar kotak. Di dalam rongga sempit tersebut, terselip selembar kertas manuskrip kuno yang sudah menguning dan tampak sangat rapuh, dipenuhi oleh coretan tangan yang sangat dia kenali sebagai tulisan tangan kakeknya.",
                    "Kael membuka lipatan kertas itu dengan sangat hati-hati, menahan napas saat membaca deretan kalimat pertama yang ditulis menggunakan tinta hitam yang sebagian sudah memudar. 'Bagi siapa pun darah dagingku yang membuka kotak ini, ketahuilah bahwa waktu bukanlah garis lurus yang mutlak, melainkan jalinan benang yang bisa ditekuk oleh mereka yang memegang Kunci Kronos.' Kalimat tersebut ditulis dengan penekanan yang kuat, disusul oleh sebuah sketsa gambar arloji emas yang persis sama dengan yang ada di atas mejanya saat ini.",
                    "Di bagian bawah manuskrip, terdapat sebuah catatan peringatan bergaris bawah tebal yang membuat darah Kael mendadak terasa membeku untuk kedua kalinya malam itu. 'Berhati-hatilah terhadap Para Penjaga Kabut Waktu; mereka akan memburu siapa saja yang mengacaukan linimasa tanpa izin, dan mereka tidak akan segan menghapus keberadaanmu dari sejarah.' Kael menelan ludah dengan susah payah, menyadari bahwa sosok berjubah hitam bermata safir yang dia temui beberapa saat lalu kemungkinan besar adalah salah satu dari pemburu yang dimaksud oleh kakeknya.",
                    "Tepat ketika Kael selesai membaca kalimat terakhir pada kertas manuskrip tersebut, lampu meja di hadapannya mendadak padam sepenuhnya, melemparkan seluruh ruangan gudang ke dalam kegelapan yang pekat. Bersamaan dengan itu, suara ketukan yang berat, lambat, dan berirama mulai terdengar dari arah luar pintu gudang yang terkunci rapat—*tok... tok... tok...*—diikuti oleh embusan angin dingin yang entah bagaimana bisa masuk menembus celah dinding, membawa serta aroma samar dari kabut malam dan suara bisikan halus yang memanggil namanya dari kegelapan."
                ]
            },
            "3": {
                "title": "Episode 3: Gema Lorong Kronos",
                "content": [
                    "Suara ketukan di pintu gudang itu mendadak berhenti sejenak, menciptakan jeda sunyi yang mencekam di tengah kegelapan total. Kael menahan napasnya, merapatkan punggungnya ke lemari arsip tua sembari matanya berusaha menembus kegelapan malam yang pekat. Detak jantungnya berbunyi begitu nyaring di telinganya, bersahutan dengan bunyi detak pelan dari arloji emas yang kini memancarkan pendaran cahaya keperakan tipis dari balik saku jaketnya.",
                    "Tanpa peringatan apa pun, engsel pintu gudang yang kokoh tiba-tiba berderit keras, terdorong oleh kekuatan tak terlihat yang sangat masif. Angin malam yang membawa aroma belerang dan es menerobos masuk, menerbangkan lembaran-lembaran kertas tugas kuliah Kael hingga berhamburan di lantai. Di ambang pintu, kabut tebal berwarna abu-abu keperakan mulai bergulir masuk, membentuk pusaran pusaran kecil yang merayap di atas lantai gudang.",
                    "Dari balik kabut tersebut, sebuah siluet bayangan tinggi melangkah masuk tanpa menimbulkan suara gesekan sedikit pun dengan lantai kayu. Itu bukan sosok berjubah hitam yang ia temui di persimpangan jalan tadi, melainkan makhluk lain yang mengenakan pelindung dada perak dengan ukiran jam pasir kuno yang retak. Wajahnya tertutup topeng besi datar tanpa mata, memancarkan aura dingin yang membuat ruangan itu mendadak diselimuti lapisan es tipis.",
                    "\"Penyusup linimasa terdeteksi. Kunci Kronos harus diamankan, atau eksistensimu akan dihapus dari tatanan sejarah,\" ucap makhluk bertopeng tersebut dengan suara mekanis yang bergetar aneh. Makhluk itu mengangkat tangan kanannya yang dibalut sarung tangan besi, dan seketika itu juga, ruang di sekitar Kael mulai mendistorsi dan meliuk-liuk bagaikan pantulan air yang bergelombang.",
                    "Kael yang panik secara refleks mengeluarkan arloji emas dari sakunya dan memutar tombol pemutar jam itu sekuat tenaga ke arah berlawanan. *Klik!* Cahaya perak yang menyilaukan meledak dari inti arloji, menghantam gelombang distorsi yang diluncurkan oleh sang penjaga bertopeng besi. Tabrakan dua kekuatan itu memicu dentuman hampa udara yang melempar tubuh Kael mundur hingga menghantam meja kerja kakeknya.",
                    "Alih-alih membeku seperti kejadian hujan sebelumnya, kali ini ruangan gudang itu justru tampak terbelah menjadi pusaran warna yang tumpang tindih. Kael melihat bayangan dirinya sendiri dari masa lalu sedang merapikan gudang, dan di sisi lain, ia melihat bayangan masa depan di mana kota Bandung runtuh diselimuti kabut hitam. Dia seperti terlempar ke dalam sebuah lorong tak berujung yang mempertemukan jutaan pecahan waktu yang rusak.",
                    "Sang penjaga bertopeng besi kembali melangkah maju di dalam ruang distorsi tersebut, sama sekali tidak terhambat oleh kekacauan waktu yang sedang terjadi. Langkahnya terasa lambat namun pasti, mengabaikan hukum fisika saat dia melompati pecahan-pecahan visual masa lalu Kael yang beterbangan. Setiap kali kakinya menginjak lantai distorsi, retakan cahaya keunguan muncul dan merusak stabilitas ruangan.",
                    "Dengan sisa kekuatan yang ia miliki, Kael menggenggam arloji itu dengan kedua tangannya dan memikirkan satu tempat yang paling ia inginkan saat ini: kamarnya sendiri yang aman. Arloji emas itu seolah merespons gelombang otaknya; jarum-jarum jamnya berputar liar ke depan dan ke belakang dengan kecepatan yang sangat luar biasa. Pusaran warna di sekeliling Kael berputar semakin cepat hingga berubah menjadi pusaran pusaran cahaya putih yang membutakan mata.",
                    "Sedetik kemudian, gravitasi seolah ditarik paksa dari bawah tubuhnya, membuat Kael merasa seperti jatuh bebas ke dalam jurang yang sangat dalam. Suara teriakan mekanis dari penjaga bertopeng besi itu perlahan menjauh dan meredup, tergantikan oleh suara dengungan frekuensi tinggi yang membuat telinganya berdenging hebat. Kesadaran Kael mulai menipis saat tubuhnya terus terseret masuk ke dalam pusaran ruang dan waktu yang tak terkendali.",
                    "Saat matanya terpejam sepenuhnya karena tidak kuat menahan tekanan energi, Kael merasakan tubuhnya mendarat keras di atas permukaan yang empuk. Dia tersedak, menghirup udara segar yang tidak lagi berbau debu gudang atau belerang, melainkan aroma minyak wangi kamarnya sendiri. Namun, saat dia membuka mata, dia tidak berada di kamarnya; dia terbaring di tengah lapangan rumput luas di bawah langit malam yang memiliki dua buah bulan berwarna merah darah."
                ]
            }
        }
    },
    "2": {
        "title": "Simfoni Hujan di Ujung Senja",
        "episodes": {
            "1": {
                "title": "Episode 1: Melodi yang Tertinggal",
                "content": [
                    "Hujan sore itu turun dengan ritme yang teratur, menciptakan melodi alami yang menenangkan saat butirannya menghantam atap kaca kafe tua di sudut jalan Braga. Di dalam kafe bernuansa klasik tersebut, Kayla sedang duduk termenung di dekat jendela besar, memandangi jalanan aspal yang basah dan memantulkan kilau lampu kota yang mulai dinyalakan. Di hadapannya, secangkir kopi latte yang ia pesan satu jam lalu kini sudah mendingin sepenuhnya, menyisakan guratan seni busa yang mulai memudar.",
                    "Kayla adalah seorang mahasiswi jurusan seni musik yang sedang mengalami kebuntuan besar dalam menyusun komposisi nada untuk tugas akhir kelulusannya. Sudah berminggu-minggu jemarinya hanya diam di atas tuts piano tanpa mampu melahirkan satu pun melodi indah yang bisa menyentuh perasaan pendengarnya. Baginya, musik bukan sekadar rangkaian nada, melainkan sebuah bahasa jiwa yang harus memiliki nyawa, dan nyawa itulah yang saat ini hilang dari dalam dirinya.",
                    "Pandangan Kayla teralih ketika pintu kafe berdering pelan, menandakan seorang pengunjung baru saja masuk menerobos rintik hujan sore yang semakin menderu. Seorang pemuda dengan jaket denim basah dan membawa sebuah tas hardcase biola besar melangkah masuk sembari menyeka sisa air hujan di wajahnya. Pemuda itu mengedarkan pandangan ke seluruh ruangan kafe yang sepi, lalu memilih berjalan menuju sebuah sudut yang terletak tepat di seberang meja Kayla.",
                    "Tanpa memedulikan suasana sekitar, pemuda misterius itu mengeluarkan sebuah biola kayu berwarna cokelat gelap yang tampak sangat terawat dari dalam tasnya. Dia memejamkan mata sejenak, mengambil napas dalam-dalam, lalu mulai menggesekkan bow ke atas senar biola dengan gerakan tangan yang sangat anggun dan penuh perasaan. Detik itu juga, sebuah alunan melodi klasik yang melankolis namun sangat indah mengalir memenuhi seluruh sudut ruangan kafe tua itu.",
                    "Suara biola tersebut terdengar begitu magis, seolah-olah berinteraksi langsung dengan rintik hujan di luar dan detak jantung siapa pun yang mendengarnya. Kayla terpaku di tempat duduknya, sendok kecil yang ia pegang hampir saja terlepas dari tangan karena rasa takjub yang luar biasa yang tiba-tiba menyergap dadanya. Melodi yang dimainkan pemuda itu adalah jenis melodi yang selama ini dicari oleh Kayla—sebuah simfoni yang memiliki jiwa, kerinduan, dan cerita mendalam.",
                    "Sambil terus mendengarkan dengan mata yang berkaca-kaca, Kayla segera mengeluarkan buku catatan musik kecil dari dalam tasnya dan mulai menuliskan notasi nada yang ia dengar secara terburu-buru. Penanya menari-nari di atas kertas, mencoba merekam setiap gema emosi yang dilepaskan oleh setiap gesekan biola pemuda tersebut dengan sangat presisi. Untuk pertama kalinya dalam satu bulan terakhir, Kayla merasakan inspirasi mengalir deras bagaikan air bah di dalam kepalanya.",
                    "Namun, kebahagiaan itu hanya bertahan beberapa menit saja ketika alunan musik biola itu mendadak berhenti di tengah jalan pada nada yang menggantung. Kayla mendongak dengan cepat, merasa kecewa karena simfoni indah tersebut terputus sebelum mencapai bagian klimaks atau akhir dari ceritanya. Di seberang sana, pemuda pemilik biola itu tampak sedang merapikan kembal alat musiknya ke dalam tas dengan tergesa-gesa, seolah menyadari sesuatu yang mendesak.",
                    "Sebelum Kayla sempat berdiri untuk menghampirinya, pemuda itu sudah melangkah lebar menuju pintu keluar kafe, meninggalkan aroma parfum cedarwood yang samar di udara. Kayla yang tidak ingin kehilangan kesempatan emasnya segera membereskan barang-barangnya dan berlari keluar kafe untuk mengejar pemuda misterius itu di tengah guyuran hujan. Namun, saat kakinya menginjak trotoar jalan yang basah, sosok pemuda pembawa biola tersebut sudah menghilang di balik kerumunan payung orang berjalan.",
                    "Dengan napas terengah-engah dan tubuh yang mulai basah oleh gerimis, Kayla menunduk lesu menatap buku catatan musiknya yang sedikit terkena tetesan air hujan. Saat itulah matanya menangkap sesuatu yang terjatuh di atas paving block trotoar tepat di tempat ia berdiri, sebuah benda yang tampaknya milik pemuda tadi. Itu adalah sebuah amplop kecil berwarna merah muda yang diikat menggunakan tali rami tipis dengan sebuah gantungan kunci berbentuk kunci g-clef kecil.",
                    "Kayla memungut amplop merah muda tersebut dengan hati-hati agar tidak robek karena basah, lalu perlahan membuka lipatan kertas di dalamnya yang ternyata berisi tulisan tangan rapi. 'Untuk simfoni yang belum selesai, temui aku di ujung dermaga saat senja kembali berpadu dengan hujan,' baca Kayla pelan di balik deru suara badai sore itu. Jantungnya berdegup kencang, menyadari bahwa untaian surat misterius ini adalah awal dari sebuah babak baru yang akan mengubah seluruh hidup dan karya musiknya."
                ]
            }
        }
    }
};

// ==========================================
// LOGIKA MENAMPILKAN CERITA SECARA DINAMIS
// ==========================================
// Variabel global untuk menyimpan posisi bacaan saat ini
let currentNovelId = "";
let currentEpisodeId = 1;

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const novelId = urlParams.get('novel');
    const episodeId = urlParams.get('ep');

    if (document.getElementById('storyContent') && novelId && episodeId) {
        // Simpan data ke variabel global agar bisa dipakai tombol navigasi bawah
        currentNovelId = novelId;
        currentEpisodeId = parseInt(episodeId);

        const novel = novelDatabase[novelId];
        
        if (novel && novel.episodes[episodeId]) {
            const episode = novel.episodes[episodeId];
            
            document.getElementById('novelTitle').innerText = novel.title;
            document.getElementById('chapterTitle').innerText = episode.title;
            
            const storyContentArea = document.getElementById('storyContent');
            storyContentArea.innerHTML = "";
            
            episode.content.forEach(paragraphText => {
                const pTag = document.createElement('p');
                pTag.innerText = paragraphText;
                storyContentArea.appendChild(pTag);
            });

            // ATUR TOMBOL SEBELUMNYA (Jika di episode 1, sembunyikan tombolnya)
            if (currentEpisodeId === 1) {
                document.getElementById('btnPrev').style.visibility = 'hidden';
            } else {
                document.getElementById('btnPrev').style.visibility = 'visible';
            }

        } else {
            document.getElementById('novelTitle').innerText = "Konten Tidak Ditemukan";
            document.getElementById('chapterTitle').innerText = "Developer sedang menyusun bab ini.";
        }
    }
};

// FUNGSI BARU: LOGIKA LONCAT EPISODE / KEMBALI KE KOLEKSI NOVEL
function navigateEpisode(direction) {
    let targetEpisode = currentEpisodeId;

    if (direction === 'next') {
        targetEpisode = currentEpisodeId + 1;
    } else if (direction === 'prev') {
        targetEpisode = currentEpisodeId - 1;
    }

    const novel = novelDatabase[currentNovelId];

    // Cek apakah episode target ada di database atau tidak
    if (novel && novel.episodes[targetEpisode]) {
        // Jika ada, langsung pindah ke episode tersebut
        window.location.href = `baca.html?novel=${currentNovelId}&ep=${targetEpisode}`;
    } else {
        // Jika tidak ada / belum rilis (Coming Soon)
        alert("Cerita episode berikutnya akan segera hadir, masih disiapkan oleh developer! 🙏");
        // Langsung arahkan kembali ke halaman utama (koleksi novel)
        window.location.href = "novel.html";
    }
}

// ==========================================
// FITUR GLOBAL & AKSESIBILITAS UTAMA
// ==========================================

// Fungsi Pindah Menu Tab di Novel
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const navLinks = document.querySelectorAll('.nav-menu');
    // Jika elemen navigasi ada di halaman (bukan halaman baca)
    if(navLinks.length > 0) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => link.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        links.forEach(link => {
            if (link.getAttribute('onclick').includes(tabId)) {
                link.classList.add('active');
            }
        });
    }
}

// Pop up Alert Coming Soon
function comingSoon() {
    alert("Akan segera hadir, masih disiapkan oleh developer 🙏");
}

// Mengubah Tema Global Halaman Utama
function changeGlobalTheme() {
    const themeValue = document.getElementById('globalTheme').value;
    if (themeValue === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Mengubah Ukuran Huruf di Halaman Baca
function adjustFont(operator) {
    const paragraphs = document.querySelectorAll('.story-body p');
    paragraphs.forEach(p => {
        let currentSize = parseInt(window.getComputedStyle(p).fontSize);
        if (operator === '+' && currentSize < 32) {
            p.style.fontSize = (currentSize + 2) + 'px';
        } else if (operator === '-' && currentSize > 14) {
            p.style.fontSize = (currentSize - 2) + 'px';
        }
    });
}

// Mengubah Gaya Teks Halaman Baca
function changeReaderFont() {
    const selectedFont = document.getElementById('fontStyle').value;
    const storyBody = document.getElementById('storyContent');
    if(storyBody) {
        if (selectedFont === 'buku') {
            storyBody.classList.add('font-buku-serif');
        } else {
            storyBody.classList.remove('font-buku-serif');
        }
    }
}

// Mengubah Warna Latar Belakang Teks Halaman Baca
function changeReaderTheme() {
    const selectedTheme = document.getElementById('colorTheme').value;
    document.body.classList.remove('mode-malam', 'mode-sepia');
    if (selectedTheme === 'malam') {
        document.body.classList.add('mode-malam');
    } else if (selectedTheme === 'sepia') {
        document.body.classList.add('mode-sepia');
    }
}