import "./About.css";
function AboutUs ()
{
    return(
        <>
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Zorvik</h1>
        <p>Style That Defines You</p>
      </section>

      {/* About Section */}
      <section className="about-content">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
            alt="Zorvik Fashion"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Welcome to <strong>Zorvik</strong>, a modern clothing brand
            focused on stylish and comfortable fashion.
          </p>

          <p>
            We are currently working on premium Drop Shoulder
            T-Shirts designed for people who want comfort, quality,
            and a unique style.
          </p>

          <p>
            Our goal is to provide fashionable products at prices
            that are affordable and suitable for everyone.
          </p>

          <button>Explore Collection</button>
        </div>

      </section>

      {/* Mission Section */}
      <section className="mission">

        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To create comfortable, stylish and quality clothing
            that helps everyone express their personality.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            To grow Zorvik into a trusted fashion brand known
            for quality, creativity and modern style.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Values</h2>
          <p>
            Quality, creativity, customer satisfaction and
            affordable fashion are at the heart of Zorvik.
          </p>
        </div>

      </section>

      {/* Bottom Section */}
      <section className="about-bottom">
        <h2>Wear Your Style. Wear Zorvik.</h2>
        <p>
          Thank you for being part of our journey.
        </p>
      </section>

    </div>
```

        </>
    )
}
export default AboutUs