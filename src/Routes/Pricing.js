import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { NavLink } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="MainPage">
      <NavBar />
      {/* Home */}
      <section id="Home">
        <div style={{ backgroundColor: "rgba(73.4, 60, 190,1)", paddingTop: "4%" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "auto", marginRight: "auto", alignItems: "center", flexWrap: "nowrap", justifyContent: "center" }}>

            <div style={{ flex: "0 0 auto", marginLeft: "10%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "azure" }}>
              <h2>Want cheap cloud storage?</h2>
              <p style={{ display: "flex", flex: "0 0 auto", marginLeft: "-120px", marginTop: "30px", maxWidth: "605px" }}>CloudDrive offers you just that enabling you to work faster, safer
                and bring your best ideas to life—whether
                you’re working alone or as part of a team.
                  <video autoPlay={true} loop={true} muted={true} style={{ maxWidth: "205px", marginTop: "-110px", marginLeft: "1px" }} playsInline="" webkit-playsinline="">
                  <source src="https://aem.CloudDrive.com/cms/content/dam/CloudDrive/www/en-us/features/overview/hero/ProductOverview_Hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Home */}
      {/* Features */}
      <section id="Pricing">
        <div style={{ paddingTop: "4%" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "5%", marginRight: "auto", alignItems: "center", flexWrap: "nowrap" }}>
            <div style={{ flex: "0 0 auto", alignItems: "center", maxWidth: "500px", alignSelf: "center", marginTop: "-2%", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <div className="CloudDriveBuyPage-plansAndReasons grid__item grid__item--medium--5-12 grid__item--large--1-3">
                <div className="plan-card__card-top--black">
                </div>
                <article className="plan-card__content">
                  <h2 className="plan-card__content__title">Plus</h2>
                  <div>
                    <h4 className="plan-card__content__subheader--primary" aria-hidden="true">
                    </h4>
                    <span className="ax-visually-hidden">€9.99 / month</span>
                  </div>
                  <hr aria-hidden="true" className="plan-card__content__divider" />
                  <div>
                    <h4 className="plan-card__content__subheader--secondary" aria-hidden="true">
                    </h4>
                    <span className="ax-visually-hidden">€99.00 / year (save €20.88)</span>
                  </div>
                  <p className="plan-card__content__description">Get the space you need to bring everything—photos, videos, projects, and more—on to CloudDrive.</p>
                  <div className="BuyPlan__cta-container BuyPlan__cta-container__extra-padding">
                    <button className="button button--primary button--medium BuyPlan__cta" type="button" aria-label="Select CloudDrive Plus">Select</button>
                  </div>
                </article>
                <span className="ax-visually-hidden">What’s included in CloudDrive Plus?</span>
                <ul className="CloudDriveBuyPage__reasons" role="list">
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Plus">1 TB (1,000 GB) of space</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Plus">Offline folders on mobile</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Plus">Remote device wipe</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Plus">Priority email support</li>
                </ul>
              </div>
              <div className="spacer grid__item--medium--1-24" data-reactid="32">
              </div>
            </div>
            <div style={{ flex: "0 0 auto", marginLeft: "5%", maxWidth: "500px", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <div className="CloudDriveBuyPage-plansAndReasons grid__item grid__item--medium--5-12 grid__item--large--1-3">
                <div className="plan-card__card-top--blue"></div>
                <article className="plan-card__content">
                  <h2 className="plan-card__content__title">Professional</h2>
                  <div>
                    <div className="plan-card__content__subheader--primary">
                      <h4 className="plan-card__content__subheader">
                        <span className="plan-card__content__subheader--strike" aria-hidden="true">€19.99 / month</span>
                      </h4>
                    </div>
                  </div>
                  <hr aria-hidden="true" className="plan-card__content__divider" />
                  <div>
                    <h4 className="plan-card__content__subheader--secondary" aria-hidden="true">
                    </h4>
                    <span className="ax-visually-hidden">€199.00 / year (save €40.88)</span>
                  </div>
                  <p className="plan-card__content__description">Store all your files, easily put together polished presentations, and keep tabs on who’s seen what.</p>
                  <div className="BuyPlan__cta-container">
                    <button className="BuyPlan__secondary-cta button-as-link">Buy CloudDrive Professional now</button>
                  </div>
                </article>
                <span className="ax-visually-hidden">What’s included in CloudDrive Professional?</span>
                <ul className="CloudDriveBuyPage__reasons" role="list">
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Everything in Plus</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">2 TB (2,000 GB) of space</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Smart Sync: Save hard disk space</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Showcase: Present and track your work</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Advanced sharing controls</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Full text search</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">120-day version history</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Priority chat support</li></ul>
              </div>
            </div>
            <div style={{ flex: "0 0 auto", marginLeft: "5%", maxWidth: "500px", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <div className="CloudDriveBuyPage-plansAndReasons grid__item grid__item--medium--5-12 grid__item--large--1-3">
                <div className="plan-card__card-top--blue"></div>
                <article className="plan-card__content">
                  <h2 className="plan-card__content__title">Enterprise</h2>
                  <div>
                    <div className="plan-card__content__subheader--primary">
                      <h4 className="plan-card__content__subheader">
                        <span className="plan-card__content__subheader--strike" aria-hidden="true">€19.99 / month</span>
                      </h4>
                    </div>
                  </div>
                  <hr aria-hidden="true" className="plan-card__content__divider" />
                  <div>
                    <h4 className="plan-card__content__subheader--secondary" aria-hidden="true">
                    </h4>
                    <span className="ax-visually-hidden">€299.00 / year (save €50.88)</span>
                  </div>
                  <p className="plan-card__content__description">Store all your files, easily put together polished presentations, and keep tabs on who’s seen what.</p>
                  <div className="BuyPlan__cta-container">
                    <button className="BuyPlan__secondary-cta button-as-link">Buy CloudDrive Enterprise now</button>
                  </div>
                </article>
                <span className="ax-visually-hidden">What’s included in CloudDrive Enterprise?</span>
                <ul className="CloudDriveBuyPage__reasons" role="list">
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Everything in Plus</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">2 TB (2,000 GB) of space</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Smart Sync: Save hard disk space</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Showcase: Present and track your work</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Advanced sharing controls</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Full text search</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">120-day version history</li>
                  <li className="CloudDriveBuyPage__reason CloudDriveBuyPage__reason--Professional">Priority chat support</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Features */}
      {/* ComparePlans */}
      <section>
        <div style={{ backgroundColor: "rgba(73.4, 60, 190,1)", paddingTop: "5%", paddingBottom: "3%" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "10%", marginRight: "auto", alignItems: "center", flexWrap: "nowrap" }}>
            <div style={{ flex: "0 0 auto", alignItems: "center", alignSelf: "center", marginTop: "-2%", justifyContent: "space-evenly", color: "azure", width: "100%" }}>
              <h2 style={{ display: "flex", flex: "0 0 auto" }}>At CloudDrive, we're here to keep <NavLink style={{ marginLeft: "40%", marginTop: "2%" }} className="btn btn-primary" to="/Pricing">Compare Plans</NavLink></h2>
              <h2 style={{ marginTop: "-2%" }}><p>work flowing.</p></h2>
            </div>
          </div>
        </div>
      </section>
      {/* End of ComparePlans */}
      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </div >
  );
}