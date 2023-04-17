export interface Concurso {
  acumulado: boolean;
  concursoEspecial: boolean;
  dataApuracao: string;
  dataPorExtenso: string;
  dataProximoConcurso: string;
  dezenas: string[];
  numeroDoConcurso: number;
  quantidadeGanhadores: number;
  tipoJogo: string;
  valorEstimadoProximoConcurso: number;
  valorPremio: number;
}
