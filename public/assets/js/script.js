let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// Download Resume Javascript Code

// script.js
document.getElementById('downloadCV').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    // Create a new anchor element
    var link = document.createElement('a');
    // Set the href attribute to the resume file path
    link.href = 'assets/AkhileshPythonDeveloper.pdf';
    // Set the download attribute with a desired file name
    link.download = 'AkhileshPythonDeveloper.pdf';
    // Append the anchor to the body
    document.body.appendChild(link);
    // Programmatically click the anchor to trigger the download
    link.click();
    // Remove the anchor from the document
    document.body.removeChild(link);
});
