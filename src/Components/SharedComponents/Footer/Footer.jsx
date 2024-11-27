import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around bg-gradient-to-r from-pink-500 from-10% via-sky-500 via-30% to-violet-500 to-90% p-5">
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
  );
};

export default Footer;
