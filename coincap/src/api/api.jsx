import React from "react";
import axios from "axios";
let rootUrl = "https://rest.coincap.io/v3/assets";
let apiKey = "f24c8886fb756d30b12338f77c3f05b70415c877041fe94f821c71702cfbba6b";
//let config = https://rest.coincap.io/v3/assets/?apiKey=

export async function makeApiCall(){
   let data = await axios.get(`${rootUrl}/?apiKey=${apiKey}`);
  //  console.log(data);
   return data;
}

