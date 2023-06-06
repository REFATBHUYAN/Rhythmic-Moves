import React from "react";
// import logo from "../../assets/title2.png";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col justify-between p-10 bg-green-900 text-white ">
        <div className="footer">
          {/* <div>
            <img src={logo} alt="" />
            <p className="font-bold text-xl">
              JUNGLE JUMBOREE
              <br />
              Providing reliable toy since 2016
            </p>
          </div> */}
          <div className=" items-center gap-2 justify-center">
            {/* <img className="w-14 pb-2 rounded-md" src={logo} alt="" /> */}
            <h1 className="text-3xl">
              <span className="text-5xl">S</span>ummer
              <span className="text-5xl">C</span>amp
            </h1>
            <p className="font-bold text-xl"> Providing reliable toy since 2016</p>
          </div>
          <div>
            <span className="footer-title font-bold text-2xl">Services</span>
            <a className="link link-hover font-semibold text-xl">
              Free Delivery
            </a>
            <a className="link link-hover font-semibold text-xl">
              Custom Design
            </a>
            <a className="link link-hover font-semibold text-xl">Kid Toy</a>
            <a className="link link-hover font-semibold text-xl">
              Home Delivery
            </a>
          </div>
          <div>
            <span className="footer-title font-bold text-2xl">Company</span>
            <a className="link link-hover font-semibold text-xl">About us</a>
            <a className="link link-hover font-semibold text-xl">Contact</a>
            <a className="link link-hover font-semibold text-xl">Jobs</a>
            <a className="link link-hover font-semibold text-xl">Shop</a>
          </div>
          <div>
            <span className="footer-title font-bold text-2xl">
              Contact Social
            </span>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="link link-hover fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="link link-hover fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="link link-hover fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="font-bold text-base">
            Copyright © 2026 - All right reserved by dot dot Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;