/* =========================
   FILTRO DE MOTOS
========================= */

const filtro = document.getElementById("filtroMarca");

const cards = document.querySelectorAll(".bike-card");


filtro.addEventListener("change", function () {

    const marcaSelecionada = this.value;

    cards.forEach(card => {

        const marca = card.dataset.marca;

        if (
            marcaSelecionada === "todas" ||
            marca === marcaSelecionada
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


/* =========================
   COMPARAÇÃO
========================= */

let motosSelecionadas = [];


function adicionarComparacao(moto) {

    if (motosSelecionadas.includes(moto)) {

        alert(
            moto + " já está na comparação."
        );

        return;

    }


    if (motosSelecionadas.length >= 2) {

        alert(
            "Escolha no máximo 2 motos para comparar."
        );

        return;

    }


    motosSelecionadas.push(moto);


    alert(
        moto +
        " foi adicionada à comparação!"
    );


    console.log(
        "Motos selecionadas:",
        motosSelecionadas
    );

}


/* =========================
   CALCULADORA DE SALÁRIO
========================= */

function calcularMoto() {

    const salario =
        Number(
            document.getElementById(
                "salarioInput"
            ).value
        );


    const preco =
        Number(
            document.getElementById(
                "motoPreco"
            ).value
        );


    const entrada =
        Number(
            document.getElementById(
                "entradaInput"
            ).value
        ) || 0;


    const resultado =
        document.getElementById(
            "resultado"
        );


    if (salario <= 0) {

        resultado.innerHTML =
            "⚠️ Digite uma renda mensal válida.";

        return;

    }


    const valorFinanciado =
        Math.max(
            preco - entrada,
            0
        );


    /*
        SIMULAÇÃO SIMPLIFICADA

        48 meses

        NÃO representa uma proposta
        real de financiamento.
    */

    const parcelas =
        valorFinanciado / 48;


    /*
        Regra de referência:

        até 15% da renda
        = mais confortável

        15% a 25%
        = atenção

        acima de 25%
        = pesado
    */

    const limiteConfortavel =
        salario * 0.15;


    const limiteAtencao =
        salario * 0.25;


    let classificacao;


    if (
        parcelas <= limiteConfortavel
    ) {

        classificacao =
            `
            <strong style="color:#40d98a">
            BOA FAIXA
            </strong>
            <br>
            A parcela estimada está
            dentro de uma faixa mais
            conservadora da sua renda.
            `;

    }

    else if (
        parcelas <= limiteAtencao
    ) {

        classificacao =
            `
            <strong style="color:#ffd43b">
            ATENÇÃO
            </strong>
            <br>
            A parcela pode pesar no
            orçamento. Avalie também
            seguro, combustível,
            manutenção e documentação.
            `;

    }

    else {

        classificacao =
            `
            <strong style="color:#ff3333">
            MUITO PESADO
            </strong>
            <br>
            A parcela estimada representa
            uma parcela elevada da sua
            renda mensal.
            `;

    }


    resultado.innerHTML = `

        <strong>
        Resultado da análise
        </strong>

        <br><br>

        Valor da moto:
        <strong>
        ${formatarMoeda(preco)}
        </strong>

        <br>

        Entrada:
        <strong>
        ${formatarMoeda(entrada)}
        </strong>

        <br>

        Valor restante:
        <strong>
        ${formatarMoeda(valorFinanciado)}
        </strong>

        <br>

        Parcela simplificada em 48x:
        <strong>
        ${formatarMoeda(parcelas)}
        </strong>

        <br><br>

        ${classificacao}

        <br><br>

        <small>
        Essa conta não considera juros,
        tarifas, seguro ou outros custos.
        Use apenas como referência.
        </small>

    `;

}


/* =========================
   FORMATAÇÃO DE DINHEIRO
========================= */

function formatarMoeda(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================
   MENU ATIVO
========================= */

const links =
    document.querySelectorAll(
        ".sidebar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let atual = "";

        document
            .querySelectorAll("section")
            .forEach(section => {

                const topo =
                    section.offsetTop - 200;

                if (
                    window.scrollY >= topo
                ) {

                    atual =
                        section.getAttribute(
                            "id"
                        );

                }

            });


        links.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) === "#" + atual
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);