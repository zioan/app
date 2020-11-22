import React, { useState } from "react";
import Options from "./options";

import "./style.css";

export default function Product({ name, image, sizes, styles, colors }) {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className="product">
      <div className="name">{name}</div>
      <Options
        label="Availabel sizes"
        options={sizes}
        selectedOption={selectedSize}
        setSelectedOption={setSelectedSize}
      />
      <Options
        label="Availabel Styles"
        options={styles}
        selectedOption={selectedStyle}
        setSelectedOption={setSelectedStyle}
      />
      <Options
        label="Availabel in"
        options={colors}
        selectedOption={selectedColor}
        setSelectedOption={setSelectedColor}
      />
      <div className="price">
        Price: ${(selectedStyle.price * selectedSize.price).toFixed(2)}
      </div>
      <img width={400} src={selectedColor.image} alt={`Image for ${name}`} />
    </div>
  );
}
