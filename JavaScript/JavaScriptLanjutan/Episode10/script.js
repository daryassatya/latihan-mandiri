//  ambil semua elemen video
    const videoList = Array.from(document.querySelectorAll('[data-duration]'));// ubah nodelist menjadi array
    
    // Method includes untuk mengecek suatu isi text
    const process = videoList.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))//  pilih yg terdapat 'JAVASCRIPT LANJUTAN'
    
//  Ambil durasi masing2 video
    //  Kurang baik :
    // const getDuration = getFilter.map(duration => duration.getAttribute('data-duration'));
    
    //  Lebih BAIK :
    .map(item => item.dataset.duration)     // dataset untuk mengambil attribut custom dari element
    
    //  Ubah durasi menjadi int, ubah menit menjadi detik
    .map(time => {
        // 10:30 -> [10, 30]
        const parseTime = time.split(':').map(time => parseFloat(time));
        return (parseTime[0]*60) + parseTime[1];
    })
    
    //  Jumlahkan semua detik
    .reduce((totalSeconds, curretSeconds) => totalSeconds + curretSeconds);
    
    
    //  Ubah formatnya jadi jam menit detik
    const hours = Math.floor(process / 3600);
    const minutes = Math.floor((process - hours * 3600) / 60);
    const seconds = Math.floor((process - (hours * 3600) + (minutes * 60)) / 60);
    
    //  simpan di dom
    const totalDurasiElement = document.querySelector('.total-durasi');
    totalDurasiElement.textContent = `${hours} : ${minutes} : ${seconds}`
    const totalVideoElement = document.querySelector('.jumlah-video');
    const totalVideo = videoList.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
    totalVideoElement.textContent = `${totalVideo} Video`;
    // console.log();