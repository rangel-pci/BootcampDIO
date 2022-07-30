interface IRequestTokenResponse{
    success: boolean,
    expires_at: string,
    request_token: string,
}
interface ISessionResponse{
    success: boolean,
    session_id: string,
}
interface IHttpClientProps{
    url: string,
    method: 'GET' | 'POST',
    body?: null | object,
}
interface IMovie{
    id: number,
    title: string,
    original_title: string,
}
interface ISearchMovieResponse{
    page: number,
    results: IMovie[],
    total_results: number,
    total_pages: number,
}

let apiKey: string;
let requestToken: string;
let username: string;
let password: string;
let sessionId: string;

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLElement;

loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista") as HTMLElement;
  lista.innerHTML = "";
  let search = document.getElementById('search') as HTMLInputElement; 
  let query = search.value;
  let listaDeFilmes = await procurarFilme(query);

  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    let text = document.createTextNode(`${item.title}`);
    li.appendChild(text)
    lista.appendChild(li)
  }
})

function preencherSenha() {
  let p = document.getElementById('senha') as HTMLInputElement;
  password = p.value;

  validateLoginButton();
}

function preencherLogin() {
    let p = document.getElementById('login') as HTMLInputElement;
    username = p.value;
  validateLoginButton();
}

function preencherApi() {
    let p = document.getElementById('api-key') as HTMLInputElement;
    apiKey = p.value;
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {

  static async get({url, method, body = null}: IHttpClientProps) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      let json_body = null;

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        json_body = JSON.stringify(body);
      }
      request.send(json_body);
    })
  }
}

async function procurarFilme(query: string) {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result as ISearchMovieResponse
}

async function criarRequestToken () {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  }) as IRequestTokenResponse
  requestToken = result.request_token
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  }) as ISessionResponse
  sessionId = result.session_id;
}