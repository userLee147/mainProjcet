package com.kh.reactbackend.config;

import com.kh.reactbackend.oauth.JwtTokenFilter;
import com.kh.reactbackend.service.Oauth2LoginSuccess;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenFilter jwtTokenFilter;
    private final Oauth2LoginSuccess oauth2LoginSuccess;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable) //CSRF 보안기능 비활성 -> 세션을 통한 공격(REST에서는 필요없음)
                .httpBasic(AbstractHttpConfigurer::disable) //HTTP Basic인증 비활성(아이디와 비밀번호를 HTTP요청 헤더에 담아서 인증하는 방식)
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/",
                                "/oauth2/**",
                                "/css/**",
                                "/js/**",
                                "/public/**",
                                "/v2/member/login",
                                "/v2/member/jwtLogin",
                                "/v2/member/logout",
                                "/v2/member/signup",
                                "/v2/member/kakao/login",
                                "/email/*",
                                "/connect/**"
                        ).permitAll()
                        .anyRequest().authenticated() // 위의 요청경로를 제외한 나머지 경로는 인증
                )
                .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
                // OAuth2 로그인 성공시 실행될 핸드러를 설정
                .oauth2Login(o -> o.successHandler(oauth2LoginSuccess))
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        //요청을 허용할 도메인들
        configuration.setAllowedOrigins(List.of("http://localhost:5173"));

        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        //자격증명(쿠키, 인증 헤더) 허용
        configuration.setAllowCredentials(true);

        //위의 설정들은 모든 URL패턴에 적용
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}