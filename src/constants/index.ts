export const USER_PROGRAMS = [
  {
    id: 1,
    first_name: "Omar",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
    fitness_goal: "Endurance Training",
    height: "6'1\"",
    weight: "180 lbs",
    age: 31,
    workout_days: 5,
    injuries: "None",
    fitness_level: "Advanced",
    equipment_access: "Outdoor and limited gym equipment",
    dietary_restrictions: "Gluten-free",
    workout_plan: {
      title: "Long-Distance Endurance Plan",
      weekly_schedule: [
        { day: "Monday", focus: "Steady-State Running", duration: "60 min" },
        { day: "Tuesday", focus: "Hill Sprints", duration: "30 min" },
        { day: "Thursday", focus: "Interval Training", duration: "45 min" },
        { day: "Saturday", focus: "Long Run", duration: "90 min" },
        { day: "Sunday", focus: "Active Recovery Walk", duration: "40 min" },
      ],
      description:
        "Designed for runners training for long-distance races. The program gradually increases volume and intensity to enhance cardiovascular capacity, stamina, and muscular endurance.",
    },
    diet_plan: {
      title: "High-Carb Endurance Diet (Gluten-Free)",
      daily_calories: "2,400 calories",
      macros: { protein: "20%", carbs: "60%", fats: "20%" },
      meal_examples: [
        { meal: "Breakfast", example: "Gluten-free oats with banana and honey" },
        { meal: "Lunch", example: "Grilled turkey with sweet potatoes and spinach" },
        { meal: "Dinner", example: "Rice noodles with tofu and mixed veggies" },
        { meal: "Snacks", example: "Rice cakes with peanut butter, fruit smoothies" },
      ],
      description:
        "A high-carb plan to fuel long training sessions, with gluten-free ingredients to suit sensitivity. Meals are focused on digestibility and sustained energy.",
    },
  },
  {
    id: 2,
    first_name: "Layla",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
    fitness_goal: "Postpartum Recovery",
    height: "5'5\"",
    weight: "150 lbs",
    age: 29,
    workout_days: 3,
    injuries: "None",
    fitness_level: "Beginner",
    equipment_access: "Home only",
    dietary_restrictions: "None",
    workout_plan: {
      title: "Postnatal Recovery & Core Strength",
      weekly_schedule: [
        { day: "Monday", focus: "Gentle Core & Pelvic Floor", duration: "25 min" },
        { day: "Wednesday", focus: "Low Impact Full Body", duration: "30 min" },
        { day: "Friday", focus: "Stretching & Mobility", duration: "20 min" },
      ],
      description:
        "Safe and progressive program focused on rebuilding core strength and overall mobility post-pregnancy. Emphasis on breathing, posture, and body awareness.",
    },
    diet_plan: {
      title: "Whole Food Postnatal Nutrition",
      daily_calories: "2,000 calories",
      macros: { protein: "25%", carbs: "45%", fats: "30%" },
      meal_examples: [
        { meal: "Breakfast", example: "Scrambled eggs with spinach and avocado" },
        { meal: "Lunch", example: "Chicken quinoa bowl with roasted vegetables" },
        { meal: "Dinner", example: "Grilled fish with mashed potatoes and green beans" },
        { meal: "Snacks", example: "Greek yogurt, nuts, fruit slices" },
      ],
      description:
        "A nutrient-dense plan designed to support recovery and energy levels post-birth. Includes balanced meals to aid healing and promote breastfeeding nutrition.",
    },
  },
  {
    id: 3,
    first_name: "Jin",
    profilePic: "https://randomuser.me/api/portraits/men/35.jpg",
    fitness_goal: "Flexibility & Mobility",
    height: "5'9\"",
    weight: "160 lbs",
    age: 39,
    workout_days: 4,
    injuries: "Shoulder stiffness",
    fitness_level: "Intermediate",
    equipment_access: "Yoga mat and resistance bands",
    dietary_restrictions: "Pescatarian",
    workout_plan: {
      title: "Mobility Flow & Flexibility Routine",
      weekly_schedule: [
        { day: "Tuesday", focus: "Upper Body Mobility", duration: "30 min" },
        { day: "Thursday", focus: "Lower Body Flexibility", duration: "30 min" },
        { day: "Saturday", focus: "Full Body Yoga Flow", duration: "45 min" },
        { day: "Sunday", focus: "Foam Rolling & Breathwork", duration: "20 min" },
      ],
      description:
        "Focuses on improving range of motion, reducing tension, and enhancing muscle recovery. Ideal for desk workers or those with joint stiffness, especially around the shoulders.",
    },
    diet_plan: {
      title: "Pescatarian Anti-Inflammatory Plan",
      daily_calories: "2,100 calories",
      macros: { protein: "30%", carbs: "40%", fats: "30%" },
      meal_examples: [
        { meal: "Breakfast", example: "Chia pudding with coconut milk and berries" },
        { meal: "Lunch", example: "Tuna salad with mixed greens and olive oil" },
        { meal: "Dinner", example: "Grilled salmon with couscous and steamed broccoli" },
        { meal: "Snacks", example: "Hard-boiled egg, trail mix, herbal tea" },
      ],
      description:
        "Supports joint health and flexibility through anti-inflammatory ingredients. Emphasizes omega-3 rich fish and plant-based whole foods.",
    },
  },
];
