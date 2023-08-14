import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto max-w-screen-xl mt-10 footer  bg-base-200 text-base-content pb-10">
            <div>
            <span><img className="w-14 me-2 inline" src="https://i.ibb.co/wCKTC4F/image-removebg-preview.png" alt="" /></span>
            <Link to={'/'} className="normal-case font-semibold text-2xl">Musi<span className="text-green-600">Head</span></Link>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};
export default Footer;