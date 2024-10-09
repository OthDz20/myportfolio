const Menu  = () => {
return(
    <div className="fixed z-50 left-1/2 transform -translate-x-1/2 -mt-24 -translate-y-1/2 flex justify-center mx-auto bg-black text-white w-[700px] border-white border-2 rounded-full">
        <ul className="flex justify-center">
            <li className="p-7 "><a href="#">Navigation</a></li>
            <li className="m-7"><a href="#">Social Media</a></li>
            <li className="m-7"><a href="#">Mode</a></li>
        </ul>
    </div>
);
}

export default Menu;