const count = 0;

const arr = document.querySelectorAll('.L3NKy');
arr.forEach((v, i) => {
    setTimeout(() => {
        if(!v.classList.contains('_8A5w5')){
            v.click();
            count++;
            console.log(`Seguiu ${count} pessoa(s)`);
        } else {
            console.log('Você já segue.');
        }
    }, i * 10000 )
});