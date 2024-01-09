import React, { useState, useEffect } from "react";
import ProductProcessAPI from "../../Dataset/ProductProcessAPI";
import OperationCardDetail from "../../Dataset/OperationCardDetail";

const InputFields = () => {
  // Product process Data
  // finding objects key from objects and it will return those keys in array
  //   const objectKeyArrProduct = Object.keys(ProductProcessAPI);

  //   const objectValueArrProduct = Object.values(ProductProcessAPI);

  const filteredValues: any = Object.entries(ProductProcessAPI)
    .filter(([key, value]) => key.startsWith("show") && value === 1)
    .map(([key, value]) => key.replace("show_", ""));

  //   Mapping over to get value which start from show and then after remove that show
  //   const objectWithShowKey = objectKeyArrProduct.map((keyData: any) => {
  //     if (keyData?.startsWith("show")) {
  //       const filtered = keyData.replace("show_", "");
  //       return filtered;
  //     }
  //     return null;
  //   });

  //   Detail
  // finding objects key from objects and it will return those keys in array of detail
  const objectKeyArrDetail = Object.keys(OperationCardDetail);

  //   const commonData = objectWithShowKey.filter((data) => {
  //     return <p>{objectKeyArrDetail.includes(data)}</p>;
  //   });
  const commonData = filteredValues.filter((data: any) =>
    objectKeyArrDetail.includes(data)
  );

  return (
    <div>
      {/* {objectValueArrProduct.map((ele: any) => {
        return <div>{ele}</div>;
      })} */}
      {/* {filteredValues.map((ele: any) => {
        return <div>{ele}</div>;
      })} */}
      {commonData.length > 0 &&
        commonData.map((data: any, index: any) => {
          return (
            <div>
              <label>{data}</label>
              <input type="text" />
            </div>
          );
        })}
    </div>
  );
};

export default InputFields;
