package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryImpl implements MemberRepository{

    @PersistenceContext
    private EntityManager em;

    @Override
    public Optional<Member> findOne(Long id) {
        return Optional.ofNullable(em.find(Member.class, id));
    }


    @Override
    public Optional<Member> loginUser(String userId, String userPwd) {
        String query = "select m from Member m where m.userId = :userId and m.userPwd = :userPwd";
        Member loginMember = em.createQuery(query, Member.class)
                .setParameter("userId",userId)
                .setParameter("userPwd",userPwd)
                .getSingleResult();
        return Optional.ofNullable(loginMember);
    }


    @Override
    public Long findByUserId(String userId) {
        Long userCode;
        try {
            String query ="select m.code from Member m where m.userId = :userId";
            userCode = em.createQuery(query,Long.class)
                    .setParameter("userId",userId)
                    .getSingleResult();
        }catch (NoResultException e){
            userCode = null;
        }

        return userCode;
    }

    @Override
    public Long save(Member member) {
        em.persist(member);
        return member.getCode();
    }

    @Override
    public void deleteMember(Member member) {
        em.remove(member);
    }


}
