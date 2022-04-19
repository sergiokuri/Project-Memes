
let ramen = document.querySelector(".name")
ramen.id = "ramen"

let restaurant = document.querySelector(".restaurant")
console.log(restaurant)
restaurant.id = "restaurant"

let image = document.querySelector(".detail-image")
console.log(image)
image.id = "image"



function go_through_data (){
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(info => info.data.memes.forEach((element) => display(element)))
}

go_through_data();

function display(object){
    let images = document.querySelector("#ramen-menu")
    let data_url = document.createElement("img")
    data_url.src = object.url
    images.appendChild(data_url)

    data_url.addEventListener("click", ()=>showdetails(object))

}

function showdetails (object) {

    //make an object
    let ramen_image = document.querySelector("#image")
    ramen_image.src = object.url

    let ramen_name = document.querySelector("#ramen")
    ramen_name.textContent = object.name

    let restaurant_name =  document.querySelector("#restaurant")
    restaurant_name.textContent = object.id

    let rating = document.querySelector("#rating-display")
    rating.textContent = object.rating

    let comment = document.querySelector("#comment-display")
    comment.textContent = object.comment

// add form event listener here (when the the form is submited, info is added and stored in meme
}

function newramen () {
    let form = document.querySelector("#new-ramen")
    
    console.log(form)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const new_ram = {
        name:e.target[`new-name`].value,
        restaurant:e.target[`new-restaurant`].value,
        image: e.target[`new-image`].value,
        rating: e.target[`new-rating`].value,
        comment: e.target[`new-comment`].value,
        }
display(new_ram);
showdetails(new_ram)    })
}

newramen()