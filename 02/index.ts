const usuarios2 = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

function findUser(
  usuario: string
): { nome: string; idade: number; status: boolean }[] {
  const response: { nome: string; idade: number; status: boolean }[] = [];
  usuarios2.forEach((user) => {
    user.nome.toLowerCase().includes(usuario.toLowerCase()) &&
      response.push(user);
  });
  return response;
}

console.log(findUser("a"));
