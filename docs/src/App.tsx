"use client";
import { useState } from "react";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hayır",
      "Emin misin?",
      "Ya gerçekten kibarca sorsaydım?",
      "Lütfen",
      "Sana kahve vereceğim",
      "ya da gerçekten lezzetli kek",
      "LÜTFEN BRASKO",
      "Aman :*(",
      "Eveeeet",
      "Bunu basma",
      "ok",
      "LÜTFEN cancem",
      ":((((",
      "<3",
      "bye bye",
      "yok :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://www.dropbox.com/scl/fi/itc6f75gkswda58c80pjo/2024-10-08-10.40.32.gif?rlkey=u4tcxixye58qsarcno6nwu6dx&st=42jbrvm1&raw=1" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Çok teşekkür ederim anlaştık! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://www.dropbox.com/scl/fi/leh0z19s3rf6eswi6b5rv/ezgif.com-animated-gif-maker.gif?rlkey=zqrub0h36klfb169jwff0mt8a&st=ys6f8la7&raw=1"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Evet
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Hayır" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
