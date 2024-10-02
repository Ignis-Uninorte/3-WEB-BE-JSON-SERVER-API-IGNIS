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
                description: "High-performance desktop featuring a 16-core processor, top-tier graphics, and liquid cooling. Ideal for gaming and creative tasks.",
                price: 2599.99,
                discount: 15,
                image: "https://www.alkosto.com/medias/4711387567043-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNDI5NnxpbWFnZS93ZWJwfGFHUXlMMmd4WkM4eE5EUTRORFEwTlRFMk56WTBOaTgwTnpFeE16ZzNOVFkzTURRelh6QXdNVjgzTlRCWGVEYzFNRWd8Y2Q3N2JhY2MxYzAxYTY4Mjc3NTZkODExMzhhZWFiNjEwNmNlNDM1YWI1ZDEwZjY1ZWY4NDAwMDQ0NDliYjNkMQ",
                rating: 5,
                specifications: {
                    brand: "ASUS",
                    condition: "New",
                    memoryStorage: "2TB SSD",
                    displaySize: "15.6 inches",
                    color: "Black"
                }
            },
            {
                id: 2,
                name: "HP Victus",
                description: "Designed for artists and video editors with a 4K color-accurate display, workstation-class graphics, and ultra-fast NVMe storage.",
                price: 2999.99,
                discount: 20,
                image: "https://www.alkosto.com/medias/198122718313-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzY4NHxpbWFnZS93ZWJwfGFEWmtMMmhsWWk4eE5EWXpORFExTlRjNU16WTVOQzh4T1RneE1qSTNNVGd6TVROZk1EQXhYemMxTUZkNE56VXdTQXwzZDE3YmM0NTdlODgwYzIxMDc3MzdhNjdiNjg4Y2FjNGMyZmM2OGY2ZDRkNzExYTEzZDBlOTIxZjdiMDJjNGE5",
                rating: 4.8,
                specifications: {
                    brand: "HP",
                    condition: "New",
                    memoryStorage: "1TB NVMe",
                    displaySize: "17 inches",
                    color: "Silver"
                }
            },
            {
                id: 3,
                name: "OMEN HP",
                description: "Compact with energy-efficient processors and integrated graphics, perfect for home or office use.",
                price: 899.99,
                discount: 10,
                image: "https://www.alkosto.com/medias/196068436667-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDc5MTV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3lZaTlvTVRRdk1URTFNRGMyT1RVek1qRXhNVGd1YW5CbnxhNGMyMjI2ZjAwOTUyNWY5MDU0NWE0NmYzZTVjODJkNjY5N2NlYTBlZDIzYjgwZTk1M2EwNDkzMDg0MDQxNWEx",
                rating: 4.2,
                specifications: {
                    brand: "HP",
                    condition: "Renew",
                    memoryStorage: "512GB SSD",
                    displaySize: "14 inches",
                    color: "White"
                }
            },
            {
                id: 4,
                name: "LENOVO LOQ",
                description: "Gaming powerhouse with top-tier GPU and memory, customizable RGB lighting, and efficient airflow for cooling.",
                price: 1999.99,
                discount: 25,
                image: "https://www.alkosto.com/medias/198153728671-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjk4NHxpbWFnZS93ZWJwfGFEWTBMMmc1Tmk4eE5EVXpNVGszTWpNd01EZ3pNQzh4T1RneE5UTTNNamcyTnpGZk1EQXhYemMxTUZkNE56VXdTQXxjMDlkODY2ZDYwMzRiYzBkMzJjZDRkMmRkNWE1OWE0NmMzZjYyYjA5ODRhYjhhN2Y1MmM3MDgxOGExZTc2ZmQ1",
                rating: 5,
                specifications: {
                    brand: "Lenovo",
                    condition: "Renew",
                    memoryStorage: "1TB SSD",
                    displaySize: "16 inches",
                    color: "Black with RGB"
                }
            },
            {
                id: 5,
                name: "HP Victus AI",
                description: "Heavy-duty  designed for AI research and data science with dual CPUs and multiple GPUs for parallel processing.",
                price: 4999.99,
                discount: 5,
                image: "https://www.alkosto.com/medias/198122718313-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzY4NHxpbWFnZS93ZWJwfGFEWmtMMmhsWWk4eE5EWXpORFExTlRjNU16WTVOQzh4T1RneE1qSTNNVGd6TVROZk1EQXhYemMxTUZkNE56VXdTQXwzZDE3YmM0NTdlODgwYzIxMDc3MzdhNjdiNjg4Y2FjNGMyZmM2OGY2ZDRkNzExYTEzZDBlOTIxZjdiMDJjNGE5",
                rating: 4.7, 
                specifications: {
                    brand: "HP",
                    condition: "New",
                    memoryStorage: "4TB SSD",
                    displaySize: "18 inches",
                    color: "Gray"
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
                description: "The Samsung Galaxy Z Flip6 is a high-end smartphone, with a top-notch design and its amazing display, it is perfect for you.",
                price: 2999.99,
                discount: 30,
                image: "https://www.alkosto.com/medias/8806095850801-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDU3NnxpbWFnZS93ZWJwfGFEQmhMMmhpT0M4eE5EWTFNREUyTkRrd016azJOaTg0T0RBMk1EazFPRFV3T0RBeFh6QXdNVjgzTlRCWGVEYzFNRWd8ZWYzZjdjMTZkNjMxMzNjZjkwNzkwNzQyNmI4NTk0YjFmY2RiYzk1ZTQzZTlkZDk2ZTYyODhmMDI1MTFiMGQ2MQ",
                rating: 4.5,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Phantom Gray"
                }    
            },
            {
                id: 2,
                name: "iPhone 16 Pro",
                description: "The iPhone 16 Pro is a high-end smartphone with a 6.2-inch display, a 64MP camera, and a 4000mAh battery.",
                price: 1999.99,
                discount: 10,
                image: "https://www.alkosto.com/medias/195949771040-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDUwMnxpbWFnZS93ZWJwfGFEQTVMMmhrWkM4eE5EY3dOekEzTWpneU56UXlNaTh4T1RVNU5EazNOekV3TkRCZk1EQXhYemMxTUZkNE56VXdTQXwzYWE5MGY4MTZhYTNkYmQ3NDkzZGJkZWEzYWQ2NzU5MDg4Y2M1YzIwNzc4OTJhYTlhZDBjNjRiNDI0NDJkMjBi",
                rating: 4.8,
                specifications: {
                    brand: "Apple",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Gray"
                }    
            },
            {
                id: 3,
                name: "SAMSUNG A35",
                description: "The Samsung A35 is a medium smartphone with a high-end display",
                price: 499.99,
                discount: 50,
                image: "https://www.alkosto.com/medias/8806095647609-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTcxNnxpbWFnZS93ZWJwfGFEQTRMMmhtTVM4eE5ETTRNRFk1TmpjNU56SXhOQzg0T0RBMk1EazFOalEzTmpBNVh6QXdNVjgzTlRCWGVEYzFNRWd8OTk5MTNhNDE4MGY1ODkxYjlkZmY1MTNlNWUyNzI3ZDNiNWRlMTE1YmM3NmE1MGVkMTQ0NTRhOWE4YWNlYTU5MQ",
                rating: 3.9,
                specifications: {
                    brand: "Samsung",
                    condition: "Renew",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Blue"
                }    
            },
            {
                id: 4,
                name: "OPPO Reno 12",
                description: "With 64MP camera, 512gb of storage and 8GB of RAM, this smartphone is perfect.",
                price: 999.99,
                discount: 15,
                image: "https://www.alkosto.com/medias/7708334730138-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNTE4OHxpbWFnZS93ZWJwfGFHWXhMMmd4Wmk4eE5EWTJNakE0TkRZeU5EUXhOQzgzTnpBNE16TTBOek13TVRNNFh6QXdNVjgzTlRCWGVEYzFNRWd8ZjZlMTVkM2JjYzlkZmU3NTE4ZmYyN2I5NjdiMjljZTU4MGQ1OTZmYmU5NTVhYTg0NGY0NmYyODRlYzgzNzBkOA",
                rating: 4.1,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "White"
                }    
            },
            {
                id: 5,
                name: "MOTOROLA G54",
                description: "",
                price: 279.99,
                discount: 30,
                image: "https://www.alkosto.com/medias/840023259425-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MDQ5MnxpbWFnZS93ZWJwfGFEUTBMMmhqTmk4eE5ETTJOVEF6TXpneU5ESTROaTg0TkRBd01qTXlOVGswTWpWZk1EQXhYemMxTUZkNE56VXdTQXw5MjEzMzMyYzJjYjk2Mzc3Yzg5NTIxZmEwZmEzYTUwY2EwMGIzYjliMmE4NmNjZjdhNWY2NjgwMmQzMTIyNDcx",
                rating: 4.0,
                specifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128GB",
                    displaySize: "6.2 inches",
                    color: "Green lime"
                }    
            }
        ]
    },
    {
        id: 4,
        category: "Air Conditioning",
        items: [
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
        category: "Televisions",
        items: [
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
                brand: "Amazon ",
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
                    description: "See a wide spectrum of colors than traditional RGB models with PurColor; From green turf to an amazing sunset, you’ll enjoy true-to-life picture quality with our innovative color technology"
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
                name: "IPX5 Waterproof Speaker with HD Sound",
                description: "Bluetooth Speaker, IPX5 Waterproof Speaker with HD Sound, Up to 24H Playtime, TWS Pairing, BT5.3, Portable Wireless Speakers ",
                price: 89.99,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/81JqFR0d5qL._AC_SL1500_.jpg",
                rating: 4.1,
                specifications: {
                    brand: "BolaButty",
                    type: "Speaker",
                    connectivity: "Bluetooth",
                    color: "Red"
                }
            },
            {
                id: 2,
                name: "Focusrite Scarlett Solo 3rd Gen",
                description: "Focusrite Scarlett Solo 3rd Gen USB Audio Interface",
                price: 139,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/613veRuWtmL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "Focusrite",
                    type: "Audio Interface",
                    connectivity: "USB",
                    color: "Red"
                }
            },
            {
                id: 3,
                name: "JBL Tune 510BT",
                description: "Wireless On-Ear Headphones with Purebass Sound ",
                price: 35,
                discount: 5,
                image: "https://m.media-amazon.com/images/I/61oGAG5r7cL._AC_SL1500_.jpg",
                rating: 2.9,
                specifications: {
                    brand: "JBL",
                    type: "Headphones",
                    connectivity: "Bluetooth",
                    color: "Black"
                }
            },
            {
                id: 4,
                name: "JBL Vibe Beam",
                description: "True Wireless JBL Deep Bass Sound Earbuds, Bluetooth 5.2, Water & Dust Resistant, Hands-free call with VoiceAware, Up to 32 hours of battery life",
                price: 49.95,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/41+1Csr1pSL._AC_SL1000_.jpg",
                rating: 3.8,
                specifications: {
                    brand: "JBL",
                    type: "Headphones",
                    connectivity: "Bluetooth",
                    color: "Black"
                }
            },
            {
                id: 5,
                name: "Ortizan Portable Spekaer",
                description: " Bluetooth Speaker,IPX7 Waterproof Wireless Speakers with 24W Loud Stereo Sound,Deep Bass",
                price: 1100,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/81-YRA6tQqL._AC_SL1500_.jpg",
                rating: 4.1,
                specifications: {
                    brand: "Ortizan",
                    type: "Speaker",
                    connectivity: "Bluetooth",
                    color: "Blue"
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
                name: "HP OfficeJet Pro 8025",
                description: "HP OfficeJet Pro 8025 All-in-One Wireless Printer, Smart Home Office Productivity, HP Instant Ink, Works with Alexa (1KR57A)",
                price: 169.89,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61E7mqYjlEL._AC_SL1500_.jpg",
                rating: 4.1,
                specifications: {
                    brand: "HP",
                    connectivity: "Wi-Fi",
                    printTechnology: "Inkjet",
                    color: "Basalt"
                }
            },
            {
                id: 2,
                name: "Canon PIXMA TR4520",
                description: "Canon PIXMA TR4520 Wireless All in One Photo Printer with Mobile Printing, Black, Works with Alexa",
                price: 99.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Canon",
                    connectivity: "Wireless",
                    printTechnology: "Inkjet",
                    color: "Black"
                }
            },
            {
                id: 3,
                name: "Epson EcoTank ET-2720",
                description: "Epson EcoTank ET-2720 Wireless Color All-in-One Supertank Printer with Scanner and Copier - Black",
                price: 255.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71nZ3MAbFjS._AC_SL1500_.jpg",
                rating: 4.9,
                specifications: {
                    brand: "Epson",
                    connectivity: "Wi-Fi",
                    printTechnology: "Inkjet",
                    color: "White"
                }
            },
            {
                id: 4,
                name: "Canon CLASS MF262",
                description: "Canon CLASS MF262 Wireless Monochrome Laser Printer with Print, Copy and Scan",
                price: 99.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/51H-khkzxbL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Canon",
                    connectivity: "USB",
                    printTechnology: "Laser",
                    color: "Black"
                }
            },
            {
                id: 5,
                name: "Brother HL-L2300D",
                description: "Brother HL-L2300D Monochrome Laser Printer with Duplex Printing",
                price: 99.99,
                discount: 30,
                image: "https://m.media-amazon.com/images/I/61GAGGFAt-L._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Brother",
                    connectivity: "USB",
                    printTechnology: "Laser",
                    color: "Black"
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
                description: "4.5 cu. ft. Ultra Large Capacity Smart wi-fi Enabled Front Load Washer with TurboWash™ 360° and Built-In Intelligence",
                price: 1200,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/51NAdayu4pS._AC_SL1000_.jpg",
                rating: 4,
                specifications: {
                    brand: "LG",
                    capacity: "4.5 Cubic Feet",
                    type: "Washer",
                    color: "Black"
                }
            },
            {
                id: 2,
                name: "Euhomy  65132",
                description: "110V Portable Clothes Dryer 850W Compact Laundry Dryers 1.5 cu.ft Front Load Stainless Steel Electric Dryers Machine with Stainless Steel Tub",
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71JWKUm4SQL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Euhomy",
                    capacity: "1.5 Cubic Feet",
                    type: "Dryer",
                    color: "White"
                }
            },
            {
                id: 3,
                name: "SAMSUNG WF45T6000AW",
                description: "4.5 cu. ft. Front Load Washer with Vibration Reduction Technology+ in White",
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/51rPFkF2tzL._AC_SL1000_.jpg",
                rating: 3,
                specifications: {
                    brand: "SAMSUNG",
                    capacity: "4.5 Cubic Feet",
                    type: "Washer",
                    color: "White"
                }
            },
            {
                id: 4,
                name: "Pyle Compact Home Washer & Dryer",
                description: "2 in 1 Portable Mini Washing Machine, Twin Tubs, 11lbs. Capacity, 110V, Spin Cycle w/Hose, Translucent Tub Container Window, Ideal for Smaller Laundry Loads",
                price: 1799,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71x0YGhcS9L._AC_SL1500_.jpg",
                rating: 3.5,
                specifications: {
                    brand: "Pyle",
                    capacity: "11 ltrs",
                    type: "Washer",
                    color: "Gray"
                }
            },
            {
                id: 5,
                name: "YLTIMER Mini Portable Washer",
                description: "Machine, Mini Portable Washer and Spin Dryer, Collapsible Washer Deep Cleans",
                price: 69.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71yXjkMOkxL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "YLTIMER",
                    capacity: "12 ltrs",
                    type: "Washer",
                    color: "Gray"
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
                description: "Canon EOS R5 Full-Frame Mirrorless Camera with 8K Video, 45 Megapixel Full-Frame CMOS Sensor, DIGIC X Image Processor, Dual Memory Card Slots, and Up to 12 fps Mechnical Shutter",
                price: 3899.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71hpUUcC5uL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Canon",
                    resolution: "45MP",
                    color: "Black",
                    maximumAperture: "12f"
                }
            },
            {
                id:2,
                name: "Sony Alpha 7C",
                description: "Sony Alpha 7C Full-Frame Mirrorless Camera - Silver (ILCE7C/S)",
                price: 1799.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71tFzElLlCL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Sony",
                    resolution: "24MP",
                    color: "Silver",
                    maximumAperture: "4f"
                }
            },
            {
                id:3,
                name: "Nikon Z6 II",
                description: "Nikon Z6 II FX-Format Mirrorless Camera Body Black",
                price: 1999.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/61kajF4fH5L._AC_SL1000_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Nikon",
                    resolution: "24MP",
                    color: "Black",
                    maximumAperture: "4f"
                }
            },
            {
                id:4,
                name: "Panasonic Lumix GH5",
                description: "Panasonic Lumix GH5 4K Digital Camera, 20.3 Megapixel Mirrorless Camera with Digital Live MOS Sensor, 5-Axis Dual I.S. 2.0, 4K 4:2:2 10-Bit Video, Full-Size HDMI Out, 3.2-Inch LCD, DC-GH5 (Black)",
                price: 1399.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/81IyUXiUUpL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Panasonic",
                    resolution: "20.3MP",
                    color: "Black",
                    maximumAperture: "4f"
                }
            },
            {
                id:5,
                name: "Fujifilm X-T4",
                description: "Fujifilm X-T4 Mirrorless Camera Body",
                price: 1699.99,
                discount: 20,
                image: "https://m.media-amazon.com/images/I/71BsdiTzEoL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Fujifilm",
                    resolution: "26.1MP",
                    color: "Black",
                    maximumAperture: "4f"
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
                description: "Chair - with Headrest, Adjustable",
                price: 599.99,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/91nh+Sd6MKL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Amazon Basics",
                    color: "Blue",
                    type: "Chair",
                    dimensions: "26.3D x 23.5W x 13.7H in"
                } 
            },
            {
                id: 2,
                name: "ROTTOGOON Floor Lamp",
                description: "Lamp for Living Room with 3 Color Temperatures LED Bulb, Standing Lamp Tall Industrial Floor Lamp Reading",
                price: 99.99,
                discount: 43,
                image: "https://m.media-amazon.com/images/I/61pJwYkeP9L._AC_SL1001_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "ROTTOGOON",
                    color: "Beige & Black",
                    type: "Lamp",
                    dimensions: '11.02"D x 11.02"W x 61.22"H'
                } 
            },
            {
                id: 3,
                name: "Key Holder for Wall",
                description: "Decorative Key and Mail Holder with Shelf Has Large Hooks for Bags, Coats, Umbrella – Paulownia Wood Key Hanger with Mounting Hardware",
                price: 99.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61sHXVsbXAL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Wood",
                    type: "Key Holder",
                    dimensions: "9.8”W x 6.7”H x 4.2”D"
                } 
            },
            {
                id: 4,
                name: "Yoobure Tree Bookshelf",
                description: "6 Shelf Retro Floor Standing Bookcase, Tall Wood Book Storage Rack for CDs/Movies/Books, Utility Book Organizer Shelves",
                price: 99.99,
                discount: 17,
                image: "https://m.media-amazon.com/images/I/61pfi70XekL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Yoobure",
                    color: "Rustic Brown",
                    type: "Bookshelf",
                    dimensions: '7.8"D x 15"W x 45"H'
                } 
            },
            {
                id: 5,
                name: "Modern Ceiling Fan",
                description: "Fan with Lights and Remote,5 Wood Blade,Reversible DC Motor,6 Speed",
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/61G3kHeHZ5L._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Morkefan",
                    color: "Black",
                    type: "Fan",
                    dimensions: '52 x 52 x 15.6 inches'
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
                description: "5 Piece Dining Set with 4 Chairs for Home Kitchen Room Small Space, Wood Table and Metal Chair with Cushion",
                price: 209.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81ZRluRoZIL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Brown",
                    type: "Dining Table Set",
                    dimensions: "47.25”(L) x 29.5”(W) x 30”(H)"
                } 
            },
            {
                id: 2,
                name: "Saint Mossi 6 Light Chandelier Modern",
                description: "Modern Crystal Chandelier Lighting Ceiling Pendant Light Fixture for Dining Room Living Room",
                price: 199.99,
                discount: 5,
                image: "https://m.media-amazon.com/images/I/71GVXGwGDwL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Saint Mossi",
                    color: "Silver",
                    type: "Chandelier",
                    dimensions: "15.7 x 15.7 x 15.7 inches"
                } 
            },
            {
                id: 3,
                name: "Hombazaar Dining Room Sideboard",
                description: "Buffet Table with Storage Cabinet and Bottom Shelf, Console Table with Drawers for Living Room, Dining Room, Hallway, Kitchen, Rustic Brown",
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/710dIQSON8L._AC_SL1200_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Hombazaar",
                    color: "Rustic Brown",
                    type: "Sideboard",
                    dimensions: "39.4”(L) x 15.7”(W) x 31.5”(H)"
                } 
            },
            {
                id: 4,
                name: "Artistic Weavers Dining Rug",
                description: "Boho Area Rug for Bedroom, 2' x 7' Modern Geometric Patterned Home Decorative Carpet for Living Room, Indoor Rugs",
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81agkufeDnL._AC_SL1440_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Artistic Weavers",
                    color: "Multicolor",
                    type: "Rug",
                    dimensions: "2' x 7'"
                }
            },
            {
                id: 5,
                name: "Haus and Hues Wall Art",
                description: "Set of 6 Dining Room Wall Decor, Kitchen Wall Art Posters, Dining Room Decorations, Dining Room Wall Decor for Dining Room, Kitchen Wall Decor, Dining Room Wall Art",
                price: 199.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/81TVCpEIeYL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Haus and Hues",
                    color: "Mulricolor",
                    type: "Wall Art",
                    dimensions: "8 x 10 inches"
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
                description: "Bathroom Rugs, Ultra Soft Chenille Plush Bath Mat, Super Absorbent, Non-Slip Machine Washable Bath Rug for Shower, Bathroom, Kitchen, Floors",
                price: 209.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/91RzUPx1mkL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Gray",
                    type: "Rugs",
                    dimensions: "20 x 32 inches"
                }
            },
            {
                id: 2,
                name: "Bathroom Shower Curtain",
                description: "Shower Curtain with 12 Hooks, Waterproof Polyester Fabric Shower Curtain for Bathroom, Hotel Quality, Machine Washable, 72 x 72 inches",
                price: 30,
                discount: 45,
                image: "https://m.media-amazon.com/images/I/81nNdiTnDeL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Easy-Going",
                    color: "Cream",
                    type: "Shower Curtain",
                    dimensions: "72 x 72 inches"
                }
            },
            {
                id: 3,
                name: "NOKAMW Storage Cabinet",
                description: "Bathroom Storage Cabinet with 3 Tier Shelves and 2 Doors, Free Standing Floor Cabinet, Kitchen Cupboard, Wooden Entryway Storage Cabinet, 23.6 x 11.8 x 31.5 inches",
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71ECN79BNhL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "NOKAMW",
                    color: "White",
                    type: "Storage Cabinet",
                    dimensions: "23.6 x 11.8 x 31.5 inches"
                }
            },
            {
                id: 4,
                name: "TEXTILOM Towel Set",
                description: "6 Piece Towel Set, 100% Cotton, Soft, Absorbent, Quick Dry, 2 Bath Towels, 2 Hand Towels, 2 Washcloths, Machine Washable, Hotel Quality",
                price: 159.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/918n1ebARfL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "TEXTILOM",
                    color: "Green",
                    type: "Towel Set",
                    dimensions: "6 Piece Set"
                }
            },
            {
                id: 5,
                name: "Clara Clark Accessories Set",
                description: "Bathroom Accessories Set, Includes Soap Dispenser, Tooth Brush Holder, Tumbler, Soap Dish, Durable Bath Accessory Set, Bathroom Decor, Gift Packaged",
                price: 89,
                discount: 25,
                image: "https://m.media-amazon.com/images/I/71Hs44dzO3L._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Clara Clark",
                    color: "White",
                    type: "Accessories Set",
                    dimensions: "8 Piece Set"
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
                description: "Silicone Cooking Utensils Set, Heat Resistant and Non-Stick Kitchen Utensil Set with Stainless Steel Handle, Kitchen Gadgets Tools Set for Cookware",
                price: 209.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/71YuEe-fqFL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "RAXCO",
                    color: "Black",
                    type: "Utensil Set",
                    dimensions: "10 Piece Set"
                }
            },
            {
                id: 2,
                name: "RAXCO Knife Set",
                description: "Knife Set with Block, 15 Pieces Kitchen Knife Set with Pine Block Holder, Knife Block Set with Sharpener, High Carbon Stainless Steel Knife Block Set, Boxed Knife Set",
                price: 30,
                discount: 45,
                image: "https://m.media-amazon.com/images/I/710VumO24rL._AC_SL1500_.jpg",
                rating: 4.9,
                specifications: {
                    brand: "RAXCO",
                    color: "Black",
                    type: "Knife Set",
                    dimensions: "15 Piece Set"
                }
            },
            {
                id: 3,
                name: "KitchenAid Stand Mixer",
                description: "KitchenAid KSM75SL Classic Plus 4.5-Qt. Tilt-Head Stand Mixer",
                price: 215,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71-D8cOBrcL._AC_SL1500_.jpg",
                rating: 3.5,
                specifications: {
                    brand: "KitchenAid",
                    color: "Passion Red",
                    type: "Stand Mixer",
                    dimensions: '14.1"D x 8.7"W x 13.9"H'
                }
            },
            {
                id: 4,
                name: "Cuisinart Toaster",
                description: "Cuisinart CPT-180P1 Metal Classic 4-Slice toaster, Brushed Stainless",
                price: 159.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/619XRJY+bFL._AC_SL1173_.jpg",
                rating: 4,
                specifications: {
                    brand: "Cuisinart",
                    color: "Brushed Stainless",
                    type: "Toaster",
                    dimensions: "4-Slice"
                }
            },
            {
                id: 5,
                name: "Instant Pot Duo",
                description: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, Sterilizer, and Warmer, 6 Quart, 14 One-Touch Programs",
                price: 89,
                discount: 25,
                image: "https://m.media-amazon.com/images/I/71LmN7FsaZL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Instant Pot",
                    color: "Stainless",
                    type: "Pressure Cooker",
                    dimensions: '11.2"D x 11.4"W x 10"H'
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
                description: "Projector with WiFi 6 and Bluetooth 5.2, YABER Pro V9 600 ANSI Native 1080P Outdoor Movie Projector, Auto 6D Keystone & 50% Zoom",
                price: 499.99,
                discount: 10,
                image: "https://m.media-amazon.com/images/I/71EL5jIMgGL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "YABER",
                    color: "Black",
                    type: "Projector",
                    resolution: "1920 x 1080"
                }
            },
            {
                id: 2,
                name: "Yilebe  Video Projector",
                description: 'Portable Projector Supported 1080P Full HD & 170" Display Compatible with Phone,TV Stick',
                price: 60.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/610WCZ42iTL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Yeilebe",
                    color: "White & Yellow",
                    type: "Projector",
                    resolution: "1920 x 1080"
                }
            },
            {
                id: 3,
                name: "Digital Camera 5K",
                description: '5K Digital Camera WiFi Autofocus Vlogging Camera for YouTube 48MP Camera for Photography and Video, 3.5" Screen Travel Camera with UV Filter, Anti-Shake,16X Digital Zoom,32GB SD Card,2 Batteries',
                price: 160.99,
                discount: 15,
                image: "https://m.media-amazon.com/images/I/81A9tumA8ZL._AC_SL1500_.jpg",
                rating: 4.5,
                specifications: {
                    brand: "Generic",
                    color: "Black",
                    type: "Video Camera",
                    resolution: "1920 x 1080"
                }
            },
            {
                id: 4,
                name: "Video Camera",
                description: 'Video Camera YouTube Vlogging Camera Recorder FHD 1080P 24.0MP 3.0 Inch 270 Degree Rotation Screen 16X Digital Zoom Camcorder with Microphone,Remote Control and 2 Batteries',
                price: 90,
                discount: 18,
                image: "https://m.media-amazon.com/images/I/71XjuW0u+oL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "Generic",
                    color: "Black",
                    type: "Video Camera",
                    resolution: "1920 x 1080"
                }
            },
            {
                id: 5,
                name: "TP-Link Tapo",
                description: '1080P Indoor Security Camera for Baby Monitor, Dog Camera w/Motion Detection, 2-Way Audio Siren, Night Vision, Cloud & SD Card Storage, Works w/Alexa & Google Home',
                price: 25,
                discount: 40,
                image: "https://m.media-amazon.com/images/I/61gJcez9unL._AC_SL1500_.jpg",
                rating: 4,
                specifications: {
                    brand: "Generic",
                    color: "White",
                    type: "Spot Camera",
                    resolution: "HD"
                }
            }
        ]
    }
];

module.exports = productsList;