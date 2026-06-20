
// variables of the element needed to select
var recipe_container = document.getElementById("recipe_container");
var another_recipe_btn = document.getElementById("another_recipe_btn");
var ingredients_list = document.getElementById("ingredients_list");
var steps_list = document.getElementById("steps_list");
var tips_list = document.getElementById("tips_list");
var warningCard = document.getElementById("warningCard");





var recipes =  [ 
    //first recipe
     {
    id:1,
    img:"img/photo-1546069901-ba9599a7e63c.jpg",
    rate:4.5,
    reviews:156 ,
    pre_time: 20 ,
    cook_time:35 ,
    servings : 2,
    badge_difficulty:"Easy",
    badge_category:"Mediterranean",
    title_name:"Mediterranean Quinoa Bowl",
    description:"Healthy bowl with quinoa, vegetables, and tahini dressing",
    ingredents: [
        "1 cup quinoa",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red onion, sliced",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley",
        "Tahini dressing",
    ],
    instructions:[
        "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        " While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives",
        "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition:{
        calories:480,
        protein:18,
        carbohydrates:58,
        Fat:20,
        fiber:10,
        sodium:540,
    },
    tips:[
     "Rinse quinoa well to remove bitter coating",
     "Let quinoa cool before adding fresh ingredients",
     "Make extra tahini dressing - it keeps well in the fridge",
     "Add grilled chicken or chickpeas for extra protein",
],



},
//   2nd recipe
 {
    id:2,
    img:"img/shrimp.jpg",
    rate:4.8,
    reviews:356  ,
    pre_time: 10  ,
    cook_time:15 ,
    servings : 2,
    badge_difficulty:"Easy",
    badge_category:"Seafood",
    title_name:"Shrimp Scampi",
    description:"Garlicky shrimp in white wine butter sauce",
    ingredents: [
        "400g large shrimp, peeled",
        "300g linguine pasta",
        "6 cloves garlic, minced",
        "1/2 cup white wine",
        "4 tablespoons butter",
        "2 tablespoons olive oil",
        "Fresh parsley, chopped",
        "Lemon juice and zest",
        "Red pepper flakes",
    ],
    instructions:[
        "Cook linguine according to package directions. Reserve 1 cup pasta water.",
        "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
        "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
        "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
        "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
        "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition:{
        calories:520,
        protein:36,
        carbohydrates:54,
        Fat:18,
        fiber:3,
        sodium:620,
    },
    tips:[
     "Don't overcook shrimp - they cook very quickly",
     "Use good quality white wine for best flavor",
     "Toss pasta in sauce for maximum flavor absorption",
     "Add extra lemon for bright, fresh taste",
],
},
// 3rd recipe
{
    id:3,
    img:"img/french_onion_soup.jpg",
    rate:4.7,
    reviews:267 ,
    pre_time: 15 ,
    cook_time:60 ,
    servings : 4,
    badge_difficulty:"Intermediate",
    badge_category:"Mediterranean",
    title_name:"French Onion Soup",
    description:"Rich beef broth with caramelized onions and melted cheese",
    ingredents: [
        "4 large onions, thinly sliced",
        "4 tablespoons butter",
        "1 liter beef broth",
        "1/2 cup white wine",
        "2 bay leaves",
        "Fresh thyme",
        "Baguette slices",
        "200g Gruyère cheese, grated",
    ],
    instructions:[
        "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
        "Add white wine and deglaze the pot, scraping up brown bits.",
        "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
        "Meanwhile, toast baguette slices until golden.",
        "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
        "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition:{
        calories:380,
        protein:18,
        carbohydrates:36,
        Fat:18,
        fiber:4,
        sodium:980,
    },
    tips:[
     "Patience is key - don't rush the onion caramelization",
     "Use good quality beef broth for best flavor",
     "Gruyère can be substituted with Swiss cheese",
     "Watch carefully when broiling to avoid burning",
],
} ,
// 4th recipe
{
    id:4,
    img:"img/bbq_pulled_pork.jpg",
    rate:4.7,
    reviews:412 ,
    pre_time: 15  ,
    cook_time:240 ,
    servings : 4,
    badge_difficulty:"Easy",
    badge_category:"American",
    title_name:"BBQ Pulled Pork",
    description:"Slow-cooked tender pork in smoky barbecue sauce",
    ingredents: [
        "1kg pork shoulder",
        "1 cup BBQ sauce",
        "1/2 cup apple cider vinegar ",
        "2 tablespoons brown sugar",
        "1 tablespoon paprika",
        "1 tablespoon garlic powder",
        "Burger buns",
        "Coleslaw for serving",
    ],
    instructions:[
        "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
        "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
        "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
        "Remove pork and shred with two forks. Discard excess fat.",
        "Return shredded pork to slow cooker, mix with BBQ sauce.",
        "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition:{
        calories:620,
        protein:48,
        carbohydrates:52,
        Fat:22,
        fiber:3,
        sodium:1180,
    },
    tips:[
     "Use pork shoulder for best results - it stays moist",
     "Let pork rest before shredding for juicier meat",
     "Make your own BBQ sauce for better flavor",
     "Leftovers freeze well for up to 3 months",
],
},
// 5th recipe 
{
    id:5,
    img:"img/beef_tacos.jpg",
    rate:4.6,
    reviews:278  ,
    pre_time: 15 ,
    cook_time:20 ,
    servings : 4,
    badge_difficulty:"Easy",
    badge_category:"American",
    title_name:"Beef Tacos",
    description:"Flavorful Mexican tacos with seasoned ground beef",
    ingredents: [
        "500g ground beef",
        "8 taco shells",
        "1 onion, diced",
        "2 tablespoons taco seasoning",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley",
        "Tahini dressing",
    ],
    instructions:[
        "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        " While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives",
        "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition:{
        calories:480,
        protein:18,
        carbohydrates:58,
        Fat:20,
        fiber:10,
        sodium:540,
    },
    tips:[
     "Rinse quinoa well to remove bitter coating",
     "Let quinoa cool before adding fresh ingredients",
     "Make extra tahini dressing - it keeps well in the fridge",
     "Add grilled chicken or chickpeas for extra protein",
],
},
// 6th recipe
{
    id:6,
    img:"img/honey_garlic_salmon.jpg",
    rate:4.9,
    reviews:187 ,
    pre_time: 10 ,
    cook_time:15  ,
    servings : 2 ,
    badge_difficulty:"Easy",
    badge_category:"Seafood",
    title_name:"Honey Garlic Salmon",
    description:"Pan-seared salmon with a sweet and savory glaze",
    ingredents: [
        "2 salmon fillets (6oz each)",
        "3 tablespoons honey",
        "2 tablespoons soy sauce",
        "4 cloves garlic, minced",
        "1 tablespoon olive oil",
        "1 teaspoon fresh ginger, grated",
        "Sesame seeds for garnish",
        "Green onions, sliced",
    ],
    instructions:[
        "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
        "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
        "Heat olive oil in a large skillet over medium-high heat.",
        "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
        "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
        "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition:{
        calories:380,
        protein:35,
        carbohydrates:28,
        Fat:14,
        fiber:0,
        sodium:720,
    },
    tips:[
     "Don't overcook salmon - it should be slightly pink in the center",
     "Use wild-caught salmon for best flavor and nutrition",
     "Let the sauce caramelize slightly for deeper flavor",
     "Pair with steamed broccoli or asparagus for a complete meal",
],
},
// 7th recipe 
{
     id:7,
    img:"img/teriyaki_chicken_bowl.jpg",
    rate:4.7,
    reviews:367 ,
    pre_time: 15 ,
    cook_time:20  ,
    servings : 2 ,
    badge_difficulty:"Easy",
    badge_category:"Asian",
    title_name:"Teriyaki Chicken Bowl",
    description:"Sweet and savory chicken over rice with vegetables",
    ingredents: [
        "400g chicken thighs, sliced",
        "1/2 cup teriyaki sauce",
        "2 cups cooked rice",
        "1 broccoli head, florets",
        "1 carrot, julienned",
        "Sesame seeds",
        "Green onions, sliced",
        "1 tablespoon sesame oil",
    ],
    instructions:[
       "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
        "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
        "Meanwhile, steam broccoli and carrots until tender-crisp.",
        "Divide rice between bowls.",
        "Top with teriyaki chicken and steamed vegetables.",
        "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutrition:{
        calories:540,
        protein:42,
        carbohydrates:58,
        Fat:14,
        fiber:4,
        sodium:1240,
    },
    tips:[
     "Use chicken thighs for juicier meat",
     "Make homemade teriyaki sauce for better flavor control",
     "Add edamame for extra protein",
     "Meal prep by cooking rice and chicken ahead",
],  
},
// 8th recipe
{
     id:8,
    img:"img/lasagna_bolognese.jpg",
    rate:4.9,
    reviews:478  ,
    pre_time: 30 ,
    cook_time:90  ,
    servings : 4  ,
    badge_difficulty:"Intermediate",
    badge_category:"Italian",
    title_name:"Lasagna Bolognese",
    description:"Layered Italian pasta with rich meat sauce and béchamel",
    ingredents: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil",
    ],
    instructions:[
        "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets according to package directions. Drain and set aside.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
        "Top final layer with béchamel, mozzarella, and parmesan cheese.",
        "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    nutrition:{
        calories:680,
        protein:42,
        carbohydrates:58,
        Fat:28,
        fiber:6,
        sodium:920,
    },
    tips:[
     "Make bolognese sauce a day ahead for better flavor",
     "Don't skip the resting time after baking",
     "Use fresh pasta sheets for best texture",
     "Freeze leftovers in individual portions",
],
},
// 9th recipe
{
    id:9,
    img:"img/chicken_tikka_masala.jpg",
    rate:4.7,
    reviews:389  ,
    pre_time: 20 ,
    cook_time:30   ,
    servings : 4  ,
    badge_difficulty:"Intermediate",
    badge_category:"Asian",
    title_name:"Chicken Tikka Masala",
    description:"Rich and creamy Indian curry with tender chicken pieces",
    ingredents: [
        
        "600g chicken breast, cubed",
        "1 cup plain yogurt",
        "2 tablespoons tikka masala paste",
        "400ml coconut cream",
        "1 onion, diced",
        "4 cloves garlic, minced",
        "2 tablespoons ginger, grated",
        "400g canned tomatoes",
        "Fresh cilantro for garnish",
    ],
    instructions:[
        "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
        "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
        "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
        "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
        "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
        "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition:{
        calories:450,
        protein:38,
        carbohydrates:24,
        Fat:22,
        fiber:4,
        sodium:760,
    },
    tips:[
     "Marinate chicken overnight for deeper flavor",
     "Use full-fat coconut cream for richest sauce",
     "Adjust spice level by varying the tikka paste amount",
     "Serve with naan bread and basmati rice",
],
},
// 10th recipe
{
    id:10,
    img:"img/thai_green_curry.jpg",
    rate:4.7,
    reviews:312 ,
    pre_time: 15 ,
    cook_time:25  ,
    servings : 4  ,
    badge_difficulty:"Intermediate",
    badge_category:"Asian",
    title_name:"Thai Green Curry",
    description:"Vibrant and aromatic curry with vegetables and coconut milk",
    ingredents: [
        "2 tablespoons green curry paste",
        "400ml coconut milk",
        "300g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "100g green beans",
        "1 eggplant, cubed",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Fresh Thai basil leaves",
    ],
    instructions:[
        "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
        "Add half the coconut milk and stir to combine with the curry paste.",
        "Add sliced chicken and cook until no longer pink, about 5 minutes.",
        "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
        "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
        "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition:{
        calories:420,
        protein:26,
        carbohydrates:22,
        Fat:26,
        fiber:5,
        sodium:890,
    },
    tips:[
     "Adjust spice level by using more or less curry paste",
     "Add vegetables in stages based on cooking time needed",
     "Fresh Thai basil is essential for authentic flavor",
     "Use full-fat coconut milk for richest, creamiest sauce",
],
},
// 11th recipe
{
     id:11,
    img:"img/caprese_sandwich.jpg",
    rate:4.5,
    reviews:189 ,
    pre_time: 10 ,
    cook_time:5  ,
    servings : 2 ,
    badge_difficulty:"Easy",
    badge_category:"Italian",
    title_name:"Caprese Sandwich",
    description:"Fresh Italian sandwich with mozzarella, tomato, and basil",
    ingredents: [
        "1 ciabatta bread",
        "200g fresh mozzarella, sliced",
        "2 large tomatoes, sliced",
        "Fresh basil leaves",
        "3 tablespoons pesto",
        "2 tablespoons balsamic glaze",
        "Olive oil",
        "Salt and pepper",
    ],
    instructions:[
        "Slice ciabatta bread in half horizontally.",
        "Toast bread lightly until just crispy.",
        "Spread pesto on both sides of bread.",
        "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
        "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
        "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition:{
        calories:480,
        protein:22,
        carbohydrates:48,
        Fat:22,
        fiber:3,
        sodium:680,
    },
    tips:[
     "Use ripe, in-season tomatoes for best flavor",
     "Buffalo mozzarella is traditional but harder to slice",
     "Toast bread lightly - not too crispy",
     "Add prosciutto or salami for a heartier sandwich",
],
},
// 12th recipe 
{
    id:12,
    img:"img/pad_thai.jpg",
    rate:4.8,
    reviews:445 ,
    pre_time: 20  ,
    cook_time:15  ,
    servings : 2 ,
    badge_difficulty:"Intermediate",
    badge_category:"Asian",
    title_name:"Pad Thai",
    description:"Popular Thai stir-fried noodles with shrimp and peanuts",
    ingredents: [
        "200g rice noodles",
        "200g shrimp, peeled",
        "2 eggs",
        "3 tablespoons tamarind paste",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Bean sprouts",
        "Crushed peanuts",
        "Lime wedges and cilantro",
    ],
    instructions:[
        "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Heat wok over high heat. Scramble eggs and set aside.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",
        "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutrition:{
        calories:540,
        protein:32,
        carbohydrates:62,
        Fat:16,
        fiber:4,
        sodium:1120,
    },
    tips:[
     "Don't oversoak noodles or they'll be mushy",
     "Cook on high heat for authentic wok flavor",
     "Balance sweet, sour, and salty flavors",
     "Prepare all ingredients before starting to cook",
],
},
// 13th recipe
{
    id:13,
    img:"img/vegetable_curry.jpg",
    rate:4.6,
    reviews:289 ,
    pre_time: 20  ,
    cook_time:30  ,
    servings : 4 ,
    badge_difficulty:"Easy",
    badge_category:"Asian",
    title_name:"Vegetable Curry",
    description:"Hearty vegetarian curry with coconut milk",
    ingredents: [
        "2 potatoes, cubed",
        "1 cauliflower, florets",
        "2 carrots, sliced",
        "1 can chickpeas",
        "400ml coconut milk",
        "3 tablespoons curry powder",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach",
    ],
    instructions:[
        "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted.",
        "Serve hot over basmati rice or with naan bread.",
        
    ],
    nutrition:{
        calories:380,
        protein:14,
        carbohydrates:48,
        Fat:16,
        fiber:12,
        sodium:480,
    },
    tips:[
     "Add vegetables in order of cooking time needed",
     "Adjust curry powder amount to taste",
     "Use full-fat coconut milk for creamier curry",
     "Add protein like tofu or paneer if desired",
],
},
];


