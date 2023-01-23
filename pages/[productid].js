import { Fragment } from "react";
import fs from "fs";
import path from "path";

function ProductDetailPage() {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productid: "p1" } },
      { params: { productid: "p2" } },
      { params: { productid: "p3" } },
    ],
    fallback: false
  };
}

export default ProductDetailPage;
