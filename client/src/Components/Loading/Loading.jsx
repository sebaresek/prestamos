import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style.divPadre}>
      <div className={style.divHijo}>
        <Spinner color="dark" className={style.spinner} />
      </div>
    </div>
  );
}

export default Loading;
