package com.kh.reactbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name ="MENU_NO", length = 100, nullable = false)
    private String menuNo;

    //(M:1)다대일관계 양방향
    //연관관계의 주인은 menu
    //메뉴가 없어지면 카테고리가 사라지면 안됌
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="CATEGORY_NO")
    private Category category ;

    @Column(name ="MENU_NAME", length = 100, nullable = false)
    private String menuName;

    private Integer price;

    @Column(name ="IMG", nullable = false)
    private String img;

    @Column(name ="DESCRIPTION", length = 300, nullable = false)
    private String description;

}
