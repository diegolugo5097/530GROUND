import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  const [traslacion, setTraslacion] = useState(false);

  useEffect(() => {
    // Activar la traslación después de que el componente se monte
    setTraslacion(true);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <FloatingWhatsApp
        phoneNumber={"+573176983418"}
        chatMessage={`Hola bienvenido a 530 GROUND - 𝗦𝗔𝗕𝗢𝗥 𝗔 𝗣𝗢𝗥𝗧𝗢, 🆀🆄🅴 ​ 🅳🅸🅰: 24 de Marzo, 🅻🆄🅶🅰🆁: Secret location, 🅰🆁🆃🅸🆂🆃🅰🆂: 𝗖𝘂𝗰𝗮𝗥𝗮𝗳𝗮, 𝗠𝗲𝗳𝗶𝘀𝘁𝗼, 𝗗𝗮𝘃𝗶𝗱𝗫𝗚𝗮𝗿𝗰𝗶𝗮, 𝗗𝗶𝘀𝗼𝗺𝗻𝗶𝗮, 𝗧𝘆𝗮𝗻𝗻𝘅`}
        notification={true}
        accountName={"530 Ground"}
        avatar={"https://i.postimg.cc/d1wWWLv5/logo.png"}
        darkMode={true}
        statusMessage={"Online"}
        notificationSound={true}
        notificationDelay={2}
        messageDelay={2}
        chatboxHeight={400}
      />
      <div
        className={`w-full p-5 text-white text-center transform ${
          traslacion ? "translate-y-0" : "translate-y-full"
        } transition duration-700 ease-in-out`}
      >
        <div className="flex flex-wrap justify-center gap-12">
          <Card />
          <MusicPlayer />
        </div>
      </div>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              530 Under
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
