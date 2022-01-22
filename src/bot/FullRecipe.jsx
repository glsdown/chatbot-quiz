// new file called DogPicture.jsx
import React from "react";

const FullRecipe = ({ showIngredients = true, showMethod = true }) => {
  return (
    <div style={{ textAlign: "left" }}>
      {/* Ingredients */}
      {showIngredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            <li>85g plain flour</li>
            <li>2tbsp cocoa powder</li>
            <li>170g milk chocolate</li>
            <li>113g butter</li>
            <li>2 eggs</li>
            <li>140g caster sugar</li>
            <li>1tsp vanilla extract</li>
            <li>100g white chocolate chunks</li>
            <li>100g Terry's chocolate orange chunks</li>
          </ul>
        </div>
      )}
      {/* Method */}
      {showMethod && (
        <div>
          {" "}
          <h3>Method</h3>
          <ol>
            <li>
              Preheat the oven to 180C/350F. Grease and line a 20cmx20cm tin.
            </li>
            <li>
              Melt the butter and chocolate together over a water bath. Keep on
              a low heat once boiling. Stir constantly and watch the chocolate
              carefully to make sure it doesn't burn. Take the chocolate off the
              heat.
            </li>
            <li>Beat in the eggs and vanilla extract, then the sugar.</li>
            <li>
              Sift in the flour and cocoa powder. Fold it into the mixture until
              just combined.
            </li>
            <li>
              Add the chocolate chunks so they are mixed through - I tend to
              have larger chunks ie just break the white chocolate at the
              “seams”. Don't overmix though.
            </li>
            <li>
              Pour into a lined tin lined with grease-proof paper (make sure
              paper rises up a little higher than the sides). Make sure it's
              evenly spread in the tin.
            </li>
            <li>
              Bake for 20-25 minutes. I like my brownies still a little gooey so
              I take them out just before they look completely cooked - best
              test is when you shake the tin they (just about) don't wobble.
            </li>
            <li>
              Cut into squares and let the brownies cool in the tin completely.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default FullRecipe;
