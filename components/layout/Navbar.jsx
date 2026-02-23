export default function Navbar({ openLogin }) {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img
            className="nav__img"
            src="/logos/summarist__logo.png"
            alt="logo"
          />
        </figure>
        <ul className="nav__list--wrapper">
          <li
            className="nav__list nav__list--login"
            onClick={(event) => openLogin(event)}
          >
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}
