package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Member;

import java.util.Optional;

public interface MemberRepository {

    Optional<Member> findOne(Long id);



    Long findByUserId(String userId);

    Optional<Member> loginUser(String userId, String userPwd);

    Long save(Member member);

    void deleteMember(Member member);


}
