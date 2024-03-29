import React from 'react';

function Playlistnames({ playlist_name }) {
  return (
    <div className='flex items-center ml-4 md:ml-8'>
      <button className="focus:outline-none flex">
        <div className="logo size-9 md:mb-2">
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO3ZO2sVQRjG8Y0EG42NoAjRQqOVeEGsFEGMVnaCVbDxA9hZeGkUbMRCC/FWWYgmVt4aQ0QRv4HGQvBSiBEVEi+IiD8ZMwcXOZfdPTnnbGT/7czsvM++z7y7M5MkFRUVbYPduIzn+KLzfMEkLmHXXAhYh4d6zwMMFRWxA5/ig97hCDZiUdtvqPXci7AJR+PcgY/YXiQTNRHXsbhjUbeOZQA3UmKyZyZlpyCir6ORZounD6Mxpok8C7tmp55lokFmpmJsrQtArE6BI0nJwLEY28UsnUOJDWzoUDDLsAeHcQ1P8Q0nMowNBSAwmWWimdi5LVthQSwa+3EK9/C2SYn9ntFegZksAfyhYPDLcQZPmnw4p/EI53AQW/LMKWvfNoWEANO8wS2cxD6sqVcFyyjkZ62qYGmOcaUT8ocWffqxHiM4jfulF2J2cYY1cABn8RhfNSApmxCM4QV+1Yn3V2wbi/9Se8sspMaP+J24ikMYrrd2yixkJK6D/v92sdejEtKMKiNJZa3kv1gjWDnvhWAQd+eVELO/+GH3+VIDkjbnKNYxh0WwosGm6j2ulEaIFhbBzdg0EXaN/7QtjG0/uyqkiEVS2+eVddq2xrZXXRNS1CJxexsYrNN2O7ad76aQQhZJjbsTbbgwZqImIghd1U0hhSyCtfG4sx5BxHAWEXMppLBFwpltzMx03Nu/Dn2zZqJT1mrbIkWRQ0jDA7q5tEgR5Dyga3pkOlcWKYK/R6bPsnQO112Bo0nJwPEY24UsncPhWu1aYSApCVgSv1eBnVkHhTs78aaoLBc9YzGm8TwDh1KLerSXmTGbiZqID1id9wHbU2Km4iXL5m7cYmFxnOt4yk5BxLaiDxyKvyO9Zjx3JpoUgIuh7OFzFwL/HE8oL2Re2BUVFUkzfgNbK0nYVxaU/AAAAABJRU5ErkJggg=="
            alt=""
            className="playlist-icon w-10 h-10 mr-2 hover:rotate-180 transition-transform duration-300"
          />
        </div>
        <div className="text-white ml-2 md:mb-2">
          <strong className="playlist-name text-lg hover:text-blue-500 transition-color duration-300">{playlist_name}</strong>
        </div>
      </button>
    </div>
  );
}

export default Playlistnames;
