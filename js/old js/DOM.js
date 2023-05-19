
document.querySelector("#submitButton").addEventListener('click', function() {

    
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    
    let height1 = parseFloat(height)
    let weight1 = parseFloat(weight)

    console.log(height)
    console.log(weight)

    let BMI = weight1 / (height1 * height1)

    console.log(BMI)
})

