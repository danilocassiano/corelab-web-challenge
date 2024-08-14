import React from 'react';
import ReactDOM from 'react-dom';

interface ColorPickerModalProps {
  onClose: () => void;
  onColorSelect: (color: string) => void;
  position: { top: number; left: number };
}

const colors = [
  '#BAE2FF', '#B9FFDD', '#FFE8AC', '#FFCAB9', '#F99494', '#9DD6FF',
  '#ECA1FF', '#DAFF8B', '#FFA285', '#CDCDCD', '#979797', '#A99A7C'
];

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({ onClose, position, onColorSelect }) => {
  return ReactDOM.createPortal(
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
    >
      <div className="bg-white border border-[#D9D9D9] rounded-[9px] w-[320px] p-2 flex flex-col">
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-[36px] h-[36px] rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => onColorSelect(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ColorPickerModal;
