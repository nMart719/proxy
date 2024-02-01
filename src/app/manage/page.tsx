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
        <a id="connect" className="btn ml-5" onClick={handleConnect}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </a>
      </div>
      <div className="border-t border-btnBorder">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

          <div className="w-full flex ">
            <button className="btn max-w-fit cursor-pointer">Змiнити пароль
            </button>
          </div>
          <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">Рекомендовано вигадати довгий та складний пароль, це допоможе запобiгти злому вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <button className="btn max-w-fit cursor-pointer">Покращити безпеку 
            </button>
          </div>
          <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">Може вплинути на швидкiсть роботи та пiдключення</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

          <div className="w-full flex ">
            <button className="btn max-w-fit" onClick={()=>{manualModal.onOpen}}>Отримати iнструкцiю
            </button>
          </div>
          <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">Iнструкця пiдключення socks для вашої домашньої системи windows</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        </div>
      </div>
    </div>
  )
}

export default Manage;