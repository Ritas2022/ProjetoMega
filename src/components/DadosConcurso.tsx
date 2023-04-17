import { Concurso } from "../types/Concurso";

export interface Props {
  concurso: Concurso;
  tipoSorteio: string;
  color: 'green' | 'purple';
}

export function DadosConcurso({ concurso, tipoSorteio, color }: Props) {
  return (
    <div>
      <h1>
        {tipoSorteio} Nº: {concurso.numeroDoConcurso}
      </h1>
      <label>
        Estimativa de prêmio do proximo concurso. Sorteio em{" "}
        {concurso.dataProximoConcurso}:
      </label>
      <p>R$ {concurso.valorEstimadoProximoConcurso}</p>

      <div className={'rounded ' + (color === 'green' ? 'green' : 'purple')}>
        {concurso.dezenas.map((dezena) => (
          <label> {dezena} </label>
        ))}
      </div>

      <h2>
        {concurso.acumulado
          ? "Acumulou!"
          : concurso.quantidadeGanhadores > 1
          ? `${concurso.quantidadeGanhadores} Ganhadores`
          : `${concurso.quantidadeGanhadores} Ganhador`}
      </h2>

      <label>
        Concurso {concurso.numeroDoConcurso} - {concurso.dataPorExtenso}
      </label>
    </div>
  );
}
