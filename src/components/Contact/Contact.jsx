import "./Contact.scss";
import { Icon } from "@iconify/react";

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
            <Icon icon="mdi:gmail" className="icon__contact" />
            <ButtonMailto
              label="benjamin1tondase211@gmail.com"
              mailto="mailto:benjamin1tondase211@gmail.com"
            />
          </p>
          <p>
            <Icon icon="bxs:phone-call" className="icon__contact" />
            <ButtonMailto
              label="+243 89 263 26 11"
              mailto="tel:+243892632611"
            />
          </p>
          <p>
            <Icon icon="simple-icons:googlemaps" className="icon__contact" />
            <span>Camp1 35, Livulu, Lemba, Kinshasa</span>
          </p>
          <div className="contact__sociaux">
            <p>
              Rétrouvez-moi sur les réseaux sociaux, je répond plus rapidement
              aux messages et mails.
            </p>
            <p>
              <Icon icon="ant-design:facebook-filled" className="icon" />
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
