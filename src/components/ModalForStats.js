// import React from 'react'
// import StatsPokemon from './StatsPokemon';

// const ModalForStats =  ({ isOpen, onClose, setIsModelOpen, contentComponent: ContentComponent ,info}) => {
//     const modalClasses = isOpen
//       ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
//       : "hidden";
//      console.log(isOpen);
     
//     return (
//       <div className={modalClasses}>
//         <div className="fixed inset-0 bg-black opacity-50"></div>
//         <div className="relative z-50 bg-white p-8 max-w-md mx-auto">
//           {ContentComponent && <ContentComponent setIsModelOpen={setIsModelOpen} info={info} />}
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 mt-4 mr-4  bg-black text-white"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };
  
// export default ModalForStats
// ModalForStats.js
import React from 'react';
import StatsPokemon from './StatsPokemon';

const ModalForStats = ({ isOpen, onClose, info }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 bg-white p-8 max-w-md mx-auto">
        <StatsPokemon info={info} />
        
      </div>
    </div>
  );
};

export default ModalForStats;

