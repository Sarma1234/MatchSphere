const { faker } = require("@faker-js/faker");
const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Guwahati",
    "Jaipur",
    "Lucknow",
    "Noida",
    "Ahmedabad",
    "Indore",
    "Patna",
    "Bhopal",
    "Kochi"
];

const states = [
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Telangana",
    "Tamil Nadu",
    "West Bengal",
    "Assam",
    "Rajasthan",
    "Uttar Pradesh",
    "Gujarat",
    "Madhya Pradesh",
    "Bihar",
    "Kerala"
];

const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Java",
    "Python",
    "C++",
    "Flutter",
    "AWS",
    "Docker",
    "Redis",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "SQL",
    "Machine Learning",
    "Figma",
    "UI/UX"
];

const interests = [
    "Coding",
    "Travel",
    "Photography",
    "Reading",
    "Music",
    "Gaming",
    "Movies",
    "Fitness",
    "Cooking",
    "Football",
    "Cricket",
    "AI",
    "Startups",
    "Cycling",
    "Hiking",
    "Open Source"
];

const purposes = [
    "Project Partner",
    "Study Partner",
    "Travel Partner",
    "Networking",
    "Startup",
    "Workout Buddy",
    "Gaming Buddy",
    "Event Buddy"
];

const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Accenture",
    "Wipro",
    "IBM",
    "Flipkart",
    "Zoho"
];
const randomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];

};
const generateUser = () => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const fullName = `${firstName} ${lastName}`;

    const username =
        `${firstName}${lastName}${faker.number.int({ min: 100, max: 999 })}`
            .toLowerCase();

    const city = randomItem(cities);

    return {

        fullName,

        username,

        email: faker.internet.email({
            firstName,
            lastName,
        }).toLowerCase(),

        password: "12345678",

        bio: faker.person.bio(),

        gender: randomItem([
            "Male",
            "Female",
            "Other"
        ]),

        occupation: {

            title: faker.person.jobTitle(),

            company: randomItem(companies)

        },

        location: {

            city,

            state: randomItem(states),

            country: "India"

        },

        activePurpose: randomItem(purposes),

        interests: [
            randomItem(interests),
            randomItem(interests),
            randomItem(interests)
        ],

        skills: [

            {

                name: randomItem(skills),

                level: randomItem([
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Expert"
                ])

            },

            {

                name: randomItem(skills),

                level: randomItem([
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Expert"
                ])

            }

        ],

        profileCompletion: faker.number.int({
            min: 40,
            max: 100
        }),

        isVerified: faker.datatype.boolean(),

        isOnline: faker.datatype.boolean()

    };

};
const users = [];

for (let i = 0; i < 100; i++) {
    users.push(generateUser());
}
module.exports = users;