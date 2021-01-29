const FancyButton = ({
  onClick,
  value,
}) => {
  return (
    <div className="fancy-button">
      <button onClick={onClick} type="button">Click me!</button>
      Result: {value}
    </div>
  );
}

export default FancyButton;
