/* ============================= */
/* PARTICLE BACKGROUND */
/* ============================= */

particlesJS("particles-js", {
particles: {
number: { value: 80 },
size: { value: 3 },
color: { value: "#38bdf8" },
line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4,
width: 1
},
move: {
enable: true,
speed: 2
}
},
interactivity: {
events: {
onhover: { enable: true, mode: "repulse" }
}
}
});


/* ============================= */
/* HERO TYPING ANIMATION */
/* ============================= */

new Typed("#typing", {
strings: [
"Software Engineering Student",
"Full Stack Developer",
"UI/UX Designer",
"JavaScript Developer",
"Problem Solver"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
});


/* ============================= */
/* MOBILE NAVIGATION */
/* ============================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
nav.classList.toggle("active");
});


/* ============================= */
/* CLOSE MOBILE MENU ON CLICK */
/* ============================= */

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});


/* ============================= */
/* SMOOTH SCROLL */
/* ============================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});


/* ============================= */
/* FETCH GITHUB REPOSITORIES */
/* ============================= */

async function fetchGitHubRepos() {

try {

const username = "jemoh981";

const res = await fetch(`https://api.github.com/users/${username}/repos`);

const repos = await res.json();

const container = document.getElementById("githubProjects");

container.innerHTML = "";

/* sort by stars */

repos
.sort((a,b) => b.stargazers_count - a.stargazers_count)
.slice(0,6)
.forEach(repo => {

container.innerHTML += `

<div class="project">

<h3>${repo.name}</h3>

<p>${repo.description || "No description available"}</p>

<p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>

<a href="${repo.html_url}" target="_blank">
<button class="btn">View Repo</button>
</a>

</div>

`;

});

}

catch(error){

console.error("GitHub Repo Fetch Error:",error);

}

}

fetchGitHubRepos();


/* ============================= */
/* GITHUB LIVE STATISTICS */
/* ============================= */

async function githubStats(){

try{

const username = "jemoh981";

const res = await fetch(`https://api.github.com/users/${username}`);

const data = await res.json();

document.getElementById("repoCount").innerText = data.public_repos;

document.getElementById("followers").innerText = data.followers;

document.getElementById("following").innerText = data.following;

}

catch(error){

console.error("GitHub Stats Error:", error);

}

}

githubStats();


/* ============================= */
/* GITHUB DASHBOARD */
/* ============================= */

async function githubDashboard(){

try{

const username = "jemoh981";

const res = await fetch(`https://api.github.com/users/${username}/repos`);

const repos = await res.json();

const dashboard = document.getElementById("github-dashboard-cards");

if(!dashboard) return;

dashboard.innerHTML = "";

repos.slice(0,4).forEach(repo => {

dashboard.innerHTML += `

<div class="project">

<h3>${repo.name}</h3>

<p>⭐ ${repo.stargazers_count}</p>

<p>🍴 ${repo.forks_count}</p>

<p>Issues: ${repo.open_issues}</p>

</div>

`;

});

}

catch(error){

console.log("Dashboard error:",error);

}

}

githubDashboard();


/* ============================= */
/* ACTIVE NAVIGATION LINK */
/* ============================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 200) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {

link.classList.add("active");

}

});

});


/* ============================= */
/* CONTACT FORM ACTIONS */
/* ============================= */

const whatsappBtn = document.getElementById("send-whatsapp");
const gmailBtn = document.getElementById("send-gmail");

if (whatsappBtn) {

whatsappBtn.addEventListener("click", () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const phone = "254795077967";

const text = `Hello James, my name is ${name}%0AEmail: ${email}%0A${message}`;

window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

});

}

if (gmailBtn) {

gmailBtn.addEventListener("click", () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const subject = `Portfolio Contact from ${name}`;

const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

window.location.href =
`mailto:jemohmutuku@gmail.com?subject=${subject}&body=${body}`;

});

}


/* ============================= */
/* AI CHAT TOGGLE */
/* ============================= */

const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");

if(chatToggle){

chatToggle.addEventListener("click", () => {

chatBox.style.display =
chatBox.style.display === "block" ? "none" : "block";

});

}


/* ============================= */
/* VISITOR COUNTER */
/* ============================= */

const visitorDisplay = document.getElementById("visitor-count");

if(visitorDisplay){

let visits = localStorage.getItem("visits");

if(!visits){

visits = 1;

} else {

visits = Number(visits) + 1;

}

localStorage.setItem("visits", visits);

visitorDisplay.innerText = visits;

}


/* ============================= */
/* SCROLL REVEAL ANIMATION */
/* ============================= */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

});

document.querySelectorAll("section").forEach(section => {

section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.6s ease";

observer.observe(section);

});