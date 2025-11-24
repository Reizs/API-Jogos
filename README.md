🎮 API Jogos

Uma API simples para gerenciar jogos, com CRUD completo, autenticação via Supabase e deploy no Render.

🚀 Tecnologias utilizadas

Node.js + Express

Supabase (Banco de Dados + Autenticação)

Render (Deploy)

JavaScript ES Modules

CORS + JSON Middleware

📡 Link da API online

 https://api-jogos-beqq.onrender.com

Endpoints funcionam normalmente através da URL base:

https://api-jogos-beqq.onrender.com

📁 Estrutura do projeto
src/
  controllers/
  middlewares/
  services/
  index.js
package.json
README.md

🔐 Autenticação (Supabase Auth)

A API usa login e cadastro do Supabase.

API rodará em:

http://localhost:3000

🛠 Deploy no Render

O projeto está configurado com:

Root Directory: /

Build Command: npm install

Start Command: npm start

📝 Tratamento de erros

A API retorna erros no formato:

{
  "error": "Mensagem explicando o problema"
}


Com os códigos:

200 OK

201 Criado

400 Requisição inválida

401 Não autorizado

404 Não encontrado

500 Erro interno

💻 Contribuição

Pull requests e melhorias são bem-vindas!

 Autor

Davi Reis
API desenvolvida para atividade acadêmica