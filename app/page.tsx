
import DisableRightClick from "./DisableRightClick";
const services = [
  {
    icon: "🏢",
    title: "Ontario Incorporation",
    description: "Start your Ontario corporation with professional assistance.",
  },
  {
    icon: "🌎",
    title: "Federal Incorporation",
    description: "Register your corporation across Canada.",
  },
  {
    icon: "📋",
    title: "Business Name Registration",
    description: "Register your sole proprietorship or partnership.",
  },
  {
    icon: "📁",
    title: "Corporate Filings",
    description: "Manage annual returns and corporate documents.",
  },
  {
    icon: "🔄",
    title: "Business Updates",
    description: "Update directors, shareholders and company details.",
  },
  {
    icon: "🔍",
    title: "Corporate Searches",
    description: "Get corporate profiles and certificates.",
  },
];

const steps = [
  ["01", "Submit Your Order", "Complete our simple online application."],
  ["02", "We Process Your Request", "Our team reviews your information."],
  ["03", "Receive Your Documents", "Get your completed business documents."],
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>✉ info@example.com</span>
          <span>☎ Contact Us &nbsp; | &nbsp; Help Center</span>
        </div>
      </div>
  <main>
    <DisableRightClick />

    {/* Your existing homepage code */}
  </main>

      <header className="header container">
        <a href="#" className="logo">
          <span className="logo-icon">OB</span>
          <span>ONTARIO <b>BUSINESS</b></span>
        </a>

        <nav>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#services" className="nav-button">
          Get Started
        </a>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">
              YOUR BUSINESS STARTS HERE
            </span>

            <h1>
              Start Your Business
              <br />
              <span>In Ontario Today</span>
            </h1>

            <p>
              Make your entrepreneurial journey easier.
              Professional business registration and
              incorporation services, all in one place.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="primary-button">
                Explore Our Services →
              </a>
              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="hero-trust">
              ✓ Professional Support &nbsp;&nbsp;
              ✓ Simple Online Process
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">🏢</div>
            <h3>Start Your Company</h3>
            <p>Choose the right registration service for your business.</p>
            <a href="#services">View Services →</a>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Our Business Services</h2>
            <p>
              Everything you need to start, register and manage
              your business.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Learn More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-content">
          <div>
            <span className="eyebrow">ABOUT OUR SERVICES</span>
            <h2>Your Business Journey Starts With the Right Support</h2>
            <p>
              We aim to make business registration easier
              by bringing essential business services together
              in one convenient place.
            </p>
            <a href="#contact" className="primary-button">
              Contact Our Team →
            </a>
          </div>

          <div className="about-highlight">
            <span>✓</span>
            <h3>Simple Process</h3>
            <p>Easy-to-follow online registration process.</p>
            <span>✓</span>
            <h3>Professional Assistance</h3>
            <p>Support throughout your business journey.</p>
            <span>✓</span>
            <h3>Convenient Online Service</h3>
            <p>Access business services from anywhere.</p>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">GETTING STARTED</span>
            <h2>How It Works</h2>
            <p>Three simple steps to get started.</p>
          </div>

          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <div className="step-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Business?</h2>
          <p>Take the first step towards your entrepreneurial journey.</p>
          <a href="#contact" className="white-button">
            Get Started Today →
          </a>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HAVE QUESTIONS?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <details>
            <summary>What is business incorporation?</summary>
            <p>It is the process of legally creating a corporation.</p>
          </details>

          <details>
            <summary>Can I register a business online?</summary>
            <p>Yes. Many business registration services are available online.</p>
          </details>

          <details>
            <summary>What services are available?</summary>
            <p>Services may include incorporation, business name registration and corporate filings.</p>
          </details>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-content">
          <div>
            <h2>ONTARIO BUSINESS</h2>
            <p>Helping entrepreneurs take their next step.</p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>hello@example.com</p>
            <p>Canada</p>
          </div>
        </div>
        <div className="copyright">
          © 2026 Ontario Business. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
