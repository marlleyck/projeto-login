<h1 align="center">Projeto Login (Backend)</h1>

<h1 align="center">:sparkles: Tecnologias</h1>
<p align="center">Esse projeto foi desenvolvido com</h1>
<br />

<p align="center"><a href="https://nodejs.org/en/">NodeJs</a></p>
<p align="center"><a href="https://www.mongodb.com/">MongoDB</a></p>
<p align="center"><a href="https://expressjs.com/pt-br/">Express</a></p>
<p align="center"><a href="https://sequelize.org/">Sequelize</a></p>
<p align="center"><a href="https://jwt.io/">JWT</a></p>
<br />

<h1 align="center">:computer: Sobre o Projeto</h1>
<p align="center">Aplicação (backend) feita com NodeJs, em que consiste um fluxo de login, onde o usuário pode se cadastrar utilizando seus dados, e esses serão salvos em um banco NoSql (MongoDB com Mongoose), após isso, é possível fazer o login na aplicação.
Nesse sistema o fluxo de login é utilizado JsonWebToken para persistência e autorização do usuário e usado o Bcrypt para criptografar a senha.</p>
<br />

<h1 align="center">:rocket: Executando o Projeto</h1>
<p align="center">Comece clonando o repositório para sua máquina, usando</p>
<pre><strong>$ git clone https://github.com/marlleyck/projeto-login-backend</strong></pre>

<p align="center">Após isso, vá até a pasta do projeto</p>
<pre><strong>$ cd projeto-login-backend</strong></pre>

<p align="center">Instale todas as dependências, usando o seu gerenciador de pacotes preferido</p>
<pre><strong>$ npm install</strong></pre>
<pre><strong>$ yarn</strong></pre>

<p align="center">Crie um arquivo ".env" e coloque as informações do seu banco de dados seguindo o nome das variáveis que estão em "src/database/index.js"</p>
<pre><strong>$ mkdir .env</strong></pre>

<br />

<p align="center">Por fim, basta iniciar o servidor, usando</p>
<pre><strong>$ npm run dev</strong></pre>
<pre><strong>$ yarn dev</strong></pre>

<p align="center">Feito! O projeto está pronto para ser utilizado!</p>

