# Plano para disponibilizar uma prévia segura

## Situação
A branch `fix/ocr-email-privacy-offline` contém as primeiras correções e o roteiro `TESTE-PILOTO.md`. O endereço atual do GitHub Pages publica a configuração já definida no repositório; criar uma branch não gera automaticamente uma segunda URL do Pages.

## Como testar sem alterar a versão principal
1. Não mescle o Pull Request #1.
2. Revise os arquivos e commits da branch no GitHub.
3. Para testar a versão como página hospedada, configure uma implantação de prévia separada usando GitHub Actions e um destino isolado. Não publique a branch de testes no mesmo destino de produção.
4. Antes de criar essa implantação, confirme que o repositório permite GitHub Actions com permissão de escrita de conteúdo e Pages, e que o método não substituirá o site atual.

## Condição para OCR sem internet
Ainda não declarar suporte offline do OCR. Para essa etapa, incluir localmente os arquivos correspondentes às versões Tesseract.js 5.1.1 e tesseract.js-core 5.1.0, além do modelo português `por` utilizado pela configuração. Validar os caminhos reais do worker, dos arquivos WASM e do traineddata no navegador. Os arquivos binários não devem ser simulados nem substituídos por arquivos vazios.

## Critérios para concluir
- A prévia tem URL própria e não substitui o site de produção.
- O navegador carrega os recursos locais do OCR sem chamadas ao CDN.
- Após a primeira visita completa, ativar modo avião e executar uma análise de documento fictício.
- Testar a atualização do service worker, a persistência local e o CSV de métricas.
- Manter a branch e o PR sem mesclar até os testes serem aprovados.
