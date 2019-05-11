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
                price: 20.00,
                imgRoute: "img/levishorts.jpg",
                id: 1,
                category: "bottoms",
                subcategory: "shorts",
                keywords: "levis jeans shorts stone-wash blue"

            },
            {
                name: "Mustard Paper Bag Pants",
                color: "golden mustard",
                size: 4,
                price: 30.00,
                imgRoute: "img/mustardpants.jpg",
                id: 2,
                category: "bottoms",
                subcategory: "pants",
                keywords: "mustard paper bag golden 4"

            },
            {
                name: "Levi's Jeans",
                color: "faded blue",
                size: 6,
                price: 35.00,
                imgRoute: "img/levijeans.jpg",
                id: 3,
                category: "bottoms",
                subcategory: "jeans",
                keywords: "levis levi faded blue 6"

            },
            {
                name: "Burgundy Wine Chinos",
                color: "burgundy wine",
                size: 8,
                price: 25.00,
                imgRoute: "img/burgundypants.jpg",
                id: 4,
                category: "bottoms",
                subcategory: "pants",
                keywords: "burgundy wine chinos 8"

            },
            {
                name: "Burnt Terracotta Corduroy Pants",
                color: "terracotta orange",
                size: 4,
                price: 30.00,
                imgRoute: "img/burntorangecords.jpg",
                id: 5,
                category: "bottoms",
                subcategory: "pants",
                keywords: "burnt terracotta corduroy pants orange 4"

            },
            {
                name: "Color Block Patched Jeans",
                color: "black and grey",
                size: 6,
                price: 25.00,
                imgRoute: "img/blackandgreypants.jpg",
                id: 6,
                category: "bottoms",
                subcategory: "jeans",
                keywords: "color block patched jeans black grey 6"

            },
            {
                name: "Pink Party Pants",
                color: "blush pink",
                size: 8,
                price: 35.00,
                imgRoute: "img/pink-pants.jpg",
                id: 6,
                category: "bottoms",
                subcategory: "pants",
                keywords: "pink party pants blush 8"

            },
            {
                name: "Blue Denim Jeans",
                color: "faded ocean blue",
                size: 6,
                price: 30.00,
                imgRoute: "img/bluejeans.jpg",
                id: 6,
                category: "bottoms",
                subcategory: "jeans",
                keywords: "blue denim jeans faded ocean 6"

            },
            {
                name: "Black Silk Pants",
                color: "ink black",
                size: 8,
                price: 35.00,
                imgRoute: "img/silkpants.jpg",
                id: 6,
                category: "bottoms",
                subcategory: "pants",
                keywords: "black silk pants ink 8"
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
                    item.keywords.indexOf(input) > -1) {
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