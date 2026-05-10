const pokemonInput = document.getElementById("pokemonInput")
const searchBtn = document.getElementById("searchBtn")

const pokemonCard = document.getElementById("pokemonCard")

const pokemonImage = document.getElementById("pokemonImage")
const pokemonName = document.getElementById("pokemonName")
const pokemonType = document.getElementById("pokemonType")
const pokemonHeight = document.getElementById("pokemonHeight")
const pokemonWeight = document.getElementById("pokemonWeight")

const loading = document.getElementById("loading")
const error = document.getElementById("error")

function searchButton() {
    searchBtn.addEventListener('click', () => {
        fetchData()
    })
}

searchButton()

async function fetchData() {
    try {
        error.classList.remove('active')
        pokemonCard.classList.remove('active')

        loading.classList.add('active')

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value.toLowerCase()}`)

        if (!res.ok) {
            throw new Error('Pokemon not found')
        }

        const data = await res.json()

        loading.classList.remove('active')
        pokemonCard.classList.add('active')

        pokemonImage.src = data.sprites.front_default
        pokemonName.textContent = data.name
        pokemonType.textContent = `Type: ${data.types[0].type.name}`
        pokemonHeight.textContent = `Height: ${data.height}`
        pokemonWeight.textContent = `Weight: ${data.weight}`
    } catch (e) {
        loading.classList.remove('active')
        error.classList.add('active')
    }
}