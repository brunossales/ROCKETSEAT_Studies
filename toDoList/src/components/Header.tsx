import rocket from "../img/rocket.svg";
import HeaderStyle from '../styles/Header.module.scss'

export default function Header() {
  return (
    <div className={HeaderStyle.navBar}>
      <nav>
        <img src={rocket} alt="Foguete do ToDo" />
        <h1>
          <p>to</p>do
        </h1>
      </nav>
    </div>
  );
}
