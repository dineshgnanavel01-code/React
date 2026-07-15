const stats = [
  { number: "10+", title: "Years Experience" },
  { number: "5000+", title: "Happy Customers" },
  { number: "100+", title: "Cars Available" },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((item) => (
        <div className="card" key={item.title}>
          <h2>{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}