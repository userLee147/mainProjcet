package com.kh.reactbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "code",  nullable = false)
    private Long code;

    @Column(name= "USER_Id", length = 100,  nullable = false)
    private String userId;

    @Column(name= "NAME", length = 100,  nullable = false)
    private String name;

    @Column(name = "USER_PWD", length = 100,  nullable = false)
    private String userPwd;

    @Column(name ="CHECK_PWD", length = 100, nullable = false)
    private String checkPwd;

    @Column(name ="EMAIL", nullable = false)
    private String email;

    private int age;

    private Boolean log;

    public void updateLogin(Boolean login) {
        this.log = login;
    }
    public void changeAge(int age) {
        this.age = age;
    }
    public void changeName(String name){
        this.name = name;
    }
    public void changeEmail(String email){
        this.email = email;
    }
}
