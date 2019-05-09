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
        shoppingCart: [],

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
                subcategory: "",
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
        search: function() {
            //Get searchResults array
            this.searchResults = [];

            //Check if input is valid
            if (this.searchInput && this.searchInput.length < 3) {
               return;
           }
            this.searchInput = this.searchInput.toLowerCase();

            //Loop through inventory to match searchInput
            for (var i = 0; i < this.inventory.length; i++) {
                var item = this.inventory[i];
                if (item.subcategory.indexOf(this.searchInput) > -1 ||
                    item.category.indexOf(this.searchInput) > -1 ||
                    item.name.indexOf(this.searchInput) > -1) {
                    //Item matches searchInput, add to searchResults
                    this.searchResults.push(item);
                }
            }

            //

        }
    }
})