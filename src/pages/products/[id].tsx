import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<"id">();
  return <div>{id}번 상품상세</div>;
};

export default ProductDetail;
