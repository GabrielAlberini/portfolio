/*Menu*/
((d) => {
    const NAME_SKILLS = {
        html: "HTML"
    }

    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $skills = d.querySelector(".skills"),
    $tool = d.querySelector(".tool"),
    $nameTool = $skills.getElementsByTagName("img");
    console.log($nameTool[0].id)


    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active")
    });

    for (tool of $nameTool) {
        $tool.classList.toggle("is-active")
    }

})(document);