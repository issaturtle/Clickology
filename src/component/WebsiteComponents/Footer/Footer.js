import React from "react";
import "../../css/Footer.css";
import img from "../../img/withoutsticker.PNG";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <>
      <div className="footer">
        <table className="footer__table">
          <tr className="footer__table__statement">
            <td>
              <ul>
                <li className="footer__table__logo">
                  <img src={img} alt="" />
                </li>
                <li className="footer__table__company">
                  <strong>Clickology</strong>
                </li>
              </ul>
            </td>

            <td className="footer__table__socialmedia">
              <td>
                <strong className="footer__table__company">
                  Join the growing community today!
                </strong>
              </td>
              <ul>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      {/* <div className="divider"></div> */}
    </>
  );
}

export default Footer;
