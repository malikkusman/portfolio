import "./Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>First Name</label>
        <input type="text" placeholder="Your name.." />
        <label>Email</label>
        <input type="text" placeholder="Your email.." />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Write something.."></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
