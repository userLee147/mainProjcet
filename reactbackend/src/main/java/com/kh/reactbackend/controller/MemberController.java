package com.kh.reactbackend.controller;


import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    //연습
//    @GetMapping("/{code}")
//    public ResponseEntity<MemberDto.Response> GetMember(@PathVariable("code") Long id){
//        return ResponseEntity.ok(memberService.getmember(id));
//    }

    //유저정보가져오기
    @GetMapping("/{userId}")
    public ResponseEntity<MemberDto.Response> GetMemberInfo(@PathVariable("userId") String userId){
        return ResponseEntity.ok(memberService.getMemberInfo(userId));
    }

    // 로그인 기능
    @PostMapping()
    public ResponseEntity<MemberDto.Response> loginMember(@RequestBody MemberDto.Update loginUser){

        return ResponseEntity.ok(memberService.loginMember(loginUser));
    }

    // 로그아웃
    @PatchMapping()
    public ResponseEntity<MemberDto.Response> logOutMember(@RequestParam Boolean log, String userId){
        return ResponseEntity.ok(memberService.LogOutMember(log, userId));
    }

    //아이디중복체크
    @GetMapping()
    public ResponseEntity<Long> checkUserId(@RequestParam String userId){
        return ResponseEntity.ok(memberService.checkUserId(userId));
    }

    //회원가입
    @PostMapping("/addUser")
    public ResponseEntity<Long> registrationMember(@RequestBody MemberDto.Response userDto){
        return ResponseEntity.ok(memberService.registraitonMember(userDto));
    }

    //회원탈퇴
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteMember(@PathVariable String userId){
        memberService.deleteMember(userId);
        //리턴값이 없으면 404가 뜨니까 ok를 보내줘야함!!
        return ResponseEntity.ok().build();
    }

    //유저정보수정
    @PatchMapping("/{userId}")
    public ResponseEntity<MemberDto.Response> updateMember(@PathVariable String userId, @RequestBody MemberDto.UpdateUserDto updateUser){
        return ResponseEntity.ok(memberService.updateMember(updateUser));
    }



}
