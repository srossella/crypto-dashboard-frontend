
export default function Card({balanceByUser}) {
   
    return (
    <div key={balanceByUser.userId} className="m-2.5 w-52 transition-transform duration-1000" >
     
    <div  className=" max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl m-auto mb-5">
        <div className="m-0 bg-teal-900 flex flex-row justify-between ">
            <div className="text-white  ml-6 pt-4 text-xs italic ">
                User ID   
            </div>
            <div className="px-1 py-2">
                <div className="font-bold text-xl mb-1 text-white pl-3 mr-10">
                    {balanceByUser.userId}
                </div>
            </div>
        </div>
  
  <div className="px-5 pt-4 pb-2 bg-neutral-50	 ">
    <div className=" flex-row border-b-2 border-b-grey-800 bt-2 bg-opacity-25  mb-2 grid grid-cols-2 gap-1 pb-2">
        <div className=" px-3   text-lg font-bold text-gray-900 mr-2 mb-1">{balanceByUser.btc}</div>
        <div className="text-lg font-bold text-orange-500 px-3 mb-1 text-center">BTC </div>
        
    </div>
    <div className=" flex-row  border-b-2 border-b-grey-800 bg-opacity-25 mb-2 grid grid-cols-2 gap-1 pb-2">
        <div className="  px-3   text-lg font-bold text-gray-900 mr-2 mb-1">{balanceByUser.eth}</div>
        <div className="text-lg font-bold text-red-700 px-3 mb-1 text-center">ETH </div>
        
    </div>
    <div className=" flex-row  	 bg-opacity-25  mb-2 grid grid-cols-2 gap-1">
        <div className="  px-3   text-lg font-bold text-gray-900 mr-2 mb-1">{balanceByUser.dot}</div>
        <div className="text-lg font-bold text-cyan-700 px-3 mb-1 text-center">DOT </div>
    </div>
     </div>
    </div>
      </div>
    )
}