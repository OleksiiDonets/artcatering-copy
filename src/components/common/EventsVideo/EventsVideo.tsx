import { VideoItem } from '@/types/common';
import { EventsVideoWrap, EventsVideoTitle, EventsVideoItems } from '@/components/common/EventsVideo/EventsVideo.style';
interface IEventsVideo {
  items: VideoItem[]; 
};

export const EventsVideo = ({items}: IEventsVideo) => {
  return (
    <EventsVideoWrap>
      <EventsVideoTitle>
        <h4>Відео з заходів, які ми організовували</h4>
      </EventsVideoTitle>
      <EventsVideoItems>
        {
          items.map((item, index) => (
            <div key={index}>
              <div>
                <iframe width="100%" height="315" src={item.videoLink}></iframe>
              </div>
              <span>{item.description}</span>
            </div>
          ))
        }
      </EventsVideoItems>
    </EventsVideoWrap>
  )
}