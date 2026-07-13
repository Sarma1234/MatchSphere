import "./CategoryStrip.css";

const categories = [
  "Travel Partner",
  "Study Buddy",
  "Startup Co-founder",
  "Flatmate",
  "Gym Partner",
  "Hackathon Team",
  "Sports Buddy",
  "Photography",
  "+10 More",
];

function CategoryStrip() {
  return (
    <section className="category-strip">

      <p className="category-title">
        Explore Match Categories
      </p>

      <div className="category-list">

        {categories.map((category) => (
          <div
            className="category-chip"
            key={category}
          >
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategoryStrip;