let menuContainer;

window.addEventListener('click', () => {
    menuContainer.innerHTML = '';
});

window.addEventListener('DOMContentLoaded', () => {
    menuContainer = document.querySelector('#search-menu-container');

    menuContainer.addEventListener('click', ($event) => {
        $event.stopPropagation();
    })

    let searchInput = document.querySelector('#search-input');
    let ref;

    searchInput.addEventListener('input', ($event) => {
        const value = $event.target.value;

        if (ref) {
            clearTimeout(ref);
        }

        ref = setTimeout(() => {
            axios.get('/users?search=' + value)
                .then(response => {
                    menuContainer.innerHTML = response.data;
                })
                .catch(err => {
                    console.log(err);
                })


        }, 2000);
    })
});