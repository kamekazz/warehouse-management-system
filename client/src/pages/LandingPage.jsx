import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../redux/history';
import styled from 'styled-components';
import { styleColor } from '../Styles/styleThem';

import './assets/css/main.css';

const Title = styled.h1`
  color: white;
`;

const Section = styled.section`
  color: white;
  p {
    color: ${styleColor.primary.lite};
  }
  a {
    color: ${styleColor.secondary.dark};
  }
`;

const Ispreload = styled.div`
  /* position: relative; */
`;

const Button = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  cursor: pointer;
  background: red;
  z-index: 400;
`;

const SectionA = styled.section`
  color: white;
  p {
    color: white;
    font-weight: 600;
  }
  a {
    color: ${styleColor.secondary.dark};
  }
  h2 {
    color: ${styleColor.primary.lite};
  }
  h3 {
    color: ${styleColor.primary.main};
  }
  strong {
    color: ${styleColor.secondary.dark};
  }
`;

class LandingPage extends Component {
  componentDidMount() {
    this.IsAuthenticatedReroute();
  }
  componentDidUpdate() {
    this.IsAuthenticatedReroute();
  }
  IsAuthenticatedReroute = () => {
    if (this.props.auth) {
      history.push('/app');
    }
  };

  render() {
    return (
      <Ispreload className="is-preload">
        <div id="wrapper">
          <Section className="intro">
            <header>
              <Title>EZ-WMS</Title>
              <p>
                EZ WAREHOUSE MANAGEMENT SYSTEM By
                <a href="https://github.com/kamekazz">Manuel Taveras</a> /
              </p>
              <Button
                className="button primary large"
                onClick={() => history.push('/signin')}
              >
                try demo
              </Button>
              <ul className="actions">
                <li>
                  <a href="#first" className="arrow scrolly">
                    <span className="label">Next</span>
                  </a>
                </li>
              </ul>
            </header>
            <div className="content">
              <span className="image fill" data-position="center">
                <img src="images/pic01.jpg" alt="" />
              </span>
            </div>
          </Section>

          <SectionA id="first">
            <header>
              <h2>
                DO YOU HAVE A BUSINESS PROBLEM? I can provide a Modern Solution!
              </h2>
            </header>
            <div className="content">
              <p>
                Fully Integrated into Ez Order Entry, this little gem is all you
                will need to keep your warehouse organized and near error free.
                Not only can the order entry department control orders sent to
                the warehouse personel via scanner devices, but we can almost
                eliminate paper all together. Purchase orders are received
                digitally, orders are picked, items are assigned bins, transfers
                completed, check for stock at other warehouse locations,
                inventory counts via Accpac Worksheet and much more.
              </p>
              <span className="image main">
                <img src="images/pic02.jpg" alt="" />
              </span>
            </div>
          </SectionA>

          <SectionA>
            <header>
              <h2>Compare product features</h2>
            </header>
            <div className="content">
              <p>
                Finding it hard to manage your single or multiple warehouses? We
                can FIX it.
              </p>
              <ul className="feature-icons">
                <li className="icon solid fa-laptop">Inventory Management</li>
                <li className="icon solid fa-bolt">Purchasing</li>
                <li className="icon solid fa-signal">
                  Receiving/Putaway Management
                </li>
                <li className="icon solid fa-cog">Returns Management</li>
                <li className="icon solid fa-map-marker-alt">
                  Shipping Management
                </li>
                <li className="icon solid fa-code">Forecasting</li>
              </ul>
              <p>
                Inventory count and control have a direct impact on the
                accuracy, speed and profitability of your warehousing
                operations. Our warehouse management system allows you to manage
                serialization not only for select SKUs but also for the entire
                warehouse.
              </p>
            </div>
          </SectionA>

          <SectionA>
            <header>
              <h2>Batch Management of Inventory</h2>
            </header>
            <div className="content">
              <p>
                Effective warehousing operations employ batch and wave picking
                to improve accuracy, streamline process, space optimization and
                productivity. Our WMS solution manages inventory with batch
                attributes such as expiry date, MRP etc.
              </p>

              <section>
                <header>
                  <h3>System Defined Put-away</h3>
                  <p>
                    Maximise utilization of your warehouse space using our
                    platform that maintains volumetric mapping of your
                    warehouse. Our warehouse management system calculates the
                    capacity of rakes and quantity bins, ensuring optimal
                    storage capacity.
                  </p>
                </header>
                <div className="content">
                  <div className="gallery">
                    <a href="#" className="landscape">
                      <img src="images/gallery/thumbs/01.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="images/gallery/thumbs/02.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="images/gallery/thumbs/03.jpg" alt="" />
                    </a>
                    <a href="#" className="landscape">
                      <img src="images/gallery/thumbs/04.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <header>
                  <h3>Android App for Real-time Operations</h3>
                  <p>
                    Track and receive inventory, pick, ‘put-away’, cycle count
                    and ship goods, all via an Android app. The app allows real
                    time visibility of inventory and orders for efficient
                    warehouse management, thus speeding up operations.
                  </p>
                </header>
                <div className="content">
                  <div className="gallery">
                    <a href="#" className="landscape">
                      <img src="images/gallery/thumbs/05.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="images/gallery/thumbs/06.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="images/gallery/thumbs/07.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <header>
                  <h3>Stock Transfer Across Stocking Points</h3>
                  <p>
                    Inventory transfers across warehouses and/or stores are
                    necessary for driving effective stock turns and order
                    fulfillment. Our WMS system helps you track all such
                    movement of goods from request creation, pick/pack, shipment
                    and receiving at the destination.
                  </p>
                </header>
                <div className="content">
                  <div className="gallery">
                    <a href="#" className="portrait">
                      <img src="images/gallery/thumbs/08.jpg" alt="" />
                    </a>
                    <a href="#" className="portrait">
                      <img src="images/gallery/thumbs/09.jpg" alt="" />
                    </a>
                    <a href="#" className="landscape">
                      <img src="images/gallery/thumbs/10.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </SectionA>

          <SectionA>
            <header>
              <h2>Shipping Rules for Logistics Management</h2>
            </header>
            <div className="content">
              <p>
                <strong>Make an Enquiry or Request Callback</strong> sed varius
                enim lorem ullamcorper dolore aliquam aenean ornare velit lacus,
                ac varius enim lorem ullamcorper dolore.
              </p>
              <ul className="actions">
                <li>
                  <a
                    onClick={() => history.push('/signin')}
                    className="button primary large"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </SectionA>

          <SectionA>
            <header>
              <h2>Get in touch</h2>
            </header>
            <div className="content">
              <p>
                <strong>Auctor commodo</strong> interdum et malesuada fames ac
                ante ipsum primis in faucibus. Pellentesque venenatis dolor
                imperdiet dolor mattis sagittis.
              </p>
              <form>
                <div className="fields">
                  <div className="field half">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field half">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="button primary"
                    />
                  </li>
                </ul>
              </form>
            </div>
            <footer>
              <ul className="items">
                <li>
                  <h3>Email</h3>
                  <a href="#">taveras78@gmail.com</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <a href="#">(978) 706-3407</a>
                </li>
                <li>
                  <h3>Address</h3>
                  <span>new york,NY</span>
                </li>
                <li>
                  <h3>Elsewhere</h3>
                  <ul className="icons">
                    <li>
                      <a href="#" className="icon brands fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-facebook-f">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-linkedin-in">
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-codepen">
                        <span className="label">Codepen</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </footer>
          </SectionA>
        </div>
      </Ispreload>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
