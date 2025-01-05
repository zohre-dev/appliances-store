//    {category:"یخچال" , limit:"4" , minPrice:"25000000" , page="" , search=""}
//  after  Object.entries ===>   [ ['category', 'یخچال'], ['limit', 4] ]
// after map ===>  ['fgdjhdhf#hshdf=yyf45jxvh' , 'hdgshd=hfhs']
//after join  ===>'fgdjhdhf#hshdf=yyf45jxvh&hdgshd=hfhs'

const createParams = (paramsObject: { [key: string]: any }) => {
  return Object.entries(paramsObject)
    .filter(
      ([key, value]) => value !== undefined && value !== null && value !== ""
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export { createParams };