// var random_recipe_num = Math.floor((Math.random()*10)+3);
// console.log(random_recipe_num);

// console.log(recipes[random_recipe_num].pre_time);

 var random_recipe_num;
//display the whole card of random recipe every time the btn clicked
function display_Random_Recipe(){
     random_recipe_num = Math.floor((Math.random()*10)+3);
    recipe_container.innerHTML= ` <section class="container-fluid p-4 " id="recipe_container">
      <div class="row bg-white rounded-8  overflow-hidden ">
  
        <!-- left column : image of the food + the 2 tags 1: rating tag , 2: stats bar -->
        <div class=" col-12 col-lg-5  position-relative ">
          <!--  image of the food  -->
          <img class=" img-fluid recipe_img " src=${recipes[random_recipe_num].img} alt="photo not work">
  
          <!-- rating tag -->
          <div class=" d-inline-block  bg-white  position-absolute card-position px-3 py-2 rounded-full ">
            <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            <span class="fw-semibold text-black tag_rating-num" id="rate_num"> ${recipes[random_recipe_num].rate} </span>
            <span class=" fw-normal text-gray tag_rating_reviews" id="rate_reviews">(${recipes[random_recipe_num].reviews} reviews)</span>
          </div>
  
          <!-- status tag -->
          <div
            class="d-flex align-items-start justify-content-around gap-3  position-absolute status-position  bg-white status_padding rounded-6 ">
            <!-- prep time -->
            <div class=" d-flex  gap-1 flex-column align-items-center">
              <i class="fa-solid fa-clock" style="color: #ff6900; font-size: 20px;"></i>
              <div class="status-title text-gray fw-normal text-center">Prep Time</div>
              <div class="status-num fw-bold text-black text-center" id="prep_time">${recipes[random_recipe_num].pre_time} min</div>
            </div>
            <!--cook time  -->
            <div class=" d-flex gap-1  flex-column align-items-center">
              <i class="fa-solid fa-fire-burner" style="color: #fb2c36; font-size: 22.5px;"></i>
              <div class="status-title text-gray fw-normal text-center">Cook Time</div>
              <div class="status-num fw-bold text-black text-center" id="cook_time">${recipes[random_recipe_num].cook_time} min</div>
            </div>
            <!-- serving people -->
            <div class=" d-flex gap-1  flex-column align-items-center ">
              <i class="fa-solid fa-users" style="color: #2b7fff; font-size: 22.5px;"></i>
              <div class="status-title text-gray fw-normal text-center">Servings</div>
              <div class="status-num fw-bold text-black text-center" id="servings_people">${recipes[random_recipe_num].servings} people</div>
            </div>
          </div>
        </div>
  
        <!-- right column : Recipe Details Panel   -->
        <div class=" recipe-panel col-12 col-lg-7 bg-white">
  
          <!-- 2. meta section (Title + Description + Actions)   -->
          <div class="recipe-panel_meta">
  
            <!-- saved button + shared button -->
            <div class="recipe-panel_actions">
              <button class="action-btn btn-save " type="button"><i class="fa-solid fa-bookmark"
                  style="color: #f54a00;"></i></button>
              <button class="action-btn btn-share" type="button"><i class="fa-solid fa-share-nodes"
                  style="color: #f54a00;"></i></button>
            </div>
  
            <div class="recipe-panel_details">
              <!-- badges about the food recipes -->
              <div class="recipe-panel_badges">
                <span class="recipe-panel_badge  badge-difficulty fw-semibold rounded-full "
                  id="badge-difficulty">${recipes[random_recipe_num].badge_difficulty} </span>
                <span class="recipe-panel_badge badge-category fw-semibold rounded-full"
                  id="badge-category">${recipes[random_recipe_num].badge_category} </span>
              </div>
              <!-- title + description -->
              <div class="recipe-panel_texts">
                <h3 class="recipe-panel_title fw-bold" id="recipe_title">${recipes[random_recipe_num].title_name}</h3>
                <p class="recipe-panel_description fw-normal" id="recipe_description">${recipes[random_recipe_num].description} </p>
              </div>
            </div>
  
          </div>
  
  
          <!-- 3-warning card : that appear if the meal or the recipe take more than 45 mins -->
          <div class="d-flex justify-content-center" id="warningCard">
          ${preparationTime()}
          </div>
  
  
          <!-- tabbable panes that have 4 tabs : 1- Ingredients , 2-Instructions , 3-Nutrition , 4-Chef's Tips -->
          <ul class=" nav nav-tabs" id="myTab" role="tablist">
  
            <!-- 1- Ingredients  tab -->
            <li class=" recipe_tab-item nav-item" role="presentation">
              <button class=" tab-btn fw-semibold tab-btn-ingredients nav-link active" id="ingredients-tab-btn"
                data-bs-toggle="tab" data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                aria-controls="ingredients-tab-pane" aria-selected="true"> <i
                  class=" tab-icon  fa-solid fa-list-check"></i>Ingredients</button>
            </li>
  
            <!-- 2-Instructions tab  -->
            <li class=" recipe_tab-item nav-item" role="presentation">
              <button class=" tab-btn fw-semibold tab-btn-instructions nav-link" id="instructions-tab-btn"
                data-bs-toggle="tab" data-bs-target="#instructions-tab-pane" type="button" role="tab"
                aria-controls="instructions-tab-pane" aria-selected="false"> <i
                  class="tab-icon  fa-solid fa-book-open"></i>Instructions</button>
            </li>
  
            <!-- 3-Nutrition tab -->
            <li class="recipe_tab-item nav-item" role="presentation">
              <button class=" tab-btn fw-semibold tab-btn-nutrition nav-link" id="nutrition-tab-btn" data-bs-toggle="tab"
                data-bs-target="#nutrition-tab-pane" type="button" role="tab" aria-controls="nutrition-tab-pane"
                aria-selected="false"> <i class=" tab-icon fa-solid fa-chart-pie"></i>Nutrition</button>
            </li>
  
            <!--  4-Chef's Tips tab -->
            <li class="recipe_tab-item nav-item" role="presentation">
              <button class=" tab-btn fw-semibold tab-btn-tips nav-link" id="tips-tab-btn" data-bs-toggle="tab"
                data-bs-target="#tips-tab-pane" type="button" role="tab" aria-controls="tips-tab-pane"
                aria-selected="false"><i class="tab-icon fa-solid fa-lightbulb"></i>Chef's Tips</button>
            </li>
  
          </ul>
          <hr>
  
  
          <div class="recipe-panel_tab-content tab-content" id="recipe-tab-content">
  
            <!-- 1- Ingredients content panel  -->
            <div class=" tab-pane-ingredients tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
              aria-labelledby="ingredients-tab-btn" tabindex="0">
              <ol class="recipe-panel_ingredients-list list-unstyled " id="ingredients_list">
              ${handle_ingrediants_list()}
             
              </ol>
            </div>
  
            <!-- 2-Instructions content panel  -->
            <div class=" tab-pane-instructions tab-pane fade" id="instructions-tab-pane" role="tabpanel"
              aria-labelledby="instructions-tab-btn" tabindex="0">
              <ol class="recipe-panel_steps-list list-unstyled" id="steps_list">
             ${handle_instruction_list()}
  
  
  
              </ol>
            </div>
  
            <!-- 3-Nutrition content panel -->
            <div class="tab-pane-nutrition tab-pane fade" id="nutrition-tab-pane" role="tabpanel"
              aria-labelledby="nutrition-tab-btn" tabindex="0">
              <div class="recipe-panel_nutrition container">
                <!-- 1st row -->
                <div class="row">
                  <!-- 1st card  -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 me-lg-5 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex  ">
                      <span
                        class="nutrition-icon calories-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-fire" style="color: #f54a00;"></i></span>
                      <p class="nutrition-label fw-medium pt-2">Calories</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="calories_value"> ${recipes[random_recipe_num].nutrition.calories} kcal</div>
                  </div>
  
                  <!--  2nd card -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex">
                      <span
                        class="nutrition-icon portein-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-dumbbell" style="color: #155dfc;"></i></span>
                      <p class="nutrition-label fw-medium pt-2">Protein</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="protein_value">${recipes[random_recipe_num].nutrition.protein} g</div>
                  </div>
                </div>
  
                <!-- 2nd row -->
                <div class="row">
                  <!-- 3rd card -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 me-lg-5 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex">
                      <span
                        class="nutrition-icon carbohydrates-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-wheat-awn" style="color: #d08700;"></i></span>
                      <p class="nutrition-label fw-medium  pt-2">Carbohydrates</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="carbohydrates_value"> ${recipes[random_recipe_num].nutrition.carbohydrates} g</div>
                  </div>
  
                  <!-- 4th card -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex">
                      <span class="nutrition-icon fat-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-droplet" style="color: #e7000b;"></i></span>
                      <p class="nutrition-label fw-medium pt-2">Fat</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="fat_value">${recipes[random_recipe_num].nutrition.Fat} g</div>
                  </div>
  
                </div>
  
                <!-- 3rd row -->
                <div class="row">
                  <!-- 5th card -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 me-lg-5 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex">
                      <span
                        class="nutrition-icon fiber-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-seedling" style="color: #00a63e;"></i></span>
                      <p class="nutrition-label fw-medium pt-2">Fiber</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="fiber_value"> ${ recipes[random_recipe_num].nutrition.fiber} g</div>
                  </div>
  
                  <!-- 6th card -->
                  <div class=" nutrition-card rounded-5 col-12 col-lg-6 mb-3">
                    <!-- 1st child : icon + name  -->
                    <div class="nutrition-meta d-flex">
                      <span
                        class="nutrition-icon sodim-icon d-flex justify-content-center align-items-center rounded-4"><i
                          class="fa-solid fa-cube" style="color: #e60076;"></i></span>
                      <p class="nutrition-label fw-medium pt-2">Sodium</p>
                    </div>
                    <!-- 2nd child : number -->
                    <div class="nutrition-value fw-bold" id="sodium_value">${recipes[random_recipe_num].nutrition.sodium} mg</div>
                  </div>
  
                </div>
  
              </div>
            </div>
  
            <!--  4-Chef's Tips content panel -->
            <div class="tab-pane-tips tab-pane fade" id="tips-tab-pane" role="tabpanel" aria-labelledby="tips-tab-btn"
              tabindex="0">
              <div class="recipe-panel_tips-list " id="tips_list">
              ${handle_tips_list()}
  
  
              </div>
            </div>
          </div>
          <div class="recipe-panel_footer">
            <hr>
            <button type="button" id="another_recipe_btn" onclick="display_Random_Recipe()">
              <i class="fa-solid fa-arrows-rotate"></i>
              Try Another Recipe
            </button>
          </div>
  
        </div>
      </div>
    </section>`;
    
}

