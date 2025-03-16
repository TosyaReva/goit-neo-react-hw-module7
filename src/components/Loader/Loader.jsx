import css from "./Loader.module.css";
import { RingLoader } from "react-spinners";
import clsx from "clsx";

export default function Loader({ visible }) {
  const className = clsx(css["loader-wrapper"], visible && css.visible);

  return (
    <div className={className}>
      <RingLoader
        color="#1cbbb4"
        loading={visible}
        className={css.loader}
        size={"280px"}
      />
    </div>
  );
}
