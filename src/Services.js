import React from "react";

function Services() {
  const services = [
    {
      icon: "🛒",
      title: "Online Shopping",
      description:
        "Shop for a wide range of products easily and conveniently from our online store.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely to your doorstep.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description:
        "Make secure and convenient payments using different payment methods.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description:
        "Your personal information and shopping data are protected.",
    },
    {
      icon: "📦",
      title: "Order Tracking",
      description:
        "Track your order and stay updated about your delivery status.",
    },
    {
      icon: "🎧",
      title: "Customer Support",
      description:
        "Our customer support team is available to help you.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          Our Services
        </h1>

        <p style={{ fontSize: "18px" }}>
          We provide reliable and convenient services for our customers.
        </p>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "60px 8%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>
          What We Offer
        </h2>

        <p style={{ color: "#666", marginBottom: "40px" }}>
          Explore our services
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "45px" }}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {service.description}
              </p>

              <button
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>MyShop</h3>
        <p>Making online shopping easier and better.</p>
        <p>© 2026 MyShop</p>
      </footer>
    </div>
  );
}

export default Services;