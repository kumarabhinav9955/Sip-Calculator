import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              SIP Calculator
            </span>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-black sm:text-center">
            © 2025 SIP Calculator. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
