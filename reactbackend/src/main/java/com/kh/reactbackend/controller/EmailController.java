package com.kh.reactbackend.controller;


import com.kh.reactbackend.dto.MailDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.oauth.JwtTokenProvider;
import com.kh.reactbackend.service.MailService;
import com.kh.reactbackend.service.MemberService;
import java.lang.reflect.Field;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/email")
@CrossOrigin(origins="http://localhost:5173")
public class EmailController {

    private final MailService mailService;


    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(@RequestBody MailDto.EmailVerificationRequestDto requestDto){

        mailService.sendVerificationCode(requestDto.getEmail());
        return ResponseEntity.ok("이메일 전송 성공");
    }

    @PostMapping("/verify")
    public ResponseEntity<Boolean> verifyCode(@RequestBody MailDto.Verify requestDto){
        Boolean res =  mailService.checkVerificationCode(requestDto.getEmail(), requestDto.getCode());
        return ResponseEntity.ok(res);
    }



//    @PostMapping(value = "/send", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<String> sendEmail(@RequestPart("email") MailDto.RequestDto requestDto,
//                                      @RequestParam("email") String email,
//                                      @RequestPart(value = "file", required = false) MultipartFile file){
//
//
//    try{
//        mailService.sendEamil(requestDto, file);
//        return  ResponseEntity.ok("메일 전송 성공");
//    }catch(Exception e){
//        return  ResponseEntity.status(500).body("메일 전송 실패");
//    }
//
//    }
}
