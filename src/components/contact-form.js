import * as React from "react";
import "/src/styles/contact-form.css";

const ContactForm = () => {
  return (
    <form id="survey-form" action="#">
      <div class="form-field">
        <label id="name-label" for="name">
          Name
        </label>
        <br />
        <input
          id="name"
          type="text"
          name="name-label"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="form-field">
        <label id="company-name-label" for="company-name">
          Company
        </label>
        <br />
        <input
          id="company-name"
          type="text"
          name="name-label"
          placeholder="Enter your company name"
        />
      </div>
      <div class="form-field">
        <label id="email-label" for="email">
          Email
        </label>
        <br />
        <input
          id="email"
          type="email"
          name="email-label"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-field">
        <label id="number-label" for="number">
          Contact number
        </label>
        <br />
        <input
          id="number"
          type="number"
          min="0"
          max="25"
          name="number-label"
          placeholder="Enter your phone number"
        />
      </div>
      <div class="form-field">
        <p>What can we help you with?</p>
        <select id="dropdown" name="what-do-you-need">
          <option value="">..select an option</option>
          <option value="new">A quote for building a new website</option>
          <option value="existing">
            Refurbishment or extension of an existing site
          </option>
          <option value="general">General enquiry</option>
        </select>
      </div>
      <div class="form-field">
        <label for="message">Add a message or more detailed information</label>
        <br />
        <textarea
          id="comment-form"
          name="comment-form"
          placeholder="Type here"
        ></textarea>
      </div>
      <div class="form-field">
        <button id="submit" class="sec-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
