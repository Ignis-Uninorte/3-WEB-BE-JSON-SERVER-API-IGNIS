const productsList = [
    {
        id: 1,
        category: "Tablets",
        products: [
            {
                id: 1,
                name: "Samsung Galaxy Tab S9 FE+ Plus",
                shortDescription: "New tablet Samsung with 128 GB. Display Size of 12.4 Inches",
                description:[
                    {
                        title: "SCREEN FOR ALL YOUR PASSIONS:",
                        description: 'Be blown away by the large 12.4" screen. There\'s plenty of room to follow your passions, whether you\'re taking an online photography class or unwinding with cat videos. Dual speakers make everything sound amazing.'
                    },
                    {
                        title: "READY FOR ALMOST ANYTHING:",
                        description: " An IP68 rating makes Galaxy Tab S9 FE+ one of the only water- and dust-resistant tablets on the market. It's built to last wherever you use it, making it a great choice for first-time tablet buyers."
                    },
                    {
                        title: "A BATTERY THAT KEEPS YOU IN CHARGE:",
                        description: "With a tablet this powerful, portable and fun, you'll never want to put it down. Go up to 20 hours with a long-lasting battery and get a full charge in less than 90 minutes with Super Fast Charging."
                    },
                    {
                        title: "A CAMERA THAT CAPTURES EVERY MOMENT:",
                        description: "Capture every moment with the 8MP front camera and 13MP rear camera. The wide 5MP front camera lens lets you fit more in the frame, and the 13MP rear camera lens captures stunning photos and videos."
                    }
                ],
                price: 599.99,
                discount: 20,
                image: "https://www.alkosto.com/medias/8806095160689-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w4OTUyfGltYWdlL3dlYnB8YUdGaEwyZzRaUzh4TkRZMU1qWXpNelkzTnpnMU5DODRPREEyTURrMU1UWXdOamc1WHpBd01WODNOVEJYZURjMU1FZ3xhZTY1MDQxYTkwZjNkZjIyMDU5NzZhMjhhMWFhZDFmYjdjYzIzZmFhYWNmMWZmNjhmMWJkOGM4Zjk3Y2Y0Mjky",
                rating: 5,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128 GB",
                    displaySize: "12'4 Inches",
                    color: "Mint",
                    processor: "Samsung Exynos 1380",
                    operatingSystem: "Android 13",
                    battery: "10,090 mAh",
                    camera: "13MP rear camera, 8MP front camera"
                }
            },
            {
                id: 2,
                name: "SAMSUNG Galaxy Tab A9+ Plus",
                shortDescription: "Renew tablet Samsung with 64 GB. Display Size of 11 Inches",
                description: [
                    {
                        title: "SCREEN FOR ALL YOUR PASSIONS:",
                        description: 'Be blown away by the large 11" screen. There\'s plenty of room to follow your passions, whether you\'re taking an online photography class or unwinding with cat videos. Dual speakers make everything sound amazing.'
                    },
                    {
                        title: "READY FOR ALMOST ANYTHING:",
                        description: "It's built to last wherever you use it, making it a great choice for first-time tablet buyers."
                    },
                    {
                        title: "A BATTERY THAT KEEPS YOU IN CHARGE:",
                        description: "With a tablet this powerful, portable and fun, you'll never want to put it down. Go up to 15 hours with a long-lasting battery."
                    },
                    {
                        title: "A CAMERA THAT CAPTURES EVERY MOMENT:",
                        description: "Capture every moment with the 8MP front camera and 13MP rear camera. The wide 5MP front camera lens lets you fit more in the frame, and the 13MP rear camera lens captures stunning photos and videos."
                    }
                ],
                price: 150.99,
                discount: 20,
                image: "https://www.alkosto.com/medias/8806095574967-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTIzOHxpbWFnZS93ZWJwfGFHUmhMMmd3WXk4eE5EUXhNRGN6T0RRMk5qZzBOaTg0T0RBMk1EazFOVGMwT1RZM1h6QXdNbDgzTlRCWGVEYzFNRWd8NzQ1NDRiZTAzZDcwYjFmMmM5YTliZWVjODU5NzgwNzg5ZDBjYjEzZThkNTZiNWM3MDM0ZDY4OTJkN2UzNmNiZA",
                rating: 4.5,
                specifications: {
                    brand: "Samsung",
                    condition: "Renew",
                    memoryStorage: "64 GB",
                    displaySize: "11 Inches",
                    color: "Black",
                    processor: "Samsung Exynos 1380",
                    operatingSystem: "Android 12",
                    battery: "8,090 mAh",
                    camera: "13MP rear camera, 8MP front camera"
                }
            }, 
            {
                id: 3,
                name: "Android Tablet",
                shortDescription: "Used Android tablet with 16GB. Display Size of 11 Inches",
                description: [
                    {
                        title: "SCREEN FOR ALL YOUR PASSIONS:",
                        description: "This tablet is perfect for watching movies, playing games, and reading books. It has a large 11-inch screen and a powerful processor that can handle all your favorite apps."
                    },
                    {
                        title: "SLEEK AND STYLISH DESIGN:",
                        description: "The tablet has a sleek and stylish design that looks great in any room. It's lightweight and easy to carry around, so you can take it with you wherever you go."
                    },
                    {
                        title: "ALL-DAY BATTERY LIFE:",
                        description: "The tablet has a long-lasting battery that can keep up with your busy lifestyle. You can use it all day without having to worry about running out of power."
                    }
                ],
                price: 89.99,
                discount: 10,
                image: "https://www.alkosto.com/medias/4894461992846-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNDk1MnxpbWFnZS93ZWJwfGFEQTRMMmhoTXk4eE5EUTVPRGc1TXpneU5EQXpNQzgwT0RrME5EWXhPVGt5T0RRMlh6QXdNVjgzTlRCWGVEYzFNRWd8ZWMyYzc5OWQ2ZDA5MDgyYTVmZDRiZmFhNjA1N2NkYjg0YzliMjEzYmYwYzFkNTBkZGZmMjk1Mzg3OWM1MTY5Nw",
                rating: 2,
                specifications: {
                    brand: "Generic",
                    condition: "Used",
                    memoryStorage: "16 GB",
                    displaySize: "11 Inches",
                    color: "Gray",
                    processor: "Generic",
                    operatingSystem: "Android 10",
                    battery: "5,000 mAh",
                    camera: "5MP rear camera, 2MP front camera"
                }
            },
            {
                id: 4,
                name: "Lenovo Fire HD 10 tablet",
                shortDescription: "Used Android tablet with 8GB. Display Size of 10 Inches",
                description:[
                    {
                        title: "SCREEN FOR ALL YOUR PASSIONS:",
                        description: "This tablet is perfect for watching movies, playing games, and reading books. It has a large 10-inch screen and a powerful processor that can handle all your favorite apps."
                    },
                    {
                        title: "SLEEK AND STYLISH DESIGN:",
                        description: "The tablet has a sleek and stylish design that looks great in any room. It's lightweight and easy to carry around, so you can take it with you wherever you go."
                    },
                    {
                        title: "ALL-DAY BATTERY LIFE:",
                        description: "The tablet has a long-lasting battery that can keep up with your busy lifestyle. You can use it all day without having to worry about running out of power."
                    }
                ],
                price: 289.99,
                discount: 35,
                image: "https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202310/gbom/6942103103476/800_800_A601DE9795C7D47430A8E35A0C53F93Dmp.png",
                rating: 4.2,
                specifications: {
                    brand: "Lenovo",
                    condition: "Used",
                    memoryStorage: "8 GB",
                    displaySize: "10 Inches",
                    color: "Gray",
                    processor: "Lenovo",
                    operatingSystem: "Android 9",
                    battery: "6,000 mAh",
                    camera: "8MP rear camera, 5MP front camera"
                }
            },
            {
                id: 5,
                name: "Lenovo Tab M9",
                shortDescription: "New Lenovo tab M9 with 64GB. Display Size of 9 Inches",
                description: [
                    {
                        title: "SCREEN FOR ALL YOUR PASSIONS:",
                        description: "This tablet is perfect for watching movies, playing games, and reading books. It has a large 9-inch screen and a powerful processor that can handle all your favorite apps."
                    },
                    {
                        title: "SLEEK AND STYLISH DESIGN:",
                        description: "The tablet has a sleek and stylish design that looks great in any room. It's lightweight and easy to carry around, so you can take it with you wherever you go."
                    },
                    {
                        title: "ALL-DAY BATTERY LIFE:",
                        description: "The tablet has a long-lasting battery that can keep up with your busy lifestyle. You can use it all day without having to worry about running out of power."
                    },
                    {
                        title:"A CAMERA THAT CAPTURES EVERY MOMENT:",
                        description: "Capture every moment with the 8MP rear camera and 5MP front camera. The wide 5MP front camera lens lets you fit more in the frame, and the 8MP rear camera lens captures stunning photos and videos."
                    }
                ],
                price: 189.99,
                discount: 58,
                image: "https://www.alkosto.com/medias/197530283857-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjI2MnxpbWFnZS93ZWJwfGFEVTFMMmd6WVM4eE5EVTJNekkzTmpBNU5UVXhPQzh4T1RjMU16QXlPRE00TlRkZk1EQXhYemMxTUZkNE56VXdTQXw1OGE2N2ZjMzBjOTMzZWVkMzNkNzNiNTY4NGY5NzU2NjZlMGE3ODc4ODcwNzQ4M2YxMmJiYWU3YmFhYmFmN2I5",
                rating: 4,
                specifications: {
                    brand: "Lenovo",
                    condition: "New",
                    memoryStorage: "64 GB",
                    displaySize: "9 Inches",
                    color: "Gray",
                    operatingSystem: "Android 11",
                    battery: "7,000 mAh",
                    camera: "8MP rear camera, 5MP front camera"
                }
            }
        ]
    },
    {
        id: 2,
        category: "Computers",
        products: [
            {
                id: 1,
                name: "ASUS TUF Gaming",
                shortDescription: "High-performance desktop with a 16-core processor and liquid cooling.",
                description: [
                    {
                        title: "Powerful Performance:",
                        description: "Equipped with a 16-core processor for seamless multitasking."
                    },
                    {
                        title: "Exceptional Graphics:",
                        description: "Top-tier graphics for an immersive gaming experience."
                    },
                    {
                        title: "Liquid Cooling System:",
                        description: "Enhanced cooling to maintain optimal performance during long gaming sessions."
                    },
                    {
                        title: "Ideal for Gamers and Creators:",
                        description: "Perfect for gaming and creative tasks such as video editing and 3D rendering."
                    }
                ],
                price: 2599.99,
                discount: 15,
                image: "https://www.alkosto.com/medias/4711387567043-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNDI5NnxpbWFnZS93ZWJwfGFHUXlMMmd4WkM4eE5EUTRORFEwTlRFMk56WTBOaTgwTnpFeE16ZzNOVFkzTURRelh6QXdNVjgzTlRCWGVEYzFNRWd8Y2Q3N2JhY2MxYzAxYTY4Mjc3NTZkODExMzhhZWFiNjEwNmNlNDM1YWI1ZDEwZjY1ZWY4NDAwMDQ0NDliYjNkMQ",
                rating: 5,
                specifications: {
                    brand: "ASUS",
                    condition: "New",
                    memoryStorage: "2TB SSD",
                    displaySize: "15.6 inches",
                    color: "Black",
                    processor: "16-core",
                    graphics: "NVIDIA GeForce RTX 3080",
                    weight: "10.5 lbs"
                }
            },
            {
                id: 2,
                name: "HP Victus",
                shortDescription: "4K workstation for artists and video editors with NVMe storage.",
                description: [
                    {
                        title: "Stunning Display:",
                        description: "Features a 4K color-accurate display for precise visuals."
                    },
                    {
                        title: "Workstation-Class Graphics:",
                        description: "Ideal for graphics-intensive tasks and video editing."
                    },
                    {
                        title: "Ultra-Fast Storage:",
                        description: "1TB NVMe storage for quick access to files and applications."
                    },
                    {
                        title: "Large Screen Size:",
                        description: "17 inches of display for immersive viewing."
                    }
                ],
                price: 2999.99,
                discount: 20,
                image: "https://www.alkosto.com/medias/198122718313-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzY4NHxpbWFnZS93ZWJwfGFEWmtMMmhsWWk4eE5EWXpORFExTlRjNU16WTVOQzh4T1RneE1qSTNNVGd6TVROZk1EQXhYemMxTUZkNE56VXdTQXwzZDE3YmM0NTdlODgwYzIxMDc3MzdhNjdiNjg4Y2FjNGMyZmM2OGY2ZDRkNzExYTEzZDBlOTIxZjdiMDJjNGE5",
                rating: 4.8,
                specifications: {
                    brand: "HP",
                    condition: "New",
                    memoryStorage: "1TB NVMe",
                    displaySize: "17 inches",
                    color: "Silver",
                    processor: "Intel Core i9",
                    graphics: "NVIDIA GeForce RTX 3060",
                    weight: "7.5 lbs"
                }
            },
            {
                id: 3,
                name: "OMEN HP",
                shortDescription: "Compact desktop with energy-efficient processors for home and office use.",
                description: [
                    {
                        title: "Energy-Efficient Design:",
                        description: "Uses energy-efficient processors for lower power consumption."
                    },
                    {
                        title: "Compact Size:",
                        description: "Perfect for small spaces or minimalistic setups."
                    },
                    {
                        title: "Integrated Graphics:",
                        description: "Sufficient for everyday tasks and light gaming."
                    },
                    {
                        title: "Affordable Option:",
                        description: "Great for users on a budget seeking reliable performance."
                    }
                ],
                price: 899.99,
                discount: 10,
                image: "https://www.alkosto.com/medias/196068436667-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDc5MTV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3lZaTlvTVRRdk1URTFNRGMyT1RVek1qRXhNVGd1YW5CbnxhNGMyMjI2ZjAwOTUyNWY5MDU0NWE0NmYzZTVjODJkNjY5N2NlYTBlZDIzYjgwZTk1M2EwNDkzMDg0MDQxNWEx",
                rating: 4.2,
                specifications: {
                    brand: "HP",
                    condition: "Renew",
                    memoryStorage: "512GB SSD",
                    displaySize: "14 inches",
                    color: "White",
                    processor: "Intel Core i5",
                    graphics: "Integrated",
                    weight: "6 lbs"
                }
            },
            {
                id: 4,
                name: "LENOVO LOQ",
                shortDescription: "Gaming laptop with top-tier GPU and customizable RGB lighting.",
                description: [
                    {
                        title: "Gaming Powerhouse:",
                        description: "Equipped with high-performance GPU for the latest games."
                    },
                    {
                        title: "Customizable RGB Lighting:",
                        description: "Personalize your setup with customizable RGB lighting."
                    },
                    {
                        title: "Efficient Airflow:",
                        description: "Designed for optimal cooling during intense gaming sessions."
                    },
                    {
                        title: "Stylish Design:",
                        description: "Sleek design that fits any gaming environment."
                    }
                ],
                price: 1999.99,
                discount: 25,
                image: "https://www.alkosto.com/medias/198153728671-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjk4NHxpbWFnZS93ZWJwfGFEWTBMMmc1Tmk4eE5EVXpNVGszTWpNd01EZ3pNQzh4T1RneE5UTTNNamcyTnpGZk1EQXhYemMxTUZkNE56VXdTQXxjMDlkODY2ZDYwMzRiYzBkMzJjZDRkMmRkNWE1OWE0NmMzZjYyYjA5ODRhYjhhN2Y1MmM3MDgxOGExZTc2ZmQ1",
                rating: 5,
                specifications: {
                    brand: "Lenovo",
                    condition: "Renew",
                    memoryStorage: "1TB SSD",
                    displaySize: "16 inches",
                    color: "Black with RGB",
                    processor: "AMD Ryzen 7",
                    graphics: "NVIDIA GeForce RTX 3070",
                    weight: "5.5 lbs"
                }
            },
            {
                id: 5,
                name: "HP Victus AI",
                shortDescription: "Heavy-duty laptop designed for AI research and data science.",
                description: [
                    {
                        title: "Dual CPUs:",
                        description: "Equipped with dual CPUs for high-performance computing."
                    },
                    {
                        title: "Multiple GPUs:",
                        description: "Supports multiple GPUs for parallel processing in data science tasks."
                    },
                    {
                        title: "Large Storage Capacity:",
                        description: "4TB SSD for storing large datasets and applications."
                    },
                    {
                        title: "18-inch Display:",
                        description: "Big screen for better visualization of complex data."
                    }
                ],
                price: 4999.99,
                discount: 5,
                image: "https://www.alkosto.com/medias/198122718313-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzY4NHxpbWFnZS93ZWJwfGFEWmtMMmhsWWk4eE5EWXpORFExTlRjNU16WTVOQzh4T1RneE1qSTNNVGd6TVROZk1EQXhYemMxTUZkNE56VXdTQXwzZDE3YmM0NTdlODgwYzIxMDc3MzdhNjdiNjg4Y2FjNGMyZmM2OGY2ZDRkNzExYTEzZDBlOTIxZjdiMDJjNGE5",
                rating: 4.7, 
                specifications: {
                    brand: "HP",
                    condition: "New",
                    memoryStorage: "4TB SSD",
                    displaySize: "18 inches",
                    color: "Gray",
                    processor: "AMD Ryzen 7",
                    graphics: "NVIDIA GeForce RTX 3070",
                    weight: "6.5 lbs"
                }
            }
        ]
    },
    {
        id: 3,
        category: "Phones",
        products: [
            {
                id: 1,
                name: "SAMSUNG Galaxy Z Flip6",
                shortDescription: "The Samsung Galaxy Z Flip6 is a high-end smartphone, with a top-notch design and its amazing display, it is perfect for you.",
                description: [
                    {
                        title: "Design",
                        description: "The Galaxy Z Flip6 features a stunning folding design that is both compact and stylish."
                    },
                    {
                        title: "Display",
                        description: "Equipped with a vibrant 6.2-inch AMOLED display for an immersive viewing experience."
                    },
                    {
                        title: "Camera",
                        description: "Includes dual 12MP cameras for stunning photography and videography."
                    }
                ],
                price: 2999.99,
                discount: 30,
                image: "https://www.alkosto.com/medias/8806095850801-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDU3NnxpbWFnZS93ZWJwfGFEQmhMMmhpT0M4eE5EWTFNREUyTkRrd016azJOaTg0T0RBMk1EazFPRFV3T0RBeFh6QXdNVjgzTlRCWGVEYzFNRWd8ZWYzZjdjMTZkNjMxMzNjZjkwNzkwNzQyNmI4NTk0YjFmY2RiYzk1ZTQzZTlkZDk2ZTYyODhmMDI1MTFiMGQ2MQ",
                rating: 4.5,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Phantom Gray",
                    battery: "3700mAh",
                    camera: "12MP + 12MP",
                    processor: "Snapdragon 8 Gen 2",
                    weight: "187g"
                }    
            },
            {
                id: 2,
                name: "iPhone 16 Pro",
                shortDescription: "The iPhone 16 Pro is a high-end smartphone with a 6.2-inch display, a 64MP camera, and a 4000mAh battery.",
                description: [
                    {
                        title: "Performance",
                        description: "Powered by the latest A17 Bionic chip, ensuring smooth performance."
                    },
                    {
                        title: "Camera System",
                        description: "Features a 64MP main camera for high-quality photos and videos."
                    },
                    {
                        title: "Battery Life",
                        description: "Long-lasting 4000mAh battery for all-day usage."
                    }
                ],
                price: 1999.99,
                discount: 10,
                image: "https://www.alkosto.com/medias/195949771040-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDUwMnxpbWFnZS93ZWJwfGFEQTVMMmhrWkM4eE5EY3dOekEzTWpneU56UXlNaTh4T1RVNU5EazNOekV3TkRCZk1EQXhYemMxTUZkNE56VXdTQXwzYWE5MGY4MTZhYTNkYmQ3NDkzZGJkZWEzYWQ2NzU5MDg4Y2M1YzIwNzc4OTJhYTlhZDBjNjRiNDI0NDJkMjBi",
                rating: 4.8,
                specifications: {
                    brand: "Apple",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Gray",
                    battery: "4000mAh",
                    camera: "64MP",
                    processor: "A17 Bionic",
                    weight: "206g"
                }    
            },
            {
                id: 3,
                name: "SAMSUNG A35",
                shortDescription: "The Samsung A35 is a medium smartphone with a high-end display",
                description: [
                    {
                        title: "Display Quality",
                        description: "Features a vibrant display for a visually appealing experience."
                    },
                    {
                        title: "Storage",
                        description: "Offers 128GB of internal storage for all your apps and media."
                    },
                    {
                        title: "Affordability",
                        description: "Provides excellent value for those looking for a budget-friendly device."
                    }
                ],
                price: 499.99,
                discount: 50,
                image: "https://www.alkosto.com/medias/8806095647609-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTcxNnxpbWFnZS93ZWJwfGFEQTRMMmhtTVM4eE5ETTRNRFk1TmpjNU56SXhOQzg0T0RBMk1EazFOalEzTmpBNVh6QXdNVjgzTlRCWGVEYzFNRWd8OTk5MTNhNDE4MGY1ODkxYjlkZmY1MTNlNWUyNzI3ZDNiNWRlMTE1YmM3NmE1MGVkMTQ0NTRhOWE4YWNlYTU5MQ",
                rating: 3.9,
                specifications: {
                    brand: "Samsung",
                    condition: "Renew",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Blue",
                    battery: "5000mAh",
                    camera: "48MP + 12MP",
                    processor: "Exynos 1280",
                    weight: "202g"
                }    
            },
            {
                id: 4,
                name: "OPPO Reno 12",
                shortDescription: "With 64MP camera, 512gb of storage and 8GB of RAM, this smartphone is perfect.",
                description: [
                    {
                        title: "Camera",
                        description: "Equipped with a powerful 64MP camera for stunning photography."
                    },
                    {
                        title: "Storage & RAM",
                        description: "Offers 512GB storage and 8GB RAM for seamless multitasking."
                    },
                    {
                        title: "Design",
                        description: "Stylish design that stands out while providing a comfortable grip."
                    }
                ],
                price: 999.99,
                discount: 15,
                image: "https://www.alkosto.com/medias/7708334730138-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNTE4OHxpbWFnZS93ZWJwfGFHWXhMMmd4Wmk4eE5EWTJNakE0TkRZeU5EUXhOQzgzTnpBNE16TTBOek13TVRNNFh6QXdNVjgzTlRCWGVEYzFNRWd8ZjZlMTVkM2JjYzlkZmU3NTE4ZmYyN2I5NjdiMjljZTU4MGQ1OTZmYmU5NTVhYTg0NGY0NmYyODRlYzgzNzBkOA",
                rating: 4.1,
                specifications: {
                    brand: "OPPO",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "White",
                    battery: "4300mAh",
                    camera: "64MP + 8MP + 2MP",
                    processor: "Snapdragon 765G",
                    weight: "175g"
                }    
            },
            {
                id: 5,
                name: "MOTOROLA G54",
                shortDescription: "An affordable smartphone with great features.",
                description: [
                    {
                        title: "Budget-Friendly",
                        description: "An excellent choice for those looking for an affordable smartphone."
                    },
                    {
                        title: "Storage",
                        description: "Comes with 256GB of internal storage for all your needs."
                    },
                    {
                        title: "Durability",
                        description: "Designed to withstand daily wear and tear."
                    }
                ],
                price: 279.99,
                discount: 30,
                image: "https://www.alkosto.com/medias/840023259425-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MDQ5MnxpbWFnZS93ZWJwfGFEUTBMMmhqTmk4eE5ETTJOVEF6TXpneU5ESTROaTg0TkRBd01qTXlOVGswTWpWZk1EQXhYemMxTUZkNE56VXdTQXw5MjEzMzMyYzJjYjk2Mzc3Yzg5NTIxZmEwZmEzYTUwY2EwMGIzYjliMmE4NmNjZjdhNWY2NjgwMmQzMTIyNDcx",
                rating: 4.0,
                specifications: {
                    brand: "MOTOROLA",
                    condition: "Renew",
                    memoryStorage: "256GB",
                    displaySize: "6.2 inches",
                    color: "Green lime"
                }    
            }
        ]
    },
    {
        id: 4,
        category: "Air-Conditioning",
        products: [
            {
                id: 1,
                name: "Samsung WindFree Elite",
                shortDescription: "Air Conditioner with WindFree technology, 12,000 BTU, energy efficient.",
                description:[
                    {
                        title: "Energy Efficiency",
                        description: "Provides energy savings with its optimized compressor."
                    },
                    {
                        title: "WindFree Cooling",
                        description: "Cools the room without direct airflow for better comfort."
                    },
                    {
                        title: "Smart Control",
                        description: "Control the air conditioner through your smartphone or voice assistants."
                    }
                ],
                price: 450,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/71pAnfLsIyL.SX466.jpg",
                rating: 4.8,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    coolingCapacity: "12,000 BTU",
                    energyEfficiency: "A++",
                    smartFeatures: "Yes",
                    color: "White",
                    noiseLevel: "24 dB",
                    powerConsumption: "900 W"
                }
            },
            {
                id: 2,
                name: "LG LW1024RD",
                shortDescription: "10,000 Window Air Conditioner, 115V, 450 Sq.Ft. (18' x 25' Room Size), Quiet Operation, Electronic Control with Remote, 3 Cooling & Fan Speeds, Auto Restart, 10000 BTU, White",
                description:[
                    {
                        title: "Low Noise Performance",
                        description: "LG window air conditioners operate at sound levels as low as 52dB (in low mode), eliminating unnecessary noise."
                    },
                    {
                        title: "Multiple Fan Speeds",
                        description: "3 cooling and fan speeds with Auto Cool allow you to customize your cooling."
                    },
                    {
                        title: "Maximum Usability",
                        description: "Easy to use electronic controls with remote"
                    }
                ],
                price: 350,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71PT8ltaciL.AC_SX679.jpg",
                rating: 4.6,
                specifications: {
                    brand: "LG",
                    condition: "New",
                    coolingCapacity: "10,000 BTU",
                    energyEfficiency: "A+",
                    smartFeatures: "Yes",
                    color: "White",
                    noiseLevel: "21 dB",
                    powerConsumption: "800 W"
                }
            },
            {
                id: 3,
                name: "Amazon Basics Window-Mounted Air Conditioner",
                shortDescription: "Mechanical Control - Cools 150 Square Feet, 5000 BTU, AC Unit, White",
                description:[
                    {
                        title: "Air Filtration",
                        description: "Keeps air clean and fresh with inbuilt filter, which can be easily removed, washed, and reused"
                    },
                    {
                        title: "Compact Size",
                        description: "Ideal for small spaces such as dorm rooms and RVs"
                    },
                    {
                        title: "Energy Efficient",
                        description: "Energy efficient air conditioning unit cools rooms up to 150 square feet with standard 9 foot ceilings"
                    }
                ],
                price: 135,
                discount: 5,
                image: "https://m.media-amazon.com/images/I/71dabBkD2eL.AC_SX679.jpg",
                rating: 4.9,
                specifications: {
                    brand: "Amazon",
                    condition: "New",
                    coolingCapacity: "5,000 BTU",
                    energyEfficiency: "A+++",
                    smartFeatures: "Yes",
                    color: "White",
                    noiseLevel: "19 dB",
                    powerConsumption: "1,200 W"
                }
            },
            {
                id: 4,
                name: "Frigidaire FHWC103TC1",
                shortDescription: "PaWindow Air Conditioner, 2024 10,000 BTU Electronic Controls, White",
                description:[
                    {
                        title: "Multi-Speed Fan",
                        description: "Features three different fan speeds, for more cooling flexibility."
                    },
                    {
                        title: "Eco-Friendly",
                        description: "Uses environmentally friendly refrigerant."
                    },
                    {
                        title: "Auto Restart",
                        description: "Automatically restarts after a power outage."
                    }
                ],
                price: 330,
                discount: 12,
                image: "https://m.media-amazon.com/images/I/61qCcMtk4HL.AC_SX679.jpg",
                rating: 4.7,
                specifications: {
                    brand: "Frigidaire",
                    condition: "New",
                    coolingCapacity: "10,000 BTU",
                    energyEfficiency: "A++",
                    smartFeatures: "No",
                    color: "White",
                    noiseLevel: "23 dB",
                    powerConsumption: "850 W"
                }
            },
            {
                id: 5,
                name: "Keystone Quiet",
                shortDescription: "AC Unit for Small 6,000 Window Mounted Dehumidifier, 115V, Air Conditioner for Rooms up to 250 Sq.Ft. with Smart Remote Control, 6000 BTU, Bright White",
                description:[
                    {
                        title: "Reliable Window AC Unit",
                        description: "Our powerful 6,000 BTU window air conditioner is what you need to efficiently cool your apartment, bedroom, garage or any small room up to 250 square feet"
                    },
                    {
                        title: "Maximum Comfort",
                        description: "Featuring 3 cooling modes, 3 fan speeds, 4-way adjustable air louvers and a programmable timer; 1.5 pints of moisture from the air is removed every hour."
                    },
                    {
                        title: "Smart Remote Control",
                        description: "The remote control takes the temperature of the room you are in, displays it on the LCD screen and sends a signal to your unit every 3 minutes for accurate cooling"
                    }
                ],
                price: 270,
                discount: 7,
                image: "https://m.media-amazon.com/images/I/616ICMBb0aL.AC_SX679.jpg",
                rating: 4.5,
                specifications: {
                    brand: "TCL",
                    condition: "New",
                    coolingCapacity: "9,000 BTU",
                    energyEfficiency: "A+",
                    smartFeatures: "Yes",
                    color: "White",
                    noiseLevel: "49 dB",
                    powerConsumption: "750 W"
                }
            }
        ]
    },
    {
        id: 5,
        category: "Television",
        products: [
            {
                id: 1,
                name: "Amazon Fire TV",
                shortDescription: "Amazon Fire TV 40\" 2-Series HD smart TV with Fire TV Alexa Voice Remote, stream live TV without cable",
                description:[
                    {
                        title: "High definition TV",
                        description: "Bring movies and shows to life in HD 1080p resolution, with support for HDR 10, HLG, and Dolby Digital Audio."
                    },
                    {
                        title: "All your entertainment in one place",
                        description: "Fire TV gives you quick access to live TV, video games, and music, and lets you stream over 1 million movies and TV episodes with subscriptions to Netflix, Prime Video, Disney+, and more."
                    },
                    {
                        title: "Stream for free",
                        description: "Watch free movies and TV episodes with apps like YouTube, Freevee, Tubi, Pluto TV, and more."
                    }
                ],
                price: 170,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71Nma1KADeL.AC_SX679.jpg",
                rating: 4.9,
                specifications: {
                    brand: "Amazon",
                    condition: "New",
                    screenSize: "40 inches",
                    resolution: "4K UHD",
                    smartFeatures: "Yes",
                    connectivity: "Wi-Fi, HDMI, USB",
                    refreshRate: "120 Hz",
                    color: "Black"
                }
            },
            {
                id: 2,
                name: "VIZIO 40-inch Full HD 1080p Smart TV",
                shortDescription: "VIZIO 40-inch Full HD 1080p Smart TV with DTS Virtual: X, Alexa Compatibility, Google Cast Built-in, Bluetooth Headphone Capable, (VFD40M-08 New)",
                description:[
                    {
                        title: "Captivating clarity",
                        description: "Full HD delivers a step up in clarity from HD with richer contrast and true-to-life color achieved with Full Array LED Backlight and fine-tuned at a granular level with Active Pixel Tuning."
                    },
                    {
                        title: "Smart and easy",
                        description: "Enjoy instant access to the best selection of built-in apps from top tier streaming services and explore new apps as they are automatically added and updated. Stream 275 plus free channels and 15,000 plus movies and shows On Demand with the built-in WatchFree plus app."
                    },
                    {
                        title: "Bluetooth listening ",
                        description: "Pair your Bluetooth headphones for uninterrupted listening, whether streaming your favorite show, playing a podcast, or blasting your top tunes."
                    }
                ],
                price: 148,
                discount: 13,
                image: "https://m.media-amazon.com/images/I/81R3dLptKcL.AC_SX466.jpg",
                rating: 4.0,
                specifications: {
                    brand: "VIZIO",
                    condition: "New",
                    screenSize: "40 inches",
                    resolution: "1080p",
                    smartFeatures: "Yes",
                    connectivity: "Wi-Fi",
                    refreshRate: "60 Hz",
                    color: "Black"
                }
            },
            {
                id: 3,
                name: "SAMSUNG 65-Inch",
                shortDescription: "SAMSUNG 65-Inch Class Crystal UHD 4K DU7200 Series HDR Smart TV w/Object Tracking Sound Lite, PurColor, Motion Xcelerator, Mega Contrast, Q-Symphony (UN65DU7200, 2024 Model)",
                description:[
                    {
                        title: "PURCOLOR",
                        description: "See a wide spectrum of colors than traditional RGB models with PurColor; From green turf to an amazing sunset, you'll enjoy true-to-life picture quality with our innovative color technology"
                    },
                    {
                        title: "4K UPSCALING",
                        description: "Get a clearer picture for more of your shows and videos; 4K Upscaling transforms each pixel for improved content"
                    },
                    {
                        title: "MOTION XCELERATOR",
                        description: "Watch your content smoothly while experiencing less lag and blur; It improves motion between frames so you have a seamless picture"
                    }
                ],
                price: 640,
                discount: 8,
                image: "https://m.media-amazon.com/images/I/71O5nf39wSL.AC_SX466.jpg",
                rating: 4.1,
                specifications: {
                    brand: "SAMSUNG",
                    condition: "New",
                    screenSize: "65 inches",
                    resolution: "4K UHD",
                    smartFeatures: "Yes",
                    connectivity: "Bluetooth, Wi-Fi, HDMI",
                    refreshRate: "60 Hz",
                    color: "Black"
                }
            },
            {
                id: 4,
                name: "TCL 50-Inch",
                shortDescription: "TCL 50-Inch Class S4 4K LED Smart TV with Roku TV (50S450R, 2023 - Model), Dolby Vision, HDR, Dolby Atmos, Works with Alexa, Google Assistant and Apple HomeKit Compatibility, Streaming UHD Television",
                description:[
                    {
                        title: "Roku TV",
                        description: "Access to thousands of streaming channels including Netflix, Hulu, and more."
                    },
                    {
                        title: "4K UHD Resolution",
                        description: "Crisp and clear image quality with 4K resolution."
                    },
                    {
                        title: "HDR PRO (Dolby Vision, HDR10, & HLG)",
                        description: "Enjoy enhanced contrast, accurate colors and fine details utilizing all the most advanced HDR formats."
                    }
                ],
                price: 356,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/81nC52txN0L.AC_SX466.jpg",
                rating: 4.6,
                specifications: {
                    brand: "TCL",
                    condition: "New",
                    screenSize: "50 inches",
                    resolution: "4K UHD",
                    smartFeatures: "Yes",
                    connectivity: "Wi-Fi, HDMI",
                    refreshRate: "60 Hz",
                    color: "Black"
                }
            },
            {
                id: 5,
                name: "LG 65-Inch Class OLED",
                shortDescription: "LG 65-Inch Class OLED evo C4 Series Smart TV 4K Processor Flat Screen with Magic Remote AI-Powered with Alexa Built-in (OLED65C4PUA, 2024)",
                description:[
                    {
                        title: "SELF-LIT PIXELS",
                        description: "LG's signature OLED technology creates an incredible watching experience and stellar picture quality illuminated with over 8 million self-lit pixels. Take in rich and accurate colors from the brightest to darkest parts of the scene thanks to 100% Color Volume* and with 100% Color Fidelity."
                    },
                    {
                        title: "BRIGHTNESS BOOSTER",
                        description: "Our Brightness Boosting technology magnifies each individual pixel for luminous quality that shines with every detail."
                    },
                    {
                        title: "DOLBY VISION, FILMMAKER AND DOLBY ATMOS",
                        description: "Experience the magic of the big screen right from your couch. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos* for sound you can feel all around you. Land in the center of the action with FILMMAKER MODE, allowing you to see films just as the director intended."
                    }
                ],
                price: 1600,
                discount: 18,
                image: "https://m.media-amazon.com/images/I/81e0zZuOzYL._AC_SX300_SY300_QL70_FMwebp.jpg",
                rating: 4.3,
                specifications: {
                    brand: "LG",
                    condition: "New",
                    screenSize: "65 inches",
                    resolution: "4K UHD",
                    smartFeatures: "Yes",
                    connectivity: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
                    refreshRate: "60 Hz",
                    color: "Black"
                }
            }
        ]
    },
    {
        id: 6,
        category: "Audio",
        products: [
            {
                id: 1,
                name: "Bluetooth Speaker with HD Sound, Portable Wireless",
                shortDescription: "Bluetooth Speaker with HD Sound, Portable Wireless, IPX5 Waterproof, Up to 20H Playtime, TWS Pairing, BT5.3, for Home/Party/Outdoor/Beach",
                description:[
                    {
                        title: "Immersive Sound Experience & Dual Connectivity",
                        description: "Experience unparalleled sound quality with this wireless Bluetooth speaker's 2 drivers and advanced technology that delivers powerful, well-balanced sound with minimal distortion."
                    },
                    {
                        title: "Tough & Weather-Resistant",
                        description: "Engineered to handle rough use and adverse weather conditions, this speaker features a durable design and an IPX5 rating for protection against water splashes and spills. "
                    },
                    {
                        title: "Long-lasting Playtime & Extended Bluetooth Connectivity",
                        description: "Experience extended playtime with up to 20 hours(50% Vol and light off) per charge and extended wireless range with Bluetooth 5.3, reaching up to 33 feet from your device. "
                    }
                ],
                price: 26,
                discount: 55,
                image: "https://m.media-amazon.com/images/I/81djh1gfUwL.AC_SL1500.jpg",
                rating: 4.5,
                specifications: {
                    brand: "BolaButty",
                    speakerMaximumOutputPower: "10 Watts",
                    connectivityTechnology: "Bluetooth, Auxiliary",
                    audioOutputMode: "Stereo",
                    mountingType: "Tabletop Mount"
                }
            },
            {
                id: 2,
                name: "Ortizan Portable Bluetooth Speaker",
                shortDescription: "Ortizan Portable Bluetooth Speaker,IPX7 Waterproof Wireless Speakers with 24W Loud Stereo Sound,Deep Bass,Bluetooth 5.3,RGB Lights,Dual Pairing,30H Playtime",
                description:[
                    {
                        title: "360° Hi-Fi Stereo Sound and Rich Bass",
                        description: "This mini Bluetooth speakers deliver excellent 3D HD stereo sound with 24W total output power, which allows for unique enhanced bass. It handles crisp treble and mid frequencies excellently without noticeable crackle at max volume."
                    },
                    {
                        title: "RGB colorful Light Show",
                        description: "The wireless LED Bluetooth speakers not only a speaker but also as a unique night theme light, it provide different color-changing themes. Using Ortizan bluetooth speakers, a totally reimagined rainbow light show that pulses, phases, and shines to the beat of your music."
                    },
                    {
                        title: "IPX7 100% Waterproof",
                        description: "IPX7 waterproof protection safeguards against rain, dust, snow, and spills, even the outdoor speaker can be fully immersed up to 3ft for about 30 minutes underwater."
                    }
                ],
                price: 29,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/81-YRA6tQqL.AC_SL1500.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Ortizan",
                    speakerMaximumOutputPower: "24 Watts",
                    frequencyResponse: "20 KHz",
                    connectivityTechnology: "Wireless, Bluetooth, Auxiliary, TF Card",
                    audioOutputMode: "Stereo"
                }
            },
            {
                id: 3,
                name: "Focusrite Scarlett Solo",
                shortDescription: "Focusrite Scarlett Solo 3rd Gen USB Audio Interface for Guitarists, Vocalists, Podcasters or Producers to record and playback studio quality sound",
                description:[
                    {
                        title: "Pro performance with great pre-amps",
                        description: "Achieve a brighter recording thanks to the high performing mic pre-amps of the Scarlett 3rd Gen. A switchable Air mode will add extra clarity to your acoustic instruments when recording with your Solo 3rd Gen."
                    },
                    {
                        title: "Studio quality recording for your music & podcasts",
                        description: "Achieve pro sounding recordings with Scarlett 3rd Gen’s high-performance converters enabling you to record and mix at up to 24-bit/192kHz."
                    },
                    {
                        title: "Enjoy three years of warranty ",
                        description: "Wherever you happen to be in the world, you can rely on a three-year warranty if any Focusrite hardware needs repairing or replacing due to a manufacturing fault."
                    }
                ],
                price: 99,
                discount: 23,
                image: "https://m.media-amazon.com/images/I/613veRuWtmL.AC_SL1500.jpg",
                rating: 4.7,
                specifications: {
                    brand: "Focusrite",
                    compatibleDevices: "Microphone, Instrument, Personal Computer, Headphones, Studio Monitors",
                    supportedSoftware: "All audio recording software",
                    connectivityTechnology	: "USB",
                    numberofChannels: "2"
                }
            },
            {
                id: 4,
                name: "JBL Vibe Beam",
                shortDescription: "JBL Vibe Beam - True Wireless JBL Deep Bass Sound Earbuds, Bluetooth 5.2, Water & Dust Resistant, Hands-free call with VoiceAware, Up to 32 hours of battery life (Black)",
                description:[
                    {
                        title: "JBL Deep Bass Sound",
                        description: "Get the most from your mixes with high-quality audio from secure, reliable earbuds with 8mm drivers featuring JBL Deep Bass Sound"
                    },
                    {
                        title: "Comfortable fit",
                        description: "The ergonomic, stick-closed design of the JBL Vibe Beam fits so comfortably you may forget you're wearing them. The closed design excludes external sounds, enhancing the bass performance"
                    },
                    {
                        title: "Water and dust resistant",
                        description: "From the beach to the bike trail, the IP54-certified earbuds and IPX2 charging case are water and dust resistant for all-day experiences"
                    }
                ],
                price: 49,
                discount: 0,
                image: "https://m.media-amazon.com/images/I/41+1Csr1pSL.AC_SL1000.jpg",
                rating: 4.3,
                specifications: {
                    brand: "JBL",
                    color: "Black",
                    earPlacement: "In Ear",
                    formFactor: "In Ear",
                    Impedance: "16 Ohm"
                }
            },
            {
                id: 5,
                name: "JBL Tune 510BT",
                shortDescription: "JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Black",
                description:[
                    {
                        title: "Wireless Bluetooth 5.0 Streaming",
                        description: "You can stream wirelessly from your device and even switch between two devices so that you don't miss a call. Dynamic frequencyresponse range (Hz) 20 Hz – 20 kHz"
                    },
                    {
                        title: "Siri or Hey Google is just a button away",
                        description: "Activate the voice assistant of your device by pushing the multi-function button."
                    },
                    {
                        title: "JBL pure Bass sound",
                        description: "These wireless headphones feature the renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world. Wirelessly stream this high-quality sound from your smartphone without messy cords"
                    }
                ],
                price: 24,
                discount: 0,
                image: "https://m.media-amazon.com/images/I/61oGAG5r7cL.AC_SL1500.jpg",
                rating: 4.6,
                specifications: {
                    brand: "JBL",
                    color: "Black",
                    earPlacement: "On Ear",
                    formFactor: "On Ear",
                    Impedance: "32 Ohm"
                }
            }
        ]
    },
    {
        id: 7,
        category: "Printing",
        products: [
            {
                id: 1,
                name: "Epson EcoTank ET-2720",
                shortDescription: "Epson EcoTank ET-2720 Wireless color All-in-One Supertank Printer with Scanner and Copier - White",
                description:[
                    {
                        title: "Innovative Cartridge-Free Printing",
                        description: "High-capacity ink tanks mean no more tiny, expensive ink cartridges; Epson's exclusive EcoFit ink bottles make filling easy and worry-free"
                    },
                    {
                        title: "Dramatic Savings on Replacement Ink",
                        description: "Save up to 90% with replacement ink bottles vs. ink cartridges that's enough to print up to 4,500 pages black/7,500 color (2), equivalent to about 90 individual ink cartridges (3)"
                    },
                    {
                        title: "Impressive Print Quality",
                        description: "Unique Micro Piezo Heat-Free Technology produces sharp text plus impressive color photos and graphics  on virtually any paper type"
                    }
                ],
                price: 254,
                discount: 0,
                image: "https://m.media-amazon.com/images/I/71nZ3MAbFjS.AC_SL1500.jpg",
                rating: 4.4,
                specifications: {
                    brand: "Epson",
                    connectivityTechnology: "Wi-Fi",
                    printingTechnology: "Inkjet",
                    specialFeature: "Display Screen, Voice-activated printing, Compact, Borderless Printing",
                    color: "White",
                    modelName: "ET-2720",
                    printerOutput: "color",
                    maximumPrintSpeed: "5ppm",
                    maxPrintspeedMonochrome: "10ppm",
                    itemWeight: "5.53 Kilograms" 
                }
            },
            {
                id: 2,
                name: "Canon PIXMA TR4720",
                shortDescription: "Canon PIXMA TR4720 All-in-One Wireless Printer for Home use, with Auto Document Feeder, Mobile Printing and Built-in Fax, Black",
                description:[
                    {
                        title: "Wireless 4-in-1 (print | copy | scan | fax)..Power Consumption: 7W (0.8W Standby / 0.3W Off)",
                        description: ""
                    },
                    {
                        title: "Auto 2-sided printing and auto document feeder.",
                        description: ""
                    },
                    {
                        title: "Designed for easy ink cartridge installation and replacement.",
                        description: ""
                    }
                ],
                price: 59,
                discount: 0,
                image: "https://m.media-amazon.com/images/I/71vYeYqdvUL.AC_SL1500.jpg",
                rating: 4.0,
                specifications: {
                    brand: "Canon",
                    connectivityTechnology: "Wi-Fi, USB",
                    printingTechnology: "Inkjet",
                    specialFeature: "Borderless Printing, High Print Quality, Compact, Double Sided Scanning, Auto Document Feeder, Auto-Duplex",
                    color: "Black",
                    modelName: "PIXMA",
                    printerOutput: "color",
                    maximumPrintSpeed: "4.4 ppm",
                    maxPrintspeedMonochrome: "8.8 ppm",
                    itemWeight: "12.7 Pounds"
                }
            },
            {
                id: 3,
                name: "Canon imageCLASS MF262",
                shortDescription: "Canon imageCLASS MF262dw II - Wireless Monochrome Laser Printer with Print, Copy and Scan, Black",
                description:[
                    {
                        title: "Wireless 3-in-1: Print | Scan | Copy",
                        description: ""
                    },
                    {
                        title: "First Print Out of Time of Approximately 6 Seconds (Letter)",
                        description: ""
                    },
                    {
                        title: "250-sheet Standard Cassette, 1-sheet Multipurpose Tray",
                        description: ""
                    }
                ],
                price: 174,
                discount: 13,
                image: "https://m.media-amazon.com/images/I/51H-khkzxbL.AC_SL1500.jpg",
                rating: 4.1,
                specifications: {
                    brand: "Canon",
                    connectivityTechnology: "USB",
                    printingTechnology: "Laser",
                    specialFeature: "Auto-Duplex, Network-Ready, Epeat Qualified, Energy Star, Display Screen",
                    color: "Black",
                    modelName: "imageCLASS MF262dw II",
                    printerOutput: "Monochrome",
                    maximumPrintSpeed: "30 ppm",
                    itemWeight: "23.8 Pounds"
                }
            },
            {
                id: 4,
                name: "Brother HL-L2300D",
                shortDescription: "Brother HL-L2300 Monochrome Laser Printer with Duplex Printing for Business Office Home - up to 2400 x 600 Resolution - 27 ppm Print Speed, Hi-Speed USB 2.0, 250-sheet Capacity, BROAGE Printer Cable",
                description:[
                    {
                        title: "250 Sheet Capacity Paper Tray",
                        description: "A4 2-sided print speed-13. A4 standard print speed-26. Automatic 2 sided print. Recommended monthly volume-250 to 2,000 pages."
                    },
                    {
                        title: "Windows 10 Compatibility",
                        description: "If you upgrade from Windows 7 or Windows 8.1 to Windows 10, some features of the installed drivers and software may not work correctly. Please uninstall all drivers and software in Windows 7 or Windows 8.1 before upgrading to Windows 10."
                    },
                    {
                        title: "This machine uses a USB connection ensuring your office runs smoothly with no complications",
                        description: "High Speed USB 2.0 Interface. Does not come with USB cable. Maximum Monthly Duty Cycle: 10,000 pages. Output Paper Capacity (sheets): 100"
                    }
                ],
                price: 219,
                discount: 0,
                image: "https://m.media-amazon.com/images/I/71gMB5gAhwL.AC_SL1500.jpg",
                rating: 4.7,
                specifications: {
                    brand: "Brother",
                    connectivityTechnology: "USB",
                    printingTechnology: "Laser",
                    specialFeature: "Monochrome",
                    color: "Black",
                    modelName: "HL",
                    printerOutput: "Monochrome",
                    controllerType: "Android",
                    printerMediaSizeMaximum: "8.5 x 14 inch"
                }
            },
            {
                id: 5,
                name: "HP OfficeJet Pro 8025",
                shortDescription: "HP OfficeJet Pro 8025 All-in-One Wireless color Printer, Smart Home Office Productivity, HP Instant Ink, Works with Alexa (1KR57A)",
                description:[
                    {
                        title: "BEST FOR SMALL BUSINESSES AND HOME OFFICES",
                        description: "Print professional-quality color documents like forms, reports, brochures and presentations"
                    },
                    {
                        title: "KEY FEATURES",
                        description: "Fast color print, copy, scan and fax, plus 2-sided printing, mobile and wireless printing, and an auto document feeder"
                    },
                    {
                        title: "FAST PRINT SPEEDS",
                        description: "Print up to 20 pages per minute in black and 10 pages per minute in color"
                    }
                ],
                price: 269,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61E7mqYjlEL.AC_SL1500.jpg",
                rating: 4.3,
                specifications: {
                    brand: "HP",
                    connectivityTechnology: "Wi-Fi",
                    printingTechnology: "Inkjet",
                    specialFeature: "Touchscreen, Energy Star Certified, Auto Document Feeder, Scan, Fax",
                    color: "Basalt",
                    modelName: "HPOJP8025OB",
                    printerOutput: "color",
                    maximumPrintSpeed: "10 ppm",
                    maxPrintspeedMonochrome: "20 ppm",
                    itemWeight: "18 Pounds"
                }
            }
        ]
    },
    {
        id: 8,
        category: "Smartwatches",
        products: [
            {
                id: 1,
                name: "Apple Watch Series 7",
                shortDescription: "Apple Watch Series 7 GPS, 41mm Midnight Aluminum Case with Midnight Sport Band",
                description: [
                    {
                        title: "DESIGN THAT IMPRESSES:",
                        description: "The sleek 41mm case and Midnight Sport Band are perfect for anyone looking for a stylish yet functional smartwatch. The always-on Retina display ensures you can see your stats at a glance."
                    },
                    {
                        title: "ULTIMATE FITNESS COMPANION:",
                        description: "Track your workouts with precision using GPS, heart rate sensors, and built-in fitness tracking. Apple Watch Series 7 makes achieving your fitness goals easier."
                    },
                    {
                        title: "LONG-LASTING BATTERY:",
                        description: "Enjoy all-day battery life, keeping up with your active lifestyle. Charge quickly and get back to what you love without long waiting times."
                    },
                    {
                        title: "STAY CONNECTED ON THE GO:",
                        description: "Stay connected with calls, texts, and notifications right on your wrist. Whether you're in the gym or at a meeting, stay up to date without pulling out your phone."
                    }
                ],
                price: 399.99,
                discount: 30,
                image: "https://m.media-amazon.com/images/I/71W+RrSPINL.AC_SL1500.jpg",
                rating: 4.1,
                specifications: {
                    brand: "Apple",
                    color: "Midnight",
                    gps: "True",
                    waterResistance: "50 meters",
                    batteryLife: "Up to 18 hours"
                }
            },
            {
                id: 2,
                name: "Samsung Galaxy Watch 4",
                shortDescription: "Samsung Galaxy Watch 4 40mm Smartwatch with ECG Monitor and Health Features",
                description: [
                    {
                        title: "ADVANCED HEALTH TRACKING:",
                        description: "Keep track of your heart rate, ECG, and sleep cycles. The Samsung Galaxy Watch 4 provides essential insights into your overall health."
                    },
                    {
                        title: "GPS FOR ACCURATE ROUTE TRACKING:",
                        description: "Track your runs, bike rides, and hikes with GPS accuracy, making sure you never miss a step."
                    },
                    {
                        title: "MODERN AND LIGHTWEIGHT DESIGN:",
                        description: "With a 40mm sleek black design, this watch offers both form and function, being comfortable for all-day wear."
                    },
                    {
                        title: "ALL-DAY BATTERY:",
                        description: "Designed to last all day with a long-lasting battery that supports you through workouts and daily tasks."
                    }
                ],
                price: 249.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/61IZmXci7qS.AC_SL1500.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Samsung",
                    color: "Black",
                    gps: "True",
                    waterResistance: "50 meters",
                    batteryLife: "Up to 40 hours"
                }
            },
            {
                id: 3,
                name: "Garmin Venu 2",
                shortDescription: "Garmin Venu 2 with Advanced Health Monitoring and Fitness Features",
                description: [
                    {
                        title: "TRACK EVERYTHING WITH PRECISION:",
                        description: "Monitor your heart rate, stress, sleep, and more with Garmin's advanced health tracking technology, ensuring you stay on top of your health goals."
                    },
                    {
                        title: "STYLISH DESIGN WITH DURABILITY:",
                        description: "The Slate Bezel and Graphite Case give this watch a premium look while maintaining the durability Garmin is known for."
                    },
                    {
                        title: "MULTI-DAY BATTERY:",
                        description: "Enjoy a battery that lasts several days, perfect for long hikes or busy schedules without constant charging."
                    },
                    {
                        title: "FITNESS TRACKING REDEFINED:",
                        description: "From yoga to running, the Garmin Venu 2 offers a wide range of activity modes to help you track and improve your fitness."
                    }
                ],
                price: 399.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61d8niGcVrL.AC_SL1500.jpg",
                rating: 4.9,
                specifications: {
                    brand: "Garmin",
                    color: "Cool Mint",
                    gps: "True",
                    waterResistance: "50 meters",
                    batteryLife: "Up to 11 days"
                }
            },
            {
                id: 4,
                name: "Fitbit Versa 3",
                shortDescription: "Fitbit Versa 3 with Heart Rate Monitoring and Alexa Built-in",
                description: [
                    {
                        title: "HEALTH TRACKING MADE EASY:",
                        description: "Track your heart rate 24/7, monitor sleep, and receive health insights with the Fitbit Versa 3, making it easy to stay on top of your wellness."
                    },
                    {
                        title: "ALEXA INTEGRATED:",
                        description: "Use built-in Alexa to control smart devices, set reminders, and more directly from your wrist."
                    },
                    {
                        title: "VERSATILE FITNESS TRACKER:",
                        description: "Monitor your steps, calories burned, and distance traveled with the Versa 3's built-in GPS, perfect for fitness enthusiasts."
                    },
                    {
                        title: "LONG BATTERY LIFE:",
                        description: "Go up to 6 days without needing a recharge, ideal for those with busy lifestyles who want to avoid frequent charging."
                    }
                ],
                price: 229.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/51JNsCR32BL.AC_SL1500.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Fitbit",
                    color: "White",
                    gps: "False",
                    waterResistance: "50 meters",
                    batteryLife: "Up to 6 days"
                }
            },
            {
                id: 5,
                name: "Huawei Watch GT 3",
                shortDescription: "Huawei Watch GT 3 Pro with AMOLED Display and 100+ Workout Modes",
                description: [
                    {
                        title: "STAY ACTIVE WITH 100+ WORKOUT MODES:",
                        description: "Choose from over 100 workout modes to fit your exercise style, making it easy to stay motivated and active."
                    },
                    {
                        title: "STUNNING AMOLED DISPLAY:",
                        description: "The 1.43-inch AMOLED display brings your watch to life with vibrant colors, perfect for viewing your stats at a glance."
                    },
                    {
                        title: "14-DAY BATTERY LIFE:",
                        description: "With an impressive 14-day battery life, the Huawei Watch GT 3 can keep up with even the busiest schedules."
                    },
                    {
                        title: "WIRELESS CHARGING:",
                        description: "Convenient wireless charging ensures your watch is ready to go when you need it most."
                    }
                ],
                price: 399.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/71sm4gFjpaL.AC_SL1000.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Huawei",
                    color: "Light Gold",
                    gps: "True",
                    waterResistance: "50 meters",
                    batteryLife: "Up to 14 days"
                }
            }
        ]
    },
    {
        id: 9,
        category: "Refrigerators",
        products: [
            {
                id: 1,
                name: "Kenmore",
                shortDescription: "30 in. 18.2 cu. ft. Capacity Refrigerator/Freezer with Adjustable Glass Shelving",
                description: [
                    {
                        title: "SPACIOUS CAPACITY:",
                        description: "With 18.2 cubic feet of storage, this refrigerator offers plenty of space to store all your groceries and keep them fresh for longer."
                    },
                    {
                        title: "ADJUSTABLE GLASS SHELVES:",
                        description: "Customize your refrigerator layout with adjustable glass shelves that make it easy to organize your food."
                    },
                    {
                        title: "ENERGY STAR CERTIFIED:",
                        description: "This refrigerator is ENERGY STAR certified, making it a more energy-efficient option to help save on your electricity bill."
                    },
                    {
                        title: "HUMIDITY CONTROL CRISPERS:",
                        description: "Keep your fruits and vegetables fresh for longer with humidity control crispers that provide the perfect environment."
                    }
                ],
                price: 1199,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/315kdHEUNNL.AC_SL1000.jpg",
                rating: 4.1,
                specifications: {
                    brand: "Kenmore",
                    capacity: "18.2 Cubic Feet",
                    color: "White",
                    energyStar: "Yes",
                    freezerType: "Top Freezer",
                    doorStyle: "Reversible"
                }
            },
            {
                id: 2,
                name: "EUHOMY Beverage Refrigerator",
                shortDescription: "126 Can Mini Fridge with Adjustable Shelves and Glass Door",
                description: [
                    {
                        title: "PERFECT FOR SMALL SPACES:",
                        description: "This compact beverage refrigerator can hold up to 126 cans, making it ideal for small spaces such as home bars, offices, or dorms."
                    },
                    {
                        title: "ADJUSTABLE SHELVES:",
                        description: "Easily organize your drinks with adjustable shelves that let you customize the layout based on your needs."
                    },
                    {
                        title: "STYLISH DESIGN:",
                        description: "With a sleek stainless steel finish and a clear glass door, this mini fridge adds a modern touch to any space."
                    },
                    {
                        title: "QUICK COOLING SYSTEM:",
                        description: "The powerful cooling system keeps your beverages chilled and ready to enjoy at all times."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/810Puf9WtoL.AC_SL1500.jpg",
                rating: 4.5,
                specifications: {
                    brand: "EUHOMY",
                    capacity: "3.2 Cubic Feet",
                    color: "Stainless Steel",
                    energyStar: "No",
                    coolingType: "Compressor",
                    doorStyle: "Glass Door"
                }
            },
            {
                id: 3,
                name: "SAMSUNG RF30A9071SR",
                shortDescription: "30 cu. ft. Mega Capacity 4-Door French Door Refrigerator",
                description: [
                    {
                        title: "LARGE STORAGE CAPACITY:",
                        description: "With 30 cubic feet of storage, this Samsung refrigerator provides more than enough space for all your groceries."
                    },
                    {
                        title: "FOUR TYPES OF ICE:",
                        description: "Enjoy four different ice options, from cubed to crushed, to meet all your beverage needs."
                    },
                    {
                        title: "FRENCH DOOR DESIGN:",
                        description: "The French door design provides easy access to your food while giving your kitchen a modern and elegant look."
                    },
                    {
                        title: "SMART HOME COMPATIBILITY:",
                        description: "Connect this refrigerator to your smart home devices to control settings, monitor performance, and more."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/517Tow-1+AL.AC_SL1000.jpg",
                rating: 4.5,
                specifications: {
                    brand: "SAMSUNG",
                    capacity: "30 Cubic Feet",
                    color: "Stainless Steel",
                    energyStar: "Yes",
                    iceType: "Four Types of Ice",
                    doorStyle: "French Door"
                }
            },
            {
                id: 4,
                name: "Igloo FR320I",
                shortDescription: "3.2 Cu.Ft. Single Door Compact Refrigerator with Freezer",
                description: [
                    {
                        title: "COMPACT AND PORTABLE:",
                        description: "Perfect for dorm rooms or offices, this 3.2 cubic foot refrigerator is compact enough to fit in small spaces while still providing plenty of storage."
                    },
                    {
                        title: "BUILT-IN FREEZER:",
                        description: "The built-in freezer provides extra storage for frozen goods, making it versatile for all your needs."
                    },
                    {
                        title: "SLIDE-OUT GLASS SHELF:",
                        description: "The slide-out glass shelf makes it easy to organize and access your items."
                    },
                    {
                        title: "ENERGY EFFICIENT:",
                        description: "ENERGY STAR certified, this refrigerator helps you save on energy while keeping your food cool."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/717EM8nul0L.AC_SL1500.jpg",
                rating: 3.5,
                specifications: {
                    brand: "Igloo",
                    capacity: "3.2 Cubic Feet",
                    color: "Stainless Steel",
                    energyStar: "Yes",
                    freezerType: "Top Freezer",
                    doorStyle: "Single Door"
                }
            },
            {
                id: 5,
                name: "RCA RFR321",
                shortDescription: "3.2 cu. ft. Mini Refrigerator with Freezer Compartment",
                description: [
                    {
                        title: "VERSATILE MINI FRIDGE:",
                        description: "This 3.2 cubic foot mini refrigerator is perfect for small spaces and features a freezer compartment for additional storage."
                    },
                    {
                        title: "REVERSIBLE DOOR:",
                        description: "The reversible door allows you to set up the fridge in any space with ease."
                    },
                    {
                        title: "ADJUSTABLE THERMOSTAT:",
                        description: "Control the temperature with an adjustable thermostat to keep your food at the optimal temperature."
                    },
                    {
                        title: "ENERGY EFFICIENT:",
                        description: "Rated with 3 ENERGY STARs, this mini fridge is highly energy efficient, helping you save on energy costs."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/61fOC5XLlpL.AC_SL1500.jpg",
                rating: 4,
                specifications: {
                    brand: "Frigidaire",
                    capacity: "3.2 Cubic Feet",
                    color: "Blue",
                    energyStar: "Yes",
                    freezerType: "Compartment",
                    doorStyle: "Reversible"
                }
            }
        ]
    },
    {
        id: 10,
        category: "Washers-Dryers",
        products: [
            {
                id: 1,
                name: "LG WM4000HWA",
                shortDescription: "4.5 cu. ft. Ultra Large Capacity Smart wi-fi Enabled Front Load Washer",
                description: [
                    {
                        title: "TURBOWASH™ 360°:",
                        description: "Cleans your clothes in under 30 minutes using five powerful jets that spray clothes from multiple angles."
                    },
                    {
                        title: "BUILT-IN INTELLIGENCE:",
                        description: "Automatically selects optimal washing patterns based on fabric type and load size, saving energy and water."
                    },
                    {
                        title: "ULTRA LARGE CAPACITY:",
                        description: "With 4.5 cu. ft., this washer fits more laundry in each load, reducing the number of cycles needed."
                    }
                ],
                price: 1200,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/51NAdayu4pS._AC_SL1000_.jpg",
                rating: 4,
                specifications: {
                    brand: "LG",
                    capacity: "4.5 Cubic Feet",
                    type: "Washer",
                    color: "Black",
                    energyConsumption: "120 kWh/year",
                    dimensions: "27 x 30 x 39 inches",
                    weight: "202 lbs",
                    voltage: "120V",
                    spinSpeed: "1300 RPM",
                }
            },
            {
                id: 2,
                name: "Euhomy  65132",
                shortDescription: "110V Portable Clothes Dryer 1.5 cu.ft Compact Laundry Dryer",
                description: [
                    {
                        title: "PORTABLE DESIGN:",
                        description: "Ideal for small spaces, this dryer can be easily moved and stored, making it perfect for apartments or dorms."
                    },
                    {
                        title: "STAINLESS STEEL DRUM:",
                        description: "Durable drum ensures longevity, and helps clothes dry efficiently and evenly."
                    },
                    {
                        title: "LOW ENERGY CONSUMPTION:",
                        description: "Uses less energy without compromising on drying power, helping you save on electricity bills."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71JWKUm4SQL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Euhomy",
                    capacity: "1.5 Cubic Feet",
                    type: "Dryer",
                    color: "White",
                    energyConsumption: "150 kWh/year",
                    dimensions: "19 x 19 x 27 inches",
                    weight: "37 lbs",
                    voltage: "110V",
                    power: "850W",
                }
            },
            {
                id: 3,
                name: "SAMSUNG WF45T6000AW",
                shortDescription: "4.5 cu. ft. Front Load Washer with Vibration Reduction Technology+",
                description: [
                    {
                        title: "VIBRATION REDUCTION TECHNOLOGY+:",
                        description: "Reduces noise and vibration, even during high-speed spins, for a quiet and smooth laundry experience."
                    },
                    {
                        title: "SELF CLEAN+:",
                        description: "Keeps your washer fresh and odor-free by cleaning the drum and gasket automatically."
                    },
                    {
                        title: "ENERGY STAR CERTIFIED:",
                        description: "Meets the strict energy efficiency standards, saving you money while protecting the environment."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/51rPFkF2tzL._AC_SL1000_.jpg",
                rating: 3,
                specifications: {
                    brand: "SAMSUNG",
                    capacity: "4.5 Cubic Feet",
                    type: "Washer",
                    color: "White",
                    energyConsumption: "130 kWh/year",
                    dimensions: "27 x 31 x 38 inches",
                    weight: "200 lbs",
                    voltage: "120V",
                    spinSpeed: "1200 RPM",
                }
            },
            {
                id: 4,
                name: "Pyle Compact Home Washer & Dryer",
                shortDescription: "2 in 1 Portable Mini Washing Machine with Spin Cycle",
                description: [
                    {
                        title: "TWIN TUB DESIGN:",
                        description: "The washer and dryer are separated, allowing you to wash and spin dry clothes at the same time."
                    },
                    {
                        title: "PORTABLE AND LIGHTWEIGHT:",
                        description: "Perfect for small spaces or frequent movers, it's easy to set up and transport."
                    },
                    {
                        title: "IDEAL FOR SMALL LOADS:",
                        description: "Great for washing small loads of laundry like baby clothes, underwear, or towels."
                    }
                ],
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71x0YGhcS9L._AC_SL1500_.jpg",
                rating: 3.5,
                specifications: {
                    brand: "Pyle",
                    capacity: "11 ltrs",
                    type: "Washer",
                    color: "Gray",
                    energyConsumption: "100 kWh/year",
                    dimensions: "24 x 14 x 28 inches",
                    weight: "28 lbs",
                    voltage: "110V",
                    spinSpeed: "1400 RPM",
                }
            },
            {
                id: 5,
                name: "YLTIMER Mini Portable Washer",
                shortDescription: "Mini Portable Washer and Spin Dryer, Collapsible Washer",
                description: [
                    {
                        title: "COLLAPSIBLE DESIGN:",
                        description: "This washer can collapse down for easy storage, making it perfect for those with limited space."
                    },
                    {
                        title: "EFFICIENT SPIN DRYER:",
                        description: "Includes a powerful spin dryer that removes excess water from clothes, reducing drying time."
                    },
                    {
                        title: "PORTABLE AND EASY TO USE:",
                        description: "Just plug it in, add water, and start washing in minutes."
                    }
                ],
                price: 69.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71yXjkMOkxL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "YLTIMER",
                    capacity: "12 ltrs",
                    type: "Washer",
                    color: "Gray",
                    energyConsumption: "50 kWh/year",
                    dimensions: "15 x 15 x 25 inches",
                    weight: "13 lbs",
                    voltage: "110V",
                    spinSpeed: "1200 RPM",
                }
            }
        ]
    },
    {
        id: 11,
        category: "Cameras",
        products: [
            {
                id:1,
                name: "Canon EOS R5",
                shortDescription: "Full-Frame Mirrorless Camera with 8K Video and 45MP CMOS Sensor",
                description: [
                    {
                        title: "8K Video Capability:",
                        description: "Record high-resolution videos with up to 8K resolution for unparalleled detail."
                    },
                    {
                        title: "45MP Full-Frame Sensor:",
                        description: "Capture breathtaking images with a 45-megapixel full-frame CMOS sensor."
                    },
                    {
                        title: "DIGIC X Processor:",
                        description: "Powerful image processing engine that enhances speed and image quality."
                    }
                ],
                price: 3899.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71hpUUcC5uL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Canon",
                    resolution: "45MP",
                    color: "Black",
                    maximumAperture: "12f",
                    sensorType: "Full-Frame CMOS",
                    videoResolution: "8K",
                    imageProcessor: "DIGIC X",
                    frameRate: "12 fps (mechanical)",
                    memorySlots: "Dual card slots"
                }
            },
            {
                id:2,
                name: "Sony Alpha 7C",
                shortDescription: "Compact Full-Frame Mirrorless Camera with 24MP Resolution and 4K Video",
                description: [
                    {
                        title: "Compact Full-Frame Design:",
                        description: "Small and lightweight for everyday portability without compromising quality."
                    },
                    {
                        title: "24MP Full-Frame Sensor:",
                        description: "High-resolution sensor that delivers sharp, detailed images."
                    },
                    {
                        title: "4K Video Recording:",
                        description: "Capture professional-grade video with 4K resolution and enhanced clarity."
                    },
                    {
                        title: "BIONZ X Processor:",
                        description: "Processes images quickly and maintains superior image quality."
                    }
                ],
                price: 1799.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71tFzElLlCL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Sony",
                    resolution: "24MP",
                    color: "Silver",
                    maximumAperture: "4f",
                    sensorType: "Full-Frame",
                    videoResolution: "4K",
                    imageProcessor: "BIONZ X",
                    frameRate: "10 fps",
                    connectivity: "Wi-Fi, Bluetooth"
                }
            },
            {
                id:3,
                name: "Nikon Z6 II",
                shortDescription: "Mirrorless Camera with 24MP Full-Frame Sensor and 4K Video",
                description: [
                    {
                        title: "24MP Full-Frame Sensor:",
                        description: "Delivers high-resolution photos with stunning clarity."
                    },
                    {
                        title: "Dual EXPEED 6 Processors:",
                        description: "Improves speed, handling, and overall image quality."
                    },
                    {
                        title: "4K Video Recording:",
                        description: "Shoot ultra-high-definition videos with exceptional detail."
                    },
                    {
                        title: "273-Point Hybrid Autofocus:",
                        description: "Fast and accurate focus across the frame, even in low light."
                    }
                ],
                price: 1999.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/61kajF4fH5L._AC_SL1000_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Nikon",
                    resolution: "24MP",
                    color: "Black",
                    maximumAperture: "4f",
                    sensorType: "Full-Frame",
                    videoResolution: "4K",
                    imageProcessor: "EXPEED 6",
                    frameRate: "14 fps",
                    focusSystem: "273-point Hybrid AF"
                }
            },
            {
                id:4,
                name: "Panasonic Lumix GH5",
                shortDescription: "Panasonic Lumix GH5 4K Digital Camera, 20.3 Megapixel Mirrorless Camera with Digital Live MOS Sensor, 5-Axis Dual I.S. 2.0, 4K 4:2:2 10-Bit Video, Full-Size HDMI Out, 3.2-Inch LCD, DC-GH5 (Black)",
                description:[
                    {
                        title: "14 fps Continuous Shooting:",
                        description: "Capture fast-moving action with ease."
                    },
                    {
                        title: "Dual Card Slots:",
                        description: "Allows for flexible storage options and easy backup."
                    },
                    {
                        title: "In-Body Image Stabilization:",
                        description: "Reduces camera shake for sharper images and smoother video."
                    },
                    {
                        title: "Durable Construction:",
                        description: "Weather-sealed and built for rugged conditions."
                    }
                ],
                price: 1399.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/81IyUXiUUpL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Panasonic",
                    resolution: "20.3MP",
                    color: "Black",
                    maximumAperture: "4f",
                    sensorType: "Digital Live MOS",
                    videoResolution: "4K 10-bit",
                    imageStabilization: "5-Axis Dual I.S. 2.0",
                    display: "3.2-Inch LCD",
                    output: "Full-Size HDMI"
                }
            },
            {
                id:5,
                name: "Fujifilm X-T4",
                shortDescription: "Fujifilm X-T4 Mirrorless Camera Body",
                description: [
                    {
                        title: "Compact Full-Frame Design:",
                        description: "Small and lightweight for everyday portability without compromising quality."
                    },
                    {
                        title: "26.1MP Full-Frame Sensor:",
                        description: "High-resolution sensor that delivers sharp, detailed images."
                    },
                    {
                        title: "4K Video Recording:",
                        description: "Capture professional-grade video with 4K resolution and enhanced clarity."
                    }
                ],
                price: 1699.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71BsdiTzEoL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Fujifilm",
                    resolution: "26.1MP",
                    color: "Black",
                    maximumAperture: "4f",
                    sensorType: "APS-C",
                    videoResolution: "4K",
                    imageStabilization: "5-Axis In-Body",
                    frameRate: "15 fps",
                    batteryLife: "600 shots"
                }
            }
        ]
    },
    {
        id: 12,
        category: "Living Room",
        products: [
            {
                id: 1,
                name: "Amazon Basics Swivel Foam Lounge Chair",
                shortDescription: "Adjustable Foam Lounge Chair with Swivel Feature and Headrest",
                description: [
                    {
                        title: "Swivel Design:",
                        description: "Enjoy 360-degree rotation with this comfortable foam lounge chair."
                    },
                    {
                        title: "Adjustable Headrest:",
                        description: "Provides customized comfort for your neck and head support."
                    },
                    {
                        title: "Durable Foam Construction:",
                        description: "Made with high-density foam for long-lasting comfort."
                    },
                    {
                        title: "Ideal for Relaxation:",
                        description: "Perfect for lounging in living rooms, reading nooks, or game rooms."
                    }
                ],
                price: 599.99,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/91nh+Sd6MKL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Amazon Basics",
                    color: "Blue",
                    type: "Chair",
                    dimensions: "26.3D x 23.5W x 13.7H in",
                    material: "High-density foam",
                    swivel: "360-degree rotation",
                    weightCapacity: "300 lbs",
                    adjustable: "Yes, headrest"
                } 
            },
            {
                id: 2,
                name: "ROTTOGOON Floor Lamp",
                shortDescription: "Industrial Standing Lamp with Adjustable Color Temperatures for Reading",
                description: [
                    {
                        title: "3 Color Temperature Settings:",
                        description: "Adjust between warm, neutral, and cool lighting to suit your needs."
                    },
                    {
                        title: "Tall and Sleek Design:",
                        description: "Adds a stylish touch to any living room with its modern industrial look."
                    },
                    {
                        title: "Energy-Efficient LED Bulb:",
                        description: "Includes a long-lasting LED bulb that saves on energy costs."
                    },
                    {
                        title: "Easy Assembly:",
                        description: "Simple to set up with detailed instructions and minimal tools required."
                    }
                ],
                price: 99.99,
                discount: 43,
                image: "https://m.media-amazon.com/images/I/61pJwYkeP9L._AC_SL1001_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "ROTTOGOON",
                    color: "Beige & Black",
                    type: "Lamp",
                    dimensions: '11.02"D x 11.02"W x 61.22"H',
                    lightBulbType: "LED",
                    colorTemperature: "3 adjustable settings",
                    material: "Metal and fabric",
                    energyEfficient: "Yes"
                } 
            },
            {
                id: 3,
                name: "Key Holder for Wall",
                shortDescription: "Decorative Key and Mail Holder with Large Hooks and Shelf",
                description: [
                    {
                        title: "Multi-Functional Design:",
                        description: "Includes large hooks for keys, bags, and umbrellas, with a shelf for mail."
                    },
                    {
                        title: "Sturdy Wood Construction:",
                        description: "Made of durable Paulownia wood for a rustic, natural look."
                    },
                    {
                        title: "Space-Saving Solution:",
                        description: "Helps keep your entryway organized while saving space."
                    },
                    {
                        title: "Easy to Mount:",
                        description: "Includes mounting hardware for quick and easy installation."
                    }
                ],
                price: 99.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61sHXVsbXAL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Wood",
                    type: "Key Holder",
                    dimensions: "9.8”W x 6.7”H x 4.2”D",
                    material: "Paulownia wood",
                    numberOfHooks: "4 large hooks",
                    installation: "Wall-mounted",
                    additionalFeatures: "Includes mail shelf"
                } 
            },
            {
                id: 4,
                name: "Yoobure Tree Bookshelf",
                shortDescription: "Tall 6-Shelf Book Storage Rack for Books, CDs, and Movies",
                description: [
                    {
                        title: "Unique Tree Design:",
                        description: "Stylish and functional, this bookshelf adds a retro touch to your living space."
                    },
                    {
                        title: "6 Tier Shelving:",
                        description: "Provides ample storage for books, CDs, and movies in a compact space."
                    },
                    {
                        title: "Durable and Stable:",
                        description: "Made from strong wood materials to support heavy loads."
                    },
                    {
                        title: "Space-Saving Solution:",
                        description: "The vertical design maximizes storage without taking up much floor space."
                    }
                ],
                price: 99.99,
                discount: 17,
                image: "https://m.media-amazon.com/images/I/61pfi70XekL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Yoobure",
                    color: "Rustic Brown",
                    type: "Bookshelf",
                    dimensions: '7.8"D x 15"W x 45"H',
                    material: "Wood",
                    numberOfShelves: "6",
                    weightCapacity: "50 lbs per shelf",
                    assemblyRequired: "Yes"
                } 
            },
            {
                id: 5,
                name: "Modern Ceiling Fan",
                shortDescription: "5-Blade Ceiling Fan with Lights, Remote, and Reversible Motor",
                description: [
                    {
                        title: "Reversible DC Motor:",
                        description: "Allows for energy-efficient airflow in both summer and winter."
                    },
                    {
                        title: "5 Wooden Blades:",
                        description: "Natural wood finish adds a stylish element to your living room."
                    },
                    {
                        title: "Integrated Light Fixture:",
                        description: "Provides ambient lighting with an included LED bulb."
                    },
                    {
                        title: "Remote Control Included:",
                        description: "Easily adjust fan speed and light settings with a convenient remote."
                    }
                ],
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61G3kHeHZ5L._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Morkefan",
                    color: "Black",
                    type: "Fan",
                    dimensions: '52 x 52 x 15.6 inches',
                    numberOfBlades: "5",
                    motorType: "Reversible DC motor",
                    lightIncluded: "Yes, LED",
                    controlMethod: "Remote control"
                } 
            }
        ]
    },
    {
        id: 13,
        category: "Dining Room",
        products:[
            {
                id: 1,
                name: "Dining Table Set",
                shortDescription: "5 Piece Dining Set with 4 Metal Chairs and Cushioned Seats",
                description: [
                    {
                        title: "Space-Saving Design:",
                        description: "Perfect for small spaces, this compact dining set fits comfortably in kitchens and dining rooms."
                    },
                    {
                        title: "Durable Materials:",
                        description: "Features a wood-finished tabletop and sturdy metal chairs for long-lasting use."
                    },
                    {
                        title: "Comfortable Seating:",
                        description: "Chairs include soft cushions for enhanced comfort during meals."
                    },
                    {
                        title: "Easy to Assemble:",
                        description: "Quick setup with all tools and instructions included."
                    }
                ],
                price: 209.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81ZRluRoZIL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Brown",
                    type: "Dining Table Set",
                    dimensions: "47.25”(L) x 29.5”(W) x 30”(H)",
                    material: "Wood and metal",
                    seatingCapacity: "4 people",
                    chairCushions: "Yes, padded",
                    assemblyRequired: "Yes",
                    weightCapacity: "220 lbs per chair"
                } 
            },
            {
                id: 2,
                name: "Saint Mossi 6 Light Chandelier Modern",
                shortDescription: "Modern Crystal Chandelier with 6 Lights for Elegant Dining Rooms",
                description: [
                    {
                        title: "Elegant Crystal Design:",
                        description: "Features high-quality K9 crystals for a luxurious and sparkling effect."
                    },
                    {
                        title: "Perfect for Dining Rooms:",
                        description: "Ideal lighting fixture to enhance the ambiance of any formal dining area."
                    },
                    {
                        title: "Durable Metal Frame:",
                        description: "Sturdy silver metal frame provides stability and longevity."
                    },
                    {
                        title: "Dimmable Lighting:",
                        description: "Supports dimmable bulbs for adjustable lighting based on mood and occasion."
                    }
                ],
                price: 199.99,
                discount: 5,
                image: "https://m.media-amazon.com/images/I/71GVXGwGDwL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Saint Mossi",
                    color: "Silver",
                    type: "Chandelier",
                    dimensions: "15.7 x 15.7 x 15.7 inches",
                    material: "Metal and crystal",
                    numberOfLights: "6",
                    bulbType: "LED or incandescent",
                    dimmable: "Yes",
                    installation: "Hardwired"
                } 
            },
            {
                id: 3,
                name: "Hombazaar Dining Room Sideboard",
                shortDescription: "Rustic Buffet Table with Storage and Bottom Shelf for Dining Room",
                description: [
                    {
                        title: "Ample Storage Space:",
                        description: "Includes two drawers and a lower shelf for extra storage and organization."
                    },
                    {
                        title: "Rustic Design:",
                        description: "Rustic brown finish adds a cozy touch to your dining room decor."
                    },
                    {
                        title: "Durable Construction:",
                        description: "Made of high-quality wood and metal for enhanced durability."
                    },
                    {
                        title: "Versatile Use:",
                        description: "Can be used as a buffet table, sideboard, or console table in various rooms."
                    }
                ],
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/710dIQSON8L._AC_SL1200_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Hombazaar",
                    color: "Rustic Brown",
                    type: "Sideboard",
                    dimensions: "39.4”(L) x 15.7”(W) x 31.5”(H)",
                    material: "Wood and metal",
                    storage: "2 drawers and 1 bottom shelf",
                    weightCapacity: "120 lbs",
                    assemblyRequired: "Yes",
                    versatility: "Buffet or console table"
                } 
            },
            {
                id: 4,
                name: "Artistic Weavers Dining Rug",
                shortDescription: "Boho Style Area Rug with Modern Geometric Pattern for Dining Room",
                description: [
                    {
                        title: "Modern Boho Design:",
                        description: "Features a stylish geometric pattern that adds texture and color to your dining room."
                    },
                    {
                        title: "Soft and Durable:",
                        description: "Made from high-quality fibers for both softness underfoot and durability."
                    },
                    {
                        title: "Versatile Usage:",
                        description: "Ideal for dining rooms but also suitable for bedrooms, living rooms, and hallways."
                    },
                    {
                        title: "Easy to Clean:",
                        description: "Stain-resistant material allows for easy maintenance and cleaning."
                    }
                ],
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81agkufeDnL._AC_SL1440_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Artistic Weavers",
                    color: "Multicolor",
                    type: "Rug",
                    dimensions: "2' x 7'",
                    material: "Polypropylene",
                    style: "Boho/Geometric",
                    stainResistant: "Yes",
                    indoorUse: "Yes",
                    pileHeight: "Medium"
                }
            },
            {
                id: 5,
                name: "Haus and Hues Wall Art",
                shortDescription: "Set of 6 Modern Wall Art Posters for Dining Room Decoration",
                description: [
                    {
                        title: "Stylish Set of 6 Posters:",
                        description: "This set includes 6 modern art prints that are perfect for dining room walls."
                    },
                    {
                        title: "Versatile Decor:",
                        description: "Ideal for decorating not just dining rooms, but also kitchens, hallways, and more."
                    },
                    {
                        title: "High-Quality Printing:",
                        description: "Printed on premium paper to ensure vibrant colors and long-lasting quality."
                    },
                    {
                        title: "Ready for Framing:",
                        description: "Sized perfectly to fit standard frames for easy hanging and display."
                    }
                ],
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81TVCpEIeYL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Haus and Hues",
                    color: "Mulricolor",
                    type: "Wall Art",
                    dimensions: "8 x 10 inches",
                    material: "Premium paper",
                    setContents: "6 posters",
                    framingRequired: "Yes, frames not included",
                    style: "Modern/Minimalist",
                    roomUse: "Dining room, kitchen, hallway"
                }
            }
        ]
    },
    {
        id: 14,
        category: "Bathroom",
        products:[
            {
                id: 1,
                name: "Bathroom Rugs",
                shortDescription: "Ultra Soft Chenille Plush Bath Mat, Super Absorbent and Non-Slip",
                description: [
                    {
                        title: "Ultra Soft Material:",
                        description: "Made of chenille plush for a luxurious feel underfoot."
                    },
                    {
                        title: "High Absorbency:",
                        description: "Quickly absorbs water to keep your bathroom floors dry."
                    },
                    {
                        title: "Non-Slip Backing:",
                        description: "Features a non-slip bottom to ensure safety on wet surfaces."
                    },
                    {
                        title: "Machine Washable:",
                        description: "Easy to clean and maintain, simply toss in the washing machine."
                    }
                ],
                price: 209.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/91RzUPx1mkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Gray",
                    type: "Rugs",
                    dimensions: "20 x 32 inches",
                    material: "Chenille",
                    absorbency: "High",
                    washable: "Yes",
                    thickness: "1 inch"
                }
            },
            {
                id: 2,
                name: "Bathroom Shower Curtain",
                shortDescription: "Waterproof Polyester Fabric Shower Curtain with 12 Hooks",
                description: [
                    {
                        title: "Waterproof Fabric:",
                        description: "Crafted from high-quality polyester to resist water and mildew."
                    },
                    {
                        title: "Includes Hooks:",
                        description: "Comes with 12 hooks for easy and quick installation."
                    },
                    {
                        title: "Machine Washable:",
                        description: "Conveniently machine washable for easy care."
                    },
                    {
                        title: "Standard Size:",
                        description: "Measures 72 x 72 inches to fit most standard tubs and showers."
                    }
                ],
                price: 30,
                discount: 45,
                image: "https://m.media-amazon.com/images/I/81nNdiTnDeL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Easy-Going",
                    color: "Cream",
                    type: "Shower Curtain",
                    dimensions: "72 x 72 inches",
                    material: "Polyester",
                    hooksIncluded: "12 hooks",
                    waterproof: "Yes",
                    machineWashable: "Yes"
                }
            },
            {
                id: 3,
                name: "NOKAMW Storage Cabinet",
                shortDescription: "3 Tier Shelves Bathroom Storage Cabinet with 2 Doors",
                description: [
                    {
                        title: "Spacious Storage:",
                        description: "Features 3 tier shelves and 2 doors for ample storage space."
                    },
                    {
                        title: "Stylish Design:",
                        description: "White finish adds a modern touch to any bathroom or kitchen."
                    },
                    {
                        title: "Versatile Use:",
                        description: "Can be used in bathrooms, kitchens, or entryways for additional storage."
                    },
                    {
                        title: "Easy Assembly:",
                        description: "Simple assembly process with included instructions."
                    }
                ],
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71ECN79BNhL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "NOKAMW",
                    color: "White",
                    type: "Storage Cabinet",
                    dimensions: "23.6 x 11.8 x 31.5 inches",
                    material: "Wood",
                    numberOfShelves: "3",
                    assemblyRequired: "Yes",
                    weightCapacity: "150 lbs"
                }
            },
            {
                id: 4,
                name: "TEXTILOM Towel Set",
                shortDescription: "6 Piece Cotton Towel Set, Soft and Quick Dry",
                description: [
                    {
                        title: "Premium Quality:",
                        description: "Made of 100% cotton for softness and durability."
                    },
                    {
                        title: "Quick Dry Technology:",
                        description: "Absorbent towels that dry quickly for convenience."
                    },
                    {
                        title: "Complete Set:",
                        description: "Includes 2 bath towels, 2 hand towels, and 2 washcloths."
                    },
                    {
                        title: "Machine Washable:",
                        description: "Easy to care for, simply machine wash and tumble dry."
                    }
                ],
                price: 159.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/918n1ebARfL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "TEXTILOM",
                    color: "Green",
                    type: "Towel Set",
                    dimensions: "6 Piece Set",
                    material: "100% Cotton",
                    absorbency: "High",
                    quickDry: "Yes",
                    machineWashable: "Yes"
                }
            },
            {
                id: 5,
                name: "Clara Clark Accessories Set",
                shortDescription: "Durable Bathroom Accessories Set, Includes Soap Dispenser and More",
                description: [
                    {
                        title: "Complete Accessories Set:",
                        description: "Includes a soap dispenser, toothbrush holder, tumbler, and soap dish."
                    },
                    {
                        title: "Elegant Design:",
                        description: "Stylish white finish complements any bathroom decor."
                    },
                    {
                        title: "Durable Material:",
                        description: "Made from high-quality materials for long-lasting use."
                    },
                    {
                        title: "Gift Packaged:",
                        description: "Perfectly packaged for gifting or personal use."
                    }
                ],
                price: 89,
                discount: 25,
                image: "https://m.media-amazon.com/images/I/71Hs44dzO3L._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Clara Clark",
                    color: "White",
                    type: "Accessories Set",
                    dimensions: "8 Piece Set",
                    material: "Durable Plastic",
                    soapDispenserIncluded: "Yes",
                    giftPackaged: "Yes",
                    usage: "Bathroom decor"
                }
            }
        ]
    },
    {
        id: 15,
        category: "Kitchen",
        products:[
            {
                id: 1,
                name: "RAXCO Utensil Set",
                shortDescription: "Silicone Cooking Utensils Set, Heat Resistant and Non-Stick",
                description: [
                    {
                        title: "Heat Resistant:",
                        description: "Designed to withstand high temperatures without melting."
                    },
                    {
                        title: "Non-Stick Surface:",
                        description: "Perfect for all cookware, preventing scratches and damage."
                    },
                    {
                        title: "Durable Construction:",
                        description: "Stainless steel handles ensure longevity and stability."
                    },
                    {
                        title: "Complete Set:",
                        description: "Includes a variety of tools to meet all your cooking needs."
                    }
                ],
                price: 209.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/71YuEe-fqFL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "RAXCO",
                    color: "Black",
                    type: "Utensil Set",
                    dimensions: "10 Piece Set",
                    material: "Silicone and Stainless Steel",
                    heatResistance: "Up to 500°F",
                    nonStick: "Yes",
                    dishwasherSafe: "Yes"
                }
            },
            {
                id: 2,
                name: "RAXCO Knife Set",
                shortDescription: "15 Piece Kitchen Knife Set with Block and Sharpener",
                description: [
                    {
                        title: "High Carbon Steel:",
                        description: "Knives made of high carbon stainless steel for durability."
                    },
                    {
                        title: "Ergonomic Design:",
                        description: "Comfortable grip and balanced weight for easy handling."
                    },
                    {
                        title: "Includes Sharpener:",
                        description: "Comes with a built-in sharpener for convenience."
                    },
                    {
                        title: "Pine Block Holder:",
                        description: "Elegant pine block to store and display your knives."
                    }
                ],
                price: 30,
                discount: 45,
                image: "https://m.media-amazon.com/images/I/710VumO24rL._AC_SL1500_.jpg",
                rating: 4.9,
                specifications: {
                    brand: "RAXCO",
                    color: "Black",
                    type: "Knife Set",
                    dimensions: "15 Piece Set",
                    material: "High Carbon Stainless Steel",
                    blockMaterial: "Pine",
                    sharpenerIncluded: "Yes",
                    dishwasherSafe: "No"
                }
            },
            {
                id: 3,
                name: "KitchenAid Stand Mixer",
                shortDescription: "Classic Plus 4.5-Qt. Tilt-Head Stand Mixer",
                description: [
                    {
                        title: "Powerful Motor:",
                        description: "Designed with a 300 watt motor for efficient mixing."
                    },
                    {
                        title: "Tilt-Head Design:",
                        description: "Allows easy access to the bowl and attachments."
                    },
                    {
                        title: "Multiple Speeds:",
                        description: "10 speeds to accommodate a variety of recipes."
                    },
                    {
                        title: "Versatile Attachments:",
                        description: "Compatible with a range of attachments for various tasks."
                    }
                ],
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71-D8cOBrcL._AC_SL1500_.jpg",
                rating: 3.5,
                specifications: {
                    brand: "KitchenAid",
                    color: "Passion Red",
                    type: "Stand Mixer",
                    dimensions: '14.1"D x 8.7"W x 13.9"H',
                    capacity: "4.5 Qt",
                    motorPower: "300 Watts",
                    speedSettings: "10",
                    attachmentsIncluded: "Yes"
                }
            },
            {
                id: 4,
                name: "Cuisinart Toaster",
                shortDescription: "Metal Classic 4-Slice Toaster, Brushed Stainless",
                description: [
                    {
                        title: "4-Slice Capacity:",
                        description: "Toast up to four slices at once for quick breakfasts."
                    },
                    {
                        title: "Dual Control Panels:",
                        description: "Independent controls for each side, allowing different settings."
                    },
                    {
                        title: "Extra Lift Feature:",
                        description: "Easily retrieve small slices of toast with the extra lift lever."
                    },
                    {
                        title: "Modern Design:",
                        description: "Brushed stainless steel finish fits any kitchen decor."
                    }
            ],
                price: 159.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/619XRJY+bFL._AC_SL1173_.jpg",
                rating: 4,
                specifications: {
                    brand: "Cuisinart",
                    color: "Brushed Stainless",
                    type: "Toaster",
                    dimensions: "4-Slice",
                    slots: "4",
                    dualControlPanels: "Yes",
                    extraLiftFeature: "Yes",
                    warranty: "3 Years"
                }
            },
            {
                id: 5,
                name: "Instant Pot Duo",
                shortDescription: "7-in-1 Electric Pressure Cooker with 14 One-Touch Programs",
                description: [
                    {
                        title: "Multi-Functionality:",
                        description: "Combines 7 kitchen appliances in one: pressure cooker, slow cooker, rice cooker, and more."
                    },
                    {
                        title: "Easy to Use:",
                        description: "14 one-touch smart programs for various dishes."
                    },
                    {
                        title: "Large Capacity:",
                        description: "6 Quart capacity perfect for families and meal prepping."
                    },
                    {
                        title: "Safety Features:",
                        description: "Equipped with multiple safety mechanisms for worry-free cooking."
                    }
                ],
                price: 89,
                discount: 25,
                image: "https://m.media-amazon.com/images/I/71LmN7FsaZL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Instant Pot",
                    color: "Stainless",
                    type: "Pressure Cooker",
                    dimensions: '11.2"D x 11.4"W x 10"H',
                    capacity: "6 Quart",
                    functions: "7",
                    smartPrograms: "14 One-Touch",
                    safetyFeatures: "Yes"
                }
            }
        ]
    },
    {
        id: 16,
        category: "Video",
        products: [
            {
                id: 1,
                name: "YABER Projector",
                shortDescription: "Projector with WiFi 6 and Bluetooth 5.2, 600 ANSI Native 1080P",
                description: [
                    {
                        title: "High Resolution:",
                        description: "Offers a native 1080P resolution for crystal-clear images."
                    },
                    {
                        title: "Auto Keystone Correction:",
                        description: "Features auto 6D keystone adjustment for easy setup."
                    },
                    {
                        title: "Zoom Functionality:",
                        description: "Allows for a 50% zoom without losing image quality."
                    },
                    {
                        title: "Connectivity:",
                        description: "Supports WiFi and Bluetooth for versatile connectivity options."
                    }
                ],
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71EL5jIMgGL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "YABER",
                    color: "Black",
                    type: "Projector",
                    resolution: "1920 x 1080",
                    brightness: "600 ANSI Lumens",
                    connectivity: "WiFi 6 and Bluetooth 5.2",
                    projectionSize: "Up to 170 inches",
                    aspectRatio: "16:9"
                }
            },
            {
                id: 2,
                name: "Yilebe  Video Projector",
                shortDescription: "Portable Projector with 1080P Full HD & 170\" Display",
                description: [
                    {
                        title: "Compact Design:",
                        description: "Lightweight and portable for easy transport."
                    },
                    {
                        title: "Full HD Support:",
                        description: "Compatible with 1080P for high-quality viewing."
                    },
                    {
                        title: "Wide Display Range:",
                        description: "Can project up to a 170-inch display."
                    },
                    {
                        title: "Versatile Compatibility:",
                        description: "Works seamlessly with phones and TV sticks."
                    }
                ],
                price: 60.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/610WCZ42iTL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Yeilebe",
                    color: "White & Yellow",
                    type: "Projector",
                    resolution: "1920 x 1080",
                    brightness: "Not Specified",
                    connectivity: "HDMI, USB",
                    projectionSize: "Up to 170 inches",
                    aspectRatio: "16:9"
                }
            },
            {
                id: 3,
                name: "Digital Camera 5K",
                shortDescription: "5K Digital Camera with Autofocus and Vlogging Features",
                description: [
                    {
                        title: "High Resolution:",
                        description: "Features a 48MP camera for stunning photography."
                    },
                    {
                        title: "WiFi Connectivity:",
                        description: "Easily share your content with built-in WiFi."
                    },
                    {
                        title: "Stabilization:",
                        description: "Anti-shake feature for steady shots."
                    },
                    {
                        title: "Included Accessories:",
                        description: "Comes with a 32GB SD card and 2 batteries for extended use."
                    }
                ],
                price: 160.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/81A9tumA8ZL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Black",
                    type: "Video Camera",
                    resolution: "1920 x 1080",
                    screen: "3.5 inches",
                    zoom: "16X Digital Zoom",
                    autofocus: "Yes",
                    includedStorage: "32GB SD Card"
                }
            },
            {
                id: 4,
                name: "Video Camera",
                shortDescription: "FHD 1080P Vlogging Camera with 270° Rotation Screen",
                description: [
                    {
                        title: "Full HD Video:",
                        description: "Records in full HD 1080P for high-quality video."
                    },
                    {
                        title: "Rotating Screen:",
                        description: "3.0-inch screen rotates 270 degrees for flexible shooting angles."
                    },
                    {
                        title: "Microphone Included:",
                        description: "Comes with a microphone for enhanced audio quality."
                    },
                    {
                        title: "Remote Control:",
                        description: "Includes remote control for hands-free operation."
                    }
                ],
                price: 90,
                discount: 18,
                image: "https://m.media-amazon.com/images/I/71XjuW0u+oL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "Generic",
                    color: "Black",
                    type: "Video Camera",
                    resolution: "1920 x 1080",
                    screen: "3.0 inches",
                    zoom: "16X Digital Zoom",
                    microphone: "Yes",
                    includedBatteries: "2"
                }
            },
            {
                id: 5,
                name: "TP-Link Tapo",
                shortDescription: "1080P Indoor Security Camera for Baby Monitor",
                description: [
                    {
                        title: "High Definition:",
                        description: "1080P resolution for clear video monitoring."
                    },
                    {
                        title: "Two-Way Audio:",
                        description: "Interact remotely with 2-way audio functionality."
                    },
                    {
                        title: "Night Vision:",
                        description: "Equipped with night vision for low-light monitoring."
                    },
                    {
                        title: "Smart Integration:",
                        description: "Works with Alexa and Google Home for smart home setups."
                    }
                ],
                price: 25,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/61gJcez9unL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "Generic",
                    color: "White",
                    type: "Spot Camera",
                    resolution: "HD",
                    nightVision: "Yes",
                    audio: "2-Way",
                    storageOptions: "Cloud & SD Card",
                    motionDetection: "Yes"
                }
            }
        ]
    }
];

module.exports = productsList;
