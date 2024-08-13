window.onload = () => {
    let input = document.querySelector('#input');
    input.oninput = function () {
        let value = this.value.trim();
        let list = document.querySelectorAll('.catalog__item');



        if (value != '') {
            list.forEach(el => {
                if (el.innerText.search(value) == -1) {
                    el.classList.add('hide');
                }
            });
        } else {
            list.forEach(el => {
                el.classList.remove('hide')
            })
        }
    }
}