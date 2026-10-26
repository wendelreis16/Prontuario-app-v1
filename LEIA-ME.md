# Piloto Prontuários — pacote para publicar

Esta pasta é o app completo (OCR incluído, sem CDN). Basta colocá-la numa hospedagem **https**.
Ela só contém o programa: **nenhum dado de paciente fica no servidor**. Fotos e campos ficam no navegador de cada aparelho.

## Opção A — GitHub Pages (grátis)
1. Crie uma conta em github.com e clique em **New repository**. Dê um nome (ex.: `prontuarios-app`) e deixe **Public** (o app não tem dados).
2. Em **Add file → Upload files**, arraste **todo o conteúdo desta pasta** (index.html, manifest.webmanifest, sw.js e as pastas `ocr` e `icons`). Clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e salve.
4. Em 1 a 2 minutos o endereço aparece no topo dessa tela: `https://SEU-USUARIO.github.io/prontuarios-app/`.

## Opção B — Netlify (arrastar e soltar)
1. Acesse app.netlify.com/drop, entre com uma conta e arraste a **pasta inteira**.
2. Você recebe um endereço https na hora. Em *Site configuration* dá para trocar o nome e, nos planos pagos, proteger com senha.

## Usar no celular
- Abra o endereço no **Chrome (Android)** ou no **Safari (iPhone)**. Na primeira visita é preciso internet (cerca de 9 MB, baixados uma vez); depois funciona **sem internet**.
- Instalar como app: **Android** — menu ⋮ → *Instalar app* / *Adicionar à tela inicial*. **iPhone** — botão Compartilhar → *Adicionar à Tela de Início*.
- Toque em **📷 Fotografar ficha** para abrir direto a câmera.
- No iPhone, o Safari pode apagar os dados do site após cerca de 7 dias sem uso: exporte o CSV com frequência.

## Atualizar o app
Troque o `index.html` no repositório e **aumente `VERSION` em `sw.js`** (ex.: `v2`). Sem isso, quem já instalou continua vendo a versão antiga.

## Cuidados (dados de saúde / LGPD)
- Defina quem pode usar o app e em quais aparelhos. Prefira aparelhos da clínica com bloqueio de tela.
- Cada aparelho guarda a sua própria sessão. Para reunir tudo, use os CSVs.
- Ative o salvamento automático criptografado (senha ao abrir) e exporte o CSV ao fim de cada lote.
- O CSV não tem senha: guarde em pasta protegida e apague as cópias antigas.
- O uso para contato de captação depende de base legal/consentimento: confirme com seu jurídico/encarregado.
