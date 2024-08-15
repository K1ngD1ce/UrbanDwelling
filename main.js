window.onload = () => {
    let input = document.querySelector('#input');
    input.oninput = function () {
        let value = this.value.trim().toLowerCase();
        let list = document.querySelectorAll('.catalog__item');
        console.log(value);
        



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
}