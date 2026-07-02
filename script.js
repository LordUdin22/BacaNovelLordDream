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
                    "Tanpa berpikir panjang dan seolah-olah digerakkan oleh kekuatan gaib yang tak kasat mata, Kael mengambil arloji tersebut dan menyentuh tombol pemutar kecil di sisi kanannya. Begitu tombol itu ditekan dengan bunyi klik yang tajam, gelombang getaran aneh langsung merambat melalui telapak tangannya menuju ke seluruh tubuh. Detik itu juga, suara gemuruh rintik hujan yang semula sangat bising menghantam atap seng gudang tua mendadak lenyap total, menyisakan keheningan yang luar biasa sunyi dan mencekam di dalam ruangan.",
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
                    "Sambil mengeringkan rambutnya menggunakan selembar kain usang yang dia temukan di atas rak, Kael mulai memikirkan kembali kata-kata yang diucapkan oleh sosok berjubah hitam di persimpangan jalan tadi. 'Kau akhirnya menemukan kunci itu, Kael.' Kalimat itu terus bergema di dalam kepalanya, memicu ratusan pertanyaan baru yang tak memiliki jawaban: Siapa sebenarnya kakeknya hingga menyimpan benda berbahaya seperti ini? Dan kunci apa yang dimaksud oleh sosok misterius bermata safir tersebut?",
                    "Rasa penasaran yang membuncah membuat Kael mulai membongkar isi kotak kayu geometris tempat arloji itu semula berbaring, berharap ada petunjuk tambahan yang sengaja ditinggalkan di sana. Setelah memeriksa dengan saksama di bawah cahaya lampu, dia menemukan sebuah kompartemen rahasia yang tersembunyi di balik lapisan kain beludru merah yang sudah mulai mengelupas di dasar kotak. Di dalam rongga sempit tersebut, terselip selembar kertas manuskrip kuno yang sudah menguning dan tampak sangat rapuh, dipenuhi oleh coretan tangan yang sangat dia kenali sebagai tulisan tangan kakeknya.",
                    "Kael membuka lipatan kertas itu dengan sangat hati-hati, menahan napas saat membaca deretan kalimat pertama yang ditulis menggunakan tinta hitam yang sebagian sudah memudar. 'Bagi siapa pun darah dagingku yang membuka kotak ini, ketahuilah bahwa waktu bukanlah garis lurus yang mutlak, melainkan jalinan benang yang bisa ditekuk oleh mereka yang memegang Kunci Kronos.' Kalimat tersebut ditulis dengan penekanan yang kuat, disusul oleh sebuah sketsa gambar arloji emas yang persis sama dengan yang ada di atas mejanya saat ini.",
                    "Di bagian bawah manuskrip, terdapat sebuah catatan peringatan bergaris bawah tebal yang membuat darah Kael mendadak terasa membeku untuk kedua kalinya malam itu. 'Berhati-hatilah terhadap Para Penjaga Kabut Waktu; mereka akan memburu siapa saja yang mengacaukan linimasa tanpa izin, dan mereka tidak akan segan menghapus keberadaanmu dari sejarah.' Kael menelan ludah dengan susah payah, menyadari bahwa sosok berjubah hitam bermata safir yang dia temui beberapa saat lalu kemungkinan besar adalah salah satu dari pemburu yang dimaksud oleh kakeknya.",
                    "Tepat ketika Kael selesai membaca kalimat terakhir pada kertas manuskrip tersebut, lampu meja di hadapannya mendadak padam sepenuhnya, melemparkan seluruh ruangan gudang ke dalam kegelapan yang pekat. Bersamaan dengan itu, suara ketukan yang berat, lambat, dan berirama mulai terdengar dari arah luar pintu gudang yang terkunci rapat—*tok... tok... tok...*—diikuti oleh embusan angin dingin yang entah bagaimana bisa masuk menembus celah dinding, membawa serta aroma samar dari kabut malam dan suara bisikan halus yang memanggil namanya dari kegelapan."
                ]
            }
        }
    }
};

// ==========================================
// LOGIKA MENAMPILKAN CERITA SECARA DINAMIS
// ==========================================
window.onload = function() {
    // Mengecek parameters di URL browser (contoh: baca.html?novel=1&ep=1)
    const urlParams = new URLSearchParams(window.location.search);
    const novelId = urlParams.get('novel');
    const episodeId = urlParams.get('ep');

    // Jika kita sedang berada di halaman baca.html
    if (document.getElementById('storyContent') && novelId && episodeId) {
        const novel = novelDatabase[novelId];
        
        if (novel && novel.episodes[episodeId]) {
            const episode = novel.episodes[episodeId];
            
            // Set Judul Novel dan Judul Episode di halaman HTML
            document.getElementById('novelTitle').innerText = novel.title;
            document.getElementById('chapterTitle').innerText = episode.title;
            
            // Ambil wadah teks cerita
            const storyContentArea = document.getElementById('storyContent');
            storyContentArea.innerHTML = ""; // Bersihkan teks bawaan
            
            // Masukkan paragraf dari database satu per satu ke dalam HTML
            episode.content.forEach(paragraphText => {
                const pTag = document.createElement('p');
                pTag.innerText = paragraphText;
                storyContentArea.appendChild(pTag);
            });
        } else {
            // Jika data novel atau episode tidak ditemukan di database
            document.getElementById('novelTitle').innerText = "Konten Tidak Ditemukan";
            document.getElementById('chapterTitle').innerText = "Developer sedang menyusun bab ini.";
        }
    }
};

// ==========================================
// FITUR GLOBAL & AKSESIBILITAS UTAMA
// ==========================================

// Fungsi Pindah Menu Tab di Index
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