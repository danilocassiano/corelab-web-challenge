import React, { useState, useRef, useCallback } from 'react';
import ColorPickerModal from '../../components/ColorPickerModal/page';

const PainelNote = () => {
  const [notes, setNotes] = useState([
    { id: 1, isStarred: true, color: '#FFFFFF', textColor: '#FFFFFF' },
    { id: 2, isStarred: false, color: '#FFFFFF', textColor: '#FFFFFF' },
    
  ]);

  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
  const colorButtonRef = useRef<HTMLImageElement>(null);

  const toggleColorModal = useCallback(() => {
    if (colorButtonRef.current) {
      const rect = colorButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
    }
    setIsColorModalOpen(prev => !prev);
  }, []);

  const handleColorSelect = (color: string) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.isStarred ? { ...note, color, textColor: color } : note
      )
    );
    setIsColorModalOpen(false);
  };

  // Ordena os cards colocando os favoritos no topo
  const sortedNotes = notes.sort((a, b) => Number(b.isStarred) - Number(a.isStarred));

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      
      {sortedNotes.map(note => (
        <div key={note.id}>
          {note.isStarred && (
            <div className="text-left text-[#455A64] mt-4 ml-6" style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, lineHeight: '14.52px' }}>
              Favoritas
            </div>
          )}
          <div
            className="bg-white border border-[#D9D9D9] rounded-[25px] max-w-[320px] w-full p-4 relative mt-[5px] lg:mt-[20px]"
            style={{ backgroundColor: note.color }}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Título"
                  className="w-full h-[30px] border-none p-1 text-xs focus:outline-none"
                  style={{
                    backgroundColor: note.textColor,
                    color: note.color,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14.2px',
                    fontWeight: 700,
                    lineHeight: '17.19px',
                    textAlign: 'left',
                  }}
                />
                <img
                  src={note.isStarred ? "/star_yellow.png" : "/star.png"}
                  alt="Star"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setNotes(prevNotes =>
                    prevNotes.map(n =>
                      n.id === note.id ? { ...n, isStarred: !n.isStarred } : n
                    )
                  )}
                />
              </div>
              <div className="border-t border-[#D9D9D9] my-1 w-full"></div>
              <textarea
                placeholder="Criar nota..."
                className="w-full h-[40px] border-none p-1 text-xs resize-none focus:outline-none"
                style={{
                  backgroundColor: note.textColor,
                  color: note.color,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '15.73px',
                  textAlign: 'left',
                }}
              />
            </div>
            <div className="flex justify-between items-center mt-[200px] lg:mt-[230px]">
              <div className="flex gap-2">
                <img src="/edit.png" alt="Edit" className="w-5 h-5 cursor-pointer" />
                <img
                  src="/color.png"
                  alt="Color"
                  className="w-5 h-5 cursor-pointer"
                  onClick={toggleColorModal}
                  ref={colorButtonRef}
                />
              </div>
              <img src="/x.png" alt="Close" className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
      {isColorModalOpen && modalPosition && (
        <div
          className="absolute"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            zIndex: 1000,
          }}
        >
          <ColorPickerModal
            onClose={toggleColorModal}
            onColorSelect={handleColorSelect}
            position={modalPosition}
          />
        </div>
      )}
    </div>
  );
};

export default PainelNote;
