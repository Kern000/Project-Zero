
let toastElement = document.querySelector(".toast")
let addtoCartToast = new bootstrap.Toast(toastElement)

let btns = document.querySelectorAll(".cart-add")
for (let btn of btns) {
    btn.addEventListener('click', function(){
        addtoCartToast.show()
    })
}
