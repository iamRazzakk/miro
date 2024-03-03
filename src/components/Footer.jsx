import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="lg:max-h-[680px] bg-[#02033B] lg:w-full  px-4 py-4 gap-8 lg:py-[96px] lg:px-[150px]">
            <div className="  lg:flex gap-6 ">
                <div className="flex-1 w-full ">
                    <h1 className="lg:mt-6 mt-3 text-white font-bold text-2xl">Scan. Detect. Remove.</h1>
                    <div className="lg:mt-6 mt-3 flex gap-4 text-2xl text-white">
                        <FaFacebook className="cursor-pointer"></FaFacebook>
                        <FaTwitter className="cursor-pointer"></FaTwitter>
                        <FaYoutube className="cursor-pointer"></FaYoutube>
                    </div>
                    <div className="lg:mt-6 mt-3 flex text-white gap-3 lg:gap-6">
                        <h3>Privacy Policy</h3>
                        <h3>Terms of Service</h3>
                    </div>
                    <p className="lg:mt-6 mt-3 text-white">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p className="lg:mt-6 mt-3 text-white">Designed & developed by Bigger Picture</p>
                </div>
                <div className="flex-1 py-6">
                    <h1 className="font-bold text-2xl text-white">Miro.</h1>
                    <hr />
                    <div className="lg:mt-10 mt-5">
                        <h3 className="text-[#FFC247] lg:mt-6 mt-3 font-bold">- iPhone</h3>
                        <h3 className="text-[#FFC247] lg:mt-6 mt-3 font-bold">- Android</h3>
                        <h3 className="text-[#FFC247] lg:mt-6 mt-3 font-bold">- Help</h3>
                        <h3 className="text-[#FFC247] lg:mt-6 mt-3 font-bold">- About</h3>
                        <h3 className="text-[#FFC247] lg:mt-6 mt-3 font-bold">- Insights</h3>
                    </div>
                </div>
                <div className="flex-1 py-6">
                    <div className="bg-[#FFC247] rounded-3xl px-6 py-4">
                        <h1 className="text-xl  font-bold ">Sign up to our newsletter</h1>
                        <p className="lg:mt-6 mt-3">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <div className="flex  items-center justify-center">
                            <input className="lg:mt-6 mt-3 px-6 py-2 rounded-l-xl border-none" placeholder="enter your email" type="email" name="" id="" />
                            <input className="text-white cursor-pointer lg:mt-6 mt-3 px-4 py-2 rounded-r-full bg-[#02033B]" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="lg:w-[700px] md:w-full text-white">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</h1>
        </div>
    );
};

export default Footer;