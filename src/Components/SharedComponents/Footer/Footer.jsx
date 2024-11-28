import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0E1725] p-5">
      <div className="flex flex-col ml-8 gap-5 md:ml-0 md:gap-0 md:flex-row justify-around text-white">
        <div className="w-32">
          <img src="footer-logo.png" alt="footer logo || Sijma" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">QUICK LINKS</h3>
          <Link className="text-lg font-medium">Home</Link>
          <Link className="text-lg font-medium">Sweets</Link>
          <Link className="text-lg font-medium">Fruits</Link>
          <Link className="text-lg font-medium">Vegetable</Link>
          <Link className="text-lg font-medium">Ritual</Link>
          <Link className="text-lg font-medium">Store</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">COMPANY</h3>
          <Link className="text-lg font-medium">About Us</Link>
          <Link className="text-lg font-medium">Contact Us</Link>
          <Link className="text-lg font-medium">Jobs</Link>
          <Link className="text-lg font-medium">Refund Policy</Link>
          <Link className="text-lg font-medium">Privacy Policy</Link>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold">FOLLOW US ON</h3>
          <Link className="text-lg font-medium">Facebook</Link>
          <Link className="text-lg font-medium">Twitter</Link>
          <Link className="text-lg font-medium">Instagram</Link>
          <Link className="text-lg font-medium">Youtube</Link>
        </div>
      </div>
      <div className="mb-5 mt-8">
        <p className="text-center font-bold text-lg text-white">&copy; SIJMA 2024</p>
      </div>
    </div>
  );
};

export default Footer;
