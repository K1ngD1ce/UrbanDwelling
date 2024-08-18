window.onload = () => {
    // Поиск
    let input = document.querySelector('#input');
    input.oninput = function () {
        let value = this.value.trim().toLowerCase();
        let list = document.querySelectorAll('.catalog__item');

        if (value != '') {
            list.forEach(el => {
                if (el.innerText.toLowerCase().search(value) == -1) {
                    el.classList.add('hide');
                }
            });
        } else {
            list.forEach(el => {
                el.classList.remove('hide')
            })
        }
    }
    // Корзина popup
    document.getElementById("openCart").addEventListener("click", function(){
        document.getElementById("cartModal").classList.add('open')
    })
    
    document.getElementById("closeCart").addEventListener("click", function(){
        document.getElementById("cartModal").classList.remove('open')
    })  

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById("cartModal").classList.remove("open")
        }
    })

    document.querySelector("#cartModal .cart__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    })
    
    document.getElementById("cartModal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open')
    })

    // Бургер Navigation
    document.getElementById("openNav").addEventListener("click", function(){
        document.getElementById("navModal").classList.add('open')
    })
    
    document.getElementById("closeNav").addEventListener("click", function(){
        document.getElementById("navModal").classList.remove('open')
    })  

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById("navModal").classList.remove("open")
        }
    })

    document.querySelector("#navModal .nav__modal-box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    })
    
    document.getElementById("navModal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open')
    })

}