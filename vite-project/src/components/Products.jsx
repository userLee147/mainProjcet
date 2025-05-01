import React from 'react'
import styled from 'styled-components'

const productItems = [{
    product_name: "삼성tv",
    price: 10000,
    color: "블랙"

}, {
    product_name: "엘지 냉장고",
    price: 30000,
    color: "블랙"

},
{
    product_name: "애플 노트북",
    price: 50000,
    color: "블랙"
}
]
const Table = styled.table`
    width : 300px;
    border: 1px solid black;
    border-radius: 4px;
    border-collapse: collapse;
`
const Th = styled.th`
    padding: 12px;

`
const Tr = styled.tr`
    border: 1px solid black;
    padding: 12px;
    &:hover{
        background: #f1f1f1;
    }
`
const Td = styled.td`
    padding: 12px;
`


function Products() {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <Th>제품명</Th>
                        <Th>가격</Th>
                        <Th>색상</Th>
                    </tr>
                </thead>
                <tbody>
                    {productItems.map((item) =>
                        <Tr>
                            <Td>{item.product_name}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.color}</Td>
                        </Tr>
                    )}
                </tbody>

            </Table>
        </div>
    )
}

export default Products