import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('https://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Trabalho</td>
                        <td>12/02/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="withdraw">-R$1.200</td>
                        <td>Habitação</td>
                        <td>07/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}