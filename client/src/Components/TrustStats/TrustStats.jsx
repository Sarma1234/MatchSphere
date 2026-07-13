import "./TrustStats.css";

const stats = [
  {
    number: "16",
    title: "Match Categories",
  },
  {
    number: "2-Layer",
    title: "Purpose + Compatibility",
  },
  {
    number: "Realtime",
    title: "Chat & Notifications",
  },
];

function TrustStats() {
  return (
    <section className="trust">

      {stats.map((item) => (
        <div className="trust-card" key={item.title}>

          <h2>{item.number}</h2>

          <p>{item.title}</p>

        </div>
      ))}

    </section>
  );
}

export default TrustStats;