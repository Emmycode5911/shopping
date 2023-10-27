
// // document.getElementById = 'root'
// // const myweb = 'https://api.github.com/users'
// // async function Gituser () {

// //     const res = await fetch (myweb)
// //     const data = await res.json()
// // console.log(data);
// // // let Gituser = data.map(git =>{
// // //     const card = document.createElement ('div')
// // //     const name = document.createElement ('p')
// // //     const img = document.createElement ('img')
// // //     name.innerHTML = git.login
// // //     img.setAttribute('src' )  
// // //     git.append(name, img)
    
// // //     return Gituser

// // // }) 
// // }
// // Gituser()
// // //  Gituser.forEach(git => { rootSection.append (card)
// // //     return card 
    
// // // //  });
// // // https://dummyjson.com/product


 let rootSession = document.getElementById ('root')

 fetch('https://dummyjson.com/products')
 .then (res => res.json())
 .then (data => {
  console.log(data );
const products = data.products.map(product => {
    const div = document.createElement  ('div')
    const star = document.createElement  ('div')
    const btnContainer = document.createElement  ('div')
    const name = document.createElement  ('p')
    const price = document.createElement  ('p')
    const img = document.createElement  ('img')
    const btn = document.createElement ('button')
    // const rating = document.createElement ('p')
   name.innerHTML = product.brand
//    rating.innerHTML = `Rating: ${product.rating}`
   price.innerHTML = `Price: $${product.price}`
   btn.innerHTML = 'Buy Now'
   name.classList.add ('p-1', 'm-1', 'bg-blue-200', 'text-gray-800', 'text-center', 'text-shadow-md')
   price.classList.add ('p-1', 'm-1', 'bg-red-200', 'text-gray-800', 'text-center', 'text-shadow-md',)
   btn.classList.add ('p-1', 'm-5', 'border-2', 'justify-center', 'hover:bg-blue-200',)
   btnContainer.classList.add ('justify-center', 'flex',)
   img.setAttribute ('src', product.images[0] )
   btnContainer.append(btn)
   
//    for (i = 1;  i < product.rating; i++ )
//    {
//     const img = document.createElement ('img')
//    img.setAttribute ('src', 'icon')
//    star.append(div)
// }

   div.append(name, img, price, btnContainer, div)
  div.classList.add ('w-40', 'mt-15', 'mb-15', 'shadow', 'h-30', 'm-0')

   return div
   
  
})
products.forEach (items =>{
    rootSession.append(items)
     
   rootSession.classList.add ('flex', 'justify-center', 'flex-wrap', 'gap-5')
   
})
}) .catch(error=>console.log(error))
