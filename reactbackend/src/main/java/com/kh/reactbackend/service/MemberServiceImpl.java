package com.kh.reactbackend.service;


import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    //유저코드로 멤버가져오기
    @Override
    public MemberDto.Response getmember(Long id) {
        return memberRepository.findOne(id).map(MemberDto.Response::toDto)
                .orElseThrow(()-> new EntityNotFoundException("조회된 회원이 없습니다."));
    }

    // 유저 아이디로 유저 코드 가져오기
    @Override
    public Long findByUserId(String userId) {
       return memberRepository.findByUserId(userId);
    }


    //로그인 기능
    @Override
    public MemberDto.Response loginMember(MemberDto.Update loginUser) {
        Member member = memberRepository.loginUser(loginUser.getUserId(), loginUser.getUserPwd())
                .orElseThrow(()-> new EntityNotFoundException("조회된 회원이 없습니다."));

        member.updateLogin(loginUser.getLog());

        return MemberDto.Response.toDto(member);
    }
    //로그아웃 기능
    @Override
    public MemberDto.Response LogOutMember(Boolean log, String userId) {
        //0이면 유저정보가 없는 것
        Long userCode = memberRepository.findByUserId(userId);

        Member member = memberRepository.findOne(userCode).orElseThrow(()-> new EntityNotFoundException("유저정보를 찾아오지 못했습니다."));

        member.updateLogin(log);
        return MemberDto.Response.toDto(member);
    }

    @Override
    public Long registraitonMember(MemberDto.Response userDto) {
        Member member = userDto.toEntity();
        return memberRepository.save(member);
    }

    @Override
    public Long checkUserId(String userId) {
        return memberRepository.findByUserId(userId);
    }

    @Override
    public void deleteMember(String userId) {
        Member member = memberRepository.findOne(findByUserId(userId)).orElseThrow(()->new EntityNotFoundException("유저정보가 없습니다."));
        memberRepository.deleteMember(member);
    }

    @Override
    public MemberDto.Response getMemberInfo(String userId) {
        Long userCode = memberRepository.findByUserId(userId);

        return getmember(userCode);
    }

    @Override
    public MemberDto.Response updateMember(MemberDto.UpdateUserDto updateUser) {

        Member member = memberRepository.findOne(updateUser.getCode()).orElseThrow(()->new EntityNotFoundException("유저정보가 없습니다."));
        if(updateUser.getEmail() != null ){
            member.changeEmail(updateUser.getEmail());
        }
        if(updateUser.getName() != null){
            member.changeName(updateUser.getName());
        }
        if(updateUser.getAge() != 0){
            member.changeAge(updateUser.getAge());
        }

        return MemberDto.Response.toDto(member);
    }

}
