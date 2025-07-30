package com.kh.reactbackend.service;


import com.kh.reactbackend.dto.MailDto;

import com.kh.reactbackend.dto.MailDto.Verify;
import com.kh.reactbackend.entity.EmailVerification;
import com.kh.reactbackend.repository.EmailVerificationRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import lombok.RequiredArgsConstructor;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
@RequiredArgsConstructor
@Transactional
public class MailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;
    private final EmailVerificationRepository emailVerificationRepository;

    public void sendVerificationCode(String email){

        String code = String.format("%06d", new Random().nextInt(999999));

        EmailVerification verification = new EmailVerification();
        verification.setData(email, code, LocalDateTime.now(), false);
        emailVerificationRepository.save(verification);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("이메일 인증코드");
        message.setText("인증코드 :" + code);
        mailSender.send(message);
    }

    public boolean  checkVerificationCode(String email, String code) {

      Optional <EmailVerification> optionl = emailVerificationRepository.findTopByEmailOrderByCreatedAtDesc(email);

      if(optionl.isEmpty()) return false;

      EmailVerification verification = optionl.get();
        if (!verification.isVerified()
                && verification.getCode().equals(code)
                && verification.getCreatedAt().isAfter(LocalDateTime.now().minusMinutes(3))
        ) {
        verification.setVerified(true);
        return true;
        }
        return false;
    }



    public void sendEamil(MailDto.RequestDto requestDto, MultipartFile file) throws MessagingException {
    //1. 템플릿에 사용할 데이터 구성

        Context context = new Context();
        context.setVariable("title", requestDto.getTitle());
        context.setVariable("body", requestDto.getBody());


        //2. 템플릿 렌더링
        String htmlContent = templateEngine.process("email-template", context);
        boolean isFiles = file != null && !file.isEmpty();

        //3. 메일 생성 및 전송
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,isFiles,"UTF-8");

        if(isFiles){
            String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
            helper.addAttachment(originalFilename, file);
        }

        mailSender.send(message);

    }


}
