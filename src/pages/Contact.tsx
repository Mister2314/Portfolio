import { useState } from "react";
import Header from "../Header";
import PageStyles from "../PageStyles";
import { useAos } from "../useAos";
import { useLoadingScreen } from "../useLoadingScreen";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  useAos();
  useLoadingScreen(1500, true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState(false);

  const nameValid = name.trim().length > 0;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const messageValid = message.trim().length > 0;
  const formValid = nameValid && emailValid && messageValid;

  async function SendMail(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!formValid || status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.send("service_2gz7a1z", "template_vwf7v3v", {
        name_id: name,
        email_id: email,
        subject: subject,
        message: message,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageStyles hrefs={["/css/contact.css"]} />
      <div className="loadpage" id="loadingScreen">
        <div className="animate">Loading...</div>
      </div>

      <Header zoomAll />

      <section className="hero">
        <div className="hero-container">
          <div data-aos="rise" className="hero-box1-left">
            <h3>Contact Info</h3>
            <div className="hero-box1-left-boxes">
              <div className="boxes">
                <div className="boxes-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m7 9l5 3.5L17 9"
                      />
                      <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                    </g>
                  </svg>
                </div>
                <div className="boxes-right">
                  <span>Mail Me</span>
                  <h4>xeyalhuseynli06@gmail.com</h4>
                  <h4>xeyalhuseynli07@gmail.com</h4>
                </div>
              </div>
              <div className="boxes">
                <div className="boxes-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847h5.072Z"
                    />
                  </svg>
                </div>
                <div className="boxes-right">
                  <span>Contact Me</span>
                  <h4>+994 50 703 21 86</h4>
                </div>
              </div>
              <div className="boxes">
                <div className="boxes-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-12Z"
                    />
                  </svg>
                </div>
                <div className="boxes-right">
                  <span>Location</span>
                  <h4>Baku, Azerbaijan</h4>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="rise" data-aos-delay="140" className="hero-box1-right">
            <h1>
              Let’s work <span>together.</span>
            </h1>
            <form className="form-container" onSubmit={SendMail} noValidate>
              <label className="sr-only" htmlFor="name_id">Name</label>
              <input
                type="text"
                placeholder="Name *"
                required
                id="name_id"
                aria-invalid={touched && !nameValid}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="sr-only" htmlFor="email_id">Email</label>
              <input
                type="email"
                placeholder="Email *"
                required
                id="email_id"
                aria-invalid={touched && !emailValid}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="sr-only" htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Your Subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                id="message"
                cols={30}
                rows={10}
                placeholder="Your Message *"
                aria-invalid={touched && !messageValid}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div aria-live="polite" className="form-status">
                {touched && !formValid && status !== "success" && (
                  <p className="form-error" role="alert">
                    Please fill in your name, a valid email and a message.
                  </p>
                )}
                {status === "success" && (
                  <p className="form-success">Message sent — I’ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="form-error" role="alert">
                    Something went wrong. Try again or email me directly.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={status === "sending" ? "is-sending" : ""}
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "success"
                    ? "Sent ✓"
                    : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
