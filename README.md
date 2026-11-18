# Site Márcio Souza | Psicologia

Site estático (HTML e CSS, sem build) do psicólogo Márcio Souza. Feito pela Communitas.

## Páginas
`index.html` (home), `psicoterapia.html`, `mentoria-supervisao.html`, `orientacao-carreira.html`, `quem-sou.html`, `contato.html`, `blog.html`, `blog-post.html`.

## Estrutura
- `assets/styles.css`: todo o estilo; `assets/site.js`: movimento sutil (entrada ao rolar e tarja que se desenha), que respeita prefers-reduced-motion. A parte a partir de "Camada 2026" é a camada visual atual (base branca neutra, marrom #4C2609 e laranja #F15A22 da marca). Fontes: Fira Sans (títulos) e Poppins (corpo), via Google Fonts.
- `assets/`: fotos e logotipos.

## Para testar localmente
```bash
python3 -m http.server 8000
```
Abra http://localhost:8000.

## Pendências conhecidas antes de publicar
- Links de LinkedIn e YouTube no rodapé apontam para as páginas iniciais genéricas.
- `blog.html` e `blog-post.html` são esqueleto para ligar ao WordPress; os cards ainda apontam para `blog.html`.
- Formulários (contato e newsletter): conferir o envio no domínio final (FormSubmit e Mailchimp).

## Prévia sem indexação (apagar antes de publicar no domínio do cliente)
Enquanto o repositório é público, as páginas levam `<meta name="robots" content="noindex, nofollow">` e há um `robots.txt` bloqueando tudo, para que uma hospedagem da prévia não apareça no Google. Isso não impede o GitHub de listar o repositório. **Ao publicar o site de verdade, remova os dois**, senão o site novo não será indexado:

```bash
sed -i '' '/name="robots" content="noindex/d' *.html && rm robots.txt
```
