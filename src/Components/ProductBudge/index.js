function ProductBudge(props) {
  // console.log(className);
  return (
    <span className="product-budge" style={props.additionalStyles}>
      {props.content}
    </span>
  );
}

export default ProductBudge;
