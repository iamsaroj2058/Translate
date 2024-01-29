// import React from 'react';

// const MenuItem = ({ title, description, price }) => {
//   return (
//     <div>
//       <h1>{title} &nbsp; &nbsp; &nbsp; Rs.{price}</h1>
//       <p>{description}</p>
//     </div>
//   );
// };
// const Menu = () => {
//   return (
//     <div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     <div className='flex justify-center'>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
//     <div className="mx-10 my-5">
//       <MenuItem title="Croissant With Egg and Cheese" description="(Melted cheese & egg on fresh croissant)" price={520} />
//     </div>
    
//     </div>
//     </div>  
    
//   );
// };

// export default Menu;


function Menu({data}){
  return(
    <div className="flex justify-center">
<div className="  grid grid-cols-2 gap-x-10 gap-y-4 " >
        {data.map((info, ind) => (
          <div className="box-border h-24 w-96 p-4 border-2" key={ind}>

        
           <div className="flex ">
           {info.title}
            &nbsp; &nbsp;&nbsp;&nbsp;
            {info.price}
           </div>
            
            
          <div>
            {info.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;