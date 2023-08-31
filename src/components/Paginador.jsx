import React, { useContext, useEffect, useState } from "react";
import { contextGlobal } from "../context/index.contex";

export const Paginador = () => {
  const context = useContext(contextGlobal);
  const { Getpost, pgainaTotal, setPag, pag } = context;
  const [contador, setContador] = useState([]);

  const next = () => {
    let number1;
    let number2;
    let result;
    if (contador.length <= 0) {
      number1 = 8;
      number2 = 16;
      result = [number1, number2];
      setContador(result);
      Getpost(result);
      setPag(pag + 1);
    } else {
      number1 = contador[0] + 8;
      number2 = contador[1] + 8;
      result = [number1, number2];
      setContador(result);
      Getpost(result);
      setPag(pag + 1);
    }
  };

  const prev = () => {
    let number1;
    let number2;
    let result;
    if (contador.length > 0) {
      number1 = contador[0] - 8;
      number2 = contador[1] - 8;
      result = [number1, number2];
      setContador(result);
      Getpost(result);
      setPag(pag - 1);
    }
  };

 
  useEffect(() => {
    Getpost();
  }, []);

  useEffect(() => {
    if(pgainaTotal > 0 )setPag(1)
  }, [pgainaTotal])

  return (
  
    pgainaTotal <= 0 ? "" :  <div>
    {contador[0] > 0 ? (
      <div
        style={{
          width: "97%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button name="rest" onClick={prev}>
          Previous
        </button>
        {pag < pgainaTotal && (
          <button name="sum" onClick={next}>
            Nexts
          </button>
        )}
      </div>
    ) : (
      <div
        style={{
          width: "97%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button name="sum" onClick={next}>
          Next
        </button>
      </div>
    )}
  </div>
  
  );
};
