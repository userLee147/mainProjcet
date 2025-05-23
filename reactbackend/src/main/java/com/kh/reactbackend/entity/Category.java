package com.kh.reactbackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "CATEGORY_NO", length = 100, nullable = false)
    private String categoryNo;

    @Column(name = "CATEGORY_NAME",length = 100, nullable = false)
    private String categoryName;

    //(1:M)일대다관계 양방향
    //연관관계의 주인은 menu
    //카테고리가 없어지면 메뉴가 사라지면 안됌
    @OneToMany(mappedBy = "category")
    private List<Menu> menu = new ArrayList<>();
}
