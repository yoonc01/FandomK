import React from 'react';
import checkIcon from '@/assets/images/check.png';

const CheckedIdolCard = ({
  children,
  idol,
  isSelectable = true,
  isSelected = false,
  sizeClass = 'w-[98px] h-[98px] tablet:w-[128px] tablet:h-[128px]',
  onClick,
}) => {
  const defaultImage = 'https://link24.kr/9iFIhh0';

  return (
    <div className="p-1 flex flex-col items-center relative">
      <div
        className={`relative ${sizeClass} p-[2px] flex items-center justify-center rounded-full 
        ${isSelectable ? 'cursor-pointer' : 'cursor-default'} transition-all`}
        onClick={isSelectable ? () => onClick(idol.id) : undefined}
      >
        {children}
        <div className="absolute inset-0 rounded-full border-[1.3px] border-coralRed z-10"></div>

        <div className="absolute inset-0 m-1.5 rounded-full overflow-hidden">
          <img
            src={idol.profilePicture || defaultImage}
            alt={idol.name}
            className="w-full h-full object-cover"
          />
        </div>

        {isSelected && isSelectable && (
          <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-coralRed to-pinkPunch opacity-50 z-20" />
            <img
              src={checkIcon}
              alt="check"
              className="absolute w-[40%] h-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            />
          </>
        )}
      </div>

      <div className="mt-1 text-center">
        <p className="text-white text-mobile font-bold">{idol.name}</p>
        <p className="text-white/70 text-xs">{idol.group || '그룹 없음'}</p>
      </div>
    </div>
  );
};

export default CheckedIdolCard;
