import { CalculetteObject } from "./sources/function.js"

window.onload = () => {
    const elements = document.querySelectorAll(".col-calculet-1 .line-calculette > *")
    const touches = ([].slice.call(elements)).slice(3)



    CalculetteObject.initEvent(touches)


}