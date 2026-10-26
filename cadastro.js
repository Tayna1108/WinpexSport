document
    .getElementById("formMoto")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // PEGAR OS VALORES DO FORMULÁRIO

        const marca =
            document.getElementById("marca").value;


        const modelo =
            document.getElementById("modelo").value;


        const ano =
            document.getElementById("ano").value;


        const cilindrada =
            document.getElementById("cilindrada").value;


        const potencia =
            document.getElementById("potencia").value;


        const preco =
            Number(
                document.getElementById("preco").value
            );


        const experiencia =
            document.getElementById("experiencia").value;


        // FORMATAR PREÇO

        const precoFormatado =
            preco.toLocaleString("pt-BR", {

                style: "currency",

                currency: "BRL"

            });


        // CRIAR NOVA LINHA

        const novaLinha =
            document.createElement("tr");


        novaLinha.innerHTML = `

            <td>${marca}</td>

            <td>${modelo}</td>

            <td>${ano}</td>

            <td>${cilindrada} cc</td>

            <td>${potencia} cv</td>

            <td>${precoFormatado}</td>

            <td>

                <span class="tag">

                    ${experiencia}

                </span>

            </td>

        `;


        // COLOCAR A LINHA NA TABELA

        document
            .getElementById("listaMotos")
            .appendChild(novaLinha);


        // AVISO

        alert("Moto cadastrada com sucesso!");


        // LIMPAR FORMULÁRIO

        this.reset();

    });