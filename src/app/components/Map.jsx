import { WidthWrapper } from "./WidthWrapper";

export const Map = () => {
  return (
    <WidthWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5876069321!2d-0.4312243372487207!3d51.52817981574554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1726862858224!5m2!1spl!2spl"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </WidthWrapper>
  );
};
