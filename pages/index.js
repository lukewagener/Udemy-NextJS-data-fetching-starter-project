import fs from "fs";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

//server-side code
//provides props for the HomePage component
//always return a props 'key' with an object of data
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  await fs.readFileSync();

  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
