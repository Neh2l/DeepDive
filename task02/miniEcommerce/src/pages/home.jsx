import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home-summary">

        <span>WHY MINI STORE?</span>

        <h2>
          Everything you need,
          <br />
          in one simple place.
        </h2>

        <p>
          Mini Store gives you a simple way
          to explore products and manage
          your product collection.
        </p>

      </section>
    </>
  );
}