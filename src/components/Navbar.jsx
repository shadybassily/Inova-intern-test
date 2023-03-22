
const navbarItems = ["Home", "News", "Courses", "E-books", "Contact Us"]

export default function Navbar() {
   return (
      <div className="">
         {/* top */}
         <div className="flex justify-end p-2">Arabic</div>
         {/* middle */}
         <div>
            <h1>Header</h1>
         </div>
         {/* bottom */}
         <div className="flex justify-around items-center bg-gray p-1">
            <ul className="flex gap-10">
               {navbarItems.map((item) => (
                <li key={item} className="p-2 cursor-pointer">{item}</li>
               ))}
            </ul>
            <div>
                Cart
            </div>
         </div>
      </div>
   );
}
