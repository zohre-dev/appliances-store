import React from "react";

type HrefObject = {
  pathname: string;
  query?: Record<string, string | string[] | undefined>;
};

export interface IProps {
  href?: string | null | HrefObject;
  children: React.ReactNode;
  id?: string;
  classes?: string;
}

// const myHrefObject = {
//     pathname = "https:ww.appliances.com/products"
//     query : {
//         cost :"50,000" ,
//         brand:["Lg","Suny"],
//         color: "red"
//     }
// }

// <a href ={myHrefObject}>filter </a>
