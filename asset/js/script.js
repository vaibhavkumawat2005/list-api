const selectbreed = document.getElementById("breed-dropdown")
const DogImage = document.getElementById("dog-image")


fetch("https://dog.ceo/api/breeds/list/all")
.then((response) => {
    return response.json()
})
.then((access) => {
    const breeds = Object.keys(access.message);
    breeds.forEach((breed) => {
        const option = document.createElement("option")
        option.value =breed;
        option.textContent = breed;
        selectbreed.appendChild(option);
    }); 
}).catch((error) =>
{
    console.error("Error fetching the breed:" + error)
})

selectbreed.addEventListener("change" , (event) =>{
    const selectdog = event.target.value;

    if(selectdog !== "Select a dog breed"){
        fetch(`https://dog.ceo/api/breed/${selectdog}/images/random`)
        .then((response) => response.json())
        .then((access) => {
            const image = document.createElement("img");
            image.src = access.message;
            image.style.maxWidth = "300px"
            image.style.maxHeight = "300px"

            DogImage.innerHTML = ""
            DogImage.appendChild(image)
        })
        .catch((error) => {
            console.log(error);
        });
    }
})

const button = document.getElementById("btn-get-sub-breed");
const list = document.getElementById("sub-breed-list");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/hound/list")
    .then((response) => response.json())
    .then((data) => {
      list.innerHTML = "";
      if (data.message.length === 0) {
        list.innerHTML = "<li>No sub breed available</li>";
      } else {
        data.message.forEach((subBreed) => {
          const li = document.createElement("li");
          li.textContent = subBreed;
          list.appendChild(li);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});