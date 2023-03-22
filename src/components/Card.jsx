import React from 'react';

export default function Card({ item }) {
   const { attributes: data } = item;
   const { title, media_url, topics, media_type } = data;

   const backgroundImageStyle = {
      backgroundImage: `url(${media_url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
   };
   const video = <video src={media_url} className="h-auto w-full" />;

   return (
      <div
         className="w-3/12 h-96  relative"
         style={media_type == 'photo' ? backgroundImageStyle : {}}
      >
         {media_type == 'video' && video}

         <div className='absolute bottom-5 left-5'>
            <p className="flex gap-2">
               {topics.map((topic) => (
                  <div>{topic.name}</div>
               ))}
            </p>
            <p>{title}</p>
         </div>
      </div>
   );
}
