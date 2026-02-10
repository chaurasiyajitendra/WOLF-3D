
const Page3 = () => {

  const projectDetails = [
  { id: "box1", category: "web", color: "text-yellow-400", lines: ["Building a new kind of", "immersive experience for", "the famous music festival"] },
  { id: "box2", category: "strategy", color: "text-blue-400", lines: ["\"Enchanted Waters\" is an immersive", "and uplifting reflection on Chicago’s", "relationship with Lake Michigan"] },
  { id: "box3", category: "strategy", color: "text-blue-400", lines: ["Rethinking, redesigning and improving", "the website of the great & famous", "Museum of Science and Industry of Chicago"] },
  { id: "box4", category: "design", color: "text-[#FB2DBC]", lines: ["Creating a heart-moving immersive", "experience to educate people about", "the hell of cyber-bullying"] },
  { id: "box5", category: "design", color: "text-[#FC659E]", lines: ["Another KIKK Festival yearly revamp:", "The “Species and Beyond” edition"] },
  { id: "box6", category: "design", color: "text-[#5DB27B]", lines: ["Building an immersive website", "to celebrate the memory of the", "unforgettable John F. Kennedy"] },
  { id: "box7", category: "design", color: "text-[#867653]", lines: ["Imagining and designing an oniric", "universe to promote the upcoming", "season of a renown Belgian opera house"] }
];

  return (
    <div id="section-3" className=" flex text-white">
      <div className="z-10 px-20 w-full">
        <h1 className=" ml-56">Featured projects</h1>
        <div img-title="Tomorrowland" className= " ex flex  w-full items-start gap-16 mt-10">
          <p className=" z-10 opacity-25  uppercase">2020 - ongoing</p>
          <p  className=" text-7xl z-10 opacity-30 font-extralight">Tomorrowland</p>
        </div>
        <div img-title="Navy Pier" className="ex flex items-start gap-24 mt-10">
          <p className=" z-10 opacity-25 uppercase">2018 - today</p>
          <p  className=" text-7xl z-10 opacity-50   font-extralight">Navy Pier</p>
        </div>
        <div img-title="MSI Chicago" className="ex flex items-start gap-24  mt-10">
          <p className=" z-10 opacity-25 uppercase">2015 - today</p>
          <p  className=" text-7xl z-10 opacity-50 font-extralight">MSI Chicago</p>
        </div>
        <div img-title="This Way Louise's Phone" className="ex flex items-start gap-40 mt-10">
          <p className=" z-10 opacity-25 uppercase">2016</p>
          <p  className=" text-7xl z-10 opacity-50 font-extralight">This Way Louise's Phone</p>
        </div>
        <div img-title="Kikk Festival 2018" className="ex flex items-start gap-24  mt-10">
          <p className=" z-10 opacity-25 uppercase">2012 - today</p>
          <p  className=" text-7xl z-10 opacity-50 font-extralight">Kikk Festival 2018</p>
        </div>
        <div img-title="The Kennedy Center" className="ex flex items-start gap-40 mt-10">
          <p className=" z-10 opacity-25 uppercase">2017</p>
          <p  className=" text-7xl z-10 opacity-50 font-extralight">The Kennedy Center</p>
        </div>
        <div img-title="Royal Opera Of Wallonia" className=" ex flex items-start gap-20  mt-10">
          <p className=" z-10 opacity-25 uppercase">2016 - ongoing</p>
          <p  className=" text-7xl z-10 opacity-50 font-extralight">Royal Opera Of Wallonia</p>
        </div>
      </div>

      {projectDetails.map((box)=>(
        <div 
          key={box.id} 
          id={box.id} 
          className="overflow-hidden opacity-0 h-96 self-baseline-last z-50 text-end fixed top-[75%] right-10 px-2 w-96"
        >
        <p className={`mb-8 mt-10 uppercase ${box.color}`}>{box.category}</p>
    
        {box.lines.map((line, index) => (
        <p key={index} className="text-xl overflow-hidden w-full">
            {line}
        </p>
          ))}
        </div>
      ))}
      
    </div>
  )
}

export default Page3
