//var openSectionButton = document.querySelector('.nav-icon');
//var modalNav = document.querySelector('.modal-nav');

//navButton.addEventListener('click', function() {
   // if (modalNav !== null) {
    //    modalNav.style.display = "flex";
   // }

//});

Vue.component ('inventory-component', {
    props: ['product'],
    template: `
        <figure>
            <img class="gallery-tile" v-bind:src="product.imgRoute" v-bind:alt="product.name">
            <figcaption class="product-caption">           
                <ul>
                    <li>{{product.name}}</li>
                    <li>{{product.color}}</li>
                    <li>{{product.size}}</li>
                    <li>{{product.price}}</li>
                </ul>
            </figcaption> 
        </figure>
    `,
    data: function() {
        return {inventory: []}
    }
})

new Vue ({
    el: "#app",
    data: {
        searchInput: "",

        inventory: [
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 1
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 2
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 3
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 4
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 5
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 6
            },
        ]

    }
})