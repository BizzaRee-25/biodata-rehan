const utama = document.getElementById('halamanUtama');
const biodata = document.getElementById('halamanBiodata');
const btnBuka = document.getElementById('btnSelengkapnya');
const btnTutup = document.getElementById('btnKembali');

btnBuka.addEventListener('click', () => {
    utama.classList.add('hidden');
    biodata.classList.remove('hidden');
});

btnTutup.addEventListener('click', () => {
    biodata.classList.add('hidden');
    utama.classList.remove('hidden');
});