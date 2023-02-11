const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// CREATING JS ELEMENTS FROM HTML ID'S

const nameEl = document.getElementById("name-el")
const usernameEl = document.getElementById("username-el")
const locationEl = document.getElementById("location-el")
const avatarEl = document.getElementById("avatar-el")
const postEl = document.getElementById("post-el")
const commentsEl = document.getElementById("comments-el")
let likesCount = document.getElementById("likes-count")

// Render post
// Choose randomly one item from array
// grab ahold of objects Tags 
// render them with textContent


const i = Math.floor(Math.random()*posts.length);

//GENERATING THE CONTENT ACCORDING TO i

nameEl.textContent = posts[i].name;
usernameEl.textContent = posts[i].username;
locationEl.textContent = posts[i].location;
commentsEl.textContent = " " + posts[i].comment;
likesCount.textContent = posts[i].likes;
document.getElementById("mini-portrait").src = posts[i].avatar;
document.getElementById("portrait").src = posts[i].post;


// LIKE Button

const likeBtn = document.getElementById("like-btn")
let likes = posts[i].likes;

likeBtn.addEventListener('click', function () {
    likes += 1
    likesCount.textContent = likes
    }
)
