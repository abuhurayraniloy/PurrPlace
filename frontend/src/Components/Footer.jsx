import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-center">
        <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold">PurrPlace - Your Pet's Home Away From Home</p>
        <p className="text-sm mt-2 items-center">
            © {new Date().getFullYear()} PurrPlace. All rights reserved.
          </p>
        <div className='flex flex-row items-end justify-end '>  
          <p className="text-sm mt-2 ml-4">
            Contact us: <a href="mailto:support@purrplace.com" className="text-blue-400">support@purrplace.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
