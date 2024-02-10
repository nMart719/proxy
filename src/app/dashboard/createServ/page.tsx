"use client";
import useManual from "@/app/hooks/useManual";
import FormControl from "@/app/components/FormControl";
import { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import { useSnackbar } from "notistack";

type Proxy = {
  id: number;
  name: string;
  ip: string;
  login: string;
  password: string;
};

interface PageProps {
  onButtonClick: (cmd: string) => void;
}

const getProxies = async () => {
  try {
    const response = await fetch("/api/servers", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Proxies not found");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const Manage: React.FC<PageProps> = () => {
  const [connect, setConnect] = useState(false);

  const [proxies, setProxies] = useState<Proxy[]>([]);

  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const manualModal = useManual();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getProxies().then((data) => {
      setProxies(data);
    });
  }, []);

  const deleteProxy = async (id: number) => {
    try {
      const response = await fetch(`/api/server`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Proxy not deleted");
      }

      enqueueSnackbar("Сервер видалено", { variant: "success" });

      return id;
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Сервер не видалено", { variant: "error" });
    }
  };

  const handleCreateServer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          ip: ip,
          login: login,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Server not created");
      }

      const data = await response.json();

      setProxies([...proxies, data.data]);

      enqueueSnackbar("Сервер створено", { variant: "success" });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Сервер не створено", { variant: "error" });
    }
  };

  const detele = async (id: number) => {
    const proxyId = (await deleteProxy(id)) || 0;
    console.log(proxyId);
    setProxies(proxies.filter((proxy) => proxy.id !== Number(proxyId)));
  };

  return (
    <div className="overflow-hiddenshadow sm:rounded-lg bg-primaryDarkColorLighterTrans border-2 border-primaryDarkColorLighter">
      <div className="px-4 py-6 sm:px-6 flex flex-row justify-between">
        <div>
          <h3 className="text-base font-semibold leading-7 ">
            Створити сервер
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Створiть свiй власний сервер та налаштуйте його
          </p>
        </div>
      </div>
      <div className="border-t border-btnBorder">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex pt-[15px] items-center">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input
                id="proxyName"
                type="text"
                placeholder="Назва"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="proxyName" style={{ userSelect: "none" }}>
                Назва
              </label>
            </div>
          </div>
          <dd className="description pt-[15px]">Назва вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input
                id="proxyIp"
                type="text"
                placeholder="IP адреса"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
              />
              <label htmlFor="proxyIp" style={{ userSelect: "none" }}>
                IP адреса
              </label>
            </div>
          </div>
          <dd className="description pt-[15px]">IP адреса вашого сервера</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input
                id="proxyLogin"
                type="text"
                placeholder="Логiн"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <label htmlFor="proxyLogin" style={{ userSelect: "none" }}>
                Логiн
              </label>
            </div>
          </div>
          <dd className="description pt-[15px]">
            Логiн для пiдключення до вашого сервера
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="w-full flex ">
            <div className={`form-control`}>
              <input
                id="proxyPass"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="proxyPass" style={{ userSelect: "none" }}>
                Пароль
              </label>
            </div>
          </div>
          <dd className="description pt-[15px]">
            Пароль для пiдключення до вашого сервера
          </dd>
        </div>
        <div className="px-4 py-6 flex xs:flex-row xs:justify-end flex-col items-center gap-6 ">
          <button
            className="btn w-full xs:w-1/2 sm:max-w-fit"
            onClick={handleCreateServer}
          >
            Зберегти
          </button>
          <button
            className="btn btn-secondary w-full xs:w-1/2 sm:max-w-fit"
            onClick={() => {
              console.log(this);
            }}
          >
            Cкасувати
          </button>
        </div>
      </div>
      <div>
        {proxies.map((proxy: Proxy) => (
          <div
            key={proxy.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>ID: {proxy.id}</p>
            <p>Name: {proxy.name}</p>
            <p>IP: {proxy.ip}</p>
            <p>Login: {proxy.login}</p>
            <p>Password: {proxy.password}</p>
            <button onClick={() => detele(proxy.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
