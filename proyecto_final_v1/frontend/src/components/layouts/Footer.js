import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container ml-4">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-3 mb-md-0 color-footer">&copy; 2023 - Buscador de Mascotas - Diseñado por Laura Vallejos</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="color-footer" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li class="ms-3"><a class="color-footer" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li class="ms-3"><a class="color-footer" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
    </ul>
  </footer>
    
  )
}

export default Footer;