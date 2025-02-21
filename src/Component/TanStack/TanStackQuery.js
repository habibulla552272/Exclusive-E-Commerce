export const tanStackData= async ()=>{
    const response= await fetch('https://fakestoreapi.in/api/products?limit=150');
    const data= await response.json();
    return data;
 
}
