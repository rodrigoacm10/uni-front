# Galeno

### 🚀 Deploy

O projeto está disponível em: [https://uni-front-uxlo.vercel.app/](https://uni-front-uxlo.vercel.app/)

---

### 👥 Integrantes

- Rodrigo Andrade Cavalcante Muniz - 01606059
- Eliel Lucas Trajano Neto - 01606048
- José Gabriel Rocha Barreto - 01597807
- Matheus Henrique da Costa Nascimento - 01601141
- Pedro Antônio Silva Pedroso - 01605602
- Rafael Aragão Vieira - 01592062

---

## 📝 Descrição

**Galeno** é um aplicativo web desenvolvido em Angular que simula uma loja virtual. Ele conta com funcionalidades como navegação entre páginas, consumo de API, filtros personalizados, formatação de preços e manipulação de armazenamento local.

---

## 🛠️ Tecnologias Utilizadas

- **Angular**
- **Tailwind CSS**

---

## 🌐 API Utilizada

- **Fake Store API**: [https://fakestoreapi.com/](https://fakestoreapi.com/)

---

## 📂 Estrutura do Projeto

### 🔗 Páginas

1. **Página Inicial**: Apresenta os produtos disponíveis.
2. **Produto/:id**: Exibe os detalhes de um produto específico.
3. **Carrinho**: Mostra os itens adicionados pelo usuário.

### 🧩 Componentes

- **Car**: Gerencia a exibição dos produtos no carrinho.
- **Filter**: Permite aplicar filtros aos produtos.
- **Home**: Componente principal da página inicial.
- **Product**: Exibe os detalhes do produto.

### 🔧 Pipes

- **`currency-format.pipe`**: Formata valores como preços.
- **`styled-text.pipe`**: Destaca partes específicas de um texto.

### 📜 Services

- **`data-api.service`**: Gerencia as requisições para a API.
- **`filters.service`**: Implementa lógica de filtragem de dados.
- **`local-storage.service`**: Controla o armazenamento local do navegador.

### 🎨 Diretivas Personalizadas

- **`filter-item.directive`**: Estiliza botões de filtragem.
- **`hover-gap.directive`**: Aplica espaçamento dinâmico ao passar o mouse.
- **`hover-lift.directive`**: Adiciona um efeito de elevação ao passar o mouse.

### 🔨 Diretivas Estruturais

- **`ngIf`**: Exibe elementos dinamicamente com base em condições.
- **`ngFor`**: Itera sobre listas para renderizar itens.

---

## ✅ Requisitos Atendidos

- **Rotas**: O projeto contém 3 rotas principais: `/`, `/produto/:id`, `/carrinho`.
- **API**: Consumo da Fake Store API com o método `GET`.
- **Pipes**: Dois pipes criados, um personalizado e outro estrutural.
- **Services**: Uso de três services com funcionalidades distintas.
- **Diretivas**: Implementação de duas diretivas personalizadas e uso de `ngIf` e `ngFor`.
- **Estilo**: Estilização feita com **Tailwind CSS**.

---

## 🚀 Instalação e Execução Local

1. Certifique-se de estar no diretório raiz do projeto.
2. Instale as dependências com o comando:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento com:

   ```bash
   ng serve
   ```

4. Inicie o servidor de desenvolvimento com: [http://localhost:4200/](http://localhost:4200/)
