package com.kh.reactbackend.service;

;
import com.kh.reactbackend.dto.MemberDto.InfoDto;

import com.kh.reactbackend.dto.MemberDto.Response;
import com.kh.reactbackend.entity.Member;

import com.kh.reactbackend.entity.SocialLogin;
import com.kh.reactbackend.enums.SocialType;
import com.kh.reactbackend.exception.UserAleadyExistsException;
import com.kh.reactbackend.exception.UserNotFoundException;

import com.kh.reactbackend.repository.MemberRepository;

import com.kh.reactbackend.repository.SocialLoginRepository;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService{

   private final MemberRepository memberRepository;
   private final PasswordEncoder passwordEncoder;



    //세션로그인 DB에서 유저확인
    @Override
    public Member findbyMember(String email, String userPwd) {
        Optional<Member> optMember = memberRepository.findByEmail(email);
        if (!optMember.isPresent()) {
            throw new UserNotFoundException("이메일이 존재하지 않습니다.");
        }

        Member m = optMember.get();
        if (!passwordEncoder.matches(userPwd, m.getUserPwd())) {
            throw new UserNotFoundException("비밀번호가 일치하지 않습니다.");
        }
        return m;
    }

    // 소셜아이디로 회원인지 확인하기 -> 소셜아이디별 회원가입을 함(이메일이 중복가능성 있음)
//    @Override
//    public Member getmemberbySocialId(String socialId, SocialType socialType) {
//        Member member = memberRepository.findBySocialIdAndSocialType(socialId, socialType).orElse(null);
//        return member;
//    }

    // 회원가입시키기
    public Member createOauth(String socialId,String name,String email, SocialType socialType){
        Member member = Member.builder().
                email(email)
                .name(name)
                .userPwd("")
                .phone(null)
                .build();

        memberRepository.save(member);
        return member;
    }

    @Override
    public Member addMember(Response signupDto) {

        //이메일 중복검사
        if(memberRepository.existsByEmail(signupDto.getEmail())){
            throw new UserAleadyExistsException("이미 존재하는 이메일입니다.");
        }

        //생성
        Member member = Member.builder()
                .email(signupDto.getEmail())
                .name(signupDto.getUserName())
                .userPwd(passwordEncoder.encode(signupDto.getUserPwd()))
                .build();

        memberRepository.save(member);
        return member;
    }



    @Override
    public Optional<InfoDto> findInfoDtoByEmail(String email) {

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException());

        Optional<SocialLogin> latestLogin = member.getSocialLogins()
                .stream().max(Comparator.comparing(SocialLogin::getLoginTime));

        InfoDto.InfoDtoBuilder builder = InfoDto.builder()
                 .email(member.getEmail())
                 .userName(member.getName())
                 .updatedAt(LocalDateTime.now());

        //소셜타입이 존재한다면 빌더로 넣어줘
        latestLogin.map(SocialLogin::getSocialType).ifPresent(builder::socialType);

        InfoDto dto = builder.build();
        return Optional.of(dto);
    }

    @Override
    public Boolean findByCheckEmail(String email) {
// 1. 이메일을 확인한다 -> 이메일이 있으면  true / 이메일이 없으면  false로 넘긴다

        Optional<Member> member = memberRepository.findByEmail(email);
        if (!member.isPresent()) {
            return false;
        }
        return true;

    }

}
