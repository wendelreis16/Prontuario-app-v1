# Roteiro de testes — Piloto Prontuários

> Esta branch é uma versão de validação. Não utilize dados reais de pacientes nos testes.

## Estado desta versão

- A extração de e-mails tenta recuperar o símbolo `@` quando o OCR o confunde com `Q`, `&` e variantes com espaços.
- E-mails reconstruídos a partir de linhas OCR recebem um aviso para conferência.
- O CSV de métricas não deve incluir nome, telefone, e-mail ou data pessoal.
- O service worker armazena os recursos da interface que existem no repositório.
- **O OCR ainda depende de internet**, pois Tesseract.js e o modelo de idioma não estão empacotados localmente nesta branch.

## Testes funcionais

### 1. Teste com documento fictício
1. Abra o aplicativo em um navegador compatível.
2. Use a opção de documento de exemplo.
3. Confira se o fluxo de OCR termina e se os campos são apresentados para revisão.
4. Confirme que é possível editar os campos antes de confirmar o registro.

**Esperado:** o exemplo é processado sem erro e os dados continuam editáveis.

### 2. Teste de e-mail
Use apenas documentos fictícios preparados para os seguintes cenários:

- E-mail impresso em uma linha: `mariana.silva@exemplo.com.br`.
- Símbolo `@` confundido com `Q` ou `&`.
- Espaços inseridos ao redor do símbolo `@`.
- Endereço quebrado em duas linhas.
- Dois endereços no mesmo documento, por exemplo, contato da clínica e do paciente.
- Campo de e-mail vazio ou ilegível.

**Esperado:** endereços válidos aparecem como candidatos; reconstruções são sinalizadas; quando há mais de um candidato, o usuário confere o endereço correto. Não considerar o resultado automaticamente confirmado só porque o OCR retornou um e-mail.

### 3. Teste de privacidade do CSV de métricas
1. Crie e confirme apenas um registro fictício.
2. Exporte as métricas do piloto.
3. Abra o CSV em um editor de texto.
4. Verifique se o arquivo contém somente identificador de documento, tipo de origem e tempos de processamento/revisão.

**Esperado:** não há nome, telefone, e-mail nem data pessoal no CSV de métricas.

### 4. Teste do cache da interface
1. Abra a aplicação com internet e aguarde o carregamento.
2. Feche e reabra a aplicação.
3. Se o navegador permitir, verifique o comportamento da interface sem rede.

**Esperado:** o shell da interface pode abrir a partir do cache se o service worker tiver instalado e armazenado os arquivos corretamente. Isso **não** significa que o OCR funcione offline nesta versão.

### 5. Testes depois de publicar uma versão
1. Feche todas as abas do aplicativo.
2. Reabra e confira se a versão nova foi carregada.
3. Se aparecer uma versão antiga, feche o navegador ou limpe os dados do site e repita o teste.

## Critérios antes de mesclar para `main`

- [ ] Fluxo de documento fictício funciona em Android.
- [ ] E-mail normal é extraído corretamente.
- [ ] E-mail com símbolo confundido é recuperado e sinalizado.
- [ ] E-mail dividido em linhas é testado com imagem realista fictícia.
- [ ] Seleção entre múltiplos e-mails foi verificada.
- [ ] CSV de métricas não contém dados pessoais.
- [ ] Service worker instala sem erro.
- [ ] Ícones e manifesto funcionam na instalação PWA.
- [ ] Limitações de uso online/offline estão documentadas.
- [ ] OCR offline só é anunciado depois que os arquivos locais forem adicionados e testados sem rede.

## Segurança

- Não use nomes, e-mails, telefones, imagens ou prontuários reais nos testes.
- A exportação de contatos pode conter dados pessoais e não tem criptografia própria; armazene-a com proteção adequada.
- Esta lista é um roteiro de validação manual, não uma certificação de segurança ou conformidade legal.
