"use client"
import useManual from '@/app/hooks/useManual';
import FormControl from '@/app/components/FormControl';
import { FormEvent, MouseEventHandler, useEffect, useState } from 'react'
interface PageProps {
  onButtonClick: (cmd: string) => void;
}
const Manage: React.FC<PageProps> = () => {
  const [connect, setConnect] = useState(false);


  const manualModal = useManual();
  console.log(manualModal);



  return (
    <div className="overflow-hiddenshadow sm:rounded-lg bg-primaryDarkColorLighterTrans border-2 border-primaryDarkColorLighter">
      <div className="px-4 py-6 sm:px-6 flex flex-row justify-between">
        <div>
          <h3 className="text-base font-semibold leading-7 ">Створити сервер</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Створiть свiй власний сервер та налаштуйте його</p>
        </div>

      </div>
      <div className="border-t border-btnBorder">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex pt-[15px] items-center">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input type="text" placeholder="Назва" />
              <label>Назва</label>
            </div>
          </div>
          <dd className="description pt-[15px]">Назва вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input type="text" placeholder="IP адреса" />
              <label>IP адреса</label>
            </div>
          </div>
          <dd className="description pt-[15px]">IP адреса вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input type="text" placeholder="Логiн" />
              <label>Логiн</label>
            </div>
          </div>
          <dd className="description pt-[15px]">Логiн для пiдключення до вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input type="text" placeholder="Пароль" />
              <label>Пароль</label>
            </div>
          </div>
          <dd className="description pt-[15px]">Пароль для пiдключення до вашого сервера</dd>
        </div>
        <div className="px-4 py-6 flex xs:flex-row xs:justify-end flex-col items-center gap-6 ">
          <button className="btn w-full xs:w-1/2 sm:max-w-fit" onClick={() => { console.log(this) }}>Зберегти</button>
          <button className="btn btn-secondary w-full xs:w-1/2 sm:max-w-fit" onClick={() => { console.log(this) }}>Cкасувати</button>
        </div>
      </div>
    </div>
  )
}

export default Manage;