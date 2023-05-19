async function getData () {

    let result = await axios.get('cars.json')

    console.log(result.data)
    return(result.data)
}

getData ()


let data1 = document.getElementById('output')

let loader1 = await getData()

data1.innerHTML += loader1.message;
