package com.example.jwtsecurity.repo;

import com.example.jwtsecurity.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
