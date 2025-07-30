package com.kh.reactbackend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class MailDto {

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class EmailVerificationRequestDto{
        private String email;
    }


    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Verify{
        private String email;
        private String code;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class RequestDto{
        private String to; //받는 사람 이메일
        private String subject; // 메일 제목
        private String title; // 내용의 제목
        private String body; //내용
    }



}
