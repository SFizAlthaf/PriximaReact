function Header() {
  return (
    <div>
      <div className="topSection">
        <div className="leftside">
          <div className="info">
            <img src="assets/envelope.svg" alt="mail" />
            <p>info@example.com</p>
          </div>
          <div className="info">
            <img src="assets/phone.svg" alt="call" />
            <p>123 456 - 7890</p>
          </div>
        </div>
        <div className="rightSide">
          <div className="icons">
            <img src="assets/facebook.svg" alt="facebook" />
          </div>
          <div className="icons">
            <img src="assets/twitter.svg" alt="twitter" />
          </div>
          <div className="icons">
            <img src="assets/instagram.svg" alt="instagram" />
          </div>
          <div className="icons">
            <img src="assets/pinterest.svg" alt="pinterest" />
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="leftMenu">
          <h1 className="leftName">Prixima</h1>
          <h1 className="fullStop">.</h1>
        </div>
        <div className="rightMenu">
          <div className="menu1 menu">
            <a href="index.html">Home</a>
          </div>
          <div className="menu2 menu">
            <a href="about.html">About</a>
          </div>
          <div className="menu3 menu">Services</div>
          <div className="menu4 menu">Portfolio</div>
          <div className="menu5 menu">Team</div>
          <div className="menu6 menu">Reviews</div>
          <div className="menu7 menu">Blog</div>
          <div className="menu8 menu">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
