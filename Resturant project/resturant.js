 // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });

        // Menu items data
        const menuItems = [
            {
                id: 1,
                name: "Chicken Tikka",
                description: "Marinated chicken pieces, cooked in tandoor",
                price: "320",
                category: "appetizer",
                image: "./tikka.jpg"
            },
            {
                id: 2,
                name: "Butter Chicken",
                description: "Delicious chicken curry with creamy tomato gravy",
                price: "450",
                category: "main",
                image: "./butter.jpg"
            },
            {
                id: 3,
                name: "Biryani",
                description: "Made with fragrant basmati rice and spices",
                price: "380",
                category: "main",
                image: "./biri.jpg"
            },
            {
                id: 4,
                name: "Firni",
                description: "Traditional dessert made with rice powder and milk",
                price: "180",
                category: "dessert",
                image: "./Firni.jpg"
            },
            {
                id: 5,
                name: "Lassi",
                description: "Refreshing drink made with fresh yogurt",
                price: "120",
                category: "drink",
                image: "./lassi.jpg"
            },
            {
                id: 6,
                name: "Samosa",
                description: "Crispy pastry filled with spiced potatoes and peas",
                price: "80",
                category: "appetizer",
                image: "./samosa.jpg"
            },
            {
                id: 7,
                name: "Mughlai Paratha",
                description: "Flaky stuffed paratha with eggs and spices",
                price: "150",
                category: "main",
                image: "./Tourism.jpg"
            },
            {
                id: 8,
                name: "Rasmalai",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./rasmalai.jpg"
            },
           {
                id: 8,
                name: "borhani",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./borhani.jpg"
            },
             {
                id: 8,
                name: "coffee",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./coffee.jpg"
            },
             {
                id: 8,
                name: "sorbot",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./sorbot.jpg"
            },
             {
                id: 8,
                name: "Vegetabl",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./Vegetabl.jpg"
            },
             {
                id: 8,
                name: "pizza",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./pizza.jpg"
            },
             {
                id: 8,
                name: "sand",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./sand.jpg"
            },
             {
                id: 8,
                name: "noodles",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./noodles.jpeg"
            },
             {
                id: 8,
                name: "jalmuri",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./jalmuri.jpg"
            },
             {
                id: 8,
                name: "burger",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./burger.jpg"
            },
             {
                id: 8,
                name: "samosa",
                description: "Soft cheese balls soaked in sweet milk",
                price: "200",
                category: "dessert",
                image: "./samosa.jpg"
            },
        ];

        // Menu items render function
        function renderMenuItems(category = 'all') {
            const menuContainer = document.querySelector('.menu-items');
            menuContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.name}</h3>
                            <span class="price">${item.price} Taka</span>
                        </div>
                        <p>${item.description}</p>
                    </div>
                `;
                menuContainer.appendChild(menuItem);
            });
        }

        // Initially render all menu items
        renderMenuItems();

        // Category button event listeners
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to current button
                this.classList.add('active');
                
                // Filter menu items based on selected category
                const category = this.getAttribute('data-category');
                renderMenuItems(category);
            });
        });

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message has been sent successfully! We will contact you soon.');
            this.reset();
        });

        // Newsletter form handler
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('You have successfully subscribed to our newsletter!');
            this.reset();
        });

        // Navigation highlight on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav ul li a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });