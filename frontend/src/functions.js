export const transformData = (data) => {
  const date = new Date(data);

  const formattedDate = date.toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return formattedDate;
};