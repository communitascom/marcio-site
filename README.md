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
