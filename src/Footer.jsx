
export default function Footer() {
  return (
    <div className="bg-[#02060C] p-10 text-[#FFFFFF99] flex justify-center gap-20 lg:pb-[150px] flex-col md:flex-row">
      <div >
        <ul>
          <li className="listhead flex gap-3 text-[25px] font-bold text-white"><svg
            width={21}
            height={32}
            viewBox="0 0 21 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_674_19294)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.3819 14.7977C20.5245 13.9563 20.3574 13.3121 19.9261 12.9756C19.2787 12.4711 18.3021 12.1959 15.9859 12.204C14.2724 12.2082 12.4327 12.2167 11.6469 12.2205C11.5739 12.2082 11.3093 12.1181 11.297 11.7938L11.2683 6.64781C11.2683 6.3236 11.5207 6.05694 11.8385 6.05694C12.1559 6.05694 12.412 6.31936 12.412 6.64358C12.412 6.64358 12.4285 9.43839 12.4327 10.4314C12.4327 10.5257 12.4897 10.7513 12.7011 10.8089C14.085 11.1822 21.0778 10.883 20.9639 9.57764C20.3536 4.16496 15.8884 -0.0164585 10.4829 4.87055e-05C8.78164 0.00385807 7.16965 0.426698 5.745 1.16952C2.33815 2.98744 -0.0755529 6.63977 0.00180748 10.8542C0.0546894 13.8374 1.98811 19.1396 3.16037 19.923C3.70173 20.2845 4.40996 20.1491 7.58886 20.1368C9.0298 20.1325 10.3732 20.1325 11.0324 20.1325C11.1016 20.1448 11.4599 20.2312 11.4637 20.5677L11.484 24.4782C11.484 24.8024 11.232 25.0691 10.9142 25.0691C10.5968 25.0691 10.3402 24.8109 10.3402 24.4824C10.3402 24.4824 10.3647 22.9108 10.3609 22.328C10.3609 22.1926 10.3689 21.9585 9.98235 21.7862C8.71622 21.2119 4.60532 21.5729 4.37737 22.2129C4.29191 22.4592 4.75185 23.4073 5.46418 24.6259C7.83331 28.4425 10.1571 31.4176 10.5318 31.8937C10.5563 31.9141 10.5766 31.9348 10.5968 31.9471C10.9104 31.5611 19.1078 22.2747 20.3819 14.7977Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_674_19294"
                x="-9.26002"
                y="-9.26002"
                width="39.4853"
                height="50.4673"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.63001" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_674_19294"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_674_19294"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
            Swiggy</li>
          <li className="listdata">© 2024 Bundl Technologies Pvt. Ltd</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <li className="text-white font-bold">Company</li>
          <li className="cursor-pointer hover:text-white">About</li>
          <li className="cursor-pointer hover:text-white">Careers</li>
          <li className="cursor-pointer hover:text-white">Team</li>
          <li className="cursor-pointer hover:text-white">Swiggy One</li>
          <li className="cursor-pointer hover:text-white">Swiggy Instamart</li>
          <li className="cursor-pointer hover:text-white">Swiggy Genie</li>
        </ul>

      </div>
      <div>
        <ul className="flex flex-col gap-3 mb-10">
          <li className="text-white font-bold">Contact us</li>
          <li className="cursor-pointer hover:text-white">Help & Support</li>
          <li className="cursor-pointer hover:text-white">Partner with us</li>
          <li className="cursor-pointer hover:text-white">Ride with us</li>

        </ul>
        <ul className="flex flex-col gap-3 ">
          <li className="text-white font-bold">Legal</li>
          <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
          <li className="cursor-pointer hover:text-white">Cookie Policy</li>
          <li className="cursor-pointer hover:text-white">Privacy Policy</li>
          <li className="cursor-pointer hover:text-white">Investor Relations</li>

        </ul>

      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <li className="text-white font-bold">We deliver to:</li>
          <li className="cursor-pointer hover:text-white">Bangalore</li>
          <li className="cursor-pointer hover:text-white">Gurgaon</li>
          <li className="cursor-pointer hover:text-white">Hyderabad</li>
          <li className="cursor-pointer hover:text-white">Delhi</li>
          <li className="cursor-pointer hover:text-white">Mumbai</li>
          <li className="cursor-pointer hover:text-white">Pune</li>
          <li className="cursor-pointer hover:text-white"><select name="" id="" className=" bg-transparent border border-[#807e7e] px-3 py-1 rounded-lg">
            <option value="">589  cities</option></select></li>
        </ul>

      </div>

    </div>
  )
}