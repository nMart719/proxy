"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";

const Register: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  const { enqueueSnackbar } = useSnackbar();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidconfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [similarPasswords, setSimilarPasswords] = useState(true);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: login, password }),
        });

        if (!response.ok) {
          throw new Error("Не вдалося зареєструватися");
        }

        enqueueSnackbar("Ви успішно зареєструвалися", { variant: "success" });

        router.push("/login");
      } catch (error: unknown) {
        enqueueSnackbar("Помилка реєстрації", { variant: "error" });
      }
    } else {
      setIsValidPassword(false);
      setIsValidConfirmPassword(false);
      setSimilarPasswords(false);
    }
  };

  if (session.data) {
    router.push("/dashboard");
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
                Реєстрацiя
              </div>
            </div>
            <div className="w-3/4 p-2">
              <div className={`form-control`}>
                <input
                  type="text"
                  placeholder="Логiн"
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                  id="login_register"
                />
                <label htmlFor="login_register" style={{ userSelect: "none" }}>
                  Логiн
                </label>
              </div>
            </div>
            <div className="w-3/4 p-2">
              <div
                className={`form-control ${
                  isValidPassword ? "" : "invalid-input"
                }`}
              >
                <input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsValidPassword(true);
                    setIsValidConfirmPassword(true);
                    setSimilarPasswords(true);
                  }}
                  id="password_register"
                />
                <label
                  htmlFor="password_register"
                  style={{ userSelect: "none" }}
                >
                  Пароль
                </label>
              </div>
            </div>
            <div className="w-3/4 p-2">
              <div className="flex flex-col">
                <div
                  className={`form-control ${
                    isValidconfirmPassword ? "" : "invalid-input"
                  }`}
                >
                  <input
                    type="password"
                    placeholder="Повторити пароль"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setIsValidPassword(true);
                      setIsValidConfirmPassword(true);
                      setSimilarPasswords(true);
                    }}
                    id="confirm_password_register"
                  />
                  <label
                    htmlFor="confirm_password_register"
                    style={{ userSelect: "none" }}
                  >
                    Повторити пароль
                  </label>
                </div>
              </div>
            </div>
            <div className="w-3/4 px-4 py-6 flex flex-col justify-center items-center">
              <button className="btn w-3/4" onClick={handleSubmit}>
                Зареєструватися
              </button>
              {!similarPasswords ? (
                <label className="mt-3 text-redColor">
                  Паролi мають збiгатися!
                </label>
              ) : null}
            </div>
            <div className="w-full px-4 py-6 flex justify-center items-center">
              <span>
                Вже є акаунт?{" "}
                <a
                  href="/login"
                  className="text-borderColor hover:!bg-transparent"
                >
                  Увiйти
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
