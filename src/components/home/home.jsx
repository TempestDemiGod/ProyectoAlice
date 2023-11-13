
import MenuMain from "../navbar/Navbar";
import imgAlice from "../../assets/Alice.png";
import "./home.css";

import { ModalProyect } from "../proyects/modalProyect";
import { useEffect, useState } from "react";

import { listado } from "../../utils/proyects";

import { HomeProject } from "./ProyectoHome/Proyecto";

import { InicioInfo } from "./inicio/inicio";
import Aos from "aos";
import 'aos/dist/aos.css'


export const Home = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [proyectos, setProyecto] = useState([]);
  const [Inicio, cambiarInicio] = useState(false);

  useEffect(()=>{
    Aos.init()
  })

  /* const {estado, cambiarEstado} = useStore()
  console.log(estado) */
  const getNotes = async () => {
    try {
      const lista = await listado();
      setProyecto(lista.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="total">
        <div className="contendor-second">
          <div className="navBar">
            <MenuMain />
          </div>
          <div className="contendor">
            <nav className="menu-projects">
              <div data-aos="fade-down" className="logo-home">
                <img src={imgAlice} />
              </div>
              <h1 className="title">ALICE</h1>
              <div className="projects">
                {proyectos?.map((proyecto, index) => {
                  return (
                    <button className="projectButton" onClick={() => cambiarInicio(true)} key={proyecto._id} id={index}>
                      {proyecto.nombre}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => cambiarEstadoModal(true)}
                className="btn-addProject"
              >
                Agregar Proyecto
              </button>
            </nav>
            <div className="main-contenido">
              {Inicio ? <HomeProject /> : <InicioInfo cambiarEstado={() => cambiarInicio(false)}  />}
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <ModalProyect
        estado={estadoModal}
        cambiarEstado={() => cambiarEstadoModal(false)}
      />
    </>
  );
};

export default Home;
