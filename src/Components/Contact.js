function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Interested in working with me or have a question? Reach out to me.
      </p>
      <form>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>
        <label for="message">Message:</label><br/>
        <textarea id="message" name="message"></textarea><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Contact;
