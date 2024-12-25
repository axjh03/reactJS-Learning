const SAMOSA_DESCRIPTION = "A crispy and spicy deep-fried snack filled with potatoes and peas.";
const MOMO_DESCRIPTION = "Steamed dumplings filled with meat or vegetables, served with spicy sauce.";
const THALI_DESCRIPTION = "A traditional Nepalese meal served with rice, lentils, vegetables, and curry.";
const CHOWMEIN_DESCRIPTION = "Stir-fried noodles with vegetables and chicken, seasoned with soy sauce.";
const TARKARI_DESCRIPTION = "A flavorful Nepalese curry made with seasonal vegetables.";
const SELROTI_DESCRIPTION = "A traditional Nepalese rice doughnut, deep-fried and sweet.";
const CHATAMARI_DESCRIPTION = "A rice flour crepe topped with minced meat, vegetables, and egg.";
const DAL_BHAT_DESCRIPTION = "A staple Nepalese dish consisting of lentil soup, rice, and assorted sides.";
const GUNDRUK_DESCRIPTION = "A fermented leafy green vegetable dish unique to Nepalese cuisine.";
const ALU_TAMA_DESCRIPTION = "A tangy curry made with potatoes, bamboo shoots, and black-eyed peas.";

const MENU = {
  samosa: {
    name: "Samosa",
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg',
    description: SAMOSA_DESCRIPTION,
    price: 25, // Npr
  },
  momo: {
    name: "Momo",
    description: MOMO_DESCRIPTION,
    image: 'https://junifoods.com/wp-content/uploads/2023/03/Chicken-Momo-Restaurant-Style-Kukhura-ko-Momo-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-2-500x500.jpg',
    price: 150, // Npr
  },
  thali: {
    name: "Nepalese Thali",
    image: 'https://4.bp.blogspot.com/-V5d_g6VgBjo/VBeDbPIe97I/AAAAAAAARfY/zCfxHIV1c8g/s1600/Nepal-Thali-Labeled.jpg',
    description: THALI_DESCRIPTION,
    price: 250, // Npr
  },
  chowmein: {
    name: "Chowmein",
    image: 'https://jehancancook.com/wp-content/uploads/2010/03/Chicken-Chowmein-1-5-1440x1858.jpg',
    description: CHOWMEIN_DESCRIPTION,
    price: 120, // Npr
  },
  tarkari: {
    name: "Vegetable Tarkari",
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.jpg',
    description: TARKARI_DESCRIPTION,
    price: 80, // Npr
  },

  dalBhat: {
    name: "Dal Bhat",
    image: 'https://www.nehascookbook.com/wp-content/uploads/2020/11/Lasuni-dal-bhaat-WS.jpg',
    description: DAL_BHAT_DESCRIPTION,
    price: 180, // Npr
  },
  gundruk: {
    name: "Gundruk",
    image :'https://junifoods.com/wp-content/uploads/2024/02/Gundruk-ko-jhol-1.jpg',
    description: GUNDRUK_DESCRIPTION,
    price: 100, // Npr
  },
  aluTama: {
    name: "Alu Tama",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwVopi_C3m9dYOrgNglJZ_fijV8okIT2BmA&s',
    description: ALU_TAMA_DESCRIPTION,
    price: 120, // Npr
  },
};

export default MENU;
