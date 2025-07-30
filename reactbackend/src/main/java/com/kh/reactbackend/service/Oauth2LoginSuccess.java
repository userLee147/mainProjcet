package com.kh.reactbackend.service;

import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.entity.SocialLogin;
import com.kh.reactbackend.enums.SocialType;
import com.kh.reactbackend.oauth.JwtTokenProvider;
import com.kh.reactbackend.repository.MemberRepository;
import com.kh.reactbackend.repository.SocialLoginRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class Oauth2LoginSuccess extends SimpleUrlAuthenticationSuccessHandler {

    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final SocialLoginRepository socialLoginRepository;



    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        String registrationId = ((OAuth2AuthenticationToken) authentication).getAuthorizedClientRegistrationId()
                .toUpperCase();
        SocialType socialType = SocialType.valueOf(registrationId); //google 또는 kakao


        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        String openId = null;
        String email = null;
        String name = null;

        if (socialType == SocialType.GOOGLE) {
            openId = oAuth2User.getAttribute("sub");
            email = oAuth2User.getAttribute("email");
            name = oAuth2User.getAttribute("name");
        } else if (socialType == SocialType.KAKAO) {

            Map<String, Object> kakaoAccount = oAuth2User.getAttribute("kakao_account");
            Map<String, Object> profile = (Map<String, Object>) kakaoAccount.get("profile");

            openId = oAuth2User.getAttribute("id").toString();
            email = kakaoAccount.get("email").toString();
            name = profile.get("nickname").toString();
        } else if (socialType == SocialType.NAVER){

            Map<String, Object> res = oAuth2User.getAttribute("response");
            openId = res.get("id").toString();
            email = res.get("email").toString();
            name= res.get("name").toString();

        };

        SocialLogin socialLogin = socialLoginRepository.findBySocialIdAndSocialType(openId, socialType).orElse(null);

        Member member;

        if (socialLogin != null) {
            member = socialLogin.getMember();
            socialLogin.changeloginTime();

        } else {
            // 이메일로 멤버 조회
            member = memberRepository.findByEmail(email).orElse(null);

            if (member == null) {
                member = Member.builder()
                        .email(email)
                        .name(name)
                        .userPwd("")
                        .build();

                memberRepository.save(member);
            }

            // 새로운 소셜 로그인 정보 저장
            SocialLogin newLogin = SocialLogin.builder()
                    .member(member)
                    .socialId(openId)
                    .socialType(socialType)
                    .build();

            socialLoginRepository.save(newLogin);
        }
        String jwtToken = jwtTokenProvider.createToken(member.getEmail(), member.getRole().toString());


        Cookie jwtCookie = new Cookie("token", jwtToken);
        jwtCookie.setPath("/"); //모든 경로에서 쿠키 사용가능
        response.addCookie(jwtCookie);
        response.sendRedirect("http://localhost:5173");

    }

}