import PropTypes from "prop-types";

const Avatar = ({ src, alt, size, isRounded }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: isRounded ? "50%" : "0",
        objectFit: "cover",
      }}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  isRounded: PropTypes.bool,
};

Avatar.defaultProps = {
  alt: "Avatar",
  size: 50,
  isRounded: true,
};

export default Avatar;
