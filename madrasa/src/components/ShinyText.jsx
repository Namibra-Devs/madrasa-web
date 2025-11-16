const ShinyText = ({ text, disabled = false, speed = 2.5, className = "" }) => {
  return (
    <span
      className={`dm-shiny-wrapper ${disabled ? "no-shine" : ""} ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
