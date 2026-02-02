import { LiaFlagUsaSolid } from "react-icons/lia";
const Page5 = () => {
  return (
    <div  className=' mt-20 relative '>
      <div id="section-5" className=" relative h-84 w-full px-72 bg-black opacity-35">
        <h1 className="text-white flex flex-col text-end z-50 relative text-2xl font-medium capitalize"><span>we</span><span>make</span><span>good</span><span>shit</span></h1>
        <div className="flex items-center mt-8 text-white">
          <div className=" flex items-center justify-between text-2xl w-[55%]">
            <p>Chicago <span className=" text-red-900">.</span></p>
            <p>Amsterdam <span className=" text-red-900">.</span></p>
            <p>Paris <span className=" text-red-900">.</span></p>
          </div>
          <p className="text-end w-[45%]">Fb /Ins /Dri /Tw</p>
        </div>
        <div id="last" className="w-full h-[2px] bg-gray-500 mt-20"></div>
        <div className="text-white text-xs mt-4 flex items-center justify-between">
          <p className="flex gap-4"><span>We`d love to hear from you</span> <span>---</span>  <span>biz@dogstudio.be</span></p>
          <p> Subscribe to our newsletter</p>
          <p className="flex items-center gap-2">Language:English <span className="text-xl">< LiaFlagUsaSolid /></span></p>
        </div>
      </div>
    </div>
  )
}

export default Page5
