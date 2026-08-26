import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../../constants/paths";
import { ProductDescription } from "./ProductDescription";

const { Meta } = Card;

export const ProductItem = ({ id, name, brand, image, price }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`${APP_PATHS.route.home}/${id}`);
  };

  const navigateToCart = () => {
    navigate(`${APP_PATHS.route.cart}`);
  };

  return (
    <Card
      hoverable
      variant="borderless"
      style={{ width: 280 }}
      cover={<img draggable={false} alt={name} src={image} />}
      onClick={handleProductClick}
    >
      <Meta
        title={name}
        description={
          <ProductDescription
            brand={brand}
            navigateToCart={navigateToCart}
            price={price}
          />
        }
      />
    </Card>
  );
};
