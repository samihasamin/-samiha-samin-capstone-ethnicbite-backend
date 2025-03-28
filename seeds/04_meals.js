/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("meals").del();
  await knex("meals").insert([
    // Greek Cuisine - Caterer 1
    {
      id: 1,
      name: "Moussaka",
      description: "A Greek layered eggplant and meat dish",
      price: 12.99,
      image_url: "moussaka.jpg",
      caterer_id: 1,
      cuisine_id: 1,
    },
    {
      id: 2,
      name: "Souvlaki",
      description: "Grilled skewered meat with pita",
      price: 10.5,
      image_url: "souvlaki.jpg",
      caterer_id: 1,
      cuisine_id: 1,
    },
    {
      id: 3,
      name: "Spanakopita",
      description: "Spinach and feta pie",
      price: 9.0,
      image_url: "spanakopita.jpg",
      caterer_id: 1,
      cuisine_id: 1,
    },
    {
      id: 4,
      name: "Dolmades",
      description: "Stuffed grape leaves",
      price: 8.5,
      image_url: "dolmades.jpg",
      caterer_id: 1,
      cuisine_id: 1,
    },
    {
      id: 5,
      name: "Baklava",
      description: "Honey and nut pastry",
      price: 7.5,
      image_url: "baklava.jpg",
      caterer_id: 1,
      cuisine_id: 1,
    },

    // Egyptian Cuisine - Caterer 2
    {
      id: 6,
      name: "Koshari",
      description: "Egyptian pasta, rice, and lentil mix",
      price: 10.0,
      image_url: "koshari.jpg",
      caterer_id: 2,
      cuisine_id: 2,
    },
    {
      id: 7,
      name: "Foul Medames",
      description: "Mashed fava beans with spices",
      price: 8.0,
      image_url: "foulmedames.jpg",
      caterer_id: 2,
      cuisine_id: 2,
    },
    {
      id: 8,
      name: "Shawarma",
      description: "Grilled meat wrap",
      price: 12.0,
      image_url: "shawarma.jpg",
      caterer_id: 2,
      cuisine_id: 2,
    },
    {
      id: 9,
      name: "Mahshi",
      description: "Stuffed vegetables with rice",
      price: 11.0,
      image_url: "mahshi.jpg",
      caterer_id: 2,
      cuisine_id: 2,
    },
    {
      id: 10,
      name: "Om Ali",
      description: "Egyptian bread pudding",
      price: 7.0,
      image_url: "omali.jpg",
      caterer_id: 2,
      cuisine_id: 2,
    },

    // Bangladeshi Cuisine - Caterer 3 🇧🇩
    {
      id: 11,
      name: "Biryani",
      description: "Spiced rice with marinated meat",
      price: 14.99,
      image_url: "biryani.jpg",
      caterer_id: 3,
      cuisine_id: 3,
    },
    {
      id: 12,
      name: "Shutki Bhuna",
      description: "Fermented dried fish cooked with spices",
      price: 12.5,
      image_url: "shutki.jpg",
      caterer_id: 3,
      cuisine_id: 3,
    },
    {
      id: 13,
      name: "Panta Bhat",
      description: "Fermented rice served with mustard oil and onion",
      price: 5.99,
      image_url: "panta_bhat.jpg",
      caterer_id: 3,
      cuisine_id: 3,
    },
    {
      id: 14,
      name: "Chingri Malai Curry",
      description: "Prawns cooked in creamy coconut curry",
      price: 15.0,
      image_url: "chingri.jpg",
      caterer_id: 3,
      cuisine_id: 3,
    },
    {
      id: 15,
      name: "Mishti Doi",
      description: "Sweetened yogurt dessert",
      price: 6.5,
      image_url: "mishti_doi.jpg",
      caterer_id: 3,
      cuisine_id: 3,
    },

    // Italian Cuisine - Caterer 4
    {
      id: 16,
      name: "Lasagna",
      description: "Layered pasta with meat and cheese",
      price: 13.5,
      image_url: "lasagna.jpg",
      caterer_id: 4,
      cuisine_id: 4,
    },
    {
      id: 17,
      name: "Margherita Pizza",
      description: "Classic tomato, mozzarella, and basil pizza",
      price: 11.99,
      image_url: "pizza.jpg",
      caterer_id: 4,
      cuisine_id: 4,
    },
    {
      id: 18,
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon and egg",
      price: 12.99,
      image_url: "carbonara.jpg",
      caterer_id: 4,
      cuisine_id: 4,
    },
    {
      id: 19,
      name: "Tiramisu",
      description: "Coffee-flavored Italian dessert",
      price: 9.5,
      image_url: "tiramisu.jpg",
      caterer_id: 4,
      cuisine_id: 4,
    },
    {
      id: 20,
      name: "Bruschetta",
      description: "Grilled bread with tomatoes and basil",
      price: 7.0,
      image_url: "bruschetta.jpg",
      caterer_id: 4,
      cuisine_id: 4,
    },

    // Thai Cuisine - Caterer 5
    {
      id: 21,
      name: "Pad Thai",
      description: "Stir-fried rice noodles with shrimp",
      price: 13.0,
      image_url: "pad_thai.jpg",
      caterer_id: 5,
      cuisine_id: 5,
    },
    {
      id: 22,
      name: "Tom Yum Soup",
      description: "Spicy shrimp soup",
      price: 10.5,
      image_url: "tom_yum.jpg",
      caterer_id: 5,
      cuisine_id: 5,
    },
    {
      id: 23,
      name: "Green Curry",
      description: "Spicy coconut curry",
      price: 14.0,
      image_url: "green_curry.jpg",
      caterer_id: 5,
      cuisine_id: 5,
    },
    {
      id: 24,
      name: "Mango Sticky Rice",
      description: "Sweet mango with coconut sticky rice",
      price: 8.5,
      image_url: "mango_rice.jpg",
      caterer_id: 5,
      cuisine_id: 5,
    },
    {
      id: 25,
      name: "Thai Satay",
      description: "Grilled chicken skewers with peanut sauce",
      price: 11.0,
      image_url: "thai_satay.jpg",
      caterer_id: 5,
      cuisine_id: 5,
    },

    // French Cuisine - Caterer 6
    {
      id: 26,
      name: "Coq au Vin",
      description: "Chicken braised in red wine",
      price: 16.99,
      image_url: "coq_au_vin.jpg",
      caterer_id: 6,
      cuisine_id: 6,
    },
    {
      id: 27,
      name: "Ratatouille",
      description: "Vegetable stew with herbs",
      price: 12.0,
      image_url: "ratatouille.jpg",
      caterer_id: 6,
      cuisine_id: 6,
    },
    {
      id: 28,
      name: "Quiche Lorraine",
      description: "Savory pie with bacon and cheese",
      price: 14.0,
      image_url: "quiche.jpg",
      caterer_id: 6,
      cuisine_id: 6,
    },
    {
      id: 29,
      name: "Soupe à l'Oignon",
      description: "French onion soup with cheese croutons",
      price: 9.0,
      image_url: "onion_soup.jpg",
      caterer_id: 6,
      cuisine_id: 6,
    },
    {
      id: 30,
      name: "Crème Brûlée",
      description: "Caramelized vanilla custard dessert",
      price: 8.5,
      image_url: "creme_brulee.jpg",
      caterer_id: 6,
      cuisine_id: 6,
    },

    // Pakistani Cuisine - Caterer 7

    {
      id: 31,
      name: "Nihari",
      description: "Slow-cooked beef stew with aromatic spices",
      price: 15.99,
      image_url: "nihari.jpg",
      caterer_id: 7,
      cuisine_id: 7,
    },
    {
      id: 32,
      name: "Haleem",
      description: "A thick stew made with wheat, barley, lentils, and meat",
      price: 13.5,
      image_url: "haleem.jpg",
      caterer_id: 7,
      cuisine_id: 7,
    },
    {
      id: 33,
      name: "Seekh Kebab",
      description: "Spiced minced meat skewers grilled to perfection",
      price: 11.99,
      image_url: "seekh_kebab.jpg",
      caterer_id: 7,
      cuisine_id: 7,
    },
    {
      id: 34,
      name: "Chicken Karahi",
      description:
        "Spicy chicken curry cooked in a wok with tomatoes and green chilies",
      price: 14.0,
      image_url: "chicken_karahi.jpg",
      caterer_id: 7,
      cuisine_id: 7,
    },
    {
      id: 35,
      name: "Gajar Ka Halwa",
      description: "A rich carrot-based dessert cooked with milk and nuts",
      price: 7.99,
      image_url: "gajar_halwa.jpg",
      caterer_id: 7,
      cuisine_id: 7,
    },

    //Indian Cuisine - Caterer 8

    {
      id: 36,
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces",
      price: 14.99,
      image_url: "butter_chicken.jpg",
      caterer_id: 8,
      cuisine_id: 8,
    },
    {
      id: 37,
      name: "Palak Paneer",
      description: "Soft paneer cubes in a creamy spinach gravy",
      price: 12.5,
      image_url: "palak_paneer.jpg",
      caterer_id: 8,
      cuisine_id: 8,
    },
    {
      id: 38,
      name: "Rogan Josh",
      description: "Aromatic Kashmiri curry with slow-cooked lamb",
      price: 15.99,
      image_url: "rogan_josh.jpg",
      caterer_id: 8,
      cuisine_id: 8,
    },
    {
      id: 39,
      name: "Dosa with Sambar",
      description: "Crispy South Indian crepe served with spicy lentil soup",
      price: 10.99,
      image_url: "dosa_sambar.jpg",
      caterer_id: 8,
      cuisine_id: 8,
    },
    {
      id: 40,
      name: "Gulab Jamun",
      description: "Deep-fried dough balls soaked in fragrant sugar syrup",
      price: 6.99,
      image_url: "gulab_jamun.jpg",
      caterer_id: 8,
      cuisine_id: 8,
    },

    //Korean Cuisine - Caterer 9

    {
      id: 41,
      name: "Bibimbap",
      description:
        "A mixed rice bowl with assorted vegetables, beef, and a fried egg",
      price: 13.99,
      image_url: "bibimbap.jpg",
      caterer_id: 9,
      cuisine_id: 9,
    },
    {
      id: 42,
      name: "Kimchi Jjigae",
      description: "Spicy stew made with aged kimchi, tofu, and pork",
      price: 12.5,
      image_url: "kimchi_jjigae.jpg",
      caterer_id: 9,
      cuisine_id: 9,
    },
    {
      id: 43,
      name: "Japchae",
      description: "Stir-fried glass noodles with vegetables and beef",
      price: 11.99,
      image_url: "japchae.jpg",
      caterer_id: 9,
      cuisine_id: 9,
    },
    {
      id: 44,
      name: "Korean Fried Chicken",
      description:
        "Crispy double-fried chicken coated in sweet and spicy sauce",
      price: 14.99,
      image_url: "korean_fried_chicken.jpg",
      caterer_id: 9,
      cuisine_id: 9,
    },
    {
      id: 45,
      name: "Tteokbokki",
      description: "Spicy rice cakes stir-fried with gochujang sauce",
      price: 9.99,
      image_url: "tteokbokki.jpg",
      caterer_id: 9,
      cuisine_id: 9,
    },

    //Mexican Cuisine - Caterer 10

    {
      id: 46,
      name: "Tacos al Pastor",
      description:
        "Corn tortillas filled with marinated pork, pineapple, and salsa",
      price: 11.99,
      image_url: "tacos_al_pastor.jpg",
      caterer_id: 10,
      cuisine_id: 10,
    },
    {
      id: 47,
      name: "Chiles Rellenos",
      description: "Poblano peppers stuffed with cheese, battered, and fried",
      price: 13.5,
      image_url: "chiles_rellenos.jpg",
      caterer_id: 10,
      cuisine_id: 10,
    },
    {
      id: 48,
      name: "Enchiladas Verdes",
      description:
        "Corn tortillas rolled with shredded chicken and topped with green sauce",
      price: 12.99,
      image_url: "enchiladas_verdes.jpg",
      caterer_id: 10,
      cuisine_id: 10,
    },
    {
      id: 49,
      name: "Tamales",
      description:
        "Corn dough filled with meat or cheese, wrapped in corn husks",
      price: 9.99,
      image_url: "tamales.jpg",
      caterer_id: 10,
      cuisine_id: 10,
    },
    {
      id: 50,
      name: "Churros con Chocolate",
      description:
        "Fried dough pastries coated in cinnamon sugar, served with chocolate sauce",
      price: 7.99,
      image_url: "churros.jpg",
      caterer_id: 10,
      cuisine_id: 10,
    },

    //British Cuisine - Caterer 11

    {
      id: 51,
      name: "Fish and Chips",
      description: "Crispy battered fish served with golden fries",
      price: 12.99,
      image_url: "fish_and_chips.jpg",
      caterer_id: 11,
      cuisine_id: 11,
    },
    {
      id: 52,
      name: "Shepherd's Pie",
      description:
        "Savory minced lamb and vegetables topped with mashed potatoes",
      price: 14.5,
      image_url: "shepherds_pie.jpg",
      caterer_id: 11,
      cuisine_id: 11,
    },
    {
      id: 53,
      name: "Full English Breakfast",
      description:
        "Classic breakfast with eggs, bacon, sausages, beans, and toast",
      price: 15.99,
      image_url: "full_english_breakfast.jpg",
      caterer_id: 11,
      cuisine_id: 11,
    },
    {
      id: 54,
      name: "Beef Wellington",
      description:
        "Tender beef fillet wrapped in puff pastry with mushroom duxelles",
      price: 22.99,
      image_url: "beef_wellington.jpg",
      caterer_id: 11,
      cuisine_id: 11,
    },
    {
      id: 55,
      name: "Sticky Toffee Pudding",
      description: "Rich date sponge cake served with toffee sauce",
      price: 8.99,
      image_url: "sticky_toffee_pudding.jpg",
      caterer_id: 11,
      cuisine_id: 11,
    },

    //Jamaican Cuisine - Caterer 12

    {
      id: 56,
      name: "Jerk Chicken",
      description:
        "Spicy grilled chicken marinated with Jamaican jerk seasoning",
      price: 14.99,
      image_url: "jerk_chicken.jpg",
      caterer_id: 12,
      cuisine_id: 12,
    },
    {
      id: 57,
      name: "Ackee and Saltfish",
      description:
        "Jamaica’s national dish made with ackee fruit and salted codfish",
      price: 13.5,
      image_url: "ackee_saltfish.jpg",
      caterer_id: 12,
      cuisine_id: 12,
    },
    {
      id: 58,
      name: "Curry Goat",
      description: "Slow-cooked goat meat in a rich and flavorful curry sauce",
      price: 16.99,
      image_url: "curry_goat.jpg",
      caterer_id: 12,
      cuisine_id: 12,
    },
    {
      id: 59,
      name: "Rice and Peas",
      description: "Traditional coconut-infused rice cooked with kidney beans",
      price: 10.99,
      image_url: "rice_and_peas.jpg",
      caterer_id: 12,
      cuisine_id: 12,
    },
    {
      id: 60,
      name: "Jamaican Rum Cake",
      description: "Moist and rich cake infused with rum and dried fruits",
      price: 9.5,
      image_url: "jamaican_rum_cake.jpg",
      caterer_id: 12,
      cuisine_id: 12,
    },
  ]);
}
