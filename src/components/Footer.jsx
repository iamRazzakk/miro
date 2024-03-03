import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="bg-[#02033B] md:flex gap-4 px-28 py-16">
                <div className="flex-1">
                    <h1 className="text-white font-bold text-2xl">Scan. Detect. Remove.</h1>
                    <div className="flex gap-4 text-2xl text-white">
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                    </div>
                    <div className="flex">
                        <h3>Privacy Policy</h3>
                        <h3>Terms of Service</h3>
                    </div>
                    <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p>Designed & developed by Bigger Picture</p>
                </div>
                <div className="flex-1">
                    <h1 className="font-bold text-2xl text-white">Miro.</h1>
                    <hr />
                    <h3 className="text-[#FFC247] font-bold">- iPhone</h3>
                    <h3 className="text-[#FFC247] font-bold">- Android</h3>
                    <h3 className="text-[#FFC247] font-bold">- Help</h3>
                    <h3 className="text-[#FFC247] font-bold">- About</h3>
                    <h3 className="text-[#FFC247] font-bold">- Insights</h3>
                </div>
                <div className="flex-1">
                    <div className="bg-[#FFC247] rounded-3xl px-8 py-4">
                        <h1 className="text-xl font-bold">Sign up to our newsletter</h1>
                        <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <input className="px-6 rounded-xl border-none" placeholder="enter your email" type="email" name="" id="" />
                        <input type="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;