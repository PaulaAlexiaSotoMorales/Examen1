
import Link from "next/link";


import { skills, experiences, projects } from "../profile";

export default function Index() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <h1>Portafolio</h1>

          </Link>
          <h3>Welcome!!!</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">


              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
      </div>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img src="/img1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Paula Alexia Soto Morales</h1>
                <h3>Information Systems Engineer</h3>
                <p>
                  I am a programmer with experience in MySQL,C++,Javasricp, php,
                  During 4 years I have programmed Internet pages using different frameworks.

                  I feel qualified to apply for the job available at Empresa Actualidad.
                  The challenges and tasks that I have to face in your institution will be
                  completed professionally and with the greatest possible efficiency.


                </p>
                <Link href="/hireme">
                  <h5 className="btn btn-outline-light"> www.linkedin.com/in/paula-alexia-soto-morales-bbb801274</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>



      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="col-md-8">
              <h1>Call to Action</h1><h2>Deseas hablar</h2>


              <h3 className="btn btn-light">Call</h3><h4 className="btn btn-light">Continue</h4><h3 className="btn btn-light">Chat</h3>
              <h1>Escribir mensaje</h1>
              <Link href="/hireme">
                <h5 className="btn btn-outline-light"> </h5>
              </Link>



            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">

          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Projects Section</h1>

              <script src="script.js"></script>



              <Link href="/hireme">
                <h3 className="btn btn-light">Asignacion1 </h3>
                <b className="nav-link active">https://github.com/PaulaAlexiaSotoMorales/Asignacion1</b>
                <g className="btn btn-light">Asignacion2</g>
                <h1 className="nav-link active">https://github.com/PaulaAlexiaSotoMorales/Asignacion2</h1>
                <p className="btn btn-light">React-Challangues </p>
                <h2 className="nav-link active">https://github.com/PaulaAlexiaSotoMorales/React-Challangues</h2>
                <h6 className="btn btn-light">Tarea2</h6>
                <h5 className="nav-link active">https://github.com/PaulaAlexiaSotoMorales/Tarea2</h5>
                <h3 className="btn btn-light">Tarea Programada</h3>
                <h4 className="nav-link active">https://github.com/PaulaAlexiaSotoMorales/TareaProgramada</h4>



              </Link>
            </div>
          </div>
        </div>
      </section>
      <p>





      </p>
      {/* Porfolio */}

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light"></h1>
              </div>

            </div>

            <p className="btn btn-outline-light">More information</p>
            <div className="col-md-12 mt-4">
              <div className="text-center">

                <h1 className="btn btn-outline-light">Privacy Policy</h1>
                <h1 className="btn btn-outline-light">Paula.Soto.Morales Phone:(85089343)</h1>
                <h1 className="btn btn-outline-light">Address: 800 METERS SOUTH WEST OF OJO DE AGUA SCHOOL</h1>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

