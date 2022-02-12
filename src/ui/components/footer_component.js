import "../../value/styles/footer_style.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerInterno">
          <p className="text-center mt-2">
            &copy;{new Date().getFullYear()} Todos los derechos reservados |{" "}
            <b className="text-primary">All right reserved</b> | Terms Of
            Service
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