// console.log(recipes[random_recipe_num].ingredents.length);



function handle_ingrediants_list(){
    var cartona='';
    for (let i = 0; i < recipes[random_recipe_num].ingredents.length; i++) {
      cartona += `<li class="ingredient-item d-flex">
                  <span class="ingredient-number text-white fw-bold rounded-full d-flex justify-content-center align-content-center flex-wrap">${i+1}</span>
                  <p class="ingredient-text">${recipes[random_recipe_num].ingredents[i]}</p>
                </li>`   
    } return  ingredients_list.innerHTML = cartona;
    
}

function handle_instruction_list() {
    var cartona='';
    for (let i = 0; i < recipes[random_recipe_num].instructions.length; i++) {
      cartona+= `<li class="step-item d-flex">
                       <span class="step-number text-white fw-bold  d-flex align-items-center justify-content-center">${i+1}</span>
                      <p class="step-text">${recipes[random_recipe_num].instructions[i]}</p>
                    </li>`
        
    } return steps_list.innerHTML = cartona;
}

function handle_tips_list(){
   var cartona ='';
   for (let i = 0; i < recipes[random_recipe_num].tips.length; i++) {
    cartona+=`<div class="tip-item p-3 d-flex  align-items-start rounded-5 mb-3 ">
          <i class="tip-icon fa-solid fa-circle-check " style="color: #e17100;"></i>
          <p class="tip-text fw-normal ">
            ${recipes[random_recipe_num].tips[i]}
          </p>
        </div>`
      
   } return tips_list.innerHTML =cartona;
}


function preparationTime() {
  if (recipes[random_recipe_num].pre_time + recipes[random_recipe_num].cook_time > 45) {
   return warningCard.innerHTML = `
   <div class=" recipe-panel_warning border-start border-danger alert-danger d-inline-block rounded-4 p-3 w-100 ">
              <div class="warning-card d-flex align-items-center ">
                <i class=" warning-icon fa-solid fa-triangle-exclamation"
                  style="color:#fb2c36; font-size: 20px; margin-right: 0.75rem;"></i>
                <div class="warning-body">
                  <p class="warning-title fw-semibold ">Extended Preparation Time</p>
                  <p class="warning-desc fw-normal">This recipe requires more than 45 minutes to prepare. Plan
                    accordingly!</p>
                </div>
              </div>
            </div>
    `
  }else{
    return ""
  }
 
}