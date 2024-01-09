import React, { useState, useEffect } from "react";
import ProductProcessAPI from "../../Dataset/ProductProcessAPI";
import OperationCardDetail from "../../Dataset/OperationCardDetail";

const InputFields = () => {
  const [productFieldData, setProductFieldData] = useState<any>([]);

  // Product process Data
  // finding objects key from objects and it will return those keys in array
  const objectKeyArrProduct = Object.keys(ProductProcessAPI);
  console.log(objectKeyArrProduct, "objectKeyArrProduct");

  const objectValueArrProduct = Object.values(ProductProcessAPI);
  console.log("objectValueArrProduct", objectValueArrProduct);

  //   Mapping over to get value which start from show and then after remove that show
  const objectWithShowKey = objectKeyArrProduct.map((keyData: any) => {
    if (keyData?.startsWith("show")) {
      const filtered = keyData.replace("show_", "");
      return filtered;
    }
    return null;
  });

  //   Detail
  // finding objects key from objects and it will return those keys in array of detail
  const objectKeyArrDetail = Object.keys(OperationCardDetail);

  const commonData = objectWithShowKey.filter((data) => {
    return <p>{objectKeyArrDetail.includes(data)}</p>;
  });

  return (
    <div>
      {/* {objectValueArrProduct.map((ele: any) => {
        return <div>{ele}</div>;
      })} */}

      {commonData.length > 0 &&
        commonData.map((data: any, index: any) => {
          return (
            <div>
              <label>{data}</label>
              {data?.length > 0 && <input type="text" />}
            </div>
          );
        })}
    </div>
  );
};

export default InputFields;
