// Menentukan Constanta
const tinggi = document.getElementById('input-tinggi');
const usia = document.getElementById('input-usia');
const berat = document.getElementById('input-berat');
const hasil = document.getElementById('hasil-bmi');
const kategori = document.getElementById('kategori-bmi');
const article = document.getElementById('article-bmi');
const hitungBMI = document.getElementById("button-submit");
const resetButton = document.getElementById("reset-button");
const section2 = document.querySelector('#section2');

// showing section 2
hitungBMI.addEventListener("click", calculateBmi);
resetButton.addEventListener("click", resetForm);
hitungBMI.addEventListener("click", () => { section2.style.display = 'block'; });
resetButton.addEventListener("click", () => { section2.style.display = 'none'; });

// Pesan Hasil BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.5) {
        return `Kekurangan berat badan`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `Normal (ideal)`;
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return `Kelebihan Berat badan`;
    } else {
        return `Kegemukan (Obesitas)`;
    }
}

// Article Hasil BMI
function articleBmi(bmi) {
    if (bmi < 18.5) {
        return `Anda termasuk dalam kategori kurang berat badan.
                Hubungi dokter Anda untuk informasi lebih lanjut 
                tentang diet dan nutrisi yang tepat untuk meningkatkan kesehatan.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `Berat badan Anda termasuk dalam kategori ideal.
                Jaga berat badan Anda dengan makanan seimbang dan olahraga.`;
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return `Anda termasuk dalam kategori kelebihan berat badan.
                Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan 
                kalori dan melakukan aktivitas fisik. Jika Anda termasuk dalam kategori ini, 
                disarankan untuk menurunkan berat badan Anda ke berat badan normal.`;
    } else {
        return `Anda termasuk dalam kategori obesitas.Yuk, coba turunkan berat badan 
                Anda dan terapkan pola hidup sehat dengan memperhatikan asupan kalori dan olahraga.
                Segera hubungi dokter untuk pemeriksaan medis agar Anda tahu risiko yang berkaitan dengan berat badan Anda.`;
    }
}

// Menghitung BMI
function calculateBmi() {
    let tbad = parseInt(tinggi.value);
    let bbad = parseInt(berat.value);
    let tahun = parseInt(usia.value);

    // Memvalidasi input
    if (isNaN(tbad) && isNaN(bbad) && isNaN(tahun)) {
        alert("Masukan Nilai yang valid");
        return;
    }

    // Rumus Perhitungan
    let bmi = (bbad / ((tbad * tbad) / 10000)).toFixed(2);

    hasil.textContent = bmi;
    kategori.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
    article.textContent = `${articleBmi(parseFloat(bmi))}`;
}

// function reset form
function resetForm() {
    document.getElementById('bmi-form').reset();
    hasil.textContent = '';
    kategori.textContent = '';
    article.textContent = '';
}