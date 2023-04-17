import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center  gap-8  bg-gradient-to-br from-[#e3decb] to-[#7a6f65] bg-clip-text  p-8 text-transparent  lg:flex-row">
      <ul className=" flex flex-col justify-center  gap-4 p-8">
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
          <span> 37/1 David Bek Lane | 0001 | Yerevan, Armenia</span>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
          <span>+37443607977</span>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          <span>info@hooligunstudios.com</span>
        </li>
      </ul>
      <aside className=" text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quam
        recusandae! Quas cupiditate, veniam fugiat atque est eos, labore fugit
        vero magni nam modi rem repellat eaque dolorum ea nemo alias eligendi
        soluta fuga harum omnis iure. Ea, quidem nulla!
      </aside>
    </section>
  );
}
