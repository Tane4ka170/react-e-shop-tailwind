import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";

const Footer = () => {
  const incentives = [
    {
      name: "Free shipping",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: "10-year warranty",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: "Exchanges",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ];

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
