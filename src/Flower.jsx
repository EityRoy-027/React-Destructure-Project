export default function Flower({data}){

const{image,name,rating,description,age}=data;

return(

<>


 <div className="w-full  flex flex-col justify-center items-center gap-3 p-8">


   <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src={image } 
    alt="dog" />
   </div>

   <div className="w-full text-xl ">
    <span className="font-bold">Name:{name}</span>
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:{rating}
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Description:</span>{description}
    </div>

      <div className="w-full text-xl">
    <span className="font-bold">Age:</span>{age}
    </div>
  <div className="w-full flex gap-4">




  </div>

   </div>

</>

)    


}