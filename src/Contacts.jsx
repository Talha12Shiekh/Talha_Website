import styled from "styled-components";

const Contacts = () => {
  const Wrapper = styled.section`
    padding: 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              /* transform: scale(1.1); */
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9213813146844!2d74.27574671359514!3d31.471348781385863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919034266c287c3%3A0xf7e41bc74f17ecc8!2sEuro%20Store!5e0!3m2!1sen!2s!4v1666692368374!5m2!1sen!2s"
        title="map"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xnqrgjwj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              placeholder="Message"
              name="message"
              cols={30}
              rows={6}
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contacts;
