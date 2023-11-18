function labelPrinting(product: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] {
  let response: string[] = [];
  let i: number = 1;
  while (response.length < product.qtd) {
    if (String(i).length === 3) {
      response.push(`${product.lote}-${product.ano}-${product.ano}-${i}`);
    } else if (String(i).length === 2) {
      response.push(`${product.lote}-${product.ano}-${product.ano}-0${i}`);
    } else {
      response.push(`${product.lote}-${product.ano}-${product.ano}-00${i}`);
    }
    i++;
  }
  return response;
}

console.log(
  labelPrinting({
    produto: "Produto",
    lote: 123,
    ano: 2021,
    qtd: 11,
  })
);
