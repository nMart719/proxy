"use client"
import useManual from '@/app/hooks/useManual';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { FormEvent, MouseEventHandler, useEffect, useState } from 'react'
import StartForm from '../components/StartForm';
interface PageProps {
  onButtonClick: (cmd: string) => void;
}
const Login: React.FC<PageProps> = () => {
  const inputs = [{ label: 'Логiн', type: 'text' }, { label: 'Пароль', type: 'password' }, { label: 'Повторити пароль', type: 'password' }];

  return (
    <StartForm name={'Реєстрацiя'} inputs={inputs} btnText={'Зареєструватися'} btnLink={'/dashboard/status'} spanText={'Вже маєте акаунт?'} linkText={'Увiйти'} link={'/login'} />
  )
}

export default Login;