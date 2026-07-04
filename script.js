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
                    "Dengan sisa kekuatan yang ia miliki, Kael menggenggam arloji itu dengan kedua tangan dan memikirkan satu tempat yang paling ia inginkan saat ini: kamarnya sendiri yang aman. Arloji emas itu seolah merespons gelombang otaknya; jarum-jamnya berputar liar ke depan dan ke belakang dengan kecepatan yang sangat luar biasa. Pusaran warna di sekeliling Kael berputar semakin cepat hingga berubah menjadi pusaran pusaran cahaya putih yang membutakan mata.",
                    "Sedetik kemudian, gravitasi seolah ditarik paksa dari bawah tubuhnya, membuat Kael merasa seperti jatuh bebas ke dalam jurang yang sangat dalam. Suara teriakan mekanis dari penjaga bertopeng besi itu perlahan menjauh dan meredup, tergantikan oleh suara dengungan frekuensi tinggi yang membuat telinganya berdenging hebat. Kesadaran Kael mulai menipis saat tubuhnya terus terseret masuk ke dalam pusaran ruang dan waktu yang tak terkendali.",
                    "Saat matanya terpejam sepenuhnya karena tidak kuat menahan tekanan energi, Kael merasakan tubuhnya mendarat keras di atas permukaan yang empuk. Dia tersedak, menghirup udara segar yang tidak lagi berbau debu gudang atau belerang, melainkan aroma minyak wangi kamarnya sendiri. Namun, saat dia membuka mata, dia tidak berada di kamarnya; dia terbaring di tengah lapangan rumput luas di bawah langit malam yang memiliki dua buah bulan berwarna merah darah."
                ]
            },
            "4": {
                "title": "Episode 4: Langit Dua Bulan",
                "content": [
                    "Kael terbatuk-batuk, berusaha mengeluarkan sisa rasa hampa udara yang masih mengganjal di paru-parunya. Aroma rumput basah yang asing menusuk indra penciumannya, sangat jauh berbeda dari bau debu kertas dari gudang tua kakeknya yang barusan dia tempati. Dengan kedua tangan yang masih gemetar, dia memaksakan dirinya untuk bangkit berdiri, sementara arloji emas di genggamannya kini terasa dingin beku seperti es balok.",
                    "Saat pandangannya mulai terfokus, Kael langsung tersentak mundur hingga kakinya tersandung akar pohon yang mencuat dari permukaan tanah. Di atas kepalanya, terhampar langit malam yang sangat aneh dengan jutaan bintang asing keperakan, didampingi oleh dua buah bulan raksasa berwarna merah darah yang bertengger berdampingan. Cahaya kemerahan dari angkasa itu memantul di hamparan rumput luas, mengubah pemandangan malam di sekitarnya menjadi seperti hamparan lautan darah yang sunyi.",
                    "Kael meraba saku jaketnya dengan panik, mencari ponselnya untuk memeriksa sinyal GPS, namun benda elektronik itu mati total dengan layar yang retak seribu akibat tekanan energi tadi. Keheningan di tempat ini terasa sangat pekat dan menekan, tidak ada suara jangkrik, tidak ada desau angin malam, bahkan tidak ada satu pun tanda-tanda peradaban manusia. Dunia baru tempat ia terdampar ini seolah-olah dirancang sebagai sebuah penjara megah yang terisolasi dari seluruh garis waktu normal.",
                    "\"Selamat datang di Garis Batas Kronos, pengembara waktu muda,\" sebuah suara feminin yang terdengar seperti dentingan loncek perak tiba-tiba mengalun dari arah belakang tubuh Kael. Kael berbalik secara instan dengan posisi waspada, siap memutar kembali tombol arloji emasnya jika makhluk bertopeng besi yang mengejarnya tadi kembali muncul. Namun, di balik bayangan sebuah pohon ek besar, berdiri seorang wanita berambut putih panjang mengenakan jubah sutra berwarna biru laut.",
                    "Wanita itu berjalan mendekat dengan langkah kaki yang melayang beberapa sentimeter di atas hamparan rumput merah, wajahnya tampak sangat muda namun tatapan matanya menyimpan kebijaksanaan kuno. Di pergelangan tangan kirinya, melingkar sebuah gelang perak dengan ukiran roda gigi mekanis yang terus berputar lambat memancarkan pendaran cahaya keemasan. Dia menatap arloji emas di tangan Kael dengan senyuman tipis yang sulit diartikan, seolah melihat sebuah barang lama yang akhirnya pulang.",
                    "\"Siapa kau? Dan tempat gila apa ini? Kenapa ada dua bulan di atas langit?\" cecar Kael dengan rentetan pertanyaan yang didorong oleh rasa takut dan kebingungan yang membuncah. Wanita itu menghentikan langkahnya tepat tiga meter di hadapan Kael, lalu perlahan mengangkat tangan kanannya sebagai isyarat agar Kael menurunkan arloji emasnya. Aura menenangkan yang dipancarkan oleh wanita misterius itu entah bagaimana membuat otot-otof tubuh Kael yang semula tegang berangsur-angsur menjadi rileks.",
                    "\"Namaku Lyra, sang penjaga gerbang dimensi antara,\" jawab wanita itu lembut sembari jemarinya menyentuh salah satu bintang melayang yang mendadak muncul di sekitarnya. \"Tempat ini adalah ruang kosong yang berada di luar jangkauan Para Penjaga Kabut Waktu; sebuah tempat penampungan bagi garis lini masa yang telah mati dan dihapus dari sejarah dunia asli. Dua bulan merah di atas sana adalah perwujudan dari dua masa depan kotamu yang telah hancur akibat bentrokan paradoks waktu.\"",
                    "Kael menelan ludah dengan susah payah, mencerna penjelasan Lyra yang terasa semakin melompati batas kewajaran nalar mahasiswanya. Artinya, arloji milik kakeknya tidak hanya bisa menghentikan waktu beberapa detik saja, melainkan memiliki kekuatan untuk merobek dimensi dan melempar penggunanya ke ruang isolasi. Kael memandang arloji di tangannya, menyadari bahwa benda kecil ini adalah sebuah kutukan besar yang kini mengunci takdir hidupnya.",
                    "\"Kakekmu, Arthur, menghabiskan separuh sisa umurnya di tempat ini untuk menyempurnakan arloji yang kau pegang itu,\" lanjut Lyra dengan nada suara yang berubah menjadi sendu. Wanita itu melangkah mundur, mengibaskan jubah birunya dan seketika itu juga, rumput merah di bawah kaki mereka bersinar terang, menampilkan sketsa peta kosmis raksasa yang meliuk-liuk. \"Dia tahu para pemburu akan datang, karena itulah dia menyembunyikannya di gudang kuno dengan harapan kunci ini tidak akan pernah ditemukan.\"",
                    "Tepat ketika Lyra hendak menjelaskan cara untuk kembali ke lini masa bumi yang asli, bumi di bawah kaki mereka mendadak berguncang dengan sangat hebat. Langit malam yang dipenuhi bintang keperakan tiba-tiba retak bagaikan kaca yang dipukul martil, memancarkan kilatan cahaya petir berwarna ungu gelap yang menyambar-nyambar. Di kejauhan, permukaan tanah lapang mulai terbelah luas, memuntahkan ratusan siluet makhluk bertopeng besi yang mulai berjalan cepat mengepung posisi Kael dan Lyra."
                ]
            },
            "5": {
                "title": "Episode 5: Labirin Paradoks",
                "content": [
                    "Guncangan dahsyat itu memaksa Kael berpegangan pada batang pohon ek tua yang mendadak meranggas kering akibat distorsi energi. Pasukan bertopeng besi melangkah maju dengan sinkronisasi yang mengerikan, setiap pijakan kaki baja mereka memancarkan riak gelombang keunguan yang melayukan rumput merah di sekitarnya. Lyra segera melompat ke depan Kael, kedua tangannya bergerak cepat memutar garis-garis konstelasi cahaya yang melayang di udara menjadi perisai pelindung.",
                    "\"Kael, arloji itu bukan sekadar penahan waktu, itu adalah koordinat ruang! Kamu harus memutar jarumnya melompati tiga ketukan sebelum retakan dimensi ini mengunci kita selamanya!\" teriak Lyra di tengah gemuruh suara langit yang terbelah. Kael panik, jari-jarinya yang licin oleh keringat dingin berusaha mencengkeram tombol emas arloji yang kini bergetar seperti mesin bor. Pasukan penjaga waktu melepaskan rantai besi bercahaya dari telapak tangan mereka, menghantam perisai cahaya Lyra hingga memercikkan bunga api.",
                    "Satu hantaman keras meretakkan perisai Lyra, membuatnya terdorong mundur dengan napas yang memburu menahan beban energi. Kael tahu dia tidak bisa terus bersembunyi di balik punggung wanita asing ini sementara bahaya nyata mengincar eksistensi hidupnya. Dengan sisa keberaniannya, Kael memutar tombol arloji ke arah depan sebanyak tiga kali klik penuh, berharap logika perhitungan Lyra benar.",
                    "Seketika itu juga, tanah di bawah kaki Kael runtuh menjadi sebuah labirin raksasa yang tersusun dari ribuan cermin apung raksasa. Tubuh Kael dan Lyra tersedak masuk ke dalam labirin cermin tersebut, memisahkan mereka dari kepungan pasukan bertopeng besi secara instan dalam hitungan detik. Di dalam labirin ini, setiap permukaan cermin memantulkan potongan kejadian hidup Kael dari sudut pandang dan keputusan yang berbeda.",
                    "Pada cermin sebelah kiri, Kael melihat dirinya yang tidak pernah menemukan arloji kuno kakeknya, hidup normal dan lulus kuliah dengan tenang. Sementara pada cermin di sebelah kanannya, dia melihat visual mengerikan di mana dirinya tertangkap dan melebur menjadi abu keunguan di tangan para penjaga waktu. Labirin paradoks ini sengaja diciptakan untuk mengacaukan kondisi psikologis siapa pun yang berani melompati takdir ruang.",
                    "Kael berjalan menyusuri koridor kaca yang terus bergeser dan berputar, berusaha keras menutup matanya agar tidak menjadi gila oleh jutaan ilusi masa lalu. Namun, suara langkah kaki bot baja yang berat kembali menggema di dinding labirin, menandakan para pemburu berhasil melacak koordinat energinya dengan sangat cepat. Cermin di ujung koridor mendadak pecah berkeping-keping, memuntahkan kepulan kabut ungu yang membawa hawa kematian.",
                    "Dari balik pecahan kaca tersebut, muncul pemimpin pasukan penjaga dengan jubah perak yang lebih megah dan memegang sebuah sabit waktu bercahaya biru. \"Kau tidak bisa lari dari takdir yang rusak, anak muda. Setiap langkah yang kau ambil di labirin ini hanya mempercepat kehancuran dunia aslimu,\" ucap sang pemimpin dengan suara berat. Sabit raksasanya diangkat tinggi-tinggi, siap memutus jalinan benang kehidupan Kael dari akar linimasa.",
                    "Kael mundur perlahan hingga punggungnya membentur permukaan cermin tebal yang memantulkan sosok almarhum kakeknya, Arthur. Di dalam cermin itu, sosok kakeknya tidak diam, melainkan bergerak aktif dan menunjuk ke arah tombol kecil tersembunyi di bagian belakang arloji emas Kael. Kael tersentak, dia baru menyadari ada sebuah tuas sekrup mikro yang selama ini tersembunyi di bawah ukiran geometris rantai peraknya.",
                    "Tanpa ragu, tepat saat sabit raksasa sang pemimpin berayun membelah udara menuju lehernya, Kael menekan tuas rahasia tersebut menggunakan kuku jarinya. Suara dentangan loneng raksasa bergema dari dalam dada arloji, memancarkan gelombang kejut ultrasonik yang meretakkan seluruh cermin labirin menjadi debu berkilau. Serangan sabit tersebut meleset jauh, tertahan oleh pembekuan partikel udara yang jauh lebih padat dari sebelumnya.",
                    "Dunia labirin cermin hancur berkeping-keping, melemparkan Kael kembali ke dalam ruang hampa yang gelap gulita tanpa dasar. Dia tidak lagi melihat Lyra ataupun pasukan pemburu, hanya ada keheningan mutlak yang menemaninya melayang di tengah kekosongan dimensi. Namun dari kejauhan, sebuah titik cahaya putih kecil mulai membesar, menarik tubuh Kael dengan daya magnet yang sangat kuat menuju takdir berikutnya."
                ]
            },
            "6": {
                "title": "Episode 6: Memori yang Hilang",
                "content": [
                    "Kael mendarat dengan posisi telungkup di atas lantai kayu yang terasa sangat familiar di indra peraba tangannya. Bau minyak tanah, bau kertas usang, dan kelembapan udara yang khas langsung menyadarkan Kael bahwa dia telah kembali ke gudang tua kakeknya. Namun, keanehan segera terlihat saat dia bangkit berdiri; seluruh barang-barang antik di dalam gudang tersebut tampak bersih berkilau seperti baru dibeli.",
                    "Lampu gantung di tengah ruangan menyala terang benderang dengan aliran listrik yang stabil, tidak lagi berkedip redup seperti sebelumnya. Kael berjalan menuju pintu gudang dan membukanya perlahan, mengira dia sudah berhasil pulang ke waktu normal yang aman. Namun, pemandangan di luar pintu membuat jantungnya kembali mencelos ke dasar rongga dadanya karena syok.",
                    "Halaman rumah kakeknya tidak lagi menghadap ke jalanan kota Bandung yang ramai, melainkan menghadap ke sebuah kompleks perumahan futuristik dengan arsitektur putih melengkung. Kendaraan-kendaraan tanpa roda meluncur terbang dengan senyap di jalur-jalur cahaya yang membelah langit biru bersih tanpa polusi awan. Kael menyadari bahwa arloji emas tersebut telah melempar dirinya jauh ke masa depan, melewati ratusan tahun dari masa aslinya.",
                    "Saat dia berbalik dengan keputusasaan yang memuncak, dia mendapati seorang pria paruh baya berkacamata perak sedang duduk santai di meja kerja kakeknya. Pria itu mengenakan pakaian rajut modern dan sedang membaca sebuah tablet hologram transparan yang menampilkan diagram jaringan syaraf waktu. Pria itu mendongak, menatap Kael dengan senyuman hangat yang anehnya sangat mirip dengan guratan wajah ayahnya.",
                    "\"Kau terlambat dua puluh tahun dari perhitungan awal, Kael,\" ucap pria itu sembari mematikan layar hologramnya dengan lambaian tangan senyap. Kael terpaku di tempatnya, tenggorokannya terasa kering dan kaku untuk sekadar mengeluarkan satu kata tanya. Pria itu berdiri, melangkah mendekat dan meletakkan tangannya di bahu Kael yang masih basah oleh sisa energi dimensi labirin.",
                    "\"Siapa... siapa kau? Di tahun berapa kita sekarang?\" tanya Kael dengan suara yang serak dan bergetar hebat. Pria itu menghela napas panjang, lalu mengambil sebuah bingkai foto fisik tua dari atas laci meja dan memperlihatkannya langsung kepada Kael. Di dalam foto tersebut, terlihat sosok Kael yang masih muda berdiri merangkul seorang anak kecil berambut hitam di depan gudang tua.",
                    "\"Aku adalah Leo, anak kecil yang sering kau dongengi tentang perjalanan waktu saat kita masih tinggal di tahun 2025,\" jawab pria itu dengan mata berkaca-kaca. Kael tersentak mundur, otaknya menolak mentah-mentah logika bahwa anak kecil yang dulu sering dia ajak bermain kini telah tumbuh menjadi seorang pria paruh baya yang jauh lebih tua darinya. Garis waktu telah bergerak maju bagi dunia luar, sementara bagi Kael, semua kejadian itu baru berlangsung beberapa jam saja.",
                    "Leo menjelaskan bahwa setelah Kael menghilang secara misterius di gudang tua pada malam hujan itu, seluruh dunia mengalami pergeseran sejarah yang masif. Penjaga waktu menghapus memori seluruh penduduk kota tentang keberadaan Kael, menyisakan Leo sendirian yang kebal karena mewarisi catatan rahasia kakek Arthur. Leo mendedikasikan seluruh hidupnya membangun laboratorium ini untuk menunggu titik balik kembalinya sang paman dari lorong waktu.",
                    "\"Para pemburu itu tidak mencari arlojinya, Kael. Mereka mencari inti penggerak di dalam tubuhmu yang telah menyatu saat kau menekan tuas rahasia di labirin cermin,\" kata Leo dengan nada serius seraya menunjukkan layar pemindai energi pada tubuh Kael yang kini bersinar keemasan. Kael memandang telapak tangannya, di bawah lapisan kulitnya kini terlihat guratan urat cahaya keemasan yang berdetak seirama dengan arloji di sakunya.",
                    "Tepat setelah penjelasan Leo selesai, sirine tanda bahaya berwarna merah menyala di seluruh dinding laboratorium masa depan tersebut dengan suara berdengung nyaring. Layar kaca jendela besar di ruangan itu menampilkan visual tiga kapal induk berbentuk jam pasir raksasa yang keluar dari robekan langit kota futuristik. Para Penjaga Kabut Waktu telah berhasil melompati abad, melacak keberadaan inti Kronos yang kini bersemayam di dalam detak jantung Kael."
                ]
            },
            "7": {
                "title": "Episode 7: Senjata Kronos",
                "content": [
                    "Kapal-kapal induk berbentuk jam pasir itu mulai melepaskan tembakan meriam laser berwarna ungu pekat yang menghantam menara-menara putih kota masa depan hingga runtuh. Guncangan hebat meretakkan dinding laboratorium Leo, memaksa tabung-tabung reaksi hologram pecah dan memercikkan aliran listrik statis ke segala arah. Leo dengan cepat menarik lengan Kael menuju sebuah brankas baja raksasa yang tertanam di lantai dasar ruang bawah tanah.",
                    "\"Kita tidak punya banyak waktu! Senjata yang dirancang kakek Arthur untuk melawan para pemburu ada di dalam ruangan ini!\" teriak Leo sembari memasukkan kode sidik jari pada panel brankas. Pintu baja tebal itu terbuka dengan desis udara berat, menampilkan sebuah sarung tangan mekanis perak yang dilapisi oleh ratusan kristal kuarsa pemecah partikel waktu. Senjata itu memancarkan aura energi murni yang membuat arloji di saku Kael kembali berdetak kencang.",
                    "Kael tanpa ragu memasukkan tangan kanannya ke dalam sarung tangan mekanis tersebut, dan seketika itu juga, rasa sakit luar biasa bagaikan terbakar api langsung menjalar ke seluruh saraf lengannya. Guratan cahaya keemasan di bawah kulitnya berinteraksi aktif dengan kristal kuarsa, mengunci senjata itu menyatu sempurna dengan struktur tulang tangannya. Kael berteriak menahan hantaman energi murni Kronos yang kini mengalir menguasai seluruh kesadaran tempurnya.",
                    "Plafon laboratorium di atas mereka hancur lebur berkeping-keping, memuntahkan sepuluh pasukan bertopeng besi yang langsung mendarat dengan posisi siap menyerang. Pemimpin pasukan dengan jubah perak melangkah maju, sabit raksasanya memancarkan energi pemutus dimensi yang membuat udara di sekelilingnya terdistorsi parah. \"Serahkan inti Kronos sekarang, atau kami akan menghapus seluruh abad masa depan ini dari peta alam semesta!\" ancam sang pemimpin.",
                    "Kael tidak lagi merasa takut; rasa perih di lengannya kini telah berubah menjadi kekuatan mutlak yang belum pernah ia rasakan sepanjang hidupnya. Dia melangkah maju, mengangkat tangan kanannya yang dibalut sarung tangan mekanis perak, lalu mengepalkannya kuat-kuat di udara terbuka. *BUM!* Sebuah gelombang kejut berwarna emas murni meledak dari kepalan tangannya, menghentikan laju peluru laser dan gerakan pasukan bertopeng secara instan.",
                    "Dalam kondisi waktu yang membeku akibat kekuatannya, Kael bergerak dengan kecepatan kilat, menghantam dada para penjaga satu per satu menggunakan tinju Kronos-nya. Setiap hantaman senjata kuarsanya memicu reaksi berantai yang menghancurkan topeng besi mereka menjadi serpihan debu sebelum mereka sempat menyadari apa yang terjadi. Ketika Kael menurunkan tangannya dan melepas lambaian beku waktu, seluruh pasukan pemburu langsung jatuh tersungkur dan hancur meledak.",
                    "Namun, sang pemimpin jubah perak berhasil bertahan dengan tameng dimensi birunya meskipun tubuhnya terdorong mundur hingga menabrak mesin laboratorium. Dia mendesis murka, menyadari kekuatan pemuda di hadapannya telah berkembang jauh melampaui prediksi komputer pusat dewan waktu di markas besar mereka. Dengan lambaian sabitnya, dia membuka portal pelarian darurat dan melompat masuk sebelum Kael sempat melepaskan pukulan pamungkasnya.",
                    "Leo keluar dari balik reruntuhan meja kerja dengan kondisi dahi yang sedikit terluka akibat serpihan kaca, namun matanya memancarkan rasa takjub yang luar biasa. \"Kau berhasil menguasai senjata itu, Kael! Tapi pertempuran ini belum selesai, kapal induk di atas sana sedang bersiap melakukan penghapusan total kota ini dari sejarah!\" teriak Leo menunjuk ke arah langit luar melalui atap yang hancur.",
                    "Kael mendongak, melihat pusaran pasir hisap berwarna ungu mulai keluar dari dasar kapal jam pasir raksasa, siap menelan seluruh peradaban masa depan tersebut. Inti Kronos di dalam dadanya berdenyut memberikan sinyal bahwa satu-satunya cara menghentikan bencana ini adalah menyerang langsung pusat komando mereka di dimensi hampa. Kael menatap Leo, memberikan anggukan tegas sebagai tanda perpisahan sebelum dia menggunakan energinya untuk membuka portal mandiri.",
                    "Dengan mengarahkan sarung tangan perak ke arah langit, Kael menciptakan robekan dimensi emas yang sangat besar, menarik dirinya terbang ke atas menembus badai energi ungu. Dia meluncur cepat masuk ke dalam jantung kapal induk penjaga waktu, siap menghadapi dewan tertinggi mereka demi merebut kembali hak kebebasan hidupnya dan masa lalu dunianya yang hilang."
                ]
            },
            "8": {
                "title": "Episode 8: Markas Besar Dewan Waktu",
                "content": [
                    "Kael mendarat di atas koridor futuristik bernuansa hitam obsidian yang sangat luas, dinding-dindingnya tersusun dari aliran data angka digital yang bergerak mengalir seperti air terjun. Ini adalah Citadel Kronos, sebuah stasiun ruang angkasa yang mengapung di pusat hampa dimensi, tempat di mana Dewan Waktu mengatur dan menghapus jutaan takdir dunia. Atmosfer di dalam tempat ini terasa sangat berat, dipenuhi oleh tekanan energi gravitasi buatan yang mencoba menekan kekuatan emas di tubuh Kael.",
                    "Sarung tangan mekanis Kael terus memercikkan aliran listrik emas, menjadi satu-satunya sumber cahaya terang di tengah lorong obsidian yang gelap mencekam tersebut. Kael berjalan dengan langkah waspada, setiap jengkal koridor ini dipasang jebakan sensor laser penahan partikel yang siap membekukan penyusup secara otomatis. Namun dengan intuisi barunya, Kael mampu melihat jalur laser tak kasat mata tersebut dan menghindarinya dengan gerakan lincah.",
                    "Langkah kakinya membawa Kael sampai ke sebuah pintu gerbang raksasa berlapis kristal safir yang memancarkan pendaran cahaya biru tua. Tanpa menunggu lama, Kael menghantamkan tinju emasnya ke tengah gerbang kristal tersebut hingga hancur lebur memercikkan ribuan pecahan kaca ke dalam ruangan utama. Di dalam ruangan bundar raksasa itu, tiga sosok tetua berjubah emas tanpa wajah sedang duduk melayang di atas kursi podium tinggi.",
                    "Mereka adalah Tiga Agung Dewan Waktu, entitas abadi yang telah memimpin tatanan alam semesta sejak detik pertama garis waktu diciptakan oleh pencipta. \"Kau adalah anomali terbesar dalam sejarah, Kael Arthur. Keberadaanmu telah mengacaukan sepuluh ribu kepastian masa depan bumi,\" ucap suara serempak dari ketiga tetua tersebut yang menggema parah. Kursi podium mereka bergerak turun, mengelilingi posisi Kael yang berdiri kokoh di tengah ruangan.",
                    "Kael mengangkat dagunya, menatap tajam ketiga entitas tanpa wajah itu dengan kemarahan yang sudah tidak bisa ditahan lagi di dalam dadanya. \"Kalian menyebut dirimu pengatur takdir, tapi kalian menghapus memori orang-orang dan menghancurkan masa depan kota demi kepuasan angka statistik kalian sendiri!\" balas Kael tegas. Tangan kanannya mengepal erat, memicu pendaran kristal kuarsa senjata peraknya hingga mencapai tingkat suhu panas tertinggi.",
                    "Ketiga tetua dewan tertawa dingin, suara mereka memicu getaran frekuensi yang membuat pilar-pilar obsidian di ruangan itu mulai retak. Mereka secara bersamaan mengangkat tongkat perunggu mereka, melepaskan badai petir kosmis berwarna hitam pekat yang langsung menyambar ke arah tubuh Kael dari tiga sudut berbeda. Serangan itu adalah energi penghapus eksistensi murni, jenis serangan yang bisa membuat targetnya lenyap dari ingatan sejarah selamanya.",
                    "Kael menahan hantaman badai hitam tersebut dengan menyilangkan kedua lengannya di depan dada, membentuk kubah pelindung emas murni yang berderit menahan beban. Tekanan serangan ketiga tetua sangat masif, memaksa lutut Kael menekuk hingga hampir menyentuh lantai obsidian yang mulai retak parah di bawah kakinya. Urat cahaya keemasan di bawah kulit tubuh Kael bergetar hebat, berada di ambang batas maksimal penahanan pasokan energi kosmis.",
                    "Di tengah kondisi kritis tersebut, Kael mendengar gema suara kakek Arthur dari dalam arloji emas di sakunya, memberikan satu wejangan penting terakhir. 'Waktu tidak bisa dilawan dengan kekerasan, Kael. Satukan detak jantungmu dengan aliran waktu mereka, dan temukan titik diam di tengah badai.' Kael memejamkan matanya, menghentikan dorongan perlawanan ototnya dan mulai menyelaraskan frekuensi energinya dengan badai petir hitam dewan.",
                    "Begitu frekuensinya sinkron, Kael menemukan celah kosong di tengah pusaran serangan dan langsung melesat maju menembus badai tanpa terluka sedikit pun. Ketiga tetua dewan tersentak kaget melihat anomali tersebut, posisi mereka terbuka lebar tanpa perisai pelindung karena seluruh energi telah dikuras untuk menyerang. Dengan satu lompatan epik, Kael menghantamkan tinju Kronos-nya langsung ke pusat lantai podium tempat ketiga tetua melayang.",
                    "Ledakan energi emas murni berskala raksasa menghancurkan seluruh ruangan bundar markas besar dewan waktu menjadi puing-puing berterbangan. Tiga kursi podium agung hancur lebur, memaksa ketiga tetua tanpa wajah terhempas jatuh dengan kondisi tongkat perunggu yang patah menjadi dua bagian. Inti kendali utama lini masa yang berada di bawah lantai ruangan kini terekspos sepenuhnya di depan mata Kael, bersinar dengan cahaya multi-warna yang rumit."
                ]
            },
            "9": {
                "title": "Episode 9: Pertempuran di Inti Waktu",
                "content": [
                    "Inti kendali utama itu berbentuk sebuah bola kaca raksasa yang di dalamnya berisi jutaan benang cahaya berkilau yang merepresentasikan kehidupan setiap manusia di bumi. Namun, keindahan tempat itu terusik ketika pemimpin jubah perak yang kabur tadi mendadak muncul dari balik bayangan pilar dengan kondisi mata yang menyala merah murka. Dia telah menyuntikkan seluruh sisa energi stasiun luar angkasa ke dalam tubuhnya sendiri, mengubah wujudnya menjadi monster raksasa berlapis baja hitam.",
                    "\"Aku tidak akan membiarkan seorang manusia merusak tatanan yang telah kami jaga selama jutaan tahun!\" raung monster baja hitam itu dengan suara yang memecahkan kaca-kaca koridor. Tangan raksasanya yang kini berubah menjadi bilah pedang energi ungu menebas cepat ke arah bola kaca inti waktu, berniat menghancurkan seluruh jalinan sejarah bumi sekalian daripada harus jatuh ke tangan Kael.",
                    "Kael melompat kilat menghadang tebasan raksasa tersebut menggunakan sarung tangan mekanis peraknya, memicu benturan keras yang menghasilkan percikan gelombang kejut elektromagnetik. Kekuatan monster baja hitam itu meningkat sepuluh kali lipat, mendesak tubuh Kael hingga bergeser mundur beberapa meter mendekati tepian jurang reaktor inti. Setiap ayunan pedang ungu monster tersebut memotong partikel oksigen di sekitar mereka, menciptakan ruang hampa udara yang menyiksa paru-paru.",
                    "Kael berusaha membalas dengan melepaskan pukulan beruntun ke arah sendi-sendi baja monster, namun pertahanan pelindung hitam makhluk itu terlalu tebal untuk ditembus tinju biasa. Monster itu menendang dada Kael dengan keras, melempar tubuh pemuda itu hingga menghantam dinding obsidian hingga muntah darah segar. Arloji emas di sakunya terlepas, jatuh menggelinding tepat di dekat lubang uap panas reaktor energi inti markas dewan.",
                    "Sambil menahan rasa sakit luar biasa di tulang rusuknya, Kael melihat monster baja hitam itu kembali mengangkat pedang raksasanya untuk melakukan serangan pamungkas penghancuran bola inti. Kael menyadari tidak ada waktu lagi untuk ragu atau memikirkan keselamatan dirinya sendiri jika ingin menyelamatkan masa lalu dan masa depannya. Dia mengaktifkan mode pengorbanan pada sarung tangan kuarsanya, memaksa seluruh inti cahaya keemasan di tubuhnya mengalir keluar sekaligus.",
                    "Tubuh Kael kini diselimuti oleh aura api emas yang sangat menyala terang, matanya memancarkan pendaran cahaya putih murni yang memancarkan tekanan kosmis luar biasa. Dia bergerak dengan kecepatan yang bahkan melompati konsep waktu itu sendiri, muncul secara instan di depan wajah monster baja hitam sebelum makhluk itu sempat menurunkan pedangnya. Dengan teriakan lantang yang mengguncang seluruh stasiun Citadel, Kael menghujamkan tinju emasnya menembus dada baja hitam monster tersebut.",
                    "Kristal kuarsa di sarung tangan Kael meledak di dalam tubuh monster, melepaskan jutaan partikel penghancur yang mengurai struktur atom baja hitam makhluk itu secara instan. Monster itu menjerit kesakitan saat tubuh raksasanya mulai retak dan memancarkan cahaya emas murni dari dalam sebelum akhirnya meledak hancur menjadi serpihan debu kosmis yang tak berbekas. Pemimpin pasukan penjaga waktu akhirnya tewas sepenuhnya di tangan sang pengendali waktu baru.",
                    "Namun, kemenangan itu harus dibayar mahal karena gelombang ledakan pamungkas tadi juga memicu reaksi berantai yang meretakkan dinding bola kaca kendali utama inti waktu. Benang-benang cahaya di dalam bola mulai kusut dan putus satu per satu, menyebabkan distorsi ruang yang membuat gravitasi stasiun luar angkasa hilang total. Kael yang sudah lemas kehabisan energi terduduk di lantai, memandangi keretakan sejarah dunia yang kini berada di ambang kehancuran total.",
                    "Dalam sisa kesadarannya yang kian menipis, Kael merayap perlahan menggapai arloji emas kakeknya yang tergeletak di tepi reaktor dengan kondisi kaca yang sudah pecah. Jemarinya yang berdarah menyentuh jarum jam arloji yang kini berhenti berdetak, menyadari apa tugas terakhir yang harus dia lakukan sebagai pemegang Kunci Kronos. Dia harus merajut kembali benang-benang cahaya yang putus itu menggunakan sisa jalinan energi kehidupan yang tersisa di dalam detak jantung terakhirnya.",
                    "Sambil memejamkan mata dan tersenyum tenang, Kael menghujamkan arloji emas tersebut langsung ke dalam celah retakan bola kaca kendali utama inti waktu. Dia menyerahkan seluruh eksistensi dirinya ke dalam sistem alam semesta, membiarkan jiwanya melebur bersama aliran data demi mengembalikan stabilitas linimasa dunia aslinya seperti semula."
                ]
            },
            "10": {
                "title": "Episode 10: Akhir dari Garis Waktu (TAMAT)",
                "content": [
                    "Cahaya putih murni yang sangat raksasa menelan seluruh pandangan mata Kael, membawa sensasi hangat yang aneh dan melenyapkan segala rasa sakit di tubuhnya. Tidak ada lagi suara ledakan, tidak ada lagi monster baja, dan tidak ada lagi stasiun ruang angkasa obsidian yang mencekam; hanya ada ketenangan luar biasa yang mutlak. Jiwa Kael melayang bebas di antara miliaran benang cahaya sejarah bumi yang kini perlahan merapikan diri kembali ke posisi semula secara otomatis.",
                    "Sistem kecerdasan kosmis Kronos menerima pengorbanan energi murni dari Kael, menjadikannya sebagai poros penyeimbang baru yang mengunci kestabilan linimasa bumi selamanya. Kerusakan paradoks abad masa depan yang sempat dilihatnya kini terhapus, digantikan oleh jalinan sejarah baru yang berjalan normal tanpa intervensi jahat para penjaga dewan. Kael tersenyum di dalam dimensi hampa tersebut, menyadari tugas besarnya melindungi dunia aslinya telah selesai dengan sempurna.",
                    "Perlahan namun pasti, kesadaran Kael mulai ditarik kembali masuk ke dalam sebuah wadah fisik yang terasa sangat familiar dengan indra perasa tubuhnya. Suara gemuruh rintik hujan yang sangat lebat menghantam atap seng mendadak kembali terdengar riuh di telinganya, memecah keheningan panjang yang sempat ia lalui. Aroma minyak tanah, bau debu tebal, dan kertas usang kembali menusuk indra penciumannya dengan sangat tajam.",
                    "Kael tersentak bangun dengan posisi duduk di atas lantai kayu, napasnya terengah-engah seperti orang yang baru saja tersadar dari mimpi buruk yang sangat panjang. Dia menoleh ke sekeliling ruangan dengan cepat dan mendapati dirinya berada kembali di dalam gudang tua milik almarhum kakeknya di sudut kota Bandung. Jam di dinding gudang menunjukkan pukul tujuh malam lewat lima belas menit—waktu yang sama persis saat dia pertama kali membuka kotak kayu geometris.",
                    "Hujan di luar masih turun dengan sangat lebat, membasahi jalanan aspal sepi tanpa ada tanda-tanda air yang membeku atau melayang kaku di udara. Kael segera memeriksa tangan kanannya, kulitnya tampak bersih normal tanpa ada guratan urat cahaya keemasan ataupun sarung tangan mekanis perak yang mengerikan. Dia meraba saku jaketnya dengan gemetar, namun sakunya kosong melompong; arloji emas kuno milik kakeknya telah lenyap sepenuhnya dari dunia fisik.",
                    "Mencari jawaban atas apa yang baru saja dialaminya, Kael melihat ke atas meja kerja kayu dan mendapati kotak penyimpanan geometris itu kini telah berubah menjadi tumpukan abu halus. Di samping abu tersebut, tergeletak selembar kertas manuskrip kuno baru yang bersih dari debu, tertulis menggunakan tinta emas yang bersinar tipis sebelum akhirnya memudar normal. Kael mengambil kertas itu dan membaca satu baris kalimat pendek yang ditulis dengan tulisan tangan kakek Arthur.",
                    "'Terima kasih telah menyelamatkan masa lalu dan masa depan kami, Kael. Kau kini bebas hidup sebagai manusia normal tanpa bayang-bayang waktu,' baca Kael dengan mata berkaca-kaca. Air mata keharuan dan kelegaan akhirnya menetes membasahi kertas manuskrip tersebut, menghapus seluruh beban berat yang sempat mengunci pundaknya selama petualangan dimensi. Sejarah telah menuliskan jalurnya yang paling aman, dan nama Kael aman tersimpan sebagai pahlawan rahasia alam semesta.",
                    "Kael melangkah menuju jendela kaca gudang tua, menyeka embun yang menutupi permukaannya untuk memandang ke arah jalanan luar yang diguyur hujan. Di bawah temaram lampu jalan kota yang akrab, dia melihat kendaraan mobil dan motor berlalu lalang normal dengan cipratan air, tidak ada kapal induk jam pasir ataupun robot. Dunia berjalan sebagaimana mestinya, dan itu adalah pemandangan paling indah yang pernah disaksikan oleh mata Kael sepanjang hidupnya.",
                    "Dia merapikan jaketnya yang kini terasa hangat, melangkah lebar menuju pintu keluar gudang tua, lalu menguncinya rapat-rapat dari luar dengan bunyi klik yang tenang. Kael berjalan menyusuri trotoar jalanan malam di bawah rintik gerimis, merasakan setiap detik waktu yang mengalir maju dengan senyuman penuh kebahagiaan di wajahnya. Dia tidak lagi ingin menghentikan waktu atau melompati abad; hidup di masa sekarang bersama orang-orang yang dicintainya adalah takdir terbaik yang ia miliki.",
                    "Lembaran petualangan sang pengendali waktu kini telah mencapai halaman terakhirnya dengan penutup yang damai dan sempurna di lini masa asli bumi. Arloji kuno itu mungkin telah lenyap dari sejarah fisik dunia, namun gema keberanian Kael akan terus berdetak abadi di dalam setiap detik aliran waktu semesta. Cerita tentang anak muda mahasiswa tingkat akhir dari kota Bandung itu kini resmi berakhir dengan kemenangan mutlak atas takdir hidupnya. (TAMAT)"
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
                    "Kayla adalah seorang mahasiswi jurusan seni musik yang sedang mengalami kebuntuan besar dalam menyusun compositional nada untuk tugas akhir kelulusannya. Sudah berminggu-minggu jemarinya hanya diam di atas tuts piano tanpa mampu melahirkan satu pun melodi indah yang bisa menyentuh perasaan pendengarnya. Baginya, musik bukan sekadar rangkaian nada, melainkan sebuah bahasa jiwa yang harus memiliki nyawa, dan nyawa itulah yang saat ini hilang dari dalam dirinya.",
                    "Pandangan Kayla teralih ketika pintu kafe berdering pelan, menandakan seorang pengunjung baru saja masuk menerobos rintik hujan sore yang semakin menderu. Seorang pemuda dengan jaket denim basah dan membawa sebuah tas hardcase biola besar melangkah masuk sembari menyeka sisa air hujan di wajahnya. Pemuda itu mengedarkan pandangan ke seluruh ruangan kafe yang sepi, lalu memilih berjalan menuju sebuah sudut yang terletak tepat di seberang meja Kayla.",
                    "Tanpa memedulikan suasana sekitar, pemuda misterius itu mengeluarkan sebuah biola kayu berwarna cokelat gelap yang tampak sangat terawat dari dalam tasnya. Dia memejamkan mata sejenak, mengambil napas dalam-dalam, lalu mulai menggesekkan bow ke atas senar biola dengan gerakan tangan yang sangat anggun dan penuh perasaan. Detik itu juga, sebuah alunan melodi klasik yang melankolis namun sangat indah mengalir memenuhi seluruh sudut ruangan kafe tua itu.",
                    "Suara biola tersebut terdengar begitu magis, seolah-olah berinteraksi langsung dengan rintik hujan di luar dan detak jantung siapa pun yang mendengarnya. Kayla terpaku di tempat duduknya, sendok kecil yang ia pegang hampir saja terlepas dari tangan karena rasa takjub yang luar biasa yang tiba-tiba menyergap dadanya. Melodi yang dimainkan pemuda itu adalah jenis melodi yang selama ini dicari oleh Kayla—sebuah simfoni yang memiliki jiwa, kerinduan, dan cerita mendalam.",
                    "Sambil terus mendengarkan dengan mata yang berkaca-kaca, Kayla segera mengeluarkan buku catatan musik kecil dari dalam tasnya dan mulai menuliskan notasi nada yang ia dengar secara terburu-buru. Penanya menari-nari di atas kertas, mencoba merekam setiap gema emosi yang dilepaskan oleh setiap gesekan biola pemuda tersebut dengan sangat presisi. Untuk pertama kalinya dalam satu bulan terakhir, Kayla merasakan inspirasi mengalir deras bagaikan air bah di dalam kepalanya.",
                    "Namun, kebahagiaan itu hanya bertahan beberapa menit saja ketika alunan musik biola itu mendadak berhenti di tengah jalan pada nada yang menggantung. Kayla mendongak dengan cepat, merasa kecewa karena simfoni indah tersebut terputus sebelum mencapai bagian klimaks atau akhir dari ceritanya. Di seberang sana, pemuda pemilik biola itu tampak sedang merapikan kembali alat musiknya ke dalam tas dengan tergesa-gesa, seolah menyadari sesuatu yang mendesak.",
                    "Sebelum Kayla sempat berdiri untuk menghampirinya, pemuda itu sudah melangkah lebar menuju pintu keluar kafe, meninggalkan aroma parfum cedarwood yang samar di udara. Kayla yang tidak ingin kehilangan kesempatan emasnya segera membereskan barang-barang dan berlari keluar kafe untuk mengejar pemuda misterius itu di tengah guyuran hujan. Namun, saat kakinya menginjak trotoar jalan yang basah, sosok pemuda pembawa biola tersebut sudah menghilang di balik kerumunan payung orang berjalan.",
                    "With naskah terengah-engah dan tubuh yang mulai basah oleh gerimis, Kayla menunduk lesu menatap buku catatan musiknya yang sedikit terkena tetesan air hujan. Saat itulah matanya menangkap sesuatu yang terjatuh di atas paving block trotoar tepat di tempat ia berdiri, sebuah benda yang tampaknya milik pemuda tadi. Itu adalah sebuah amplop kecil berwarna merah muda yang diikat menggunakan tali rami tipis dengan sebuah gantungan kunci berbentuk kunci g-clef kecil.",
                    "Kayla memungut amplop merah muda tersebut dengan hati-hati agar tidak robek karena basah, lalu perlahan membuka lipatan kertas di dalamnya yang ternyata berisi tulisan tangan rapi. 'Untuk simfoni yang belum selesai, temui aku di ujung dermaga saat senja kembali berpadu dengan hujan,' baca Kayla pelan di balik deru suara badai sore itu. Jantungnya berdegup kencang, menyadari bahwa untaian surat misterius ini adalah awal dari sebuah babak baru yang akan mengubah seluruh hidup dan karya musiknya."
                ]
            },
            "2": {
                "title": "Episode 2: Surat Merah Muda dan Dermaga Sunyi",
                "content": [
                    "Genggaman tangan Kayla pada kertas surat berwarna merah muda itu mengerat, mengabaikan rintik gerimis sore yang mulai membasahi helai rambutnya di sepanjang trotoar jalan Braga. Kata-kata yang tertulis di dalam kertas tersebut terasa berputar-putar di dalam benaknya, memicu kombinasi rasa penasaran yang mendalam sekaligus getaran aneh yang belum pernah ia rasakan sebelumnya. Siapakah pemuda pembawa biola misterius itu? Dan melodi indah macam apa yang sedang coba dia sampaikan lewat simfoni gantungnya tadi?",
                    "Tanpa membuang waktu lebih lama lagi, Kayla segera menyimpan surat itu ke dalam tas rajutnya dengan sangat hati-hati, lalu berbalik arah menuju halte bus terdekat di ujung jalan. Tujuannya hanya satu malam ini: Dermaga Utara, sebuah tempat sepi di pinggiran kota yang biasanya hanya dikunjungi oleh para nelayan tua atau pencari ketenangan di kala senja tiba. Perjalanan menggunakan bus kota terasa sangat lama bagi Kayla, karena pikirannya sudah melompat jauh ke ujung dermaga membayangkan pertemuan mereka.",
                    "Bus kota akhirnya berhenti di halte terdekat dari kawasan pantai saat jarum jam menunjukkan pukul lima sore lewat tiga puluh menit, tepat saat awan mendung menyatu dengan warna jingga senja. Kayla turun dari bus dengan langkah kaki setengah berlari, membelah embusan angin laut yang membawa aroma garam khas dan udara dingin yang menusuk kulit jaketnya. Dari kejauhan, siluet jembatan kayu dermaga tua yang menjulur panjang ke arah lautan lepas mulai terlihat samar di balik kabut gerimis tipis.",
                    "Langkah Kayla melambat ketika sepatunya mulai menginjak papan-papan kayu dermaga yang basah dan menimbulkan suara ketukan berongga yang khas setiap kali ia melangkah maju. Suasana di sekitar dermaga benar-benar sangat sunyi, hanya ada suara deburan ombak kecil yang menghantam tiang-tiang penyangga beton di bawah jembatan jembatan kayu tersebut. Di ujung terjauh dari dermaga yang berkabut itu, terlihat sesosok siluet pria jangkung sedang berdiri diam membelakangi arah kedatangan Kayla.",
                    "Pemuda itu mengenakan jaket denim yang sama dengan yang ia lihat di kafe Braga tadi, berdiri tegak sembari memandangi hamparan laut lepas yang mulai menggelap ditelan malam. Di tangan kanannya, bow biola sudah tergenggam erat, seolah-olah dia memang sedang menunggu kehadiran instrumen pelengkap untuk memulai pertunjukan musik rahasianya. Kayla menghentikan langkah kakinya tepat lima meter di belakang pemuda tersebut, menahan napas karena tidak ingin merusak keheningan magis tempat itu.",
                    "\"Kau datang lebih cepat dari yang kukira, Kayla,\" ucap pemuda itu perlahan tanpa membalikkan badannya untuk melihat wajah Kayla yang terkejut setengah mati di belakangnya. Kayla terkesiap, jantungnya berdegup dua kali lebih cepat mendengar pemuda misterius itu mengetahui nama panggilannya dengan sangat fasih padahal mereka belum berkenalan. Bagaimana mungkin orang asing yang baru ia temui secara tidak sengaja di sebuah kafe sejam lalu bisa mengetahui identitas dirinya?",
                    "Pemuda itu perlahan membalikkan tubuhnya menghadap Kayla, menampilkan seraut wajah tegas dengan sepasang mata cokelat hangat yang memancarkan ketenangan yang luar biasa bagi siapa pun yang melihatnya. Dia menyunggingkan senyum tipis yang ramah, lalu mengangkat biola kayu kunonya ke atas pundak kirinya dengan gerakan yang sangat natural dan terlatih. \"Jangan heran bagaimana aku tahu namamu; buku catatan musik yang kau jatuhkan di bawah meja kafe tadi memiliki nama pemilik di sampul depannya.\"",
                    "Rasa malu langsung merona merah di kedua pipi Kayla membuat mahasiswi seni musik itu menunduk canggung sembari meraba tasnya, menyadari kebodohannya yang teledor menjatuhkan barang penting. Namun, rasa canggung itu seketika sirna ketika pemuda itu mulai menggesekkan bow ke atas senar biolanya, melanjutkan bait melodi gantung yang terputus di kafe jalan Braga tadi. Nada-nada tinggi yang melankolis kembali meluncur indah, memecah kesunyian malam dermaga dan berpadu sempurna dengan suara deburan ombak pantai.",
                    "Kali ini, alunan musiknya terasa jauh lebih megah dan emosional, seolah-olah pemuda itu sedang menuangkan seluruh isi hatinya ke dalam setiap gesekan dawai kayu biola tersebut. Kayla kembali terpaku di tempatnya berdiri, air mata kekaguman perlahan menetes di pipinya karena melodi ini merambat masuk ke dalam sukmanya, menghidupkan kembali inspirasi musiknya yang sempat mati. Dia merasakan ada sebuah ikatan batin yang tak kasat mata mulai terajut di antara musik biola pemuda itu dan detak jiwanya sendiri.",
                    "Saat melodi mencapai puncaknya di bawah rintik hujan malam yang kian menderu, pemuda itu menghentikan gesekannya dengan satu nada panjang yang bergetar lembut di udara. Dia menurunkan biolanya, menatap lurus ke dalam manik mata Kayla dengan pandangan yang penuh arti di bawah temaram lampu dermaga yang mulai menyala redup. Pemuda itu mengulurkan tangan kirinya ke arah Kayla sembari berkata, \"Namaku Arya. Mari kita selesaikan komposisi simfoni hujan ini bersama-sama, Kayla.\""
                ]
            },
            "3": { 
            "title": "Episode 3: Resonansi Pertemuan", 
            "content": [
                "Pertemuan di dermaga itu bukan sekadar kebetulan, melainkan awal dari ikatan yang mulai mengikat batin Kayla dan Arya. Setelah simfoni hujan berakhir, mereka duduk di kedai kopi kayu kecil di pinggir pantai, berbagi cerita tentang mimpi dan kegagalan yang mereka alami. Arya mengakui bahwa biolanya adalah satu-satunya warisan berharga dari ayahnya yang hilang di laut bertahun-tahun silam. Kayla, di sisi lain, menceritakan tentang kebuntuan nada yang selama ini menghantui karya musiknya di kampus.",
                "Ada getaran aneh yang terasa di udara setiap kali mereka bertukar pandang di bawah temaram lampu dermaga yang bergoyang ditiup angin. Tanpa sadar, mereka mulai menggabungkan notasi dari buku catatan Kayla dengan melodi biola Arya untuk menciptakan sesuatu yang baru. Malam itu, untuk pertama kalinya, notasi musik yang semula mati di atas kertas mulai memiliki nyawa dan harmoni yang memikat. Hujan masih setia mengguyur, namun suasana di dalam kedai terasa hangat oleh tawa dan antusiasme dua seniman muda tersebut.",
                "Arya bercerita bahwa dia sering memainkan biolanya di berbagai sudut kota Bandung setiap kali dia merasa kehilangan arah hidupnya. Kayla terpukau dengan filosofi Arya tentang musik; bahwa nada yang paling indah sering kali lahir dari kesedihan yang terdalam. Mereka menghabiskan waktu berjam-jam hingga penjaga kedai harus memberi tahu bahwa mereka harus segera tutup. Saat berpisah di bawah halte yang basah, mereka berjanji untuk bertemu kembali di tempat yang sama besok sore untuk melanjutkan simfoni mereka.",
                "Kayla tidak bisa tidur sepanjang malam; pikirannya dipenuhi oleh resonansi nada biola Arya yang terus terngiang di dalam kepalanya. Dia mulai menuliskan melodi-melodi baru dengan semangat yang belum pernah ia rasakan sebelumnya, merasa bahwa inspirasinya kini telah kembali sepenuhnya. Di sisi lain, Arya menatap biolanya dengan tatapan yang menyiratkan harapan baru, seolah sosok Kayla adalah kepingan puzzle yang selama ini ia cari.",
                "Keesokan harinya, Kayla datang ke kampus dengan senyum yang terus mengembang, membuat teman-teman sekelasnya merasa heran akan perubahan drastisnya. Dia segera menunjukkan draf simfoni yang mereka buat bersama kepada dosen pembimbingnya, dan respon sang dosen sangatlah positif. Dosen itu menyatakan bahwa ada kekuatan emosional yang sangat jujur dan kuat di dalam komposisi musik yang Kayla bawa hari ini.",
                "Arya pun merasakan perubahan yang sama, dia tidak lagi merasa sendirian saat harus menanggung beban masa lalunya yang kelam sendirian. Dia merasa ada seseorang yang bersedia mendengarkan melodi hatinya tanpa perlu menghakiminya sedikit pun dari sudut pandang mana pun. Setiap kali dia memegang bow biolanya, ia membayangkan wajah Kayla yang penuh semangat saat mereka berdiskusi tentang musik.",
                "Pertemuan mereka di kedai dermaga menjadi rutin, bukan lagi karena surat misterius, melainkan karena rasa saling butuh untuk menciptakan karya seni. Mereka mulai berani bermimpi untuk menggelar konser kecil di sebuah galeri seni tua milik sahabat Kayla yang sudah lama terbengkalai. Keberanian itu tumbuh subur seiring dengan semakin seringnya mereka menghabiskan waktu bersama di bawah rintik hujan kota Bandung.",
                "Namun, di balik kebahagiaan tersebut, ada rahasia tentang hilangnya ayah Arya yang perlahan mulai terungkap melalui petunjuk kecil dari surat-surat tua. Kayla berjanji akan membantu Arya menelusuri jejak ayahnya setelah tugas akhir mereka selesai, menciptakan janji setia yang semakin mempererat hubungan mereka. Mereka berdua tidak menyadari bahwa simfoni yang mereka susun adalah kunci dari sebuah jawaban atas kehilangan besar di masa lalu.",
                "Dunia di sekitar mereka seolah mendukung pertemuan tersebut, memberikan suasana yang selalu senada dengan apa yang sedang mereka rasakan setiap hari. Rasa takut akan kegagalan mulai pudar, digantikan oleh keyakinan bahwa mereka mampu melakukan apa pun selama mereka bersama dan saling mendukung.",
                "Senja hari berikutnya, mereka kembali berdiri di dermaga, kali ini bukan karena keraguan, melainkan untuk menegaskan kesepakatan bahwa mereka akan menyelesaikan simfoni ini sampai titik nadanya yang terakhir."
            ]
        },
        "4": { 
            "title": "Episode 4: Rahasia di Balik Nada", 
            "content": [
                "Pencarian terhadap jejak ayah Arya membawa mereka ke sebuah perpustakaan kota tua yang menyimpan arsip-arsip sejarah tentang seniman-seniman lokal terdahulu. Di antara debu dan tumpukan buku, Kayla menemukan sebuah foto tua yang menampilkan seorang pria memegang biola yang persis sama dengan milik Arya.",
                "Foto itu tertanggal dua puluh tahun yang lalu, dan di baliknya tertulis sebuah kode notasi musik yang sangat rumit dan penuh dengan misteri. Arya menatap foto itu dengan napas tertahan, menyadari bahwa ayahnya mungkin saja menyembunyikan sesuatu yang sangat besar melalui melodi-melodi ciptaannya.",
                "Mereka mulai memainkan kode notasi tersebut dengan kombinasi biola dan piano, dan hasilnya adalah sebuah suara yang sangat aneh serta menggema. Suara itu bukan sekadar musik, melainkan sebuah frekuensi yang mampu memicu mekanisme tersembunyi di dalam ruangan tua tempat mereka berlatih selama ini.",
                "Dinding ruangan tersebut perlahan terbuka, menampilkan sebuah brankas kuno yang berisi tumpukan surat dan partitur musik yang belum pernah dipublikasikan oleh dunia. Arya membuka surat-surat tersebut satu demi satu dengan tangan yang gemetar, menemukan pengakuan ayahnya tentang sebuah rahasia besar di balik simfoni itu.",
                "Ternyata, ayah Arya bukanlah sekadar seniman, melainkan seorang detektif musik yang mencoba melindungi artefak penting melalui nada-nada simfoni ciptaannya sendiri. Simfoni yang sedang disusun oleh Kayla dan Arya adalah bagian terakhir dari puzzle yang selama ini dicari oleh banyak orang selama puluhan tahun.",
                "Kayla merasa merinding saat menyadari bahwa setiap nada yang mereka mainkan memiliki implikasi nyata yang bisa mengubah jalan hidup orang-orang di sekitar mereka. Mereka kini tidak hanya sedang mengerjakan tugas akhir, tetapi sedang melindungi warisan berharga yang bisa berdampak pada banyak orang.",
                "Ketegangan mulai menyelimuti hubungan mereka, karena ada pihak-pihak misterius yang mulai memantau pergerakan mereka di balik bayangan kota Bandung yang tenang. Arya memutuskan untuk merahasiakan penemuan ini dari siapa pun, bahkan dari sahabat terdekatnya, agar Kayla tetap berada dalam kondisi yang aman.",
                "Namun, Kayla menolak untuk membiarkan Arya menghadapi ancaman ini sendirian, menegaskan bahwa mereka adalah tim yang telah terikat oleh simfoni yang mereka ciptakan. Keberanian Kayla membuat Arya merasa yakin bahwa dia memiliki seseorang yang benar-benar bisa dia andalkan dalam situasi yang sangat berbahaya ini.",
                "Malam itu, mereka berlatih dengan sangat intensif, mencoba mengintegrasikan semua rahasia yang mereka temukan ke dalam simfoni yang sedang disusun secara rapi.",
                "Hujan turun kembali dengan sangat deras, seolah-olah langit pun ingin menjadi saksi bisu atas rahasia besar yang perlahan mulai terkuak dari masa lalu Arya."
            ]
        },
        "5": { 
            "title": "Episode 5: Konser di Bawah Hujan", 
            "content": [
                "Persiapan untuk konser kecil di galeri seni tua semakin memuncak, dengan poster-poster sederhana yang mulai mereka sebar di sekitar kampus dan kafe langganan. Arya merasa gugup, namun Kayla selalu hadir untuk memberinya dukungan mental setiap kali keraguan muncul di dalam pikiran pemuda tersebut di tengah persiapan.",
                "Galeri tua itu disulap menjadi tempat yang sangat magis dengan lampu-lampu gantung yang remang dan dekorasi bunga-bunga kering yang menambah kesan estetik klasik. Banyak orang mulai berdatangan, dari mulai mahasiswa seni hingga orang-orang asing yang tertarik dengan alunan musik yang sayup-sayup terdengar dari arah galeri.",
                "Tepat saat konser akan dimulai, hujan turun kembali, memberikan sentuhan atmosfer yang sempurna bagi simfoni yang akan mereka tampilkan di panggung tersebut malam ini. Saat mereka mulai memainkan nada pertama, seluruh ruangan hening seketika, terhipnotis oleh harmoni biola Arya dan piano yang dimainkan dengan sangat indah oleh Kayla.",
                "Setiap nada yang keluar seolah bercerita tentang kehilangan, pencarian, dan penemuan kembali cinta di tengah-tengah badai kehidupan yang tidak pernah menentu arahnya.",
                "Di tengah permainan musik, Arya melihat sekelompok pria berjas gelap yang berdiri di belakang ruangan, membuat hatinya sempat berdegup kencang karena rasa waspada.",
                "Namun, saat melihat Kayla yang tersenyum tenang di depan piano, Arya membuang jauh-jauh rasa takutnya dan melanjutkan gesekan biolanya dengan perasaan yang sangat mendalam.",
                "Musik mereka seolah menjadi perisai yang melindungi mereka dari ancaman apa pun yang mungkin datang saat konser sedang berlangsung dengan sangat emosional.",
                "Konser itu menjadi titik balik bagi mereka berdua, memberikan pengakuan bahwa mereka bukan sekadar pemain musik, melainkan penyampai pesan lewat harmoni.",
                "Di akhir konser, tepuk tangan penonton pecah dengan sangat meriah, membuktikan bahwa simfoni mereka benar-benar berhasil menyentuh jiwa siapa pun yang mendengarkannya.",
                "Kayla dan Arya saling berpandangan dengan kebahagiaan yang tak terlukiskan, menyadari bahwa mereka baru saja melewati salah satu momen paling berharga dalam hidup mereka."
            ]
        },
        "6": { 
            "title": "Episode 6: Pertengkaran Nada", 
            "content": [
                "Setelah kesuksesan konser, muncul tekanan dari pihak luar yang ingin mengambil alih karya mereka untuk kepentingan komersial yang tidak bertanggung jawab oleh pihak lain.",
                "Arya menolak keras tawaran tersebut karena takut rahasia ayahnya akan bocor dan disalahgunakan oleh orang-orang yang hanya mengincar keuntungan materi belaka.",
                "Namun, Kayla merasa ini adalah kesempatan emas untuk membawa karya mereka ke tingkat nasional dan dikenal oleh lebih banyak orang di seluruh penjuru negeri.",
                "Pertengkaran pun tak terelakkan; mereka berselisih paham tentang visi masa depan dari simfoni yang selama ini mereka bangun dengan penuh keringat dan air mata.",
                "Kayla merasa Arya terlalu paranoid, sementara Arya merasa Kayla terlalu naif dalam memandang dunia yang keras dan penuh dengan kepentingan terselubung tersebut.",
                "Hubungan mereka menjadi dingin, dan mereka sempat berhenti berlatih musik bersama selama beberapa hari, membuat suasana di antara mereka menjadi sangat sunyi dan kaku.",
                "Kayla akhirnya menyadari bahwa Arya melakukan semua itu demi melindunginya, namun dia tetap merasa bahwa kejujuran adalah jalan yang terbaik dalam menghadapi masalah.",
                "Arya mendatangi rumah Kayla pada suatu malam untuk meminta maaf, mengakui bahwa dia seharusnya lebih terbuka sejak awal tentang segala ketakutannya selama ini.",
                "Mereka akhirnya berbaikan dengan sebuah pelukan hangat, menyadari bahwa ego pribadi tidak boleh merusak keindahan simfoni yang telah mereka bangun bersama.",
                "Keduanya kembali ke meja latihan dengan tekad yang lebih kuat untuk tetap menjaga simfoni mereka tetap murni dan bebas dari kepentingan siapa pun."
            ]
        },
        "7": { 
            "title": "Episode 7: Harmoni yang Tersembunyi", 
            "content": [
                "Mereka memutuskan untuk merekam simfoni tersebut secara diam-diam agar karya itu tetap terjaga keasliannya dan tidak bisa diubah oleh siapa pun di masa depan.",
                "Dalam proses rekaman, mereka menemukan bahwa ada satu nada rahasia yang selama ini belum pernah mereka mainkan karena tingkat kesulitannya yang luar biasa.",
                "Nada tersebut adalah kunci utama untuk menyatukan semua potongan puzzle rahasia yang ditinggalkan oleh ayah Arya di dalam partitur-partitur musik kuno tersebut.",
                "Setelah berlatih berkali-kali hingga jari-jari mereka lecet, akhirnya mereka berhasil membunyikan nada tersebut dengan harmoni yang sangat indah dan sempurna sekali.",
                "Suara itu memicu reaksi yang lebih besar daripada sebelumnya, di mana sebuah peta lokasi tersembunyi muncul dari pantulan cahaya di dinding galeri tua tersebut.",
                "Peta itu menunjukkan lokasi di mana ayah Arya terakhir kali terlihat sebelum menghilang secara misterius dua puluh tahun yang lalu di sebuah gunung terpencil.",
                "Mereka memutuskan untuk melakukan perjalanan ke gunung tersebut segera setelah urusan kampus Kayla selesai, sebagai langkah terakhir dalam pencarian panjang selama ini.",
                "Persiapan pun dilakukan dengan matang, termasuk membekali diri dengan segala catatan dan dokumen yang mereka temukan di brankas tersembunyi di dalam galeri seni.",
                "Mereka merasa bahwa jawaban atas segala misteri akan segera terungkap di puncak gunung tersebut, dan itu memberikan keberanian bagi mereka berdua.",
                "Simfoni hujan kini bukan lagi sekadar lagu, melainkan sebuah kompas yang menuntun mereka pada kebenaran yang selama ini terkubur dalam-dalam di masa lalu."
            ]
        },
        "8": { 
            "title": "Episode 8: Panggung Terakhir", 
            "content": [
                "Perjalanan ke gunung terpencil itu tidak mudah, dengan medan yang terjal dan cuaca yang selalu berubah secara ekstrem di sepanjang rute pendakian mereka.",
                "Kayla dan Arya harus saling membantu setiap kali salah satu dari mereka merasa lelah atau kesulitan menempuh jalur yang sangat menantang bagi pendaki pemula.",
                "Di tengah jalan, mereka sempat terperangkap badai yang membuat mereka harus berlindung di sebuah gua kecil selama satu malam penuh yang sangat dingin.",
                "Dalam keadaan terisolasi, mereka semakin dekat dan mengungkapkan perasaan satu sama lain yang selama ini hanya bisa tersampaikan lewat alunan musik indah mereka.",
                "Arya berjanji bahwa apa pun hasil pencarian ini nanti, dia akan selalu berada di samping Kayla, apa pun tantangan yang akan mereka hadapi di depan.",
                "Pagi harinya, cuaca membaik dan mereka sampai di lokasi yang ditunjukkan oleh peta rahasia tersebut, sebuah tempat yang tampak seperti reruntuhan studio musik tua.",
                "Di dalam studio itu, mereka menemukan sebuah instrumen musik kuno yang terhubung dengan sistem perekam suara tua yang masih bisa berfungsi dengan baik sekali.",
                "Arya memainkan simfoni hujan mereka di sana, dan rekaman suara ayahnya secara otomatis muncul, memberikan pesan terakhir yang sangat menyentuh bagi anaknya sendiri.",
                "Ayah Arya ternyata selama ini bukan hilang, melainkan sengaja menjauh untuk melindungi keluarganya dari ancaman orang-orang yang menginginkan kekuatan musiknya.",
                "Pesan itu membawa kedamaian bagi jiwa Arya yang selama puluhan tahun tersiksa oleh ketidakpastian akan nasib ayahnya yang sempat dianggap telah meninggal dunia."
            ]
        },
        "9": { 
            "title": "Episode 9: Melodi Perpisahan", 
            "content": [
                "Namun, pesan itu juga menjelaskan bahwa ayahnya kini telah berpindah tempat ke luar negeri dan sedang berada dalam kondisi kesehatan yang cukup kritis saat ini.",
                "Arya harus memutuskan antara menetap bersama Kayla atau pergi menyusul ayahnya untuk memberikan salam perpisahan yang layak sebelum semuanya menjadi terlambat bagi mereka.",
                "Kayla dengan sangat bijak mendukung Arya untuk pergi menyusul ayahnya, meskipun itu artinya mereka harus berpisah untuk waktu yang cukup lama ke depannya.",
                "Momen perpisahan di bandara terasa sangat berat, dengan simfoni hujan yang terus mengiringi mereka berdua sebagai kenangan akan pertemuan pertama mereka dahulu.",
                "Mereka berjanji untuk tetap berkomunikasi lewat surat dan musik, menjaga agar melodi mereka tidak hilang meski dipisahkan oleh jarak yang sangat jauh sekali.",
                "Arya pergi dengan membawa biola warisan ayahnya, sementara Kayla tinggal di Bandung untuk melanjutkan mimpinya dengan semangat yang diberikan oleh Arya selama ini.",
                "Hari-hari setelah kepergian Arya terasa sangat sunyi bagi Kayla, namun dia selalu menyibukkan diri dengan berlatih piano untuk mempersiapkan konser tunggal pertamanya nanti.",
                "Surat-surat dari Arya menjadi pelipur lara, menceritakan tentang kondisi ayahnya yang mulai membaik berkat kehadiran anaknya yang sudah lama tidak ditemuinya itu.",
                "Setiap malam, Kayla memainkan simfoni mereka, membayangkan Arya sedang memainkan biolanya di belahan dunia lain pada waktu yang sama dengannya sekarang.",
                "Mereka belajar bahwa cinta bukan tentang selalu bersama dalam satu tempat, melainkan tentang tetap memiliki satu harmoni yang sama meski dipisahkan oleh samudra luas."
            ]
        },
        "10": { 
            "title": "Episode 10: Simfoni yang Sempurna (TAMAT)", 
            "content": [
                "Dua tahun telah berlalu sejak perpisahan haru di bandara, waktu yang terasa begitu panjang bagi Kayla yang menghabiskan hari-harinya di balik tuts piano dan kenangan tentang melodi hujan. Kini, Kayla telah bertransformasi menjadi seorang pianis sukses yang karyanya tidak hanya dikenal di tanah air, tetapi juga mulai menyentuh hati para pecinta musik di luar negeri. Namun, di balik lampu sorot panggung dan tepuk tangan meriah yang menyambutnya setiap malam, ada satu kursi penonton yang selalu ia harap akan terisi oleh seseorang yang sangat dirindukannya.",
                "Malam itu, di gedung pertunjukan musik termegah di jantung kota Bandung, sebuah konser reuni bertajuk 'Simfoni Hujan Terakhir' diselenggarakan dengan persiapan yang sangat matang selama berbulan-bulan. Ruangan dipenuhi oleh lautan manusia yang antusias, menanti perpaduan antara suara piano yang agung dan alunan biola yang legendaris. Di tengah suasana yang tegang namun magis itu, lampu panggung meredup, menyisakan satu sorot cahaya yang jatuh tepat di hadapan sosok pria yang baru saja kembali dari negeri seberang.",
                "Arya berjalan ke tengah panggung dengan langkah yang tegap, memegang biola warisan ayahnya yang kini tampak berkilau di bawah lampu panggung. Tatapan mata mereka bertemu untuk pertama kalinya setelah dua tahun terpisah jarak dan waktu, dan seketika itu pula, seluruh beban kerinduan yang selama ini tersimpan rapat seolah mencair begitu saja. Tanpa satu kata pun yang terucap, biola Arya mulai melengkingkan nada pembuka, disusul oleh denting piano Kayla yang masuk dengan begitu lembut, menciptakan resonansi yang membuat bulu kuduk para penonton berdiri.",
                "Simfoni hujan yang mereka mainkan malam itu terdengar jauh lebih matang, menceritakan seluruh perjalanan cinta, pahitnya perpisahan, dan perjuangan pencarian yang mereka lalui sejak pertemuan pertama di dermaga tua. Setiap nada yang mereka hasilkan bukan lagi sekadar musik, melainkan sebuah percakapan jiwa yang jujur, menceritakan bagaimana dua hati tetap setia menanti meski dipisahkan oleh samudra yang luas. Penonton terdiam, terhanyut ke dalam suasana yang begitu emosional hingga banyak di antara mereka yang tak kuasa menahan air mata haru.",
                "Di tengah puncak konser, saat alunan musik sedang mencapai klimaksnya yang paling intens, Arya perlahan menurunkan biolanya dan berjalan menuju piano Kayla. Dengan napas yang memburu namun penuh keyakinan, Arya mengambil sebuah kotak beludru kecil dari saku jasnya tepat di hadapan ribuan penonton yang seketika menahan napas dalam keheningan total. Di bawah sorotan lampu panggung yang menyilaukan, Arya berlutut di hadapan Kayla, memberikan kejutan luar biasa yang akan mengubah hidup mereka selamanya.",
                "Kayla yang terkejut setengah mati hanya bisa menutup mulutnya dengan tangan yang bergetar hebat, sementara air mata kebahagiaan mulai membanjiri pipinya di hadapan ribuan saksi mata. Arya mengajukan sebuah pertanyaan sederhana yang telah ia siapkan selama dua tahun lamanya, dan jawaban Kayla yang berbisik 'ya' di antara isak tangisnya membuat seisi gedung bergemuruh dengan sorakan kebahagiaan yang sangat luar biasa. Momen itu benar-benar menjadi klimaks paling indah dari seluruh rangkaian perjalanan simfoni hidup yang mereka bangun dengan penuh air mata dan pengorbanan.",
                "Di barisan paling depan, ayah Arya duduk dengan senyuman yang sangat bangga, menyaksikan anaknya kini telah menemukan kebahagiaan sejati bersama sosok wanita yang mampu melengkapi hidupnya dengan sempurna. Kehadirannya di sana menjadi bukti bahwa luka masa lalu telah sembuh sepenuhnya, digantikan oleh jalinan keluarga baru yang hangat dan penuh kasih sayang. Kayla memeluk Arya dengan erat di atas panggung, menyempurnakan simfoni hidup mereka menjadi sebuah janji suci untuk menua bersama, melewati setiap musim kehidupan yang akan datang.",
                "Konser tersebut ditutup dengan tepuk tangan yang meriah dan tak kunjung usai, sebuah penghormatan bagi pasangan yang telah membuktikan bahwa cinta sejati dan musik adalah bahasa yang paling kuat di dunia. Setiap orang yang pulang dari gedung pertunjukan malam itu membawa pulang potongan emosi yang baru saja mereka saksikan, sebuah kisah tentang keteguhan hati yang luar biasa indah. Bagi Kayla dan Arya, malam itu bukan sekadar akhir dari konser, melainkan babak baru yang sesungguhnya dari kehidupan mereka berdua.",
                "Saat mereka berdua berjalan meninggalkan gedung pertunjukan menuju mobil yang sudah menunggu, hujan turun dengan sangat deras membasahi jalanan kota Bandung. Namun, kali ini hujan bukan lagi menjadi simbol kesedihan atau perpisahan, melainkan hujan berkah yang membasahi janji setia mereka di bawah payung hitam yang sama. Mereka tertawa lepas di bawah guyuran air, merayakan segala keindahan dan kesempurnaan yang telah mereka capai setelah melewati berbagai badai kehidupan.",
                "Simfoni mereka tidak benar-benar berakhir malam itu, karena melodi itu akan terus berlanjut di sepanjang napas yang mereka bagi setiap hari hingga masa tua menjemput. Di balik kabut malam Bandung yang dingin, cahaya harapan bersinar terang dari jendela rumah mereka, menjadi penanda bahwa segala sesuatu yang mereka susun dengan cinta akan selalu menjadi simfoni yang paling sempurna (TAMAT)."
            ]
        
        }
        }
    }
};

