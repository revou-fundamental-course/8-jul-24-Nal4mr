window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    /* function untuk BMI mendapatkan hasil inputan */
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    // Perhitungan BMI
    else {

        // Rumus Perhitungan
        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);

        // Pesan Hasil BMI
        if (bmi < 18.5) result.innerHTML =
            `Kekurangan berat badan : <span>${bmi}</span>`;

        else if (bmi >= 18.5 && bmi < 24.9)
            result.innerHTML =
                `Normal (ideal) : <span>${bmi}</span>`;

        else if (bmi >= 25.0 && bmi < 29.9)
            result.innerHTML =
                `Kelebihan Berat badan : <span>${bmi}</span>`;

        else result.innerHTML =
            `Kegemukan (Obesitas) : <br>${bmi}<br> Anda Memiliki berat badan lebih`;
            
    }
}
