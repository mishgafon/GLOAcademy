const toggleMenu = () => {
    const body = document.body,
        menu = document.querySelector('menu');
        


        body.addEventListener('click', (event) => {
            let target = event.target;

            if(target.closest('.menu')) {
                menu.classList.add('active-menu');
            } else if (!target.classList.contains('active-menu')) {
                menu.classList.remove('active-menu');
            } 
        });
};

export default toggleMenu;