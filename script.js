//var openSectionButton = document.querySelector('.nav-icon');
//var modalNav = document.querySelector('.modal-nav');

//navButton.addEventListener('click', function() {
   // if (modalNav !== null) {
    //    modalNav.style.display = "flex";
   // }

//});


Vue.component ('inventory-component', {
    props: ['product', 'cart'],
    template: `
        <figure>
            <img class="gallery-tile" v-bind:src="product.imgRoute" v-bind:alt="product.name">
            <figcaption class="product-caption">           
                <ul>
                    <li>{{product.name}}</li>
                    <li>color: {{product.color}}</li>
                    <li>size: {{product.size}}</li>
                    <li>$ {{product.price}}</li>
                </ul>
                <button type="button" v-on:click="$emit('add-to-cart', product)">Add to cart</button>
            </figcaption> 
        </figure>
    `,
    data: function() {
        return {inventory: []};
    }
})

Vue.filter ('searchFor', function (value, searchString) {
    var result = [];
    if(!searchString){
        return value;
    }

    searchString = searchString.trim().toLowerCase();

    result = value.filter(function(item){
        if(item.product.toLowerCase().indexOf(searchString) !== -1){
            return item;
        }
    })
    return result;
})

new Vue ({
    el: "#app",
    data: {
        searchInput: "",
        selectedCategory: "",
        searchResults: [],
        isOpen: false,
        cart: [],

        inventory: [
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 1,
                category: "",
                subcategory: "",
                inCart: false
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 2,
                category: "",
                subcategory: "",
                inCart: false
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 3,
                category: "",
                subcategory: "jeans",
                inCart: false
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 4,
                category: "",
                subcategory: "",
                inCart: false
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 5,
                category: "",
                subcategory: "",
                inCart: false
            },
            {
                name: "Levi's Jean Shorts",
                color: "stone-wash blue",
                size: 8,
                price: 12.99,
                imgRoute: "img/levishorts.jpg",
                id: 6,
                category: "blue",
                subcategory: "",
                inCart: false
            },
        ]

    },
    methods: {
        search: function (category) {
            //Check to see if category parameter is empty or not
            var input;

            if (category) {
                input = category;
            } else {
                input = this.searchInput;
            }

            //Get searchResults array
            this.searchResults = [];

            //Check if input is valid
            if (input && input.length < 3) {
                return;
            }
            input = input.toLowerCase();

            //Loop through inventory to match searchInput
            for (var i = 0; i < this.inventory.length; i++) {
                var item = this.inventory[i];
                if (item.subcategory.indexOf(input) > -1 ||
                    item.category.indexOf(input) > -1 ||
                    item.name.indexOf(input) > -1) {
                    //Item matches searchInput, add to searchResults
                    this.searchResults.push(item);
                }
            }
        },

        toggleSubNav: function (category) {
            var subNavList = document.getElementById(category);

            subNavList.classList.toggle("navOpen")
        },

        addToCart: function(item) {
            //Check if item is valid, and if so add to cart array
            this.cart.push(item);
        }
    }
})