import items from "./items"
interface Props{
    animation:string,
    position:string,
    top:string,
}

const Scroller = ({animation,position,top}:Props) => {
  return (
        <div className={`flex gap-5 p-5 ${animation} whitespace-nowrap ${position} ${top}`}>
        {
            items.map((data)=>(
                <div className="flex gap-5 ">
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-1 items-center">
                            <h3 className="font-bold">{data.name}</h3>
                            <h3 className="font-bold text-sm text-[#0077B6] bg-[#F2F2F2] p-1 rounded-md">{data.percent}</h3>
                        </div>
                        <div className={`text-sm font-bold ${data.avail==='yes' ? 'text-[#19B200]' : 'text-[#FF3333]'}`}>{data.price}</div>
                    </div>
                    <div className="border border-black"></div>
                </div>
            ))
        }
        </div>
  )
}

export default Scroller;
