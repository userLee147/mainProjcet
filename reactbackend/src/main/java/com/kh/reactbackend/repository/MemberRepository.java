package com.kh.reactbackend.repository;

import com.kh.reactbackend.dto.MemberDto.InfoDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.entity.SocialLogin;
import com.kh.reactbackend.enums.SocialType;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {


    Optional<Member> findByEmailAndUserPwd(String userId, String userPwd);

//    Optional<Member> findBySocialIdAndSocialType(String socialId, SocialType socialType);

    boolean existsByEmail(String email);

    Optional<Member> findByEmail(String email);




}
