let livros = [
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        editora: "Editora Garnier",
        ano: 1899,
        sinopse: "Bentinho narra sua história de amor com Capitu e sua obsessão com a possível traição dela.",
        paginas: 384,
        genero: ["romance", "clássico"],
        preco: 29.90
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        editora: "HarperCollins",
        ano: 1954,
        sinopse: "Frodo Bolseiro embarca em uma missão para destruir o Um Anel e salvar a Terra Média da escuridão.",
        paginas: 423,
        genero: ["fantasia", "aventura"],
        preco: 59.90
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        editora: "Companhia das Letras",
        ano: 1949,
        sinopse: "Em um futuro distópico, Winston Smith luta contra o regime totalitário que controla a mente das pessoas.",
        paginas: 376,
        genero: ["distopia", "ficção científica"],
        preco: 39.90
    },
    {
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        editora: "Intrínseca",
        ano: 2012,
        sinopse: "Hazel e Gus, dois jovens com câncer, se apaixonam e vivem uma história de amor marcada por desafios e emoções.",
        paginas: 288,
        genero: ["romance", "drama"],
        preco: 39.90
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        editora: "Editora Rocco",
        ano: 1943,
        sinopse: "Um piloto encontra um príncipe vindo de outro planeta e aprende valiosas lições sobre a vida e o amor.",
        paginas: 96,
        genero: ["infantil", "filosófico"],
        preco: 24.90
    }
];

function mostralivros(){
    console.log("Título - Autor - Ano - PÁGINAS - Preço")
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + livro.autor + " - " + "ano:" + livro.ano  + "   páginas" + " - " + livro.paginas + "  preço: R$ " + livro.preco )
    })
}
mostralivros();



