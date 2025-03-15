/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("about_me").del();
  await knex("about_me").insert([
    {
      caterer_id: 1,
      bio: "For fifteen years, the aromas of Greece have filled my kitchen, each dish a love letter to my homeland. The scent of oregano and lemon takes me back to sun-drenched afternoons in my village, where family feasts were the heart of our days. I believe food is more than sustenance; it's a bridge to our roots, a way to share the warmth of Greek hospitality. My passion lies in crafting authentic Mediterranean dishes that bring joy and a taste of home to your table.",
    },
    {
      caterer_id: 2,
      bio: "Egyptian cuisine is my soul's language, a vibrant tapestry of flavors woven through generations. The moment I start preparing Koshari or Shawarma, I'm transported to the bustling markets of Cairo, where every spice tells a story. Cooking for my community is a way to share the rich heritage of Egypt, to offer a taste of the warmth and generosity that defines our culture. It's a joy to see the smiles that my food brings, a connection to home for those far away.",
    },
    {
      caterer_id: 3,
      bio: "The simple joy of Panta Bhat on a hot day, or the rich, creamy delight of Chingri Malai Curry – these are the tastes of my childhood, the heart of Bangladesh on a plate. The fragrance of fermented rice or the sweet aroma of coconut milk simmering with prawns instantly transports me back to my grandmother's kitchen. Sharing these everyday flavors, the true taste of home, with my community is my way of keeping our traditions alive and bringing a piece of Bangladesh to your table.",
    },
    {
      caterer_id: 4,
      bio: "Italy's culinary heritage is my passion, each pasta and pizza crafted with love and tradition. The aroma of simmering tomatoes and fresh basil transports me to my nonna's kitchen, where every meal was a celebration of family. I find immense joy in sharing the authentic flavors of Italy, in creating dishes that bring comfort and a sense of home. For me, cooking is an art, a way to express the warmth and generosity of Italian culture.",
    },
    {
      caterer_id: 5,
      bio: "Thai cuisine is a symphony of flavors, a delicate balance of sweet, sour, salty, and spicy. My culinary journey began amidst the vibrant street markets of Bangkok, where every dish told a story. Cooking for my community is a way to share the rich tapestry of Thai culture, to offer a taste of the warmth and hospitality that defines our people. Each meal is a journey, a sensory experience that brings the heart of Thailand to your table.",
    },
    {
      caterer_id: 6,
      bio: "French pastry is my canvas, each dessert a masterpiece of flavor and artistry. The delicate scent of vanilla and caramelized sugar takes me back to the charming patisseries of Paris, where every creation was a work of passion. Sharing the elegance and sophistication of French desserts is more than baking; it's a way to bring a touch of joy and celebration to your life. I believe food is an expression of love, a way to create moments of pure delight.",
    },
    {
      caterer_id: 7,
      bio: "Pakistani cuisine is a legacy of rich flavors and aromatic spices, a culinary tradition I hold dear. The moment I start preparing Nihari or Seekh Kebabs, I'm transported to the bustling food streets of Lahore, where every dish was a feast for the senses. Cooking for my community is a way to share the warmth and generosity of Pakistani culture, to offer a taste of home to those who long for it. Each meal is a connection to our roots, a celebration of our heritage.",
    },
    {
      caterer_id: 8,
      bio: "Indian cuisine is a vibrant tapestry of spices and flavors, a culinary journey that began in my childhood kitchen. The aroma of simmering Butter Chicken and Rogan Josh takes me back to family gatherings, where every meal was a celebration of love and tradition. Sharing the authentic flavors of India is more than cooking; it's a way to bring the warmth and joy of our culture to your table. Each dish is a story, a connection to our heritage.",
    },
    {
      caterer_id: 9,
      bio: "Korean BBQ is a culinary adventure, a fusion of flavors and textures that delight the senses. The sizzling sound of Bibimbap and Tteokbokki takes me back to the lively streets of Seoul, where every meal was a communal experience. Cooking for my community is a way to share the vibrant spirit of Korean culture, to offer a taste of the warmth and hospitality that defines our people. Each meal is a celebration, a connection to our roots.",
    },
    {
      caterer_id: 10,
      bio: "Mexican street food is a fiesta of flavors, a celebration of tradition and passion. The vibrant colors and bold spices of tacos and enchiladas take me back to the bustling markets of my hometown, where every dish was a work of art. Sharing the authentic flavors of Mexico is more than cooking; it's a way to bring the joy and warmth of our culture to your table. Each meal is a fiesta, a celebration of our heritage.",
    },
    {
      caterer_id: 11,
      bio: "British cuisine is a comfort, a taste of home and tradition. The hearty flavors of fish and chips and shepherd’s pie take me back to cozy pub meals and family gatherings, where every dish was made with love. Sharing the classic flavors of Britain is more than cooking; it's a way to bring a sense of warmth and familiarity to your table. Each meal is a piece of our history, a connection to our roots.",
    },
    {
      caterer_id: 12,
      bio: "Jamaican cuisine is a vibrant blend of spices and flavors, a culinary journey that began on the sunny shores of my island. The smoky aroma of Jerk Chicken and the rich flavors of Curry Goat take me back to lively street festivals, where every dish was a celebration of life. Sharing the authentic flavors of Jamaica is more than cooking; it's a way to bring the warmth and joy of our culture to your table. Each meal is a taste of paradise, a connection to our heritage.",
    },
  ]);
}
