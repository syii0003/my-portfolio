import React from "react";
import PropTypes from "prop-types";

const Card = ({
  backgroundStyle,
  image,
  imageTitle,
  title,
  labels,
  children,
  style,
}) => {
  return (
    <div className="card card-scale" style={style}>
      <div className="card__side card__side--front">
        <div className="card__picture" style={backgroundStyle}>
          <span className="center__image"></span>
          <img src={image} alt="my site" className="card__picture--img" />
        </div>
        {/* <h4 className="card__heading">
          <span className="card__heading-span">{imageTitle}</span>
        </h4> */}

        <div className="card__info">
          <div className="card__info__title">{title}</div>
          <div className="card__info__tech">
            {labels.map((label, index) => (
              <p
                className="card__info__tech--label"
                key={index}
                style={{ backgroundColor: label.color }}
              >
                {label.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="card__side card__side--back" style={backgroundStyle}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  image: PropTypes.string,
  imageTitle: PropTypes.string,
  title: PropTypes.string,
  labels: PropTypes.array,
  style: PropTypes.object,
};

Card.defaultProps = {
  children: "",
  image: "",
  imageTitle: "",
  title: "",
  labels: [],
  style: {},
};

export default Card;
