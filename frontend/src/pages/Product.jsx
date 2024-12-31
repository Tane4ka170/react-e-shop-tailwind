import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _, { divide } from "lodash";
import { CiStar } from "react-icons/ci";
import { FaEye, FaRegWindowClose } from "react-icons/fa";
import { config } from "../../config";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import PriceTag from "../ui/PriceTag";
import FormattedPrice from "../ui/FormattedPrice";
import AddToCartBtn from "../ui/AddToCartBtn";
import ProductCard from "../ui/ProductCard";
import { productPayment } from "../assets/index";
import CategoryFilters from "../ui/CategoryFilters";

const Product = () => {
  const [productsData, setProductsData] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();
  const endpoint = id
    ? `${config?.baseUrl}/products/${id}`
    : `${config?.baseUrl}/products/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(endpoint);
        if (id) {
          setProductsData(data || {});
          setAllProducts([]);
        } else {
          setProductsData(null);
          setAllProducts(data || []);
        }
      } catch (error) {
        console.error("Failed to retrieve data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, endpoint]);

  useEffect(() => {
    if (productsData) {
      setImgUrl(productsData?.images?.[0] || "");
      setColor(productsData?.colors?.[0] || "");
    }
  }, [productsData]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {!!id && productsData && _.isEmpty(allProducts) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-start">
                <div>
                  {productsData?.images?.length > 0 ? (
                    productsData.images.map((item, index) => (
                      <img
                        src={item}
                        alt={`img-${index}`}
                        key={index}
                        className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                          imgUrl === item &&
                          "border border-gray-500 rounded-sm opacity-100"
                        }`}
                        onClick={() => setImgUrl(item)}
                      />
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
                <div>
                  <img src={imgUrl || "/placeholder.png"} alt="mainImage" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">
                  {productsData?.name || "Product Name"}
                </h2>
                <div className="flex items-center justify-between">
                  <PriceTag
                    regularPrice={productsData?.regularPrice || 0}
                    discountedPrice={productsData?.discountedPrice || 0}
                    className="text-xl"
                  />
                  <div className="flex items-center gap-1">
                    <div className="text-base text-lightText flex items-center">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <CiStar key={index} />
                        ))}
                    </div>
                    <p className="text-base font-semibold">{`(${
                      productsData?.reviews || 0
                    } reviews)`}</p>
                  </div>
                </div>
                {/* Other Product Details */}
                <AddToCartBtn
                  product={productsData}
                  title="Buy now"
                  className="bg-black/80 py-3 text-base text-gray-200 hover:scale-100 hover:text-white duration-200"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-10">
              <CategoryFilters id={id} />
              <div>
                <p className="text-4xl font-semibold mb-5 text-center">
                  Products Collection
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {allProducts?.length > 0 ? (
                    allProducts.map((item) => (
                      <ProductCard item={item} key={item?._id} />
                    ))
                  ) : (
                    <p>No products available</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Product;
