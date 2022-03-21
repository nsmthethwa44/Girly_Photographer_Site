//menu image toggle and menu
let menu = document.querySelector(".header .nav");
let menuImg = document.querySelector(".menuImg");
let closeMenu = document.querySelector("closeImg");
menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}

//sticky header or menu
let header = document.querySelector(".header");
let scrollTopY = document.querySelector(".goTop");
window.onscroll =()=>{
  if (window.scrollY > 250){
    header.classList.add("sticky");
    scrollTopY.style.display ="block";
    menu.classList.remove("active");
    menuImg.classList.remove("closeImg");
  }else {
    scrollTopY.style.display ="none";
    header.classList.remove("sticky");
  }
  }

//adding and removing a active menu link
let activeLink = document.querySelectorAll(".header .nav li a");

Array.from(activeLink).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentLink = document.querySelector(".header .nav li a.active");
  currentLink.classList.remove("active");
  e.target.classList.add("active");
  }
})

  //next and prev buttons for recent project
let nextRecent = document.querySelector(".recentWork .container .controls .next");
let prevRecent = document.querySelector(".recentWork .container .controls .prev");
let recentContainer = document.querySelector(".recentWork .overflowX");

let containerScale = recentContainer.getBoundingClientRect();
let recentContainerWidth = containerScale.width;

prevRecent.onclick = () =>{
  recentContainer.scrollLeft -= recentContainerWidth;
};

nextRecent.onclick = () =>{
  recentContainer.scrollLeft += recentContainerWidth;
};

//scrolling for activity
let nextActivity = document.querySelector(".activity .container .controls .next");
let prevActivity = document.querySelector(".activity .container .controls .prev");
let activityContainer = document.querySelector(".activity .overflowY");

let containerActivityScale = activityContainer.getBoundingClientRect();
let activityContainerWidth = containerActivityScale.width;

prevActivity.onclick = () =>{
  activityContainer.scrollLeft -= activityContainerWidth;
};

nextActivity.onclick = () =>{
  activityContainer.scrollLeft += activityContainerWidth;
};

//scroll instagram feed
let nextFeed = document.querySelector(".instagram .controls .next");
let prevFeed = document.querySelector(".instagram .controls .prev");
let feedContainer = document.querySelector(".myfeed");

let feedScale = feedContainer.getBoundingClientRect();
let feedContainerWidth = feedScale.width;

prevFeed.onclick = () =>{
  feedContainer.scrollLeft -= feedContainerWidth;
};

nextFeed.onclick = () =>{
  feedContainer.scrollLeft += feedContainerWidth;
};

//reviews js
let reviews = document.querySelectorAll(".reviews .container .container_box .listReviews .selectors li img");
let comment = document.querySelectorAll(".reviews .container .container_box .content .comment");

Array.from(reviews).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentReview = document.querySelector(".reviews .container .container_box .listReviews .selectors li img.active");
    currentReview.classList.remove("active");
  e.target.classList.add("active");

  e.preventDefault();

let filter = e.target.dataset.filter;

comment.forEach((item) =>{
  if(item.classList.contains(filter)){
    item.style.display ="block";
  }else{
    item.style.display ="none";
  }
})
  }
})


