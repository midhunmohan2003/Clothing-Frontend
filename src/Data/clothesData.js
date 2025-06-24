const clothesData = [
  {
    id: 1,
    name: "Men's Slim Fit T-Shirt",
    category: "T-Shirts",
    price: 19.99,
    size: ["S", "M", "L", "XL"],
    color: ["Black", "White"],
    brand: "Urban Wear",
    image: "https://image.hm.com/assets/hm/0d/9b/0d9b7bb5ef782d6aa36f8bb9ac21e687cd7fe71c.jpg?imwidth=1260",
    inStock: true,
    description: "Comfortable slim fit t-shirt made from soft cotton. Ideal for everyday casual wear.",
    highlights: [
      "Soft breathable fabric",
      "Modern slim cut",
      "Machine washable"
    ]
  },
  {
    id: 2,
    name: "Women's High Waist Jeans",
    category: "Jeans",
    price: 39.99,
    size: ["26", "28", "30", "32"],
    color: ["Blue", "Black"],
    brand: "Denim Co",
    image: "https://i.pinimg.com/originals/ea/7e/6b/ea7e6bd8dfe93b72620f99c8ed902dfe.jpg",
    inStock: true,
    description: "High-waisted skinny jeans designed to flatter the silhouette. Stretchable and durable.",
    highlights: [
      "Flattering high-rise fit",
      "Stretch denim material",
      "Reinforced seams for durability"
    ]
  },
  {
    id: 3,
    name: "Kids Cartoon Print T-Shirt",
    category: "Kidswear",
    price: 14.99,
    size: ["2-3Y", "4-5Y", "6-7Y"],
    color: ["Red", "Yellow"],
    brand: "MiniSteps",
    image: "https://m.media-amazon.com/images/I/71gjvEHif-L._SX679_.jpg",
    inStock: true,
    description: "Bright and fun cartoon printed t-shirt for kids. Soft fabric and comfortable fit.",
    highlights: [
      "Cute cartoon graphics",
      "Gentle on kids’ skin",
      "Colorfast after multiple washes"
    ]
  },
  {
    id: 4,
    name: "Men's Casual Pants",
    category: "Dresses",
    price: 42.99,
    size: ["S", "M", "L"],
    color: ["Green", "Beige", "Black"],
    brand: "Breeze Fashion",
    image: "https://m.media-amazon.com/images/I/51tINEOZrOL._SX679_.jpg",
    inStock: true,
    description: "Relaxed fit casual pants perfect for outings and vacations. Breathable and stylish.",
    highlights: [
      "Elastic waistband for comfort",
      "Lightweight cotton blend",
      "Trendy floral patterns"
    ]
  },
  {
    id: 5,
    name: "Men's Running Shorts",
    category: "Activewear",
    price: 22.99,
    size: ["M", "L"],
    color: ["Grey", "Black"],
    brand: "FitX",
    image: "https://m.media-amazon.com/images/I/61dINsGfswL._SX679_.jpg",
    inStock: true,
    description: "Lightweight and breathable shorts for running or gym sessions. Quick-dry fabric.",
    highlights: [
      "Moisture-wicking technology",
      "Zippered side pockets",
      "Elastic drawstring waist"
    ]
  },
  {
    id: 6,
    name: "Women's Yoga Leggings",
    category: "Activewear",
    price: 27.99,
    size: ["S", "M", "L"],
    color: ["Purple", "Navy", "Darkgreen"],
    brand: "ZenStretch",
    image: "https://i.pinimg.com/originals/4c/a8/d8/4ca8d8f8a809b9b01dfa0120c4e1abb5.jpg",
    inStock: true,
    description: "High-waist yoga leggings designed for comfort and flexibility. Sweat-wicking material.",
    highlights: [
      "Four-way stretch fabric",
      "High-rise waistband",
      "No-see-through guarantee"
    ]
  },
  {
    id: 7,
    name: "Men's Bomber Jacket",
    category: "Jackets",
    price: 59.99,
    size: ["L", "XL"],
    color: ["Olive", "Black", "Grey"],
    brand: "WinterEdge",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/h/t/y/3xl-1-no-rtmjkt786fs-light-grey-rare-times-original-imah7gnegzhjhxgh.jpeg?q=70",
    inStock: false,
    description: "Trendy bomber jacket with padded lining. Perfect for chilly weather and casual style.",
    highlights: [
      "Zippered closure and pockets",
      "Ribbed cuffs and hem",
      "Warm polyester lining"
    ]
  },
  {
    id: 8,
    name: "Women's Ethnic Kurta",
    category: "Ethnic Wear",
    price: 34.99,
    size: ["M", "L"],
    color: ["Maroon", "Beige"],
    brand: "DesiStyle",
    image: "https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000011472342-Red-RED-1000011472342-22062022_01-2100.jpg",
    inStock: true,
    description: "Elegant ethnic kurta with traditional patterns. Suitable for festivals and formal events.",
    highlights: [
      "Soft rayon fabric",
      "Intricate embroidery",
      "Side slits for comfort"
    ]
  },
  {
    id: 9,
    name: "Unisex Puffer Jacket",
    category: "Jackets",
    price: 69.99,
    size: ["M", "L", "XL"],
    color: ["Navy", "Black"],
    brand: "ArcticZone",
    image: "https://assets.thenorthface.eu/images/t_img/f_auto,h_462,w_462,e_sharpen:60/dpr_2.0/v1737387912/NF0A8BJJJK3-ALT2/Unisex-NSE-Down-Puffer-Jacket.jpg",
    inStock: true,
    description: "Warm and cozy puffer jacket suitable for all genders. Insulated for harsh winters.",
    highlights: [
      "Windproof and water-resistant",
      "Insulated with down fill",
      "Front zip closure with stand collar"
    ]
  },
  {
    id: 10,
    name: "Mens Full Sleeve T-Shirt",
    category: "Accessories",
    price: 15.99,
    size: ["M", "L"],
    color: ["Red", "Brown", "Black"],
    brand: "BuckleUp",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/3/296402336/BS/DL/HU/103116482/red-full-sleeve-tshirt-dropshipping-qikink-500x500.jpg",
    inStock: true,
    description: "Full sleeve t-shirt designed for all-day wear. Pairs well with jeans or joggers.",
    highlights: [
      "Stretchable cotton blend",
      "Double-stitched seams",
      "Perfect for layering"
    ]
  },
  {
    id: 11,
    name: "Cotton Twill Cap",
    category: "Accessories",
    price: 12.99,
    size: ["One Size"],
    color: ["Black", "White"],
    brand: "Silken Threads",
    image: "https://image.hm.com/assets/hm/e4/88/e48834523f265152b0b1f7b28250af78803c9475.jpg?imwidth=1260",
    inStock: true,
    description: "Durable cotton twill cap with adjustable strap. Stylish and sun-protective.",
    highlights: [
      "Curved brim for sun protection",
      "Adjustable buckle strap",
      "Unisex design"
    ]
  },
  {
    id: 12,
    name: "Men's Formal Shirt",
    category: "Shirts",
    price: 29.99,
    size: ["M", "L", "XL"],
    color: ["White", "Lightblue"],
    brand: "Classic Fit",
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300998948SAGE_1_800x.jpg?v=1731601626",
    inStock: true,
    description: "Crisp formal shirt perfect for office or events. Tailored fit with premium cotton fabric.",
    highlights: [
      "Wrinkle-resistant finish",
      "Button-down collar",
      "Breathable cotton material"
    ]
  }
]

export default clothesData
