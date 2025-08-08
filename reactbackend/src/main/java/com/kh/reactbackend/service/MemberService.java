package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.MemberDto.InfoDto;
import com.kh.reactbackend.dto.MemberDto.Response;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.enums.SocialType;
import java.util.Optional;

public interface MemberService {


    //세션로그인
    Member findbyMember(String email, String userPwd);

//    Member getmemberbySocialId(String socialId, SocialType socialType);

    Member createOauth(String socialId,String name,String email, SocialType socialType);

    //회원가입
    Member addMember(Response signupDto);

    // 사용자 정보가져옥
    Optional<InfoDto> findInfoDtoByEmail(String email);

    Boolean findByCheckEmail(String email);
}
