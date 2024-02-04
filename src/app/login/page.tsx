"use client"
import FormControl from '../components/FormControl';
import Image from 'next/image';
import { useRouter } from "next/navigation";
interface PageProps {
  onButtonClick: (cmd: string) => void;
}
const Login: React.FC<PageProps> = () => {
  const router = useRouter();

  return (
    <form className="relative">
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
              <div className="mt-3 font-bold text-4xl bg-gradient-to-b from-textColor to-borderColor text-transparent bg-clip-text">Вхiд</div>
            </div>
            <div className="w-3/4 p-2">
              <FormControl
                label={"Логiн"}
                type={"text"}
                isValid={true}
              />
            </div>
            <div className="w-3/4 p-2">
              <FormControl
                label={"Пароль"}
                type={"password"}
                isValid={true}
              />
            </div>
            <div className="w-3/4 px-4 py-6 flex justify-center items-center">
              <button className="btn w-3/4" onClick={() => { router.push("/dashboard/status") }}>Увiйти</button>
            </div>
            <div className="w-full px-4 py-6 flex justify-center items-center">
              <span>Нема акаунту? <a href="/register" className='text-borderColor hover:!bg-transparent'>Зареєструватися</a></span>
            </div>
          </div>
        </div>
      </div>
    </form>)
}

export default Login;