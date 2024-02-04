"use client"
import useManual from '@/app/hooks/useManual';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FormEvent, MouseEventHandler, useEffect, useState } from 'react'
interface PageProps {
  onButtonClick: (cmd: string) => void;
}
const Manage: React.FC<PageProps> = () => {
  const [connect, setConnect] = useState(false);
  useEffect(() => {
    handleConnect();
  }, []);

  const manualModal = useManual();
  console.log(manualModal);
  function handleConnect() {
    setConnect(!connect);
    const btnConnect = document.querySelector("#connect");
    let btns = document.querySelectorAll('button');

    if (connect) {
      btnConnect?.classList.add("connected")
      btns.forEach((btn) => {
        btn.classList.remove("disabled")
        btn.setAttribute("enabled", "true")
      }
      )
    }
    else {
      btnConnect?.classList.remove("connected")
      btns.forEach((btn) => {
        btn.classList.add("disabled")
        btn.setAttribute("enabled", "false")
      }
      )
    }
  }


  return (
    <div className="overflow-hiddenshadow sm:rounded-lg bg-primaryDarkColorLighterTrans border-2 border-primaryDarkColorLighter">
      <div className="px-4 py-6 sm:px-6 flex flex-row justify-between">
        <div>
          <h3 className="text-base font-semibold leading-7 ">Керування</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Натиснiть щоб пiдлкючитися або вiдключитися. Усi дiї нижче будуть доступнi за умови пiдключення до сервера</p>
        </div>
        <a id="connect" className="btn btn-secondary ml-5" onClick={handleConnect}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </a>
      </div>
      <div className="border-t border-btnBorder">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

          <div className="w-full flex ">
            <button className="btn btn-secondary max-w-fit cursor-pointer">Змiнити пароль
            </button>
          </div>
          <dd className="description">Рекомендовано вигадати довгий та складний пароль, це допоможе запобiгти злому вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <button className="btn btn-secondary max-w-fit cursor-pointer">Покращити безпеку
            </button>
          </div>
          <dd className="description">Може вплинути на швидкiсть роботи та пiдключення</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

          <div className="w-full flex ">
            <button className="btn btn-secondary max-w-fit" onClick={() => { manualModal.onOpen }}>Отримати iнструкцiю
            </button>
          </div>
          <dd className="description">Iнструкця пiдключення socks для вашої домашньої системи windows</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        </div>
      </div>
    </div>
  )
}

export default Manage;