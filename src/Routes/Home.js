import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="MainPage">
      <NavBar />
      {/* Home */}
      <section id="Home">
        <div style={{ backgroundColor: "rgba(73.4, 60, 190,1)", paddingTop: "4%" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "auto", marginRight: "auto", alignItems: "center", flexWrap: "nowrap", justifyContent: "center" }}>

            <div style={{ flex: "0 0 auto", marginLeft: "10%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "azure" }}>
              <h2>What is CloudDrive?</h2>
              <p style={{ display: "flex", flex: "0 0 auto", marginLeft: "-120px", marginTop: "30px", maxWidth: "605px" }}>CloudDrive is a home for all your work. You can
                store and share files, collaborate on projects,
                and bring your best ideas to life—whether
                you’re working alone or as part of a team.
                  <video autoPlay={true} loop={true} muted={true} style={{ maxWidth: "205px", marginTop: "-110px", marginLeft: "1px" }} playsInline="" webkit-playsinline="">
                  <source src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/features/overview/hero/ProductOverview_Hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Home */}
      {/* Features */}
      <section id="Features">
        <div style={{ paddingTop: "4%" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "10%", marginRight: "auto", alignItems: "center", flexWrap: "nowrap" }}>
            <div style={{ flex: "0 0 auto", alignItems: "center", alignSelf: "center", marginTop: "-2%", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <h2>Store and <p>access files from anywhere</p></h2>
              <p style={{ display: "flex", flex: "0 0 auto", marginTop: "30px", maxWidth: "405px" }}>Bring your work together in one safe place. Get
              to your files from a computer, phone, or tablet
              —changes you make from one device will
              automatically sync across all your devices.
                  <video autoPlay={true} loop={true} muted={true} style={{ maxWidth: "205px", marginTop: "-110px", marginLeft: "1px" }} playsInline="" webkit-playsinline="">
                  <source src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/features/overview/store-sync-across-devices_no-translation/CloudStorage_MultipleDevices.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
              </p>
            </div>
            <div style={{ flex: "0 0 auto", marginLeft: "10%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <h2>Keep your data <p>safe</p></h2>
              <p style={{ display: "flex", flex: "0 0 auto", marginTop: "30px", maxWidth: "405px" }}>CloudDrive security features let you control
              exactly who gets access to your files, wipe data
              when you lose a device, and recover files if you
              need to.
                  <video autoPlay={true} loop={true} muted={true} style={{ maxWidth: "205px", marginTop: "-110px", marginLeft: "1px" }} playsInline="" webkit-playsinline="">
                  <source src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/features/overview/security/Security_RequestAccess.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
              </p>
            </div>
            <div style={{ flex: "0 0 auto", marginLeft: "10%", alignItems: "center", marginTop: "-2%", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <h2>Share files, big or <p>small</p></h2>
              <p style={{ display: "flex", flex: "0 0 auto", marginTop: "30px", maxWidth: "405px" }}>Send files to anyone, even if they don’t have a
              Dropbox account. Files you share using Dropbox
              always stay up-to-date, letting you and your
              team stay on the same page.
                  <video autoPlay={true} loop={true} muted={true} style={{ maxWidth: "205px", marginTop: "-110px", marginLeft: "1px" }} playsInline="" webkit-playsinline="">
                  <source src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/features/overview/share/Sharing_Desktop.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Features */}
      {/* Contact Us */}
      <section id="ContactUs">
        <div style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "10%", marginRight: "auto", alignItems: "center", flexWrap: "nowrap", justifyContent: "center" }}>
            <div style={{ flex: "0 0 auto", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(0,0,0,0.5)" }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-2"> </div>
                  <div className="col-md-8">
                    <h1>Contact Us</h1>
                    <p className="lead">Have a question or want further information?</p>

                    <p>Fill in the short form and we will get back to you as soon as possible.</p> <br />

                    <div className="panel panel-default well">
                      <div className="panel-body">
                        <form action="" className="form-horizontal track-event-form bv-form" data-goaltype="”General”" data-formname="”ContactUs”" method="post" id="contact-us-all" noValidate="novalidate">
                          <input name="elqSiteId" type="hidden" value="928" />
                          <input name="sFDCLastCampaignID" type="hidden" value="701400000012Lql" />
                          <input name="elqFormName" type="hidden" value="EMEAAllContactUsSubmissions" />
                          <input name="nexturl" type="hidden" value="" />
                          <input name="Partner" type="hidden" value="" />
                          <input name="language" type="hidden" value="en" />

                          <div className="form-group">
                            <div className="col-sm-6">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-user">&nbsp;</i>
                                </div>
                                <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter first name" name="C_FirstName" data-bv-field="C_FirstName" />
                              </div>
                              <small data-bv-validator="notEmpty" data-bv-validator-for="C_FirstName" className="help-block" style={{ display: "none" }}>Required</small></div>
                            <br />
                            <div className="col-sm-6">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-user">&nbsp;</i>
                                </div>
                                <input type="text" className="form-control" id="exampleInputLastName" placeholder="Enter last name" name="C_LastName" data-bv-field="C_LastName" /></div>
                              <small data-bv-validator="notEmpty" data-bv-validator-for="C_LastName" className="help-block" style={{ display: "none" }}>Required</small></div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-6">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-envelope">&nbsp;</i>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="C_EmailAddress" data-bv-field="C_EmailAddress" />
                              </div>
                              <small data-bv-validator="notEmpty" data-bv-validator-for="C_EmailAddress" className="help-block" style={{ display: "none" }}>Required</small></div>
                            <br />
                            <div className="col-sm-6">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-briefcase">&nbsp;</i>
                                </div>
                                <input type="text" className="form-control" id="exampleInputCompany" placeholder="Enter company" name="C_Company" />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-6">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-globe">&nbsp;</i>
                                </div>

                                <select data-placeholder="Choose country" className="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                  <option value="">--Select--</option>
                                  <option value="United States">United States</option>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">Bouvet Island</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">Burkina Faso</option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">Cayman Islands</option>
                                  <option value="Central African Republic">Central African Republic</option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">Christmas Island</option>
                                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, The Democratic Republic of the">Congo, The Democratic Republic of the</option>
                                  <option value="Cook Islands">Cook Islands</option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="CÙte d'Ivoire">Côte d'Ivoire</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">Dominican Republic</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">El Salvador</option>
                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                  <option value="Faroe Islands">Faroe Islands</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">French Guiana</option>
                                  <option value="French Polynesia">French Polynesia</option>
                                  <option value="French Southern Territories">French Southern Territories</option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                  <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">Isle of Man</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                  <option value="Korea, Republic of">Korea, Republic of</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                  <option value="Liechtenstein">Liechtenstein</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">Marshall Islands</option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                  <option value="Moldova, Republic of">Moldova, Republic of</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">Netherlands</option>
                                  <option value="Netherlands Antilles">Netherlands Antilles</option>
                                  <option value="New Caledonia">New Caledonia</option>
                                  <option value="New Zealand">New Zealand</option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">Norfolk Island</option>
                                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">Papua New Guinea</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">Philippines</option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">Puerto Rico</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">Russian Federation</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint BarthÈlemy">Saint Barthélemy</option>
                                  <option value="Saint Helena">Saint Helena</option>
                                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                  <option value="Saint Lucia">Saint Lucia</option>
                                  <option value="Saint Martin">Saint Martin</option>
                                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                  <option value="Saudi Arabia">Saudi Arabia</option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">Sierra Leone</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">Solomon Islands</option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">South Africa</option>
                                  <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                  <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">Timor-Leste</option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">Turkmenistan</option>
                                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">United Arab Emirates</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="United States Minor Outlying Island">United States Minor Outlying Island</option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">Virgin Islands, British</option>
                                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                                  <option value="Western Sahara">Western Sahara</option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                              </div>
                              <small data-bv-validator="callback" data-bv-validator-for="C_Country" className="help-block" style={{ display: "none" }}>Choose one</small></div>

                            <div className="col-sm-6">
                              <div className="input-group" style={{ display: "none" }}>
                                <div className="input-group-addon">
                                  <i className="fa fa-globe">&nbsp;</i>
                                </div>

                                <select data-placeholder="Choose state" className="C_State_Prov_Modal form-control" id="C_State_Prov" name="C_State_Prov">
                                  <option value="" defaultValue="selected">- Not applicable -</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="DC">District Of Columbia</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                  <option value="AB">Alberta</option>
                                  <option value="BC">British Columbia</option>
                                  <option value="MB">Manitoba</option>
                                  <option value="NB">New Brunswick</option>
                                  <option value="NL">Newfoundland and Labrador</option>
                                  <option value="NS">Nova Scotia</option>
                                  <option value="NT">Northwest Territories</option>
                                  <option value="NU">Nunavut</option>
                                  <option value="ON">Ontario</option>
                                  <option value="PE">Prince Edward Island</option>
                                  <option value="QC">Quebec</option>
                                  <option value="SK">Saskatchewan</option>
                                  <option value="YT">Yukon</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-12">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-phone">&nbsp;</i>
                                </div>
                                <input type="text" className="form-control" id="C_BusPhone" placeholder="Phone" name="C_BusPhone" />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-12">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-comment fa-2">&nbsp;</i>
                                </div>
                                <textarea className="form-control" name="Comments" id="Comments" rows="5" style={{ width: "99.9%" }} placeholder="Enter your message here"></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-sm-12">
                              <center><button id="contacts-submit" type="submit" className="btn btn-primary">Contact Us</button></center>
                            </div>
                          </div>
                          <input type="hidden" value="" /></form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact Us */}
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