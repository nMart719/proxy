"use client"
import useManual from '@/app/hooks/useManual';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { FormEvent, MouseEventHandler, useEffect, useState } from 'react'
import FormControl from './FormControl';
interface Input {
  label: string,
  type: string,
}
interface PageProps {
  name: string,
  inputs: Input[],
  btnText: string,
  btnLink: string,
  spanText: string,
  linkText: string,
  link: string
}
const StartForm: React.FC<PageProps> = ({ name, inputs, btnText, btnLink, spanText, link, linkText }) => {
  const router = useRouter();
  console.log(inputs)
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="/img/loginBg.jpg"
              alt=""
              width={4379}
              height={2420}
            />
          </div>
        </div>
        <div className="h-screen w-full lg:w-1/2 flex justify-center items-center">
          <div className="overflow-hiddenshadow sm:rounded-lg bg-primaryDarkColorLighterTrans border-2 border-primaryDarkColorLighter w-3/4 flex flex-col justify-center items-center">
            <div className="w-full pt-4 pb-2 text-center">
              <div className="mt-3 font-bold text-4xl bg-gradient-to-b from-textColor to-borderColor text-transparent bg-clip-text">{name}</div>
            </div>
            {inputs.map((input, index) => (
              <>
                <div key={index} className="w-3/4 p-2">
                  <FormControl
                    label={input.label}
                    type={input.type}
                    isValid={true}
                  />
                </div>
              </>
            ))}
            <div className="w-3/4 px-4 py-6 flex justify-center items-center">
              <button className="btn w-3/4" onClick={() => { router.push(btnLink) }}>{btnText}</button>
            </div>
            <div className="w-full px-4 py-6 flex justify-center items-center">
              <span>{spanText} <a href={link} className='text-borderColor hover:!bg-transparent'>{linkText}</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartForm;