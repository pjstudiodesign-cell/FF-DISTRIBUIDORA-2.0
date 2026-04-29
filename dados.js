const categoriasCardapio = [
    {
        id: "cerveja",
        nome: "Cervejas",
        itens: [
            // --- SUB-CATEGORIA: LITRÃO ---
            { secao: true, nome: "--- LITRÃO ---" },
            { id: 13, nome: "Skol Litrão", preco: 10.00, desc: "Cerveja Skol 1 Litro", img: "cerveja/cerfeja_skol_litrao_.jpg" },
            { id: 14, nome: "Brahma Litrão", preco: 10.00, desc: "Cerveja Brahma 1 Litro", img: "cerveja/brahma_litrao.jpg" },
            { id: 15, nome: "Antarctica Litrão", preco: 10.00, desc: "Cerveja Antarctica 1 Litro", img: "cerveja/antarctica_litrao.jpg" },
            { id: 48, nome: "Império Litrão", preco: 10.00, desc: "Cerveja Império 1 Litro", img: "cerveja/imperio_litrao.jpg" },
            { id: 50, nome: "Amstel Litrão", preco: 10.00, desc: "Cerveja Amstel 1 Litro", img: "cerveja/amstel_litrao.jpg" },

            // --- SUB-CATEGORIA: 600ML ---
            { secao: true, nome: "--- 600ML ---" },
            { id: 49, nome: "Heineken 600ml", preco: 16.00, desc: "Cerveja Heineken 600ml", img: "cerveja/heineken_600ml.jpg" },
            { id: 51, nome: "Spaten 600ml", preco: 11.00, desc: "Cerveja Spaten 600ml", img: "cerveja/spaten_600ml.jpg" },
            { id: 52, nome: "Original 600ml", preco: 11.00, desc: "Cerveja Original 600ml", img: "cerveja/original_600ml.jpg" },

            // --- SUB-CATEGORIA: LATÃO E LATAS ---
            { secao: true, nome: "--- LATÃO E LATAS ---" },
            { id: 43, nome: "Skol 550ml", preco: 6.50, desc: "Cerveja Skol Latão 550ml", img: "cerveja/skol_550.jpg" },
            { id: 44, nome: "Brahma 550ml", preco: 6.50, desc: "Cerveja Brahma Latão 550ml", img: "cerveja/brahma_550.jpg" },
            { id: 45, nome: "Antarctica 550ml", preco: 6.50, desc: "Cerveja Antarctica Latão 550ml", img: "cerveja/antarctica_550.jpg" },
            { id: 46, nome: "Spaten 473ml", preco: 6.00, desc: "Cerveja Spaten Latão 473ml", img: "cerveja/spaten_473.jpg" },
            { id: 47, nome: "Amstel 473ml", preco: 5.50, desc: "Cerveja Amstel Latão 473ml", img: "cerveja/amstel_473.jpg" },
            { id: 53, nome: "Heineken Lata 350ml", preco: 6.50, desc: "Cerveja Heineken Lata 350ml", img: "cerveja/heineken_350.jpg" },
            { id: 54, nome: "Budweiser Lata 350ml", preco: 5.00, desc: "Cerveja Budweiser Lata 350ml", img: "cerveja/bud_350.jpg" },
            { id: 55, nome: "Coronita 210ml", preco: 6.00, desc: "Cerveja Corona Extra 210ml", img: "cerveja/coronita.jpg" }
        ]
    },
    {
        id: "combos",
        nome: "Combos",
        itens: [
            { id: 301, nome: "Combo Cavalo Branco", preco: 110.00, desc: "1 Cavalo Branco + 5 Energéticos 250ml + Gelo", img: "combos/combo_cavalo_branco.jpg" },
            { id: 302, nome: "Combo Red Label", preco: 130.00, desc: "1 Red Label + 5 Energéticos 250ml + Gelo", img: "combos/combo_red_label.jpg" },
            { id: 303, nome: "Combo Black Label", preco: 220.00, desc: "1 Black Label + 5 Energéticos 250ml + Gelo", img: "combos/combo_black_label.jpg" },
            { id: 304, nome: "Combo Jack Daniels", preco: 200.00, desc: "1 Jack Daniels + 5 Energéticos 250ml + Gelo", img: "combos/combo_jack.jpg" },
            { id: 305, nome: "Combo Ballantines", preco: 130.00, desc: "1 Ballantines + 5 Energéticos 250ml + Gelo", img: "combos/combo_ballantines.jpg" },
            { id: 306, nome: "Combo Gin Tanqueray", preco: 160.00, desc: "1 Gin Tanqueray + 5 Tônicas + Gelo", img: "combos/combo_tanqueray.jpg" },
            { id: 307, nome: "Combo Smirnoff", preco: 80.00, desc: "1 Smirnoff + 1 Suco 1L + Gelo", img: "combos/combo_smirnoff.jpg" }
        ]
    },
    {
        id: "destilados",
        nome: "Destilados",
        itens: [
            { id: 101, nome: "Red Label 1L", preco: 100.00, desc: "Whisky Johnnie Walker Red Label 1L", img: "destilados/red_label.jpg" },
            { id: 102, nome: "Black Label 1L", preco: 180.00, desc: "Whisky Johnnie Walker Black Label 1L", img: "destilados/black_label.jpg" },
            { id: 103, nome: "Cavalo Branco 1L", preco: 85.00, desc: "Whisky White Horse 1L", img: "destilados/cavalo_branco.jpg" },
            { id: 104, nome: "Jack Daniels 1L", preco: 160.00, desc: "Whisky Jack Daniels 1L", img: "destilados/jack_daniels.jpg" },
            { id: 105, nome: "Ballantines 1L", preco: 100.00, desc: "Whisky Ballantines 1L", img: "destilados/ballantines.jpg" },
            { id: 106, nome: "Gin Tanqueray 750ml", preco: 130.00, desc: "Gin Tanqueray 750ml", img: "destilados/tanqueray.jpg" },
            { id: 107, nome: "Vodka Smirnoff 998ml", preco: 45.00, desc: "Vodka Smirnoff 998ml", img: "destilados/smirnoff.jpg" },
            { id: 108, nome: "Vodka Absolut 1L", preco: 90.00, desc: "Vodka Absolut 1L", img: "destilados/absolut.jpg" },
            { id: 109, nome: "Campari 900ml", preco: 60.00, desc: "Aperitivo Campari 900ml", img: "destilados/campari.jpg" },
            { id: 110, nome: "Cachaça 51 965ml", preco: 20.00, desc: "Aguardente 51 965ml", img: "destilados/51.jpg" }
        ]
    },
    {
        id: "refrigerantes",
        nome: "Refrigerantes",
        itens: [
            { id: 201, nome: "Coca-Cola 2L", preco: 12.00, desc: "Refrigerante Coca-Cola 2 Litros", img: "refrigerantes/coca_2l.jpg" },
            { id: 202, nome: "Guaraná Ant. 2L", preco: 10.00, desc: "Refrigerante Guaraná Antarctica 2L", img: "refrigerantes/guarana_2l.jpg" },
            { id: 203, nome: "Fanta Laranja 2L", preco: 10.00, desc: "Refrigerante Fanta Laranja 2L", img: "refrigerantes/fanta_2l.jpg" },
            { id: 204, nome: "Coca-Cola 600ml", preco: 7.00, desc: "Refrigerante Coca-Cola 600ml", img: "refrigerantes/coca_600.jpg" },
            { id: 205, nome: "Coca-Cola Lata 350ml", preco: 5.00, desc: "Refrigerante Coca-Cola Lata 350ml", img: "refrigerantes/coca_350.jpg" },
            { id: 206, nome: "Guaraná Lata 350ml", preco: 4.50, desc: "Refrigerante Guaraná Lata 350ml", img: "refrigerantes/guarana_350.jpg" }
        ]
    },
    {
        id: "energeticos",
        nome: "Energéticos",
        itens: [
            { id: 401, nome: "Red Bull 250ml", preco: 10.00, desc: "Energético Red Bull 250ml", img: "energeticos/redbull_250.jpg" },
            { id: 402, nome: "Monster 473ml", preco: 10.00, desc: "Energético Monster 473ml", img: "energeticos/monster_473.jpg" },
            { id: 403, nome: "Baly 2L", preco: 15.00, desc: "Energético Baly 2 Litros", img: "energeticos/baly_2l.jpg" },
            { id: 404, nome: "Baly 250ml", preco: 5.00, desc: "Energético Baly 250ml", img: "energeticos/baly_250.jpg" }
        ]
    },
    {
        id: "agua",
        nome: "Água/Sucos",
        itens: [
            { id: 501, nome: "Água s/ Gás 500ml", preco: 3.00, desc: "Água Mineral sem Gás 500ml", img: "água/agua_sem_gas.jpg" },
            { id: 502, nome: "Água c/ Gás 500ml", preco: 4.00, desc: "Água Mineral com Gás 500ml", img: "água/agua_com_gas.jpg" },
            { id: 503, nome: "Suco Dell Valle 1L", preco: 8.00, desc: "Suco Dell Valle 1 Litro", img: "sucos/del_valle_1l.jpg" },
            { id: 504, nome: "Água de Coco 1L", preco: 12.00, desc: "Água de Coco 1 Litro", img: "sucos/agua_coco_1l.jpg" }
        ]
    },
    {
        id: "gelo",
        nome: "Gelo/Carvão",
        itens: [
            { id: 601, nome: "Gelo de Coco", preco: 5.00, desc: "Gelo de Coco para Drinks", img: "gelo/gelo_coco.jpg" },
            { id: 602, nome: "Gelo de Frutas", preco: 5.00, desc: "Gelo de Frutas Variadas", img: "gelo/gelo_fruta.jpg" },
            { id: 603, nome: "Gelo 2kg", preco: 10.00, desc: "Pacote de Gelo Cubo 2kg", img: "gelo/gelo_cubo.jpg" },
            { id: 604, nome: "Carvão 3kg", preco: 15.00, desc: "Saco de Carvão 3kg", img: "carvão/carvao_3kg.jpg" }
        ]
    }
];

const bairrosEntrega = [
    { nome: "Centro", taxa: 5.00 },
    { nome: "Bairro de Fátima", taxa: 7.00 },
    { nome: "Vila Elmira", taxa: 8.00 },
    { nome: "Ano Bom", taxa: 6.00 },
    { nome: "Vista Alegre", taxa: 10.00 },
    { nome: "Retiro", taxa: 12.00 },
    { nome: "Vila Nova", taxa: 7.00 }
];
