const count = 0;

document.querySelectorAll('._8A5w5').forEach((item, index) => {
    setTimeout(() => {
        if(item.innerText == 'Seguindo'){
            item.click();
            document.querySelectorAll('.-Cab_').forEach((item, index) => {
                if(item.innerText == 'Deixar de seguir'){
                    item.click();
                    count++;
                    console.log(`Deixou de seguir ${count} pessoa(s)`);
                }
            })
        }
    }, index * 10000)
})