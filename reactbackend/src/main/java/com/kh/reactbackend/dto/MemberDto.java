package com.kh.reactbackend.dto;

import com.kh.reactbackend.entity.Member;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

public class MemberDto {

    @Builder
    @AllArgsConstructor
    @Getter
    @NoArgsConstructor
    @Setter
    public static class Response{
        private Long code;
        private String userId;
        private String name;
        private String userPwd;
        private String email;
        private int age;
        private Boolean log;


        public static Response toDto(Member member){
            return Response.builder()
                    .code(member.getCode())
                    .userId(member.getUserId())
                    .userPwd(member.getUserPwd())
                    .age(member.getAge())
                    .email(member.getEmail())
                    .name(member.getName())
                    .log(member.getLog())
                    .build();
        }

        public Member toEntity() {
            return Member.builder()
                    .userId(this.userId)
                    .userPwd(this.userPwd)
                    .age(this.age)
                    .checkPwd(this.userPwd)
                    .name(this.name)
                    .email(this.email)
                    .log(false)
                    .build();
        }
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Update {
        private String userId;
        private Boolean log;
        private String userPwd;

        public Member toEntity(){
            return Member.builder()
                    .userId(this.userId)
                    .userPwd(this.userPwd)
                    .log(this.log)
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    public static class UpdateUserDto {
        private Long code;
        private String name;
        private String email;
        private int age;
    }
}



