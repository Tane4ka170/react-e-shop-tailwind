import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _, { divide } from "lodash";
import { config } from "../../config";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";

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
          setProductsData(data);
          setAllProducts([]);
        } else {
          setProductsData(data);
          setAllProducts(null);
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
      setImgUrl(productsData?.images[0]);
      setColor(productsData?.colors[0]);
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
                  {productsData?.images?.map((item, index) => (
                    <img
                      src={item}
                      alt="img"
                      key={index}
                      className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                        imgUrl === item &&
                        "border border-gray-500 rounded-sm opacity-100"
                      }`}
                      onClick={() => setImgUrl(item)}
                    />
                  ))}
                </div>
                <div>
                  <img src={imgUrl} alt="mainImage" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{productsData?.name}</h2>
                <div>
                  <PriceTag />
                </div>
              </div>
            </div>
          ) : (
            <div>All Products</div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Product;
