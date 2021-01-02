package com.reg.service.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reg.service.api.model.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findByEmail(String email);
    User findByName(String name);
}
