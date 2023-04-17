import axios from "axios";

export function clienteRequisicao() {
  const cliente = axios.create({
    baseURL:
      "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
  });

  return cliente;
}
