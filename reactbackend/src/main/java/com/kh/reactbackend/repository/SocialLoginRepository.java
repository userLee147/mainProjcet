package com.kh.reactbackend.repository;


import com.kh.reactbackend.entity.SocialLogin;
import com.kh.reactbackend.enums.SocialType;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocialLoginRepository extends JpaRepository<SocialLogin,Long> {

    Optional<SocialLogin> findBySocialIdAndSocialType(String openId, SocialType socialType);

}
