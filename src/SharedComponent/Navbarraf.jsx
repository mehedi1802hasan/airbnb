import React from 'react';

const Navbarraf = () => {
    return (
       <div>
         <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      {/* logo */}
      <div className="flex">
      
          <div className=" justify-center items-center gap-3 ">
          <img className='w-10 h-10' src="https://i.ibb.co/JBtFs53/favicon.png" alt="" />
          <h4>airbnb</h4>
          </div>
         
   
      </div>
      {/* end logo */}
      
      {/* search bar */}
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1 py-1" type="button">
              <div className="block flex-grow flex-shrink overflow-hidden">Start your search</div>
              <div className="flex items-center justify-center relative h-8 w-8 rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '12px',
                    width: '12px',
                    stroke: 'currentcolor',
                    strokeWidth: '5.33333',
                    overflow: 'visible',
                  }}
                >
                  <g fill="none">
                    <path d="https//: google.com"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* end search bar */}
      
      {/* login */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
            </a>
            <div className="block relative">
              <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                <div className="flex items-center h-5">
                  <div className="_xpkakx">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}>
                      <path d="https//: google.com"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="block">
            <div className="inline relative">
              <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                <div className="pl-1">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}>
                    <g fill="none" fillRule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>
                
                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                    <path d="https//: google.com"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end login */}
    </nav>
       </div>
    );
};

export default Navbarraf;;