package com.example.jwtsecurity.service;

import com.example.jwtsecurity.domain.Role;
import com.example.jwtsecurity.domain.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username,String roleName);
    User getUser(String username);
    List<User> getUsers();

}
