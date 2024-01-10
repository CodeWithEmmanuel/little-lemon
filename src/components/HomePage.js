import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Specials />
      <Testimonials />
      <LittleLemon />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          maximus odio. Maecenas sapien est, blandit vitae varius ac, lobortis.
        </p>
        <button>
          <Link to="/booking">Reserve a Table</Link>
        </button>
      </div>
      <div className="hero-img">
        <img className="food-img" src="img/restaurantfood.jpg" />
      </div>
    </div>
  );
}

function Specials() {
  return (
    <div className="specials-section">
      <div className="special-heading">
        <h2>This Weeks Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-menu">
        <div className="special-menu-item">
          <img src="img/greek-salad.jpg" />
          <span className="menu-name">
            <h3>Greek salad</h3>
            <p>$12.99</p>
          </span>
          <p className="menu-description">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <span className="order-el">
            <h3>Order a delivery</h3>
            <img src="img/bike.svg" />
          </span>
        </div>

        <div className="special-menu-item">
          <img src="img/bruchetta.svg" />
          <span className="menu-name">
            <h3>Bruchetta</h3>
            <p>$5.99</p>
          </span>
          <p className="menu-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <span className="order-el">
            <h3>Order a delivery</h3>
            <img src="img/bike.svg" />
          </span>
        </div>

        <div className="special-menu-item">
          <img src="img/lemon dessert.jpg" id="menu-img" />
          <span className="menu-name">
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
          </span>
          <p className="menu-description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <span className="order-el">
            <h3>Order a delivery</h3>
            <img src="img/bike.svg" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <h3>Jone Doe</h3>
          <img src="img/person1.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
            nulla ut nisl dictum vehicula et ut orci. Maecenas laoreet a lorem
            quis ullamcorper. Sed vehicula vel nibh sed blandit. Ut id enim at
            arcu volutpat dignissim. Duis a lacinia velit, bibendum vehicula ex.
            Curabitur eu tortor id lacus placerat luctus.
          </p>
        </div>

        <div className="testimonial">
          <h3>Jane Doe</h3>
          <img src="img/person4.png" />
          <p>
            Nulla mollis in leo id accumsan. Ut porta pellentesque enim non
            porta. Duis posuere mattis risus ut volutpat. Maecenas nec sem at
            quam faucibus malesuada. Sed ut facilisis diam. Fusce semper
            placerat varius. Suspendisse iaculis, tellus aliquet convallis
            pulvinar, purus purus tristique nunc, quis rhoncus quam magna
            ullamcorper nibh.
          </p>
        </div>

        <div className="testimonial">
          <h3>Alice</h3>
          <img src="img/person3.png" />
          <p>
            Fusce semper placerat varius. Suspendisse iaculis, tellus aliquet
            convallis pulvinar, purus purus tristique nunc, quis rhoncus quam
            magna ullamcorper nibh. Integer fringilla pellentesque metus, vel
            molestie ante ullamcorper vel. Nulla malesuada nec ante sit amet
            iaculis. Donec fermentum id ipsum a tristique.
          </p>
        </div>

        <div className="testimonial">
          <h3>Bob</h3>
          <img src="img/person2.png" />
          <p>
            Sed vehicula vel nibh sed blandit. Ut id enim at arcu volutpat
            dignissim. Duis a lacinia velit, bibendum vehicula ex. Curabitur eu
            tortor id lacus placerat luctus. Nulla mollis in leo id accumsan. Ut
            porta pellentesque enim non porta. Duis posuere mattis risus ut
            volutpat. Maecenas nec sem at quam faucibus malesuada.
          </p>
        </div>
      </div>
    </div>
  );
}

function LittleLemon() {
  return (
    <div className="little-lemon-section">
      <div className="little-lemon-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="little-lemon-img">
        <img className="little-lemon-img" src="img/Mario and Adrian A.jpg" />
      </div>
    </div>
  );
}
