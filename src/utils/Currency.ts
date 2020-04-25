export const currencyBR = (value: number) => {
  const options = {
    style:'currency',
    currency: 'BRL'
  }

  return value.toLocaleString('pt-BR', options);
}