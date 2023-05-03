interface IEventsVideo {
  items: VideoItem[]; 
}
export const EventsVideo = ({items}: IEventsVideo) => {
  return (
    <div className="bg-pink pt-20 pb-32">
      <div className="font-playfair text-[46px] font-black text-center mb-12 md:mb-16">
        <h4>Відео з заходів, які ми організовували</h4>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 items-center container mx-auto">
        {
          items.map((item, index) => (
            <div key={index} className="flex flex-col text-left max-w-xl w-full">
              <div className="h-[315px] mb-10">
                <iframe width="100%" height="315" src={item.videoLink}></iframe>
              </div>
              <span className="text-lg font-light font-playfair">{item.description}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}