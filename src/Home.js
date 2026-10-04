import React from 'react';

// All CSS lives inside this file
const css = `
.hm { font-family: 'Segoe UI', Arial, sans-serif; color: #1b2430; background: #f6f4ef; min-height: 100vh; }
.hm * { box-sizing: border-box; }
.hm a { color: inherit; text-decoration: none; }

/* Navbar */
.hm-nav { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between;
  padding: 14px 6%; background: #14213d; color: #fff; }
.hm-brand { font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
.hm-links { display: flex; gap: 28px; }
.hm-links a { color: #cfd6e4; font-size: 15px; }
.hm-links a:hover { color: #fff; }
.hm-user { display: flex; align-items: center; gap: 12px; }
.hm-user-name { font-size: 14px; color: #e6eaf2; }
.hm-avatar-sm { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; background: #fca311; color: #14213d;
  display: flex; align-items: center; justify-content: center; font-weight: 700; }
.hm-logout { background: transparent; color: #fff; border: 1px solid #5b6b8c; padding: 7px 14px; border-radius: 6px;
  cursor: pointer; font-size: 14px; }
.hm-logout:hover { background: #fca311; border-color: #fca311; color: #14213d; }

/* Hero */
.hm-hero { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; padding: 70px 6%; }
.hm-hero h1 { font-size: 46px; line-height: 1.12; margin: 0 0 16px; color: #14213d; }
.hm-hero p { font-size: 18px; line-height: 1.6; color: #55606f; margin: 0 0 28px; max-width: 520px; }
.hm-btn { display: inline-block; background: #14213d; color: #fff !important; padding: 13px 26px; border-radius: 8px;
  font-size: 16px; border: 0; cursor: pointer; }
.hm-btn:hover { background: #fca311; color: #14213d !important; }
.hm-btn-light { background: transparent; color: #14213d !important; border: 1px solid #14213d; margin-left: 12px; }

/* Account card */
.hm-account { background: #fff; border-radius: 14px; padding: 26px; box-shadow: 0 6px 24px rgba(20, 33, 61, 0.1); text-align: center; }
.hm-avatar { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; margin: 0 auto 12px; background: #fca311;
  color: #14213d; font-size: 40px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.hm-account h3 { margin: 0 0 4px; font-size: 22px; }
.hm-account .email { color: #6b7685; margin: 0 0 18px; font-size: 15px; word-break: break-all; }
.hm-rows { text-align: left; border-top: 1px solid #ece8de; }
.hm-row { display: flex; justify-content: space-between; padding: 11px 0; border-bottom: 1px solid #ece8de; font-size: 14px; }
.hm-row span:first-child { color: #6b7685; }
.hm-badge { background: #e8f5e9; color: #2e7d32; padding: 2px 10px; border-radius: 20px; font-size: 13px; }

/* Sections */
.hm-section { padding: 30px 6% 50px; }
.hm-section h2 { font-size: 28px; margin: 0 0 6px; color: #14213d; }
.hm-sub { color: #6b7685; margin: 0 0 26px; }
.hm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 22px; }
.hm-card { background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #ece8de; }
.hm-card:hover { box-shadow: 0 8px 20px rgba(20, 33, 61, 0.12); }
.hm-card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; }
.hm-card-body { padding: 16px; }
.hm-card-body h4 { margin: 0 0 4px; font-size: 17px; }
.hm-price { color: #14213d; font-weight: 700; margin: 0 0 12px; }
.hm-card .hm-btn { padding: 8px 16px; font-size: 14px; }

/* Features */
.hm-features { background: #14213d; color: #fff; padding: 46px 6%; }
.hm-features .hm-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.hm-feature h4 { margin: 8px 0 6px; font-size: 18px; }
.hm-feature p { margin: 0; color: #b9c3d6; font-size: 14px; line-height: 1.5; }
.hm-feature .ic { font-size: 30px; }

/* Footer */
.hm-footer { text-align: center; padding: 26px; color: #6b7685; font-size: 14px; }

@media (max-width: 800px) {
  .hm-hero { grid-template-columns: 1fr; padding: 40px 6%; }
  .hm-hero h1 { font-size: 34px; }
  .hm-links, .hm-user-name { display: none; }
}
`;

const products = [
  { name: 'Classic T-Shirt', price: '$29.99', icon: '👕', bg: '#dbe7ff' },
  { name: 'Denim Jeans', price: '$59.99', icon: '👖', bg: '#e6e2d6' },
  { name: 'Summer Dress', price: '$79.99', icon: '👗', bg: '#fde2e2' },
  { name: 'Sneakers', price: '$89.99', icon: '👟', bg: '#e1f2e4' },
];

const features = [
  { icon: '🚚', title: 'Fast Delivery', text: 'Your orders reach your doorstep quickly and safely.' },
  { icon: '💳', title: 'Secure Payment', text: 'Your payment and personal details stay protected.' },
  { icon: '🔄', title: 'Easy Returns', text: 'Not happy with it? Return it easily.' },
  { icon: '🎧', title: '24/7 Support', text: 'Our team is always here whenever you need help.' },
];

function Home({ user, onLogout }) {
  const firstName = user.name.split(' ')[0];
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div className="hm">
      <style>{css}</style>

      {/* Navbar */}
      <nav className="hm-nav">
        <div className="hm-brand">MyShop</div>
        <div className="hm-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#features">Why Us</a>
          <a href="#account">Account</a>
        </div>
        <div className="hm-user">
          {user.picture ? (
            <img src={user.picture} alt="" className="hm-avatar-sm" referrerPolicy="no-referrer" />
          ) : (
            <div className="hm-avatar-sm">{initial}</div>
          )}
          <span className="hm-user-name">{user.name}</span>
          <button className="hm-logout" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      {/* Hero + Account */}
      <section className="hm-hero" id="home">
        <div>
          <h1>Welcome back, {firstName}! Our new collection is waiting for you</h1>
          <p>
            The best clothes of the season, with great quality and fair prices. Browse your favourites and order today.
          </p>
          <a href="#products" className="hm-btn">Shop Now</a>
          <a href="#features" className="hm-btn hm-btn-light">Learn More</a>
        </div>

        <div className="hm-account" id="account">
          {user.picture ? (
            <img src={user.picture} alt="" className="hm-avatar" referrerPolicy="no-referrer" />
          ) : (
            <div className="hm-avatar">{initial}</div>
          )}
          <h3>{user.name}</h3>
          <p className="email">{user.email}</p>
          <div className="hm-rows">
            <div className="hm-row"><span>Account</span><span className="hm-badge">Active</span></div>
            <div className="hm-row"><span>Login method</span><span>{user.picture ? 'Google' : 'Username'}</span></div>
            <div className="hm-row"><span>Email</span><span>{user.email}</span></div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="hm-section" id="products">
        <h2>New Arrivals</h2>
        <p className="hm-sub">This week's most popular picks</p>
        <div className="hm-grid">
          {products.map((p) => (
            <div className="hm-card" key={p.name}>
              <div className="hm-card-img" style={{ background: p.bg }}>{p.icon}</div>
              <div className="hm-card-body">
                <h4>{p.name}</h4>
                <p className="hm-price">{p.price}</p>
                <button className="hm-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="hm-features" id="features">
        <div className="hm-grid">
          {features.map((f) => (
            <div className="hm-feature" key={f.title}>
              <div className="ic">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="hm-footer">© 2026 MyShop. All rights reserved.</footer>
    </div>
  );
}

export default Home;