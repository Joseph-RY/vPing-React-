import "./App.css";
import "./media.css";

import logo from "./assets/logo.png";
import intro from "./assets/intro.png";
import achivOne from "./assets/100 million.png";
import achivTwo from "./assets/trustpilot.png";
import laptop from "./assets/image(1).png";
import netflix from "./assets/netflix.png";
import youtube from "./assets/youtube.png";
import primeVideo from "./assets/primevideo.png";
import hbo from "./assets/hbo.png";
import dataBase from "./assets/image(2).png";
import security from "./assets/image(3).png";
import mark from "./assets/Check Mark.png";
import limits from "./assets/No Limit.png";
import safe from "./assets/100_ Safe.png";
import vpn from "./assets/Fastest VPN.png";
import logs from "./assets/Policy.png";
import stars from "./assets/image(4).png";
import star from "./assets/Star 1.png";
import unstar from "./assets/Star 5.png";
import quotes from "./assets/quotes.png";
import selena from "./assets/Selena Gomez.png";
import arrow from "./assets/down arrow.png";
import footer from "./assets/footer.png";
import trustpilot from "./assets/trustpilot(2).png";
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"
import linkedin from "./assets/linkedin.png"

const App = () => {
  return (
    <>
      <div className="all">
        <header>
          <nav>
            <img src={logo} alt="" />
            <ul className="navList">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="navBtn">
              <button>Log in</button>
              <button>Sign in</button>
            </div>
            <div className="navBar">
              <hr />
              <hr />
              <hr />
            </div>
          </nav>
          <section className="intro">
            <div className="introText">
              <div>
                <h1>
                  Get access to <br /> worlwide content
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div>
                <p>
                  Start from <span className="introPrice"> $2.99</span> / month
                </p>
              </div>
              <div className="introAction">
                <button className="introBtn">Get Started</button>
                <p>* 30-Days money back gurantee</p>
              </div>
            </div>
            <div className="introImage">
              <img src={intro} alt="" />
            </div>
          </section>
        </header>
        <main>
          <section className="achivments">
            <img src={achivOne} alt="" />
            <img src={achivTwo} alt="" />
            <img src={achivOne} alt="" />
          </section>
          <section className="section">
            <div className="sectionImage">
              <img src={laptop} alt="" />
            </div>
            <div className="sectionText">
              <h2>One gateway endless entertainment</h2>
              <p>
                Content at the tip of your fingers! With thousands of servers
                and millions of IPs, you can access websites and enjoy your
                favourite movies, TV shows, games, and more; in over 190
                countries.
              </p>
              <div className="sectionIcons">
                <img src={netflix} alt="" />
                <img src={youtube} alt="" />
                <img src={primeVideo} alt="" />
                <img src={hbo} alt="" />
              </div>
            </div>
          </section>
          <section className="section dataBase">
            <div className="sectionText">
              <h2>Putting power back into your hands</h2>
              <p>
                Instant protection to enhance your online privacy. Browse the
                internet safety and anonymously.
              </p>
              <div>
                <button className="sectionBtn">Get Started</button>
              </div>
            </div>
            <div className="sectionImage">
              <img src={dataBase} alt="" />
            </div>
          </section>
          <section className="section">
            <div className="sectionImage">
              <img src={security} alt="" />
            </div>
            <div className="sectionText">
              <h2>30 Days money back guarantee</h2>
              <p>
                Since we trust that you will fall in love with vping, we offer
                our users the option to try it for 30 days. If you don’t enjoy
                the experience, we will give you a 100% refund.
              </p>
              <div>
                <button className="sectionBtn">Get Started</button>
              </div>
            </div>
          </section>
          <section className="cards">
            <div className="cardsTitle">
              <h2>Save big with our annual plans</h2>
              <p>Sign up and save a ton! No logs. No hidden fees.</p>
            </div>
            <div className="cardsBox">
              <article className="cardItem">
                <span className="cardName">Premium Plan</span>
                <div className="cardInfo">
                  <p>3 Years</p>
                  <p>
                    <span className="introPrice priceInMonth"> $2.99 </span> /
                    month
                  </p>
                  <div className="cardPrice">
                    <p>$107.55</p>
                    <p>$537.30</p>
                  </div>
                  <p className="cardDate">Build every 3 years</p>
                </div>
                <div className="marks">
                  <div>
                    <img src={mark} alt="" />
                    <p>Unlimited bandwitch</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Encrypted connection</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>No traffic logs</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Works on all devices</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Instant setup</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Torrent allowed</p>
                  </div>
                </div>
                <button>Subcribe</button>
              </article>
              <article className="cardItem">
                <span className="cardName">Popular Plan</span>
                <div className="cardInfo">
                  <p>1 Years</p>
                  <p>
                    <span className="introPrice priceInMonth"> $7.59 </span> /
                    month
                  </p>
                  <div className="cardPrice">
                    <p>$92.26</p>
                    <p>$170.88</p>
                  </div>
                  <p className="cardDate">Build every year</p>
                </div>
                <div className="marks">
                  <div>
                    <img src={mark} alt="" />
                    <p>Unlimited bandwitch</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Encrypted connection</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>No traffic logs</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Works on all devices</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Instant setup</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Torrent allowed</p>
                  </div>
                </div>
                <button>Subcribe</button>
              </article>
              <article className="cardItem">
                <span className="cardName">Basic Plan</span>
                <div className="cardInfo">
                  <p>Monthly</p>
                  <p>
                    <span className="introPrice priceInMonth"> $14.99 </span> /
                    month
                  </p>
                  <p className="cardDate">billed monthly</p>
                </div>
                <div className="marks">
                  <div>
                    <img src={mark} alt="" />
                    <p>Unlimited bandwitch</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Encrypted connection</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>No traffic logs</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Works on all devices</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Instant setup</p>
                  </div>
                  <div>
                    <img src={mark} alt="" />
                    <p>Torrent allowed</p>
                  </div>
                </div>
                <button>Subcribe</button>
              </article>
            </div>
          </section>
          <section className="premium">
            <div className="premiumWindow">
              <div className="premiumTitle">
                <h2>A premium experience</h2>
              </div>
              <div className="premiumBox">
                <article>
                  <div>
                    <img src={limits} alt="" />
                  </div>
                  <h4>No Limits</h4>
                  <p>Enjoy unlimited data - nothing will stop you!</p>
                </article>
                <article>
                  <div>
                    <img src={safe} alt="" />
                  </div>
                  <h4>100% Safe</h4>
                  <p>All your data is encrypted, keeping you safe!</p>
                </article>
                <article>
                  <div>
                    <img src={vpn} alt="" />
                  </div>
                  <h4>Fastest VPN</h4>
                  <p>HD Streaming with fastest VPN, no buffering!</p>
                </article>
                <article>
                  <div>
                    <img src={logs} alt="" />
                  </div>
                  <h4>No-Logs Policy</h4>
                  <p>Maintain your online privacy and anonymity.</p>
                </article>
              </div>
            </div>
          </section>
          <section className="vpn">
            <div className="vpnTitle">
              <h2>The highest rated VPN</h2>
              <p>Trusted and loved by our users</p>
            </div>
            <div className="vpnContent">
              <div className="vpnBlueBox">
                <div>
                  <img className="quotes" src={quotes} alt="" />
                </div>
                <div className="vpnText">
                  <p className="vpnQuote">
                    Since we trust that you will fall in love with vping, we
                    offer our users the option to try it for 30 days. If you
                    don’t enjoy the experience, we will give you a 100% refund.
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <div className="vpnAuthor">
                    <div className="vpnAuthBg">
                      <img src={selena} alt="" />
                    </div>
                    <div>
                      <p>Selena Gomez</p>
                      <div className="vpnDates">
                        <p>Aug 15, 2021</p>
                        <div>
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={unstar} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={stars} alt="" />
              </div>
            </div>
          </section>
          <section className="details">
            <div className="detailsTitle">
              <h2>Questions users are asking</h2>
            </div>
            <div className="detailsContainer">
              <div className="detailsBox">
                <div className="detailsItem">
                  <p>Which plan is right for me?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>What if I change my mind?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>How can I manage my billing</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>Can I use my account on multiple devices?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="detailsBox">
                <div className="detailsItem">
                  <p>How does your pricing work?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>Can I change my plan?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>What payment methods do you accept?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="detailsItem">
                  <p>What is the 30-days money back policy?</p>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="footerIntro">
            <div className="footerIntroImage">
              <img src={footer} alt="" />
            </div>
            <div className="footerIntroText">
              <h1>Get what you need online, completely undetected.</h1>
              <p>
                30 Day money back guarantee. If you’re not 100% satisfied with
                vping. We’ll refund your payment. No hassle, no risk.
              </p>
              <div>
                <img src={trustpilot} alt="" />
              </div>
              <p>
                Start from <span className="introPrice"> $2.99</span> / month
              </p>
              <div className="introAction">
                <button className="introBtn">Get Started</button>
              </div>
            </div>
          </div>
          <div className="footerInfo">
            <div className="footerLogo">
              <div>
                <img src={logo} alt="" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="footerLinks">
              <p>Product</p>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Server</a>
                </li>
                <li>
                  <a href="#">VPN for Business</a>
                </li>
                <li>
                  <a href="#">VPN for Non-Profit</a>
                </li>
              </ul>
            </div>
            <div className="footerLinks">
              <p>Company</p>
              <ul>
                <li>
                  <a href="#">What`s is VPN</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Tuitorials</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footerSocial">
              <p>Connect with us</p>
              <div>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
