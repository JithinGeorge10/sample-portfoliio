
// window.onscroll=()=>{
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100)
// }

// toggle icon and nav bar


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



$("#submit-form").validate({
    rules: {
        username: {
            pattern: /^[a-zA-Z ]+$/
        },
        phone: {
            pattern: /^\+?[1-9][0-9]{9}$/
        }

    },
    submitHandler: function (form) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxQK-BwNklb8-5ojajplhwbnqwWS0uloEUBH1lioGuGw8x01i-7-6BDHt2rmwG9pj_vAw/exec",
            data: $(form).serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                form.reset();
                window.location.reload()
            },
            error: function (err) {
                alert("Something Error")
            }
        })

    }
})

