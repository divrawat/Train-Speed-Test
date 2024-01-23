'use client'


function toggle() {
    let x = document.getElementById("menu")
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else { x.style.display = "block" }
}



export default function Toggle() {

    return (
        <span onClick={toggle} className="md:hidden text-[22px] font-extrabold mr-4">☰</span>
    )
}