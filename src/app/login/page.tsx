"use client";
import React, { useState } from "react";
import FormControl from "../components/FormControl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";

interface PageProps {
  onButtonClick: (cmd: string) => void;
}
const Login: React.FC<PageProps> = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const signInData = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (signInData?.error) {
      enqueueSnackbar("Неправильний логiн або пароль", { variant: "error" });
    } else {
      router.refresh();
      router.push("/dashboard");
      enqueueSnackbar("Ви успiшно увiйшли", { variant: "success" });
    }

    console.log(signInData);
  };

  if (session.data) {
    router.push("/dashboard");
    return null;
  }

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
              <div className="mt-3 font-bold text-4xl bg-gradient-to-b from-textColor to-borderColor text-transparent bg-clip-text">
                Вхiд
              </div>
            </div>
            <div className="w-3/4 p-2">
              <FormControl
                value={username}
                onChange={handleUsernameChange}
                label={"Логiн"}
                type={"text"}
                isValid={true}
                id="login_login"
              />
            </div>
            <div className="w-3/4 p-2">
              <FormControl
                value={password}
                onChange={handlePasswordChange}
                label={"Пароль"}
                type={"password"}
                isValid={true}
                id="password_login"
              />
            </div>
            <div className="w-3/4 px-4 py-6 flex justify-center items-center">
              <button className="btn w-3/4" onClick={handleLoginClick}>
                Увiйти
              </button>
            </div>
            <div className="w-full px-4 py-6 flex justify-center items-center">
              <span>
                Нема акаунту?{" "}
                <a
                  href="/register"
                  className="text-borderColor hover:!bg-transparent"
                >
                  Зареєструватися
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
