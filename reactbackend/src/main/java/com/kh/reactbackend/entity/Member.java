package com.kh.reactbackend.entity;

import com.kh.reactbackend.enums.Role;
import com.kh.reactbackend.enums.SocialType;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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

    @Column(name ="EMAIL", nullable = false)
    private String email;

    @Column(name= "NAME", length = 100,  nullable = false)
    private String name;

    @Column(name = "USER_PWD", length = 100,  nullable = false)
    private String userPwd;


    @Column(name ="PHONE")
    private String phone;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime updatedAt;


    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SocialLogin> socialLogins = new ArrayList<>();


    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Role role = Role.USER;


    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }


    public void  setUpdatedAt(){
        this.updatedAt = LocalDateTime.now();
    }

    public void addSocialLogin(SocialLogin socialLogin) {
        socialLogins.add(socialLogin);      // 컬렉션에 추가
        socialLogin.setMember(this);        // 주인 쪽에도 연결
    }

}
