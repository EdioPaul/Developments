let waktu = [500, 1000, 2000, 3000, 4000, 5000, 6000];

var TagFollow = document.getElementsByTagName('button');
var SearchFollow = 'Follow';
var foundFollow;

function klikfollow() {
    for (var i = 0; i < TagFollow.length; i++) {
        if (TagFollow[i].textContent == SearchFollow) {
            foundFollow = TagFollow[i];
            foundFollow.click();
            break;
        }
    }
}

var i = 1;
function myloop() {
    setTimeout(function () {
        console.log(new Date().toLocaleTimeString());
        klikfollow();
        //document.getElementsByTagName('ul')[3].scrollIntoView(false);
        i++;
        if (i < 500) {
            myloop();
        }
    }, waktu.sort((ele1, elem2) => Math.random() - Math.random())[1])
}
myloop();