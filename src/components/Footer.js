export default function Footer() {
  return (
    <div className="footer">
      <img src="img/Logo.svg" />
      <DoormatNavigation />
      <Contact />
      <SocialMedia />
    </div>
  );
}

function DoormatNavigation() {
  return (
    <div className="doormat-navigation">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p>1234 Main Street</p>
      <p>Chicago, IL 60613</p>
      <p>773-555-1234</p>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="social-media">
      <img src="img/facebook.svg" />
      <img src="img/instagram.svg" />
      <img src="img/twitter.svg" />
    </div>
  );
}
