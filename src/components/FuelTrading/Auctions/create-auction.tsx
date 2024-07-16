import { FaPlus } from "react-icons/fa";
import App from "../Watchlist/swiper-cards";

const CreateAuction = () => {
  return (
   <div className="flex sm:flex-row flex-col gap-5 items-end">
    <a href="#" className="border-4 border-white bg-[#023047] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.06),0px_0px_4px_0px_rgba(0,0,0,0.04)] rounded-3xl flex text-nowrap justify-center items-center sm:px-20 px-0 w-full h-[240px] mb-10">
     
      <div className="flex gap-3 items-center">
        <FaPlus/>
        <h3 className="text-xl font-bold">Create Auction</h3>
      </div>
    </a> 
    <div className="w-full"><App/></div>
    </div>
  )
}
export default CreateAuction;

