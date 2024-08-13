import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full h-[57px] flex items-center px-4 border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <img 
          src="/nota.png" 
          className="h-[29.7px] object-contain"
          alt="Logo" 
        />
        <span 
          className="text-[#455A64]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11.45px',
            fontWeight: 400,
            lineHeight: '13.86px',
            textAlign: 'left',
          }}
        >
          CoreNotes
        </span>
      </div>
      <div className="relative flex-grow mx-4 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]">
        <input 
          type="text" 
          className="w-full h-[28px] border border-[#D9D9D9] rounded-l-[3px] pl-8 pr-10 text-xs bg-white placeholder-[#9A9A9A] focus:outline-none"
          placeholder="Pesquisar notas" 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '10.89px',
            textAlign: 'left',
          }}
        />
        <img 
          src="/lupa.png" 
          alt="Lupa" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
        />
      </div>
      <div className="flex items-center ml-auto space-x-2">
        <button 
          type="button" 
          className="w-6 h-6 flex items-center justify-center"
          style={{
            color: '#51646E',
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
