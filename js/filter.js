function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.my-card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('anime')
                
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            console.log();
        })
    })    

    // cards.forEach((card) => {
    //     card.ontransitionend  = function () {
    //         // if (card.classList.contains('anime')){
    //         //     card.classList.add('hide')
    //         // }
    //         console.log('end');
    //     }
    // })

}

app()