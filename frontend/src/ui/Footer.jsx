import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2024 E-Shop. All rights reserved</p>
        <img src={payment} alt="payments" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
