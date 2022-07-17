let nav = document.getElementById('navigation')
let backToTopButton = document.getElementById('backToTopButton')

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll(home)
    //activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBundaries){
        menuElement.classList.add('active')
    }

}

function showNavOnScroll(){
    // adicionando a class scroll a ele
    // nav.classList.add('scroll')
    
    // scrolly é == 0 quando o scroll tiver no topo
    // for > 0 é quando é mexido para baixo
    
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }
    else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

// function ScrollReveal(){
//     return {
//         reveal: function () {}
//     }
// }

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
}).reveal(`#home,
            #home img,
             #home .stats,
              #services,
              #services header,
              #services .card,
              #about,
              #about header,
              #about .content`)

            //   segue a hierarquia ^^