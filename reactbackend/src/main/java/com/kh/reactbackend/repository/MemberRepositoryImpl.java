package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
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
        // getSingleResult()  같은 경우는 결과를 받지 못하면 바로 에러를 발생하기 때문에
        // 일단 리스트로 받고 예외를 처리해야 한다. try catch로  return Optional.empty();
        // 혹은 아래와 같이 처리
            String query = "select m from Member m where m.userId = :userId and m.userPwd = :userPwd";
            List<Member> loginMember = em.createQuery(query, Member.class)
                    .setParameter("userId",userId)
                    .setParameter("userPwd",userPwd)
                    .getResultList();

            return loginMember.stream().findFirst();
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
