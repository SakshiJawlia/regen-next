import items from "./items"
import Scroller from "./Scroller"

const InifiteScroll = () => {

  const HoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
  };

  return (
    <div className="bg-white shadow-[0px_4px_8px_0px_rgba(2,48,71,0.08),0px_0px_4px_0px_rgba(2,48,71,0.06)] rounded-lg w-full flex relative overflow-x-hidden z-20  hover:cursor-pointer" onMouseOver={HoverHandler}>
        <Scroller position=""
                    animation="animate-marquee"
                    top=""/>
        <Scroller position="absolute"
                    animation="animate-marquee2"
                    top="0"/>  
    </div>

  )
}

export default InifiteScroll



