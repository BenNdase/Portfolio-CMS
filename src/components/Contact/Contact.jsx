import "./Contact.scss";
import { Icon } from "@iconify/react";
import gmailIcon from '@iconify/icons-mdi/gmail';
import bxsPhone from '@iconify/icons-bx/bxs-phone';
import geoAltFill from '@iconify/icons-bi/geo-alt-fill';
import facebookFilled from "@iconify-icons/ant-design/facebook-filled";
import twitterSquareFilled from "@iconify-icons/ant-design/twitter-square-filled";
import linkedinFilled from "@iconify-icons/ant-design/linkedin-filled";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import ButtonMailto from "./Link";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <hr className="line-top" />
        <h2>Me contacter</h2>
      </div>
      <div className="contact__description">
        <div>
          <p>
            <Icon icon={gmailIcon} className="icon__contact" />
            <ButtonMailto
              label="benjamin1tondase211@gmail.com"
              mailto="mailto:benjamin1tondase211@gmail.com"
            />
          </p>
          <p>
            <Icon icon={bxsPhone} className="icon__contact" />
            <ButtonMailto
              label="+243 89 263 26 11"
              mailto="tel:+243892632611"
            />
          </p>
          <p>
            <Icon icon={geoAltFill} className="icon__contact" />
            <span>Camp1 35, Livulu, Lemba, Kinshasa</span>
          </p>
          <div>
            <p>
              Rétrouvez-moi sur les réseaux sociaux, je répond plus rapidement
              aux messages et mails.
            </p>
            <p>
              <Icon icon={facebookFilled} className="icon" />
              <Icon icon={twitterSquareFilled} className="icon" />
              <Icon icon={linkedinFilled} className="icon" />
              <Icon icon={instagramFilled} className="icon" />
            </p>
          </div>
        </div>

        <div className="contact__message">
            <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
