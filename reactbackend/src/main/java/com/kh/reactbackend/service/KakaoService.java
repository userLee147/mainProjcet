package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.AccessTokenDto;
import com.kh.reactbackend.dto.KakaoProfileDto;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

@Service
public class KakaoService {

    @Value("${oauth.kakao.client_id}")
    private String clientId;
    @Value("${oauth.kakao.redirect_uri}")
    private String redirectUri;

    // url로 정보를 담아 보내준다.
    public AccessTokenDto getAccessToken(String code) {

        //카카오로 보내야 되기 때문에 내 서버가 클라이언트가 된다.
        //클라이언트로 요청을 보내줄 수 있는 객체
        RestClient restClient = RestClient.create();

        // 정보를 넣을 파람을 생성할 객체
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();

        params.add("grant_type","authorization_code");
        params.add("code", code);
        params.add("client_id",clientId);
        params.add("redirect_uri",redirectUri);

        ResponseEntity<AccessTokenDto> response = restClient.post()
                .uri("https://kauth.kakao.com/oauth/token")
                .header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
                .body(params)
                // 응답을 받을꺼야!
                .retrieve()
                // dto에 담겨졌으면 좋겠어
                .toEntity(AccessTokenDto.class);

        return response.getBody();
    }

    public KakaoProfileDto getKakaoProfile(String accessToken) {

        System.out.println("test"+ accessToken);
        RestClient restClient = RestClient.create();

        ResponseEntity<KakaoProfileDto> response = restClient.get()
                .uri("https://kapi.kakao.com/v2/user/me")
                .header("Authorization", "Bearer " + accessToken)
                .retrieve()
                .toEntity(KakaoProfileDto.class);

        return response.getBody();

    }
}
