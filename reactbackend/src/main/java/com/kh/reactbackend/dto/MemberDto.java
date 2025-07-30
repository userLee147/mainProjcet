package com.kh.reactbackend.dto;

import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.enums.SocialType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.*;

public class MemberDto {

    @Builder
    @AllArgsConstructor
    @Getter
    @NoArgsConstructor
    @Setter
    public static class Response{
        private String userName;
        private String userPwd;
        private String email;



        public static Response toDto(Member member){
            return Response.builder()
                    .userPwd(member.getUserPwd())
                    .email(member.getEmail())
                    .userName(member.getName())
                    .build();
        }

        public Member toEntity() {
            return Member.builder()
                    .userPwd(this.userPwd)
                    .name(this.userName)
                    .email(this.email)
                    .build();
        }



    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LoginDto {
        private String email;
        private String userPwd;

        public Member toEntity(){
            return Member.builder()
                    .email(this.email)
                    .userPwd(this.userPwd)
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    @Builder
    public static class InfoDto {
        private String userName;
        private String email;
        private SocialType socialType;
        private LocalDateTime updatedAt;

        public static InfoDto loginDto(Member member, SocialType socialType) {
            return InfoDto.builder()
                    .userName(member.getName())
                    .email(member.getEmail())
                    .socialType(socialType) // 외부에서 전달받음
                    .updatedAt(member.getUpdatedAt())
                    .build();
        }

    }


}



