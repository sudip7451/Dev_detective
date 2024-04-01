const darkEffect = document.querySelector(".changeMode");
const bodyColor = document.querySelector(".wrapper");
const midColor = document.querySelector(".mid");
const bottomColor = document.querySelector(".bottom");
const H1Color = document.querySelector("h1");
const darkIcon = document.querySelector("#dark-icon");
const darkText = document.querySelector("#dark-text");
const inputField = document.querySelector("input");
const joinDate = document.querySelector(".join-date");
const descColor = document.querySelector(".desc");
const userName = document.querySelector(".name");
const bottomSecond = document.querySelector(".bottom-second");
const numText = document.querySelectorAll(".num-text");
const num = document.querySelectorAll(".num");
const bottomThird = document.querySelector(".bottom-third");
const topIcons = document.querySelector(".top-icons");
const darkMode = document.querySelector(".changeMode");
const enter_action = document.querySelector("#enter_action");

darkEffect.addEventListener("click" , changeDisplay);

let submit = document.querySelector(".btn");

const url = "https://api.github.com/users/";


function changeDisplay()
{
  if(darkMode.classList.contains('dark')){
    darkMode.innerHTML=`DARK <i id="dark-icon" class="fa-solid fa-moon"></i>`
   }
   else{
    // darkMode.innerHTML=`LIGHT <i class="fa-sharp fa-solid fa-sun"></i>`;
    darkMode.innerHTML=`LIGHT <i class="fa-sharp fa-solid fa-sun fa-xl"></i>`;

   }
   
  bodyColor.classList.toggle("dark");
  midColor.classList.toggle("dark");
  bottomColor.classList.toggle("dark");
  H1Color.classList.toggle("dark");
  darkIcon.classList.toggle("dark");
  darkText.classList.toggle("dark");
  inputField.classList.toggle("dark");
//   inputField.style.color("white");
  joinDate.classList.toggle("dark");
  descColor.classList.toggle("dark");
  userName.classList.toggle("dark");
  bottomSecond.classList.toggle("dark");

  inputField.placeholder.classList.toggle("dark");

  numText.forEach((value)=>{
    value.classList.toggle("dark");
  })
  
  num.forEach((value)=>{
    value.classList.toggle("dark");
  })

  bottomThird.classList.toggle("dark");

  
  // topIcons.innerHTML = ;
}

submit.addEventListener("click" , ()=>
{
  fetchUserDetails(url + inputField.value);
}
);

enter_action.addEventListener("keypress", submitForm);

function submitForm(e)
{
  if (e.key == "Enter")
  {
    fetchUserDetails(url + inputField.value);
  } 
}


async function fetchUserDetails(gitUrl)
{
  const response = await fetch(gitUrl);
  const data = await response.json();

  renderDetails(data);
}

const link = document.querySelector(".link");
var date;
const userId = document.querySelector('.user-id');
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const bio = document.querySelector('.desc');
const repo_count = document.querySelector("#repo_count");
const followers = document.querySelector("#follower_count");
const followings = document.querySelector("#following_count");
const userLocation = document.querySelector("#location");
const userTwitter = document.querySelector("#twitter")
const userImage = document.querySelector("#image"); 

function renderDetails(userData)
{
 
  if(userData?.name == null)
  {
    userName.innerText = "Not Available";
  }
  userName.innerText = userData?.name;

  userId.innerText=`@${userData?.login}`;

  link.innerHTML = `<a href="https://github.com/${userData?.login}" target="_blank" class="user-id">@${userData?.login}</a>`

  date=userData?.created_at.substr(0,10);

  let mon=month[ ( Number(date.substr(5,2)) ) - 1] ;

  joinDate.innerText=`Joined at ${date.substr(8,11)} ${mon} ${date.substr(0,4)}`;
 
  bio.innerText=userData?.bio;

  repo_count.innerText = userData?.public_repos;
  followers.innerText = userData?.followers;
  followings.innerText = userData?.following;
  userLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${userData?.location}`;

  if(userData?.twitter_username == null)
  userTwitter.innerHTML = `<i class="fa-brands fa-twitter"></i> Not Available`;

  else
  userTwitter.innerHTML = `<i class="fa-brands fa-twitter"></i> ${userData?.twitter_username}`;


  userImage.innerHTML = `<img src="${userData?.avatar_url}" width="120px" height="120px"></img>`


}
