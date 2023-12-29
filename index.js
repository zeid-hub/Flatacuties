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

            // image to display when a creature's name is pressed
            characterList.addEventListener('click', () => {
                console.log(`${candidate.name}: chosen`)

                //displays the candidate name, image and vote-count
                const characterImage = document.getElementById('image')
                const characterName = document.getElementById('name')
                const characterVotes = document.getElementById('vote-count')

                characterImage.src = candidate.image;
                characterName.innerText = candidate.name;
                characterVotes.innerText = candidate.votes;

                let currentVote = passInt(characterVotes.textContent, 10)

                const votesForm = document.getElementById('votes-form')
                const votes = document.getElementById('votes')

                //submit event for the votes
                votesForm.addEventListener('submit', (event) =>{
                    event.preventDefault()// stops reset to default
                    let newVote = passInt(votes.value, 10)
                    currentVote = currentVote + newVote;
                    characterVotes.textContent = currentVote;
                })
            })
            // appendChild adds a node to the end of the list of children of a specified parent node
            characters.appendChild(characterList)

        })

    })
}
//fires when index.js loads - before DOMContentLoaded is triggered
document.addEventListener('DOMContentLoaded', characterData)
