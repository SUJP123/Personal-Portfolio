const border = document.getElementById('pintro')
const nbaborder = document.getElementById('nbaid')
const atomborder = document.getElementById('atomid')
const cadborder = document.getElementById('cadid')
const todoborder = document.getElementById('todoid')

introparagraph.innerHTML = ''
intro1.innerHTML = ''
nbap.innerHTML = ''
atomp.innerHTML = ''
cadp.innerHTML = ''
todop.innerHTML = ''

document.getElementById('introbutton').addEventListener('click', () => 
{
    if (introparagraph.innerHTML === '') {
    introparagraph.innerHTML = 'I am a second year UNC Chapel Hill student with a Biomedical Engineering and '+ 
'Computer Science double major and a minor in chemistry. I enjoy research in '+ 
'fields such as machine learning/AI, biological signaling, and pharmacology. I have '+  
'a passion for the use of computer science, specifically AI, in the healthcare '+
'field which is my reasoning for selecting the double major of BME and CS. I '+
'also do enjoy coding and I find the process to be very fun, which is one of '+
'the reasons I am searching for a position as a software engineering intern along '+
'with a biomedical engineering intern position.                                   ' +
'                        Besides academics, I would also like to share a few things about '+
'myself in a bit of a lightning round style. Some of my main interests are bodybuilding, sports such as basketball and football, '+
'and chess. I also play videogames such as rocket league and rainbow six seige every now and then, and enjoy watching streams and youtube videos '+
'about them. My favorite shows of all time would have to be Breaking Bad, Better Call Saul, The Wire, and ' +
'One Piece in no particular order. I am also a lifetime vegetarian. After sharing a bit about myself, I hope you at least got to '+
'know me a little better and some of the things I like both professionally and recreationally.';
border.classList.toggle("with-border")
border.classList.toggle("hidden")
}
else {
    introparagraph.innerHTML = ''
    border.classList.toggle("with-border")
    border.classList.toggle("hidden")
    }
})

document.getElementById('nbabtn').addEventListener('click', () => 
{  
    if (nbap.innerHTML === '') {
    nbap.innerHTML = 
    'Here I designed an NBA Chatbot using JavaScript '+
    '(node.js), HTML and CSS. This chatbot is specifically designed to feed '+
    'takes about players, teams, and everything NBA based on the user '+ 
    'input. Basketball is one of my favorite sports to play, '+
    'so being able to code a chatbot like this was a very enjoyable '+ 
    'experience. Since this was my first time using node.js and javascript, I had to figure out '+
    'a lot about how functions could be applied and used in external websites. To see the source code, '+
    'click on the image.'; 
    showimage("nbaimg", "https://github.com/SUJP123/NBA_ChatBot", "https://i.ibb.co/S7VPZ1f/Screenshot-2024-02-14-at-11-24-15-PM.png");
}

else {
    nbap.innerHTML = ''
    nbaimg.innerHTML = ''
    }
})

document.getElementById('atombtn').addEventListener('click', () => 
{
    if (atomp.innerHTML === '') {
    atomp.innerHTML = 
    'This python project consists of a basic generator of random configurations '+ 
    'of Lennard Jones particles in low-density fluid. The package used in '+
    'this program is hoomd which allows analysis and simulations of '+
    'molecular dynamics and particle physics. I made this project while '+
    'learning about the hoomd package for my research assistant position '+
    'at Nazockdast Labs. Click on the image for the source code.'; 
    showimage("atomimg", "https://github.com/SUJP123/Crystal_Lattice", "https://i.ibb.co/TqmjCb0/Screenshot-2024-02-17-at-6-47-53-PM.png")
}
else {
    atomp.innerHTML = ''
    atomimg.innerHTML = ''
    }
})

document.getElementById('cadbtn').addEventListener('click', () => 
{
    if (cadp.innerHTML === '') {
    cadp.innerHTML = 'This project consists of a CAD design of an Endoscopic Forceps '+
    'using Onshape. I designed this in my BMME 298 design class where '+
    'we were given some measurement tools and the tool itself, and had '+
    'to design it using CAD. I felt like I learned a lot of CAD skills '+ 
    'during this experience and an ability to keep an eye for details.'; 
    showimage("endoimg", "https://bmecad.onshape.com/documents/2231816f9458dbc2c0e7b216/w/436606acccccf818e031c1b9/e/c7b46bc6cb6d749c16eaa778", "https://i.ibb.co/d4VDxHY/Screenshot-2024-02-11-at-5-04-44-PM.png")
}
else {
    cadp.innerHTML = ''
    endoimg.innerHTML = ''
    }
})

document.getElementById('tobtn').addEventListener('click', () => 
{
    if (todop.innerHTML === '') {
    todop.innerHTML = 
    'Although basic, this project was my first real attempt at trying to '+
    'code a project from scratch. Using python, I created a to-do list for '+
    'college students in order to be able to track assignments. Some features '+
    'include the ability to assign due dates, make edits to your current to-do '+
    'list, and assign tasks to classes your taking. I thought this would be a '+
    'fun project to include on my personal portfolio so click on the image and enjoy!'; 
    showimage("todoimg", "https://github.com/SUJP123/ToDoList", "https://i.ibb.co/P63hLng/Screenshot-2024-02-17-at-8-08-05-PM.png")
}
else { 
    todop.innerHTML = ''
    todoimg.innerHTML = ''
    }
})


function showimage(id, link1, link2) {
    var imageContainer = document.getElementById(id);

            var imageLink = document.createElement("a");

            imageLink.href = link1; // Github URL

            var imageElement = document.createElement("img");

            imageElement.src = link2; // image URL

            imageLink.appendChild(imageElement);

            imageContainer.appendChild(imageLink);

            imageContainer.style.display = "block";
}