import { ProductListing } from "./ProductListing";

import '../styles/ProductsFilterBy.css';

const ProductsFilterBy = () => {
    // Exemplo de dados para filtros. Em uma aplicação real, isso viria de um estado, props ou API.
    const filterOptions = {
        marcas: [
            { id: "marca-adidas", label: "Adidas" },
            { id: "marca-nike", label: "Nike" },
            { id: "marca-puma", label: "Puma" },
            { id: "marca-kswiss", label: "K-Swiss" },
        ],
        categorias: [
            { id: "cat-tenis", label: "Tênis" },
            { id: "cat-camiseta", label: "Camiseta" },
            { id: "cat-acessorios", label: "Acessórios" },
        ],
        genero: [
            { id: "genero-masculino", label: "Masculino" },
            { id: "genero-feminino", label: "Feminino" },
            { id: "genero-unisex", label: "Unisex" },
        ],
        estado: [
            { id: "estado-novo", label: "Novo" },
            { id: "estado-usado", label: "Usado" }
        ]
        // Adicione mais seções de filtro conforme necessário (ex: preço, tamanho)
    };

    return (
        <>
            <div id="products-filter-header">
                <div id="products-results">
                    <p><strong>Resultados para "{filterOptions.categorias.label}"</strong> - </p>
                </div>
                <div id="products-order-by">
                    <input className="form-control" list="datalistOptions" id="orderByList" placeholder="Ordenar por " />
                    <datalist id="datalistOptions">
                        <option value="Mais relevantes" />
                        <option value="Maior preço" />
                        <option value="Menor preço" />
                        <option value="Em oferta" />
                    </datalist>                    
                </div>
            </div>
            
            <div className="products-filter-layout">
                <aside className="filters-sidebar">
                    <h3>Filtrar por</h3>
                    <hr />

                    <div className="filter-section">
                        <h4>Marcas</h4>
                        {filterOptions.marcas.map((marca) => (
                            <div className="form-check" key={marca.id}>
                                <input
                                    className="form-check-input" // Classe Bootstrap para estilização
                                    type="checkbox"
                                    value={marca.label} // O valor enviado se o formulário for submetido
                                    id={marca.id} // ID único para associar com o label
                                />
                                <label className="form-check-label" htmlFor={marca.id}>
                                    {marca.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="filter-section">
                        <h4>Categorias</h4>
                        {filterOptions.categorias.map((categorias) => (
                            <div className="form-check" key={categorias.id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={categorias.label}
                                    id={categorias.id}
                                />
                                <label className="form-check-label" htmlFor={categorias.id}>
                                    {categorias.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="filter-section">
                        <h4>Gênero</h4>
                        {filterOptions.genero.map((genero) => (
                            <div className="form-check" key={genero.id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={genero.label}
                                    id={genero.id}
                                />
                                <label className="form-check-label" htmlFor={genero.id}>
                                    {genero.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="filter-section">
                        <h4>Estado</h4>
                        {filterOptions.estado.map((estado) => (
                            <div className="form-check" key={estado.id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={estado.label}
                                    id={estado.id}
                                />
                                <label className="form-check-label" htmlFor={estado.id}>
                                    {estado.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Você pode adicionar mais seções de filtro aqui, seguindo o mesmo padrão */}
                </aside>

                <main className="products-listing-area">
                    <ProductListing />
                </main>
            </div>
        </>
    );
};

export { ProductsFilterBy };
