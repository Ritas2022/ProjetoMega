import { useEffect, useState } from "react";
import { clienteRequisicao } from "../services/cliente";
import { Concurso } from "../types/Concurso";
import { DadosConcurso } from "../components/DadosConcurso";

const cliente = clienteRequisicao();

export function Concursos() {
  const [megasena, modificaMegasena] = useState<Concurso>({} as Concurso);
  const [lotofacil, modificaLotofacil] = useState<Concurso>({} as Concurso);

  useEffect(() => {
    async function GetMegasena() {
      console.log("Requisição pra serviço da Megasena iniciado...");
      const resultado = await cliente.get("/");

      modificaMegasena(resultado.data.megasena);
      modificaLotofacil(resultado.data.lotofacil);
    }

    GetMegasena();
  }, []);

  return (
    <>
      {!megasena.numeroDoConcurso && !lotofacil.numeroDoConcurso ? (
        <h2>Carregando dados...</h2>
      ) : (
        <>
          <DadosConcurso color="green" tipoSorteio="Megasena" concurso={megasena} />
          <DadosConcurso color="purple" tipoSorteio="Lotofacil" concurso={lotofacil} />
        </>
      )}
    </>
  );
}
