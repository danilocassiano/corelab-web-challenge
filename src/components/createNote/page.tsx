import React, { useState } from 'react';

const CreateNote = () => {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div className="fixed inset-0 flex items-start justify-center p-4 md:items-start">
      <div className="bg-white border border-[#D9D9D9] rounded-[25px] max-w-[320px] w-full p-4 relative top-[65px] md:max-w-[500px] lg:max-w-[600px] md:top-[100px] lg:top-[80px] lg:rounded-none">
        <div className="flex flex-col gap-1">          
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Título"
              className="w-full h-[30px] border-none p-1 text-xs bg-white placeholder-[#9A9A9A] focus:outline-none md:text-sm md:h-[35px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14.2px',
                fontWeight: 700,
                lineHeight: '17.19px',
                textAlign: 'left',
              }}
            />            
            <img 
              src={isStarred ? "/star_yellow.png" : "/star.png"} 
              alt="Star" 
              className="w-5 h-5 cursor-pointer md:w-6 md:h-6" 
              onClick={() => setIsStarred(!isStarred)}
            />
          </div>        
          <div className="border-t border-[#D9D9D9] my-1 w-full"></div>         
          <textarea 
            placeholder="Criar nota..."
            className="w-full h-[40px] border-none p-1 text-xs bg-white placeholder-[#9A9A9A] resize-none focus:outline-none md:h-[50px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '15.73px',
              textAlign: 'left',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
