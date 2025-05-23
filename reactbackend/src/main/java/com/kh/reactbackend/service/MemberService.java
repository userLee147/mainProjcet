package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;

import java.util.Optional;

public interface MemberService {
    MemberDto.Response getmember(Long id);

    //유저의 pk가져오기
    Long findByUserId(String userId);

    // 로그인 기능(유저정보가져와서 log 정보도 바꿈)
    MemberDto.Response loginMember(MemberDto.Update loginUser);




    // log상태만 변경 결국 멤머의 객체를 가져옴
    MemberDto.Response LogOutMember(Boolean log, String userId);

    Long registraitonMember(MemberDto.Response userDto);


    Long checkUserId(String userId);

    void deleteMember(String userId);

    MemberDto.Response getMemberInfo(String userId);

    MemberDto.Response updateMember(MemberDto.UpdateUserDto updateUser);


}
