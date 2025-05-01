import React, { useRef } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    position: fixed;
    top :0;
    background: white;
    width: 100%;
    z-index: 1000;
`
const NavUl = styled.ul`
    display: flex;
    gap:12px;
    list-style: none;
    padding: 12px;
    cursor: pointer;
`

const UseRefScroll = () => {
    const scrollRef = useRef({
        main : null,
        about : null,
        history : null

    })

    const handleScrollView = (sectionKey) => {
        scrollRef.current[sectionKey]?.scrollIntoView({behavior:"smooth"})
    }


    return (
        <>
            <Nav>
                <NavUl>
                    {/* handleScrollView("main") : 이함수의 리턴값을 가져와 / ()=> handleScrollView("main") : 이 함수를 실행해줘..? */}
                    <li><button onClick={()=>handleScrollView("main")}>메인페이지</button></li>
                    <li><button onClick={()=>handleScrollView("about")}>회사소개</button></li>
                    <li><button onClick={()=>handleScrollView("history")}>회사이력</button></li>
                </NavUl>
            </Nav>
            <div>
                <section ref={(el) => scrollRef.current.main = el}>
                    <h1>메인페이지</h1>
                    <p>
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.

                    </p>
                </section>
                <section ref={(el) => scrollRef.current.about = el}>
                    <h1>회사소개</h1>
                    <p>
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.

                    </p>
                </section>
                <section ref={(el) => scrollRef.current.history = el}>
                    <h1>회사이력</h1>
                    <p>
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.
                    LG전자는 ‘Life's Good’ 브랜드 철학을 바탕으로 고객에게 더 나은 삶을 제공하기 위해
                    ▲최고의(First) ▲차별화된(Unique) ▲세상에 없던(New) F·U·N 경험을 선사하고자 항상 노력합니다.
                    HS(Home Appliance Solution), MS(Media Entertainment Solution, VS(Vehicle Solution), ES(Eco Solution)의 사업본부로 구성되어
                    있으며, 전 세계 130여 개 사업장에서 사업을 전개하며 가전, IT, 자동차부품, 사이니지 등 다양한 분야에서 기술혁신을 선도하는 글로벌 리더입니다.

                    </p>
                </section>
            </div>

        </>

    )
}

export default UseRefScroll