// MOTOR DE RENDERIZAÇÃO - LACRADO E INTEGRAL
function mudarAba(id, btnAlvo) {
    if(btnAlvo) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btnAlvo.classList.add('active');
    }
    
    const container = document.getElementById('itens-container');
    if (!container) return; 
    
    container.innerHTML = "";
    const cat = categoriasCardapio.find(c => c.id === id);
    
    if (cat && cat.itens) {
        cat.itens.forEach(item => {
            // 1. VERIFICAÇÃO CIRÚRGICA DE TÍTULO (SEÇÃO)
            if (item.secao === true) {
                const divTitulo = document.createElement('div');
                // Estilo que força o título a ocupar a linha toda e destaca o visual
                divTitulo.style.cssText = "grid-column: 1 / -1; width: 100%; background: #ffcc00; color: #000; padding: 12px; margin: 15px 0 10px 0; border-radius: 5px; font-weight: bold; text-align: center; text-transform: uppercase; font-size: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); clear: both;";
                divTitulo.innerText = item.nome;
                container.appendChild(divTitulo);
                return; // Lacre: impede a criação de card de produto para este item
            } 

            // 2. MOTOR DE PRODUTO ORIGINAL (MANUTENÇÃO DA INTEGRIDADE)
            // Preserva imagens e funcionalidades da image_8c68f1.png
            const card = document.createElement('div');
            card.className = "card";
            card.innerHTML = `
                <img src="${item.img}" alt="${item.nome}" onerror="this.src='logo.jpg'">
                <h3>${item.nome}</h3>
                <p>${item.desc}</p>
                <div class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                <div class="qtd-container">
                    <input type="number" class="input-qtd" id="qtd-${item.id}" value="1" min="1">
                    <button class="btn-add" onclick="addCarrinho('${item.id}', '${item.nome}', ${item.preco})">Adicionar</button>
                </div>
            `;
            container.appendChild(card);
        });
    }
}
