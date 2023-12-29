const characterData = () => {
    const characters = document.getElementById('data')

    characters.innerHTML = '';

    fetch('http://localhost:3000/characters')
    .then(response => response.json())

    .then(data => {
        console.log(data);
        //creating a li for creatures
        data.forEach(candidate =>{
            const characterList = document.createElement('li')
            characterList.textContent = candidate.name;

           

        })

    })
}
//fires when index.js loads - before DOMContentLoaded is triggered
document.addEventListener('DOMContentLoaded', characterData)
