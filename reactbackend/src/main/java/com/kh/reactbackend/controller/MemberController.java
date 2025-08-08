package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.AccessTokenDto;
import com.kh.reactbackend.dto.KakaoProfileDto;
import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.dto.MemberDto.InfoDto;
import com.kh.reactbackend.dto.RedirectDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.enums.SocialType;
import com.kh.reactbackend.exception.UserNotFoundException;
import com.kh.reactbackend.oauth.JwtTokenProvider;
import com.kh.reactbackend.service.KakaoService;
import com.kh.reactbackend.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v2/member")
@CrossOrigin(origins="http://localhost:5173")
public class MemberController {

    private final MemberService memberService;
    private final KakaoService kakaoService;
    private final JwtTokenProvider jwtTokenProvider;

    //session login
    @PostMapping("/login")
    public ResponseEntity<?> sessionLogin(@RequestBody MemberDto.LoginDto loginDto, HttpServletRequest httpRequest){


        Member member = memberService.findbyMember(loginDto.getEmail(), loginDto.getUserPwd());
        // Member가 없으면
        if(member == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
        //2. 세션 생성 및 사용자 정보 저장
        HttpSession session = httpRequest.getSession(true);
        session.setAttribute("member", member);

        return ResponseEntity.ok(member);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> sessionLogout(HttpServletRequest httpServletRequest){

        //현재 요청과 연관된 세션이 존재하면 반환, 없으면 null을 반환해라
        HttpSession session = httpServletRequest.getSession(false);

        if(session != null){
            session.invalidate();
        }
        return ResponseEntity.ok("로그아웃 완료");
    }

    //이메일 회원가입
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody MemberDto.Response signupDto){
        Member member = memberService.addMember(signupDto);
        return new ResponseEntity<>(member.getEmail(),HttpStatus.OK) ;
    }

    //jwtLgoin
    @PostMapping("/jwtLogin")
    public  ResponseEntity<?> jwtLogin(@RequestBody MemberDto.LoginDto loginDto){

        Member member = memberService.findbyMember(loginDto.getEmail(), loginDto.getUserPwd());


        String jwtToken = jwtTokenProvider.createToken(member.getEmail(), member.getRole().toString());
        Map<String, Object> loginInfo = new HashMap<>();
        loginInfo.put("token",jwtToken);
        return new ResponseEntity<>(loginInfo, HttpStatus.OK);
    }

    //회원정보 가져오기
    @GetMapping("/me")
    public ResponseEntity<?> getMemberInfo(){

        String email = jwtTokenProvider.getUserIdFromToken();

        System.out.println("test" + email);

        Optional <MemberDto.InfoDto> member = memberService.findInfoDtoByEmail(email);

        return ResponseEntity.ok(member);
    }

    @PostMapping("checkEmail")
    public  ResponseEntity<Boolean> checkEmail(@RequestBody MemberDto.CheckEmailDto request){
      boolean res = memberService.findByCheckEmail(request.getEmail());
        return ResponseEntity.ok(res);
    }



    //kakao login
//    @PostMapping("/kakao/login")
//    public  ResponseEntity<?> snsLogin(@RequestBody RedirectDto redirectDto){
//        AccessTokenDto accessTokenDto = kakaoService.getAccessToken(redirectDto.getCode());
//        KakaoProfileDto kakaoProfileDto = kakaoService.getKakaoProfile(accessTokenDto.getAccess_token());
////        Member orignMember = memberService.getmemberbySocialId(kakaoProfileDto.getId(), SocialType.KAKAO);
//
//        if(orignMember == null){
//            orignMember = memberService.createOauth(
//                    kakaoProfileDto.getId(),
//                    kakaoProfileDto.getKakao_account().getProfile().getNickname(),
//                    kakaoProfileDto.getKakao_account().getEmail(),
//                    SocialType.KAKAO);
//        };
//
//        String jwtToken = jwtTokenProvider.createToken(orignMember.getEmail(), orignMember.getRole().toString());
//        Map<String, Object> loginInfo = new HashMap<>();
//        loginInfo.put("token",jwtToken);
//        return  new ResponseEntity<>(loginInfo, HttpStatus.OK);
//    }
}
