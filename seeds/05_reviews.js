/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("reviews").del();
  await knex("reviews").insert([
    {
      caterer_id: 1,
      meal_seeker_id: 15,
      rating: 5,
      review:
        "This Moussaka was absolutely incredible! It reminded me of my grandmother's cooking back in Greece. The layers were perfectly balanced, and the flavors were so authentic. I felt like I was home again.",
    },
    {
      caterer_id: 2,
      meal_seeker_id: 3,
      rating: 4,
      review:
        "The Koshari was very good, though a bit different from what I'm used to. It was still delicious and brought back memories of family gatherings. I'd definitely order it again!",
    },
    {
      caterer_id: 3,
      meal_seeker_id: 8,
      rating: 5,
      review:
        "This Biryani was just like my mom used to make! The spices were spot on, and the meat was so tender. It felt like I was sitting in my childhood home. I'm so happy to have found you Rahim!",
    },
    {
      caterer_id: 4,
      meal_seeker_id: 12,
      rating: 4,
      review:
        "The lasagna was very tasty! It wasn't exactly like my nonna's, but it was a close second. The pasta was cooked perfectly, and the sauce was rich and flavorful. It brought a sense of comfort.",
    },
    {
      caterer_id: 5,
      meal_seeker_id: 18,
      rating: 3,
      review:
        "The Pad Thai was decent, but it could have used a bit more flavor. It was a bit bland for my taste, and I missed the distinct aroma of street food from Thailand. I was expecting more of a home-cooked taste.",
    },
    {
      caterer_id: 6,
      meal_seeker_id: 6,
      rating: 5,
      review:
        "The Coq au Vin was exquisite! It was just like the dishes I had in small French villages. The chicken was so tender, and the sauce was rich and deeply flavorful. I felt like I was dining in a Parisian home.",
    },
    {
      caterer_id: 7,
      meal_seeker_id: 1,
      rating: 4,
      review:
        "The Nihari was very good. It had the right level of spice, and the meat was very tender. It reminded me of the comfort food my family makes. I'm glad I found a place that can replicate those flavors.",
    },
    {
      caterer_id: 8,
      meal_seeker_id: 10,
      rating: 5,
      review:
        "The Butter Chicken was heavenly! The sauce was creamy and flavorful, and the chicken was perfectly cooked. It was just like the homemade dishes I grew up with. This caterer truly knows how to cook authentic Indian food.",
    },
    {
      caterer_id: 9,
      meal_seeker_id: 19,
      rating: 5,
      review:
        "The Bibimbap was fantastic! It was so fresh and flavorful, and all the ingredients complemented each other perfectly. It was a taste of home. I will definitly order again. ",
    },
    {
      caterer_id: 10,
      meal_seeker_id: 5,
      rating: 4,
      review:
        "The Tacos al Pastor were delicious! The pork was well-seasoned, and the salsa was very flavorful. It was a nice taste of Mexico, though I would have liked a bit more spice. Still, it was a great home-style meal.",
    },
    {
      caterer_id: 11,
      meal_seeker_id: 11,
      rating: 3,
      review:
        "The Fish and Chips were okay, but they weren't as good as I had hoped. The fish was a bit greasy, and the chips were a bit soggy. It didn't taste like the hearty, home-cooked meal I was expecting.",
    },
    {
      caterer_id: 12,
      meal_seeker_id: 20,
      rating: 5,
      review:
        "The Jerk Chicken was amazing! It was so spicy and flavorful, and the chicken was perfectly cooked. It was just like the home-cooked meals I remember from Jamaica. It made me feel like I was back on the island.",
    },
    {
      caterer_id: 1,
      meal_seeker_id: 7,
      rating: 5,
      review:
        "The Spanakopita was perfect! Crispy phyllo dough and the right amount of spinach and feta. It tasted just like my yiayia's, and brought back memories of Sunday dinners. Maria is a godsend!!",
    },
    {
      caterer_id: 2,
      meal_seeker_id: 14,
      rating: 4,
      review:
        "The Foul Medames was very authentic. The flavors were rich and comforting, just like my mother used to make. I'd recommend this to anyone looking for a taste of home.",
    },
    {
      caterer_id: 3,
      meal_seeker_id: 2,
      rating: 5,
      review:
        "The Chingri Malai Curry was simply divine. The prawns were cooked to perfection, and the coconut curry was creamy and flavorful. It felt like a warm hug from home.",
    },
    {
      caterer_id: 4,
      meal_seeker_id: 16,
      rating: 4,
      review:
        "The Pasta Carbonara was good, though a bit different from what I'm used to. It was still delicious and brought back memories of family dinners. I'd order it again!",
    },
    {
      caterer_id: 5,
      meal_seeker_id: 9,
      rating: 3,
      review:
        "The Green Curry was alright, but it could have been spicier. It didn't quite capture the authentic taste of Thai street food. I was hoping for a more home-cooked flavor.",
    },
    {
      caterer_id: 6,
      meal_seeker_id: 4,
      rating: 5,
      review:
        "The Soupe à l'Oignon was exceptional. It tasted just like the soup I had in a small bistro in Paris. The rich, caramelized onions and the perfectly melted cheese were a delight. I felt at home.",
    },
    {
      caterer_id: 7,
      meal_seeker_id: 17,
      rating: 4,
      review:
        "The Chicken Karahi was very flavorful. The spices were well-balanced, and the chicken was tender. It reminded me of family gatherings back home. I'm impressed with the authenticity.",
    },
    {
      caterer_id: 8,
      meal_seeker_id: 13,
      rating: 5,
      review:
        "The Palak Paneer was delicious! The spinach gravy was creamy and flavorful, and the paneer was soft and fresh. It tasted just like the homemade dishes I grew up with. This caterer is a gem.",
    },
  ]);
}
