import { NavHashLink } from 'react-router-hash-link';

export default function Hero() {
   return (
      <div className="flex flex-col items-center p-20">
         <p className="w-8/12 text-center p-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
         </p>
         <NavHashLink className="border border-black p-2 border-gray" to="/#about" smooth>About</NavHashLink>
      </div>
   );
}
