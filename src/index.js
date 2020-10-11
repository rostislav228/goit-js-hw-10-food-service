import menuCard from './templates/menu.hbs'
import menu from './menu.json'
import './styles.css'

const refs = {
    check: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu')
    
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

a()
markupMenu(menu)
addEventListener('click', onCheck)

function a() {
    if (!localStorage.getItem('theme')) {
        return
    }
    refs.body.classList.add(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') === 'dark-theme') {
        refs.check.checked = true
    } else {
        refs.check.checked = false
    }
}

function onCheck(e) {
    if (e.target.id !== "theme-switch-toggle") {
        return
    }
    if (refs.check.checked) {
        refs.body.classList.remove(Theme.LIGHT)
        refs.body.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK);
        return
    }
    refs.body.classList.remove(Theme.DARK)
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT);
}

function markupMenu(a) {
    const markup = a.map(el => menuCard(el)).join('');
    refs.menu.insertAdjacentHTML('beforeend', markup);
}

