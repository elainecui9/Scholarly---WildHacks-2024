import logo from "./Logo .png";
import Image from "next/image";
export default function Footer(){

    return (
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              className="w-48"
              src={logo}
              alt="Company name"
            />

            <h1>Coded By: Chris Heo, Hajo Wolfram, and Elaine Cui</h1>
          </div>
        </footer>
      </div>
    )
}
      