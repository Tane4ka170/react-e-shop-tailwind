import React from "react";
import Container from "./Container";

const FooterTop = () => {
  const incentives = [
    {
      name: "24/7 Support",
      imageSrc:
        "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/support_agent/default/48px.svg",
      description: "We're always here to help, even at 3 AM.",
    },
    {
      name: "Sustainable Materials",
      imageSrc:
        "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/eco/default/48px.svg",
      description: "Our products are made with the planet in mind.",
    },
    {
      name: "Customizable Options",
      imageSrc:
        "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/build/default/48px.svg",
      description: "Make it yours! Customize everything.",
    },
  ];
  return (
    <Container className="py-0">
      <div className="rounded-2xl bg-[#f9a09b] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flex">
                  <img
                    src={item?.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>

              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
