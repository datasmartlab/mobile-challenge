<h1>Projeto Shield</h1>

<p>O projeto SHIELD é um aplicativo em Rect Native que consome a API MARVEL e assim apresenta todos os dados herois e HQS que ela fornece</p>
<h2>Rodar o projeto</h2>
<h3>Para você rodar o seu projeto, é necessário que você</h3>
<ul>
<li>Entre no site do <a src="expo.dev">Expo</a></li>
<li>Crie uma conta expo</li>
<li>Instale o EXPO em seu smartphone e logue a sua conta EXPO</li>
<li>Caso você deseje rodar o aplicativo em seu computador, é necessário instlar um emulador de smartphone</li>
</ul>
<h3>Como instalar o projeto</h3>
<p>Em seu terminal, digite `npm install` para instalar todos os pacotes</p>

```bash
--npm install
```

<p>Após isso você deve criar um arquivo `.env` com os dados sua public key e sua private key do site <a src="https://developer.marvel.com/account">Marvel</a></p>

```JSON

EXPO_PUBLIC_API_KEY="SUA API PUBLIC KEY"
EXPO_PUBLIC_API_PRIVATE_KEY="SUA API PRIVATE KEY"

```

<p>Após todos os passos anteriores concluidos, você pode realizar o comando "npx expo start" e assim irá aparecer uma mensagem para realizar o login da sua conta EXPO no seu terminal, acesse o EXPO em seu smartpone e o conecte na mesma rede do seu computador, e o seu projeto EXPO ja deve estar aparecendo testar</p>

```bash

-npx expo start
```

