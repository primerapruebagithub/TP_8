let cad=`
<h1>LOLLY_ART</h1>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Home</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="about.html">Acerca de</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contacto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="form.html">Registrarse</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="location.html">Sucursales</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="N_Clientes.html">Nuestros Clientes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `
    document.getElementById("idheader").innerHTML=cad;

    cad=`
        <a class="redsoc" href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
        <a class="redsoc" href="https://www.facebook.com/LoreLolly"><i class="fa-brands fa-facebook"></i></a>
        <a class="redsoc" href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
        <a class="redsoc" href="https://www.pinterest.com"><i class="fa-brands fa-pinterest"></i></a>
      
        <p>Derechos Reservados @2023</p>
    `
    document.getElementById("idfooter").innerHTML=cad;