
// Source - https://stackoverflow.com/a/34281265
// Posted by Dilip Agheda, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-28, License - CC BY-SA 3.0

window.onload=function(){
 document.querySelector(".formu")
    .addEventListener('submit', e => {
        e.preventDefault
        const dataP = Object.fromEntries(
            new FormData(e.target)
        )
        alert(JSON.stringify(dataP))
    })
    
}


// export const products = [
//     {
//        id: 1,
//        nom: "Hydro Boost",
//        category: "facial care",
//        Descripcion: "Este producto hace que te veas mejor.",
//        preuCompra: 20,
//        preuVenta: 20,
//        cantitatDispo: 134,
//        cuantitatMinExis: 25
//     }
// ]
