import React from "react";

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>

      <form>
        <p>
          Name:
          <input type="text" />
        </p>

        <p>
          Email:
          <input type="email" />
        </p>

        <p>
          Message:
          <textarea></textarea>
        </p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;