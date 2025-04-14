// {
//   "category" :"675679a51664bf46cbef2cc0" ,
//   "brand":"67567a56e48bdf16dccb447c",
//   "minPrice":"10000000"
// }

export const createFilter = (paramsObject: Record<string, string>): boolean => {
  //["675679a51664bf46cbef2cc0" , "67567a56e48bdf16dccb447c" , "1000000"]
  const result = Object.values(paramsObject).some(
    (value) => value !== null && value !== undefined && value != ""
  );
  return result;
};
