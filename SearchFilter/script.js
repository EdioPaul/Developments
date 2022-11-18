namesJson = {
    0: "Ahemdabad",
    1: "Brazil",
    2: "Japur",
    3: "Chandigarh",
    4: "Delhi",
    5: "Mumbai",
    6: "Tamil Nadu",
    7: "Nepal",
    8: "Haryana",
    9: "Washington DC",
    10: "America",
}

namesArray = Object.keys(namesJson).map((name) => {
    return namesJson[name];
})

namesArray.sort();

let ul = document.getElementById("list");

namesArray.forEach((name) => {
    let li = document.createElement("li");
    li.innerHTML = "<a href='#'>" + name + "</a>"
    ul.appendChild(li);
})

const searchBar = document.querySelector('#myInput');
const list = document.querySelector('#list');

searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const names = list.getElementsByTagName('li');

    Array.from(names).forEach((name) => {
        const title = name.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
    })
})