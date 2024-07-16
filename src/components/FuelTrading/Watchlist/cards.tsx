import { FaCheck } from "react-icons/fa"

const Cards=()=>{
   
    const days= Math.floor(Math.random() * 100) + 1;
   
    return(
        <div className="py-10">
        <div className='bg-[#FFFFFF] p-5 rounded-3xl relative z-30 sm:w-[336px] w-full'>
                    <div className='flex gap-3 bg-[#F2F2F2] py-2 px-4 justify-center items-center'>
                        <div>
                            <img src="/images/watchlist/rightline.svg" alt="" />
                        </div>
                        <p className='font-bold text-sm rounded-lg'>AUCTION</p>
                        <div>
                            <img src="/images/watchlist/leftline.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between py-2 items-center'>
                        <div className='flex flex-col gap-1'>                           
                            <h3 className='font-bold'>Methanol</h3>
                            <div className='flex sm:flex-row flex-col gap-1'>
                                <div className='bg-[#F2994A] px-1 font-bold rounded-md text-center'>SPOT</div>
                                <div className='text-[#0077B6] font-bold bg-[#F2F2F2] rounded-md px-1'>99.9999%</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 bg-[#F2F2F2] p-5 items-center rounded-xl'>
                            <div className='text-xs'>QTY (KG)</div>
                            <p className='font-bold'>240</p>
                        </div>
                    </div>
                    <div className='flex'>c
                        <div className='flex gap-2 flex-col items-center border-r border-r-gray-300 py-1 px-3 flex-1'>
                            <h4 className='text-sm '>STARTING PRICE</h4>
                            <p className='font-bold'>$2000.00</p>
                        </div>
                        <div className='flex gap-2 flex-col items-center justify-center py-1 px-3 flex-1'>
                            <h4 className='text-sm '>HIGHEST BID</h4>
                            <p className='font-bold'>3029.00</p>
                        </div>
                    </div>
                    <div className="flex absolute z-50 -top-6 right-6 gap-2 bg-transparent items-center">
                        <div className={`${(days>10)?"bg-white text-black":"bg-[#FF3333] text-white"} px-5 py-2 text-xs font-bold rounded-lg`}>{days} DAYS LEFT</div>
                        <div className="bg-[#333333] text-white px-2 py-2 text-lg rounded-lg">
                            <FaCheck />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Cards;