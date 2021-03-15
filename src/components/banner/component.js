import React from "react";
import logo from "img/Public-Enemy.jpg";

class Banner extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        <div id="banner">
          <div id="banner-left">
            <img src={logo} alt="logo Public enemy" width="25%" height="10%" />

            <div id="acronym">
              <h5>
                <b>PUBLI</b>postage pour la préparation de la <b>C</b>ollecte
                des
                <br />
                <b>EN</b>quêtes <b>E</b>ntreprises et <b>M</b>énages <b>Y</b>oo!
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
