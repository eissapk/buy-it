class Menu {

    static global() {
        Menu.menuBtn = document.getElementById('menuBtn');
        Menu.exitBtn = document.getElementById('exitMenu');
        Menu.searchBtn = document.getElementById('searchBtn');
    }

    // menu fn
    static fireMenu(e) {
        // select menu wrapper
        const menu = document.getElementById('menu');

        // trigger menu btn
        if (e.target.classList.contains('clickMenu')) {
            menu.style.display = "block";
            document.body.style.overflow = "hidden";
        }

    }

    // close menu
    static closeMenu() {
        // select menu wrapper
        const menu = document.getElementById('menu');
        const [input] = document.querySelectorAll('.engine');

        menu.style.display = "none";
        document.body.style.overflow = "auto";
        input.value = '';
    }

    // open search
    static openSearch(e) {
        const engine = document.getElementById('engine');
        if (e.target.classList.contains('click-search')) {

            if (engine.style.display === 'none' || engine.style.display === '') {
                engine.style.display = 'block';
            } else {
                engine.style.display = 'none';
            }

        }
    }


    // animate Nav bar
    static animateNav(e) {
        // select nav
        const nav = document.querySelector('nav');

        // get pageYOffset number
        let y = window.pageYOffset;

        if (y >= 100) { // if user scrolled > 50px
            nav.classList.add('animatedNav');
        } else {
            nav.classList.remove('animatedNav');
        }

    }









}
// init global
Menu.global();

//! events
// fire up menu
Menu.menuBtn.addEventListener('click', Menu.fireMenu, true);
Menu.exitBtn.addEventListener('click', Menu.closeMenu, true);
// fire up search
Menu.searchBtn.addEventListener('click', Menu.openSearch, true);
// animate nav on scroll
window.addEventListener('scroll', Menu.animateNav, true);