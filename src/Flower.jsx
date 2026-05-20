export default function Flower(props){


return(

<>


 <div className="w-full  flex flex-col justify-center items-center gap-3 p-8">


   <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src={props.image } 
    alt="dog" />
   </div>

   <div className="w-full text-xl ">
    <span className="font-bold">Name:{props.name}</span>
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:{props.rating}
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Description:</span>{props.description}
    </div>

      <div className="w-full text-xl">
    <span className="font-bold">Age:</span>{props.age}
    </div>
  <div className="w-full flex gap-4">




  </div>

   </div>

</>

)    


}