// ==========================================
// LOGIKA MENAMPILKAN CERITA & TOMBOL NAVIGASI
// ==========================================
let currentNovelId = "";
let currentEpisodeId = 1;

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const novelId = urlParams.get('novel');
    const episodeId = urlParams.get('ep');

    if (document.getElementById('storyContent') && novelId && episodeId) {
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

            // Logika Mengubah Tombol Next Menjadi Tombol Selesai Khusus Episode 10
            const nextButton = document.getElementById('btnNext');
            if (currentEpisodeId === 10) {
                nextButton.innerText = "🏁 Tamat / Kembali Ke Koleksi Novel";
                nextButton.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
                nextButton.style.color = "white";
                nextButton.style.borderColor = "transparent";
            } else {
                nextButton.innerText = "Episode Selanjutnya ➡";
                nextButton.style.background = "transparent";
                nextButton.style.color = "var(--accent-color)";
                nextButton.style.borderColor = "var(--accent-color)";
            }

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

function navigateEpisode(direction) {
    // Jalur khusus jika pembaca mengklik tombol tamat di Episode 10 (Novel 1 ATAU Novel 2)
    if (currentEpisodeId === 10 && direction === 'next') {
        window.location.href = "novel.html";
        return;
    }

    let targetEpisode = currentEpisodeId;

    if (direction === 'next') {
        targetEpisode = currentEpisodeId + 1;
    } else if (direction === 'prev') {
        targetEpisode = currentEpisodeId - 1;
    }

    const novel = novelDatabase[currentNovelId];

    if (novel && novel.episodes[targetEpisode]) {
        window.location.href = `baca.html?novel=${currentNovelId}&ep=${targetEpisode}`;
    } else {
        alert("Cerita episode berikutnya akan segera hadir, masih disiapkan oleh developer! 🙏");
        window.location.href = "novel.html";
    }
}

// ==========================================
// FITUR GLOBAL & MENU UTAMA
// ==========================================
function comingSoon() {
    alert("Akan segera hadir, masih disiapkan oleh developer 🙏");
}

// Cek tema yang tersimpan setiap kali halaman dimuat
(function() {
    const savedTheme = localStorage.getItem('webTheme');
if (savedTheme === 'dark') document.body.classList.add('dark-theme');
if (savedTheme === 'sepia') document.body.classList.add('sepia-theme');
    }
)();

// Fungsi untuk mengganti tema
function changeGlobalTheme() {
    const themeValue = document.getElementById('globalTheme').value;
    // Hapus semua kelas tema dulu
    document.body.classList.remove('dark-theme', 'sepia-theme');
    
    if (themeValue === 'dark') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('webTheme', 'dark');
    } else if (themeValue === 'sepia') {
        document.body.classList.add('sepia-theme');
        localStorage.setItem('webTheme', 'sepia');
    } else {
        localStorage.setItem('webTheme', 'light');
    }
}

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

function changeReaderTheme() {
    const selectedTheme = document.getElementById('colorTheme').value;
    document.body.classList.remove('mode-malam', 'mode-sepia');
    if (selectedTheme === 'malam') {
        document.body.classList.add('mode-malam');
    } else if (selectedTheme === 'sepia') {
        document.body.classList.add('mode-sepia');
    }
}