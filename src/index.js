console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
        .then(res => res.json())
        .then(function (data) {
            handleImages(data)
    })
    fetch(breedUrl)
        .then(res => res.json())
        .then (function (data) {
           handleBreeds(data)
        })
})

function handleImages(data) {
    const images = data.message
    images.forEach(function (image) {
    const imgDiv = document.querySelector("#dog-image-container")
    const dogImg = document.createElement("img")
    dogImg.src = image
    imgDiv.appendChild(dogImg)
})}

function handleBreeds(data) {
    const breeds = data.message
    console.log(breeds)
    for (let breed in breeds) {
        const dogList = document.querySelector("#dog-breeds");
        const dog = document.createElement("li");
        dog.innerHTML = breed;
        dogList.appendChild(dog)

        dog.addEventListener('click', function(){ 
            this.style.color = "red";
        })
    }
}