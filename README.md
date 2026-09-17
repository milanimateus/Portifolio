# Portfólio Web

Projeto de portfólio pessoal desenvolvido para comparar duas implementações da mesma página: uma utilizando **Bootstrap 5.3** e outra utilizando **Tailwind CSS**.

A página inicial permite escolher qual versão do portfólio visualizar. O conteúdo principal é equivalente nas duas implementações, incluindo apresentação pessoal, habilidades, projetos, informações de contato, responsividade e alternância entre os temas claro e escuro.

## Demonstração

Abra o arquivo [index.html](index.html) para acessar a página de seleção das versões:

- [Versão Bootstrap](bootstrap/index.html)
- [Versão Tailwind CSS](tailwind/index.html)

## Funcionalidades

- Layout responsivo para desktop e dispositivos móveis.
- Seções de apresentação, sobre, habilidades, projetos e contato.
- Menu de navegação adaptado para telas menores.
- Alternância entre tema claro e escuro.
- Persistência do tema escolhido com `localStorage`.
- Detecção inicial da preferência de tema do sistema operacional.
- Imagens locais para o perfil e para a identidade visual do projeto DevMemory.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Bootstrap 5.3.3, carregado via CDN na versão Bootstrap
- Tailwind CSS, carregado via CDN na versão Tailwind
- Bootstrap Icons 1.11.3

Não há backend, banco de dados, dependências para instalar ou processo de compilação. As bibliotecas externas são carregadas pela internet usando CDNs.

## Estrutura do projeto

```text
Portifolio/
├── index.html                 # Página para escolher a implementação
├── README.md
├── bootstrap/
│   ├── index.html              # Portfólio com Bootstrap
│   └── assets/
│       ├── css/style.css
│       ├── img/
│       └── js/script.js
└── tailwind/
	├── index.html              # Portfólio com Tailwind CSS
	└── assets/
		├── css/style.css
		├── img/
		└── js/script.js
```

## Como executar

### Abrindo diretamente no navegador

1. Abra o arquivo [index.html](index.html) no navegador.
2. Escolha a versão Bootstrap ou Tailwind CSS.

### Usando um servidor local

Executar por um servidor local é recomendado para reproduzir melhor o comportamento de um site publicado:

```powershell
cd caminho\para\Portifolio
py -m http.server 8000
```

Depois, acesse <http://localhost:8000> no navegador.

Também é possível usar qualquer servidor estático equivalente, como a extensão Live Server do VS Code.

## Comparação entre as versões

| Aspecto | Bootstrap | Tailwind CSS |
| --- | --- | --- |
| Estilização | Componentes e classes prontas do Bootstrap | Classes utilitárias diretamente no HTML |
| Tema | Atributo `data-bs-theme` | Classe `dark` no elemento `<html>` |
| Menu mobile | Componente Collapse do Bootstrap | Controle manual com JavaScript e classe `hidden` |
| JavaScript | Bootstrap Bundle e script próprio | Script próprio |
| Customização | CSS adicional em `assets/css/style.css` | Classes utilitárias e CSS adicional mínimo |

## Observações

- A aparência e o conteúdo das duas páginas foram mantidos próximos para facilitar a comparação entre os frameworks.
- Os frameworks e os ícones dependem de conexão com a internet por serem carregados via CDN.
- Alguns links de projetos ainda são demonstrativos e usam `#` ou imagens de placeholder.
- O e-mail exibido na seção de contato ainda deve ser substituído por um endereço real antes da publicação.
- O conteúdo pessoal, links de redes sociais e projetos podem ser atualizados diretamente nos arquivos `index.html` de cada versão.

## Autor

Mateus Milani