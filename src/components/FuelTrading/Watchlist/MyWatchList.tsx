import CreateAuction from '../Auctions/create-auction';
import App from './swiper-cards';

interface Props{
  name:string,
  isNew:boolean,
}

const MyWatchList = ({name,isNew}:Props) => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col'>
        <div className='w-full flex justify-between'>
          <h3 className='font-bold text-xl'>{name}</h3>
          <p className='text-[#0077B6] font-bold'>View all</p>
        </div>
        <div>
        {
          isNew==false?<App/>:<CreateAuction/> 
        }
        </div>
        </div>
      </div>
  )
}


export default MyWatchList
