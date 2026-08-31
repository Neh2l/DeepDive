function ProductCard(props) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="product-content">

        <p className="product-category">
          {props.category}
        </p>

        <h3>{props.title}</h3>

        <p className="product-description">
          {props.description}
        </p>

        <div className="product-bottom">

          <span className="product-price">
            {props.price}
          </span>

          <button className="details-button">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;