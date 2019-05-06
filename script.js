var openSectionButton = document.querySelector('.nav-icon');
var modalNav = document.querySelector('.modal-nav');

navButton.addEventListener('click', function() {
    console.log('open sesame!!!');

    if (modalNav !== null) {
        modalNav.style.display = "flex";
    }

});


let vm = new Vue ({
    el: "#app",
    data: {}
        search: ""
    },
    methods: {

    }
})